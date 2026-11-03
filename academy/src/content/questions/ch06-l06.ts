import type { Question } from "@/lib/types/content";

const L = "ch06-l06";

/** 15 questions for "Kiểm thử tự động" — 5 beginner, 6 intermediate, 4 advanced. */
export const questionsCh06L06: Question[] = [
  {
    questionId: "ch06-l06-q01", lessonId: L, conceptId: "find-untested", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bạn muốn bổ sung test cho module báo cáo nhưng không biết chỗ nào còn thiếu. Yêu cầu đầu tiên hợp lý?",
    options: [
      { id: "a", text: "“Tìm các hàm trong src/report/ chưa có test”", feedback: "Đúng." },
      { id: "b", text: "“Xoá hết test cũ rồi viết lại”", feedback: "Mất phần đang bảo vệ code." },
      { id: "c", text: "“Viết 100 test bất kỳ”", feedback: "Số lượng không thay được trường hợp có ý nghĩa." },
    ],
    answer: "a",
    explanation: "Common workflows: identify untested code trước khi thêm test.",
  },
  {
    questionId: "ch06-l06-q02", lessonId: L, conceptId: "match-style", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Khi viết test, Claude xem các file test sẵn có để theo cùng phong cách, framework và cách assert của dự án.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Theo mục Work with tests trong Common workflows.",
  },
  {
    questionId: "ch06-l06-q03", lessonId: L, conceptId: "edge-cases", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Với hàm cộng số lỗi từ các dòng CSV, trường hợp nào là biên hoặc bất thường đáng test? Chọn tất cả.",
    options: [
      { id: "a", text: "Danh sách rỗng", feedback: "Đúng." },
      { id: "b", text: "Chỉ một dòng", feedback: "Đúng." },
      { id: "c", text: "Dòng trống ở cuối file", feedback: "Đúng." },
      { id: "d", text: "Màu nền của trang báo cáo", feedback: "Không liên quan tới hàm cộng." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Lỗi hay nằm ở biên và dữ liệu bất thường.",
  },
  {
    questionId: "ch06-l06-q04", lessonId: L, conceptId: "honest-tests", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Khi một test trượt, sửa giá trị mong đợi trong test cho khớp kết quả hiện tại là cách nhanh và đúng.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Như vậy test mất giá trị: nó “đạt” cả khi code sai.",
  },
  {
    questionId: "ch06-l06-q05", lessonId: L, conceptId: "check-loop", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Thêm câu nào vào yêu cầu để Claude tự khép vòng sửa–kiểm tra?",
    options: [
      { id: "a", text: "“Chạy test sau khi sửa và tiếp tục đến khi đạt”", feedback: "Đúng — giống ví dụ trong Best practices." },
      { id: "b", text: "“Làm cho thật tốt”", feedback: "Không có phép kiểm tra đạt/không đạt." },
      { id: "c", text: "“Đừng chạy gì cả”", feedback: "Claude không tự kiểm chứng được." },
    ],
    answer: "a",
    explanation: "Có phép kiểm tra, Claude sửa, chạy, đọc lỗi và sửa tiếp đến khi đạt.",
  },
  {
    questionId: "ch06-l06-q06", lessonId: L, conceptId: "boundary", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Hàm chấp nhận số nguyên từ 1 đến 100. Bộ giá trị nào kiểm tra biên tốt nhất?",
    options: [
      { id: "a", text: "0, 1, 100, 101", feedback: "Đúng — ngay tại và vượt ngưỡng một đơn vị." },
      { id: "b", text: "20, 40, 60", feedback: "Toàn giá trị giữa khoảng." },
      { id: "c", text: "50", feedback: "Chỉ một trường hợp bình thường." },
    ],
    answer: "a",
    explanation: "Lỗi “lệch một” (≤ thay vì <) chỉ lộ ra ở biên.",
  },
  {
    questionId: "ch06-l06-q07", lessonId: L, conceptId: "error-cases", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép đầu vào của ô Số lượng với kết quả mong đợi.",
    pairs: [
      { id: "p1", left: "“” (để trống)", right: "Báo lỗi bắt buộc nhập" },
      { id: "p2", left: "“-5”", right: "Báo lỗi số âm" },
      { id: "p3", left: "“abc”", right: "Báo lỗi không phải số" },
      { id: "p4", left: "“50”", right: "Hợp lệ" },
    ],
    explanation: "Mỗi loại dữ liệu sai nên có thông báo riêng, dễ hiểu.",
  },
  {
    questionId: "ch06-l06-q08", lessonId: L, conceptId: "goal-hook", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Lệnh `/goal all tests in tests/auth pass and lint is clean` làm gì?",
    options: [
      { id: "a", text: "Đặt điều kiện hoàn thành; một model riêng kiểm tra sau mỗi lượt và Claude làm tiếp đến khi đạt", feedback: "Đúng." },
      { id: "b", text: "Chạy test đúng một lần rồi dừng", feedback: "/goal giữ Claude làm đến khi đạt điều kiện." },
      { id: "c", text: "Xoá các test lỗi", feedback: "Không bao giờ." },
    ],
    answer: "a",
    explanation: "Theo Best practices: hữu ích nhất cho việc chạy lâu trong nền.",
  },
  {
    questionId: "ch06-l06-q09", lessonId: L, conceptId: "evidence-test", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Claude báo “Tất cả test đều đạt”. Câu hỏi tiếp theo hữu ích nhất?",
    options: [
      { id: "a", text: "“Cho tôi xem lệnh đã chạy và output, gồm số test đã chạy”", feedback: "Đúng." },
      { id: "b", text: "“Cảm ơn, xong rồi”", feedback: "Chưa có bằng chứng." },
      { id: "c", text: "“Viết thêm 50 test nữa”", feedback: "Chưa kiểm chứng kết quả hiện tại." },
    ],
    answer: "a",
    explanation: "Số test đã chạy còn giúp phát hiện test bị bỏ qua.",
  },
  {
    questionId: "ch06-l06-q10", lessonId: L, conceptId: "test-first", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp quy trình “viết test trước” cho một tính năng mới.",
    items: [
      { id: "a", text: "Viết test mô tả hành vi mong muốn" },
      { id: "b", text: "Chạy test và xác nhận nó trượt" },
      { id: "c", text: "Viết code cho tính năng" },
      { id: "d", text: "Chạy lại đến khi test đạt" },
      { id: "e", text: "Commit cả test và code" },
    ],
    explanation: "Xác nhận test trượt trước chứng minh test thực sự kiểm tra hành vi mới.",
  },
  {
    questionId: "ch06-l06-q11", lessonId: L, conceptId: "honest-tests", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn nhờ viết test cho tính năng chưa được code, nhưng test mới đạt ngay lần chạy đầu. Điều này cho thấy gì?",
    options: [
      { id: "a", text: "Test đáng ngờ — có thể không thật sự kiểm tra hành vi mới; cần xem lại assert", feedback: "Đúng." },
      { id: "b", text: "Tính năng đã có sẵn, không cần làm gì", feedback: "Hãy kiểm tra trước khi kết luận." },
      { id: "c", text: "Test càng dễ đạt càng tốt", feedback: "Test phải trượt khi hành vi chưa đúng." },
    ],
    answer: "a",
    explanation: "Test không bao giờ trượt thì không bảo vệ được gì.",
  },
  {
    questionId: "ch06-l06-q12", lessonId: L, conceptId: "goal-hook", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "matching",
    prompt: "Ghép cách đặt phép kiểm tra với mức độ cưỡng chế.",
    pairs: [
      { id: "p1", left: "Ghi trong yêu cầu", right: "Claude tự quyết khi nào thấy đủ" },
      { id: "p2", left: "/goal", right: "Model riêng kiểm tra điều kiện sau mỗi lượt" },
      { id: "p3", left: "Stop hook", right: "Script chặn kết thúc lượt nếu kiểm tra chưa đạt" },
      { id: "p4", left: "/code-review", right: "Bản xem xét mới, chưa thấy hội thoại, đọc diff" },
    ],
    explanation: "Theo mục Give Claude a check to run trong Best practices.",
  },
  {
    questionId: "ch06-l06-q13", lessonId: L, conceptId: "edge-cases", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Danh sách test Claude đề xuất có những mục chưa ổn. Chọn chúng.",
    segments: [
      { id: "s1", text: "Test chỉ gọi tinhTong() mà không kiểm tra kết quả trả về.", isError: true, why: "Không có assert thì test không phát hiện được gì." },
      { id: "s2", text: "Test danh sách rỗng trả về 0.", isError: false },
      { id: "s3", text: "Dùng file dữ liệu thật của khách hàng có thông tin cá nhân làm dữ liệu test.", isError: true, why: "Dùng dữ liệu mẫu đã ẩn danh; không đưa dữ liệu cá nhân vào kho mã." },
      { id: "s4", text: "Test dòng trống bị bỏ qua khi cộng.", isError: false },
    ],
    explanation: "Test tốt có kết quả mong đợi rõ ràng và dùng dữ liệu mẫu an toàn.",
  },
  {
    questionId: "ch06-l06-q14", lessonId: L, conceptId: "match-style", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây cho cụ thể và có vòng kiểm tra.",
    source: "viết test cho report.js",
    rubric: [
      { id: "fn", label: "Chỉ rõ hàm", weight: 1, check: { kind: "regex", pattern: "(ham|function) [a-z]" }, pass: "Có hàm.", fail: "Nêu hàm cần test." },
      { id: "cases", label: "Có trường hợp biên/lỗi", weight: 1, check: { kind: "regex", pattern: "(rong|dong trong|so am|bien|loi)" }, pass: "Có trường hợp biên/lỗi.", fail: "Liệt kê trường hợp biên và lỗi." },
      { id: "style", label: "Theo phong cách sẵn có", weight: 1, check: { kind: "regex", pattern: "(theo cach viet|theo mau|giong cac test|cac test trong)" }, pass: "Có yêu cầu theo phong cách.", fail: "Yêu cầu theo cách viết của test sẵn có." },
      { id: "loop", label: "Chạy đến khi đạt", weight: 1, check: { kind: "regex", pattern: "den khi[^\\n]*dat" }, pass: "Có vòng kiểm tra.", fail: "Chạy test và tiếp tục đến khi đạt." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Viết test cho hàm tinhTong trong @src/report.js, theo cách viết của các test trong tests/. Trường hợp: dữ liệu điển hình, danh sách rỗng, dòng trống, số âm. Chạy npm test và tiếp tục đến khi đạt; cho tôi xem kết quả.",
    explanation: "Hàm cụ thể + trường hợp + phong cách + vòng kiểm tra.",
  },
  {
    questionId: "ch06-l06-q15", lessonId: L, conceptId: "test-first", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết yêu cầu gửi Claude để làm tính năng mới theo cách “viết test trước”.",
    source: "Tính năng: hàm tyLeLoi(congDoan, rows) trả về tỷ lệ % lỗi của một công đoạn, làm tròn 1 chữ số thập phân; công đoạn không có dữ liệu trả về 0.",
    rubric: [
      { id: "first", label: "Viết test trước", weight: 1, check: { kind: "regex", pattern: "(viet test truoc|truoc tien[^\\n]*test)" }, pass: "Có test trước.", fail: "Yêu cầu viết test trước khi viết code." },
      { id: "fail", label: "Xác nhận test trượt", weight: 1, check: { kind: "regex", pattern: "(truot|fail|that bai)" }, pass: "Có xác nhận trượt.", fail: "Yêu cầu chạy và xác nhận test trượt trước khi viết code." },
      { id: "cases", label: "Trường hợp cụ thể", weight: 1, check: { kind: "regex", pattern: "(lam tron|khong co du lieu|tra ve 0)" }, pass: "Có trường hợp cụ thể.", fail: "Nêu làm tròn và trường hợp không có dữ liệu." },
      { id: "keep", label: "Không sửa test để cho qua", weight: 1, check: { kind: "regex", pattern: "khong (sua|doi) test|giu nguyen test" }, pass: "Có ràng buộc.", fail: "Nói rõ không sửa test khi viết code." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Trước tiên chỉ viết test cho hàm tyLeLoi(congDoan, rows) trong tests/report.test.js: tỷ lệ đúng với dữ liệu mẫu; làm tròn 1 chữ số thập phân; công đoạn không có dữ liệu trả về 0. Chạy npm test và xác nhận các test này trượt. Sau đó viết code trong src/report.js đến khi test đạt; không sửa test trong lúc viết code. Cho tôi xem kết quả trước và sau.",
    explanation: "Test viết trước, trượt trước, rồi mới có code — test không bị “uốn” theo code.",
  },
];
