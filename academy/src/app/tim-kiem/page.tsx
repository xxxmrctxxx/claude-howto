import type { Metadata } from "next";
import { InlineSearch } from "@/components/home/inline-search";

export const metadata: Metadata = { title: "Tìm kiếm", description: "Tìm trong toàn bộ bài học, thuật ngữ và phòng thực hành." };

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight">Tìm kiếm</h1>
      <InlineSearch />
    </div>
  );
}
