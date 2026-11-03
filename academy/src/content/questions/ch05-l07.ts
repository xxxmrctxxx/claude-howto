import type { Question } from "@/lib/types/content";

const L = "ch05-l07";

/** 15 questions for "Giải thích file và thư mục" — 5 beginner, 6 intermediate, 4 advanced. */
export const questionsCh05L07: Question[] = [
  {
    questionId: "ch05-l07-q01", lessonId: L, conceptId: "readme", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Nhận một dự án lạ, file nào nên đọc đầu tiên để biết dự án làm gì?",
    options: [
      { id: "a", text: "README.md", feedback: "Đúng — giới thiệu dự án và cách chạy." },
      { id: "b", text: "Một file bất kỳ trong node_modules", feedback: "Đó là thư viện tải về, không mô tả dự án." },
      { id: "c", text: ".env", feedback: "Chứa bí mật, không phải giới thiệu." },
    ],
    answer: "a",
    explanation: "README là “bìa hồ sơ” của dự án.",
  },
  {
    questionId: "ch05-l07-q02", lessonId: L, conceptId: "src-tests", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "matching",
    prompt: "Ghép thư mục với nội dung thường gặp.",
    pairs: [
      { id: "p1", left: "src/", right: "Mã nguồn chính" },
      { id: "p2", left: "tests/", right: "Kiểm thử tự động" },
      { id: "p3", left: "data/", right: "Dữ liệu mẫu để chạy thử" },
      { id: "p4", left: "docs/", right: "Tài liệu chi tiết" },
    ],
    explanation: "Tên thư mục là quy ước phổ biến; README hoặc CLAUDE.md của dự án thường ghi rõ.",
  },
  {
    questionId: "ch05-l07-q03", lessonId: L, conceptId: "hidden-files", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền tuỳ chọn còn thiếu.",
    template: "Để thấy cả file ẩn như .gitignore và .env, dùng lệnh `ls [[b1]]`.",
    blanks: [{ id: "b1", accepted: ["-a", "-la", "-al"], width: 5 }],
    explanation: "-a (all) hiện cả file có tên bắt đầu bằng dấu chấm.",
  },
  {
    questionId: "ch05-l07-q04", lessonId: L, conceptId: "secrets", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "File .env thường chứa mật khẩu, khoá API và không nên commit lên git.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Đưa .env vào .gitignore; chia sẻ cấu hình mẫu bằng file không chứa giá trị thật (ví dụ .env.example).",
  },
  {
    questionId: "ch05-l07-q05", lessonId: L, conceptId: "generated", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Thư mục node_modules/ là gì?",
    options: [
      { id: "a", text: "Thư viện do trình quản lý gói tải về; không sửa tay, không commit", feedback: "Đúng." },
      { id: "b", text: "Mã nguồn chính bạn viết", feedback: "Mã nguồn thường ở src/." },
      { id: "c", text: "Nơi lưu mật khẩu", feedback: "Bí mật thường ở .env." },
    ],
    answer: "a",
    explanation: "Xoá node_modules rồi cài lại là tạo ra y hệt — nên không cần commit.",
  },
  {
    questionId: "ch05-l07-q06", lessonId: L, conceptId: "manifest", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Với package.json dưới đây, lệnh nào chạy kiểm thử của dự án?",
    context: { label: "package.json", content: '{\n  "name": "web-loi-qa",\n  "scripts": {\n    "test": "node test.js",\n    "start": "node server.js"\n  }\n}', lang: "json" },
    options: [
      { id: "a", text: "npm test", feedback: "Đúng — npm chạy lệnh trong scripts.test." },
      { id: "b", text: "npm start", feedback: "Lệnh này chạy server." },
      { id: "c", text: "node package.json", feedback: "package.json là file khai báo, không phải chương trình." },
    ],
    answer: "a",
    explanation: "Mục scripts đặt tên tắt cho lệnh; ghi lệnh test vào CLAUDE.md để Claude biết cách kiểm chứng.",
  },
  {
    questionId: "ch05-l07-q07", lessonId: L, conceptId: "gitignore", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "`git status` hiện `.env` trong danh sách file chưa theo dõi (untracked). Bạn nên làm gì?",
    options: [
      { id: "a", text: "Thêm .env vào .gitignore và không commit nó", feedback: "Đúng." },
      { id: "b", text: "git add . rồi commit tất cả", feedback: "Sẽ đưa bí mật lên git." },
      { id: "c", text: "Đổi tên thành env.txt rồi commit", feedback: "Đổi tên không làm nó hết bí mật." },
    ],
    answer: "a",
    explanation: "Một khi bí mật đã lên lịch sử git, xoá file sau đó không đủ — phải đổi khoá.",
  },
  {
    questionId: "ch05-l07-q08", lessonId: L, conceptId: "claude-md-files", learningObjective: "o3", thinkingSkill: "remember", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép file hướng dẫn với phạm vi của nó.",
    pairs: [
      { id: "p1", left: "./CLAUDE.md", right: "Hướng dẫn chung của dự án, commit cho cả nhóm" },
      { id: "p2", left: "./CLAUDE.local.md", right: "Ghi chú cá nhân cho dự án này, đưa vào .gitignore" },
      { id: "p3", left: "~/.claude/CLAUDE.md", right: "Sở thích cá nhân áp dụng cho mọi dự án" },
    ],
    explanation: "Theo trang “How Claude remembers your project”.",
  },
  {
    questionId: "ch05-l07-q09", lessonId: L, conceptId: "claude-dir", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "File `.claude/settings.json` trong dự án dùng để làm gì?",
    options: [
      { id: "a", text: "Cấu hình Claude Code cho dự án, ví dụ cho phép sẵn lệnh tin cậy như npm test", feedback: "Đúng." },
      { id: "b", text: "Lưu mật khẩu đăng nhập claude.ai", feedback: "Thông tin đăng nhập lưu ở Keychain hoặc .credentials.json." },
      { id: "c", text: "Chứa mã nguồn ứng dụng", feedback: "Mã nguồn ở src/." },
    ],
    answer: "a",
    explanation: "Cho phép sẵn lệnh tin cậy giúp Claude không phải hỏi mỗi lần.",
  },
  {
    questionId: "ch05-l07-q10", lessonId: L, conceptId: "file-mention", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trong Claude Code, cách nhanh để chỉ đúng file bạn muốn hỏi là gì?",
    options: [
      { id: "a", text: "Gõ @ rồi chọn đường dẫn file trong danh sách gợi ý", feedback: "Đúng." },
      { id: "b", text: "Sao chép toàn bộ nội dung file vào tin nhắn", feedback: "Không cần — Claude tự đọc file được." },
      { id: "c", text: "Đổi tên file thành CLAUDE.md", feedback: "Sẽ làm hỏng dự án." },
    ],
    answer: "a",
    explanation: "@ mở gợi ý đường dẫn file (file path mention).",
  },
  {
    questionId: "ch05-l07-q11", lessonId: L, conceptId: "generated", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Chọn các lời khuyên SAI trong danh sách sau.",
    segments: [
      { id: "s1", text: "Sửa trực tiếp file trong node_modules để vá lỗi thư viện.", isError: true, why: "Lần cài lại sẽ mất bản vá; cần cập nhật thư viện hoặc cấu hình đúng cách." },
      { id: "s2", text: "Không sửa tay thư mục .git.", isError: false },
      { id: "s3", text: "Xoá .gitignore để git theo dõi mọi thứ cho chắc.", isError: true, why: "node_modules và .env sẽ bị đưa lên git." },
      { id: "s4", text: "Đọc README trước khi nhờ Claude sửa.", isError: false },
    ],
    explanation: "File do công cụ tạo được tạo lại khi cần; sửa tay hoặc commit chúng chỉ gây rối.",
  },
  {
    questionId: "ch05-l07-q12", lessonId: L, conceptId: "ask-explain", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn cần hiểu file cấu hình vite.config.ts để báo cáo trưởng nhóm. Yêu cầu nào tốt nhất?",
    options: [
      { id: "a", text: "“Giải thích @vite.config.ts bằng ngôn ngữ phổ thông: từng phần làm gì, phần nào ảnh hưởng bản build chính thức. Dạng bảng, không sửa file.”", feedback: "Đúng — đúng file, đúng mục đích, có định dạng và ràng buộc." },
      { id: "b", text: "“Giải thích hết dự án.”", feedback: "Quá rộng, câu trả lời khó dùng." },
      { id: "c", text: "“Sửa file cấu hình cho tốt hơn.”", feedback: "Bạn cần hiểu, không cần sửa." },
    ],
    answer: "a",
    explanation: "Nêu file, người đọc, nội dung cần, định dạng và ràng buộc — giống cấu trúc prompt ở Chương 3.",
  },
  {
    questionId: "ch05-l07-q13", lessonId: L, conceptId: "claude-dir", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Dự án bạn vừa tải về có file .mcp.json do người khác commit. Hiểu đúng là gì?",
    options: [
      { id: "a", text: "Nó khai báo kết nối MCP tới dịch vụ bên ngoài cho dự án; Claude Code hỏi duyệt riêng trước khi dùng, bạn nên xem nội dung trước", feedback: "Đúng." },
      { id: "b", text: "Là file rác, xoá ngay", feedback: "Có thể là cấu hình có ích của nhóm — hãy đọc trước." },
      { id: "c", text: "Claude Code tự chạy mọi thứ trong đó mà không hỏi", feedback: "Máy chủ trong .mcp.json có bước duyệt riêng." },
    ],
    answer: "a",
    explanation: "Trang Security: máy chủ trong .mcp.json của dự án có hộp thoại duyệt riêng; chỉ dùng máy chủ từ nguồn bạn tin.",
  },
  {
    questionId: "ch05-l07-q14", lessonId: L, conceptId: "hidden-files", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "true-false",
    statement: "Trên macOS/Linux, file có tên bắt đầu bằng dấu chấm (như .gitignore) không hiện khi chạy `ls` thông thường.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Đó là quy ước file ẩn; dùng ls -a để xem.",
  },
  {
    questionId: "ch05-l07-q15", lessonId: L, conceptId: "claude-md-files", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết mục “Cấu trúc và quy tắc file” (5–8 dòng) để thêm vào CLAUDE.md của dự án mô tả bên dưới.",
    source: "Dự án tổng hợp lỗi QA: src/ (mã), tests/ (kiểm thử, chạy bằng npm test), data/ (CSV mẫu từ 3 xưởng), node_modules/, .env (chuỗi kết nối database).",
    rubric: [
      { id: "dirs", label: "Mô tả các thư mục chính", weight: 1, check: { kind: "allGroups", groups: [["src"], ["tests"], ["data"]] }, pass: "Có src, tests, data.", fail: "Mô tả src, tests, data." },
      { id: "test", label: "Lệnh kiểm thử", weight: 1, check: { kind: "regex", pattern: "npm test" }, pass: "Có npm test.", fail: "Ghi lệnh npm test." },
      { id: "rules", label: "Quy tắc không sửa / không commit", weight: 1, check: { kind: "regex", pattern: "khong (sua|commit|doc|dua)" }, pass: "Có quy tắc.", fail: "Nêu quy tắc với node_modules và .env." },
      { id: "secret", label: "Bảo vệ .env", weight: 1, check: { kind: "regex", pattern: "\\.env" }, pass: "Có nhắc .env.", fail: "Nhắc .env chứa bí mật." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "## Cấu trúc và quy tắc file\n- src/: mã nguồn tổng hợp lỗi.\n- tests/: kiểm thử; chạy npm test sau mỗi thay đổi.\n- data/: CSV mẫu của 3 xưởng, chỉ đọc, không sửa dữ liệu gốc.\n- node_modules/: thư viện tải về, không sửa tay.\n- .env: chứa chuỗi kết nối database, không đọc ra, không commit, không in vào log.",
    explanation: "CLAUDE.md ngắn gọn, cụ thể giúp Claude làm đúng ngay từ đầu mỗi phiên.",
  },
];
