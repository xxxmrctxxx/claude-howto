"use client";

import { ArrowDown, ArrowUp, CheckCircle2, Circle, RotateCcw, Trophy, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { TerminalEmulator } from "@/components/labs/terminal";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { COMPONENTS } from "@/components/visuals/prompt-anatomy";
import { evaluatePrompt, RECOMMENDED_ORDER, type PromptEvaluation } from "@/lib/engine/prompt/evaluate";
import { createRng, seedFromString, shuffle } from "@/lib/engine/question/text";
import { createShell, evaluateCheck, type ShellState } from "@/lib/engine/terminal/shell";
import type { GenericSim } from "@/lib/types/content";
import { cn } from "@/lib/utils";
import type { WidgetProps } from "./widgets";

type Of<K extends GenericSim["kind"]> = Extract<GenericSim, { kind: K }>;

function Result({ ok, children, testId = "sim-result" }: { ok: boolean; children: React.ReactNode; testId?: string }) {
  return (
    <div role="status" className={cn("rounded-xl p-3 text-sm font-semibold", ok ? "bg-success-soft text-success" : "bg-warning-soft text-warning")} data-testid={testId}>
      {children}
    </div>
  );
}

function ClassifySim({ sim, onComplete }: { sim: Of<"classify"> } & WidgetProps) {
  const [bins, setBins] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const right = sim.items.filter((t) => bins[t.id] === t.bin).length;
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col gap-2">
        {sim.items.map((t) => {
          const ok = bins[t.id] === t.bin;
          return (
            <li key={t.id} className={cn("rounded-2xl border bg-card p-3", checked ? (ok ? "border-success" : "border-danger") : "border-border")}>
              <div className="grid gap-2 sm:grid-cols-[1fr_16rem] sm:items-center">
                <label htmlFor={`cls-${t.id}`} className="text-sm font-semibold">
                  {t.text}
                </label>
                <select
                  id={`cls-${t.id}`}
                  value={bins[t.id] ?? ""}
                  onChange={(e) => {
                    setBins((b) => ({ ...b, [t.id]: e.target.value }));
                    setChecked(false);
                  }}
                  className="h-10 rounded-lg border border-border bg-card px-2 text-sm"
                >
                  <option value="">— Chọn —</option>
                  {sim.bins.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>
              {checked && <p className={cn("mt-1 text-xs", ok ? "text-success" : "text-danger")}>{ok ? t.why : "Chưa đúng — đọc lại phần giải thích của bài và thử lại."}</p>}
            </li>
          );
        })}
      </ul>
      <Button
        type="button"
        className="self-start"
        disabled={Object.keys(bins).length < sim.items.length}
        onClick={() => {
          setChecked(true);
          if (right === sim.items.length) onComplete?.();
        }}
        data-testid="sim-check"
      >
        Kiểm tra
      </Button>
      {checked && (
        <Result ok={right === sim.items.length}>
          Đúng {right}/{sim.items.length}.{right === sim.items.length ? " Tuyệt vời!" : " Sửa các mục viền đỏ rồi kiểm tra lại."}
        </Result>
      )}
    </div>
  );
}

function ChooseSim({ sim, onComplete }: { sim: Of<"choose"> } & WidgetProps) {
  const [picks, setPicks] = useState<Record<string, string>>({});
  const allRight = sim.scenarios.every((s) => picks[s.id] === s.answer);
  return (
    <div className="flex flex-col gap-3">
      {sim.scenarios.map((s, i) => {
        const pick = picks[s.id];
        const right = pick === s.answer;
        return (
          <fieldset key={s.id} className="rounded-2xl border border-border bg-card p-4">
            <legend className="sr-only">Tình huống {i + 1}</legend>
            <p className="font-semibold">
              {i + 1}. {s.text}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {sim.options.map((o) => (
                <Button
                  key={o.id}
                  type="button"
                  size="sm"
                  variant={pick === o.id ? (right ? "success" : "default") : "outline"}
                  aria-pressed={pick === o.id}
                  className="h-auto whitespace-normal py-1.5 text-left"
                  onClick={() => {
                    const next = { ...picks, [s.id]: o.id };
                    setPicks(next);
                    if (sim.scenarios.every((x) => next[x.id] === x.answer)) onComplete?.();
                  }}
                  data-testid={`choose-${s.id}-${o.id}`}
                >
                  {o.label}
                </Button>
              ))}
            </div>
            {pick && (
              <p className={cn("mt-2 text-sm", right ? "text-success" : "text-danger")} role="status">
                {right ? `Chính xác. ${s.why}` : "Chưa phù hợp nhất — thử lại."}
              </p>
            )}
          </fieldset>
        );
      })}
      {allRight && <Result ok>Bạn đã chọn đúng tất cả tình huống.</Result>}
    </div>
  );
}

function SequenceSim({ sim, onComplete }: { sim: Of<"sequence"> } & WidgetProps) {
  const initial = useMemo(() => {
    let order = shuffle(sim.items, createRng(seedFromString(sim.items.map((i) => i.id).join())));
    if (order.every((it, i) => it.id === sim.items[i].id)) order = [...order.slice(1), order[0]];
    return order;
  }, [sim]);
  const [items, setItems] = useState(initial);
  const [checked, setChecked] = useState(false);
  const move = (from: number, to: number) => {
    setItems((it) => {
      const next = [...it];
      const [x] = next.splice(from, 1);
      next.splice(to, 0, x);
      return next;
    });
    setChecked(false);
  };
  const right = items.filter((it, i) => it.id === sim.items[i].id).length;
  return (
    <div className="flex flex-col gap-3">
      <ol className="flex flex-col gap-2">
        {items.map((it, i) => (
          <li
            key={it.id}
            className={cn(
              "flex items-center gap-2 rounded-xl border bg-card p-2.5 text-sm",
              checked ? (it.id === sim.items[i].id ? "border-success" : "border-danger") : "border-border",
            )}
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold">{i + 1}</span>
            <span className="flex-1">{it.text}</span>
            <Button type="button" variant="ghost" size="sm" disabled={i === 0} onClick={() => move(i, i - 1)} aria-label={`Đưa lên: ${it.text}`}>
              <ArrowUp />
            </Button>
            <Button type="button" variant="ghost" size="sm" disabled={i === items.length - 1} onClick={() => move(i, i + 1)} aria-label={`Đưa xuống: ${it.text}`}>
              <ArrowDown />
            </Button>
          </li>
        ))}
      </ol>
      <Button
        type="button"
        className="self-start"
        onClick={() => {
          setChecked(true);
          if (right === sim.items.length) onComplete?.();
        }}
        data-testid="sim-check"
      >
        Kiểm tra thứ tự
      </Button>
      {checked && (
        <Result ok={right === sim.items.length}>
          {right === sim.items.length ? `Đúng thứ tự! ${sim.explain}` : `Đúng vị trí ${right}/${sim.items.length}. Các mục viền đỏ đang sai chỗ.`}
        </Result>
      )}
    </div>
  );
}

function HighlightSim({ sim, onComplete }: { sim: Of<"highlight"> } & WidgetProps) {
  const [picked, setPicked] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const ok = sim.segments.every((s) => s.target === picked.includes(s.id));
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold">{sim.instruction}</p>
      <div className="rounded-xl border border-border bg-muted/40 p-3 text-[15px] leading-9">
        {sim.segments.map((s) => {
          const on = picked.includes(s.id);
          const wrong = checked && s.target !== on;
          return (
            <button
              key={s.id}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setPicked((p) => (on ? p.filter((x) => x !== s.id) : [...p, s.id]));
                setChecked(false);
              }}
              className={cn(
                "mr-1 cursor-pointer rounded-md px-1 py-0.5 text-left hover:bg-warning-soft",
                on && "bg-primary-soft font-semibold text-primary",
                wrong && "ring-2 ring-danger",
              )}
              data-testid={`hl-${s.id}`}
            >
              {s.text}
            </button>
          );
        })}
      </div>
      <Button
        type="button"
        className="self-start"
        disabled={picked.length === 0}
        onClick={() => {
          setChecked(true);
          if (ok) onComplete?.();
        }}
        data-testid="sim-check"
      >
        Kiểm tra
      </Button>
      {checked && (
        <Result ok={ok}>
          {ok ? "Chính xác!" : "Chưa đúng hết — các đoạn viền đỏ cần đổi lựa chọn."}
          <ul className="mt-2 flex flex-col gap-1 font-normal">
            {sim.segments
              .filter((s) => s.why && (ok || s.target !== picked.includes(s.id)))
              .map((s) => (
                <li key={s.id}>
                  “{s.text.trim()}” — {s.why}
                </li>
              ))}
          </ul>
        </Result>
      )}
    </div>
  );
}

