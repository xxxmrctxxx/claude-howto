import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LABS } from "@/content/labs/index";

export const metadata: Metadata = { title: "Phòng thực hành", description: "5 lab tương tác: Prompt Builder, Terminal, Debug, Project Builder, Token." };

export default function LabsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Phòng thực hành</h1>
      <p className="mt-2 max-w-3xl text-muted-foreground">
        Mỗi lab là một bài tập thật: có đầu vào, có chấm điểm và có phản hồi cụ thể. Mỗi lab ghi rõ phần nào là mô phỏng, phần nào chạy thật.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {LABS.map((lab) => (
          <li key={lab.id}>
            <Link href={lab.href} className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md" data-testid={`lab-card-${lab.id}`}>
              <span className="text-xs font-bold text-primary">LAB {lab.number}</span>
              <span className="mt-1 text-xl font-extrabold group-hover:text-primary">{lab.title}</span>
              <span className="mt-2 text-muted-foreground">{lab.description}</span>
              <span className="mt-3 flex flex-wrap gap-1.5">
                {lab.skills.map((s) => (
                  <span key={s} className="rounded-full bg-muted px-2 py-0.5 text-xs">
                    {s}
                  </span>
                ))}
              </span>
              <span className="mt-4 text-xs text-muted-foreground">{lab.honesty}</span>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-primary">
                Vào lab <ArrowRight className="size-4" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
