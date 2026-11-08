import { range, addDays, dow, slug, fmtShort } from "./util.js";

// "Title | details | minutes" — everything after the title is optional.
export function parseLines(text, defMin) {
  return String(text || "").split("\n").map(l => l.trim()).filter(Boolean).map(line => {
    const parts = line.split("|").map(s => s.trim());
    let t = parts[0], d = "", m = defMin;
    for (const p of parts.slice(1)) { if (/^\d+\s*(min)?$/i.test(p)) m = parseInt(p); else if (p) d = d ? d + " · " + p : p; }
    return { t, d, m };
  });
}

export function subjectItems(s) {
  const seen = {};
  const mkId = (kind, t) => { const base = `${s.id}:${kind}:${slug(t)}`; seen[base] = (seen[base] || 0) + 1; return seen[base] > 1 ? `${base}-${seen[base]}` : base; };
  const topics = parseLines(s.topicsText, +s.topicMin || 60).map(x => ({ ...x, kind: "study", s: s.id, id: mkId("t", x.t) }));
  const labsRaw = parseLines(s.labsText, +s.labMin || 45);
  const per = Math.max(1, +s.labsPer || 1), labs = [];
  for (let i = 0; i < labsRaw.length; i += per) {
    const g = labsRaw.slice(i, i + per);
    const t = g.length === 1 ? g[0].t : `Labs ${i + 1}–${i + g.length}`;
    const d = g.length === 1 ? g[0].d : g.map(x => x.t).join(" · ");
    labs.push({ t, d, m: g.reduce((a, x) => a + x.m, 0), kind: "lab", s: s.id, id: mkId("l", g.map(x => x.t).join(" ")) });
  }
  // interleave labs evenly between topics so practice follows theory
  if (!topics.length) return labs;
  if (!labs.length) return topics;
  const out = []; let li = 0;
  topics.forEach((t, i) => {
    out.push(t);
    const want = Math.round(((i + 1) / topics.length) * labs.length);
    while (li < want) out.push(labs[li++]);
  });
  return out;
}

export const examOf = (plan, s) => s.examDate || plan.examStart;

export function capacity(plan, iso) {
  const st = plan.settings, d = dow(iso);
  if (+st.restDay === d) return +st.restMin;
  return d === 0 || d === 6 ? +st.weekendMin : +st.weekdayMin;
}

export function summary(plan) {
  const subs = plan.subjects.filter(s => s.name.trim());
  const work = subs.reduce((a, s) => a + subjectItems(s).reduce((b, x) => b + x.m, 0), 0);
  const dates = subs.map(s => examOf(plan, s)).concat(subs.length ? [] : [plan.examStart]).sort();
  const firstExam = dates[0];
  const revStart = maxISO(addDays(firstExam, -(+plan.settings.revisionDays || 0)), addDays(plan.start, 1));
  const learn = plan.start < revStart ? range(plan.start, addDays(revStart, -1)) : [];
  const cap = learn.reduce((a, d) => a + capacity(plan, d) - (isRest(plan, d) ? CATCHUP : 0), 0);
  return { subs, work, cap, firstExam, lastExam: dates[dates.length - 1], revStart, learn };
}
const CATCHUP = 30;
const isRest = (plan, iso) => +plan.settings.restDay === dow(iso);
const maxISO = (a, b) => (a > b ? a : b);

