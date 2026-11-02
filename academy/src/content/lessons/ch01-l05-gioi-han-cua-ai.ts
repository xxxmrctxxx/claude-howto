import type { Lesson } from "@/lib/types/content";

export const lessonGioiHan: Lesson = {
  id: "ch01-l05",
  chapterId: "ch01",
  slug: "gioi-han-cua-ai",
  title: "Những giới hạn của AI",
  subtitle: "Mốc kiến thức, bộ nhớ làm việc có hạn, không tự truy cập dữ liệu và có thể sai — biết giới hạn để dùng AI an toàn và hiệu quả.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-02",
  objectives: [
    { id: "o1", text: "Giải thích mốc kiến thức (knowledge cutoff) và hệ quả với thông tin mới." },
    { id: "o2", text: "Giải thích context window như bộ nhớ làm việc có giới hạn, và vì sao nhiều context hơn không luôn tốt hơn." },
    { id: "o3", text: "Biết Claude không tự truy cập dữ liệu hay hệ thống khi chưa được kết nối, và mỗi cuộc hội thoại có context riêng." },
    { id: "o4", text: "Nhận ra giới hạn về độ tin cậy và chọn mức kiểm chứng phù hợp." },
  ],
  concepts: [
    { id: "knowledge-cutoff", label: "Mốc kiến thức" },
    { id: "context-window", label: "Context window" },
    { id: "context-rot", label: "Quá nhiều context làm giảm chất lượng" },
    { id: "overflow", label: "Vượt giới hạn context" },
    { id: "conversation-scope", label: "Phạm vi một cuộc hội thoại" },
    { id: "no-access", label: "Không tự truy cập dữ liệu" },
    { id: "reliability", label: "Độ tin cậy và kiểm chứng" },
  ],
  hints: [
    "Thông tin thay đổi sau mốc kiến thức (giá, quy định mới, sự kiện gần đây) cần nguồn bên ngoài.",
    "Context window giống mặt bàn làm việc: rộng nhưng có giới hạn, và bày quá nhiều giấy tờ không liên quan sẽ khó tìm thứ cần.",
    "Mức kiểm chứng tỉ lệ với hậu quả nếu sai.",
  ],
  sources: [
    { label: "Anthropic — Context windows", href: "https://platform.claude.com/docs/en/build-with-claude/context-windows" },
    { label: "Anthropic — Models overview (knowledge cutoff)", href: "https://platform.claude.com/docs/en/about-claude/models/overview" },
    { label: "Anthropic — Glossary", href: "https://platform.claude.com/docs/en/about-claude/glossary" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Mốc kiến thức:** model học từ dữ liệu đến một thời điểm. Theo trang Models overview, các model hiện tại có mốc kiến thức đáng tin cậy đến **tháng 6/2026**. Sự kiện, giá cả, quy định mới hơn cần bạn cung cấp hoặc cần công cụ tìm kiếm.",
        "**Context window** là “bộ nhớ làm việc” của model: mọi thứ trong yêu cầu (lời nhắn hệ thống, toàn bộ hội thoại, file, hình ảnh) **và cả câu trả lời** đều tính vào. Các model hiện tại có 1 triệu token. Anthropic lưu ý: **nhiều context hơn không tự động tốt hơn** — khi lượng token tăng, độ chính xác và khả năng nhớ lại có thể giảm (*context rot*). Chọn đúng tài liệu quan trọng không kém dung lượng.",
        "Nếu đầu vào vượt giới hạn, API báo lỗi “prompt is too long”; giao diện chat có thể tự quản lý bằng cách bỏ bớt phần cũ. Với hội thoại dài, có kỹ thuật **tóm tắt dần (compaction)** — trong Claude Code là lệnh `/compact`.",
        "Claude **không tự truy cập** máy tính, email hay hệ thống công ty của bạn nếu chưa được kết nối và cho phép. Mỗi **cuộc hội thoại mới** bắt đầu với context riêng; một số tính năng (như Projects hoặc bộ nhớ, tuỳ gói và cài đặt) có thể đưa thêm thông tin vào.",
        "Cuối cùng: Claude **có thể sai**, kể cả khi trả lời rất tự tin. Mức kiểm chứng nên tương xứng với hậu quả nếu sai.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Hãy hình dung một chuyên gia vừa đi công tác dài ngày về (mốc kiến thức), làm việc trên một mặt bàn có diện tích nhất định (context window), không có chìa khoá tủ hồ sơ của bạn (không tự truy cập), và đôi khi nhớ nhầm (có thể sai).",
      },
      terms: [
        { term: "Knowledge cutoff", definition: "Mốc thời gian đến đó kiến thức của model rộng và đáng tin cậy nhất." },
        { term: "Context window", definition: "Toàn bộ văn bản model có thể tham chiếu khi tạo câu trả lời, kể cả chính câu trả lời." },
        { term: "Context rot", definition: "Hiện tượng độ chính xác giảm khi context quá dài." },
        { term: "Compaction", definition: "Tóm tắt phần hội thoại cũ để tiếp tục làm việc mà không vượt giới hạn." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bốn giới hạn chính",
      visual: "ai-limits",
      caption: "Mốc kiến thức · bộ nhớ làm việc có hạn · không tự truy cập · có thể sai. Mỗi giới hạn đi kèm một cách xử lý.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: context tích luỹ theo từng lượt",
      mermaid: `flowchart LR
  T1["Lượt 1: câu hỏi + trả lời"] --> T2["Lượt 2: lịch sử lượt 1 + câu hỏi mới + trả lời"]
  T2 --> T3["Lượt 3: lịch sử lượt 1-2 + câu hỏi mới + trả lời"]
  T3 --> L{"Gần chạm giới hạn?"}
  L -- "Chưa" --> T4["Tiếp tục"]
  L -- "Sắp chạm" --> C["Tóm tắt phần cũ hoặc mở hội thoại mới kèm bản tóm tắt"]`,
      caption: "Mỗi lượt mang theo toàn bộ lịch sử trước đó — context lớn dần cho đến khi cần tóm tắt.",
      alt: "Sơ đồ: lượt 1, lượt 2 mang lịch sử lượt 1, lượt 3 mang lịch sử lượt 1 và 2. Khi sắp chạm giới hạn thì tóm tắt phần cũ hoặc mở hội thoại mới kèm bản tóm tắt.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Bỏ qua giới hạn",
        content: "Dán cả 40 tài liệu của phòng (sổ tay nhân sự, catalog cũ, email tiệc tất niên…) rồi hỏi: “Lỗi rò dầu tháng 10 do đâu?”",
        notes: ["Nhiều tài liệu không liên quan làm loãng context.", "Có thể vượt giới hạn hoặc giảm độ chính xác."],
      },
      good: {
        label: "Tôn trọng giới hạn",
        content: "Gửi báo cáo lỗi tháng 10, biên bản họp QA tuần 43 và tiêu chuẩn thử nghiệm liên quan; hỏi cụ thể và yêu cầu trích dẫn đoạn làm căn cứ.",
        notes: ["Chỉ tài liệu liên quan.", "Trích dẫn giúp kiểm chứng."],
      },
      takeaway: "Chọn lọc context: đúng tài liệu, đủ dùng, có căn cứ để kiểm tra.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xếp tài liệu vào context window",
      widget: "context-window",
      intro:
        "Bạn cần trả lời: “Tổng hợp lỗi rò dầu tháng 10 của máy 250 kVA và hành động đã thống nhất.” Chọn tài liệu đưa vào context. Dung lượng ở đây là đơn vị minh hoạ (không phải token thật).",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: làm việc trong giới hạn",
      steps: [
        { title: "Hỏi: thông tin này có mới hơn mốc kiến thức không?", detail: "Nếu có (giá, quy định, sự kiện gần đây), hãy cung cấp nguồn hoặc dùng tìm kiếm web và kiểm tra nguồn." },
        { title: "Chọn lọc tài liệu", detail: "Chỉ đưa phần liên quan; với tài liệu dài, chỉ rõ mục cần đọc." },
        { title: "Theo dõi độ dài hội thoại", detail: "Hội thoại quá dài: tóm tắt các quyết định đã chốt, mở hội thoại mới kèm bản tóm tắt. Trong Claude Code có thể dùng `/compact` hoặc xem mức dùng bằng `/context`." },
        { title: "Kiểm chứng theo mức rủi ro", detail: "Việc nhẹ: đọc lại. Việc quan trọng: đối chiếu nguồn, hỏi trích dẫn, người thứ hai duyệt." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Cuộc hội thoại về dự án lắp đặt trạm biến áp đã rất dài và Claude bắt đầu quên các quyết định đầu tiên. Viết prompt yêu cầu Claude tóm tắt để chuyển sang hội thoại mới, nêu rõ cần giữ lại những gì.",
      placeholder: "Hãy tóm tắt cuộc hội thoại này để tôi tiếp tục ở hội thoại mới. Cần giữ lại…",
      rubric: [
        { id: "summary", label: "Yêu cầu tóm tắt", weight: 1, check: { kind: "anyKeyword", keywords: ["tóm tắt", "tổng hợp", "tóm lược"] }, pass: "Có yêu cầu tóm tắt.", fail: "Yêu cầu Claude tóm tắt cuộc hội thoại." },
        { id: "keep", label: "Nêu cần giữ lại gì", weight: 1, check: { kind: "anyKeyword", keywords: ["quyết định", "đã thống nhất", "số liệu", "việc còn lại", "việc cần làm", "người phụ trách", "hạn"] }, pass: "Có nêu thông tin cần giữ.", fail: "Liệt kê thứ cần giữ: quyết định đã chốt, số liệu, việc còn lại…" },
        { id: "new", label: "Mục đích dùng cho hội thoại mới", weight: 1, check: { kind: "anyKeyword", keywords: ["hội thoại mới", "cuộc trò chuyện mới", "tiếp tục", "phiên mới"] }, pass: "Có nêu mục đích.", fail: "Nói rõ bản tóm tắt dùng để tiếp tục ở hội thoại mới." },
        { id: "format", label: "Định dạng / độ dài", weight: 1, check: { kind: "regex", pattern: "(gach dau dong|bang|muc|toi da|khong qua|\\d+\\s*(tu|y|dong))" }, pass: "Có định dạng.", fail: "Yêu cầu định dạng gọn, ví dụ gạch đầu dòng, tối đa 200 từ." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Hãy tóm tắt cuộc hội thoại này để tôi tiếp tục ở một hội thoại mới. Giữ lại: các quyết định đã thống nhất, số liệu kỹ thuật đã chốt (công suất, vị trí, tiến độ), việc còn lại kèm người phụ trách và hạn. Bỏ qua phần thảo luận đã bị loại. Trình bày bằng gạch đầu dòng theo 3 mục, tối đa 200 từ.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Model có mốc kiến thức (các model hiện tại: đáng tin cậy đến 6/2026); thông tin mới hơn cần nguồn bên ngoài.",
        "Context window là bộ nhớ làm việc có hạn, tính cả câu trả lời; nhiều context hơn không luôn tốt hơn.",
        "Vượt giới hạn: API báo lỗi; hội thoại dài nên được tóm tắt (compaction, `/compact` trong Claude Code).",
        "Claude không tự truy cập dữ liệu hay hệ thống khi chưa được kết nối; mỗi hội thoại có context riêng.",
        "Claude có thể sai — kiểm chứng tương xứng với hậu quả.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Rà soát một quy trình bạn định dùng Claude và ghi rõ giới hạn nào có thể ảnh hưởng.",
      tasks: [
        "Chọn một quy trình (ví dụ: soạn báo cáo tháng).",
        "Với mỗi giới hạn (mốc kiến thức, context, truy cập, độ tin cậy), ghi rủi ro cụ thể.",
        "Ghi cách xử lý cho từng rủi ro.",
      ],
      deliverable: "Bảng 3 cột: Giới hạn | Rủi ro trong quy trình | Cách xử lý.",
      checklist: ["Đủ 4 giới hạn", "Mỗi giới hạn có cách xử lý cụ thể", "Đã lưu vào ô Ghi chú"],
    },
  ],
};
