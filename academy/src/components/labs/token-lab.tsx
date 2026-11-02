"use client";

import { CheckCircle2, Info, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { CHARS_PER_LINE, QUALITY, TASK, TOKEN_QUIZ, workflowA, workflowB, type TokenParams } from "@/content/labs/token-scenario";
import { conversationCost, estimateTokens, illustrativeTokens } from "@/lib/engine/tokens/estimate";
import { recordLab } from "@/lib/progress/actions";
import { XP } from "@/lib/progress/gamification";
import { updateProgress } from "@/lib/progress/store";
import { cn } from "@/lib/utils";

const fmt = (n: number) => n.toLocaleString("vi-VN");
const CHIP = ["bg-primary-soft", "bg-info-soft", "bg-success-soft", "bg-warning-soft"];

function Slider({ label, value, min, max, step = 1, onChange, id }: { label: string; value: number; min: number; max: number; step?: number; onChange: (v: number) => void; id: string }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1 text-sm">
      <span className="flex justify-between">
        <span>{label}</span>
        <strong>{value}</strong>
      </span>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="accent-[var(--primary)]" data-testid={id} />
    </label>
  );
}

function Bars({ a, b }: { a: number[]; b: number[] }) {
  const max = Math.max(...a, ...b, 1);
  const n = Math.max(a.length, b.length);
  const W = 520;
  const H = 200;
  const bw = Math.min(28, (W - 60) / n / 2.6);
  return (
    <svg viewBox={`0 0 ${W} ${H + 30}`} className="w-full" role="img" aria-label="Biểu đồ token đầu vào theo từng lượt của hai workflow">
      {[0.25, 0.5, 0.75, 1].map((t) => (
        <line key={t} x1="40" x2={W} y1={H - t * H + 10} y2={H - t * H + 10} stroke="var(--border)" strokeDasharray="3 3" />
      ))}
      {Array.from({ length: n }, (_, i) => {
        const x = 50 + i * ((W - 60) / n);
        return (
          <g key={i}>
            {a[i] !== undefined && <rect x={x} y={H - (a[i] / max) * H + 10} width={bw} height={(a[i] / max) * H} rx="3" fill="var(--danger)" />}
            {b[i] !== undefined && <rect x={x + bw + 3} y={H - (b[i] / max) * H + 10} width={bw} height={(b[i] / max) * H} rx="3" fill="var(--success)" />}
            <text x={x + bw} y={H + 26} textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">
              L{i + 1}
            </text>
          </g>
        );
      })}
      <text x="4" y="18" fontSize="10" fill="var(--muted-foreground)">
        {fmt(max)}
      </text>
    </svg>
  );
}

