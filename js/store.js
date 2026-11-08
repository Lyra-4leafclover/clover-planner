import { EXAMPLE } from "./example.js";
import { uid, todayISO, addDays } from "./util.js";

const KEY = "clover-planner.v1";
let db;

function load() {
  try { db = JSON.parse(localStorage.getItem(KEY)); } catch { db = null; }
  if (!db || !Array.isArray(db.planners)) {
    db = { planners: [structuredClone(EXAMPLE)] };
    save();
  }
}
export function save() { localStorage.setItem(KEY, JSON.stringify(db)); }
export const planners = () => db.planners;
export const getPlanner = id => db.planners.find(p => p.id === id);
export function putPlanner(p) {
  const i = db.planners.findIndex(x => x.id === p.id);
  if (i < 0) db.planners.unshift(p); else db.planners[i] = p;
  save();
}
export function deletePlanner(id) { db.planners = db.planners.filter(p => p.id !== id); save(); }
export function importPlanner(p, { keepProgress = true } = {}) {
  const copy = structuredClone(p);
  copy.id = uid("p");
  if (!keepProgress) copy.done = {};
  copy.done ||= {};
  copy.days ||= {};
  putPlanner(copy);
  return copy;
}
export const exportAll = () => JSON.stringify({ app: "clover-planner", version: 1, planners: db.planners }, null, 1);

export function blankPlanner() {
  const start = todayISO();
  return {
    id: uid("p"), name: "My exams", start, examStart: addDays(start, 28), created: start,
    settings: { weekdayMin: 150, weekendMin: 240, restDay: 0, restMin: 90, revisionDays: 4 },
    subjects: [], days: {}, done: {},
  };
}
load();
