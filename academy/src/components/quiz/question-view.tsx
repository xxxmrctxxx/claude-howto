"use client";

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ArrowDown, ArrowUp, Check, GripVertical } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { CopyButton } from "@/components/lesson/copy-button";
import { TerminalTaskView } from "@/components/labs/terminal-task-view";
import { createRng, seedFromString, shuffle } from "@/lib/engine/question/text";
import type {
  FillBlankQuestion,
  FindErrorQuestion,
  MatchingQuestion,
  OrderingQuestion,
  Question,
  QuestionResponse,
  RubricQuestion,
  SingleChoiceQuestion,
  MultipleChoiceQuestion,
} from "@/lib/types/content";
import { cn } from "@/lib/utils";

export const TYPE_LABEL: Record<Question["questionType"], string> = {
  "single-choice": "Trắc nghiệm một đáp án",
  "multiple-choice": "Trắc nghiệm nhiều đáp án",
  "true-false": "Đúng / Sai",
  "fill-blank": "Điền từ",
  ordering: "Kéo thả sắp xếp",
  matching: "Ghép cặp",
  "find-error": "Phát hiện lỗi trong prompt",
  "fix-prompt": "Sửa prompt",
  "predict-output": "Dự đoán kết quả",
  "terminal-task": "Thực hành Terminal",
  scenario: "Phân tích tình huống",
  "real-task": "Nhiệm vụ thực tế",
};

interface ViewProps<Q> {
  q: Q;
  disabled: boolean;
  onSubmit: (r: QuestionResponse) => void;
}

function SubmitBar({ disabled, onClick, label = "Nộp câu trả lời" }: { disabled: boolean; onClick: () => void; label?: string }) {
  return (
    <div className="mt-4">
      <Button type="button" onClick={onClick} disabled={disabled} data-testid="quiz-submit">
        <Check /> {label}
      </Button>
    </div>
  );
}

function ContextBox({ ctx }: { ctx?: SingleChoiceQuestion["context"] }) {
  if (!ctx) return null;
  return (
    <div className="mb-4 rounded-xl border border-border bg-muted/60 p-3">
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">{ctx.label}</p>
      <p className={cn("text-sm leading-relaxed whitespace-pre-wrap", ctx.lang && "font-mono text-[13px]")}>{ctx.content}</p>
    </div>
  );
}

function ChoiceView({ q, disabled, onSubmit }: ViewProps<SingleChoiceQuestion>) {
  const [picked, setPicked] = useState<string | null>(null);
  return (
    <div>
      <ContextBox ctx={q.context} />
      <div role="radiogroup" aria-label="Các lựa chọn" className="flex flex-col gap-2">
        {q.options.map((o, i) => (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={picked === o.id}
            disabled={disabled}
            onClick={() => setPicked(o.id)}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-xl border-2 p-3 text-left text-sm transition-colors hover:bg-accent disabled:cursor-default",
              picked === o.id ? "border-primary bg-primary-soft/50" : "border-border",
            )}
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold">
              {String.fromCharCode(65 + i)}
            </span>
            <span>{o.text}</span>
          </button>
        ))}
      </div>
      <SubmitBar disabled={disabled || !picked} onClick={() => picked && onSubmit({ kind: "choice", optionId: picked })} />
    </div>
  );
}

function MultiView({ q, disabled, onSubmit }: ViewProps<MultipleChoiceQuestion>) {
  const [picked, setPicked] = useState<string[]>([]);
  return (
    <div>
      <p className="mb-2 text-xs text-muted-foreground">Có thể có nhiều đáp án đúng.</p>
      <div className="flex flex-col gap-2" role="group" aria-label="Các lựa chọn">
        {q.options.map((o) => {
          const on = picked.includes(o.id);
          return (
            <button
              key={o.id}
              type="button"
              role="checkbox"
              aria-checked={on}
              disabled={disabled}
              onClick={() => setPicked((p) => (on ? p.filter((x) => x !== o.id) : [...p, o.id]))}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border-2 p-3 text-left text-sm hover:bg-accent disabled:cursor-default",
                on ? "border-primary bg-primary-soft/50" : "border-border",
              )}
            >
              <span
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-md border-2",
                  on ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground",
                )}
              >
                {on && <Check className="size-3.5" />}
              </span>
              <span>{o.text}</span>
            </button>
          );
        })}
      </div>
      <SubmitBar disabled={disabled || picked.length === 0} onClick={() => onSubmit({ kind: "multi", optionIds: picked })} />
    </div>
  );
}

