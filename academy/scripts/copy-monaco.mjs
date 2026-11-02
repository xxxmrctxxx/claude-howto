// Copies Monaco's AMD build into public/ so the code editor is self-hosted:
// no CDN at runtime, works offline and behind strict network policies.
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const pkgDir = join(process.cwd(), "node_modules", "monaco-editor");
const source = join(pkgDir, "min", "vs");
const target = join(process.cwd(), "public", "monaco", "vs");

if (existsSync(join(target, "loader.js"))) {
  process.exit(0);
}
mkdirSync(dirname(target), { recursive: true });
cpSync(source, target, { recursive: true });
console.log(`Monaco copied to ${target}`);
