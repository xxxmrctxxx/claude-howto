import type { Question } from "@/lib/types/content";

const L = "ch12-l02";

/** 15 questions for "Viết yêu cầu" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh12L02: Question[] = [
  {
    questionId: "ch12-l02-q01", lessonId: L, conceptId: "acceptance-criteria", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền từ còn thiếu trong khuôn tiêu chí chấp nhận.",
    template: "Khuôn tiêu chí chấp nhận: Cho … , [[b1]] … , thì … .",
    blanks: [{ id: "b1", accepted: ["khi"], width: 5 }],
    explanation: "Cho (điều kiện) – Khi (hành động) – Thì (kết quả mong đợi).",
  },
  {
    questionId: "ch12-l02-q02", lessonId: L, conceptId: "measurable-terms", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Yêu cầu nào kiểm tra được?",
    options: [
      { id: "a", text: "Bảng tuần tạo xong ≤ 1 phút cho 500 ghi chú", feedback: "Đúng." },
      { id: "b", text: "Hệ thống phải nhanh", feedback: "Không có số." },
      { id: "c", text: "Giao diện hiện đại", feedback: "Mơ hồ." },
    ],
    answer: "a",
    explanation: "Có con số và điều kiện đo.",
  },
  {
    questionId: "ch12-l02-q03", lessonId: L, conceptId: "fresh-session", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Theo best practices, sau khi Claude phỏng vấn và viết SPEC.md, nên mở phiên mới để triển khai.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Phiên mới có ngữ cảnh sạch, tập trung vào việc triển khai từ SPEC.",
  },
  {
    questionId: "ch12-l02-q04", lessonId: L, conceptId: "user-stories", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Câu chuyện người dùng viết theo khuôn nào?",
    options: [
      { id: "a", text: "Là [ai], tôi muốn [làm gì] để [được gì]", feedback: "Đúng." },
      { id: "b", text: "Hệ thống phải [làm mọi thứ]", feedback: "Thiếu người dùng và mục đích." },
      { id: "c", text: "Lập trình viên sẽ [viết code]", feedback: "Không phải góc nhìn người dùng." },
    ],
    answer: "a",
    explanation: "Gói ai, nhu cầu và lợi ích.",
  },
  {
    questionId: "ch12-l02-q05", lessonId: L, conceptId: "user-signoff", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao cần người dùng đọc và xác nhận SPEC.md trước khi code?",
    options: [
      { id: "a", text: "Phát hiện hiểu lầm khi sửa còn rẻ — sửa văn bản thay vì sửa phần mềm", feedback: "Đúng." },
      { id: "b", text: "Để có chữ ký cho đẹp hồ sơ", feedback: "Mục đích chính là bắt hiểu lầm sớm." },
      { id: "c", text: "Không cần, Claude hiểu hết", feedback: "Claude không biết điều người dùng chưa nói." },
    ],
    answer: "a",
    explanation: "Sai lệch yêu cầu càng phát hiện muộn càng đắt.",
  },
  {
    questionId: "ch12-l02-q06", lessonId: L, conceptId: "interview-first", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn chỉ có ý tưởng chung, chưa nghĩ hết trường hợp biên. Cách bắt đầu phù hợp với Claude Code?",
    options: [
      { id: "a", text: "Yêu cầu ngắn và nhờ Claude phỏng vấn bằng AskUserQuestion, rồi để Claude viết SPEC.md", feedback: "Đúng." },
      { id: "b", text: "Bảo Claude viết code ngay rồi sửa dần", feedback: "Dễ làm sai hướng, tốn công sửa." },
      { id: "c", text: "Tự viết SPEC 30 trang trước khi hỏi ai", feedback: "Có thể bỏ sót điều người dùng cần." },
    ],
    answer: "a",
    explanation: "Phỏng vấn lộ ra những điều bạn chưa nghĩ tới.",
  },
  {
    questionId: "ch12-l02-q07", lessonId: L, conceptId: "edge-cases", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Với dự án trích lỗi từ ghi chú ca, ngoại lệ nào nên có trong SPEC? Chọn tất cả.",
    options: [
      { id: "a", text: "Ghi chú không nêu số lượng", feedback: "Đúng." },
      { id: "b", text: "Một ghi chú có hai lỗi khác nhau", feedback: "Đúng." },
      { id: "c", text: "Ghi chú dùng chữ viết tắt của xưởng", feedback: "Đúng." },
      { id: "d", text: "Màu nền trang web", feedback: "Không phải ngoại lệ dữ liệu." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Ngoại lệ thật lấy từ dữ liệu thật.",
  },
  {
    questionId: "ch12-l02-q08", lessonId: L, conceptId: "examples-in-spec", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Claude hiểu sai cách ghi “mức độ” trong bản ghi. Bổ sung gì vào SPEC hiệu quả nhất?",
    options: [
      { id: "a", text: "Vài ví dụ đầu vào – đầu ra thật, mỗi mức độ một ví dụ", feedback: "Đúng." },
      { id: "b", text: "Viết hoa “PHẢI ĐÚNG MỨC ĐỘ”", feedback: "Nhấn mạnh không thay được ví dụ." },
      { id: "c", text: "Bỏ trường mức độ", feedback: "Mất thông tin cần." },
    ],
    answer: "a",
    explanation: "Ví dụ là cách truyền đạt chính xác nhất (Chương 3).",
  },
  {
    questionId: "ch12-l02-q09", lessonId: L, conceptId: "non-functional", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép yêu cầu với loại của nó.",
    pairs: [
      { id: "p1", left: "Trích được công đoạn, loại lỗi, số lượng", right: "Chức năng" },
      { id: "p2", left: "Dữ liệu ghi chú chỉ lưu trên máy chủ nội bộ", right: "Phi chức năng: dữ liệu" },
      { id: "p3", left: "Chi phí API ≤ ngân sách tuần đã duyệt", right: "Phi chức năng: chi phí" },
      { id: "p4", left: "Tích hợp ERP", right: "Ngoài phạm vi" },
    ],
    explanation: "SPEC đầy đủ có cả chức năng, phi chức năng và ranh giới.",
  },
  {
    questionId: "ch12-l02-q10", lessonId: L, conceptId: "open-questions", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Khi viết SPEC, bạn chưa biết trưởng xưởng muốn bảng theo tuần hay theo ca. Xử lý thế nào?",
    options: [
      { id: "a", text: "Ghi vào mục “Câu hỏi còn mở”, hỏi người dùng trước khi chốt", feedback: "Đúng." },
      { id: "b", text: "Tự chọn theo ý mình, không ghi lại", feedback: "Dễ làm sai nhu cầu." },
      { id: "c", text: "Làm cả hai cho chắc", feedback: "Tăng phạm vi không cần thiết." },
    ],
    answer: "a",
    explanation: "Câu hỏi mở được theo dõi, không bị quên.",
  },
  {
    questionId: "ch12-l02-q11", lessonId: L, conceptId: "spec-file", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Yêu cầu thay đổi giữa chừng (thêm trường “ca làm việc”). Thứ tự hợp lý?",
    options: [
      { id: "a", text: "Sửa SPEC.md và tiêu chí trước, xin xác nhận, rồi mới sửa code", feedback: "Đúng." },
      { id: "b", text: "Sửa code trước, SPEC để sau", feedback: "SPEC lệch với code, khó kiểm." },
      { id: "c", text: "Không cần ghi lại", feedback: "Mất dấu yêu cầu." },
    ],
    answer: "a",
    explanation: "SPEC là nguồn sự thật cho cả người và Claude.",
  },
  {
    questionId: "ch12-l02-q12", lessonId: L, conceptId: "acceptance-criteria", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn viết tiêu chí chấp nhận như dưới đây. Chọn các tiêu chí không kiểm tra được.",
    segments: [
      { id: "s1", text: "Cho 50 ghi chú mẫu có đáp án, khi trích xuất, thì ≥ 45 bản ghi khớp.", isError: false },
      { id: "s2", text: "Khi trưởng xưởng mở bảng, thì thấy dễ chịu.", isError: true, why: "Cảm nhận không đo được — thay bằng tác vụ có thời gian." },
      { id: "s3", text: "Cho ghi chú thiếu số lượng, khi trích xuất, thì so_luong trống và bản ghi vào hàng chờ.", isError: false },
      { id: "s4", text: "Hệ thống phải tốt hơn cách làm cũ.", isError: true, why: "“Tốt hơn” theo tiêu chí nào? Cần số." },
    ],
    explanation: "Mỗi tiêu chí phải chấm được đạt/không đạt.",
  },
  {
    questionId: "ch12-l02-q13", lessonId: L, conceptId: "measurable-terms", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Người dùng muốn “AI phải chính xác 100%”. Bạn phản hồi thế nào trong SPEC?",
    options: [
      { id: "a", text: "Đặt ngưỡng đo được trên bộ mẫu (ví dụ ≥ 90%) và quy trình người duyệt hàng chờ cho phần không chắc", feedback: "Đúng." },
      { id: "b", text: "Ghi nguyên “100%”", feedback: "Không thực tế, sẽ luôn “không đạt”." },
      { id: "c", text: "Bỏ yêu cầu độ chính xác", feedback: "Mất tiêu chí quan trọng." },
    ],
    answer: "a",
    explanation: "Kết hợp ngưỡng đo được với kiểm soát của con người.",
  },
  {
    questionId: "ch12-l02-q14", lessonId: L, conceptId: "interview-first", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây để Claude phỏng vấn bạn và viết SPEC thay vì code ngay.",
    source: "làm cho tôi app trích lỗi từ ghi chú ca",
    rubric: [
      { id: "interview", label: "Nhờ phỏng vấn", weight: 1, check: { kind: "anyKeyword", keywords: ["phỏng vấn", "hỏi tôi", "askuserquestion"] }, pass: "Có phỏng vấn.", fail: "Yêu cầu Claude hỏi bạn trước." },
      { id: "spec", label: "Ra SPEC.md", weight: 1, check: { kind: "anyKeyword", keywords: ["spec"] }, pass: "Có SPEC.", fail: "Yêu cầu viết đặc tả vào SPEC.md." },
      { id: "nocode", label: "Chưa code", weight: 1, check: { kind: "anyKeyword", keywords: ["chưa viết code", "chưa code", "không viết code", "đừng viết code"] }, pass: "Chặn code sớm.", fail: "Dặn chưa viết code." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Đọc @dieu-le.md và ví dụ trong mau/. Tôi muốn trích bản ghi lỗi từ ghi chú ca. Hãy phỏng vấn tôi bằng AskUserQuestion về trường hợp biên, dữ liệu, chi phí và đánh đổi. Khi đủ thông tin, viết đặc tả vào SPEC.md với tiêu chí Cho/Khi/Thì. Chưa viết code.",
    explanation: "Phỏng vấn → SPEC → phiên mới mới code.",
  },
  {
    questionId: "ch12-l02-q15", lessonId: L, conceptId: "acceptance-criteria", learningObjective: "o2", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết 2 tiêu chí chấp nhận dạng Cho/Khi/Thì cho câu chuyện: “Là tổ trưởng QC, tôi muốn tra nhanh bước kiểm tra trong hướng dẫn công việc để không phải lật 40 file.”",
    source: "Công cụ: Project trên claude.ai chứa 40 file hướng dẫn công việc.",
    rubric: [
      { id: "gwt", label: "Cho/Khi/Thì", weight: 1, check: { kind: "regex", pattern: "\\bkhi\\b[^\\n]*\\bthi\\b" }, pass: "Có khuôn.", fail: "Dùng khuôn Cho/Khi/Thì." },
      { id: "number", label: "Có số", weight: 1, check: { kind: "regex", pattern: "\\d+" }, pass: "Có số.", fail: "Thêm con số (thời gian, số câu đúng)." },
      { id: "source", label: "Có nguồn/kiểm chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["nguồn", "tên file", "trích dẫn", "câu hỏi mẫu"] }, pass: "Kiểm chứng được.", fail: "Yêu cầu nêu tên file nguồn hoặc dùng bộ câu hỏi mẫu." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "1. Cho bộ 20 câu hỏi mẫu có đáp án từ tổ QC, khi hỏi trong Project, thì ≥ 18 câu trả lời đúng và nêu tên file nguồn.\n2. Cho câu hỏi về bước không có trong 40 file, khi hỏi, thì Claude trả lời “không tìm thấy trong tài liệu” thay vì tự suy đoán.",
    explanation: "Có bộ mẫu, có số, có ngoại lệ.",
  },
];
