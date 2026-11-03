import type { Lesson } from "@/lib/types/content";

const PRICE = "https://platform.claude.com/docs/en/about-claude/pricing";
const TC = "https://platform.claude.com/docs/en/build-with-claude/token-counting";

export const lessonTokenLaGi: Lesson = {
  id: "ch08-l01",
  chapterId: "ch08",
  slug: "token-la-gi",
  title: "Token là gì?",
  subtitle: "Đơn vị Claude đọc, viết và tính phí: token đầu vào, token đầu ra, cách đếm và cách ước lượng chi phí.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích token là gì và vì sao số token không bằng số chữ hay số từ." },
    { id: "o2", text: "Phân biệt token đầu vào và token đầu ra; biết thinking được tính như token đầu ra." },
    { id: "o3", text: "Ước lượng chi phí một yêu cầu từ số token và bảng giá theo triệu token (MTok)." },
    { id: "o4", text: "Biết cách đếm token chính xác hơn (token counting API, /usage) thay vì đoán." },
  ],
  concepts: [
    { id: "token", label: "Token" },
    { id: "tokenizer", label: "Bộ tách token" },
    { id: "language", label: "Ngôn ngữ và số token" },
    { id: "input-output", label: "Token đầu vào và đầu ra" },
    { id: "thinking-tokens", label: "Token suy nghĩ (thinking)" },
    { id: "mtok", label: "Giá theo triệu token" },
    { id: "estimate-cost", label: "Ước lượng chi phí" },
    { id: "count-tokens", label: "Đếm token" },
  ],
  hints: [
    "MTok = 1 triệu token. Giá đầu ra của các model hiện tại cao gấp 5 lần giá đầu vào.",
    "Chi phí ≈ (token vào ÷ 1.000.000) × giá vào + (token ra ÷ 1.000.000) × giá ra.",
    "Muốn số chính xác: token counting API (miễn phí, vẫn là ước tính) hoặc trường usage trong phản hồi.",
  ],
  sources: [
    { label: "Anthropic — Pricing (bảng giá theo MTok, đối chiếu 03/11/2026)", href: PRICE },
    { label: "Anthropic — Token counting (miễn phí, là ước tính, tokenizer mới)", href: TC },
    { label: "Anthropic — Models overview (khoảng 2,5 ký tự Unicode mỗi token với văn bản thông thường)", href: "https://platform.claude.com/docs/en/about-claude/models/overview" },
    { label: "Anthropic — Context windows (thinking tính như token đầu ra)", href: "https://platform.claude.com/docs/en/build-with-claude/context-windows" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude không đọc từng chữ cái hay từng từ, mà đọc theo **token** — những mẩu văn bản do **bộ tách token** (tokenizer) chia ra: có khi là cả một từ, có khi là một phần từ, một dấu câu hoặc khoảng trắng. Theo Anthropic, với văn bản thông thường, **1 triệu token tương đương khoảng 2,5 triệu ký tự**. Tiếng Việt có dấu thường bị chia nhỏ hơn, nên cùng một nội dung có thể tốn nhiều token hơn tiếng Anh.",
        "Có hai loại: **token đầu vào** (mọi thứ gửi cho Claude: tin nhắn, lịch sử hội thoại, file, hình ảnh, hướng dẫn hệ thống) và **token đầu ra** (những gì Claude viết ra). Phần **suy nghĩ** (thinking) cũng được tính như token đầu ra. Giá đầu ra cao hơn nhiều: với các model hiện tại, gấp **5 lần** giá đầu vào.",
        "Giá tính theo **MTok** (một triệu token). Ví dụ bảng giá ngày 03/11/2026: Claude Sonnet 5.5 có giá **$2/MTok** đầu vào và **$10/MTok** đầu ra; Claude Opus 5.5 là **$4** và **$20**; Claude Haiku 5.5 là **$0,10** và **$0,50** (với prompt đến 100.000 token). Giá có thể thay đổi — luôn xem trang Pricing chính thức.",
        "Muốn biết số token, đừng đoán: **token counting API** của Anthropic miễn phí và cho số đếm trước khi gửi (vẫn là ước tính sát). Model từ Claude 4.7 trở đi dùng tokenizer mới, cùng một văn bản cho khoảng **30% nhiều token hơn** model cũ — nên đếm lại theo đúng model. Trong Claude Code, `/usage` cho thấy token đã dùng.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Token giống đơn vị tính cước của taxi: không tính theo số con phố mà theo từng đoạn ngắn. Đoạn đường bạn yêu cầu (đầu vào) và đoạn tài xế tự chạy thêm để tới nơi (đầu ra) đều tính tiền — và đoạn tài xế chạy có giá cao hơn.",
      },
      terms: [
        { term: "Token", definition: "Mẩu văn bản nhỏ nhất model xử lý; có thể là từ, một phần từ hoặc dấu câu." },
        { term: "Tokenizer", definition: "Bộ tách văn bản thành token; mỗi thế hệ model có thể khác nhau." },
        { term: "MTok", definition: "Một triệu token — đơn vị dùng trong bảng giá." },
        { term: "Input / Output tokens", definition: "Token gửi vào model / token model sinh ra (kể cả thinking)." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: cái gì là token đầu vào, cái gì là đầu ra",
      infographic: {
        kind: "compare",
        columns: [
          { title: "Token đầu vào (giá thấp hơn)", tone: "neutral", items: ["Tin nhắn bạn vừa gửi", "Toàn bộ lịch sử hội thoại trước đó", "File, hình ảnh, PDF đính kèm", "Hướng dẫn hệ thống, CLAUDE.md, định nghĩa công cụ", "Kết quả lệnh và file Claude đã đọc"] },
          { title: "Token đầu ra (giá cao hơn, gấp 5 lần)", tone: "neutral", items: ["Câu trả lời Claude viết", "Phần suy nghĩ (thinking)", "Lệnh gọi công cụ Claude tạo ra", "Code Claude viết vào file"] },
        ],
      },
      caption: "Tỷ lệ 5 lần áp dụng cho các model hiện tại theo bảng giá ngày 03/11/2026.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ văn bản đến hoá đơn",
      mermaid: `flowchart LR
  A["Văn bản, file, hình ảnh"] --> B["Tokenizer chia thành token"]
  B --> C["Token đầu vào"]
  C --> D["Claude xử lý"]
  D --> E["Token đầu ra: trả lời + thinking"]
  C --> F["Chi phí = vào × giá vào + ra × giá ra"]
  E --> F`,
      caption: "Hai dòng token, hai mức giá.",
      alt: "Sơ đồ: văn bản, file, hình ảnh được tokenizer chia thành token đầu vào; Claude xử lý và sinh token đầu ra gồm trả lời và thinking; chi phí bằng token vào nhân giá vào cộng token ra nhân giá ra.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: ước lượng chi phí",
      bad: {
        label: "Đoán theo số từ",
        content: "Prompt có 500 từ → chắc khoảng 500 token → gần như không tốn gì.",
        notes: ["Số từ không bằng số token.", "Quên lịch sử hội thoại và file đính kèm cũng là token đầu vào.", "Quên token đầu ra (đắt hơn) và thinking."],
      },
      good: {
        label: "Tính từ số đo thật",
        content:
          "Token counting API: 20.000 token vào. Ước tính trả lời: 2.000 token ra.\nSonnet 5.5: 20.000/1.000.000 × $2 = $0,04; 2.000/1.000.000 × $10 = $0,02 → khoảng $0,06.",
        notes: ["Đếm bằng công cụ chính thức.", "Tách riêng vào và ra.", "Ghi rõ đây là ước tính theo giá niêm yết."],
      },
      takeaway: "Đo bằng công cụ, tính riêng đầu vào và đầu ra, ghi ngày của bảng giá.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: token đầu vào hay đầu ra?",
      sim: {
        kind: "classify",
        bins: [
          { id: "in", label: "Token đầu vào" },
          { id: "out", label: "Token đầu ra" },
        ],
        items: [
          { id: "i1", text: "Câu hỏi bạn vừa gõ", bin: "in", why: "Mọi thứ gửi cho Claude là đầu vào." },
          { id: "i2", text: "Lịch sử 20 lượt hỏi đáp trước đó trong phiên", bin: "in", why: "Lịch sử được gửi lại mỗi lượt, tính là đầu vào." },
          { id: "i3", text: "File báo cáo PDF bạn đính kèm", bin: "in", why: "File và hình ảnh đính kèm là đầu vào." },
          { id: "i4", text: "Nội dung CLAUDE.md nạp đầu phiên", bin: "in", why: "Hướng dẫn được nạp vào context là đầu vào." },
          { id: "i5", text: "Câu trả lời Claude viết ra", bin: "out", why: "Nội dung model sinh ra là đầu ra." },
          { id: "i6", text: "Phần thinking trước khi Claude trả lời", bin: "out", why: "Thinking tính như token đầu ra." },
          { id: "i7", text: "Đoạn code Claude viết vào file", bin: "out", why: "Code do Claude sinh ra là đầu ra." },
        ],
      },
      intro: "Xếp từng thứ vào đúng loại token. Nhớ: đầu ra có giá cao hơn.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: ước lượng chi phí một yêu cầu",
      steps: [
        { title: "Đếm token đầu vào", detail: "Dùng token counting API (miễn phí) với đúng model định dùng; trong Claude Code xem /usage sau khi chạy.", code: { lang: "bash", content: "curl https://api.anthropic.com/v1/messages/count_tokens \\\n  -H \"x-api-key: $ANTHROPIC_API_KEY\" \\\n  -H \"anthropic-version: 2023-06-01\" \\\n  -H \"content-type: application/json\" \\\n  -d '{\"model\": \"claude-sonnet-5-5\", \"messages\": [{\"role\": \"user\", \"content\": \"Xin chào\"}]}'" } },
        { title: "Ước lượng token đầu ra", detail: "Dựa vào độ dài câu trả lời mong muốn; nhớ cộng thinking nếu việc cần suy luận." },
        { title: "Tra giá theo MTok", detail: "Lấy từ trang Pricing chính thức, ghi ngày tra." },
        { title: "Tính và cộng", detail: "Chi phí ≈ vào/1.000.000 × giá vào + ra/1.000.000 × giá ra.", code: { lang: "text", content: "Opus 5.5 ($4 vào, $20 ra):\n20.000 vào → 0,02 × 4 = $0,08\n 2.000 ra  → 0,002 × 20 = $0,04\nTổng ước tính ≈ $0,12" } },
        { title: "Ghi rõ là ước tính", detail: "Hoá đơn thật phụ thuộc cache, batch, khu vực dữ liệu và gói của bạn." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Một yêu cầu tóm tắt biên bản có 50.000 token đầu vào và khoảng 4.000 token đầu ra. Dùng bảng giá ngày 03/11/2026: Sonnet 5.5 ($2 vào, $10 ra mỗi MTok) và Haiku 5.5 ($0,10 vào, $0,50 ra mỗi MTok, prompt dưới 100.000 token). Tính chi phí ước tính cho từng model, trình bày phép tính, và ghi chú vì sao đây chỉ là ước tính.",
      placeholder: "Sonnet 5.5: vào … ra … tổng …\nHaiku 5.5: vào … ra … tổng …\nGhi chú: …",
      rubric: [
        { id: "sonnet", label: "Sonnet 5.5 ≈ $0,14", weight: 1, check: { kind: "regex", pattern: "0[.,]14\\b" }, pass: "Sonnet đúng: $0,10 + $0,04 = $0,14.", fail: "Sonnet: 0,05 × 2 = $0,10; 0,004 × 10 = $0,04; tổng $0,14." },
        { id: "haiku", label: "Haiku 5.5 ≈ $0,007", weight: 1, check: { kind: "regex", pattern: "0[.,]007\\b" }, pass: "Haiku đúng: $0,005 + $0,002 = $0,007.", fail: "Haiku: 0,05 × 0,10 = $0,005; 0,004 × 0,50 = $0,002; tổng $0,007." },
        { id: "split", label: "Tính riêng vào và ra", weight: 1, check: { kind: "allGroups", groups: [["vào", "đầu vào", "input"], ["ra", "đầu ra", "output"]] }, pass: "Có tách vào/ra.", fail: "Tính riêng phần đầu vào và đầu ra." },
        { id: "estimate", label: "Ghi chú là ước tính", weight: 1, check: { kind: "anyKeyword", keywords: ["ước tính", "ước lượng", "giá niêm yết", "có thể thay đổi"] }, pass: "Có ghi chú.", fail: "Ghi rõ đây là ước tính (giá có thể đổi, cache, thinking…)." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Sonnet 5.5: vào 50.000/1.000.000 × $2 = $0,10; ra 4.000/1.000.000 × $10 = $0,04; tổng ≈ $0,14.\nHaiku 5.5: vào 0,05 × $0,10 = $0,005; ra 0,004 × $0,50 = $0,002; tổng ≈ $0,007.\nGhi chú: đây là ước tính theo giá niêm yết ngày 03/11/2026; số token ra thực tế có thể khác (thinking), cache và gói tài khoản cũng làm hoá đơn thay đổi.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Token là mẩu văn bản model xử lý; ~2,5 ký tự mỗi token với văn bản thông thường, tiếng Việt có dấu thường tốn hơn.",
        "Đầu vào: tin nhắn, lịch sử, file, hướng dẫn; đầu ra: trả lời, thinking, code — đầu ra đắt gấp 5 lần.",
        "Giá theo MTok (03/11/2026): Sonnet 5.5 $2/$10, Opus 5.5 $4/$20, Haiku 5.5 $0,10/$0,50.",
        "Đếm bằng token counting API (miễn phí) hoặc /usage; model mới dùng tokenizer cho nhiều token hơn ~30%.",
        "Luôn ghi chi phí là ước tính và ghi ngày của bảng giá.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn 3 việc bạn hay nhờ Claude (ví dụ: tóm tắt biên bản, sửa code, viết email).",
      tasks: [
        "Ước lượng token đầu vào và đầu ra cho mỗi việc (hoặc đo bằng /usage nếu dùng Claude Code).",
        "Tính chi phí ước tính với hai model khác nhau theo bảng giá chính thức hiện hành.",
        "Ghi chú việc nào đáng dùng model mạnh hơn, việc nào không.",
      ],
      deliverable: "Bảng: Việc | Token vào | Token ra | Chi phí model A | Chi phí model B | Ngày tra giá.",
      checklist: ["Mỗi dòng tách riêng vào/ra", "Có ngày tra giá", "Có ghi chú đây là ước tính"],
    },
  ],
};
