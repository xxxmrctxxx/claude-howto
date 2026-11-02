import type { ComponentId } from "@/components/visuals/prompt-anatomy";

export interface AssemblerSnippet {
  id: string;
  text: string;
  /** null = distractor that belongs to no component. */
  belongsTo: ComponentId | null;
  explain: string;
}

/** Data for the "Lắp ráp prompt" simulation (lesson ch03-l01). Order = display order. */
export const ASSEMBLER_SNIPPETS: AssemblerSnippet[] = [
  {
    id: "k",
    text: "Nêu rõ nguyên nhân gốc, hành động khắc phục và phòng ngừa; không suy đoán số liệu chưa có.",
    belongsTo: "constraints",
    explain: "Ràng buộc: những phần bắt buộc phải có và giới hạn không được vượt qua.",
  },
  {
    id: "d1",
    text: "Viết thật chuyên nghiệp và hay nhé.",
    belongsTo: null,
    explain: "Gây nhiễu: “hay”, “chuyên nghiệp” là cảm tính, không cho Claude tiêu chí đo được.",
  },
  {
    id: "c",
    text: "Khách hàng phản ánh rò dầu ở mặt bích van xả của 3 máy biến áp 250 kVA, lô sản xuất tháng 7/2024.",
    belongsTo: "context",
    explain: "Bối cảnh: chuyện gì xảy ra, ở đâu, bao nhiêu — điều Claude không thể tự biết.",
  },
  {
    id: "o",
    text: "Trình bày song ngữ Việt – Anh, dạng bảng theo 8 bước D1–D8.",
    belongsTo: "output",
    explain: "Định dạng: hình thức và ngôn ngữ của kết quả.",
  },
  {
    id: "r",
    text: "Bạn là kỹ sư QA có 10 năm kinh nghiệm về máy biến áp.",
    belongsTo: "role",
    explain: "Vai trò: định hướng góc nhìn và thuật ngữ chuyên môn.",
  },
  {
    id: "d2",
    text: "Cảm ơn bạn rất nhiều!",
    belongsTo: null,
    explain: "Gây nhiễu: lời cảm ơn không sai, nhưng không giúp Claude hiểu việc cần làm.",
  },
  {
    id: "t",
    text: "Hãy viết báo cáo 8D cho sự cố này.",
    belongsTo: "task",
    explain: "Nhiệm vụ: việc cụ thể cần làm, bắt đầu bằng động từ.",
  },
];
