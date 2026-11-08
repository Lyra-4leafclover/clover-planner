const b64u = bytes => { let s = ""; bytes.forEach(b => s += String.fromCharCode(b)); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); };
const unb64u = str => Uint8Array.from(atob(str.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0));
const pipe = async (bytes, stream) => new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer());

export async function encodePlan(plan) {
  const { done, id, ...rest } = plan;
  const bytes = new TextEncoder().encode(JSON.stringify(rest));
  if ("CompressionStream" in window) return "z" + b64u(await pipe(bytes, new CompressionStream("deflate-raw")));
  return "j" + b64u(bytes);
}
export async function decodePlan(code) {
  let bytes = unb64u(code.slice(1));
  if (code[0] === "z") bytes = await pipe(bytes, new DecompressionStream("deflate-raw"));
  return JSON.parse(new TextDecoder().decode(bytes));
}
