import type { Lesson } from "@/lib/types/content";

const COSTS = "https://code.claude.com/docs/en/costs";
const PERM = "https://code.claude.com/docs/en/permissions";

export const lessonTranhDocFileThua: Lesson = {
  id: "ch08-l06",
  chapterId: "ch08",
  slug: "tranh-doc-file-thua",
  title: "Tránh đọc file không cần thiết",
  subtitle: "Chỉ đúng chỗ, lọc trước dữ liệu lớn, chặn thư mục không được đọc, và chọn công cụ ít tốn context.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Viết yêu cầu cụ thể (file, hàm, phạm vi) để Claude đọc ít file nhất mà vẫn làm đúng." },
    { id: "o2", text: "Lọc trước dữ liệu lớn (log, output test) bằng lệnh hoặc hook trước khi đưa cho Claude." },
    { id: "o3", text: "Chặn đọc file nhạy cảm hoặc không cần thiết bằng quy tắc Read deny và hiểu giới hạn của nó." },
    { id: "o4", text: "Chọn công cụ ít tốn context: CLI thay MCP khi có, tắt máy chủ MCP không dùng, plugin hiểu code." },
  ],
  concepts: [
    { id: "specific-request", label: "Yêu cầu cụ thể" },
    { id: "file-mention", label: "Tham chiếu file bằng @" },
    { id: "filter-first", label: "Lọc trước dữ liệu lớn" },
    { id: "hooks-preprocess", label: "Hook tiền xử lý" },
    { id: "read-deny", label: "Quy tắc Read deny" },
    { id: "deny-limits", label: "Giới hạn của quy tắc chặn" },
    { id: "cli-over-mcp", label: "CLI thay MCP" },
    { id: "disable-mcp", label: "Tắt MCP không dùng" },
    { id: "code-intel", label: "Plugin code intelligence" },
  ],
  hints: [
    "“Thêm kiểm tra dữ liệu vào hàm login trong auth.ts” rẻ hơn nhiều so với “cải thiện codebase”.",
    "Lọc log bằng grep trước; chỉ đưa các dòng cần.",
    "Read(./data/raw/**) trong danh sách deny chặn công cụ đọc file của Claude với thư mục đó.",
  ],
  sources: [
    { label: "Claude Code — Manage costs: Write specific prompts, Offload processing to hooks, Reduce MCP server overhead, Code intelligence plugins", href: COSTS },
    { label: "Claude Code — Configure permissions: Read deny rules, What Read and Edit rules cover", href: PERM },
    { label: "Claude Code — Interactive mode: @ file path mention", href: "https://code.claude.com/docs/en/interactive-mode" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Mỗi file Claude đọc trở thành token trong context và đi theo các yêu cầu sau. Cách rẻ nhất để giảm đọc thừa là **nói rõ chỗ cần làm**: tên file (gõ `@` để chọn), tên hàm, triệu chứng, phạm vi. Tài liệu so sánh: “improve this codebase” khiến Claude quét rộng, còn “add input validation to the login function in auth.ts” cho phép làm việc với rất ít lần đọc file.",
        "Dữ liệu lớn hãy **lọc trước**: dùng `grep`, `head`, `tail` để chỉ đưa phần cần. Có thể tự động hoá bằng **hook** — ví dụ hook chạy trước lệnh test, sửa lệnh để chỉ in các test lỗi, giảm từ hàng chục nghìn token xuống vài trăm.",
        "Thư mục Claude **không cần hoặc không được đọc** (dữ liệu thô vài GB, bí mật): thêm quy tắc **Read deny** như `Read(./.env)`, `Read(./data/raw/**)` vào `permissions.deny`. Claude Code áp dụng quy tắc này với nỗ lực tối đa cho các công cụ đọc file (Read, Grep, Glob) và cả `@file`. Lưu ý: file `.claudeignore` **không có tác dụng**; muốn chặn ở mức hệ điều hành cho cả lệnh shell, bật **sandbox**.",
        "Chọn công cụ gọn: định nghĩa công cụ MCP được hoãn nạp, nhưng CLI như `gh`, `aws`, `gcloud` vẫn gọn hơn vì không thêm danh sách công cụ; tắt máy chủ MCP không dùng bằng `/mcp`. Với ngôn ngữ có kiểu (TypeScript, Java…), **plugin code intelligence** giúp “nhảy tới định nghĩa” chính xác thay vì grep rồi mở nhiều file.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Nhờ thủ kho lấy bu-lông M12: nói “kệ B3, ngăn 2, bu-lông M12” thì họ lấy ngay; nói “tìm giúp ít vật tư cần thiết” thì họ lục cả kho. Kho hoá chất có khoá riêng (Read deny), còn hàng nghìn phiếu xuất kho thì lọc ra đúng phiếu lỗi trước khi đưa (lọc trước).",
      },
      terms: [
        { term: "grep", definition: "Lệnh lọc các dòng chứa một mẫu chữ, ví dụ grep \"ERROR\" app.log." },
        { term: "Hook", definition: "Lệnh tự chạy tại một thời điểm (ví dụ trước khi Claude dùng công cụ) — học kỹ ở Chương 7." },
        { term: "Read deny", definition: "Quy tắc quyền chặn công cụ đọc file của Claude với một đường dẫn." },
        { term: "Code intelligence", definition: "Plugin cho Claude điều hướng ký hiệu chính xác (định nghĩa, tham chiếu) và thấy lỗi kiểu." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: đọc rộng và đọc trúng",
      infographic: {
        kind: "compare",
        columns: [
          { title: "Đọc rộng (tốn)", tone: "bad", items: ["“Tìm hiểu toàn bộ dự án rồi sửa lỗi”", "Dán log 10.000 dòng", "Claude tự mở data/raw 2 GB", "Bật 5 máy chủ MCP không dùng", "Grep rồi mở 12 file tìm định nghĩa hàm"] },
          { title: "Đọc trúng (gọn)", tone: "good", items: ["“Sửa hàm tinhTong trong @src/report.js”", "grep \"ERROR\" app.log → 40 dòng", "Read(./data/raw/**) trong deny", "Dùng gh thay MCP; /mcp tắt máy chủ thừa", "Plugin code intelligence: nhảy tới định nghĩa"] },
        ],
      },
      caption: "Theo các mục giảm token trong trang Manage costs (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: trước khi để Claude đọc",
      mermaid: `flowchart TD
  A["Việc cần làm"] --> B{"Biết file / hàm liên quan?"}
  B -->|"Có"| C["Chỉ rõ bằng @file và tên hàm"]
  B -->|"Không"| D["Mô tả triệu chứng cụ thể, để Claude tìm hẹp"]
  C --> E{"Có dữ liệu lớn (log, output)?"}
  D --> E
  E -->|"Có"| F["Lọc trước: grep/head/tail hoặc hook"]
  E -->|"Không"| G{"Có thư mục không được đọc?"}
  F --> G
  G -->|"Có"| H["Read deny trong permissions; sandbox nếu cần chặn cả shell"]
  G -->|"Không"| I["Giao việc"]
  H --> I`,
      caption: "Ba câu hỏi trước khi giao việc giúp giảm phần lớn lần đọc thừa.",
      alt: "Lưu đồ: nếu biết file hoặc hàm liên quan thì chỉ rõ bằng @file và tên hàm, nếu không thì mô tả triệu chứng cụ thể. Nếu có dữ liệu lớn thì lọc trước bằng grep, head, tail hoặc hook. Nếu có thư mục không được đọc thì thêm Read deny, bật sandbox nếu cần chặn cả shell. Sau đó giao việc.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu sửa lỗi",
      bad: {
        label: "Mở cửa cả kho",
        content: "Đọc hết dự án cho hiểu rồi tìm xem sao báo cáo tuần bị sai. Log ở logs/, cứ đọc hết.",
        notes: ["Quét rộng mọi thư mục.", "Đọc toàn bộ log.", "Không giới hạn phạm vi."],
      },
      good: {
        label: "Chỉ đúng chỗ",
        content: "Tổng tuần 44 trong báo cáo lệch so với file nguồn. Nghi ở hàm tinhTong trong @src/report.js. Đây là các dòng lỗi đã lọc: (dán kết quả grep \"ERROR\" logs/tuan-44.log). Chỉ cần đọc src/report.js và tests/report.test.js.",
        notes: ["File và hàm cụ thể.", "Log đã lọc.", "Giới hạn phạm vi đọc."],
      },
      takeaway: "Bạn biết càng nhiều về chỗ lỗi, hãy nói càng cụ thể — Claude đọc càng ít.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn cách giảm đọc thừa",
      sim: {
        kind: "choose",
        options: [
          { id: "mention", label: "Chỉ rõ file/hàm bằng @" },
          { id: "filter", label: "Lọc trước bằng lệnh hoặc hook" },
          { id: "deny", label: "Quy tắc Read deny" },
          { id: "cli", label: "Dùng CLI thay MCP" },
          { id: "mcp-off", label: "Tắt máy chủ MCP không dùng (/mcp)" },
          { id: "lsp", label: "Plugin code intelligence" },
        ],
        scenarios: [
          { id: "s1", text: "Bạn biết lỗi nằm trong hàm tinhTong ở src/report.js.", answer: "mention", why: "Chỉ đúng file và hàm, Claude không phải tìm." },
          { id: "s2", text: "Cần các dòng ERROR trong một log 10.000 dòng.", answer: "filter", why: "grep trước, chỉ đưa vài chục dòng." },
          { id: "s3", text: "Thư mục data/raw nặng 2 GB, Claude không cần đọc.", answer: "deny", why: "Read(./data/raw/**) trong deny chặn công cụ đọc file." },
          { id: "s4", text: "Cần đọc thông tin pull request; máy đã cài và đăng nhập gh.", answer: "cli", why: "CLI gọn hơn vì không thêm danh sách công cụ." },
          { id: "s5", text: "/context cho thấy 3 máy chủ MCP bạn không dùng tới.", answer: "mcp-off", why: "Tắt bằng /mcp để bớt phần nạp vào context." },
          { id: "s6", text: "Dự án TypeScript lớn; Claude hay grep rồi mở hàng loạt file để tìm định nghĩa hàm.", answer: "lsp", why: "Code intelligence cho “go to definition” chính xác thay cho grep + đọc nhiều file." },
        ],
      },
      intro: "Chọn biện pháp phù hợp nhất cho mỗi tình huống.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: giảm đọc thừa",
      steps: [
        { title: "Chỉ rõ chỗ cần làm", detail: "Gõ @ để chọn file; nêu tên hàm và triệu chứng.", code: { lang: "text", content: "Sửa hàm tinhTong trong @src/report.js: tổng sai khi có dòng trống. Chỉ sửa file này." } },
        { title: "Lọc dữ liệu lớn", detail: "Chạy lọc trong terminal (hoặc trong phiên với tiền tố !) rồi chỉ đưa kết quả.", code: { lang: "bash", content: "grep \"ERROR\" logs/tuan-44.log | head -50\nnpm test 2>&1 | grep -A 5 FAIL" } },
        { title: "Chặn thư mục không cần đọc", detail: "Thêm vào .claude/settings.json của dự án.", code: { lang: "json", content: "{\n  \"permissions\": {\n    \"deny\": [\"Read(./data/raw/**)\", \"Read(./.env)\"]\n  }\n}" } },
        { title: "Dọn công cụ", detail: "/mcp xem và tắt máy chủ không dùng; ưu tiên CLI như gh khi đã cài.", code: { lang: "text", content: "/mcp\n/context" } },
        { title: "Ngôn ngữ có kiểu: cân nhắc plugin code intelligence", detail: "Giúp tìm định nghĩa, tham chiếu chính xác và thấy lỗi kiểu sau khi sửa." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Dự án web-loi-qa có: src/report.js (hàm tinhTong nghi bị lỗi), logs/ (mỗi file vài chục nghìn dòng), data/raw/ (2 GB dữ liệu thô không cần đọc), và máy có gh. Viết (1) yêu cầu gửi Claude để sửa lỗi tổng tuần, (2) lệnh lọc log trước, (3) quy tắc chặn đọc data/raw, (4) một biện pháp về công cụ.",
      placeholder: "(1) Yêu cầu: …\n(2) Lọc log: …\n(3) Chặn: …\n(4) Công cụ: …",
      rubric: [
        { id: "specific", label: "Chỉ rõ file và hàm", weight: 1, check: { kind: "allGroups", groups: [["src/report.js", "report.js"], ["tinhtong"]] }, pass: "Có file và hàm.", fail: "Nêu rõ src/report.js và hàm tinhTong." },
        { id: "filter", label: "Lệnh lọc log", weight: 1, check: { kind: "regex", pattern: "(grep|tail|head)" }, pass: "Có lệnh lọc.", fail: "Dùng grep/tail/head để lọc log." },
        { id: "deny", label: "Quy tắc Read deny", weight: 1, check: { kind: "regex", pattern: "read\\(\\./data/raw" }, pass: "Có Read(./data/raw/**).", fail: "Thêm Read(./data/raw/**) vào permissions.deny." },
        { id: "tool", label: "Biện pháp công cụ", weight: 1, check: { kind: "regex", pattern: "(\\bgh\\b|/mcp|cli|code intelligence)" }, pass: "Có biện pháp công cụ.", fail: "Ví dụ: dùng gh thay MCP, tắt MCP thừa bằng /mcp." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "(1) Yêu cầu: Tổng tuần 44 lệch so với file nguồn. Sửa hàm tinhTong trong @src/report.js; chỉ đọc src/report.js và tests/report.test.js. Dưới đây là các dòng lỗi đã lọc.\n(2) Lọc log: grep \"ERROR\" logs/tuan-44.log | head -50\n(3) Chặn: thêm \"Read(./data/raw/**)\" vào permissions.deny trong .claude/settings.json.\n(4) Công cụ: dùng gh để đọc pull request thay cho máy chủ MCP; /mcp tắt máy chủ không dùng.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Yêu cầu cụ thể (file, hàm, triệu chứng, phạm vi) giúp Claude đọc ít file nhất.",
        "Lọc dữ liệu lớn trước bằng grep/head/tail hoặc hook.",
        "Read deny trong permissions chặn công cụ đọc file (nỗ lực tối đa); .claudeignore không có tác dụng; sandbox chặn ở mức hệ điều hành.",
        "CLI gọn hơn MCP khi có; tắt MCP không dùng bằng /mcp; plugin code intelligence giảm đọc file khi tìm định nghĩa.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Áp dụng vào một dự án thật của bạn trong một tuần.",
      tasks: [
        "Thêm quy tắc Read deny cho thư mục dữ liệu lớn và file bí mật.",
        "Viết sẵn 2–3 lệnh lọc log/test hay dùng và ghi vào CLAUDE.md.",
        "Dùng /context xem máy chủ MCP nào không dùng và tắt bằng /mcp.",
        "So sánh /usage trước và sau.",
      ],
      deliverable: ".claude/settings.json có quy tắc deny, CLAUDE.md có lệnh lọc, và số liệu /usage trước/sau.",
      checklist: ["Có Read deny cho dữ liệu lớn và bí mật", "Có lệnh lọc được ghi lại", "Đã tắt MCP không dùng (nếu có)"],
    },
  ],
};
