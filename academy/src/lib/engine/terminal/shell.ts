/**
 * A small, deterministic shell + git SIMULATOR for learning. It models a
 * virtual file system and a simplified git (init, status, add, commit, log,
 * branch, switch/checkout). Nothing here touches the real machine.
 *
 * Output text follows real bash/git wording where it matters for learning;
 * a few rarely-needed details (file modes, hashes) are simplified.
 */

import type { TerminalCheck } from "@/lib/types/content";

export interface DirNode {
  type: "dir";
  children: Record<string, FsNode>;
}
export interface FileNode {
  type: "file";
  content: string;
}
export type FsNode = DirNode | FileNode;

export interface Commit {
  id: string;
  message: string;
  parent: string | null;
  snapshot: Record<string, string>;
}

export interface Repo {
  root: string;
  head: string;
  branches: Record<string, string | null>;
  commits: Record<string, Commit>;
  index: Record<string, string>;
}

export interface ShellState {
  fs: DirNode;
  cwd: string;
  home: string;
  user: string;
  repos: Record<string, Repo>;
  history: string[];
  counter: number;
}

export type LineKind = "out" | "err" | "hint";
export interface OutputLine {
  text: string;
  kind: LineKind;
}

export interface RunResult {
  state: ShellState;
  lines: OutputLine[];
  clear?: boolean;
}

/* ------------------------------ helpers ------------------------------ */

const out = (text: string): OutputLine => ({ text, kind: "out" });
const err = (text: string): OutputLine => ({ text, kind: "err" });
const hint = (text: string): OutputLine => ({ text, kind: "hint" });

function clone<T>(v: T): T {
  return JSON.parse(JSON.stringify(v)) as T;
}

export function normalizePath(path: string, cwd: string, home: string): string {
  let p = path;
  if (p === "~") p = home;
  else if (p.startsWith("~/")) p = home + p.slice(1);
  const abs = p.startsWith("/") ? p : `${cwd}/${p}`;
  const parts: string[] = [];
  for (const seg of abs.split("/")) {
    if (!seg || seg === ".") continue;
    if (seg === "..") parts.pop();
    else parts.push(seg);
  }
  return `/${parts.join("/")}`;
}

export function getNode(fs: DirNode, path: string): FsNode | undefined {
  let node: FsNode = fs;
  for (const seg of path.split("/").filter(Boolean)) {
    if (node.type !== "dir") return undefined;
    const next: FsNode | undefined = node.children[seg];
    if (!next) return undefined;
    node = next;
  }
  return node;
}

function parentOf(path: string): { dir: string; name: string } {
  const i = path.lastIndexOf("/");
  return { dir: i <= 0 ? "/" : path.slice(0, i), name: path.slice(i + 1) };
}

function displayPath(path: string, home: string): string {
  if (path === home) return "~";
  if (path.startsWith(`${home}/`)) return `~${path.slice(home.length)}`;
  return path;
}

export function promptLabel(s: ShellState): string {
  return `${s.user}@academy:${displayPath(s.cwd, s.home)}$`;
}

/** Split a command line, honouring single/double quotes. */
export function tokenize(line: string): string[] {
  const tokens: string[] = [];
  let cur = "";
  let quote: string | null = null;
  let has = false;
  for (const ch of line) {
    if (quote) {
      if (ch === quote) quote = null;
      else cur += ch;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
      has = true;
    } else if (/\s/.test(ch)) {
      if (cur || has) tokens.push(cur);
      cur = "";
      has = false;
    } else {
      cur += ch;
    }
  }
  if (cur || has) tokens.push(cur);
  return tokens;
}

/* ------------------------------ git core ------------------------------ */

function findRepo(s: ShellState, path: string): Repo | undefined {
  let best: Repo | undefined;
  for (const repo of Object.values(s.repos)) {
    if ((path === repo.root || path.startsWith(`${repo.root}/`)) && (!best || repo.root.length > best.root.length)) best = repo;
  }
  return best;
}

/** All files in the working tree of a repo (relative paths), ignoring .git. */
function workingFiles(s: ShellState, repo: Repo): Record<string, string> {
  const files: Record<string, string> = {};
  const root = getNode(s.fs, repo.root);
  const walk = (node: FsNode, rel: string) => {
    if (node.type === "file") {
      files[rel] = node.content;
      return;
    }
    for (const [name, child] of Object.entries(node.children)) {
      if (name === ".git" && rel === "") continue;
      walk(child, rel ? `${rel}/${name}` : name);
    }
  };
  if (root) walk(root, "");
  return files;
}

