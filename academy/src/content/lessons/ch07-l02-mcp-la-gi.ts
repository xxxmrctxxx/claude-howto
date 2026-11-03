import type { Lesson } from "@/lib/types/content";

const MCP = "https://code.claude.com/docs/en/mcp";
const FO = "https://code.claude.com/docs/en/features-overview";

export const lessonMcpLaGi: Lesson = {
  id: "ch07-l02",
  chapterId: "ch07",
  slug: "mcp-la-gi",
  title: "MCP là gì?",
  subtitle: "MCP (Model Context Protocol) là chuẩn mở để nối Claude Code với dịch vụ và dữ liệu bên ngoài — issue tracker, cơ sở dữ liệu, công cụ giám sát — qua các MCP server.",
  level: "intermediate",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích MCP và MCP server: chuẩn mở giúp Claude Code có thêm công cụ và quyền truy cập dữ liệu bên ngoài." },
    { id: "o2", text: "Phân biệt ba kiểu kết nối: HTTP (khuyên dùng cho server từ xa), SSE (đã lỗi thời), stdio (tiến trình trên máy)." },
    { id: "o3", text: "Phân biệt MCP với skill và biết cách kết hợp: MCP lo kết nối, skill dạy Claude dùng kết nối đó cho tốt." },
    { id: "o4", text: "Nhận ra rủi ro: chỉ kết nối server đáng tin; server lấy nội dung bên ngoài có thể mang theo prompt injection." },
  ],
  concepts: [
    { id: "mcp-def", label: "Model Context Protocol" },
    { id: "mcp-server", label: "MCP server" },
    { id: "mcp-use-cases", label: "Việc làm được với MCP" },
    { id: "mcp-trigger", label: "Dấu hiệu cần MCP" },
    { id: "mcp-tools-context", label: "MCP trong context" },
    { id: "transport-http", label: "Kết nối HTTP" },
    { id: "transport-sse", label: "Kết nối SSE" },
    { id: "transport-stdio", label: "Kết nối stdio" },
    { id: "mcp-vs-skill", label: "MCP và skill" },
    { id: "skill-plus-mcp", label: "Kết hợp skill + MCP" },
    { id: "trust-servers", label: "Server đáng tin" },
    { id: "prompt-injection", label: "Prompt injection" },
  ],
  hints: [
    "Bạn cứ phải copy dữ liệu từ một tab trình duyệt mà Claude không thấy → dấu hiệu cần MCP.",
    "Server từ xa: ưu tiên HTTP. SSE đã lỗi thời. stdio chạy trên máy bạn.",
    "MCP = kết nối và công cụ; skill = kiến thức và quy trình.",
  ],
  sources: [
    { label: "Claude Code — Connect Claude Code to tools via MCP (định nghĩa, transport, bảo mật)", href: MCP },
    { label: "Claude Code — Extend Claude Code (MCP vs Skill, Skill + MCP, chi phí context)", href: FO },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Công cụ có sẵn của Claude Code làm việc với **file và terminal trên máy bạn**. Còn danh sách ticket trên issue tracker, số liệu trên trang giám sát, dữ liệu trong cơ sở dữ liệu của nhóm… thì Claude không nhìn thấy — bạn phải copy dán vào. **MCP (Model Context Protocol)** là một **chuẩn mở** cho việc tích hợp AI với công cụ: mỗi **MCP server** nối một hệ thống bên ngoài và cung cấp cho Claude các **công cụ** để đọc dữ liệu hoặc thực hiện hành động trên hệ thống đó, còn kết nối và xác thực do server lo.",
        "Tài liệu Claude Code nêu các việc tiêu biểu: làm tính năng từ issue tracker, phân tích dữ liệu giám sát, truy vấn cơ sở dữ liệu, tích hợp bản thiết kế, tự động hoá quy trình. Dấu hiệu bạn cần MCP: **bạn cứ phải copy dữ liệu từ một tab trình duyệt mà Claude không thấy**.",
        "Có ba kiểu kết nối (transport): **HTTP** — khuyên dùng cho server từ xa, bạn chỉ cần URL; **SSE** — đã lỗi thời, dùng HTTP thay thế nếu có; **stdio** — server là một chương trình chạy thành tiến trình trên máy bạn (ví dụ khởi chạy bằng `npx`). Lúc mở phiên, Claude Code chỉ nạp **tên công cụ** của các server; schema đầy đủ nạp khi cần, nên server chưa dùng tốn rất ít context.",
        "**MCP khác skill**: MCP cho Claude *khả năng* — công cụ và quyền truy cập dữ liệu; skill cho Claude *kiến thức* — quy trình, quy ước, tài liệu tham khảo. Hai thứ bổ sung nhau: MCP nối vào cơ sở dữ liệu, skill ghi sơ đồ bảng và mẫu truy vấn của nhóm. **Bảo mật**: tài liệu yêu cầu chỉ kết nối server bạn tin tưởng; server lấy nội dung từ bên ngoài có thể khiến bạn gặp rủi ro **prompt injection** — nội dung độc hại cài chỉ thị để lái Claude làm điều bạn không muốn.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Claude giống một nhân viên giỏi ngồi trong văn phòng (máy bạn). MCP server là thẻ ra vào và đường dây nội bộ tới từng phòng ban: kho, kế toán, bảo trì. Skill là sổ tay hướng dẫn cách làm việc với từng phòng. Chỉ cấp thẻ cho những phòng bạn tin — và nhớ rằng giấy tờ từ bên ngoài gửi vào có thể kèm “chỉ thị” giả.",
      },
      terms: [
        { term: "MCP", definition: "Model Context Protocol — chuẩn mã nguồn mở để tích hợp AI với công cụ và nguồn dữ liệu." },
        { term: "MCP server", definition: "Chương trình nối một hệ thống bên ngoài và cung cấp công cụ cho Claude." },
        { term: "Transport", definition: "Cách Claude Code nói chuyện với server: HTTP, SSE (lỗi thời) hoặc stdio." },
        { term: "Prompt injection", definition: "Nội dung bên ngoài cài chỉ thị nhằm khiến AI làm điều người dùng không yêu cầu." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: những việc MCP mở ra",
      infographic: {
        kind: "cards",
        cards: [
          { title: "Issue tracker", body: "Đọc ticket và làm tính năng theo mô tả trong ticket.", foot: "Thay cho copy ticket vào chat", icon: "list" },
          { title: "Giám sát", body: "Xem lỗi và số liệu sử dụng trên công cụ giám sát.", foot: "Phân tích dữ liệu giám sát", icon: "chart" },
          { title: "Cơ sở dữ liệu", body: "Truy vấn dữ liệu để trả lời câu hỏi hoặc kiểm tra lỗi.", foot: "Nên cấp quyền chỉ đọc khi có thể", icon: "layers" },
          { title: "Thiết kế", body: "Đọc bản thiết kế để dựng giao diện đúng hơn.", foot: "Tích hợp bản thiết kế", icon: "target" },
          { title: "Tự động hoá", body: "Tạo bản nháp, gửi thông báo trên các hệ thống đã kết nối.", foot: "Hành động thật — cân nhắc kỹ", icon: "zap" },
        ],
      },
      caption: "Theo danh sách “What you can do with MCP” trong tài liệu Claude Code (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: Claude Code nói chuyện với MCP server",
      mermaid: `flowchart LR
  A["Claude Code trên máy bạn"] -->|"HTTP (khuyên dùng)"| B["MCP server từ xa"]
  A -->|"stdio"| C["MCP server chạy trên máy"]
  B --> D["Dịch vụ: issue tracker, giám sát…"]
  C --> E["Tài nguyên cục bộ, công cụ nội bộ"]
  D -.->|"Nội dung ngoài: cẩn thận prompt injection"| A`,
      caption: "SSE cũng là một kiểu kết nối nhưng đã lỗi thời; dùng HTTP khi có.",
      alt: "Sơ đồ: Claude Code trên máy bạn kết nối tới MCP server từ xa bằng HTTP (khuyên dùng), server này nối tới các dịch vụ như issue tracker và giám sát; hoặc kết nối tới MCP server chạy trên máy bằng stdio, nối tới tài nguyên cục bộ. Nội dung từ dịch vụ bên ngoài quay về Claude cần cẩn thận vì có thể chứa prompt injection.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: làm việc với dữ liệu bên ngoài",
      bad: {
        label: "Copy dán thủ công mỗi ngày",
        content: "(Mở trang giám sát, copy 40 dòng lỗi, dán vào chat)\n“Đây là lỗi hôm qua, tóm tắt giúp. À còn ticket liên quan, để tôi copy nốt…”",
        notes: ["Tốn công và dễ sót dòng.", "Dữ liệu cũ ngay khi dán.", "Claude không tự tra thêm được khi cần."],
      },
      good: {
        label: "Kết nối một lần bằng MCP, rồi hỏi trực tiếp",
        content: "(Đã kết nối MCP server chính thức của công cụ giám sát và issue tracker)\n“Xem các lỗi mới trong 24 giờ qua trên công cụ giám sát, nhóm theo nguyên nhân, và đối chiếu với ticket đang mở liên quan.”",
        notes: ["Claude tự lấy dữ liệu mới nhất.", "Có thể tra thêm khi cần.", "Server chính thức, đã kiểm tra độ tin cậy."],
      },
      takeaway: "Khi bạn phải copy dữ liệu từ nơi Claude không thấy, hãy cân nhắc MCP — nhưng chỉ với server đáng tin.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: cần MCP không, kết nối kiểu gì?",
      sim: {
        kind: "choose",
        options: [
          { id: "http", label: "MCP server qua HTTP" },
          { id: "stdio", label: "MCP server qua stdio" },
          { id: "skill", label: "Skill (không cần MCP)" },
          { id: "builtin", label: "Công cụ có sẵn của Claude Code" },
        ],
        scenarios: [
          { id: "s1", text: "Dịch vụ quản lý công việc trên Internet cung cấp MCP tại https://mcp.vi-du.com/mcp; bạn chán copy ticket vào chat.", answer: "http", why: "Server từ xa có URL: dùng HTTP." },
          { id: "s2", text: "Công cụ nội bộ chỉ có dạng chương trình chạy trên máy (khởi chạy bằng npx) để đọc log cục bộ.", answer: "stdio", why: "Server là tiến trình trên máy bạn: stdio." },
          { id: "s3", text: "Nhà cung cấp có cả endpoint SSE và endpoint HTTP.", answer: "http", why: "SSE đã lỗi thời; dùng HTTP khi có." },
          { id: "s4", text: "Muốn Claude viết truy vấn theo đúng quy ước đặt tên bảng của nhóm.", answer: "skill", why: "Đây là kiến thức/quy ước — hợp với skill." },
          { id: "s5", text: "Cần Claude đọc README.md và sửa một file trong repo.", answer: "builtin", why: "Đọc, sửa file trong dự án là việc của công cụ có sẵn." },
          { id: "s6", text: "Hằng ngày bạn copy số liệu lỗi từ trang giám sát trên cloud (có MCP server từ xa) vào chat.", answer: "http", why: "Dấu hiệu cần MCP; server từ xa dùng HTTP." },
        ],
      },
      intro: "Với mỗi nhu cầu, chọn cách phù hợp nhất. Không phải việc gì cũng cần MCP.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: cân nhắc trước khi kết nối một MCP server",
      steps: [
        { title: "Gọi tên nhu cầu", detail: "Dữ liệu hoặc hành động nào Claude đang không chạm tới được? Bạn đang copy dán từ đâu?" },
        { title: "Kiểm tra công cụ có sẵn và skill trước", detail: "Nếu chỉ là file trong repo hoặc kiến thức/quy ước, không cần MCP." },
        { title: "Tìm server chính thức, ưu tiên HTTP", detail: "Đọc tài liệu của dịch vụ: server do ai phát hành, cung cấp công cụ gì, đọc/ghi những dữ liệu nào." },
        { title: "Đánh giá rủi ro", detail: "Server có lấy nội dung từ bên ngoài (web, email, ticket do người lạ tạo) không? Nếu có, cảnh giác prompt injection; cấp quyền tối thiểu." },
        { title: "Kết nối và kiểm tra", detail: "Lệnh thêm server và kiểm tra trạng thái học ở bài 7.4 và 7.6.", code: { lang: "bash", content: "claude mcp add --transport http notion https://mcp.notion.com/mcp" } },
        { title: "Bổ sung skill nếu cần", detail: "Ghi quy ước dùng hệ thống đó (định dạng, quy tắc) vào một skill để Claude dùng kết nối cho đúng." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc 4 nhu cầu của nhóm trong dữ liệu mẫu. Với mỗi nhu cầu (N1–N4), viết một dòng: có cần MCP không; nếu có thì kiểu kết nối nào; nếu không thì dùng gì; nêu rủi ro nếu có.",
      sampleData: {
        name: "Nhu cầu của nhóm QA",
        content:
          "N1: Mỗi sáng copy danh sách ticket từ issue tracker trên trình duyệt vào chat. Issue tracker có MCP server từ xa (URL https).\nN2: Muốn Claude luôn dùng pnpm thay vì npm trong dự án.\nN3: Một công cụ nội bộ chỉ chạy dạng chương trình trên máy (npx), đọc file log cục bộ.\nN4: Một server MCP tên “super-tools” trên diễn đàn, không rõ tác giả, hứa 200 công cụ và đọc cả email của bạn.",
      },
      placeholder: "N1: …\nN2: …\nN3: …\nN4: …",
      rubric: [
        { id: "n1", label: "N1: MCP qua HTTP", weight: 1, check: { kind: "regex", pattern: "n1[^\\n]*http" }, pass: "N1 đúng.", fail: "N1: server từ xa → MCP qua HTTP." },
        { id: "n2", label: "N2: không cần MCP", weight: 1, check: { kind: "regex", pattern: "n2[^\\n]*(claude\\.md|khong can mcp|khong dung mcp)" }, pass: "N2 đúng.", fail: "N2 là quy ước mỗi phiên → CLAUDE.md, không cần MCP." },
        { id: "n3", label: "N3: MCP qua stdio", weight: 1, check: { kind: "regex", pattern: "n3[^\\n]*stdio" }, pass: "N3 đúng.", fail: "N3: chương trình chạy trên máy → stdio." },
        { id: "n4", label: "N4: không kết nối khi chưa xác minh", weight: 1, check: { kind: "regex", pattern: "n4[^\\n]*(khong (cai|ket noi|dung)|chua (cai|ket noi)|tin cay|xac minh|prompt injection)" }, pass: "N4 đúng.", fail: "N4: không rõ nguồn, đọc email → không kết nối khi chưa xác minh; rủi ro prompt injection." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "N1: cần MCP — dùng server chính thức qua HTTP vì là server từ xa có URL.\nN2: không cần MCP — ghi “dùng pnpm, không dùng npm” vào CLAUDE.md.\nN3: cần MCP — server stdio chạy trên máy để đọc log cục bộ.\nN4: không kết nối khi chưa xác minh tác giả và dữ liệu nó chạm tới; đọc email là nội dung bên ngoài, có rủi ro prompt injection.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "MCP là chuẩn mở để nối Claude Code với dịch vụ và dữ liệu bên ngoài; mỗi MCP server cung cấp công cụ cho Claude.",
        "Dấu hiệu cần MCP: bạn cứ phải copy dữ liệu từ nơi Claude không thấy.",
        "Kiểu kết nối: HTTP (khuyên dùng, server từ xa), SSE (lỗi thời), stdio (tiến trình trên máy).",
        "Đầu phiên chỉ nạp tên công cụ; schema đầy đủ nạp khi cần.",
        "MCP = kết nối/công cụ; skill = kiến thức/quy trình — kết hợp được. Chỉ kết nối server đáng tin, cảnh giác prompt injection.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Áp dụng cho công việc hằng ngày của bạn hoặc nhóm.",
      tasks: [
        "Ghi lại trong một tuần: những lần bạn copy dữ liệu từ hệ thống khác vào Claude.",
        "Với hệ thống xuất hiện nhiều nhất, tìm xem có MCP server chính thức không, kiểu kết nối gì, cần quyền gì.",
        "Viết đánh giá rủi ro ngắn: server đọc/ghi gì, có lấy nội dung từ người ngoài không.",
      ],
      deliverable: "Một bảng: Hệ thống | Số lần copy/tuần | Có MCP chính thức? | Kiểu kết nối | Rủi ro | Quyết định.",
      checklist: ["Đã kiểm tra nguồn phát hành server", "Có ghi rủi ro prompt injection nếu có nội dung ngoài", "Quyết định có lý do"],
    },
  ],
};
