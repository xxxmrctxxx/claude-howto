import type { Question } from "@/lib/types/content";

const L = "ch11-l05";

/** 15 questions for "Tự động kiểm thử" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh11L05: Question[] = [
  {
    questionId: "ch11-l05-q01", lessonId: L, conceptId: "claude-p-ci", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền cờ để chạy Claude Code không tương tác.",
    template: "Để chạy Claude Code trong script và in kết quả rồi thoát, dùng: claude [[b1]] \"câu lệnh\".",
    blanks: [{ id: "b1", accepted: ["-p", "--print"], width: 8 }],
    explanation: "-p và --print là một.",
  },
  {
    questionId: "ch11-l05-q02", lessonId: L, conceptId: "exit-code", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Script CI biết lần chạy claude -p thất bại bằng cách nào?",
    options: [
      { id: "a", text: "Mã thoát khác 0", feedback: "Đúng." },
      { id: "b", text: "Màn hình đổi màu", feedback: "CI không có màn hình để nhìn." },
      { id: "c", text: "Không có cách nào", feedback: "Tài liệu nêu rõ mã thoát." },
    ],
    answer: "a",
    explanation: "0 là thành công; khác 0 là thất bại.",
  },
  {
    questionId: "ch11-l05-q03", lessonId: L, conceptId: "ci-secrets", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Có thể dán API key thẳng vào file workflow .yml miễn là repo để riêng tư.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Tài liệu: không bao giờ commit key; lưu trong GitHub Secrets.",
  },
  {
    questionId: "ch11-l05-q04", lessonId: L, conceptId: "tests-gate", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trong pipeline PR, cái gì nên là điều kiện bắt buộc để merge?",
    options: [
      { id: "a", text: "Bộ test tự động xanh (và người review đồng ý)", feedback: "Đúng." },
      { id: "b", text: "Claude nói “trông ổn”", feedback: "Nhận xét của Claude là tham khảo." },
      { id: "c", text: "Không cần gì", feedback: "Mất kiểm soát chất lượng." },
    ],
    answer: "a",
    explanation: "Test cho kết quả xác định; Claude bổ sung góc nhìn.",
  },
  {
    questionId: "ch11-l05-q05", lessonId: L, conceptId: "gha-action", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trong Claude Code, lệnh nào cài nhanh Claude GitHub App và workflow cho repo?",
    options: [
      { id: "a", text: "/install-github-app", feedback: "Đúng." },
      { id: "b", text: "/github-login", feedback: "Không có lệnh này." },
      { id: "c", text: "claude --github", feedback: "Không có cờ này." },
    ],
    answer: "a",
    explanation: "Cần GitHub CLI đã đăng nhập và quyền admin repo.",
  },
  {
    questionId: "ch11-l05-q06", lessonId: L, conceptId: "scoped-tools", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bạn chỉ muốn cho Claude chạy các lệnh bắt đầu bằng npm test. Quy tắc nào đúng?",
    options: [
      { id: "a", text: "--allowedTools \"Bash(npm test *)\"", feedback: "Đúng — có dấu cách trước *." },
      { id: "b", text: "--allowedTools \"Bash\"", feedback: "Cho phép mọi lệnh shell." },
      { id: "c", text: "--allowedTools \"Bash(npm*)\"", feedback: "Khớp cả npm publish, npm install…" },
    ],
    answer: "a",
    explanation: "Dấu cách trước * làm khớp theo tiền tố lệnh.",
  },
  {
    questionId: "ch11-l05-q07", lessonId: L, conceptId: "json-output", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Script dưới đây gặp lần Claude từ chối yêu cầu. Chuyện gì xảy ra?",
    context: { label: "Script", content: "claude --bare -p \"...\" --output-format json --json-schema \"$SCHEMA\" > out.json\njq '.structured_output.loi | length' out.json", lang: "bash" },
    options: [
      { id: "a", text: "out.json không có structured_output; jq trả null hoặc lỗi — script cần kiểm tra trường này trước", feedback: "Đúng." },
      { id: "b", text: "structured_output luôn có, chỉ là mảng rỗng", feedback: "Tài liệu: có thể không có trường này." },
      { id: "c", text: "claude -p tự chạy lại đến khi có kết quả", feedback: "Không có cơ chế đó." },
    ],
    answer: "a",
    explanation: "Dùng jq -e hoặc kiểm tra có trường trước khi dùng.",
  },
  {
    questionId: "ch11-l05-q08", lessonId: L, conceptId: "dontask-mode", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Job CI thỉnh thoảng treo vì Claude muốn chạy lệnh cần hỏi quyền mà không ai trả lời. Chỉnh thế nào?",
    options: [
      { id: "a", text: "Thêm --permission-mode dontAsk (lệnh cần hỏi bị từ chối), chỉ cho phép đúng công cụ cần bằng --allowedTools", feedback: "Đúng." },
      { id: "b", text: "Dùng bypassPermissions cho nhanh", feedback: "Cho Claude làm mọi thứ — rủi ro lớn." },
      { id: "c", text: "Tăng timeout lên 6 giờ", feedback: "Vẫn không ai trả lời." },
    ],
    answer: "a",
    explanation: "Từ chối rõ ràng tốt hơn treo hoặc mở toang.",
  },
  {
    questionId: "ch11-l05-q09", lessonId: L, conceptId: "stdin-limit", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Log build 40 MB cần Claude phân tích trong CI. Cách đưa vào hợp lý?",
    options: [
      { id: "a", text: "Ghi log ra file, lọc phần lỗi; nhắc tên file trong prompt và cho phép Read", feedback: "Đúng." },
      { id: "b", text: "cat build.log | claude -p", feedback: "stdin giới hạn 10 MB — sẽ báo lỗi." },
      { id: "c", text: "Dán log vào prompt trên dòng lệnh", feedback: "Quá dài, dễ lỗi shell." },
    ],
    answer: "a",
    explanation: "Lọc trước cũng giảm token (Chương 8).",
  },
  {
    questionId: "ch11-l05-q10", lessonId: L, conceptId: "trigger-guard", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Repo mở cho cộng đồng đóng góp. Những cơ chế nào giúp người lạ hoặc bot không tự ý chạy Claude bằng secret của bạn? Chọn tất cả.",
    options: [
      { id: "a", text: "Trên sự kiện issue/PR, người kích hoạt phải có quyền ghi vào repo (trừ khi cấu hình ngoại lệ)", feedback: "Đúng." },
      { id: "b", text: "Bot bị từ chối trừ khi liệt kê trong allowed_bots", feedback: "Đúng." },
      { id: "c", text: "Trên repo công khai, PR từ fork không nhận được secret", feedback: "Đúng." },
      { id: "d", text: "Bất kỳ ai bình luận @claude đều kích hoạt được", feedback: "Có kiểm tra quyền ghi." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Các kiểm tra này chặn lạm dụng và vòng lặp bot.",
  },
  {
    questionId: "ch11-l05-q11", lessonId: L, conceptId: "bare-mode", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Cùng một lệnh claude -p cho kết quả khác nhau trên máy bạn và trên CI vì máy bạn có hook và MCP server riêng. Sửa thế nào?",
    options: [
      { id: "a", text: "Thêm --bare; cái gì cần thì truyền rõ bằng cờ (--settings, --mcp-config, --append-system-prompt)", feedback: "Đúng." },
      { id: "b", text: "Chép toàn bộ ~/.claude lên CI", feedback: "Khó kiểm soát và dễ lộ cấu hình cá nhân." },
      { id: "c", text: "Chấp nhận kết quả khác nhau", feedback: "Mất tính lặp lại." },
    ],
    answer: "a",
    explanation: "Bare mode là chế độ khuyên dùng cho script.",
  },
  {
    questionId: "ch11-l05-q12", lessonId: L, conceptId: "ci-cost-limits", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một workflow dùng claude-code-action như dưới đây. Chọn các điểm SAI hoặc rủi ro.",
    segments: [
      { id: "s1", text: "anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}", isError: false },
      { id: "s2", text: "permissions: write-all cho job chỉ cần đọc PR.", isError: true, why: "Cấp quyền workflow tối thiểu." },
      { id: "s3", text: "Không đặt timeout-minutes và không có --max-turns.", isError: true, why: "Có thể chạy lâu, tốn phút Actions và token." },
      { id: "s4", text: "Chạy trên pull_request với types opened, synchronize.", isError: false },
    ],
    explanation: "Quyền tối thiểu và giới hạn chi phí.",
  },
  {
    questionId: "ch11-l05-q13", lessonId: L, conceptId: "tests-gate", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Trưởng nhóm muốn bỏ bộ test e2e vì “đã có Claude rà PR rồi”. Bạn phản hồi thế nào?",
    options: [
      { id: "a", text: "Giữ test: test cho kết quả lặp lại được và chặn hồi quy; Claude rà PR là lớp bổ sung, không thay thế", feedback: "Đúng." },
      { id: "b", text: "Đồng ý, Claude thông minh hơn test", feedback: "Nhận xét của mô hình không xác định như test." },
      { id: "c", text: "Bỏ cả Claude lẫn test", feedback: "Mất kiểm soát chất lượng." },
    ],
    answer: "a",
    explanation: "Mỗi lớp kiểm tra bắt được loại lỗi khác nhau.",
  },
  {
    questionId: "ch11-l05-q14", lessonId: L, conceptId: "scoped-tools", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Job CI tự sửa test fail cần quyền Edit. Thiết kế an toàn nhất?",
    options: [
      { id: "a", text: "Cho Read, Edit và Bash(npm test *); Claude sửa trên nhánh riêng, tạo PR để người duyệt; không đẩy thẳng lên nhánh chính", feedback: "Đúng." },
      { id: "b", text: "Cho mọi quyền và tự push lên main", feedback: "Không có người kiểm soát thay đổi." },
      { id: "c", text: "Cho Bash không giới hạn để Claude tự xoay xở", feedback: "Quyền quá rộng." },
    ],
    answer: "a",
    explanation: "Quyền đủ dùng + người duyệt thay đổi.",
  },
  {
    questionId: "ch11-l05-q15", lessonId: L, conceptId: "claude-p-ci", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết lệnh claude -p cho CI: đọc diff của PR, kiểm tra có thay đổi nào trong thư mục migrations/ thiếu ghi chú trong CHANGELOG.md, trả kết quả JSON.",
    source: "Yêu cầu: chỉ đọc, không sửa; kết quả đọc được bằng jq; chạy ổn định trên mọi runner.",
    rubric: [
      { id: "bare", label: "--bare", weight: 1, check: { kind: "anyKeyword", keywords: ["--bare"] }, pass: "Có bare.", fail: "Thêm --bare." },
      { id: "perm", label: "Quyền đọc", weight: 1, check: { kind: "anyKeyword", keywords: ["dontask", "allowedtools"] }, pass: "Có giới hạn quyền.", fail: "Giới hạn quyền (dontAsk / --allowedTools \"Read\")." },
      { id: "json", label: "JSON", weight: 1, check: { kind: "anyKeyword", keywords: ["output-format json", "json-schema"] }, pass: "Có JSON.", fail: "Thêm --output-format json." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "git diff origin/main | claude --bare -p \"Trong diff, liệt kê file thay đổi trong migrations/ mà CHANGELOG.md không có ghi chú tương ứng. Đọc CHANGELOG.md nếu cần. Không sửa file.\" \\\n  --allowedTools \"Read\" --permission-mode dontAsk \\\n  --output-format json \\\n  --json-schema '{\"type\":\"object\",\"properties\":{\"thieu_ghi_chu\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"required\":[\"thieu_ghi_chu\"]}' \\\n  | jq -e '.structured_output.thieu_ghi_chu'",
    explanation: "Ổn định, chỉ đọc, có khuôn.",
  },
];
