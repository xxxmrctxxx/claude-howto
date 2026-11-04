import type { Lesson } from "@/lib/types/content";

const QS = "https://code.claude.com/docs/en/quickstart";

export const lessonMoDuAn: Lesson = {
  id: "ch05-l06",
  chapterId: "ch05",
  slug: "mo-du-an",
  title: "Mở dự án",
  subtitle: "Mở Claude Code ở đúng thư mục gốc, hiểu hộp thoại tin cậy, làm quen dự án mới và quay lại hội thoại cũ.",
  level: "beginner",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Mở Claude Code ở thư mục gốc dự án và hiểu phạm vi file Claude được làm việc." },
    { id: "o2", text: "Hiểu hộp thoại tin cậy thư mục và vì sao không nên mở Claude Code ở thư mục nhà." },
    { id: "o3", text: "Làm quen dự án mới: hỏi tổng quan trước, dùng /init để tạo CLAUDE.md khởi đầu." },
    { id: "o4", text: "Chuẩn bị lưới an toàn bằng git trước khi để Claude sửa, và quay lại hội thoại với claude -c, claude -r." },
  ],
  concepts: [
    { id: "project-root", label: "Thư mục gốc dự án" },
    { id: "scope", label: "Phạm vi làm việc" },
    { id: "trust-dialog", label: "Hộp thoại tin cậy thư mục" },
    { id: "home-dir", label: "Không mở ở thư mục nhà" },
    { id: "orientation", label: "Làm quen dự án mới" },
    { id: "init", label: "/init" },
    { id: "claude-md", label: "CLAUDE.md" },
    { id: "git-safety", label: "Lưới an toàn bằng git" },
    { id: "resume", label: "Tiếp tục hội thoại" },
    { id: "initial-prompt", label: "Mở kèm yêu cầu đầu tiên" },
  ],
  hints: [
    "Thư mục gốc thường là nơi có README, package.json hoặc thư mục .git.",
    "Lần đầu mở một thư mục, Claude Code hỏi bạn có tin cậy thư mục đó không.",
    "Commit trước khi để Claude sửa: bạn luôn có điểm quay lại.",
  ],
  sources: [
    { label: "Claude Code — Quickstart: Start your first session, Ask your first question, Essential commands", href: QS },
    { label: "Claude Code — Security: trust verification, working directory boundary", href: "https://code.claude.com/docs/en/security" },
    { label: "Claude Code — How Claude remembers your project (CLAUDE.md, /init)", href: "https://code.claude.com/docs/en/memory" },
    { label: "Claude Code — How Claude Code works: sessions", href: "https://code.claude.com/docs/en/how-claude-code-works" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude Code làm việc **trong thư mục bạn mở nó**. Vì vậy trước khi gõ `claude`, hãy `cd` vào **thư mục gốc dự án** — nơi thường có README, package.json hoặc thư mục `.git`. Claude đọc được file trong thư mục đó và các thư mục con; ở chế độ Manual, công cụ file của Claude **hỏi bạn trước** khi đọc hay ghi ra ngoài thư mục này.",
        "Lần đầu mở Claude Code trong một thư mục chưa tin cậy, bạn thấy **hộp thoại tin cậy** (workspace trust). Nó bảo vệ bạn khỏi file cấu hình do người khác commit vào dự án. Chỉ tin cậy thư mục bạn biết nguồn gốc. Nếu mở ngay ở **thư mục nhà**, lựa chọn tin cậy chỉ giữ trong phiên đó và hỏi lại mỗi lần — tài liệu khuyên mở từ thư mục dự án.",
        "Với dự án mới, đừng giao việc sửa ngay. Hãy để Claude **khám phá trước**: hỏi dự án làm gì, dùng công nghệ gì, cấu trúc thư mục ra sao. Sau đó gõ `/init` để Claude phân tích dự án và tạo **CLAUDE.md** khởi đầu (lệnh build, test, quy ước); nếu đã có CLAUDE.md, `/init` đề xuất cải tiến thay vì ghi đè.",
        "Trước khi Claude sửa, kiểm tra `git status`: cây làm việc sạch (đã commit) nghĩa là bạn có **điểm quay lại**. Lần sau quay lại dự án: `claude -c` tiếp tục hội thoại gần nhất trong thư mục, `claude -r` chọn hội thoại cũ, `claude \"việc cần làm\"` mở phiên kèm yêu cầu đầu tiên.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Gọi thợ sửa máy biến áp: bạn dẫn họ đến đúng trạm (thư mục gốc), không mở cửa cả khu công nghiệp (thư mục nhà). Thợ mới đến thì xem sơ đồ, hồ sơ trạm trước rồi mới tháo lắp (khám phá trước). Và bạn chụp ảnh hiện trạng trước khi họ làm (commit) để có gì còn đối chiếu.",
      },
      terms: [
        { term: "Thư mục gốc (project root)", definition: "Thư mục cao nhất của dự án, chứa README, file cấu hình và .git." },
        { term: "Workspace trust", definition: "Hộp thoại hỏi bạn có tin cậy thư mục trước khi Claude Code dùng cấu hình trong đó." },
        { term: "CLAUDE.md", definition: "File hướng dẫn dự án mà Claude đọc ở đầu mỗi phiên." },
        { term: "Working tree clean", definition: "git không thấy thay đổi chưa commit — trạng thái an toàn để bắt đầu." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: mở Claude Code ở đâu?",
      infographic: {
        kind: "compare",
        columns: [
          { title: "Thư mục nhà (~)", tone: "bad", items: ["Phạm vi quá rộng: tài liệu cá nhân, ảnh, mọi dự án", "Lựa chọn tin cậy không được lưu, hỏi lại mỗi lần", "Dễ sửa nhầm file không liên quan"] },
          { title: "Thư mục gốc dự án", tone: "good", items: ["Thấy đủ README, cấu hình, mã nguồn, test", "Tin cậy được lưu cho thư mục này", "Đúng nơi có .git để xem và hoàn tác thay đổi"] },
          { title: "Thư mục con sâu (src/components)", tone: "neutral", items: ["Hợp khi chỉ làm một phần của dự án lớn", "Ở chế độ Manual, đọc file bên ngoài sẽ phải xin phép", "Dễ thiếu ngữ cảnh như cấu hình test"] },
        ],
      },
      caption: "Mặc định: mở ở thư mục gốc dự án.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: quy trình mở một dự án",
      mermaid: `flowchart TD
  A["cd vào thư mục gốc dự án"] --> B["ls và đọc README"]
  B --> C{"git status sạch?"}
  C -->|"Chưa"| D["Commit thay đổi đang dở"]
  D --> E
  C -->|"Rồi"| E["Gõ claude"]
  E --> F{"Lần đầu ở thư mục này?"}
  F -->|"Có"| G["Hộp thoại tin cậy: chỉ đồng ý nếu biết nguồn gốc"]
  F -->|"Không"| H
  G --> H["Hỏi tổng quan: dự án làm gì, chạy thế nào"]
  H --> I["/init để tạo CLAUDE.md khởi đầu"]`,
      caption: "Khám phá trước, sửa sau; luôn có điểm quay lại bằng git.",
      alt: "Lưu đồ: cd vào thư mục gốc, xem README, kiểm tra git status; nếu chưa sạch thì commit trước. Gõ claude; lần đầu ở thư mục thì trả lời hộp thoại tin cậy. Sau đó hỏi tổng quan dự án và chạy /init để tạo CLAUDE.md.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: buổi đầu với dự án",
      bad: {
        label: "Mở sai chỗ, sửa ngay",
        content: "~$ claude\n> sửa lại trang web cho đẹp",
        notes: ["Mở ở thư mục nhà: Claude không biết “trang web” là dự án nào.", "Chưa có điểm quay lại bằng git.", "Yêu cầu mơ hồ, chưa hiểu dự án đã sửa."],
      },
      good: {
        label: "Đúng chỗ, khám phá trước",
        content: "~$ cd ~/du-an/web-loi-qa\n~/du-an/web-loi-qa$ git status   # working tree clean\n~/du-an/web-loi-qa$ claude\n> Dự án này làm gì, chạy thử thế nào, cấu trúc thư mục ra sao? Chưa sửa gì cả.",
        notes: ["Đúng thư mục gốc, có git sạch.", "Câu hỏi đầu chỉ để hiểu dự án."],
      },
      takeaway: "Đúng thư mục → git sạch → hỏi tổng quan → mới giao việc.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: mở dự án web-loi-qa",
      sim: {
        kind: "terminal",
        preset: "claude-project",
        steps: [
          { instruction: "Đi vào thư mục gốc dự án du-an/web-loi-qa.", hint: "cd du-an/web-loi-qa", check: { kind: "cwd", path: "~/du-an/web-loi-qa", label: "Đang ở thư mục gốc dự án" } },
          { instruction: "Liệt kê tất cả file, kể cả file ẩn (như .gitignore).", hint: "ls -a", check: { kind: "usedCommand", command: "ls -a", label: "Đã dùng ls -a" } },
          { instruction: "Đọc README để biết dự án làm gì.", hint: "cat README.md", check: { kind: "usedCommand", command: "cat README.md", label: "Đã đọc README.md" } },
          { instruction: "Kiểm tra git có sạch không trước khi để Claude sửa.", hint: "git status", check: { kind: "usedCommand", command: "git status", label: "Đã kiểm tra git status" } },
          { instruction: "Mở Claude Code ngay tại thư mục gốc.", hint: "claude", check: { kind: "lastCommand", command: "claude", label: "Đã gõ claude" } },
        ],
      },
      intro: "Terminal MÔ PHỎNG với một dự án mẫu trong ~/du-an/web-loi-qa. Lệnh `claude` ở đây chỉ in giải thích, không chạy Claude thật.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: buổi đầu với một dự án",
      steps: [
        { title: "Vào thư mục gốc và kiểm tra git", detail: "Nếu git status báo có thay đổi chưa commit, commit trước để có điểm quay lại.", code: { lang: "bash", content: "cd ~/du-an/web-loi-qa\ngit status" } },
        { title: "Mở Claude Code", detail: "Lần đầu ở thư mục này, trả lời hộp thoại tin cậy — chỉ đồng ý khi bạn biết nguồn gốc dự án.", code: { lang: "bash", content: "claude" } },
        { title: "Hỏi tổng quan", detail: "Claude tự đọc file khi cần; bạn không phải dán file vào.", code: { lang: "text", content: "Dự án này làm gì? Dùng công nghệ gì? Điểm bắt đầu chạy ở đâu? Giải thích cấu trúc thư mục." } },
        { title: "Tạo CLAUDE.md khởi đầu", detail: "Claude phân tích dự án và ghi lệnh build, test, quy ước. Đọc lại và bổ sung điều Claude không tự phát hiện được.", code: { lang: "text", content: "/init" } },
        { title: "Lần sau quay lại", detail: "Tiếp tục hội thoại gần nhất, chọn hội thoại cũ, hoặc mở phiên kèm yêu cầu đầu tiên.", code: { lang: "bash", content: "claude -c\nclaude -r\nclaude \"chạy test và tóm tắt lỗi\"" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Bạn vừa nhận dự án ~/du-an/bao-cao-qa từ đồng nghiệp và chưa biết gì về nó. Viết các lệnh terminal và 2 tin nhắn đầu tiên gửi Claude Code cho buổi làm quen, theo đúng quy trình: đúng thư mục, lưới an toàn git, khám phá trước, tạo CLAUDE.md.",
      placeholder: "Lệnh terminal:\n…\nTin nhắn 1: …\nTin nhắn 2: …",
      rubric: [
        { id: "cd", label: "Vào thư mục gốc", weight: 1, check: { kind: "regex", pattern: "\\bcd\\s+\\S*bao-cao-qa" }, pass: "Có cd vào dự án.", fail: "Bắt đầu bằng cd ~/du-an/bao-cao-qa." },
        { id: "git", label: "Kiểm tra git", weight: 1, check: { kind: "regex", pattern: "git status" }, pass: "Có git status.", fail: "Kiểm tra git status trước khi mở Claude." },
        { id: "claude", label: "Mở Claude Code", weight: 1, check: { kind: "regex", pattern: "^\\s*(\\S*\\$\\s*)?claude\\s*$" }, pass: "Có lệnh claude.", fail: "Gõ claude trên một dòng riêng sau khi vào thư mục." },
        { id: "explore", label: "Hỏi tổng quan, chưa sửa", weight: 1, check: { kind: "anyKeyword", keywords: ["làm gì", "tổng quan", "cấu trúc", "chưa sửa", "giải thích"] }, pass: "Có câu hỏi khám phá.", fail: "Tin nhắn đầu nên hỏi dự án làm gì, cấu trúc thế nào." },
        { id: "init", label: "Tạo CLAUDE.md", weight: 1, check: { kind: "regex", pattern: "/init" }, pass: "Có /init.", fail: "Dùng /init để tạo CLAUDE.md khởi đầu." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Lệnh terminal:\ncd ~/du-an/bao-cao-qa\ngit status\nclaude\nTin nhắn 1: Dự án này làm gì, dùng công nghệ gì và chạy thử thế nào? Giải thích cấu trúc thư mục. Chưa sửa file nào.\nTin nhắn 2: /init",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Mở Claude Code ở thư mục gốc dự án; Claude làm việc trong thư mục đó và thư mục con.",
        "Hộp thoại tin cậy xuất hiện ở thư mục mới: chỉ đồng ý khi biết nguồn gốc. Không mở ở thư mục nhà.",
        "Khám phá trước khi sửa; /init tạo CLAUDE.md khởi đầu (không ghi đè nếu đã có).",
        "git status sạch trước khi để Claude sửa = có điểm quay lại.",
        "claude -c tiếp tục, claude -r chọn hội thoại cũ, claude \"việc\" mở kèm yêu cầu đầu.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một thư mục công việc thật của bạn (dự án code, thư mục báo cáo, bộ script Excel…).",
      tasks: [
        "Nếu thư mục chưa có git, chạy git init và commit lần đầu.",
        "Mở Claude Code ở thư mục gốc, hỏi tổng quan và cấu trúc.",
        "Chạy /init, đọc CLAUDE.md được tạo và sửa những chỗ chưa đúng.",
        "Thoát (/exit), rồi mở lại bằng claude -c để thấy hội thoại được tiếp tục.",
      ],
      deliverable: "File CLAUDE.md đã chỉnh sửa và ghi chú 3 điều bạn học được về dự án từ câu trả lời của Claude.",
      checklist: ["Mở đúng thư mục gốc", "Có commit trước khi Claude sửa", "CLAUDE.md có lệnh chạy/kiểm tra đúng với dự án"],
    },
  ],
};
