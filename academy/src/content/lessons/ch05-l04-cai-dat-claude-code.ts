import type { Lesson } from "@/lib/types/content";

const SETUP = "https://code.claude.com/docs/en/setup";

export const lessonCaiDatClaudeCode: Lesson = {
  id: "ch05-l04",
  chapterId: "ch05",
  slug: "cai-dat-claude-code",
  title: "Cài đặt Claude Code",
  subtitle: "Chọn đúng lệnh cài cho máy của bạn, kiểm tra cài đặt, sửa lỗi “command not found” và giữ Claude Code luôn cập nhật.",
  level: "beginner",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chọn và chạy đúng lệnh cài cho hệ điều hành và shell của mình (native, Homebrew, WinGet)." },
    { id: "o2", text: "Xác minh cài đặt bằng `claude --version` và `claude doctor`; sửa lỗi không tìm thấy lệnh do PATH." },
    { id: "o3", text: "Hiểu cơ chế cập nhật: native tự cập nhật, Homebrew/WinGet cập nhật thủ công, `claude update`, kênh latest và stable." },
    { id: "o4", text: "Cài đặt an toàn: chỉ dùng lệnh từ tài liệu chính thức, không dùng sudo với npm, đọc kỹ thông báo lỗi." },
  ],
  concepts: [
    { id: "native-install", label: "Cài native (khuyến nghị)" },
    { id: "windows-install", label: "Cài trên Windows: PowerShell và CMD" },
    { id: "package-managers", label: "Homebrew, WinGet, apt/dnf/apk" },
    { id: "npm-install", label: "Cài bằng npm" },
    { id: "verify-install", label: "Kiểm tra cài đặt" },
    { id: "path-fix", label: "Sửa PATH" },
    { id: "doctor", label: "claude doctor" },
    { id: "updates", label: "Cập nhật" },
    { id: "release-channel", label: "Kênh latest và stable" },
    { id: "install-safety", label: "Cài đặt an toàn" },
  ],
  hints: [
    "Lệnh cài không hiện tiến trình — cứ để cửa sổ mở và chờ.",
    "Cài xong, mở **cửa sổ terminal mới** rồi mới chạy `claude --version`.",
    "Lỗi `command not found: claude` thường do thư mục cài (~/.local/bin) chưa nằm trong PATH.",
  ],
  sources: [
    { label: "Claude Code — Advanced setup: Install, Verify, Update (đối chiếu 03/11/2026)", href: SETUP },
    { label: "Claude Code — Quickstart: Step 1 Install", href: "https://code.claude.com/docs/en/quickstart" },
    { label: "Claude Code — Terminal guide: Troubleshooting (PATH, PowerShell/CMD)", href: "https://code.claude.com/docs/en/terminal-guide" },
    { label: "Repo claude-howto — Module 10 CLI (cách cài được khuyến nghị)", href: "https://github.com/xxxmrctxxx/claude-howto/blob/main/10-cli/README.md" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Cách được khuyến nghị là **cài native**: một lệnh tải và chạy trình cài từ claude.ai. macOS, Linux, WSL: `curl -fsSL https://claude.ai/install.sh | bash`. Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`. Windows CMD có lệnh riêng (xem phần hướng dẫn). Bản native **tự cập nhật trong nền**.",
        "Cách khác: **Homebrew** `brew install --cask claude-code` (macOS), **WinGet** `winget install Anthropic.ClaudeCode` (Windows), hoặc apt/dnf/apk trên Linux. Các cách này **không tự cập nhật** mặc định — bạn tự chạy lệnh nâng cấp. npm cũng dùng được (cần Node.js 22+), nhưng **không dùng sudo**.",
        "Lệnh cài **không hiện tiến trình**. Khi xong, **mở cửa sổ terminal mới** và chạy `claude --version`: thấy số phiên bản kèm chữ `(Claude Code)` là thành công. Nếu báo `command not found` hoặc `not recognized`, thư mục cài chưa nằm trong **PATH** — trình cài in sẵn lệnh sửa ở mục Setup notes. `claude doctor` in chẩn đoán chi tiết mà không mở phiên làm việc.",
        "Cập nhật: bản native tự kiểm tra khi khởi động; muốn cập nhật ngay thì chạy `claude update`. Có hai **kênh**: `latest` (mặc định, có tính năng mới ngay) và `stable` (thường cũ hơn khoảng một tuần, bỏ qua bản có lỗi lớn).",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Cài native giống đăng ký nhận báo giao tận nhà: số mới tự đến. Cài qua Homebrew/WinGet giống mua báo ở sạp: bạn phải tự ra sạp lấy số mới. Còn mua báo từ người lạ ven đường (lệnh cài từ trang lạ) thì không biết bên trong có gì.",
      },
      terms: [
        { term: "Native installer", definition: "Trình cài chính thức tải trực tiếp từ claude.ai; tự cập nhật." },
        { term: "PATH", definition: "Danh sách thư mục mà shell tìm lệnh. Lệnh nằm ngoài PATH sẽ báo “not found”." },
        { term: "Package manager", definition: "Trình quản lý gói như Homebrew, WinGet, apt — cài và nâng cấp phần mềm bằng lệnh." },
        { term: "Release channel", definition: "Kênh phát hành: latest (mới nhất) hoặc stable (ổn định, chậm khoảng một tuần)." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: các cách cài và cách cập nhật",
      infographic: {
        kind: "table",
        headers: ["Cách cài", "Lệnh", "Tự cập nhật?", "Cập nhật thủ công"],
        rows: [
          ["Native — macOS, Linux, WSL", "curl -fsSL https://claude.ai/install.sh | bash", "Có", "claude update"],
          ["Native — Windows PowerShell", "irm https://claude.ai/install.ps1 | iex", "Có", "claude update"],
          ["Homebrew (macOS)", "brew install --cask claude-code", "Không (mặc định)", "brew upgrade claude-code"],
          ["WinGet (Windows)", "winget install Anthropic.ClaudeCode", "Không (mặc định)", "winget upgrade Anthropic.ClaudeCode"],
          ["npm (cần Node.js 22+)", "npm install -g @anthropic-ai/claude-code", "Có (nếu thư mục npm ghi được)", "npm install -g @anthropic-ai/claude-code@latest"],
        ],
      },
      caption: "Đối chiếu trang Advanced setup ngày 03/11/2026. Ưu tiên cài native; không dùng sudo với npm.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: cài và kiểm tra",
      mermaid: `flowchart TD
  A["Chạy lệnh cài đúng với shell"] --> B["Chờ: lệnh không hiện tiến trình"]
  B --> C["Mở cửa sổ terminal MỚI"]
  C --> D["claude --version"]
  D -->|"In số phiên bản (Claude Code)"| E["Thành công: cd vào dự án rồi chạy claude"]
  D -->|"command not found / not recognized"| F["Sửa PATH theo Setup notes, mở terminal mới"]
  F --> D
  D -->|"Lỗi khác"| G["claude doctor hoặc trang Troubleshoot installation"]`,
      caption: "Luôn kiểm tra trong cửa sổ terminal mới để shell đọc lại PATH.",
      alt: "Lưu đồ: chạy lệnh cài, chờ, mở terminal mới, chạy claude --version. Nếu in số phiên bản thì thành công. Nếu báo không tìm thấy lệnh thì sửa PATH rồi kiểm tra lại. Nếu lỗi khác thì dùng claude doctor hoặc trang khắc phục sự cố.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: lệnh cài",
      bad: {
        label: "Lệnh không an toàn",
        content: "sudo npm install -g @anthropic-ai/claude-code\n# hoặc lệnh copy từ một blog lạ:\ncurl -fsSL https://claude-setup-free.example/install.sh | bash",
        notes: ["sudo với npm gây lỗi quyền và rủi ro bảo mật; Claude Code không tự cập nhật được.", "Chạy script từ tên miền lạ là trao quyền cho người lạ."],
      },
      good: {
        label: "Lệnh từ tài liệu chính thức",
        content: "curl -fsSL https://claude.ai/install.sh | bash\n# mở terminal mới\nclaude --version",
        notes: ["Tên miền chính thức claude.ai.", "Có bước kiểm tra kết quả."],
      },
      takeaway: "Chỉ chạy lệnh cài lấy từ code.claude.com; kiểm tra bằng `claude --version` trong terminal mới.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đối chiếu khẳng định với tài liệu chính thức",
      sim: {
        kind: "verify",
        sourceTitle: "Trích tài liệu Advanced setup của Claude Code (đối chiếu 03/11/2026)",
        sourceLines: [
          "macOS, Linux, WSL: curl -fsSL https://claude.ai/install.sh | bash",
          "The install command shows no progress while it downloads Claude Code.",
          "When the installer finishes, open a new terminal window and run claude --version.",
          "Run the install command from PowerShell or CMD. You do not need to run as Administrator.",
          "Native installations automatically update in the background.",
          "Homebrew installations do not auto-update.",
          "Do NOT use sudo npm install -g as this can lead to permission issues and security risks.",
        ],
        verdicts: [
          { id: "dung", label: "Đúng theo nguồn" },
          { id: "sai", label: "Sai theo nguồn" },
          { id: "khong-noi", label: "Nguồn không nói" },
        ],
        claims: [
          { id: "c1", text: "Trên Linux, lệnh cài native là curl -fsSL https://claude.ai/install.sh | bash.", verdict: "dung", why: "Dòng 1 ghi đúng lệnh này." },
          { id: "c2", text: "Lệnh cài hiện thanh phần trăm tiến trình.", verdict: "sai", why: "Dòng 2: lệnh không hiện tiến trình." },
          { id: "c3", text: "Trên Windows phải mở PowerShell bằng quyền Administrator.", verdict: "sai", why: "Dòng 4: không cần quyền Administrator." },
          { id: "c4", text: "Bản cài qua Homebrew tự cập nhật.", verdict: "sai", why: "Dòng 6: Homebrew không tự cập nhật." },
          { id: "c5", text: "Cài bằng npm giúp Claude Code chạy nhanh hơn.", verdict: "khong-noi", why: "Nguồn trích không nói gì về tốc độ." },
          { id: "c6", text: "Cài xong nên mở cửa sổ terminal mới rồi chạy claude --version.", verdict: "dung", why: "Dòng 3 ghi đúng như vậy." },
        ],
        note: "Thói quen này giúp bạn không làm theo hướng dẫn cũ hoặc sai trên mạng.",
      },
      intro: "Hướng dẫn cài trên mạng thường cũ hoặc sai. Đối chiếu từng khẳng định với đoạn trích tài liệu chính thức.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: cài và kiểm tra",
      steps: [
        { title: "macOS, Linux, WSL: chạy trình cài native", detail: "Dán vào terminal, Enter, rồi chờ đến khi thấy thông báo cài thành công.", code: { lang: "bash", content: "curl -fsSL https://claude.ai/install.sh | bash" } },
        { title: "Windows: chọn lệnh theo shell", detail: "Dấu nhắc có PS là PowerShell; không có PS là CMD. Không cần quyền Administrator.", code: { lang: "powershell", content: "# PowerShell\nirm https://claude.ai/install.ps1 | iex\n\n# CMD\ncurl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd" } },
        { title: "Mở terminal mới và kiểm tra", detail: "Thấy số phiên bản kèm (Claude Code) là thành công. `claude doctor` cho chẩn đoán chi tiết hơn.", code: { lang: "bash", content: "claude --version\nclaude doctor" } },
        {
          title: "Nếu báo command not found: sửa PATH",
          detail: "Chạy đúng lệnh trình cài in ở mục Setup notes. Với Zsh (mặc định trên macOS) và Bash trên Linux, tài liệu đưa ra lệnh sau; xong mở terminal mới.",
          code: { lang: "bash", content: "# Zsh (macOS)\necho 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.zshrc\nsource ~/.zshrc\n\n# Bash (Linux)\necho 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.bashrc\nsource ~/.bashrc" },
        },
        { title: "Giữ bản mới nhất", detail: "Native tự cập nhật; muốn cập nhật ngay: `claude update`. Homebrew: `brew upgrade claude-code`. WinGet: `winget upgrade Anthropic.ClaudeCode`.", code: { lang: "bash", content: "claude update" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Nhóm của bạn có 3 máy: MacBook (Zsh), laptop Windows 11 dùng PowerShell, máy Ubuntu. Viết hướng dẫn cài ngắn gọn cho cả nhóm: lệnh cài cho từng máy, cách kiểm tra cài đặt, cách xử lý khi báo không tìm thấy lệnh, và cách cập nhật.",
      placeholder: "MacBook: …\nWindows: …\nUbuntu: …\nKiểm tra: …\nNếu lỗi: …\nCập nhật: …",
      rubric: [
        { id: "sh", label: "Lệnh cho macOS/Linux", weight: 1, check: { kind: "regex", pattern: "claude\\.ai/install\\.sh" }, pass: "Có lệnh install.sh.", fail: "Thêm curl -fsSL https://claude.ai/install.sh | bash." },
        { id: "ps1", label: "Lệnh cho PowerShell", weight: 1, check: { kind: "regex", pattern: "claude\\.ai/install\\.ps1" }, pass: "Có lệnh install.ps1.", fail: "Thêm irm https://claude.ai/install.ps1 | iex." },
        { id: "verify", label: "Kiểm tra trong terminal mới", weight: 1, check: { kind: "allGroups", groups: [["claude --version"], ["terminal mới", "cửa sổ mới", "mở lại terminal"]] }, pass: "Có kiểm tra đúng cách.", fail: "Mở terminal mới rồi chạy claude --version." },
        { id: "path", label: "Xử lý PATH", weight: 1, check: { kind: "regex", pattern: "(path|setup notes|\\.local/bin)" }, pass: "Có cách sửa PATH.", fail: "Nêu cách sửa PATH khi báo command not found." },
        { id: "update", label: "Cập nhật", weight: 1, check: { kind: "regex", pattern: "(claude update|tu cap nhat|tự cập nhật)" }, pass: "Có cách cập nhật.", fail: "Nêu native tự cập nhật hoặc claude update." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "MacBook và Ubuntu: curl -fsSL https://claude.ai/install.sh | bash\nWindows (PowerShell, dấu nhắc có PS): irm https://claude.ai/install.ps1 | iex\nLệnh cài không hiện tiến trình, cứ chờ. Xong thì mở terminal mới, chạy claude --version — thấy số phiên bản kèm (Claude Code) là được.\nNếu báo command not found: chạy lệnh trong mục Setup notes để thêm ~/.local/bin vào PATH (Zsh: ~/.zshrc, Bash: ~/.bashrc), rồi mở terminal mới. Vẫn lỗi thì chạy claude doctor.\nCập nhật: bản native tự cập nhật trong nền; muốn cập nhật ngay thì chạy claude update.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Native (khuyến nghị): install.sh cho macOS/Linux/WSL, install.ps1 cho PowerShell, install.cmd cho CMD.",
        "Homebrew, WinGet: cài được nhưng không tự cập nhật mặc định; npm cần Node.js 22+, không dùng sudo.",
        "Kiểm tra: mở terminal mới, `claude --version`; chẩn đoán: `claude doctor`.",
        "“command not found”: thêm ~/.local/bin vào PATH theo Setup notes.",
        "Cập nhật: native tự cập nhật, `claude update` để cập nhật ngay; kênh latest (mặc định) và stable.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Cài Claude Code trên máy của bạn (đã kiểm tra môi trường ở bài trước).",
      tasks: [
        "Chọn lệnh cài đúng với hệ điều hành và shell; chỉ lấy lệnh từ code.claude.com.",
        "Cài, mở terminal mới, chạy claude --version và claude doctor.",
        "Nếu gặp lỗi, ghi lại nguyên văn thông báo và cách bạn đã sửa.",
      ],
      deliverable: "Nhật ký cài đặt: lệnh đã chạy, kết quả claude --version, các lỗi gặp và cách xử lý.",
      checklist: ["claude --version in ra số phiên bản", "Biết bản của mình có tự cập nhật hay không", "Không dùng sudo với npm"],
    },
  ],
};
