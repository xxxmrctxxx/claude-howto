"use client";

import { CheckCircle2, Circle, GitBranch, FolderTree as FolderIcon, RotateCcw, Trophy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TERMINAL_MISSIONS } from "@/content/labs/terminal-missions";
import { createShell, evaluateCheck, normalizePath, type ShellState } from "@/lib/engine/terminal/shell";
import { recordLab } from "@/lib/progress/actions";
import { XP } from "@/lib/progress/gamification";
import { updateProgress } from "@/lib/progress/store";
import { cn } from "@/lib/utils";
import { FolderTree } from "./folder-tree";
import { GitGraph } from "./git-graph";
import { TerminalEmulator } from "./terminal";

/** Advance through consecutive steps whose check now holds. */
export function advance(state: ShellState, steps: (typeof TERMINAL_MISSIONS)[number]["steps"], done: number): number {
  let d = done;
  while (d < steps.length && evaluateCheck(state, steps[d].check)) d++;
  return d;
}

export function TerminalLab() {
  const [missionId, setMissionId] = useState(TERMINAL_MISSIONS[0].id);
  const mission = TERMINAL_MISSIONS.find((m) => m.id === missionId)!;
  const [shell, setShell] = useState<ShellState>(() => createShell(mission.preset));
  const [done, setDone] = useState(0);
  const [term, setTerm] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const reset = (id = missionId) => {
    const m = TERMINAL_MISSIONS.find((x) => x.id === id)!;
    setMissionId(id);
    setShell(createShell(m.preset));
    setDone(0);
    setShowHint(false);
    setTerm((t) => t + 1);
  };

  const onChange = (s: ShellState) => {
    setShell(s);
    const next = advance(s, mission.steps, done);
    if (next !== done) setShowHint(false);
    if (next === mission.steps.length && done < mission.steps.length) {
      updateProgress((p) =>
        recordLab(
          p,
          { labId: "terminal", itemId: mission.id, score: 1, passed: true, at: new Date().toISOString(), summary: `Hoàn thành: ${mission.title}` },
          { key: `lab:terminal:${mission.id}`, amount: XP.labPass, reason: `Terminal: ${mission.title}` },
        ),
      );
    }
    setDone(next);
  };

  const repoPath = Object.keys(shell.repos).find((r) => shell.cwd === r || shell.cwd.startsWith(`${r}/`)) ?? normalizePath("~/web-qa", "/", shell.home);
  const finished = done === mission.steps.length;

  return (
    <div className="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)_18rem]">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-bold">Nhiệm vụ</p>
        {TERMINAL_MISSIONS.map((m) => (
          <button
            key={m.id}
            type="button"
            aria-pressed={m.id === missionId}
            onClick={() => reset(m.id)}
            className={cn("cursor-pointer rounded-xl border-2 p-3 text-left text-sm", m.id === missionId ? "border-primary bg-primary-soft/60" : "border-border bg-card hover:bg-accent")}
            data-testid={`mission-${m.id}`}
          >
            <span className="font-bold">{m.title}</span>
            <span className="mt-0.5 block text-xs text-muted-foreground">{m.goal}</span>
          </button>
        ))}
      </div>

      <div className="flex min-w-0 flex-col gap-4">
        <div className="rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="font-bold">{mission.title}</p>
            <span className="text-sm text-muted-foreground" data-testid="mission-progress">
              {done}/{mission.steps.length} bước
            </span>
          </div>
          <Progress className="mt-2" value={(done / mission.steps.length) * 100} label="Tiến độ nhiệm vụ" />
          <ol className="mt-3 flex flex-col gap-1.5 text-sm">
            {mission.steps.map((s, i) => (
              <li key={s.instruction} className={cn("flex items-start gap-2", i === done && "font-semibold", i > done && "text-muted-foreground")}>
                {i < done ? <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-label="xong" /> : <Circle className="mt-0.5 size-4 shrink-0" aria-label="chưa xong" />}
                <span>
                  {s.instruction}
                  {i === done && showHint && (
                    <code className="ml-2 rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-normal" data-testid="mission-hint">
                      {s.hint}
                    </code>
                  )}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-3 flex flex-wrap gap-2">
            {!finished && (
              <Button type="button" size="sm" variant="secondary" onClick={() => setShowHint(true)}>
                Gợi ý lệnh
              </Button>
            )}
            <Button type="button" size="sm" variant="outline" onClick={() => reset()}>
              <RotateCcw /> Làm lại nhiệm vụ
            </Button>
          </div>
          {finished && (
            <p role="status" className="mt-3 flex items-center gap-2 rounded-xl bg-success-soft p-3 text-sm font-semibold text-success" data-testid="mission-done">
              <Trophy className="size-4" /> Hoàn thành nhiệm vụ! Thử nhiệm vụ tiếp theo ở cột bên trái.
            </p>
          )}
        </div>
        <TerminalEmulator key={`${missionId}-${term}`} state={shell} onChange={onChange} height="h-80" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-bold">
            <FolderIcon className="size-4 text-primary" aria-hidden="true" /> Cây thư mục
          </p>
          <FolderTree state={shell} />
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-bold">
            <GitBranch className="size-4 text-primary" aria-hidden="true" /> Sơ đồ Git
          </p>
          <GitGraph repo={shell.repos[repoPath]} />
        </div>
      </div>
    </div>
  );
}
