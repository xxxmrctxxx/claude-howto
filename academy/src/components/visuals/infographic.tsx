import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Bug,
  ChartColumn,
  CheckCircle2,
  Clock,
  Code2,
  Coins,
  Cpu,
  File,
  Folder,
  GitBranch,
  Globe,
  Layers,
  List,
  MessageSquare,
  Plug,
  Repeat,
  Rocket,
  Search,
  Shield,
  Tag,
  Target,
  Terminal,
  User,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Infographic, InfographicIcon } from "@/lib/types/content";
import { cn } from "@/lib/utils";

const ICONS: Record<InfographicIcon, LucideIcon> = {
  message: MessageSquare,
  user: User,
  file: File,
  target: Target,
  check: CheckCircle2,
  alert: AlertTriangle,
  cpu: Cpu,
  layers: Layers,
  list: List,
  code: Code2,
  terminal: Terminal,
  git: GitBranch,
  search: Search,
  tag: Tag,
  repeat: Repeat,
  shield: Shield,
  zap: Zap,
  book: BookOpen,
  folder: Folder,
  plug: Plug,
  globe: Globe,
  chart: ChartColumn,
  clock: Clock,
  coins: Coins,
  wrench: Wrench,
  bug: Bug,
  rocket: Rocket,
};

const TONE_COLOR: Record<string, string> = {
  role: "var(--c-role)",
  context: "var(--c-context)",
  task: "var(--c-task)",
  constraints: "var(--c-constraints)",
  output: "var(--c-output)",
  neutral: "var(--muted-foreground)",
};

/** Renders a data-driven infographic (see Infographic in lib/types/content.ts). */
export function InfographicView({ data }: { data: Infographic }) {
  switch (data.kind) {
    case "flow":
      return (
        <ol className={cn("grid gap-3", data.steps.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3")} data-testid="infographic">
          {data.steps.map((s, i) => {
            const Icon = s.icon ? ICONS[s.icon] : null;
            return (
              <li key={s.title} className="relative flex flex-col gap-2 rounded-2xl border border-border bg-card p-4">
                <span className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    {Icon ? <Icon className="size-4" aria-hidden="true" /> : <span className="text-sm font-bold">{i + 1}</span>}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Bước {i + 1}</span>
                </span>
                <span className="font-bold">{s.title}</span>
                <span className="text-sm text-muted-foreground">{s.body}</span>
                {i < data.steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden size-4 -translate-y-1/2 text-primary lg:block" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      );
    case "compare":
      return (
        <div className={cn("grid gap-4", data.columns.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2")} data-testid="infographic">
          {data.columns.map((c) => (
            <div
              key={c.title}
              className={cn(
                "rounded-2xl border-2 p-4",
                c.tone === "bad" && "border-danger/40 bg-danger-soft/40",
                c.tone === "good" && "border-success/40 bg-success-soft/40",
                c.tone === "neutral" && "border-border bg-muted/40",
              )}
            >
              <p
                className={cn(
                  "text-xs font-bold uppercase tracking-wide",
                  c.tone === "bad" && "text-danger",
                  c.tone === "good" && "text-success",
                  c.tone === "neutral" && "text-muted-foreground",
                )}
              >
                {c.title}
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                {c.items.map((it) => (
                  <li key={it} className="rounded-xl bg-card p-2.5">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "cards":
      return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-testid="infographic">
          {data.cards.map((c) => {
            const Icon = c.icon ? ICONS[c.icon] : null;
            return (
              <div key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-4">
                <p className="flex items-center gap-2 font-bold">
                  {Icon && <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />}
                  {c.title}
                </p>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{c.body}</p>
                {c.foot && <p className="mt-3 rounded-xl bg-success-soft p-2 text-xs font-semibold text-success">{c.foot}</p>}
              </div>
            );
          })}
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Bảng minh hoạ" data-testid="infographic">
          <table className="w-full min-w-[34rem] text-sm">
            <thead>
              <tr className="text-left">
                {data.headers.map((h, i) => (
                  <th key={h} className={cn("bg-primary-soft p-3", i === 0 && "rounded-tl-xl", i === data.headers.length - 1 && "rounded-tr-xl")}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r, i) => (
                <tr key={r[0]} className={i % 2 ? "bg-muted/40" : "bg-card"}>
                  {r.map((cell, j) => (
                    <td key={j} className={cn("p-3 align-top", j === 0 && "font-semibold")}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "annotated":
      return (
        <div className="overflow-hidden rounded-2xl border border-border" data-testid="infographic">
          <p className="border-b border-border bg-muted/60 px-4 py-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">{data.label}</p>
          <ol className="divide-y divide-border">
            {data.lines.map((l, i) => (
              <li key={i} className="grid gap-1 px-4 py-2.5 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:gap-4">
                <code
                  className="border-l-4 pl-3 font-mono text-[13px] whitespace-pre-wrap"
                  style={{ borderColor: TONE_COLOR[l.tone ?? "neutral"] }}
                >
                  {l.text}
                </code>
                {l.note && <span className="text-sm text-muted-foreground">← {l.note}</span>}
              </li>
            ))}
          </ol>
        </div>
      );
  }
}
