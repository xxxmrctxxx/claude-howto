import type { Lesson } from "@/lib/types/content";

const CW = "https://platform.claude.com/docs/en/build-with-claude/context-windows";

export const lessonContextWindowCh8: Lesson = {
  id: "ch08-l02",
  chapterId: "ch08",
  slug: "context-window",
  title: "Context window",
  subtitle: "Bộ nhớ làm việc của Claude: cái gì chiếm chỗ, nó đầy lên thế nào qua từng lượt, và vì sao nhiều hơn không có nghĩa là tốt hơn.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích context window là bộ nhớ làm việc và những gì được tính vào đó." },
    { id: "o2", text: "Mô tả context tích luỹ qua từng lượt và điều xảy ra khi gần đầy ở claude.ai, Claude Code và API." },
    { id: "o3", text: "Hiểu context rot: càng nhiều token, độ chính xác và khả năng nhớ lại càng giảm — cần chọn lọc." },
    { id: "o4", text: "Theo dõi và quản lý context trong Claude Code: /context, /compact, /clear, CLAUDE.md." },
  ],
  concepts: [
    { id: "working-memory", label: "Bộ nhớ làm việc" },
    { id: "what-counts", label: "Những gì chiếm context" },
    { id: "window-size", label: "Kích thước context window" },
    { id: "accumulation", label: "Tích luỹ qua từng lượt" },
    { id: "overflow", label: "Khi context gần đầy" },
    { id: "context-rot", label: "Context rot" },
    { id: "caching-vs-window", label: "Cache không làm context nhỏ đi" },
    { id: "monitor", label: "Theo dõi bằng /context" },
    { id: "manage", label: "Quản lý: /compact, /clear" },
    { id: "persistent-rules", label: "Quy tắc lâu dài trong CLAUDE.md" },
  ],
  hints: [
    "Context window khác dữ liệu huấn luyện: nó là những gì Claude đang “cầm trên tay” trong cuộc trò chuyện này.",
    "Mỗi lượt mới mang theo toàn bộ lịch sử trước đó.",
    "Quy tắc quan trọng nên nằm trong CLAUDE.md, không chỉ trong tin nhắn đầu phiên.",
  ],
  sources: [
    { label: "Anthropic — Context windows (working memory, context rot, kích thước, khi vượt giới hạn)", href: CW },
    { label: "Claude Code — How Claude Code works: The context window, When context fills up", href: "https://code.claude.com/docs/en/how-claude-code-works" },
    { label: "Claude Code — Manage costs: Why usage climbs in a long session", href: "https://code.claude.com/docs/en/costs" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Context window** là “bộ nhớ làm việc” của Claude: mọi văn bản model có thể tham chiếu khi trả lời, **kể cả chính câu trả lời**. Nó khác với kho kiến thức model đã học khi huấn luyện. Mọi thứ trong yêu cầu đều chiếm chỗ: hướng dẫn hệ thống, mọi tin nhắn (cả kết quả công cụ, hình ảnh, tài liệu), định nghĩa công cụ, và phần Claude sinh ra (kể cả thinking).",
        "Theo tài liệu (đối chiếu 03/11/2026), các model hiện tại có context window **1 triệu token** và một yêu cầu sinh tối đa **128 nghìn token** đầu ra. Context **tích luỹ**: mỗi lượt mới mang theo toàn bộ lịch sử trước đó cộng tin nhắn mới. Khi gần đầy: claude.ai có thể bỏ bớt phần cũ theo kiểu vào trước ra trước; Claude Code **tự tóm tắt** (compact) lịch sử; gọi API mà đầu vào vượt giới hạn sẽ nhận lỗi 400 “prompt is too long”.",
        "Quan trọng hơn kích thước: **context rot** — khi số token tăng, độ chính xác và khả năng nhớ lại **giảm**. Vì thế chọn lọc thứ đưa vào quan trọng không kém dung lượng còn trống. Prompt caching chỉ làm phần lặp lại **rẻ hơn**, không làm nó **thôi chiếm chỗ**.",
        "Trong Claude Code: `/context` xem cái gì đang chiếm chỗ; `/compact` (có thể kèm trọng tâm) để tóm gọn; `/clear` khi sang việc khác. Khi compact, chỉ dẫn chi tiết từ đầu hội thoại có thể bị mất — quy tắc lâu dài nên ghi vào **CLAUDE.md**.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Context window giống mặt bàn làm việc của kỹ sư: bàn rất rộng, nhưng chất 40 tập hồ sơ lên thì tìm đúng tờ cần vẫn khó (context rot). Hết chỗ thì phải dọn bớt hoặc tóm tắt thành vài trang ghi chú (compact) — và quy định của xưởng thì dán lên tường (CLAUDE.md) chứ không để lẫn trong đống giấy.",
      },
      terms: [
        { term: "Context window", definition: "Toàn bộ văn bản model tham chiếu trong một yêu cầu, kể cả đầu ra." },
        { term: "Context rot", definition: "Hiện tượng độ chính xác và khả năng nhớ lại giảm khi context ngày càng dài." },
        { term: "Compaction", definition: "Tóm tắt phần hội thoại cũ để giải phóng chỗ trong context." },
        { term: "FIFO", definition: "Vào trước ra trước — phần cũ nhất bị bỏ trước." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: cái gì chiếm chỗ trong context window",
      infographic: {
        kind: "table",
        headers: ["Thành phần", "Chiếm context?", "Ghi chú"],
        rows: [
          ["Hướng dẫn hệ thống, CLAUDE.md", "Có", "Nạp ở đầu mỗi phiên"],
          ["Tin nhắn, lịch sử hội thoại", "Có", "Lượt sau mang theo toàn bộ lượt trước"],
          ["Kết quả công cụ, file đã đọc, hình ảnh, PDF", "Có", "Log dài, file lớn chiếm nhiều chỗ nhất"],
          ["Định nghĩa công cụ", "Có", "Claude Code hoãn nạp định nghĩa công cụ MCP đến khi cần"],
          ["Câu trả lời và thinking của Claude", "Có", "Đầu ra cũng tính vào context window"],
          ["Phần đã được prompt caching", "Có", "Cache đổi giá, không đổi việc chiếm chỗ"],
        ],
      },
      caption: "Theo tài liệu Context windows và How Claude Code works (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: context tích luỹ qua từng lượt",
      mermaid: `flowchart LR
  A["Lượt 1: hỏi + trả lời"] --> B["Lượt 2: lịch sử lượt 1 + hỏi mới"]
  B --> C["Lượt 3: lịch sử lượt 1–2 + hỏi mới"]
  C --> D{"Gần đầy?"}
  D -->|"claude.ai"| E["Bỏ bớt phần cũ (vào trước ra trước)"]
  D -->|"Claude Code"| F["Tự compact: tóm tắt lịch sử"]
  D -->|"API, đầu vào vượt giới hạn"| G["Lỗi 400: prompt is too long"]`,
      caption: "Mỗi lượt lớn hơn lượt trước; cách xử lý khi gần đầy khác nhau theo nơi bạn dùng Claude.",
      alt: "Lưu đồ: lượt 1 gồm hỏi và trả lời; lượt 2 mang lịch sử lượt 1 cộng câu hỏi mới; lượt 3 mang lịch sử lượt 1 và 2. Khi gần đầy: claude.ai bỏ phần cũ theo vào trước ra trước, Claude Code tự compact, gọi API vượt giới hạn thì lỗi 400 prompt is too long.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: đưa tài liệu vào context",
      bad: {
        label: "Đưa hết cho chắc",
        content: "Dán 8 bộ tiêu chuẩn (khoảng 600.000 token) rồi hỏi: “Điều khoản nào quy định thử nghiệm độ tăng nhiệt?”",
        notes: ["Context rất dài → độ chính xác và khả năng nhớ lại giảm.", "Mỗi câu hỏi tiếp theo lại gánh toàn bộ 600.000 token.", "Phần lớn tài liệu không liên quan."],
      },
      good: {
        label: "Chọn lọc rồi mới hỏi",
        content: "Đưa đúng chương “Thử nghiệm điển hình” của tiêu chuẩn đang áp dụng (khoảng 15.000 token). Yêu cầu: trước tiên trích nguyên văn các điều khoản về độ tăng nhiệt, sau đó mới tóm tắt.",
        notes: ["Context nhỏ, tập trung.", "Trích dẫn trước giúp bám sát tài liệu."],
      },
      takeaway: "Context window lớn là sức chứa, không phải lời khuyên hãy lấp đầy nó.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đối chiếu khẳng định với tài liệu Context windows",
      sim: {
        kind: "verify",
        sourceTitle: "Trích (rút gọn) tài liệu Context windows của Anthropic, đối chiếu 03/11/2026",
        sourceLines: [
          "The context window refers to all the text a language model can reference when generating a response, including the response itself.",
          "This is different from the large corpus of data the language model was trained on.",
          "As token count grows, accuracy and recall degrade, a phenomenon known as context rot.",
          "Chat interfaces such as claude.ai can also manage the context window on a rolling first in, first out basis.",
          "Claude Opus 5.5, Claude Sonnet 5.5 and Claude Haiku 5.5 have a 1M-token context window.",
          "Cached prompt prefixes still occupy the context window: prompt caching changes what you pay for those tokens, not whether they count.",
        ],
        verdicts: [
          { id: "dung", label: "Đúng theo nguồn" },
          { id: "sai", label: "Sai theo nguồn" },
          { id: "khong-noi", label: "Nguồn không nói" },
        ],
        claims: [
          { id: "c1", text: "Context window chính là toàn bộ kiến thức model đã học.", verdict: "sai", why: "Dòng 2: context window khác dữ liệu huấn luyện." },
          { id: "c2", text: "Câu trả lời của Claude cũng nằm trong context window.", verdict: "dung", why: "Dòng 1: gồm cả chính câu trả lời." },
          { id: "c3", text: "Càng đưa nhiều token vào, Claude càng chính xác.", verdict: "sai", why: "Dòng 3: độ chính xác và khả năng nhớ lại giảm khi số token tăng." },
          { id: "c4", text: "Phần được cache không còn chiếm chỗ trong context window.", verdict: "sai", why: "Dòng 6: cache đổi giá, không đổi việc chiếm chỗ." },
          { id: "c5", text: "claude.ai có thể bỏ bớt phần cũ theo kiểu vào trước ra trước.", verdict: "dung", why: "Dòng 4 nói đúng như vậy." },
          { id: "c6", text: "Context window 1 triệu token giúp trả lời nhanh gấp đôi.", verdict: "khong-noi", why: "Nguồn trích không nói về tốc độ." },
        ],
        note: "Đọc kỹ từng dòng nguồn trước khi chọn.",
      },
      intro: "Một đồng nghiệp đưa ra 6 khẳng định về context window. Đối chiếu từng câu với đoạn trích tài liệu chính thức.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: giữ context gọn trong Claude Code",
      steps: [
        { title: "Xem cái gì đang chiếm chỗ", detail: "Kiểm tra định kỳ, nhất là phiên dài.", code: { lang: "text", content: "/context" } },
        { title: "Ghi quy tắc lâu dài vào CLAUDE.md", detail: "Chỉ dẫn từ đầu hội thoại có thể mất khi compact; CLAUDE.md được nạp lại mỗi phiên." },
        { title: "Compact có trọng tâm khi cùng một việc kéo dài", detail: "Nói rõ điều cần giữ.", code: { lang: "text", content: "/compact giữ các quyết định thiết kế và kết quả test gần nhất" } },
        { title: "Clear khi sang việc khác", detail: "Việc mới không phải gánh lịch sử cũ.", code: { lang: "text", content: "/clear" } },
        { title: "Chỉ đưa phần liên quan", detail: "Đưa chương, đoạn, file cần thiết thay vì cả kho tài liệu; với API, đếm token trước khi gửi." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Bạn cần rà soát 12 hợp đồng mua máy biến áp bằng Claude Code trong một buổi chiều, mỗi hợp đồng khoảng 20 trang. Viết kế hoạch giữ context gọn: cách chia phiên, khi nào compact hay clear, quy tắc nào ghi vào CLAUDE.md, cách chọn lọc nội dung đưa vào, và cách kiểm tra mức dùng context.",
      placeholder: "Chia phiên: …\nCompact/clear: …\nCLAUDE.md: …\nChọn lọc: …\nKiểm tra: …",
      rubric: [
        { id: "split", label: "Chia việc / clear giữa các hợp đồng", weight: 1, check: { kind: "regex", pattern: "(/clear|moi hop dong mot phien|tach phien|phien rieng)" }, pass: "Có chia việc.", fail: "Mỗi hợp đồng một phiên hoặc /clear giữa các hợp đồng." },
        { id: "compact", label: "Compact có trọng tâm", weight: 1, check: { kind: "regex", pattern: "/compact" }, pass: "Có /compact.", fail: "Dùng /compact kèm trọng tâm khi một hợp đồng kéo dài." },
        { id: "claudemd", label: "Quy tắc lâu dài trong CLAUDE.md", weight: 1, check: { kind: "regex", pattern: "claude\\.md[^\\n]*(quy tac|tieu chi|checklist|dieu khoan)" }, pass: "Có quy tắc trong CLAUDE.md.", fail: "Ghi tiêu chí rà soát chung vào CLAUDE.md." },
        { id: "select", label: "Chọn lọc nội dung", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ đưa", "chọn lọc", "phần liên quan", "chỉ đọc"] }, pass: "Có chọn lọc.", fail: "Chỉ đưa phần liên quan (ví dụ: điều khoản bảo hành, phạt, thử nghiệm)." },
        { id: "monitor", label: "Kiểm tra bằng /context", weight: 1, check: { kind: "regex", pattern: "/context" }, pass: "Có /context.", fail: "Dùng /context để xem mức dùng." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Chia phiên: mỗi hợp đồng một phiên; xong hợp đồng nào thì ghi kết luận ra file ket-qua.md rồi /clear.\nCompact/clear: nếu một hợp đồng phải trao đổi lâu, dùng /compact giữ các điều khoản rủi ro đã tìm thấy.\nCLAUDE.md: ghi quy tắc rà soát chung (checklist điều khoản bảo hành, phạt chậm giao, thử nghiệm nghiệm thu, đơn vị tiền tệ).\nChọn lọc: chỉ đưa phần liên quan của từng hợp đồng, không dán cả 12 hợp đồng cùng lúc.\nKiểm tra: /context sau mỗi hợp đồng để xem mức dùng context.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Context window = bộ nhớ làm việc, gồm cả câu trả lời; khác dữ liệu huấn luyện.",
        "Mọi thứ trong yêu cầu đều chiếm chỗ: hướng dẫn, tin nhắn, kết quả công cụ, hình ảnh, định nghĩa công cụ, đầu ra, thinking.",
        "Model hiện tại: 1 triệu token context, tối đa 128 nghìn token đầu ra mỗi yêu cầu (03/11/2026).",
        "Context tích luỹ mỗi lượt; context rot làm giảm độ chính xác khi quá dài — hãy chọn lọc.",
        "Claude Code: /context để xem, /compact để tóm gọn, /clear khi đổi việc, CLAUDE.md cho quy tắc lâu dài.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Quan sát context trong một phiên Claude Code thật kéo dài ít nhất 30 phút.",
      tasks: [
        "Chạy /context ở đầu phiên, giữa phiên và trước khi kết thúc; ghi lại các mục chiếm nhiều chỗ nhất.",
        "Thử /compact với một trọng tâm cụ thể và so sánh /context trước/sau.",
        "Chuyển một quy tắc bạn hay nhắc lại vào CLAUDE.md.",
      ],
      deliverable: "Ghi chú 3 lần đo /context, mục chiếm chỗ lớn nhất, và quy tắc đã chuyển vào CLAUDE.md.",
      checklist: ["Có số liệu /context ở 3 thời điểm", "Đã thử /compact có trọng tâm", "CLAUDE.md có thêm quy tắc lâu dài"],
    },
  ],
};
