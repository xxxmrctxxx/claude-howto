"use client";

import { BookOpen, FlaskConical, ListTree } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Pane = "nav" | "content" | "tools";

/**
 * Three-area learning layout. Desktop: sidebar | lesson | tools side by side.
 * Mobile/tablet: the same three areas become tabs (all stay in the DOM).
 */
export function LessonShell({ nav, content, tools }: { nav: ReactNode; content: ReactNode; tools: ReactNode }) {
  const [pane, setPane] = useState<Pane>("content");
  const tabs: { id: Pane; label: string; icon: typeof BookOpen }[] = [
    { id: "nav", label: "Mục lục", icon: ListTree },
    { id: "content", label: "Bài học", icon: BookOpen },
    { id: "tools", label: "Thực hành & ghi chú", icon: FlaskConical },
  ];
  return (
    <div className="mx-auto max-w-[96rem] px-4">
      <div role="tablist" aria-label="Khu vực bài học" className="sticky top-16 z-30 -mx-4 flex gap-1 border-b border-border bg-background/95 px-4 py-2 backdrop-blur lg:hidden">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={pane === t.id}
            aria-controls={`pane-${t.id}`}
            id={`tab-${t.id}`}
            onClick={() => {
              setPane(t.id);
              window.scrollTo({ top: 0 });
            }}
            className={cn(
              "flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-muted-foreground",
              pane === t.id && "bg-card text-foreground shadow-sm",
            )}
            data-testid={`pane-tab-${t.id}`}
          >
            <t.icon className="size-4" aria-hidden="true" />
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 py-6 lg:grid-cols-[16rem_minmax(0,1fr)] xl:grid-cols-[16rem_minmax(0,1fr)_22rem]">
        <aside
          id="pane-nav"
          aria-label="Danh sách chương và bài học"
          className={cn("lg:sticky lg:top-20 lg:block lg:max-h-[calc(100dvh-6rem)] lg:overflow-y-auto", pane !== "nav" && "max-lg:hidden")}
        >
          {nav}
        </aside>
        <div id="pane-content" className={cn("min-w-0", pane !== "content" && "max-lg:hidden")}>
          {content}
        </div>
        <aside
          id="pane-tools"
          aria-label="Thực hành, gợi ý, ghi chú và câu hỏi"
          className={cn(
            "lg:col-start-2 xl:sticky xl:top-20 xl:col-start-auto xl:max-h-[calc(100dvh-6rem)] xl:overflow-y-auto",
            pane !== "tools" && "max-lg:hidden",
          )}
        >
          {tools}
        </aside>
      </div>
    </div>
  );
}
