"use client";

import { ArrowRight, Award, BookOpen, Compass, Flame, Lock, PlayCircle, Target, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getChapterById, LESSON_REFS, publishedLessonRefs, SECTION_LABELS } from "@/content/catalog";
import { BADGES, computeStreak, levelInfo, totalXp } from "@/lib/progress/gamification";
import { useProgress, useProgressReady } from "@/lib/progress/store";
import { todayKey } from "@/lib/utils";

export function useResumeLesson() {
  const state = useProgress();
  const inProgress = Object.entries(state.lessons)
    .filter(([id, l]) => l.status === "in-progress" && LESSON_REFS[id])
    .sort((a, b) => b[1].lastVisitedAt.localeCompare(a[1].lastVisitedAt))[0];
  if (inProgress) {
    const lesson = LESSON_REFS[inProgress[0]];
    const sectionId = inProgress[1].lastSectionId;
    const section = sectionId && SECTION_LABELS[sectionId] ? { id: sectionId, title: SECTION_LABELS[sectionId] } : undefined;
    return { lesson, section, href: `${lesson.href}${section ? `#${section.id}` : ""}`, fresh: false };
  }
  const published = publishedLessonRefs();
  const next = published.find((l) => state.lessons[l.id]?.status !== "completed") ?? published[0];
  return { lesson: next, section: undefined, href: next.href, fresh: !state.lessons[next.id] };
}

export function StartButton() {
  const ready = useProgressReady();
  const resume = useResumeLesson();
  return (
    <Button asChild size="lg" data-testid="start-learning">
      <Link href={ready ? resume.href : publishedLessonRefs()[0].href}>
        {ready && !resume.fresh ? "Học tiếp" : "Bắt đầu học"} <ArrowRight />
      </Link>
    </Button>
  );
}

export function HomeDashboard() {
  const state = useProgress();
  const ready = useProgressReady();
  const resume = useResumeLesson();
  if (!ready) return <div className="h-64 animate-pulse rounded-3xl bg-muted" aria-hidden="true" />;
  const xp = totalXp(state);
  const lvl = levelInfo(xp);
  const streak = computeStreak(state.activityDays, todayKey());
  const published = publishedLessonRefs();
  const done = published.filter((l) => state.lessons[l.id]?.status === "completed").length;
  const correct = state.attempts.filter((a) => a.correct && a.firstTime).length;
  const chapter = getChapterById(resume.lesson.chapterId);

  return (
    <div className="grid gap-4 lg:grid-cols-3" data-testid="home-dashboard">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="size-5 text-primary" aria-hidden="true" />
            {resume.fresh ? "Bài học đầu tiên gợi ý" : "Bài đang học dở"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Chương {chapter?.number}: {chapter?.title}
          </p>
          <p className="mt-1 text-xl font-bold" data-testid="resume-title">
            {resume.lesson.title}
          </p>
          {resume.section && <p className="mt-1 text-sm">Dừng ở phần: <strong>{resume.section.title}</strong></p>}
          <Button asChild className="mt-4" data-testid="resume-button">
            <Link href={resume.href}>
              {resume.fresh ? "Bắt đầu" : "Học tiếp"} <ArrowRight />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="size-5 text-primary" aria-hidden="true" /> Cấp {lvl.level}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 text-sm">
          <p className="font-semibold">{lvl.title}</p>
          <Progress value={lvl.progress} label="Tiến độ lên cấp" />
          <p className="text-muted-foreground">
            {xp} XP{lvl.next !== null ? ` · còn ${lvl.next - xp} XP để lên cấp ${lvl.level + 1}` : " · cấp tối đa"}
          </p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-muted/60 p-2">
              <Flame className="mx-auto size-4 text-warning" aria-hidden="true" />
              <p className="font-bold">{streak}</p>
              <p className="text-[11px] text-muted-foreground">ngày liên tiếp</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-2">
              <BookOpen className="mx-auto size-4 text-success" aria-hidden="true" />
              <p className="font-bold">
                {done}/{published.length}
              </p>
              <p className="text-[11px] text-muted-foreground">bài hoàn thành</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-2">
              <Target className="mx-auto size-4 text-info" aria-hidden="true" />
              <p className="font-bold">{correct}</p>
              <p className="text-[11px] text-muted-foreground">câu đúng</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="size-5 text-warning" aria-hidden="true" /> Thành tích
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {BADGES.map((b) => {
              const earned = Boolean(state.badges[b.id]);
              return (
                <li
                  key={b.id}
                  className={`flex flex-col items-center gap-1 rounded-xl p-2 text-center text-xs ${earned ? "bg-warning-soft" : "bg-muted/60 text-muted-foreground"}`}
                  title={b.description}
                >
                  {earned ? <Award className="size-6 text-warning" aria-hidden="true" /> : <Lock className="size-6 text-muted-foreground" aria-hidden="true" />}
                  <span className="font-semibold">{b.title}</span>
                  <span className="sr-only">{earned ? "đã đạt" : `chưa đạt: ${b.description}`}</span>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Compass className="size-5 text-info" aria-hidden="true" /> Đánh giá năng lực
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          {state.placement ? (
            <>
              <p>
                Lần gần nhất: <strong>{Math.round(state.placement.score * 100)}%</strong>
              </p>
              <p className="mt-1 text-muted-foreground">Đề xuất bắt đầu: {getChapterById(state.placement.recommendedChapterId)?.title}</p>
              <Button asChild variant="outline" className="mt-3">
                <Link href="/kiem-tra-dau-vao/">Xem lại kết quả</Link>
              </Button>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">10 câu, khoảng 5 phút, để biết nên bắt đầu từ chương nào.</p>
              <Button asChild className="mt-3" data-testid="placement-cta">
                <Link href="/kiem-tra-dau-vao/">Làm bài đánh giá</Link>
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
