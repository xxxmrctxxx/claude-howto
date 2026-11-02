import type { Metadata } from "next";
import { ProgressDashboard } from "@/components/progress/progress-dashboard";

export const metadata: Metadata = { title: "Tiến độ học tập", description: "XP, cấp độ, huy hiệu, kỹ năng còn yếu, ghi chú và lịch sử thực hành." };

export default function ProgressPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl">Tiến độ học tập</h1>
      <ProgressDashboard />
    </div>
  );
}
