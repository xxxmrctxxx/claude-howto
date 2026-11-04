import type { Question } from "@/lib/types/content";

const L = "ch07-l08";

/** 15 questions for "Ví dụ sử dụng thực tế" (chương 7) — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh07L08: Question[] = [
  {
    questionId: "ch07-l08-q01", lessonId: L, conceptId: "case-analysis", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trong ví dụ nhóm QA, vì sao quy ước “ngày ghi dạng dd/mm/yyyy” được đặt trong CLAUDE.md chứ không trong skill /bao-cao-loi?",
    options: [
      { id: "a", text: "Vì quy ước này cần ở mọi phiên, không chỉ khi viết báo cáo", feedback: "Đúng." },
      { id: "b", text: "Vì skill không chứa được văn bản tiếng Việt", feedback: "Skill chứa được mọi văn bản." },
      { id: "c", text: "Vì CLAUDE.md không tốn context", feedback: "CLAUDE.md có mặt ở mọi request." },
    ],
    answer: "a",
    explanation: "CLAUDE.md cho điều Claude luôn cần biết; skill cho quy trình dùng khi cần.",
  },
  {
    questionId: "ch07-l08-q02", lessonId: L, conceptId: "skill-supporting-files", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Thư mục của skill có thể chứa file mẫu như mau-bao-cao.md; SKILL.md liên kết tới file đó để Claude biết khi nào cần đọc.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "File hỗ trợ giúp giữ SKILL.md ngắn; Claude chỉ đọc chúng khi cần.",
  },
  {
    questionId: "ch07-l08-q03", lessonId: L, conceptId: "hook-posttooluse", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Muốn chạy Prettier ngay sau khi Claude sửa một file, dùng sự kiện hook nào?",
    options: [
      { id: "a", text: "PostToolUse", feedback: "Đúng — chạy sau khi công cụ được dùng." },
      { id: "b", text: "PreToolUse", feedback: "PreToolUse chạy trước, thường để chặn." },
      { id: "c", text: "SessionStart", feedback: "Chạy khi bắt đầu phiên." },
    ],
    answer: "a",
    explanation: "Ví dụ trong tài liệu hooks: PostToolUse + matcher Edit|Write chạy Prettier.",
  },
  {
    questionId: "ch07-l08-q04", lessonId: L, conceptId: "safety-review", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Giai đoạn đầu kết nối tracker qua MCP, để Claude soạn bản nháp ticket và người duyệt trước khi tạo là cách giảm rủi ro hợp lý.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Tạo ticket là hành động thật; nội dung ngoài có thể chứa prompt injection.",
  },
  {
    questionId: "ch07-l08-q05", lessonId: L, conceptId: "plugin-share", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Skill bao-cao-loi được đóng gói trong plugin qa-tools. Sau khi cài plugin, gọi skill bằng lệnh nào?",
    options: [
      { id: "a", text: "/qa-tools:bao-cao-loi", feedback: "Đúng — skill của plugin có tiền tố tên plugin." },
      { id: "b", text: "/bao-cao-loi@qa-tools", feedback: "Dạng @ dùng khi cài plugin từ marketplace." },
      { id: "c", text: "qa-tools bao-cao-loi", feedback: "Thiếu dấu / và dấu :." },
    ],
    answer: "a",
    explanation: "Tiền tố giúp nhiều plugin cùng tồn tại không trùng tên.",
  },
  {
    questionId: "ch07-l08-q06", lessonId: L, conceptId: "dynamic-injection", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "SKILL.md có đoạn dưới đây. Khi skill được gọi, Claude nhìn thấy gì ở chỗ dòng !`…`?",
    context: { label: "SKILL.md (trích)", content: "## Commit gần đây\n!`git log --oneline -5`", lang: "markdown" },
    options: [
      { id: "a", text: "Kết quả của lệnh git log --oneline -5 (5 commit gần nhất), vì lệnh chạy trước khi nội dung được gửi", feedback: "Đúng." },
      { id: "b", text: "Nguyên văn chuỗi !`git log --oneline -5`", feedback: "Lệnh được chạy và thay bằng kết quả." },
      { id: "c", text: "Claude được yêu cầu tự chạy lệnh sau khi đọc", feedback: "Lệnh chạy trước, không đợi Claude." },
    ],
    answer: "a",
    explanation: "Ví dụ summarize-changes trong tài liệu dùng !`git diff HEAD` theo cách này.",
  },
  {
    questionId: "ch07-l08-q07", lessonId: L, conceptId: "skill-dir-var", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Vì sao SKILL.md gọi script bằng python3 ${CLAUDE_SKILL_DIR}/scripts/visualize.py thay vì một đường dẫn cố định?",
    options: [
      { id: "a", text: "Biến trỏ đúng thư mục của skill dù skill nằm ở cấp cá nhân, dự án hay plugin", feedback: "Đúng." },
      { id: "b", text: "Để script chạy nhanh hơn", feedback: "Không liên quan đến tốc độ." },
      { id: "c", text: "Vì Python bắt buộc dùng biến môi trường", feedback: "Không phải lý do." },
    ],
    answer: "a",
    explanation: "Cùng một skill có thể được cài ở nhiều nơi khác nhau.",
  },
  {
    questionId: "ch07-l08-q08", lessonId: L, conceptId: "case-analysis", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Phòng kế toán có bốn việc. Ghép mỗi việc với tính năng phù hợp.",
    pairs: [
      { id: "p1", left: "Luôn ghi số tiền có dấu chấm phân cách hàng nghìn", right: "CLAUDE.md" },
      { id: "p2", left: "Quy trình đối soát cuối tháng 9 bước", right: "Skill /doi-soat-thang" },
      { id: "p3", left: "Lấy thông tin khách từ CRM có server chính thức", right: "MCP server" },
      { id: "p4", left: "Kiểm tra định dạng mỗi file CSV vừa được sửa", right: "Hook PostToolUse" },
    ],
    explanation: "Mỗi việc một tính năng — theo mẫu kết hợp trong tài liệu.",
  },
  {
    questionId: "ch07-l08-q09", lessonId: L, conceptId: "hook-matcher", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Hook định dạng chỉ nên chạy khi Claude sửa hoặc tạo file, không chạy khi Claude đọc file hay chạy lệnh terminal. Đặt matcher thế nào?",
    options: [
      { id: "a", text: "\"matcher\": \"Edit|Write\"", feedback: "Đúng." },
      { id: "b", text: "\"matcher\": \"Bash\"", feedback: "Khớp lệnh terminal, ngược yêu cầu." },
      { id: "c", text: "\"matcher\": \"Read\"", feedback: "Khớp việc đọc file." },
    ],
    answer: "a",
    explanation: "Matcher chọn công cụ mà hook áp dụng.",
  },
  {
    questionId: "ch07-l08-q10", lessonId: L, conceptId: "skill-plus-subagent", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn muốn một lệnh /audit khởi động ba hướng kiểm tra chạy song song (bảo mật, hiệu năng, trình bày), mỗi hướng làm việc trong context riêng. Mẫu kết hợp nào phù hợp?",
    options: [
      { id: "a", text: "Skill + Subagent: skill /audit giao việc cho các subagent", feedback: "Đúng." },
      { id: "b", text: "Hook + MCP", feedback: "Mẫu này dùng cho hành động ngoài theo sự kiện." },
      { id: "c", text: "Chỉ CLAUDE.md", feedback: "CLAUDE.md không khởi động việc song song." },
    ],
    answer: "a",
    explanation: "Đúng ví dụ /audit trong bảng Combine features.",
  },
  {
    questionId: "ch07-l08-q11", lessonId: L, conceptId: "skill-with-script", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trong ví dụ codebase-visualizer, phần việc được chia thế nào giữa script đi kèm và Claude?",
    options: [
      { id: "a", text: "Script quét thư mục và tạo file HTML; Claude điều phối: chạy script và báo kết quả", feedback: "Đúng." },
      { id: "b", text: "Claude tự viết lại toàn bộ HTML mỗi lần", feedback: "Script đã làm phần đó." },
      { id: "c", text: "Script thay Claude trả lời mọi câu hỏi", feedback: "Script chỉ làm một việc cụ thể." },
    ],
    answer: "a",
    explanation: "Tài liệu: The bundled script does the work while Claude handles orchestration.",
  },
  {
    questionId: "ch07-l08-q12", lessonId: L, conceptId: "rollout-plan", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Nhóm 6 người muốn áp dụng bộ cấu hình mới (skill, MCP, hook). Cách triển khai hợp lý nhất?",
    options: [
      { id: "a", text: "Một người thử ở phạm vi cá nhân/local một tuần, sửa, rồi commit phần ổn định cho cả nhóm; đóng gói plugin khi có repo thứ hai", feedback: "Đúng." },
      { id: "b", text: "Commit tất cả ngay hôm nay cho cả nhóm cùng thử", feedback: "Lỗi ảnh hưởng cả 6 người cùng lúc." },
      { id: "c", text: "Mỗi người tự cấu hình theo ý mình", feedback: "Mất tính thống nhất, khó hỗ trợ nhau." },
    ],
    answer: "a",
    explanation: "Thử hẹp → đo → chia sẻ → đóng gói.",
  },
  {
    questionId: "ch07-l08-q13", lessonId: L, conceptId: "safety-review", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Kế hoạch dựng cấu hình dưới đây có những điểm SAI nào về an toàn?",
    segments: [
      { id: "s1", text: "Ghi token tracker thẳng vào .mcp.json cho tiện, rồi commit.", isError: true, why: "Bí mật lộ trong git; dùng ${TRACKER_TOKEN}." },
      { id: "s2", text: "Skill /gui-bao-cao gửi email cho khách có disable-model-invocation: true.", isError: false },
      { id: "s3", text: "Cho Claude tự động trả lời mọi email khách đọc qua MCP, không cần ai duyệt.", isError: true, why: "Nội dung email có thể chứa prompt injection; hành động thật cần người duyệt." },
      { id: "s4", text: "Hook format chạy sau Edit|Write để code luôn đúng định dạng.", isError: false },
    ],
    explanation: "Không bí mật trong git; hành động có tác dụng phụ cần khoá hoặc người duyệt.",
  },
  {
    questionId: "ch07-l08-q14", lessonId: L, conceptId: "skill-supporting-files", learningObjective: "o2", thinkingSkill: "apply", difficulty: "advanced",
    questionType: "ordering",
    prompt: "Sắp xếp các bước dựng skill /bao-cao-loi có file mẫu đi kèm.",
    items: [
      { id: "a", text: "Tạo thư mục .claude/skills/bao-cao-loi/" },
      { id: "b", text: "Viết file mẫu mau-bao-cao.md với 4 mục của nhóm" },
      { id: "c", text: "Viết SKILL.md: description rõ ràng, liên kết tới mau-bao-cao.md" },
      { id: "d", text: "Gọi thử /bao-cao-loi" },
      { id: "e", text: "Thử câu nói tự nhiên “ghi lại lỗi …” và chỉnh description nếu cần" },
    ],
    explanation: "Thư mục → nội dung → khai báo → thử gọi tay → thử tự kích hoạt.",
  },
  {
    questionId: "ch07-l08-q15", lessonId: L, conceptId: "case-analysis", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Thiết kế bộ cấu hình Claude Code cho tình huống dưới đây: mỗi nhu cầu một dòng, nêu tính năng và lý do ngắn.",
    source: "Nhóm kho vận: (1) mã kho luôn viết hoa, dạng KHO-01; (2) mỗi sáng lập báo cáo tồn kho theo mẫu 6 mục; (3) số liệu tồn kho nằm trong hệ thống quản lý kho có MCP server chính thức; (4) mọi file JSON Claude sửa phải được kiểm tra cú pháp ngay; (5) kho chi nhánh muốn dùng cùng bộ cấu hình.",
    rubric: [
      { id: "core", label: "Có CLAUDE.md, skill, MCP, hook", weight: 2, check: { kind: "allGroups", groups: [["claude.md"], ["skill"], ["mcp"], ["hook"]] }, pass: "Đủ bốn tính năng chính.", fail: "Cần CLAUDE.md (1), skill (2), MCP (3), hook (4)." },
      { id: "plugin", label: "Plugin cho chi nhánh", weight: 1, check: { kind: "anyKeyword", keywords: ["plugin"] }, pass: "Có plugin.", fail: "(5) dùng lại ở nơi khác → plugin." },
      { id: "why", label: "Có lý do", weight: 1, check: { kind: "minMatches", pattern: "(vi |de |do |moi phien|moi lan|khi can)", value: 3 }, pass: "Có lý do.", fail: "Mỗi dòng thêm lý do ngắn (vì …)." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "(1) CLAUDE.md — vì quy ước mã kho cần ở mọi phiên.\n(2) Skill /bao-cao-ton-kho kèm file mẫu 6 mục — vì là quy trình chỉ dùng khi cần.\n(3) MCP server chính thức của hệ thống kho (HTTP, token qua biến môi trường) — vì dữ liệu nằm ngoài repo.\n(4) Hook PostToolUse matcher Edit|Write kiểm tra cú pháp JSON — vì phải chạy mỗi lần, không phụ thuộc lời dặn.\n(5) Đóng gói skill, hook, cấu hình MCP thành plugin — để kho chi nhánh cài một lần.",
    explanation: "Bài tổng hợp chương: mỗi nhu cầu một tính năng, có lý do, an toàn với bí mật.",
  },
];
