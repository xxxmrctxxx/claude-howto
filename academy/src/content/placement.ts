export interface PlacementQuestion {
  id: string;
  area: "ai-basics" | "prompting" | "claude-code" | "tools" | "tokens";
  question: string;
  options: { id: string; text: string }[];
  answer: string;
  explanation: string;
}

export const AREA_LABEL: Record<PlacementQuestion["area"], string> = {
  "ai-basics": "Hiểu biết về AI",
  prompting: "Viết prompt",
  "claude-code": "Claude Code & dòng lệnh",
  tools: "Mở rộng (MCP, Skills)",
  tokens: "Token & context",
};

/** Placement test (separate bank from lesson questions). Facts checked against Anthropic docs and this repo's modules. */
export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  {
    id: "pl-01",
    area: "ai-basics",
    question: "Một mô hình ngôn ngữ lớn như Claude tạo câu trả lời chủ yếu bằng cách nào?",
    options: [
      { id: "a", text: "Tra cứu câu trả lời có sẵn trong một cơ sở dữ liệu cố định" },
      { id: "b", text: "Dự đoán phần văn bản tiếp theo dựa trên những gì đã học và ngữ cảnh bạn đưa vào" },
      { id: "c", text: "Tìm kiếm Google rồi sao chép kết quả" },
    ],
    answer: "b",
    explanation: "LLM sinh văn bản bằng cách dự đoán token tiếp theo; nó không tra cứu một đáp án cố định.",
  },
  {
    id: "pl-02",
    area: "ai-basics",
    question: "Claude trả lời rất tự tin một số liệu kỹ thuật. Bạn nên làm gì?",
    options: [
      { id: "a", text: "Dùng ngay vì AI không nói sai khi tự tin" },
      { id: "b", text: "Đối chiếu với tài liệu gốc hoặc tiêu chuẩn trước khi dùng" },
      { id: "c", text: "Hỏi lại cùng câu đó, nếu giống nhau là đúng" },
    ],
    answer: "b",
    explanation: "AI có thể “bịa” thông tin nghe rất hợp lý (hallucination). Số liệu quan trọng phải được kiểm chứng.",
  },
  {
    id: "pl-03",
    area: "prompting",
    question: "Prompt nào cho Claude nhiều thông tin hữu ích nhất?",
    options: [
      { id: "a", text: "“Viết email.”" },
      { id: "b", text: "“Viết email thật hay và chuyên nghiệp.”" },
      { id: "c", text: "“Bạn là trưởng phòng CSKH. Viết email xin lỗi khách An Phát vì giao trễ 5 ngày, tối đa 150 từ, gồm 3 đoạn.”" },
    ],
    answer: "c",
    explanation: "Prompt c có vai trò, bối cảnh, nhiệm vụ, ràng buộc và định dạng.",
  },
  {
    id: "pl-04",
    area: "prompting",
    question: "Khi muốn Claude theo đúng một định dạng đầu ra phức tạp, cách đáng tin cậy là gì?",
    options: [
      { id: "a", text: "Đưa vài ví dụ mẫu (few-shot) được bọc trong thẻ như <example>" },
      { id: "b", text: "Viết hoa toàn bộ yêu cầu" },
      { id: "c", text: "Nhắc lại yêu cầu 5 lần" },
    ],
    answer: "a",
    explanation: "Theo Anthropic, ví dụ là một trong những cách đáng tin cậy nhất để định hướng định dạng; nên bọc ví dụ trong thẻ để tách khỏi chỉ dẫn.",
  },
  {
    id: "pl-05",
    area: "claude-code",
    question: "Claude Code là gì?",
    options: [
      { id: "a", text: "Một công cụ lập trình có tác tử (agentic) chạy trong terminal, đọc và sửa code trong dự án của bạn" },
      { id: "b", text: "Một ngôn ngữ lập trình mới của Anthropic" },
      { id: "c", text: "Một trình soạn thảo văn bản chỉ để tô màu cú pháp" },
    ],
    answer: "a",
    explanation: "Claude Code là công cụ lập trình agentic: nó đọc codebase, sửa file, chạy lệnh — làm việc trong terminal, IDE, desktop và web.",
  },
  {
    id: "pl-06",
    area: "claude-code",
    question: "Lệnh terminal nào cho biết bạn đang ở thư mục nào?",
    options: [
      { id: "a", text: "ls" },
      { id: "b", text: "pwd" },
      { id: "c", text: "cd" },
    ],
    answer: "b",
    explanation: "pwd (print working directory) in ra thư mục hiện tại; ls liệt kê nội dung; cd chuyển thư mục.",
  },
  {
    id: "pl-07",
    area: "claude-code",
    question: "Trong Claude Code, file CLAUDE.md của dự án dùng để làm gì?",
    options: [
      { id: "a", text: "Lưu hướng dẫn và bối cảnh dự án mà Claude đọc ở mỗi phiên làm việc" },
      { id: "b", text: "Lưu mật khẩu đăng nhập Claude" },
      { id: "c", text: "Ghi lại toàn bộ lịch sử chat" },
    ],
    answer: "a",
    explanation: "CLAUDE.md là bộ nhớ dự án: quy ước, lệnh, kiến trúc. Lệnh /init giúp tạo file này.",
  },
  {
    id: "pl-08",
    area: "tools",
    question: "MCP (Model Context Protocol) dùng để làm gì?",
    options: [
      { id: "a", text: "Nén file để gửi nhanh hơn" },
      { id: "b", text: "Kết nối Claude với công cụ, API và nguồn dữ liệu bên ngoài theo một chuẩn chung" },
      { id: "c", text: "Đổi giao diện Claude sang chế độ tối" },
    ],
    answer: "b",
    explanation: "MCP là giao thức chuẩn để Claude truy cập công cụ và dữ liệu bên ngoài (cơ sở dữ liệu, GitHub, Slack…).",
  },
  {
    id: "pl-09",
    area: "tokens",
    question: "“Context window” là gì?",
    options: [
      { id: "a", text: "Lượng văn bản tối đa (tính bằng token) Claude có thể xem xét cùng lúc trong một lượt" },
      { id: "b", text: "Cửa sổ trình duyệt đang mở Claude" },
      { id: "c", text: "Số tin nhắn tối đa mỗi ngày" },
    ],
    answer: "a",
    explanation: "Context window là giới hạn token cho toàn bộ đầu vào (hội thoại, file…) và đầu ra trong một lượt.",
  },
  {
    id: "pl-10",
    area: "tokens",
    question: "Cách nào thường giúp tiết kiệm token nhất khi nhờ Claude sửa một lỗi trong dự án lớn?",
    options: [
      { id: "a", text: "Dán toàn bộ dự án cho chắc" },
      { id: "b", text: "Chỉ ra đúng file liên quan, mô tả lỗi và kết quả mong đợi" },
      { id: "c", text: "Hỏi thật nhiều lượt ngắn" },
    ],
    answer: "b",
    explanation: "Gửi đúng phần liên quan giảm token và giúp Claude tập trung đúng chỗ.",
  },
];

/** Recommend a starting chapter from per-area scores (0..1). */
export function recommend(areaScores: Record<string, number>, overall: number) {
  const level: "beginner" | "intermediate" | "advanced" = overall < 0.4 ? "beginner" : overall < 0.8 ? "intermediate" : "advanced";
  let chapter = "ch06";
  if ((areaScores["ai-basics"] ?? 0) < 1) chapter = "ch01";
  else if ((areaScores.prompting ?? 0) < 1) chapter = "ch03";
  else if ((areaScores["claude-code"] ?? 0) < 0.67) chapter = "ch05";
  else if ((areaScores.tools ?? 0) < 1) chapter = "ch07";
  else if ((areaScores.tokens ?? 0) < 1) chapter = "ch08";
  return { level, chapter };
}
