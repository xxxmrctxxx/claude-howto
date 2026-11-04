import type { Question } from "@/lib/types/content";

const L = "ch12-l07";

/** 15 questions for "Đánh giá kết quả" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh12L07: Question[] = [
  {
    questionId: "ch12-l07-q01", lessonId: L, conceptId: "evidence", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Câu kết luận nào trong báo cáo đánh giá đáng tin nhất?",
    options: [
      { id: "a", text: "“Tổng hợp lỗi 60 → 12 phút/tuần, trung bình 4 tuần, theo ghi chép của trưởng xưởng”", feedback: "Đúng." },
      { id: "b", text: "“Hệ thống giúp tiết kiệm rất nhiều thời gian”", feedback: "Không có số và nguồn." },
      { id: "c", text: "“AI làm việc tuyệt vời”", feedback: "Cảm tính." },
    ],
    answer: "a",
    explanation: "Số đo + khoảng thời gian + nguồn.",
  },
  {
    questionId: "ch12-l07-q02", lessonId: L, conceptId: "honest-limits", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Nên bỏ phần hạn chế khỏi báo cáo đánh giá để dự án trông thành công hơn.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Hạn chế nói rõ giúp người quyết định và người vận hành tránh rủi ro.",
  },
  {
    questionId: "ch12-l07-q03", lessonId: L, conceptId: "retrospective", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền phần còn thiếu của khung rút kinh nghiệm.",
    template: "Khung rút kinh nghiệm: giữ – bỏ – [[b1]].",
    blanks: [{ id: "b1", accepted: ["thử"], width: 5 }],
    explanation: "Tiếp tục gì, ngừng gì, thử gì mới.",
  },
  {
    questionId: "ch12-l07-q04", lessonId: L, conceptId: "handover-docs", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Bộ tài liệu bàn giao nên có gì? Chọn tất cả.",
    options: [
      { id: "a", text: "README: cách cài, cách chạy", feedback: "Đúng." },
      { id: "b", text: "Người phụ trách và cách xử lý khi lỗi", feedback: "Đúng." },
      { id: "c", text: "Cách cập nhật bộ mẫu và chạy lại đánh giá", feedback: "Đúng." },
      { id: "d", text: "API key dán thẳng trong README", feedback: "Chỉ ghi nơi lưu bí mật, không ghi key." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Thêm hướng dẫn sử dụng, nơi lưu bí mật và ai có quyền, chi phí dự kiến.",
  },
  {
    questionId: "ch12-l07-q05", lessonId: L, conceptId: "keep-learning", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao cần đối chiếu lại tài liệu chính thức của Claude định kỳ sau khi bàn giao?",
    options: [
      { id: "a", text: "Tính năng, giới hạn, giá và tên mô hình thay đổi theo thời gian", feedback: "Đúng." },
      { id: "b", text: "Vì dự án tự hỏng sau một tháng", feedback: "Không đúng." },
      { id: "c", text: "Không cần, thông tin cố định", feedback: "Thông tin thay đổi thường xuyên." },
    ],
    answer: "a",
    explanation: "Mọi bài trong khoá học đều ghi ngày đối chiếu vì lý do này.",
  },
  {
    questionId: "ch12-l07-q06", lessonId: L, conceptId: "metric-comparison", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Điều lệ: bản nháp ≤ 30 phút, ≥ 80% dùng được. Kết quả dưới đây. Kết luận đúng?",
    context: { label: "Kết quả", content: "Thời gian: trước 120 phút → sau 35 phút (6 khiếu nại)\nDùng được: 75% (trưởng phòng chấm)", lang: "text" },
    options: [
      { id: "a", text: "Cả hai chỉ số chưa đạt, dù thời gian giảm ~70% — nói rõ cả hai điều", feedback: "Đúng." },
      { id: "b", text: "Đạt vì giảm 70% thời gian", feedback: "Mục tiêu là ≤ 30 phút." },
      { id: "c", text: "Thất bại hoàn toàn", feedback: "Bỏ qua cải thiện lớn đã đo được." },
    ],
    answer: "a",
    explanation: "Trung thực với ngưỡng, ghi nhận cải thiện thật.",
  },
  {
    questionId: "ch12-l07-q07", lessonId: L, conceptId: "value-vs-cost", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn muốn nêu giá trị tiết kiệm bằng tiền. Cách tính có căn cứ?",
    options: [
      { id: "a", text: "Giờ tiết kiệm mỗi lần × số lần mỗi tháng × đơn giá giờ công (nêu nguồn), trừ chi phí API và giờ bảo trì", feedback: "Đúng." },
      { id: "b", text: "Ước chừng một con số lớn cho ấn tượng", feedback: "Nói quá, mất uy tín." },
      { id: "c", text: "Bỏ qua chi phí bảo trì", feedback: "Thiếu một phần chi phí thật." },
    ],
    answer: "a",
    explanation: "Công thức rõ để người khác kiểm lại.",
  },
  {
    questionId: "ch12-l07-q08", lessonId: L, conceptId: "user-feedback", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Thu phản hồi người dùng thế nào cho có ích? Chọn tất cả.",
    options: [
      { id: "a", text: "Hỏi cụ thể: điều gì hữu ích, điều gì vướng, có dùng tiếp không", feedback: "Đúng." },
      { id: "b", text: "Ghi số người dùng và tần suất dùng thật", feedback: "Đúng." },
      { id: "c", text: "Ghi nguyên văn góp ý kèm ví dụ", feedback: "Đúng." },
      { id: "d", text: "Chỉ hỏi “anh/chị thấy ổn không?”", feedback: "Câu hỏi đóng, ít thông tin." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Phản hồi có cấu trúc dẫn tới cải tiến cụ thể.",
  },
  {
    questionId: "ch12-l07-q09", lessonId: L, conceptId: "next-decision", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép tình huống đánh giá với quyết định hợp lý.",
    pairs: [
      { id: "p1", left: "Đạt mọi chỉ số, người dùng dùng đều mỗi tuần", right: "Tiếp tục, bàn giao vận hành" },
      { id: "p2", left: "Đạt chỉ số, xưởng bên cạnh có cùng vấn đề", right: "Mở rộng với điều lệ mới" },
      { id: "p3", left: "Chi phí vượt giá trị, người dùng không còn dùng", right: "Dừng, lưu trữ và ghi lý do" },
    ],
    explanation: "Quyết định dựa trên số đo và mức dùng thật.",
  },
  {
    questionId: "ch12-l07-q10", lessonId: L, conceptId: "owner-maintenance", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn chuyển công tác sau khi bàn giao. Điều gì giúp hệ thống tiếp tục chạy?",
    options: [
      { id: "a", text: "Có người phụ trách được chỉ định, đã được hướng dẫn và tự chạy lại bộ mẫu theo README ít nhất một lần", feedback: "Đúng." },
      { id: "b", text: "Để lại số điện thoại của bạn", feedback: "Không bền vững." },
      { id: "c", text: "Không cần, hệ thống tự chạy mãi", feedback: "Dữ liệu, giá, mô hình đều thay đổi." },
    ],
    answer: "a",
    explanation: "Bàn giao thật là người khác đã làm được.",
  },
  {
    questionId: "ch12-l07-q11", lessonId: L, conceptId: "overclaim", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Một báo cáo đánh giá như dưới đây. Chọn các câu nói quá hoặc làm mất kiểm soát.",
    segments: [
      { id: "s1", text: "Bộ 50 ghi chú: 92–96% theo trường (ket-qua/bo-mau-50.json).", isError: false },
      { id: "s2", text: "AI hiểu hoàn toàn mọi ghi chú của xưởng.", isError: true, why: "Vượt quá số đo 92–96%." },
      { id: "s3", text: "Bỏ bước người duyệt hàng chờ để tiết kiệm thời gian.", isError: true, why: "Mất kiểm soát với ca khó." },
      { id: "s4", text: "Hạn chế: chưa thử ghi chú tiếng Anh.", isError: false },
    ],
    explanation: "Giữ kết luận trong phạm vi dữ liệu và giữ kiểm soát của con người.",
  },
  {
    questionId: "ch12-l07-q12", lessonId: L, conceptId: "retrospective", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Trong phần rút kinh nghiệm, ghi chú nào về cách làm với Claude có giá trị nhất cho dự án sau?",
    options: [
      { id: "a", text: "“Giữ: mốc 1 đo rủi ro trên bộ mẫu; quy tắc ‘chạy test trước khi báo xong’ trong CLAUDE.md. Bỏ: giao nhiều mốc trong một phiên. Thử: skill cho bộ đo.”", feedback: "Đúng." },
      { id: "b", text: "“Claude rất hay”", feedback: "Không hành động được." },
      { id: "c", text: "“Lần sau làm nhanh hơn”", feedback: "Không nói làm gì khác đi." },
    ],
    answer: "a",
    explanation: "Bài học cụ thể, áp dụng lại được.",
  },
  {
    questionId: "ch12-l07-q13", lessonId: L, conceptId: "honest-limits", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Quản lý muốn bạn bỏ dòng “chưa xử lý ghi chú viết tay chụp ảnh” vì “nghe yếu”. Bạn phản hồi thế nào?",
    options: [
      { id: "a", text: "Giữ dòng đó: người vận hành cần biết để không đưa ảnh viết tay vào; đề xuất đưa vào giai đoạn 2", feedback: "Đúng." },
      { id: "b", text: "Bỏ đi cho báo cáo đẹp", feedback: "Người dùng có thể dùng sai và mất niềm tin." },
      { id: "c", text: "Ghi là “đã hỗ trợ”", feedback: "Sai sự thật." },
    ],
    answer: "a",
    explanation: "Hạn chế rõ ràng bảo vệ người dùng và uy tín dự án.",
  },
  {
    questionId: "ch12-l07-q14", lessonId: L, conceptId: "demo", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Buổi trình bày 10 phút với trưởng xưởng và giám đốc. Bố cục hợp lý nhất?",
    options: [
      { id: "a", text: "Vấn đề (1 phút) → demo với dữ liệu thật (4 phút) → bảng chỉ số trước–sau có nguồn (2 phút) → hạn chế và chi phí (1 phút) → đề xuất quyết định (2 phút)", feedback: "Đúng." },
      { id: "b", text: "8 phút giải thích kiến trúc kỹ thuật, 2 phút demo", feedback: "Người nghe cần kết quả và quyết định." },
      { id: "c", text: "Chỉ chiếu slide, không demo", feedback: "Demo với dữ liệu thật thuyết phục hơn." },
    ],
    answer: "a",
    explanation: "Bám vào vấn đề, bằng chứng và quyết định cần đưa ra.",
  },
  {
    questionId: "ch12-l07-q15", lessonId: L, conceptId: "metric-comparison", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết 3 dòng bảng đánh giá (chỉ số → trước – sau → bằng chứng → kết luận) cho dự án dưới đây.",
    source: "Điều lệ: tra cứu ≤ 2 phút; ≥ 18/20 câu đúng có nguồn; tổ QC 5 người dùng hằng tuần. Kết quả: trước ~10 phút lật file, sau trung bình 1 phút 20 giây (30 lần đo); 19/20 câu đúng (ket-qua-20cau.xlsx); 3/5 người dùng hằng tuần sau 4 tuần.",
    rubric: [
      { id: "numbers", label: "Số trước – sau", weight: 1, check: { kind: "allGroups", groups: [["10"], ["19"]] }, pass: "Có số.", fail: "Ghi số đo: 10 phút → 1 phút 20 giây; 19/20." },
      { id: "verdict", label: "Kết luận đạt/không đạt", weight: 1, check: { kind: "allGroups", groups: [["đạt"], ["không đạt", "chưa đạt"]] }, pass: "Có kết luận trung thực.", fail: "Mức dùng 3/5 người chưa đạt mục tiêu 5 người." },
      { id: "source", label: "Bằng chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["ket-qua-20cau", "30 lần", "nguồn", "bằng chứng"] }, pass: "Có bằng chứng.", fail: "Nêu nguồn số đo." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "1. Tra cứu ≤ 2 phút: ~10 phút → 1 phút 20 giây (30 lần đo) — ĐẠT.\n2. ≥ 18/20 câu đúng có nguồn: 19/20 (ket-qua-20cau.xlsx) — ĐẠT.\n3. 5 người dùng hằng tuần: 3/5 sau 4 tuần (thống kê mức dùng) — CHƯA ĐẠT; hỏi 2 người còn lại lý do trước khi quyết định mở rộng.",
    explanation: "Đủ số, nguồn và kết luận trung thực.",
  },
];
