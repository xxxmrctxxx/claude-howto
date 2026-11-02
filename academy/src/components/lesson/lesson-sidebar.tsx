"use client";

import { CheckCircle2, ChevronDown, CircleDashed, Clock, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ChapterIcon } from "@/components/icon";
import { course } from "@/content/course";
import { LESSONS } from "@/content/registry";
import { useProgress } from "@/lib/progress/store";
import type { Lesson } from "@/lib/types/content";
import { cn } from "@/lib/utils";

export function LessonSidebar({ current }: { current: Lesson }) {
  const state = useProgress();
  const [open, setOpen] = useState<string[]>([current.chapterId]);
  const lp = state.lessons[current.id];
  return (
    <nav aria-label="Mục lục khoá học" className="flex flex-col gap-1 text-sm">
      <p className="mb-1 px-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">Nội dung bài này</p>
      <ol className="mb-4 flex flex-col gap-0.5 border-l-2 border-border pl-2">
        {current.blocks.map((b, i) => (
          <li key={b.id}>
            <a
              href={`#${b.id}`}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2 py-1 text-muted-foreground hover:bg-accent hover:text-foreground",
                lp?.lastSectionId === b.id && "font-semibold text-foreground",
              )}
            >
              {lp?.sectionsSeen.includes(b.id) ? (
                <CheckCircle2 className="size-3.5 shrink-0 text-success" aria-label="đã xem" />
              ) : (
                <span className="w-3.5 shrink-0 text-center text-[10px] font-bold">{i + 1}</span>
              )}
              {b.title}
            </a>
          </li>
        ))}
      </ol>
      <p className="mb-1 px-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">Toàn bộ khoá học</p>
      {course.chapters.map((ch) => {
        const isOpen = open.includes(ch.id);
        return (
          <div key={ch.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen((o) => (isOpen ? o.filter((x) => x !== ch.id) : [...o, ch.id]))}
              className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left font-semibold hover:bg-accent"
            >
              <ChapterIcon name={ch.icon} className="size-4 shrink-0 text-primary" />
              <span className="flex-1">
                {ch.number}. {ch.title}
              </span>
              <ChevronDown className={cn("size-4 shrink-0 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
            </button>
            {isOpen && (
              <ul className="mb-2 ml-4 flex flex-col gap-0.5">
                {ch.outline.map((o) => {
                  const lesson = o.lessonId ? LESSONS[o.lessonId] : undefined;
                  if (!lesson)
                    return (
                      <li key={o.slug} className="flex items-center gap-2 px-2 py-1 text-muted-foreground" title="Sắp ra mắt">
                        <Clock className="size-3.5 shrink-0" aria-hidden="true" />
                        <span>{o.title}</span>
                        <span className="sr-only">(sắp ra mắt)</span>
                      </li>
                    );
                  const st = state.lessons[lesson.id]?.status;
                  const isCurrent = lesson.id === current.id;
                  return (
                    <li key={o.slug}>
                      <Link
                        href={`/hoc/${ch.slug}/${o.slug}/`}
                        aria-current={isCurrent ? "page" : undefined}
                        className={cn("flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-accent", isCurrent && "bg-primary-soft font-semibold text-primary")}
                      >
                        {st === "completed" ? (
                          <CheckCircle2 className="size-3.5 shrink-0 text-success" aria-label="đã hoàn thành" />
                        ) : st === "in-progress" ? (
                          <PlayCircle className="size-3.5 shrink-0 text-primary" aria-label="đang học" />
                        ) : (
                          <CircleDashed className="size-3.5 shrink-0" aria-label="chưa học" />
                        )}
                        {o.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}
