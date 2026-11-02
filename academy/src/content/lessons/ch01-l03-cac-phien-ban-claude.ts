import type { Lesson } from "@/lib/types/content";

export const lessonCacPhienBan: Lesson = {
  id: "ch01-l03",
  chapterId: "ch01",
  slug: "cac-phien-ban-claude",
  title: "Các phiên bản và khả năng của Claude",
  subtitle: "Claude là một họ mô hình: mạnh nhất, cân bằng, nhanh nhất. Chọn đúng model giúp vừa đủ tốt vừa tiết kiệm.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-02",
  objectives: [
    { id: "o1", text: "Kể tên các dòng model Claude hiện tại và mục đích chính của từng dòng (theo tài liệu ngày 02/11/2026)." },
    { id: "o2", text: "Biết các cách sử dụng Claude: ứng dụng Claude (web, desktop, điện thoại), Claude Code và Claude API." },
    { id: "o3", text: "Chọn model phù hợp dựa trên độ khó, tốc độ và khối lượng công việc." },
    { id: "o4", text: "Biết tra cứu thông tin model mới nhất ở trang chính thức vì danh sách thay đổi theo thời gian." },
  ],
  concepts: [
    { id: "model-family", label: "Họ model Claude" },
    { id: "capability-tier", label: "Mạnh – cân bằng – nhanh" },
    { id: "shared-capabilities", label: "Khả năng chung của các model" },
    { id: "surfaces", label: "Các cách sử dụng Claude" },
    { id: "tradeoff", label: "Đánh đổi tốc độ, chi phí, năng lực" },
    { id: "model-id", label: "Mã model và vòng đời" },
    { id: "official-source", label: "Nguồn thông tin chính thức" },
  ],
  hints: [
    "Không chắc chọn model nào? Tài liệu Anthropic (11/2026) khuyên bắt đầu với Claude Opus 5.5 cho hầu hết công việc.",
    "Việc khối lượng lớn, cần nhanh (phân loại, trích xuất) → nghĩ đến Haiku.",
    "Thông tin model thay đổi nhanh: luôn xem trang Models overview trước khi quyết định.",
  ],
  sources: [
    { label: "Anthropic — Models overview (đối chiếu ngày 02/11/2026)", href: "https://platform.claude.com/docs/en/about-claude/models/overview" },
    { label: "Anthropic — Choosing a model", href: "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model" },
    { label: "Claude Code — Overview", href: "https://code.claude.com/docs/en/overview" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "“Claude” không phải một model duy nhất mà là **một họ model**. Theo trang Models overview của Anthropic (đối chiếu ngày 02/11/2026), dòng hiện tại gồm: **Claude Fable 5.1**, **Claude Opus 5.5**, **Claude Sonnet 5.5** và **Claude Haiku 5.5**.",
        "Mỗi dòng có thế mạnh riêng: **Fable 5.1** cho suy luận đòi hỏi cao và công việc tác tử dài hơi; **Opus 5.5** cho lập trình và công việc tri thức dài hơi — và được khuyên dùng làm điểm khởi đầu cho hầu hết công việc; **Sonnet 5.5** là sự kết hợp tốt nhất giữa tốc độ và trí tuệ; **Haiku 5.5** cho việc khối lượng lớn, cần phản hồi nhanh như phân loại, trích xuất, định tuyến.",
        "Tất cả các model hiện tại đều nhận **văn bản và hình ảnh**, trả về văn bản, đa ngôn ngữ, dùng được công cụ, và có **context window 1 triệu token**.",
        "Bạn dùng Claude qua: **ứng dụng Claude** (web claude.ai, desktop, điện thoại), **Claude Code** (lập trình trong terminal, IDE, desktop, web) và **Claude API** cho lập trình viên tích hợp vào hệ thống. Model có sẵn trong ứng dụng tuỳ theo gói sử dụng.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Giống đội xe của công ty: xe tải lớn chở hàng nặng đường dài (Fable/Opus), xe bán tải đa dụng (Sonnet), xe máy giao hàng nhanh số lượng lớn (Haiku). Không phải chuyến nào cũng cần xe tải.",
      },
      terms: [
        { term: "Model", definition: "Một phiên bản cụ thể của Claude, ví dụ Claude Sonnet 5.5." },
        { term: "Model ID", definition: "Mã dùng khi gọi API, ví dụ claude-sonnet-5-5." },
        { term: "Latency", definition: "Độ trễ: thời gian từ lúc gửi đến lúc nhận câu trả lời." },
        { term: "Context window", definition: "Lượng văn bản tối đa model xem xét được trong một lượt (1M token với các model hiện tại)." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bản đồ các dòng model",
      visual: "model-tiers",
      caption: "Số liệu lấy từ trang Models overview của Anthropic ngày 02/11/2026. Danh sách và giá có thể thay đổi — luôn kiểm tra trang chính thức.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: chọn model như thế nào?",
      mermaid: `flowchart TD
  S["Công việc của bạn"] --> Q1{"Khối lượng rất lớn, cần trả lời tức thì?"}
  Q1 -- "Có" --> H["Haiku 5.5"]
  Q1 -- "Không" --> Q2{"Cần cân bằng tốc độ và chất lượng?"}
  Q2 -- "Có" --> SO["Sonnet 5.5"]
  Q2 -- "Chưa chắc" --> O["Bắt đầu với Opus 5.5"]
  O --> Q3{"Opus vẫn chưa đạt với suy luận rất khó?"}
  Q3 -- "Đúng" --> F["Fable 5.1"]`,
      caption: "Theo hướng dẫn chính thức: chưa chắc thì bắt đầu với Opus 5.5; thử nghiệm trên dữ liệu thật rồi điều chỉnh.",
      alt: "Lưu đồ chọn model: khối lượng lớn cần nhanh thì Haiku 5.5; cần cân bằng thì Sonnet 5.5; chưa chắc thì bắt đầu với Opus 5.5; nếu Opus chưa đạt với suy luận rất khó thì dùng Fable 5.1.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Chọn chưa hợp lý",
        content: "Dùng model mạnh nhất, chậm nhất để phân loại 50.000 email mỗi ngày vào 6 nhóm.",
        notes: ["Tốn chi phí và thời gian không cần thiết.", "Việc phân loại đơn giản, khối lượng lớn là thế mạnh của model nhanh."],
      },
      good: {
        label: "Chọn hợp lý",
        content: "Phân loại email bằng Haiku 5.5; email phức tạp (khiếu nại kỹ thuật) chuyển sang model mạnh hơn hoặc nhân viên xử lý.",
        notes: ["Đúng model cho đúng việc.", "Kết hợp nhiều model theo độ khó."],
      },
      takeaway: "Model “tốt nhất” là model đủ chất lượng cho việc của bạn với tốc độ và chi phí phù hợp — hãy thử trên dữ liệu thật.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn model cho 4 tình huống",
      widget: "model-picker",
      intro: "Với mỗi tình huống, chọn model phù hợp nhất theo hướng dẫn chính thức của Anthropic. Mỗi lựa chọn đều có giải thích.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: kiểm tra model bạn đang dùng",
      steps: [
        { title: "Trong ứng dụng Claude", detail: "Mở một cuộc hội thoại, nhìn vào bộ chọn model gần ô nhập tin nhắn. Danh sách model hiển thị tuỳ theo gói tài khoản của bạn." },
        { title: "Trong Claude Code", detail: "Gõ lệnh `/model` trong phiên làm việc để xem và đổi model.", code: { lang: "bash", content: "claude\n# trong phiên Claude Code:\n/model" } },
        { title: "Với Claude API", detail: "Model được chọn bằng tham số `model` trong mỗi request, ví dụ `claude-sonnet-5-5`." },
        { title: "Tra cứu thông tin mới nhất", detail: "Mở trang Models overview của Anthropic để xem danh sách, giá và ngày ngừng hỗ trợ (retirement) hiện hành." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Phòng QA có 3 việc: (1) gắn nhãn 20.000 phiếu báo lỗi mỗi tháng theo 8 loại lỗi, (2) trợ lý trả lời nhanh câu hỏi của công nhân về quy trình, (3) phân tích nguyên nhân gốc phức tạp từ nhiều báo cáo dài. Đề xuất model cho từng việc và giải thích ngắn gọn.",
      placeholder: "(1) … vì … (2) … vì … (3) … vì …",
      rubric: [
        { id: "haiku", label: "Việc (1) → Haiku", weight: 1, check: { kind: "anyKeyword", keywords: ["haiku"] }, pass: "Đã chọn model nhanh cho việc khối lượng lớn.", fail: "Gắn nhãn khối lượng lớn phù hợp với Haiku 5.5." },
        { id: "sonnet", label: "Việc (2) → Sonnet", weight: 1, check: { kind: "anyKeyword", keywords: ["sonnet"] }, pass: "Đã chọn model cân bằng.", fail: "Trợ lý cần nhanh mà vẫn thông minh: Sonnet 5.5." },
        { id: "opus", label: "Việc (3) → Opus (hoặc Fable)", weight: 1, check: { kind: "anyKeyword", keywords: ["opus", "fable"] }, pass: "Đã chọn model mạnh cho suy luận phức tạp.", fail: "Phân tích phức tạp: bắt đầu với Opus 5.5 (Fable 5.1 nếu Opus chưa đạt)." },
        { id: "reason", label: "Có giải thích theo tốc độ / độ khó / khối lượng", weight: 1, check: { kind: "anyKeyword", keywords: ["nhanh", "khối lượng", "phức tạp", "chi phí", "tốc độ", "suy luận"] }, pass: "Có lý do.", fail: "Giải thích dựa trên tốc độ, khối lượng hoặc độ khó." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "(1) Haiku 5.5: gắn nhãn là việc phân loại khối lượng lớn, cần nhanh và chi phí thấp.\n(2) Sonnet 5.5: trợ lý trả lời cần nhanh nhưng vẫn hiểu tốt câu hỏi về quy trình.\n(3) Opus 5.5: phân tích nguyên nhân gốc từ nhiều tài liệu dài cần suy luận sâu; nếu thử nghiệm thấy chưa đạt thì cân nhắc Fable 5.1.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Claude là một họ model; dòng hiện tại (02/11/2026): Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 5.5.",
        "Chưa chắc thì bắt đầu với Opus 5.5; Sonnet cân bằng tốc độ – trí tuệ; Haiku cho việc khối lượng lớn, cần nhanh; Fable cho suy luận rất khó.",
        "Mọi model hiện tại nhận văn bản và hình ảnh, đa ngôn ngữ, dùng công cụ, context window 1M token.",
        "Dùng Claude qua ứng dụng Claude, Claude Code hoặc Claude API.",
        "Thông tin model thay đổi theo thời gian — luôn kiểm tra trang chính thức.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Liệt kê công việc lặp lại của nhóm bạn và thử chọn model cho từng việc.",
      tasks: [
        "Viết danh sách 5 việc nhóm bạn có thể nhờ Claude.",
        "Ghi cho mỗi việc: khối lượng, yêu cầu tốc độ, độ khó.",
        "Đề xuất model và lý do; đánh dấu việc nào cần thử nghiệm so sánh hai model.",
      ],
      deliverable: "Bảng 4 cột: Việc | Khối lượng & tốc độ | Độ khó | Model đề xuất.",
      checklist: ["Đã đối chiếu trang Models overview mới nhất", "Mỗi việc có lý do chọn model", "Đã lưu bảng vào ô Ghi chú"],
    },
  ],
};
