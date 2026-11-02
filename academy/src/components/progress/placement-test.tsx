"use client";

import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getChapterById, LESSONS, publishedLessonIds } from "@/content/registry";
import { AREA_LABEL, PLACEMENT_QUESTIONS, recommend } from "@/content/placement";
import { LEVEL_LABEL } from "@/lib/engine/question/adaptive";
import { setPlacement } from "@/lib/progress/actions";
import { XP } from "@/lib/progress/gamification";
import { updateProgress, useProgress, useProgressReady } from "@/lib/progress/store";
import { cn } from "@/lib/utils";

export function PlacementTest() {
  const state = useProgress();
  const ready = useProgressReady();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [index, setIndex] = useState(0);
  const [retake, setRetake] = useState(false);
  if (!ready) return <div className="h-80 animate-pulse rounded-2xl bg-muted" aria-hidden="true" />;

  const result = state.placement;
  if (result && !retake) {
    const ch = getChapterById(result.recommendedChapterId);
    const first = ch ? publishedLessonIds(ch)[0] : undefined;
    return (
      <div className="flex flex-col gap-4" data-testid="placement-result">
        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">Kết quả</p>
          <p className="text-4xl font-extrabold text-primary">{Math.round(result.score * 100)}%</p>
          <p className="mt-1">Mức khởi điểm cho câu hỏi thích ứng: <strong>{LEVEL_LABEL[result.level]}</strong></p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {Object.entries(result.areaScores).map(([area, s]) => (
              <div key={area}>
                <div className="flex justify-between text-sm">
                  <span>{AREA_LABEL[area as keyof typeof AREA_LABEL]}</span>
                  <span>{Math.round(s * 100)}%</span>
                </div>
                <Progress value={s * 100} label={AREA_LABEL[area as keyof typeof AREA_LABEL]} indicatorClassName={s >= 0.67 ? "bg-success" : s >= 0.34 ? "bg-warning" : "bg-danger"} />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border-2 border-primary/40 bg-primary-soft/50 p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">Lộ trình đề xuất</p>
          <p className="mt-1 text-xl font-extrabold" data-testid="placement-recommendation">
            Bắt đầu từ Chương {ch?.number}: {ch?.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Đề xuất dựa trên lĩnh vực đầu tiên (theo thứ tự lộ trình) mà bạn chưa trả lời đúng hết.
            {!first && " Chương này đang được biên soạn — trong lúc chờ, hãy học bài đã phát hành gần nhất."}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {first ? (
              <Button asChild>
                <Link href={`/hoc/${ch!.slug}/${LESSONS[first].slug}/`}>
                  Học ngay <ArrowRight />
                </Link>
              </Button>
            ) : (
              <Button asChild>
                <Link href="/hoc/">
                  Xem lộ trình <ArrowRight />
                </Link>
              </Button>
            )}
            <Button variant="outline" onClick={() => { setRetake(true); setAnswers({}); setIndex(0); }}>
              <RotateCcw /> Làm lại bài đánh giá
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const q = PLACEMENT_QUESTIONS[index];
  const picked = answers[q.id];
  const finish = () => {
    const areas = [...new Set(PLACEMENT_QUESTIONS.map((x) => x.area))];
    const areaScores = Object.fromEntries(
      areas.map((a) => {
        const qs = PLACEMENT_QUESTIONS.filter((x) => x.area === a);
        return [a, qs.filter((x) => answers[x.id] === x.answer).length / qs.length];
      }),
    );
    const score = PLACEMENT_QUESTIONS.filter((x) => answers[x.id] === x.answer).length / PLACEMENT_QUESTIONS.length;
    const rec = recommend(areaScores, score);
    updateProgress((s) => setPlacement(s, { completedAt: new Date().toISOString(), score, areaScores, level: rec.level, recommendedChapterId: rec.chapter }, XP.placement));
    setRetake(false);
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6" data-testid="placement-test">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Câu {index + 1}/{PLACEMENT_QUESTIONS.length} · {AREA_LABEL[q.area]}
        </span>
      </div>
      <Progress className="mt-2" value={(index / PLACEMENT_QUESTIONS.length) * 100} label="Tiến độ bài đánh giá" />
      <p className="mt-5 text-lg font-bold">{q.question}</p>
      <div className="mt-3 flex flex-col gap-2" role="radiogroup" aria-label="Lựa chọn">
        {q.options.map((o) => (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={picked === o.id}
            onClick={() => setAnswers((a) => ({ ...a, [q.id]: o.id }))}
            className={cn("cursor-pointer rounded-xl border-2 p-3 text-left text-sm hover:bg-accent", picked === o.id ? "border-primary bg-primary-soft/50" : "border-border")}
          >
            {o.text}
          </button>
        ))}
      </div>
      {picked && (
        <p className={cn("mt-3 flex items-start gap-2 text-sm", picked === q.answer ? "text-success" : "text-danger")}>
          {picked === q.answer ? <CheckCircle2 className="mt-0.5 size-4 shrink-0" /> : <XCircle className="mt-0.5 size-4 shrink-0" />}
          {q.explanation}
        </p>
      )}
      <div className="mt-5 flex justify-between">
        <Button variant="outline" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
          Câu trước
        </Button>
        {index < PLACEMENT_QUESTIONS.length - 1 ? (
          <Button disabled={!picked} onClick={() => setIndex((i) => i + 1)} data-testid="placement-next">
            Câu tiếp <ArrowRight />
          </Button>
        ) : (
          <Button disabled={Object.keys(answers).length < PLACEMENT_QUESTIONS.length} onClick={finish} data-testid="placement-finish">
            Xem kết quả
          </Button>
        )}
      </div>
    </div>
  );
}