function headSnapshot(repo: Repo): Record<string, string> {
  const id = repo.branches[repo.head];
  return id ? repo.commits[id].snapshot : {};
}

export function gitChanges(s: ShellState, repo: Repo) {
  const head = headSnapshot(repo);
  const work = workingFiles(s, repo);
  const staged: { path: string; kind: "new file" | "modified" | "deleted" }[] = [];
  const unstaged: { path: string; kind: "modified" | "deleted" }[] = [];
  const untracked: string[] = [];
  for (const p of new Set([...Object.keys(head), ...Object.keys(repo.index)])) {
    if (!(p in head)) staged.push({ path: p, kind: "new file" });
    else if (!(p in repo.index)) staged.push({ path: p, kind: "deleted" });
    else if (head[p] !== repo.index[p]) staged.push({ path: p, kind: "modified" });
  }
  for (const p of Object.keys(repo.index)) {
    if (!(p in work)) unstaged.push({ path: p, kind: "deleted" });
    else if (work[p] !== repo.index[p]) unstaged.push({ path: p, kind: "modified" });
  }
  for (const p of Object.keys(work)) if (!(p in repo.index)) untracked.push(p);
  const sort = <T extends { path: string }>(a: T[]) => a.sort((x, y) => x.path.localeCompare(y.path));
  return { staged: sort(staged), unstaged: sort(unstaged), untracked: untracked.sort() };
}

function isClean(s: ShellState, repo: Repo): boolean {
  const c = gitChanges(s, repo);
  return c.staged.length === 0 && c.unstaged.length === 0;
}

function relToRepo(repo: Repo, abs: string): string {
  return abs === repo.root ? "" : abs.slice(repo.root.length + 1);
}

/** Replace tracked files in the working tree with a snapshot (used by switch). */
function checkoutSnapshot(s: ShellState, repo: Repo, from: Record<string, string>, to: Record<string, string>) {
  for (const rel of Object.keys(from)) {
    if (!(rel in to)) {
      const { dir, name } = parentOf(`${repo.root}/${rel}`);
      const parent = getNode(s.fs, dir);
      if (parent?.type === "dir") delete parent.children[name];
    }
  }
  for (const [rel, content] of Object.entries(to)) writeFile(s, `${repo.root}/${rel}`, content, false, true);
  repo.index = { ...to };
}

function writeFile(s: ShellState, abs: string, content: string, append: boolean, mkParents = false): string | null {
  const { dir, name } = parentOf(abs);
  if (mkParents) mkdirP(s, dir);
  const parent = getNode(s.fs, dir);
  if (!parent || parent.type !== "dir") return `No such file or directory`;
  const existing = parent.children[name];
  if (existing?.type === "dir") return `Is a directory`;
  parent.children[name] = { type: "file", content: append && existing ? existing.content + content : content };
  return null;
}

function mkdirP(s: ShellState, abs: string) {
  let node: DirNode = s.fs;
  for (const seg of abs.split("/").filter(Boolean)) {
    const next = node.children[seg];
    if (!next) node.children[seg] = { type: "dir", children: {} };
    else if (next.type !== "dir") return;
    node = node.children[seg] as DirNode;
  }
}

