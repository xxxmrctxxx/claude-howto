import type { Question } from "@/lib/types/content";

const L = "ch02-l04";

/** 15 questions for "Tải file và hình ảnh" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03 (Claude Help Center). */
export const questionsCh02L04: Question[] = [
  {
    questionId: "ch02-l04-q01", lessonId: L, conceptId: "upload-methods", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Những cách nào dùng được để đưa file hoặc ảnh cho Claude? Chọn tất cả.",
    options: [
      { id: "a", text: "Nút + → Add files or photos", feedback: "Đúng." },
      { id: "b", text: "Kéo thả file vào cửa sổ chat", feedback: "Đúng." },
      { id: "c", text: "Dán ảnh đã sao chép", feedback: "Đúng." },
      { id: "d", text: "Gửi file qua SMS tới số đã xác minh", feedback: "Không có cách này." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Theo bài Upload files to Claude.",
  },
  {
    questionId: "ch02-l04-q02", lessonId: L, conceptId: "image-types", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Nhóm định dạng ảnh nào được Claude hỗ trợ?",
    options: [
      { id: "a", text: "JPEG, PNG, GIF, WebP", feedback: "Đúng." },
      { id: "b", text: "Chỉ BMP", feedback: "Không nằm trong danh sách." },
      { id: "c", text: "Chỉ ảnh RAW từ máy ảnh", feedback: "Không nằm trong danh sách." },
    ],
    answer: "a",
    explanation: "Ảnh tối đa 8000 × 8000 px.",
  },
  {
    questionId: "ch02-l04-q03", lessonId: L, conceptId: "non-pdf-text", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Khi bạn tải một file Word có dán biểu đồ bên trong, Claude đọc được cả chữ lẫn biểu đồ đó.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Với file không phải PDF, Claude chỉ lấy chữ; ảnh nhúng không đọc được.",
  },
  {
    questionId: "ch02-l04-q04", lessonId: L, conceptId: "chat-limits", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền số.",
    template: "Mỗi chat nhận tối đa [[b1]] file; PDF tải vào chat tối đa [[b2]] trang.",
    blanks: [
      { id: "b1", accepted: ["20", "hai mươi"], width: 4 },
      { id: "b2", accepted: ["1000", "1.000", "1,000"], width: 6 },
    ],
    explanation: "Thêm: 500 MB mỗi file, ảnh tối đa 8000 × 8000 px.",
  },
  {
    questionId: "ch02-l04-q05", lessonId: L, conceptId: "pdf-visual", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "Với PDF từ 100 trang trở xuống, Claude phân tích cả chữ lẫn phần hình như biểu đồ.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Trên 100 trang (tới 1000) thì chỉ đọc chữ.",
  },
  {
    questionId: "ch02-l04-q06", lessonId: L, conceptId: "pdf-text-only", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn cần Claude đọc một sơ đồ ở trang 40 của file tiêu chuẩn PDF dài 850 trang. Cách làm tốt nhất?",
    options: [
      { id: "a", text: "Tách trang chứa sơ đồ ra một PDF ngắn rồi tải lên", feedback: "Đúng — PDF ngắn được đọc cả hình." },
      { id: "b", text: "Tải nguyên file 850 trang và hỏi về sơ đồ", feedback: "Trên 100 trang chỉ đọc chữ, không thấy sơ đồ." },
      { id: "c", text: "Đổi đuôi file sang .docx", feedback: "File không phải PDF chỉ lấy chữ." },
    ],
    answer: "a",
    explanation: "Chọn định dạng theo điều bạn cần Claude nhìn thấy.",
  },
  {
    questionId: "ch02-l04-q07", lessonId: L, conceptId: "page-numbers", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Cuốn sổ tay PDF có 4 trang bìa và mục lục không đánh số; trang in số “1” là trang thứ 5 trong trình xem PDF. Bạn muốn hỏi về trang in số “1”. Nên nói thế nào?",
    options: [
      { id: "a", text: "“Trang 5 (theo trình xem PDF)”", feedback: "Đúng." },
      { id: "b", text: "“Trang 1”", feedback: "Claude hiểu theo vị trí trang trong file, dễ nhầm sang trang bìa." },
      { id: "c", text: "Không cần nói số trang", feedback: "Chỉ rõ vị trí giúp câu trả lời chính xác." },
    ],
    answer: "a",
    explanation: "Help Center: dùng số trang trình xem PDF hiển thị, không dùng số in trên tài liệu.",
  },
  {
    questionId: "ch02-l04-q08", lessonId: L, conceptId: "image-quality", learningObjective: "o4", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Ảnh chụp màn hình lỗi chỉ 600 × 400 px, chữ nhoè. Help Center gợi ý gì để kết quả tốt hơn?",
    options: [
      { id: "a", text: "Dùng ảnh từ khoảng 1000 × 1000 px trở lên, chụp lại cho rõ", feedback: "Đúng." },
      { id: "b", text: "Nén ảnh nhỏ hơn nữa cho nhanh", feedback: "Ảnh càng nhỏ càng khó đọc." },
      { id: "c", text: "Chuyển ảnh sang file .txt", feedback: "Không chuyển ảnh thành chữ được như vậy." },
    ],
    answer: "a",
    explanation: "Ảnh rõ giúp Claude đọc chữ và chi tiết chính xác hơn.",
  },
  {
    questionId: "ch02-l04-q09", lessonId: L, conceptId: "doc-types", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép file với cách Claude xử lý.",
    pairs: [
      { id: "p1", left: "bao-cao.pdf 60 trang có biểu đồ", right: "Đọc chữ và biểu đồ" },
      { id: "p2", left: "so-tay.pdf 400 trang", right: "Chỉ đọc chữ" },
      { id: "p3", left: "ke-hoach.docx có ảnh dán", right: "Chỉ lấy chữ, bỏ qua ảnh nhúng" },
      { id: "p4", left: "hop-dong.pdf 1.500 trang", right: "Không tải được — cần chia nhỏ" },
    ],
    explanation: "Theo phần PDF handling của Help Center.",
  },
  {
    questionId: "ch02-l04-q10", lessonId: L, conceptId: "xlsx-capability", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn tải file doanh-so.xlsx nhưng không được. File CSV cùng dữ liệu thì tải bình thường. Kiểm tra gì trước?",
    options: [
      { id: "a", text: "Tài khoản đã bật code execution and file creation chưa — XLSX cần khả năng này", feedback: "Đúng." },
      { id: "b", text: "Đổi tên file cho ngắn hơn", feedback: "Tên file không phải nguyên nhân." },
      { id: "c", text: "Xác minh lại số điện thoại", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Help Center: XLSX uploads require enabling code execution and file creation.",
  },
  {
    questionId: "ch02-l04-q11", lessonId: L, conceptId: "project-files", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "true-false",
    statement: "File tải vào Project có giới hạn khác với chat: tối đa 30 MB mỗi file, và tổng nội dung phải vừa context window.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Số file trong Project không giới hạn nhưng tổng nội dung bị giới hạn bởi context.",
  },
  {
    questionId: "ch02-l04-q12", lessonId: L, conceptId: "sensitive-data", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn cần Claude tính tổng giờ tăng ca theo tổ từ bảng chấm công có cả số CCCD, số tài khoản ngân hàng và lương của từng người. Cách làm hợp lý nhất?",
    options: [
      { id: "a", text: "Xoá các cột CCCD, tài khoản, lương — chỉ giữ tổ và giờ tăng ca — rồi mới tải lên", feedback: "Đúng." },
      { id: "b", text: "Tải nguyên file cho Claude có đủ thông tin", feedback: "Đưa dữ liệu nhạy cảm không cần thiết." },
      { id: "c", text: "Không dùng Claude cho việc này", feedback: "Lọc dữ liệu là đủ để dùng an toàn hơn." },
    ],
    answer: "a",
    explanation: "Chỉ đưa những gì Claude cần cho câu hỏi; tuân thủ quy định dữ liệu của công ty bạn.",
  },
  {
    questionId: "ch02-l04-q13", lessonId: L, conceptId: "non-pdf-text", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn chuẩn bị file cho Claude như dưới đây. Chọn các ý SAI.",
    segments: [
      { id: "s1", text: "Biểu đồ quan trọng nằm trong file Word nên tải file Word là đủ.", isError: true, why: "File không phải PDF chỉ lấy chữ; xuất PDF ngắn hoặc chụp ảnh biểu đồ." },
      { id: "s2", text: "Tách 10 trang cần đọc từ PDF 600 trang ra file riêng.", isError: false },
      { id: "s3", text: "Hỏi về “trang 3” theo số in ở chân trang dù PDF có 2 trang bìa không đánh số.", isError: true, why: "Dùng số trang theo trình xem PDF." },
      { id: "s4", text: "Chụp lại màn hình lỗi ở độ phân giải cao hơn.", isError: false },
    ],
    explanation: "Định dạng và vị trí rõ ràng giúp Claude đọc đúng.",
  },
  {
    questionId: "ch02-l04-q14", lessonId: L, conceptId: "chat-limits", learningObjective: "o2", thinkingSkill: "apply", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn có 26 ảnh chụp phiếu kiểm tra cần Claude tổng hợp trong một lần. Làm thế nào cho đúng giới hạn?",
    options: [
      { id: "a", text: "Chia thành hai đợt (ví dụ 20 + 6), hoặc gộp ảnh thành một PDF ngắn", feedback: "Đúng — một chat tối đa 20 file." },
      { id: "b", text: "Tải cả 26 ảnh cùng lúc", feedback: "Vượt giới hạn 20 file mỗi chat." },
      { id: "c", text: "Nén mỗi ảnh xuống 200 × 200 px để được tải nhiều hơn", feedback: "Giới hạn là số file, và ảnh mờ khó đọc." },
    ],
    answer: "a",
    explanation: "Gộp thành PDF ≤ 100 trang vẫn giữ được phần hình.",
  },
  {
    questionId: "ch02-l04-q15", lessonId: L, conceptId: "pdf-visual", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết kế hoạch chuẩn bị file và câu hỏi gửi Claude cho tình huống dưới đây (3–5 dòng).",
    source: "Bạn có quy-trinh-an-toan.docx (200 trang, nhiều sơ đồ dán trong file). Cần Claude giải thích sơ đồ “Quy trình khoá máy” ở chương 7 và so với ảnh chụp bảng hướng dẫn treo tại xưởng (chụp bằng điện thoại, hơi tối).",
    rubric: [
      { id: "pdf", label: "Xuất phần cần thành PDF ngắn", weight: 1, check: { kind: "regex", pattern: "(xuat|tach|luu)[^\\n]*pdf" }, pass: "Có PDF ngắn.", fail: "Xuất chương 7 (hoặc trang có sơ đồ) ra PDF ngắn ≤ 100 trang." },
      { id: "photo", label: "Chụp lại ảnh rõ", weight: 1, check: { kind: "anyKeyword", keywords: ["chụp lại", "rõ hơn", "đủ sáng", "1000"] }, pass: "Có xử lý ảnh.", fail: "Chụp lại bảng hướng dẫn đủ sáng, rõ (≥ 1000 × 1000 px)." },
      { id: "locate", label: "Chỉ rõ vị trí", weight: 1, check: { kind: "anyKeyword", keywords: ["trang", "trình xem pdf", "sơ đồ quy trình khoá máy"] }, pass: "Có chỉ vị trí.", fail: "Nêu trang theo trình xem PDF hoặc tên sơ đồ." },
      { id: "compare", label: "Yêu cầu so sánh có kiểm chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["so sánh", "đối chiếu", "khác nhau", "điểm khác"] }, pass: "Có so sánh.", fail: "Yêu cầu so sánh sơ đồ với ảnh và liệt kê điểm khác." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "1. File Word chỉ được lấy chữ nên xuất chương 7 ra một PDF ngắn (dưới 100 trang) để Claude xem được sơ đồ.\n2. Chụp lại bảng hướng dẫn tại xưởng cho đủ sáng, rõ chữ, từ 1000 × 1000 px.\n3. Tải PDF và ảnh, hỏi: “Giải thích sơ đồ Quy trình khoá máy ở trang 3 (theo trình xem PDF), rồi so sánh với ảnh bảng hướng dẫn: liệt kê các điểm khác nhau.”\n4. Đối chiếu các bước Claude nêu với sơ đồ gốc.",
    explanation: "Chọn định dạng để Claude thấy hình, ảnh đủ nét, chỉ rõ vị trí và yêu cầu so sánh có kiểm chứng.",
  },
];
