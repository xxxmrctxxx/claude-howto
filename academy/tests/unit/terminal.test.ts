import { describe, expect, it } from "vitest";
import { TERMINAL_MISSIONS } from "@/content/labs/terminal-missions";
import { createShell, evaluateCheck, normalizePath, runCommand, tokenize, type ShellState } from "@/lib/engine/terminal/shell";

function run(s: ShellState, ...cmds: string[]) {
  let state = s;
  let last: string[] = [];
  for (const c of cmds) {
    const r = runCommand(state, c);
    state = r.state;
    last = r.lines.map((l) => l.text);
  }
  return { state, out: last };
}

describe("shell basics", () => {
  it("tokenizes quotes", () => {
    expect(tokenize(`git commit -m "bai dau tien"`)).toEqual(["git", "commit", "-m", "bai dau tien"]);
    expect(tokenize(`echo 'a b' > f.txt`)).toEqual(["echo", "a b", ">", "f.txt"]);
  });

  it("normalizes paths", () => {
    expect(normalizePath("..", "/home/hocvien/a", "/home/hocvien")).toBe("/home/hocvien");
    expect(normalizePath("~/x/./y", "/", "/home/hocvien")).toBe("/home/hocvien/x/y");
    expect(normalizePath("/../..", "/home", "/home/u")).toBe("/");
  });

  it("pwd, ls, cd, mkdir, touch, cat, echo", () => {
    const s0 = createShell("home-basic");
    expect(run(s0, "pwd").out).toEqual(["/home/hocvien"]);
    expect(run(s0, "ls").out[0]).toBe("anh/  du-an-qa/  tai-lieu/");
    const { state, out } = run(s0, "cd du-an-qa", "cat du-lieu.csv");
    expect(state.cwd).toBe("/home/hocvien/du-an-qa");
    expect(out[0]).toBe("Cong_doan,So_loi");
    const s2 = run(s0, "mkdir -p a/b/c", 'echo "xin chao" > a/b/c/f.txt', "echo them >> a/b/c/f.txt").state;
    expect(run(s2, "cat a/b/c/f.txt").out).toEqual(["xin chao", "them"]);
    expect(run(s0, "cd khong-co").out[0]).toMatch(/No such file or directory/);
    expect(run(s0, "mkdir anh").out[0]).toMatch(/File exists/);
    expect(run(s0, "lsx").out[0]).toBe("bash: lsx: command not found");
  });

  it("does not mutate the previous state (pure)", () => {
    const s0 = createShell("home-basic");
    run(s0, "mkdir moi");
    expect(run(s0, "ls").out[0]).not.toContain("moi");
  });
});

describe("git simulator", () => {
  it("errors outside a repository", () => {
    expect(run(createShell("git-project"), "git status").out[0]).toMatch(/not a git repository/);
  });

  it("init → status → add → commit → log", () => {
    let s = run(createShell("git-project"), "git init").state;
    let r = run(s, "git status");
    expect(r.out).toContain("Untracked files:");
    expect(r.out).toContain('nothing added to commit but untracked files present (use "git add" to track)');
    s = run(s, "git add .").state;
    r = run(s, "git status");
    expect(r.out).toContain("Changes to be committed:");
    expect(r.out.some((l) => l.includes("new file:   index.html"))).toBe(true);
    r = run(s, 'git commit -m "Khoi tao"');
    expect(r.out[0]).toMatch(/^\[main \(root-commit\) [0-9a-f]{7}\] Khoi tao$/);
    s = r.state;
    expect(run(s, "git status").out).toContain("nothing to commit, working tree clean");
    expect(run(s, "git log --oneline").out[0]).toMatch(/\(HEAD -> main\) Khoi tao$/);
    expect(evaluateCheck(s, { kind: "commitCount", path: "~/web-qa", min: 1, label: "" })).toBe(true);
    expect(evaluateCheck(s, { kind: "cleanTree", path: "~/web-qa", label: "" })).toBe(true);
  });

  it("detects modified and deleted files", () => {
    let s = createShell("git-committed");
    s = run(s, 'echo "<p>moi</p>" >> index.html', "rm style.css").state;
    const out = run(s, "git status").out;
    expect(out).toContain("Changes not staged for commit:");
    expect(out.some((l) => l.includes("modified:   index.html"))).toBe(true);
    expect(out.some((l) => l.includes("deleted:    style.css"))).toBe(true);
    s = run(s, "git add .").state;
    expect(run(s, "git status").out.some((l) => l.includes("deleted:    style.css"))).toBe(true);
  });

  it("commit without message or without staged changes is refused", () => {
    const s = run(createShell("git-project"), "git init").state;
    expect(run(s, "git commit").out[0]).toMatch(/thiếu lời nhắn/);
    expect(run(s, 'git commit -m "x"').out[0]).toMatch(/nothing added to commit/);
  });

  it("branches keep separate snapshots", () => {
    let s = createShell("git-committed");
    s = run(s, "git switch -c tinh-nang", 'echo "<p>loc</p>" >> index.html', "git add index.html", 'git commit -m "Them loc"').state;
    expect(run(s, "cat index.html").out).toContain("<p>loc</p>");
    s = run(s, "git switch main").state;
    expect(run(s, "cat index.html").out).not.toContain("<p>loc</p>");
    expect(run(s, "git branch").out).toEqual(["* main", "  tinh-nang"]);
  });

  it("refuses to switch with uncommitted changes", () => {
    let s = createShell("git-committed");
    s = run(s, "git branch thu", "echo x >> README.md").state;
    expect(run(s, "git switch thu").out[0]).toMatch(/would be overwritten/);
  });
});

describe("terminal missions", () => {
  it("every mission is completable with its hint commands", () => {
    for (const m of TERMINAL_MISSIONS) {
      let s = createShell(m.preset);
      for (const step of m.steps) {
        s = runCommand(s, step.hint).state;
        expect(evaluateCheck(s, step.check), `${m.id}: ${step.instruction}`).toBe(true);
      }
    }
  });
});

describe("claude-project preset", () => {
  it("starts at home with a committed, clean project", () => {
    const s0 = createShell("claude-project");
    expect(s0.cwd).toBe("/home/hocvien");
    expect(s0.history).toEqual([]);
    const s1 = run(s0, "cd du-an/web-loi-qa").state;
    expect(evaluateCheck(s1, { kind: "cleanTree", path: ".", label: "" })).toBe(true);
    expect(evaluateCheck(s1, { kind: "commitCount", path: ".", min: 1, label: "" })).toBe(true);
    expect(run(s1, "ls").out[0]).not.toContain(".gitignore");
    expect(run(s1, "ls -a").out[0]).toContain(".gitignore");
  });
  it("labels claude as simulated", () => {
    const s = run(createShell("claude-project"), "cd du-an/web-loi-qa", "claude").out.join(" ");
    expect(s).toContain("MÔ PHỎNG");
    expect(s).toContain("~/du-an/web-loi-qa");
    expect(run(createShell("home-basic"), "claude --version").out.join(" ")).toContain("(Claude Code)");
  });
  it("labels claude mcp and claude plugin subcommands as simulated", () => {
    const mcp = run(createShell("home-basic"), "claude mcp list").out.join(" ");
    expect(mcp).toContain("claude mcp");
    expect(mcp).toContain("MÔ PHỎNG");
    expect(mcp).not.toContain("mở Claude Code");
    const plugin = run(createShell("home-basic"), "claude plugin install x@y").out.join(" ");
    expect(plugin).toContain("claude plugin");
    expect(plugin).toContain("MÔ PHỎNG");
  });
});
