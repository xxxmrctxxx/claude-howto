import type { Question } from "@/lib/types/content";

const L = "ch07-l06";

/** 15 questions for "Cách kiểm tra kết nối" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh07L06: Question[] = [
  {
    questionId: "ch07-l06-q01", lessonId: L, conceptId: "mcp-list", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Lệnh terminal nào liệt kê các MCP server đã cấu hình kèm trạng thái kết nối?",
    options: [
      { id: "a", text: "claude mcp list", feedback: "Đúng." },
      { id: "b", text: "claude --version", feedback: "Lệnh này in phiên bản Claude Code." },
      { id: "c", text: "git status", feedback: "Lệnh này xem trạng thái git." },
    ],
    answer: "a",
    explanation: "claude mcp get <tên> xem chi tiết một server.",
  },
  {
    questionId: "ch07-l06-q02", lessonId: L, conceptId: "status-needs-auth", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Trạng thái “! Needs authentication” nghĩa là server đã được cấu hình nhưng cần bạn đăng nhập; có thể xác thực trong /mcp.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Trong /mcp, chọn server để mở luồng đăng nhập trên trình duyệt.",
  },
  {
    questionId: "ch07-l06-q03", lessonId: L, conceptId: "slash-mcp", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Đang trong phiên Claude Code, lệnh nào xem trạng thái các MCP server và xác thực server cần đăng nhập?",
    options: [
      { id: "a", text: "/mcp", feedback: "Đúng." },
      { id: "b", text: "/clear", feedback: "/clear xoá hội thoại." },
      { id: "c", text: "/init", feedback: "/init tạo CLAUDE.md." },
    ],
    answer: "a",
    explanation: "/mcp còn cho xem danh sách công cụ của từng server.",
  },
  {
    questionId: "ch07-l06-q04", lessonId: L, conceptId: "skills-check", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "Một cách kiểm tra skill đã được nhận là hỏi Claude “What skills are available?” hoặc gõ / để xem menu.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Mục Troubleshooting của tài liệu Skills gợi ý kiểm tra skill có trong danh sách.",
  },
  {
    questionId: "ch07-l06-q05", lessonId: L, conceptId: "plugin-list", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Từ terminal, lệnh nào liệt kê plugin đã cài kèm Version, Scope và Status?",
    options: [
      { id: "a", text: "claude plugin list", feedback: "Đúng." },
      { id: "b", text: "claude mcp list", feedback: "Lệnh này liệt kê MCP server." },
      { id: "c", text: "npm list -g", feedback: "Lệnh này liệt kê gói npm." },
    ],
    answer: "a",
    explanation: "Trong phiên, tab Installed của /plugin cho cùng thông tin.",
  },
  {
    questionId: "ch07-l06-q06", lessonId: L, conceptId: "mcp-list", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép trạng thái trong claude mcp list với bước tiếp theo.",
    pairs: [
      { id: "p1", left: "✔ Connected", right: "Thử một yêu cầu nhỏ, chỉ đọc" },
      { id: "p2", left: "! Needs authentication", right: "Vào /mcp để xác thực" },
      { id: "p3", left: "✘ Failed to connect", right: "Kiểm tra URL hoặc lệnh, biến môi trường, thời gian chờ" },
      { id: "p4", left: "⏸ Pending approval", right: "Mở claude trong dự án để duyệt server" },
    ],
    explanation: "Sau mỗi lần sửa, chạy lại claude mcp list.",
  },
  {
    questionId: "ch07-l06-q07", lessonId: L, conceptId: "status-pending", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Đồng đội vừa commit .mcp.json. Trên máy bạn, claude mcp list hiện server db với “⏸ Pending approval (run `claude` to approve)”. Làm gì?",
    options: [
      { id: "a", text: "Mở claude trong thư mục dự án và duyệt server khi được hỏi (sau khi xem server đó là gì)", feedback: "Đúng." },
      { id: "b", text: "Xoá .mcp.json", feedback: "Mất cấu hình chung của nhóm." },
      { id: "c", text: "Chờ vài phút, trạng thái sẽ tự đổi", feedback: "Trạng thái chờ bạn duyệt." },
    ],
    answer: "a",
    explanation: "Server từ .mcp.json cần được duyệt trong phiên tương tác vì lý do an toàn.",
  },
  {
    questionId: "ch07-l06-q08", lessonId: L, conceptId: "status-failed", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Server stdio logs báo “✘ Failed to connect”. Chạy tay lệnh npx -y log-mcp-server thì thấy server mất khá lâu mới khởi động xong. Thử gì?",
    options: [
      { id: "a", text: "Tăng thời gian chờ khởi động, ví dụ MCP_TIMEOUT=10000 claude", feedback: "Đúng — 10 giây." },
      { id: "b", text: "Đổi sang --transport sse", feedback: "SSE đã lỗi thời và không phải vấn đề ở đây." },
      { id: "c", text: "Xoá thư mục ~/.claude", feedback: "Mất toàn bộ cấu hình cá nhân." },
    ],
    answer: "a",
    explanation: "MCP_TIMEOUT đặt thời gian chờ khởi động MCP server (mili giây).",
  },
  {
    questionId: "ch07-l06-q09", lessonId: L, conceptId: "mcp-tool-names", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trong /mcp, công cụ search của server tickets có tên đầy đủ dạng nào?",
    options: [
      { id: "a", text: "mcp__tickets__search", feedback: "Đúng." },
      { id: "b", text: "/tickets:search", feedback: "Dạng /plugin:skill là của skill trong plugin." },
      { id: "c", text: "tickets.search()", feedback: "Không phải định dạng tên công cụ MCP." },
    ],
    answer: "a",
    explanation: "Tài liệu: tên đầy đủ có dạng mcp__<server>__<tool>.",
  },
  {
    questionId: "ch07-l06-q10", lessonId: L, conceptId: "plugin-validate", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn nghi một số SKILL.md trong dự án có frontmatter YAML bị lỗi. Lệnh nào giúp tìm chúng?",
    options: [
      { id: "a", text: "claude plugin validate .claude/skills", feedback: "Đúng." },
      { id: "b", text: "claude mcp list", feedback: "Lệnh này kiểm tra MCP server." },
      { id: "c", text: "git log", feedback: "Lệnh này xem lịch sử commit." },
    ],
    answer: "a",
    explanation: "Cũng có thể chạy claude --debug để thấy lỗi phân tích frontmatter.",
  },
  {
    questionId: "ch07-l06-q11", lessonId: L, conceptId: "missing-var", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Bạn chưa đặt biến TICKETS_TOKEN rồi chạy claude mcp list. Điều gì xảy ra với server tickets?",
    context: { label: ".mcp.json (trích)", content: "\"headers\": { \"Authorization\": \"Bearer ${TICKETS_TOKEN}\" }", lang: "json" },
    options: [
      { id: "a", text: "Cấu hình vẫn nạp, có cảnh báo thiếu biến cho server tickets, và chuỗi ${TICKETS_TOKEN} được gửi nguyên văn", feedback: "Đúng — nên xác thực sẽ thất bại." },
      { id: "b", text: "Claude Code từ chối khởi động", feedback: "Cấu hình vẫn nạp." },
      { id: "c", text: "Claude Code tự tạo token mới", feedback: "Không có cơ chế này." },
    ],
    answer: "a",
    explanation: "Đặt biến trong máy bạn rồi chạy lại claude mcp list.",
  },
  {
    questionId: "ch07-l06-q12", lessonId: L, conceptId: "smoke-test", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Vừa kết nối MCP tới cơ sở dữ liệu đơn hàng, trạng thái ✔ Connected. Việc đầu tiên nên giao là gì?",
    options: [
      { id: "a", text: "Một truy vấn chỉ đọc nhỏ có kết quả đối chiếu được, ví dụ đếm đơn ngày hôm qua và so với báo cáo", feedback: "Đúng." },
      { id: "b", text: "Cập nhật hàng loạt trạng thái đơn để tiết kiệm thời gian", feedback: "Thao tác ghi lớn khi chưa xác minh gì." },
      { id: "c", text: "Không cần thử vì đã Connected", feedback: "Connected không nói dữ liệu hay quyền đã đúng." },
    ],
    answer: "a",
    explanation: "Thử nhỏ, an toàn, kiểm chứng được — rồi mới giao việc thật.",
  },
  {
    questionId: "ch07-l06-q13", lessonId: L, conceptId: "skills-check", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Chọn các nhận định SAI khi kiểm tra skill và plugin.",
    segments: [
      { id: "s1", text: "Gõ / để xem skill mới có trong menu hay chưa.", isError: false },
      { id: "s2", text: "Frontmatter YAML bị lỗi thì /tên-skill cũng không chạy được.", isError: true, why: "Skill vẫn gọi được bằng /tên, nhưng Claude không khớp được description." },
      { id: "s3", text: "Plugin không tải được thì xem tab Errors trong /plugin.", isError: false },
      { id: "s4", text: "Gọi được bằng /tên nghĩa là Claude chắc chắn sẽ tự dùng skill khi liên quan.", isError: true, why: "Tự dùng phụ thuộc description; cần thử cả câu nói tự nhiên." },
    ],
    explanation: "Kiểm tra cả hai cách gọi: /tên và câu nói tự nhiên.",
  },
  {
    questionId: "ch07-l06-q14", lessonId: L, conceptId: "status-sources", learningObjective: "o4", thinkingSkill: "apply", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn thêm một quy tắc vào .claude/settings.local.json nhưng Claude Code dường như không áp dụng. Kiểm tra gì trước?",
    options: [
      { id: "a", text: "Chạy /status xem dòng Setting sources có file đó không; rồi claude doctor để xem mục bị từ chối", feedback: "Đúng." },
      { id: "b", text: "Cài lại Claude Code", feedback: "Chưa biết nguyên nhân." },
      { id: "c", text: "Chép quy tắc vào CLAUDE.md", feedback: "CLAUDE.md không phải file settings." },
    ],
    answer: "a",
    explanation: "Setting sources cho biết file nào đã nạp; file lỗi JSON sẽ được báo là Settings Error.",
  },
  {
    questionId: "ch07-l06-q15", lessonId: L, conceptId: "smoke-test", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết kế hoạch kiểm tra (4–5 bước) cho MCP server issue tracker vừa thêm, trước khi giao Claude việc tạo ticket thật.",
    source: "Server “tracker” (HTTP) vừa được thêm ở phạm vi project. Bạn chưa đăng nhập. Nhóm muốn Claude tạo ticket từ báo cáo lỗi QA.",
    rubric: [
      { id: "list", label: "Xem trạng thái", weight: 1, check: { kind: "anyKeyword", keywords: ["claude mcp list", "/mcp"] }, pass: "Có xem trạng thái.", fail: "Bắt đầu bằng claude mcp list hoặc /mcp." },
      { id: "auth", label: "Xác thực/duyệt", weight: 1, check: { kind: "anyKeyword", keywords: ["xác thực", "đăng nhập", "authenticate", "duyệt"] }, pass: "Có xác thực.", fail: "Xác thực (và duyệt server dự án) trong /mcp." },
      { id: "read", label: "Thử chỉ đọc", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ đọc", "không thay đổi", "read-only"] }, pass: "Có thử chỉ đọc.", fail: "Thử một yêu cầu chỉ đọc trước." },
      { id: "compare", label: "Đối chiếu nguồn", weight: 1, check: { kind: "anyKeyword", keywords: ["đối chiếu", "so với", "so sánh", "kiểm tra lại"] }, pass: "Có đối chiếu.", fail: "So kết quả với trang web của tracker." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "1. Chạy claude mcp list: tracker đang Pending approval hoặc Needs authentication.\n2. Mở claude trong dự án, duyệt server; vào /mcp để xác thực (đăng nhập trên trình duyệt).\n3. Thử chỉ đọc: “Dùng tracker liệt kê 3 ticket mới nhất kèm mã, không thay đổi gì.”\n4. Đối chiếu kết quả với trang web của tracker.\n5. Tạo thử một ticket ở dự án thử nghiệm, kiểm tra lại, rồi mới cho tạo ticket thật.",
    explanation: "Trạng thái → xác thực → đọc thử → đối chiếu → ghi thử ở nơi an toàn.",
  },
];
