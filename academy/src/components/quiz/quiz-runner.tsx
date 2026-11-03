"use client";

import { AlertCircle, ArrowRight, CheckCircle2, FlaskConical, RefreshCw, Sparkles, TrendingDown, TrendingUp, XCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLessonData } from "@/components/lesson/lesson-data";
import {
  applyAnswer,
  bankStatus,
  LEVEL_LABEL,
  newSession,
  reviewQueue,
  selectNext,
  type AttemptRecord,
  type QuizSession,
} from "@/lib/engine/question/adaptive";
import { evaluate } from "@/lib/engine/question/evaluate";
import { createRng, seedFromString } from "@/lib/engine/question/text";
import { clearSession, recordAttempt, saveSession } from "@/lib/progress/actions";
import { XP } from "@/lib/progress/gamification";
import { updateProgress, useProgress, useProgressReady } from "@/lib/progress/store";
import type { EvaluationResult, IndexedQuestion, QuestionResponse } from "@/lib/types/content";
import { cn } from "@/lib/utils";
import { QuestionView, TYPE_LABEL } from "./question-view";

interface Feedback {
  question: IndexedQuestion;
  result: EvaluationResult;
  levelChange?: "up" | "down";
  firstTime: boolean;
}

function FeedbackPanel({ fb, conceptLabel, onNext, nextLabel }: { fb: Feedback; conceptLabel: string; onNext: () => void; nextLabel: string }) {
  const { result, question } = fb;
  const good = result.correct;
  return (
    <div
      role="status"
      className={cn("mt-4 rounded-2xl border-2 p-4", good ? "border-success/50 bg-success-soft/60" : "border-danger/40 bg-danger-soft/50")}
      data-testid="quiz-feedback"
    >
      <p className={cn("flex items-center gap-2 font-bold", good ? "text-success" : "text-danger")}>
        {good ? <CheckCircle2 className="size-5" /> : <XCircle className="size-5" />}
        {result.summary}
        {result.score > 0 && result.score < 1 && <span className="font-normal">({Math.round(result.score * 100)}%)</span>}
      </p>
      {result.optionFeedback?.map((f) => (
        <p key={f} className="mt-2 text-sm">
          {f}
        </p>
      ))}
      {result.details.length > 0 && (
        <ul className="mt-3 flex flex-col gap-1.5 text-sm">
          {result.details.map((d) => (
            <li key={d.id} className="flex items-start gap-2">
              {d.passed ? <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-label="đạt" /> : <XCircle className="mt-0.5 size-4 shrink-0 text-danger" aria-label="chưa đạt" />}
              <span>
                <strong>{d.label}</strong> — {d.feedback}
              </span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-3 rounded-xl bg-card p-3 text-sm">
        <p className="mb-1 font-semibold">Giải thích</p>
        <p>{question.explanation}</p>
      </div>
      {(question.questionType === "fix-prompt" || question.questionType === "real-task") && (
        <details className="mt-3 rounded-xl bg-card p-3 text-sm" open={!good}>
          <summary className="cursor-pointer font-semibold">Đáp án tham khảo</summary>
          <pre className="mt-2 font-sans whitespace-pre-wrap">{question.referenceAnswer}</pre>
          <p className="mt-2 text-xs text-muted-foreground">
            Chấm theo rubric quy tắc: có thể bỏ sót cách diễn đạt khác nhưng vẫn đúng. Hãy so sánh với đáp án tham khảo.
          </p>
        </details>
      )}
      {question.questionType === "terminal-task" && (
        <p className="mt-3 rounded-xl bg-card p-3 font-mono text-xs">Lệnh tham khảo: {question.referenceCommands.join("  →  ")}</p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        {fb.levelChange === "up" && (
          <Badge variant="success">
            <TrendingUp /> Lên mức khó hơn
          </Badge>
        )}
        {fb.levelChange === "down" && (
          <Badge variant="warning">
            <TrendingDown /> Quay lại mức dễ hơn để củng cố
          </Badge>
        )}
        {!good && <span className="text-muted-foreground">Câu tiếp theo sẽ luyện lại kỹ năng “{conceptLabel}” bằng một câu khác.</span>}
        {good && fb.firstTime && <span className="text-primary">+{XP.questionByDifficulty[question.difficulty]} XP</span>}
      </div>
      <Button type="button" className="mt-4" onClick={onNext} data-testid="quiz-next">
        {nextLabel} <ArrowRight />
      </Button>
    </div>
  );
}

function PracticeSuggestions() {
  return (
    <div className="mt-3 grid gap-2 sm:grid-cols-2">
      <Link href="/thuc-hanh/prompt-builder/" className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 text-sm font-semibold hover:bg-accent">
        <FlaskConical className="size-4 text-primary" /> Lab 1: Prompt Builder
      </Link>
      <a href="#nhiem-vu" className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 text-sm font-semibold hover:bg-accent">
        <Sparkles className="size-4 text-primary" /> Nhiệm vụ ứng dụng thực tế
      </a>
    </div>
  );
}

export function QuizRunner({ lessonId, questionsPerSession }: { lessonId: string; questionsPerSession: number }) {
  const state = useProgress();
  const ready = useProgressReady();
  const { bank, concepts } = useLessonData();
  const conceptLabel = (id: string) => concepts.find((c) => c.id === id)?.label ?? id;
  const history = useMemo(() => state.attempts.filter((a) => a.lessonId === lessonId), [state.attempts, lessonId]);
  const session: QuizSession | undefined = state.sessions[lessonId];
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [mode, setMode] = useState<"adaptive" | "review">("adaptive");
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewList, setReviewList] = useState<IndexedQuestion[]>([]);
  const status = bankStatus(bank, history);

  // Pick the current question (pure + seeded, so a reload picks the same one).
  const selection = useMemo(() => {
    if (!ready || mode !== "adaptive" || !session || session.finishedAt || feedback) return null;
    const saved = session.currentId ? bank.find((q) => q.questionId === session.currentId) : undefined;
    if (saved) return { kind: "question" as const, question: saved, reason: session.currentReason };
    const rng = createRng(seedFromString(`${session.sessionId}:${session.answers.length}`));
    return selectNext(bank, session, history, rng);
  }, [ready, mode, session, feedback, bank, history]);

  useEffect(() => {
    if (selection?.kind === "question" && session && !session.currentId) {
      updateProgress((p) => saveSession(p, { ...session, currentId: selection.question.questionId, currentReason: selection.reason }));
    }
  }, [selection, session]);

  if (!ready) return <div className="h-48 animate-pulse rounded-2xl bg-muted" aria-hidden="true" />;

  const persist = (s: QuizSession) => updateProgress((p) => saveSession(p, s));

  const start = () => {
    const level = state.placement?.level ?? "beginner";
    const s = newSession(lessonId, Math.min(questionsPerSession, status.unseen), level);
    setFeedback(null);
    setMode("adaptive");
    persist(s);
  };

  const record = (q: IndexedQuestion, result: EvaluationResult, sessionId: string, firstTime: boolean) => {
    const attempt: AttemptRecord = {
      questionId: q.questionId,
      lessonId,
      conceptId: q.conceptId,
      fingerprint: q.canonicalFingerprint,
      semanticKey: q.semanticKey,
      difficulty: q.difficulty,
      correct: result.correct,
      score: result.score,
      at: new Date().toISOString(),
      sessionId,
      firstTime,
    };
    return (p: typeof state) => recordAttempt(p, attempt, XP.questionByDifficulty[q.difficulty]);
  };

  /* --------------------------- review mode --------------------------- */
  if (mode === "review") {
    const q = reviewList[reviewIndex];
    if (!q) {
      return (
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="font-semibold">Đã ôn xong các câu từng làm sai.</p>
          <Button className="mt-3" variant="outline" onClick={() => setMode("adaptive")}>
            Quay lại
          </Button>
        </div>
      );
    }
    return (
      <div className="rounded-2xl border border-border bg-card p-5" data-testid="quiz-review">
        <Badge variant="info">Ôn tập — không tính XP</Badge>
        <p className="mt-3 text-lg font-bold">{q.prompt}</p>
        <div className="mt-3">
          <QuestionView
            key={`r-${q.questionId}-${reviewIndex}`}
            q={q}
            disabled={Boolean(feedback)}
            onSubmit={(r) => {
              const result = evaluate(q, r);
              updateProgress(record(q, result, `review:${lessonId}`, false));
              setFeedback({ question: q, result, firstTime: false });
            }}
          />
        </div>
        {feedback && (
          <FeedbackPanel
            fb={feedback}
            conceptLabel={conceptLabel(feedback.question.conceptId)}
            nextLabel="Câu ôn tiếp theo"
            onNext={() => {
              setFeedback(null);
              setReviewIndex((i) => i + 1);
            }}
          />
        )}
      </div>
    );
  }

  /* --------------------------- start screen --------------------------- */
  const reviewable = reviewQueue(bank, history);
  if (!session || (session.finishedAt && !feedback)) {
    const last = session?.finishedAt ? session : undefined;
    const correct = last?.answers.filter((a) => a.correct).length ?? 0;
    return (
      <div className="rounded-2xl border border-border bg-card p-5" data-testid="quiz-start">
        {last && (
          <div className="mb-4 rounded-xl bg-primary-soft/60 p-4" data-testid="quiz-summary">
            <p className="font-bold">
              Kết quả lượt vừa rồi: {correct}/{last.answers.length} câu đúng
            </p>
            <Progress className="mt-2" value={(correct / Math.max(1, last.answers.length)) * 100} label="Tỷ lệ đúng lượt vừa rồi" />
            <p className="mt-2 text-sm text-muted-foreground">Mức độ đạt tới: {LEVEL_LABEL[last.level]}. Xem phần “Giải thích đáp án” bên dưới để ôn lại.</p>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Badge variant="neutral">Ngân hàng: {status.total} câu</Badge>
          <Badge variant={status.unseen ? "info" : "warning"} data-testid="unseen-count">
            Chưa làm: {status.unseen}
          </Badge>
          <Badge variant="success">Đã đúng: {status.correct}</Badge>
        </div>
        {status.unseen > 0 ? (
          <>
            <p className="mt-3 text-sm text-muted-foreground">
              Mỗi lượt gồm tối đa {questionsPerSession} câu <strong>chưa từng xuất hiện</strong>. Trả lời đúng 2 câu liên tiếp sẽ lên mức khó
              hơn; trả lời sai sẽ được luyện lại cùng kỹ năng bằng câu khác.
            </p>
            <Button className="mt-4" onClick={start} data-testid="quiz-start-button">
              {history.length ? "Bắt đầu lượt mới" : "Bắt đầu kiểm tra"} <ArrowRight />
            </Button>
          </>
        ) : (
          <div className="mt-3 rounded-xl bg-warning-soft p-4 text-sm" role="status" data-testid="quiz-exhausted">
            <p className="flex items-center gap-2 font-semibold text-warning">
              <AlertCircle className="size-4" /> Bạn đã làm hết câu hỏi mới của bài này.
            </p>
            <p className="mt-1">Hệ thống không lặp lại câu cũ để tính điểm. Hãy chuyển sang bài thực hành vận dụng:</p>
            <PracticeSuggestions />
          </div>
        )}
        {reviewable.length > 0 && (
          <Button
            variant="outline"
            className="mt-3"
            onClick={() => {
              setReviewList(reviewable);
              setReviewIndex(0);
              setFeedback(null);
              setMode("review");
            }}
          >
            <RefreshCw /> Ôn lại {reviewable.length} câu từng sai (không tính XP)
          </Button>
        )}
      </div>
    );
  }

  /* --------------------------- adaptive run --------------------------- */
  let current: IndexedQuestion | undefined;
  let reason: string | undefined;
  if (!feedback) {
    if (selection?.kind === "question") {
      current = selection.question;
      reason = selection.reason;
    } else {
      return (
        <div className="rounded-2xl border border-border bg-card p-5" role="status" data-testid="quiz-exhausted">
          <p className="flex items-center gap-2 font-semibold text-warning">
            <AlertCircle className="size-4" /> Đã hết câu hỏi mới trong ngân hàng của bài này.
          </p>
          <p className="mt-1 text-sm">
            Bạn đã trả lời {session.answers.length} câu trong lượt này. Thay vì lặp lại câu cũ, hãy luyện tập vận dụng:
          </p>
          <PracticeSuggestions />
          <Button
            variant="outline"
            className="mt-3"
            onClick={() => persist({ ...session, finishedAt: new Date().toISOString(), target: session.answers.length })}
          >
            Kết thúc lượt và xem kết quả
          </Button>
        </div>
      );
    }
  }
  const shown = feedback?.question ?? current!;
  const answered = session.answers.length;
  const isLast = answered >= session.target;

  return (
    <div className="rounded-2xl border border-border bg-card p-5" data-testid="quiz-runner">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="neutral">
            Câu {Math.min(answered + (feedback ? 0 : 1), session.target)}/{session.target}
          </Badge>
          <Badge>{TYPE_LABEL[shown.questionType]}</Badge>
          <Badge variant="info" data-testid="quiz-difficulty">
            {LEVEL_LABEL[shown.difficulty]}
          </Badge>
          {reason === "remediation" && <Badge variant="warning">Luyện lại kỹ năng</Badge>}
        </div>
        <button
          type="button"
          className="text-xs text-muted-foreground underline"
          onClick={() => {
            setFeedback(null);
            updateProgress((p) => clearSession(p, lessonId));
          }}
        >
          Dừng lượt này
        </button>
      </div>
      <Progress className="mt-3" value={(answered / session.target) * 100} label="Tiến độ lượt kiểm tra" />
      <p className="mt-4 text-lg font-bold" data-testid="quiz-question" data-question-id={shown.questionId}>
        {shown.prompt}
      </p>
      {shown.hint && !feedback && (
        <details className="mt-2 text-sm text-muted-foreground">
          <summary className="cursor-pointer">Gợi ý</summary>
          {shown.hint}
        </details>
      )}
      <div className="mt-3">
        <QuestionView
          key={shown.questionId}
          q={shown}
          disabled={Boolean(feedback)}
          onSubmit={(r: QuestionResponse) => {
            const result = evaluate(shown, r);
            const firstTime = !state.attempts.some((a) => a.questionId === shown.questionId);
            const outcome = applyAnswer(session, shown, result.correct, result.score);
            updateProgress((p) => saveSession(record(shown, result, session.sessionId, firstTime)(p), outcome.session));
            setFeedback({ question: shown, result, levelChange: outcome.levelChange, firstTime });
          }}
        />
      </div>
      {feedback && (
        <FeedbackPanel
          fb={feedback}
          conceptLabel={conceptLabel(feedback.question.conceptId)}
          nextLabel={isLast ? "Xem kết quả" : "Câu tiếp theo"}
          onNext={() => setFeedback(null)}
        />
      )}
    </div>
  );
}
