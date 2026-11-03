import type { Question } from "@/lib/types/content";

const L = "ch03-l05";

/** 15 questions for "Chain-of-thought ở mức phù hợp" — 5 beginner, 6 intermediate, 4 advanced. */
export const questionsCh03L05: Question[] = [
  {
    questionId: "ch03-l05-q01", lessonId: L, conceptId: "cot", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Chain-of-thought là gì?",
    options: [
      { id: "a", text: "Để mô hình suy luận qua các bước trung gian trước khi đưa ra kết luận", feedback: "Đúng." },
      { id: "b", text: "Nối nhiều cuộc hội thoại thành một", feedback: "Không phải." },
      { id: "c", text: "Một loại model riêng của Claude", feedback: "Đây là kỹ thuật, không phải model." },
    ],
    answer: "a",
    explanation: "Suy luận qua các bước giúp xử lý tốt hơn các vấn đề nhiều bước và cho phép kiểm tra lập luận khi được trình bày ra.",
  },
  {
    questionId: "ch03-l05-q02", lessonId: L, conceptId: "adaptive-thinking", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    prompt: "Đúng hay sai? (theo tài liệu Anthropic tháng 11/2026)",
    statement: "Với Claude Opus 5.5 và Claude Fable 5.1, chế độ suy nghĩ thích ứng luôn bật, và Claude tự điều chỉnh mức suy nghĩ theo độ phức tạp của câu hỏi.",
    answer: true,
    explanation: "Đúng. Câu hỏi dễ không cần suy nghĩ thì Claude trả lời trực tiếp; câu phức tạp thì suy nghĩ nhiều hơn.",
  },
  {
    questionId: "ch03-l05-q03", lessonId: L, conceptId: "when-show-steps", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Trường hợp nào NÊN yêu cầu Claude trình bày các bước trong câu trả lời? Chọn tất cả.",
    options: [
      { id: "a", text: "Tính chi phí dầu cho 12 máy với đơn giá khác nhau", feedback: "Đúng — nhiều phép tính cần kiểm tra." },
      { id: "b", text: "Chấm điểm 3 nhà cung cấp theo tiêu chí có trọng số", feedback: "Đúng." },
      { id: "c", text: "Đổi “xin chào” sang tiếng Anh", feedback: "Việc đơn giản, hỏi thẳng là đủ." },
      { id: "d", text: "Ước tính thời gian hoàn thành dự án từ tiến độ từng hạng mục", feedback: "Đúng." },
    ],
    answer: ["a", "b", "d"],
    explanation: "Trình bày các bước có giá trị khi có tính toán, nhiều tiêu chí hoặc cần kiểm tra trước khi dùng kết quả.",
  },
  {
    questionId: "ch03-l05-q04", lessonId: L, conceptId: "separate-reasoning", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao nên tách phần các bước và phần kết luận (ví dụ bằng thẻ <cac_buoc> và <ket_luan>)?",
    options: [
      { id: "a", text: "Đọc kết luận nhanh, vẫn soát được lập luận khi cần", feedback: "Đúng." },
      { id: "b", text: "Để câu trả lời luôn đúng", feedback: "Tách phần giúp kiểm tra, không bảo đảm đúng." },
      { id: "c", text: "Vì Claude không trả lời được nếu thiếu thẻ", feedback: "Không đúng." },
    ],
    answer: "a",
    explanation: "Dùng thẻ hoặc tiêu đề để định hướng cấu trúc đầu ra là cách được Anthropic gợi ý để kiểm soát định dạng.",
  },
  {
    questionId: "ch03-l05-q05", lessonId: L, conceptId: "prompt-chaining", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền thuật ngữ tiếng Anh.",
    template: "Chia một nhiệm vụ thành nhiều prompt nối tiếp, đầu ra bước trước làm đầu vào bước sau, gọi là prompt [[b1]].",
    blanks: [{ id: "b1", accepted: ["chaining", "chain"], width: 9 }],
    explanation: "Prompt chaining hữu ích khi bạn cần xem kết quả giữa chừng hoặc áp một quy trình cố định.",
  },
  {
    questionId: "ch03-l05-q06", lessonId: L, conceptId: "overthinking", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn cách sửa phù hợp.",
    context: {
      label: "Tình huống",
      content: "Prompt dùng hằng ngày để đổi đơn vị (kVA → MVA) có thêm câu “Hãy phân tích thật kỹ mọi khía cạnh trước khi trả lời”. Câu trả lời chậm và dài vô ích.",
    },
    options: [
      { id: "a", text: "Bỏ yêu cầu phân tích kỹ cho việc đơn giản; nếu cần, nhắc trả lời trực tiếp", feedback: "Đúng — tránh suy nghĩ quá mức." },
      { id: "b", text: "Thêm “phân tích kỹ hơn nữa”", feedback: "Làm tình hình tệ hơn." },
      { id: "c", text: "Yêu cầu trình bày 10 bước", feedback: "Việc đổi đơn vị không cần nhiều bước." },
    ],
    answer: "a",
    explanation: "Anthropic lưu ý suy nghĩ thêm làm tăng độ trễ và chỉ nên dùng khi thật sự cải thiện chất lượng.",
  },
  {
    questionId: "ch03-l05-q07", lessonId: L, conceptId: "verify-reasoning", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Claude trình bày các bước tính tỷ lệ lỗi. Dữ liệu: Chuyền A 1.200 sp / 18 lỗi; Chuyền B 950 sp / 21 lỗi. Chọn bước SAI.",
    segments: [
      { id: "s1", text: "Bước 1: Tỷ lệ lỗi A = 18 / 1.200 = 1,5%.", isError: false },
      { id: "s2", text: "Bước 2: Tỷ lệ lỗi B = 21 / 950 = 1,2%.", isError: true, why: "21 / 950 ≈ 2,2%, không phải 1,2%." },
      { id: "s3", text: "Bước 3: So sánh hai tỷ lệ.", isError: false },
      { id: "s4", text: "Kết luận: Chuyền A cần ưu tiên vì tỷ lệ lỗi cao hơn.", isError: true, why: "Kết luận sai do bước 2 sai — B (≈2,2%) mới cao hơn A (1,5%)." },
    ],
    explanation: "Đây là lợi ích của việc trình bày các bước: bạn tìm ra đúng chỗ sai thay vì chỉ thấy kết luận sai.",
  },
  {
    questionId: "ch03-l05-q08", lessonId: L, conceptId: "when-show-steps", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bạn cần ước tính khối lượng dầu phải mua cho đợt bảo dưỡng 12 máy, mỗi máy dung tích khác nhau. Prompt nào phù hợp nhất?",
    options: [
      { id: "a", text: "Dán bảng dung tích, yêu cầu tính từng máy trong một phần riêng, rồi nêu tổng trong phần kết luận", feedback: "Đúng — kiểm tra được từng phép tính." },
      { id: "b", text: "“Cần mua bao nhiêu dầu?”", feedback: "Thiếu dữ liệu và không kiểm tra được." },
      { id: "c", text: "“Đoán nhanh khối lượng dầu”", feedback: "Không phù hợp với việc mua hàng." },
    ],
    answer: "a",
    explanation: "Dữ liệu + các bước hiển thị + kết luận tách riêng là mẫu phù hợp cho mọi phép tính dùng để ra quyết định.",
  },
  {
    questionId: "ch03-l05-q09", lessonId: L, conceptId: "self-correction", learningObjective: "o4", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp các bước của mẫu tự sửa (self-correction) bằng chuỗi prompt.",
    items: [
      { id: "s1", text: "Prompt 1: viết bản nháp" },
      { id: "s2", text: "Prompt 2: rà soát bản nháp theo tiêu chí đã định" },
      { id: "s3", text: "Prompt 3: hoàn thiện dựa trên kết quả rà soát" },
      { id: "s4", text: "Bạn kiểm tra bản cuối trước khi dùng" },
    ],
    explanation: "Anthropic: mẫu chuỗi phổ biến nhất là tự sửa — nháp → rà soát theo tiêu chí → hoàn thiện; mỗi bước tách riêng để có thể ghi lại, đánh giá hoặc rẽ nhánh.",
  },
  {
    questionId: "ch03-l05-q10", lessonId: L, conceptId: "adaptive-thinking", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Vì sao với các model Claude hiện tại, bạn không cần lúc nào cũng thêm “hãy suy nghĩ từng bước”?",
    options: [
      { id: "a", text: "Vì Claude đã có khả năng suy nghĩ thích ứng, tự suy nghĩ nhiều hơn với câu hỏi phức tạp", feedback: "Đúng." },
      { id: "b", text: "Vì Claude không bao giờ cần suy nghĩ", feedback: "Sai — câu hỏi phức tạp vẫn cần suy luận." },
      { id: "c", text: "Vì câu đó bị cấm", feedback: "Không bị cấm; chỉ là không phải lúc nào cũng cần." },
    ],
    answer: "a",
    explanation: "Bạn vẫn nên yêu cầu trình bày các bước khi cần KIỂM TRA lập luận — đó là mục đích khác với việc giúp Claude suy nghĩ.",
  },
  {
    questionId: "ch03-l05-q11", lessonId: L, conceptId: "prompt-chaining", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép mỗi nhiệm vụ với cách giao việc phù hợp nhất.",
    // Reviewed: shares only the "match each task…" stem with ch03-l03-q08 (roles); content differs.
    reviewedDistinctFrom: ["ch03-l03-q08"],
    pairs: [
      { id: "direct", left: "Viết lại tiêu đề email cho ngắn gọn", right: "Hỏi thẳng" },
      { id: "steps", left: "Tính chênh lệch sản lượng 3 ca so với kế hoạch", right: "Yêu cầu trình bày các bước" },
      { id: "chain", left: "Soạn quy trình mới: khảo sát → nháp → rà soát an toàn → hoàn thiện", right: "Chuỗi prompt" },
    ],
    explanation: "Độ phức tạp và nhu cầu xem kết quả giữa chừng quyết định cách giao việc.",
  },
  {
    questionId: "ch03-l05-q12", lessonId: L, conceptId: "separate-reasoning", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "predict-output",
    prompt: "Với prompt dưới đây, cấu trúc câu trả lời đúng yêu cầu là gì?",
    context: {
      label: "Prompt",
      lang: "text",
      content: "Chấm điểm 3 nhà cung cấp theo giá (40%), giao hàng (30%), bảo hành (30%).\nTrình bày cách chấm trong <cac_buoc>.\nNêu nhà cung cấp đề xuất trong <ket_luan>, tối đa 2 câu.",
    },
    options: [
      { id: "a", text: "Phần <cac_buoc> có điểm từng tiêu chí và tổng có trọng số; phần <ket_luan> 1–2 câu nêu đề xuất", feedback: "Đúng." },
      { id: "b", text: "Chỉ một cái tên nhà cung cấp", feedback: "Thiếu phần các bước được yêu cầu." },
      { id: "c", text: "Một bài luận dài không chia phần", feedback: "Không theo cấu trúc yêu cầu." },
    ],
    answer: "a",
    explanation: "Cấu trúc tách phần giúp vừa đọc nhanh kết luận vừa kiểm tra được cách chấm điểm.",
  },
  {
    questionId: "ch03-l05-q13", lessonId: L, conceptId: "cot", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Khi Claude đã trình bày đầy đủ các bước, kết luận chắc chắn đúng nên không cần kiểm tra lại.",
    answer: false,
    explanation: "Sai. Các bước vẫn có thể chứa lỗi (ví dụ phép chia sai). Giá trị của các bước là giúp bạn tìm ra lỗi nhanh hơn.",
  },
  {
    questionId: "ch03-l05-q14", lessonId: L, conceptId: "separate-reasoning", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại prompt để lập luận kiểm tra được và kết luận tách riêng.",
    source: "Dự án lắp đặt trạm biến áp có kịp hạn 30/12 không? (tiến độ các hạng mục dán bên dưới)",
    rubric: [
      { id: "data", label: "Dùng dữ liệu tiến độ", weight: 1, check: { kind: "anyKeyword", keywords: ["tiến độ", "bảng", "dữ liệu", "dưới đây", "hạng mục"] }, pass: "Có dữ liệu.", fail: "Nêu rõ dùng dữ liệu tiến độ các hạng mục." },
      { id: "steps", label: "Yêu cầu các bước", weight: 1, check: { kind: "anyKeyword", keywords: ["các bước", "từng hạng mục", "từng bước", "cách tính"] }, pass: "Có yêu cầu các bước.", fail: "Yêu cầu tính thời gian còn lại của từng hạng mục." },
      { id: "separate", label: "Tách kết luận", weight: 1, check: { kind: "regex", pattern: "(<\\s*ket_luan|<\\s*cac_buoc|phan ket luan|tach rieng|ket luan:)" }, pass: "Có tách kết luận.", fail: "Tách kết luận ra phần riêng." },
      { id: "unknown", label: "Cho phép nêu thiếu dữ liệu", weight: 1, check: { kind: "anyKeyword", keywords: ["không đủ", "thiếu dữ liệu", "nói rõ", "giả định"] }, pass: "Có xử lý thiếu dữ liệu.", fail: "Yêu cầu nêu rõ giả định hoặc dữ liệu còn thiếu." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Dưới đây là bảng tiến độ các hạng mục dự án lắp đặt trạm biến áp.\nHãy đánh giá dự án có kịp hạn 30/12 không.\nTrong <cac_buoc>: với từng hạng mục, tính số ngày còn lại theo tốc độ hiện tại và xác định đường găng.\nTrong <ket_luan>: kịp/không kịp, trễ bao nhiêu ngày, tối đa 3 câu.\nNếu thiếu dữ liệu để tính, hãy nói rõ giả định bạn dùng.",
    explanation: "Câu hỏi có/không về tiến độ là quyết định có hệ quả — cần lập luận hiển thị và kết luận tách riêng.",
  },
  {
    questionId: "ch03-l05-q15", lessonId: L, conceptId: "prompt-chaining", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Nhiệm vụ thực tế: thiết kế chuỗi 3 prompt để làm báo cáo QA tháng.",
    source: "Báo cáo QA tháng cần: tổng hợp số liệu, viết nhận xét, và được rà soát theo tiêu chí của trưởng phòng (đúng số liệu, ngắn gọn, có đề xuất). Viết 3 prompt nối tiếp, nói rõ đầu vào/đầu ra mỗi bước.",
    rubric: [
      { id: "three", label: "Có 3 bước/prompt", weight: 1, check: { kind: "regex", pattern: "(prompt|buoc)\\s*3" }, pass: "Có đủ 3 bước.", fail: "Viết rõ Prompt 1, Prompt 2, Prompt 3." },
      { id: "review", label: "Có bước rà soát theo tiêu chí", weight: 1, check: { kind: "allGroups", groups: [["rà soát", "kiểm tra", "đánh giá"], ["tiêu chí"]] }, pass: "Có bước rà soát theo tiêu chí.", fail: "Thêm bước rà soát bản nháp theo tiêu chí." },
      { id: "io", label: "Nêu đầu vào/đầu ra", weight: 1, check: { kind: "anyKeyword", keywords: ["đầu vào", "đầu ra", "kết quả của prompt", "dùng kết quả"] }, pass: "Có đầu vào/đầu ra.", fail: "Nói rõ mỗi prompt nhận gì và trả gì." },
      { id: "refine", label: "Có bước hoàn thiện", weight: 1, check: { kind: "anyKeyword", keywords: ["hoàn thiện", "sửa", "chỉnh sửa", "bản cuối"] }, pass: "Có bước hoàn thiện.", fail: "Thêm bước hoàn thiện theo kết quả rà soát." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Prompt 1 (đầu vào: bảng số liệu tháng): Tổng hợp số lỗi theo công đoạn và viết bản nháp nhận xét, tối đa 200 từ. Đầu ra: bản nháp.\nPrompt 2 (đầu vào: bản nháp + bảng số liệu): Rà soát bản nháp theo 3 tiêu chí: đúng số liệu, ngắn gọn, có đề xuất. Liệt kê lỗi cần sửa. Đầu ra: danh sách góp ý.\nPrompt 3 (đầu vào: bản nháp + góp ý): Hoàn thiện báo cáo theo góp ý. Đầu ra: bản cuối để tôi kiểm tra.",
    explanation: "Chuỗi prompt cho phép xem và can thiệp ở từng giai đoạn — đúng mẫu nháp → rà soát → hoàn thiện.",
  },
];
