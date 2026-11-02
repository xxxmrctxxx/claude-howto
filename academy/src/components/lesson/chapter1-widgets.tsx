"use client";

import { Dices } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CAPABILITY_BINS, CAPABILITY_TASKS, CONTEXT_CAPACITY, CONTEXT_DOCS, FACT_CLAIMS, FACT_SOURCE, FACT_VERDICTS, MODEL_LINEUP, MODEL_SCENARIOS, NEXT_WORD_CONTEXTS, RULE_BOT } from "@/content/widgets/chapter1";
import { cn } from "@/lib/utils";
import type { WidgetProps } from "./widgets";

/** ch01-l01: guess the next word, then sample from the illustrative distribution. */
export function NextWordGame({ onComplete }: WidgetProps) {
  const [picked, setPicked] = useState<Record<string, string>>({});
  const [samples, setSamples] = useState<Record<string, string[]>>({});
  const [sampled, setSampled] = useState<Set<string>>(new Set());

  const sample = (id: string) => {
    const ctx = NEXT_WORD_CONTEXTS.find((c) => c.id === id)!;
    const draw = () => {
      let r = Math.random();
      for (const c of ctx.candidates) {
        if ((r -= c.p) <= 0) return c.word;
      }
      return ctx.candidates[0].word;
    };
    setSamples((s) => ({ ...s, [id]: Array.from({ length: 5 }, draw) }));
    const next = new Set(sampled).add(id);
    setSampled(next);
    if (NEXT_WORD_CONTEXTS.every((c) => picked[c.id] || c.id === id) && next.size === NEXT_WORD_CONTEXTS.length) onComplete?.();
  };

  return (
    <div className="grid gap-4 md:grid-cols-2" data-testid="next-word">
      {NEXT_WORD_CONTEXTS.map((ctx) => {
        const choice = picked[ctx.id];
        return (
          <div key={ctx.id} className="rounded-2xl border border-border bg-card p-4">
            <p className="text-[15px]">
              {ctx.prefix} <span className="rounded bg-primary-soft px-2 font-bold text-primary">{choice ?? "___"}</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Bạn đoán từ tiếp theo là gì?</p>
            <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={`Lựa chọn cho câu: ${ctx.prefix}`}>
              {ctx.candidates.map((c) => (
                <Button key={c.word} type="button" size="sm" variant={choice === c.word ? "default" : "outline"} aria-pressed={choice === c.word} onClick={() => setPicked((p) => ({ ...p, [ctx.id]: c.word }))}>
                  {c.word}
                </Button>
              ))}
            </div>
            {choice && (
              <div className="mt-4">
                <p className="text-sm font-semibold">Xác suất mô hình gán (minh hoạ)</p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {ctx.candidates.map((c) => (
                    <li key={c.word} className="grid grid-cols-[3.5rem_1fr_3rem] items-center gap-2 text-sm">
                      <span className={cn(c.word === choice && "font-bold text-primary")}>{c.word}</span>
                      <span className="h-3 overflow-hidden rounded-full bg-muted">
                        <span className="block h-full rounded-full bg-primary" style={{ width: `${c.p * 100}%` }} />
                      </span>
                      <span className="text-right text-xs">{Math.round(c.p * 100)}%</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">{ctx.note}</p>
                <Button type="button" size="sm" variant="secondary" className="mt-3" onClick={() => sample(ctx.id)} data-testid={`sample-${ctx.id}`}>
                  <Dices /> Sinh 5 lần
                </Button>
                {samples[ctx.id] && (
                  <p className="mt-2 font-mono text-sm" role="status">
                    {samples[ctx.id].join(" · ")}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
      {sampled.size === NEXT_WORD_CONTEXTS.length && (
        <p role="status" className="rounded-xl bg-success-soft p-3 text-sm font-semibold text-success md:col-span-2" data-testid="next-word-done">
          Bạn vừa thấy hai điều quan trọng: ngữ cảnh thay đổi xác suất, và lấy mẫu theo xác suất làm kết quả có thể khác nhau giữa các lần.
        </p>
      )}
    </div>
  );
}

/** ch01-l02: a real keyword chatbot the learner tries to trip up. */
export function BotCompare({ onComplete }: WidgetProps) {
  const [input, setInput] = useState("");
  const [log, setLog] = useState<{ q: string; a: string; matched: string | null; flagged: boolean }[]>([]);
  const flagged = log.filter((l) => l.flagged).length;

  const ask = (q: string) => {
    if (!q.trim()) return;
    const lower = q.toLowerCase();
    const rule = RULE_BOT.rules.find((r) => r.keywords.some((k) => lower.includes(k)));
    const matched = rule ? rule.keywords.find((k) => lower.includes(k))! : null;
    setLog((l) => [...l, { q, a: rule ? rule.reply : RULE_BOT.fallback, matched, flagged: false }]);
    setInput("");
  };

  return (
    <div className="flex flex-col gap-3" data-testid="bot-compare">
      <div className="flex flex-wrap gap-2">
        {RULE_BOT.suggestions.map((s) => (
          <Button key={s} type="button" size="sm" variant="outline" className="h-auto whitespace-normal py-1.5 text-left" onClick={() => ask(s)}>
            {s}
          </Button>
        ))}
      </div>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Gõ câu hỏi cho bot…"
          aria-label="Câu hỏi cho chatbot kịch bản"
          className="h-10 flex-1 rounded-xl border border-border bg-card px-3 text-sm"
          data-testid="bot-input"
        />
        <Button type="submit">Gửi</Button>
      </form>
      <ul className="flex flex-col gap-3" aria-live="polite">
        {log.map((l, i) => (
          <li key={i} className="rounded-2xl border border-border bg-card p-3 text-sm">
            <p>
              <strong>Bạn:</strong> {l.q}
            </p>
            <p className="mt-1">
              <strong>Bot:</strong> {l.a}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {l.matched ? `Quy tắc kích hoạt bởi từ khoá “${l.matched}”.` : "Không khớp từ khoá nào → câu trả lời mặc định."}
            </p>
            <Button
              type="button"
              size="sm"
              variant={l.flagged ? "default" : "outline"}
              className="mt-2"
              aria-pressed={l.flagged}
              onClick={() => {
                const next = log.map((x, j) => (j === i ? { ...x, flagged: !x.flagged } : x));
                setLog(next);
                if (next.filter((x) => x.flagged).length >= 2) onComplete?.();
              }}
              data-testid={`flag-${i}`}
            >
              Bot hiểu sai
            </Button>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground">Đã đánh dấu {flagged}/2 trường hợp bot hiểu sai.</p>
      {flagged >= 2 && (
        <p role="status" className="rounded-xl bg-success-soft p-3 text-sm font-semibold text-success">
          Bạn đã thấy giới hạn của bắt từ khoá: cùng một ý có nhiều cách nói, và một từ có nhiều nghĩa. Một trợ lý như Claude đọc cả câu để hiểu ý định — nhưng vẫn cần dữ liệu thật (điều khoản bảo hành) để trả lời chính xác.
        </p>
      )}
    </div>
  );
}

/** ch01-l03: pick a model for each scenario, with official reasoning as feedback. */
export function ModelPicker({ onComplete }: WidgetProps) {
  const [picks, setPicks] = useState<Record<string, string>>({});
  const allRight = MODEL_SCENARIOS.every((s) => picks[s.id] === s.answer);
  return (
    <div className="flex flex-col gap-3" data-testid="model-picker">
      {MODEL_SCENARIOS.map((s, i) => {
        const pick = picks[s.id];
        const right = pick === s.answer;
        return (
          <fieldset key={s.id} className="rounded-2xl border border-border bg-card p-4">
            <legend className="sr-only">Tình huống {i + 1}</legend>
            <p className="font-semibold">
              {i + 1}. {s.text}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {MODEL_LINEUP.map((m) => (
                <Button
                  key={m.id}
                  type="button"
                  size="sm"
                  variant={pick === m.id ? (right ? "success" : "default") : "outline"}
                  aria-pressed={pick === m.id}
                  onClick={() => {
                    const next = { ...picks, [s.id]: m.id };
                    setPicks(next);
                    if (MODEL_SCENARIOS.every((x) => next[x.id] === x.answer)) onComplete?.();
                  }}
                  data-testid={`pick-${s.id}-${m.id}`}
                >
                  {m.name.replace("Claude ", "")}
                </Button>
              ))}
            </div>
            {pick && (
              <p className={cn("mt-2 text-sm", right ? "text-success" : "text-danger")} role="status">
                {right ? `Chính xác. ${s.why}` : "Chưa phù hợp nhất — đọc lại mô tả từng model trong hình minh hoạ và thử lại."}
              </p>
            )}
          </fieldset>
        );
      })}
      {allRight && (
        <p role="status" className="rounded-xl bg-success-soft p-3 text-sm font-semibold text-success" data-testid="model-picker-done">
          Bạn đã chọn đúng cả 4 tình huống. Trong thực tế, hãy luôn thử nghiệm trên dữ liệu của chính bạn.
        </p>
      )}
    </div>
  );
}

/** ch01-l04: sort 8 tasks into 3 bins (select-based, works on touch and keyboard). */
export function CapabilitySorter({ onComplete }: WidgetProps) {
  const [bins, setBins] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const correct = CAPABILITY_TASKS.filter((t) => bins[t.id] === t.bin).length;
  return (
    <div className="flex flex-col gap-3" data-testid="capability-sorter">
      <ul className="flex flex-col gap-2">
        {CAPABILITY_TASKS.map((t) => {
          const ok = bins[t.id] === t.bin;
          return (
            <li key={t.id} className={cn("rounded-2xl border bg-card p-3", checked ? (ok ? "border-success" : "border-danger") : "border-border")}>
              <div className="grid gap-2 sm:grid-cols-[1fr_17rem] sm:items-center">
                <label htmlFor={`cap-${t.id}`} className="text-sm font-semibold">
                  {t.text}
                </label>
                <select
                  id={`cap-${t.id}`}
                  value={bins[t.id] ?? ""}
                  onChange={(e) => {
                    setBins((b) => ({ ...b, [t.id]: e.target.value }));
                    setChecked(false);
                  }}
                  className="h-10 rounded-lg border border-border bg-card px-2 text-sm"
                >
                  <option value="">— Chọn nhóm —</option>
                  {CAPABILITY_BINS.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>
              {checked && <p className={cn("mt-1 text-xs", ok ? "text-success" : "text-danger")}>{ok ? t.why : "Chưa đúng nhóm. Gợi ý: thông tin cần thiết nằm ở đâu, và ai chịu trách nhiệm?"}</p>}
            </li>
          );
        })}
      </ul>
      <Button
        type="button"
        className="self-start"
        disabled={Object.keys(bins).length < CAPABILITY_TASKS.length}
        onClick={() => {
          setChecked(true);
          if (correct === CAPABILITY_TASKS.length) onComplete?.();
        }}
        data-testid="capability-check"
      >
        Kiểm tra
      </Button>
      {checked && (
        <p role="status" className={cn("rounded-xl p-3 text-sm font-semibold", correct === CAPABILITY_TASKS.length ? "bg-success-soft text-success" : "bg-warning-soft text-warning")} data-testid="capability-result">
          Đúng {correct}/{CAPABILITY_TASKS.length}.
          {correct === CAPABILITY_TASKS.length ? " Bạn đã phân biệt rõ ba vùng khả năng." : " Sửa các mục viền đỏ rồi kiểm tra lại."}
        </p>
      )}
    </div>
  );
}

/** ch01-l05: curate documents into a limited context window (illustrative units). */
export function ContextWindowSim({ onComplete }: WidgetProps) {
  const [chosen, setChosen] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const used = CONTEXT_DOCS.filter((d) => chosen.includes(d.id)).reduce((s, d) => s + d.size, 0);
  const over = used > CONTEXT_CAPACITY;
  const missing = CONTEXT_DOCS.filter((d) => d.relevant && !chosen.includes(d.id));
  const noise = CONTEXT_DOCS.filter((d) => !d.relevant && chosen.includes(d.id));
  const ok = !over && missing.length === 0 && noise.length === 0;
  return (
    <div className="flex flex-col gap-4" data-testid="context-window">
      <div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold">Context window (minh hoạ)</span>
          <span className={cn("font-bold", over ? "text-danger" : "text-foreground")} data-testid="context-used">
            {used}/{CONTEXT_CAPACITY}
          </span>
        </div>
        <div className="mt-1 flex h-6 overflow-hidden rounded-full bg-muted" role="img" aria-label={`Đã dùng ${used} trên ${CONTEXT_CAPACITY} đơn vị`}>
          {CONTEXT_DOCS.filter((d) => chosen.includes(d.id)).map((d) => (
            <span
              key={d.id}
              className={cn("h-full border-r border-card", d.relevant ? "bg-success" : "bg-warning")}
              style={{ width: `${(d.size / Math.max(CONTEXT_CAPACITY, used)) * 100}%` }}
              title={d.name}
            />
          ))}
        </div>
        {over && (
          <p role="alert" className="mt-2 text-sm text-danger">
            Vượt giới hạn! Với API, yêu cầu sẽ bị từ chối (“prompt is too long”); giao diện chat có thể bỏ bớt phần cũ. Hãy bỏ tài liệu không liên quan.
          </p>
        )}
      </div>
      <ul className="grid gap-2 sm:grid-cols-2">
        {CONTEXT_DOCS.map((d) => {
          const on = chosen.includes(d.id);
          return (
            <li key={d.id}>
              <label className={cn("flex cursor-pointer items-center gap-3 rounded-xl border-2 bg-card p-3 text-sm", on ? "border-primary" : "border-border")}>
                <input
                  type="checkbox"
                  className="size-4 accent-[var(--primary)]"
                  checked={on}
                  onChange={() => {
                    setChosen((c) => (on ? c.filter((x) => x !== d.id) : [...c, d.id]));
                    setChecked(false);
                  }}
                />
                <span className="flex-1">{d.name}</span>
                <span className="text-xs text-muted-foreground">{d.size} đv</span>
              </label>
            </li>
          );
        })}
      </ul>
      <Button
        type="button"
        className="self-start"
        disabled={chosen.length === 0}
        onClick={() => {
          setChecked(true);
          if (ok) onComplete?.();
        }}
        data-testid="context-check"
      >
        Kiểm tra lựa chọn
      </Button>
      {checked && (
        <div role="status" className={cn("rounded-xl p-3 text-sm", ok ? "bg-success-soft text-success" : "bg-warning-soft text-warning")} data-testid="context-result">
          {ok ? (
            <p className="font-semibold">Tuyệt vời: đủ tài liệu cần thiết, không có tài liệu gây nhiễu, vẫn trong giới hạn.</p>
          ) : (
            <ul className="list-disc pl-5">
              {over && <li>Đang vượt giới hạn context.</li>}
              {missing.map((d) => (
                <li key={d.id}>Thiếu tài liệu liên quan: {d.name}.</li>
              ))}
              {noise.map((d) => (
                <li key={d.id}>Tài liệu không liên quan làm loãng context: {d.name}.</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

/** ch01-l06: verify each claim of a flawed practice answer against the source sheet. */
export function FactChecker({ onComplete }: WidgetProps) {
  const [v, setV] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const right = FACT_CLAIMS.filter((c) => v[c.id] === c.verdict).length;
  return (
    <div className="grid gap-4 lg:grid-cols-[18rem_minmax(0,1fr)]" data-testid="fact-checker">
      <div className="rounded-2xl border border-border bg-card p-4 lg:sticky lg:top-24 lg:self-start">
        <p className="text-sm font-bold">{FACT_SOURCE.title}</p>
        <ol className="mt-2 flex list-decimal flex-col gap-1 pl-5 font-mono text-xs">
          {FACT_SOURCE.lines.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col gap-2">
        <p className="rounded-xl bg-warning-soft p-2 text-xs text-warning">
          Câu trả lời mẫu do người biên soạn viết để luyện tập (cố ý có lỗi) — không phải câu trả lời thật của Claude.
        </p>
        {FACT_CLAIMS.map((c, i) => {
          const ok = v[c.id] === c.verdict;
          return (
            <fieldset key={c.id} className={cn("rounded-2xl border bg-card p-3", checked ? (ok ? "border-success" : "border-danger") : "border-border")}>
              <legend className="sr-only">Khẳng định {i + 1}</legend>
              <p className="text-sm font-semibold">
                {i + 1}. “{c.text}”
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {FACT_VERDICTS.map((f) => (
                  <label key={f.id} className={cn("flex cursor-pointer items-center gap-1.5 rounded-lg border px-2 py-1 text-xs", v[c.id] === f.id ? "border-primary bg-primary-soft/50" : "border-border")}>
                    <input
                      type="radio"
                      name={`fact-${c.id}`}
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
              {checked && <p className={cn("mt-1 text-xs", ok ? "text-success" : "text-danger")}>{ok ? c.why : "Chưa đúng — đối chiếu lại với phiếu thông số."}</p>}
            </fieldset>
          );
        })}
        <Button
          type="button"
          className="self-start"
          disabled={Object.keys(v).length < FACT_CLAIMS.length}
          onClick={() => {
            setChecked(true);
            if (right === FACT_CLAIMS.length) onComplete?.();
          }}
          data-testid="fact-check"
        >
          Kiểm tra
        </Button>
        {checked && (
          <p role="status" className={cn("rounded-xl p-3 text-sm font-semibold", right === FACT_CLAIMS.length ? "bg-success-soft text-success" : "bg-warning-soft text-warning")} data-testid="fact-result">
            Đúng {right}/{FACT_CLAIMS.length}.{" "}
            {right === FACT_CLAIMS.length
              ? "Bạn đã phát hiện cả lỗi sai số liệu lẫn thông tin không có căn cứ."
              : "Lưu ý ba trạng thái: khớp, sai lệch, và không có căn cứ."}
          </p>
        )}
      </div>
    </div>
  );
}
