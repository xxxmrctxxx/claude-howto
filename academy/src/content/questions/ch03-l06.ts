import type { Question } from "@/lib/types/content";

const L = "ch03-l06";

/** 15 questions for "Prompt có cấu trúc" — 5 beginner, 6 intermediate, 4 advanced. */
export const questionsCh03L06: Question[] = [
  {
    questionId: "ch03-l06-q01", lessonId: L, conceptId: "xml-tags", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Theo Anthropic, thẻ XML trong prompt giúp gì?",
    options: [
      { id: "a", text: "Giúp Claude đọc prompt không nhập nhằng khi có nhiều loại nội dung (chỉ dẫn, bối cảnh, ví dụ, dữ liệu)", feedback: "Đúng." },
      { id: "b", text: "Bắt buộc phải có, thiếu thì Claude báo lỗi", feedback: "Không bắt buộc." },
      { id: "c", text: "Làm Claude trả lời nhanh hơn", feedback: "Mục đích là giảm hiểu nhầm, không phải tốc độ." },
    ],
    answer: "a",
    explanation: "Bọc mỗi loại nội dung trong thẻ riêng giảm khả năng hiểu nhầm.",
  },
  {
    questionId: "ch03-l06-q02", lessonId: L, conceptId: "long-doc-order", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Với tài liệu dài, Anthropic khuyên đặt tài liệu ở đầu prompt và đặt câu hỏi, chỉ dẫn ở phía sau.",
    answer: true,
    explanation: "Đúng — thử nghiệm cho thấy đặt câu hỏi ở cuối có thể cải thiện chất lượng tới 30%, nhất là với nhiều tài liệu phức tạp.",
  },
  {
    questionId: "ch03-l06-q03", lessonId: L, conceptId: "multi-doc", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền tên thẻ.",
    template: "Khi có nhiều tài liệu, bọc mỗi tài liệu trong thẻ <[[b1]]> với các thẻ con <source> và <document_content>.",
    blanks: [{ id: "b1", accepted: ["document"], width: 9 }],
    explanation: "Cấu trúc gợi ý: <documents> chứa nhiều <document>, mỗi cái có <source> và <document_content>.",
  },
  {
    questionId: "ch03-l06-q04", lessonId: L, conceptId: "tag-naming", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Nguyên tắc đặt tên thẻ nào đúng?",
    options: [
      { id: "a", text: "Tên mô tả đúng nội dung và dùng nhất quán trong các prompt", feedback: "Đúng." },
      { id: "b", text: "Phải dùng đúng một bộ tên thẻ chuẩn duy nhất do Anthropic quy định", feedback: "Không có bộ tên bắt buộc." },
      { id: "c", text: "Đặt tên ngẫu nhiên như <a1>, <b2> cho gọn", feedback: "Tên không mô tả nội dung gây khó hiểu." },
    ],
    answer: "a",
    explanation: "Anthropic: dùng tên thẻ nhất quán, mô tả rõ; lồng thẻ khi nội dung có cấp bậc.",
  },
  {
    questionId: "ch03-l06-q05", lessonId: L, conceptId: "quote-first", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao với tài liệu dài nên yêu cầu Claude trích nguyên văn đoạn liên quan trước khi trả lời?",
    options: [
      { id: "a", text: "Giúp Claude tập trung vào phần liên quan, bỏ qua phần còn lại, và giúp bạn kiểm chứng", feedback: "Đúng." },
      { id: "b", text: "Để câu trả lời dài hơn", feedback: "Không phải mục đích." },
      { id: "c", text: "Vì Claude không đọc được tài liệu nếu không trích dẫn", feedback: "Không đúng." },
    ],
    answer: "a",
    explanation: "Đây là kỹ thuật “ground responses in quotes” trong hướng dẫn long context.",
  },
  {
    questionId: "ch03-l06-q06", lessonId: L, conceptId: "nesting", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Cách lồng thẻ nào đúng cho 2 tài liệu?",
    options: [
      { id: "a", text: "<documents> chứa 2 <document>; mỗi <document> chứa <source> và <document_content>", feedback: "Đúng." },
      { id: "b", text: "<source> chứa <documents>, bên trong là nội dung", feedback: "Đảo ngược cấp bậc." },
      { id: "c", text: "Hai <document_content> đặt liền nhau, không có nguồn", feedback: "Mất thông tin nguồn, khó trích dẫn." },
    ],
    answer: "a",
    explanation: "Lồng thẻ phản ánh cấp bậc: tập tài liệu → từng tài liệu → nguồn và nội dung.",
  },
  {
    questionId: "ch03-l06-q07", lessonId: L, conceptId: "xml-tags", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Chọn các dòng có lỗi cấu trúc trong prompt.",
    segments: [
      { id: "s1", text: "<du_lieu> …bảng số liệu tuần 44… </du_lieu>", isError: false },
      { id: "s2", text: "<vi_du> …mẫu báo cáo… </du_lieu>", isError: true, why: "Thẻ mở <vi_du> nhưng đóng bằng </du_lieu> — không khớp." },
      { id: "s3", text: "Hãy tổng hợp số lỗi theo công đoạn.", isError: false },
      { id: "s4", text: "<du_lieu> Hãy viết ngắn gọn </du_lieu>", isError: true, why: "Chỉ dẫn bị đặt nhầm vào thẻ dữ liệu." },
    ],
    explanation: "Thẻ phải mở/đóng khớp nhau và chứa đúng loại nội dung mà tên thẻ mô tả.",
  },
  {
    questionId: "ch03-l06-q08", lessonId: L, conceptId: "long-doc-order", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn bố cục tốt nhất.",
    context: { label: "Tình huống", content: "Bạn có hợp đồng 50 trang và câu hỏi: “Mức phạt giao hàng trễ là bao nhiêu?”" },
    options: [
      { id: "a", text: "Hợp đồng trong thẻ ở đầu, sau đó yêu cầu trích điều khoản liên quan, câu hỏi ở cuối", feedback: "Đúng." },
      { id: "b", text: "Câu hỏi ở đầu, hợp đồng dán phía sau không có thẻ", feedback: "Ngược với khuyến nghị cho tài liệu dài." },
      { id: "c", text: "Chia hợp đồng thành 50 tin nhắn, mỗi tin một trang", feedback: "Không cần thiết, khó theo dõi." },
    ],
    answer: "a",
    explanation: "Tài liệu dài ở đầu, câu hỏi ở cuối, kèm trích dẫn trước để có căn cứ.",
  },
  {
    questionId: "ch03-l06-q09", lessonId: L, conceptId: "output-tags", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Với prompt dưới đây, câu trả lời đúng yêu cầu có cấu trúc thế nào?",
    context: { label: "Prompt", lang: "text", content: "…tài liệu…\nTóm tắt biên bản trong <tom_tat> (tối đa 5 dòng).\nLiệt kê rủi ro chưa xử lý trong <rui_ro>." },
    options: [
      { id: "a", text: "Hai phần riêng: <tom_tat> tối đa 5 dòng và <rui_ro> chứa danh sách rủi ro", feedback: "Đúng." },
      { id: "b", text: "Một đoạn văn trộn tóm tắt và rủi ro", feedback: "Không theo cấu trúc yêu cầu." },
      { id: "c", text: "Chỉ có <rui_ro>", feedback: "Thiếu phần tóm tắt." },
    ],
    answer: "a",
    explanation: "Thẻ đầu ra cho phép bạn đọc nhanh đúng phần cần, hoặc để phần mềm tách tự động.",
  },
  {
    questionId: "ch03-l06-q10", lessonId: L, conceptId: "multi-doc", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép mỗi thành phần cấu trúc với nội dung nên đặt vào.",
    pairs: [
      { id: "docs", left: "<documents>", right: "Toàn bộ tập tài liệu" },
      { id: "doc", left: "<document index=\"2\">", right: "Tài liệu thứ hai" },
      { id: "src", left: "<source>", right: "Tên file hoặc nguồn của tài liệu" },
      { id: "content", left: "<document_content>", right: "Nội dung văn bản của tài liệu" },
    ],
    explanation: "Thuộc tính index và thẻ source giúp trích dẫn chính xác tài liệu nào, ở đâu.",
  },
  {
    questionId: "ch03-l06-q11", lessonId: L, conceptId: "quote-first", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn cách sửa phù hợp nhất.",
    context: {
      label: "Tình huống",
      content: "Bạn dán tiêu chuẩn kỹ thuật 300 trang và hỏi về thử nghiệm độ tăng nhiệt. Câu trả lời trộn lẫn thông tin từ các chương không liên quan (đóng gói, vận chuyển).",
    },
    options: [
      { id: "a", text: "Yêu cầu trích nguyên văn các đoạn về thử nghiệm độ tăng nhiệt trước, rồi chỉ trả lời dựa trên các đoạn đó", feedback: "Đúng — giúp Claude tập trung vào phần liên quan." },
      { id: "b", text: "Dán thêm một tiêu chuẩn khác để Claude có nhiều thông tin hơn", feedback: "Thêm tài liệu không liên quan làm loãng context." },
      { id: "c", text: "Đặt câu hỏi ở đầu, tài liệu ở cuối", feedback: "Ngược khuyến nghị cho tài liệu dài." },
    ],
    answer: "a",
    explanation: "Trích dẫn trước giúp Claude tập trung vào phần liên quan và bỏ qua phần còn lại của tài liệu dài.",
  },
  {
    questionId: "ch03-l06-q12", lessonId: L, conceptId: "long-doc-order", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "single-choice",
    prompt: "Hai đồng nghiệp viết prompt phân tích 3 báo cáo dài (tổng ~60.000 token). Prompt nào theo đúng khuyến nghị hơn?",
    options: [
      { id: "a", text: "A: 3 báo cáo trong <documents> ở đầu, mỗi cái có <source>; câu hỏi và yêu cầu định dạng ở cuối", feedback: "Đúng." },
      { id: "b", text: "B: câu hỏi ở đầu, 3 báo cáo dán liền nhau ở cuối, không thẻ", feedback: "Ngược khuyến nghị và khó phân biệt tài liệu." },
      { id: "c", text: "Hai cách như nhau", feedback: "Thử nghiệm của Anthropic cho thấy thứ tự có ảnh hưởng." },
    ],
    answer: "a",
    explanation: "Với nhiều tài liệu dài: tài liệu có cấu trúc ở đầu, câu hỏi ở cuối.",
  },
  {
    questionId: "ch03-l06-q13", lessonId: L, conceptId: "tag-naming", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Đánh giá tình huống.",
    context: {
      label: "Tình huống",
      content: "Thư viện prompt của nhóm dùng lẫn lộn <data>, <du_lieu>, <input>, <bang> cho cùng một loại nội dung, và chỉ dẫn lúc thì nói “dữ liệu trong <data>”, lúc thì “trong bảng”.",
    },
    options: [
      { id: "a", text: "Nên thống nhất một tên thẻ cho mỗi loại nội dung và cập nhật chỉ dẫn tham chiếu đúng tên đó", feedback: "Đúng." },
      { id: "b", text: "Không sao vì Claude hiểu mọi tên", feedback: "Không nhất quán làm tăng khả năng hiểu nhầm và khó bảo trì." },
      { id: "c", text: "Bỏ hết thẻ đi", feedback: "Mất lợi ích của việc tách nội dung." },
    ],
    answer: "a",
    explanation: "Nhất quán giúp chỉ dẫn tham chiếu đúng phần nội dung và giúp cả nhóm bảo trì prompt.",
  },
  {
    questionId: "ch03-l06-q14", lessonId: L, conceptId: "multi-doc", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại prompt dưới đây theo cấu trúc nhiều tài liệu, câu hỏi đặt cuối.",
    source: "So sánh quy trình kiểm tra cũ và mới xem có bước nào bị bỏ không: [dán quy trình cũ] [dán quy trình mới]",
    rubric: [
      { id: "docs", label: "Có <documents>/<document>", weight: 1, check: { kind: "regex", pattern: "<\\s*documents?\\b" }, pass: "Có cấu trúc tài liệu.", fail: "Bọc hai quy trình bằng <documents>/<document>." },
      { id: "source", label: "Có nguồn cho từng tài liệu", weight: 1, check: { kind: "minMatches", pattern: "<\\s*source\\s*>", value: 2 }, pass: "Có nguồn cho cả hai.", fail: "Mỗi tài liệu cần <source>." },
      { id: "order", label: "Câu hỏi sau tài liệu", weight: 1, check: { kind: "regex", pattern: "<\\s*/\\s*documents\\s*>[\\s\\S]*(so sanh|liet ke|bo|hay)" }, pass: "Câu hỏi ở cuối.", fail: "Đặt câu hỏi sau </documents>." },
      { id: "specific", label: "Câu hỏi cụ thể", weight: 1, check: { kind: "anyKeyword", keywords: ["bị bỏ", "thiếu", "khác nhau", "liệt kê"] }, pass: "Câu hỏi cụ thể.", fail: "Nêu rõ cần tìm bước bị bỏ/thay đổi." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "<documents>\n  <document index=\"1\">\n    <source>quy_trinh_kiem_tra_cu.docx</source>\n    <document_content>…</document_content>\n  </document>\n  <document index=\"2\">\n    <source>quy_trinh_kiem_tra_moi.docx</source>\n    <document_content>…</document_content>\n  </document>\n</documents>\nHãy so sánh hai quy trình và liệt kê các bước có trong quy trình cũ nhưng bị bỏ ở quy trình mới. Với mỗi bước, trích nguyên văn từ tài liệu 1. Trình bày bảng: Bước | Trích dẫn | Ghi chú.",
    explanation: "Tách hai tài liệu có nguồn, câu hỏi cụ thể ở cuối, yêu cầu trích dẫn để kiểm chứng.",
  },
  {
    questionId: "ch03-l06-q15", lessonId: L, conceptId: "quote-first", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Nhiệm vụ thực tế: viết prompt rà soát quy định an toàn nội bộ theo kỹ thuật trích dẫn trước.",
    source: "Bạn cần kiểm tra quy định an toàn điện nội bộ (40 trang) có yêu cầu đeo găng cách điện khi thao tác tủ hạ thế không, và ở điều khoản nào.",
    rubric: [
      { id: "doc", label: "Tài liệu trong thẻ ở đầu", weight: 1, check: { kind: "regex", pattern: "^\\s*<\\s*(document|documents|tai_lieu|quy_dinh)" }, pass: "Tài liệu ở đầu, trong thẻ.", fail: "Bắt đầu prompt bằng tài liệu trong thẻ." },
      { id: "quote", label: "Trích nguyên văn trước", weight: 1, check: { kind: "anyKeyword", keywords: ["trích nguyên văn", "trích dẫn", "nguyên văn"] }, pass: "Có trích dẫn trước.", fail: "Yêu cầu trích nguyên văn các điều khoản liên quan." },
      { id: "none", label: "Xử lý khi không có", weight: 1, check: { kind: "anyKeyword", keywords: ["không tìm thấy", "không có", "nói rõ", "ghi rõ"] }, pass: "Có xử lý khi không tìm thấy.", fail: "Yêu cầu ghi rõ nếu không tìm thấy điều khoản." },
      { id: "question", label: "Câu hỏi cụ thể", weight: 1, check: { kind: "anyKeyword", keywords: ["găng", "tủ hạ thế", "điều khoản"] }, pass: "Câu hỏi cụ thể.", fail: "Nêu rõ câu hỏi về găng cách điện và tủ hạ thế." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "<document>\n  <source>quy_dinh_an_toan_dien_2026.pdf</source>\n  <document_content>…</document_content>\n</document>\nTrước tiên, trích nguyên văn mọi điều khoản liên quan đến găng cách điện hoặc thao tác tủ hạ thế trong <trich_dan>, kèm số điều. Nếu không tìm thấy, ghi rõ \"Không tìm thấy\".\nSau đó, chỉ dựa trên các trích dẫn, trả lời: quy định có yêu cầu đeo găng cách điện khi thao tác tủ hạ thế không, ở điều khoản nào? Kết luận trong <ket_luan>, tối đa 2 câu.",
    explanation: "Tài liệu ở đầu + trích dẫn trước + câu hỏi cụ thể ở cuối + xử lý trường hợp không có.",
  },
];
