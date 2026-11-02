/** Data for Chapter 1 simulations. Probabilities are ILLUSTRATIVE, written by the authors. */

export const NEXT_WORD_CONTEXTS = [
  {
    id: "mba",
    prefix: "Kết quả thử nghiệm cho thấy máy biến áp bị rò",
    candidates: [
      { word: "dầu", p: 0.82 },
      { word: "khí", p: 0.07 },
      { word: "nước", p: 0.06 },
      { word: "điện", p: 0.05 },
    ],
    note: "Ngữ cảnh “máy biến áp” làm “dầu” rất có khả năng (máy biến áp ngâm dầu).",
  },
  {
    id: "bep",
    prefix: "Trong nhà bếp, vòi rửa bát bị rò",
    candidates: [
      { word: "nước", p: 0.88 },
      { word: "khí", p: 0.05 },
      { word: "dầu", p: 0.04 },
      { word: "điện", p: 0.03 },
    ],
    note: "Cùng từ “bị rò” nhưng ngữ cảnh “vòi rửa bát” đổi hẳn xác suất: “nước” đứng đầu.",
  },
];

/** ch01-l02: a REAL (tiny) keyword chatbot. */
export const RULE_BOT = {
  rules: [
    { keywords: ["giờ", "mở cửa", "làm việc"], reply: "Chúng tôi làm việc 8h–17h, thứ Hai đến thứ Sáu." },
    { keywords: ["bảo hành"], reply: "Thời gian bảo hành máy biến áp là 24 tháng kể từ ngày giao hàng." },
    { keywords: ["đổi trả", "trả hàng"], reply: "Đổi trả trong 7 ngày, kèm hoá đơn và biên bản giao nhận." },
  ],
  fallback: "Xin lỗi, tôi không hiểu. Vui lòng gõ: giờ làm việc / bảo hành / đổi trả.",
  suggestions: [
    "Công ty làm việc đến mấy giờ?",
    "Máy tôi mua năm ngoái giờ bị hỏng, có được sửa miễn phí không?",
    "Tôi muốn trả lại hàng vì giao nhầm mẫu",
    "Hàng gửi sai loại rồi, xử lý sao?",
  ],
};

/** ch01-l03: official model lineup, checked against Models overview on 2026-11-02. */
export const MODEL_LINEUP = [
  { id: "fable", name: "Claude Fable 5.1", api: "claude-fable-5-1", purpose: "Suy luận đòi hỏi cao, công việc tác tử dài hơi", latency: "Chậm hơn", price: "$10 / $50" },
  { id: "opus", name: "Claude Opus 5.5", api: "claude-opus-5-5", purpose: "Lập trình và công việc tri thức dài hơi; điểm khởi đầu cho hầu hết công việc", latency: "Vừa phải", price: "$4 / $20" },
  { id: "sonnet", name: "Claude Sonnet 5.5", api: "claude-sonnet-5-5", purpose: "Kết hợp tốt nhất giữa tốc độ và trí tuệ", latency: "Nhanh", price: "$2 / $10" },
  { id: "haiku", name: "Claude Haiku 5.5", api: "claude-haiku-5-5", purpose: "Khối lượng lớn, nhạy độ trễ: phân loại, trích xuất, định tuyến", latency: "Nhanh nhất", price: "từ $0,10 / $0,50" },
] as const;

export const MODEL_SCENARIOS = [
  {
    id: "s1",
    text: "Gắn nhãn 50.000 email khách hàng mỗi ngày vào 6 nhóm, cần gần như tức thì.",
    answer: "haiku",
    why: "Khối lượng lớn, nhạy độ trễ, tác vụ phân loại — đúng mô tả của Haiku 5.5.",
  },
  {
    id: "s2",
    text: "Trợ lý nội bộ trả lời câu hỏi quy trình cho công nhân, cần nhanh mà vẫn hiểu tốt.",
    answer: "sonnet",
    why: "Sonnet 5.5 là sự kết hợp tốt nhất giữa tốc độ và trí tuệ.",
  },
  {
    id: "s3",
    text: "Bạn chưa chắc nên dùng model nào cho việc viết tài liệu kỹ thuật và sửa code dài hơi.",
    answer: "opus",
    why: "Hướng dẫn chính thức: chưa chắc thì bắt đầu với Opus 5.5 cho hầu hết công việc.",
  },
  {
    id: "s4",
    text: "Tác tử nghiên cứu chạy nhiều giờ, suy luận cực khó; đã thử Opus 5.5 ở mức effort cao nhưng chưa đạt.",
    answer: "fable",
    why: "Fable 5.1 dành cho suy luận đòi hỏi cao và công việc tác tử dài hơi, khi Opus chưa đạt.",
  },
];

