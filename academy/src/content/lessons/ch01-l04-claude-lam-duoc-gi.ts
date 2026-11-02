import type { Lesson } from "@/lib/types/content";

export const lessonClaudeLamDuocGi: Lesson = {
  id: "ch01-l04",
  chapterId: "ch01",
  slug: "claude-lam-duoc-gi",
  title: "Claude có thể làm gì?",
  subtitle: "Viết, phân tích, đọc hình ảnh, lập trình, tạo ứng dụng nhỏ — và làm nhiều hơn khi được kết nối công cụ. Quyết định quan trọng vẫn thuộc về bạn.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-02",
  objectives: [
    { id: "o1", text: "Kể các nhóm việc Claude làm tốt với nội dung bạn cung cấp: viết, phân tích tài liệu và dữ liệu, đọc hình ảnh, lập trình, tạo Artifacts." },
    { id: "o2", text: "Nhận biết việc cần kết nối công cụ hoặc quyền truy cập: tìm kiếm web, connector/MCP, Claude Code trên máy." },
    { id: "o3", text: "Nhận ra việc phải do con người quyết định hoặc kiểm chứng." },
    { id: "o4", text: "Lập danh sách việc của bản thân có thể giao cho Claude, kèm cách kiểm tra kết quả." },
  ],
  concepts: [
    { id: "writing", label: "Viết và biên tập" },
    { id: "analysis", label: "Phân tích tài liệu và dữ liệu" },
    { id: "vision", label: "Đọc hình ảnh" },
    { id: "coding", label: "Lập trình" },
    { id: "artifacts", label: "Artifacts" },
    { id: "tools", label: "Kết nối công cụ (web, MCP)" },
    { id: "claude-code", label: "Claude Code" },
    { id: "human-judgment", label: "Quyết định của con người" },
    { id: "privacy", label: "Dữ liệu nhạy cảm" },
  ],
  hints: [
    "Hỏi bản thân: thông tin cần thiết đã nằm trong hội thoại chưa? Nếu chưa, Claude cần bạn cung cấp hoặc cần một công cụ được kết nối.",
    "Claude có thể soạn bản nháp quyết định, nhưng người ký duyệt vẫn là bạn.",
    "Kiểm tra quy định công ty trước khi đưa dữ liệu khách hàng hoặc tài liệu mật vào bất kỳ công cụ AI nào.",
  ],
  sources: [
    { label: "Anthropic — Intro to Claude", href: "https://platform.claude.com/docs/en/intro" },
    { label: "Claude Help Center — What are artifacts", href: "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them" },
    { label: "Claude Code — Overview", href: "https://code.claude.com/docs/en/overview" },
    { label: "Anthropic — Glossary (MCP)", href: "https://platform.claude.com/docs/en/about-claude/glossary" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Với **nội dung bạn đưa vào**, Claude làm tốt nhiều việc: **viết và biên tập** (email, báo cáo, biên bản), **tóm tắt và phân tích** tài liệu, bảng số liệu, **đọc hình ảnh** (ảnh chụp bảng đo, sơ đồ), **giải thích và viết code**, và tạo **Artifacts** — nội dung độc lập như trang web nhỏ, biểu đồ, ứng dụng tương tác ngay trong cuộc trò chuyện.",
        "Khi **được kết nối công cụ**, Claude làm được thêm: **tìm kiếm web** (khi tính năng được bật), làm việc với hệ thống khác qua **connector/MCP** — giao thức mở, Anthropic ví như “cổng USB-C cho ứng dụng AI” — hoặc dùng **Claude Code** để đọc, sửa file và chạy lệnh trong dự án trên máy bạn.",
        "Có những việc **con người phải quyết định và chịu trách nhiệm**: ký duyệt xuất xưởng, kết luận pháp lý, quyết định nhân sự. Claude giúp chuẩn bị thông tin và bản nháp; bạn kiểm chứng và quyết định.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Claude giống một trợ lý giỏi ngồi cạnh bạn: đưa giấy tờ thì đọc, tóm tắt, soạn thảo rất nhanh. Muốn trợ lý tra hệ thống công ty thì phải cấp quyền truy cập. Còn chữ ký trên biên bản vẫn là của bạn.",
      },
      terms: [
        { term: "Artifact", definition: "Nội dung độc lập Claude tạo trong hội thoại: tài liệu, trang web, biểu đồ, ứng dụng nhỏ." },
        { term: "MCP", definition: "Model Context Protocol — giao thức mở chuẩn hoá cách kết nối AI với nguồn dữ liệu và công cụ." },
        { term: "Connector", definition: "Kết nối có sẵn giúp Claude dùng dịch vụ khác (ví dụ lịch, tài liệu) khi bạn cho phép." },
        { term: "Claude Code", definition: "Công cụ lập trình có tác tử: đọc codebase, sửa file, chạy lệnh." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bản đồ khả năng",
      visual: "capability-map",
      caption: "Ba vùng: làm ngay với nội dung bạn đưa vào · cần kết nối công cụ · cần con người quyết định.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: có nên giao việc này cho Claude?",
      mermaid: `flowchart TD
  T["Một việc cần làm"] --> A{"Thông tin cần thiết đã có trong hội thoại?"}
  A -- "Có" --> B["Claude làm ngay: viết, tóm tắt, phân tích"]
  A -- "Chưa" --> C{"Có thể cung cấp hoặc kết nối công cụ?"}
  C -- "Dán / tải file lên" --> B
  C -- "Cần hệ thống khác" --> D["Bật tìm kiếm web, connector/MCP hoặc dùng Claude Code"]
  B --> E{"Kết quả dùng để ra quyết định quan trọng?"}
  D --> E
  E -- "Có" --> F["Con người kiểm chứng và quyết định"]
  E -- "Không" --> G["Kiểm tra nhanh rồi sử dụng"]`,
      caption: "Hai câu hỏi then chốt: thông tin ở đâu, và ai chịu trách nhiệm quyết định.",
      alt: "Lưu đồ: nếu thông tin đã có trong hội thoại thì Claude làm ngay; nếu chưa, cung cấp file hoặc kết nối công cụ. Sau đó, nếu kết quả dùng cho quyết định quan trọng thì con người kiểm chứng và quyết định, nếu không thì kiểm tra nhanh rồi dùng.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Giao việc chưa phù hợp",
        content: "Claude, hãy quyết định giúp tôi có xuất xưởng lô máy có tổn hao sát ngưỡng hay không.",
        notes: ["Đây là quyết định chất lượng cần người có thẩm quyền.", "Claude không có kết quả thử nghiệm đầy đủ nếu bạn không cung cấp."],
      },
      good: {
        label: "Giao việc phù hợp",
        content: "Đây là kết quả thử nghiệm lô T630 và tiêu chuẩn nội bộ. Hãy lập bảng so sánh từng máy với ngưỡng, đánh dấu máy sát ngưỡng (trong 2%) để tôi xem xét.",
        notes: ["Claude chuẩn bị thông tin rõ ràng, có căn cứ.", "Người phụ trách QA ra quyết định cuối cùng."],
      },
      takeaway: "Giao cho Claude phần chuẩn bị, tổng hợp, soạn thảo; giữ phần quyết định và chịu trách nhiệm cho con người.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: phân loại 8 công việc",
      widget: "capability-sorter",
      intro: "Chọn nhóm phù hợp cho từng công việc rồi bấm Kiểm tra. Mỗi công việc có giải thích riêng.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: chọn việc đầu tiên để giao cho Claude",
      steps: [
        { title: "Liệt kê việc lặp lại hằng tuần", detail: "Ví dụ: tổng hợp báo cáo, trả lời email mẫu, chuyển ảnh phiếu đo thành bảng." },
        { title: "Đánh dấu thông tin cần có", detail: "Việc nào chỉ cần tài liệu bạn có sẵn? Việc nào cần hệ thống khác (ERP, email, web)?" },
        { title: "Kiểm tra dữ liệu nhạy cảm", detail: "Che hoặc bỏ thông tin cá nhân, giá nội bộ, bí mật kỹ thuật nếu quy định công ty yêu cầu." },
        { title: "Bắt đầu với việc rủi ro thấp", detail: "Chọn việc mà sai sót dễ phát hiện, ví dụ định dạng lại bảng, soạn nháp email." },
        { title: "Đặt cách kiểm tra", detail: "Mỗi việc có một bước kiểm tra: đối chiếu số liệu, đọc lại trước khi gửi, người duyệt ký." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết 3 việc trong công việc của bạn (hoặc của một kỹ sư QA) có thể giao cho Claude. Với mỗi việc ghi: dữ liệu cần cung cấp, có cần kết nối công cụ không, và cách kiểm tra kết quả.",
      placeholder: "1. Việc: … — Dữ liệu: … — Công cụ: … — Kiểm tra: …",
      rubric: [
        { id: "three", label: "Có 3 việc", weight: 1, check: { kind: "minMatches", pattern: "(^|\\n)\\s*(\\d+[.)]|-|•)", value: 3 }, pass: "Có ít nhất 3 việc.", fail: "Liệt kê 3 việc, mỗi việc một dòng (1., 2., 3.)." },
        { id: "data", label: "Nêu dữ liệu cần cung cấp", weight: 1, check: { kind: "anyKeyword", keywords: ["dữ liệu", "file", "bảng", "tài liệu", "ảnh", "báo cáo"] }, pass: "Có nêu dữ liệu.", fail: "Ghi rõ dữ liệu cần đưa cho Claude." },
        { id: "tool", label: "Xét đến công cụ/kết nối", weight: 1, check: { kind: "anyKeyword", keywords: ["công cụ", "kết nối", "connector", "mcp", "web", "claude code", "không cần"] }, pass: "Có xét đến công cụ.", fail: "Ghi việc nào cần kết nối công cụ (hoặc không cần)." },
        { id: "check", label: "Có cách kiểm tra", weight: 1, check: { kind: "anyKeyword", keywords: ["kiểm tra", "đối chiếu", "duyệt", "so sánh", "đọc lại"] }, pass: "Có cách kiểm tra.", fail: "Thêm cách kiểm tra cho mỗi việc." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "1. Việc: tổng hợp số lỗi tuần — Dữ liệu: file Excel phiếu lỗi — Công cụ: không cần — Kiểm tra: đối chiếu tổng với file gốc.\n2. Việc: chuyển ảnh phiếu đo thành bảng — Dữ liệu: ảnh chụp rõ nét — Công cụ: không cần — Kiểm tra: đối chiếu từng số với ảnh.\n3. Việc: tra tiêu chuẩn mới nhất về thử nghiệm — Dữ liệu: tên tiêu chuẩn — Công cụ: cần tìm kiếm web — Kiểm tra: mở nguồn gốc và đọc lại mục liên quan.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Với nội dung bạn đưa vào, Claude viết, tóm tắt, phân tích, đọc hình ảnh, lập trình và tạo Artifacts.",
        "Khi được kết nối: tìm kiếm web, connector/MCP, Claude Code làm việc với file và lệnh trên máy.",
        "Quyết định quan trọng và chữ ký thuộc về con người; Claude chuẩn bị thông tin và bản nháp.",
        "Kiểm tra quy định trước khi đưa dữ liệu nhạy cảm vào công cụ AI.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Giao cho Claude một việc rủi ro thấp trong tuần này và đo thời gian tiết kiệm.",
      tasks: [
        "Chọn một việc trong danh sách bài tập.",
        "Thực hiện cùng Claude, ghi lại thời gian và số lần phải sửa.",
        "So sánh với cách làm thủ công trước đây.",
      ],
      deliverable: "Ghi chú: việc gì, mất bao lâu, sửa mấy lần, có đáng làm tiếp không.",
      checklist: ["Đã che dữ liệu nhạy cảm (nếu có)", "Đã kiểm tra kết quả trước khi dùng", "Đã ghi kết quả vào ô Ghi chú"],
    },
  ],
};
