import type { Question } from "@/lib/types/content";

const L = "ch06-l02";

/** 15 questions for "Lập kế hoạch trước khi code" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh06L02: Question[] = [
  {
    questionId: "ch06-l02-q01", lessonId: L, conceptId: "enter-plan", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Giữa phiên, làm sao biết mình đã vào chế độ Plan?",
    options: [
      { id: "a", text: "Nhấn Shift+Tab cho đến khi thanh trạng thái hiện “⏸ plan mode on”", feedback: "Đúng." },
      { id: "b", text: "Gõ /clear", feedback: "/clear xoá hội thoại." },
      { id: "c", text: "Nhấn Esc hai lần", feedback: "Esc hai lần (ô nhập trống) mở menu tua lại." },
    ],
    answer: "a",
    explanation: "Shift+Tab chuyển vòng qua các chế độ quyền; nhấn lần nữa để rời Plan mà không duyệt.",
  },
  {
    questionId: "ch06-l02-q02", lessonId: L, conceptId: "plan-mode", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Ở chế độ Plan, Claude có thể đọc file và chạy lệnh để tìm hiểu, nhưng không sửa mã nguồn cho đến khi bạn duyệt kế hoạch.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Theo tài liệu Permission modes: Plan khảo sát và đề xuất, không sửa source trước khi duyệt.",
  },
  {
    questionId: "ch06-l02-q03", lessonId: L, conceptId: "plan-prefix", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền tiền tố.",
    template: "Gõ [[b1]] ở đầu một yêu cầu để chỉ yêu cầu đó được lập kế hoạch trước.",
    blanks: [{ id: "b1", accepted: ["/plan"], width: 7 }],
    explanation: "Muốn lập kế hoạch lại sau khi duyệt, dùng Shift+Tab hoặc thêm /plan trước yêu cầu tiếp theo.",
  },
  {
    questionId: "ch06-l02-q04", lessonId: L, conceptId: "keep-planning", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Kế hoạch Claude đề xuất chưa đúng ý. Chọn lựa chọn nào để tiếp tục chỉnh?",
    options: [
      { id: "a", text: "No, keep planning — rồi nói điều cần sửa", feedback: "Đúng." },
      { id: "b", text: "Yes, and use auto mode", feedback: "Đó là duyệt và cho làm." },
      { id: "c", text: "Đóng terminal", feedback: "Mất phiên làm việc." },
    ],
    answer: "a",
    explanation: "Ở lại Plan, góp ý, và Claude cập nhật kế hoạch.",
  },
  {
    questionId: "ch06-l02-q05", lessonId: L, conceptId: "edit-plan", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Muốn sửa trực tiếp nội dung kế hoạch trong trình soạn thảo trước khi Claude làm, nhấn gì?",
    options: [
      { id: "a", text: "Ctrl+G", feedback: "Đúng." },
      { id: "b", text: "Ctrl+C", feedback: "Ctrl+C dừng hoặc xoá ô nhập." },
      { id: "c", text: "Tab", feedback: "Tab dùng để tự điền." },
    ],
    answer: "a",
    explanation: "Ctrl+G mở kế hoạch đề xuất trong trình soạn thảo mặc định.",
  },
  {
    questionId: "ch06-l02-q06", lessonId: L, conceptId: "approve-options", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép lựa chọn khi duyệt kế hoạch với ý nghĩa.",
    pairs: [
      { id: "p1", left: "Yes, and use auto mode", right: "Duyệt và để Claude làm tiếp, bộ phân loại chặn hành động rủi ro" },
      { id: "p2", left: "Yes, manually approve edits", right: "Duyệt, nhưng bạn xem từng thay đổi" },
      { id: "p3", left: "No, keep planning", right: "Ở lại Plan và nói điều cần sửa" },
    ],
    explanation: "Nếu không có auto mode, lựa chọn đầu hiện là “Yes, auto-accept edits”.",
  },
  {
    questionId: "ch06-l02-q07", lessonId: L, conceptId: "manual-approve", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Kế hoạch đã ổn nhưng các thay đổi chạm vào cấu hình kết nối cơ sở dữ liệu production. Nên chọn gì?",
    options: [
      { id: "a", text: "Yes, manually approve edits", feedback: "Đúng — rủi ro cao thì xem từng thay đổi." },
      { id: "b", text: "Yes, and use auto mode cho nhanh", feedback: "Rủi ro cao không nên để tự động." },
      { id: "c", text: "Bỏ qua kế hoạch, tự sửa tay không kiểm tra", feedback: "Mất lợi ích của kế hoạch đã duyệt." },
    ],
    answer: "a",
    explanation: "Chọn cách duyệt theo mức rủi ro của thay đổi.",
  },
  {
    questionId: "ch06-l02-q08", lessonId: L, conceptId: "plan-cli", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bạn muốn mở một phiên mới mà ngay từ đầu đã ở chế độ Plan. Lệnh nào?",
    options: [
      { id: "a", text: "claude --permission-mode plan", feedback: "Đúng." },
      { id: "b", text: "claude -p plan", feedback: "-p chạy một lần rồi thoát." },
      { id: "c", text: "claude --plan-only", feedback: "Không có cờ này." },
    ],
    answer: "a",
    explanation: "Theo Common workflows và Permission modes.",
  },
  {
    questionId: "ch06-l02-q09", lessonId: L, conceptId: "when-plan", learningObjective: "o4", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Việc nào được lợi nhiều nhất khi lập kế hoạch trước?",
    options: [
      { id: "a", text: "Đổi cấu trúc dữ liệu dùng chung ở 12 file mà bạn chưa quen", feedback: "Đúng — lớn và chưa rõ hướng." },
      { id: "b", text: "Sửa một lỗi chính tả trong README", feedback: "Rất nhỏ, làm thẳng được." },
      { id: "c", text: "Hỏi lệnh git để xem log", feedback: "Chỉ là câu hỏi." },
    ],
    answer: "a",
    explanation: "Kế hoạch giúp tránh làm lại tốn kém khi hướng ban đầu sai.",
  },
  {
    questionId: "ch06-l02-q10", lessonId: L, conceptId: "good-plan", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu lập kế hoạch dưới đây để nhận về một kế hoạch dễ duyệt.",
    source: "/plan làm chức năng gửi email báo cáo",
    rubric: [
      { id: "scope", label: "Phạm vi", weight: 1, check: { kind: "regex", pattern: "(pham vi|chi (sua|trong)|khong (doi|sua))" }, pass: "Có phạm vi.", fail: "Nêu phạm vi: chỉ trong thư mục nào, không đổi gì." },
      { id: "verify", label: "Cách kiểm chứng", weight: 1, check: { kind: "regex", pattern: "(kiem chung|test|kiem tra)" }, pass: "Có kiểm chứng.", fail: "Yêu cầu nêu cách kiểm chứng." },
      { id: "risk", label: "Rủi ro", weight: 1, check: { kind: "anyKeyword", keywords: ["rủi ro"] }, pass: "Có rủi ro.", fail: "Yêu cầu liệt kê rủi ro." },
      { id: "nocode", label: "Chưa sửa code", weight: 1, check: { kind: "anyKeyword", keywords: ["chưa sửa", "chưa viết code", "chỉ lập kế hoạch"] }, pass: "Rõ là chỉ lập kế hoạch.", fail: "Nói rõ: chưa sửa code." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "/plan Thêm chức năng gửi email báo cáo tuần cho trưởng phòng QA. Phạm vi: chỉ trong src/notify/ và tests/notify/; không đổi định dạng báo cáo. Liệt kê file sẽ sửa, các bước, cách kiểm chứng (test gửi thử tới hộp thư giả lập) và rủi ro (gửi nhầm người nhận, lộ cấu hình SMTP). Chưa sửa code.",
    explanation: "Phạm vi + kiểm chứng + rủi ro + “chưa sửa code” giúp kế hoạch tập trung và dễ duyệt.",
  },
  {
    questionId: "ch06-l02-q11", lessonId: L, conceptId: "default-plan", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Nhóm muốn mọi phiên terminal trong dự án bắt đầu ở chế độ Plan. Cấu hình nào?",
    options: [
      { id: "a", text: "Đặt permissions.defaultMode là \"plan\" trong .claude/settings.json", feedback: "Đúng." },
      { id: "b", text: "Ghi “luôn lập kế hoạch” vào README", feedback: "README không cấu hình chế độ quyền." },
      { id: "c", text: "Đổi tên thư mục dự án thành plan", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Với tiện ích VS Code, tài liệu hướng dẫn đặt claudeCode.initialPermissionMode trong user settings.",
  },
  {
    questionId: "ch06-l02-q12", lessonId: L, conceptId: "review-plan", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Chọn các bước có vấn đề trong kế hoạch Claude đề xuất.",
    segments: [
      { id: "s1", text: "Bước 1: đọc src/report.js và các test liên quan.", isError: false },
      { id: "s2", text: "Bước 2: xoá thư mục tests/old vì có test đang lỗi.", isError: true, why: "Xoá test để “cho qua” che giấu lỗi; cần sửa hoặc đánh giá từng test." },
      { id: "s3", text: "Bước 3: đổi tên hàm public tinhTong mà không nêu cập nhật nơi gọi.", isError: true, why: "Đổi tên rộng dễ làm hỏng nơi gọi; cần liệt kê và cập nhật, hoặc giữ tên." },
      { id: "s4", text: "Bước 4: chạy npm test và báo kết quả.", isError: false },
    ],
    explanation: "Chất vấn mọi bước xoá, đổi tên rộng hoặc thiếu kiểm chứng trước khi duyệt.",
  },
  {
    questionId: "ch06-l02-q13", lessonId: L, conceptId: "approve-options", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Kế hoạch refactor nhỏ trong một module có bộ test đầy đủ, không chạm cấu hình hay dữ liệu thật. Cách duyệt nào hợp lý nhất?",
    options: [
      { id: "a", text: "Yes, and use auto mode (hoặc auto-accept edits), rồi xem kết quả test", feedback: "Đúng — rủi ro thấp, có lưới an toàn bằng test." },
      { id: "b", text: "Duyệt từng thay đổi trong 80 chỗ sửa nhỏ", feedback: "Được nhưng tốn công không cần thiết." },
      { id: "c", text: "Không duyệt, tự làm lại bằng tay", feedback: "Lãng phí kế hoạch đã tốt." },
    ],
    answer: "a",
    explanation: "Mức giám sát nên tỷ lệ với rủi ro; test là cách kiểm chứng sau cùng.",
  },
  {
    questionId: "ch06-l02-q14", lessonId: L, conceptId: "review-plan", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Kế hoạch có đủ các bước sửa nhưng không có bước nào kiểm chứng kết quả. Bạn làm gì?",
    options: [
      { id: "a", text: "Chọn No, keep planning và yêu cầu thêm bước chạy test cụ thể", feedback: "Đúng." },
      { id: "b", text: "Duyệt luôn, kiểm tra sau nếu nhớ", feedback: "Dễ bỏ sót lỗi." },
      { id: "c", text: "Yêu cầu Claude bỏ luôn phần test cho nhanh", feedback: "Mất bằng chứng đúng sai." },
    ],
    answer: "a",
    explanation: "Kế hoạch không có kiểm chứng là kế hoạch chưa hoàn chỉnh.",
  },
  {
    questionId: "ch06-l02-q15", lessonId: L, conceptId: "good-plan", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết yêu cầu lập kế hoạch (ở chế độ Plan) cho việc chuyển định dạng ngày của toàn bộ ứng dụng sang DD/MM/YYYY.",
    source: "Ứng dụng web nội bộ; ngày hiển thị ở 9 trang và 2 file xuất Excel; có tests/; dữ liệu lưu trong DB theo ISO và không được đổi.",
    rubric: [
      { id: "plan", label: "Chỉ lập kế hoạch", weight: 1, check: { kind: "regex", pattern: "(/plan|chua sua|chua viet code|plan mode)" }, pass: "Rõ là lập kế hoạch.", fail: "Dùng /plan hoặc nói rõ chưa sửa code." },
      { id: "scope", label: "Giới hạn: không đổi dữ liệu DB", weight: 1, check: { kind: "regex", pattern: "(khong doi|giu nguyen)[^\\n]*(db|co so du lieu|iso|du lieu)" }, pass: "Có giới hạn dữ liệu.", fail: "Nêu rõ: không đổi định dạng lưu trong DB." },
      { id: "files", label: "Yêu cầu liệt kê nơi bị ảnh hưởng", weight: 1, check: { kind: "regex", pattern: "(liet ke|danh sach)[^\\n]*(file|trang|noi)" }, pass: "Có yêu cầu liệt kê.", fail: "Yêu cầu liệt kê các file/trang bị ảnh hưởng." },
      { id: "verify", label: "Kiểm chứng", weight: 1, check: { kind: "regex", pattern: "(test|kiem chung|kiem tra)" }, pass: "Có kiểm chứng.", fail: "Yêu cầu bước kiểm chứng (test, xuất thử Excel)." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "/plan Chuyển định dạng hiển thị ngày sang DD/MM/YYYY trên toàn ứng dụng. Giữ nguyên định dạng ISO lưu trong DB, không đổi dữ liệu. Hãy liệt kê các file và trang hiển thị ngày, 2 file xuất Excel, các bước thực hiện, cách kiểm chứng (test cho hàm định dạng, xuất thử Excel) và rủi ro. Chưa sửa code.",
    explanation: "Yêu cầu kế hoạch tốt nói rõ điều không được đổi, đòi danh sách nơi bị ảnh hưởng và bước kiểm chứng.",
  },
];
