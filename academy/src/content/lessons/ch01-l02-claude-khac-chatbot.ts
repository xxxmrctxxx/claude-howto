import type { Lesson } from "@/lib/types/content";

export const lessonClaudeKhacChatbot: Lesson = {
  id: "ch01-l02",
  chapterId: "ch01",
  slug: "claude-khac-chatbot",
  title: "Claude khác chatbot thông thường ra sao?",
  subtitle: "Chatbot kịch bản bắt từ khoá rồi trả câu soạn sẵn; Claude đọc hiểu cả câu, giữ ngữ cảnh và tạo nội dung mới.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-02",
  objectives: [
    { id: "o1", text: "Phân biệt chatbot theo kịch bản (quy tắc, từ khoá) với trợ lý AI dựa trên mô hình ngôn ngữ lớn." },
    { id: "o2", text: "Kể các khả năng Claude có mà chatbot kịch bản không có: hiểu cách diễn đạt khác nhau, giữ ngữ cảnh, tạo nội dung mới, đọc file và hình ảnh." },
    { id: "o3", text: "Nhận ra khi nào chatbot kịch bản vẫn có lợi thế: câu trả lời cố định, dễ kiểm soát." },
    { id: "o4", text: "Chọn công cụ phù hợp cho một tình huống công việc cụ thể." },
  ],
  concepts: [
    { id: "rule-based", label: "Chatbot kịch bản (quy tắc)" },
    { id: "keyword", label: "Bắt từ khoá" },
    { id: "understanding", label: "Hiểu cách diễn đạt khác nhau" },
    { id: "conversation", label: "Giữ ngữ cảnh hội thoại" },
    { id: "generation", label: "Tạo nội dung mới" },
    { id: "multimodal", label: "Đọc file và hình ảnh" },
    { id: "predictability", label: "Tính cố định, dễ kiểm soát" },
    { id: "tool-choice", label: "Chọn công cụ phù hợp" },
  ],
  hints: [
    "Chatbot kịch bản giống một cây menu: chỉ đi được các nhánh đã vẽ sẵn.",
    "Hãy thử nhập cùng một ý theo ba cách khác nhau vào bot trong mô phỏng để thấy giới hạn của từ khoá.",
    "Khi câu trả lời phải đúng nguyên văn (giá niêm yết, điều khoản pháp lý), quy tắc cố định có thể an toàn hơn.",
  ],
  sources: [
    { label: "Anthropic — Intro to Claude", href: "https://platform.claude.com/docs/en/intro" },
    { label: "Anthropic — Models overview (text & image input, multilingual, tool use)", href: "https://platform.claude.com/docs/en/about-claude/models/overview" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Nhiều website có **chatbot kịch bản**: lập trình viên viết sẵn các quy tắc “nếu tin nhắn có từ X thì trả lời Y”. Bot này nhanh, rẻ, luôn trả lời giống nhau — nhưng chỉ hiểu những từ khoá đã được dạy.",
        "**Claude** là trợ lý dựa trên mô hình ngôn ngữ lớn. Nó đọc cả câu, hiểu ý dù bạn diễn đạt theo nhiều cách, nhớ những gì đã nói **trong cùng cuộc hội thoại**, và **tạo ra nội dung mới**: viết email, tóm tắt tài liệu, giải thích code, phân tích ảnh chụp bảng số liệu.",
        "Đổi lại, câu trả lời của Claude không cố định từng chữ và vẫn có thể sai. Vì vậy nhiều doanh nghiệp **kết hợp**: phần cần chính xác tuyệt đối (giá, điều khoản) dùng dữ liệu cố định; phần cần hiểu và diễn đạt dùng Claude.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Chatbot kịch bản giống tổng đài “bấm phím 1 để…”: đúng menu thì nhanh, lệch menu là bế tắc. Claude giống một nhân viên đọc hiểu câu bạn nói, hỏi lại khi chưa rõ và soạn câu trả lời phù hợp với hoàn cảnh.",
      },
      terms: [
        { term: "Rule-based chatbot", definition: "Chatbot theo quy tắc/kịch bản viết sẵn, thường dựa trên từ khoá." },
        { term: "Intent", definition: "Ý định của người dùng — điều họ thực sự muốn, dù dùng từ ngữ khác nhau." },
        { term: "Multimodal", definition: "Xử lý nhiều loại đầu vào: văn bản và hình ảnh (các model Claude hiện tại đều nhận ảnh)." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: hai cách xử lý cùng một tin nhắn",
      visual: "chatbot-vs-claude",
      caption: "Bot kịch bản dò từ khoá và trả câu soạn sẵn; Claude đọc cả câu cùng ngữ cảnh để tạo câu trả lời mới.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: luồng xử lý",
      mermaid: `flowchart TD
  M["Tin nhắn của khách"] --> R{"Bot kịch bản: có từ khoá đã định nghĩa?"}
  R -- "Có" --> R1["Trả câu soạn sẵn (có thể sai ý)"]
  R -- "Không" --> R2["Xin lỗi, tôi không hiểu"]
  M --> C["Claude: đọc cả câu và lịch sử hội thoại"]
  C --> C1["Xác định ý định và thông tin còn thiếu"]
  C1 --> C2["Tạo câu trả lời mới hoặc hỏi lại cho rõ"]`,
      caption: "Bot kịch bản rẽ nhánh theo từ khoá; Claude suy luận từ toàn bộ nội dung.",
      alt: "Sơ đồ: tin nhắn đi vào bot kịch bản, nếu có từ khoá thì trả câu soạn sẵn, nếu không thì báo không hiểu. Cùng tin nhắn đi vào Claude, Claude đọc cả câu và lịch sử, xác định ý định rồi tạo câu trả lời mới hoặc hỏi lại.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Dùng sai cách",
        content: "Gõ vào Claude như với bot kịch bản: “bảo hành”",
        notes: ["Chỉ một từ khoá — bỏ phí khả năng hiểu ngữ cảnh của Claude.", "Claude phải đoán bạn hỏi bảo hành sản phẩm gì, vấn đề gì."],
      },
      good: {
        label: "Dùng đúng cách",
        content: "Máy biến áp 250 kVA mua tháng 3/2025 bị rò dầu ở van xả. Còn bảo hành không và tôi cần chuẩn bị giấy tờ gì? (Điều khoản bảo hành dán bên dưới.)",
        notes: ["Câu hỏi tự nhiên, đủ chi tiết.", "Kèm điều khoản để Claude trả lời dựa trên dữ liệu thật."],
      },
      takeaway: "Với Claude, hãy nói chuyện như với một đồng nghiệp: đủ bối cảnh, câu hoàn chỉnh, kèm tài liệu liên quan.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: thử “làm khó” một chatbot kịch bản",
      widget: "bot-compare",
      intro:
        "Đây là một chatbot kịch bản thật (chạy bằng 3 quy tắc từ khoá). Gõ câu hỏi hoặc chọn câu gợi ý. Khi bot trả lời sai ý hoặc không hiểu, bấm “Bot hiểu sai”. Tìm ít nhất 2 trường hợp để hoàn thành.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tận dụng điểm mạnh của Claude",
      steps: [
        { title: "Viết câu đầy đủ thay vì từ khoá", detail: "“Tóm tắt biên bản họp dưới đây thành 5 ý cho trưởng xưởng” tốt hơn “tóm tắt”." },
        { title: "Tiếp tục trong cùng cuộc hội thoại", detail: "Claude nhớ những gì đã nói trong hội thoại hiện tại, nên có thể nói “ngắn hơn nữa” hay “thêm cột ghi chú” mà không cần nhắc lại từ đầu." },
        { title: "Đính kèm file hoặc ảnh khi cần", detail: "Ảnh chụp bảng đo, file PDF, bảng tính — Claude đọc được nội dung để phân tích. Nhớ kiểm tra lại số liệu đọc từ ảnh." },
        { title: "Giữ phần “phải đúng nguyên văn” ở dạng cố định", detail: "Với giá niêm yết hay điều khoản pháp lý, dán nguyên văn và yêu cầu Claude trích dẫn đúng, không diễn giải lại." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Bộ phận chăm sóc khách hàng muốn dùng AI trả lời câu hỏi về bảo hành. Hãy viết 4–6 câu đề xuất: phần nào nên dùng Claude, phần nào nên giữ cố định (quy tắc/dữ liệu chuẩn), và lý do.",
      placeholder: "Nên dùng Claude để… vì… Còn phần … nên giữ cố định vì…",
      rubric: [
        { id: "claude", label: "Nêu phần dùng Claude", weight: 1, check: { kind: "anyKeyword", keywords: ["claude", "ai", "trợ lý"] }, pass: "Có nêu phần dùng Claude.", fail: "Nói rõ phần nào giao cho Claude." },
        { id: "fixed", label: "Nêu phần giữ cố định", weight: 1, check: { kind: "anyKeyword", keywords: ["cố định", "quy tắc", "nguyên văn", "kịch bản", "dữ liệu chuẩn", "soạn sẵn"] }, pass: "Có nêu phần giữ cố định.", fail: "Nói rõ phần nào cần câu trả lời cố định." },
        { id: "understand", label: "Lý do: hiểu cách diễn đạt / ngữ cảnh", weight: 1, check: { kind: "anyKeyword", keywords: ["diễn đạt", "ngữ cảnh", "hiểu", "câu hỏi tự nhiên", "nhiều cách"] }, pass: "Có nêu điểm mạnh hiểu ngôn ngữ.", fail: "Nêu điểm mạnh của Claude: hiểu nhiều cách diễn đạt, giữ ngữ cảnh." },
        { id: "risk", label: "Lý do: chính xác / có thể sai", weight: 1, check: { kind: "anyKeyword", keywords: ["chính xác", "sai", "pháp lý", "điều khoản", "giá", "kiểm soát"] }, pass: "Có nêu rủi ro cần kiểm soát.", fail: "Nêu vì sao một số phần cần cố định: phải chính xác, có thể sai." },
        { id: "length", label: "Đủ chi tiết", weight: 1, check: { kind: "minChars", value: 160 }, pass: "Đủ chi tiết.", fail: "Viết thêm để đủ 4–6 câu." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Nên dùng Claude để đọc câu hỏi của khách (họ diễn đạt rất nhiều cách), hỏi lại thông tin còn thiếu như ngày mua, số seri, rồi soạn câu trả lời lịch sự. Còn thời hạn bảo hành, điều khoản và giá dịch vụ nên giữ cố định trong dữ liệu chuẩn và dán nguyên văn cho Claude, yêu cầu trích dẫn đúng, vì đây là thông tin pháp lý phải chính xác và AI có thể diễn giải sai. Trường hợp phức tạp hoặc khiếu nại chuyển cho nhân viên.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Chatbot kịch bản trả lời theo từ khoá và câu soạn sẵn: nhanh, cố định, nhưng dễ “bế tắc”.",
        "Claude hiểu nhiều cách diễn đạt, giữ ngữ cảnh trong hội thoại, tạo nội dung mới, đọc được file và hình ảnh.",
        "Câu trả lời của Claude không cố định từng chữ và có thể sai — cần kiểm soát ở chỗ quan trọng.",
        "Thực tế thường kết hợp: dữ liệu chuẩn cho phần phải chính xác, Claude cho phần cần hiểu và diễn đạt.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Tìm một chatbot hoặc menu tự động bạn hay gặp (ngân hàng, nhà mạng, website công ty).",
      tasks: [
        "Hỏi chatbot đó cùng một ý theo 3 cách diễn đạt khác nhau; ghi lại kết quả.",
        "Hỏi Claude cùng 3 câu đó (kèm thông tin công khai cần thiết) và so sánh.",
        "Ghi 2 điểm chatbot kịch bản làm tốt hơn và 2 điểm Claude làm tốt hơn.",
      ],
      deliverable: "Bảng so sánh ngắn 2 cột: Chatbot kịch bản | Claude.",
      checklist: ["Đã thử 3 cách diễn đạt", "Không dán thông tin cá nhân nhạy cảm", "Đã ghi so sánh vào ô Ghi chú"],
    },
  ],
};
