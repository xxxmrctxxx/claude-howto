import type { Lesson } from "@/lib/types/content";

const BP = "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices";

export const lessonFewShot: Lesson = {
  id: "ch03-l04",
  chapterId: "ch03",
  slug: "few-shot-prompting",
  title: "Few-shot prompting",
  subtitle: "Cho Claude xem vài ví dụ mẫu là một trong những cách đáng tin cậy nhất để định hướng định dạng, giọng văn và cấu trúc.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích few-shot prompting và khi nào nên dùng." },
    { id: "o2", text: "Chọn ví dụ liên quan, đa dạng, đủ số lượng (Anthropic gợi ý 3–5)." },
    { id: "o3", text: "Đóng gói ví dụ bằng thẻ <example>/<examples> để tách khỏi chỉ dẫn." },
    { id: "o4", text: "Phát hiện ví dụ có vấn đề: quá giống nhau, nhãn sai, không liên quan." },
  ],
  concepts: [
    { id: "few-shot", label: "Few-shot / multishot" },
    { id: "when-to-use", label: "Khi nào dùng ví dụ" },
    { id: "relevance", label: "Ví dụ liên quan" },
    { id: "diversity", label: "Ví dụ đa dạng" },
    { id: "example-tags", label: "Thẻ <example>" },
    { id: "example-count", label: "Số lượng ví dụ" },
    { id: "unintended-patterns", label: "Mẫu không mong muốn" },
    { id: "label-quality", label: "Ví dụ/nhãn sai" },
    { id: "generate-examples", label: "Nhờ Claude đánh giá/tạo ví dụ" },
  ],
  hints: [
    "Ví dụ dạy Claude “trông nó như thế nào” nhanh hơn mọi mô tả bằng lời.",
    "Nếu mọi ví dụ đều bắt đầu bằng cùng một câu, kết quả nhiều khả năng cũng vậy.",
    "Bạn có thể nhờ Claude đánh giá bộ ví dụ có đủ liên quan và đa dạng không.",
  ],
  sources: [{ label: "Anthropic — Prompting best practices: Use examples effectively", href: BP }],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Few-shot prompting** (còn gọi multishot) là đưa vào prompt **vài ví dụ mẫu** gồm đầu vào và đầu ra mong muốn. Theo Anthropic, ví dụ là một trong những cách **đáng tin cậy nhất** để định hướng định dạng, giọng văn và cấu trúc kết quả.",
        "Ví dụ tốt cần: **liên quan** (sát với trường hợp thật), **đa dạng** (bao cả trường hợp khó, đủ khác nhau để Claude không bắt chước một mẫu ngoài ý muốn) và **có cấu trúc** — bọc mỗi ví dụ trong thẻ `<example>`, nhiều ví dụ đặt trong `<examples>`, để Claude phân biệt ví dụ với chỉ dẫn.",
        "Anthropic gợi ý **3–5 ví dụ** cho kết quả tốt nhất. Bạn cũng có thể nhờ Claude đánh giá bộ ví dụ về độ liên quan, độ đa dạng, hoặc tạo thêm ví dụ từ bộ ban đầu — rồi tự duyệt lại.",
        "Cẩn thận: ví dụ có nhãn sai hoặc quá giống nhau sẽ dạy Claude điều sai — nó học từ ví dụ nhiều như học từ chỉ dẫn.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Hướng dẫn nhân viên mới điền phiếu: đưa 3 phiếu mẫu đã điền đúng (một phiếu bình thường, một phiếu có lỗi, một phiếu trường hợp đặc biệt) hiệu quả hơn nhiều so với đọc quy định 2 trang.",
      },
      terms: [
        { term: "Few-shot", definition: "Prompt có vài ví dụ mẫu đầu vào → đầu ra." },
        { term: "Zero-shot", definition: "Prompt không có ví dụ, chỉ có chỉ dẫn." },
        { term: "<example>", definition: "Thẻ bọc một ví dụ để tách khỏi phần chỉ dẫn." },
        { term: "Edge case", definition: "Trường hợp khó, biên, ít gặp — nên có trong bộ ví dụ." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: một prompt few-shot có cấu trúc",
      infographic: {
        kind: "annotated",
        label: "Phân loại phản hồi khách hàng",
        lines: [
          { text: "Phân loại phản hồi vào đúng một nhãn: Khen | Phàn nàn | Hỏi thông tin.", note: "Chỉ dẫn", tone: "task" },
          { text: "<examples>", note: "Bọc toàn bộ ví dụ", tone: "neutral" },
          { text: "<example>Phản hồi: Giao hàng nhanh, đóng gói kỹ. → Nhãn: Khen</example>", note: "Ví dụ thường gặp", tone: "output" },
          { text: "<example>Phản hồi: Máy kêu to sau 2 tuần. → Nhãn: Phàn nàn</example>", note: "Nhãn khác", tone: "output" },
          { text: "<example>Phản hồi: Bảo hành bao lâu? → Nhãn: Hỏi thông tin</example>", note: "Nhãn thứ ba", tone: "output" },
          { text: "<example>Phản hồi: Máy chạy tốt nhưng hoá đơn sai địa chỉ. → Nhãn: Phàn nàn</example>", note: "Trường hợp khó (đa dạng)", tone: "output" },
          { text: "</examples>", tone: "neutral" },
          { text: "Phản hồi cần phân loại: <input>…</input>", note: "Dữ liệu thật", tone: "context" },
        ],
      },
      caption: "Ví dụ bao phủ đủ các nhãn và có một trường hợp khó; thẻ giúp tách ví dụ khỏi chỉ dẫn và dữ liệu.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: xây bộ ví dụ",
      mermaid: `flowchart TD
  A["Xác định đầu ra mong muốn"] --> B["Chọn 3-5 ví dụ sát thực tế"]
  B --> C{"Đủ đa dạng? có trường hợp khó?"}
  C -- "Chưa" --> D["Thêm ví dụ khác biệt hoặc nhờ Claude gợi ý"]
  D --> C
  C -- "Rồi" --> E["Kiểm tra nhãn từng ví dụ"]
  E --> F["Bọc trong thẻ example và examples"]
  F --> G["Thử trên dữ liệu thật, điều chỉnh"]`,
      caption: "Bộ ví dụ cũng cần được kiểm tra như dữ liệu: đúng, đủ, đa dạng.",
      alt: "Lưu đồ: xác định đầu ra, chọn 3 đến 5 ví dụ, kiểm tra đa dạng, nếu chưa thì thêm ví dụ, kiểm tra nhãn, bọc trong thẻ, thử trên dữ liệu thật.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Bộ ví dụ kém",
        content: "Ví dụ: “Giao nhanh quá” → Khen. “Giao rất nhanh” → Khen. “Giao hàng nhanh ghê” → Khen.",
        notes: ["Ba ví dụ gần trùng nhau, chỉ có một nhãn.", "Claude không thấy cách xử lý Phàn nàn, Hỏi thông tin hay trường hợp lẫn lộn."],
      },
      good: {
        label: "Bộ ví dụ tốt",
        content: "4 ví dụ trong thẻ <examples>: một Khen, một Phàn nàn, một Hỏi thông tin, một trường hợp vừa khen vừa phàn nàn (gán Phàn nàn vì cần xử lý).",
        notes: ["Bao phủ đủ nhãn.", "Có trường hợp khó kèm quy tắc rõ."],
      },
      takeaway: "Đa dạng quan trọng hơn số lượng: 4 ví dụ khác nhau tốt hơn 10 ví dụ giống nhau.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn lọc bộ ví dụ",
      sim: {
        kind: "classify",
        bins: [
          { id: "keep", label: "Giữ lại" },
          { id: "dup", label: "Bỏ: gần trùng ví dụ khác" },
          { id: "off", label: "Bỏ: không liên quan" },
          { id: "fix", label: "Sửa: nhãn sai" },
        ],
        items: [
          { id: "e1", text: "“Giao hàng nhanh, đóng gói cẩn thận.” → Khen", bin: "keep", why: "Ví dụ Khen điển hình." },
          { id: "e2", text: "“Giao hàng rất nhanh, đóng gói kỹ.” → Khen", bin: "dup", why: "Gần như trùng ví dụ trước — không thêm thông tin." },
          { id: "e3", text: "“Máy biến áp kêu to sau 2 tuần, ai xử lý?” → Phàn nàn", bin: "keep", why: "Ví dụ Phàn nàn." },
          { id: "e4", text: "“Cho hỏi thời gian bảo hành bao lâu?” → Hỏi thông tin", bin: "keep", why: "Ví dụ Hỏi thông tin." },
          { id: "e5", text: "“Thời tiết hôm nay đẹp quá.” → Khen", bin: "off", why: "Không phải phản hồi về sản phẩm/dịch vụ." },
          { id: "e6", text: "“Nhân viên lắp đặt đến trễ 3 tiếng.” → Khen", bin: "fix", why: "Đây là Phàn nàn — nhãn sai sẽ dạy Claude điều sai." },
          { id: "e7", text: "“Máy chạy tốt nhưng hoá đơn ghi sai địa chỉ, nhờ sửa.” → Phàn nàn", bin: "keep", why: "Trường hợp khó giúp bộ ví dụ đa dạng." },
        ],
      },
      intro: "Bạn đang xây bộ ví dụ cho nhiệm vụ phân loại phản hồi khách hàng (Khen / Phàn nàn / Hỏi thông tin). Quyết định số phận từng ví dụ.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: viết prompt few-shot",
      steps: [
        { title: "Viết chỉ dẫn ngắn trước", detail: "Nêu nhiệm vụ và danh sách nhãn/định dạng chính xác." },
        { title: "Chọn 3–5 ví dụ đa dạng", detail: "Mỗi nhãn ít nhất một ví dụ, thêm 1 trường hợp khó." },
        { title: "Kiểm tra từng ví dụ", detail: "Nhãn đúng? Định dạng đầu ra giống hệt định dạng bạn muốn?" },
        {
          title: "Bọc ví dụ bằng thẻ",
          detail: "Giúp Claude phân biệt ví dụ, chỉ dẫn và dữ liệu thật.",
          code: { lang: "text", content: "<examples>\n<example>\nĐầu vào: …\nĐầu ra: …\n</example>\n<example>\nĐầu vào: …\nĐầu ra: …\n</example>\n</examples>\nDữ liệu cần xử lý:\n<input>…</input>" },
        },
        { title: "Thử và bổ sung", detail: "Nếu kết quả sai ở một kiểu đầu vào, thêm đúng kiểu đó vào bộ ví dụ. Có thể nhờ Claude gợi ý ví dụ mới rồi tự duyệt." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết prompt few-shot để Claude chuẩn hoá mô tả lỗi QA về dạng “Bộ phận – Hiện tượng – Mức độ”. Cần ít nhất 3 ví dụ trong thẻ, có một trường hợp khó.",
      sampleData: {
        name: "mo_ta_loi.txt",
        content: "1. van xả dầu rỉ nhẹ ở mặt bích, lau thấy dầu\n2. sơn vỏ máy bong 1 mảng ~5cm2\n3. MBA 630 tổn hao không tải vượt 3%\n4. thiếu tem nhãn",
      },
      placeholder: "Chuẩn hoá mô tả lỗi theo dạng … <examples><example>…</example></examples> …",
      rubric: [
        { id: "tags", label: "Có thẻ ví dụ", weight: 1, check: { kind: "regex", pattern: "<\\s*(example|examples|vi_du|vidu)" }, pass: "Có thẻ ví dụ.", fail: "Bọc ví dụ bằng <example>…</example>." },
        { id: "count", label: "Có ít nhất 3 ví dụ", weight: 1, check: { kind: "minMatches", pattern: "<\\s*(example|vi_du|vidu)\\s*>", value: 3 }, pass: "Có từ 3 ví dụ.", fail: "Cần ít nhất 3 ví dụ." },
        { id: "format", label: "Nêu định dạng đích", weight: 1, check: { kind: "anyKeyword", keywords: ["bộ phận", "hiện tượng", "mức độ"] }, pass: "Có định dạng đích.", fail: "Nêu rõ định dạng: Bộ phận – Hiện tượng – Mức độ." },
        { id: "input", label: "Tách dữ liệu cần xử lý", weight: 1, check: { kind: "regex", pattern: "<\\s*(input|du_lieu|dulieu)" }, pass: "Có tách dữ liệu.", fail: "Đặt dữ liệu cần xử lý trong thẻ riêng như <input>." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Chuẩn hoá mỗi mô tả lỗi về đúng dạng: Bộ phận – Hiện tượng – Mức độ (Nhẹ/Trung bình/Nghiêm trọng).\n<examples>\n<example>Đầu vào: gioăng nắp máy rỉ dầu thành giọt\nĐầu ra: Gioăng nắp – Rỉ dầu thành giọt – Trung bình</example>\n<example>Đầu vào: trầy sơn nhẹ cạnh vỏ\nĐầu ra: Vỏ máy – Trầy sơn nhẹ – Nhẹ</example>\n<example>Đầu vào: điện trở cách điện thấp hơn ngưỡng, chưa rõ cuộn nào\nĐầu ra: Cuộn dây (chưa xác định) – Điện trở cách điện dưới ngưỡng – Nghiêm trọng</example>\n</examples>\nDữ liệu cần xử lý:\n<input>…dán mo_ta_loi.txt…</input>",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Few-shot: đưa ví dụ đầu vào → đầu ra; là cách đáng tin cậy để định hướng định dạng, giọng văn, cấu trúc.",
        "Ví dụ cần liên quan, đa dạng, có cấu trúc; Anthropic gợi ý 3–5 ví dụ.",
        "Bọc ví dụ trong <example>, nhiều ví dụ trong <examples>.",
        "Ví dụ trùng lặp hoặc nhãn sai sẽ dạy Claude sai.",
        "Có thể nhờ Claude đánh giá hoặc tạo thêm ví dụ — rồi tự duyệt lại.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một việc phân loại hoặc chuẩn hoá bạn làm thường xuyên (gắn nhãn email, chuẩn hoá tên vật tư…).",
      tasks: ["Viết prompt zero-shot (không ví dụ) và chạy trên 10 mẫu thật.", "Thêm 3–5 ví dụ đa dạng trong thẻ và chạy lại cùng 10 mẫu.", "Đếm số mẫu đúng ở mỗi phiên bản."],
      deliverable: "Bảng so sánh: zero-shot vs few-shot trên 10 mẫu.",
      checklist: ["Ví dụ có đủ các nhãn", "Có ít nhất một trường hợp khó", "Đã so sánh trên cùng 10 mẫu"],
    },
  ],
};
