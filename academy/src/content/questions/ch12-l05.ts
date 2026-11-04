import type { Question } from "@/lib/types/content";

const L = "ch12-l05";

/** 15 questions for "Kiểm thử" (dự án tốt nghiệp) — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh12L05: Question[] = [
  {
    questionId: "ch12-l05-q01", lessonId: L, conceptId: "test-levels", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Bốn lớp kiểm thử của dự án có Claude gồm những lớp nào? Chọn tất cả.",
    options: [
      { id: "a", text: "Test đơn vị cho phần code", feedback: "Đúng." },
      { id: "b", text: "Đánh giá đầu ra AI trên bộ mẫu có đáp án", feedback: "Đúng." },
      { id: "c", text: "Test đầu-cuối và nghiệm thu người dùng", feedback: "Đúng." },
      { id: "d", text: "Hỏi Claude “bạn có chắc không?”", feedback: "Không phải phép kiểm thử." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Mỗi lớp bắt loại lỗi khác nhau.",
  },
  {
    questionId: "ch12-l05-q02", lessonId: L, conceptId: "eval-set", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao phần trích xuất do Claude làm cần đo trên bộ mẫu có đáp án thay vì một test đơn vị?",
    options: [
      { id: "a", text: "Đầu ra mô hình có thể khác nhau theo đầu vào và cách diễn đạt — cần đo tỷ lệ đúng trên nhiều trường hợp thật", feedback: "Đúng." },
      { id: "b", text: "Vì test đơn vị chậm", feedback: "Không phải lý do." },
      { id: "c", text: "Vì Claude không chạy được trong test", feedback: "Có thể gọi, nhưng một mẫu không đủ kết luận." },
    ],
    answer: "a",
    explanation: "Code xác định → test đơn vị; đầu ra mô hình → bộ mẫu.",
  },
  {
    questionId: "ch12-l05-q03", lessonId: L, conceptId: "repro-test-first", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Khi gặp lỗi, nên viết test tái hiện lỗi (thấy test đỏ) trước rồi mới sửa.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Test đó chứng minh lỗi đã sửa và chặn lỗi quay lại.",
  },
  {
    questionId: "ch12-l05-q04", lessonId: L, conceptId: "uat", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Nghiệm thu người dùng (UAT) khác test tự động ở điểm nào?",
    options: [
      { id: "a", text: "Người dùng thật dùng với dữ liệu thật và đánh giá có đáp ứng nhu cầu không", feedback: "Đúng." },
      { id: "b", text: "Chạy nhanh hơn", feedback: "Thường chậm hơn." },
      { id: "c", text: "Không cần chỉ số", feedback: "Vẫn đo chỉ số trong điều lệ." },
    ],
    answer: "a",
    explanation: "Test xanh chưa chắc người dùng thấy hữu ích.",
  },
  {
    questionId: "ch12-l05-q05", lessonId: L, conceptId: "review-and-ci", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền lệnh Claude Code dùng để rà thay đổi trước khi merge.",
    template: "Trước khi merge, chạy lệnh [[b1]] để Claude rà thay đổi.",
    blanks: [{ id: "b1", accepted: ["/code-review", "code-review"], width: 12 }],
    explanation: "Đã học ở Chương 6 và 9.",
  },
  {
    questionId: "ch12-l05-q06", lessonId: L, conceptId: "field-accuracy", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Kết quả bộ 50 ghi chú như dưới đây, ngưỡng SPEC là 90% cho mọi trường. Kết luận?",
    context: { label: "Kết quả đo", content: "Tỷ lệ chung (mọi trường): 93%\ncong_doan: 98%\nloai_loi: 95%\nso_luong: 84%\nmuc_do: 95%", lang: "text" },
    options: [
      { id: "a", text: "Chưa đạt — so_luong 84% dưới ngưỡng; tỷ lệ chung che lỗi này", feedback: "Đúng." },
      { id: "b", text: "Đạt vì tỷ lệ chung 93%", feedback: "SPEC đặt ngưỡng cho từng trường." },
      { id: "c", text: "Không kết luận được", feedback: "Số liệu đủ để kết luận chưa đạt." },
    ],
    answer: "a",
    explanation: "Đo theo từng trường để không bỏ sót điểm yếu.",
  },
  {
    questionId: "ch12-l05-q07", lessonId: L, conceptId: "error-analysis", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "8 bản ghi sai số lượng. Bước tiếp theo hợp lý nhất?",
    options: [
      { id: "a", text: "Đọc từng bản ghi sai, phân loại nguyên nhân (viết tắt, hai lỗi một câu…), sửa đúng nguyên nhân rồi chạy lại bộ mẫu", feedback: "Đúng." },
      { id: "b", text: "Đổi mô hình khác ngay", feedback: "Chưa biết nguyên nhân." },
      { id: "c", text: "Xoá 8 mẫu đó khỏi bộ", feedback: "Làm đẹp số đo, không sửa vấn đề." },
    ],
    answer: "a",
    explanation: "Phân tích loại sai cho cải thiện có mục tiêu.",
  },
  {
    questionId: "ch12-l05-q08", lessonId: L, conceptId: "e2e-test", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Test đơn vị và bộ mẫu đều đạt, nhưng chạy thật thì báo cáo tuần thiếu dữ liệu ca 3. Thiếu lớp kiểm thử nào?",
    options: [
      { id: "a", text: "Test đầu-cuối: từ thư mục ghi chú thật đến báo cáo, kiểm đủ 3 ca", feedback: "Đúng." },
      { id: "b", text: "Thêm test đơn vị cho hàm chuẩn hoá", feedback: "Lỗi nằm ở chỗ nối các phần." },
      { id: "c", text: "Không cần, lỗi hiếm", feedback: "Thiếu cả một ca là lỗi lớn." },
    ],
    answer: "a",
    explanation: "Lỗi tích hợp chỉ lộ khi chạy hết luồng.",
  },
  {
    questionId: "ch12-l05-q09", lessonId: L, conceptId: "edge-case-tests", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây để Claude viết test cho các ngoại lệ trong SPEC.",
    source: "viết test cho dự án",
    rubric: [
      { id: "spec", label: "Dựa trên SPEC", weight: 1, check: { kind: "anyKeyword", keywords: ["spec"] }, pass: "Có SPEC.", fail: "Tham chiếu @SPEC.md." },
      { id: "edge", label: "Nêu ngoại lệ", weight: 1, check: { kind: "anyKeyword", keywords: ["ngoại lệ", "thiếu", "viết tắt", "hai lỗi"] }, pass: "Có ngoại lệ.", fail: "Nêu các ngoại lệ cần test." },
      { id: "run", label: "Chạy và cho xem", weight: 1, check: { kind: "anyKeyword", keywords: ["chạy", "cho tôi xem", "kết quả"] }, pass: "Có chạy test.", fail: "Yêu cầu chạy và cho xem kết quả." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Đọc @SPEC.md. Viết test đơn vị cho các ngoại lệ: thiếu số lượng, hai lỗi trong một câu, viết tắt của xưởng. Chạy test và cho tôi xem kết quả. Chưa sửa code chính.",
    explanation: "Test bám tiêu chí và ngoại lệ trong SPEC.",
  },
  {
    questionId: "ch12-l05-q10", lessonId: L, conceptId: "test-data-privacy", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bộ mẫu khiếu nại chứa tên và số điện thoại khách. Chuẩn bị thế nào?",
    options: [
      { id: "a", text: "Kiểm tra chính sách; ẩn hoặc thay thông tin cá nhân trước khi dùng làm bộ mẫu", feedback: "Đúng." },
      { id: "b", text: "Dùng nguyên vì là dữ liệu kiểm thử", feedback: "Dữ liệu kiểm thử vẫn là dữ liệu thật." },
      { id: "c", text: "Công khai bộ mẫu lên GitHub cho tiện", feedback: "Rò rỉ dữ liệu khách." },
    ],
    answer: "a",
    explanation: "Chính sách dữ liệu áp dụng cả cho kiểm thử.",
  },
  {
    questionId: "ch12-l05-q11", lessonId: L, conceptId: "review-and-ci", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp các bước trước khi merge một thay đổi của dự án.",
    items: [
      { id: "a", text: "Chạy test đơn vị" },
      { id: "b", text: "Chạy bộ mẫu có đáp án, so ngưỡng" },
      { id: "c", text: "Chạy /code-review và xử lý góp ý" },
      { id: "d", text: "CI xanh trên pull request" },
      { id: "e", text: "Merge" },
    ],
    explanation: "Kiểm nhanh trước, rà sau, CI là cổng cuối.",
  },
  {
    questionId: "ch12-l05-q12", lessonId: L, conceptId: "test-report", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một báo cáo kiểm thử như dưới đây. Chọn các dòng cần sửa.",
    segments: [
      { id: "s1", text: "Tiêu chí 1 (≥ 90% từng trường): ĐẠT — xem ket-qua/2026-11-03.json.", isError: false },
      { id: "s2", text: "Tiêu chí 2 (≤ 1 phút/500 ghi chú): chắc là đạt.", isError: true, why: "Không có số đo — cần thời gian thực đo." },
      { id: "s3", text: "Nghiệm thu: trưởng xưởng thấy ổn.", isError: true, why: "Thiếu chỉ số trong điều lệ (phút tổng hợp/tuần) và thời gian dùng thử." },
      { id: "s4", text: "Lỗi tồn: 2 bản ghi viết tắt lạ — kế hoạch bổ sung bảng viết tắt tuần sau.", isError: false },
    ],
    explanation: "Mỗi kết luận cần số đo và bằng chứng.",
  },
  {
    questionId: "ch12-l05-q13", lessonId: L, conceptId: "eval-set", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn sửa prompt trích xuất để xử lý viết tắt. Trước khi giữ thay đổi, cần làm gì?",
    options: [
      { id: "a", text: "Chạy lại toàn bộ bộ mẫu, so từng trường với lần trước — đảm bảo trường khác không giảm", feedback: "Đúng." },
      { id: "b", text: "Thử vài ghi chú có viết tắt là đủ", feedback: "Có thể làm hỏng trường hợp khác." },
      { id: "c", text: "Giữ luôn vì sửa đúng chỗ", feedback: "Thiếu bằng chứng không hồi quy." },
    ],
    answer: "a",
    explanation: "Bộ mẫu là bộ kiểm hồi quy cho phần AI.",
  },
  {
    questionId: "ch12-l05-q14", lessonId: L, conceptId: "uat", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Mọi test và bộ mẫu đạt, nhưng nghiệm thu cho thấy trưởng xưởng vẫn mất 40 phút/tuần (mục tiêu ≤ 15) vì phải mở 3 file khác nhau. Kết luận?",
    options: [
      { id: "a", text: "Chưa đạt chỉ số điều lệ; vấn đề ở cách dùng — gộp đầu ra thành một chỗ rồi nghiệm thu lại", feedback: "Đúng." },
      { id: "b", text: "Đạt vì test xanh", feedback: "Chỉ số của người dùng mới là đích." },
      { id: "c", text: "Lỗi do người dùng chưa quen, bỏ qua", feedback: "Bỏ qua phản hồi thật." },
    ],
    answer: "a",
    explanation: "Nghiệm thu bắt vấn đề mà test kỹ thuật không thấy.",
  },
  {
    questionId: "ch12-l05-q15", lessonId: L, conceptId: "test-report", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết 3 dòng báo cáo kiểm thử cho các kết quả dưới đây (tiêu chí → đạt/không đạt → số đo → bằng chứng/việc tiếp).",
    source: "SPEC: ≥ 18/20 câu đúng có nguồn; câu ngoài tài liệu trả lời “không tìm thấy”; tra cứu ≤ 2 phút. Kết quả: 19/20 đúng (file ket-qua-20cau.xlsx); 4/5 câu ngoài tài liệu đúng (1 câu bịa trả lời); thời gian trung bình 1 phút 20 giây qua 30 lần tra.",
    rubric: [
      { id: "verdict", label: "Đạt/không đạt", weight: 1, check: { kind: "allGroups", groups: [["đạt"], ["không đạt", "chưa đạt"]] }, pass: "Có kết luận.", fail: "Ghi đạt/không đạt cho từng tiêu chí." },
      { id: "numbers", label: "Số đo", weight: 1, check: { kind: "allGroups", groups: [["19"], ["4"]] }, pass: "Có số đo.", fail: "Ghi số đo 19/20, 4/5." },
      { id: "next", label: "Việc tiếp", weight: 1, check: { kind: "anyKeyword", keywords: ["kế hoạch", "việc tiếp", "sửa", "bổ sung", "instructions"] }, pass: "Có việc tiếp.", fail: "Nêu việc xử lý tiêu chí chưa đạt." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "1. ≥ 18/20 câu đúng có nguồn: ĐẠT — 19/20 (ket-qua-20cau.xlsx).\n2. Câu ngoài tài liệu trả lời “không tìm thấy”: KHÔNG ĐẠT — 4/5; 1 câu bịa trả lời. Việc tiếp: sửa instructions yêu cầu chỉ trả lời từ tài liệu, thêm 5 câu ngoài tài liệu vào bộ mẫu, đo lại.\n3. Tra cứu ≤ 2 phút: ĐẠT — trung bình 1 phút 20 giây qua 30 lần.",
    explanation: "Tiêu chí → kết luận → số → bằng chứng → việc tiếp.",
  },
];
