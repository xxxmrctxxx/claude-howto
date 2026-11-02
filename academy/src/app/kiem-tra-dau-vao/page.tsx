import type { Metadata } from "next";
import { PlacementTest } from "@/components/progress/placement-test";

export const metadata: Metadata = { title: "Kiểm tra trình độ đầu vào", description: "10 câu để biết nên bắt đầu từ chương nào." };

export default function PlacementPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Kiểm tra trình độ đầu vào</h1>
      <p className="mt-2 text-muted-foreground">
        10 câu ngắn thuộc 5 lĩnh vực. Kết quả dùng để đề xuất chương bắt đầu và đặt mức độ khó khởi điểm cho câu hỏi thích ứng. Bạn có thể làm lại bất cứ
        lúc nào.
      </p>
      <div className="mt-6">
        <PlacementTest />
      </div>
    </div>
  );
}
