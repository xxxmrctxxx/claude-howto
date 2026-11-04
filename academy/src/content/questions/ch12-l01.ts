import type { Question } from "@/lib/types/content";

const L = "ch12-l01";

/** 15 questions for "Tự chọn một dự án" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh12L01: Question[] = [
  {
    questionId: "ch12-l01-q01", lessonId: L, conceptId: "success-metric", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Chỉ số thành công nào tốt nhất cho một dự án tự động tổng hợp lỗi tuần?",
    options: [
      { id: "a", text: "Thời gian tổng hợp giảm từ 60 xuống ≤ 15 phút/tuần, ≥ 90% bản ghi đúng trên bộ mẫu", feedback: "Đúng." },
      { id: "b", text: "Mọi người thấy tiện hơn", feedback: "Không đo được." },
      { id: "c", text: "Dùng AI hiện đại nhất", feedback: "Đó là phương tiện, không phải kết quả." },
    ],
    answer: "a",
    explanation: "Chỉ số phải có con số và cách đo.",
  },
  {
    questionId: "ch12-l01-q02", lessonId: L, conceptId: "no-ai-needed", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Việc mà một công thức Excel có sẵn làm được vẫn nên chọn làm dự án AI tốt nghiệp.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Bắt đầu từ giải pháp đơn giản nhất; công cụ sẵn có làm được thì dùng nó.",
  },
  {
    questionId: "ch12-l01-q03", lessonId: L, conceptId: "project-charter", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Điều lệ dự án một trang nên có những mục nào? Chọn tất cả.",
    options: [
      { id: "a", text: "Vấn đề và người dùng", feedback: "Đúng." },
      { id: "b", text: "Chỉ số thành công có con số", feedback: "Đúng." },
      { id: "c", text: "Phạm vi trong và ngoài", feedback: "Đúng." },
      { id: "d", text: "Toàn bộ mã nguồn", feedback: "Mã nguồn đến sau, không thuộc điều lệ." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Thêm dữ liệu/chính sách, công cụ, rủi ro chính.",
  },
  {
    questionId: "ch12-l01-q04", lessonId: L, conceptId: "problem-owner", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Câu hỏi nào giúp xác nhận dự án có người dùng thật?",
    options: [
      { id: "a", text: "“Khi xong, anh/chị sẽ dùng nó lúc nào, thay cho việc gì đang làm?”", feedback: "Đúng." },
      { id: "b", text: "“Anh/chị có thích AI không?”", feedback: "Không cho biết nhu cầu thật." },
      { id: "c", text: "“Màu giao diện nào đẹp?”", feedback: "Chưa phải lúc." },
    ],
    answer: "a",
    explanation: "Người dùng thật mô tả được cách họ sẽ dùng.",
  },
  {
    questionId: "ch12-l01-q05", lessonId: L, conceptId: "mvp", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền khoảng thời gian gợi ý cho phiên bản tối thiểu của dự án tốt nghiệp.",
    template: "Phiên bản tối thiểu dùng được nên xong trong khoảng 2–[[b1]] tuần.",
    blanks: [{ id: "b1", accepted: ["4", "bốn"], width: 4 }],
    explanation: "Quá thời gian này thì thu hẹp phạm vi.",
  },
  {
    questionId: "ch12-l01-q06", lessonId: L, conceptId: "scope-size", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Ý tưởng: “Hệ thống quản lý chất lượng toàn nhà máy”. Bạn có 3 tuần. Thu hẹp thế nào?",
    options: [
      { id: "a", text: "Chọn một quy trình, một nhóm người dùng: ví dụ trích lỗi từ ghi chú ca của một xưởng thành bảng tuần", feedback: "Đúng." },
      { id: "b", text: "Giữ nguyên, làm nhanh hơn", feedback: "Không khả thi trong 3 tuần." },
      { id: "c", text: "Làm giao diện trước, chức năng sau", feedback: "Không giải quyết phạm vi." },
    ],
    answer: "a",
    explanation: "Thu hẹp về một quy trình có người dùng cụ thể.",
  },
  {
    questionId: "ch12-l01-q07", lessonId: L, conceptId: "tool-fit", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép kiểu dự án với công cụ chính phù hợp.",
    pairs: [
      { id: "p1", left: "Tra cứu quy trình từ 40 file hướng dẫn công việc", right: "Project trên claude.ai" },
      { id: "p2", left: "Trang web nội bộ theo dõi hành động khắc phục", right: "Claude Code" },
      { id: "p3", left: "Mỗi đêm trích dữ liệu từ 500 ghi chú ca", right: "Claude API (Batches, structured outputs)" },
    ],
    explanation: "Có thể kết hợp nhiều công cụ trong một dự án.",
  },
  {
    questionId: "ch12-l01-q08", lessonId: L, conceptId: "data-policy", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Dự án cần dùng biên bản khiếu nại có tên khách hàng. Bạn chưa rõ chính sách. Bước đúng?",
    options: [
      { id: "a", text: "Hỏi người phụ trách chính sách dữ liệu trước; nếu cần thì ẩn tên khách; ghi kết quả vào điều lệ", feedback: "Đúng." },
      { id: "b", text: "Cứ làm, xong rồi hỏi", feedback: "Rủi ro vi phạm chính sách." },
      { id: "c", text: "Đổi tên file để không ai nhận ra", feedback: "Không thay đổi bản chất dữ liệu." },
    ],
    answer: "a",
    explanation: "Dữ liệu được phép là điều kiện tiên quyết.",
  },
  {
    questionId: "ch12-l01-q09", lessonId: L, conceptId: "verifiability", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Vì sao nên ưu tiên dự án có bộ ví dụ đúng/sai để kiểm chứng?",
    options: [
      { id: "a", text: "Có thước đo khách quan cho chỉ số thành công, và cho Claude cách tự kiểm tra công việc", feedback: "Đúng." },
      { id: "b", text: "Vì Claude không làm được việc khác", feedback: "Không đúng." },
      { id: "c", text: "Để dự án dài hơn", feedback: "Không phải mục đích." },
    ],
    answer: "a",
    explanation: "Best practices: cho Claude cách kiểm chứng là việc có tác động lớn nhất.",
  },
  {
    questionId: "ch12-l01-q10", lessonId: L, conceptId: "risk-check", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Ý tưởng: “agent tự gửi email xin lỗi khách khi có khiếu nại”. Rủi ro chính và cách chỉnh?",
    options: [
      { id: "a", text: "Thư gửi ra ngoài không đảo ngược được — đổi thành soạn bản nháp để nhân viên duyệt rồi gửi", feedback: "Đúng." },
      { id: "b", text: "Không có rủi ro vì thư xin lỗi luôn tốt", feedback: "Nội dung sai có thể gây hậu quả pháp lý." },
      { id: "c", text: "Gửi bằng địa chỉ cá nhân để an toàn", feedback: "Không giải quyết rủi ro." },
    ],
    answer: "a",
    explanation: "Hành động ra ngoài cần người duyệt (Chương 11).",
  },
  {
    questionId: "ch12-l01-q11", lessonId: L, conceptId: "skill-coverage", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Dự án “Sổ tay ca số” vận dụng những kiến thức nào của khoá học? Chọn tất cả.",
    options: [
      { id: "a", text: "Structured outputs để trích bản ghi (Chương 11)", feedback: "Đúng." },
      { id: "b", text: "Viết prompt rõ ràng có mẫu (Chương 3)", feedback: "Đúng." },
      { id: "c", text: "Claude Code để viết script và trang bảng (Chương 5–9)", feedback: "Đúng." },
      { id: "d", text: "Không cần kiểm thử vì Claude đã làm", feedback: "Kiểm thử luôn cần." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Dự án tốt nghiệp nên vận dụng kiến thức từ nhiều chương.",
  },
  {
    questionId: "ch12-l01-q12", lessonId: L, conceptId: "project-charter", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một điều lệ dự án như dưới đây. Chọn các dòng cần sửa.",
    segments: [
      { id: "s1", text: "Vấn đề: kỹ sư QA mất ~2 giờ cho mỗi bản nháp 8D, 6 lần/tháng.", isError: false },
      { id: "s2", text: "Chỉ số thành công: báo cáo tốt hơn.", isError: true, why: "Không đo được — cần con số (thời gian, tỷ lệ dùng được)." },
      { id: "s3", text: "Phạm vi: mọi việc liên quan đến chất lượng.", isError: true, why: "Quá rộng, không có phần ngoài phạm vi." },
      { id: "s4", text: "Dữ liệu: biên bản nội bộ, đã được trưởng phòng QA cho phép.", isError: false },
    ],
    explanation: "Chỉ số và phạm vi là hai chỗ hay mơ hồ nhất.",
  },
  {
    questionId: "ch12-l01-q13", lessonId: L, conceptId: "real-problem", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn có hai ý tưởng: (A) chatbot giới thiệu công ty cho khách tham quan, chưa ai yêu cầu; (B) trích lỗi từ ghi chú ca, trưởng xưởng đang phàn nàn mỗi tuần. Chọn ý tưởng nào làm dự án tốt nghiệp?",
    options: [
      { id: "a", text: "B — vấn đề thật, có người chờ kết quả, đo được trước–sau", feedback: "Đúng." },
      { id: "b", text: "A — vì ấn tượng hơn", feedback: "Không có người dùng thật đang cần." },
      { id: "c", text: "Làm cả hai cùng lúc", feedback: "Dàn trải, khó xong trong 2–4 tuần." },
    ],
    answer: "a",
    explanation: "Giá trị đến từ vấn đề thật có người dùng.",
  },
  {
    questionId: "ch12-l01-q14", lessonId: L, conceptId: "tool-fit", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Tổ QC 5 người cần tra cứu nhanh 40 file hướng dẫn; không ai biết lập trình; cần dùng trong tuần này. Lựa chọn hợp lý?",
    options: [
      { id: "a", text: "Project trên claude.ai với các file làm kiến thức và instructions rõ ràng; kiểm chứng bằng bộ câu hỏi mẫu", feedback: "Đúng." },
      { id: "b", text: "Tự viết hệ thống RAG bằng API", feedback: "Quá sức so với nhu cầu và thời gian." },
      { id: "c", text: "Agent SDK với quyền chạy lệnh", feedback: "Không cần cho việc tra cứu." },
    ],
    answer: "a",
    explanation: "Công cụ đơn giản nhất đáp ứng được nhu cầu.",
  },
  {
    questionId: "ch12-l01-q15", lessonId: L, conceptId: "project-charter", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết phần “Chỉ số thành công” và “Ngoài phạm vi” cho dự án dưới đây.",
    source: "Dự án: trợ lý soạn biên bản họp giao ban QA từ ghi âm đã chuyển thành văn bản; họp 5 lần/tuần, hiện thư ký mất ~40 phút mỗi biên bản.",
    rubric: [
      { id: "metric", label: "Chỉ số có số", weight: 1, check: { kind: "regex", pattern: "\\d+\\s*(%|phut|gio|lan)" }, pass: "Có số.", fail: "Chỉ số phải có con số." },
      { id: "out", label: "Ngoài phạm vi", weight: 1, check: { kind: "anyKeyword", keywords: ["ngoài phạm vi", "không làm", "không bao gồm"] }, pass: "Có ranh giới.", fail: "Nêu phần không làm." },
      { id: "check", label: "Cách đo", weight: 1, check: { kind: "anyKeyword", keywords: ["đo", "so sánh", "trên", "bộ mẫu"] }, pass: "Có cách đo.", fail: "Nêu cách đo (ví dụ trên 10 biên bản cũ)." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Chỉ số thành công: thời gian hoàn thành biên bản ≤ 10 phút (hiện ~40 phút); thư ký đánh giá ≥ 80% nội dung dùng được không cần viết lại, đo trên 10 biên bản cũ có sẵn bản chuẩn.\nNgoài phạm vi: không chuyển giọng nói thành văn bản (dùng công cụ sẵn có), không tự gửi biên bản, không giao việc thay trưởng ca.",
    explanation: "Chỉ số có số và cách đo; ranh giới rõ.",
  },
];
