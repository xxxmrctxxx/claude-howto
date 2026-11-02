import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock } from "lucide-react";
import { Roadmap } from "@/components/home/roadmap";
import { ChapterIcon } from "@/components/icon";
import { course } from "@/content/course";
import { LESSONS } from "@/content/registry";

export const metadata: Metadata = { title: "Lộ trình học", description: "12 chương từ Claude AI cơ bản đến dự án tốt nghiệp." };

export default function CoursePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Lộ trình học</h1>
      <p className="mt-2 max-w-3xl text-muted-foreground">
        Thứ tự chương là thứ tự học được khuyến nghị. Bài đã phát hành có đủ 12 phần (mục tiêu, giải thích, hình minh hoạ, sơ đồ, ví dụ sai/đúng,
        mô phỏng, từng bước, bài tập, câu hỏi, đáp án, tóm tắt, nhiệm vụ thực tế). Bài “Sắp ra mắt” chưa có nội dung và không thể mở.
      </p>
      <div className="mt-8">
        <Roadmap />
      </div>
      <div className="mt-12 flex flex-col gap-6">
        {course.chapters.map((ch) => (
          <section key={ch.id} aria-labelledby={`${ch.slug}-outline`} className="rounded-3xl border border-border bg-card p-5">
            <h2 id={`${ch.slug}-outline`} className="flex items-center gap-2 text-xl font-bold">
              <ChapterIcon name={ch.icon} className="size-5 text-primary" />
              Chương {ch.number}: {ch.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {ch.summary} · Dành cho: {ch.audience} · khoảng {Math.round(ch.estimatedMinutes / 60)} giờ
            </p>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2">
              {ch.outline.map((o, i) => {
                const lesson = o.lessonId ? LESSONS[o.lessonId] : undefined;
                return (
                  <li key={o.slug}>
                    {lesson ? (
                      <Link href={`/hoc/${ch.slug}/${o.slug}/`} className="flex items-center gap-2 rounded-xl border border-border p-3 text-sm font-semibold hover:bg-accent">
                        <CheckCircle2 className="size-4 text-success" aria-hidden="true" />
                        {i + 1}. {o.title}
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 rounded-xl border border-dashed border-border p-3 text-sm text-muted-foreground">
                        <Clock className="size-4" aria-hidden="true" />
                        {i + 1}. {o.title} <span className="ml-auto text-xs">Sắp ra mắt</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
