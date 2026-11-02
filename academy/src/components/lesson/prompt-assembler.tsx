"use client";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { CheckCircle2, GripVertical, RotateCcw, XCircle } from "lucide-react";
import { useState } from "react";
import { ASSEMBLER_SNIPPETS, type AssemblerSnippet } from "@/content/widgets/prompt-assembler";
import { Button } from "@/components/ui/button";
import { COMPONENTS, type ComponentId } from "@/components/visuals/prompt-anatomy";
import { cn } from "@/lib/utils";
import { estimateTokens } from "@/lib/engine/tokens/estimate";
import { CopyButton } from "./copy-button";

type Slot = ComponentId | "pool";

function Snippet({
  snippet,
  selected,
  onSelect,
  status,
}: {
  snippet: AssemblerSnippet;
  selected: boolean;
  onSelect: () => void;
  status?: "ok" | "bad";
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: snippet.id });
  return (
    <div
      ref={setNodeRef}
      style={transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined}
      className={cn(
        "flex items-start gap-2 rounded-xl border bg-card p-2.5 text-sm shadow-sm transition-shadow",
        selected ? "border-primary ring-2 ring-primary/40" : "border-border",
        isDragging && "z-10 shadow-lg",
        status === "ok" && "border-success",
        status === "bad" && "border-danger",
      )}
      data-testid={`snippet-${snippet.id}`}
    >
      <button
        type="button"
        className="mt-0.5 cursor-grab touch-none rounded text-muted-foreground active:cursor-grabbing"
        aria-label={`Kéo mảnh: ${snippet.text}`}
        {...listeners}
        {...attributes}
      >
        <GripVertical className="size-4" />
      </button>
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        className="flex-1 cursor-pointer text-left"
        aria-label={`${selected ? "Bỏ chọn" : "Chọn"} mảnh: ${snippet.text}`}
      >
        {snippet.text}
      </button>
      {status === "ok" && <CheckCircle2 className="size-4 shrink-0 text-success" aria-label="đúng" />}
      {status === "bad" && <XCircle className="size-4 shrink-0 text-danger" aria-label="sai" />}
    </div>
  );
}

function DropZone({
  id,
  label,
  sub,
  color,
  children,
  onPlace,
  canPlace,
}: {
  id: Slot;
  label: string;
  sub?: string;
  color?: string;
  children: React.ReactNode;
  onPlace: () => void;
  canPlace: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={cn(
        "rounded-2xl border-2 border-dashed p-2.5 transition-colors",
        isOver ? "border-primary bg-primary-soft/50" : "border-border",
      )}
      data-testid={`slot-${id}`}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 text-sm font-bold">
          {color && <span className="size-2.5 rounded-full" style={{ background: color }} aria-hidden="true" />}
          {label}
          {sub && <span className="font-normal text-muted-foreground">· {sub}</span>}
        </span>
        {canPlace && (
          <Button type="button" size="sm" variant="secondary" onClick={onPlace} data-testid={`place-${id}`}>
            Đặt vào đây
          </Button>
        )}
      </div>
      <div className="flex min-h-12 flex-col gap-2">{children}</div>
    </div>
  );
}

