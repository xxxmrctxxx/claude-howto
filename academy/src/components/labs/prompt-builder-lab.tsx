"use client";

import { closestCenter, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ArrowDown, ArrowUp, CheckCircle2, GripVertical, RotateCcw, Sparkles, XCircle } from "lucide-react";
import { useState } from "react";
import { CopyButton } from "@/components/lesson/copy-button";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { COMPONENTS } from "@/components/visuals/prompt-anatomy";
import { PROMPT_SCENARIOS } from "@/content/labs/prompt-scenarios";
import { estimateTokens } from "@/lib/engine/tokens/estimate";
import { evaluatePrompt, RECOMMENDED_ORDER, type BlockId, type PromptBlocks, type PromptEvaluation } from "@/lib/engine/prompt/evaluate";
import { recordLab } from "@/lib/progress/actions";
import { XP } from "@/lib/progress/gamification";
import { updateProgress } from "@/lib/progress/store";
import { cn } from "@/lib/utils";

const PLACEHOLDER: Record<BlockId, string> = {
  role: "Bạn là …",
  context: "Tình huống, dữ liệu, người đọc, lý do…",
  task: "Hãy … (động từ + đối tượng)",
  constraints: "Tối đa … từ, chỉ dùng …, ngôn ngữ …",
  output: "Trình bày dạng … (bảng mấy cột, bao nhiêu gạch đầu dòng…)",
};

