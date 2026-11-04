import type { Lesson } from "@/lib/types/content";

const QS = "https://code.claude.com/docs/en/quickstart";
const IM = "https://code.claude.com/docs/en/interactive-mode";

export const lessonLenhCoBan: Lesson = {
  id: "ch05-l09",
  chapterId: "ch05",
  slug: "lenh-co-ban",
  title: "Các lệnh cơ bản",
  subtitle: "Bộ lệnh và phím tắt dùng hằng ngày: lệnh shell để mở Claude Code, lệnh / trong phiên, và các phím dừng, tua lại, đổi chế độ.",
  level: "beginner",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Phân biệt lệnh chạy trong shell (claude, claude -p, -c, -r…) và lệnh trong phiên (bắt đầu bằng /)." },
    { id: "o2", text: "Quản lý hội thoại và context bằng /clear, /compact, /context, /rewind." },
    { id: "o3", text: "Dùng phím tắt cốt lõi: Esc, Esc Esc, Shift+Tab, Ctrl+C, Ctrl+D và các tiền tố /, !, @." },
    { id: "o4", text: "Chọn đúng lệnh cho tình huống thực tế và tra cứu thêm khi cần." },
  ],
  concepts: [
    { id: "shell-vs-session", label: "Lệnh shell và lệnh trong phiên" },
    { id: "print-mode", label: "claude -p" },
    { id: "continue-resume", label: "Tiếp tục hội thoại" },
    { id: "clear", label: "/clear" },
    { id: "compact", label: "/compact" },
    { id: "context-cmd", label: "/context" },
    { id: "model", label: "/model" },
    { id: "status-usage", label: "/status và /usage" },
    { id: "esc-keys", label: "Phím dừng và tua lại" },
    { id: "exit-keys", label: "Thoát Claude Code" },
    { id: "prefixes", label: "Tiền tố /, !, @, ?" },
    { id: "routine", label: "Thói quen một buổi làm việc" },
  ],
  hints: [
    "Gõ `/` để xem danh sách lệnh; gõ `?` khi ô nhập trống để xem phím tắt.",
    "`/clear` giữa các việc không liên quan; `/compact` khi muốn giữ mạch nhưng gọn context.",
    "Esc dừng ngay; Esc hai lần khi ô nhập trống mở menu tua lại.",
  ],
  sources: [
    { label: "Claude Code — Quickstart: Essential commands (shell và session)", href: QS },
    { label: "Claude Code — Interactive mode: keyboard shortcuts, quick commands (!, @, ?)", href: IM },
    { label: "Claude Code — How Claude Code works: context window, /compact, /context", href: "https://code.claude.com/docs/en/how-claude-code-works" },
    { label: "Claude Code — Best practices: /clear, /rewind, Esc", href: "https://code.claude.com/docs/en/best-practices" },
    { label: "Repo claude-howto — Module 01 Slash commands (bảng lệnh có sẵn)", href: "https://github.com/xxxmrctxxx/claude-howto/blob/main/01-slash-commands/README.md" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Có hai nơi gõ lệnh. **Trong shell** (trước khi mở Claude): `claude` mở phiên tương tác, `claude \"việc\"` mở kèm yêu cầu đầu tiên, `claude -p \"câu hỏi\"` trả lời một lần rồi thoát, `claude -c` tiếp tục hội thoại gần nhất trong thư mục, `claude -r` chọn hội thoại cũ. Ngoài ra `claude --version`, `claude update`, `claude doctor` đã học ở bài cài đặt.",
        "**Trong phiên**, lệnh bắt đầu bằng `/`: `/help` (trợ giúp), `/clear` (xoá hội thoại để làm việc mới), `/compact` (tóm gọn hội thoại, có thể kèm trọng tâm như `/compact tập trung vào thay đổi API`), `/context` (xem cái gì đang chiếm context), `/init` (tạo CLAUDE.md), `/model` (đổi model), `/resume` (mở lại hội thoại cũ), `/rewind` (tua lại), `/status` (phiên bản, model, tài khoản), `/usage` (mức sử dụng và chi phí), `/exit` (thoát). Gõ `/` để thấy danh sách đầy đủ.",
        "**Phím tắt cốt lõi**: `Esc` dừng Claude ngay (giữ phần đã làm); `Esc` hai lần khi ô nhập trống mở menu tua lại; `Shift+Tab` đổi chế độ quyền; `Ctrl+C` dừng thao tác đang chạy hoặc xoá ô nhập (nhấn tiếp lần nữa khi trống thì thoát); `Ctrl+D` hai lần để thoát; mũi tên lên gọi lại tin nhắn trước.",
        "**Tiền tố nhanh**: `!` ở đầu dòng chạy lệnh shell trực tiếp và đưa kết quả vào phiên (ví dụ `!git status`); `@` gợi ý đường dẫn file; `?` khi ô nhập trống mở bảng phím tắt.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Lệnh shell giống công tắc ở cửa phòng họp: bật đèn, mở lại cuộc họp hôm qua. Lệnh / giống nút trên bàn chủ toạ: xoá bảng (/clear), tóm tắt biên bản (/compact), xem còn bao nhiêu chỗ trên bảng (/context). Còn Esc là tiếng “dừng lại đã!” khi cuộc họp đi lạc đề.",
      },
      terms: [
        { term: "Slash command", definition: "Lệnh trong phiên Claude Code, bắt đầu bằng dấu /." },
        { term: "Context", definition: "Mọi thứ Claude đang “nhớ” trong phiên: hội thoại, file đã đọc, CLAUDE.md…" },
        { term: "Compact", definition: "Tóm gọn hội thoại thành bản tóm tắt để giải phóng context." },
        { term: "Shell mode (!)", definition: "Chạy lệnh shell ngay trong phiên, kết quả được đưa vào hội thoại." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bảng lệnh dùng hằng ngày",
      infographic: {
        kind: "table",
        headers: ["Nhóm", "Lệnh / phím", "Dùng khi"],
        rows: [
          ["Shell", "claude · claude -c · claude -r", "Mở phiên mới · tiếp tục gần nhất · chọn hội thoại cũ"],
          ["Shell", "claude -p \"câu hỏi\"", "Hỏi một lần rồi thoát (hợp với script)"],
          ["Hội thoại", "/clear · /compact · /context", "Việc mới · tóm gọn · xem context"],
          ["Dự án", "/init · /model · /status · /usage", "Tạo CLAUDE.md · đổi model · xem tài khoản · xem mức dùng"],
          ["Phím", "Esc · Esc Esc · Shift+Tab", "Dừng · tua lại · đổi chế độ quyền"],
          ["Tiền tố", "/ · ! · @ · ?", "Danh sách lệnh · chạy lệnh shell · chọn file · bảng phím tắt"],
          ["Thoát", "/exit · Ctrl+D hai lần", "Kết thúc phiên"],
        ],
      },
      caption: "Đối chiếu Quickstart và Interactive mode ngày 03/11/2026. Danh sách lệnh có thể thay đổi theo phiên bản — gõ / để xem bản hiện tại.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: lệnh nào dùng ở đâu",
      mermaid: `flowchart LR
  subgraph S["Trong shell"]
    A["claude"]
    B["claude -c / -r"]
    C["claude -p câu hỏi"]
  end
  subgraph P["Trong phiên Claude Code"]
    D["Lệnh /: /clear /compact /context /model /rewind"]
    E["Phím: Esc, Esc Esc, Shift+Tab"]
    F["Tiền tố: ! lệnh shell, @ file"]
  end
  A --> P
  B --> P
  C --> G["In kết quả rồi thoát"]
  P -->|"/exit hoặc Ctrl+D hai lần"| S`,
      caption: "Lệnh / chỉ có nghĩa bên trong phiên; lệnh claude chạy trong shell.",
      alt: "Sơ đồ hai vùng. Vùng shell có claude, claude -c hoặc -r, claude -p. claude và claude -c/-r mở phiên Claude Code; claude -p in kết quả rồi thoát. Vùng phiên có lệnh gạch chéo, các phím Esc, Esc Esc, Shift+Tab và tiền tố chấm than, a còng. Thoát phiên bằng /exit hoặc Ctrl+D hai lần để về shell.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: một ngày làm việc",
      bad: {
        label: "Một phiên cho mọi việc",
        content: "09:00 sửa lỗi xuất Excel\n10:30 (cùng phiên) viết email cho khách\n14:00 (cùng phiên) thêm biểu đồ\n16:00 Claude bắt đầu nhầm lẫn giữa các việc",
        notes: ["Context chứa lẫn lộn nhiều việc không liên quan.", "Mỗi việc sau phải “gánh” lịch sử của việc trước."],
      },
      good: {
        label: "Mỗi việc một khởi đầu sạch",
        content: "09:00 claude → sửa lỗi xuất Excel → commit\n10:30 /clear → viết email cho khách\n14:00 /clear → thêm biểu đồ; giữa chừng /compact tập trung vào phần biểu đồ\n17:00 /exit; mai mở lại bằng claude -c nếu cần",
        notes: ["/clear giữa các việc không liên quan.", "/compact khi cần giữ mạch của một việc dài."],
      },
      takeaway: "/clear không tốn gì và giúp việc sau không phải gánh lịch sử việc trước.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn lệnh cho từng tình huống",
      sim: {
        kind: "choose",
        options: [
          { id: "clear", label: "/clear" },
          { id: "compact", label: "/compact" },
          { id: "context", label: "/context" },
          { id: "init", label: "/init" },
          { id: "model", label: "/model" },
          { id: "status", label: "/status" },
          { id: "rewind", label: "/rewind" },
          { id: "esc", label: "Esc" },
          { id: "shift-tab", label: "Shift+Tab" },
          { id: "bang", label: "! (chạy lệnh shell)" },
        ],
        scenarios: [
          { id: "s1", text: "Xong việc sửa lỗi, giờ chuyển sang viết tài liệu không liên quan.", answer: "clear", why: "Việc mới không liên quan → bắt đầu hội thoại sạch." },
          { id: "s2", text: "Hội thoại về một tính năng đã rất dài, muốn gọn lại nhưng giữ phần thay đổi API.", answer: "compact", why: "/compact kèm trọng tâm giữ lại điều quan trọng." },
          { id: "s3", text: "Muốn biết cái gì đang chiếm nhiều context nhất.", answer: "context", why: "/context hiển thị mức dùng context." },
          { id: "s4", text: "Dự án chưa có CLAUDE.md.", answer: "init", why: "/init tạo CLAUDE.md khởi đầu." },
          { id: "s5", text: "Muốn đổi sang model khác cho một việc phân tích khó.", answer: "model", why: "/model đổi model trong phiên." },
          { id: "s6", text: "Muốn xem phiên bản, model và tài khoản đang dùng.", answer: "status", why: "/status hiện các thông tin này." },
          { id: "s7", text: "Muốn đưa code về trạng thái trước yêu cầu vừa rồi.", answer: "rewind", why: "/rewind mở menu tua lại code và/hoặc hội thoại." },
          { id: "s8", text: "Claude đang sửa sai file, cần dừng ngay lập tức.", answer: "esc", why: "Esc dừng thao tác đang chạy." },
          { id: "s9", text: "Muốn chuyển sang chế độ Plan trước khi giao việc lớn.", answer: "shift-tab", why: "Shift+Tab chuyển vòng qua các chế độ quyền." },
          { id: "s10", text: "Muốn chạy nhanh git status và để Claude thấy kết quả.", answer: "bang", why: "Gõ !git status: chạy trực tiếp, kết quả đưa vào phiên." },
        ],
      },
      intro: "Chọn lệnh hoặc phím phù hợp nhất cho mỗi tình huống trong một phiên Claude Code.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tự khám phá lệnh",
      steps: [
        { title: "Xem danh sách lệnh", detail: "Gõ / để thấy lệnh và skill có sẵn; Tab để tự điền.", code: { lang: "text", content: "/\n/help" } },
        { title: "Xem phím tắt", detail: "Khi ô nhập trống, gõ ? để mở bảng phím tắt." },
        { title: "Kiểm tra context và trạng thái", detail: "Thói quen tốt đầu mỗi buổi.", code: { lang: "text", content: "/status\n/context" } },
        { title: "Chạy lệnh shell ngay trong phiên", detail: "Tiền tố ! chạy lệnh trực tiếp, kết quả được thêm vào phiên để Claude phản hồi.", code: { lang: "text", content: "!git status" } },
        { title: "Dọn dẹp giữa các việc và thoát", detail: "/clear cho việc mới; /exit (hoặc Ctrl+D hai lần) để thoát; lần sau claude -c để tiếp tục.", code: { lang: "text", content: "/clear\n/exit" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết “phiếu nhắc lệnh” cá nhân: với mỗi tình huống sau, ghi lệnh hoặc phím phù hợp. (1) Chuyển sang việc không liên quan. (2) Hội thoại quá dài nhưng vẫn đang làm cùng việc. (3) Claude đang làm sai hướng. (4) Muốn bỏ thay đổi của yêu cầu vừa rồi. (5) Muốn chuyển sang chế độ Plan. (6) Sáng mai mở lại đúng hội thoại hôm nay trong thư mục dự án.",
      placeholder: "(1) …\n(2) …\n(3) …\n(4) …\n(5) …\n(6) …",
      rubric: [
        { id: "clear", label: "(1) /clear", weight: 1, check: { kind: "regex", pattern: "/clear" }, pass: "Có /clear.", fail: "Việc không liên quan → /clear." },
        { id: "compact", label: "(2) /compact", weight: 1, check: { kind: "regex", pattern: "/compact" }, pass: "Có /compact.", fail: "Cùng việc nhưng dài → /compact." },
        { id: "esc", label: "(3) Esc", weight: 1, check: { kind: "regex", pattern: "\\besc\\b" }, pass: "Có Esc.", fail: "Đang sai hướng → Esc." },
        { id: "rewind", label: "(4) /rewind", weight: 1, check: { kind: "regex", pattern: "(/rewind|esc\\s*(hai lan|x2|esc))" }, pass: "Có cách tua lại.", fail: "Bỏ thay đổi vừa rồi → /rewind hoặc Esc hai lần." },
        { id: "mode", label: "(5) Shift+Tab", weight: 1, check: { kind: "regex", pattern: "shift\\s*\\+?\\s*tab" }, pass: "Có Shift+Tab.", fail: "Đổi chế độ → Shift+Tab." },
        { id: "continue", label: "(6) claude -c", weight: 1, check: { kind: "regex", pattern: "claude\\s+(-c|--continue)" }, pass: "Có claude -c.", fail: "Mở lại hội thoại gần nhất → claude -c." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "(1) /clear\n(2) /compact (có thể kèm trọng tâm: /compact tập trung vào phần biểu đồ)\n(3) Esc để dừng ngay, rồi nhắn hướng đúng\n(4) /rewind (hoặc Esc hai lần khi ô nhập trống) rồi chọn điểm trước yêu cầu\n(5) Shift+Tab cho đến khi thấy chế độ Plan\n(6) cd vào thư mục dự án rồi chạy claude -c",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Shell: claude, claude \"việc\", claude -p (một lần rồi thoát), claude -c (tiếp tục), claude -r (chọn hội thoại).",
        "Trong phiên: /clear, /compact, /context, /init, /model, /status, /usage, /rewind, /exit — gõ / để xem tất cả.",
        "Phím: Esc dừng, Esc Esc tua lại, Shift+Tab đổi chế độ, Ctrl+C dừng/xoá ô nhập, Ctrl+D hai lần thoát.",
        "Tiền tố: ! chạy lệnh shell, @ chọn file, ? bảng phím tắt.",
        "Thói quen: /clear giữa việc không liên quan, /compact cho việc dài, commit trước khi thoát.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Dùng Claude Code trong một buổi làm việc thật (1–2 giờ) với ít nhất hai việc khác nhau.",
      tasks: [
        "Đầu buổi: /status và /context, ghi lại kết quả.",
        "Dùng /clear khi chuyển việc; dùng /compact ít nhất một lần cho việc dài.",
        "Thử !git status và @ để chọn file.",
        "Cuối buổi: commit, /exit; hôm sau mở lại bằng claude -c.",
      ],
      deliverable: "Nhật ký buổi làm việc: thời điểm, lệnh đã dùng, lý do dùng.",
      checklist: ["Đã dùng ít nhất 6 lệnh/phím khác nhau", "Có /clear giữa hai việc không liên quan", "Mở lại được hội thoại bằng claude -c"],
    },
  ],
};
