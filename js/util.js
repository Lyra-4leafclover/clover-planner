export const $ = (sel, el = document) => el.querySelector(sel);
export const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
export const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export const uid = (p = "") => p + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);

export const parseISO = iso => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
export const toISO = dt => `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
export const addDays = (iso, n) => { const d = parseISO(iso); d.setDate(d.getDate() + n); return toISO(d); };
export const todayISO = () => toISO(new Date());
export const dow = iso => parseISO(iso).getDay();
export const diffDays = (a, b) => Math.round((parseISO(b) - parseISO(a)) / 864e5);
export function range(from, to) { const out = []; for (let d = from; d <= to; d = addDays(d, 1)) out.push(d); return out; }

const fmt = (iso, opts) => parseISO(iso).toLocaleDateString("en-US", opts);
export const fmtDay = iso => fmt(iso, { weekday: "short", month: "short", day: "numeric" });
export const fmtShort = iso => fmt(iso, { month: "short", day: "numeric" });
export const fmtLong = iso => fmt(iso, { weekday: "short", month: "short", day: "numeric", year: "numeric" });
export const hours = m => { const h = Math.round(m / 6) / 10; return (h % 1 ? h.toFixed(1) : h) + " h"; };

export const COLORS = ["#e88fa8", "#7fa7e0", "#7cc4a4", "#c49be3", "#e8b46c", "#e39a7f", "#6fbfc9", "#a8b86a", "#d98cc8", "#9aa3b5"];
export const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
