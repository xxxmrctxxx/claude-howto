import type { Lesson } from "@/lib/types/content";

const HOW = "https://code.claude.com/docs/en/how-claude-code-works";

export const lessonClaudeCodeLaGi: Lesson = {
  id: "ch05-l01",
  chapterId: "ch05",
  slug: "claude-code-la-gi",
  title: "Claude Code là gì?",
  subtitle: "Một trợ lý dạng agent làm việc ngay trong dự án của bạn: đọc file, sửa code, chạy lệnh và tự kiểm tra kết quả.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích Claude Code là gì và nó truy cập được những gì khi chạy trong một thư mục." },
    { id: "o2", text: "Mô tả vòng lặp agent: thu thập ngữ cảnh → hành động → kiểm chứng, và vai trò của bạn trong vòng lặp." },
    { id: "o3", text: "Phân biệt Claude Code với chat thông thường và chọn công cụ phù hợp cho từng việc." },
    { id: "o4", text: "Nêu hai cơ chế an toàn: chế độ quyền và checkpoint; hiểu rằng bạn chịu trách nhiệm xem xét thay đổi." },
  ],
  concepts: [
    { id: "agentic", label: "Trợ lý dạng agent" },
    { id: "agentic-loop", label: "Vòng lặp agent" },
    { id: "tools", label: "Công cụ của Claude Code" },
    { id: "access", label: "Claude Code truy cập được gì" },
    { id: "vs-chat", label: "Khác với chat thông thường" },
    { id: "interfaces", label: "Nơi dùng Claude Code" },
    { id: "delegate", label: "Giao việc như cho đồng nghiệp" },
    { id: "permissions", label: "Chế độ quyền" },
    { id: "checkpoints", label: "Checkpoint và tua lại" },
  ],
  hints: [
    "Claude Code không chỉ trả lời bằng chữ: nó dùng công cụ để đọc file, sửa file và chạy lệnh.",
    "Bạn luôn có thể nhấn Esc để dừng Claude và hướng lại.",
    "Thay đổi trên file có checkpoint để tua lại; thao tác lên hệ thống bên ngoài (database, deploy) thì không.",
  ],
  sources: [
    { label: "Claude Code — How Claude Code works (agentic loop, tools, access, checkpoints, permissions)", href: HOW },
    { label: "Claude Code — Overview", href: "https://code.claude.com/docs/en/overview" },
    { label: "Claude Code — Security (permission modes, user responsibility)", href: "https://code.claude.com/docs/en/security" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Claude Code** là trợ lý AI dạng **agent** của Anthropic, chạy trong **terminal** (cửa sổ gõ lệnh) và nhiều giao diện khác. Khác với chat thông thường chỉ trả lời bằng chữ, Claude Code có **công cụ** để làm việc thật: đọc file, sửa code, tạo file mới, tìm kiếm trong dự án, chạy lệnh (test, git…) và tra cứu web.",
        "Khi bạn giao việc, Claude Code đi qua ba giai đoạn đan xen: **thu thập ngữ cảnh** (đọc, tìm file liên quan), **hành động** (sửa file, chạy lệnh) và **kiểm chứng** (chạy test, xem kết quả). Nó lặp lại cho đến khi xong việc. Bạn cũng là một phần của vòng lặp: có thể ngắt bất cứ lúc nào để hướng lại.",
        "Khi bạn gõ `claude` trong một thư mục, Claude Code truy cập được: **các file trong thư mục đó và thư mục con** (file ở nơi khác cần bạn cho phép), **terminal** (lệnh bạn chạy được thì nó chạy được), **trạng thái git** (nhánh hiện tại, thay đổi chưa commit) và file **CLAUDE.md** — nơi bạn ghi quy ước dự án để Claude đọc mỗi phiên.",
        "Hai cơ chế an toàn quan trọng: **chế độ quyền** quyết định việc gì Claude được làm mà không cần hỏi (nhấn `Shift+Tab` để đổi chế độ), và **checkpoint** — trước khi sửa file, Claude Code chụp lại nội dung cũ để bạn tua lại được. Dù vậy, bạn vẫn là người **chịu trách nhiệm xem xét** lệnh và thay đổi trước khi chấp nhận.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Chat thông thường giống gọi điện hỏi thợ điện: họ hướng dẫn, bạn tự làm. Claude Code giống mời thợ đến tận nhà: họ tự xem sơ đồ điện, thay thiết bị, bật thử để kiểm tra — còn bạn đứng cạnh, duyệt từng việc quan trọng và có thể bảo dừng bất cứ lúc nào.",
      },
      terms: [
        { term: "Agent", definition: "AI không chỉ trả lời mà tự chọn và dùng công cụ để hoàn thành một việc qua nhiều bước." },
        { term: "Tool (công cụ)", definition: "Khả năng hành động của Claude Code: đọc/sửa file, tìm kiếm, chạy lệnh, tra web." },
        { term: "Terminal", definition: "Cửa sổ gõ lệnh bằng chữ — sẽ học kỹ ở bài sau." },
        { term: "Permission mode", definition: "Chế độ quyền: quy định hành động nào Claude được làm mà không hỏi bạn trước." },
        { term: "Checkpoint", definition: "Bản chụp nội dung file trước khi Claude sửa, dùng để tua lại." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: năm nhóm công cụ của Claude Code",
      infographic: {
        kind: "cards",
        cards: [
          { title: "Thao tác file", body: "Đọc file, sửa code, tạo file mới, đổi tên và sắp xếp lại.", icon: "file" },
          { title: "Tìm kiếm", body: "Tìm file theo mẫu tên, tìm nội dung bằng regex, khám phá cấu trúc dự án.", icon: "search" },
          { title: "Thực thi", body: "Chạy lệnh shell, khởi động server, chạy test, dùng git.", icon: "terminal" },
          { title: "Web", body: "Tìm trên web, đọc tài liệu, tra thông báo lỗi.", icon: "globe" },
          { title: "Hiểu code", body: "Thấy lỗi kiểu dữ liệu sau khi sửa, nhảy tới định nghĩa (cần plugin code intelligence).", icon: "code" },
        ],
      },
      caption: "Chính các công cụ này làm Claude Code khác chat: nó hành động, không chỉ trả lời. (Theo tài liệu “How Claude Code works”.)",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng lặp agent",
      mermaid: `flowchart LR
  A["Bạn giao việc"] --> B["Thu thập ngữ cảnh: đọc, tìm file"]
  B --> C["Hành động: sửa file, chạy lệnh"]
  C --> D["Kiểm chứng: chạy test, xem kết quả"]
  D -->|"Chưa đạt"| B
  D -->|"Đạt"| E["Báo kết quả cho bạn"]
  F["Bạn: Esc để dừng, nhắn thêm để hướng lại"] -.-> B
  F -.-> C`,
      caption: "Mỗi lần dùng công cụ cho Claude thông tin mới để quyết định bước tiếp theo.",
      alt: "Lưu đồ: bạn giao việc, Claude thu thập ngữ cảnh, hành động, kiểm chứng; nếu chưa đạt quay lại thu thập ngữ cảnh, nếu đạt thì báo kết quả. Bạn có thể nhấn Esc hoặc nhắn thêm để hướng lại ở bất kỳ bước nào.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: giao việc cho Claude Code",
      bad: {
        label: "Ra lệnh mơ hồ",
        content: "sửa bug",
        notes: ["Bug nào? Xảy ra khi nào?", "Không biết khi nào thì coi là xong.", "Claude phải đoán, dễ sửa nhầm chỗ."],
      },
      good: {
        label: "Giao việc như cho đồng nghiệp",
        content:
          "Trang báo cáo lỗi QA không hiện bảng khi file CSV có dòng trống ở cuối. Phần đọc dữ liệu nằm trong src/app.js. Hãy tìm nguyên nhân và sửa, chỉ sửa phần đọc CSV. Xong thì chạy lại test và cho tôi xem kết quả.",
        notes: ["Có triệu chứng cụ thể và nơi bắt đầu tìm.", "Có phạm vi được sửa.", "Có cách kiểm chứng: chạy lại test."],
      },
      takeaway: "Mô tả mục tiêu, bối cảnh và cách kiểm chứng; để Claude tự tìm file và lệnh cần chạy.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xếp hành động vào đúng giai đoạn",
      sim: {
        kind: "classify",
        bins: [
          { id: "gather", label: "Thu thập ngữ cảnh" },
          { id: "act", label: "Hành động" },
          { id: "verify", label: "Kiểm chứng" },
        ],
        items: [
          { id: "i1", text: "Chạy bộ test lần đầu để xem test nào đang hỏng", bin: "gather", why: "Mục đích là lấy thông tin về lỗi, chưa thay đổi gì." },
          { id: "i2", text: "Đọc thông báo lỗi trong kết quả test", bin: "gather", why: "Đọc để hiểu vấn đề." },
          { id: "i3", text: "Tìm các file có hàm tính tổng lỗi", bin: "gather", why: "Tìm kiếm để biết sửa ở đâu." },
          { id: "i4", text: "Sửa hàm tính tổng trong src/app.js", bin: "act", why: "Thay đổi code là hành động." },
          { id: "i5", text: "Tạo file test mới cho trường hợp dòng trống", bin: "act", why: "Tạo file là hành động." },
          { id: "i6", text: "Chạy lại bộ test sau khi sửa", bin: "verify", why: "Chạy lại để chứng minh bản sửa đúng." },
          { id: "i7", text: "So sánh kết quả với yêu cầu ban đầu trước khi báo xong", bin: "verify", why: "Kiểm tra đã đạt mục tiêu chưa." },
        ],
      },
      intro: "Khi bạn yêu cầu “sửa các test đang hỏng”, Claude Code có thể làm các việc dưới đây. Hãy xếp mỗi việc vào giai đoạn của vòng lặp agent.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: một phiên làm việc điển hình",
      steps: [
        { title: "Mở Claude Code trong thư mục dự án", detail: "Cách cài và mở sẽ học ở các bài 4–6 của chương này.", code: { lang: "bash", content: "cd duong-dan/toi/du-an\nclaude" } },
        { title: "Để Claude khám phá trước", detail: "Hỏi tổng quan để Claude đọc dự án. Bạn không cần tự dán file vào.", code: { lang: "text", content: "Dự án này làm gì? Cấu trúc thư mục ra sao?" } },
        { title: "Giao việc cụ thể kèm cách kiểm chứng", detail: "Nêu triệu chứng, nơi bắt đầu tìm, phạm vi được sửa và cách chứng minh đã xong." },
        { title: "Theo dõi và hướng lại khi cần", detail: "Nhấn `Esc` để dừng ngay; hoặc gõ thêm tin nhắn để Claude điều chỉnh mà không cần làm lại từ đầu." },
        { title: "Xem lại thay đổi trước khi chấp nhận", detail: "Đọc lệnh và đoạn code Claude đề xuất. Nếu sai, nhấn `Esc` hai lần khi ô nhập trống để mở menu tua lại (rewind), hoặc nhờ Claude hoàn tác." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Bạn có dự án web nhỏ theo dõi lỗi QA. Khi lọc theo công đoạn “Quấn dây”, bảng vẫn hiện tất cả các dòng. Hãy viết yêu cầu giao việc cho Claude Code: nêu triệu chứng, nơi bắt đầu tìm (file/thư mục), phạm vi được sửa và cách kiểm chứng.",
      placeholder: "Khi … thì … Code liên quan ở … Hãy … Chỉ sửa … Xong thì chạy … và cho tôi xem …",
      rubric: [
        { id: "symptom", label: "Mô tả triệu chứng", weight: 1, check: { kind: "regex", pattern: "(van hien|khong loc|hien tat ca|sai|loi)" }, pass: "Có triệu chứng cụ thể.", fail: "Mô tả điều gì đang sai (ví dụ: lọc nhưng bảng vẫn hiện tất cả)." },
        { id: "where", label: "Nơi bắt đầu tìm", weight: 1, check: { kind: "regex", pattern: "([a-z0-9_-]+\\.(js|ts|html|py|csv)|src/|thu muc)" }, pass: "Có chỉ file hoặc thư mục.", fail: "Gợi ý file hoặc thư mục liên quan (ví dụ: src/app.js)." },
        { id: "scope", label: "Phạm vi được sửa", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ sửa", "không sửa", "giữ nguyên", "không đổi", "chỉ thay đổi"] }, pass: "Có phạm vi.", fail: "Nói rõ chỉ sửa phần nào hoặc phần nào giữ nguyên." },
        { id: "verify", label: "Cách kiểm chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["chạy test", "chạy lại", "kiểm tra", "thử lại", "cho tôi xem"] }, pass: "Có cách kiểm chứng.", fail: "Yêu cầu Claude chạy test hoặc thử lại và cho bạn xem kết quả." },
        { id: "detail", label: "Đủ chi tiết", weight: 1, check: { kind: "minChars", value: 160 }, pass: "Đủ chi tiết.", fail: "Viết đầy đủ hơn (tối thiểu khoảng 160 ký tự)." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Khi chọn lọc công đoạn “Quấn dây” trên trang theo dõi lỗi QA, bảng vẫn hiện tất cả các dòng thay vì chỉ dòng Quấn dây. Phần lọc dữ liệu nằm trong src/app.js. Hãy tìm nguyên nhân và sửa, chỉ sửa hàm lọc, giữ nguyên giao diện. Xong thì chạy lại test và cho tôi xem kết quả lọc với file data/loi-mau.csv.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Claude Code là trợ lý dạng agent: có công cụ để đọc/sửa file, tìm kiếm, chạy lệnh, tra web.",
        "Vòng lặp: thu thập ngữ cảnh → hành động → kiểm chứng, lặp đến khi xong; bạn có thể ngắt bằng Esc.",
        "Chạy trong một thư mục: thấy file trong thư mục đó, terminal, trạng thái git và CLAUDE.md.",
        "An toàn: chế độ quyền (Shift+Tab) và checkpoint (Esc hai lần để tua lại); bạn vẫn phải xem xét thay đổi.",
        "Giao việc như cho đồng nghiệp: mục tiêu, bối cảnh, phạm vi, cách kiểm chứng.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn 3 việc lặp lại trong công việc của bạn có liên quan đến file trên máy (ví dụ: gộp file Excel, đổi tên ảnh, sửa trang web nội bộ).",
      tasks: [
        "Với mỗi việc, ghi rõ: chat thông thường đủ hay cần Claude Code? Vì sao?",
        "Với việc cần Claude Code, viết sẵn yêu cầu giao việc có mục tiêu, bối cảnh, phạm vi, cách kiểm chứng.",
        "Ghi lại rủi ro cần để ý (file quan trọng, lệnh xoá) để xem kỹ khi Claude xin quyền.",
      ],
      deliverable: "Bảng 3 dòng: Việc | Chat hay Claude Code | Yêu cầu giao việc | Rủi ro cần để ý.",
      checklist: ["Mỗi việc có lý do chọn công cụ", "Yêu cầu có cách kiểm chứng", "Đã ghi rủi ro cho việc có thao tác xoá hoặc ghi đè"],
    },
  ],
};
