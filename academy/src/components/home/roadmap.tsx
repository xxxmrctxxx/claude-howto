"use client";

import { CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";
import { ChapterIcon } from "@/components/icon";
import { Progress } from "@/components/ui/progress";
import { course } from "@/content/course";
import { LESSONS, publishedLessonIds } from "@/content/registry";
import { useProgress } from "@/lib/progress/store";
import { cn } from "@/lib/utils";

/** Visual 12-chapter learning path with the learner's progress overlaid. */
export function Roadmap({ compact = false }: { compact?: boolean }) {
  const state = useProgress();
  return (
    <ol className={cn("relative grid gap-4", compact ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2")} data-testid="roadmap">
      {course.chapters.map((ch) => {
        const published = publishedLessonIds(ch);
        const done = published.filter((id) => state.lessons[id]?.status === "completed").length;
        const firstLesson = published[0] ? LESSONS[published[0]] : undefined;
        const href = firstLesson ? `/hoc/${ch.slug}/${firstLesson.slug}/` : `/hoc/#${ch.slug}`;
        const available = published.length > 0;
        return (
          <li key={ch.id} id={compact ? undefined : ch.slug} className="scroll-mt-24">
            <Link
              href={href}
              className={cn(
                "group flex h-full gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md",
                !available && "border-dashed",
              )}
            >
              <div className="flex flex-col items-center gap-2">
                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-2xl",
                    available ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                  )}
                >
                  <ChapterIcon name={ch.icon} className="size-6" />
                </span>
                <span className="text-xs font-bold text-muted-foreground">{String(ch.number).padStart(2, "0")}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold leading-tight group-hover:text-primary">
                  <span className="sr-only">Chương {ch.number}: </span>
                  {ch.title}
                </p>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{ch.summary}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  {available ? (
                    <span className="font-semibold text-success">
                      {published.length}/{ch.outline.length} bài đã phát hành
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="size-3" aria-hidden="true" /> Sắp ra mắt · {ch.outline.length} bài
                    </span>
                  )}
                  {done > 0 && (
                    <span className="flex items-center gap-1 text-success">
                      <CheckCircle2 className="size-3" aria-hidden="true" /> xong {done}
                    </span>
                  )}
                </div>
                {available && <Progress className="mt-2 h-1.5" value={(done / published.length) * 100} label={`Tiến độ chương ${ch.number}`} />}
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
