"use client";

import { AlertTriangle, CheckCircle2, ClipboardCheck, Eye, Target, XCircle } from "lucide-react";
import { useState } from "react";
import { CopyButton } from "@/components/lesson/copy-button";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { PROJECT, PROJECT_STEPS } from "@/content/labs/project-steps";
import { runHtmlChecks, type HtmlCheckResult } from "@/lib/engine/code/html-checks";
import { recordLab, setLabState } from "@/lib/progress/actions";
import { XP } from "@/lib/progress/gamification";
import { updateProgress, useProgress, useProgressReady } from "@/lib/progress/store";
import { cn } from "@/lib/utils";

interface SavedState {
  manual: Record<string, number[]>;
  auto: Record<string, boolean>;
}

export function ProjectBuilderLab() {
  const state = useProgress();
  const ready = useProgressReady();
  const saved = (state.labState["project-builder"] as SavedState | undefined) ?? { manual: {}, auto: {} };
  const [active, setActive] = useState(0);
  const [html, setHtml] = useState("");
  const [results, setResults] = useState<HtmlCheckResult[] | null>(null);
  const [preview, setPreview] = useState(false);
  const step = PROJECT_STEPS[active];

  const stepDone = (i: number) => {
    const s = PROJECT_STEPS[i];
    const manualOk = (saved.manual[s.id]?.length ?? 0) === s.manualChecks.length;
    const autoOk = s.autoChecks.length === 0 || saved.auto[s.id];
    return manualOk && autoOk;
  };
  const doneCount = PROJECT_STEPS.filter((_, i) => stepDone(i)).length;

  const save = (next: SavedState) => {
    updateProgress((p) => {
      let s = setLabState(p, "project-builder", next);
      const all = PROJECT_STEPS.every((st) => (next.manual[st.id]?.length ?? 0) === st.manualChecks.length && (st.autoChecks.length === 0 || next.auto[st.id]));
      if (all) {
        s = recordLab(
          s,
          { labId: "project-builder", itemId: "qa-tracker", score: 1, passed: true, at: new Date().toISOString(), summary: `Hoàn thành dự án: ${PROJECT.title}` },
          { key: "lab:project-builder:qa-tracker", amount: XP.labPass * 2, reason: `Dự án: ${PROJECT.title}` },
        );
      }
      return s;
    });
  };

  const toggleManual = (i: number) => {
    const cur = saved.manual[step.id] ?? [];
    save({ ...saved, manual: { ...saved.manual, [step.id]: cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i] } });
  };

  const check = () => {
    const r = runHtmlChecks(html, step.autoChecks);
    setResults(r);
    const ok = r.every((x) => x.passed);
    save({ ...saved, auto: { ...saved.auto, [step.id]: ok } });
    updateProgress((p) =>
      recordLab(p, {
        labId: "project-builder",
        itemId: step.id,
        score: r.filter((x) => x.passed).length / r.length,
        passed: ok,
        at: new Date().toISOString(),
        summary: `${step.title}: ${r.filter((x) => x.passed).length}/${r.length} kiểm tra`,
      }),
    );
  };

  if (!ready) return <div className="h-96 animate-pulse rounded-2xl bg-muted" aria-hidden="true" />;

  return (
    <div className="grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
      <div className="flex flex-col gap-3">
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="font-bold">{PROJECT.title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{PROJECT.summary}</p>
          <Progress className="mt-3" value={(doneCount / PROJECT_STEPS.length) * 100} label="Tiến độ dự án" />
          <p className="mt-1 text-xs text-muted-foreground" data-testid="project-progress">
            {doneCount}/{PROJECT_STEPS.length} bước hoàn thành
          </p>
        </div>
        <ol className="flex flex-col gap-2">
          {PROJECT_STEPS.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                aria-current={i === active ? "step" : undefined}
                onClick={() => {
                  setActive(i);
                  setResults(null);
                  setPreview(false);
                }}
                className={cn("flex w-full cursor-pointer items-center gap-2 rounded-xl border-2 p-3 text-left text-sm", i === active ? "border-primary bg-primary-soft/60" : "border-border bg-card hover:bg-accent")}
                data-testid={`project-step-${s.id}`}
              >
                {stepDone(i) ? <CheckCircle2 className="size-4 shrink-0 text-success" aria-label="xong" /> : <span className="flex size-4 shrink-0 items-center justify-center text-xs font-bold">{i + 1}</span>}
                {s.title.replace(/^Bước \d+ — /, "")}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex min-w-0 flex-col gap-4">
        <section className="rounded-2xl border border-border bg-card p-5" aria-labelledby="pb-step-title">
          <h2 id="pb-step-title" className="text-xl font-extrabold">
            {step.title}
          </h2>
          <p className="mt-2 flex items-start gap-2">
            <Target className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <strong>Mục tiêu:</strong> {step.goal}
            </span>
          </p>
          <div className="mt-4">
            <p className="mb-1 text-sm font-bold">Prompt mẫu (dán vào Claude)</p>
            <pre className="rounded-xl bg-muted p-3 font-sans text-sm whitespace-pre-wrap">{step.prompt}</pre>
            <div className="mt-2">
              <CopyButton text={step.prompt} label="Sao chép prompt" />
            </div>
          </div>
          <p className="mt-4 text-sm">
            <strong>Kết quả mong đợi:</strong> {step.expected}
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5" aria-labelledby="pb-verify">
          <h3 id="pb-verify" className="flex items-center gap-2 font-bold">
            <ClipboardCheck className="size-4 text-primary" aria-hidden="true" /> Cách kiểm tra
          </h3>
          <fieldset className="mt-2">
            <legend className="text-sm text-muted-foreground">Tự kiểm tra (đánh dấu khi bạn đã thử):</legend>
            {step.manualChecks.map((c, i) => (
              <label key={c} className="flex cursor-pointer items-start gap-2 py-1 text-sm">
                <input type="checkbox" className="mt-1 size-4 accent-[var(--primary)]" checked={(saved.manual[step.id] ?? []).includes(i)} onChange={() => toggleManual(i)} />
                {c}
              </label>
            ))}
          </fieldset>
          {step.autoChecks.length > 0 && (
            <div className="mt-4">
              <label htmlFor="pb-html" className="text-sm font-semibold">
                Dán toàn bộ file HTML Claude đã tạo để kiểm tra tự động
              </label>
              <Textarea id="pb-html" value={html} onChange={(e) => setHtml(e.target.value)} className="mt-1 min-h-40 font-mono text-xs" placeholder="<!doctype html>…" data-testid="project-html" />
              <div className="mt-2 flex flex-wrap gap-2">
                <Button type="button" disabled={html.trim().length < 20} onClick={check} data-testid="project-check">
                  Kiểm tra cấu trúc
                </Button>
                <Button type="button" variant="outline" disabled={html.trim().length < 20} onClick={() => setPreview((v) => !v)}>
                  <Eye /> {preview ? "Ẩn" : "Xem"} bản xem trước
                </Button>
              </div>
              {results && (
                <ul className="mt-3 flex flex-col gap-1.5 text-sm" role="status" data-testid="project-results">
                  {results.map((r) => (
                    <li key={r.label} className="flex items-start gap-2">
                      {r.passed ? <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-label="đạt" /> : <XCircle className="mt-0.5 size-4 shrink-0 text-danger" aria-label="chưa đạt" />}
                      <span>
                        <strong>{r.label}</strong> — {r.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {preview && (
                <div className="mt-3">
                  <iframe title="Xem trước trang của bạn" sandbox="allow-scripts allow-forms" srcDoc={html} className="h-96 w-full rounded-xl border border-border bg-white" />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Bản xem trước chạy trong sandbox cô lập: localStorage có thể bị chặn ở đây. Hãy lưu thành file .html và mở bằng trình duyệt để thử lưu dữ liệu.
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-border bg-card p-5" aria-labelledby="pb-errors">
          <h3 id="pb-errors" className="flex items-center gap-2 font-bold">
            <AlertTriangle className="size-4 text-warning" aria-hidden="true" /> Lỗi thường gặp & cách sửa
          </h3>
          <dl className="mt-2 flex flex-col gap-2 text-sm">
            {step.commonErrors.map((e) => (
              <div key={e.error} className="rounded-xl bg-muted/60 p-3">
                <dt className="font-semibold">{e.error}</dt>
                <dd className="mt-1 text-muted-foreground">{e.fix}</dd>
              </div>
            ))}
          </dl>
        </section>
        <div className="flex justify-between">
          <Button type="button" variant="outline" disabled={active === 0} onClick={() => { setActive((a) => a - 1); setResults(null); }}>
            Bước trước
          </Button>
          <Button type="button" disabled={active === PROJECT_STEPS.length - 1} onClick={() => { setActive((a) => a + 1); setResults(null); }}>
            Bước tiếp theo
          </Button>
        </div>
      </div>
    </div>
  );
}
