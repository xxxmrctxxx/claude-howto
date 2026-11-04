import type { Lesson } from "@/lib/types/content";

const COSTS = "https://code.claude.com/docs/en/costs";

export const lessonTheoDoiChiPhi: Lesson = {
  id: "ch08-l08",
  chapterId: "ch08",
  slug: "theo-doi-chi-phi",
  title: "Theo dõi chi phí khi có dữ liệu",
  subtitle: "Xem mức dùng ở đúng chỗ theo loại tài khoản, đọc trường usage của API, phân biệt ước tính với hoá đơn và báo cáo bằng số liệu thật.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Biết xem mức dùng và chi phí ở đâu theo loại tài khoản: gói đăng ký, API/Console, Team/Enterprise, nhà cung cấp đám mây." },
    { id: "o2", text: "Đọc trường usage trong phản hồi API và tính chi phí ước tính, kể cả phần cache." },
    { id: "o3", text: "Phân biệt số ước tính với hoá đơn; không đưa ra con số khi chưa có dữ liệu." },
    { id: "o4", text: "Thiết lập thói quen theo dõi: đo nền với nhóm thí điểm, đặt giới hạn chi tiêu, báo cáo định kỳ." },
  ],
  concepts: [
    { id: "usage-cmd", label: "/usage" },
    { id: "sub-vs-api", label: "Gói đăng ký và API" },
    { id: "console", label: "Claude Console" },
    { id: "team-seat", label: "Hạn mức theo ghế (Team/Enterprise)" },
    { id: "cloud", label: "Nhà cung cấp đám mây" },
    { id: "usage-fields", label: "Trường usage của API" },
    { id: "estimate-vs-bill", label: "Ước tính và hoá đơn" },
    { id: "clear-reset", label: "Tổng phiên đặt lại khi /clear" },
    { id: "no-fabricate", label: "Không bịa số liệu" },
    { id: "baseline", label: "Đo nền với nhóm thí điểm" },
    { id: "enterprise-avg", label: "Mức chi phí tham khảo" },
    { id: "spend-limits", label: "Giới hạn chi tiêu" },
    { id: "report", label: "Báo cáo chi phí" },
  ],
  hints: [
    "Số tiền trong /usage là ước tính theo giá niêm yết, không phải hoá đơn.",
    "Gói Pro/Max: xem thanh hạn mức và phần phân bổ; API: xem khối Session và trang Cost của Console.",
    "Chưa có dữ liệu thì nói rõ giả định và đề xuất đo thử, đừng đưa con số “cho có”.",
  ],
  sources: [
    { label: "Claude Code — Manage costs: Track your costs, Manage costs for your organization (đối chiếu 03/11/2026)", href: COSTS },
    { label: "Anthropic — Context windows: các trường usage (input, cache read, cache creation)", href: "https://platform.claude.com/docs/en/build-with-claude/context-windows" },
    { label: "Anthropic — Pricing (giá đầu vào, đầu ra, cache)", href: "https://platform.claude.com/docs/en/about-claude/pricing" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Chỗ xem chi phí phụ thuộc **loại tài khoản**. Gói **Pro, Max, Ultra**: mức dùng nằm trong gói — `/usage` cho thấy thanh hạn mức, thống kê và phần **phân bổ kèm gợi ý**. Đăng nhập bằng **API/Console**: khối **Session** trong `/usage` ước tính chi phí phiên; quản trị viên xem trang **Cost** và đặt **giới hạn chi tiêu workspace** trong Console. **Team/Enterprise**: hạn mức theo ghế (đặt lại theo cửa sổ 5 giờ và theo tuần, dùng chung với Claude chat); quản trị viên xem **báo cáo chi tiêu** trong analytics. **Bedrock, Google Cloud, Foundry**: xem trong bảng billing của nhà cung cấp; theo dõi theo người bằng **OpenTelemetry**.",
        "Khi tự gọi API, mỗi phản hồi có trường **usage**: `input_tokens`, `output_tokens`, và khi dùng cache thêm `cache_read_input_tokens`, `cache_creation_input_tokens`. Nhân từng loại với giá tương ứng (đọc cache rẻ, ghi cache đắt hơn đầu vào thường một chút) để ra chi phí ước tính.",
        "Số tiền Claude Code hiển thị được **tính trên máy theo giá niêm yết** — là **ước tính**, không phải hoá đơn (trừ khi tổ chức cấu hình bảng giá hợp đồng). Từ v2.1.211, tổng của khối Session đặt lại khi `/clear` bắt đầu phiên mới. Khi chưa có dữ liệu, đừng đưa con số “cho có”: nêu giả định, chạy thử và đo.",
        "Tài liệu Manage costs nêu mức tham khảo trong các doanh nghiệp: khoảng **$13 cho mỗi lập trình viên mỗi ngày làm việc**, **$150–250 mỗi tháng**, và 90% người dùng dưới $30 mỗi ngày (đối chiếu 03/11/2026) — nhưng khuyên **bắt đầu bằng một nhóm thí điểm nhỏ** để đo mức nền của chính bạn trước khi mở rộng.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Theo dõi chi phí giống theo dõi điện năng của xưởng: đồng hồ tổng (hoá đơn) khác với số bạn ước theo công suất máy (ước tính). Muốn tiết kiệm, đo thử một tổ trước (thí điểm), đặt ngưỡng cảnh báo (giới hạn chi tiêu), và báo cáo bằng số đo — không bằng cảm giác.",
      },
      terms: [
        { term: "usage (API)", definition: "Trường trong phản hồi API cho biết số token đã dùng theo từng loại." },
        { term: "Spend limit", definition: "Giới hạn chi tiêu: trần tiền cho workspace, tổ chức, nhóm hoặc cá nhân." },
        { term: "Baseline", definition: "Mức nền — số liệu đo được trước khi thay đổi, dùng để so sánh." },
        { term: "OpenTelemetry", definition: "Chuẩn xuất số liệu theo dõi; Claude Code dùng được để gửi token và chi phí về hệ thống của bạn." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: xem chi phí ở đâu",
      infographic: {
        kind: "table",
        headers: ["Loại tài khoản", "Xem mức dùng / chi phí", "Đặt giới hạn", "Theo từng người"],
        rows: [
          ["Pro, Max, Ultra", "/usage: thanh hạn mức, phân bổ, gợi ý", "Giới hạn chi tiêu tháng cho usage credits", "—"],
          ["API / Console", "/usage (khối Session); trang Cost trong Console", "Giới hạn chi tiêu workspace", "Console dashboard, Claude Code Analytics API"],
          ["Team / Enterprise", "Báo cáo chi tiêu trong analytics của tổ chức", "Giới hạn chi tiêu theo tổ chức, nhóm, người", "CSV báo cáo chi tiêu; Analytics API (Enterprise)"],
          ["Bedrock, Google Cloud, Foundry", "Bảng billing của nhà cung cấp", "Ngân sách của nhà cung cấp", "OpenTelemetry hoặc gateway"],
        ],
      },
      caption: "Theo trang Manage costs của Claude Code (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng theo dõi chi phí",
      mermaid: `flowchart LR
  A["Thí điểm nhóm nhỏ"] --> B["Đo mức nền: /usage, Console, báo cáo chi tiêu"]
  B --> C["Đặt ngân sách và giới hạn chi tiêu"]
  C --> D["Theo dõi định kỳ, đọc gợi ý trong /usage"]
  D --> E["Điều chỉnh thói quen: /clear, model, effort, CLAUDE.md"]
  E --> D`,
      caption: "Đo trước, đặt giới hạn, theo dõi và điều chỉnh liên tục.",
      alt: "Vòng theo dõi: thí điểm nhóm nhỏ, đo mức nền bằng /usage, Console hoặc báo cáo chi tiêu, đặt ngân sách và giới hạn chi tiêu, theo dõi định kỳ và đọc gợi ý trong /usage, điều chỉnh thói quen như /clear, model, effort, CLAUDE.md rồi quay lại theo dõi.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: báo cáo chi phí cho trưởng phòng",
      bad: {
        label: "Theo cảm giác",
        content: "Tháng này nhóm dùng Claude chắc hết khoảng 10 triệu, cũng đáng tiền.",
        notes: ["Không có nguồn số liệu.", "Không biết là hoá đơn hay ước tính.", "Không có so sánh hay hành động tiếp theo."],
      },
      good: {
        label: "Có dữ liệu, có giả định",
        content: "Nguồn: trang Cost của Console, 01–31/10/2026. Chi phí Claude Code: $186 cho 4 người (so với ngân sách $250).\nPhiên cao nhất: dán log thô — đã thêm bước lọc log.\nTháng 11: giữ giới hạn workspace $250, xem lại /usage mỗi thứ Sáu.",
        notes: ["Ghi nguồn và khoảng thời gian.", "So với ngân sách.", "Có hành động cụ thể."],
      },
      takeaway: "Báo cáo chi phí tốt = nguồn + thời gian + so sánh + hành động.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xem dữ liệu chi phí ở đâu?",
      sim: {
        kind: "choose",
        options: [
          { id: "plan", label: "/usage — phân bổ và gợi ý của gói" },
          { id: "session", label: "/usage — khối Session (ước tính theo giá niêm yết)" },
          { id: "console", label: "Console: trang Cost, giới hạn workspace" },
          { id: "team", label: "Báo cáo chi tiêu trong analytics của tổ chức" },
          { id: "field", label: "Trường usage trong phản hồi API" },
          { id: "count", label: "Token counting API" },
          { id: "cloud", label: "Billing nhà cung cấp đám mây / OpenTelemetry" },
        ],
        scenarios: [
          { id: "s1", text: "Bạn dùng gói Max, muốn biết skill hay subagent nào chiếm nhiều hạn mức.", answer: "plan", why: "Gói đăng ký: /usage có phân bổ và gợi ý." },
          { id: "s2", text: "Bạn đăng nhập Claude Code bằng API key, muốn biết phiên này tốn khoảng bao nhiêu.", answer: "session", why: "Khối Session ước tính chi phí theo giá niêm yết." },
          { id: "s3", text: "Quản trị viên Console muốn đặt trần chi tiêu cho toàn bộ Claude Code của tổ chức.", answer: "console", why: "Giới hạn chi tiêu workspace trong Console." },
          { id: "s4", text: "Quản trị viên Team muốn xem chi tiêu ước tính theo từng thành viên.", answer: "team", why: "Báo cáo chi tiêu trong analytics, xuất CSV được." },
          { id: "s5", text: "Ứng dụng của bạn gọi API và muốn ghi lại token thật của từng yêu cầu.", answer: "field", why: "Mỗi phản hồi có trường usage." },
          { id: "s6", text: "Muốn biết trước một prompt rất dài sẽ có bao nhiêu token đầu vào.", answer: "count", why: "Token counting miễn phí, đếm trước khi gửi." },
          { id: "s7", text: "Công ty dùng Claude qua Amazon Bedrock, muốn theo dõi chi phí theo từng người.", answer: "cloud", why: "Billing của nhà cung cấp; OpenTelemetry cho số liệu theo người." },
        ],
      },
      intro: "Chọn nguồn dữ liệu đúng cho mỗi câu hỏi về chi phí.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: thiết lập theo dõi chi phí",
      steps: [
        { title: "Xác định loại tài khoản", detail: "Gói đăng ký, Console/API, Team/Enterprise hay nhà cung cấp đám mây — mỗi loại xem ở chỗ khác.", code: { lang: "text", content: "/status\n/usage" } },
        { title: "Đo mức nền với nhóm thí điểm", detail: "2–4 người dùng 2 tuần; ghi /usage hoặc số liệu Console mỗi tuần." },
        { title: "Đặt giới hạn", detail: "Console: giới hạn chi tiêu workspace. Team/Enterprise: giới hạn theo tổ chức, nhóm, người. Pro/Max: giới hạn tháng cho usage credits." },
        { title: "Tự tính khi gọi API", detail: "Đọc trường usage trong phản hồi và nhân với giá.", code: { lang: "json", content: "\"usage\": {\n  \"input_tokens\": 12000,\n  \"cache_read_input_tokens\": 200000,\n  \"cache_creation_input_tokens\": 0,\n  \"output_tokens\": 3000\n}" } },
        { title: "Báo cáo định kỳ", detail: "Nguồn, khoảng thời gian, so với ngân sách, hành động tiếp theo; ghi rõ ước tính hay hoá đơn." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Một yêu cầu tới Sonnet 5.5 trả về usage như trong phần hướng dẫn từng bước: 12.000 input_tokens, 200.000 cache_read_input_tokens, 0 cache_creation_input_tokens, 3.000 output_tokens. Giá ngày 03/11/2026: đầu vào $2, đọc cache $0,10, đầu ra $10 mỗi MTok. Tính chi phí từng phần, tổng, và ghi chú tính chất của con số.",
      placeholder: "Đầu vào: …\nĐọc cache: …\nĐầu ra: …\nTổng: …\nGhi chú: …",
      rubric: [
        { id: "in", label: "Đầu vào ≈ $0,024", weight: 1, check: { kind: "regex", pattern: "0[.,]024\\b" }, pass: "Đúng.", fail: "12.000/1.000.000 × $2 = $0,024." },
        { id: "cache", label: "Đọc cache ≈ $0,02", weight: 1, check: { kind: "regex", pattern: "0[.,]020?\\b" }, pass: "Đúng.", fail: "200.000/1.000.000 × $0,10 = $0,02." },
        { id: "out", label: "Đầu ra ≈ $0,03", weight: 1, check: { kind: "regex", pattern: "0[.,]030?\\b" }, pass: "Đúng.", fail: "3.000/1.000.000 × $10 = $0,03." },
        { id: "total", label: "Tổng ≈ $0,074", weight: 1, check: { kind: "regex", pattern: "0[.,]074\\b" }, pass: "Đúng.", fail: "$0,024 + $0,02 + $0,03 = $0,074." },
        { id: "note", label: "Ghi chú ước tính", weight: 1, check: { kind: "anyKeyword", keywords: ["ước tính", "giá niêm yết", "không phải hoá đơn", "không phải hóa đơn"] }, pass: "Có ghi chú.", fail: "Ghi rõ đây là ước tính theo giá niêm yết, không phải hoá đơn." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Đầu vào: 12.000/1.000.000 × $2 = $0,024\nĐọc cache: 200.000/1.000.000 × $0,10 = $0,02\nĐầu ra: 3.000/1.000.000 × $10 = $0,03\nTổng: $0,074\nGhi chú: ước tính theo giá niêm yết ngày 03/11/2026, không phải hoá đơn; nếu không có cache, 200.000 token kia sẽ tốn $0,40 ở giá đầu vào thường.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Gói đăng ký: /usage (hạn mức, phân bổ, gợi ý). API/Console: khối Session, trang Cost, giới hạn workspace. Team/Enterprise: báo cáo chi tiêu. Đám mây: billing + OpenTelemetry.",
        "Trường usage của API: input_tokens, output_tokens, cache_read_input_tokens, cache_creation_input_tokens.",
        "Số trong Claude Code là ước tính theo giá niêm yết; tổng phiên đặt lại khi /clear (từ v2.1.211).",
        "Bắt đầu bằng nhóm thí điểm để đo mức nền; đặt giới hạn chi tiêu; báo cáo có nguồn và hành động.",
        "Chưa có dữ liệu thì nêu giả định và đo — không bịa số.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Lập báo cáo chi phí/mức dùng Claude của bạn hoặc nhóm cho 2 tuần.",
      tasks: [
        "Xác định loại tài khoản và nguồn số liệu phù hợp.",
        "Ghi số liệu mỗi tuần (ảnh chụp /usage hoặc số liệu Console).",
        "Đặt hoặc kiểm tra giới hạn chi tiêu nếu tài khoản có.",
        "Viết báo cáo 5 dòng: nguồn, thời gian, số liệu, so với kỳ vọng, hành động.",
      ],
      deliverable: "Báo cáo 2 tuần kèm nguồn số liệu và đề xuất điều chỉnh.",
      checklist: ["Mọi con số có nguồn", "Ghi rõ ước tính hay hoá đơn", "Có hành động cụ thể cho kỳ sau"],
    },
  ],
};
