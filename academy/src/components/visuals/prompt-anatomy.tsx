import { Check, HelpCircle } from "lucide-react";

export const COMPONENTS = [
  { id: "role", label: "Role", vi: "Vai trò", color: "var(--c-role)" },
  { id: "context", label: "Context", vi: "Bối cảnh", color: "var(--c-context)" },
  { id: "task", label: "Task", vi: "Nhiệm vụ", color: "var(--c-task)" },
  { id: "constraints", label: "Constraints", vi: "Ràng buộc", color: "var(--c-constraints)" },
  { id: "output", label: "Output", vi: "Định dạng", color: "var(--c-output)" },
] as const;

export type ComponentId = (typeof COMPONENTS)[number]["id"];

function ScoreRing({ value, total, tone }: { value: number; total: number; tone: "bad" | "good" }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const color = tone === "good" ? "var(--success)" : "var(--danger)";
  return (
    <svg viewBox="0 0 64 64" className="size-16 shrink-0" role="img" aria-label={`Đủ ${value} trên ${total} thành phần`}>
      <circle cx="32" cy="32" r={r} fill="none" stroke="var(--muted)" strokeWidth="7" />
      <circle
        cx="32"
        cy="32"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${(value / total) * c} ${c}`}
        transform="rotate(-90 32 32)"
      />
      <text x="32" y="37" textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--foreground)">
        {value}/{total}
      </text>
    </svg>
  );
}

const BAD_ROWS: Record<ComponentId, { ok: boolean; text: string }> = {
  role: { ok: false, text: "Ai viết? Góc nhìn chuyên môn nào?" },
  context: { ok: false, text: "Báo cáo về sự việc gì? Ai đọc?" },
  task: { ok: true, text: "“Viết báo cáo” — có, nhưng rất chung" },
  constraints: { ok: false, text: "Gồm những phần nào? Dài bao nhiêu?" },
  output: { ok: false, text: "Định dạng nào? Ngôn ngữ nào?" },
};

const GOOD_SEGMENTS: { text: string; id: ComponentId | null }[] = [
  { text: "Bạn là kỹ sư QA.", id: "role" },
  { text: " Hãy ", id: null },
  { text: "viết báo cáo 8D", id: "task" },
  { text: " về ", id: null },
  { text: "lỗi rò dầu máy biến áp", id: "context" },
  { text: ", ", id: null },
  { text: "trình bày song ngữ Việt - Anh", id: "output" },
  { text: ", ", id: null },
  { text: "gồm nguyên nhân, hành động khắc phục và phòng ngừa", id: "constraints" },
  { text: ".", id: null },
];

const GOOD_ROWS: Record<ComponentId, string> = {
  role: "kỹ sư QA",
  context: "lỗi rò dầu máy biến áp",
  task: "viết báo cáo 8D",
  constraints: "nguyên nhân, khắc phục, phòng ngừa",
  output: "song ngữ Việt - Anh",
};

/** Infographic comparing the structure of a vague prompt and a complete one. */
export function PromptAnatomy() {
  const color = (id: ComponentId) => COMPONENTS.find((c) => c.id === id)!.color;
  return (
    <div className="grid gap-4 md:grid-cols-2" data-testid="prompt-anatomy">
      <div className="rounded-2xl border-2 border-danger/40 bg-danger-soft/40 p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-danger">Prompt chưa tốt</p>
            <p className="mt-1 font-mono text-2xl font-bold">“Viết báo cáo.”</p>
          </div>
          <ScoreRing value={1} total={5} tone="bad" />
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {COMPONENTS.map((c) => {
            const row = BAD_ROWS[c.id];
            return (
              <li key={c.id} className="flex items-start gap-2 rounded-xl bg-card p-2.5 text-sm">
                <span
                  className="mt-0.5 inline-flex min-w-24 items-center justify-center rounded-lg px-2 py-0.5 text-xs font-bold text-white dark:text-background"
                  style={{ background: row.ok ? color(c.id) : "var(--muted-foreground)" }}
                >
                  {c.label}
                </span>
                {row.ok ? (
                  <Check className="mt-0.5 size-4 shrink-0 text-success" aria-label="có" />
                ) : (
                  <HelpCircle className="mt-0.5 size-4 shrink-0 text-danger" aria-label="thiếu" />
                )}
                <span>{row.text}</span>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 rounded-xl bg-card p-2.5 text-center text-sm font-semibold text-danger">Claude phải tự đoán 4 điều</p>
      </div>

      <div className="rounded-2xl border-2 border-success/40 bg-success-soft/40 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-wide text-success">Prompt tốt</p>
          <ScoreRing value={5} total={5} tone="good" />
        </div>
        <p className="mt-1 rounded-xl bg-card p-3 text-[15px] leading-8">
          {GOOD_SEGMENTS.map((s, i) =>
            s.id ? (
              <mark
                key={i}
                className="rounded-md bg-transparent px-0.5 font-semibold text-foreground underline decoration-[3px] underline-offset-4"
                style={{ textDecorationColor: color(s.id) }}
              >
                {s.text}
              </mark>
            ) : (
              <span key={i}>{s.text}</span>
            ),
          )}
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {COMPONENTS.map((c) => (
            <li key={c.id} className="flex items-start gap-2 rounded-xl bg-card p-2.5 text-sm">
              <span
                className="mt-0.5 inline-flex min-w-24 items-center justify-center rounded-lg px-2 py-0.5 text-xs font-bold text-white dark:text-background"
                style={{ background: c.color }}
              >
                {c.label}
              </span>
              <Check className="mt-0.5 size-4 shrink-0 text-success" aria-label="có" />
              <span>{GOOD_ROWS[c.id]}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 rounded-xl bg-card p-2.5 text-center text-sm font-semibold text-success">Claude không phải đoán điều gì</p>
      </div>
    </div>
  );
}