function TrueFalseView({ q, disabled, onSubmit }: ViewProps<Extract<Question, { questionType: "true-false" }>>) {
  return (
    <div>
      <blockquote className="mb-4 rounded-xl border-l-4 border-primary bg-muted/60 p-4 text-[15px]">{q.statement}</blockquote>
      <div className="flex gap-3">
        <Button type="button" variant="outline" size="lg" disabled={disabled} onClick={() => onSubmit({ kind: "boolean", value: true })} data-testid="tf-true">
          Đúng
        </Button>
        <Button type="button" variant="outline" size="lg" disabled={disabled} onClick={() => onSubmit({ kind: "boolean", value: false })} data-testid="tf-false">
          Sai
        </Button>
      </div>
    </div>
  );
}

function FillBlankView({ q, disabled, onSubmit }: ViewProps<FillBlankQuestion>) {
  const [values, setValues] = useState<Record<string, string>>({});
  const parts = q.template.split(/(\[\[[^\]]+\]\])/g);
  return (
    <div>
      <p className="text-[15px] leading-10">
        {parts.map((p, i) => {
          const m = p.match(/^\[\[([^\]]+)\]\]$/);
          if (!m) return <span key={i}>{p}</span>;
          const blank = q.blanks.find((b) => b.id === m[1]);
          return (
            <Input
              key={i}
              aria-label={`Ô trống ${m[1]}`}
              disabled={disabled}
              value={values[m[1]] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [m[1]]: e.target.value }))}
              className="mx-1 inline-block h-9 align-middle"
              style={{ width: `${Math.max(blank?.width ?? 8, 6) + 2}ch` }}
            />
          );
        })}
      </p>
      <SubmitBar
        disabled={disabled || q.blanks.some((b) => !(values[b.id] ?? "").trim())}
        onClick={() => onSubmit({ kind: "blanks", values })}
      />
    </div>
  );
}

function SortableRow({
  id,
  text,
  index,
  total,
  disabled,
  onMove,
}: {
  id: string;
  text: string;
  index: number;
  total: number;
  disabled: boolean;
  onMove: (from: number, to: number) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id, disabled });
  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={cn("flex items-center gap-2 rounded-xl border border-border bg-card p-2.5 text-sm", isDragging && "z-10 shadow-lg")}
      data-testid={`order-item-${id}`}
    >
      <button type="button" className="cursor-grab touch-none text-muted-foreground" aria-label={`Kéo để sắp xếp: ${text}`} {...attributes} {...listeners}>
        <GripVertical className="size-4" />
      </button>
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold">{index + 1}</span>
      <span className="flex-1">{text}</span>
      <Button type="button" variant="ghost" size="sm" disabled={disabled || index === 0} onClick={() => onMove(index, index - 1)} aria-label={`Đưa lên: ${text}`}>
        <ArrowUp />
      </Button>
      <Button type="button" variant="ghost" size="sm" disabled={disabled || index === total - 1} onClick={() => onMove(index, index + 1)} aria-label={`Đưa xuống: ${text}`}>
        <ArrowDown />
      </Button>
    </li>
  );
}

function OrderingView({ q, disabled, onSubmit }: ViewProps<OrderingQuestion>) {
  const initial = useMemo(() => {
    const rng = createRng(seedFromString(q.questionId));
    let order = shuffle(q.items, rng);
    if (order.every((it, i) => it.id === q.items[i].id)) order = [...order.slice(1), order[0]];
    return order;
  }, [q]);
  const [items, setItems] = useState(initial);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 120, tolerance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );
  const move = (from: number, to: number) => setItems((it) => arrayMove(it, from, to));
  const onDragEnd = (e: DragEndEvent) => {
    if (!e.over || e.active.id === e.over.id) return;
    const from = items.findIndex((i) => i.id === e.active.id);
    const to = items.findIndex((i) => i.id === e.over!.id);
    move(from, to);
  };
  return (
    <div>
      <p className="mb-2 text-xs text-muted-foreground">Kéo thả, hoặc dùng nút mũi tên để đổi vị trí.</p>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
          <ol className="flex flex-col gap-2">
            {items.map((it, i) => (
              <SortableRow key={it.id} id={it.id} text={it.text} index={i} total={items.length} disabled={disabled} onMove={move} />
            ))}
          </ol>
        </SortableContext>
      </DndContext>
      <SubmitBar disabled={disabled} onClick={() => onSubmit({ kind: "order", ids: items.map((i) => i.id) })} />
    </div>
  );
}

