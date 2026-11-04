import type { Question } from "@/lib/types/content";

const L = "ch10-l03";

/** 15 questions for "Công cụ phân tích Excel" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03 (Claude Help Center). */
export const questionsCh10L03: Question[] = [
  {
    questionId: "ch10-l03-q01", lessonId: L, conceptId: "enable-files", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Để Claude đọc và tạo file Excel, cần bật khả năng nào?",
    options: [
      { id: "a", text: "Code execution and file creation (giao diện mới: Create and edit files)", feedback: "Đúng." },
      { id: "b", text: "Chat ẩn danh", feedback: "Không liên quan." },
      { id: "c", text: "Tìm kiếm chat cũ", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Ở Settings > Capabilities; mặc định đang bật.",
  },
  {
    questionId: "ch10-l03-q02", lessonId: L, conceptId: "profile-data", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Nên nhờ Claude liệt kê cột, kiểu dữ liệu, ô trống và giá trị lạ trước khi yêu cầu tính toán.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Khám dữ liệu lộ ra ô gộp, dòng tổng, đơn vị lẫn lộn trước khi chúng làm sai kết quả.",
  },
  {
    questionId: "ch10-l03-q03", lessonId: L, conceptId: "file-limit", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền số.",
    template: "Trong tính năng tạo/sửa file, mỗi file tải lên hoặc tải về tối đa [[b1]] MB.",
    blanks: [{ id: "b1", accepted: ["30", "ba mươi"], width: 4 }],
    explanation: "Theo bài Create and edit files with Claude.",
  },
  {
    questionId: "ch10-l03-q04", lessonId: L, conceptId: "keep-original", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Nên yêu cầu Claude ghi kết quả vào một file mới và giữ nguyên file gốc.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "File gốc là nguồn để đối chiếu và quay lại khi cần.",
  },
  {
    questionId: "ch10-l03-q05", lessonId: L, conceptId: "sandbox", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Khi xử lý file, Claude chạy code ở đâu?",
    options: [
      { id: "a", text: "Trong một container cô lập", feedback: "Đúng." },
      { id: "b", text: "Trực tiếp trên máy tính của bạn", feedback: "Không — trong container cô lập." },
      { id: "c", text: "Trên máy chủ của công ty bạn", feedback: "Không đúng." },
    ],
    answer: "a",
    explanation: "Quyền truy cập mạng của container tuỳ cài đặt network egress.",
  },
  {
    questionId: "ch10-l03-q06", lessonId: L, conceptId: "formulas-output", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Vì sao nên xin file kết quả có ô dùng công thức (SUMIFS…) thay vì chỉ số tĩnh?",
    options: [
      { id: "a", text: "Bấm vào ô là thấy cách tính, dễ soát và cập nhật khi dữ liệu đổi", feedback: "Đúng." },
      { id: "b", text: "Để file nặng hơn", feedback: "Không phải mục đích." },
      { id: "c", text: "Vì Excel không hiển thị được số tĩnh", feedback: "Không đúng." },
    ],
    answer: "a",
    explanation: "Kết quả kiểm tra được đáng tin hơn kết quả chỉ có con số.",
  },
  {
    questionId: "ch10-l03-q07", lessonId: L, conceptId: "describe-sheets", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Đánh dấu những chỗ còn thiếu trong yêu cầu phân tích dưới đây.",
    segments: [
      { id: "s1", text: "File vat-tu.xlsx, sheet Nhap, mỗi dòng một lần nhập vật tư;", isError: false },
      { id: "s2", text: "tính giúp mấy cái tổng quan trọng;", isError: true, why: "Tổng gì, theo nhóm nào, khoảng thời gian nào?" },
      { id: "s3", text: "cột E là thành tiền (VND);", isError: false },
      { id: "s4", text: "rồi sửa thẳng vào file gốc cho tiện.", isError: true, why: "Giữ nguyên file gốc; ghi ra file mới." },
    ],
    explanation: "Câu hỏi cụ thể + file gốc giữ nguyên.",
  },
  {
    questionId: "ch10-l03-q08", lessonId: L, conceptId: "notes-sheet", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Sheet “Ghi chú” trong file kết quả nên có gì? Chọn tất cả.",
    options: [
      { id: "a", text: "Định nghĩa các chỉ số", feedback: "Đúng." },
      { id: "b", text: "Bộ lọc đã áp dụng", feedback: "Đúng." },
      { id: "c", text: "Các dòng đã loại và lý do", feedback: "Đúng." },
      { id: "d", text: "Mật khẩu file", feedback: "Không ghi bí mật vào file." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Ghi chú giúp người khác hiểu và kiểm tra lại.",
  },
  {
    questionId: "ch10-l03-q09", lessonId: L, conceptId: "verify-sumif", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "File kết quả ghi tổng chi phí nhóm “Bulong” tháng 10 là 48,2 triệu. Cách kiểm chứng nhanh nhất?",
    options: [
      { id: "a", text: "Dùng SUMIFS trên file gốc với điều kiện nhóm = Bulong và tháng 10, so với 48,2 triệu", feedback: "Đúng." },
      { id: "b", text: "Hỏi Claude có chắc không", feedback: "Cần phép tính độc lập." },
      { id: "c", text: "Tin vì file có công thức", feedback: "Công thức cũng có thể lọc sai." },
    ],
    answer: "a",
    explanation: "Kiểm chứng 2–3 con số mỗi lần.",
  },
  {
    questionId: "ch10-l03-q10", lessonId: L, conceptId: "remove-sensitive", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn cần tổng giờ tăng ca theo tổ; file chấm công có cả cột lương giờ và số CCCD. Nên làm gì trước khi tải lên?",
    options: [
      { id: "a", text: "Tạo bản sao, bỏ các cột lương và CCCD vì không cần cho câu hỏi", feedback: "Đúng." },
      { id: "b", text: "Tải nguyên file để Claude có đủ dữ liệu", feedback: "Đưa dữ liệu nhạy cảm không cần thiết." },
      { id: "c", text: "Đổi tên cột cho khó đoán", feedback: "Dữ liệu vẫn lộ." },
    ],
    answer: "a",
    explanation: "Chỉ đưa những gì câu hỏi cần.",
  },
  {
    questionId: "ch10-l03-q11", lessonId: L, conceptId: "download-output", learningObjective: "o3", thinkingSkill: "remember", difficulty: "intermediate",
    questionType: "true-false",
    statement: "File Claude tạo có thể tải trực tiếp từ cuộc trò chuyện hoặc lưu vào Google Drive.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Trên điện thoại, bấm Download sẽ mở file bằng trình xem hoặc ứng dụng khác.",
  },
  {
    questionId: "ch10-l03-q12", lessonId: L, conceptId: "untrusted-files", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn nhận file Excel báo giá từ một nhà cung cấp lạ và nhờ Claude phân tích. Theo Help Center, rủi ro và cách làm hợp lý?",
    options: [
      { id: "a", text: "File có thể chứa chỉ thị ẩn lừa Claude chạy code hoặc gửi dữ liệu ra ngoài — theo dõi Claude khi xử lý, dừng nếu thấy truy cập dữ liệu bất thường", feedback: "Đúng." },
      { id: "b", text: "Không có rủi ro vì chỉ là file Excel", feedback: "File bên ngoài có thể chứa chỉ thị độc hại." },
      { id: "c", text: "Gộp file đó với dữ liệu nội bộ nhạy cảm cho tiện so sánh", feedback: "Tăng rủi ro lộ dữ liệu." },
    ],
    answer: "a",
    explanation: "Cũng có thể báo vấn đề bằng nút thumbs-down.",
  },
  {
    questionId: "ch10-l03-q13", lessonId: L, conceptId: "profile-data", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bước khám dữ liệu cho thấy sheet có một dòng “TỔNG CỘNG” ở giữa bảng sau mỗi tháng. Điều gì sẽ xảy ra nếu bỏ qua?",
    options: [
      { id: "a", text: "Các dòng tổng bị cộng thêm vào, tổng năm bị phóng đại", feedback: "Đúng — phải loại dòng tổng trước khi tính." },
      { id: "b", text: "Không ảnh hưởng gì", feedback: "Dòng tổng là dữ liệu trùng." },
      { id: "c", text: "Excel tự bỏ qua dòng tổng", feedback: "SUM không tự biết đâu là dòng tổng." },
    ],
    answer: "a",
    explanation: "Đây là lý do khám dữ liệu trước khi phân tích.",
  },
  {
    questionId: "ch10-l03-q14", lessonId: L, conceptId: "formulas-output", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây để nhận được kết quả Excel kiểm tra được.",
    source: "tính tổng chi phí theo nhóm rồi gửi tôi con số",
    rubric: [
      { id: "file", label: "File mới có công thức", weight: 1, check: { kind: "anyKeyword", keywords: ["file mới", "công thức", "sumifs"] }, pass: "Có file công thức.", fail: "Yêu cầu file mới, ô dùng công thức." },
      { id: "notes", label: "Ghi chú cách tính", weight: 1, check: { kind: "anyKeyword", keywords: ["ghi chú", "định nghĩa", "dòng đã loại"] }, pass: "Có ghi chú.", fail: "Thêm sheet Ghi chú." },
      { id: "original", label: "Giữ nguyên file gốc", weight: 1, check: { kind: "anyKeyword", keywords: ["giữ nguyên", "file gốc"] }, pass: "Có giữ file gốc.", fail: "Dặn giữ nguyên file gốc." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Tạo file mới chi-phi-theo-nhom.xlsx: sheet Tổng hợp dùng công thức SUMIFS tính tổng thành tiền theo nhóm vật tư và tháng; sheet Ghi chú nêu định nghĩa, bộ lọc và các dòng đã loại. Giữ nguyên file gốc.",
    explanation: "Kết quả có công thức + ghi chú + file gốc an toàn.",
  },
  {
    questionId: "ch10-l03-q15", lessonId: L, conceptId: "describe-sheets", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết hai yêu cầu (khám dữ liệu, rồi tạo file kết quả) cho tình huống dưới đây, kèm cách kiểm chứng.",
    source: "File ton-kho.xlsx: sheet NhapXuat có Ngày, Mã vật tư, Loại (Nhập/Xuất), Số lượng, Đơn giá. Cần: tồn cuối tháng 10 theo mã vật tư và giá trị tồn. Một số dòng Số lượng ghi “10 cái” thay vì số.",
    rubric: [
      { id: "profile", label: "Khám dữ liệu", weight: 1, check: { kind: "anyKeyword", keywords: ["liệt kê", "chưa tính", "giá trị lạ"] }, pass: "Có khám.", fail: "Yêu cầu 1: liệt kê cột, kiểu, giá trị lạ — chưa tính." },
      { id: "units", label: "Xử lý “10 cái”", weight: 1, check: { kind: "anyKeyword", keywords: ["10 cái", "chữ", "không phải số", "chuẩn hoá"] }, pass: "Có xử lý.", fail: "Nêu cách xử lý ô số lượng ghi kèm chữ." },
      { id: "output", label: "File có công thức", weight: 1, check: { kind: "anyKeyword", keywords: ["công thức", "sumifs", "file mới"] }, pass: "Có file kết quả.", fail: "Yêu cầu 2: file mới, công thức tồn = nhập − xuất." },
      { id: "verify", label: "Kiểm chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["kiểm chứng", "đối chiếu", "so với"] }, pass: "Có kiểm chứng.", fail: "Nêu cách kiểm chứng." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Yêu cầu 1: File ton-kho.xlsx, sheet NhapXuat, mỗi dòng một lần nhập hoặc xuất. Liệt kê cột, kiểu dữ liệu, ô trống, giá trị lạ (ví dụ Số lượng ghi “10 cái” không phải số) — chưa tính gì.\nYêu cầu 2: Chuẩn hoá Số lượng về số (bỏ chữ “cái”, báo các dòng không đọc được). Tạo file mới ton-kho-thang-10.xlsx: sheet Tổng hợp dùng SUMIFS tính tồn = tổng Nhập − tổng Xuất theo mã vật tư tới 31/10, cột giá trị tồn = tồn × đơn giá; sheet Ghi chú nêu cách tính và các dòng đã sửa. Giữ nguyên file gốc.\nKiểm chứng: chọn 2 mã vật tư, tự tính bằng SUMIFS trên file gốc và so với file kết quả.",
    explanation: "Khám, chuẩn hoá có ghi lại, công thức, kiểm chứng.",
  },
];
