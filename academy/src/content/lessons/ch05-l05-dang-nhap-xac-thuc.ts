import type { Lesson } from "@/lib/types/content";

const AUTH = "https://code.claude.com/docs/en/authentication";

export const lessonDangNhapXacThuc: Lesson = {
  id: "ch05-l05",
  chapterId: "ch05",
  slug: "dang-nhap-xac-thuc",
  title: "Đăng nhập và xác thực",
  subtitle: "Đăng nhập lần đầu qua trình duyệt, đổi tài khoản, biết Claude Code đang dùng thông tin xác thực nào và giữ khoá an toàn.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Đăng nhập lần đầu qua trình duyệt và xử lý khi trình duyệt không tự mở." },
    { id: "o2", text: "Chọn loại tài khoản phù hợp và quản lý đăng nhập bằng /login, /logout." },
    { id: "o3", text: "Hiểu thứ tự ưu tiên xác thực ở mức cơ bản và kiểm tra phương thức đang dùng bằng /status." },
    { id: "o4", text: "Bảo vệ thông tin đăng nhập: nơi lưu, không chia sẻ khoá, dùng token riêng cho CI." },
  ],
  concepts: [
    { id: "first-login", label: "Đăng nhập lần đầu" },
    { id: "login-url", label: "Khi trình duyệt không tự mở" },
    { id: "account-types", label: "Loại tài khoản" },
    { id: "team-accounts", label: "Tài khoản Team/Enterprise" },
    { id: "console", label: "Claude Console" },
    { id: "switch-account", label: "Đăng xuất và đổi tài khoản" },
    { id: "login-expiry", label: "Gia hạn đăng nhập" },
    { id: "precedence", label: "Thứ tự ưu tiên xác thực" },
    { id: "status", label: "Kiểm tra bằng /status" },
    { id: "credential-storage", label: "Nơi lưu thông tin đăng nhập" },
    { id: "api-key-safety", label: "An toàn API key" },
    { id: "ci-token", label: "Token cho CI" },
  ],
  hints: [
    "Trình duyệt không tự mở? Nhấn `c` để sao chép đường dẫn đăng nhập rồi dán vào trình duyệt.",
    "Có gói đăng ký mà vẫn lỗi xác thực? Kiểm tra biến `ANTHROPIC_API_KEY` và gõ `/status`.",
    "Không bao giờ ghi API key vào CLAUDE.md, mã nguồn hay tin nhắn.",
  ],
  sources: [
    { label: "Claude Code — Authentication (đăng nhập, credential management, authentication precedence)", href: AUTH },
    { label: "Claude Code — Quickstart: Step 2 Start your first session", href: "https://code.claude.com/docs/en/quickstart" },
    { label: "Claude Code — Security: secure credential storage", href: "https://code.claude.com/docs/en/security" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Lần đầu gõ `claude`, Claude Code **mở trình duyệt** để bạn đăng nhập. Nếu trình duyệt không tự mở (ví dụ khi làm việc qua SSH), nhấn `c` để **sao chép đường dẫn đăng nhập** rồi dán vào trình duyệt. Nếu trình duyệt hiện **mã** thay vì tự quay lại, dán mã vào terminal ở dòng `Paste code here if prompted`. Khi thấy `Login successful`, nhấn Enter là xong — lần sau không cần đăng nhập lại.",
        "Loại tài khoản: **Pro, Max, Ultra** (tài khoản claude.ai cá nhân); **Team, Enterprise** (tài khoản claude.ai được quản trị viên mời); **Claude Console** (tính phí theo API, cũng cần được mời vào tổ chức); hoặc **nhà cung cấp đám mây** như Amazon Bedrock — đặt biến môi trường, không cần đăng nhập trình duyệt.",
        "Trong phiên, `/login` để đăng nhập lại hoặc đổi tài khoản, `/logout` để đăng xuất. `/status` cho biết đang dùng phương thức nào. Lưu ý **thứ tự ưu tiên**: nếu máy có biến `ANTHROPIC_API_KEY` và bạn đã đồng ý dùng nó, Claude Code dùng khoá đó **thay vì** gói đăng ký — khoá của tổ chức đã bị vô hiệu sẽ gây lỗi xác thực. Khi đó chạy `unset ANTHROPIC_API_KEY` rồi kiểm tra `/status`.",
        "Thông tin đăng nhập được lưu an toàn: macOS dùng **Keychain**; Linux và Windows dùng file `.credentials.json` trong thư mục `.claude` của người dùng, chỉ tài khoản của bạn đọc được. Với CI (máy chạy tự động, không có trình duyệt), tạo token bằng `claude setup-token` và lưu vào **secret** của hệ thống CI — tuyệt đối không ghi khoá vào mã nguồn.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Đăng nhập giống thẻ ra vào nhà máy: mỗi người một thẻ, quẹt một lần ở cổng là dùng cả ngày. Cho mượn thẻ hay dán mã thẻ lên bảng tin thì ai cũng vào được dưới tên bạn — API key cũng vậy.",
      },
      terms: [
        { term: "Authentication (xác thực)", definition: "Chứng minh bạn là ai để dùng dịch vụ." },
        { term: "API key", definition: "Chuỗi bí mật dùng để gọi API; ai có nó là dùng được tài khoản của bạn." },
        { term: "Biến môi trường", definition: "Giá trị đặt trong shell (ví dụ ANTHROPIC_API_KEY) mà chương trình đọc khi chạy." },
        { term: "Secret (CI)", definition: "Nơi lưu khoá bí mật trong hệ thống CI, được mã hoá và không hiện trong log." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: luồng đăng nhập lần đầu",
      infographic: {
        kind: "flow",
        steps: [
          { title: "Gõ claude", body: "Trong thư mục dự án; lần đầu Claude Code hỏi đăng nhập.", icon: "terminal" },
          { title: "Trình duyệt mở", body: "Không tự mở? Nhấn c để sao chép đường dẫn đăng nhập.", icon: "globe" },
          { title: "Đăng nhập tài khoản", body: "Pro, Max, Ultra, Team, Enterprise hoặc Console.", icon: "user" },
          { title: "Dán mã nếu được hỏi", body: "Trình duyệt hiện mã → dán vào Paste code here if prompted.", icon: "shield" },
          { title: "Login successful", body: "Nhấn Enter; lần sau không cần đăng nhập lại.", icon: "check" },
        ],
      },
      caption: "Theo trang Authentication chính thức (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: Claude Code chọn thông tin xác thực nào (rút gọn)",
      mermaid: `flowchart TD
  A["Khởi động claude"] --> B{"Có biến nhà cung cấp đám mây? (ví dụ CLAUDE_CODE_USE_BEDROCK)"}
  B -->|"Có"| C["Dùng thông tin của nhà cung cấp đám mây"]
  B -->|"Không"| D{"Có ANTHROPIC_API_KEY và bạn đã đồng ý dùng?"}
  D -->|"Có"| E["Dùng API key (tính phí theo API)"]
  D -->|"Không"| F["Dùng đăng nhập gói đăng ký từ /login"]
  E --> G["Kiểm tra bằng /status"]
  F --> G
  C --> G`,
      caption: "Rút gọn từ danh sách thứ tự ưu tiên đầy đủ trong tài liệu (còn ANTHROPIC_AUTH_TOKEN, apiKeyHelper, CLAUDE_CODE_OAUTH_TOKEN…).",
      alt: "Lưu đồ rút gọn: khi khởi động, nếu có biến nhà cung cấp đám mây thì dùng thông tin đám mây; nếu không, nếu có ANTHROPIC_API_KEY đã được đồng ý thì dùng API key; nếu không thì dùng đăng nhập gói đăng ký. Cả ba trường hợp kiểm tra bằng /status.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: giữ khoá an toàn",
      bad: {
        label: "Khoá nằm trong file dự án",
        content: "# CLAUDE.md\nAPI key của nhóm: sk-ant-xxxxxxxx (cứ dùng chung)\n\n# Gửi vào nhóm chat: \"Ai cần key thì lấy ở trên nhé\"",
        notes: ["CLAUDE.md thường được commit lên git — ai xem repo cũng thấy khoá.", "Dùng chung khoá: không biết ai đã dùng, không thu hồi riêng được."],
      },
      good: {
        label: "Mỗi người tự đăng nhập; CI dùng secret",
        content: "Mỗi thành viên: claude → đăng nhập bằng tài khoản Team của mình.\nCI: claude setup-token → lưu vào secret CLAUDE_CODE_OAUTH_TOKEN.\nKiểm tra: /status.",
        notes: ["Thông tin đăng nhập được lưu trong Keychain hoặc file chỉ bạn đọc được.", "Token CI nằm trong secret, không nằm trong mã nguồn."],
      },
      takeaway: "Khoá và token không bao giờ nằm trong mã nguồn, CLAUDE.md hay tin nhắn.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xử lý tình huống đăng nhập",
      sim: {
        kind: "choose",
        options: [
          { id: "browser", label: "Chạy claude và đăng nhập qua trình duyệt" },
          { id: "copy-url", label: "Nhấn c để sao chép đường dẫn đăng nhập" },
          { id: "paste-code", label: "Dán mã vào dòng Paste code here if prompted" },
          { id: "relogin", label: "Gõ /login để đổi tài khoản" },
          { id: "unset", label: "unset ANTHROPIC_API_KEY rồi kiểm tra /status" },
          { id: "setup-token", label: "claude setup-token và lưu vào secret của CI" },
          { id: "admin", label: "Nhờ quản trị viên mời vào tổ chức" },
        ],
        scenarios: [
          { id: "s1", text: "Bạn vừa cài xong, có gói Pro, mở Claude Code lần đầu.", answer: "browser", why: "Lần đầu chạy, Claude Code mở trình duyệt để đăng nhập." },
          { id: "s2", text: "Bạn làm việc qua SSH, trình duyệt không tự mở.", answer: "copy-url", why: "Nhấn c để sao chép đường dẫn và mở ở trình duyệt khác." },
          { id: "s3", text: "Đăng nhập xong, trình duyệt hiện một mã thay vì quay lại terminal.", answer: "paste-code", why: "Dán mã vào terminal ở dòng Paste code here if prompted." },
          { id: "s4", text: "Đang trong phiên, bạn muốn chuyển từ tài khoản cá nhân sang tài khoản công ty.", answer: "relogin", why: "/login để đăng nhập lại hoặc đổi tài khoản." },
          { id: "s5", text: "Bạn có gói Max nhưng bị lỗi xác thực; máy còn biến ANTHROPIC_API_KEY cũ của tổ chức đã ngừng hoạt động.", answer: "unset", why: "API key được ưu tiên hơn gói đăng ký; bỏ biến rồi xác nhận bằng /status." },
          { id: "s6", text: "Cần chạy Claude Code trong pipeline CI không có trình duyệt.", answer: "setup-token", why: "setup-token tạo token dài hạn; đặt vào biến CLAUDE_CODE_OAUTH_TOKEN qua secret." },
          { id: "s7", text: "Công ty dùng Claude for Teams nhưng tài khoản của bạn chưa có trong nhóm.", answer: "admin", why: "Thành viên Team được mời từ bảng quản trị rồi đăng nhập bằng tài khoản claude.ai được mời." },
        ],
      },
      intro: "Chọn cách xử lý đúng cho từng tình huống đăng nhập. (Mô phỏng — không có đăng nhập thật.)",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: đăng nhập và kiểm tra",
      steps: [
        { title: "Mở Claude Code", detail: "Trong thư mục dự án, gõ claude. Lần đầu sẽ thấy màn hình đăng nhập.", code: { lang: "bash", content: "cd ~/du-an/web-loi-qa\nclaude" } },
        { title: "Đăng nhập trên trình duyệt", detail: "Chọn loại tài khoản và đăng nhập. Không thấy trình duyệt? Nhấn c để sao chép đường dẫn." },
        { title: "Dán mã nếu được hỏi", detail: "Thấy Login successful thì nhấn Enter." },
        { title: "Kiểm tra phương thức đang dùng", detail: "Trong phiên, gõ lệnh dưới để xem phiên bản, model, tài khoản.", code: { lang: "text", content: "/status" } },
        { title: "Đổi tài khoản hoặc đăng xuất", detail: "/login để đăng nhập lại hoặc đổi tài khoản; /logout để đăng xuất (lần chạy sau sẽ hỏi đăng nhập lại). Đăng xuất khi dùng máy chung.", code: { lang: "text", content: "/login\n/logout" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Nhóm 6 người dùng Claude for Teams. Viết “quy tắc đăng nhập an toàn” ngắn cho nhóm: cách đăng nhập lần đầu, cách kiểm tra đang dùng tài khoản nào, việc cần làm khi dùng máy chung, và những điều tuyệt đối không làm với khoá/token.",
      placeholder: "1. Đăng nhập: …\n2. Kiểm tra: …\n3. Máy chung: …\n4. Không được: …",
      rubric: [
        { id: "login", label: "Đăng nhập bằng tài khoản riêng", weight: 1, check: { kind: "anyKeyword", keywords: ["trình duyệt", "/login", "tài khoản riêng", "tài khoản của mình"] }, pass: "Có cách đăng nhập.", fail: "Mỗi người đăng nhập bằng tài khoản Team của mình qua trình duyệt." },
        { id: "status", label: "Kiểm tra bằng /status", weight: 1, check: { kind: "regex", pattern: "/status" }, pass: "Có /status.", fail: "Dùng /status để kiểm tra tài khoản đang dùng." },
        { id: "logout", label: "Đăng xuất trên máy chung", weight: 1, check: { kind: "regex", pattern: "/logout|dang xuat" }, pass: "Có đăng xuất.", fail: "Nhắc /logout khi dùng máy chung." },
        { id: "nosecret", label: "Không chia sẻ hay commit khoá", weight: 1, check: { kind: "regex", pattern: "khong (chia se|gui|commit|ghi|dan)" }, pass: "Có quy tắc giữ bí mật.", fail: "Nêu rõ không chia sẻ, không commit, không dán khoá vào chat." },
        { id: "detail", label: "Đủ chi tiết", weight: 1, check: { kind: "minChars", value: 200 }, pass: "Đủ chi tiết.", fail: "Viết đầy đủ hơn (khoảng 200 ký tự trở lên)." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "1. Đăng nhập: mỗi người chạy claude và đăng nhập qua trình duyệt bằng tài khoản Team của chính mình (được quản trị viên mời).\n2. Kiểm tra: gõ /status để xem đang dùng tài khoản và phương thức nào; nếu thấy dùng API key lạ thì báo nhóm.\n3. Máy chung: gõ /logout trước khi rời máy.\n4. Không được: không chia sẻ tài khoản, không dán API key hay token vào chat, không commit khoá vào git hoặc ghi vào CLAUDE.md. CI dùng claude setup-token và lưu trong secret.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Lần đầu chạy claude → đăng nhập qua trình duyệt; nhấn c nếu trình duyệt không tự mở; dán mã nếu được hỏi.",
        "Tài khoản: Pro/Max/Ultra, Team/Enterprise (được mời), Console, hoặc nhà cung cấp đám mây.",
        "/login đổi tài khoản, /logout đăng xuất, /status xem phương thức đang dùng.",
        "ANTHROPIC_API_KEY được ưu tiên hơn gói đăng ký khi bạn đã đồng ý dùng — gỡ bằng unset nếu gây lỗi.",
        "Thông tin đăng nhập lưu trong Keychain (macOS) hoặc .credentials.json; CI dùng claude setup-token + secret.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Đăng nhập Claude Code trên máy của bạn và rà soát an toàn thông tin xác thực.",
      tasks: [
        "Đăng nhập lần đầu, rồi gõ /status và ghi lại phương thức đăng nhập đang dùng.",
        "Kiểm tra xem máy có biến ANTHROPIC_API_KEY không (echo $ANTHROPIC_API_KEY trên macOS/Linux) và quyết định có cần giữ không.",
        "Tìm trong các dự án của bạn xem có khoá hay mật khẩu nào bị ghi trong file không; nếu có, chuyển ra biến môi trường hoặc secret.",
      ],
      deliverable: "Ghi chú: phương thức đăng nhập theo /status, kết quả kiểm tra biến môi trường, danh sách file đã làm sạch khoá.",
      checklist: ["/status hiển thị đúng tài khoản mong muốn", "Không còn khoá nằm trong mã nguồn hoặc CLAUDE.md", "Biết cách /logout khi dùng máy chung"],
    },
  ],
};
