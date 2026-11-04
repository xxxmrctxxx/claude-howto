import type { Question } from "@/lib/types/content";

const L = "ch07-l07";

/** 15 questions for "Các lỗi phổ biến" (chương 7) — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh07L07: Question[] = [
  {
    questionId: "ch07-l07-q01", lessonId: L, conceptId: "skill-not-triggering", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Gõ /tong-hop-loi thì skill chạy, nhưng nói “tổng hợp lỗi tuần này” thì Claude không dùng skill. Kiểm tra gì trước tiên?",
    options: [
      { id: "a", text: "Description có chứa những từ người dùng hay nói, như “tổng hợp lỗi tuần”, chưa", feedback: "Đúng." },
      { id: "b", text: "Phiên bản Node.js trên máy", feedback: "Không liên quan đến việc khớp skill." },
      { id: "c", text: "Dung lượng ổ đĩa", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Mục Skill not triggering: kiểm tra description có từ khoá người dùng hay nói.",
  },
  {
    questionId: "ch07-l07-q02", lessonId: L, conceptId: "skill-over-triggering", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Khi Claude dùng một skill cả lúc bạn không muốn, có thể viết description cụ thể hơn hoặc thêm disable-model-invocation: true để chỉ gọi tay.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Đây là hai cách trong mục Skill triggers too often.",
  },
  {
    questionId: "ch07-l07-q03", lessonId: L, conceptId: "mcp-order-error", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Những lỗi nào hay gặp khi thêm MCP server stdio bằng claude mcp add? Chọn tất cả.",
    options: [
      { id: "a", text: "Quên dấu -- trước lệnh chạy server", feedback: "Đúng." },
      { id: "b", text: "Đặt tên server ngay sau --env", feedback: "Đúng — tên bị hiểu là một cặp KEY=value." },
      { id: "c", text: "Đặt --transport trước tên server", feedback: "Đây là thứ tự đúng." },
    ],
    answer: ["a", "b"],
    explanation: "Thứ tự đúng: tuỳ chọn của Claude → tên server → -- → lệnh chạy server.",
  },
  {
    questionId: "ch07-l07-q04", lessonId: L, conceptId: "plugin-reload", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "Thấy dòng “Run /reload-plugins to apply.” sau khi cài nghĩa là plugin đã dùng được ngay, không cần làm gì thêm.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Cần chạy /reload-plugins để nạp plugin vào phiên đang mở.",
  },
  {
    questionId: "ch07-l07-q05", lessonId: L, conceptId: "debug-loop", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "MCP server báo lỗi. Bước đầu tiên hợp lý nhất?",
    options: [
      { id: "a", text: "Ghi lại nguyên văn trạng thái/thông báo lỗi và lệnh đã chạy", feedback: "Đúng." },
      { id: "b", text: "Xoá ~/.claude cho sạch", feedback: "Mất cấu hình cá nhân, không biết nguyên nhân." },
      { id: "c", text: "Cài lại Claude Code ngay", feedback: "Chưa có chẩn đoán." },
    ],
    answer: "a",
    explanation: "Thông báo nguyên văn là bằng chứng để chẩn đoán.",
  },
  {
    questionId: "ch07-l07-q06", lessonId: L, conceptId: "mcp-wrong-scope", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn thêm server tickets bằng claude mcp add (không ghi --scope) rồi báo nhóm. Đồng đội clone repo nhưng không thấy server. Cách sửa?",
    options: [
      { id: "a", text: "Thêm lại với --scope project để ghi vào .mcp.json, rồi commit file đó", feedback: "Đúng." },
      { id: "b", text: "Bảo đồng đội khởi động lại máy", feedback: "Server chỉ nằm trong cấu hình local của bạn." },
      { id: "c", text: "Thêm server vào CLAUDE.md", feedback: "CLAUDE.md không khai báo MCP server." },
    ],
    answer: "a",
    explanation: "Mặc định là local: chỉ bạn, dự án hiện tại.",
  },
  {
    questionId: "ch07-l07-q07", lessonId: L, conceptId: "mcp-output-limit", learningObjective: "o2", thinkingSkill: "remember", difficulty: "intermediate",
    questionType: "fill-blank",
    prompt: "Điền số và tên biến.",
    template: "Claude Code cảnh báo khi output của một công cụ MCP vượt [[b1]] token; muốn đổi giới hạn mặc định thì đặt biến [[b2]].",
    blanks: [
      { id: "b1", accepted: ["10000", "10.000", "10,000"], width: 7 },
      { id: "b2", accepted: ["MAX_MCP_OUTPUT_TOKENS"], width: 22 },
    ],
    explanation: "Giới hạn mặc định là 25.000 token.",
  },
  {
    questionId: "ch07-l07-q08", lessonId: L, conceptId: "skill-stops-following", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Claude làm theo skill ở lượt đầu, nhưng vài lượt sau bỏ quy tắc “chạy test sau mỗi lần sửa” — quy tắc này phải luôn đúng. Cách sửa phù hợp nhất?",
    options: [
      { id: "a", text: "Chuyển quy tắc thành hook (có thể khai báo trong frontmatter hooks của skill)", feedback: "Đúng." },
      { id: "b", text: "Viết quy tắc ba lần trong SKILL.md", feedback: "Vẫn là hướng dẫn, không bảo đảm." },
      { id: "c", text: "Tắt skill", feedback: "Mất luôn quy trình." },
    ],
    answer: "a",
    explanation: "Tài liệu: quy tắc phải đúng mọi lần → hook; hook chạy mỗi khi sự kiện xảy ra.",
  },
  {
    questionId: "ch07-l07-q09", lessonId: L, conceptId: "description-budget", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bạn có rất nhiều skill và thấy một số description bị cắt ngắn, skill ít dùng không còn tự kích hoạt. Vì sao?",
    options: [
      { id: "a", text: "Danh sách skill có ngân sách ký tự; khi vượt, Claude Code bỏ bớt description của các skill ít được gọi nhất", feedback: "Đúng." },
      { id: "b", text: "Claude Code tự xoá skill cũ", feedback: "Skill không bị xoá." },
      { id: "c", text: "Mỗi dự án chỉ được tối đa 3 skill", feedback: "Không có giới hạn này." },
    ],
    explanation: "Ngân sách khoảng 1% context window; mỗi mục còn bị giới hạn 1.536 ký tự. /doctor ước tính chi phí của danh sách.",
    answer: "a",
  },
  {
    questionId: "ch07-l07-q10", lessonId: L, conceptId: "plugin-not-installed", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Plugin team-tools được bật trong .claude/settings.json (đã commit), nhưng máy đồng đội báo plugin chưa được cài. Đồng đội cần làm gì?",
    options: [
      { id: "a", text: "Chạy claude plugin install team-tools@<marketplace> --scope project một lần", feedback: "Đúng." },
      { id: "b", text: "Không cần gì, plugin tự tải khi pull code", feedback: "Commit chỉ bật plugin, không tải về." },
      { id: "c", text: "Xoá .claude/settings.json", feedback: "Mất cấu hình chung." },
    ],
    answer: "a",
    explanation: "Tài liệu: committing that entry turns the plugin on but doesn't download it.",
  },
  {
    questionId: "ch07-l07-q11", lessonId: L, conceptId: "yaml-error", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Frontmatter dưới đây thiếu dấu nháy đóng nên YAML bị lỗi. Điều gì xảy ra?",
    context: { label: ".claude/skills/bao-cao-loi/SKILL.md", content: "---\ndescription: \"Viết báo cáo lỗi theo mẫu QA. Dùng khi nhờ ghi lại lỗi.\n---\n## Mẫu báo cáo\n…", lang: "markdown" },
    options: [
      { id: "a", text: "/bao-cao-loi vẫn chạy, nhưng Claude không khớp được description nên không tự dùng skill", feedback: "Đúng." },
      { id: "b", text: "Claude Code không khởi động được", feedback: "Không — skill vẫn được nạp với metadata rỗng." },
      { id: "c", text: "Claude tự sửa YAML", feedback: "Không có cơ chế này." },
    ],
    answer: "a",
    explanation: "Chạy claude --debug hoặc claude plugin validate .claude/skills để thấy lỗi phân tích.",
  },
  {
    questionId: "ch07-l07-q12", lessonId: L, conceptId: "mcp-output-limit", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Công cụ truy vấn log qua MCP thường trả về khoảng 60.000 token và bị cắt. Hướng xử lý tốt nhất?",
    options: [
      { id: "a", text: "Thu hẹp yêu cầu trước (lọc theo khoảng thời gian, mức lỗi); chỉ tăng MAX_MCP_OUTPUT_TOKENS khi thật cần", feedback: "Đúng." },
      { id: "b", text: "Tăng giới hạn lên thật cao cho mọi công cụ", feedback: "Output lớn chiếm context và làm loãng thông tin." },
      { id: "c", text: "Bỏ MCP, copy log bằng tay", feedback: "Vẫn đưa cùng lượng dữ liệu vào context." },
    ],
    answer: "a",
    explanation: "Ít mà đúng trọng tâm tốt hơn nhiều mà loãng — đúng tinh thần Chương 8.",
  },
  {
    questionId: "ch07-l07-q13", lessonId: L, conceptId: "debug-loop", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn xử lý MCP server không kết nối như dưới đây. Chọn các bước SAI.",
    segments: [
      { id: "s1", text: "Chép nguyên văn dòng trạng thái trong claude mcp list.", isError: false },
      { id: "s2", text: "Đổi cùng lúc transport, phạm vi và token cho chắc ăn.", isError: true, why: "Không biết thay đổi nào có tác dụng." },
      { id: "s3", text: "Xoá toàn bộ ~/.claude rồi cài lại từ đầu.", isError: true, why: "Mất cấu hình cá nhân mà chưa có chẩn đoán." },
      { id: "s4", text: "Sửa một thứ rồi chạy lại claude mcp list.", isError: false },
    ],
    explanation: "Một giả thuyết, một thay đổi, một lần kiểm tra.",
  },
  {
    questionId: "ch07-l07-q14", lessonId: L, conceptId: "debug-loop", learningObjective: "o4", thinkingSkill: "apply", difficulty: "advanced",
    questionType: "ordering",
    prompt: "Sắp xếp các bước của vòng xử lý lỗi.",
    items: [
      { id: "a", text: "Ghi lại triệu chứng và thông báo nguyên văn" },
      { id: "b", text: "Chạy công cụ chẩn đoán phù hợp" },
      { id: "c", text: "Nêu một giả thuyết nguyên nhân" },
      { id: "d", text: "Sửa đúng một thứ" },
      { id: "e", text: "Kiểm tra lại bằng cùng công cụ và một bài thử nhỏ" },
    ],
    explanation: "Chưa hết lỗi thì quay lại bước giả thuyết.",
  },
  {
    questionId: "ch07-l07-q15", lessonId: L, conceptId: "plugin-not-installed", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết hướng dẫn kiểm tra và sửa (4–5 bước) gửi đồng đội cho sự cố dưới đây.",
    source: "Đồng đội: “Mình vừa clone repo, mở claude, nhưng không có MCP server tickets và cũng không thấy lệnh /team-tools:review.” Repo có .mcp.json (server tickets dùng ${TICKETS_TOKEN}) và .claude/settings.json bật plugin team-tools từ marketplace acme.",
    rubric: [
      { id: "list", label: "Xem trạng thái MCP", weight: 1, check: { kind: "anyKeyword", keywords: ["claude mcp list", "/mcp"] }, pass: "Có xem trạng thái.", fail: "Chạy claude mcp list hoặc /mcp." },
      { id: "approve", label: "Duyệt server / đặt biến", weight: 1, check: { kind: "anyKeyword", keywords: ["duyệt", "approve", "TICKETS_TOKEN"] }, pass: "Có xử lý server dự án.", fail: "Duyệt server từ .mcp.json và đặt biến TICKETS_TOKEN." },
      { id: "install", label: "Cài plugin", weight: 1, check: { kind: "regex", pattern: "claude plugin install team-tools@acme" }, pass: "Có lệnh cài.", fail: "claude plugin install team-tools@acme --scope project." },
      { id: "verify", label: "Kiểm tra lại", weight: 1, check: { kind: "anyKeyword", keywords: ["reload-plugins", "claude plugin list", "gõ /", "kiểm tra lại"] }, pass: "Có kiểm tra lại.", fail: "Kết thúc bằng /reload-plugins hoặc claude plugin list, gõ / để thấy lệnh." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "1. Đặt biến TICKETS_TOKEN trong máy bạn (token của chính bạn).\n2. Chạy claude mcp list: nếu tickets đang Pending approval thì mở claude trong repo và duyệt server.\n3. Cài plugin đã được bật cho dự án: claude plugin install team-tools@acme --scope project (nếu chưa có marketplace acme thì thêm trước).\n4. Trong phiên đang mở, chạy /reload-plugins.\n5. Kiểm tra lại: claude mcp list thấy tickets Connected, claude plugin list thấy team-tools, gõ / thấy /team-tools:review.",
    explanation: "Hai vấn đề riêng: server dự án cần duyệt và biến; plugin được bật nhưng chưa tải về.",
  },
];
