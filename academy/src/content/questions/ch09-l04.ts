import type { Question } from "@/lib/types/content";

const L = "ch09-l04";

/** 15 questions for "Xây dựng frontend" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh09L04: Question[] = [
  {
    questionId: "ch09-l04-q01", lessonId: L, conceptId: "one-screen", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao nên giao Claude dựng frontend từng màn hình một?",
    options: [
      { id: "a", text: "Phần nhỏ thì làm chính xác hơn, kiểm tra nhanh hơn, lỗi dễ khoanh vùng", feedback: "Đúng." },
      { id: "b", text: "Vì Claude chỉ hiểu được một file mỗi lần", feedback: "Không đúng." },
      { id: "c", text: "Để tốn nhiều lượt dùng hơn", feedback: "Ngược lại." },
    ],
    answer: "a",
    explanation: "Mỗi vòng kết thúc bằng một commit.",
  },
  {
    questionId: "ch09-l04-q02", lessonId: L, conceptId: "follow-pattern", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "Dặn “theo cách viết của @src/ghi-loi.js” giúp màn hình mới nhất quán với code đã có.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Best practices có ví dụ: follow the pattern in … and build …, no new libraries.",
  },
  {
    questionId: "ch09-l04-q03", lessonId: L, conceptId: "review-diff", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trong phiên Claude Code, lệnh nào xem các thay đổi chưa commit?",
    options: [
      { id: "a", text: "/diff", feedback: "Đúng." },
      { id: "b", text: "/init", feedback: "/init tạo CLAUDE.md." },
      { id: "c", text: "/clear", feedback: "/clear xoá hội thoại." },
    ],
    answer: "a",
    explanation: "Ngoài phiên có thể dùng git diff.",
  },
  {
    questionId: "ch09-l04-q04", lessonId: L, conceptId: "evidence", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Theo Best practices, câu “All tests pass” một mình nói rất ít; nên yêu cầu lệnh đã chạy và kết quả, hoặc ảnh chụp.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Đọc kết quả nhanh hơn tự chạy lại; với phiên bạn không theo dõi, đó là bằng chứng duy nhất.",
  },
  {
    questionId: "ch09-l04-q05", lessonId: L, conceptId: "no-new-libs", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Câu dặn nào giúp tránh dự án phình to vì thư viện thừa?",
    options: [
      { id: "a", text: "“Không thêm thư viện ngoài danh sách đã duyệt”", feedback: "Đúng." },
      { id: "b", text: "“Dùng thư viện nào bạn thích”", feedback: "Mở cửa cho thư viện thừa." },
      { id: "c", text: "“Làm nhanh lên”", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Thư viện mới cần lý do và được duyệt.",
  },
  {
    questionId: "ch09-l04-q06", lessonId: L, conceptId: "scope-creep", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Giao dựng màn hình Ghi lỗi, nhưng /diff cho thấy Claude sửa cả file server và đổi tên thư mục. Làm gì?",
    options: [
      { id: "a", text: "Yêu cầu hoàn tác các thay đổi ngoài phạm vi, chỉ giữ file của màn hình Ghi lỗi", feedback: "Đúng." },
      { id: "b", text: "Commit hết cho nhanh", feedback: "Commit lẫn thay đổi khó review, dễ lỗi." },
      { id: "c", text: "Xoá cả repo làm lại", feedback: "Quá mức." },
    ],
    answer: "a",
    explanation: "Lần sau dặn rõ “chỉ sửa file trong src/ghi-loi”.",
  },
  {
    questionId: "ch09-l04-q07", lessonId: L, conceptId: "screenshot-check", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Cách kiểm tra nhanh nhất xem màn hình Claude dựng có đúng wireframe không?",
    options: [
      { id: "a", text: "Đặt ảnh chụp màn hình cạnh wireframe, liệt kê chỗ lệch", feedback: "Đúng." },
      { id: "b", text: "Đọc toàn bộ code CSS", feedback: "Chậm và dễ sót." },
      { id: "c", text: "Hỏi Claude “giống chưa?”", feedback: "Cần bằng chứng nhìn được." },
    ],
    answer: "a",
    explanation: "Best practices liệt kê ảnh chụp trình duyệt cạnh mockup như một phép kiểm tra.",
  },
  {
    questionId: "ch09-l04-q08", lessonId: L, conceptId: "keyboard-check", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Thử màn hình Ghi lỗi chỉ bằng bàn phím, cần kiểm tra gì? Chọn tất cả.",
    options: [
      { id: "a", text: "Tab đi qua các ô theo đúng thứ tự trên màn hình", feedback: "Đúng." },
      { id: "b", text: "Thấy rõ ô đang được chọn (viền focus)", feedback: "Đúng." },
      { id: "c", text: "Enter hoặc Space bấm được nút Lưu", feedback: "Đúng." },
      { id: "d", text: "Màu nền có hợp phong thuỷ", feedback: "Không liên quan." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Điều hướng bàn phím là một phần của khả năng tiếp cận.",
  },
  {
    questionId: "ch09-l04-q09", lessonId: L, conceptId: "small-commits", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp vòng dựng một màn hình.",
    items: [
      { id: "a", text: "Chọn màn hình và tiêu chí trong SPEC.md" },
      { id: "b", text: "Gửi yêu cầu cụ thể kèm wireframe" },
      { id: "c", text: "Đọc bằng chứng: kết quả test, ảnh chụp" },
      { id: "d", text: "Sửa từng điểm còn lệch" },
      { id: "e", text: "Xem /diff, rồi commit" },
    ],
    explanation: "Mỗi vòng một màn hình, một commit.",
  },
  {
    questionId: "ch09-l04-q10", lessonId: L, conceptId: "all-states", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Claude dựng màn hình Danh sách lỗi chỉ với trạng thái có dữ liệu. Câu bổ sung nào phù hợp nhất cho lần sau?",
    options: [
      { id: "a", text: "“Be ambitious: thêm trạng thái rỗng, đang tải, lỗi mạng có nút Thử lại, xác nhận khi xoá.”", feedback: "Đúng." },
      { id: "b", text: "“Làm kỹ hơn.”", feedback: "Không nói rõ thiếu gì." },
      { id: "c", text: "“Think step by step.”", feedback: "Không nói về phạm vi trạng thái." },
    ],
    answer: "a",
    explanation: "Claude thường làm bản nhỏ nhất nếu bạn không nói rõ phạm vi.",
  },
  {
    questionId: "ch09-l04-q11", lessonId: L, conceptId: "mobile-check", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "true-false",
    statement: "Một màn hình hiển thị đẹp trên máy tính chưa chắc dùng được trên điện thoại — cần thử khổ hẹp riêng.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Người dùng chính của dự án dùng điện thoại ở xưởng.",
  },
  {
    questionId: "ch09-l04-q12", lessonId: L, conceptId: "spec-reference", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây thành yêu cầu dựng một màn hình có phạm vi rõ.",
    source: "làm cái trang danh sách lỗi đi",
    rubric: [
      { id: "spec", label: "Tham chiếu đặc tả/wireframe", weight: 1, check: { kind: "anyKeyword", keywords: ["spec.md", "wireframe", "story"] }, pass: "Có tham chiếu.", fail: "Tham chiếu @SPEC.md (story) và wireframe." },
      { id: "scope", label: "Giới hạn phạm vi", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ sửa", "chỉ tạo", "không thêm thư viện"] }, pass: "Có giới hạn.", fail: "Giới hạn file, không thêm thư viện." },
      { id: "evidence", label: "Bằng chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["chụp", "npm test", "liệt kê file", "/verify"] }, pass: "Có bằng chứng.", fail: "Yêu cầu ảnh chụp/kết quả test." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Dựng màn hình Danh sách lỗi (story 2 trong @SPEC.md) theo wireframe đính kèm và theo cách viết của @src/ghi-loi.js. Không thêm thư viện, chỉ sửa src/danh-sach.*. Đủ trạng thái rỗng, đang tải, lỗi mạng, xác nhận khi xoá. Xong chạy npm test, chụp ảnh khổ điện thoại và liệt kê file đã sửa.",
    explanation: "Đặc tả + phạm vi + bằng chứng.",
  },
  {
    questionId: "ch09-l04-q13", lessonId: L, conceptId: "evidence", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn duyệt kết quả frontend như dưới đây. Chọn các bước SAI.",
    segments: [
      { id: "s1", text: "Claude nói “đã xong, test đều đạt” nên commit luôn, không xem kết quả.", isError: true, why: "Cần đọc bằng chứng: lệnh và kết quả." },
      { id: "s2", text: "Đặt ảnh chụp cạnh wireframe, ghi 3 chỗ lệch.", isError: false },
      { id: "s3", text: "Chỉ thử trên màn hình máy tính lớn.", isError: true, why: "Người dùng chính dùng điện thoại." },
      { id: "s4", text: "Xem /diff để chắc chỉ file của màn hình bị sửa.", isError: false },
    ],
    explanation: "Bằng chứng, khổ điện thoại, và diff — trước khi commit.",
  },
  {
    questionId: "ch09-l04-q14", lessonId: L, conceptId: "one-screen", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Màn hình Thống kê có 3 phần: thẻ tổng số, biểu đồ theo công đoạn, danh sách lỗi mức Cao. Lần đầu Claude làm cả 3 nhưng biểu đồ sai. Chiến lược tiếp theo tốt nhất?",
    options: [
      { id: "a", text: "Giữ phần đúng, commit; giao riêng phần biểu đồ với tiêu chí và dữ liệu mẫu có đáp án", feedback: "Đúng." },
      { id: "b", text: "Yêu cầu làm lại cả màn hình", feedback: "Có thể làm hỏng phần đang đúng." },
      { id: "c", text: "Bỏ biểu đồ khỏi SPEC.md", feedback: "Né vấn đề." },
    ],
    answer: "a",
    explanation: "Khoanh vùng phần sai, giao nhỏ hơn, có dữ liệu mẫu để kiểm tra.",
  },
  {
    questionId: "ch09-l04-q15", lessonId: L, conceptId: "follow-pattern", learningObjective: "o2", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết yêu cầu dựng màn hình cho tình huống dưới đây (3–5 dòng), đủ: đặc tả, file mẫu, phạm vi, trạng thái, bằng chứng.",
    source: "Dự án đặt phòng họp. Màn hình “Lịch của tôi” (story 4 trong SPEC.md): nhân viên xem các lượt đã đặt và huỷ lượt của mình. Màn hình “Đặt phòng” đã viết đúng chuẩn ở src/dat-phong.js. Lệnh test: npm test.",
    rubric: [
      { id: "spec", label: "Đặc tả", weight: 1, check: { kind: "anyKeyword", keywords: ["story 4", "spec.md"] }, pass: "Có đặc tả.", fail: "Tham chiếu story 4 trong @SPEC.md." },
      { id: "pattern", label: "File mẫu", weight: 1, check: { kind: "anyKeyword", keywords: ["dat-phong.js"] }, pass: "Có file mẫu.", fail: "Theo cách viết của @src/dat-phong.js." },
      { id: "states", label: "Trạng thái + xác nhận huỷ", weight: 1, check: { kind: "allGroups", groups: [["rỗng", "chưa có lượt"], ["xác nhận"]] }, pass: "Có trạng thái.", fail: "Trạng thái rỗng và xác nhận trước khi huỷ." },
      { id: "evidence", label: "Bằng chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["npm test", "chụp", "liệt kê file"] }, pass: "Có bằng chứng.", fail: "Chạy npm test, chụp ảnh, liệt kê file." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Dựng màn hình Lịch của tôi (story 4 trong @SPEC.md) theo cách viết của @src/dat-phong.js và quy ước trong CLAUDE.md. Không thêm thư viện, chỉ tạo/sửa src/lich-cua-toi.*. Đủ trạng thái rỗng (“Bạn chưa có lượt đặt nào”), đang tải, lỗi mạng, hộp xác nhận trước khi huỷ. Xong chạy npm test, chụp ảnh khổ điện thoại và liệt kê file đã sửa.",
    explanation: "Áp dụng đủ khuôn yêu cầu frontend của bài.",
  },
];
