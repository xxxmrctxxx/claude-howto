import type { Question } from "@/lib/types/content";

const L = "ch01-l03";

/**
 * 15 questions for "Các phiên bản và khả năng của Claude". Facts checked
 * against Anthropic's Models overview on 2026-11-02 — re-verify when models change.
 */
export const questionsCh01L03: Question[] = [
  {
    questionId: "ch01-l03-q01", lessonId: L, conceptId: "model-family", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Theo trang Models overview (02/11/2026), những model nào thuộc dòng Claude hiện tại? Chọn tất cả.",
    options: [
      { id: "a", text: "Claude Opus 5.5", feedback: "Đúng." },
      { id: "b", text: "Claude Sonnet 5.5", feedback: "Đúng." },
      { id: "c", text: "Claude Haiku 5.5", feedback: "Đúng." },
      { id: "d", text: "Claude Fable 5.1", feedback: "Đúng." },
      { id: "e", text: "Claude Turbo 9", feedback: "Không có model này." },
    ],
    answer: ["a", "b", "c", "d"],
    explanation: "Dòng hiện tại gồm Fable 5.1, Opus 5.5, Sonnet 5.5 và Haiku 5.5; các model cũ hơn được liệt kê là legacy.",
  },
  {
    questionId: "ch01-l03-q02", lessonId: L, conceptId: "capability-tier", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "matching",
    prompt: "Ghép mỗi model với mô tả chính thức của nó.",
    pairs: [
      { id: "fable", left: "Fable 5.1", right: "Suy luận đòi hỏi cao, công việc tác tử dài hơi" },
      { id: "opus", left: "Opus 5.5", right: "Lập trình và công việc tri thức dài hơi; điểm khởi đầu cho hầu hết công việc" },
      { id: "sonnet", left: "Sonnet 5.5", right: "Kết hợp tốt nhất giữa tốc độ và trí tuệ" },
      { id: "haiku", left: "Haiku 5.5", right: "Khối lượng lớn, cần nhanh: phân loại, trích xuất, định tuyến" },
    ],
    explanation: "Mô tả lấy từ bảng so sánh trên trang Models overview của Anthropic.",
  },
  {
    questionId: "ch01-l03-q03", lessonId: L, conceptId: "shared-capabilities", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Chỉ model mạnh nhất mới đọc được hình ảnh; các model nhanh hơn chỉ nhận văn bản.",
    answer: false,
    explanation: "Sai. Theo tài liệu, tất cả model hiện tại đều hỗ trợ đầu vào văn bản và hình ảnh.",
  },
  {
    questionId: "ch01-l03-q04", lessonId: L, conceptId: "surfaces", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "matching",
    prompt: "Ghép mỗi cách dùng Claude với mô tả phù hợp.",
    pairs: [
      { id: "app", left: "Ứng dụng Claude", right: "Trò chuyện trên web, desktop, điện thoại" },
      { id: "code", left: "Claude Code", right: "Lập trình cùng Claude trong terminal, IDE, desktop, web" },
      { id: "api", left: "Claude API", right: "Lập trình viên tích hợp Claude vào phần mềm của mình" },
    ],
    explanation: "Cùng một họ model, nhiều cách tiếp cận tuỳ nhu cầu: người dùng phổ thông, lập trình viên làm việc với code, hay hệ thống tích hợp.",
  },
  {
    questionId: "ch01-l03-q05", lessonId: L, conceptId: "official-source", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bạn đọc một bài blog năm ngoái nói về “model Claude mạnh nhất”. Nên làm gì trước khi tin?",
    options: [
      { id: "a", text: "Kiểm tra trang Models overview chính thức của Anthropic để xem danh sách hiện hành", feedback: "Đúng." },
      { id: "b", text: "Tin ngay vì bài viết nghe rất chuyên nghiệp", feedback: "Thông tin model thay đổi nhanh; bài cũ có thể lỗi thời." },
      { id: "c", text: "Hỏi Claude và tin hoàn toàn câu trả lời", feedback: "Claude có mốc kiến thức; thông tin mới nhất nên lấy từ trang chính thức." },
    ],
    answer: "a",
    explanation: "Danh sách model, giá và ngày ngừng hỗ trợ được cập nhật trên trang chính thức.",
  },
  {
    questionId: "ch01-l03-q06", lessonId: L, conceptId: "tradeoff", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn model phù hợp nhất.",
    context: { label: "Tình huống", content: "Mỗi ngày hệ thống nhận 50.000 email khách hàng và cần gắn nhãn vào 6 nhóm gần như ngay lập tức, chi phí càng thấp càng tốt." },
    options: [
      { id: "a", text: "Claude Haiku 5.5", feedback: "Đúng — khối lượng lớn, cần nhanh, tác vụ phân loại." },
      { id: "b", text: "Claude Fable 5.1", feedback: "Mạnh nhưng chậm hơn và đắt hơn — không cần cho phân loại đơn giản." },
      { id: "c", text: "Claude Opus 5.5", feedback: "Có thể làm được nhưng không tối ưu tốc độ và chi phí cho việc này." },
    ],
    answer: "a",
    explanation: "Haiku được mô tả là dành cho tác vụ khối lượng lớn, nhạy độ trễ như phân loại, trích xuất, định tuyến.",
  },
  {
    questionId: "ch01-l03-q07", lessonId: L, conceptId: "capability-tier", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bạn chưa biết công việc của mình cần model nào. Hướng dẫn chính thức (11/2026) khuyên bắt đầu từ đâu?",
    options: [
      { id: "a", text: "Claude Opus 5.5", feedback: "Đúng — “start with Claude Opus 5.5 for most workloads”." },
      { id: "b", text: "Model rẻ nhất, rồi nâng dần", feedback: "Đó không phải khuyến nghị trong tài liệu hiện tại." },
      { id: "c", text: "Bất kỳ model nào, kết quả như nhau", feedback: "Các model khác nhau về năng lực, tốc độ và chi phí." },
    ],
    answer: "a",
    explanation: "Trang Models overview: nếu chưa chắc, bắt đầu với Opus 5.5; dùng Fable 5.1 khi Opus vẫn chưa đạt ở suy luận đòi hỏi cao.",
  },
  {
    questionId: "ch01-l03-q08", lessonId: L, conceptId: "shared-capabilities", learningObjective: "o1", thinkingSkill: "remember", difficulty: "intermediate",
    questionType: "fill-blank",
    prompt: "Điền số còn thiếu.",
    template: "Theo tài liệu ngày 02/11/2026, các model Claude hiện tại có context window [[b1]] triệu token.",
    blanks: [{ id: "b1", accepted: ["1", "một", "mot"], width: 4 }],
    explanation: "Tất cả model hiện tại có context window 1M token; một request có thể sinh tối đa 128K token đầu ra.",
  },
  {
    questionId: "ch01-l03-q09", lessonId: L, conceptId: "surfaces", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn cách dùng Claude phù hợp nhất cho từng người trong tình huống.",
    context: {
      label: "Tình huống",
      content: "Chị Lan (kế toán) muốn soạn email; anh Tùng (lập trình viên) muốn Claude sửa lỗi trong dự án 200 file; nhóm IT muốn tích hợp Claude vào phần mềm quản lý nội bộ.",
    },
    options: [
      { id: "a", text: "Chị Lan: ứng dụng Claude; anh Tùng: Claude Code; nhóm IT: Claude API", feedback: "Đúng." },
      { id: "b", text: "Cả ba đều dùng Claude API", feedback: "Chị Lan không cần lập trình để soạn email." },
      { id: "c", text: "Chị Lan: Claude Code; anh Tùng: ứng dụng di động; nhóm IT: ứng dụng web", feedback: "Mỗi công cụ được đặt sai chỗ." },
    ],
    answer: "a",
    explanation: "Ứng dụng cho trò chuyện hằng ngày; Claude Code đọc và sửa code trong dự án; API cho tích hợp hệ thống.",
  },
  {
    questionId: "ch01-l03-q10", lessonId: L, conceptId: "model-id", learningObjective: "o4", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Khi lập trình viên gọi Claude API, họ chọn model bằng cách nào?",
    options: [
      { id: "a", text: "Ghi mã model (model ID) trong request, ví dụ claude-sonnet-5-5", feedback: "Đúng." },
      { id: "b", text: "Chọn trên giao diện web claude.ai", feedback: "Giao diện web không điều khiển request API." },
      { id: "c", text: "API tự chọn ngẫu nhiên", feedback: "Không — model do người gọi chỉ định." },
    ],
    answer: "a",
    explanation: "Mỗi request ghi rõ tham số model. Mã model được liệt kê trên trang Models overview.",
  },
  {
    questionId: "ch01-l03-q11", lessonId: L, conceptId: "tradeoff", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp các model từ ĐỘ TRỄ THẤP NHẤT (nhanh nhất) đến cao nhất theo bảng so sánh chính thức.",
    items: [
      { id: "haiku", text: "Haiku 5.5" },
      { id: "sonnet", text: "Sonnet 5.5" },
      { id: "opus", text: "Opus 5.5" },
      { id: "fable", text: "Fable 5.1" },
    ],
    explanation: "Bảng so sánh ghi: Haiku “Fastest”, Sonnet “Fast”, Opus “Moderate”, Fable “Slower” — so với nhau trong dòng hiện tại.",
  },
  {
    questionId: "ch01-l03-q12", lessonId: L, conceptId: "tradeoff", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Đánh giá kế hoạch sau.",
    context: {
      label: "Kế hoạch",
      content: "Đội dự án định dùng Fable 5.1 cho MỌI việc, kể cả gắn nhãn phiếu báo lỗi hằng ngày, “cho chắc ăn”.",
    },
    options: [
      { id: "a", text: "Chưa hợp lý: việc đơn giản khối lượng lớn nên dùng model nhanh, chi phí thấp; giữ model mạnh cho việc khó", feedback: "Đúng." },
      { id: "b", text: "Hợp lý: model mạnh nhất luôn là lựa chọn tốt nhất", feedback: "Model mạnh hơn chậm hơn và đắt hơn; không cần thiết cho mọi việc." },
      { id: "c", text: "Hợp lý vì mọi model có cùng giá", feedback: "Giá khác nhau đáng kể giữa các dòng." },
    ],
    answer: "a",
    explanation: "Chọn model là đánh đổi giữa năng lực, tốc độ và chi phí. Thử trên dữ liệu thật để tìm model “vừa đủ tốt”.",
  },
  {
    questionId: "ch01-l03-q13", lessonId: L, conceptId: "model-id", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Mỗi model có ngày ngừng hỗ trợ (retirement) được Anthropic công bố, nên hệ thống dùng API cần có kế hoạch chuyển sang model mới.",
    answer: true,
    explanation: "Đúng. Trang Models overview liệt kê cam kết “not sooner than” cho từng model và có hướng dẫn chuyển đổi (migration guide).",
  },
  {
    questionId: "ch01-l03-q14", lessonId: L, conceptId: "official-source", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một slide đào tạo nội bộ có vài câu sai hoặc thiếu căn cứ. Chọn tất cả các câu đó.",
    segments: [
      { id: "s1", text: "Các model hiện tại đều nhận được hình ảnh.", isError: false },
      { id: "s2", text: "Haiku không hỗ trợ tiếng Việt.", isError: true, why: "Các model hiện tại đều có khả năng đa ngôn ngữ." },
      { id: "s3", text: "Danh sách model sẽ không bao giờ thay đổi, nên không cần ghi ngày.", isError: true, why: "Model mới ra và model cũ ngừng hỗ trợ theo thời gian; tài liệu cần ghi ngày đối chiếu." },
      { id: "s4", text: "Chưa chắc chọn gì thì bắt đầu với Opus 5.5 (theo tài liệu 11/2026).", isError: false },
    ],
    explanation: "Tài liệu đào tạo về AI cần ghi ngày đối chiếu và dẫn nguồn chính thức vì thông tin thay đổi nhanh.",
  },
  {
    questionId: "ch01-l03-q15", lessonId: L, conceptId: "model-family", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Nhiệm vụ thực tế: viết đề xuất chọn model cho hệ thống hỗ trợ khách hàng 2 tầng.",
    source: "Tầng 1 nhận và phân loại hàng nghìn yêu cầu mỗi ngày. Tầng 2 trả lời chi tiết các yêu cầu kỹ thuật phức tạp. Đề xuất model cho mỗi tầng, lý do, và cách bạn sẽ kiểm chứng lựa chọn.",
    rubric: [
      { id: "t1", label: "Tầng 1 dùng model nhanh (Haiku)", weight: 1, check: { kind: "anyKeyword", keywords: ["haiku"] }, pass: "Tầng 1 hợp lý.", fail: "Phân loại khối lượng lớn: Haiku 5.5." },
      { id: "t2", label: "Tầng 2 dùng model mạnh hơn", weight: 1, check: { kind: "anyKeyword", keywords: ["opus", "sonnet", "fable"] }, pass: "Tầng 2 hợp lý.", fail: "Tầng 2 cần model mạnh hơn: Sonnet hoặc Opus." },
      { id: "why", label: "Có lý do theo tốc độ/chi phí/độ khó", weight: 1, check: { kind: "anyKeyword", keywords: ["nhanh", "chi phí", "khối lượng", "phức tạp", "độ trễ", "tốc độ"] }, pass: "Có lý do.", fail: "Giải thích lựa chọn bằng tốc độ, chi phí, độ khó." },
      { id: "test", label: "Có cách kiểm chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["thử nghiệm", "kiểm tra", "so sánh", "đánh giá", "mẫu", "đo"] }, pass: "Có kế hoạch kiểm chứng.", fail: "Nêu cách thử: chạy trên tập yêu cầu mẫu và so sánh kết quả." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Tầng 1: Claude Haiku 5.5 — phân loại hàng nghìn yêu cầu cần nhanh, chi phí thấp.\nTầng 2: bắt đầu với Claude Opus 5.5 cho câu hỏi kỹ thuật phức tạp; thử Sonnet 5.5 nếu cần nhanh hơn.\nKiểm chứng: lấy 200 yêu cầu mẫu đã có đáp án, chạy thử từng model, so sánh độ chính xác, thời gian phản hồi và chi phí, rồi chọn model vừa đủ tốt.",
    explanation: "Kết hợp nhiều model theo độ khó và kiểm chứng bằng dữ liệu thật là cách làm được khuyến nghị.",
  },
];