export function generate(plan) {
  const { subs, work, cap, firstExam, lastExam, revStart, learn } = summary(plan);
  const days = {};
  if (!(plan.start < firstExam)) return { days, warning: "Your start date needs to be before your first exam." };
  range(plan.start, addDays(lastExam, -1)).forEach(d => (days[d] = []));
  const examDates = new Set(subs.map(s => examOf(plan, s)));
  const scale = cap ? Math.max(0.6, work / cap) : 1;
  let warning = "";
  if (work > cap * 1.05) warning = `This is a tight plan: about ${Math.round((work / Math.max(1, learn.length)) / 6) / 10} h/day of study. Add more days, raise your hours, or lower the minutes per topic.`;

  // 1) Learning phase: balance subjects by how far through they are.
  const queues = subs.map(s => ({ s, items: subjectItems(s), done: 0 }));
  queues.forEach(q => (q.total = q.items.reduce((a, x) => a + x.m, 0) || 1));
  const frac = q => q.done / q.total;
  let prevFirst = null;
  for (const d of learn) {
    if (examDates.has(d)) continue;
    let room = capacity(plan, d) * scale - (isRest(plan, d) ? CATCHUP : 0);
    const used = new Set();
    while (true) {
      const cands = queues.filter(q => q.items.length).sort((a, b) =>
        (used.has(a.s.id) - used.has(b.s.id)) || (frac(a) - frac(b)) || ((a.s.id === prevFirst) - (b.s.id === prevFirst)) || (examOf(plan, a.s) < examOf(plan, b.s) ? -1 : 1));
      const pick = cands.find(q => q.items[0].m <= room + 10 || !days[d].length);
      if (!pick || room <= 15) break;
      const it = pick.items.shift();
      days[d].push({ ...it }); pick.done += it.m; room -= it.m; used.add(pick.s.id);
      if (days[d].length === 1) prevFirst = pick.s.id;
    }
  }
  // anything left over goes to the lightest learning days
  const left = queues.flatMap(q => q.items);
  const load = d => days[d].reduce((a, t) => a + t.m, 0);
  const learnDays = learn.filter(d => !examDates.has(d));
  for (const it of left) {
    const target = learnDays.length ? learnDays.reduce((best, d) => (load(d) / capacity(plan, d) < load(best) / capacity(plan, best) ? d : best)) : null;
    if (target) days[target].push({ ...it });
  }
  // spare learning days at the end -> revision passes
  const spare = learnDays.filter(d => !days[d].length);
  if (spare.length && subs.length) {
    const chunks = [];
    subs.forEach(s => {
      const items = subjectItems(s);
      for (let i = 0; i < items.length; i += 3) chunks.push({ s, items: items.slice(i, i + 3) });
    });
    let ci = 0;
    for (const d of spare) {
      let room = capacity(plan, d) - (isRest(plan, d) ? CATCHUP : 0);
      while (room > 30 && ci < chunks.length * 2) {
        const c = chunks[ci % chunks.length]; ci++;
        days[d].push({ id: `rev-${d}-${days[d].length}`, s: c.s.id, kind: "revise", m: 60, t: `Revise: ${c.items.map(x => x.t).join(", ")}`.slice(0, 90), d: "Re-read your notes, then close them and write the key points from memory." });
        room -= 60;
      }
    }
  }
  learnDays.filter(d => isRest(plan, d)).forEach(d => days[d].push({ id: `cu-${d}`, s: null, kind: "catchup", m: CATCHUP, t: "Catch-up & rest", d: "Finish anything you missed this week. On track? Take the rest of the day off." }));

  // 2) Final revision before the first exam. The first exam's subject comes last.
  const rev = range(revStart, addDays(firstExam, -1)).filter(d => d >= plan.start);
  const asc = [...subs].sort((a, b) => (examOf(plan, a) < examOf(plan, b) ? -1 : 1));
  if (rev.length && asc.length) {
    const slotsDays = rev.slice(0, -1), n = slotsDays.length * 2;
    const seq = Array.from({ length: n }, (_, i) => asc[(n - 1 - i) % asc.length]);
    slotsDays.forEach((d, di) => {
      const c = capacity(plan, d);
      [seq[di * 2], seq[di * 2 + 1]].filter((s, i, arr) => s && arr.indexOf(s) === i).forEach((s, j, arr) => {
        const topics = subjectItems(s).map(x => x.t).slice(0, 6).join(", ");
        days[d].push({ id: `rev-${d}-${j}`, s: s.id, kind: "revise", m: Math.round(c / arr.length / 5) * 5,
          t: (di + j) % 2 ? `Self-test — ${s.name}` : `Revise — ${s.name}`,
          d: (di + j) % 2 ? "Timed practice: past papers or your own questions. Check answers and note weak spots." : `Go through everything: ${topics}${subjectItems(s).length > 6 ? "…" : ""}. Redo diagrams/code from memory.` });
      });
    });
    lightDay(days, rev[rev.length - 1], subs.filter(s => examOf(plan, s) === firstExam));
  }
  // 3) Days between exams -> revise the next exam's subjects.
  range(addDays(firstExam, 1), addDays(lastExam, -1)).forEach(d => {
    if (examDates.has(d)) return;
    const next = asc.map(s => examOf(plan, s)).find(x => x > d);
    const nextSubs = subs.filter(s => examOf(plan, s) === next);
    if (addDays(d, 1) === next) return lightDay(days, d, nextSubs);
    const c = capacity(plan, d);
    const each = Math.round(c / nextSubs.length / 2 / 5) * 5;
    nextSubs.forEach((s, j) => days[d].push(
      { id: `rev-${d}-${j}`, s: s.id, kind: "revise", m: each, t: `Revise — ${s.name}`, d: `Exam on ${fmtShort(next)}. Go through every topic and redo key diagrams/code.` },
      { id: `test-${d}-${j}`, s: s.id, kind: "revise", m: each, t: `Self-test — ${s.name}`, d: "Timed practice: past papers or your own questions. Check answers and note weak spots." }));
  });
  return { days, warning };
}

function lightDay(days, d, subs) {
  if (!days[d]) return;
  const names = subs.map(s => s.name).join(" & ") || "your first exam";
  days[d].push({ id: `light-${d}`, s: subs.length === 1 ? subs[0].id : null, kind: "revise", m: 60, t: `Light day — skim ${names}`, d: "Only your one-page notes, formulas and diagrams. No new topics." });
  days[d].push({ id: `prep-${d}`, s: null, kind: "catchup", m: 15, t: "Prep & sleep early", d: "Pack hall ticket, ID, pens. Sleep on time." });
}