export function TokenLab() {
  const [p, setP] = useState<TokenParams>({ files: 40, linesPerFile: 150, followUps: 3 });
  const [text, setText] = useState("Bạn là kỹ sư QA. Hãy tóm tắt báo cáo lỗi tuần 44 (Weekly defect report) trong 5 gạch đầu dòng.");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const A = useMemo(() => conversationCost(workflowA(p)), [p]);
  const B = useMemo(() => conversationCost(workflowB(p)), [p]);
  const sentA = workflowA(p).reduce((s, t) => s + t.sentChars, 0);
  const sentB = workflowB(p).reduce((s, t) => s + t.sentChars, 0);
  const tokens = illustrativeTokens(text);
  const allRight = TOKEN_QUIZ.every((q) => q.options.find((o) => o.id === answers[q.id])?.correct);

  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-2xl border border-border bg-card p-5" aria-labelledby="tok-viz">
        <h2 id="tok-viz" className="text-lg font-bold">
          1. Văn bản được chia thành token như thế nào?
        </h2>
        <Textarea aria-label="Văn bản cần ước tính token" value={text} onChange={(e) => setText(e.target.value)} className="mt-3 min-h-20" data-testid="token-text" />
        <div className="mt-3 flex flex-wrap gap-0.5 font-mono text-sm" aria-label="Các mảnh token minh hoạ">
          {tokens.map((t, i) => (
            <span key={i} className={cn("rounded px-0.5 whitespace-pre", CHIP[i % CHIP.length])}>
              {t}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm">
          {fmt(text.length)} ký tự · <strong data-testid="token-estimate">≈ {fmt(estimateTokens(text))} token</strong> (ước tính)
        </p>
        <p className="mt-1 flex gap-1.5 text-xs text-muted-foreground">
          <Info className="mt-0.5 size-3 shrink-0" aria-hidden="true" />
          Cách chia ở trên chỉ để minh hoạ. Tokenizer thật của Claude học các mảnh từ dữ liệu; số đúng chỉ có từ API đếm token. Ước tính dùng tỷ lệ Anthropic công bố (~2,5 ký tự/token cho văn bản thông thường) và tính chữ có dấu nặng hơn.
        </p>
      </section>

      <section className="rounded-2xl border border-border bg-card p-5" aria-labelledby="tok-compare">
        <h2 id="tok-compare" className="text-lg font-bold">
          2. Hai workflow, cùng một nhiệm vụ
        </h2>
        <p className="mt-1 text-sm">
          <strong>Nhiệm vụ:</strong> {TASK}
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Slider id="tok-files" label="Số file trong dự án" value={p.files} min={5} max={100} onChange={(v) => setP({ ...p, files: v })} />
          <Slider id="tok-lines" label="Số dòng trung bình mỗi file" value={p.linesPerFile} min={50} max={400} step={10} onChange={(v) => setP({ ...p, linesPerFile: v })} />
          <Slider id="tok-followups" label="Số lượt hỏi lại (workflow A)" value={p.followUps} min={1} max={6} onChange={(v) => setP({ ...p, followUps: v })} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Giả định: {CHARS_PER_LINE} ký tự/dòng code. Mỗi lượt gửi lại toàn bộ lịch sử hội thoại.</p>

        <div className="mt-4 overflow-x-auto" tabIndex={0}>
          <table className="w-full min-w-[34rem] text-sm" data-testid="token-table">
            <caption className="sr-only">So sánh hai workflow (số liệu mô phỏng)</caption>
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2">Chỉ số (mô phỏng)</th>
                <th className="py-2 text-danger">A — Dán cả dự án</th>
                <th className="py-2 text-success">B — Có mục tiêu</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2">Số lượt tương tác</td>
                <td>{A.perTurn.length}</td>
                <td>{B.perTurn.length}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2">Lượng văn bản bạn gửi</td>
                <td>{fmt(sentA)} ký tự</td>
                <td>{fmt(sentB)} ký tự</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2">Token đầu vào (kể cả lịch sử)</td>
                <td>≈ {fmt(A.totalInput)}</td>
                <td>≈ {fmt(B.totalInput)}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2">Token đầu ra</td>
                <td>≈ {fmt(A.totalOutput)}</td>
                <td>≈ {fmt(B.totalOutput)}</td>
              </tr>
              <tr className="font-bold">
                <td className="py-2">Tổng token ước tính</td>
                <td data-testid="token-total-a">≈ {fmt(A.total)}</td>
                <td data-testid="token-total-b">≈ {fmt(B.total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 rounded-xl bg-primary-soft/60 p-3 text-sm font-semibold" data-testid="token-ratio">
          Workflow A tốn khoảng {(A.total / B.total).toFixed(1)} lần token so với workflow B.
        </p>
        <div className="mt-4">
          <p className="text-sm font-semibold">Token đầu vào theo từng lượt</p>
          <Bars a={A.perTurn.map((t) => t.input)} b={B.perTurn.map((t) => t.input)} />
          <p className="flex gap-4 text-xs">
            <span className="flex items-center gap-1">
              <span className="size-3 rounded bg-danger" /> Workflow A
            </span>
            <span className="flex items-center gap-1">
              <span className="size-3 rounded bg-success" /> Workflow B
            </span>
          </p>
        </div>
        <div className="mt-4 overflow-x-auto" tabIndex={0}>
          <table className="w-full min-w-[34rem] text-sm">
            <caption className="mb-1 text-left text-sm font-semibold">Chất lượng đầu ra — đánh giá định tính, không phải số đo</caption>
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2">Khía cạnh</th>
                <th className="py-2">A</th>
                <th className="py-2">B</th>
              </tr>
            </thead>
            <tbody>
              {QUALITY.map((q) => (
                <tr key={q.aspect} className="border-b border-border">
                  <td className="py-2">{q.aspect}</td>
                  <td>{q.a}</td>
                  <td>{q.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-5" aria-labelledby="tok-quiz">
        <h2 id="tok-quiz" className="text-lg font-bold">
          3. Rút ra kết luận
        </h2>
        {TOKEN_QUIZ.map((q) => (
          <fieldset key={q.id} className="mt-3">
            <legend className="font-semibold">{q.question}</legend>
            <div className="mt-2 flex flex-col gap-2">
              {q.options.map((o) => (
                <label key={o.id} className={cn("flex cursor-pointer items-start gap-2 rounded-xl border p-2.5 text-sm", answers[q.id] === o.id ? "border-primary bg-primary-soft/40" : "border-border")}>
                  <input type="radio" name={q.id} className="mt-1 accent-[var(--primary)]" checked={answers[q.id] === o.id} onChange={() => { setAnswers((a) => ({ ...a, [q.id]: o.id })); setChecked(false); }} />
                  {o.text}
                </label>
              ))}
            </div>
            {checked && (
              <p className={cn("mt-2 flex items-start gap-1.5 text-sm", q.options.find((o) => o.id === answers[q.id])?.correct ? "text-success" : "text-danger")}>
                {q.options.find((o) => o.id === answers[q.id])?.correct ? <CheckCircle2 className="mt-0.5 size-4 shrink-0" /> : <XCircle className="mt-0.5 size-4 shrink-0" />}
                {q.explain}
              </p>
            )}
          </fieldset>
        ))}
        <Button
          type="button"
          className="mt-4"
          disabled={Object.keys(answers).length < TOKEN_QUIZ.length}
          onClick={() => {
            setChecked(true);
            updateProgress((s) =>
              recordLab(
                s,
                { labId: "token", itemId: "two-workflows", score: allRight ? 1 : 0.5, passed: allRight, at: new Date().toISOString(), summary: allRight ? "Phân tích đúng 2/2" : "Phân tích chưa đúng hết" },
                { key: "lab:token:two-workflows", amount: XP.labPass, reason: "Token Optimization Lab" },
              ),
            );
          }}
          data-testid="token-submit"
        >
          Kiểm tra kết luận
        </Button>
        {checked && allRight && (
          <p role="status" className="mt-3 text-sm font-semibold text-success" data-testid="token-pass">
            Chính xác! Bạn đã hiểu vì sao làm việc có mục tiêu tiết kiệm token.
          </p>
        )}
      </section>
    </div>
  );
}