function VerifySim({ sim, onComplete }: { sim: Of<"verify"> } & WidgetProps) {
  const [v, setV] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const right = sim.claims.filter((c) => v[c.id] === c.verdict).length;
  return (
    <div className="grid gap-4 lg:grid-cols-[18rem_minmax(0,1fr)]">
      <div className="rounded-2xl border border-border bg-card p-4 lg:sticky lg:top-24 lg:self-start">
        <p className="text-sm font-bold">{sim.sourceTitle}</p>
        <ol className="mt-2 flex list-decimal flex-col gap-1 pl-5 font-mono text-xs">
          {sim.sourceLines.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col gap-2">
        {sim.note && <p className="rounded-xl bg-warning-soft p-2 text-xs text-warning">{sim.note}</p>}
        {sim.claims.map((c, i) => {
          const ok = v[c.id] === c.verdict;
          return (
            <fieldset key={c.id} className={cn("rounded-2xl border bg-card p-3", checked ? (ok ? "border-success" : "border-danger") : "border-border")}>
              <legend className="sr-only">Mục {i + 1}</legend>
              <p className="text-sm font-semibold">
                {i + 1}. {c.text}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sim.verdicts.map((f) => (
                  <label key={f.id} className={cn("flex cursor-pointer items-center gap-1.5 rounded-lg border px-2 py-1 text-xs", v[c.id] === f.id ? "border-primary bg-primary-soft/50" : "border-border")}>
                    <input
                      type="radio"
                      name={`verify-${c.id}`}
                      className="accent-[var(--primary)]"
                      checked={v[c.id] === f.id}
                      onChange={() => {
                        setV((x) => ({ ...x, [c.id]: f.id }));
                        setChecked(false);
                      }}
                    />
                    {f.label}
                  </label>
                ))}
              </div>
              {checked && <p className={cn("mt-1 text-xs", ok ? "text-success" : "text-danger")}>{ok ? c.why : "Chưa đúng — đối chiếu lại với nguồn."}</p>}
            </fieldset>
          );
        })}
        <Button
          type="button"
          className="self-start"
          disabled={Object.keys(v).length < sim.claims.length}
          onClick={() => {
            setChecked(true);
            if (right === sim.claims.length) onComplete?.();
          }}
          data-testid="sim-check"
        >
          Kiểm tra
        </Button>
        {checked && (
          <Result ok={right === sim.claims.length}>
            Đúng {right}/{sim.claims.length}.
          </Result>
        )}
      </div>
    </div>
  );
}

