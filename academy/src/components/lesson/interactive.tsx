"use client";

import { Bookmark, BookmarkCheck, CheckCircle2, CircleCheckBig, Download, RotateCcw, XCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { bankFor, getChapterById, LESSONS, publishedLessonIds } from "@/content/registry";
import { scoreRubric, type RubricOutcome } from "@/lib/engine/question/rubric";
import { awardXp, completeLesson, markSection, patchLesson, reopenLesson, toggleBookmark, visitLesson } from "@/lib/progress/actions";
import { XP } from "@/lib/progress/gamification";
import { updateProgress, useProgress, useProgressReady } from "@/lib/progress/store";
import type { ExerciseBlock, MissionBlock, WidgetId } from "@/lib/types/content";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import { WIDGETS } from "./widgets";

/** Records the visit and the section currently in view ("bài đang học dở"). */
export function SectionTracker({ lessonId, sectionIds }: { lessonId: string; sectionIds: string[] }) {
  useEffect(() => {
    updateProgress((s) => visitLesson(s, lessonId));
    const seen = new Set<string>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !seen.has(e.target.id)) {
            seen.add(e.target.id);
            updateProgress((s) => markSection(s, lessonId, e.target.id));
          }
        }
      },
      { rootMargin: "0px 0px -60% 0px" },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, [lessonId, sectionIds]);
  return null;
}

export function completeLessonAction(lessonId: string) {
  const lesson = LESSONS[lessonId];
  const chapter = getChapterById(lesson.chapterId);
  // The chapter milestone only counts once EVERY lesson of the chapter is published and done.
  const fullyPublished = chapter?.outline.every((o) => o.lessonId && LESSONS[o.lessonId]);
  updateProgress((s) =>
    completeLesson(
      s,
      lessonId,
      XP.lessonComplete,
      chapter && fullyPublished ? { id: chapter.id, title: chapter.title, lessonIds: publishedLessonIds(chapter), xp: XP.chapterComplete } : undefined,
    ),
  );
}

export function LessonActions({ lessonId }: { lessonId: string }) {
  const state = useProgress();
  const ready = useProgressReady();
  const bookmarked = state.bookmarks.includes(lessonId);
  const done = state.lessons[lessonId]?.status === "completed";
  if (!ready) return <div className="h-10" aria-hidden="true" />;
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        type="button"
        variant="outline"
        size="sm"
        aria-pressed={bookmarked}
        onClick={() => updateProgress((s) => toggleBookmark(s, lessonId))}
        data-testid="bookmark-button"
      >
        {bookmarked ? <BookmarkCheck className="text-primary" /> : <Bookmark />}
        {bookmarked ? "Đã lưu" : "Lưu bài"}
      </Button>
      {done ? (
        <Button type="button" variant="secondary" size="sm" onClick={() => updateProgress((s) => reopenLesson(s, lessonId))} data-testid="reopen-button">
          <CircleCheckBig className="text-success" /> Đã hoàn thành · học lại
        </Button>
      ) : (
        <Button type="button" size="sm" onClick={() => completeLessonAction(lessonId)} data-testid="complete-button">
          <CheckCircle2 /> Đánh dấu hoàn thành
        </Button>
      )}
    </div>
  );
}

export function SimulationView({ lessonId, widget }: { lessonId: string; widget: WidgetId }) {
  const Widget = WIDGETS[widget];
  const state = useProgress();
  const done = state.lessons[lessonId]?.simulationDone;
  if (!Widget) return <p className="text-danger">Thiếu widget “{widget}”.</p>;
  return (
    <div>
      {done && (
        <Badge variant="success" className="mb-3">
          <CheckCircle2 /> Bạn đã hoàn thành mô phỏng này
        </Badge>
      )}
      <Widget
        onComplete={() =>
          updateProgress((s) =>
            awardXp(patchLesson(s, lessonId, { simulationDone: true }), `sim:${lessonId}`, XP.simulation, "Hoàn thành mô phỏng tương tác"),
          )
        }
      />
    </div>
  );
}

