import type { Lesson } from "@/lib/types/content";

const COSTS = "https://code.claude.com/docs/en/costs";
const PRICE = "https://platform.claude.com/docs/en/about-claude/pricing";

export const lessonSoSanhPhuongPhap: Lesson = {
  id: "ch08-l07",
  chapterId: "ch08",
  slug: "so-sanh-phuong-phap",
  title: "So sánh phương pháp làm việc",
  subtitle: "Cân cả chi phí lẫn chất lượng: cách giao việc, chọn model và mức effort, cache và batch — và những kiểu “tiết kiệm” làm hỏng kết quả.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "So sánh các quy trình làm việc theo cả chi phí lẫn chất lượng (dán hết so với nhắm trúng)." },
    { id: "o2", text: "Chọn model và mức effort hợp với độ khó: Haiku, Sonnet, Opus, Fable." },
    { id: "o3", text: "Biết hai cơ chế giảm giá cho người dùng API: prompt caching và Batch API." },
    { id: "o4", text: "Tránh tiết kiệm sai: không bỏ kiểm chứng; thử chất lượng trên mẫu trước khi đổi sang cách rẻ hơn." },
  ],
  concepts: [
    { id: "workflow-compare", label: "So sánh quy trình" },
    { id: "model-choice", label: "Chọn model" },
    { id: "default-model", label: "Model mặc định trong Claude Code" },
    { id: "fable", label: "Claude Fable 5.1" },
    { id: "haiku-subagent", label: "Haiku cho việc đơn giản" },
    { id: "effort", label: "Mức effort" },
    { id: "prompt-caching", label: "Prompt caching" },
    { id: "batch", label: "Batch API" },
    { id: "false-saving", label: "Tiết kiệm sai" },
    { id: "pilot-test", label: "Thử trên mẫu trước" },
  ],
  hints: [
    "Thứ đắt nhất thường là phải làm lại — không phải giá mỗi token.",
    "Rẻ hơn chỉ đáng khi chất lượng vẫn đạt: thử trên mẫu có đáp án trước.",
    "Có thể ước tính và so sánh hai quy trình ở phòng thực hành Token.",
  ],
  sources: [
    { label: "Claude Code — Manage costs: Choose the right model, Adjust extended thinking, Work efficiently on complex tasks", href: COSTS },
    { label: "Claude Code — Best practices: model mặc định và lựa chọn model", href: "https://code.claude.com/docs/en/best-practices" },
    { label: "Anthropic — Pricing: bảng giá, prompt caching, Batch API (đối chiếu 03/11/2026)", href: PRICE },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "So sánh phương pháp phải nhìn **hai trục**: chi phí và chất lượng. “Dán cả dự án rồi hỏi sửa giúp” vừa tốn (context khổng lồ, mỗi lượt hỏi lại gánh tất cả) vừa kém (Claude phải đoán chỗ sửa). “Gửi đúng file + test lỗi + yêu cầu cụ thể” vừa rẻ vừa dễ kiểm chứng. Bạn có thể thử con số ở phòng thực hành **Token** của khoá học.",
        "Chọn model theo độ khó (đối chiếu 03/11/2026): trên hầu hết gói, Claude Code mặc định chạy **Opus 5.5** ở mức effort trung bình ($4/$20 mỗi MTok vào/ra). **Sonnet 5.5** rẻ bằng một nửa ($2/$10) và làm tốt phần lớn việc code thường ngày. **Haiku 5.5** ($0,10/$0,50 với prompt đến 100.000 token) hợp với subagent làm việc đơn giản. **Fable 5.1** ($10/$50) dành cho việc khó nhất, chọn rõ bằng `/model fable`. Đổi model bằng `/model`; giảm thinking cho việc đơn giản bằng `/effort`.",
        "Với người xây ứng dụng qua API có thêm hai cơ chế: **prompt caching** — phần đầu prompt lặp lại được đọc từ cache với giá thấp (với Opus 5.5 và Sonnet 5.5 chỉ bằng 5% giá đầu vào; Claude Code tự dùng caching) — và **Batch API** giảm **50%** cả đầu vào lẫn đầu ra cho việc xử lý hàng loạt không cần kết quả ngay.",
        "Cảnh giác **tiết kiệm sai**: bỏ tiêu chí kiểm tra, bỏ chạy test, hoặc dùng model nhỏ cho việc cần suy luận sâu thường dẫn đến làm lại — tốn hơn. Trước khi chuyển một việc lặp lại sang cách rẻ hơn, **thử trên một mẫu có đáp án** và so sánh chất lượng.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Thuê xe chở hàng: xe 1 tấn cho vài thùng (Haiku), xe 5 tấn cho chuyến thường (Sonnet/Opus), xe cẩu chuyên dụng cho máy biến áp lớn (Fable). Dùng xe cẩu chở vài thùng thì phí; dùng xe 1 tấn chở máy biến áp thì hỏng hàng — phải chở lại, còn tốn hơn.",
      },
      terms: [
        { term: "Effort", definition: "Mức công sức suy luận của model; mức cao dùng nhiều thinking hơn." },
        { term: "Prompt caching", definition: "Lưu phần đầu prompt lặp lại để các yêu cầu sau đọc lại với giá thấp." },
        { term: "Batch API", definition: "Gửi nhiều yêu cầu xử lý không đồng bộ, giảm 50% giá token." },
        { term: "Pilot test", definition: "Chạy thử trên một mẫu nhỏ có đáp án để đo chất lượng trước khi áp dụng rộng." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: chọn model theo việc",
      infographic: {
        kind: "table",
        headers: ["Model", "Giá vào / ra mỗi MTok", "Hợp với", "Cách chọn trong Claude Code"],
        rows: [
          ["Haiku 5.5", "$0,10 / $0,50 (prompt ≤ 100K)", "Subagent việc đơn giản: liệt kê, phân loại dễ", "Cấu hình model của subagent"],
          ["Sonnet 5.5", "$2 / $10", "Phần lớn việc code thường ngày, chi phí thấp hơn Opus", "/model"],
          ["Opus 5.5", "$4 / $20", "Mặc định trên hầu hết gói; suy luận phức tạp, kiến trúc", "Mặc định hoặc /model"],
          ["Fable 5.1", "$10 / $50", "Việc khó nhất", "/model fable"],
        ],
      },
      caption: "Giá theo trang Pricing ngày 03/11/2026; có thể thay đổi. Gói đăng ký tính theo hạn mức, không theo hoá đơn từng token.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: chọn cách làm rẻ mà vẫn đạt",
      mermaid: `flowchart TD
  A["Việc cần làm"] --> B{"Cần suy luận sâu, nhiều bước?"}
  B -->|"Có"| C["Opus 5.5 (hoặc Fable 5.1 cho việc khó nhất)"]
  B -->|"Không"| D{"Việc đơn giản, lặp lại?"}
  D -->|"Có"| E["Sonnet hoặc Haiku, effort thấp"]
  D -->|"Không"| F["Sonnet 5.5"]
  E --> G{"Đã thử trên mẫu có đáp án?"}
  G -->|"Chưa"| H["Thử 30–50 mẫu, so chất lượng"]
  G -->|"Đạt"| I["Áp dụng; API không gấp → Batch giảm 50%"]
  H --> G`,
      caption: "Hạ chi phí sau khi đã chứng minh chất lượng vẫn đạt.",
      alt: "Lưu đồ: việc cần suy luận sâu thì dùng Opus 5.5 hoặc Fable 5.1 cho việc khó nhất. Không thì nếu là việc đơn giản lặp lại dùng Sonnet hoặc Haiku với effort thấp, ngược lại dùng Sonnet 5.5. Với cách rẻ, thử trên 30 đến 50 mẫu có đáp án; đạt thì áp dụng, nếu dùng API và không gấp thì Batch giảm 50%.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: hai cách sửa một lỗi báo cáo",
      bad: {
        label: "Quy trình A: dán hết, hỏi chung",
        content: "Lượt 1: dán 40 file (~50.000 token) + “Code có lỗi, sửa giúp.”\nLượt 2–5: hỏi lại, giải thích thêm — mỗi lượt gánh lại ~50.000 token.\nKết quả: sửa nhầm chỗ, phải làm lại.",
        notes: ["Đầu vào cộng dồn hơn 250.000 token.", "Không có phép kiểm tra — khó biết đúng sai."],
      },
      good: {
        label: "Quy trình B: nhắm trúng, có kiểm tra",
        content: "Lượt 1: CLAUDE.md + src/report.js + kết quả test lỗi + yêu cầu cụ thể (~3.000 token).\nLượt 2: chạy lại test, xác nhận đạt.\nKết quả: sửa đúng ngay lần đầu.",
        notes: ["Đầu vào khoảng 6.000–7.000 token.", "Có test để chứng minh đã sửa."],
      },
      takeaway: "Quy trình tốt rẻ hơn hàng chục lần và cho kết quả đáng tin hơn — số liệu trên là ước tính minh hoạ.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: tiết kiệm đúng hay tiết kiệm sai?",
      sim: {
        kind: "classify",
        bins: [
          { id: "good", label: "Tiết kiệm mà giữ chất lượng" },
          { id: "hurt", label: "Tiết kiệm nhưng hại chất lượng" },
          { id: "waste", label: "Tốn mà không lợi" },
        ],
        items: [
          { id: "i1", text: "/clear giữa các việc không liên quan", bin: "good", why: "Không tốn gì, việc sau gọn context." },
          { id: "i2", text: "Chỉ gửi file liên quan, kết quả test lỗi và yêu cầu cụ thể", bin: "good", why: "Ít token, dễ kiểm chứng." },
          { id: "i3", text: "Dùng Sonnet 5.5 cho việc sửa lỗi thường ngày", bin: "good", why: "Rẻ hơn Opus, làm tốt phần lớn việc code thường ngày." },
          { id: "i4", text: "Dùng Batch API cho 5.000 phiếu phân loại không gấp (qua API)", bin: "good", why: "Giảm 50% mà chất lượng như nhau." },
          { id: "i5", text: "Bỏ tiêu chí kiểm tra cho prompt ngắn hơn", bin: "hurt", why: "Mất cách biết khi nào xong, dễ làm lại." },
          { id: "i6", text: "Dùng Haiku cho quyết định kiến trúc phức tạp", bin: "hurt", why: "Việc cần suy luận sâu; sai thì làm lại tốn hơn." },
          { id: "i7", text: "Dán cả dự án rồi hỏi “sửa giúp”", bin: "waste", why: "Context khổng lồ, mỗi lượt sau gánh lại tất cả." },
          { id: "i8", text: "Để effort tối đa cho việc đổi tên một biến", bin: "waste", why: "Thinking nhiều cho việc không cần suy luận." },
        ],
      },
      intro: "Xếp mỗi cách làm vào nhóm phù hợp. Mục tiêu là rẻ hơn mà kết quả vẫn đạt.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tối ưu một việc lặp lại",
      steps: [
        { title: "Đo hiện trạng", detail: "Ghi mức dùng một lần làm việc (/usage) và chất lượng hiện tại." },
        { title: "Ước tính phương án", detail: "Thử số liệu ở phòng thực hành Token, hoặc tính theo bảng giá chính thức." },
        { title: "Thử trên mẫu có đáp án", detail: "30–50 trường hợp có kết quả đúng sẵn; so sánh model/effort/quy trình." },
        { title: "Chọn và cấu hình", detail: "Đổi model, effort; với API không gấp cân nhắc Batch.", code: { lang: "text", content: "/model\n/effort" } },
        { title: "Theo dõi sau khi đổi", detail: "So sánh /usage và tỷ lệ phải làm lại trong 1–2 tuần." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Bạn dùng API để phân loại 5.000 phiếu báo lỗi mỗi tháng; mỗi phiếu khoảng 600 token vào, 50 token ra. Giá ngày 03/11/2026: Sonnet 5.5 $2/$10, Haiku 5.5 $0,10/$0,50 mỗi MTok; Batch API giảm 50%. Tính chi phí tháng cho: (a) Sonnet 5.5 thường, (b) Sonnet 5.5 qua Batch, (c) Haiku 5.5 thường. Đề xuất cách chọn có tính đến chất lượng.",
      placeholder: "(a) …\n(b) …\n(c) …\nĐề xuất: …",
      rubric: [
        { id: "a", label: "Sonnet thường ≈ $8,50", weight: 1, check: { kind: "regex", pattern: "8[.,]50?\\b" }, pass: "(a) đúng: 5.000 × $0,0017 = $8,50.", fail: "(a): 600 × 2 / 1.000.000 + 50 × 10 / 1.000.000 = $0,0017/phiếu → $8,50." },
        { id: "b", label: "Sonnet Batch ≈ $4,25", weight: 1, check: { kind: "regex", pattern: "4[.,]25\\b" }, pass: "(b) đúng: một nửa của (a).", fail: "(b) = 50% của (a) = $4,25." },
        { id: "c", label: "Haiku thường ≈ $0,425", weight: 1, check: { kind: "regex", pattern: "0[.,]425\\b|0[.,]43\\b" }, pass: "(c) đúng.", fail: "(c): 600 × 0,10 / 1.000.000 + 50 × 0,50 / 1.000.000 = $0,000085/phiếu → $0,425." },
        { id: "quality", label: "Kiểm tra chất lượng trước khi chọn", weight: 1, check: { kind: "anyKeyword", keywords: ["thử trên mẫu", "mẫu có đáp án", "so sánh chất lượng", "kiểm tra chất lượng", "độ chính xác"] }, pass: "Có tính đến chất lượng.", fail: "Đề xuất thử trên mẫu có đáp án trước khi chọn cách rẻ nhất." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "(a) Sonnet 5.5 thường: mỗi phiếu 600 × $2 / 1.000.000 + 50 × $10 / 1.000.000 = $0,0012 + $0,0005 = $0,0017; × 5.000 = $8,50/tháng.\n(b) Sonnet 5.5 qua Batch: giảm 50% → $4,25/tháng.\n(c) Haiku 5.5 thường: $0,00006 + $0,000025 = $0,000085; × 5.000 = $0,425/tháng.\nĐề xuất: thử trên mẫu có đáp án 50 phiếu với Haiku; nếu độ chính xác đạt yêu cầu thì dùng Haiku qua Batch, nếu không thì Sonnet qua Batch. Các số là ước tính theo giá niêm yết.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "So sánh phương pháp trên hai trục: chi phí và chất lượng; làm lại là khoản đắt nhất.",
        "Opus 5.5 mặc định trên hầu hết gói; Sonnet 5.5 rẻ hơn cho việc thường ngày; Haiku 5.5 cho subagent việc đơn giản; Fable 5.1 cho việc khó nhất.",
        "/model đổi model, /effort giảm thinking cho việc đơn giản.",
        "API: prompt caching (đọc cache rẻ, 5% với Opus/Sonnet 5.5), Batch API giảm 50% cho việc không gấp.",
        "Thử trên mẫu có đáp án trước khi chuyển sang cách rẻ hơn.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một việc bạn làm lặp lại với Claude ít nhất mỗi tuần.",
      tasks: [
        "Ước tính chi phí hiện tại và hai phương án thay thế (model khác, quy trình khác, batch nếu dùng API).",
        "Chuẩn bị 30 mẫu có đáp án đúng và chạy thử phương án rẻ nhất.",
        "Quyết định dựa trên cả chi phí và tỷ lệ đúng.",
      ],
      deliverable: "Bảng: Phương án | Chi phí ước tính | Tỷ lệ đúng trên mẫu | Quyết định.",
      checklist: ["Có số liệu chất lượng, không chỉ chi phí", "Ghi ngày tra bảng giá", "Quyết định có lý do"],
    },
  ],
};
