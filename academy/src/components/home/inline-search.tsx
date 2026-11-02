"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { SearchResults } from "@/components/layout/search-dialog";

export function InlineSearch() {
  const [q, setQ] = useState("");
  return (
    <div className="rounded-3xl border border-border bg-card p-4 md:p-6">
      <label htmlFor="home-search" className="flex items-center gap-2 text-lg font-bold">
        <Search className="size-5 text-primary" aria-hidden="true" /> Tìm kiếm bài học
      </label>
      <input
        id="home-search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Ví dụ: prompt, context, terminal, token…"
        className="mt-3 h-12 w-full rounded-xl border border-border bg-background px-4 text-base outline-none focus-visible:outline-2 focus-visible:outline-ring"
        data-testid="home-search"
      />
      {q.trim() && (
        <div className="mt-3 max-h-80 overflow-y-auto">
          <SearchResults query={q} />
        </div>
      )}
    </div>
  );
}
