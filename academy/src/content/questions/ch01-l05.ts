import type { Question } from "@/lib/types/content";

const L = "ch01-l05";

/** 15 questions for "Những giới hạn của AI" — 5 beginner, 6 intermediate, 4 advanced. */
export const questionsCh01L05: Question[] = [
  {
    questionId: "ch01-l05-q01", lessonId: L, conceptId: "knowledge-cutoff", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "“Knowledge cutoff” (mốc kiến thức) của một model là gì?",
    options: [
      { id: "a", text: "Thời điểm đến đó kiến thức của model rộng và đáng tin cậy nhất", feedback: "Đúng." },
      { id: "b", text: "Số câu hỏi tối đa mỗi ngày", feedback: "Không — đó là giới hạn sử dụng." },
      { id: "c", text: "Thời điểm model bị ngừng hỗ trợ", feedback: "Đó là retirement, khái niệm khác." },
    ],
    answer: "a",
    explanation: "Thông tin xuất hiện sau mốc kiến thức có thể không có hoặc không chính xác trong câu trả lời của model.",
  },
  {
    questionId: "ch01-l05-q02", lessonId: L, conceptId: "context-window", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Câu trả lời mà Claude tạo ra cũng được tính vào context window, không chỉ phần bạn gửi.",
    answer: true,
    explanation: "Đúng. Theo tài liệu, context window gồm toàn bộ văn bản model tham chiếu, kể cả câu trả lời đang được tạo.",
  },
  {
    questionId: "ch01-l05-q03", lessonId: L, conceptId: "context-window", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền cụm từ Anthropic dùng để ví von context window.",
    template: "Anthropic mô tả context window như “[[b1]]” của model — khác với kho dữ liệu lớn dùng để huấn luyện.",
    blanks: [{ id: "b1", accepted: ["bộ nhớ làm việc", "working memory", "bo nho lam viec", "trí nhớ làm việc"], width: 16 }],
    explanation: "Context window là bộ nhớ làm việc: những gì model đang “nhìn thấy” trong lượt này.",
  },
  {
    questionId: "ch01-l05-q04", lessonId: L, conceptId: "no-access", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bạn hỏi: “Đọc email mới nhất trong hộp thư của tôi.” nhưng chưa kết nối hộp thư. Điều gì xảy ra?",
    options: [
      { id: "a", text: "Claude không đọc được hộp thư; bạn cần dán nội dung hoặc kết nối công cụ (nếu có và được phép)", feedback: "Đúng." },
      { id: "b", text: "Claude tự đăng nhập vào hộp thư của bạn", feedback: "Không có quyền truy cập nào được cấp." },
      { id: "c", text: "Claude đoán nội dung email", feedback: "Nếu làm vậy thì đó là thông tin bịa — không được tin." },
    ],
    answer: "a",
    explanation: "Claude chỉ làm việc với những gì nằm trong context hoặc qua công cụ đã được kết nối và cho phép.",
  },
  {
    questionId: "ch01-l05-q05", lessonId: L, conceptId: "reliability", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Nếu Claude trả lời rất tự tin và chi tiết thì câu trả lời đó chắc chắn đúng.",
    answer: false,
    explanation: "Sai. Văn phong tự tin không chứng minh tính chính xác; thông tin quan trọng cần được kiểm chứng.",
  },
  {
    questionId: "ch01-l05-q06", lessonId: L, conceptId: "context-rot", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Theo Anthropic, vì sao “nhiều context hơn” không tự động tốt hơn?",
    options: [
      { id: "a", text: "Khi số token tăng, độ chính xác và khả năng nhớ lại có thể giảm (context rot)", feedback: "Đúng." },
      { id: "b", text: "Vì Claude chỉ đọc 100 từ đầu tiên", feedback: "Không đúng." },
      { id: "c", text: "Vì tài liệu dài làm Claude từ chối trả lời", feedback: "Không phải lý do." },
    ],
    answer: "a",
    explanation: "Tài liệu Context windows: chọn lọc nội dung đưa vào context quan trọng không kém dung lượng còn trống.",
  },
  {
    questionId: "ch01-l05-q07", lessonId: L, conceptId: "overflow", learningObjective: "o2", thinkingSkill: "remember", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Khi gọi Claude API mà đầu vào đã vượt context window của model, điều gì xảy ra?",
    options: [
      { id: "a", text: "API trả về lỗi (prompt is too long)", feedback: "Đúng." },
      { id: "b", text: "Claude tự xoá ngẫu nhiên một nửa tài liệu", feedback: "Không." },
      { id: "c", text: "Claude trả lời bình thường như không có gì", feedback: "Không — request bị từ chối." },
    ],
    answer: "a",
    explanation: "Tài liệu ghi rõ: nếu riêng đầu vào đã vượt context window, API trả về lỗi 400 “prompt is too long”. Giao diện chat có thể tự quản lý bằng cách bỏ bớt phần cũ.",
  },
  {
    questionId: "ch01-l05-q08", lessonId: L, conceptId: "conversation-scope", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn cách làm tốt nhất.",
    context: {
      label: "Tình huống",
      content: "Bạn làm việc với Claude về dự án A suốt một tuần trong một cuộc hội thoại rất dài. Gần đây Claude bắt đầu nhầm các quyết định đầu tiên.",
    },
    options: [
      { id: "a", text: "Nhờ Claude tóm tắt quyết định đã chốt, rồi mở hội thoại mới kèm bản tóm tắt", feedback: "Đúng — giảm độ dài context, giữ thông tin quan trọng." },
      { id: "b", text: "Tiếp tục dán thêm tài liệu vào cùng hội thoại", feedback: "Context càng dài càng dễ giảm chất lượng." },
      { id: "c", text: "Mở hội thoại mới và không mang theo gì", feedback: "Hội thoại mới không có thông tin cũ; bạn sẽ mất các quyết định đã chốt." },
    ],
    answer: "a",
    explanation: "Tóm tắt rồi chuyển sang hội thoại mới là cách thủ công của “compaction”.",
  },
  {
    questionId: "ch01-l05-q09", lessonId: L, conceptId: "knowledge-cutoff", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Câu hỏi nào CẦN nguồn thông tin bên ngoài (tài liệu bạn cung cấp hoặc tìm kiếm web) vì có thể mới hơn mốc kiến thức? Chọn tất cả.",
    options: [
      { id: "a", text: "Quy định thuế mới ban hành tháng trước", feedback: "Đúng." },
      { id: "b", text: "Giá thép hôm nay", feedback: "Đúng." },
      { id: "c", text: "Định luật Ohm là gì", feedback: "Kiến thức nền ổn định." },
      { id: "d", text: "Phiên bản mới nhất của một phần mềm vừa phát hành tuần này", feedback: "Đúng." },
    ],
    answer: ["a", "b", "d"],
    explanation: "Thông tin thay đổi theo thời gian cần nguồn hiện hành; kiến thức nền ổn định thì model thường đã học.",
  },
  {
    questionId: "ch01-l05-q10", lessonId: L, conceptId: "context-window", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Bạn cần hỏi về lỗi rò dầu tháng 10. Chọn các tài liệu KHÔNG nên đưa vào context.",
    segments: [
      { id: "s1", text: "Báo cáo lỗi tháng 10", isError: false },
      { id: "s2", text: "Sổ tay nhân sự 2023", isError: true, why: "Không liên quan — làm loãng context." },
      { id: "s3", text: "Biên bản họp QA tuần 43", isError: false },
      { id: "s4", text: "Email mời tiệc tất niên", isError: true, why: "Không liên quan." },
    ],
    explanation: "Chỉ đưa tài liệu liên quan giúp câu trả lời chính xác hơn và tiết kiệm token.",
  },
  {
    questionId: "ch01-l05-q11", lessonId: L, conceptId: "overflow", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp cách xử lý khi tài liệu quá dài để đưa vào một lần.",
    items: [
      { id: "s1", text: "Xác định câu hỏi cụ thể cần trả lời" },
      { id: "s2", text: "Chỉ chọn các chương/mục liên quan" },
      { id: "s3", text: "Hỏi từng phần, yêu cầu trích dẫn đoạn làm căn cứ" },
      { id: "s4", text: "Tổng hợp kết quả các phần" },
      { id: "s5", text: "Kiểm tra lại các trích dẫn với tài liệu gốc" },
    ],
    explanation: "Thu hẹp câu hỏi trước, chia nhỏ tài liệu, tổng hợp rồi kiểm chứng.",
  },
  {
    questionId: "ch01-l05-q12", lessonId: L, conceptId: "reliability", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "matching",
    prompt: "Ghép mỗi việc với mức kiểm chứng phù hợp.",
    pairs: [
      { id: "low", left: "Gợi ý tiêu đề cho bài đăng nội bộ", right: "Đọc lại nhanh" },
      { id: "mid", left: "Bảng tổng hợp số lỗi cho họp giao ban", right: "Đối chiếu vài con số với dữ liệu gốc" },
      { id: "high", left: "Thông số kỹ thuật gửi khách hàng", right: "Đối chiếu đầy đủ với tài liệu gốc và người có thẩm quyền duyệt" },
    ],
    explanation: "Kiểm chứng tương xứng với hậu quả nếu sai: không thừa với việc nhẹ, không thiếu với việc quan trọng.",
  },
  {
    questionId: "ch01-l05-q13", lessonId: L, conceptId: "no-access", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Phân tích tình huống và chọn giải thích đúng.",
    context: {
      label: "Tình huống",
      content: "Anh Nam hỏi Claude “File báo cáo tôi lưu trên máy hôm qua có bao nhiêu dòng?” và nhận một con số cụ thể. Anh chưa tải file lên và không dùng công cụ nào.",
    },
    options: [
      { id: "a", text: "Con số không có căn cứ: Claude không truy cập được máy của anh Nam trong tình huống này", feedback: "Đúng." },
      { id: "b", text: "Claude đọc được file nhờ đã đăng nhập cùng tài khoản", feedback: "Đăng nhập không cấp quyền đọc file trên máy." },
      { id: "c", text: "Con số đúng vì Claude nhớ các hội thoại trước", feedback: "Kể cả khi có tính năng bộ nhớ, Claude chỉ biết những gì từng được đưa vào." },
    ],
    answer: "a",
    explanation: "Nếu thông tin không nằm trong context và không có công cụ truy cập, mọi con số cụ thể đều là suy đoán.",
  },
  {
    questionId: "ch01-l05-q14", lessonId: L, conceptId: "knowledge-cutoff", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "predict-output",
    prompt: "Bạn hỏi model (không bật tìm kiếm web) về một tiêu chuẩn kỹ thuật được sửa đổi SAU mốc kiến thức. Kết quả nào có khả năng xảy ra nhất?",
    context: { label: "Câu hỏi", content: "Tiêu chuẩn X phiên bản mới nhất quy định giới hạn tổn hao là bao nhiêu?" },
    options: [
      { id: "a", text: "Câu trả lời dựa trên phiên bản cũ mà model đã học, có thể đã lỗi thời", feedback: "Đúng — cần đối chiếu văn bản tiêu chuẩn hiện hành." },
      { id: "b", text: "Luôn chính xác theo phiên bản mới nhất", feedback: "Model không thể biết thay đổi sau mốc kiến thức nếu không được cung cấp." },
      { id: "c", text: "Claude tự tải tiêu chuẩn mới về", feedback: "Không có công cụ tìm kiếm được bật trong tình huống này." },
    ],
    answer: "a",
    explanation: "Với quy định/tiêu chuẩn, hãy cung cấp văn bản hiện hành và yêu cầu trích dẫn điều khoản cụ thể.",
  },
  {
    questionId: "ch01-l05-q15", lessonId: L, conceptId: "context-rot", learningObjective: "o2", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Nhiệm vụ thực tế: viết prompt hỏi về một tài liệu dài mà vẫn giữ chất lượng câu trả lời.",
    source: "Bạn có sổ tay vận hành trạm biến áp 300 trang. Bạn chỉ cần biết quy trình xử lý khi nhiệt độ dầu vượt ngưỡng. Viết prompt (kèm cách bạn chọn nội dung đưa vào) để Claude trả lời chính xác, có căn cứ.",
    rubric: [
      { id: "select", label: "Chỉ đưa phần liên quan", weight: 1, check: { kind: "anyKeyword", keywords: ["chương", "mục", "phần liên quan", "trích", "chỉ đưa", "đoạn"] }, pass: "Có chọn lọc nội dung.", fail: "Nêu cách chọn chương/mục liên quan thay vì đưa cả 300 trang." },
      { id: "specific", label: "Câu hỏi cụ thể", weight: 1, check: { kind: "anyKeyword", keywords: ["nhiệt độ dầu", "vượt ngưỡng", "quy trình xử lý"] }, pass: "Câu hỏi cụ thể.", fail: "Nêu đúng câu hỏi: quy trình khi nhiệt độ dầu vượt ngưỡng." },
      { id: "quote", label: "Yêu cầu trích dẫn căn cứ", weight: 1, check: { kind: "anyKeyword", keywords: ["trích dẫn", "nguyên văn", "dẫn chứng", "số trang", "mục nào"] }, pass: "Có yêu cầu trích dẫn.", fail: "Yêu cầu trích dẫn nguyên văn đoạn làm căn cứ." },
      { id: "unknown", label: "Cho phép nói không tìm thấy", weight: 1, check: { kind: "anyKeyword", keywords: ["không tìm thấy", "không có trong", "nói rõ", "không đủ"] }, pass: "Có cho phép thừa nhận.", fail: "Cho phép Claude nói “không tìm thấy trong tài liệu”." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Tôi chỉ đưa chương 7 “Sự cố nhiệt” và phụ lục C (ngưỡng nhiệt độ) của sổ tay vào thẻ <tai_lieu>.\nHãy trả lời: quy trình xử lý khi nhiệt độ dầu vượt ngưỡng gồm những bước nào?\nTrước tiên trích dẫn nguyên văn các đoạn liên quan (kèm mục), sau đó liệt kê các bước theo thứ tự. Nếu tài liệu không có thông tin, hãy nói rõ \"không tìm thấy trong tài liệu\".",
    explanation: "Chọn lọc context + câu hỏi hẹp + trích dẫn nguyên văn là cách Anthropic khuyên dùng với tài liệu dài.",
  },
];
