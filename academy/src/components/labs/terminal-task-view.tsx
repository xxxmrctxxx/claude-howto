"use client";

import { CheckCircle2, Circle, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createShell, evaluateCheck } from "@/lib/engine/terminal/shell";
import type { QuestionResponse, TerminalTaskQuestion } from "@/lib/types/content";
import { TerminalEmulator } from "./terminal";

/** Quiz renderer for terminal-task questions: goals are checked against the simulated state. */
export function TerminalTaskView({
  q,
  disabled,
  onSubmit,
}: {
  q: TerminalTaskQuestion;
  disabled: boolean;
  onSubmit: (r: QuestionResponse) => void;
}) {
  const [shell, setShell] = useState(() => createShell(q.preset));
  const [key, setKey] = useState(0);
  const results = q.checks.map((c, i) => ({ id: String(i), passed: evaluateCheck(shell, c), label: c.label }));
  return (
    <div className="flex flex-col gap-3">
      <TerminalEmulator key={key} state={shell} onChange={(s) => setShell(s)} height="h-56" disabled={disabled} />
      <ul className="flex flex-col gap-1 text-sm" aria-label="Mục tiêu cần đạt">
        {results.map((r) => (
          <li key={r.id} className="flex items-center gap-2">
            {r.passed ? <CheckCircle2 className="size-4 text-success" aria-label="đạt" /> : <Circle className="size-4 text-muted-foreground" aria-label="chưa đạt" />}
            {r.label}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <Button type="button" disabled={disabled} onClick={() => onSubmit({ kind: "terminal", results: results.map(({ id, passed }) => ({ id, passed })) })} data-testid="quiz-submit">
          Kiểm tra kết quả
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          onClick={() => {
            setShell(createShell(q.preset));
            setKey((k) => k + 1);
          }}
        >
          <RotateCcw /> Làm lại từ đầu
        </Button>
      </div>
    </div>
  );
}