function MatchingView({ q, disabled, onSubmit }: ViewProps<MatchingQuestion>) {
  const rights = useMemo(() => shuffle(q.pairs, createRng(seedFromString(`${q.questionId}:r`))), [q]);
  const [pairs, setPairs] = useState<Record<string, string>>({});
  return (
    <div>
      <div className="flex flex-col gap-2.5">
        {q.pairs.map((p) => (
          <div key={p.id} className="grid items-center gap-2 rounded-xl border border-border p-2.5 sm:grid-cols-[10rem_1fr]">
            <label htmlFor={`m-${q.questionId}-${p.id}`} className="text-sm font-bold">
              {p.left}
            </label>
            <select
              id={`m-${q.questionId}-${p.id}`}
              disabled={disabled}
              value={pairs[p.id] ?? ""}
              onChange={(e) => setPairs((v) => ({ ...v, [p.id]: e.target.value }))}
              className="h-10 w-full rounded-lg border border-border bg-card px-2 text-sm"
            >
              <option value="">— Chọn ý nghĩa —</option>
              {rights.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.right}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <SubmitBar disabled={disabled || q.pairs.some((p) => !pairs[p.id])} onClick={() => onSubmit({ kind: "match", pairs })} />
    </div>
  );
}

function FindErrorView({ q, disabled, onSubmit }: ViewProps<FindErrorQuestion>) {
  const [picked, setPicked] = useState<string[]>([]);
  return (
    <div>
      <p className="mb-2 text-xs text-muted-foreground">Bấm vào từng đoạn để đánh dấu / bỏ đánh dấu.</p>
      <div className="rounded-xl border border-border bg-muted/40 p-3 text-[15px] leading-9">
        {q.segments.map((s) => {
          const on = picked.includes(s.id);
          return (
            <button
              key={s.id}
              type="button"
              aria-pressed={on}
              disabled={disabled}
              onClick={() => setPicked((p) => (on ? p.filter((x) => x !== s.id) : [...p, s.id]))}
              className={cn(
                "mr-1 cursor-pointer rounded-md px-1 py-0.5 text-left transition-colors hover:bg-warning-soft",
                on && "bg-danger-soft text-danger line-through decoration-2",
              )}
              data-testid={`segment-${s.id}`}
            >
              {s.text}
            </button>
          );
        })}
      </div>
      <SubmitBar disabled={disabled || picked.length === 0} onClick={() => onSubmit({ kind: "segments", ids: picked })} />
    </div>
  );
}

function RubricView({ q, disabled, onSubmit }: ViewProps<RubricQuestion>) {
  const [text, setText] = useState(q.questionType === "fix-prompt" ? q.source : "");
  return (
    <div>
      <div className="mb-3 rounded-xl border border-border bg-muted/60 p-3">
        <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          {q.questionType === "fix-prompt" ? "Prompt cần sửa" : "Đề bài"}
        </p>
        <p className="text-sm whitespace-pre-wrap">{q.source}</p>
      </div>
      {q.sampleData && (
        <details className="mb-3 rounded-xl border border-border p-3 text-sm">
          <summary className="cursor-pointer font-semibold">Dữ liệu mẫu: {q.sampleData.name}</summary>
          <pre className="mt-2 overflow-x-auto font-mono text-xs" tabIndex={0}>{q.sampleData.content}</pre>
          <div className="mt-2">
            <CopyButton text={q.sampleData.content} label="Sao chép dữ liệu" />
          </div>
        </details>
      )}
      <label htmlFor={`rt-${q.questionId}`} className="mb-1 block text-sm font-semibold">
        Câu trả lời của bạn
      </label>
      <Textarea
        id={`rt-${q.questionId}`}
        value={text}
        disabled={disabled}
        onChange={(e) => setText(e.target.value)}
        className="min-h-40 font-mono text-[13px]"
        data-testid="rubric-input"
      />
      <p className="mt-1 text-xs text-muted-foreground">
        Chấm tự động bằng rubric quy tắc (không phải AI). Bạn sẽ thấy từng tiêu chí và đáp án tham khảo sau khi nộp.
      </p>
      <SubmitBar disabled={disabled || text.trim().length < 20} onClick={() => onSubmit({ kind: "text", value: text })} label="Nộp để chấm" />
    </div>
  );
}

export function QuestionView({ q, disabled, onSubmit }: ViewProps<Question>) {
  switch (q.questionType) {
    case "single-choice":
    case "scenario":
    case "predict-output":
      return <ChoiceView q={q} disabled={disabled} onSubmit={onSubmit} />;
    case "multiple-choice":
      return <MultiView q={q} disabled={disabled} onSubmit={onSubmit} />;
    case "true-false":
      return <TrueFalseView q={q} disabled={disabled} onSubmit={onSubmit} />;
    case "fill-blank":
      return <FillBlankView q={q} disabled={disabled} onSubmit={onSubmit} />;
    case "ordering":
      return <OrderingView q={q} disabled={disabled} onSubmit={onSubmit} />;
    case "matching":
      return <MatchingView q={q} disabled={disabled} onSubmit={onSubmit} />;
    case "find-error":
      return <FindErrorView q={q} disabled={disabled} onSubmit={onSubmit} />;
    case "fix-prompt":
    case "real-task":
      return <RubricView q={q} disabled={disabled} onSubmit={onSubmit} />;
    case "terminal-task":
      return <TerminalTaskView q={q} disabled={disabled} onSubmit={onSubmit} />;
  }
}
