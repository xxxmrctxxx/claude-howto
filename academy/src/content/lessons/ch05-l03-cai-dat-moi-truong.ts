import type { Lesson } from "@/lib/types/content";

const SETUP = "https://code.claude.com/docs/en/setup";

export const lessonCaiDatMoiTruong: Lesson = {
  id: "ch05-l03",
  chapterId: "ch05",
  slug: "cai-dat-moi-truong",
  title: "Cài đặt môi trường",
  subtitle: "Kiểm tra máy có đủ điều kiện, chọn cách chạy trên Windows (native hay WSL) và chuẩn bị Git, trình soạn thảo, tài khoản.",
  level: "beginner",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Kiểm tra máy đáp ứng yêu cầu hệ thống: hệ điều hành, RAM, bộ xử lý, mạng, shell." },
    { id: "o2", text: "Chọn môi trường trên Windows (native, WSL 2, WSL 1) và hiểu vai trò của Git for Windows." },
    { id: "o3", text: "Chuẩn bị công cụ phụ trợ: Git, trình soạn thảo để xem thay đổi và tài khoản đủ điều kiện." },
    { id: "o4", text: "Biết lựa chọn không cần terminal (ứng dụng desktop) và khi nào nên dùng." },
  ],
  concepts: [
    { id: "sys-req", label: "Yêu cầu hệ thống" },
    { id: "os-version", label: "Phiên bản hệ điều hành" },
    { id: "hardware", label: "RAM và bộ xử lý" },
    { id: "network-region", label: "Mạng và quốc gia được hỗ trợ" },
    { id: "windows-options", label: "Native Windows hay WSL" },
    { id: "git-for-windows", label: "Git for Windows" },
    { id: "wsl", label: "WSL" },
    { id: "git", label: "Git" },
    { id: "editor", label: "Trình soạn thảo" },
    { id: "account-req", label: "Tài khoản đủ điều kiện" },
    { id: "desktop-alt", label: "Ứng dụng desktop" },
  ],
  hints: [
    "Yêu cầu tối thiểu (đối chiếu 03/11/2026): macOS 13.0+, Windows 10 1809+, Ubuntu 20.04+, Debian 10+, Alpine 3.19+; 4 GB RAM; x64 hoặc ARM64.",
    "Trên Windows, Git for Windows là tuỳ chọn: có nó Claude Code dùng Bash, không có thì dùng PowerShell.",
    "Gói claude.ai miễn phí không gồm Claude Code.",
  ],
  sources: [
    { label: "Claude Code — Advanced setup: system requirements, Set up on Windows (đối chiếu 03/11/2026)", href: SETUP },
    { label: "Claude Code — Terminal guide (Git for Windows, PowerShell)", href: "https://code.claude.com/docs/en/terminal-guide" },
    { label: "Claude Code — Quickstart (tài khoản cần có)", href: "https://code.claude.com/docs/en/quickstart" },
    { label: "Microsoft — Install WSL", href: "https://learn.microsoft.com/en-us/windows/wsl/install" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Trước khi cài Claude Code, hãy chắc máy **đủ điều kiện**. Theo trang Advanced setup (đối chiếu ngày 03/11/2026): **macOS 13.0** trở lên, **Windows 10 bản 1809** hoặc Windows Server 2019 trở lên, **Ubuntu 20.04+**, **Debian 10+**, **Alpine Linux 3.19+**; **4 GB RAM** trở lên; bộ xử lý **x64 hoặc ARM64**; **có internet**; shell Bash, Zsh, PowerShell hoặc CMD; và bạn ở **quốc gia Anthropic hỗ trợ**.",
        "Trên Windows có ba cách chạy. **Native Windows**: chạy trực tiếp trong PowerShell/CMD, hợp với dự án công cụ Windows. **WSL 2** (Linux chạy trong Windows): hợp với công cụ Linux và là lựa chọn duy nhất trên Windows hỗ trợ **sandbox** (chạy lệnh cách ly). **WSL 1**: khi không dùng được WSL 2. Với WSL, bạn cài và chạy `claude` **bên trong terminal WSL**.",
        "**Git for Windows** là tuỳ chọn nhưng được khuyến nghị: nó cung cấp Git Bash để Claude Code dùng công cụ Bash; không có nó, Claude Code dùng công cụ PowerShell. Ở mọi hệ điều hành, **Git** giúp bạn xem Claude đã thay đổi gì và quay lại khi cần — chương sau sẽ học kỹ.",
        "Bạn cũng cần **tài khoản đủ điều kiện**: gói Pro, Max, Ultra, Team, Enterprise hoặc tài khoản Claude Console (gói miễn phí không gồm Claude Code). Nếu chưa quen terminal, có thể bắt đầu bằng **ứng dụng desktop** — dùng Claude Code mà không cần gõ lệnh.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Trước khi lắp máy biến áp mới, đội kỹ thuật kiểm tra móng, nguồn điện, đường dây và giấy phép. Cài phần mềm cũng vậy: kiểm tra hệ điều hành, RAM, mạng và tài khoản trước, đỡ mất công gỡ lỗi sau.",
      },
      terms: [
        { term: "WSL", definition: "Windows Subsystem for Linux — chạy môi trường Linux bên trong Windows." },
        { term: "Git for Windows", definition: "Bộ cài Git cho Windows, kèm Git Bash (một shell kiểu Bash)." },
        { term: "Sandbox", definition: "Chạy lệnh trong môi trường cách ly file và mạng để giảm rủi ro." },
        { term: "x64 / ARM64", definition: "Hai kiến trúc bộ xử lý 64-bit phổ biến (Intel/AMD và Apple Silicon/ARM)." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bảng kiểm tra yêu cầu hệ thống",
      infographic: {
        kind: "table",
        headers: ["Hạng mục", "Yêu cầu (đối chiếu 03/11/2026)", "Cách tự kiểm tra"],
        rows: [
          ["macOS", "13.0 trở lên", "Menu Apple → About This Mac, hoặc lệnh sw_vers"],
          ["Windows", "10 bản 1809+ hoặc Server 2019+", "Gõ winver trong hộp Run (Win + R)"],
          ["Linux", "Ubuntu 20.04+, Debian 10+, Alpine 3.19+", "cat /etc/os-release"],
          ["Phần cứng", "4 GB RAM trở lên; x64 hoặc ARM64", "Thông tin hệ thống của máy"],
          ["Mạng", "Có internet; quốc gia được Anthropic hỗ trợ", "Mở được claude.ai"],
          ["Tài khoản", "Pro, Max, Ultra, Team, Enterprise hoặc Console", "Trang cài đặt tài khoản claude.ai"],
        ],
      },
      caption: "Yêu cầu có thể thay đổi theo thời gian — xem trang Advanced setup chính thức trước khi cài.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: chọn môi trường trên Windows",
      mermaid: `flowchart TD
  A["Máy Windows 10 1809+ hoặc 11"] --> B{"Muốn dùng terminal?"}
  B -->|"Không"| G["Ứng dụng desktop Claude"]
  B -->|"Có"| C{"Cần công cụ Linux hoặc sandbox?"}
  C -->|"Có"| D{"WSL 2 dùng được?"}
  D -->|"Có"| E["WSL 2: cài và chạy claude trong terminal WSL"]
  D -->|"Không"| F["WSL 1 (không có sandbox)"]
  C -->|"Không"| H["Native Windows: PowerShell hoặc CMD"]
  H --> I["Nên cài Git for Windows để có Bash"]`,
      caption: "Sandbox chỉ có ở WSL 2; native Windows và WSL 1 không hỗ trợ sandbox.",
      alt: "Lưu đồ chọn môi trường trên Windows: nếu không muốn dùng terminal thì dùng ứng dụng desktop. Nếu dùng terminal và cần công cụ Linux hoặc sandbox thì chọn WSL 2, nếu WSL 2 không dùng được thì WSL 1. Nếu không cần, chọn native Windows với PowerShell hoặc CMD và nên cài Git for Windows.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: chuẩn bị trước khi cài",
      bad: {
        label: "Cài ngay rồi tính",
        content: "Dán lệnh cài vào bất kỳ cửa sổ nào đang mở. Lỗi thì tìm cách sửa sau.",
        notes: ["Có thể đang ở CMD trong khi dán lệnh PowerShell.", "Máy có thể không đủ phiên bản hệ điều hành.", "Có thể chưa có tài khoản đủ điều kiện."],
      },
      good: {
        label: "Kiểm tra theo danh sách",
        content: "1. winver → Windows 11 23H2 (đạt)\n2. RAM 16 GB, x64 (đạt)\n3. Chọn native Windows, cài Git for Windows\n4. git --version → có số phiên bản\n5. Tài khoản Pro đã đăng nhập claude.ai",
        notes: ["Mỗi điều kiện có cách kiểm tra cụ thể.", "Quyết định môi trường trước khi cài."],
      },
      takeaway: "Năm phút kiểm tra trước tránh được phần lớn lỗi cài đặt.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn môi trường phù hợp",
      sim: {
        kind: "choose",
        options: [
          { id: "native", label: "Cài trực tiếp trên máy (macOS/Linux)" },
          { id: "win-git", label: "Native Windows + Git for Windows" },
          { id: "wsl2", label: "WSL 2" },
          { id: "desktop", label: "Ứng dụng desktop" },
          { id: "upgrade", label: "Chưa đủ điều kiện — cần nâng cấp trước" },
        ],
        scenarios: [
          { id: "s1", text: "MacBook macOS 15, 16 GB RAM, muốn dùng terminal.", answer: "native", why: "Đủ điều kiện; cài trực tiếp bằng trình cài native." },
          { id: "s2", text: "Windows 11, dự án là script PowerShell và Excel nội bộ, muốn Claude chạy được cả lệnh Bash.", answer: "win-git", why: "Dự án công cụ Windows → native; Git for Windows cho Bash." },
          { id: "s3", text: "Windows 11, dự án dùng công cụ Linux và muốn chạy lệnh trong sandbox cách ly.", answer: "wsl2", why: "Trên Windows, sandbox chỉ có ở WSL 2." },
          { id: "s4", text: "Nhân viên văn phòng chưa từng dùng terminal, muốn giao việc cho Claude Code qua giao diện.", answer: "desktop", why: "Ứng dụng desktop cho phép dùng Claude Code không cần terminal." },
          { id: "s5", text: "Máy Windows 10 bản 1709, 8 GB RAM.", answer: "upgrade", why: "Cần Windows 10 bản 1809 trở lên." },
          { id: "s6", text: "MacBook chạy macOS 12 Monterey.", answer: "upgrade", why: "Cần macOS 13.0 trở lên." },
        ],
      },
      intro: "Với mỗi máy, chọn cách chạy Claude Code phù hợp nhất theo yêu cầu hệ thống chính thức.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: kiểm tra và chuẩn bị",
      steps: [
        { title: "Kiểm tra phiên bản hệ điều hành", detail: "macOS: lệnh sw_vers. Linux: xem file /etc/os-release. Windows: nhấn Win + R, gõ winver.", code: { lang: "bash", content: "sw_vers               # macOS\ncat /etc/os-release   # Linux" } },
        { title: "Kiểm tra RAM và bộ xử lý", detail: "Cần 4 GB RAM trở lên, bộ xử lý x64 hoặc ARM64. Windows 32-bit không được hỗ trợ." },
        { title: "Kiểm tra Git", detail: "Git là tuỳ chọn nhưng nên có. Nếu lệnh in ra số phiên bản là đã có Git.", code: { lang: "bash", content: "git --version" } },
        { title: "Windows: chọn native hay WSL", detail: "Native: có thể cài Git for Windows (giữ mặc định ở mọi màn hình). WSL: cài WSL theo hướng dẫn của Microsoft rồi làm mọi bước tiếp theo trong terminal WSL.", code: { lang: "powershell", content: "wsl --install   # cài WSL (theo tài liệu Microsoft)" } },
        { title: "Chuẩn bị tài khoản và trình soạn thảo", detail: "Tài khoản Pro, Max, Ultra, Team, Enterprise hoặc Console. Một trình soạn thảo (ví dụ VS Code) giúp bạn xem file Claude đã sửa." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Máy của chị Hoa: Windows 11 23H2, 8 GB RAM, x64, chưa cài Git, dự án có vài script Bash. Chị có gói Pro. Viết kế hoạch chuẩn bị môi trường: kết luận máy có đạt yêu cầu không, chọn native hay WSL, cần cài thêm gì và tự kiểm tra bằng cách nào.",
      placeholder: "Kết luận: … Chọn: … Cần cài: … Kiểm tra bằng: …",
      rubric: [
        { id: "verdict", label: "Kết luận đạt yêu cầu có căn cứ", weight: 1, check: { kind: "regex", pattern: "(1809|4\\s*gb|dat yeu cau|du dieu kien)" }, pass: "Có kết luận kèm căn cứ.", fail: "So với yêu cầu: Windows 10 1809+, 4 GB RAM, x64." },
        { id: "env", label: "Chọn môi trường", weight: 1, check: { kind: "regex", pattern: "(native|wsl)" }, pass: "Đã chọn môi trường.", fail: "Chọn native Windows hoặc WSL và nói lý do." },
        { id: "git", label: "Cài Git for Windows", weight: 1, check: { kind: "anyKeyword", keywords: ["git for windows", "git bash"] }, pass: "Có Git for Windows.", fail: "Cần Git for Windows để Claude Code dùng Bash." },
        { id: "verify", label: "Cách tự kiểm tra", weight: 1, check: { kind: "regex", pattern: "(git --version|winver)" }, pass: "Có lệnh kiểm tra.", fail: "Ghi lệnh kiểm tra như git --version hoặc winver." },
        { id: "account", label: "Tài khoản", weight: 1, check: { kind: "anyKeyword", keywords: ["pro", "tài khoản", "max", "team"] }, pass: "Đã xét tài khoản.", fail: "Xác nhận tài khoản đủ điều kiện." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Kết luận: máy đạt yêu cầu (Windows 11 mới hơn bản 1809, 8 GB > 4 GB RAM, x64).\nChọn: native Windows, vì dự án chủ yếu chạy trên Windows và không cần sandbox.\nCần cài: Git for Windows (giữ mặc định) để có Git Bash — Claude Code sẽ dùng Bash cho các script.\nKiểm tra: mở PowerShell, gõ git --version thấy số phiên bản; winver để xác nhận bản Windows.\nTài khoản: gói Pro đủ điều kiện dùng Claude Code.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Yêu cầu: macOS 13.0+, Windows 10 1809+, Ubuntu 20.04+, Debian 10+, Alpine 3.19+; 4 GB RAM; x64/ARM64; internet.",
        "Windows: native (PowerShell/CMD), WSL 2 (có sandbox), WSL 1 (khi không có WSL 2).",
        "Git for Windows tuỳ chọn: có thì dùng Bash, không thì dùng PowerShell.",
        "Cần gói Pro, Max, Ultra, Team, Enterprise hoặc Console; gói miễn phí không gồm Claude Code.",
        "Chưa quen terminal: có thể dùng ứng dụng desktop.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chuẩn bị máy của bạn (hoặc máy của một đồng nghiệp) để sẵn sàng cài Claude Code ở bài sau.",
      tasks: [
        "Kiểm tra và ghi lại: hệ điều hành và phiên bản, RAM, kiến trúc bộ xử lý.",
        "Nếu dùng Windows: quyết định native hay WSL và cài Git for Windows nếu cần.",
        "Chạy git --version và ghi kết quả.",
        "Xác nhận gói tài khoản đang dùng.",
      ],
      deliverable: "Bảng kiểm tra môi trường: Hạng mục | Yêu cầu | Máy của tôi | Đạt/Chưa đạt.",
      checklist: ["Mọi hạng mục đều có số liệu thực tế", "Đã chọn môi trường (nếu là Windows)", "Có kết quả git --version"],
    },
  ],
};
