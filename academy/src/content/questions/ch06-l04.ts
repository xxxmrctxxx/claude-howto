import type { Question } from "@/lib/types/content";

const L = "ch06-l04";

/** 15 questions for "Debug" — 5 beginner, 5 intermediate, 5 advanced. */
export const questionsCh06L04: Question[] = [
  {
    questionId: "ch06-l04-q01", lessonId: L, conceptId: "error-info", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Khi nhờ Claude debug, nên đưa những thông tin nào? Chọn tất cả.",
    options: [
      { id: "a", text: "Thông báo lỗi nguyên văn", feedback: "Đúng." },
      { id: "b", text: "Lệnh để tái hiện lỗi", feedback: "Đúng." },
      { id: "c", text: "Lỗi luôn xảy ra hay chỉ thỉnh thoảng", feedback: "Đúng." },
      { id: "d", text: "Mức độ bực bội của bạn", feedback: "Không giúp tìm nguyên nhân." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Common workflows: nêu lệnh tái hiện, các bước, và lỗi là liên tục hay thỉnh thoảng.",
  },
  {
    questionId: "ch06-l04-q02", lessonId: L, conceptId: "reproduce", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao đưa lệnh tái hiện lỗi lại quan trọng?",
    options: [
      { id: "a", text: "Claude chạy được lệnh, thấy stack trace, và dùng lại lệnh đó để kiểm chứng bản sửa", feedback: "Đúng." },
      { id: "b", text: "Để Claude biết bạn dùng hệ điều hành nào", feedback: "Không phải lý do chính." },
      { id: "c", text: "Vì Claude không đọc được code nếu thiếu lệnh", feedback: "Claude vẫn đọc được code; lệnh giúp tái hiện và kiểm chứng." },
    ],
    answer: "a",
    explanation: "Một lệnh tái hiện vừa là manh mối vừa là phép kiểm tra đạt/không đạt.",
  },
  {
    questionId: "ch06-l04-q03", lessonId: L, conceptId: "symptom-masking", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "Đánh dấu skip cho test đang trượt là một cách sửa lỗi hợp lệ.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Skip test chỉ làm bộ test xanh; lỗi vẫn còn.",
  },
  {
    questionId: "ch06-l04-q04", lessonId: L, conceptId: "shell-mode", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trong phiên Claude Code, cách nhanh nhất để chạy npm test và đưa kết quả vào hội thoại?",
    options: [
      { id: "a", text: "Gõ !npm test", feedback: "Đúng — tiền tố ! chạy lệnh trực tiếp." },
      { id: "b", text: "Gõ /npm test", feedback: "/ dành cho lệnh của Claude Code." },
      { id: "c", text: "Gõ @npm test", feedback: "@ dùng để tham chiếu file." },
    ],
    answer: "a",
    explanation: "Shell mode: chạy lệnh, thêm output vào phiên và để Claude phản hồi.",
  },
  {
    questionId: "ch06-l04-q05", lessonId: L, conceptId: "screenshot", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bảng báo cáo hiển thị lệch cột trên trình duyệt nhưng không có thông báo lỗi. Cách đưa manh mối tốt nhất?",
    options: [
      { id: "a", text: "Dán ảnh chụp màn hình vào Claude Code (Ctrl+V; Alt+V trên Windows/WSL) và hỏi nguyên nhân", feedback: "Đúng." },
      { id: "b", text: "Mô tả “nhìn hơi xấu”", feedback: "Quá mơ hồ cho lỗi giao diện." },
      { id: "c", text: "Không cần manh mối, Claude tự biết", feedback: "Claude không thấy màn hình của bạn." },
    ],
    answer: "a",
    explanation: "Common workflows: dùng ảnh khi mô tả bằng chữ khó rõ — ảnh lỗi, giao diện, sơ đồ.",
  },
  {
    questionId: "ch06-l04-q06", lessonId: L, conceptId: "hypotheses", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn đã tái hiện được lỗi. Bước tiếp theo nào giúp tránh sửa mò?",
    options: [
      { id: "a", text: "Nhờ Claude nêu 2–3 giả thuyết nguyên nhân kèm cách xác nhận từng cái, chưa sửa", feedback: "Đúng." },
      { id: "b", text: "Bảo Claude sửa đại chỗ nào nghi nhất", feedback: "Dễ sửa sai chỗ." },
      { id: "c", text: "Viết lại cả module", feedback: "Quá tay khi chưa biết nguyên nhân." },
    ],
    answer: "a",
    explanation: "Giả thuyết + cách xác nhận giúp tìm đúng nguyên nhân gốc.",
  },
  {
    questionId: "ch06-l04-q07", lessonId: L, conceptId: "fix-options", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Lợi ích của việc xin Claude “vài cách sửa” trước khi áp dụng là gì?",
    options: [
      { id: "a", text: "So sánh được ưu nhược điểm và chọn cách sửa đúng nguyên nhân, ít ảnh hưởng chỗ khác", feedback: "Đúng." },
      { id: "b", text: "Để Claude áp dụng cả ba cùng lúc", feedback: "Áp dụng chồng nhiều cách gây rối." },
      { id: "c", text: "Không có lợi ích gì", feedback: "Có — bạn chủ động chọn hướng." },
    ],
    answer: "a",
    explanation: "Common workflows: suggest a few ways to fix… rồi update theo cách đã chọn.",
  },
  {
    questionId: "ch06-l04-q08", lessonId: L, conceptId: "intermittent", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Lỗi chỉ xuất hiện khoảng 1/10 lần chạy. Bạn nên báo cho Claude thế nào?",
    options: [
      { id: "a", text: "Nói rõ lỗi thỉnh thoảng mới xảy ra, các điều kiện đã thấy, và nhờ thêm log hoặc chạy lặp để bắt được lỗi", feedback: "Đúng." },
      { id: "b", text: "Không nói, vì chạy lại thường hết lỗi", feedback: "Bỏ qua manh mối quan trọng." },
      { id: "c", text: "Báo là lỗi luôn xảy ra cho Claude chú ý", feedback: "Thông tin sai dẫn tới giả thuyết sai." },
    ],
    answer: "a",
    explanation: "Lỗi lúc có lúc không thường liên quan dữ liệu, thời gian hoặc chạy song song — cần cách bắt lỗi riêng.",
  },
  {
    questionId: "ch06-l04-q09", lessonId: L, conceptId: "verify-fix", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp các bước của một vòng debug.",
    items: [
      { id: "a", text: "Tái hiện lỗi bằng một lệnh" },
      { id: "b", text: "Nêu giả thuyết và cách xác nhận" },
      { id: "c", text: "Chọn và áp dụng cách sửa nguyên nhân" },
      { id: "d", text: "Chạy lại lệnh tái hiện" },
      { id: "e", text: "Thêm test chống tái phát" },
    ],
    explanation: "Kết thúc bằng test chống tái phát để lỗi không quay lại.",
  },
  {
    questionId: "ch06-l04-q10", lessonId: L, conceptId: "root-cause", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Bản tóm tắt thay đổi Claude gửi có những mục chỉ che triệu chứng. Hãy chọn chúng.",
    segments: [
      { id: "s1", text: "Chuẩn hoá dữ liệu: ngày không có bản ghi được tính 0 trước khi tính tổng.", isError: false },
      { id: "s2", text: "Nếu formatTong gặp undefined thì trả về chuỗi rỗng và không báo gì.", isError: true, why: "Nuốt lỗi: báo cáo thiếu số mà không ai biết." },
      { id: "s3", text: "Thêm test cho tuần có ngày nghỉ.", isError: false },
      { id: "s4", text: "Tắt bước kiểm tra kiểu trong CI để build qua.", isError: true, why: "Tắt cảnh báo thay vì sửa kiểu dữ liệu." },
    ],
    explanation: "Sửa nguyên nhân làm dữ liệu đúng; che triệu chứng chỉ làm cảnh báo biến mất.",
  },
  {
    questionId: "ch06-l04-q11", lessonId: L, conceptId: "course-correct", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn nhờ sửa lỗi trong module xuất Excel, nhưng thấy Claude bắt đầu sửa module đăng nhập. Làm gì?",
    options: [
      { id: "a", text: "Nhấn Esc ngay và nhắc lại phạm vi: chỉ module xuất Excel", feedback: "Đúng." },
      { id: "b", text: "Chờ xong rồi tính", feedback: "Càng chờ càng nhiều thay đổi ngoài ý muốn." },
      { id: "c", text: "Đóng terminal", feedback: "Mất phiên; Esc là đủ." },
    ],
    answer: "a",
    explanation: "Best practices: nhấn Esc ngay khi Claude lệch hướng.",
  },
  {
    questionId: "ch06-l04-q12", lessonId: L, conceptId: "course-correct", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn muốn thử một hướng sửa táo bạo (viết lại toàn bộ hàm đọc CSV) nhưng chưa chắc nó tốt hơn. Cách làm an toàn?",
    options: [
      { id: "a", text: "Cứ để Claude thử; nếu không ổn thì /rewind về điểm trước (Restore code and conversation), và commit trước khi thử", feedback: "Đúng — checkpoint làm hướng táo bạo ít rủi ro." },
      { id: "b", text: "Không bao giờ thử hướng mới", feedback: "Có công cụ để thử an toàn." },
      { id: "c", text: "Thử trực tiếp trên nhánh chính rồi đẩy lên", feedback: "Rủi ro cao, khó quay lại." },
    ],
    answer: "a",
    explanation: "Best practices: /rewind giúp thử hướng táo bạo trước rồi quay lại nếu không được.",
  },
  {
    questionId: "ch06-l04-q13", lessonId: L, conceptId: "evidence", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Claude trả lời: “Đã sửa xong, mọi thứ chạy tốt.” Bạn nên làm gì trước khi commit?",
    options: [
      { id: "a", text: "Yêu cầu xem lệnh đã chạy và kết quả (hoặc tự chạy lại lệnh tái hiện)", feedback: "Đúng." },
      { id: "b", text: "Commit luôn vì Claude đã nói xong", feedback: "Câu khẳng định không có bằng chứng." },
      { id: "c", text: "Hỏi lại “chắc chưa?”", feedback: "Bằng chứng cụ thể tốt hơn lời hứa." },
    ],
    answer: "a",
    explanation: "Đòi bằng chứng: lệnh đã chạy và output.",
  },
  {
    questionId: "ch06-l04-q14", lessonId: L, conceptId: "symptom-masking", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Test tong_tuan trượt vì dòng trống trong CSV làm tổng thành NaN. Cách sửa nào tốt nhất?",
    options: [
      { id: "a", text: "Bỏ qua dòng trống khi đọc CSV và thêm test cho trường hợp đó", feedback: "Đúng — sửa nguyên nhân và chống tái phát." },
      { id: "b", text: "Bọc tinhTong trong try/catch trả về 0", feedback: "Nuốt lỗi, tổng sai mà không ai biết." },
      { id: "c", text: "Đổi kỳ vọng của test thành NaN", feedback: "Sửa test cho khớp kết quả sai." },
    ],
    answer: "a",
    explanation: "Bản sửa tốt làm kết quả đúng và có test bảo vệ.",
  },
  {
    questionId: "ch06-l04-q15", lessonId: L, conceptId: "root-cause", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Lỗi đã được sửa. Viết yêu cầu gửi Claude để chốt lại: giải thích nguyên nhân gốc, thêm test chống tái phát và chứng minh test bắt được lỗi.",
    source: "Lỗi: tổng tuần thành NaN khi CSV có dòng trống ở cuối; đã sửa trong src/report.js (bỏ qua dòng trống).",
    rubric: [
      { id: "cause", label: "Giải thích nguyên nhân gốc", weight: 1, check: { kind: "anyKeyword", keywords: ["nguyên nhân"] }, pass: "Có yêu cầu nguyên nhân.", fail: "Yêu cầu giải thích nguyên nhân gốc ngắn gọn." },
      { id: "test", label: "Test cho đúng trường hợp", weight: 1, check: { kind: "regex", pattern: "test[^\\n]*dong trong|dong trong[^\\n]*test" }, pass: "Có test đúng trường hợp.", fail: "Yêu cầu test cho CSV có dòng trống." },
      { id: "proof", label: "Chứng minh test bắt được lỗi", weight: 1, check: { kind: "regex", pattern: "(truot|fail|that bai)[^\\n]*(truoc|ban cu|chua sua)|(truoc|ban cu|chua sua)[^\\n]*(truot|fail|that bai)" }, pass: "Có chứng minh.", fail: "Yêu cầu cho thấy test trượt với bản cũ và đạt với bản mới." },
      { id: "run", label: "Chạy và cho xem kết quả", weight: 1, check: { kind: "anyKeyword", keywords: ["cho tôi xem", "kết quả", "chạy lại"] }, pass: "Có bằng chứng.", fail: "Yêu cầu chạy và cho xem kết quả." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Giải thích ngắn nguyên nhân gốc của lỗi NaN (2–3 câu).\nThêm test cho CSV có dòng trống ở cuối trong tests/report.test.js.\nChứng minh test có giá trị: cho thấy nó trượt với bản cũ (git stash phần sửa) và đạt với bản mới.\nChạy lại npm test và cho tôi xem kết quả.",
    explanation: "Test chống tái phát chỉ có giá trị khi nó trượt với code lỗi và đạt với code đã sửa.",
  },
];
