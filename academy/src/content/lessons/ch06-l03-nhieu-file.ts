import type { Lesson } from "@/lib/types/content";

const CW = "https://code.claude.com/docs/en/common-workflows";

export const lessonNhieuFile: Lesson = {
  id: "ch06-l03",
  chapterId: "ch06",
  slug: "nhieu-file",
  title: "Đọc và chỉnh sửa nhiều file",
  subtitle: "Tìm đúng code, hiểu các file phối hợp thế nào, giao thay đổi xuyên nhiều file một cách nhất quán, rồi xem lại và hoàn tác an toàn.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Định vị code liên quan: nhờ Claude tìm file, giải thích cách chúng phối hợp, lần theo một luồng xử lý." },
    { id: "o2", text: "Tham chiếu chính xác bằng @file và @thư mục, hiểu mỗi loại đưa gì vào context." },
    { id: "o3", text: "Giao thay đổi phối hợp nhiều file có phạm vi và kiểm chứng; xem lại toàn bộ bằng /diff." },
    { id: "o4", text: "Kiểm soát rủi ro: chế độ quyền, checkpoint và giới hạn của nó, git làm lưới an toàn." },
  ],
  concepts: [
    { id: "find-code", label: "Tìm code liên quan" },
    { id: "trace-flow", label: "Lần theo luồng xử lý" },
    { id: "at-file", label: "@file" },
    { id: "at-dir", label: "@thư mục" },
    { id: "at-claudemd", label: "@file kéo theo CLAUDE.md" },
    { id: "coordinated-edit", label: "Sửa phối hợp nhiều file" },
    { id: "diff-review", label: "Xem lại bằng /diff" },
    { id: "accept-edits", label: "Chế độ Accept edits" },
    { id: "checkpoint-limits", label: "Giới hạn của checkpoint" },
    { id: "git-safety", label: "Git làm lưới an toàn" },
  ],
  hints: [
    "@thư mục chỉ cho Claude danh sách file, không phải nội dung.",
    "Sửa xong nhiều file: /diff để xem toàn bộ thay đổi trước khi commit.",
    "File chỉ bị đổi bởi lệnh shell thì /rewind không khôi phục — hãy dùng git.",
  ],
  sources: [
    { label: "Claude Code — Common workflows: Understand new codebases, Reference files and directories", href: CW },
    { label: "Claude Code — Checkpointing: Limitations (Bash changes, not a replacement for version control)", href: "https://code.claude.com/docs/en/checkpointing" },
    { label: "Claude Code — Permission modes (Accept edits)", href: "https://code.claude.com/docs/en/permission-modes" },
    { label: "Repo claude-howto — Module 01 Slash commands (/diff)", href: "https://github.com/xxxmrctxxx/claude-howto/blob/main/01-slash-commands/README.md" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Điểm mạnh của Claude Code là làm việc **trên cả dự án**: tìm file liên quan, đọc nhiều file để hiểu ngữ cảnh, sửa phối hợp rồi chạy test. Với code lạ, hãy đi từ rộng đến hẹp: “tìm các file xử lý đăng nhập”, “các file này phối hợp với nhau thế nào?”, “lần theo luồng đăng nhập từ giao diện đến cơ sở dữ liệu”. Với ngôn ngữ có kiểu, plugin code intelligence giúp “đi tới định nghĩa” và “tìm tham chiếu” chính xác.",
        "Khi đã biết chỗ, dùng `@` để chỉ thẳng: `@src/utils/auth.js` đưa **nội dung file** vào hội thoại (file quá lớn có giới hạn); `@src/components` chỉ đưa **danh sách file** của thư mục, không phải nội dung. Một tin nhắn có thể tham chiếu nhiều file. Lưu ý: `@` một file cũng đưa **CLAUDE.md** của thư mục chứa file và các thư mục cha vào context.",
        "Thay đổi xuyên nhiều file (đổi tên trường dữ liệu, thêm một cột vào form, API và file xuất) cần **phạm vi rõ**, yêu cầu **đồng bộ mọi nơi**, và **phép kiểm chứng** (test, chạy thử). Sau khi Claude sửa, `/diff` mở trình xem các thay đổi chưa commit để bạn duyệt từng file.",
        "Lưới an toàn có ba lớp: **chế độ quyền** (Manual hỏi trước mỗi lần sửa; Accept edits tự duyệt việc sửa file và các lệnh tạo/chuyển file thông dụng trong thư mục làm việc), **checkpoint** (`/rewind` khôi phục file Claude đã sửa bằng công cụ sửa file), và **git**. Checkpoint **không** theo dõi file chỉ bị đổi bởi lệnh shell, và không thay thế được git — commit trước những thay đổi lớn.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Đổi mã một linh kiện trong nhà máy phải sửa đồng bộ: bản vẽ, phiếu kho, phần mềm đặt hàng, tem nhãn. Trước khi đổi, lập danh sách mọi nơi dùng mã cũ; sau khi đổi, rà lại từng chỗ (diff) và giữ bản sao hồ sơ cũ (git) phòng khi cần quay lại.",
      },
      terms: [
        { term: "@file / @thư mục", definition: "Tham chiếu trực tiếp: file → nội dung; thư mục → danh sách file." },
        { term: "Coordinated edit", definition: "Sửa phối hợp nhiều file cho một thay đổi nhất quán." },
        { term: "/diff", definition: "Trình xem các thay đổi chưa commit, liệt kê file và số dòng thêm/bớt." },
        { term: "Accept edits", definition: "Chế độ tự duyệt việc sửa file và lệnh tạo/chuyển file thông dụng trong thư mục làm việc." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: @ đưa gì vào context",
      infographic: {
        kind: "table",
        headers: ["Bạn gõ", "Claude nhận", "Dùng khi"],
        rows: [
          ["@src/utils/auth.js", "Nội dung file (file quá lớn bị giới hạn) + CLAUDE.md của thư mục đó và thư mục cha", "Biết chính xác file cần làm"],
          ["@src/components", "Danh sách file trong thư mục, không có nội dung", "Muốn xem cấu trúc trước"],
          ["@config/dev.json và @config/prod.json", "Nội dung cả hai file", "So sánh, sửa đồng bộ"],
          ["“tìm các file xử lý đăng nhập”", "Claude tự tìm bằng công cụ tìm kiếm", "Chưa biết code nằm đâu"],
        ],
      },
      caption: "Theo mục Reference files and directories trong Common workflows (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ tìm hiểu đến thay đổi nhiều file",
      mermaid: `flowchart LR
  A["Tìm file liên quan"] --> B["Hiểu cách các file phối hợp"]
  B --> C["Lần theo luồng xử lý"]
  C --> D["Commit trước khi sửa"]
  D --> E["Giao thay đổi: phạm vi + đồng bộ + kiểm chứng"]
  E --> F["Chạy test"]
  F --> G["/diff duyệt từng file"]
  G -->|"Sai"| H["/rewind hoặc git"]
  G -->|"Đúng"| I["Commit"]`,
      caption: "Hiểu trước, sửa sau, duyệt toàn bộ thay đổi trước khi commit.",
      alt: "Lưu đồ: tìm file liên quan, hiểu cách phối hợp, lần theo luồng xử lý, commit trước khi sửa, giao thay đổi có phạm vi, đồng bộ và kiểm chứng, chạy test, duyệt bằng /diff; sai thì /rewind hoặc git, đúng thì commit.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: đổi tên một trường dữ liệu",
      bad: {
        label: "Sửa chỗ thấy trước",
        content: "Đổi soLoi thành soLuongLoi trong form nhập.",
        notes: ["API, file xuất Excel và test vẫn dùng tên cũ → hỏng ở chỗ khác.", "Không có bước kiểm chứng.", "Không xem lại toàn bộ thay đổi."],
      },
      good: {
        label: "Thay đổi phối hợp",
        content: "Đổi tên trường soLoi thành soLuongLoi ở mọi nơi: @src/form/loi.tsx, @src/api/loi.ts, @src/export/excel.ts và tests/. Trước tiên liệt kê mọi chỗ dùng soLoi. Không đổi dữ liệu đã lưu. Sửa xong chạy npm test; tôi sẽ xem lại bằng /diff.",
        notes: ["Liệt kê mọi nơi trước khi sửa.", "Giới hạn: không đổi dữ liệu đã lưu.", "Có test và bước duyệt diff."],
      },
      takeaway: "Thay đổi nhiều file cần danh sách nơi ảnh hưởng, kiểm chứng và duyệt toàn bộ.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn cách làm với nhiều file",
      sim: {
        kind: "choose",
        options: [
          { id: "at-file", label: "@ chỉ thẳng file" },
          { id: "at-dir", label: "@ thư mục để xem cấu trúc" },
          { id: "find", label: "Nhờ Claude tìm file liên quan" },
          { id: "trace", label: "Nhờ Claude lần theo luồng xử lý" },
          { id: "diff", label: "/diff" },
          { id: "rewind", label: "/rewind → Restore code" },
          { id: "git", label: "Hoàn tác bằng git" },
        ],
        scenarios: [
          { id: "s1", text: "Bạn biết chính xác file src/utils/auth.js cần được giải thích.", answer: "at-file", why: "@ đưa nội dung file vào ngay." },
          { id: "s2", text: "Muốn xem thư mục src/components có những file nào trước khi hỏi sâu.", answer: "at-dir", why: "@ thư mục cho danh sách file." },
          { id: "s3", text: "Không biết phần xử lý đăng nhập nằm ở file nào.", answer: "find", why: "Để Claude tìm bằng công cụ tìm kiếm." },
          { id: "s4", text: "Muốn hiểu dữ liệu đi từ form nhập lỗi đến cơ sở dữ liệu thế nào.", answer: "trace", why: "Lần theo luồng qua các file." },
          { id: "s5", text: "Claude vừa sửa 6 file; bạn muốn xem toàn bộ thay đổi chưa commit.", answer: "diff", why: "/diff liệt kê file và thay đổi." },
          { id: "s6", text: "Lần sửa vừa rồi sai; các file do Claude sửa bằng công cụ sửa file.", answer: "rewind", why: "Checkpoint khôi phục được các file này." },
          { id: "s7", text: "Một file chỉ bị thay đổi bởi lệnh sed mà Claude chạy trong shell; bạn muốn hoàn tác.", answer: "git", why: "Checkpoint không theo dõi file chỉ bị đổi bằng lệnh shell." },
        ],
      },
      intro: "Chọn cách phù hợp nhất cho mỗi tình huống khi làm việc với nhiều file.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: một thay đổi xuyên nhiều file",
      steps: [
        { title: "Tìm và hiểu", detail: "Đi từ rộng đến hẹp, chưa sửa gì.", code: { lang: "text", content: "Tìm các file liên quan đến xuất báo cáo Excel.\nCác file này phối hợp với nhau thế nào?\nLần theo luồng từ nút “Xuất Excel” đến file tải về." } },
        { title: "Commit trước khi sửa", detail: "Điểm quay lại bền vững hơn checkpoint.", code: { lang: "bash", content: "git status\ngit add -A && git commit -m \"Truoc khi doi ten truong\"" } },
        { title: "Giao thay đổi phối hợp", detail: "Phạm vi, liệt kê mọi nơi ảnh hưởng, kiểm chứng.", code: { lang: "text", content: "Đổi tên trường soLoi thành soLuongLoi ở mọi nơi trong src/ và tests/. Trước tiên liệt kê các chỗ dùng. Không đổi dữ liệu đã lưu. Sửa xong chạy npm test." } },
        { title: "Duyệt toàn bộ thay đổi", detail: "Xem từng file trong trình xem diff.", code: { lang: "text", content: "/diff" } },
        { title: "Hoàn tác nếu cần", detail: "File Claude sửa bằng công cụ sửa file: /rewind → Restore code. File chỉ bị đổi bằng lệnh shell: dùng git.", code: { lang: "bash", content: "git restore src/export/excel.ts" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Bạn sắp sửa tính năng “Xuất Excel” trong một dự án lạ. Viết chuỗi 3–4 tin nhắn gửi Claude để hiểu các file liên quan trước khi sửa: tìm file, hiểu cách phối hợp, lần theo luồng, và tham chiếu trực tiếp ít nhất một file bằng @. Buổi này chưa sửa gì.",
      placeholder: "1. …\n2. …\n3. …\n4. …",
      rubric: [
        { id: "find", label: "Tìm file liên quan", weight: 1, check: { kind: "regex", pattern: "(tim|liet ke)[^\\n]*(file|tep)" }, pass: "Có bước tìm file.", fail: "Bắt đầu bằng “tìm các file liên quan đến…”." },
        { id: "together", label: "Hiểu cách phối hợp", weight: 1, check: { kind: "regex", pattern: "(phoi hop|lien ket|goi nhau|lam viec voi nhau)" }, pass: "Có câu hỏi phối hợp.", fail: "Hỏi các file phối hợp với nhau thế nào." },
        { id: "trace", label: "Lần theo luồng", weight: 1, check: { kind: "regex", pattern: "(lan theo|luong|tu [^\\n]* den)" }, pass: "Có lần theo luồng.", fail: "Hỏi lần theo luồng từ nút bấm đến file tải về." },
        { id: "at", label: "Tham chiếu bằng @", weight: 1, check: { kind: "regex", pattern: "@[a-z0-9_./-]+" }, pass: "Có @.", fail: "Dùng @ để chỉ thẳng một file." },
        { id: "readonly", label: "Chưa sửa", weight: 1, check: { kind: "anyKeyword", keywords: ["chưa sửa", "không sửa", "chỉ đọc"] }, pass: "Có ràng buộc.", fail: "Nói rõ buổi này chưa sửa gì." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "1. Tìm các file liên quan đến tính năng Xuất Excel. Chưa sửa gì.\n2. Các file này phối hợp với nhau thế nào? Vẽ sơ đồ ngắn.\n3. Lần theo luồng từ nút “Xuất Excel” đến lúc file được tải về.\n4. Giải thích @src/export/excel.ts: hàm nào định dạng cột ngày?",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Đi từ rộng đến hẹp: tìm file → hiểu cách phối hợp → lần theo luồng.",
        "@file đưa nội dung (kèm CLAUDE.md của thư mục đó và thư mục cha); @thư mục chỉ đưa danh sách file.",
        "Thay đổi nhiều file: liệt kê mọi nơi ảnh hưởng, giới hạn phạm vi, chạy test, duyệt bằng /diff.",
        "Checkpoint khôi phục file Claude sửa bằng công cụ sửa file; file chỉ bị đổi bằng shell và lịch sử lâu dài thì dùng git.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một thay đổi nhỏ nhưng chạm ít nhất 3 file trong dự án thật.",
      tasks: [
        "Dùng chuỗi tìm–hiểu–lần theo luồng trước khi sửa.",
        "Commit trước, giao thay đổi có danh sách nơi ảnh hưởng và test.",
        "Duyệt bằng /diff; ghi lại chỗ bạn phát hiện cần sửa thêm.",
      ],
      deliverable: "Danh sách file bị ảnh hưởng, kết quả test, và ghi chú những gì /diff giúp bạn phát hiện.",
      checklist: ["Có commit trước khi sửa", "Mọi nơi dùng tên cũ đã được cập nhật", "Đã duyệt toàn bộ thay đổi trước khi commit"],
    },
  ],
};
