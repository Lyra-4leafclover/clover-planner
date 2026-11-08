import { CONTACT } from "./config.js";
import { $, $$, esc, uid, addDays, range, fmtDay, fmtShort, fmtLong, todayISO, diffDays, dow, hours, COLORS, WEEKDAYS } from "./util.js";
import * as store from "./store.js";
import { generate, summary, examOf, capacity } from "./generate.js";
import { encodePlan, decodePlan } from "./share.js";

const app = $("#app");
const GENERAL = { name: "General", color: "#e8b46c" };
let filter = null;


function route() {
  const [, view, arg] = location.hash.split("/");
  filter = view === "plan" ? filter : null;
  if (view === "plan" && store.getPlanner(arg)) return renderPlan(store.getPlanner(arg));
  if (view === "edit" && store.getPlanner(arg)) return renderEdit(store.getPlanner(arg));
  if (view === "share" && arg) return renderShare(arg);
  renderHome();
}
const go = h => { location.hash = h; window.scrollTo(0, 0); };
const subjOf = (p, id) => p.subjects.find(s => s.id === id) || GENERAL;
const allTasks = p => Object.values(p.days).flat();
const progress = p => { const t = allTasks(p); const d = t.filter(x => p.done[x.id]).length; return { t: t.length, d, pct: t.length ? Math.round((d / t.length) * 100) : 0 }; };
function planRange(p) {
  const keys = Object.keys(p.days).sort();
  const ex = p.subjects.map(s => examOf(p, s)).concat([p.examStart]).sort();
  return { from: keys[0] || p.start, to: keys[keys.length - 1] || addDays(p.examStart, -1), first: ex[0], last: ex[ex.length - 1] };
}
function toast(msg) {
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t);
  setTimeout(() => t.classList.add("show"), 10); setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 300); }, 2400);
}
function download(name, text) {
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], { type: "application/json" })); a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
function pickFile(onLoad) {
  const i = document.createElement("input"); i.type = "file"; i.accept = ".json,application/json";
  i.onchange = () => { const f = i.files[0]; if (!f) return; f.text().then(onLoad); }; i.click();
}
function importText(txt) {
  try {
    const data = JSON.parse(txt);
    const list = Array.isArray(data.planners) ? data.planners : [data];
    if (!list.every(p => p && p.subjects && p.start)) throw 0;
    list.forEach(p => store.importPlanner(p));
    toast(`Imported ${list.length} planner${list.length > 1 ? "s" : ""}`); renderHome();
  } catch { alert("That file doesn't look like a Clover Planner backup."); }
}