export function PromptAssembler({ onComplete }: { onComplete?: () => void }) {
  const [placement, setPlacement] = useState<Record<string, Slot>>(() =>
    Object.fromEntries(ASSEMBLER_SNIPPETS.map((s) => [s.id, "pool" as Slot])),
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 120, tolerance: 6 } }),
    useSensor(KeyboardSensor),
  );

  const move = (snippetId: string, to: Slot) => {
    setPlacement((p) => {
      const next = { ...p };
      if (to !== "pool") {
        for (const [sid, slot] of Object.entries(next)) if (slot === to && sid !== snippetId) next[sid] = "pool";
      }
      next[snippetId] = to;
      return next;
    });
    setSelected(null);
    setChecked(false);
  };

  const onDragEnd = (e: DragEndEvent) => {
    if (e.over) move(String(e.active.id), e.over.id as Slot);
  };

  const statusOf = (s: AssemblerSnippet): "ok" | "bad" | undefined => {
    if (!checked) return undefined;
    const slot = placement[s.id];
    if (slot === "pool") return s.belongsTo === null ? "ok" : undefined;
    return slot === s.belongsTo ? "ok" : "bad";
  };

  const allCorrect = ASSEMBLER_SNIPPETS.every((s) => (placement[s.id] === "pool" ? s.belongsTo === null : placement[s.id] === s.belongsTo));
  const filled = COMPONENTS.filter((c) => Object.values(placement).includes(c.id)).length;
  const assembled = COMPONENTS.map((c) => ASSEMBLER_SNIPPETS.find((s) => placement[s.id] === c.id)?.text)
    .filter(Boolean)
    .join("\n");

  const renderIn = (slot: Slot) =>
    ASSEMBLER_SNIPPETS.filter((s) => placement[s.id] === slot).map((s) => (
      <div key={s.id} className="flex flex-col gap-1">
        <Snippet snippet={s} selected={selected === s.id} onSelect={() => setSelected(selected === s.id ? null : s.id)} status={statusOf(s)} />
        {slot !== "pool" && (
          <button type="button" className="self-end text-xs text-muted-foreground underline" onClick={() => move(s.id, "pool")}>
            Bỏ ra
          </button>
        )}
      </div>
    ));

  return (
    <div className="flex flex-col gap-4" data-testid="prompt-assembler">
      <DndContext sensors={sensors} onDragEnd={onDragEnd}>
        <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <DropZone id="pool" label="Các mảnh câu" sub="kéo hoặc chọn" onPlace={() => selected && move(selected, "pool")} canPlace={Boolean(selected && placement[selected] !== "pool")}>
            {renderIn("pool")}
            {ASSEMBLER_SNIPPETS.every((s) => placement[s.id] !== "pool") && (
              <p className="text-sm text-muted-foreground">Hết mảnh. Nhớ rằng có mảnh gây nhiễu không thuộc ô nào!</p>
            )}
          </DropZone>
          <div className="flex flex-col gap-2.5">
            {COMPONENTS.map((c) => (
              <DropZone
                key={c.id}
                id={c.id}
                label={c.label}
                sub={c.vi}
                color={c.color}
                onPlace={() => selected && move(selected, c.id)}
                canPlace={Boolean(selected)}
              >
                {renderIn(c.id)}
              </DropZone>
            ))}
          </div>
        </div>
      </DndContext>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          onClick={() => {
            setChecked(true);
            if (allCorrect) onComplete?.();
          }}
          data-testid="assembler-check"
        >
          Kiểm tra
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setPlacement(Object.fromEntries(ASSEMBLER_SNIPPETS.map((s) => [s.id, "pool" as Slot])));
            setChecked(false);
          }}
        >
          <RotateCcw /> Làm lại
        </Button>
        <span className="text-sm text-muted-foreground">Đã điền {filled}/5 ô</span>
      </div>

      {checked && (
        <div
          role="status"
          className={cn("rounded-2xl p-4 text-sm", allCorrect ? "bg-success-soft" : "bg-warning-soft")}
          data-testid="assembler-result"
        >
          {allCorrect ? (
            <p className="font-semibold text-success">Tuyệt vời! Bạn đã lắp đúng cả 5 thành phần và loại bỏ 2 mảnh gây nhiễu.</p>
          ) : (
            <p className="font-semibold text-warning">Chưa đúng hết. Các mảnh viền đỏ đang ở sai ô — đọc gợi ý bên dưới rồi thử lại.</p>
          )}
          <ul className="mt-3 flex flex-col gap-1.5">
            {ASSEMBLER_SNIPPETS.filter((s) => statusOf(s) !== "ok").map((s) => (
              <li key={s.id}>
                <strong>“{s.text.slice(0, 40)}…”</strong> — {s.explain}
              </li>
            ))}
          </ul>
        </div>
      )}

      {checked && allCorrect && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="mb-2 text-sm font-bold">Prompt hoàn chỉnh của bạn</p>
            <pre className="font-sans text-sm leading-relaxed whitespace-pre-wrap">{assembled}</pre>
            <div className="mt-3">
              <CopyButton text={assembled} label="Sao chép prompt" />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 text-sm">
            <p className="mb-3 font-bold">Phân tích so sánh</p>
            {[
              { label: "“Viết báo cáo.”", n: 1, chars: "Viết báo cáo.".length, tone: "var(--danger)" },
              { label: "Prompt của bạn", n: 5, chars: assembled.length, tone: "var(--success)" },
            ].map((row) => (
              <div key={row.label} className="mb-3">
                <div className="mb-1 flex justify-between">
                  <span>{row.label}</span>
                  <span className="font-semibold">{row.n}/5 thành phần</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full" style={{ width: `${row.n * 20}%`, background: row.tone }} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {row.chars} ký tự · khoảng {estimateTokens(row.label === "Prompt của bạn" ? assembled : "Viết báo cáo.")} token (ước tính)
                </p>
              </div>
            ))}
            <p className="text-muted-foreground">
              Prompt dài hơn khoảng vài chục token nhưng loại bỏ 4 điều Claude phải đoán — thường tiết kiệm nhiều lượt hỏi lại sau
              đó.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
