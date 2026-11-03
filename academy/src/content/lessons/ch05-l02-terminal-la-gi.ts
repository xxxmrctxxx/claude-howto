import type { Lesson } from "@/lib/types/content";

const TG = "https://code.claude.com/docs/en/terminal-guide";

export const lessonTerminalLaGi: Lesson = {
  id: "ch05-l02",
  chapterId: "ch05",
  slug: "terminal-la-gi",
  title: "Terminal là gì?",
  subtitle: "Làm quen cửa sổ gõ lệnh: mở terminal, biết mình đang ở đâu, đi lại giữa các thư mục và xem file.",
  level: "beginner",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích terminal, shell, dấu nhắc lệnh và thư mục làm việc." },
    { id: "o2", text: "Mở terminal trên macOS, Linux, Windows và nhận ra mình đang ở PowerShell hay CMD." },
    { id: "o3", text: "Dùng các lệnh pwd, ls, cd, mkdir, cat và hiểu đường dẫn (~, .., tương đối, tuyệt đối)." },
    { id: "o4", text: "Áp dụng thói quen an toàn: kiểm tra vị trí trước khi chạy lệnh, dùng Tab và phím mũi tên, dừng lệnh bằng Ctrl+C." },
  ],
  concepts: [
    { id: "terminal", label: "Terminal" },
    { id: "shell", label: "Shell: Bash, Zsh, PowerShell, CMD" },
    { id: "prompt-sign", label: "Dấu nhắc lệnh" },
    { id: "working-dir", label: "Thư mục làm việc" },
    { id: "open-terminal", label: "Cách mở terminal" },
    { id: "nav-commands", label: "Lệnh di chuyển: pwd, ls, cd" },
    { id: "file-commands", label: "Lệnh tạo và xem: mkdir, touch, cat" },
    { id: "paths", label: "Đường dẫn" },
    { id: "shortcuts", label: "Phím tắt terminal" },
    { id: "safety", label: "Thói quen an toàn" },
  ],
  hints: [
    "Không biết mình đang ở đâu? Gõ `pwd` (print working directory).",
    "`cd ..` đi lên thư mục cha; `cd ~` về thư mục nhà.",
    "Tên thư mục có dấu cách cần đặt trong ngoặc kép: `cd \"Bao cao\"`.",
  ],
  sources: [
    { label: "Claude Code — Terminal guide for new users (mở terminal, dán lệnh, PowerShell và CMD)", href: TG },
    { label: "Claude Code — Advanced setup: system requirements (shell được hỗ trợ)", href: "https://code.claude.com/docs/en/setup" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Terminal** là cửa sổ để bạn ra lệnh cho máy tính bằng chữ thay vì bấm chuột. Chương trình đọc và chạy lệnh bạn gõ gọi là **shell**. Claude Code hỗ trợ các shell **Bash**, **Zsh** (mặc định trên macOS), **PowerShell** và **CMD** (trên Windows).",
        "Đầu mỗi dòng có **dấu nhắc lệnh** (prompt) cho biết máy sẵn sàng nhận lệnh. Trên Windows, dấu nhắc `PS C:\\Users\\Lan>` nghĩa là bạn đang ở **PowerShell**; `C:\\Users\\Lan>` không có `PS` là **CMD** — hai chương trình dùng lệnh khác nhau.",
        "Terminal luôn “đứng” ở một thư mục gọi là **thư mục làm việc**. Lệnh `pwd` in thư mục đó, `ls` liệt kê file bên trong, `cd ten-thu-muc` đi vào thư mục con, `cd ..` đi lên thư mục cha, `cd ~` về thư mục nhà. `mkdir` tạo thư mục, `cat` xem nội dung file. (Trong CMD, liệt kê bằng `dir`, xem file bằng `type`.)",
        "Đây là kỹ năng nền cho Claude Code: bạn mở terminal **ở đúng thư mục dự án** rồi mới gõ `claude`, vì Claude Code làm việc trong thư mục bạn đang đứng.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Terminal giống người thủ kho bạn ra lệnh qua bộ đàm: “Anh đang ở kho nào?” (pwd), “Kho có những kệ gì?” (ls), “Sang kệ B” (cd), “Đặt thêm một thùng mới” (mkdir), “Đọc nhãn thùng này” (cat). Ra lệnh sai kho là lấy nhầm hàng — nên luôn hỏi vị trí trước.",
      },
      terms: [
        { term: "Shell", definition: "Chương trình đọc và chạy lệnh bạn gõ (Bash, Zsh, PowerShell, CMD)." },
        { term: "Prompt (dấu nhắc)", definition: "Phần chữ ở đầu dòng cho biết terminal đang chờ lệnh, thường kèm thư mục hiện tại." },
        { term: "Working directory", definition: "Thư mục làm việc: nơi terminal đang đứng; lệnh chạy tương đối với thư mục này." },
        { term: "Đường dẫn tuyệt đối / tương đối", definition: "Tuyệt đối bắt đầu từ gốc (`/home/lan/du-an`); tương đối tính từ thư mục hiện tại (`du-an/src`)." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: mở terminal trên từng hệ điều hành",
      infographic: {
        kind: "table",
        headers: ["Hệ điều hành", "Cách mở", "Dấu nhắc thường thấy", "Dán lệnh"],
        rows: [
          ["macOS", "Cmd + Space, gõ “Terminal”, Enter", "lan@MacBook ~ %", "Cmd + V"],
          ["Linux", "Ctrl + Alt + T hoặc tìm “Terminal”", "lan@may:~$", "Ctrl + Shift + V"],
          ["Windows (PowerShell)", "Win + X, chọn Windows PowerShell hoặc Terminal", "PS C:\\Users\\Lan>", "Ctrl + V hoặc chuột phải"],
          ["Windows (CMD)", "Tìm “Command Prompt”", "C:\\Users\\Lan>", "Ctrl + V hoặc chuột phải"],
        ],
      },
      caption: "Theo hướng dẫn terminal chính thức của Claude Code. Dấu nhắc thực tế khác nhau tuỳ tên máy và cấu hình.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: di chuyển trong cây thư mục",
      mermaid: `flowchart TD
  H["~ = /home/hocvien (thư mục nhà)"] -->|"cd du-an-qa"| D["~/du-an-qa"]
  H -->|"cd tai-lieu"| T["~/tai-lieu"]
  D -->|"cd .."| H
  D --> F1["bao-cao.md (cat bao-cao.md)"]
  D --> F2["du-lieu.csv (cat du-lieu.csv)"]
  D -->|"mkdir thang-11"| N["~/du-an-qa/thang-11"]`,
      caption: "`cd` đi xuống thư mục con, `cd ..` đi lên, `mkdir` tạo nhánh mới, `cat` đọc file.",
      alt: "Cây thư mục: thư mục nhà có hai thư mục con du-an-qa và tai-lieu. Từ thư mục nhà, cd du-an-qa đi xuống; từ du-an-qa, cd chấm chấm quay lên. du-an-qa chứa bao-cao.md và du-lieu.csv đọc bằng cat; mkdir thang-11 tạo thư mục con mới.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: chạy lệnh khi chưa biết mình ở đâu",
      bad: {
        label: "Chạy lệnh ngay",
        content: "rm -r bao-cao",
        notes: ["Không biết đang đứng ở thư mục nào.", "Có thể xoá nhầm thư mục “bao-cao” của dự án khác.", "Lệnh xoá trong terminal không vào thùng rác."],
      },
      good: {
        label: "Kiểm tra trước, chạy sau",
        content: "pwd\nls\ncd ~/du-an-qa\nls\nrm -r bao-cao-nhap",
        notes: ["Biết chắc vị trí trước khi chạy lệnh nguy hiểm.", "Xem danh sách để chắc chắn tên đúng.", "Đặt tên rõ ràng để không nhầm."],
      },
      takeaway: "Trước lệnh có thể gây mất dữ liệu: `pwd` và `ls` để xác nhận vị trí và tên.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: những lệnh terminal đầu tiên",
      sim: {
        kind: "terminal",
        preset: "home-basic",
        steps: [
          { instruction: "Xem bạn đang ở thư mục nào.", hint: "pwd", check: { kind: "usedCommand", command: "pwd", label: "Đã dùng pwd" } },
          { instruction: "Liệt kê nội dung thư mục hiện tại.", hint: "ls", check: { kind: "usedCommand", command: "ls", label: "Đã dùng ls" } },
          { instruction: "Đi vào thư mục du-an-qa.", hint: "cd du-an-qa", check: { kind: "cwd", path: "~/du-an-qa", label: "Đang ở ~/du-an-qa" } },
          { instruction: "Xem nội dung file du-lieu.csv.", hint: "cat du-lieu.csv", check: { kind: "lastCommand", command: "cat", label: "Đã xem file bằng cat" } },
          { instruction: "Tạo thư mục thang-11 bên trong du-an-qa.", hint: "mkdir thang-11", check: { kind: "dir", path: "~/du-an-qa/thang-11", label: "Có thư mục thang-11" } },
          { instruction: "Quay lên thư mục cha (thư mục nhà).", hint: "cd ..", check: { kind: "cwd", path: "~", label: "Đã về thư mục nhà" } },
        ],
      },
      intro: "Đây là terminal MÔ PHỎNG trên trình duyệt — không đụng tới máy thật. Làm lần lượt từng nhiệm vụ; bấm “Gợi ý lệnh” nếu bí.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: lần đầu mở terminal",
      steps: [
        { title: "Mở terminal", detail: "macOS: Cmd + Space, gõ Terminal. Linux: Ctrl + Alt + T. Windows: Win + X → Windows PowerShell (hoặc Terminal)." },
        { title: "Kiểm tra vị trí", detail: "Gõ `pwd` rồi Enter. Thường bạn bắt đầu ở thư mục nhà.", code: { lang: "bash", content: "pwd" } },
        { title: "Xem có gì", detail: "`ls` liệt kê file và thư mục. `ls -a` hiện cả file ẩn (tên bắt đầu bằng dấu chấm). Trong CMD dùng `dir`.", code: { lang: "bash", content: "ls\nls -a" } },
        { title: "Di chuyển", detail: "`cd ten-thu-muc` để vào, `cd ..` để lên, `cd ~` về nhà. Gõ vài chữ đầu rồi nhấn Tab để terminal tự điền tên.", code: { lang: "bash", content: "cd Documents\ncd ..\ncd ~" } },
        { title: "Dùng lại và dừng lệnh", detail: "Phím ↑ gọi lại lệnh trước. Ctrl + C dừng lệnh đang chạy. `clear` xoá màn hình cho gọn." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết chuỗi lệnh (macOS/Linux) để: (1) kiểm tra vị trí hiện tại, (2) đi vào thư mục Documents/bao-cao, (3) liệt kê file, (4) tạo thư mục thang-11, (5) xem nội dung file tong-hop.csv. Ghi chú ngắn sau mỗi lệnh.",
      placeholder: "Bước 1: … (kiểm tra vị trí)\nBước 2: … (đi vào thư mục)\nBước 3: …",
      rubric: [
        { id: "pwd", label: "Kiểm tra vị trí", weight: 1, check: { kind: "regex", pattern: "\\bpwd\\b" }, pass: "Có pwd.", fail: "Bắt đầu bằng pwd để biết mình đang ở đâu." },
        { id: "cd", label: "Di chuyển đúng thư mục", weight: 1, check: { kind: "regex", pattern: "\\bcd\\s+[~./a-z0-9_-]*bao-cao" }, pass: "Có cd vào thư mục bao-cao.", fail: "Dùng cd Documents/bao-cao (hoặc cd ~/Documents/bao-cao)." },
        { id: "ls", label: "Liệt kê file", weight: 1, check: { kind: "regex", pattern: "\\bls\\b" }, pass: "Có ls.", fail: "Dùng ls để xem file." },
        { id: "mkdir", label: "Tạo thư mục", weight: 1, check: { kind: "regex", pattern: "\\bmkdir\\s+thang-11" }, pass: "Có mkdir thang-11.", fail: "Dùng mkdir thang-11." },
        { id: "cat", label: "Xem file", weight: 1, check: { kind: "regex", pattern: "\\bcat\\s+tong-hop\\.csv" }, pass: "Có cat tong-hop.csv.", fail: "Dùng cat tong-hop.csv." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "pwd                      # xem đang ở đâu\ncd ~/Documents/bao-cao   # vào thư mục báo cáo\nls                       # liệt kê file\nmkdir thang-11           # tạo thư mục tháng 11\ncat tong-hop.csv         # xem nội dung file tổng hợp",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Terminal là cửa sổ gõ lệnh; shell (Bash, Zsh, PowerShell, CMD) là chương trình chạy lệnh.",
        "Dấu nhắc có `PS` là PowerShell; không có `PS` là CMD.",
        "pwd (đang ở đâu), ls (có gì), cd (đi đâu), mkdir (tạo thư mục), cat (xem file).",
        "`~` là thư mục nhà, `..` là thư mục cha; tên có dấu cách đặt trong ngoặc kép.",
        "Trước lệnh nguy hiểm: pwd và ls để xác nhận; Tab tự điền, ↑ gọi lại lệnh, Ctrl + C dừng lệnh.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Dùng terminal trên máy của bạn trong 15 phút, chỉ với các lệnh an toàn (không xoá).",
      tasks: [
        "Mở terminal, dùng pwd và ls để vẽ lại cây thư mục nhà của bạn (2 cấp).",
        "Tạo thư mục hoc-claude-code trong Documents bằng mkdir.",
        "Dùng cd và Tab để đi vào thư mục đó, rồi pwd để xác nhận.",
      ],
      deliverable: "Ảnh chụp hoặc ghi chép: các lệnh đã gõ và kết quả của pwd ở cuối.",
      checklist: ["Biết đang dùng shell nào (Zsh, Bash, PowerShell hay CMD)", "Tạo được thư mục hoc-claude-code", "Dùng Tab để tự điền tên ít nhất một lần"],
    },
  ],
};
