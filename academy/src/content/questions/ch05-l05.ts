import type { Question } from "@/lib/types/content";

const L = "ch05-l05";

/** 15 questions for "Đăng nhập và xác thực" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh05L05: Question[] = [
  {
    questionId: "ch05-l05-q01", lessonId: L, conceptId: "first-login", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Lần đầu chạy `claude` với tài khoản Pro, bạn đăng nhập bằng cách nào?",
    options: [
      { id: "a", text: "Claude Code mở trình duyệt để bạn đăng nhập tài khoản", feedback: "Đúng." },
      { id: "b", text: "Gõ mật khẩu claude.ai trực tiếp vào terminal", feedback: "Không — đăng nhập diễn ra trên trình duyệt." },
      { id: "c", text: "Gửi email cho Anthropic để xin quyền", feedback: "Không cần." },
    ],
    answer: "a",
    explanation: "Claude Code mở cửa sổ trình duyệt ở lần chạy đầu; đăng nhập xong thì lần sau không cần làm lại.",
  },
  {
    questionId: "ch05-l05-q02", lessonId: L, conceptId: "login-url", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trình duyệt không tự mở khi đăng nhập. Bạn làm gì?",
    options: [
      { id: "a", text: "Nhấn c để sao chép đường dẫn đăng nhập rồi dán vào trình duyệt", feedback: "Đúng." },
      { id: "b", text: "Cài lại Claude Code", feedback: "Không cần cài lại." },
      { id: "c", text: "Bỏ qua bước đăng nhập", feedback: "Không thể dùng Claude Code khi chưa xác thực." },
    ],
    answer: "a",
    explanation: "Tài liệu Authentication: nếu trình duyệt không tự mở, nhấn c để sao chép URL đăng nhập.",
  },
  {
    questionId: "ch05-l05-q03", lessonId: L, conceptId: "account-types", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Tổ chức của bạn dùng Claude qua Amazon Bedrock thay vì tài khoản claude.ai. Claude Code xác thực thế nào?",
    options: [
      { id: "a", text: "Đặt biến môi trường theo hướng dẫn Bedrock trước khi chạy claude (hoặc chọn 3rd-party platform ở màn hình đăng nhập)", feedback: "Đúng — không cần đăng nhập trình duyệt." },
      { id: "b", text: "Bắt buộc mua thêm gói Pro cá nhân", feedback: "Không cần — Bedrock là một cách xác thực riêng." },
      { id: "c", text: "Claude Code không dùng được với Bedrock", feedback: "Sai — Bedrock, Google Cloud và Microsoft Foundry đều được hỗ trợ." },
    ],
    answer: "a",
    explanation: "Với nhà cung cấp đám mây, quản trị viên phân phối biến môi trường và cách lấy thông tin xác thực đám mây cho người dùng.",
  },
  {
    questionId: "ch05-l05-q04", lessonId: L, conceptId: "switch-account", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền lệnh trong phiên Claude Code.",
    template: "Gõ [[b1]] để đăng xuất; gõ [[b2]] để đăng nhập lại hoặc đổi tài khoản.",
    blanks: [
      { id: "b1", accepted: ["/logout"], width: 8 },
      { id: "b2", accepted: ["/login"], width: 8 },
    ],
    explanation: "/logout còn đặt lại thiết lập lần đầu, nên lần chạy sau Claude Code hỏi đăng nhập lại.",
  },
  {
    questionId: "ch05-l05-q05", lessonId: L, conceptId: "credential-storage", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "matching",
    prompt: "Ghép hệ điều hành với nơi Claude Code lưu thông tin đăng nhập.",
    pairs: [
      { id: "p1", left: "macOS", right: "Keychain (đã mã hoá)" },
      { id: "p2", left: "Linux", right: "~/.claude/.credentials.json, chỉ chủ tài khoản đọc được" },
      { id: "p3", left: "Windows", right: "%USERPROFILE%\\.claude\\.credentials.json" },
    ],
    explanation: "Các vị trí này được bảo vệ theo quyền của tài khoản người dùng — đừng sao chép chúng đi nơi khác.",
  },
  {
    questionId: "ch05-l05-q06", lessonId: L, conceptId: "precedence", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn có gói Max, đồng thời máy có biến `ANTHROPIC_API_KEY` và bạn đã đồng ý cho Claude Code dùng nó. Claude Code dùng thông tin nào?",
    options: [
      { id: "a", text: "API key trong biến môi trường", feedback: "Đúng — API key được ưu tiên hơn đăng nhập gói đăng ký." },
      { id: "b", text: "Gói Max, luôn luôn", feedback: "Sai — khi đã đồng ý dùng API key, nó được ưu tiên." },
      { id: "c", text: "Ngẫu nhiên mỗi lần chạy", feedback: "Thứ tự ưu tiên là cố định." },
    ],
    answer: "a",
    explanation: "Trong thứ tự ưu tiên, ANTHROPIC_API_KEY đứng trên đăng nhập gói đăng ký từ /login.",
  },
  {
    questionId: "ch05-l05-q07", lessonId: L, conceptId: "status", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trong phiên, bạn muốn biết Claude Code đang dùng tài khoản và phương thức xác thực nào. Gõ gì?",
    options: [
      { id: "a", text: "/status", feedback: "Đúng." },
      { id: "b", text: "/clear", feedback: "/clear xoá hội thoại, không hiện thông tin tài khoản." },
      { id: "c", text: "/init", feedback: "/init tạo CLAUDE.md." },
    ],
    answer: "a",
    explanation: "/status hiện phiên bản, model, tài khoản và đánh dấu thông tin xác thực không được dùng nếu có nhiều loại.",
  },
  {
    questionId: "ch05-l05-q08", lessonId: L, conceptId: "api-key-safety", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Đồng nghiệp nhắn trong nhóm chat: “Ai có API key gửi mình dùng chung với.” Cách phản hồi tốt nhất?",
    options: [
      { id: "a", text: "Không gửi; hướng dẫn họ tự đăng nhập bằng tài khoản của mình hoặc xin quản trị viên cấp quyền", feedback: "Đúng — khoá dùng chung không kiểm soát và không thu hồi riêng được." },
      { id: "b", text: "Gửi khoá vào nhóm cho nhanh", feedback: "Khoá trong chat có thể lộ cho bất kỳ ai đọc được nhóm." },
      { id: "c", text: "Ghi khoá vào CLAUDE.md để ai cũng dùng được", feedback: "CLAUDE.md thường được commit lên git." },
    ],
    answer: "a",
    explanation: "Mỗi người một thông tin đăng nhập: dễ theo dõi chi phí, dễ thu hồi khi có sự cố.",
  },
  {
    questionId: "ch05-l05-q09", lessonId: L, conceptId: "ci-token", learningObjective: "o4", thinkingSkill: "apply", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn cần chạy Claude Code trong pipeline CI (không có trình duyệt) bằng gói đăng ký của nhóm. Cách đúng?",
    options: [
      { id: "a", text: "Chạy claude setup-token, lưu token vào secret của CI dưới tên CLAUDE_CODE_OAUTH_TOKEN", feedback: "Đúng." },
      { id: "b", text: "Sao chép file .credentials.json lên kho mã", feedback: "Lộ thông tin đăng nhập cho mọi người xem repo." },
      { id: "c", text: "Ghi token thẳng vào file cấu hình pipeline", feedback: "Token sẽ nằm trong mã nguồn — dùng secret." },
    ],
    answer: "a",
    explanation: "setup-token tạo token OAuth một năm; nó không tự lưu, bạn đặt vào biến CLAUDE_CODE_OAUTH_TOKEN qua secret.",
  },
  {
    questionId: "ch05-l05-q10", lessonId: L, conceptId: "login-expiry", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Khi mở Claude Code, bạn thấy dòng dưới đây. Điều gì đúng?",
    context: { label: "Thông báo khi khởi động", content: "Your login expires in 3 days · run /login to renew", lang: "text" },
    options: [
      { id: "a", text: "Hiện vẫn dùng bình thường; chạy /login để gia hạn trước khi hết hạn", feedback: "Đúng — cảnh báo không chặn yêu cầu." },
      { id: "b", text: "Claude Code đã ngừng hoạt động ngay", feedback: "Đăng nhập vẫn còn hiệu lực đến khi hết hạn." },
      { id: "c", text: "Phải cài lại Claude Code", feedback: "Chỉ cần /login." },
    ],
    answer: "a",
    explanation: "Gia hạn sớm đặc biệt quan trọng với phiên chạy lâu không có người theo dõi.",
  },
  {
    questionId: "ch05-l05-q11", lessonId: L, conceptId: "team-accounts", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Công ty bạn dùng Claude for Teams. Bạn đã cài Claude Code nhưng chưa có trong nhóm. Bước tiếp theo?",
    options: [
      { id: "a", text: "Nhờ quản trị viên mời từ bảng quản trị, rồi đăng nhập bằng tài khoản claude.ai được mời", feedback: "Đúng." },
      { id: "b", text: "Mượn tài khoản của đồng nghiệp", feedback: "Không chia sẻ tài khoản." },
      { id: "c", text: "Tạo API key giả", feedback: "Không có cách nào như vậy." },
    ],
    answer: "a",
    explanation: "Quy trình Team: đăng ký → quản trị viên mời thành viên → thành viên cài và đăng nhập bằng tài khoản claude.ai.",
  },
  {
    questionId: "ch05-l05-q12", lessonId: L, conceptId: "precedence", learningObjective: "o3", thinkingSkill: "remember", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp theo thứ tự Claude Code ưu tiên (cao nhất trước) — bản rút gọn.",
    items: [
      { id: "a", text: "Biến bật nhà cung cấp đám mây (ví dụ CLAUDE_CODE_USE_BEDROCK)" },
      { id: "b", text: "Biến ANTHROPIC_API_KEY" },
      { id: "c", text: "Đăng nhập gói đăng ký bằng /login" },
    ],
    explanation: "Đăng nhập gói đăng ký là mặc định nhưng nằm cuối danh sách ưu tiên — các biến môi trường có thể lấn át nó.",
  },
  {
    questionId: "ch05-l05-q13", lessonId: L, conceptId: "precedence", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn có gói Max hợp lệ nhưng mọi yêu cầu đều lỗi xác thực. Máy có `ANTHROPIC_API_KEY` thuộc một tổ chức đã bị vô hiệu. Cách xử lý?",
    options: [
      { id: "a", text: "unset ANTHROPIC_API_KEY (và xoá khỏi file cấu hình shell), rồi kiểm tra /status", feedback: "Đúng — Claude Code sẽ quay về dùng gói đăng ký." },
      { id: "b", text: "Mua thêm gói Max thứ hai", feedback: "Không giải quyết được việc API key được ưu tiên." },
      { id: "c", text: "Đăng xuất claude.ai trên trình duyệt", feedback: "Vấn đề nằm ở biến môi trường trên máy." },
    ],
    answer: "a",
    explanation: "Tài liệu nêu đúng tình huống này: API key được ưu tiên và có thể gây lỗi nếu thuộc tổ chức bị vô hiệu.",
  },
  {
    questionId: "ch05-l05-q14", lessonId: L, conceptId: "api-key-safety", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Đây là nội dung một file CLAUDE.md sắp được commit. Chọn các dòng KHÔNG được để trong file.",
    segments: [
      { id: "s1", text: "Chạy npm test trước khi commit.", isError: false },
      { id: "s2", text: "API key: sk-ant-api03-xxxxxxxx", isError: true, why: "Khoá bí mật sẽ lộ cho mọi người xem repo." },
      { id: "s3", text: "Viết comment bằng tiếng Việt.", isError: false },
      { id: "s4", text: "Mật khẩu database production: QA@2026", isError: true, why: "Mật khẩu phải nằm trong biến môi trường hoặc secret, không nằm trong file dự án." },
    ],
    explanation: "CLAUDE.md chứa quy ước làm việc, không chứa bí mật. Bí mật đặt trong biến môi trường hoặc trình quản lý secret.",
  },
  {
    questionId: "ch05-l05-q15", lessonId: L, conceptId: "console", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "true-false",
    statement: "Khi đăng nhập Claude Code bằng tài khoản Claude Console lần đầu, một workspace tên “Claude Code” được tự tạo trong Console để theo dõi chi phí tập trung.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Theo Quickstart: lần đăng nhập Console đầu tiên tự tạo workspace “Claude Code” để theo dõi chi phí.",
  },
];
