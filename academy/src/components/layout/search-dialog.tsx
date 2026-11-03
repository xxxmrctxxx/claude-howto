"use client";

import { BookOpen, FlaskConical, Hash, Layers, Search, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { SearchDoc, SearchHit } from "@/lib/search";
import { cn } from "@/lib/utils";

const KIND_ICON: Record<SearchDoc["kind"], typeof BookOpen> = {
  lesson: BookOpen,
  planned: Clock,
  lab: FlaskConical,
  term: Hash,
  chapter: Layers,
};

type SearchModule = typeof import("@/lib/search");
let loadedSearch: SearchModule | null = null;

/**
 * The search index contains every lesson's text, so it is loaded on the first
 * query instead of being bundled into every page. Returns null while loading.
 */
function useSearchHits(query: string): SearchHit[] | null {
  const [mod, setMod] = useState<SearchModule | null>(loadedSearch);
  const wanted = query.trim().length > 0;
  useEffect(() => {
    if (mod || !wanted) return;
    let alive = true;
    void import("@/lib/search").then((m) => {
      loadedSearch = m;
      if (alive) setMod(m);
    });
    return () => {
      alive = false;
    };
  }, [mod, wanted]);
  return useMemo(() => (mod ? mod.search(query) : null), [mod, query]);
}

export function SearchResults({
  query,
  onNavigate,
  activeIndex = -1,
}: {
  query: string;
  onNavigate?: () => void;
  activeIndex?: number;
}) {
  const router = useRouter();
  const hits = useSearchHits(query);
  if (!query.trim()) return <p className="px-1 py-6 text-center text-sm text-muted-foreground">Gõ từ khoá, ví dụ “prompt”, “git”, “token”.</p>;
  if (!hits)
    return (
      <p className="px-1 py-6 text-center text-sm text-muted-foreground" role="status">
        Đang tải chỉ mục tìm kiếm…
      </p>
    );
  if (!hits.length)
    return (
      <p className="px-1 py-6 text-center text-sm text-muted-foreground" role="status">
        Không tìm thấy kết quả cho “{query}”.
      </p>
    );
  return (
    <ul className="flex flex-col gap-1" role="listbox" aria-label="Kết quả tìm kiếm">
      {hits.map((h, i) => {
        const Icon = KIND_ICON[h.doc.kind];
        const inner = (
          <>
            <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="min-w-0">
              <span className="block font-semibold">{h.doc.title}</span>
              <span className="block text-xs text-muted-foreground">{h.doc.context}</span>
              {h.doc.kind !== "planned" && <span className="mt-1 line-clamp-2 block text-xs text-muted-foreground">{h.snippet}</span>}
            </span>
          </>
        );
        return (
          <li key={h.doc.id} role="option" aria-selected={i === activeIndex}>
            {h.doc.href ? (
              <button
                type="button"
                className={cn(
                  "flex w-full cursor-pointer items-start gap-3 rounded-xl p-3 text-left text-sm hover:bg-accent",
                  i === activeIndex && "bg-accent",
                )}
                onClick={() => {
                  onNavigate?.();
                  router.push(h.doc.href!);
                }}
              >
                {inner}
              </button>
            ) : (
              <div className="flex items-start gap-3 rounded-xl p-3 text-sm opacity-70">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(-1);
  const router = useRouter();
  const hits = useSearchHits(query) ?? [];

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) {
          setQuery("");
          setActive(-1);
        }
      }}
    >
      <DialogContent className="max-h-[80vh] overflow-hidden p-0">
        <DialogTitle className="sr-only">Tìm kiếm bài học</DialogTitle>
        <DialogDescription className="sr-only">Tìm trong bài học, thuật ngữ và phòng thực hành.</DialogDescription>
        <div className="flex items-center gap-2 border-b border-border px-4 py-3 pr-12">
          <Search className="size-4 text-muted-foreground" aria-hidden="true" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(-1);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, hits.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter") {
                const hit = hits[Math.max(active, 0)];
                if (hit?.doc.href) {
                  onOpenChange(false);
                  router.push(hit.doc.href);
                }
              }
            }}
            placeholder="Tìm bài học, thuật ngữ, bài thực hành…"
            aria-label="Từ khoá tìm kiếm"
            className="h-9 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          <SearchResults query={query} activeIndex={active} onNavigate={() => onOpenChange(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function useSearchShortcut(setOpen: (v: boolean) => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);
}
