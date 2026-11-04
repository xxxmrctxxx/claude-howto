import type { Question } from "@/lib/types/content";

const L = "ch08-l07";

/** 15 questions for "So sánh phương pháp làm việc" — 5 beginner, 7 intermediate, 3 advanced. Prices checked 2026-11-03. */
export const questionsCh08L07: Question[] = [
  {
    questionId: "ch08-l07-q01", lessonId: L, conceptId: "workflow-compare", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Quy trình nào thường vừa tốn ít token hơn vừa cho kết quả đáng tin hơn khi sửa lỗi?",
    options: [
      { id: "a", text: "Gửi đúng file liên quan, kết quả test lỗi và yêu cầu cụ thể", feedback: "Đúng." },
      { id: "b", text: "Dán cả dự án rồi hỏi “sửa giúp”", feedback: "Tốn và Claude phải đoán chỗ sửa." },
      { id: "c", text: "Hỏi chung chung rồi sửa dần qua nhiều lượt", feedback: "Mỗi lượt gánh lại toàn bộ lịch sử." },
    ],
    answer: "a",
    explanation: "Nhắm trúng + có phép kiểm tra giúp giảm token và tránh làm lại.",
  },
  {
    questionId: "ch08-l07-q02", lessonId: L, conceptId: "model-choice", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "matching",
    prompt: "Ghép model với loại việc phù hợp (đối chiếu 03/11/2026).",
    pairs: [
      { id: "p1", left: "Haiku 5.5", right: "Subagent làm việc đơn giản" },
      { id: "p2", left: "Sonnet 5.5", right: "Việc code thường ngày, chi phí thấp hơn Opus" },
      { id: "p3", left: "Opus 5.5", right: "Mặc định trên hầu hết gói; suy luận phức tạp" },
      { id: "p4", left: "Fable 5.1", right: "Việc khó nhất, chọn rõ bằng /model fable" },
    ],
    explanation: "Theo Manage costs và Best practices của Claude Code.",
  },
  {
    questionId: "ch08-l07-q03", lessonId: L, conceptId: "batch", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Batch API của Anthropic giảm giá thế nào?",
    options: [
      { id: "a", text: "Giảm 50% cả token đầu vào lẫn đầu ra, đổi lại xử lý không đồng bộ", feedback: "Đúng." },
      { id: "b", text: "Miễn phí hoàn toàn", feedback: "Không — giảm 50%." },
      { id: "c", text: "Chỉ giảm giá đầu ra", feedback: "Giảm cả hai." },
    ],
    answer: "a",
    explanation: "Phù hợp xử lý hàng loạt không cần kết quả ngay (qua API).",
  },
  {
    questionId: "ch08-l07-q04", lessonId: L, conceptId: "false-saving", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Bỏ tiêu chí kiểm tra khỏi prompt cho ngắn hơn là một cách tiết kiệm tốt.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Mất cách biết khi nào xong → dễ làm lại, tốn hơn nhiều so với vài chục token tiết kiệm được.",
  },
  {
    questionId: "ch08-l07-q05", lessonId: L, conceptId: "effort", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Hạ mức effort (/effort) cho một việc đơn giản có tác dụng gì?",
    options: [
      { id: "a", text: "Claude dùng ít thinking hơn nên tốn ít token đầu ra hơn", feedback: "Đúng." },
      { id: "b", text: "Claude đọc ít file hơn", feedback: "Effort tác động chủ yếu đến mức suy luận." },
      { id: "c", text: "Đổi sang model khác", feedback: "Đổi model là /model." },
    ],
    answer: "a",
    explanation: "Thinking tính như token đầu ra; việc đơn giản không cần suy luận sâu.",
  },
  {
    questionId: "ch08-l07-q06", lessonId: L, conceptId: "prompt-caching", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Với Sonnet 5.5 (giá đầu vào $2/MTok), đọc phần prompt từ cache có giá bao nhiêu (bảng giá 03/11/2026)?",
    options: [
      { id: "a", text: "$0,10/MTok — bằng 5% giá đầu vào", feedback: "Đúng." },
      { id: "b", text: "$2/MTok — như thường", feedback: "Đọc cache rẻ hơn nhiều." },
      { id: "c", text: "Miễn phí", feedback: "Có tính phí, nhưng thấp." },
    ],
    answer: "a",
    explanation: "Với Opus 5.5 và Sonnet 5.5, cache hit bằng 5% giá đầu vào; ghi cache 5 phút bằng 1,25 lần.",
  },
  {
    questionId: "ch08-l07-q07", lessonId: L, conceptId: "workflow-compare", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Ước tính tổng token ĐẦU VÀO của hai quy trình dưới đây (bỏ qua câu trả lời). Kết luận nào đúng?",
    context: { label: "Hai quy trình", content: "A: lượt 1 gửi 50.000 token; 4 lượt hỏi lại, mỗi lượt gửi lại toàn bộ (~50.000).\nB: lượt 1 gửi 3.000 token; 1 lượt kiểm tra lại (~3.000).", lang: "text" },
    options: [
      { id: "a", text: "A khoảng 250.000, B khoảng 6.000 — A gấp hơn 40 lần", feedback: "Đúng." },
      { id: "b", text: "Hai quy trình tương đương", feedback: "Lịch sử được gửi lại làm A cộng dồn rất nhanh." },
      { id: "c", text: "B tốn hơn vì có bước kiểm tra", feedback: "Bước kiểm tra rất nhỏ so với gửi lại 50.000 token." },
    ],
    answer: "a",
    explanation: "5 × 50.000 = 250.000 so với 2 × 3.000 = 6.000 (ước tính minh hoạ).",
  },
  {
    questionId: "ch08-l07-q08", lessonId: L, conceptId: "default-model", learningObjective: "o2", thinkingSkill: "remember", difficulty: "intermediate",
    questionType: "true-false",
    statement: "Theo Best practices (03/11/2026), trên hầu hết gói và nhà cung cấp, Claude Code mặc định chạy Opus 5.5 ở mức effort trung bình.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Bạn có thể đổi bằng /model; Sonnet rẻ hơn cho việc thường ngày.",
  },
  {
    questionId: "ch08-l07-q09", lessonId: L, conceptId: "haiku-subagent", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn tạo một subagent chỉ để liệt kê các file khớp một mẫu tên và đếm số dòng. Chọn model nào cho subagent này?",
    options: [
      { id: "a", text: "Haiku", feedback: "Đúng — việc đơn giản, model nhỏ là đủ." },
      { id: "b", text: "Fable 5.1", feedback: "Đắt nhất, không cần cho việc này." },
      { id: "c", text: "Luôn giống model chính, dù việc gì", feedback: "Có thể chọn model riêng cho subagent để tiết kiệm." },
    ],
    answer: "a",
    explanation: "Manage costs gợi ý model: haiku cho subagent làm việc đơn giản.",
  },
  {
    questionId: "ch08-l07-q10", lessonId: L, conceptId: "pilot-test", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn muốn chuyển việc phân loại 5.000 phiếu/tháng từ Sonnet sang Haiku để tiết kiệm. Bước đầu tiên hợp lý?",
    options: [
      { id: "a", text: "Chạy thử Haiku trên 30–50 phiếu đã có đáp án đúng, so tỷ lệ đúng với Sonnet", feedback: "Đúng." },
      { id: "b", text: "Chuyển ngay toàn bộ, có lỗi thì tính sau", feedback: "Có thể tạo hàng trăm phân loại sai." },
      { id: "c", text: "Không bao giờ dùng Haiku", feedback: "Haiku có thể đủ tốt với việc đơn giản — cần đo." },
    ],
    answer: "a",
    explanation: "Chỉ hạ chi phí khi đã chứng minh chất lượng vẫn đạt.",
  },
  {
    questionId: "ch08-l07-q11", lessonId: L, conceptId: "batch", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Ứng dụng của bạn gọi API để tóm tắt 10.000 biên bản mỗi đêm; kết quả chỉ cần trước 8h sáng. Cách giảm chi phí phù hợp?",
    options: [
      { id: "a", text: "Gửi qua Batch API để được giảm 50%", feedback: "Đúng — việc không gấp, xử lý hàng loạt." },
      { id: "b", text: "Gửi từng yêu cầu ngay lập tức với model đắt nhất", feedback: "Tốn mà không cần." },
      { id: "c", text: "Gộp cả 10.000 biên bản vào một prompt", feedback: "Context khổng lồ, có thể vượt giới hạn và giảm chất lượng." },
    ],
    answer: "a",
    explanation: "Batch API giảm 50% cả đầu vào và đầu ra cho xử lý không đồng bộ.",
  },
  {
    questionId: "ch08-l07-q12", lessonId: L, conceptId: "model-choice", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn cần Claude thiết kế phương án tách một hệ thống lớn thành nhiều dịch vụ, nhiều ràng buộc đan xen. Chọn model nào?",
    options: [
      { id: "a", text: "Opus 5.5 (hoặc Fable 5.1 nếu cần mức mạnh nhất)", feedback: "Đúng — việc cần suy luận sâu, sai thì làm lại rất tốn." },
      { id: "b", text: "Haiku 5.5 cho rẻ", feedback: "Tiết kiệm sai: việc kiến trúc cần suy luận nhiều bước." },
      { id: "c", text: "Model nào cũng như nhau", feedback: "Model khác nhau về khả năng và giá." },
    ],
    answer: "a",
    explanation: "Manage costs: dành Opus cho quyết định kiến trúc phức tạp và suy luận nhiều bước.",
  },
  {
    questionId: "ch08-l07-q13", lessonId: L, conceptId: "false-saving", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Danh sách “mẹo tiết kiệm” dưới đây có những mẹo gây hại. Hãy chọn chúng.",
    segments: [
      { id: "s1", text: "Bỏ chạy test sau khi sửa để đỡ tốn token.", isError: true, why: "Mất bằng chứng đúng sai; lỗi lọt ra sau tốn hơn." },
      { id: "s2", text: "/clear giữa các việc không liên quan.", isError: false },
      { id: "s3", text: "Dùng Haiku cho phân tích kiến trúc phức tạp.", isError: true, why: "Việc cần suy luận sâu — dễ phải làm lại." },
      { id: "s4", text: "Lọc log trước khi đưa cho Claude.", isError: false },
    ],
    explanation: "Tiết kiệm đúng là bớt phần thừa, không bớt phần kiểm chứng hay năng lực cần thiết.",
  },
  {
    questionId: "ch08-l07-q14", lessonId: L, conceptId: "fable", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trong Claude Code, Claude Fable 5.1 được dùng thế nào (đối chiếu 03/11/2026)?",
    options: [
      { id: "a", text: "Chọn rõ bằng /model fable khi cần; giá cao nhất ($10/$50 mỗi MTok)", feedback: "Đúng." },
      { id: "b", text: "Là model mặc định cho mọi việc", feedback: "Mặc định trên hầu hết gói là Opus 5.5." },
      { id: "c", text: "Miễn phí cho mọi gói", feedback: "Không có thông tin như vậy." },
    ],
    answer: "a",
    explanation: "Best practices: Fable 5.1 có sẵn khi bạn chọn rõ bằng /model fable.",
  },
  {
    questionId: "ch08-l07-q15", lessonId: L, conceptId: "workflow-compare", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết đề xuất ngắn cho trưởng nhóm: so sánh chi phí đầu vào hằng tháng của hai quy trình và nêu khác biệt về chất lượng.",
    source: "Quy trình A: trung bình 120.000 token đầu vào/ngày. Quy trình B: 30.000 token đầu vào/ngày, có chạy test sau mỗi thay đổi. Sonnet 5.5: $2/MTok đầu vào; 22 ngày làm việc/tháng.",
    rubric: [
      { id: "a", label: "A ≈ $5,28/tháng", weight: 1, check: { kind: "regex", pattern: "5[.,]28\\b" }, pass: "A đúng.", fail: "A: 0,12 × $2 = $0,24/ngày × 22 = $5,28." },
      { id: "b", label: "B ≈ $1,32/tháng", weight: 1, check: { kind: "regex", pattern: "1[.,]32\\b" }, pass: "B đúng.", fail: "B: 0,03 × $2 = $0,06/ngày × 22 = $1,32." },
      { id: "quality", label: "Nêu khác biệt chất lượng", weight: 1, check: { kind: "anyKeyword", keywords: ["chất lượng", "kiểm chứng", "chạy test", "làm lại"] }, pass: "Có so sánh chất lượng.", fail: "Nêu B có chạy test → ít làm lại." },
      { id: "rec", label: "Có đề xuất", weight: 1, check: { kind: "anyKeyword", keywords: ["đề xuất", "nên", "khuyến nghị"] }, pass: "Có đề xuất.", fail: "Kết thúc bằng một đề xuất rõ ràng." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Chi phí đầu vào (Sonnet 5.5, giá 03/11/2026):\n- A: 120.000/1.000.000 × $2 = $0,24/ngày → × 22 = $5,28/tháng.\n- B: 30.000/1.000.000 × $2 = $0,06/ngày → × 22 = $1,32/tháng.\nChất lượng: B chạy test sau mỗi thay đổi nên lỗi được bắt sớm, ít phải làm lại; A không có kiểm chứng.\nĐề xuất: nhóm nên chuyển sang quy trình B; đây là ước tính chưa gồm token đầu ra.",
    explanation: "Đề xuất thuyết phục có số liệu, có chất lượng và có khuyến nghị rõ ràng.",
  },
];