function BlockRow({
  id,
  value,
  index,
  onChange,
  onMove,
}: {
  id: BlockId;
  value: string;
  index: number;
  onChange: (v: string) => void;
  onMove: (from: number, to: number) => void;
}) {
  const meta = COMPONENTS.find((c) => c.id === id)!;
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <li ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition }} className={cn("rounded-2xl border border-border bg-card p-3", isDragging && "z-10 shadow-lg")}>
      <div className="mb-2 flex items-center gap-2">
        <button type="button" className="cursor-grab touch-none text-muted-foreground" aria-label={`Kéo để đổi vị trí khối ${meta.label}`} {...attributes} {...listeners}>
          <GripVertical className="size-4" />
        </button>
        <span className="rounded-lg px-2 py-0.5 text-xs font-bold text-white dark:text-background" style={{ background: meta.color }}>
          {meta.label}
        </span>
        <span className="text-sm text-muted-foreground">{meta.vi}</span>
        <span className="ml-auto flex">
          <Button type="button" variant="ghost" size="sm" disabled={index === 0} onClick={() => onMove(index, index - 1)} aria-label={`Đưa khối ${meta.label} lên`}>
            <ArrowUp />
          </Button>
          <Button type="button" variant="ghost" size="sm" disabled={index === 4} onClick={() => onMove(index, index + 1)} aria-label={`Đưa khối ${meta.label} xuống`}>
            <ArrowDown />
          </Button>
        </span>
      </div>
      <Textarea
        aria-label={`Nội dung khối ${meta.label}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={PLACEHOLDER[id]}
        className="min-h-16 text-sm"
        data-testid={`block-${id}`}
      />
    </li>
  );
}

export function PromptBuilderLab() {
  const [scenarioId, setScenarioId] = useState(PROMPT_SCENARIOS[0].id);
  const scenario = PROMPT_SCENARIOS.find((s) => s.id === scenarioId)!;
  const [blocks, setBlocks] = useState<PromptBlocks>(scenario.starter);
  const [order, setOrder] = useState<BlockId[]>(["task", "context", "role", "constraints", "output"]);
  const [result, setResult] = useState<PromptEvaluation | null>(null);
  const [showRef, setShowRef] = useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 120, tolerance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const choose = (id: string) => {
    const s = PROMPT_SCENARIOS.find((x) => x.id === id)!;
    setScenarioId(id);
    setBlocks(s.starter);
    setOrder(["task", "context", "role", "constraints", "output"]);
    setResult(null);
    setShowRef(false);
  };
  const move = (from: number, to: number) => setOrder((o) => arrayMove(o, from, to));
  const onDragEnd = (e: DragEndEvent) => {
    if (!e.over || e.active.id === e.over.id) return;
    move(order.indexOf(e.active.id as BlockId), order.indexOf(e.over.id as BlockId));
  };

  const evaluate = () => {
    const r = evaluatePrompt(blocks, order, scenario.expectations);
    setResult(r);
    updateProgress((s) =>
      recordLab(
        s,
        { labId: "prompt-builder", itemId: scenario.id, score: r.overall, passed: r.overall >= 0.8, at: new Date().toISOString(), summary: `${scenario.title}: ${Math.round(r.overall * 100)}%` },
        { key: `lab:prompt-builder:${scenario.id}`, amount: XP.labPass, reason: `Prompt Builder: ${scenario.title}` },
      ),
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-4">
        <fieldset>
          <legend className="mb-2 text-sm font-bold">1. Chọn tình huống</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {PROMPT_SCENARIOS.map((s) => (
              <button
                key={s.id}
                type="button"
                aria-pressed={s.id === scenarioId}
                onClick={() => choose(s.id)}
                className={cn("cursor-pointer rounded-xl border-2 p-3 text-left text-sm", s.id === scenarioId ? "border-primary bg-primary-soft/60" : "border-border bg-card hover:bg-accent")}
                data-testid={`scenario-${s.id}`}
              >
                <span className="block font-bold">{s.title}</span>
                <span className="text-xs text-muted-foreground">{s.domain}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <div className="rounded-xl bg-muted/60 p-3 text-sm">
          <strong>Yêu cầu công việc:</strong> {scenario.brief}
        </div>
        <div>
          <p className="mb-2 text-sm font-bold">2. Cải thiện từng khối và sắp xếp thứ tự (kéo thả hoặc dùng mũi tên)</p>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={order} strategy={verticalListSortingStrategy}>
              <ol className="flex flex-col gap-3">
                {order.map((id, i) => (
                  <BlockRow key={id} id={id} index={i} value={blocks[id]} onChange={(v) => setBlocks((b) => ({ ...b, [id]: v }))} onMove={move} />
                ))}
              </ol>
            </SortableContext>
          </DndContext>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={evaluate} data-testid="pb-evaluate">
            <Sparkles /> 3. Đánh giá prompt
          </Button>
          <Button type="button" variant="outline" onClick={() => choose(scenario.id)}>
            <RotateCcw /> Làm lại
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:sticky lg:top-20 lg:self-start">
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="mb-2 text-sm font-bold">Prompt hoàn chỉnh (theo thứ tự hiện tại)</p>
          <pre className="max-h-56 overflow-y-auto font-sans text-sm whitespace-pre-wrap" data-testid="pb-assembled">
            {order.map((id) => blocks[id].trim()).filter(Boolean).join("\n") || "…"}
          </pre>
          <div className="mt-2 flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground">≈ {estimateTokens(order.map((id) => blocks[id]).join("\n"))} token (ước tính)</span>
            <CopyButton text={order.map((id) => blocks[id].trim()).filter(Boolean).join("\n")} label="Sao chép" />
          </div>
        </div>
        {result && (
          <div className="rounded-2xl border border-border bg-card p-4" role="status" data-testid="pb-result">
            <div className="flex items-center justify-between">
              <p className="font-bold">Kết quả đánh giá</p>
              <span className={cn("text-2xl font-extrabold", result.overall >= 0.8 ? "text-success" : "text-warning")} data-testid="pb-score">
                {Math.round(result.overall * 100)}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{result.overall >= 0.8 ? "Đạt (≥ 80%)." : "Cần đạt 80% để hoàn thành tình huống."}</p>
            <div className="mt-3 flex flex-col gap-3">
              {result.criteria.map((c) => (
                <div key={c.id}>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>{c.label}</span>
                    <span>{Math.round(c.score * 100)}%</span>
                  </div>
                  <Progress value={c.score * 100} label={c.label} className="mt-1 h-2" indicatorClassName={c.score >= 0.8 ? "bg-success" : c.score >= 0.5 ? "bg-warning" : "bg-danger"} />
                  <ul className="mt-1.5 flex flex-col gap-1 text-xs">
                    {c.findings.map((f) => (
                      <li key={f.text} className="flex items-start gap-1.5">
                        {f.ok ? <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-success" aria-label="đạt" /> : <XCircle className="mt-0.5 size-3.5 shrink-0 text-danger" aria-label="chưa đạt" />}
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Button type="button" variant="outline" size="sm" className="mt-4" onClick={() => setShowRef((v) => !v)}>
              {showRef ? "Ẩn" : "Xem"} đáp án tham khảo
            </Button>
            {showRef && (
              <pre className="mt-2 rounded-xl bg-muted p-3 font-sans text-sm whitespace-pre-wrap">
                {RECOMMENDED_ORDER.map((id) => scenario.reference[id]).join("\n")}
              </pre>
            )}
            <p className="mt-3 text-[11px] text-muted-foreground">
              Đánh giá bằng quy tắc (từ khoá, độ dài, số liệu đo được, thứ tự khối). Không có AI chấm bài — điểm là chỉ dẫn để cải thiện.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
