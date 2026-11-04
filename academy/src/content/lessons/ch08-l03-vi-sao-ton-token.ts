import type { Lesson } from "@/lib/types/content";

const COSTS = "https://code.claude.com/docs/en/costs";

export const lessonViSaoTonToken: Lesson = {
  id: "ch08-l03",
  chapterId: "ch08",
  slug: "vi-sao-ton-token",
  title: "Vì sao tiêu hao token?",
  subtitle: "Những nguồn làm token “chảy” nhanh: lịch sử được gửi lại, kết quả công cụ lớn, CLAUDE.md dài, yêu cầu mơ hồ, thinking, và cả những thứ chạy khi bạn không để ý.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích vì sao mỗi yêu cầu mang theo toàn bộ hội thoại và kết quả công cụ." },
    { id: "o2", text: "Nhận diện nguồn tiêu hao lớn: phiên dài, log/file lớn, CLAUDE.md dài, yêu cầu mơ hồ, thinking." },
    { id: "o3", text: "Nhận diện tiêu hao “ngầm”: cache hết hạn sau khi nghỉ, tác vụ định kỳ, subagent, compact." },
    { id: "o4", text: "Chẩn đoán một phiên tốn kém bằng /usage, /context và đề xuất thay đổi có căn cứ." },
  ],
  concepts: [
    { id: "resend-history", label: "Gửi lại toàn bộ hội thoại" },
    { id: "tool-results", label: "Kết quả công cụ lớn" },
    { id: "long-session", label: "Phiên dài nhiều việc" },
    { id: "vague-scan", label: "Yêu cầu mơ hồ gây quét rộng" },
    { id: "claude-md-size", label: "CLAUDE.md quá dài" },
    { id: "thinking-cost", label: "Chi phí thinking" },
    { id: "cache-miss", label: "Cache hết hạn" },
    { id: "background", label: "Tiêu hao khi bạn không để ý" },
    { id: "subagents-cost", label: "Subagent cũng tốn" },
    { id: "compaction-cost", label: "Compact cũng là một yêu cầu" },
    { id: "diagnose", label: "Chẩn đoán bằng /usage, /context" },
  ],
  hints: [
    "Mỗi lần Claude dùng công cụ là thêm một yêu cầu mang theo toàn bộ hội thoại.",
    "Câu hỏi một dòng trong phiên mở cả ngày vẫn “gánh” cả ngày lịch sử.",
    "/clear không tốn gì; /compact một context lớn là một yêu cầu lớn.",
  ],
  sources: [
    { label: "Claude Code — Manage costs: Reduce token usage, Why usage climbs in a long session, Plan usage breakdown", href: COSTS },
    { label: "Claude Code — How Claude remembers your project (CLAUDE.md dưới 200 dòng)", href: "https://code.claude.com/docs/en/memory" },
    { label: "Anthropic — Context windows (thinking tính như đầu ra)", href: "https://platform.claude.com/docs/en/build-with-claude/context-windows" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude không “nhớ” giữa các yêu cầu theo kiểu con người: Claude Code **gửi toàn bộ hội thoại kèm mỗi yêu cầu**, và mỗi lần Claude dùng công cụ (đọc file, chạy lệnh) lại có thêm một yêu cầu mang theo kết quả của công cụ đó. Nhờ prompt caching, phần lặp lại được đọc với giá rẻ hơn — nhưng **vẫn tính** vào mức dùng.",
        "Nguồn tiêu hao lớn: **phiên dài** gom nhiều việc không liên quan; **kết quả công cụ lớn** (log 10.000 dòng, file khổng lồ); **CLAUDE.md dài** (nạp ở đầu mỗi phiên — tài liệu khuyên dưới 200 dòng); **yêu cầu mơ hồ** như “cải thiện codebase này” khiến Claude quét rộng nhiều file; và **thinking** — tính như token đầu ra, có thể hàng chục nghìn token mỗi yêu cầu tuỳ model và mức effort.",
        "Nguồn “ngầm”: tin nhắn đầu tiên sau **một quãng nghỉ dài hơn thời gian sống của cache** phải xử lý lại toàn bộ context; **tác vụ định kỳ** như /loop gửi cả context mỗi lần chạy, kể cả khi bạn đi vắng; **subagent** gửi yêu cầu riêng của nó; và **compact** một context lớn bản thân nó là một yêu cầu lớn (còn `/clear` thì không tốn gì).",
        "Đừng đoán — hãy **đo**: `/usage` (với gói Pro, Max, Team… có phần phân bổ và gợi ý cho hành vi chiếm từ 10% mức dùng gần đây; với API có khối Session ước tính chi phí) và `/context` để thấy cái gì đang chiếm chỗ.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Mỗi lần nhờ đồng nghiệp làm tiếp, bạn photo lại toàn bộ tập hồ sơ từ đầu cho họ (gửi lại lịch sử). Hồ sơ càng dày, mỗi lần nhờ càng tốn giấy — kể cả khi bạn chỉ hỏi một câu. Kẹp thêm cả cuộn băng nhật ký máy 10.000 dòng thì càng nặng.",
      },
      terms: [
        { term: "Tool result", definition: "Kết quả trả về sau khi Claude dùng công cụ (nội dung file, output lệnh…)." },
        { term: "Cache lifetime", definition: "Thời gian phần prompt đã cache còn dùng lại được; quá thời gian này phải xử lý lại." },
        { term: "Effort", definition: "Mức công sức suy luận; mức thấp hơn dùng ít thinking hơn." },
        { term: "/usage", definition: "Bảng mức dùng trong Claude Code: hạn mức gói, phân bổ, gợi ý, chi phí ước tính phiên." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: các nguồn tiêu hao token",
      infographic: {
        kind: "cards",
        cards: [
          { title: "Phiên dài nhiều việc", body: "Mỗi yêu cầu gánh toàn bộ lịch sử, kể cả việc đã xong.", foot: "Sửa: /clear giữa các việc", icon: "clock" },
          { title: "Kết quả công cụ lớn", body: "Log, file lớn đổ thẳng vào context.", foot: "Sửa: lọc trước (grep, hook)", icon: "file" },
          { title: "CLAUDE.md dài", body: "Nạp đầu mỗi phiên, dù đang làm việc không liên quan.", foot: "Sửa: dưới 200 dòng, quy trình hiếm dùng → skill", icon: "book" },
          { title: "Yêu cầu mơ hồ", body: "“Cải thiện codebase” → quét rộng nhiều file.", foot: "Sửa: chỉ rõ file, hàm, mục tiêu", icon: "search" },
          { title: "Thinking", body: "Tính như đầu ra; có thể rất nhiều với effort cao.", foot: "Sửa: giảm effort cho việc đơn giản", icon: "cpu" },
          { title: "Chạy ngầm", body: "Cache hết hạn sau khi nghỉ, /loop định kỳ, subagent, compact.", foot: "Sửa: đo bằng /usage, tắt thứ không cần", icon: "repeat" },
        ],
      },
      caption: "Tổng hợp từ trang Manage costs của Claude Code (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: một câu hỏi có thể thành nhiều yêu cầu",
      mermaid: `flowchart TD
  A["Bạn gửi 1 tin nhắn"] --> B["Yêu cầu 1: toàn bộ hội thoại + tin nhắn"]
  B --> C["Claude đọc file (công cụ)"]
  C --> D["Yêu cầu 2: hội thoại + kết quả đọc file"]
  D --> E["Claude chạy test (công cụ)"]
  E --> F["Yêu cầu 3: hội thoại + output test"]
  F --> G["Trả lời bạn"]
  G -.->|"Lượt sau mang theo tất cả"| A`,
      caption: "Mỗi lần dùng công cụ là thêm một yêu cầu mang theo cả lịch sử — kết quả công cụ càng lớn, càng tốn.",
      alt: "Lưu đồ: một tin nhắn tạo yêu cầu 1 mang toàn bộ hội thoại; Claude đọc file tạo yêu cầu 2 kèm kết quả đọc; chạy test tạo yêu cầu 3 kèm output test; rồi trả lời. Lượt sau mang theo tất cả.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: một ngày làm việc",
      bad: {
        label: "Tốn mà không lợi",
        content: "Một phiên từ sáng đến tối cho 5 việc khác nhau.\nDán cả log 10.000 dòng vào chat.\n“Cải thiện codebase này giúp tôi.”\nCLAUDE.md 900 dòng gồm cả quy trình review hiếm khi dùng.",
        notes: ["Mỗi câu hỏi buổi chiều vẫn gánh lịch sử buổi sáng.", "Log thô chiếm phần lớn context.", "Yêu cầu mơ hồ gây đọc hàng loạt file."],
      },
      good: {
        label: "Cùng kết quả, ít token hơn",
        content: "/clear giữa các việc không liên quan.\ngrep \"ERROR\" app.log rồi chỉ đưa các dòng lỗi.\n“Thêm kiểm tra dữ liệu nhập vào hàm tinhTong trong src/report.js.”\nCLAUDE.md 120 dòng; quy trình review chuyển sang skill.",
        notes: ["Context gọn, đúng việc.", "Claude đọc ít file hơn vì biết chỗ cần làm."],
      },
      takeaway: "Phần lớn token “thừa” đến từ thói quen, không phải từ việc khó.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: tìm chỗ làm tiêu hao token trong nhật ký phiên",
      sim: {
        kind: "highlight",
        instruction: "Bấm chọn những dòng làm tốn token không cần thiết.",
        segments: [
          { id: "s1", text: "08:00 Mở claude ở thư mục gốc dự án.", target: false },
          { id: "s2", text: "08:05 Gõ: “cải thiện codebase này”.", target: true, why: "Yêu cầu mơ hồ khiến Claude quét rộng nhiều file." },
          { id: "s3", text: "08:30 Dán toàn bộ file log 10.000 dòng vào khung chat.", target: true, why: "Nên lọc trước (ví dụ grep ERROR) rồi chỉ đưa dòng lỗi." },
          { id: "s4", text: "09:00 Chạy npm test, chỉ in các test lỗi.", target: false },
          { id: "s5", text: "11:00 Nghỉ trưa 2 tiếng rồi hỏi tiếp trong phiên rất dài đó.", target: true, why: "Cache đã hết hạn: tin nhắn đầu sau nghỉ phải xử lý lại toàn bộ context." },
          { id: "s6", text: "13:30 Dùng Sonnet cho việc sửa lỗi thường ngày.", target: false },
          { id: "s7", text: "14:00 CLAUDE.md dài 900 dòng, gồm cả quy trình review PR chi tiết.", target: true, why: "CLAUDE.md nạp mỗi phiên; nên dưới 200 dòng, quy trình hiếm dùng chuyển sang skill." },
          { id: "s8", text: "16:00 Vẫn trong phiên từ sáng, hỏi thêm một việc không liên quan.", target: true, why: "Nên /clear: việc mới không cần lịch sử cả ngày." },
          { id: "s9", text: "17:00 Bật /loop kiểm tra build mỗi 5 phút suốt đêm.", target: true, why: "Tác vụ định kỳ gửi cả context mỗi lần chạy, kể cả khi bạn vắng mặt." },
        ],
      },
      intro: "Đây là nhật ký một ngày làm việc với Claude Code. Đánh dấu mọi thói quen làm token tăng mà không cần thiết.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: chẩn đoán một phiên tốn kém",
      steps: [
        { title: "Đo trước khi sửa", detail: "Gói đăng ký: xem phần phân bổ và gợi ý (nhấn d/w để đổi 24 giờ / 7 ngày). API: xem khối Session.", code: { lang: "text", content: "/usage" } },
        { title: "Xem cái gì đang chiếm context", detail: "Chú ý file lớn, kết quả công cụ dài, CLAUDE.md, MCP.", code: { lang: "text", content: "/context" } },
        { title: "Sửa nguồn lớn nhất trước", detail: "Phiên dài → /clear; log lớn → lọc trước; CLAUDE.md dài → rút gọn, chuyển sang skill; yêu cầu mơ hồ → chỉ rõ file và hàm." },
        { title: "Giảm thinking cho việc đơn giản", detail: "Hạ mức effort khi không cần suy luận sâu.", code: { lang: "text", content: "/effort" } },
        { title: "Đo lại", detail: "So sánh /usage trước và sau một tuần thay đổi thói quen." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Dựa trên nhật ký phiên ở phần mô phỏng, viết 4 thay đổi cụ thể để giảm token mà vẫn giữ chất lượng, và cách bạn sẽ đo hiệu quả.",
      placeholder: "1. …\n2. …\n3. …\n4. …\nĐo bằng: …",
      rubric: [
        { id: "clear", label: "Clear/tách phiên giữa việc", weight: 1, check: { kind: "regex", pattern: "(/clear|tach phien|phien moi)" }, pass: "Có tách việc.", fail: "Dùng /clear giữa các việc không liên quan." },
        { id: "filter", label: "Lọc log trước", weight: 1, check: { kind: "regex", pattern: "(grep|loc|chi dua dong loi|hook)" }, pass: "Có lọc log.", fail: "Lọc log (grep ERROR) trước khi đưa cho Claude." },
        { id: "claudemd", label: "Rút gọn CLAUDE.md", weight: 1, check: { kind: "regex", pattern: "claude\\.md[^\\n]*(rut gon|200 dong|skill|cat bot)" }, pass: "Có rút gọn CLAUDE.md.", fail: "Rút gọn CLAUDE.md dưới 200 dòng, chuyển quy trình hiếm dùng sang skill." },
        { id: "specific", label: "Yêu cầu cụ thể", weight: 1, check: { kind: "regex", pattern: "(cu the|chi ro|ten file|ham [a-z]|\\.js|\\.py)" }, pass: "Có yêu cầu cụ thể.", fail: "Thay “cải thiện codebase” bằng yêu cầu chỉ rõ file/hàm." },
        { id: "measure", label: "Đo hiệu quả", weight: 1, check: { kind: "regex", pattern: "(/usage|/context)" }, pass: "Có cách đo.", fail: "Đo bằng /usage hoặc /context trước và sau." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "1. /clear giữa các việc không liên quan; việc mới thì phiên mới.\n2. Lọc log trước bằng grep \"ERROR\" app.log, chỉ đưa dòng lỗi.\n3. Rút gọn CLAUDE.md xuống dưới 200 dòng, chuyển quy trình review PR sang skill.\n4. Viết yêu cầu cụ thể: chỉ rõ tên file và hàm, ví dụ hàm tinhTong trong src/report.js.\nĐo bằng: /usage và /context trước và sau một tuần.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Mỗi yêu cầu mang toàn bộ hội thoại; mỗi lần dùng công cụ thêm một yêu cầu kèm kết quả.",
        "Nguồn lớn: phiên dài, log/file lớn, CLAUDE.md dài, yêu cầu mơ hồ, thinking.",
        "Nguồn ngầm: cache hết hạn sau khi nghỉ, /loop định kỳ, subagent, compact context lớn.",
        "/clear không tốn gì; /compact một context lớn là một yêu cầu lớn.",
        "Đo bằng /usage và /context trước khi sửa, sửa nguồn lớn nhất trước.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Rà soát thói quen dùng Claude Code của bạn trong một tuần.",
      tasks: [
        "Chạy /usage, ghi lại 3 mục phân bổ hoặc gợi ý lớn nhất.",
        "Chọn 2 thói quen tốn kém nhất và thay đổi chúng trong tuần sau.",
        "Chạy /usage lại sau một tuần và so sánh.",
      ],
      deliverable: "Bảng trước/sau: Thói quen | Mức dùng trước | Thay đổi | Mức dùng sau.",
      checklist: ["Có số liệu từ /usage, không đoán", "Thay đổi nhắm vào nguồn lớn nhất", "Chất lượng kết quả không giảm"],
    },
  ],
};
