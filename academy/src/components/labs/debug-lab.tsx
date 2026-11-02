"use client";

import { Bug, CheckCircle2, Lightbulb, Play, RotateCcw, XCircle } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEBUG_CHALLENGES } from "@/content/labs/debug-challenges";
import { runInWorker, type TestResult } from "@/lib/engine/code/runner";
import { LEVEL_LABEL } from "@/lib/engine/question/adaptive";
import { recordLab } from "@/lib/progress/actions";
import { XP } from "@/lib/progress/gamification";
import { updateProgress } from "@/lib/progress/store";
import { cn } from "@/lib/utils";
import { CodeEditor } from "./code-editor";

function Step({ n, title, done, children }: { n: number; title: string; done: boolean; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-4" aria-labelledby={`dbg-step-${n}`}>
      <h2 id={`dbg-step-${n}`} className="mb-3 flex items-center gap-2 font-bold">
        <span className={cn("flex size-6 items-center justify-center rounded-full text-xs", done ? "bg-success text-white dark:text-background" : "bg-muted")}>{done ? "✓" : n}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export function DebugLab() {
  const [id, setId] = useState(DEBUG_CHALLENGES[0].id);
  const ch = DEBUG_CHALLENGES.find((c) => c.id === id)!;
  const [line, setLine] = useState<number | null>(null);
  const [fix, setFix] = useState<string | null>(null);
  const [code, setCode] = useState(ch.code);
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [running, setRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [runs, setRuns] = useState(0);

  const choose = (cid: string) => {
    const c = DEBUG_CHALLENGES.find((x) => x.id === cid)!;
    setId(cid);
    setLine(null);
    setFix(null);
    setCode(c.code);
    setResults(null);
    setShowSolution(false);
    setRuns(0);
  };

  const lineOk = line === ch.buggyLine;
  const fixOpt = ch.fixOptions.find((f) => f.id === fix);
  const allPass = results?.every((r) => r.passed) ?? false;

  const run = async () => {
    setRunning(true);
    const r = await runInWorker(code, ch.tests);
    setRunning(false);
    setResults(r);
    setRuns((n) => n + 1);
    const passed = r.every((x) => x.passed);
    const score = r.filter((x) => x.passed).length / r.length;
    updateProgress((s) =>
      recordLab(
        s,
        { labId: "debug", itemId: ch.id, score, passed, at: new Date().toISOString(), summary: `${ch.title}: ${r.filter((x) => x.passed).length}/${r.length} test` },
        { key: `lab:debug:${ch.id}`, amount: XP.labPass, reason: `Debug: ${ch.title}` },
      ),
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold">Thử thách</p>
        {DEBUG_CHALLENGES.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={c.id === id}
            onClick={() => choose(c.id)}
            className={cn("cursor-pointer rounded-xl border-2 p-3 text-left text-sm", c.id === id ? "border-primary bg-primary-soft/60" : "border-border bg-card hover:bg-accent")}
            data-testid={`challenge-${c.id}`}
          >
            <span className="font-bold">{c.title}</span>
            <span className="mt-1 block text-xs text-muted-foreground">{LEVEL_LABEL[c.difficulty]}</span>
          </button>
        ))}
      </div>

      <div className="flex min-w-0 flex-col gap-4">
        <div className="rounded-2xl bg-warning-soft p-4 text-sm">
          <p className="flex items-center gap-2 font-bold text-warning">
            <Bug className="size-4" aria-hidden="true" /> Tình huống
          </p>
          <p className="mt-1">{ch.story}</p>
        </div>

        <Step n={1} title="Tìm dòng gây lỗi (bấm vào số dòng)" done={lineOk}>
          <div className="overflow-x-auto rounded-xl bg-terminal-bg font-mono text-[13px] text-terminal-fg" role="group" aria-label="Mã nguồn có lỗi" tabIndex={0}>
            {ch.code.split("\n").map((l, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLine(i + 1)}
                aria-pressed={line === i + 1}
                className={cn("flex w-full cursor-pointer text-left hover:bg-white/10", line === i + 1 && (lineOk ? "bg-success/30" : "bg-danger/30"))}
                data-testid={`code-line-${i + 1}`}
              >
                <span className="w-10 shrink-0 select-none pr-3 text-right opacity-50">{i + 1}</span>
                <span className="whitespace-pre">{l}</span>
              </button>
            ))}
          </div>
          {line !== null && (
            <p role="status" className={cn("mt-2 text-sm", lineOk ? "text-success" : "text-danger")}>
              {lineOk ? ch.lineFeedback : `Dòng ${line} không phải nguyên nhân. Đọc lại tình huống: kết quả sai theo kiểu nào?`}
            </p>
          )}
        </Step>

        <Step n={2} title="Đề xuất cách sửa" done={Boolean(fixOpt?.correct)}>
          <div className="flex flex-col gap-2" role="radiogroup" aria-label="Cách sửa">
            {ch.fixOptions.map((f) => (
              <button
                key={f.id}
                type="button"
                role="radio"
                aria-checked={fix === f.id}
                onClick={() => setFix(f.id)}
                className={cn(
                  "cursor-pointer rounded-xl border-2 p-3 text-left text-sm",
                  fix === f.id ? (f.correct ? "border-success bg-success-soft/60" : "border-danger bg-danger-soft/60") : "border-border hover:bg-accent",
                )}
              >
                {f.text}
              </button>
            ))}
          </div>
          {fixOpt && <p className={cn("mt-2 text-sm", fixOpt.correct ? "text-success" : "text-danger")}>{fixOpt.feedback}</p>}
        </Step>

        <Step n={3} title="Sửa code" done={allPass}>
          <CodeEditor value={code} onChange={setCode} label={`Code của hàm ${ch.functionName}`} />
          <div className="mt-2 flex flex-wrap gap-2">
            <Button type="button" variant="outline" size="sm" onClick={() => setCode(ch.code)}>
              <RotateCcw /> Khôi phục code gốc
            </Button>
          </div>
        </Step>

        <Step n={4} title="Chạy test" done={allPass}>
          <Button type="button" onClick={run} disabled={running} data-testid="debug-run">
            <Play /> {running ? "Đang chạy…" : "Chạy unit test"}
          </Button>
          {results && (
            <ul className="mt-3 flex flex-col gap-1.5 text-sm" data-testid="debug-results">
              {results.map((r) => (
                <li key={r.name} className={cn("rounded-xl p-2.5", r.passed ? "bg-success-soft" : "bg-danger-soft")}>
                  <p className="flex items-center gap-2 font-semibold">
                    {r.passed ? <CheckCircle2 className="size-4 text-success" aria-label="qua" /> : <XCircle className="size-4 text-danger" aria-label="trượt" />}
                    {r.name}
                  </p>
                  {!r.passed && (
                    <p className="mt-1 font-mono text-xs">
                      {r.error ? `Lỗi: ${r.error}` : `Mong đợi ${r.expected}, nhận được ${r.actual}`}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Step>

        <Step n={5} title="Phản hồi" done={allPass}>
          {!results ? (
            <p className="text-sm text-muted-foreground">Chạy test để nhận phản hồi.</p>
          ) : allPass ? (
            <p role="status" className="text-sm font-semibold text-success" data-testid="debug-pass">
              Tất cả {results.length} test đều qua sau {runs} lần chạy. Bạn đã sửa đúng nguyên nhân gốc!
            </p>
          ) : (
            <div className="text-sm">
              <p className="font-semibold text-danger">
                {results.filter((r) => r.passed).length}/{results.length} test qua.
              </p>
              <p className="mt-1 flex items-start gap-1.5 text-muted-foreground">
                <Lightbulb className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden="true" />
                So sánh “mong đợi” với “nhận được”: chênh lệch theo quy luật nào? Quay lại bước 1–2 nếu cần.
              </p>
            </div>
          )}
          {(allPass || runs >= 2) && (
            <div className="mt-3">
              <Button type="button" variant="outline" size="sm" onClick={() => setShowSolution((v) => !v)}>
                {showSolution ? "Ẩn" : "Xem"} đáp án tham khảo
              </Button>
              {showSolution && <pre className="mt-2 overflow-x-auto rounded-xl bg-muted p-3 font-mono text-xs" tabIndex={0}>{ch.solution}</pre>}
            </div>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            <Badge variant="neutral">Cách chạy</Badge> Code của bạn chạy thật trong một Web Worker riêng của trình duyệt, giới hạn 3 giây.
          </p>
        </Step>
      </div>
    </div>
  );
}
