import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";

export const lessonUngDungDauTien: Lesson = {
  id: "ch05-l08",
  chapterId: "ch05",
  slug: "ung-dung-dau-tien",
  title: "Tạo ứng dụng đầu tiên",
  subtitle: "Từ đặc tả đến sản phẩm chạy được: một trang web “Theo dõi lỗi QA” làm cùng Claude Code, có kế hoạch, kiểm chứng và commit.",
  level: "beginner",
  estimatedMinutes: 35,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Viết đặc tả ngắn cho ứng dụng: mục đích, tính năng, ràng buộc, tiêu chí hoàn thành đo được." },
    { id: "o2", text: "Thực hiện quy trình: chuẩn bị thư mục và git → xem kế hoạch ở chế độ Plan → duyệt tạo file → chạy thử → commit." },
    { id: "o3", text: "Kiểm chứng kết quả, yêu cầu bằng chứng và phản hồi cụ thể khi chưa đạt." },
    { id: "o4", text: "Chọn đúng giữa sửa tiếp, tua lại (/rewind) và bắt đầu lại (/clear); commit khi đạt." },
  ],
  concepts: [
    { id: "spec", label: "Đặc tả (spec)" },
    { id: "acceptance", label: "Tiêu chí hoàn thành" },
    { id: "interview", label: "Nhờ Claude phỏng vấn để viết đặc tả" },
    { id: "plan-mode", label: "Chế độ Plan" },
    { id: "workflow", label: "Quy trình làm một ứng dụng" },
    { id: "permission-prompt", label: "Hộp thoại xin quyền" },
    { id: "verify-run", label: "Chạy thử để kiểm chứng" },
    { id: "evidence", label: "Yêu cầu bằng chứng" },
    { id: "feedback", label: "Phản hồi cụ thể" },
    { id: "rewind", label: "Tua lại" },
    { id: "clear-restart", label: "Bắt đầu lại với /clear" },
    { id: "commit", label: "Commit khi đạt" },
  ],
  hints: [
    "Tiêu chí hoàn thành phải kiểm tra được: “nhập 3 lỗi thì bảng có 3 dòng”, không phải “giao diện đẹp”.",
    "Nhấn Shift+Tab để chuyển sang chế độ Plan: Claude đề xuất kế hoạch mà chưa sửa file.",
    "Sửa hai lần vẫn sai? /clear rồi viết lại một yêu cầu tốt hơn.",
  ],
  sources: [
    { label: "Claude Code — Best practices: Give Claude a check to run, Course-correct (Esc, /rewind, /clear)", href: BP },
    { label: "Claude Code — Terminal guide: Build something (duyệt quyền, mở file HTML)", href: "https://code.claude.com/docs/en/terminal-guide" },
    { label: "Claude Code — How Claude Code works: permission modes (Plan), checkpoints", href: "https://code.claude.com/docs/en/how-claude-code-works" },
    { label: "Claude Code — Quickstart: Use Git with Claude Code", href: "https://code.claude.com/docs/en/quickstart" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Bạn không cần biết lập trình để làm ứng dụng đầu tiên, nhưng cần biết **mình muốn gì**. Hãy viết một **đặc tả** ngắn: **mục đích** (ai dùng, để làm gì), **tính năng** chính, **ràng buộc** (ví dụ: một file HTML, không dùng thư viện ngoài, giao diện tiếng Việt) và **tiêu chí hoàn thành** kiểm tra được. Chưa rõ mình muốn gì? Nhờ Claude **phỏng vấn** bạn rồi viết đặc tả vào file.",
        "Quy trình gợi ý: tạo thư mục và `git init` → mở `claude` → nhấn `Shift+Tab` sang **chế độ Plan** để Claude đề xuất kế hoạch mà **chưa sửa file** → bạn đọc và chỉnh kế hoạch → cho Claude làm; ở chế độ hỏi quyền, Claude xin phép trước khi tạo file và bạn duyệt → **chạy thử** theo tiêu chí → **commit** khi đạt.",
        "Tài liệu Best practices nhấn mạnh: hãy cho Claude **một phép kiểm tra trả về đạt/không đạt** (test, lệnh build…) và đòi **bằng chứng** — lệnh đã chạy và kết quả, hoặc ảnh chụp. Câu “đã xong” không có bằng chứng thì chưa đủ. Với trang web đơn giản, bạn tự mở file trong trình duyệt và thử từng tiêu chí.",
        "Khi chưa đạt: phản hồi **cụ thể** (đang thấy gì, mong muốn gì, cách tái hiện). Nhấn `Esc` ngay khi Claude đi sai hướng. Muốn quay lại trước một yêu cầu: `/rewind` (hoặc `Esc` hai lần khi ô nhập trống). Đã sửa hai lần vẫn sai: `/clear` rồi viết **một yêu cầu mới tốt hơn** gom những gì đã học.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Đặt may một bộ đồng phục: bạn đưa số đo, chất liệu, màu và hạn giao (đặc tả). Thợ phác mẫu cho bạn duyệt (Plan). May xong bạn mặc thử theo từng tiêu chí (kiểm chứng). Chỗ nào chật thì chỉ rõ chỗ đó (phản hồi cụ thể), chứ không nói “chưa đẹp, may lại”.",
      },
      terms: [
        { term: "Spec (đặc tả)", definition: "Mô tả ngắn: mục đích, tính năng, ràng buộc, tiêu chí hoàn thành." },
        { term: "Acceptance criteria", definition: "Tiêu chí hoàn thành — điều kiện kiểm tra được để biết đã xong." },
        { term: "Plan mode", definition: "Chế độ Claude khám phá và đề xuất kế hoạch, không sửa file nguồn." },
        { term: "localStorage", definition: "Bộ nhớ nhỏ của trình duyệt, giữ dữ liệu khi tải lại trang trên cùng máy." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: một đặc tả có chú thích",
      infographic: {
        kind: "annotated",
        label: "Đặc tả gửi Claude Code (dán ở chế độ Plan)",
        lines: [
          { text: "Tôi là tổ trưởng QA, cần trang web ghi lỗi theo ca cho 3 tổ.", note: "Mục đích và người dùng", tone: "context" },
          { text: "Tính năng: nhập lỗi (ngày, công đoạn, mô tả, số lượng); bảng danh sách; tổng theo công đoạn; nút xoá dòng.", note: "Tính năng chính", tone: "task" },
          { text: "Ràng buộc: một file index.html, không dùng thư viện ngoài, giao diện tiếng Việt, lưu bằng localStorage.", note: "Ràng buộc", tone: "constraints" },
          { text: "Hoàn thành khi: nhập 3 lỗi thì bảng có 3 dòng và tổng đúng; tải lại trang dữ liệu vẫn còn; ô số lượng để trống thì báo lỗi.", note: "Tiêu chí kiểm tra được", tone: "output" },
          { text: "Trước tiên hãy đề xuất kế hoạch, chưa viết code.", note: "Lập kế hoạch trước", tone: "neutral" },
        ],
      },
      caption: "Bốn phần: mục đích, tính năng, ràng buộc, tiêu chí hoàn thành — cộng một câu yêu cầu lập kế hoạch trước.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng làm ứng dụng cùng Claude Code",
      mermaid: `flowchart TD
  A["Thư mục mới + git init"] --> B["claude, Shift+Tab sang Plan"]
  B --> C["Dán đặc tả, nhận kế hoạch"]
  C --> D{"Kế hoạch đúng ý?"}
  D -->|"Chưa"| C
  D -->|"Rồi"| E["Cho Claude làm, duyệt tạo file"]
  E --> F["Chạy thử theo tiêu chí, xem bằng chứng"]
  F --> G{"Đạt?"}
  G -->|"Chưa"| H["Phản hồi cụ thể"]
  H --> E
  H -.->|"Sai 2 lần"| I["/clear + yêu cầu mới tốt hơn"]
  I --> B
  G -->|"Đạt"| J["Commit"]`,
      caption: "Kế hoạch trước, kiểm chứng sau mỗi vòng, commit khi đạt.",
      alt: "Lưu đồ: tạo thư mục và git init, mở claude và chuyển sang chế độ Plan, dán đặc tả để nhận kế hoạch, chỉnh đến khi đúng ý, cho Claude làm và duyệt tạo file, chạy thử theo tiêu chí. Nếu chưa đạt thì phản hồi cụ thể và làm tiếp; sai hai lần thì /clear và viết yêu cầu mới. Đạt thì commit.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu làm ứng dụng",
      bad: {
        label: "Mơ hồ",
        content: "làm cho tôi cái app quản lý lỗi",
        notes: ["Không biết ai dùng, cần tính năng gì.", "Không có ràng buộc: Claude có thể chọn công nghệ phức tạp.", "Không có tiêu chí — không biết khi nào là xong."],
      },
      good: {
        label: "Có đặc tả",
        content:
          "Tôi là tổ trưởng QA, cần trang web ghi lỗi theo ca. Tính năng: nhập lỗi (ngày, công đoạn, mô tả, số lượng), bảng danh sách, tổng theo công đoạn. Ràng buộc: một file index.html, không thư viện ngoài, tiếng Việt, lưu localStorage. Hoàn thành khi: nhập 3 lỗi thì bảng có 3 dòng, tải lại trang vẫn còn. Trước tiên đề xuất kế hoạch, chưa viết code.",
        notes: ["Đủ 4 phần của đặc tả.", "Tiêu chí kiểm tra được bằng tay trong 1 phút.", "Yêu cầu kế hoạch trước."],
      },
      takeaway: "Đặc tả rõ + tiêu chí kiểm tra được = Claude biết làm gì và biết khi nào xong.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: sắp xếp quy trình làm ứng dụng đầu tiên",
      sim: {
        kind: "sequence",
        items: [
          { id: "a", text: "Tạo thư mục dự án và chạy git init" },
          { id: "b", text: "Mở claude trong thư mục đó" },
          { id: "c", text: "Shift+Tab sang chế độ Plan, dán đặc tả và xin kế hoạch" },
          { id: "d", text: "Đọc kế hoạch, sửa chỗ chưa đúng ý rồi đồng ý" },
          { id: "e", text: "Cho Claude tạo file, duyệt ở hộp thoại xin quyền" },
          { id: "f", text: "Mở index.html trên trình duyệt, thử từng tiêu chí" },
          { id: "g", text: "Phản hồi cụ thể chỗ chưa đạt, thử lại" },
          { id: "h", text: "Commit khi mọi tiêu chí đạt" },
        ],
        explain: "Chuẩn bị lưới an toàn (git) → kế hoạch trước khi sửa → làm → kiểm chứng theo tiêu chí → phản hồi → commit. Bỏ bước kế hoạch hay kiểm chứng là nguồn gốc của phần lớn kết quả “gần đúng”.",
      },
      intro: "Kéo hoặc dùng nút để xếp các bước theo đúng thứ tự.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: trang “Theo dõi lỗi QA”",
      steps: [
        { title: "Chuẩn bị thư mục và git", detail: "Thư mục riêng cho ứng dụng; git để có điểm quay lại.", code: { lang: "bash", content: "mkdir -p ~/du-an/theo-doi-loi\ncd ~/du-an/theo-doi-loi\ngit init\nclaude" } },
        { title: "Chuyển sang Plan và dán đặc tả", detail: "Nhấn Shift+Tab cho đến khi chỉ báo chế độ hiện Plan. Dán đặc tả 4 phần ở phần minh hoạ, kèm câu “Trước tiên đề xuất kế hoạch, chưa viết code.”" },
        { title: "Duyệt kế hoạch rồi cho làm", detail: "Hỏi lại chỗ chưa hiểu, sửa chỗ chưa đúng ý. Chuyển khỏi Plan (Shift+Tab) rồi bảo Claude làm theo kế hoạch. Nếu Claude xin phép tạo file, đọc tên file rồi chọn Yes." },
        { title: "Chạy thử theo tiêu chí", detail: "Mở file bằng trình duyệt (bấm đúp, hoặc dùng lệnh theo hệ điều hành) và thử từng tiêu chí.", code: { lang: "bash", content: "open index.html       # macOS\nxdg-open index.html   # Linux\nstart index.html      # Windows" } },
        { title: "Phản hồi cụ thể, rồi commit", detail: "Nói rõ đang thấy gì, mong muốn gì, cách tái hiện. Khi đạt, nhờ Claude commit hoặc tự commit.", code: { lang: "text", content: "Khi để trống ô Số lượng và bấm Thêm, dòng vẫn được thêm với số 0. Mong muốn: hiện thông báo “Nhập số lượng” và không thêm dòng. Chỉ sửa phần kiểm tra dữ liệu nhập. Sửa xong thử lại trường hợp này và cho tôi biết kết quả.\n\n(Khi đạt) commit các thay đổi với thông điệp mô tả rõ ràng" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết đặc tả gửi Claude Code cho ứng dụng thứ hai: “Bảng chấm điểm 5S cho xưởng” — tổ trưởng chấm 5 hạng mục (Sàng lọc, Sắp xếp, Sạch sẽ, Săn sóc, Sẵn sàng) mỗi mục 1–5 điểm. Nêu mục đích, ít nhất 3 tính năng (gạch đầu dòng), ràng buộc, tiêu chí hoàn thành kiểm tra được, và yêu cầu lập kế hoạch trước.",
      placeholder: "Mục đích: …\nTính năng:\n- …\nRàng buộc: …\nHoàn thành khi: …",
      rubric: [
        { id: "purpose", label: "Mục đích và người dùng", weight: 1, check: { kind: "anyKeyword", keywords: ["tổ trưởng", "người dùng", "dùng cho", "mục đích"] }, pass: "Có mục đích/người dùng.", fail: "Nêu ai dùng và để làm gì." },
        { id: "features", label: "Ít nhất 3 tính năng", weight: 1, check: { kind: "minMatches", pattern: "^\\s*(-|\\*|\\d+[.)])\\s+\\S", value: 3 }, pass: "Có ≥ 3 tính năng.", fail: "Liệt kê ít nhất 3 tính năng, mỗi dòng bắt đầu bằng gạch đầu dòng." },
        { id: "constraints", label: "Ràng buộc", weight: 1, check: { kind: "anyKeyword", keywords: ["một file", "không dùng thư viện", "không thư viện", "tiếng việt", "localstorage"] }, pass: "Có ràng buộc.", fail: "Nêu ràng buộc: một file HTML, không thư viện ngoài, tiếng Việt…" },
        { id: "acceptance", label: "Tiêu chí kiểm tra được", weight: 1, check: { kind: "regex", pattern: "(hoan thanh khi|tieu chi)[^\\n]*\\d" }, pass: "Có tiêu chí cụ thể.", fail: "Viết tiêu chí có con số: “chấm 5 mục đều 5 điểm thì tổng 25 và 100%”." },
        { id: "plan", label: "Lập kế hoạch trước", weight: 1, check: { kind: "anyKeyword", keywords: ["kế hoạch", "chưa viết code", "plan"] }, pass: "Có yêu cầu kế hoạch.", fail: "Thêm: “Trước tiên đề xuất kế hoạch, chưa viết code.”" },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Mục đích: tổ trưởng xưởng lắp ráp dùng để chấm điểm 5S hằng tuần trên máy tính bảng.\nTính năng:\n- Chấm 5 hạng mục (Sàng lọc, Sắp xếp, Sạch sẽ, Săn sóc, Sẵn sàng), mỗi mục 1–5 điểm.\n- Hiện tổng điểm và phần trăm, tô đỏ mục dưới 3 điểm.\n- Lưu lịch sử các lần chấm và nút xoá lần chấm.\nRàng buộc: một file index.html, không dùng thư viện ngoài, giao diện tiếng Việt, lưu bằng localStorage.\nHoàn thành khi: chấm 5 mục đều 5 điểm thì tổng 25 và 100%; một mục 2 điểm thì mục đó tô đỏ; tải lại trang lịch sử vẫn còn.\nTrước tiên hãy đề xuất kế hoạch, chưa viết code.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Đặc tả 4 phần: mục đích, tính năng, ràng buộc, tiêu chí hoàn thành kiểm tra được.",
        "Chưa rõ mình muốn gì: nhờ Claude phỏng vấn rồi viết đặc tả vào file.",
        "Quy trình: git init → Plan (Shift+Tab) → duyệt kế hoạch → làm → chạy thử → commit.",
        "Đòi bằng chứng: lệnh đã chạy và kết quả, hoặc ảnh chụp; tự thử theo tiêu chí.",
        "Esc khi lệch hướng, /rewind để quay lại, /clear sau hai lần sửa không được.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Làm một công cụ nhỏ cho công việc thật của bạn bằng Claude Code (một trang web một file là đủ).",
      tasks: [
        "Viết đặc tả 4 phần, có ít nhất 3 tiêu chí kiểm tra được.",
        "Làm theo quy trình: git init → Plan → duyệt → làm → chạy thử.",
        "Ghi lại mỗi lần phản hồi: bạn thấy gì, đã yêu cầu sửa thế nào.",
        "Commit bản đạt yêu cầu.",
      ],
      deliverable: "Thư mục dự án có index.html, đặc tả (SPEC.md hoặc ghi chú) và lịch sử git có ít nhất 1 commit.",
      checklist: ["Mọi tiêu chí trong đặc tả đã được thử", "Có ít nhất một lần phản hồi cụ thể", "Có commit cuối cùng với thông điệp rõ ràng"],
    },
  ],
};
