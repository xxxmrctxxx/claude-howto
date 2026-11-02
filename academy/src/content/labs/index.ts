export interface LabMeta {
  id: "prompt-builder" | "terminal" | "debug" | "project-builder" | "token";
  number: number;
  title: string;
  short: string;
  description: string;
  href: string;
  skills: string[];
  /** What is simulated vs real — shown on the lab page. */
  honesty: string;
}

export const LABS: LabMeta[] = [
  {
    id: "prompt-builder",
    number: 1,
    title: "Prompt Builder",
    short: "Xây prompt từ các khối và nhận đánh giá theo 5 tiêu chí.",
    description:
      "Chọn một tình huống công việc, viết từng khối Role, Context, Task, Constraints, Output, sắp xếp lại và nhận phân tích chi tiết.",
    href: "/thuc-hanh/prompt-builder/",
    skills: ["Prompt Engineering", "Viết yêu cầu rõ ràng"],
    honesty: "Chấm điểm bằng bộ quy tắc (rule-based), không gọi AI. Kết quả là gợi ý, không phải đánh giá tuyệt đối.",
  },
  {
    id: "terminal",
    number: 2,
    title: "Terminal Simulator",
    short: "Luyện pwd, ls, cd, mkdir và git trong một terminal mô phỏng.",
    description:
      "Một hệ thống file giả lập chạy trong trình duyệt, kèm sơ đồ Git trực quan. Làm nhiệm vụ từng bước để quen với dòng lệnh trước khi dùng Claude Code.",
    href: "/thuc-hanh/terminal/",
    skills: ["Terminal", "Git cơ bản"],
    honesty: "Đây là MÔI TRƯỜNG MÔ PHỎNG, không phải terminal thật. Không có lệnh nào chạy trên máy của bạn.",
  },
  {
    id: "debug",
    number: 3,
    title: "Debug Challenge",
    short: "Tìm lỗi, đề xuất cách sửa, sửa code và chạy test thật.",
    description:
      "Các đoạn JavaScript xử lý dữ liệu sản xuất và QA có lỗi. Bạn tìm dòng lỗi, chọn cách sửa, sửa trong editor và chạy unit test ngay trong trình duyệt.",
    href: "/thuc-hanh/debug/",
    skills: ["Đọc code", "Debug", "Kiểm thử"],
    honesty: "Test chạy thật trong một Web Worker cô lập của trình duyệt (JavaScript), có giới hạn thời gian.",
  },
  {
    id: "project-builder",
    number: 4,
    title: "Project Builder",
    short: "Làm một ứng dụng nhỏ theo từng bước cùng Claude.",
    description:
      "Từng bước có mục tiêu, prompt mẫu, kết quả mong đợi, cách kiểm tra, lỗi thường gặp và cách sửa. Dán code Claude tạo ra để kiểm tra cấu trúc tự động.",
    href: "/thuc-hanh/project-builder/",
    skills: ["Claude Artifacts", "Lập kế hoạch", "Kiểm thử"],
    honesty: "Bộ kiểm tra chỉ phân tích cấu trúc HTML bạn dán vào; bạn tự tạo code bằng Claude ở bên ngoài.",
  },
  {
    id: "token",
    number: 5,
    title: "Token Optimization",
    short: "So sánh hai workflow cho cùng một nhiệm vụ và lượng token tiêu hao.",
    description:
      "Điều chỉnh số file, số lượt hỏi và cách viết prompt để thấy token tích luỹ thay đổi thế nào giữa workflow “đọc hết” và workflow “có mục tiêu”.",
    href: "/thuc-hanh/token/",
    skills: ["Token", "Context window", "Tối ưu chi phí"],
    honesty:
      "Số token là ƯỚC TÍNH bằng công thức gần đúng, không phải số đo từ tokenizer thật của Claude. Dùng để so sánh tương đối.",
  },
];
