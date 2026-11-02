import { CheckCircle2, Lightbulb, ThumbsDown, ThumbsUp, Target } from "lucide-react";
import { QuizRunner } from "@/components/quiz/quiz-runner";
import { MermaidDiagram } from "@/components/visuals/mermaid-diagram";
import { VISUALS } from "@/components/visuals/registry";
import { BLOCK_TO_PART, type Lesson, type LessonBlock, type LessonPart } from "@/lib/types/content";
import { CodeBlock } from "./copy-button";
import { AnswersReview, ExerciseView, MissionView, SimulationView } from "./interactive";
import { RichText } from "./rich-text";

export const PART_LABEL: Record<LessonPart, string> = {
  objectives: "Mục tiêu",
  explain: "Giải thích",
  illustration: "Hình minh hoạ",
  diagram: "Sơ đồ nguyên lý",
  compare: "Sai & đúng",
  simulation: "Mô phỏng",
  steps: "Từng bước",
  exercise: "Bài tập",
  quiz: "Kiểm tra",
  answers: "Đáp án",
  summary: "Tóm tắt",
  mission: "Ứng dụng",
};

function BlockBody({ block, lesson }: { block: LessonBlock; lesson: Lesson }) {
  switch (block.type) {
    case "objectives":
      return (
        <ul className="grid gap-2 sm:grid-cols-2">
          {lesson.objectives.map((o) => (
            <li key={o.id} className="flex items-start gap-2 rounded-xl bg-muted/60 p-3">
              <Target className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{o.text}</span>
            </li>
          ))}
        </ul>
      );
    case "explain":
      return (
        <div className="flex flex-col gap-4">
          {block.analogy && (
            <div className="rounded-2xl border-l-4 border-primary bg-primary-soft/60 p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-bold text-primary">
                <Lightbulb className="size-4" aria-hidden="true" /> {block.analogy.title}
              </p>
              <p className="text-[15px] leading-relaxed">{block.analogy.text}</p>
            </div>
          )}
          {block.paragraphs.map((p) => (
            <p key={p} className="text-[15px] leading-relaxed">
              <RichText text={p} />
            </p>
          ))}
          {block.terms && (
            <dl className="grid gap-2 sm:grid-cols-2">
              {block.terms.map((t) => (
                <div key={t.term} className="rounded-xl border border-border p-3">
                  <dt className="font-mono text-sm font-bold text-primary">{t.term}</dt>
                  <dd className="text-sm text-muted-foreground">{t.definition}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      );
    case "illustration": {
      const Visual = VISUALS[block.visual];
      return (
        <figure>
          {Visual ? <Visual /> : <p className="text-danger">Thiếu hình “{block.visual}”.</p>}
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">{block.caption}</figcaption>
        </figure>
      );
    }
    case "diagram":
      return (
        <div>
          <div className="rounded-2xl border border-border bg-card p-4">
            <MermaidDiagram code={block.mermaid} alt={block.alt} />
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">{block.caption}</p>
        </div>
      );
    case "compare":
      return (
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            {(["bad", "good"] as const).map((side) => {
              const d = block[side];
              const good = side === "good";
              return (
                <div key={side} className={good ? "rounded-2xl border-2 border-success/50 bg-success-soft/50 p-4" : "rounded-2xl border-2 border-danger/40 bg-danger-soft/50 p-4"}>
                  <p className={`flex items-center gap-2 text-sm font-bold ${good ? "text-success" : "text-danger"}`}>
                    {good ? <ThumbsUp className="size-4" aria-hidden="true" /> : <ThumbsDown className="size-4" aria-hidden="true" />}
                    {d.label}
                  </p>
                  <blockquote className="mt-2 rounded-xl bg-card p-3 font-medium">“{d.content}”</blockquote>
                  <ul className="mt-3 flex flex-col gap-1.5 text-sm">
                    {d.notes.map((n) => (
                      <li key={n} className="flex gap-2">
                        <span aria-hidden="true">{good ? "✓" : "✗"}</span>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="rounded-xl bg-muted/60 p-3 text-sm">
            <strong>Bài học rút ra:</strong> {block.takeaway}
          </p>
        </div>
      );
    case "simulation":
      return (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">{block.intro}</p>
          <SimulationView lessonId={lesson.id} widget={block.widget} />
        </div>
      );
    case "steps":
      return (
        <ol className="relative flex flex-col gap-4 border-l-2 border-primary/30 pl-6">
          {block.steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[2.05rem] flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <p className="font-bold">{s.title}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
                <RichText text={s.detail} />
              </p>
              {s.code && (
                <div className="mt-3">
                  <CodeBlock code={s.code.content} lang={s.code.lang} />
                </div>
              )}
            </li>
          ))}
        </ol>
      );
    case "exercise":
      return <ExerciseView lessonId={lesson.id} block={block} />;
    case "quiz":
      return <QuizRunner lessonId={lesson.id} questionsPerSession={block.questionsPerSession} />;
    case "answers":
      return <AnswersReview lessonId={lesson.id} />;
    case "summary":
      return (
        <ul className="grid gap-2">
          {block.points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              <span>
                <RichText text={p} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "mission":
      return <MissionView lessonId={lesson.id} block={block} />;
  }
}

export function LessonBlocks({ lesson }: { lesson: Lesson }) {
  return (
    <div className="flex flex-col gap-6">
      {lesson.blocks.map((block, i) => (
        <section key={block.id} id={block.id} aria-labelledby={`${block.id}-title`} className="scroll-mt-32 rounded-3xl border border-border bg-card p-5 shadow-sm md:p-7">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
            Phần {i + 1}/{lesson.blocks.length} · {PART_LABEL[BLOCK_TO_PART[block.type]]}
          </p>
          <h2 id={`${block.id}-title`} className="mb-4 text-xl font-extrabold tracking-tight md:text-2xl">
            {block.title}
          </h2>
          <BlockBody block={block} lesson={lesson} />
        </section>
      ))}
    </div>
  );
}
