import type { Question } from "@/lib/types/content";

const L = "ch03-l08";

/** 15 questions for "Thực hành tối ưu prompt" — 5 beginner, 6 intermediate, 4 advanced. */
export const questionsCh03L08: Question[] = [
  {
    questionId: "ch03-l08-q01", lessonId: L, conceptId: "success-criteria", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Theo tài liệu Anthropic, cần có gì TRƯỚC KHI bắt đầu tối ưu prompt? Chọn tất cả.",
    options: [
      { id: "a", text: "Tiêu chí thành công rõ ràng cho trường hợp sử dụng", feedback: "Đúng." },
      { id: "b", text: "Cách kiểm tra thực nghiệm theo các tiêu chí đó", feedback: "Đúng." },
      { id: "c", text: "Một bản nháp prompt đầu tiên", feedback: "Đúng." },
      { id: "d", text: "Model đắt nhất", feedback: "Không phải điều kiện cần." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Mục “Before prompt engineering” trong Prompt engineering overview liệt kê đúng ba điều này.",
  },
  {
    questionId: "ch03-l08-q02", lessonId: L, conceptId: "success-criteria", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Tiêu chí nào ĐO ĐƯỢC?",
    options: [
      { id: "a", text: "“Tóm tắt tối đa 5 dòng và có đủ 3 mục: quyết định, việc cần làm, người phụ trách”", feedback: "Đúng." },
      { id: "b", text: "“Tóm tắt thật hay”", feedback: "Cảm tính." },
      { id: "c", text: "“Sếp thấy ưng”", feedback: "Không kiểm tra được trước." },
    ],
    answer: "a",
    explanation: "Tiêu chí đo được cho phép chấm điểm khách quan và so sánh các phiên bản.",
  },
  {
    questionId: "ch03-l08-q03", lessonId: L, conceptId: "test-set", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Khi so sánh hai phiên bản prompt, nên chạy cả hai trên cùng một bộ mẫu thử.",
    answer: true,
    explanation: "Đúng. Đổi bộ mẫu giữa các lần thử thì không biết khác biệt đến từ prompt hay từ mẫu.",
  },
  {
    questionId: "ch03-l08-q04", lessonId: L, conceptId: "one-change", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao mỗi lần chỉ nên thay đổi MỘT điểm trong prompt?",
    options: [
      { id: "a", text: "Để biết chính xác thay đổi nào làm kết quả tốt lên hay kém đi", feedback: "Đúng." },
      { id: "b", text: "Vì Claude chỉ đọc được một thay đổi", feedback: "Không đúng." },
      { id: "c", text: "Để tiết kiệm thời gian gõ phím", feedback: "Không phải lý do." },
    ],
    answer: "a",
    explanation: "Giống thử nghiệm kỹ thuật: thay nhiều biến cùng lúc thì không quy được kết quả cho biến nào.",
  },
  {
    questionId: "ch03-l08-q05", lessonId: L, conceptId: "console", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền tên công cụ.",
    template: "Anthropic cung cấp Claude [[b1]] — công cụ trên trình duyệt để soạn và thử prompt.",
    blanks: [{ id: "b1", accepted: ["Console"], width: 8 }],
    explanation: "Trang Models overview giới thiệu Claude Console: “Craft and test prompts directly in your browser.”",
  },
  {
    questionId: "ch03-l08-q06", lessonId: L, conceptId: "not-prompt-problem", learningObjective: "o4", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn hướng xử lý phù hợp nhất.",
    context: {
      label: "Tình huống",
      content: "Chatbot hỗ trợ nội bộ trả lời đúng nhưng mất quá lâu cho câu hỏi đơn giản; bạn đã chỉnh prompt nhiều lần mà độ trễ gần như không đổi.",
    },
    options: [
      { id: "a", text: "Cân nhắc model nhanh hơn cho loại câu hỏi này — độ trễ có khi cải thiện dễ hơn bằng chọn model", feedback: "Đúng — theo Prompt engineering overview." },
      { id: "b", text: "Tiếp tục thêm chữ “trả lời nhanh lên” vào prompt", feedback: "Không giải quyết nguyên nhân." },
      { id: "c", text: "Bỏ toàn bộ prompt", feedback: "Mất chất lượng câu trả lời." },
    ],
    answer: "a",
    explanation: "Anthropic: không phải tiêu chí nào cũng giải bằng prompt; độ trễ và chi phí đôi khi xử lý dễ hơn bằng chọn model khác.",
  },
  {
    questionId: "ch03-l08-q07", lessonId: L, conceptId: "versioning", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Một dòng trong sổ phiên bản prompt nên ghi những gì? Chọn tất cả.",
    options: [
      { id: "a", text: "Số phiên bản và ngày", feedback: "Đúng." },
      { id: "b", text: "Thay đổi duy nhất so với phiên bản trước", feedback: "Đúng." },
      { id: "c", text: "Kết quả trên bộ mẫu thử theo tiêu chí", feedback: "Đúng." },
      { id: "d", text: "Cảm giác “hình như tốt hơn”", feedback: "Cảm giác không thay được số liệu." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Sổ phiên bản cho phép quay lại phiên bản tốt và hiểu vì sao nó tốt.",
  },
  {
    questionId: "ch03-l08-q08", lessonId: L, conceptId: "test-set", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Bộ mẫu thử tốt cho prompt tóm tắt biên bản nên gồm những loại nào? Chọn tất cả.",
    options: [
      { id: "a", text: "Biên bản điển hình thường gặp", feedback: "Đúng." },
      { id: "b", text: "Biên bản khó: rất dài, nhiều người phát biểu", feedback: "Đúng." },
      { id: "c", text: "Biên bản từng bị tóm tắt sai trước đây", feedback: "Đúng — kiểm tra lỗi cũ đã được sửa chưa." },
      { id: "d", text: "Chỉ một biên bản đẹp nhất", feedback: "Một mẫu không đại diện." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Bộ mẫu đại diện giúp phát hiện cả cải thiện lẫn kém đi.",
  },
  {
    questionId: "ch03-l08-q09", lessonId: L, conceptId: "self-review", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn cách làm phù hợp cho đầu ra quan trọng.",
    context: {
      label: "Tình huống",
      content: "Báo cáo gửi khách hàng thỉnh thoảng thiếu một trong 4 mục bắt buộc, dù prompt đã liệt kê đủ.",
    },
    options: [
      { id: "a", text: "Thêm bước rà soát: một prompt kiểm tra bản nháp theo 4 mục bắt buộc, rồi một prompt hoàn thiện", feedback: "Đúng — chuỗi tự rà soát." },
      { id: "b", text: "Viết các mục bắt buộc bằng chữ in hoa", feedback: "Không có bước kiểm tra." },
      { id: "c", text: "Chấp nhận và tự sửa tay mỗi lần", feedback: "Tốn công và dễ sót." },
    ],
    answer: "a",
    explanation: "Mẫu nháp → rà soát theo tiêu chí → hoàn thiện giúp bắt lỗi thiếu mục một cách có hệ thống.",
  },
  {
    questionId: "ch03-l08-q10", lessonId: L, conceptId: "one-change", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Dựa trên sổ phiên bản dưới đây, bạn nên dùng phiên bản nào?",
    context: {
      label: "Sổ phiên bản (cùng 10 mẫu thử)",
      content: "v1 bản nháp: 4/10\nv2 thêm người đọc: 7/10\nv3 thêm 3 ví dụ: 9/10\nv4 rút gọn chỉ dẫn: 8/10",
    },
    options: [
      { id: "a", text: "v3 — kết quả tốt nhất; v4 là bước lùi nên quay lại v3", feedback: "Đúng." },
      { id: "b", text: "v4 — vì là phiên bản mới nhất", feedback: "Mới nhất không có nghĩa là tốt nhất." },
      { id: "c", text: "v1 — vì ngắn nhất", feedback: "Kết quả thấp nhất." },
    ],
    answer: "a",
    explanation: "Sổ phiên bản giúp nhận ra bước lùi (regression) và quay lại phiên bản tốt.",
  },
  {
    questionId: "ch03-l08-q11", lessonId: L, conceptId: "success-criteria", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép mỗi mong muốn mơ hồ với tiêu chí đo được tương ứng.",
    pairs: [
      { id: "short", left: "“Ngắn gọn”", right: "Tối đa 120 từ" },
      { id: "complete", left: "“Đầy đủ”", right: "Có đủ 4 mục bắt buộc" },
      { id: "accurate", left: "“Chính xác”", right: "Mọi con số khớp dữ liệu gốc" },
      { id: "format", left: "“Dễ đọc”", right: "Bảng 3 cột + 3 gạch đầu dòng" },
    ],
    explanation: "Chuyển mong muốn thành tiêu chí đo được là bước đầu tiên của tối ưu có hệ thống.",
  },
  {
    questionId: "ch03-l08-q12", lessonId: L, conceptId: "not-prompt-problem", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Đánh giá tình huống và chọn hướng đúng.",
    context: {
      label: "Tình huống",
      content: "Báo cáo tồn kho do Claude soạn luôn thiếu số liệu kho Bắc Ninh. Đồng nghiệp đã sửa prompt 6 lần. Kiểm tra lại thì file dữ liệu gửi kèm không có sheet Bắc Ninh.",
    },
    options: [
      { id: "a", text: "Vấn đề nằm ở dữ liệu đầu vào — bổ sung dữ liệu, không phải sửa prompt", feedback: "Đúng." },
      { id: "b", text: "Sửa prompt thêm lần thứ 7", feedback: "Prompt không thể tạo ra dữ liệu không có." },
      { id: "c", text: "Đổi sang model mạnh nhất", feedback: "Model không biết dữ liệu không được cung cấp." },
    ],
    answer: "a",
    explanation: "Trước khi tối ưu prompt, xác định nguyên nhân gốc: prompt, model, hay dữ liệu.",
  },
  {
    questionId: "ch03-l08-q13", lessonId: L, conceptId: "test-set", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Một prompt cho kết quả tốt trên một lần thử duy nhất là đủ để đưa vào dùng hằng ngày cho cả nhóm.",
    answer: false,
    explanation: "Sai. Một lần thử không đại diện cho các trường hợp thật; cần kiểm tra trên bộ mẫu có cả trường hợp khó.",
  },
  {
    questionId: "ch03-l08-q14", lessonId: L, conceptId: "prompt-library", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Nhiệm vụ thực tế: viết một mục thư viện prompt hoàn chỉnh để đồng nghiệp dùng lại.",
    source: "Viết mục thư viện cho prompt “soạn email trả lời khách hàng hỏi về bảo hành”, gồm: tên, phiên bản và ngày, mục đích, kết quả thử, giới hạn đã biết, và nội dung prompt.",
    rubric: [
      { id: "version", label: "Có phiên bản và ngày", weight: 1, check: { kind: "regex", pattern: "(v\\d|phien ban\\s*\\d)[\\s\\S]*\\d{1,2}/\\d{1,2}" }, pass: "Có phiên bản và ngày.", fail: "Ghi phiên bản (v1, v2…) và ngày." },
      { id: "purpose", label: "Có mục đích", weight: 1, check: { kind: "anyKeyword", keywords: ["mục đích", "dùng để", "dùng cho"] }, pass: "Có mục đích.", fail: "Nêu prompt dùng cho việc gì." },
      { id: "results", label: "Có kết quả thử", weight: 1, check: { kind: "regex", pattern: "\\d+\\s*/\\s*\\d+|ket qua thu" }, pass: "Có kết quả thử.", fail: "Ghi kết quả thử, ví dụ 9/10 mẫu đạt." },
      { id: "limits", label: "Có giới hạn đã biết", weight: 1, check: { kind: "anyKeyword", keywords: ["giới hạn", "lưu ý", "chưa xử lý", "không phù hợp"] }, pass: "Có giới hạn đã biết.", fail: "Ghi các trường hợp prompt chưa xử lý tốt." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Tên: Email trả lời câu hỏi bảo hành\nPhiên bản: v3 (03/11/2026)\nMục đích: dùng cho nhân viên CSKH trả lời khách hỏi về điều kiện và thời hạn bảo hành.\nKết quả thử: 9/10 email mẫu đạt 4 tiêu chí (đúng điều khoản, lịch sự, ≤ 150 từ, có hotline).\nGiới hạn đã biết: chưa xử lý tốt trường hợp khách khiếu nại kèm đòi bồi thường → chuyển trưởng nhóm.\nPrompt: Bạn là nhân viên CSKH… (dán điều khoản bảo hành)…",
    explanation: "Mục thư viện đầy đủ giúp người khác dùng đúng prompt, đúng việc, và biết khi nào không nên dùng.",
  },
  {
    questionId: "ch03-l08-q15", lessonId: L, conceptId: "success-criteria", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Nhiệm vụ thực tế: lập kế hoạch đánh giá cho prompt phân loại email khách hàng.",
    source: "Prompt phân loại email vào 4 nhóm (Đặt hàng, Khiếu nại, Hỏi kỹ thuật, Khác). Viết: ít nhất 3 tiêu chí đo được, mô tả bộ mẫu thử (số lượng, thành phần), và ngưỡng để đưa vào sử dụng.",
    rubric: [
      { id: "criteria", label: "Có ít nhất 3 tiêu chí", weight: 1, check: { kind: "minMatches", pattern: "(^|\\n|\\s)[1-9][.)]\\s", value: 3 }, pass: "Có từ 3 tiêu chí.", fail: "Liệt kê ít nhất 3 tiêu chí đánh số." },
      { id: "testset", label: "Bộ mẫu có số lượng và thành phần", weight: 1, check: { kind: "allGroups", groups: [["mẫu", "email"], ["khó", "mỗi nhóm", "từng nhóm", "lẫn"]] }, pass: "Có mô tả bộ mẫu.", fail: "Nêu số mẫu, có mẫu khó và đủ các nhóm." },
      { id: "threshold", label: "Có ngưỡng đưa vào sử dụng", weight: 1, check: { kind: "regex", pattern: "(nguong|toi thieu|it nhat|>=|≥)\\s*\\d|\\d+\\s*%" }, pass: "Có ngưỡng.", fail: "Nêu ngưỡng, ví dụ đúng ≥ 95% trên bộ mẫu." },
      { id: "labels", label: "Nhắc đủ 4 nhóm", weight: 1, check: { kind: "allGroups", groups: [["đặt hàng"], ["khiếu nại"], ["kỹ thuật"]] }, pass: "Có nhắc các nhóm.", fail: "Gắn kế hoạch với các nhóm phân loại." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Tiêu chí:\n1. Phân loại đúng nhóm (so với nhãn do người gán).\n2. Mỗi email chỉ một nhãn trong 4 nhóm: Đặt hàng, Khiếu nại, Hỏi kỹ thuật, Khác.\n3. Email lẫn nhiều ý được gán theo ý cần xử lý gấp nhất.\nBộ mẫu thử: 40 email thật, mỗi nhóm 8 email điển hình và 8 email khó (lẫn nhiều ý, viết tắt, sai chính tả).\nNgưỡng: đúng ≥ 95% trên bộ mẫu và không có email Khiếu nại nào bị gán nhầm thì mới đưa vào sử dụng.",
    explanation: "Có tiêu chí, bộ mẫu đại diện và ngưỡng rõ ràng thì quyết định dùng prompt dựa trên số liệu, không dựa trên cảm giác.",
  },
];
