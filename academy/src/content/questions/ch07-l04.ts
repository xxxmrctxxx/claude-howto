import type { Question } from "@/lib/types/content";

const L = "ch07-l04";
const SK = "~/.claude/skills/tom-tat/SKILL.md";

/** 15 questions for "Cách cài đặt" (chương 7) — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh07L04: Question[] = [
  {
    questionId: "ch07-l04-q01", lessonId: L, conceptId: "skill-folder", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bạn muốn cài skill dự án tên bao-cao-loi để cả nhóm dùng qua git. File SKILL.md đặt ở đâu?",
    options: [
      { id: "a", text: ".claude/skills/bao-cao-loi/SKILL.md trong repo", feedback: "Đúng." },
      { id: "b", text: ".claude/bao-cao-loi.json", feedback: "Skill là thư mục chứa SKILL.md." },
      { id: "c", text: "Trong thư mục node_modules", feedback: "Không phải nơi Claude Code tìm skill." },
    ],
    answer: "a",
    explanation: "Commit thư mục .claude/skills/ để đồng đội có cùng skill.",
  },
  {
    questionId: "ch07-l04-q02", lessonId: L, conceptId: "skill-live-reload", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Sửa SKILL.md của một skill nằm trong .claude/skills/ có sẵn từ đầu phiên thì Claude Code nhận thay đổi ngay, không cần khởi động lại.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Thêm, sửa, xoá skill trong các thư mục skills đã có đều được nhận ngay trong phiên.",
  },
  {
    questionId: "ch07-l04-q03", lessonId: L, conceptId: "mcp-add-http", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Lệnh nào thêm MCP server từ xa tên notion tại https://mcp.notion.com/mcp?",
    options: [
      { id: "a", text: "claude mcp add --transport http notion https://mcp.notion.com/mcp", feedback: "Đúng." },
      { id: "b", text: "/plugin install notion", feedback: "Đó là cú pháp cài plugin, thiếu marketplace." },
      { id: "c", text: "npm install notion", feedback: "Lệnh này cài gói npm, không thêm MCP server." },
    ],
    answer: "a",
    explanation: "Ví dụ HTTP trong tài liệu MCP của Claude Code.",
  },
  {
    questionId: "ch07-l04-q04", lessonId: L, conceptId: "plugin-install", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền tên marketplace chính thức của Anthropic.",
    template: "/plugin install commit-commands@[[b1]]",
    blanks: [{ id: "b1", accepted: ["claude-plugins-official"], width: 24 }],
    explanation: "Marketplace này được tự thêm ở phiên tương tác đầu tiên.",
  },
  {
    questionId: "ch07-l04-q05", lessonId: L, conceptId: "plugin-review", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Plugin có thể chạy hook và MCP server, vì vậy nên đọc bảng chi tiết của plugin trước khi cài.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Bảng chi tiết liệt kê lệnh, agent, skill, hook, MCP server mà plugin sẽ thêm.",
  },
  {
    questionId: "ch07-l04-q06", lessonId: L, conceptId: "skill-folder", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "terminal-task",
    prompt: "Trong terminal mô phỏng: tạo skill cá nhân tom-tat tại ~/.claude/skills/tom-tat/SKILL.md, có frontmatter mở và đóng bằng --- và một dòng description.",
    preset: "home-basic",
    checks: [
      { kind: "dir", path: "~/.claude/skills/tom-tat", label: "Có thư mục skill cá nhân" },
      { kind: "file", path: SK, contains: "description:", label: "SKILL.md có description" },
      { kind: "file", path: SK, contains: "\n---\n", label: "Frontmatter đã đóng" },
    ],
    referenceCommands: [
      "mkdir -p ~/.claude/skills/tom-tat",
      `echo "---" > ${SK}`,
      `echo "description: Tom tat thay doi. Dung khi nguoi dung hoi da thay doi gi." >> ${SK}`,
      `echo "---" >> ${SK}`,
    ],
    hint: "mkdir -p, rồi echo \"---\" > file, echo \"description: …\" >> file, echo \"---\" >> file.",
    explanation: "Skill cá nhân nằm trong ~/.claude/skills/ nên dùng được ở mọi dự án.",
  },
  {
    questionId: "ch07-l04-q07", lessonId: L, conceptId: "reload-skills", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn mở Claude Code trong một repo chưa có thư mục .claude/skills/. Giữa phiên bạn tạo .claude/skills/tom-tat/SKILL.md, nhưng gõ /tom-tat không thấy. Làm gì?",
    options: [
      { id: "a", text: "Chạy /reload-skills", feedback: "Đúng — thư mục skills cấp cao vừa được tạo giữa phiên." },
      { id: "b", text: "Cài lại Claude Code", feedback: "Không cần." },
      { id: "c", text: "Đổi tên file thành skill.txt", feedback: "Tên file phải là SKILL.md." },
    ],
    answer: "a",
    explanation: "Tài liệu: tạo thư mục skills cấp cao mới trong phiên thì chạy /reload-skills.",
  },
  {
    questionId: "ch07-l04-q08", lessonId: L, conceptId: "double-dash", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trong lệnh claude mcp add cho server stdio, dấu -- có tác dụng gì?",
    options: [
      { id: "a", text: "Ngăn tuỳ chọn của Claude với lệnh chạy server; mọi thứ sau -- được chuyển nguyên cho server", feedback: "Đúng." },
      { id: "b", text: "Đánh dấu phần còn lại là chú thích", feedback: "Không phải chú thích." },
      { id: "c", text: "Bật chế độ gỡ lỗi", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Ví dụ: … --transport stdio myserver -- python server.py --port 8080.",
  },
  {
    questionId: "ch07-l04-q09", lessonId: L, conceptId: "env-flag", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Lệnh dưới đây bị CLI từ chối. Vì sao?",
    context: { label: "Terminal", content: "claude mcp add --env API_KEY=abc myserver -- python server.py", lang: "bash" },
    options: [
      { id: "a", text: "Tên myserver đứng ngay sau --env nên bị hiểu là một cặp KEY=value nữa", feedback: "Đúng." },
      { id: "b", text: "Không được dùng python cho MCP server", feedback: "Server stdio chạy bằng lệnh bất kỳ." },
      { id: "c", text: "Thiếu dấu -- trước python", feedback: "Lệnh đã có --." },
    ],
    answer: "a",
    explanation: "--env nhận nhiều cặp; đặt một tuỳ chọn khác (ví dụ --transport stdio) giữa --env và tên server.",
  },
  {
    questionId: "ch07-l04-q10", lessonId: L, conceptId: "plugin-scope", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép phạm vi cài plugin với người được dùng nó.",
    pairs: [
      { id: "p1", left: "User", right: "Bạn, ở mọi dự án trên máy" },
      { id: "p2", left: "Project", right: "Mọi người làm việc trong repo (ghi vào .claude/settings.json)" },
      { id: "p3", left: "Local", right: "Chỉ bạn, chỉ trong repo này" },
      { id: "p4", left: "Managed", right: "Do tổ chức cài; bạn không tự bật, tắt hay gỡ" },
    ],
    explanation: "Theo mục Choose an install scope và Manage installed plugins.",
  },
  {
    questionId: "ch07-l04-q11", lessonId: L, conceptId: "marketplace-add", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Đồng nghiệp gửi lệnh /plugin install deploy-helper@acme-tools, nhưng máy bạn chưa biết marketplace acme-tools. Bước đầu tiên?",
    options: [
      { id: "a", text: "Thêm marketplace bằng /plugin marketplace add với nguồn đồng nghiệp cung cấp (ví dụ acme/claude-plugins)", feedback: "Đúng." },
      { id: "b", text: "Đổi @acme-tools thành @claude-plugins-official", feedback: "Plugin đó không nằm trong marketplace chính thức." },
      { id: "c", text: "Tải file zip về và giải nén vào ~/.claude", feedback: "Không phải cách cài được hướng dẫn." },
    ],
    answer: "a",
    explanation: "Phải thêm marketplace một lần trước khi cài plugin từ đó.",
  },
  {
    questionId: "ch07-l04-q12", lessonId: L, conceptId: "plugin-install", learningObjective: "o3", thinkingSkill: "apply", difficulty: "advanced",
    questionType: "ordering",
    prompt: "Sắp xếp các bước cài một plugin trong phiên Claude Code.",
    items: [
      { id: "a", text: "Gõ /plugin install tên@marketplace" },
      { id: "b", text: "Đọc bảng chi tiết: plugin sẽ thêm những gì" },
      { id: "c", text: "Chọn phạm vi user, project hoặc local" },
      { id: "d", text: "Đọc thông báo cuối, chạy /reload-plugins nếu được yêu cầu" },
      { id: "e", text: "Gõ / để thấy lệnh dạng /plugin:skill" },
    ],
    explanation: "Đọc trước khi cài, đọc thông báo sau khi cài, rồi kiểm tra.",
  },
  {
    questionId: "ch07-l04-q13", lessonId: L, conceptId: "header-flag", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "MCP server HTTP của nhóm cần token cá nhân. Cách đưa token nào hợp lý nhất?",
    options: [
      { id: "a", text: "Thêm bằng --header \"Authorization: Bearer …\" ở phạm vi chỉ của bạn, không đưa token vào file sẽ commit", feedback: "Đúng." },
      { id: "b", text: "Dán token vào CLAUDE.md để Claude nhớ", feedback: "Token lộ ở mọi phiên và có thể bị commit." },
      { id: "c", text: "Đặt token làm tên server", feedback: "Tên hiện trong danh sách, dễ lộ." },
    ],
    answer: "a",
    explanation: "Token là bí mật cá nhân; cấu hình chung của nhóm nên dùng biến môi trường (bài 7.5).",
  },
  {
    questionId: "ch07-l04-q14", lessonId: L, conceptId: "mcp-add-stdio", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Chọn các lệnh SAI.",
    segments: [
      { id: "s1", text: "claude mcp add --transport http notion https://mcp.notion.com/mcp", isError: false },
      { id: "s2", text: "claude mcp add --env KEY=1 db --transport stdio -- npx -y db-server", isError: true, why: "Tên db đứng ngay sau --env nên bị hiểu là một cặp KEY=value." },
      { id: "s3", text: "claude mcp add --transport stdio files npx -y files-server", isError: true, why: "Thiếu -- trước lệnh chạy server." },
      { id: "s4", text: "claude mcp add --env KEY=1 --transport stdio db -- npx -y db-server", isError: false },
    ],
    explanation: "Thứ tự: tuỳ chọn của Claude → tên server → -- → lệnh chạy server.",
  },
  {
    questionId: "ch07-l04-q15", lessonId: L, conceptId: "plugin-review", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết checklist (4–6 dòng) cho nhóm trước và sau khi cài một plugin hoặc MCP server mới.",
    source: "Nhóm 5 người, repo dùng chung. Một thành viên muốn cài plugin “db-tools” từ marketplace của bên thứ ba; plugin có hook và một MCP server.",
    rubric: [
      { id: "read", label: "Đọc bảng chi tiết / những gì sẽ cài", weight: 1, check: { kind: "anyKeyword", keywords: ["bảng chi tiết", "will install", "sẽ cài", "đọc trước"] }, pass: "Có bước đọc trước.", fail: "Đọc bảng chi tiết: hook, MCP server, skill sẽ được thêm." },
      { id: "trust", label: "Kiểm tra nguồn", weight: 1, check: { kind: "anyKeyword", keywords: ["tin cậy", "nguồn", "tác giả", "bên thứ ba"] }, pass: "Có kiểm tra nguồn.", fail: "Kiểm tra nguồn và tác giả của marketplace." },
      { id: "scope", label: "Chọn phạm vi", weight: 1, check: { kind: "anyKeyword", keywords: ["phạm vi", "scope", "local", "project"] }, pass: "Có phạm vi.", fail: "Thử ở phạm vi local trước khi cài project cho cả nhóm." },
      { id: "verify", label: "Kiểm tra sau khi cài", weight: 1, check: { kind: "anyKeyword", keywords: ["claude mcp list", "claude plugin list", "/mcp", "reload-plugins", "gõ /"] }, pass: "Có kiểm tra sau cài.", fail: "Sau khi cài: claude plugin list, /mcp hoặc gõ / để kiểm tra." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Trước khi cài:\n- Kiểm tra nguồn: ai phát hành marketplace bên thứ ba, có đáng tin cậy không.\n- Đọc bảng chi tiết (Will install): hook nào, MCP server nào, chúng đọc/ghi gì.\n- Thử ở phạm vi local trên máy một người trước, chưa cài project.\nSau khi cài:\n- Đọc thông báo cuối, chạy /reload-plugins nếu được yêu cầu.\n- Kiểm tra bằng claude plugin list và /mcp; gõ / để thấy lệnh /db-tools:….\n- Ổn định rồi mới cài phạm vi project cho cả nhóm.",
    explanation: "Đọc trước, thử phạm vi hẹp, kiểm tra sau — rồi mới mở rộng cho cả nhóm.",
  },
];