function TerminalSim({ sim, onComplete }: { sim: Of<"terminal"> } & WidgetProps) {
  const [shell, setShell] = useState<ShellState>(() => createShell(sim.preset));
  const [done, setDone] = useState(0);
  const [hint, setHint] = useState(false);
  const [key, setKey] = useState(0);
  const finished = done === sim.steps.length;
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-2xl border border-border bg-card p-4">
        <Progress value={(done / sim.steps.length) * 100} label="Tiến độ nhiệm vụ terminal" />
        <ol className="mt-3 flex flex-col gap-1.5 text-sm">
          {sim.steps.map((s, i) => (
            <li key={s.instruction} className={cn("flex items-start gap-2", i === done && "font-semibold", i > done && "text-muted-foreground")}>
              {i < done ? <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-label="xong" /> : <Circle className="mt-0.5 size-4 shrink-0" aria-label="chưa xong" />}
              <span>
                {s.instruction}
                {i === done && hint && <code className="ml-2 rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-normal">{s.hint}</code>}
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-3 flex flex-wrap gap-2">
          {!finished && (
            <Button type="button" size="sm" variant="secondary" onClick={() => setHint(true)}>
              Gợi ý lệnh
            </Button>
          )}
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => {
              setShell(createShell(sim.preset));
              setDone(0);
              setHint(false);
              setKey((k) => k + 1);
            }}
          >
            <RotateCcw /> Làm lại
          </Button>
        </div>
        {finished && (
          <p role="status" className="mt-3 flex items-center gap-2 rounded-xl bg-success-soft p-3 text-sm font-semibold text-success" data-testid="sim-result">
            <Trophy className="size-4" /> Hoàn thành nhiệm vụ terminal!
          </p>
        )}
      </div>
      <TerminalEmulator
        key={key}
        state={shell}
        height="h-64"
        onChange={(s) => {
          setShell(s);
          let d = done;
          while (d < sim.steps.length && evaluateCheck(s, sim.steps[d].check)) d++;
          if (d !== done) setHint(false);
          if (d === sim.steps.length && done < sim.steps.length) onComplete?.();
          setDone(d);
        }}
      />
    </div>
  );
}

function PromptLabSim({ sim, onComplete }: { sim: Of<"prompt-lab"> } & WidgetProps) {
  const [blocks, setBlocks] = useState(sim.starter);
  const [result, setResult] = useState<PromptEvaluation | null>(null);
  const [showRef, setShowRef] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <p className="rounded-xl bg-muted/60 p-3 text-sm">
        <strong>Yêu cầu công việc:</strong> {sim.brief}
      </p>
      {COMPONENTS.map((c) => (
        <div key={c.id}>
          <label htmlFor={`pl-${c.id}`} className="mb-1 flex items-center gap-2 text-sm font-semibold">
            <span className="size-2.5 rounded-full" style={{ background: c.color }} aria-hidden="true" />
            {c.label} · {c.vi}
          </label>
          <Textarea id={`pl-${c.id}`} value={blocks[c.id]} onChange={(e) => setBlocks((b) => ({ ...b, [c.id]: e.target.value }))} className="min-h-14 text-sm" data-testid={`pl-${c.id}`} />
        </div>
      ))}
      <Button
        type="button"
        className="self-start"
        onClick={() => {
          const r = evaluatePrompt(blocks, RECOMMENDED_ORDER, sim.expectations);
          setResult(r);
          if (r.overall >= 0.8) onComplete?.();
        }}
        data-testid="sim-check"
      >
        Đánh giá prompt
      </Button>
      {result && (
        <div className="rounded-2xl border border-border bg-card p-4" role="status" data-testid="sim-result">
          <p className={cn("text-lg font-extrabold", result.overall >= 0.8 ? "text-success" : "text-warning")}>{Math.round(result.overall * 100)}%</p>
          <ul className="mt-2 flex flex-col gap-1 text-xs">
            {result.criteria.flatMap((c) =>
              c.findings.map((f) => (
                <li key={`${c.id}-${f.text}`} className="flex items-start gap-1.5">
                  {f.ok ? <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-success" aria-label="đạt" /> : <XCircle className="mt-0.5 size-3.5 shrink-0 text-danger" aria-label="chưa đạt" />}
                  <span>
                    <strong>{c.label}:</strong> {f.text}
                  </span>
                </li>
              )),
            )}
          </ul>
          <Button type="button" variant="outline" size="sm" className="mt-3" onClick={() => setShowRef((v) => !v)}>
            {showRef ? "Ẩn" : "Xem"} đáp án tham khảo
          </Button>
          {showRef && <pre className="mt-2 rounded-xl bg-muted p-3 font-sans text-sm whitespace-pre-wrap">{RECOMMENDED_ORDER.map((id) => sim.reference[id]).join("\n")}</pre>}
          <p className="mt-2 text-[11px] text-muted-foreground">Chấm bằng quy tắc, không phải AI — xem từng tiêu chí để biết cần sửa gì.</p>
        </div>
      )}
    </div>
  );
}

/** Dispatches a data-driven simulation to its renderer. */
export function GenericSimView({ sim, onComplete }: { sim: GenericSim } & WidgetProps) {
  const body = (() => {
    switch (sim.kind) {
      case "classify":
        return <ClassifySim sim={sim} onComplete={onComplete} />;
      case "choose":
        return <ChooseSim sim={sim} onComplete={onComplete} />;
      case "sequence":
        return <SequenceSim sim={sim} onComplete={onComplete} />;
      case "highlight":
        return <HighlightSim sim={sim} onComplete={onComplete} />;
      case "verify":
        return <VerifySim sim={sim} onComplete={onComplete} />;
      case "terminal":
        return <TerminalSim sim={sim} onComplete={onComplete} />;
      case "prompt-lab":
        return <PromptLabSim sim={sim} onComplete={onComplete} />;
    }
  })();
  return (
    <div data-testid={`sim-${sim.kind}`} className="flex flex-col gap-3">
      {body}
    </div>
  );
}