function shortId(n: number): string {
  // Deterministic pseudo-hash so tests and screenshots are stable.
  return ((n * 2654435761) >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

/* ------------------------------ git command ------------------------------ */

function git(s: ShellState, args: string[]): OutputLine[] {
  const sub = args[0];
  if (!sub || sub === "--help" || sub === "help") {
    return [out("Lệnh git được hỗ trợ trong mô phỏng: init, status, add, commit, log, branch, switch, checkout")];
  }
  if (sub === "init") {
    if (s.repos[s.cwd]) return [out(`Reinitialized existing Git repository in ${s.cwd}/.git/`)];
    s.repos[s.cwd] = { root: s.cwd, head: "main", branches: { main: null }, commits: {}, index: {} };
    mkdirP(s, `${s.cwd}/.git`);
    return [out(`Initialized empty Git repository in ${s.cwd}/.git/`), hint("Mẹo: nhánh mặc định trong mô phỏng là “main”. Git thật có thể dùng “master” tuỳ cấu hình.")];
  }
  const repo = findRepo(s, s.cwd);
  if (!repo) return [err("fatal: not a git repository (or any of the parent directories): .git"), hint("Bạn cần chạy `git init` trong thư mục dự án trước.")];

  switch (sub) {
    case "status": {
      const c = gitChanges(s, repo);
      const lines: OutputLine[] = [out(`On branch ${repo.head}`)];
      const hasCommits = Boolean(repo.branches[repo.head]);
      if (!hasCommits) lines.push(out(""), out("No commits yet"));
      if (c.staged.length) {
        lines.push(out(""), out("Changes to be committed:"));
        for (const f of c.staged) lines.push({ text: `\t${(f.kind + ":").padEnd(12)}${f.path}`, kind: "out" });
      }
      if (c.unstaged.length) {
        lines.push(out(""), out("Changes not staged for commit:"), out('  (use "git add <file>..." to update what will be committed)'));
        for (const f of c.unstaged) lines.push(out(`\t${(f.kind + ":").padEnd(12)}${f.path}`));
      }
      if (c.untracked.length) {
        lines.push(out(""), out("Untracked files:"), out('  (use "git add <file>..." to include in what will be committed)'));
        for (const f of c.untracked) lines.push(out(`\t${f}`));
      }
      lines.push(out(""));
      if (!c.staged.length && !c.unstaged.length && !c.untracked.length) {
        lines.push(out(hasCommits ? "nothing to commit, working tree clean" : 'nothing to commit (create/copy files and use "git add" to track)'));
      } else if (!c.staged.length && c.unstaged.length) {
        lines.push(out('no changes added to commit (use "git add" and/or "git commit -a")'));
      } else if (!c.staged.length && c.untracked.length) {
        lines.push(out('nothing added to commit but untracked files present (use "git add" to track)'));
      }
      return lines;
    }
    case "add": {
      const targets = args.slice(1);
      if (!targets.length) return [out("Nothing specified, nothing added."), hint("Ví dụ: `git add .` để thêm tất cả, hoặc `git add ten-file`.")];
      const work = workingFiles(s, repo);
      for (const t of targets) {
        const all = t === "." || t === "-A" || t === "--all";
        const abs = all ? (t === "." ? s.cwd : repo.root) : normalizePath(t, s.cwd, s.home);
        const rel = relToRepo(repo, abs);
        const inScope = (p: string) => rel === "" || p === rel || p.startsWith(`${rel}/`);
        const matches = Object.keys(work).filter(inScope);
        const deleted = Object.keys(repo.index).filter((p) => inScope(p) && !(p in work));
        if (!matches.length && !deleted.length) return [err(`fatal: pathspec '${t}' did not match any files`)];
        for (const p of matches) repo.index[p] = work[p];
        for (const p of deleted) delete repo.index[p];
      }
      return [];
    }
    case "commit": {
      const mi = args.findIndex((a) => a === "-m" || a === "--message");
      const message = mi >= 0 ? args[mi + 1] : undefined;
      if (mi < 0 || !message) {
        return [err("error: thiếu lời nhắn commit"), hint('Trong mô phỏng hãy dùng: git commit -m "mô tả thay đổi" (git thật sẽ mở trình soạn thảo).')];
      }
      const c = gitChanges(s, repo);
      if (!c.staged.length) {
        if (c.unstaged.length) return [out('no changes added to commit (use "git add" and/or "git commit -a")')];
        if (c.untracked.length) return [out('nothing added to commit but untracked files present (use "git add" to track)')];
        return [out(`On branch ${repo.head}`), out("nothing to commit, working tree clean")];
      }
      s.counter += 1;
      const id = shortId(s.counter);
      const parent = repo.branches[repo.head];
      repo.commits[id] = { id, message, parent, snapshot: { ...repo.index } };
      repo.branches[repo.head] = id;
      const files = c.staged.length;
      return [
        out(`[${repo.head}${parent ? "" : " (root-commit)"} ${id}] ${message}`),
        out(` ${files} file${files > 1 ? "s" : ""} changed`),
      ];
    }
    case "log": {
      let id = repo.branches[repo.head];
      if (!id) return [err(`fatal: your current branch '${repo.head}' does not have any commits yet`)];
      const oneline = args.includes("--oneline");
      const lines: OutputLine[] = [];
      let first = true;
      while (id) {
        const c: Commit = repo.commits[id];
        const labels = Object.entries(repo.branches)
          .filter(([, cid]) => cid === c.id)
          .map(([b]) => (b === repo.head && first ? `HEAD -> ${b}` : b));
        const deco = labels.length ? ` (${labels.join(", ")})` : "";
        if (oneline) lines.push(out(`${c.id}${deco} ${c.message}`));
        else lines.push(out(`commit ${c.id}${deco}`), out(""), out(`    ${c.message}`), out(""));
        id = c.parent;
        first = false;
      }
      return lines;
    }
    case "branch": {
      const name = args[1];
      if (!name) {
        const names = Object.keys(repo.branches).filter((b) => b === repo.head || repo.branches[b]);
        return names.sort().map((b) => out(`${b === repo.head ? "*" : " "} ${b}`));
      }
      if (repo.branches[name] !== undefined && (repo.branches[name] || name === repo.head)) return [err(`fatal: a branch named '${name}' already exists`)];
      const at = repo.branches[repo.head];
      if (!at) return [err(`fatal: not a valid object name: '${repo.head}'`), hint("Cần có ít nhất một commit trước khi tạo nhánh.")];
      repo.branches[name] = at;
      return [];
    }
    case "switch":
    case "checkout": {
      const create = args[1] === "-c" || args[1] === "-b";
      const name = create ? args[2] : args[1];
      if (!name) return [err("fatal: missing branch name")];
      if (create) {
        if (repo.branches[name]) return [err(`fatal: a branch named '${name}' already exists`)];
        repo.branches[name] = repo.branches[repo.head];
        repo.head = name;
        return [out(`Switched to a new branch '${name}'`)];
      }
      if (!(name in repo.branches) || (!repo.branches[name] && name !== repo.head)) {
        return [err(`fatal: invalid reference: ${name}`), hint("Dùng `git switch -c ten-nhanh` để tạo nhánh mới.")];
      }
      if (name === repo.head) return [out(`Already on '${name}'`)];
      if (!isClean(s, repo)) {
        return [
          err("error: Your local changes would be overwritten by checkout."),
          err("Please commit your changes or stash them before you switch branches."),
          hint("Mô phỏng: hãy commit thay đổi trước khi đổi nhánh."),
        ];
      }
      const from = headSnapshot(repo);
      const targetId = repo.branches[name];
      checkoutSnapshot(s, repo, from, targetId ? repo.commits[targetId].snapshot : {});
      repo.head = name;
      return [out(`Switched to branch '${name}'`)];
    }
    default:
      return [err(`git: '${sub}' is not a git command. See 'git --help'.`), hint("Mô phỏng chỉ hỗ trợ: init, status, add, commit, log, branch, switch, checkout.")];
  }
}

/* ------------------------------ shell ------------------------------ */

export const HELP_TEXT = [
  "Các lệnh trong mô phỏng:",
  "  pwd                 in thư mục hiện tại",
  "  ls [-a] [-l] [dir]  liệt kê file và thư mục",
  "  cd <dir>            chuyển thư mục (cd .. lên một cấp, cd ~ về nhà)",
  "  mkdir [-p] <dir>    tạo thư mục",
  "  touch <file>        tạo file rỗng",
  "  cat <file>          xem nội dung file",
  '  echo "chữ" > file   ghi vào file (>> để ghi thêm)',
  "  rm [-r] <path>      xoá file / thư mục",
  "  clear               xoá màn hình",
  "  git init|status|add|commit|log|branch|switch",
];

export function runCommand(state: ShellState, line: string): RunResult {
  const s = clone(state);
  const trimmed = line.trim();
  if (!trimmed) return { state: s, lines: [] };
  s.history.push(trimmed);
  let tokens = tokenize(trimmed);

  // Redirection for echo: echo text > file / >> file
  let redirect: { file: string; append: boolean } | null = null;
  const ri = tokens.findIndex((t) => t === ">" || t === ">>");
  if (ri >= 0) {
    redirect = { file: tokens[ri + 1] ?? "", append: tokens[ri] === ">>" };
    tokens = tokens.slice(0, ri);
  }

  const [cmd, ...args] = tokens;
  const flags = new Set(args.filter((a) => a.startsWith("-")).flatMap((a) => a.slice(1).split("")));
  const operands = args.filter((a) => !a.startsWith("-"));
  const lines: OutputLine[] = [];

  switch (cmd) {
    case "pwd":
      lines.push(out(s.cwd));
      break;
    case "whoami":
      lines.push(out(s.user));
      break;
    case "help":
      lines.push(...HELP_TEXT.map(out));
      break;
    case "clear":
      return { state: s, lines: [], clear: true };
    case "history":
      s.history.forEach((h, i) => lines.push(out(`${String(i + 1).padStart(4)}  ${h}`)));
      break;
    case "ls": {
      const target = normalizePath(operands[0] ?? ".", s.cwd, s.home);
      const node = getNode(s.fs, target);
      if (!node) {
        lines.push(err(`ls: cannot access '${operands[0]}': No such file or directory`));
        break;
      }
      if (node.type === "file") {
        lines.push(out(operands[0] ?? target));
        break;
      }
      const names = Object.keys(node.children)
        .filter((n) => flags.has("a") || !n.startsWith("."))
        .sort();
      const all = flags.has("a") ? [".", "..", ...names] : names;
      if (flags.has("l")) {
        for (const n of all) {
          const child = n === "." || n === ".." ? ({ type: "dir", children: {} } as DirNode) : node.children[n];
          const isDir = child.type === "dir";
          const size = child.type === "file" ? child.content.length : 4096;
          lines.push(out(`${isDir ? "d" : "-"}rw-r--r--  ${s.user}  ${String(size).padStart(5)}  ${n}${isDir ? "/" : ""}`));
        }
      } else if (all.length) {
        lines.push(out(all.map((n) => (n !== "." && n !== ".." && node.children[n]?.type === "dir" ? `${n}/` : n)).join("  ")));
      }
      break;
    }
    case "cd": {
      const target = normalizePath(operands[0] ?? "~", s.cwd, s.home);
      const node = getNode(s.fs, target);
      if (!node) lines.push(err(`bash: cd: ${operands[0]}: No such file or directory`));
      else if (node.type !== "dir") lines.push(err(`bash: cd: ${operands[0]}: Not a directory`));
      else s.cwd = target;
      break;
    }
    case "mkdir": {
      if (!operands.length) {
        lines.push(err("mkdir: missing operand"));
        break;
      }
      for (const o of operands) {
        const abs = normalizePath(o, s.cwd, s.home);
        const { dir, name } = parentOf(abs);
        if (getNode(s.fs, abs)) {
          if (!flags.has("p")) lines.push(err(`mkdir: cannot create directory '${o}': File exists`));
          continue;
        }
        if (flags.has("p")) {
          mkdirP(s, abs);
          continue;
        }
        const parent = getNode(s.fs, dir);
        if (!parent || parent.type !== "dir") lines.push(err(`mkdir: cannot create directory '${o}': No such file or directory`));
        else parent.children[name] = { type: "dir", children: {} };
      }
      break;
    }
    case "touch": {
      if (!operands.length) lines.push(err("touch: missing file operand"));
      for (const o of operands) {
        const abs = normalizePath(o, s.cwd, s.home);
        if (getNode(s.fs, abs)) continue;
        const e = writeFile(s, abs, "", false);
        if (e) lines.push(err(`touch: cannot touch '${o}': ${e}`));
      }
      break;
    }
    case "cat": {
      if (!operands.length) {
        lines.push(err("cat: missing file operand"));
        break;
      }
      for (const o of operands) {
        const node = getNode(s.fs, normalizePath(o, s.cwd, s.home));
        if (!node) lines.push(err(`cat: ${o}: No such file or directory`));
        else if (node.type === "dir") lines.push(err(`cat: ${o}: Is a directory`));
        else lines.push(...node.content.replace(/\n$/, "").split("\n").map(out));
      }
      break;
    }
    case "echo": {
      const text = args.join(" ");
      if (redirect) {
        if (!redirect.file) {
          lines.push(err("bash: syntax error near unexpected token `newline'"));
          break;
        }
        const e = writeFile(s, normalizePath(redirect.file, s.cwd, s.home), `${text}\n`, redirect.append);
        if (e) lines.push(err(`bash: ${redirect.file}: ${e}`));
      } else lines.push(out(text));
      break;
    }
    case "rm": {
      if (!operands.length) {
        lines.push(err("rm: missing operand"));
        break;
      }
      for (const o of operands) {
        const abs = normalizePath(o, s.cwd, s.home);
        const node = getNode(s.fs, abs);
        if (!node) {
          lines.push(err(`rm: cannot remove '${o}': No such file or directory`));
          continue;
        }
        if (node.type === "dir" && !flags.has("r")) {
          lines.push(err(`rm: cannot remove '${o}': Is a directory`));
          continue;
        }
        if (abs === "/" || abs === s.home || s.cwd.startsWith(`${abs}/`) || s.cwd === abs) {
          lines.push(err(`rm: từ chối xoá '${o}' trong mô phỏng (thư mục đang dùng hoặc thư mục gốc).`));
          continue;
        }
        const { dir, name } = parentOf(abs);
        const parent = getNode(s.fs, dir) as DirNode;
        delete parent.children[name];
        if (s.repos[abs]) delete s.repos[abs];
      }
      break;
    }
    case "git":
      lines.push(...git(s, args));
      break;
    case "claude":
      lines.push(
        hint("Trên máy thật, lệnh `claude` mở Claude Code trong thư mục hiện tại."),
        hint("Đây là môi trường MÔ PHỎNG nên không chạy Claude. Hãy luyện các lệnh cơ bản ở đây trước."),
      );
      break;
    default:
      lines.push(err(`bash: ${cmd}: command not found`), hint("Gõ `help` để xem các lệnh được hỗ trợ trong mô phỏng."));
  }
  return { state: s, lines };
}

/* ------------------------------ presets ------------------------------ */

function dir(children: Record<string, FsNode> = {}): DirNode {
  return { type: "dir", children };
}
function file(content: string): FileNode {
  return { type: "file", content };
}

export function createShell(preset: string): ShellState {
  const home = "/home/hocvien";
  const base: ShellState = {
    fs: dir({ home: dir({ hocvien: dir() }), tmp: dir() }),
    cwd: home,
    home,
    user: "hocvien",
    repos: {},
    history: [],
    counter: 0,
  };
  const h = getNode(base.fs, home) as DirNode;
  if (preset === "home-basic") {
    h.children["tai-lieu"] = dir({ "ghi-chu.txt": file("Hop giao ban QA thu Hai 8h.\n") });
    h.children["du-an-qa"] = dir({
      "bao-cao.md": file("# Bao cao loi tuan 44\n"),
      "du-lieu.csv": file("Cong_doan,So_loi\nQuan day,2\nLap rap vo,5\n"),
    });
    h.children["anh"] = dir();
  } else if (preset === "git-project") {
    h.children["web-qa"] = dir({
      "index.html": file("<h1>Theo doi loi QA</h1>\n"),
      "style.css": file("body { font-family: sans-serif; }\n"),
      "README.md": file("# Web QA\n"),
    });
    base.cwd = `${home}/web-qa`;
  } else if (preset === "git-committed") {
    let s = createShell("git-project");
    for (const cmd of ["git init", "git add .", 'git commit -m "Khoi tao du an"']) s = runCommand(s, cmd).state;
    return { ...s, history: [] };
  }
  return base;
}

/* ------------------------------ checks ------------------------------ */

export function evaluateCheck(s: ShellState, check: TerminalCheck): boolean {
  const abs = (p: string) => normalizePath(p, s.cwd, s.home);
  switch (check.kind) {
    case "cwd":
      return s.cwd === abs(check.path);
    case "dir":
      return getNode(s.fs, abs(check.path))?.type === "dir";
    case "file": {
      const n = getNode(s.fs, abs(check.path));
      return n?.type === "file" && (check.contains ? n.content.includes(check.contains) : true);
    }
    case "gitInitialized":
      return Boolean(s.repos[abs(check.path)]);
    case "commitCount": {
      const repo = s.repos[abs(check.path)];
      if (!repo) return false;
      let n = 0;
      let id = repo.branches[repo.head];
      while (id) {
        n++;
        id = repo.commits[id].parent;
      }
      return n >= check.min;
    }
    case "cleanTree": {
      const repo = s.repos[abs(check.path)];
      if (!repo || !repo.branches[repo.head]) return false;
      const c = gitChanges(s, repo);
      return !c.staged.length && !c.unstaged.length && !c.untracked.length;
    }
    case "usedCommand":
      return s.history.some((h) => h === check.command || h.startsWith(`${check.command} `));
    case "lastCommand": {
      const last = s.history[s.history.length - 1] ?? "";
      return last === check.command || last.startsWith(`${check.command} `);
    }
    case "gitState": {
      const repo = s.repos[abs(check.path)];
      if (!repo) return false;
      const c = gitChanges(s, repo);
      if (check.head && repo.head !== check.head) return false;
      if (check.stagedMin !== undefined && c.staged.length < check.stagedMin) return false;
      if (check.unstagedMin !== undefined && c.unstaged.length < check.unstagedMin) return false;
      return true;
    }
  }
}
