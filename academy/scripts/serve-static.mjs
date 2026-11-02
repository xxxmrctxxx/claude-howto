// Minimal static file server for the exported site (used by Playwright and
// `npm run serve`). No dependencies; serves out/ with index.html resolution.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "out");
const port = Number(process.env.PORT ?? 4321);
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
};

async function resolve(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split("?")[0])).replace(/^(\.\.[/\\])+/, "");
  let file = join(root, clean);
  if (!file.startsWith(root)) return null;
  try {
    const s = await stat(file);
    if (s.isDirectory()) file = join(file, "index.html");
    await stat(file);
    return file;
  } catch {
    try {
      await stat(`${file}.html`);
      return `${file}.html`;
    } catch {
      return null;
    }
  }
}

createServer(async (req, res) => {
  const file = await resolve(req.url ?? "/");
  if (!file) {
    const body = await readFile(join(root, "404.html")).catch(() => "Not found");
    res.writeHead(404, { "content-type": TYPES[".html"] });
    res.end(body);
    return;
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
  res.end(await readFile(file));
}).listen(port, () => console.log(`Serving out/ at http://localhost:${port}`));