/* ---------------- Home ---------------- */
function renderHome() {
  document.title = "Clover Planner — study plans that feel doable";
  const ps = store.planners();
  app.innerHTML = `
  <header class="hero">
    <picture><source media="(max-width:700px)" srcset="assets/hero-sm.webp"><img src="assets/hero.webp" alt="" class="hero-art"></picture>
    <div class="hero-text">
      <div class="brand"><img src="assets/clover.png" alt=""> Clover Planner</div>
      <h1>Turn your syllabus into a plan that actually feels doable.</h1>
      <p>Add your subjects and exam dates. Clover makes a realistic day-by-day plan with breaks, catch-up days and revision built in. Then change anything you like.</p>
      <div class="row"><button class="btn dark" id="new">+ New planner</button><button class="btn" id="imp">Open a backup file</button></div>
    </div>
  </header>
  <main class="wrap">
    <h2 class="sec">My planners</h2>
    ${ps.length ? "" : `<p class="muted">No planners yet — make your first one above.</p>`}
    <div class="cards">${ps.map(p => {
      const pr = progress(p), r = planRange(p), made = Object.keys(p.days).length;
      return `<article class="pcard" data-id="${p.id}">
        <div class="pc-top"><h3>${esc(p.name)}</h3><span class="pill">${made ? pr.pct + "%" : "draft"}</span></div>
        <p class="muted">${fmtShort(p.start)} → exams ${fmtShort(r.first)} · ${p.subjects.length} subject${p.subjects.length === 1 ? "" : "s"}</p>
        <div class="dots">${p.subjects.map(s => `<i style="--c:${s.color}" title="${esc(s.name)}"></i>`).join("")}</div>
        <div class="bar"><i style="width:${pr.pct}%"></i></div>
        <div class="row">
          <button class="btn dark sm" data-act="open">${made ? "Open" : "Finish setup"}</button>
          <button class="btn sm" data-act="edit">Edit</button>
          <button class="btn sm" data-act="dup">Duplicate</button>
          <button class="btn sm ghost" data-act="del">Delete</button>
        </div></article>`;
    }).join("")}</div>
    ${ps.length ? `<p class="muted small">Everything is saved in this browser only. <a href="#" id="exp">Download a backup</a> to keep it safe or move it to another device.</p>` : ""}
    <h2 class="sec">How it works</h2>
    <div class="steps">
      <div><b>1 · Add your subjects</b>Paste the topics and labs from your syllabus, one per line, and set your exam dates.</div>
      <div><b>2 · Get a day-by-day plan</b>Clover mixes subjects every day, follows theory with practice, and adds catch-up days and final revision.</div>
      <div><b>3 · Make it yours</b>Edit, add, delete or drag tasks to another day. Tick things off and share your plan with friends.</div>
    </div>
    ${CONTACT.links.length ? `<h2 class="sec" id="contact">Contact</h2>
    <section class="panel contact"><img src="assets/clover.png" alt=""><p>${esc(CONTACT.note)}</p>
      <div class="row">${CONTACT.links.map(l => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${ICONS[l.icon] || ICONS.web}${esc(l.label)}</a>`).join("")}</div>
    </section>` : ""}
  </main>
  ${footer()}`;
  $("#new").onclick = () => { const p = store.blankPlanner(); p.subjects.push(newSubject(0)); store.putPlanner(p); go(`#/edit/${p.id}`); };
  $("#imp").onclick = () => pickFile(importText);
  $("#exp") && ($("#exp").onclick = e => { e.preventDefault(); download("clover-planner-backup.json", store.exportAll()); });
  $$(".pcard").forEach(c => c.onclick = e => {
    const act = e.target.dataset.act, p = store.getPlanner(c.dataset.id);
    if (act === "open") go(Object.keys(p.days).length ? `#/plan/${p.id}` : `#/edit/${p.id}`);
    if (act === "edit") go(`#/edit/${p.id}`);
    if (act === "dup") { const cp = store.importPlanner(p, { keepProgress: false }); cp.name += " (copy)"; store.putPlanner(cp); renderHome(); }
    if (act === "del" && confirm(`Delete “${p.name}”? This can't be undone.`)) { store.deletePlanner(p.id); renderHome(); }
  });
}
const ICONS = {
  x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  web: `<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></g></svg>`,
};
const footer = () => `<footer class="foot"><img src="assets/clover.png" alt=""> Clover Planner · made with care by ${esc(CONTACT.name)} · <a href="#/">My planners</a>
  ${CONTACT.links.length ? `<span class="foot-links">${CONTACT.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener" title="${esc(l.label)}" aria-label="${esc(l.label)}">${ICONS[l.icon] || ICONS.web}</a>`).join("")}</span>` : ""}</footer>`;
const newSubject = i => ({ id: uid("s"), name: "", color: COLORS[i % COLORS.length], examDate: "", topicMin: 60, labMin: 45, labsPer: 2, topicsText: "", labsText: "" });

/* ---------------- Setup / edit ---------------- */
function renderEdit(p) {
  document.title = `Set up · ${p.name}`;
  const st = p.settings;
  const hasPlan = Object.keys(p.days).length > 0;
  app.innerHTML = `
  <main class="wrap narrow">
    <a class="back" href="#/">← My planners</a>
    <h1 class="title">Set up your planner</h1>
    <p class="muted">Fill this in once. Clover will make your plan, and you can still change any day afterwards.</p>
    <section class="panel">
      <h2>The basics</h2>
      <div class="grid2">
        <label class="f"><span>Planner name</span><input id="f-name" value="${esc(p.name)}" placeholder="e.g. Semester 5 finals"></label>
        <label class="f"><span>Start studying on</span><input type="date" id="f-start" value="${p.start}"></label>
        <label class="f"><span>Exams start on</span><input type="date" id="f-exam" value="${p.examStart}"><small>If subjects have different exam dates, set them on each subject below.</small></label>
        <label class="f"><span>Final revision days</span><input type="number" min="0" max="14" id="f-rev" value="${st.revisionDays}"><small>Days right before exams with no new topics.</small></label>
      </div>
    </section>
    <section class="panel">
      <h2>Your study time</h2>
      <div class="grid2">
        <label class="f"><span>Weekdays (hours)</span><input type="number" step="0.5" min="0.5" max="14" id="f-wd" value="${st.weekdayMin / 60}"></label>
        <label class="f"><span>Weekends (hours)</span><input type="number" step="0.5" min="0.5" max="14" id="f-we" value="${st.weekendMin / 60}"></label>
        <label class="f"><span>Weekly catch-up day</span><select id="f-rest"><option value="-1">None</option>${WEEKDAYS.map((w, i) => `<option value="${i}" ${+st.restDay === i ? "selected" : ""}>${w}</option>`).join("")}</select><small>A lighter day to catch up on anything you missed.</small></label>
        <label class="f"><span>Catch-up day (hours)</span><input type="number" step="0.5" min="0.5" max="14" id="f-rm" value="${st.restMin / 60}"></label>
      </div>
    </section>
    <h2 class="sec">Subjects</h2>
    <p class="muted small">Write one topic per line. You can add details and minutes using “|”, like <code>Unit 3 — ELISA | principle and steps | 90</code>. Labs work the same way.</p>
    <div id="subs"></div>
    <button class="btn" id="add-sub">+ Add subject</button>
    <div class="sticky-bar">
      <div id="sum" class="sum"></div>
      <div class="row">
        ${hasPlan ? `<button class="btn" id="save-only">Save (keep my calendar)</button>` : ""}
        <button class="btn dark" id="make">${hasPlan ? "Save & re-make plan" : "Make my plan"}</button>
      </div>
    </div>
  </main>${footer()}`;

  const subsEl = $("#subs");
  const drawSubs = () => {
    subsEl.innerHTML = p.subjects.map((s, i) => `
    <section class="panel subj" data-i="${i}" style="--c:${s.color}">
      <div class="subj-head">
        <input class="subj-name" data-k="name" value="${esc(s.name)}" placeholder="Subject name">
        <button class="btn sm ghost" data-del="${i}" title="Remove subject">Remove</button>
      </div>
      <div class="swatches">${COLORS.map(c => `<button type="button" class="sw ${c === s.color ? "on" : ""}" style="--c:${c}" data-color="${c}" aria-label="colour ${c}"></button>`).join("")}</div>
      <div class="grid2">
        <label class="f"><span>Exam date (optional)</span><input type="date" data-k="examDate" value="${s.examDate || ""}"></label>
        <label class="f"><span>Minutes per topic</span><input type="number" min="10" step="5" data-k="topicMin" value="${s.topicMin}"></label>
      </div>
      <label class="f"><span>Topics / units — one per line</span><textarea rows="6" data-k="topicsText" placeholder="Unit 1 — Introduction&#10;Unit 2 — ...">${esc(s.topicsText)}</textarea></label>
      <details ${s.labsText ? "open" : ""}><summary>Labs / practicals${s.labsText ? ` (${s.labsText.split("\n").filter(x => x.trim()).length})` : ""}</summary>
        <label class="f"><span>Labs — one per line</span><textarea rows="5" data-k="labsText" placeholder="Lab 1 — ...&#10;Lab 2 — ...">${esc(s.labsText)}</textarea></label>
        <div class="grid2">
          <label class="f"><span>Minutes per lab</span><input type="number" min="5" step="5" data-k="labMin" value="${s.labMin}"></label>
          <label class="f"><span>Labs per session</span><input type="number" min="1" max="10" data-k="labsPer" value="${s.labsPer}"></label>
        </div>
      </details>
    </section>`).join("") || `<p class="muted">No subjects yet.</p>`;
  };
  const readBasics = () => {
    p.name = $("#f-name").value.trim() || "My exams";
    p.start = $("#f-start").value || p.start;
    p.examStart = $("#f-exam").value || p.examStart;
    Object.assign(st, {
      revisionDays: Math.max(0, +$("#f-rev").value || 0),
      weekdayMin: Math.round((+$("#f-wd").value || 2) * 60), weekendMin: Math.round((+$("#f-we").value || 3) * 60),
      restDay: +$("#f-rest").value, restMin: Math.round((+$("#f-rm").value || 1) * 60),
    });
  };
  const drawSum = () => {
    readBasics();
    const sm = summary(p), n = sm.subs.length;
    if (!(p.start < sm.firstExam)) { $("#sum").innerHTML = `<b class="warn">Your start date needs to be before your first exam.</b>`; return; }
    const tight = sm.work > sm.cap * 1.05;
    $("#sum").innerHTML = `<b>${diffDays(p.start, sm.firstExam)} days</b> until your first exam · ${n} subject${n === 1 ? "" : "s"} · about <b>${hours(sm.work)}</b> of study, and <b>${hours(sm.cap)}</b> of study time before revision
      ${tight ? `<br><span class="warn">That's a tight fit. Try more hours, fewer minutes per topic, or fewer revision days.</span>` : sm.work ? `<br><span class="ok">Fits nicely. Days will be a bit lighter than your max.</span>` : ""}`;
  };
  drawSubs(); drawSum();
  app.oninput = e => {
    const card = e.target.closest(".subj");
    if (card && e.target.dataset.k) {
      const s = p.subjects[card.dataset.i], k = e.target.dataset.k;
      s[k] = ["topicMin", "labMin", "labsPer"].includes(k) ? +e.target.value || 0 : e.target.value;
    }
    drawSum();
  };
  app.onclick = e => {
    const t = e.target;
    if (t.dataset.color) { const i = t.closest(".subj").dataset.i; p.subjects[i].color = t.dataset.color; drawSubs(); }
    if (t.dataset.del !== undefined && confirm("Remove this subject?")) { p.subjects.splice(+t.dataset.del, 1); drawSubs(); drawSum(); }
  };
  $("#add-sub").onclick = () => { p.subjects.push(newSubject(p.subjects.length)); drawSubs(); drawSum(); $$(".subj-name").pop().focus(); };
  const finish = make => {
    readBasics();
    p.subjects.forEach(s => (s.name = s.name.trim()));
    const named = p.subjects.filter(s => s.name);
    if (make) {
      if (!named.length) return alert("Add at least one subject with a name.");
      if (!named.some(s => s.topicsText.trim() || s.labsText.trim())) return alert("Add some topics or labs so Clover has something to plan.");
      if (hasPlan && !confirm("This will rebuild your calendar from your subjects. Ticks on the same topics are kept, but tasks you edited or added by hand will be replaced. Continue?")) return;
      const { days, warning } = generate(p);
      if (!Object.keys(days).length) return alert(warning || "Couldn't make a plan with these dates.");
      p.days = days; p.warning = warning;
    }
    store.putPlanner(p); go(`#/plan/${p.id}`);
  };
  $("#make").onclick = () => finish(true);
  $("#save-only") && ($("#save-only").onclick = () => finish(false));
}

/* ---------------- Plan view ---------------- */
function renderPlan(p) {
  document.title = `${p.name} · Clover Planner`;
  const r = planRange(p), today = todayISO();
  const left = diffDays(today, r.first);
  const examOn = {};
  p.subjects.forEach(s => (examOn[examOf(p, s)] ||= []).push(s));
  const allDays = range(r.from, r.last > r.to ? r.last : r.to);
  // Monday-based weeks
  const weeks = [];
  allDays.forEach(d => { if (!weeks.length || dow(d) === 1) weeks.push([]); weeks[weeks.length - 1].push(d); });
  const subjChips = [...p.subjects, ...(allTasks(p).some(t => !p.subjects.find(s => s.id === t.s)) ? [{ id: "_g", ...GENERAL }] : [])];

  const taskHTML = (t, d) => {
    const s = subjOf(p, t.s);
    return `<div class="t ${p.done[t.id] ? "ck" : ""}" draggable="true" data-id="${esc(t.id)}" data-day="${d}" data-s="${t.s || "_g"}" style="--c:${s.color}">
      <input type="checkbox" ${p.done[t.id] ? "checked" : ""} aria-label="done">
      <div class="tb" data-edit><div class="tag">${esc(s.name)}${t.kind === "lab" ? " · lab" : t.kind === "revise" ? " · revision" : ""}</div><div class="tt">${esc(t.t)}</div>${t.d ? `<div class="dd">${esc(t.d)}</div>` : ""}</div>
      <span class="m">${t.m} min</span></div>`;
  };
  const dayHTML = (d, i) => {
    const tasks = p.days[d] || [], total = tasks.reduce((a, t) => a + (+t.m || 0), 0);
    const ex = examOn[d], light = total && total <= 120;
    const all = tasks.length && tasks.every(t => p.done[t.id]);
    return `<div class="day ${d === today ? "today" : ""} ${ex ? "exam" : ""} ${light ? "light" : ""} ${all ? "done" : ""} ${d < today && !all && tasks.length ? "past" : ""}" data-day="${d}">
      <div class="dh"><span>${fmtDay(d)}${d === today ? `<em class="now">TODAY</em>` : ""}</span><span class="n">${ex ? "" : `Day ${i + 1}${total ? " · ~" + hours(total) : ""}`}</span></div>
      ${ex ? `<div class="exam-badge">Exam · ${ex.map(s => esc(s.name)).join(", ")}</div>` : ""}
      <div class="tasks">${tasks.map(t => taskHTML(t, d)).join("")}</div>
      <button class="add" data-add="${d}">+ add task</button>
    </div>`;
  };
  let dayNo = 0;
  app.innerHTML = `
  <main class="wrap">
    <a class="back" href="#/">← My planners</a>
    <div class="plan-head">
      <div><h1 class="title">${esc(p.name)}</h1>
      <p class="muted">${fmtLong(p.start)} → first exam ${fmtLong(r.first)}</p></div>
      <div class="countdown">${left > 1 ? `${left} days until exams` : left === 1 ? "Exams start tomorrow — you've got this" : left === 0 ? "Exam day — good luck!" : "Exams are underway"}</div>
    </div>
    ${p.warning ? `<div class="note warn">${esc(p.warning)}</div>` : ""}
    <section class="panel">
      <div class="prog-top"><b>Your progress</b><span id="pct"></span></div>
      <div class="bar big"><i id="bar"></i></div>
      <div class="legend">${subjChips.map(s => `<button class="chip ${filter === s.id ? "on" : ""}" data-f="${s.id}" style="--c:${s.color}">${esc(s.name)} <small data-cnt="${s.id}"></small></button>`).join("")}</div>
      <div class="row tools">
        <button class="btn dark sm" id="b-today">Jump to today</button>
        <button class="btn sm" id="b-edit">Edit subjects & dates</button>
        <button class="btn sm" id="b-share">Share</button>
        <button class="btn sm" id="b-print">Print / PDF</button>
        <button class="btn sm" id="b-backup">Backup</button>
        <button class="btn sm ghost" id="b-reset">Clear ticks</button>
      </div>
    </section>
    <details class="panel tips" ${Object.keys(p.done).length ? "" : "open"}>
      <summary>How to use this plan</summary>
      <div class="tipgrid">
        <div><b>Two or three blocks a day</b>Take a 10–15 min break between blocks. Pomodoros help: 25 min of focus, then 5 min off.</div>
        <div><b>10-minute recall</b>Before bed, close your notes and write down what you studied today from memory.</div>
        <div><b>Fell behind?</b>Drag the task to your catch-up day, or tap it and pick a new date.</div>
        <div><b>Make it yours</b>Tap any task to edit or delete it. Use “+ add task” to add your own.</div>
      </div>
    </details>
    <div id="weeks">${weeks.map((w, wi) => `
      <div class="week"><h2>Week ${wi + 1}</h2><span>${fmtShort(w[0])} – ${fmtShort(w[w.length - 1])}</span></div>
      <div class="days">${w.map(d => dayHTML(d, examOn[d] ? dayNo : dayNo++)).join("")}</div>`).join("")}
    </div>
  </main>${footer()}
  <dialog id="dlg"></dialog>`;

  const refresh = () => {
    const ts = allTasks(p), d = ts.filter(t => p.done[t.id]).length, pct = ts.length ? Math.round((d / ts.length) * 100) : 0;
    $("#pct").textContent = `${d}/${ts.length} tasks · ${pct}%`; $("#bar").style.width = pct + "%";
    subjChips.forEach(s => { const mine = ts.filter(t => (t.s && p.subjects.find(x => x.id === t.s) ? t.s : "_g") === s.id); const el = $(`[data-cnt="${s.id}"]`); if (el) el.textContent = `${mine.filter(t => p.done[t.id]).length}/${mine.length}`; });
    $$(".day").forEach(el => {
      const tasks = p.days[el.dataset.day] || [];
      el.classList.toggle("done", tasks.length > 0 && tasks.every(t => p.done[t.id]));
      el.classList.toggle("hide", !!filter && !el.querySelector(`.t[data-s="${filter}"]`) && !el.classList.contains("exam"));
    });
    $$(".t").forEach(el => el.classList.toggle("dim", !!filter && el.dataset.s !== filter));
  };
  refresh();
  const rerender = () => { const y = scrollY; store.putPlanner(p); renderPlan(p); scrollTo(0, y); };
  const findTask = id => { for (const [d, ts] of Object.entries(p.days)) { const i = ts.findIndex(t => t.id === id); if (i > -1) return { d, i, t: ts[i] }; } };

  app.onchange = e => {
    if (e.target.type === "checkbox") {
      const el = e.target.closest(".t"); p.done[el.dataset.id] = e.target.checked; if (!e.target.checked) delete p.done[el.dataset.id];
      el.classList.toggle("ck", e.target.checked); store.putPlanner(p); refresh();
    }
  };
  app.onclick = e => {
    const t = e.target;
    if (t.closest("[data-edit]")) return openTask(findTask(t.closest(".t").dataset.id));
    if (t.dataset.add) return openTask(null, t.dataset.add);
    const chip = t.closest(".chip");
    if (chip) { filter = filter === chip.dataset.f ? null : chip.dataset.f; $$(".chip").forEach(c => c.classList.toggle("on", c.dataset.f === filter)); refresh(); }
  };
  $("#b-today").onclick = () => { const el = $(".day.today") || $$(".day").find(x => x.dataset.day >= today) || $(".day"); el.scrollIntoView({ behavior: "smooth", block: "center" }); };
  $("#b-edit").onclick = () => go(`#/edit/${p.id}`);
  $("#b-print").onclick = () => print();
  $("#b-backup").onclick = () => download(`${p.name.replace(/[^\w-]+/g, "_")}.clover.json`, JSON.stringify(p, null, 1));
  $("#b-reset").onclick = () => { if (confirm("Untick every task?")) { p.done = {}; rerender(); } };
  $("#b-share").onclick = async () => {
    const url = `${location.origin}${location.pathname}#/share/${await encodePlan(p)}`;
    const dlg = $("#dlg");
    dlg.innerHTML = `<form method="dialog" class="modal"><h3>Share this planner</h3>
      <p class="muted">Anyone with this link gets their own copy of your plan. Your ticks aren't shared, and changes they make don't affect yours.</p>
      <textarea readonly rows="3" id="share-url">${esc(url)}</textarea>
      <div class="row end"><button class="btn" value="close">Close</button><button class="btn dark" id="copy" value="">Copy link</button></div></form>`;
    dlg.showModal(); $("#share-url").select();
    $("#copy").onclick = async ev => { ev.preventDefault(); try { await navigator.clipboard.writeText(url); toast("Link copied"); } catch { $("#share-url").select(); document.execCommand("copy"); toast("Link copied"); } };
  };

  // drag & drop between days
  let dragId = null;
  app.ondragstart = e => { const el = e.target.closest?.(".t"); if (!el) return; dragId = el.dataset.id; el.classList.add("dragging"); e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", dragId); };
  app.ondragend = () => { dragId = null; $$(".dragging,.over").forEach(x => x.classList.remove("dragging", "over")); };
  app.ondragover = e => { const day = e.target.closest?.(".day"); if (!day || !dragId) return; e.preventDefault(); $$(".over").forEach(x => x !== day && x.classList.remove("over")); day.classList.add("over"); };
  app.ondrop = e => {
    const day = e.target.closest?.(".day"); if (!day || !dragId) return; e.preventDefault();
    const f = findTask(dragId); if (!f) return;
    const before = e.target.closest(".t");
    p.days[f.d].splice(f.i, 1);
    const list = (p.days[day.dataset.day] ||= []);
    const idx = before && before.dataset.id !== dragId ? list.findIndex(t => t.id === before.dataset.id) : -1;
    idx > -1 ? list.splice(idx, 0, f.t) : list.push(f.t);
    rerender();
  };

  function openTask(found, newDay) {
    const t = found ? found.t : { id: uid("u"), s: filter && filter !== "_g" ? filter : p.subjects[0]?.id || null, t: "", d: "", m: 60, kind: "study" };
    const cur = found ? found.d : newDay;
    const dlg = $("#dlg");
    dlg.innerHTML = `<form method="dialog" class="modal">
      <h3>${found ? "Edit task" : "Add a task"}</h3>
      <label class="f"><span>What to do</span><input id="m-t" required value="${esc(t.t)}" placeholder="e.g. Unit 2 — revise diagrams"></label>
      <label class="f"><span>Details (optional)</span><textarea id="m-d" rows="3">${esc(t.d)}</textarea></label>
      <div class="grid2">
        <label class="f"><span>Subject</span><select id="m-s">${p.subjects.map(s => `<option value="${s.id}" ${s.id === t.s ? "selected" : ""}>${esc(s.name)}</option>`).join("")}<option value="" ${!t.s || !p.subjects.find(s => s.id === t.s) ? "selected" : ""}>General</option></select></label>
        <label class="f"><span>Minutes</span><input id="m-m" type="number" min="5" step="5" value="${t.m}"></label>
      </div>
      <label class="f"><span>Day</span><select id="m-day">${allDays.map(d => `<option value="${d}" ${d === cur ? "selected" : ""}>${fmtDay(d)}${examOn[d] ? " (exam)" : ""}</option>`).join("")}</select></label>
      <div class="row end">${found ? `<button class="btn ghost danger" id="m-del" value="">Delete</button><span class="grow"></span>` : ""}<button class="btn" value="cancel">Cancel</button><button class="btn dark" id="m-ok" value="">Save</button></div>
    </form>`;
    dlg.showModal(); $("#m-t").focus();
    $("#m-ok").onclick = ev => {
      ev.preventDefault();
      const title = $("#m-t").value.trim(); if (!title) return $("#m-t").focus();
      Object.assign(t, { t: title, d: $("#m-d").value.trim(), s: $("#m-s").value || null, m: Math.max(5, +$("#m-m").value || 30) });
      const day = $("#m-day").value;
      if (found) p.days[found.d].splice(found.i, 1);
      (p.days[day] ||= []).splice(found && day === found.d ? found.i : (p.days[day] || []).length, 0, t);
      dlg.close(); rerender();
    };
    $("#m-del") && ($("#m-del").onclick = ev => { ev.preventDefault(); if (confirm("Delete this task?")) { p.days[found.d].splice(found.i, 1); delete p.done[t.id]; dlg.close(); rerender(); } });
  }
}

/* ---------------- Shared link ---------------- */
async function renderShare(code) {
  let plan;
  try { plan = await decodePlan(code); } catch { app.innerHTML = `<main class="wrap narrow"><a class="back" href="#/">← My planners</a><div class="panel"><h2>That link doesn't work</h2><p class="muted">It may have been cut off when it was copied. Ask for the link again.</p></div></main>`; return; }
  const n = Object.values(plan.days || {}).flat().length;
  app.innerHTML = `<main class="wrap narrow"><a class="back" href="#/">← My planners</a>
    <section class="panel center">
      <img src="assets/clover.png" alt="" class="share-art">
      <h1 class="title">Someone shared a planner with you</h1>
      <h2>${esc(plan.name)}</h2>
      <p class="muted">${plan.subjects.length} subjects · ${n} tasks · starts ${fmtLong(plan.start)}</p>
      <div class="dots center">${plan.subjects.map(s => `<i style="--c:${s.color}" title="${esc(s.name)}"></i>`).join("")}</div>
      <p class="muted small">Saving it gives you your own copy. Change the dates and subjects to fit your exams.</p>
      <div class="row center"><button class="btn dark" id="save">Save a copy to my planners</button></div>
    </section></main>${footer()}`;
  $("#save").onclick = () => { const cp = store.importPlanner(plan, { keepProgress: false }); go(`#/plan/${cp.id}`); toast("Saved to your planners"); };
}

window.addEventListener("hashchange", route);
route();
