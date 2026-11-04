import type { Question } from "@/lib/types/content";

const L = "ch12-l06";

/** 15 questions for "Tối ưu" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh12L06: Question[] = [
  {
    questionId: "ch12-l06-q01", lessonId: L, conceptId: "measure-first", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bước đầu tiên của tối ưu là gì?",
    options: [
      { id: "a", text: "Đo hiện trạng: độ chính xác, chi phí, thời gian, thao tác người dùng", feedback: "Đúng." },
      { id: "b", text: "Đổi sang mô hình mới nhất", feedback: "Chưa biết vấn đề ở đâu." },
      { id: "c", text: "Viết lại toàn bộ code", feedback: "Tốn công, có thể không cần." },
    ],
    answer: "a",
    explanation: "Không đo thì không biết tốt hơn hay chỉ khác đi.",
  },
  {
    questionId: "ch12-l06-q02", lessonId: L, conceptId: "one-change", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Đổi nhiều thứ cùng lúc giúp tối ưu nhanh hơn mà vẫn biết được thay đổi nào có tác dụng.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Mỗi lần đổi một thứ mới biết tác dụng của từng thay đổi.",
  },
  {
    questionId: "ch12-l06-q03", lessonId: L, conceptId: "batch-lever", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Việc không cần kết quả ngay, số lượng lớn — đòn bẩy chi phí nào phù hợp?",
    options: [
      { id: "a", text: "Message Batches (giảm 50%)", feedback: "Đúng." },
      { id: "b", text: "Gửi yêu cầu nhanh hơn", feedback: "Không giảm chi phí." },
      { id: "c", text: "Tăng max_tokens", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Theo tài liệu Batch processing.",
  },
  {
    questionId: "ch12-l06-q04", lessonId: L, conceptId: "code-over-llm", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Báo cáo đôi khi cộng sai tổng lỗi. Cách sửa tốt nhất?",
    options: [
      { id: "a", text: "Để code tính tổng, Claude chỉ viết phần diễn giải", feedback: "Đúng." },
      { id: "b", text: "Dặn Claude cộng cẩn thận hơn", feedback: "Vẫn để mô hình tính." },
      { id: "c", text: "Bỏ tổng khỏi báo cáo", feedback: "Mất thông tin." },
    ],
    answer: "a",
    explanation: "Phép tính xác định: code vừa rẻ vừa chính xác.",
  },
  {
    questionId: "ch12-l06-q05", lessonId: L, conceptId: "good-enough", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Mọi chỉ số trong điều lệ đã đạt. Nên làm gì tiếp?",
    options: [
      { id: "a", text: "Dừng tối ưu, dành thời gian cho người dùng, tài liệu và bàn giao", feedback: "Đúng." },
      { id: "b", text: "Tối ưu tiếp đến 100%", feedback: "Lợi ích giảm dần, tốn thời gian." },
      { id: "c", text: "Đổi mô hình cho vui", feedback: "Có thể gây hồi quy." },
    ],
    answer: "a",
    explanation: "Đủ tốt theo mục tiêu là đích của dự án.",
  },
  {
    questionId: "ch12-l06-q06", lessonId: L, conceptId: "bottleneck", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Theo số đo dưới đây (so với chỉ số điều lệ), nên tối ưu gì trước?",
    context: { label: "Số đo", content: "Độ chính xác từng trường: ≥ 92% (ngưỡng 90%) — đạt\nChi phí: 30% ngân sách tuần — đạt\nThời gian chạy: 40 giây (ngưỡng 60) — đạt\nThời gian trưởng xưởng tổng hợp: 35 phút/tuần (mục tiêu ≤ 15)", lang: "text" },
    options: [
      { id: "a", text: "Cách dùng: vì sao trưởng xưởng vẫn mất 35 phút — gộp đầu ra, bớt thao tác", feedback: "Đúng." },
      { id: "b", text: "Chi phí API", feedback: "Đã đạt, không phải điểm nghẽn." },
      { id: "c", text: "Độ chính xác lên 99%", feedback: "Đã đạt ngưỡng." },
    ],
    answer: "a",
    explanation: "Điểm nghẽn là chỉ số còn xa mục tiêu.",
  },
  {
    questionId: "ch12-l06-q07", lessonId: L, conceptId: "caching-lever", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Mọi yêu cầu API của bạn đều bắt đầu bằng cùng 30 trang quy chuẩn, sau đó là câu hỏi khác nhau. Đòn bẩy chi phí phù hợp?",
    options: [
      { id: "a", text: "Prompt caching: phần đầu lặp lại được đọc từ cache với giá thấp hơn", feedback: "Đúng." },
      { id: "b", text: "Batches cho mọi câu hỏi kể cả câu cần trả lời ngay", feedback: "Người dùng phải chờ." },
      { id: "c", text: "Bỏ quy chuẩn khỏi prompt", feedback: "Mất căn cứ trả lời." },
    ],
    answer: "a",
    explanation: "Caching giảm giá, không giảm chỗ chiếm trong ngữ cảnh (Chương 8).",
  },
  {
    questionId: "ch12-l06-q08", lessonId: L, conceptId: "model-routing", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Thử mô hình nhỏ hơn cho mọi ghi chú: chi phí giảm nhưng loai_loi giảm dưới ngưỡng. Phương án hợp lý?",
    options: [
      { id: "a", text: "Định tuyến: chỉ dùng mô hình nhỏ cho loại ghi chú đã đo là đạt (ví dụ ghi chú ngắn), còn lại giữ mô hình cũ", feedback: "Đúng." },
      { id: "b", text: "Vẫn dùng mô hình nhỏ cho tất cả vì rẻ", feedback: "Không đạt ngưỡng chất lượng." },
      { id: "c", text: "Bỏ hẳn ý tưởng tiết kiệm", feedback: "Có thể tiết kiệm ở phần dễ." },
    ],
    answer: "a",
    explanation: "Routing: việc dễ sang mô hình nhỏ, sau khi đo riêng.",
  },
  {
    questionId: "ch12-l06-q09", lessonId: L, conceptId: "eval-rerun", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp một vòng tối ưu.",
    items: [
      { id: "a", text: "Ghi mốc hiện trạng" },
      { id: "b", text: "Chọn một điểm nghẽn" },
      { id: "c", text: "Đổi một thứ" },
      { id: "d", text: "Chạy lại cùng bộ mẫu, so từng trường và chi phí" },
      { id: "e", text: "Giữ hoặc hoàn tác, ghi nhật ký" },
    ],
    explanation: "Thí nghiệm có kiểm soát.",
  },
  {
    questionId: "ch12-l06-q10", lessonId: L, conceptId: "trim-context", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Mỗi lần trích xuất, script gửi kèm toàn bộ ghi chú của tháng dù chỉ xử lý ghi chú hôm nay. Cải thiện?",
    options: [
      { id: "a", text: "Chỉ gửi ghi chú cần xử lý (và ví dụ cố định); đo lại để chắc độ chính xác không giảm", feedback: "Đúng." },
      { id: "b", text: "Gửi thêm cả năm cho chắc", feedback: "Tăng token, có thể gây nhiễu." },
      { id: "c", text: "Không thay đổi vì vẫn chạy được", feedback: "Lãng phí token mỗi lần." },
    ],
    answer: "a",
    explanation: "Cắt ngữ cảnh là đòn bẩy rẻ nhất (Chương 8).",
  },
  {
    questionId: "ch12-l06-q11", lessonId: L, conceptId: "accuracy-levers", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép triệu chứng với đòn bẩy phù hợp.",
    pairs: [
      { id: "p1", left: "Sai với từ viết tắt riêng của xưởng", right: "Bảng viết tắt trong prompt" },
      { id: "p2", left: "Tên trường mỗi lần một kiểu", right: "Structured outputs với schema" },
      { id: "p3", left: "Ca khó, mơ hồ, sai lặp lại", right: "Đưa vào hàng chờ cho người" },
      { id: "p4", left: "Tổng số đôi khi sai", right: "Chuyển phép tính sang code" },
    ],
    explanation: "Chọn đòn bẩy theo nguyên nhân.",
  },
  {
    questionId: "ch12-l06-q12", lessonId: L, conceptId: "optimization-log", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Nhật ký tối ưu như dưới đây. Chọn các mục có vấn đề.",
    segments: [
      { id: "s1", text: "03/11 — Thêm bảng viết tắt. so_luong 84% → 93%, trường khác giữ nguyên. Giữ.", isError: false },
      { id: "s2", text: "04/11 — Đổi mô hình, rút gọn prompt, bỏ ví dụ. Chi phí giảm 60%. Giữ.", isError: true, why: "Ba thay đổi cùng lúc, không đo độ chính xác." },
      { id: "s3", text: "05/11 — Thử Batches. Thấy nhanh hơn. Giữ.", isError: true, why: "Không có số đo; Batches giảm chi phí chứ không hứa nhanh hơn." },
      { id: "s4", text: "06/11 — Đã đạt mọi chỉ số điều lệ. Dừng tối ưu.", isError: false },
    ],
    explanation: "Mỗi mục: một thay đổi, số trước/sau, quyết định.",
  },
  {
    questionId: "ch12-l06-q13", lessonId: L, conceptId: "eval-rerun", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Thay đổi mới tăng so_luong từ 84% lên 95% nhưng muc_do giảm từ 95% xuống 87% (ngưỡng 90%). Quyết định?",
    options: [
      { id: "a", text: "Chưa giữ: tìm cách giữ lợi ích so_luong mà không làm muc_do dưới ngưỡng, rồi đo lại", feedback: "Đúng." },
      { id: "b", text: "Giữ vì tổng độ chính xác tăng", feedback: "Một trường rơi dưới ngưỡng là hồi quy." },
      { id: "c", text: "Bỏ đo muc_do", feedback: "Che giấu vấn đề." },
    ],
    answer: "a",
    explanation: "So từng trường để bắt hồi quy.",
  },
  {
    questionId: "ch12-l06-q14", lessonId: L, conceptId: "good-enough", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Còn 1 tuần đến hạn. Độ chính xác 93% (ngưỡng 90%), tài liệu bàn giao chưa viết, người dùng chưa được hướng dẫn. Bạn muốn đẩy độ chính xác lên 97%. Lời khuyên?",
    options: [
      { id: "a", text: "Dừng tối ưu, ưu tiên hướng dẫn người dùng và tài liệu bàn giao; ghi ý tưởng 97% vào phần “bước tiếp theo”", feedback: "Đúng." },
      { id: "b", text: "Dồn hết tuần cuối cho 97%", feedback: "Rủi ro bàn giao không dùng được." },
      { id: "c", text: "Bỏ cả hai, nộp như hiện tại", feedback: "Thiếu bàn giao." },
    ],
    answer: "a",
    explanation: "Giá trị chỉ đến khi người dùng dùng được.",
  },
  {
    questionId: "ch12-l06-q15", lessonId: L, conceptId: "optimization-log", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết một mục nhật ký tối ưu cho tình huống dưới đây.",
    source: "Chi phí tuần 120% ngân sách. Mỗi đêm chạy 2.000 ghi chú bằng gọi thường, sáng mới dùng. Bạn chuyển sang Message Batches. Tuần sau: chi phí 61% ngân sách, báo cáo có trước 6 giờ sáng; bộ mẫu 50 ghi chú cho kết quả giống hệt.",
    rubric: [
      { id: "numbers", label: "Số trước/sau", weight: 1, check: { kind: "allGroups", groups: [["120"], ["61"]] }, pass: "Có số.", fail: "Ghi 120% → 61%." },
      { id: "one", label: "Một thay đổi", weight: 1, check: { kind: "anyKeyword", keywords: ["batches", "batch"] }, pass: "Rõ thay đổi.", fail: "Nêu thay đổi: chuyển sang Message Batches." },
      { id: "regress", label: "Kiểm hồi quy + quyết định", weight: 1, check: { kind: "allGroups", groups: [["bộ mẫu", "50 ghi chú"], ["giữ"]] }, pass: "Có kiểm và quyết định.", fail: "Nêu bộ mẫu không đổi và quyết định giữ." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Ngày 10/11. Điểm nghẽn: chi phí 120% ngân sách tuần.\nThay đổi (một thứ): chuyển chạy đêm 2.000 ghi chú sang Message Batches.\nKết quả: chi phí 61% ngân sách; báo cáo có trước 6 giờ; bộ mẫu 50 ghi chú cho kết quả giống hệt — không hồi quy.\nQuyết định: giữ.",
    explanation: "Điểm nghẽn → một thay đổi → số → kiểm hồi quy → quyết định.",
  },
];
