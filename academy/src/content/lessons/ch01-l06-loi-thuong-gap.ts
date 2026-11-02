import type { Lesson } from "@/lib/types/content";

export const lessonLoiThuongGap: Lesson = {
  id: "ch01-l06",
  chapterId: "ch01",
  slug: "loi-thuong-gap-cua-ai",
  title: "Các lỗi thường gặp của AI",
  subtitle: "Bịa thông tin, hiểu sai yêu cầu, tính toán nhầm, dùng thông tin cũ — nhận diện từng loại và kiểm chứng đúng cách.",
  level: "beginner",
  estimatedMinutes: 25,
  updatedAt: "2026-11-02",
  objectives: [
    { id: "o1", text: "Nhận diện các loại lỗi thường gặp: bịa thông tin (hallucination), hiểu sai yêu cầu, sai tính toán, thông tin lỗi thời, quá tự tin." },
    { id: "o2", text: "Áp dụng kỹ thuật giảm lỗi Anthropic khuyên dùng: cho phép nói “không biết”, trích dẫn nguyên văn, kiểm chứng bằng trích dẫn, giới hạn nguồn." },
    { id: "o3", text: "Đối chiếu câu trả lời với tài liệu gốc để phát hiện lỗi." },
    { id: "o4", text: "Xây quy trình kiểm tra phù hợp với mức độ rủi ro của công việc." },
  ],
  concepts: [
    { id: "hallucination", label: "Bịa thông tin (hallucination)" },
    { id: "misunderstanding", label: "Hiểu sai yêu cầu" },
    { id: "calculation", label: "Sai tính toán" },
    { id: "outdated", label: "Thông tin lỗi thời" },
    { id: "allow-unknown", label: "Cho phép nói “không biết”" },
    { id: "direct-quotes", label: "Trích dẫn nguyên văn" },
    { id: "restrict-sources", label: "Giới hạn nguồn thông tin" },
    { id: "verification", label: "Đối chiếu với tài liệu gốc" },
    { id: "risk-process", label: "Quy trình kiểm tra theo rủi ro" },
  ],
  hints: [
    "Với mỗi câu khẳng định, hỏi: câu này nằm ở đâu trong tài liệu gốc?",
    "Con số, tên riêng, trích dẫn, số hiệu tiêu chuẩn là những chỗ dễ bị bịa nhất.",
    "Anthropic lưu ý: các kỹ thuật giảm lỗi giúp giảm đáng kể nhưng không loại bỏ hoàn toàn hallucination.",
  ],
  sources: [
    { label: "Anthropic — Reduce hallucinations", href: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations" },
    { label: "Anthropic — Glossary (HHH: honest)", href: "https://platform.claude.com/docs/en/about-claude/glossary" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Anthropic định nghĩa **hallucination** là khi mô hình tạo ra văn bản sai sự thật hoặc mâu thuẫn với ngữ cảnh được cung cấp. Ngay cả model tiên tiến nhất cũng có thể mắc lỗi này.",
        "Các lỗi thường gặp: **bịa thông tin** (số liệu, nguồn, số hiệu tiêu chuẩn không có thật), **hiểu sai yêu cầu** (làm đúng việc khác), **sai tính toán** khi có nhiều phép tính, **thông tin lỗi thời** (sau mốc kiến thức), và **quá tự tin** — trình bày điều chưa chắc như chắc chắn.",
        "Anthropic khuyên các kỹ thuật cơ bản: **cho phép Claude nói “không biết”**, với tài liệu dài thì **trích dẫn nguyên văn trước** rồi mới phân tích, **kiểm chứng bằng trích dẫn** (câu nào không tìm được trích dẫn thì bỏ), và **giới hạn chỉ dùng tài liệu được cung cấp**. Các kỹ thuật này giảm đáng kể nhưng **không loại bỏ hoàn toàn** lỗi — thông tin quan trọng vẫn phải được kiểm chứng.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Một nhân viên mới rất muốn giúp, khi không chắc vẫn trả lời cho trọn vẹn. Cách quản lý tốt: cho phép họ nói “em chưa chắc”, yêu cầu ghi rõ lấy thông tin từ trang nào, và kiểm tra những con số quan trọng.",
      },
      terms: [
        { term: "Hallucination", definition: "Văn bản sai sự thật hoặc mâu thuẫn với ngữ cảnh, nhưng nghe hợp lý." },
        { term: "Grounding", definition: "Neo câu trả lời vào trích dẫn nguyên văn từ tài liệu thật." },
        { term: "Citation", definition: "Trích dẫn nguồn cho từng khẳng định để có thể kiểm tra." },
        { term: "Best-of-N", definition: "Chạy cùng prompt nhiều lần và so sánh; kết quả mâu thuẫn là dấu hiệu nghi vấn." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: 5 loại lỗi và cách phát hiện",
      visual: "ai-error-types",
      caption: "Mỗi loại lỗi có dấu hiệu nhận biết và cách kiểm tra riêng.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: kiểm chứng từng khẳng định",
      mermaid: `flowchart TD
  A["Câu trả lời của AI"] --> B["Tách thành từng khẳng định"]
  B --> C{"Tìm được trích dẫn trong tài liệu gốc?"}
  C -- "Có, khớp" --> D["Giữ lại"]
  C -- "Có, nhưng khác" --> E["Sửa theo tài liệu"]
  C -- "Không tìm thấy" --> F["Đánh dấu nghi vấn hoặc loại bỏ"]
  D --> G["Kết quả đã kiểm chứng"]
  E --> G
  F --> G`,
      caption: "Quy tắc đơn giản: không có căn cứ trong tài liệu thì không dùng.",
      alt: "Lưu đồ: tách câu trả lời thành từng khẳng định; nếu tìm được trích dẫn khớp thì giữ, nếu khác thì sửa theo tài liệu, nếu không tìm thấy thì đánh dấu nghi vấn hoặc loại bỏ; tất cả dẫn tới kết quả đã kiểm chứng.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Prompt dễ bị bịa",
        content: "Viết đoạn giới thiệu máy biến áp MBA-250 của công ty, nêu các chứng nhận đạt được.",
        notes: ["Không có tài liệu → Claude có thể tự “điền” chứng nhận nghe hợp lý.", "Không có yêu cầu trích dẫn hay cho phép nói không biết."],
      },
      good: {
        label: "Prompt giảm bịa",
        content: "Chỉ dùng phiếu thông số MBA-250 bên dưới. Viết đoạn giới thiệu; mỗi thông số kèm trích dẫn dòng tương ứng. Nếu phiếu không có thông tin về chứng nhận, ghi “chưa có thông tin”.",
        notes: ["Giới hạn nguồn.", "Yêu cầu trích dẫn.", "Cho phép thừa nhận thiếu thông tin."],
      },
      takeaway: "Ba công cụ mạnh nhất: giới hạn nguồn, yêu cầu trích dẫn, cho phép nói “không biết”.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: kiểm chứng câu trả lời với tài liệu gốc",
      widget: "fact-checker",
      intro:
        "Phiếu thông số là dữ liệu mẫu. Các khẳng định bên cạnh là một “câu trả lời của AI” do người biên soạn viết để luyện tập — cố ý có lỗi, không phải câu trả lời thật của Claude. Đánh giá từng khẳng định.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: quy trình kiểm chứng",
      steps: [
        { title: "Giới hạn nguồn ngay trong prompt", detail: "“Chỉ dùng tài liệu trong thẻ <tai_lieu>, không dùng kiến thức chung.”" },
        { title: "Cho phép nói “không biết”", detail: "“Nếu tài liệu không đủ thông tin, hãy nói rõ thay vì đoán.”" },
        {
          title: "Yêu cầu trích dẫn trước khi phân tích",
          detail: "Với tài liệu dài, yêu cầu trích nguyên văn các đoạn liên quan, rồi chỉ phân tích dựa trên các trích dẫn đó.",
          code: { lang: "text", content: "1. Trích nguyên văn các đoạn trong <tai_lieu> liên quan đến câu hỏi. Nếu không có, ghi \"Không tìm thấy trích dẫn\".\n2. Chỉ dựa trên các trích dẫn trên để trả lời, ghi số thứ tự trích dẫn sau mỗi ý." },
        },
        { title: "Tự kiểm chứng", detail: "Sau khi có câu trả lời: “Với mỗi khẳng định, tìm trích dẫn hỗ trợ; không tìm được thì xoá khẳng định đó.”" },
        { title: "Kiểm tra lại bằng mắt người", detail: "Đối chiếu con số, tên riêng, số hiệu tiêu chuẩn với tài liệu gốc — đặc biệt khi dùng cho khách hàng." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết lại prompt “Liệt kê các tiêu chuẩn mà máy biến áp của chúng ta phải đáp ứng” để giảm nguy cơ Claude bịa ra số hiệu tiêu chuẩn. Áp dụng ít nhất 3 kỹ thuật trong bài.",
      placeholder: "Chỉ dùng tài liệu… Nếu… Với mỗi tiêu chuẩn…",
      rubric: [
        { id: "restrict", label: "Giới hạn nguồn", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ dùng", "chỉ dựa", "chỉ sử dụng", "không dùng kiến thức"] }, pass: "Có giới hạn nguồn.", fail: "Thêm “chỉ dùng tài liệu được cung cấp”." },
        { id: "unknown", label: "Cho phép nói không biết", weight: 1, check: { kind: "anyKeyword", keywords: ["không biết", "không đủ", "không tìm thấy", "nói rõ", "chưa có thông tin"] }, pass: "Có cho phép thừa nhận.", fail: "Cho phép Claude nói “không tìm thấy”." },
        { id: "quote", label: "Yêu cầu trích dẫn", weight: 1, check: { kind: "anyKeyword", keywords: ["trích dẫn", "nguyên văn", "dẫn nguồn", "trang", "mục"] }, pass: "Có yêu cầu trích dẫn.", fail: "Yêu cầu trích dẫn nguyên văn cho mỗi tiêu chuẩn." },
        { id: "doc", label: "Cung cấp tài liệu", weight: 1, check: { kind: "anyKeyword", keywords: ["tài liệu", "hợp đồng", "đặc tính kỹ thuật", "dưới đây", "đính kèm", "tai_lieu"] }, pass: "Có tài liệu nguồn.", fail: "Nêu tài liệu bạn đưa vào (hợp đồng, yêu cầu kỹ thuật…)." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Dưới đây là hợp đồng và đặc tính kỹ thuật của dự án trong thẻ <tai_lieu>. Chỉ dùng tài liệu này, không dùng kiến thức chung.\nHãy liệt kê các tiêu chuẩn mà máy biến áp phải đáp ứng. Với mỗi tiêu chuẩn, trích nguyên văn câu trong tài liệu và ghi mục tương ứng.\nNếu tài liệu không nêu tiêu chuẩn nào, hãy nói rõ \"không tìm thấy trong tài liệu\" thay vì đoán.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Hallucination: văn bản sai sự thật hoặc mâu thuẫn ngữ cảnh nhưng nghe hợp lý — model tốt nhất cũng có thể mắc.",
        "Lỗi thường gặp: bịa thông tin, hiểu sai yêu cầu, sai tính toán, thông tin lỗi thời, quá tự tin.",
        "Kỹ thuật giảm lỗi: cho phép nói “không biết”, trích dẫn nguyên văn, kiểm chứng bằng trích dẫn, giới hạn nguồn.",
        "Kỹ thuật giúp giảm, không loại bỏ hoàn toàn lỗi — luôn kiểm chứng thông tin quan trọng.",
        "Mức kiểm tra tỉ lệ với rủi ro của công việc.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Áp dụng quy trình kiểm chứng cho một tài liệu thật của bạn.",
      tasks: [
        "Chọn một tài liệu kỹ thuật hoặc hợp đồng (đã che thông tin nhạy cảm).",
        "Hỏi Claude 3 câu về tài liệu, dùng đủ: giới hạn nguồn, trích dẫn, cho phép nói không biết.",
        "Đối chiếu từng trích dẫn với tài liệu gốc và ghi lại có khẳng định nào sai không.",
      ],
      deliverable: "Bảng: Câu hỏi | Trích dẫn Claude đưa ra | Khớp tài liệu? | Ghi chú.",
      checklist: ["Đã dùng đủ 3 kỹ thuật trong prompt", "Đã đối chiếu tất cả trích dẫn", "Đã ghi kết quả vào ô Ghi chú"],
    },
  ],
};
