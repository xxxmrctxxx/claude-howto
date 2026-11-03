import type { Question } from "@/lib/types/content";

const L = "ch03-l04";

/** 15 questions for "Few-shot prompting" — 5 beginner, 6 intermediate, 4 advanced. */
export const questionsCh03L04: Question[] = [
  {
    questionId: "ch03-l04-q01", lessonId: L, conceptId: "few-shot", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Few-shot prompting là gì?",
    options: [
      { id: "a", text: "Đưa vào prompt vài ví dụ mẫu gồm đầu vào và đầu ra mong muốn", feedback: "Đúng." },
      { id: "b", text: "Gửi prompt nhiều lần liên tiếp", feedback: "Không phải." },
      { id: "c", text: "Viết prompt thật ngắn, ít chữ", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Few-shot (multishot) dùng ví dụ để cho Claude thấy kết quả mong muốn trông như thế nào.",
  },
  {
    questionId: "ch03-l04-q02", lessonId: L, conceptId: "example-count", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền số còn thiếu theo gợi ý của Anthropic.",
    template: "Để có kết quả tốt nhất, Anthropic gợi ý dùng khoảng [[b1]] đến 5 ví dụ.",
    blanks: [{ id: "b1", accepted: ["3", "ba"], width: 4 }],
    explanation: "Tài liệu: “Include 3–5 examples for best results.”",
  },
  {
    questionId: "ch03-l04-q03", lessonId: L, conceptId: "example-tags", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Anthropic khuyên bọc mỗi ví dụ trong thẻ nào?",
    options: [
      { id: "a", text: "<example> (nhiều ví dụ đặt trong <examples>)", feedback: "Đúng." },
      { id: "b", text: "<bold>", feedback: "Không phải." },
      { id: "c", text: "Không cần thẻ, cứ viết liền vào chỉ dẫn", feedback: "Thẻ giúp Claude phân biệt ví dụ với chỉ dẫn." },
    ],
    answer: "a",
    explanation: "Bọc ví dụ trong <example> giúp Claude phân biệt ví dụ với chỉ dẫn.",
  },
  {
    questionId: "ch03-l04-q04", lessonId: L, conceptId: "when-to-use", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Những việc nào được lợi nhiều nhất từ việc thêm ví dụ? Chọn tất cả.",
    options: [
      { id: "a", text: "Chuẩn hoá mô tả lỗi về một định dạng cố định", feedback: "Đúng — ví dụ cho thấy định dạng." },
      { id: "b", text: "Viết email theo đúng giọng văn của công ty", feedback: "Đúng — ví dụ truyền tải giọng văn." },
      { id: "c", text: "Gắn nhãn phản hồi khách hàng theo bộ nhãn riêng", feedback: "Đúng." },
      { id: "d", text: "Hỏi một định nghĩa phổ thông như “điện áp là gì”", feedback: "Câu hỏi đơn giản thường không cần ví dụ." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Ví dụ mạnh nhất khi bạn cần kiểm soát định dạng, giọng văn hoặc quy tắc phân loại riêng.",
  },
  {
    questionId: "ch03-l04-q05", lessonId: L, conceptId: "relevance", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Ví dụ trong prompt nên phản ánh sát trường hợp sử dụng thật của bạn.",
    answer: true,
    explanation: "Đúng — “Relevant: Mirror your actual use case closely.”",
  },
  {
    questionId: "ch03-l04-q06", lessonId: L, conceptId: "diversity", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn cách sửa phù hợp.",
    context: {
      label: "Tình huống",
      content: "Cả 4 ví dụ tóm tắt biên bản bạn đưa đều rất ngắn (1 dòng) và đều về họp giao ban. Khi tóm tắt biên bản họp dự án dài 10 trang, Claude cũng chỉ trả 1 dòng.",
    },
    options: [
      { id: "a", text: "Thay bằng bộ ví dụ đa dạng về loại cuộc họp và độ dài, kèm chỉ dẫn độ dài theo từng trường hợp", feedback: "Đúng." },
      { id: "b", text: "Thêm 10 ví dụ ngắn nữa", feedback: "Càng củng cố mẫu “1 dòng”." },
      { id: "c", text: "Bỏ chỉ dẫn, chỉ giữ ví dụ", feedback: "Không giải quyết thiếu đa dạng." },
    ],
    answer: "a",
    explanation: "Ví dụ thiếu đa dạng khiến Claude học nhầm một mẫu (luôn 1 dòng) mà bạn không định dạy.",
  },
  {
    questionId: "ch03-l04-q07", lessonId: L, conceptId: "unintended-patterns", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Cả 3 ví dụ email đều mở đầu bằng “Kính gửi Quý khách,” và kết thúc bằng “Trân trọng cảm ơn!”. Bạn dự đoán gì về email mới?",
    context: { label: "Yêu cầu mới", content: "Viết email nội bộ nhắc đồng nghiệp nộp báo cáo ca." },
    options: [
      { id: "a", text: "Nhiều khả năng cũng mở đầu “Kính gửi Quý khách,” — dù đây là email nội bộ", feedback: "Đúng — Claude bắt chước mẫu lặp lại trong ví dụ." },
      { id: "b", text: "Chắc chắn mở đầu bằng “Chào bạn”", feedback: "Không có ví dụ nào như vậy." },
      { id: "c", text: "Claude bỏ qua hoàn toàn các ví dụ", feedback: "Ví dụ có ảnh hưởng mạnh tới đầu ra." },
    ],
    answer: "a",
    explanation: "Ví dụ cần đủ khác nhau để Claude không nhặt phải các mẫu ngoài ý muốn (unintended patterns).",
  },
  {
    questionId: "ch03-l04-q08", lessonId: L, conceptId: "label-quality", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Nhãn đúng: Khen / Phàn nàn / Hỏi thông tin. Chọn các ví dụ có NHÃN SAI.",
    segments: [
      { id: "s1", text: "“Lắp đặt gọn gàng, kỹ thuật viên thân thiện.” → Khen", isError: false },
      { id: "s2", text: "“Hàng giao thiếu 2 bộ sứ xuyên.” → Hỏi thông tin", isError: true, why: "Đây là Phàn nàn." },
      { id: "s3", text: "“Có hỗ trợ lắp đặt ngoài giờ không?” → Hỏi thông tin", isError: false },
      { id: "s4", text: "“Máy kêu ù rất to từ tuần trước.” → Khen", isError: true, why: "Đây là Phàn nàn." },
    ],
    explanation: "Claude học từ ví dụ — nhãn sai trong ví dụ có thể dẫn tới phân loại sai trên dữ liệu thật.",
  },
  {
    questionId: "ch03-l04-q09", lessonId: L, conceptId: "example-tags", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép mỗi thẻ với nội dung nên đặt bên trong.",
    pairs: [
      { id: "ex", left: "<example>", right: "Một cặp đầu vào → đầu ra mẫu" },
      { id: "exs", left: "<examples>", right: "Tập hợp nhiều ví dụ" },
      { id: "in", left: "<input>", right: "Dữ liệu thật cần xử lý lần này" },
      { id: "ins", left: "<instructions>", right: "Chỉ dẫn nhiệm vụ" },
    ],
    explanation: "Đặt tên thẻ nhất quán, mô tả đúng nội dung giúp Claude không nhầm ví dụ với dữ liệu thật hay chỉ dẫn.",
  },
  {
    questionId: "ch03-l04-q10", lessonId: L, conceptId: "generate-examples", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bạn chỉ có 1 ví dụ mẫu. Cách nào phù hợp với gợi ý của Anthropic?",
    options: [
      { id: "a", text: "Nhờ Claude tạo thêm ví dụ đa dạng dựa trên ví dụ đầu, rồi bạn duyệt và sửa trước khi dùng", feedback: "Đúng." },
      { id: "b", text: "Copy ví dụ đó 5 lần", feedback: "Ví dụ trùng lặp không giúp đa dạng." },
      { id: "c", text: "Dùng ví dụ Claude tạo mà không cần đọc lại", feedback: "Ví dụ là “dữ liệu dạy” — cần được duyệt." },
    ],
    answer: "a",
    explanation: "Anthropic: bạn có thể nhờ Claude đánh giá ví dụ về độ liên quan và đa dạng, hoặc tạo thêm ví dụ từ bộ ban đầu.",
  },
  {
    questionId: "ch03-l04-q11", lessonId: L, conceptId: "diversity", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bộ 4 ví dụ nào ĐA DẠNG nhất cho nhiệm vụ chuẩn hoá tên vật tư?",
    options: [
      { id: "a", text: "Tên viết tắt, tên lẫn tiếng Anh, tên có lỗi chính tả, tên đã chuẩn sẵn", feedback: "Đúng — bao nhiều kiểu đầu vào thật." },
      { id: "b", text: "Bốn tên viết tắt của cùng một loại bulông", feedback: "Quá giống nhau." },
      { id: "c", text: "Bốn tên đã chuẩn sẵn", feedback: "Không dạy được cách xử lý đầu vào lộn xộn." },
    ],
    answer: "a",
    explanation: "Đa dạng nghĩa là bao phủ các kiểu đầu vào khác nhau bạn thực sự gặp, kể cả trường hợp khó.",
  },
  {
    questionId: "ch03-l04-q12", lessonId: L, conceptId: "few-shot", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Đánh giá cách làm sau.",
    context: {
      label: "Tình huống",
      content: "Bạn cần 10 khẩu hiệu an toàn thật khác nhau và đưa đúng 1 ví dụ mẫu. Cả 10 khẩu hiệu nhận được đều na ná ví dụ.",
    },
    options: [
      { id: "a", text: "Một ví dụ đơn lẻ kéo kết quả về một mẫu; nên đưa ví dụ đa dạng hoặc nói rõ ví dụ chỉ minh hoạ độ dài, cần ý tưởng khác nhau", feedback: "Đúng." },
      { id: "b", text: "Few-shot luôn làm kết quả tốt hơn, nên cứ giữ nguyên", feedback: "Ví dụ cũng có thể thu hẹp sự đa dạng nếu dùng không đúng." },
      { id: "c", text: "Đổi sang model mạnh hơn là đủ", feedback: "Nguyên nhân nằm ở cách dùng ví dụ." },
    ],
    answer: "a",
    explanation: "Ví dụ là công cụ mạnh — đủ mạnh để khiến kết quả bám theo nó. Hãy chọn ví dụ phù hợp mục tiêu.",
  },
  {
    questionId: "ch03-l04-q13", lessonId: L, conceptId: "label-quality", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Một vài ví dụ có nhãn sai trong prompt không sao, vì Claude sẽ tự nhận ra và bỏ qua chúng.",
    answer: false,
    explanation: "Sai. Ví dụ là tín hiệu mạnh; nhãn sai có thể khiến Claude áp dụng sai quy tắc. Hãy kiểm tra từng ví dụ.",
  },
  {
    questionId: "ch03-l04-q14", lessonId: L, conceptId: "example-tags", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại prompt dưới đây: tách chỉ dẫn, ví dụ (trong thẻ) và dữ liệu cần xử lý.",
    source: "Đổi tên vật tư cho chuẩn ví dụ bu long M12 thành Bulông M12x50 còn vd dau BA thành Dầu biến áp loại I đây là danh sách: gioang NBR, su xuyen 24kv, tem nhan",
    rubric: [
      { id: "tags", label: "Ví dụ trong thẻ", weight: 1, check: { kind: "regex", pattern: "<\\s*(example|examples|vi_du|vidu)" }, pass: "Có thẻ ví dụ.", fail: "Bọc ví dụ trong <example>." },
      { id: "count", label: "Có từ 2 ví dụ", weight: 1, check: { kind: "minMatches", pattern: "<\\s*(example|vi_du|vidu)\\s*>", value: 2 }, pass: "Có nhiều ví dụ.", fail: "Đưa ít nhất 2 ví dụ, mỗi ví dụ một thẻ." },
      { id: "input", label: "Dữ liệu cần xử lý tách riêng", weight: 1, check: { kind: "regex", pattern: "<\\s*(input|du_lieu|dulieu|danh_sach)" }, pass: "Có tách dữ liệu.", fail: "Đặt danh sách cần chuẩn hoá trong thẻ riêng." },
      { id: "instruction", label: "Có chỉ dẫn rõ", weight: 1, check: { kind: "anyKeyword", keywords: ["chuẩn hoá", "chuẩn hóa", "đổi tên", "chuyển"] }, pass: "Có chỉ dẫn.", fail: "Viết một câu chỉ dẫn rõ ở đầu." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Chuẩn hoá tên vật tư theo mẫu trong các ví dụ (viết đầy đủ, có dấu, kèm quy cách).\n<examples>\n<example>Đầu vào: bu long M12 → Đầu ra: Bulông M12x50</example>\n<example>Đầu vào: dau BA → Đầu ra: Dầu biến áp loại I</example>\n</examples>\n<input>\ngioang NBR\nsu xuyen 24kv\ntem nhan\n</input>\nTrả về mỗi dòng một tên đã chuẩn hoá.",
    explanation: "Prompt gốc trộn chỉ dẫn, ví dụ và dữ liệu vào một câu — Claude dễ nhầm đâu là ví dụ, đâu là việc cần làm.",
  },
  {
    questionId: "ch03-l04-q15", lessonId: L, conceptId: "relevance", learningObjective: "o2", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Nhiệm vụ thực tế: viết prompt few-shot phân loại phiếu báo lỗi vào 3 nhóm: Vật liệu / Thao tác / Thiết bị.",
    source: "Đội QA muốn Claude phân loại hàng trăm phiếu báo lỗi mỗi tuần. Viết prompt với ít nhất 3 ví dụ sát thực tế (mỗi nhóm một ví dụ) trong thẻ, và chỗ đặt dữ liệu thật.",
    rubric: [
      { id: "labels", label: "Nêu đủ 3 nhóm", weight: 1, check: { kind: "allGroups", groups: [["vật liệu"], ["thao tác"], ["thiết bị"]] }, pass: "Có đủ 3 nhóm.", fail: "Nêu đủ 3 nhóm: Vật liệu, Thao tác, Thiết bị." },
      { id: "count", label: "Có ít nhất 3 ví dụ trong thẻ", weight: 1, check: { kind: "minMatches", pattern: "<\\s*(example|vi_du|vidu)\\s*>", value: 3 }, pass: "Có từ 3 ví dụ.", fail: "Cần ít nhất 3 ví dụ trong thẻ <example>." },
      { id: "input", label: "Có chỗ cho dữ liệu thật", weight: 1, check: { kind: "regex", pattern: "<\\s*(input|du_lieu|dulieu|phieu)" }, pass: "Có chỗ cho dữ liệu.", fail: "Thêm thẻ <input> cho phiếu cần phân loại." },
      { id: "realistic", label: "Ví dụ sát thực tế sản xuất", weight: 1, check: { kind: "anyKeyword", keywords: ["dầu", "sơn", "gioăng", "máy", "dây", "lắp", "cuộn", "bulông", "hàn"] }, pass: "Ví dụ sát thực tế.", fail: "Dùng ví dụ từ lỗi thật trong xưởng." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Phân loại mỗi phiếu báo lỗi vào đúng một nhóm: Vật liệu / Thao tác / Thiết bị.\n<examples>\n<example>Phiếu: Gioăng cao su lô 0925 bị nứt khi lắp → Nhóm: Vật liệu</example>\n<example>Phiếu: Siết bulông nắp máy chưa đủ lực theo quy định → Nhóm: Thao tác</example>\n<example>Phiếu: Máy quấn dây số 2 đếm sai số vòng → Nhóm: Thiết bị</example>\n</examples>\n<input>…dán các phiếu…</input>\nTrả về bảng: Mã phiếu | Nhóm | Lý do ngắn.",
    explanation: "Ví dụ cho mỗi nhóm, lấy từ lỗi thật, giúp Claude học đúng ranh giới giữa các nhóm.",
  },
];
