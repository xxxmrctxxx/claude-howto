import type { WorkflowTurn } from "@/lib/engine/tokens/estimate";

export interface TokenParams {
  files: number;
  linesPerFile: number;
  followUps: number;
}

/** Average characters per line of code assumed by the simulation (shown to the learner). */
export const CHARS_PER_LINE = 32;

export const TASK =
  "Báo cáo tổng sản lượng tuần bị sai. Lỗi nằm trong file report.js của một dự án web nội bộ. Cần tìm và sửa lỗi.";

/** Workflow A: paste the whole project and ask vaguely, then iterate. */
export function workflowA(p: TokenParams): WorkflowTurn[] {
  const turns: WorkflowTurn[] = [
    { label: "Dán toàn bộ dự án + “Code có lỗi, sửa giúp.”", sentChars: p.files * p.linesPerFile * CHARS_PER_LINE + 30, replyChars: 900 },
  ];
  for (let i = 0; i < p.followUps; i++) {
    turns.push({ label: `Hỏi lại / giải thích thêm #${i + 1}`, sentChars: 220, replyChars: 1500 });
  }
  return turns;
}

/** Workflow B: project notes + one relevant file + the failing test, specific prompt. */
export function workflowB(p: TokenParams): WorkflowTurn[] {
  return [
    {
      label: "Ghi chú dự án (CLAUDE.md) + report.js + kết quả test lỗi + prompt cụ thể",
      sentChars: 600 + p.linesPerFile * CHARS_PER_LINE + 400 + 350,
      replyChars: 1200,
    },
    { label: "Chạy lại test, xác nhận đã sửa", sentChars: 150, replyChars: 300 },
  ];
}

export const QUALITY = [
  { aspect: "Claude biết chính xác chỗ cần sửa", a: "Phải tự đoán giữa nhiều file", b: "Được chỉ đúng file và test lỗi" },
  { aspect: "Kiểm chứng kết quả", a: "Khó: không có tiêu chí", b: "Dễ: chạy lại test là biết" },
  { aspect: "Rủi ro sửa nhầm chỗ khác", a: "Cao", b: "Thấp" },
];

export const TOKEN_QUIZ = [
  {
    id: "why-grow",
    question: "Vì sao token của workflow A tăng rất nhanh theo số lượt hỏi lại?",
    options: [
      { id: "a", text: "Mỗi lượt, toàn bộ lịch sử hội thoại (kể cả cả dự án đã dán) lại nằm trong context", correct: true },
      { id: "b", text: "Claude tính phí gấp đôi cho câu hỏi lặp lại", correct: false },
      { id: "c", text: "Token chỉ tăng vì câu trả lời của Claude dài hơn", correct: false },
    ],
    explain: "API Messages không lưu trạng thái: mỗi lượt gửi lại cả cuộc hội thoại. Prompt caching có thể giảm chi phí phần lặp lại, nhưng không làm context nhỏ đi.",
  },
  {
    id: "best-saving",
    question: "Trong tình huống này, thay đổi nào giảm token nhiều nhất mà vẫn giữ chất lượng?",
    options: [
      { id: "a", text: "Viết prompt ngắn hơn nữa", correct: false },
      { id: "b", text: "Chỉ gửi file liên quan + mô tả lỗi cụ thể + kết quả test", correct: true },
      { id: "c", text: "Bỏ ghi chú dự án để tiết kiệm vài trăm ký tự", correct: false },
    ],
    explain: "Phần lớn token đến từ việc dán cả dự án. Gửi đúng file và bằng chứng lỗi vừa rẻ hơn vừa giúp Claude sửa đúng chỗ.",
  },
];