export function ExerciseView({ lessonId, block }: { lessonId: string; block: ExerciseBlock }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState<RubricOutcome | null>(null);
  const best = useProgress().lessons[lessonId]?.exerciseScore;
  return (
    <div className="flex flex-col gap-3" data-testid="exercise">
      <p>{block.instructions}</p>
      {block.sampleData && (
        <div className="rounded-xl border border-border bg-muted/50 p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold">Dữ liệu mẫu: {block.sampleData.name}</span>
            <div className="flex gap-2">
              <CopyButton text={block.sampleData.content} label="Sao chép" />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const url = URL.createObjectURL(new Blob([block.sampleData!.content], { type: "text/csv;charset=utf-8" }));
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = block.sampleData!.name;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
              >
                <Download /> Tải file
              </Button>
            </div>
          </div>
          <pre className="overflow-x-auto font-mono text-xs leading-relaxed" tabIndex={0}>{block.sampleData.content}</pre>
        </div>
      )}
      <label htmlFor={`ex-${block.id}`} className="text-sm font-semibold">
        Prompt của bạn
      </label>
      <Textarea
        id={`ex-${block.id}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={block.placeholder}
        className="min-h-44 font-mono text-[13px]"
        data-testid="exercise-input"
      />
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          disabled={text.trim().length < 10}
          onClick={() => {
            const r = scoreRubric(block.rubric, text, block.passScore);
            setResult(r);
            updateProgress((s) => {
              const prev = s.lessons[lessonId]?.exerciseScore ?? 0;
              let next = patchLesson(s, lessonId, { exerciseScore: Math.max(prev, r.score) });
              if (r.passed) next = awardXp(next, `ex:${lessonId}`, XP.exercise, "Hoàn thành bài tập thực hành");
              return next;
            });
          }}
          data-testid="exercise-submit"
        >
          Chấm bài
        </Button>
        {typeof best === "number" && <span className="text-sm text-muted-foreground">Điểm cao nhất: {Math.round(best * 100)}%</span>}
      </div>
      {result && (
        <div role="status" className={cn("rounded-2xl p-4", result.passed ? "bg-success-soft" : "bg-warning-soft")} data-testid="exercise-result">
          <p className={cn("font-bold", result.passed ? "text-success" : "text-warning")}>
            {result.passed ? "Đạt" : "Chưa đạt"} — {Math.round(result.score * 100)}% (cần {Math.round(block.passScore * 100)}%)
          </p>
          <ul className="mt-2 flex flex-col gap-1.5 text-sm">
            {result.details.map((d) => (
              <li key={d.id} className="flex items-start gap-2">
                {d.passed ? <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-label="đạt" /> : <XCircle className="mt-0.5 size-4 shrink-0 text-danger" aria-label="chưa đạt" />}
                <span>
                  <strong>{d.label}:</strong> {d.feedback}
                </span>
              </li>
            ))}
          </ul>
          <details className="mt-3 rounded-xl bg-card p-3 text-sm" open={result.passed}>
            <summary className="cursor-pointer font-semibold">Đáp án tham khảo</summary>
            <pre className="mt-2 font-sans whitespace-pre-wrap">{block.referenceAnswer}</pre>
          </details>
          <p className="mt-2 text-xs text-muted-foreground">
            Chấm bằng rubric quy tắc (từ khoá, độ dài, mẫu số liệu) — chưa kết nối AI. Một câu trả lời đúng nhưng diễn đạt khác có thể bị
            chấm thiếu; hãy đối chiếu với đáp án tham khảo.
          </p>
        </div>
      )}
    </div>
  );
}

export function MissionView({ lessonId, block }: { lessonId: string; block: MissionBlock }) {
  const lp = useProgress().lessons[lessonId];
  const checked = lp?.missionChecklist ?? [];
  const [note, setNote] = useState<string | null>(null);
  const shownNote = note ?? lp?.missionNote ?? "";
  const toggle = (i: number) =>
    updateProgress((s) => {
      const cur = s.lessons[lessonId]?.missionChecklist ?? [];
      const nextList = cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i];
      let next = patchLesson(s, lessonId, { missionChecklist: nextList });
      if (nextList.length === block.checklist.length) next = awardXp(next, `mission:${lessonId}`, XP.mission, "Hoàn thành nhiệm vụ thực tế");
      return next;
    });
  return (
    <div className="flex flex-col gap-3">
      <p>{block.context}</p>
      <ol className="list-decimal space-y-1 pl-6">
        {block.tasks.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ol>
      <p className="rounded-xl bg-primary-soft/60 p-3 text-sm">
        <strong>Sản phẩm cần có:</strong> {block.deliverable}
      </p>
      <fieldset className="rounded-xl border border-border p-3">
        <legend className="px-1 text-sm font-semibold">Tự kiểm tra trước khi đánh dấu xong</legend>
        {block.checklist.map((c, i) => (
          <label key={c} className="flex cursor-pointer items-start gap-2 py-1 text-sm">
            <input type="checkbox" className="mt-1 size-4 accent-[var(--primary)]" checked={checked.includes(i)} onChange={() => toggle(i)} />
            {c}
          </label>
        ))}
      </fieldset>
      <label htmlFor={`mission-${lessonId}`} className="text-sm font-semibold">
        Ghi chú kết quả của bạn (tự lưu)
      </label>
      <Textarea
        id={`mission-${lessonId}`}
        value={shownNote}
        onChange={(e) => setNote(e.target.value)}
        onBlur={() => note !== null && updateProgress((s) => patchLesson(s, lessonId, { missionNote: note }))}
        placeholder="Prompt trước / sau, điều bạn rút ra…"
      />
      <p className="text-xs text-muted-foreground">Nhiệm vụ thực tế làm bên ngoài nền tảng (với Claude thật); hệ thống chỉ lưu checklist tự đánh giá của bạn.</p>
    </div>
  );
}

export function AnswersReview({ lessonId }: { lessonId: string }) {
  const state = useProgress();
  const ready = useProgressReady();
  const bank = bankFor(lessonId);
  const latest = useMemo(() => {
    const m = new Map<string, boolean>();
    for (const a of state.attempts) if (a.lessonId === lessonId) m.set(a.questionId, a.correct);
    return m;
  }, [state.attempts, lessonId]);
  if (!ready) return null;
  const answered = bank.filter((q) => latest.has(q.questionId));
  if (!answered.length) {
    return <p className="text-muted-foreground">Giải thích chi tiết của từng câu sẽ hiện ở đây sau khi bạn trả lời trong phần “Câu hỏi kiểm tra”.</p>;
  }
  return (
    <ul className="flex flex-col gap-2" data-testid="answers-review">
      {answered.map((q) => (
        <li key={q.questionId}>
          <details className="rounded-xl border border-border bg-card p-3">
            <summary className="flex cursor-pointer items-start gap-2 text-sm font-semibold">
              {latest.get(q.questionId) ? <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-label="đúng" /> : <XCircle className="mt-0.5 size-4 shrink-0 text-danger" aria-label="sai" />}
              {q.prompt}
              {"statement" in q && <span className="font-normal"> — {q.statement}</span>}
            </summary>
            <p className="mt-2 text-sm">{q.explanation}</p>
          </details>
        </li>
      ))}
      <li className="text-sm text-muted-foreground">
        Đã xem giải thích {answered.length}/{bank.length} câu. <RotateCcw className="inline size-3" aria-hidden="true" /> Câu sai có thể ôn lại (không tính XP).
      </li>
    </ul>
  );
}
