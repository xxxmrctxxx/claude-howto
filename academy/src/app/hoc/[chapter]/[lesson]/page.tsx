import { ChevronLeft, ChevronRight, Clock, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { LessonActions, SectionTracker } from "@/components/lesson/interactive";
import { LessonBlocks } from "@/components/lesson/lesson-blocks";
import { LessonDataProvider } from "@/components/lesson/lesson-data";
import { LessonShell } from "@/components/lesson/lesson-shell";
import { LessonSidebar } from "@/components/lesson/lesson-sidebar";
import { RightPanel } from "@/components/lesson/right-panel";
import { course } from "@/content/course";
import { bankFor, getChapterBySlug, getLessonBySlugs, lessonHref, neighbours } from "@/content/registry";
import { LEVEL_LABEL } from "@/lib/engine/question/adaptive";

export const dynamicParams = false;

export function generateStaticParams() {
  return course.chapters.flatMap((c) => c.outline.filter((o) => o.lessonId).map((o) => ({ chapter: c.slug, lesson: o.slug })));
}

export async function generateMetadata({ params }: PageProps<"/hoc/[chapter]/[lesson]">): Promise<Metadata> {
  const { chapter, lesson } = await params;
  const l = getLessonBySlugs(chapter, lesson);
  return l ? { title: l.title, description: l.subtitle } : {};
}

export default async function LessonPage({ params }: PageProps<"/hoc/[chapter]/[lesson]">) {
  const { chapter: chapterSlug, lesson: lessonSlug } = await params;
  const lesson = getLessonBySlugs(chapterSlug, lessonSlug);
  const chapter = getChapterBySlug(chapterSlug);
  if (!lesson || !chapter) notFound();
  const { prev, next } = neighbours(lesson.id);

  const content = (
    <article>
      <SectionTracker lessonId={lesson.id} sectionIds={lesson.blocks.map((b) => b.id)} />
      <header className="mb-6 rounded-3xl bg-gradient-to-br from-primary-soft to-card p-6 md:p-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link href="/hoc/" className="hover:text-foreground">
            Lộ trình
          </Link>{" "}
          / Chương {chapter.number}: {chapter.title}
        </nav>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl" data-testid="lesson-title">
          {lesson.title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{lesson.subtitle}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge variant="info">{LEVEL_LABEL[lesson.level]}</Badge>
          <Badge variant="neutral">
            <Clock /> {lesson.estimatedMinutes} phút
          </Badge>
          <Badge variant="outline">Cập nhật {new Date(lesson.updatedAt).toLocaleDateString("vi-VN")}</Badge>
        </div>
        <div className="mt-4">
          <LessonActions lessonId={lesson.id} />
        </div>
      </header>
      <LessonBlocks lesson={lesson} />
      <footer className="mt-6 flex flex-col gap-4">
        <div className="rounded-2xl border border-border bg-card p-4 text-sm">
          <p className="mb-2 font-semibold">Nguồn đối chiếu</p>
          <ul className="flex flex-col gap-1">
            {lesson.sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                  {s.label} <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Bài trước và bài sau" className="flex justify-between gap-3">
          {prev ? (
            <Link href={lessonHref(prev)} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:bg-accent">
              <ChevronLeft className="size-4" /> {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={lessonHref(next)} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:bg-accent">
              {next.title} <ChevronRight className="size-4" />
            </Link>
          ) : (
            <Link href="/thuc-hanh/" className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:bg-accent">
              Sang Phòng thực hành <ChevronRight className="size-4" />
            </Link>
          )}
        </nav>
      </footer>
    </article>
  );

  return (
    <LessonDataProvider bank={bankFor(lesson.id)} concepts={lesson.concepts}>
      <LessonShell nav={<LessonSidebar current={lesson} />} content={content} tools={<RightPanel lesson={lesson} />} />
    </LessonDataProvider>
  );
}
