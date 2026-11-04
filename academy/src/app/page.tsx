import { ArrowRight, Eye, FlaskConical, Lightbulb, ListChecks, Rocket } from "lucide-react";
import Link from "next/link";
import { HomeDashboard, StartButton } from "@/components/home/dashboard";
import { InlineSearch } from "@/components/home/inline-search";
import { Roadmap } from "@/components/home/roadmap";
import { course } from "@/content/course";
import { LABS } from "@/content/labs/index";
import { publishedLessons, totalPlannedLessons } from "@/content/registry";
import { allQuestions } from "@/content/registry";

const PHILOSOPHY = [
  { icon: Eye, label: "Học bằng hình ảnh" },
  { icon: Lightbulb, label: "Hiểu bằng ví dụ" },
  { icon: FlaskConical, label: "Thực hành" },
  { icon: ListChecks, label: "Kiểm tra" },
  { icon: Rocket, label: "Ứng dụng thực tế" },
];

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 py-10">
      <section className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]" aria-labelledby="hero-title">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
            100% tiếng Việt · Claude AI & Claude Code
          </p>
          <h1 id="hero-title" className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Làm chủ Claude <span className="text-primary">bằng cách làm thật</span>, không chỉ đọc lý thuyết.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Lộ trình {course.chapters.length} chương cho người chưa biết lập trình đến kỹ sư: hình minh hoạ, mô phỏng tương tác, phòng thực hành và câu
            hỏi thích ứng không lặp lại.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <StartButton />
            <Link
              href="/kiem-tra-dau-vao/"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-6 font-semibold hover:bg-accent"
            >
              Kiểm tra trình độ
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Triết lý học tập">
            {PHILOSOPHY.map((p, i) => (
              <li key={p.label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <p.icon className="size-4 text-primary" aria-hidden="true" />
                {p.label}
                {i < PHILOSOPHY.length - 1 && <ArrowRight className="size-3" aria-hidden="true" />}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </section>

      <section aria-labelledby="progress-title">
        <h2 id="progress-title" className="mb-4 text-2xl font-extrabold">
          Tiến độ của bạn
        </h2>
        <HomeDashboard />
      </section>

      <section aria-labelledby="roadmap-title">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 id="roadmap-title" className="text-2xl font-extrabold">
              Lộ trình học
            </h2>
            <p className="text-muted-foreground">
              {publishedLessons().length} bài đã phát hành đầy đủ / {totalPlannedLessons()} bài trong lộ trình · {allQuestions().length} câu hỏi.
              {publishedLessons().length < totalPlannedLessons() && " Bài chưa phát hành được ghi rõ “Sắp ra mắt”."}
            </p>
          </div>
          <Link href="/hoc/" className="text-sm font-semibold text-primary hover:underline">
            Xem chi tiết lộ trình →
          </Link>
        </div>
        <Roadmap compact />
      </section>

      <section aria-labelledby="labs-title">
        <h2 id="labs-title" className="mb-4 text-2xl font-extrabold">
          Dự án & phòng thực hành
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {LABS.map((lab) => (
            <li key={lab.id}>
              <Link href={lab.href} className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-xs font-bold text-primary">LAB {lab.number}</span>
                <span className="mt-1 font-bold">{lab.title}</span>
                <span className="mt-1 text-sm text-muted-foreground">{lab.short}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Tìm kiếm">
        <InlineSearch />
      </section>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="rounded-3xl border border-border bg-card p-5 shadow-xl">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <span className="size-2.5 rounded-full bg-danger" />
          <span className="size-2.5 rounded-full bg-warning" />
          <span className="size-2.5 rounded-full bg-success" />
          <span className="ml-2 text-xs text-muted-foreground">Prompt Builder</span>
        </div>
        <div className="mt-4 flex flex-col gap-2 text-sm">
          {[
            ["Role", "var(--c-role)", "Bạn là kỹ sư QA."],
            ["Context", "var(--c-context)", "Lỗi rò dầu máy biến áp 250 kVA…"],
            ["Task", "var(--c-task)", "Viết báo cáo 8D."],
            ["Constraints", "var(--c-constraints)", "Có nguyên nhân, khắc phục, phòng ngừa."],
            ["Output", "var(--c-output)", "Song ngữ Việt – Anh, dạng bảng."],
          ].map(([label, color, text]) => (
            <div key={label} className="flex items-center gap-2 rounded-xl border border-border p-2">
              <span className="w-24 shrink-0 rounded-lg px-2 py-0.5 text-center text-xs font-bold text-white dark:text-background" style={{ background: color }}>
                {label}
              </span>
              <span className="truncate">{text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-success-soft p-3 text-sm font-semibold text-success">Đánh giá: 5/5 thành phần · rõ ràng</div>
      </div>
      <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-terminal-bg px-4 py-3 font-mono text-xs text-terminal-fg shadow-lg sm:block">
        <span className="text-[#7ee787]">hocvien@academy:~$</span> git commit -m &quot;bai dau tien&quot;
      </div>
    </div>
  );
}