/** ch01-l04: sort tasks into what Claude needs. */
export const CAPABILITY_BINS = [
  { id: "now", label: "Làm ngay với nội dung bạn đưa vào" },
  { id: "tool", label: "Cần kết nối công cụ / quyền truy cập" },
  { id: "human", label: "Con người quyết định / chịu trách nhiệm" },
] as const;

export const CAPABILITY_TASKS: { id: string; text: string; bin: (typeof CAPABILITY_BINS)[number]["id"]; why: string }[] = [
  { id: "t1", text: "Viết lại thông báo nghỉ lễ cho dễ hiểu", bin: "now", why: "Chỉ cần nội dung bạn dán vào." },
  { id: "t2", text: "Tóm tắt file PDF biên bản 20 trang bạn tải lên", bin: "now", why: "File đã nằm trong hội thoại." },
  { id: "t3", text: "Chuyển ảnh chụp bảng đo thành bảng số", bin: "now", why: "Claude đọc được hình ảnh — nhớ đối chiếu số liệu." },
  { id: "t4", text: "Cập nhật trạng thái ticket trong hệ thống quản lý công việc", bin: "tool", why: "Cần connector/MCP tới hệ thống đó và quyền tương ứng." },
  { id: "t5", text: "Sửa lỗi trong 30 file của dự án và chạy test", bin: "tool", why: "Cần Claude Code làm việc trong thư mục dự án." },
  { id: "t6", text: "Tìm tin tức giá đồng tuần này", bin: "tool", why: "Cần tìm kiếm web (khi được bật); thông tin mới không có trong kiến thức đã huấn luyện." },
  { id: "t7", text: "Quyết định xuất xưởng lô máy có tổn hao sát ngưỡng", bin: "human", why: "Quyết định chất lượng cần người có thẩm quyền; Claude có thể chuẩn bị bảng so sánh." },
  { id: "t8", text: "Ký duyệt báo cáo 8D gửi khách hàng", bin: "human", why: "Trách nhiệm pháp lý và uy tín thuộc về con người." },
];

/** ch01-l05: choose documents for a limited context window (illustrative units). */
export const CONTEXT_CAPACITY = 100;
export const CONTEXT_DOCS = [
  { id: "d1", name: "Báo cáo lỗi tháng 10", size: 30, relevant: true },
  { id: "d2", name: "Biên bản họp QA tuần 43 (hành động đã thống nhất)", size: 15, relevant: true },
  { id: "d3", name: "Sổ tay nhân sự 2023", size: 40, relevant: false },
  { id: "d4", name: "Catalog sản phẩm 2024", size: 35, relevant: false },
  { id: "d5", name: "Email mời tiệc tất niên", size: 10, relevant: false },
  { id: "d6", name: "Kết quả thử kín dầu máy 250 kVA tháng 10", size: 20, relevant: true },
];

/** ch01-l06: source document (sample data) and a deliberately flawed practice answer. */
export const FACT_SOURCE = {
  title: "Phiếu thông số MBA-250 (dữ liệu mẫu để luyện tập)",
  lines: [
    "Công suất định mức: 250 kVA",
    "Điện áp định mức: 22 / 0,4 kV",
    "Tổn hao không tải: ≤ 420 W",
    "Tổn hao ngắn mạch: ≤ 3.200 W",
    "Khối lượng dầu: 210 kg",
    "Thời gian bảo hành: 24 tháng",
  ],
};

export const FACT_VERDICTS = [
  { id: "ok", label: "Khớp tài liệu" },
  { id: "wrong", label: "Sai so với tài liệu" },
  { id: "none", label: "Không có trong tài liệu" },
] as const;

export const FACT_CLAIMS: { id: string; text: string; verdict: (typeof FACT_VERDICTS)[number]["id"]; why: string }[] = [
  { id: "c1", text: "Máy có công suất định mức 250 kVA.", verdict: "ok", why: "Dòng 1 của phiếu." },
  { id: "c2", text: "Điện áp định mức là 22/0,4 kV.", verdict: "ok", why: "Dòng 2 của phiếu." },
  { id: "c3", text: "Tổn hao không tải tối đa 240 W.", verdict: "wrong", why: "Phiếu ghi ≤ 420 W — đảo chữ số là lỗi rất dễ lọt." },
  { id: "c4", text: "Sản phẩm đạt chứng nhận hiệu suất năng lượng năm 2025.", verdict: "none", why: "Phiếu không nhắc đến chứng nhận nào — dấu hiệu thông tin bịa." },
  { id: "c5", text: "Khối lượng dầu cách điện là 210 kg.", verdict: "ok", why: "Dòng 5 của phiếu." },
  { id: "c6", text: "Thời gian bảo hành 36 tháng.", verdict: "wrong", why: "Phiếu ghi 24 tháng." },
];
