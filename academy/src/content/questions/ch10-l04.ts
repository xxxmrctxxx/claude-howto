import type { Question } from "@/lib/types/content";

const L = "ch10-l04";

/** 15 questions for "Công cụ xử lý PDF" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03 (Claude Help Center). */
export const questionsCh10L04: Question[] = [
  {
    questionId: "ch10-l04-q01", lessonId: L, conceptId: "unknown-not-guess", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Khi trích dữ liệu từ hoá đơn, nên dặn Claude ghi “không rõ” cho ô không đọc được thay vì đoán.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Số đoán trông như thật rất khó phát hiện về sau.",
  },
  {
    questionId: "ch10-l04-q02", lessonId: L, conceptId: "page-citation", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao nên yêu cầu mỗi dòng trích xuất kèm số trang?",
    options: [
      { id: "a", text: "Để mở đúng trang gốc kiểm chứng nhanh", feedback: "Đúng." },
      { id: "b", text: "Để file Excel dài hơn", feedback: "Không phải mục đích." },
      { id: "c", text: "Vì Excel bắt buộc có cột trang", feedback: "Không đúng." },
    ],
    answer: "a",
    explanation: "Dùng số trang theo trình xem PDF.",
  },
  {
    questionId: "ch10-l04-q03", lessonId: L, conceptId: "pdf-split", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Hồ sơ PDF 1.400 trang cần tóm tắt. Cách đưa cho Claude?",
    options: [
      { id: "a", text: "Chia thành nhiều file nhỏ", feedback: "Đúng — PDF trên 1000 trang không tải được." },
      { id: "b", text: "Tải nguyên file", feedback: "Báo file quá lớn." },
      { id: "c", text: "Đổi đuôi sang .txt", feedback: "Không giải quyết được." },
    ],
    answer: "a",
    explanation: "Tóm tắt từng phần rồi tổng hợp.",
  },
  {
    questionId: "ch10-l04-q04", lessonId: L, conceptId: "human-responsible", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Với hợp đồng và quy chuẩn an toàn, Claude giúp đọc nhanh và chỉ chỗ cần xem, còn quyết định cuối thuộc về người có trách nhiệm.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Luôn đọc lại điều khoản gốc ở những chỗ quan trọng.",
  },
  {
    questionId: "ch10-l04-q05", lessonId: L, conceptId: "redact", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trước khi tải hợp đồng có số tài khoản ngân hàng và CCCD để nhờ tóm tắt điều khoản thanh toán, nên làm gì?",
    options: [
      { id: "a", text: "Che hoặc bỏ các thông tin đó nếu không cần cho câu hỏi", feedback: "Đúng." },
      { id: "b", text: "Tải nguyên file", feedback: "Đưa dữ liệu nhạy cảm không cần thiết." },
      { id: "c", text: "Không dùng Claude bao giờ", feedback: "Che thông tin là đủ để dùng an toàn hơn." },
    ],
    answer: "a",
    explanation: "Tuân thủ quy định dữ liệu của công ty bạn.",
  },
  {
    questionId: "ch10-l04-q06", lessonId: L, conceptId: "pdf-100", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Biên bản kiểm tra là PDF quét 300 trang (mỗi trang là ảnh). Bạn cần bảng kết quả ở 20 trang cuối. Cách làm?",
    options: [
      { id: "a", text: "Tách 20 trang cuối thành một PDF riêng rồi tải lên", feedback: "Đúng — PDF ngắn được đọc cả phần hình." },
      { id: "b", text: "Tải nguyên 300 trang", feedback: "Trên 100 trang chỉ đọc chữ; trang quét gần như không có chữ." },
      { id: "c", text: "Gõ lại tay toàn bộ", feedback: "Tốn công không cần thiết." },
    ],
    answer: "a",
    explanation: "Chọn định dạng theo điều cần Claude nhìn thấy.",
  },
  {
    questionId: "ch10-l04-q07", lessonId: L, conceptId: "column-spec", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Đánh dấu những chỗ còn thiếu trong yêu cầu trích xuất dưới đây.",
    segments: [
      { id: "s1", text: "Từ hoa-don-thang-10.pdf, tạo file Excel", isError: false },
      { id: "s2", text: "với mấy cột quan trọng,", isError: true, why: "Liệt kê cụ thể các cột cần lấy." },
      { id: "s3", text: "ngày ghi dd/mm/yyyy,", isError: false },
      { id: "s4", text: "chỗ nào mờ thì cứ điền số gần đúng.", isError: true, why: "Ghi “không rõ”, không đoán." },
    ],
    explanation: "Cột rõ + không đoán.",
  },
  {
    questionId: "ch10-l04-q08", lessonId: L, conceptId: "compare-versions", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Định dạng nào hợp nhất khi nhờ so sánh hai phiên bản quy trình?",
    options: [
      { id: "a", text: "Bảng chỉ các điểm khác nhau: Mục | Bản cũ | Bản mới | Trang cũ | Trang mới", feedback: "Đúng." },
      { id: "b", text: "Tóm tắt lại cả hai bản từ đầu đến cuối", feedback: "Dài, khó thấy chỗ đổi." },
      { id: "c", text: "Một câu: “có thay đổi”", feedback: "Không dùng được." },
    ],
    answer: "a",
    explanation: "Thêm cột “ảnh hưởng tới công nhân” nếu dùng để đào tạo.",
  },
  {
    questionId: "ch10-l04-q09", lessonId: L, conceptId: "spot-check", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Claude trích 120 dòng từ PDF biên bản. Cách kiểm chứng hợp lý với thời gian có hạn?",
    options: [
      { id: "a", text: "Chọn ngẫu nhiên 3–5 dòng, mở đúng trang được ghi, so từng ô; nếu có sai thì kiểm thêm", feedback: "Đúng." },
      { id: "b", text: "Không kiểm vì 120 dòng quá nhiều", feedback: "Kiểm mẫu vẫn làm được." },
      { id: "c", text: "Chỉ kiểm dòng đầu tiên", feedback: "Không đại diện." },
    ],
    answer: "a",
    explanation: "Có số trang nên kiểm chứng nhanh.",
  },
  {
    questionId: "ch10-l04-q10", lessonId: L, conceptId: "pdf-long", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép loại PDF với cách Claude đọc.",
    pairs: [
      { id: "p1", left: "PDF 40 trang có bảng dạng ảnh", right: "Đọc chữ và phần hình" },
      { id: "p2", left: "PDF 600 trang văn bản", right: "Chỉ đọc chữ" },
      { id: "p3", left: "PDF 1.200 trang", right: "Không tải được, cần chia nhỏ" },
    ],
    explanation: "Theo bài Upload files to Claude.",
  },
  {
    questionId: "ch10-l04-q11", lessonId: L, conceptId: "summarize-long", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "true-false",
    statement: "Khi tóm tắt quy chuẩn dài, yêu cầu kèm số trang cho từng ý giúp bạn mở ra kiểm lại đúng chỗ.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Tóm tắt không có nguồn thì khó kiểm chứng.",
  },
  {
    questionId: "ch10-l04-q12", lessonId: L, conceptId: "extract-table", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây thành yêu cầu trích xuất kiểm tra được.",
    source: "đọc mấy hoá đơn này rồi cho tôi bảng tổng",
    rubric: [
      { id: "columns", label: "Cột cụ thể", weight: 1, check: { kind: "anyKeyword", keywords: ["số hđ", "số hoá đơn", "nhà cung cấp", "tổng thanh toán"] }, pass: "Có cột.", fail: "Liệt kê cột cần lấy." },
      { id: "unknown", label: "Không đoán", weight: 1, check: { kind: "anyKeyword", keywords: ["không rõ", "không đoán"] }, pass: "Có quy tắc.", fail: "Thêm: ô không đọc được ghi “không rõ”." },
      { id: "page", label: "Số trang", weight: 1, check: { kind: "anyKeyword", keywords: ["trang"] }, pass: "Có trang.", fail: "Mỗi dòng kèm số trang." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Từ hoa-don-thang-10.pdf, tạo file Excel với cột: Số hoá đơn, Ngày (dd/mm/yyyy), Nhà cung cấp, Tiền trước thuế, Thuế, Tổng thanh toán, Trang. Ô không đọc được ghi “không rõ”, không đoán. Dòng cuối tính tổng bằng công thức SUM.",
    explanation: "Cột rõ, không đoán, có trang, có công thức.",
  },
  {
    questionId: "ch10-l04-q13", lessonId: L, conceptId: "unknown-not-guess", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bảng trích xuất có tổng thanh toán của một hoá đơn là 8.910.000 nhưng khi mở trang gốc thì số bị mờ, chỉ đọc chắc “8.9…”. Nên làm gì?",
    options: [
      { id: "a", text: "Đổi ô đó thành “không rõ”, hỏi bản gốc từ nhà cung cấp; nhắc Claude lần sau ghi “không rõ” với số mờ", feedback: "Đúng." },
      { id: "b", text: "Giữ 8.910.000 vì trông hợp lý", feedback: "Có thể là số đoán." },
      { id: "c", text: "Xoá hoá đơn khỏi bảng", feedback: "Mất dữ liệu cần theo dõi." },
    ],
    answer: "a",
    explanation: "Số trông hợp lý chưa chắc là số đúng.",
  },
  {
    questionId: "ch10-l04-q14", lessonId: L, conceptId: "compare-versions", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn dùng bảng so sánh hai phiên bản quy trình như dưới đây. Chọn các việc SAI.",
    segments: [
      { id: "s1", text: "Dùng ngay bảng so sánh để đào tạo mà không mở trang gốc lần nào.", isError: true, why: "Kiểm chứng ngẫu nhiên, nhất là bước an toàn." },
      { id: "s2", text: "Mở đúng trang ở cả hai bản cho 3 dòng bất kỳ.", isError: false },
      { id: "s3", text: "Coi các dòng “không chắc” là không đổi gì.", isError: true, why: "Phải tự đọc lại những dòng này." },
      { id: "s4", text: "Ghi rõ nguồn và ngày so sánh trên tài liệu đào tạo.", isError: false },
    ],
    explanation: "Quy trình an toàn cần người đọc lại điều khoản gốc.",
  },
  {
    questionId: "ch10-l04-q15", lessonId: L, conceptId: "extract-table", learningObjective: "o2", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết yêu cầu trích xuất cho tình huống dưới đây (3–5 dòng), kèm cách kiểm chứng.",
    source: "phieu-bao-tri-q3.pdf: 45 trang, mỗi trang một phiếu bảo trì viết tay đã quét: ngày, mã máy, hạng mục, vật tư thay, thời gian dừng máy (phút), người thực hiện. Cần bảng để tính tổng thời gian dừng theo mã máy.",
    rubric: [
      { id: "columns", label: "Cột cụ thể", weight: 1, check: { kind: "allGroups", groups: [["mã máy"], ["thời gian dừng"]] }, pass: "Có cột.", fail: "Liệt kê cột: ngày, mã máy, thời gian dừng…" },
      { id: "unknown", label: "Không đoán", weight: 1, check: { kind: "anyKeyword", keywords: ["không rõ", "không đoán"] }, pass: "Có quy tắc.", fail: "Chữ viết tay khó đọc → ghi “không rõ”." },
      { id: "page", label: "Số trang", weight: 1, check: { kind: "anyKeyword", keywords: ["trang"] }, pass: "Có trang.", fail: "Mỗi dòng kèm số trang." },
      { id: "verify", label: "Kiểm chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["kiểm chứng", "ngẫu nhiên", "đối chiếu"] }, pass: "Có kiểm chứng.", fail: "Nêu cách kiểm chứng." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Từ phieu-bao-tri-q3.pdf (45 trang, phiếu viết tay đã quét), tạo file Excel với cột: Ngày (dd/mm/yyyy), Mã máy, Hạng mục, Vật tư thay, Thời gian dừng (phút, số), Người thực hiện, Trang. Chữ viết tay không đọc chắc thì ghi “không rõ”, không đoán. Thêm sheet Tổng hợp dùng SUMIFS tính tổng thời gian dừng theo mã máy.\nKiểm chứng: chọn ngẫu nhiên 5 dòng, mở đúng trang, so từng ô; điền tay các ô “không rõ”.",
    explanation: "Phiếu viết tay càng cần quy tắc không đoán và số trang.",
  },
];
