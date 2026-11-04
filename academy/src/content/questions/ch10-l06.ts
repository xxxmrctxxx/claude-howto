import type { Question } from "@/lib/types/content";

const L = "ch10-l06";

/** 15 questions for "Ứng dụng quản lý dự án kỹ thuật" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh10L06: Question[] = [
  {
    questionId: "ch10-l06-q01", lessonId: L, conceptId: "risk-score", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền phép tính.",
    template: "Điểm rủi ro = khả năng xảy ra (1–5) [[b1]] mức ảnh hưởng (1–5).",
    blanks: [{ id: "b1", accepted: ["×", "x", "nhân", "*"], width: 4 }],
    explanation: "Điểm cao xử lý trước.",
  },
  {
    questionId: "ch10-l06-q02", lessonId: L, conceptId: "project-hub", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Mẫu báo cáo tuần 5 mục nên đặt ở đâu để mọi chat trong dự án dùng chung?",
    options: [
      { id: "a", text: "Project instructions", feedback: "Đúng." },
      { id: "b", text: "Tên project", feedback: "Claude không thấy tên project." },
      { id: "c", text: "Dán lại mỗi tuần vào chat", feedback: "Dễ quên, không nhất quán." },
    ],
    answer: "a",
    explanation: "Instructions áp dụng cho mọi chat trong project.",
  },
  {
    questionId: "ch10-l06-q03", lessonId: L, conceptId: "open-actions", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Mỗi việc mở trong báo cáo tuần nên có người phụ trách và hạn; thiếu thì ghi rõ “chưa giao”.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Việc không có người phụ trách thường bị trôi.",
  },
  {
    questionId: "ch10-l06-q04", lessonId: L, conceptId: "confidential-docs", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Phụ lục giá hợp đồng mà quy định công ty không cho đưa ra ngoài hệ thống nội bộ — xử lý thế nào?",
    options: [
      { id: "a", text: "Không đưa lên Claude; nếu không chắc chính sách thì hỏi bộ phận phụ trách", feedback: "Đúng." },
      { id: "b", text: "Đưa lên cho đủ hồ sơ", feedback: "Trái chính sách công ty." },
      { id: "c", text: "Đổi tên file rồi đưa lên", feedback: "Vẫn vi phạm." },
    ],
    answer: "a",
    explanation: "Tuân thủ chính sách dữ liệu là điều kiện tiên quyết.",
  },
  {
    questionId: "ch10-l06-q05", lessonId: L, conceptId: "decision-log", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Một dòng nhật ký quyết định nên có những gì? Chọn tất cả.",
    options: [
      { id: "a", text: "Ngày và nội dung quyết định", feedback: "Đúng." },
      { id: "b", text: "Lý do", feedback: "Đúng." },
      { id: "c", text: "Người quyết định", feedback: "Đúng." },
      { id: "d", text: "Ý kiến cá nhân về đồng nghiệp", feedback: "Không thuộc nhật ký quyết định." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Thêm tài liệu liên quan để tra cứu sau.",
  },
  {
    questionId: "ch10-l06-q06", lessonId: L, conceptId: "risk-register", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Theo điểm rủi ro, rủi ro nào cần xử lý trước?",
    context: { label: "Danh sách rủi ro", content: "R1: tủ điện giao chậm — khả năng 4, ảnh hưởng 4\nR2: bản vẽ móng chưa duyệt — khả năng 3, ảnh hưởng 5\nR3: thiếu thợ hàn — khả năng 2, ảnh hưởng 3", lang: "text" },
    options: [
      { id: "a", text: "R1 (16), rồi R2 (15), rồi R3 (6)", feedback: "Đúng." },
      { id: "b", text: "R2 vì ảnh hưởng lớn nhất", feedback: "Điểm tính cả khả năng: R1 = 16 > R2 = 15." },
      { id: "c", text: "R3 vì dễ xử lý nhất", feedback: "Thứ tự theo điểm, không theo độ dễ." },
    ],
    answer: "a",
    explanation: "Vẫn nên theo dõi sát R2 vì ảnh hưởng tối đa.",
  },
  {
    questionId: "ch10-l06-q07", lessonId: L, conceptId: "topic-chats", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Một chat trong project đã gộp tiến độ, mua sắm, nghiệm thu suốt 6 tuần, trả lời chậm và hay lẫn. Cách tổ chức tốt hơn?",
    options: [
      { id: "a", text: "Mỗi chủ đề một chat trong project; tài liệu dùng chung để ở knowledge", feedback: "Đúng." },
      { id: "b", text: "Tiếp tục dồn vào một chat cho đủ ngữ cảnh", feedback: "Chat dài tốn lượt và dễ lẫn." },
      { id: "c", text: "Xoá project, làm lại", feedback: "Không cần." },
    ],
    answer: "a",
    explanation: "Các chat trong project không tự thấy nhau — điều dùng chung phải nằm trong knowledge.",
  },
  {
    questionId: "ch10-l06-q08", lessonId: L, conceptId: "report-structure", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp 5 mục của báo cáo tuần theo mẫu trong bài.",
    items: [
      { id: "a", text: "Tóm tắt 3 dòng" },
      { id: "b", text: "Mốc tiến độ: đúng/chậm" },
      { id: "c", text: "5 rủi ro điểm cao nhất" },
      { id: "d", text: "Quyết định trong tuần" },
      { id: "e", text: "Việc mở: việc | người | hạn" },
    ],
    explanation: "Cấu trúc cố định giúp so sánh giữa các tuần.",
  },
  {
    questionId: "ch10-l06-q09", lessonId: L, conceptId: "verify-before-send", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Báo cáo tuần ghi “mốc lắp đặt máy ép hoàn thành 05/11”, nhưng biên bản ghi “dự kiến 05/11, chưa nghiệm thu”. Làm gì trước khi gửi?",
    options: [
      { id: "a", text: "Sửa theo nguồn: “dự kiến 05/11, chưa nghiệm thu”; rà lại các mốc khác với nguồn", feedback: "Đúng." },
      { id: "b", text: "Gửi luôn, sai lệch nhỏ", feedback: "Sai về trạng thái mốc là sai lệch lớn." },
      { id: "c", text: "Bỏ mục mốc tiến độ", feedback: "Mất thông tin quan trọng." },
    ],
    answer: "a",
    explanation: "Mọi số liệu và mốc phải truy được về nguồn.",
  },
  {
    questionId: "ch10-l06-q10", lessonId: L, conceptId: "share-right-people", learningObjective: "o4", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép người với cách chia sẻ trạm điều hành dự án (công ty dùng gói Team).",
    pairs: [
      { id: "p1", left: "Kỹ sư trong ban dự án", right: "Can edit project và công cụ theo dõi" },
      { id: "p2", left: "Giám đốc nhà máy", right: "Can view, nhận báo cáo tuần" },
      { id: "p3", left: "Nhà thầu bên ngoài", right: "Gửi file xuất phần liên quan, không chia sẻ project" },
    ],
    explanation: "Team/Enterprise: project chia sẻ trong tổ chức; người ngoài nhận file.",
  },
  {
    questionId: "ch10-l06-q11", lessonId: L, conceptId: "milestones", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bảng mốc tiến độ cần những cột nào để thấy ngay mốc nào chậm?",
    options: [
      { id: "a", text: "Mốc, ngày kế hoạch, ngày thực tế/dự kiến, trạng thái", feedback: "Đúng." },
      { id: "b", text: "Chỉ tên mốc", feedback: "Không thấy được chậm hay đúng." },
      { id: "c", text: "Tên mốc và màu sắc yêu thích", feedback: "Không có ý nghĩa." },
    ],
    answer: "a",
    explanation: "So kế hoạch với thực tế là cốt lõi của theo dõi tiến độ.",
  },
  {
    questionId: "ch10-l06-q12", lessonId: L, conceptId: "weekly-report", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây thành yêu cầu báo cáo tuần kiểm tra được.",
    source: "tóm tắt biên bản này thành báo cáo gửi giám đốc",
    rubric: [
      { id: "template", label: "Theo mẫu cố định", weight: 1, check: { kind: "anyKeyword", keywords: ["theo mẫu", "5 mục", "mẫu báo cáo"] }, pass: "Có mẫu.", fail: "Yêu cầu theo mẫu 5 mục trong instructions." },
      { id: "source", label: "Số liệu có nguồn", weight: 1, check: { kind: "anyKeyword", keywords: ["nguồn", "biên bản ngày"] }, pass: "Có nguồn.", fail: "Mỗi số liệu ghi nguồn." },
      { id: "actions", label: "Việc mở có người, hạn", weight: 1, check: { kind: "allGroups", groups: [["người"], ["hạn"]] }, pass: "Có việc mở rõ.", fail: "Việc mở có người phụ trách và hạn." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Từ biên bản họp 07/11 dưới đây, lập báo cáo tuần 45 theo mẫu 5 mục trong project instructions. Cập nhật mốc và 5 rủi ro điểm cao nhất từ artifact theo dõi. Mỗi số liệu ghi nguồn (biên bản ngày nào/tài liệu nào). Việc mở có người phụ trách và hạn; thiếu thì ghi “chưa giao”.",
    explanation: "Mẫu + nguồn + việc mở rõ.",
  },
  {
    questionId: "ch10-l06-q13", lessonId: L, conceptId: "confidential-docs", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn dựng trạm điều hành dự án như dưới đây. Chọn các việc SAI.",
    segments: [
      { id: "s1", text: "Đưa toàn bộ hợp đồng có phụ lục giá mật lên knowledge cho tiện tra cứu, chưa hỏi chính sách.", isError: true, why: "Kiểm tra chính sách dữ liệu trước." },
      { id: "s2", text: "Tên file knowledge rõ nghĩa: pham-vi-du-an.pdf, danh-muc-ban-ve.xlsx.", isError: false },
      { id: "s3", text: "Chia sẻ project Can edit cho cả nhà máy 300 người.", isError: true, why: "Quyền nhỏ nhất đủ dùng; người xem chỉ cần Can view hoặc báo cáo." },
      { id: "s4", text: "Ghi mẫu báo cáo trong project instructions.", isError: false },
    ],
    explanation: "Chính sách dữ liệu và quyền đúng người.",
  },
  {
    questionId: "ch10-l06-q14", lessonId: L, conceptId: "risk-register", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Danh sách rủi ro có 40 dòng, nhiều dòng không có biện pháp và người phụ trách. Cải thiện hợp lý nhất?",
    options: [
      { id: "a", text: "Tính điểm, tập trung 5–10 rủi ro điểm cao; mỗi rủi ro đó phải có biện pháp, người, hạn; gộp/đóng các dòng trùng hoặc đã hết", feedback: "Đúng." },
      { id: "b", text: "Thêm 20 rủi ro nữa cho đủ", feedback: "Danh sách dài không làm dự án an toàn hơn." },
      { id: "c", text: "Xoá danh sách vì khó quản lý", feedback: "Mất công cụ quản trị rủi ro." },
    ],
    answer: "a",
    explanation: "Rủi ro không có người phụ trách thì không ai xử lý.",
  },
  {
    questionId: "ch10-l06-q15", lessonId: L, conceptId: "project-hub", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết project instructions (4–6 dòng) cho trạm điều hành dự án dưới đây.",
    source: "Dự án cải tạo hệ thống khí nén xưởng B, 10 tuần, ban dự án 5 người. Giám đốc muốn báo cáo mỗi thứ Sáu, ngắn, có bảng; mọi số liệu phải có nguồn; điều gì chưa chắc phải ghi rõ.",
    rubric: [
      { id: "role", label: "Vai trò/bối cảnh", weight: 1, check: { kind: "anyKeyword", keywords: ["khí nén", "ban dự án", "dự án"] }, pass: "Có bối cảnh.", fail: "Nêu bối cảnh dự án." },
      { id: "template", label: "Mẫu báo cáo", weight: 1, check: { kind: "anyKeyword", keywords: ["mục", "mẫu", "rủi ro", "việc mở"] }, pass: "Có mẫu.", fail: "Nêu cấu trúc báo cáo tuần." },
      { id: "source", label: "Ghi nguồn", weight: 1, check: { kind: "anyKeyword", keywords: ["nguồn"] }, pass: "Có nguồn.", fail: "Yêu cầu ghi nguồn." },
      { id: "unsure", label: "Ghi rõ khi chưa chắc", weight: 1, check: { kind: "anyKeyword", keywords: ["chưa chắc", "cần xác nhận", "không chắc"] }, pass: "Có quy tắc.", fail: "Thêm: chưa chắc thì ghi “cần xác nhận”." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Bạn hỗ trợ ban dự án cải tạo hệ thống khí nén xưởng B (10 tuần, 5 người). Trả lời bằng tiếng Việt, ngắn, ưu tiên bảng.\nBáo cáo thứ Sáu gồm 5 mục: tóm tắt 3 dòng; mốc tiến độ đúng/chậm; 5 rủi ro điểm cao nhất (khả năng × ảnh hưởng); quyết định trong tuần; việc mở (việc | người | hạn).\nMọi số liệu ghi nguồn (biên bản ngày nào, tài liệu nào).\nĐiều gì chưa chắc thì ghi “cần xác nhận”, không đoán.",
    explanation: "Instructions tốt: bối cảnh, mẫu, nguồn, quy tắc khi chưa chắc.",
  },
];
