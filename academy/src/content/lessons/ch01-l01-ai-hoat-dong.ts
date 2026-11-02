import type { Lesson } from "@/lib/types/content";

export const lessonAiHoatDong: Lesson = {
  id: "ch01-l01",
  chapterId: "ch01",
  slug: "ai-hoat-dong-nhu-the-nao",
  title: "AI hoạt động như thế nào?",
  subtitle: "Claude không tra cứu đáp án có sẵn: nó dự đoán từng mảnh văn bản tiếp theo dựa trên những gì đã học và những gì bạn đưa vào.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-02",
  objectives: [
    { id: "o1", text: "Giải thích bằng lời của mình rằng mô hình ngôn ngữ sinh văn bản bằng cách dự đoán token tiếp theo." },
    { id: "o2", text: "Phân biệt kiến thức học từ dữ liệu huấn luyện với thông tin bạn đưa vào cuộc hội thoại (context)." },
    { id: "o3", text: "Giải thích vì sao cùng một câu hỏi có thể nhận câu trả lời khác nhau." },
    { id: "o4", text: "Biết Claude được tinh chỉnh để thành trợ lý hữu ích, trung thực, vô hại — nhưng vẫn cần kiểm tra." },
  ],
  concepts: [
    { id: "llm", label: "Mô hình ngôn ngữ lớn (LLM)" },
    { id: "token", label: "Token" },
    { id: "next-token", label: "Dự đoán token tiếp theo" },
    { id: "training", label: "Huấn luyện trước và tinh chỉnh" },
    { id: "context", label: "Context — ngữ cảnh trong hội thoại" },
    { id: "probability", label: "Xác suất và tính ngẫu nhiên" },
    { id: "hhh", label: "Hữu ích, trung thực, vô hại (HHH)" },
  ],
  hints: [
    "Hãy tưởng tượng tính năng gợi ý từ trên bàn phím điện thoại — nhưng lớn hơn hàng triệu lần và được huấn luyện kỹ hơn rất nhiều.",
    "Claude chỉ “thấy” phần văn bản trong cuộc hội thoại hiện tại cộng với những gì đã học khi huấn luyện.",
    "Câu trả lời khác nhau giữa các lần hỏi là bình thường: mô hình chọn theo xác suất, không bốc ra một đáp án cố định.",
  ],
  sources: [
    { label: "Anthropic — Glossary (LLM, Pretraining, RLHF, Tokens, Temperature, HHH)", href: "https://platform.claude.com/docs/en/about-claude/glossary" },
    { label: "Anthropic — Models overview", href: "https://platform.claude.com/docs/en/about-claude/models/overview" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude là một **mô hình ngôn ngữ lớn (LLM)**: một chương trình có rất nhiều tham số, được huấn luyện trên lượng văn bản khổng lồ để tạo ra văn bản giống người viết.",
        "Ở giai đoạn **huấn luyện trước (pretraining)**, mô hình học cách **dự đoán từ tiếp theo** khi đã biết phần văn bản phía trước. Sau đó Anthropic **tinh chỉnh** (gồm cả học từ phản hồi của con người — RLHF) để Claude biết làm theo chỉ dẫn và trở thành trợ lý hữu ích.",
        "Khi bạn gửi câu hỏi, văn bản được cắt thành các mảnh nhỏ gọi là **token** (có thể là một từ, một phần của từ hoặc một ký tự). Claude dự đoán token tiếp theo có khả năng cao, thêm nó vào, rồi dự đoán tiếp — lặp lại cho đến khi xong câu trả lời.",
        "Vì chọn theo **xác suất**, cùng một câu hỏi có thể cho câu trả lời diễn đạt khác nhau. Và vì mô hình tạo ra văn bản “nghe hợp lý”, đôi khi nó tạo ra thông tin **nghe đúng nhưng sai** — nên dữ kiện quan trọng luôn cần kiểm tra.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Gõ “Chúc mừng sinh…” trên điện thoại, bàn phím gợi ý “nhật”. Claude làm việc tương tự nhưng ở quy mô lớn hơn rất nhiều: nó cân nhắc toàn bộ đoạn hội thoại để chọn từng mảnh tiếp theo, nên có thể viết cả báo cáo, giải thích hay đoạn code.",
      },
      terms: [
        { term: "LLM", definition: "Large Language Model — mô hình ngôn ngữ lớn, được huấn luyện trên lượng văn bản rất lớn." },
        { term: "Token", definition: "Mảnh văn bản nhỏ nhất mô hình xử lý: từ, phần của từ hoặc ký tự." },
        { term: "Pretraining", definition: "Huấn luyện trước: học dự đoán từ tiếp theo trên kho văn bản lớn." },
        { term: "RLHF", definition: "Học tăng cường từ phản hồi của con người: dạy mô hình ưu tiên câu trả lời người dùng đánh giá cao." },
        { term: "Context", definition: "Toàn bộ văn bản trong cuộc hội thoại mà mô hình nhìn thấy khi trả lời." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: từ câu hỏi đến câu trả lời",
      visual: "ai-prediction",
      caption: "Văn bản được chia thành token → mô hình tính xác suất cho token tiếp theo → chọn một token → lặp lại cho đến khi xong.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: hai nguồn “hiểu biết” của Claude",
      mermaid: `flowchart LR
  A["Kho văn bản lớn"] --> B["Huấn luyện trước: học dự đoán từ tiếp theo"]
  B --> C["Tinh chỉnh: làm theo chỉ dẫn, hữu ích, trung thực"]
  C --> D["Mô hình Claude"]
  E["Context: câu hỏi, file, dữ liệu bạn gửi"] --> D
  D --> F["Câu trả lời sinh từng token"]`,
      caption: "Claude dựa vào điều đã học khi huấn luyện VÀ điều bạn đưa vào hội thoại. Thông tin riêng của bạn chỉ có khi bạn cung cấp.",
      alt: "Lưu đồ: kho văn bản đi vào huấn luyện trước, rồi tinh chỉnh, tạo ra mô hình Claude. Context do người dùng gửi cũng đi vào mô hình. Mô hình sinh câu trả lời từng token.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Hiểu sai về AI",
        content: "Claude biết mọi thông tin về công ty tôi, nên chỉ cần hỏi “Doanh số tháng trước của chúng ta là bao nhiêu?”",
        notes: [
          "Claude không có dữ liệu nội bộ của bạn nếu bạn không đưa vào (hoặc kết nối công cụ).",
          "Mô hình có thể “đoán” một con số nghe hợp lý — rất nguy hiểm.",
        ],
      },
      good: {
        label: "Hiểu đúng về AI",
        content: "Đây là bảng doanh số tháng 10 (dán dữ liệu). Hãy tính tổng và so sánh với tháng 9 trong bảng.",
        notes: ["Đưa dữ liệu vào context để Claude làm việc trên thông tin thật.", "Yêu cầu chỉ dùng số liệu trong bảng giúp giảm sai sót."],
      },
      takeaway: "Claude giỏi xử lý thông tin bạn đưa cho nó; nó không tự biết dữ liệu riêng của bạn.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đoán từ tiếp theo",
      widget: "next-word",
      intro:
        "Chọn từ bạn nghĩ có khả năng xuất hiện tiếp theo, rồi xem “mô hình” phân bổ xác suất. Thử cả hai ngữ cảnh và bấm “Sinh 5 lần” để thấy vì sao câu trả lời có thể khác nhau. Xác suất ở đây do người biên soạn đặt để minh hoạ, không phải số liệu thật của Claude.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tự kiểm chứng cách AI làm việc",
      steps: [
        { title: "Hỏi một câu không có dữ liệu", detail: "Mở Claude và hỏi: “Tổng sản lượng xưởng tôi tuần trước là bao nhiêu?”. Quan sát: Claude sẽ nói nó không có dữ liệu này." },
        { title: "Đưa dữ liệu vào context", detail: "Dán bảng số liệu nhỏ (5–6 dòng) rồi hỏi lại. Lần này Claude tính được vì dữ liệu đã nằm trong hội thoại." },
        { title: "Hỏi lại cùng một câu sáng tạo", detail: "Bấm tạo lại (hoặc hỏi lại) câu “Viết một khẩu hiệu an toàn lao động”. So sánh: mỗi lần diễn đạt khác — đó là do chọn theo xác suất." },
        {
          title: "Yêu cầu Claude nói “không biết”",
          detail: "Thêm câu cho phép Claude thừa nhận chưa chắc chắn. Anthropic khuyên làm vậy để giảm thông tin sai.",
          code: { lang: "text", content: "Chỉ dùng dữ liệu trong bảng dưới đây. Nếu bảng không đủ thông tin để trả lời, hãy nói rõ \"Không đủ dữ liệu\" thay vì đoán." },
        },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Một đồng nghiệp nói: “AI chỉ copy câu trả lời có sẵn trên mạng.” Hãy viết 3–5 câu giải thích lại cho đồng nghiệp cách Claude tạo câu trả lời, có nhắc đến: token, dự đoán, context, và vì sao cần kiểm tra lại.",
      placeholder: "Claude không copy câu trả lời có sẵn. Nó…",
      rubric: [
        { id: "predict", label: "Nêu cơ chế dự đoán", weight: 1, check: { kind: "anyKeyword", keywords: ["dự đoán", "đoán", "xác suất"] }, pass: "Đã nêu cơ chế dự đoán.", fail: "Giải thích rằng Claude dự đoán phần văn bản tiếp theo." },
        { id: "token", label: "Nhắc đến token", weight: 1, check: { kind: "anyKeyword", keywords: ["token", "mảnh", "từng từ", "từng phần"] }, pass: "Đã nhắc đến token.", fail: "Nói rằng văn bản được chia thành token (mảnh nhỏ)." },
        { id: "context", label: "Nhắc đến context / dữ liệu đưa vào", weight: 1, check: { kind: "anyKeyword", keywords: ["context", "ngữ cảnh", "hội thoại", "dữ liệu bạn đưa", "thông tin bạn đưa", "cung cấp"] }, pass: "Đã nhắc đến context.", fail: "Nói rằng Claude dựa vào ngữ cảnh/dữ liệu trong hội thoại." },
        { id: "verify", label: "Nêu lý do cần kiểm tra", weight: 1, check: { kind: "anyKeyword", keywords: ["kiểm tra", "kiểm chứng", "sai", "bịa", "đối chiếu"] }, pass: "Đã nêu lý do cần kiểm tra.", fail: "Thêm ý: câu trả lời nghe hợp lý vẫn có thể sai, nên cần kiểm tra." },
        { id: "length", label: "Đủ chi tiết", weight: 1, check: { kind: "minChars", value: 150 }, pass: "Đủ chi tiết.", fail: "Viết thêm để đủ 3–5 câu." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Claude không copy câu trả lời có sẵn. Văn bản được chia thành các mảnh nhỏ gọi là token; Claude dự đoán token tiếp theo có xác suất cao rồi nối dần thành câu trả lời. Nó dựa vào những gì đã học khi huấn luyện và vào context — tức câu hỏi, dữ liệu bạn đưa vào hội thoại. Vì nó tạo ra văn bản nghe hợp lý chứ không tra cứu, đôi khi kết quả sai, nên số liệu quan trọng cần kiểm tra lại.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Claude là mô hình ngôn ngữ lớn, được huấn luyện để dự đoán token tiếp theo rồi được tinh chỉnh để làm trợ lý.",
        "Văn bản được chia thành token; câu trả lời được sinh ra từng token một.",
        "Claude dựa vào kiến thức đã học và context bạn đưa vào; dữ liệu riêng của bạn chỉ có khi bạn cung cấp.",
        "Chọn theo xác suất nên câu trả lời có thể khác nhau giữa các lần hỏi.",
        "Văn bản nghe hợp lý chưa chắc đúng — hãy kiểm chứng dữ kiện quan trọng.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Áp dụng hiểu biết về context vào một việc thật trong tuần này.",
      tasks: [
        "Chọn một câu hỏi công việc mà Claude không thể biết nếu thiếu dữ liệu (ví dụ: tình trạng đơn hàng, số lỗi tuần này).",
        "Hỏi Claude khi chưa có dữ liệu và ghi lại phản hồi.",
        "Đưa dữ liệu thật (đã che thông tin nhạy cảm) vào và hỏi lại kèm câu “nếu thiếu dữ liệu thì nói rõ”.",
        "So sánh hai kết quả.",
      ],
      deliverable: "Ghi chú ngắn: hai câu trả lời khác nhau thế nào và vì sao.",
      checklist: ["Đã che thông tin nhạy cảm trước khi dán", "Đã thử cả hai cách hỏi", "Đã ghi lại so sánh vào ô Ghi chú"],
    },
  ],
};
