import type { Lesson } from "@/lib/types/content";

const BP = "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices";

export const lessonPromptCoCauTruc: Lesson = {
  id: "ch03-l06",
  chapterId: "ch03",
  slug: "prompt-co-cau-truc",
  title: "Prompt có cấu trúc",
  subtitle: "Dùng thẻ XML để tách chỉ dẫn, dữ liệu, ví dụ; đặt tài liệu dài lên đầu và câu hỏi ở cuối; trích dẫn trước khi phân tích.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Dùng thẻ XML để tách chỉ dẫn, bối cảnh, ví dụ và dữ liệu; đặt tên thẻ nhất quán, dễ hiểu." },
    { id: "o2", text: "Với tài liệu dài, đặt tài liệu ở đầu prompt và câu hỏi ở cuối." },
    { id: "o3", text: "Cấu trúc nhiều tài liệu bằng <documents>, <document>, <source>, <document_content>." },
    { id: "o4", text: "Yêu cầu trích dẫn đoạn liên quan trước khi thực hiện nhiệm vụ với tài liệu dài." },
  ],
  concepts: [
    { id: "xml-tags", label: "Thẻ XML" },
    { id: "tag-naming", label: "Đặt tên thẻ nhất quán" },
    { id: "nesting", label: "Lồng thẻ theo cấp" },
    { id: "long-doc-order", label: "Tài liệu ở đầu, câu hỏi ở cuối" },
    { id: "multi-doc", label: "Cấu trúc nhiều tài liệu" },
    { id: "quote-first", label: "Trích dẫn trước" },
    { id: "output-tags", label: "Thẻ cho đầu ra" },
  ],
  hints: [
    "Thẻ không có “tên chuẩn” bắt buộc — quan trọng là tên mô tả đúng nội dung và dùng nhất quán.",
    "Tài liệu dài (khoảng 20.000 token trở lên): đặt lên đầu, câu hỏi để cuối.",
    "Với tài liệu dài, yêu cầu Claude trích nguyên văn đoạn liên quan trước rồi mới trả lời.",
  ],
  sources: [{ label: "Anthropic — Prompting best practices: Structure prompts with XML tags, Long context prompting", href: BP }],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Khi prompt có nhiều loại nội dung — chỉ dẫn, bối cảnh, ví dụ, dữ liệu — Anthropic khuyên bọc mỗi loại trong **thẻ XML** riêng, ví dụ `<instructions>`, `<context>`, `<input>`. Thẻ giúp Claude đọc prompt **không nhập nhằng**. Đặt tên thẻ **mô tả đúng nội dung** và dùng **nhất quán**; lồng thẻ khi nội dung có cấp bậc.",
        "Với **tài liệu dài** (khoảng 20.000 token trở lên): đặt tài liệu **ở đầu** prompt, phía trên câu hỏi và chỉ dẫn. Theo thử nghiệm của Anthropic, đặt câu hỏi ở cuối có thể cải thiện chất lượng **tới 30%**, nhất là với nhiều tài liệu phức tạp.",
        "Nhiều tài liệu: bọc mỗi tài liệu trong `<document>` với thẻ con `<source>` (nguồn) và `<document_content>` (nội dung), tất cả đặt trong `<documents>`.",
        "Với tài liệu dài, yêu cầu Claude **trích nguyên văn** các đoạn liên quan trước, rồi mới làm nhiệm vụ. Việc này giúp Claude tập trung vào nội dung liên quan và giúp bạn kiểm chứng.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Hồ sơ gửi sếp duyệt: tài liệu đính kèm được đánh số và kẹp riêng, tờ trình ghi rõ câu hỏi cần quyết định ở cuối. Không ai trộn hợp đồng, email và câu hỏi vào cùng một trang.",
      },
      terms: [
        { term: "Thẻ XML", definition: "Cặp nhãn <ten>…</ten> đánh dấu một phần nội dung." },
        { term: "<document_content>", definition: "Thẻ chứa nội dung một tài liệu trong cấu trúc nhiều tài liệu." },
        { term: "<source>", definition: "Thẻ ghi nguồn/tên file của tài liệu." },
        { term: "Long context", definition: "Prompt chứa lượng tài liệu lớn (hàng chục nghìn token)." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: prompt nhiều tài liệu",
      infographic: {
        kind: "annotated",
        label: "Rà soát hợp đồng với yêu cầu kỹ thuật",
        lines: [
          { text: "<documents>", note: "Tài liệu dài đặt ở ĐẦU", tone: "context" },
          { text: "  <document index=\"1\">\n    <source>hop_dong_TBA_BinhDuong.pdf</source>\n    <document_content>…</document_content>\n  </document>", note: "Mỗi tài liệu có nguồn và nội dung", tone: "context" },
          { text: "  <document index=\"2\">\n    <source>yeu_cau_ky_thuat.docx</source>\n    <document_content>…</document_content>\n  </document>", tone: "context" },
          { text: "</documents>", tone: "context" },
          { text: "Trích nguyên văn các điều khoản về bảo hành trong <trich_dan>.", note: "Trích dẫn trước", tone: "task" },
          { text: "Dựa trên trích dẫn, cho biết hợp đồng có đáp ứng yêu cầu bảo hành 24 tháng không.", note: "Câu hỏi ở CUỐI", tone: "task" },
          { text: "Kết luận trong <ket_luan>, tối đa 3 câu.", note: "Thẻ cho đầu ra", tone: "output" },
        ],
      },
      caption: "Tài liệu trước, chỉ dẫn và câu hỏi sau; mỗi tài liệu có nguồn; yêu cầu trích dẫn trước khi kết luận.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: bố cục prompt tài liệu dài",
      mermaid: `flowchart TD
  A["documents: các tài liệu dài, mỗi cái có source"] --> B["Chỉ dẫn: trích dẫn đoạn liên quan trước"]
  B --> C["Câu hỏi hoặc nhiệm vụ cụ thể"]
  C --> D["Định dạng đầu ra, có thể dùng thẻ"]`,
      caption: "Thứ tự gợi ý cho tài liệu dài: tài liệu → chỉ dẫn trích dẫn → câu hỏi → định dạng.",
      alt: "Bố cục từ trên xuống: các tài liệu dài có nguồn, chỉ dẫn trích dẫn trước, câu hỏi cụ thể, định dạng đầu ra.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Trộn lẫn",
        content: "Đọc hợp đồng này xem có ổn không [dán 40 trang hợp đồng] rồi so với yêu cầu kỹ thuật [dán 15 trang] chú ý phần bảo hành nhé",
        notes: ["Chỉ dẫn và tài liệu trộn lẫn.", "Không rõ đâu là hợp đồng, đâu là yêu cầu.", "Câu hỏi mơ hồ (“có ổn không”)."],
      },
      good: {
        label: "Có cấu trúc",
        content: "Hai tài liệu trong <documents> (mỗi cái có <source>), sau đó: trích điều khoản bảo hành trong <trich_dan>; rồi câu hỏi cụ thể về thời hạn 24 tháng; kết luận trong <ket_luan>.",
        notes: ["Tách bạch tài liệu và chỉ dẫn.", "Câu hỏi cụ thể đặt cuối.", "Kết luận có căn cứ trích dẫn."],
      },
      takeaway: "Cấu trúc giúp Claude đọc đúng và giúp bạn kiểm tra đúng.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: phân loại nội dung vào đúng thẻ",
      sim: {
        kind: "classify",
        bins: [
          { id: "doc", label: "Tài liệu/dữ liệu (đặt đầu, trong thẻ tài liệu)" },
          { id: "ins", label: "Chỉ dẫn / câu hỏi (đặt cuối)" },
          { id: "ex", label: "Ví dụ mẫu (<example>)" },
          { id: "out", label: "Định dạng đầu ra" },
        ],
        items: [
          { id: "i1", text: "Toàn văn biên bản nghiệm thu 30 trang", bin: "doc", why: "Tài liệu dài — đặt ở đầu, trong thẻ." },
          { id: "i2", text: "Bảng kết quả thử nghiệm 12 máy", bin: "doc", why: "Dữ liệu — bọc trong thẻ riêng." },
          { id: "i3", text: "“Biên bản có ghi nhận lỗi nào chưa được khắc phục không?”", bin: "ins", why: "Câu hỏi — đặt sau tài liệu." },
          { id: "i4", text: "“Trích nguyên văn các đoạn nói về lỗi trước khi trả lời.”", bin: "ins", why: "Chỉ dẫn trích dẫn trước." },
          { id: "i5", text: "Một mẫu bảng tổng hợp lỗi đã điền sẵn để Claude bắt chước", bin: "ex", why: "Ví dụ mẫu — bọc trong <example>." },
          { id: "i6", text: "“Trả lời trong <ket_luan>, tối đa 3 câu.”", bin: "out", why: "Định dạng đầu ra." },
        ],
      },
      intro: "Bạn đang soạn prompt rà soát biên bản nghiệm thu. Xếp từng nội dung vào phần phù hợp.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dựng prompt tài liệu dài",
      steps: [
        { title: "Đặt tài liệu lên đầu", detail: "Mỗi tài liệu một thẻ, ghi nguồn (tên file) để Claude và bạn trích dẫn được." },
        {
          title: "Dùng cấu trúc nhiều tài liệu",
          detail: "Tên thẻ mô tả rõ, dùng nhất quán.",
          code: { lang: "text", content: "<documents>\n  <document index=\"1\">\n    <source>bao_cao_qa_thang10.pdf</source>\n    <document_content>…</document_content>\n  </document>\n</documents>" },
        },
        { title: "Yêu cầu trích dẫn trước", detail: "“Trích nguyên văn các đoạn liên quan trong <trich_dan>; nếu không có, ghi rõ.”" },
        { title: "Đặt câu hỏi cụ thể ở cuối", detail: "Một câu hỏi rõ ràng, có phạm vi." },
        { title: "Chỉ định thẻ cho đầu ra", detail: "Ví dụ <ket_luan>, giúp bạn đọc nhanh hoặc xử lý tự động." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết prompt hỏi Claude so sánh điều khoản thanh toán giữa 2 hợp đồng (HĐ-01 và HĐ-02), dùng cấu trúc nhiều tài liệu, trích dẫn trước và câu hỏi ở cuối. Dùng “…” thay cho nội dung tài liệu.",
      placeholder: "<documents> <document index=\"1\"> <source>…</source> <document_content>…</document_content> … Trích … So sánh …",
      rubric: [
        { id: "docs", label: "Có <documents>/<document>", weight: 1, check: { kind: "regex", pattern: "<\\s*documents?\\b" }, pass: "Có cấu trúc tài liệu.", fail: "Dùng <documents> và <document>." },
        { id: "source", label: "Có <source> cho tài liệu", weight: 1, check: { kind: "regex", pattern: "<\\s*source\\s*>" }, pass: "Có nguồn.", fail: "Ghi nguồn bằng <source>." },
        { id: "quote", label: "Yêu cầu trích dẫn trước", weight: 1, check: { kind: "anyKeyword", keywords: ["trích", "trích dẫn", "nguyên văn"] }, pass: "Có trích dẫn trước.", fail: "Yêu cầu trích nguyên văn điều khoản trước." },
        { id: "detail", label: "Đủ chi tiết", weight: 1, check: { kind: "minChars", value: 250 }, pass: "Đủ chi tiết.", fail: "Viết đầy đủ cấu trúc cho cả 2 hợp đồng và câu hỏi cụ thể." },
        { id: "order", label: "Câu hỏi đặt sau tài liệu", weight: 1, check: { kind: "regex", pattern: "<\\s*/\\s*documents\\s*>[\\s\\S]*(so sanh|cau hoi|hay)" }, pass: "Câu hỏi đặt sau tài liệu.", fail: "Đặt câu hỏi/nhiệm vụ sau thẻ </documents>." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "<documents>\n  <document index=\"1\">\n    <source>HD-01.pdf</source>\n    <document_content>…</document_content>\n  </document>\n  <document index=\"2\">\n    <source>HD-02.pdf</source>\n    <document_content>…</document_content>\n  </document>\n</documents>\nTrước tiên, trích nguyên văn các điều khoản thanh toán của từng hợp đồng trong <trich_dan>, ghi rõ nguồn.\nSau đó hãy so sánh: thời hạn thanh toán, tỷ lệ tạm ứng, phạt chậm thanh toán. Trình bày bảng 3 cột (Nội dung | HĐ-01 | HĐ-02) và kết luận trong <ket_luan>, tối đa 3 câu.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Thẻ XML tách chỉ dẫn, bối cảnh, ví dụ, dữ liệu; tên thẻ mô tả rõ, dùng nhất quán, lồng khi có cấp bậc.",
        "Tài liệu dài đặt ở đầu, câu hỏi ở cuối — thử nghiệm của Anthropic cho thấy có thể cải thiện tới 30%.",
        "Nhiều tài liệu: <documents> → <document> với <source> và <document_content>.",
        "Với tài liệu dài, yêu cầu trích dẫn nguyên văn trước khi làm nhiệm vụ.",
        "Có thể chỉ định thẻ cho phần đầu ra để đọc nhanh hoặc xử lý tự động.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn 2 tài liệu thật cần đối chiếu (hợp đồng – báo giá, quy trình cũ – quy trình mới…).",
      tasks: ["Soạn prompt theo cấu trúc nhiều tài liệu, trích dẫn trước, câu hỏi ở cuối.", "Gửi cho Claude và kiểm tra từng trích dẫn với tài liệu gốc.", "Lưu prompt làm mẫu cho lần đối chiếu sau."],
      deliverable: "Prompt mẫu đối chiếu tài liệu + kết quả đã kiểm tra trích dẫn.",
      checklist: ["Đã che thông tin nhạy cảm", "Mỗi tài liệu có <source>", "Đã kiểm tra trích dẫn với bản gốc"],
    },
  ],
};
