import type { Metadata } from "next";
import { ProgressDashboard, type LessonOverview } from "@/components/progress/progress-dashboard";
import { allQuestions, bankFor, lessonHref, publishedLessons } from "@/content/registry";

export const metadata: Metadata = { title: "Tiến độ học tập", description: "XP, cấp độ, huy hiệu, kỹ năng còn yếu, ghi chú và lịch sử thực hành." };

export default function ProgressPage() {
  const lessons: LessonOverview[] = publishedLessons().map((l) => ({
    id: l.id,
    title: l.title,
    href: lessonHref(l),
    sections: l.blocks.length,
    questionCount: bankFor(l.id).length,
    concepts: l.concepts,
  }));
  const prompts = Object.fromEntries(allQuestions().map((q) => [q.questionId, q.prompt]));
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl">Tiến độ học tập</h1>
      <ProgressDashboard lessons={lessons} prompts={prompts} />
    </div>
  );
}
