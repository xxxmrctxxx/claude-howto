import type { Question } from "@/lib/types/content";

const L = "ch09-l06";

/** 15 questions for "Kiểm thử" (chương 9) — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh09L06: Question[] = [
  {
    questionId: "ch09-l06-q01", lessonId: L, conceptId: "criteria-to-tests", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Mỗi tiêu chí chấp nhận trong SPEC.md nên có ít nhất một ca kiểm thử.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Tiêu chí không có ca là chỗ đang “hy vọng” chứ chưa “biết”.",
  },
  {
    questionId: "ch09-l06-q02", lessonId: L, conceptId: "unit-tests", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Ca nào là test đơn vị?",
    options: [
      { id: "a", text: "Hàm tính tỷ lệ lỗi trả 0 khi sản lượng bằng 0", feedback: "Đúng." },
      { id: "b", text: "Công nhân mở web và ghi một lỗi", feedback: "Đó là test luồng." },
      { id: "c", text: "Tổ trưởng thử bấm trên điện thoại ở xưởng", feedback: "Đó là kiểm thử thủ công." },
    ],
    answer: "a",
    explanation: "Test đơn vị kiểm một hàm nhỏ với đầu vào/ra rõ.",
  },
  {
    questionId: "ch09-l06-q03", lessonId: L, conceptId: "verify-cmd", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Theo Best practices, lệnh nào nhờ Claude build, chạy app và xem kết quả sau khi báo xong?",
    options: [
      { id: "a", text: "/verify", feedback: "Đúng." },
      { id: "b", text: "/init", feedback: "/init tạo CLAUDE.md." },
      { id: "c", text: "/btw", feedback: "/btw hỏi bên lề." },
    ],
    answer: "a",
    explanation: "/verify bắt được loại lỗi test và kiểm tra kiểu bỏ sót.",
  },
  {
    questionId: "ch09-l06-q04", lessonId: L, conceptId: "test-data", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Sao chép dữ liệu thật có tên và số điện thoại công nhân để làm dữ liệu thử là cách tốt nhất.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Dùng dữ liệu mẫu tự tạo; không đưa dữ liệu cá nhân thật vào test.",
  },
  {
    questionId: "ch09-l06-q05", lessonId: L, conceptId: "manual-test", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Việc nào nên kiểm thử thủ công?",
    options: [
      { id: "a", text: "Tổ trưởng đeo găng bấm nút trên điện thoại ở xưởng", feedback: "Đúng." },
      { id: "b", text: "Hàm định dạng ngày", feedback: "Test đơn vị tự động tốt hơn." },
      { id: "c", text: "API trả 400 khi thiếu dữ liệu", feedback: "Test API tự động." },
    ],
    answer: "a",
    explanation: "Điều kiện thật, máy khó mô phỏng.",
  },
  {
    questionId: "ch09-l06-q06", lessonId: L, conceptId: "goal-cmd", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Đặt /goal mọi test trong tests/ đạt và lint sạch có tác dụng gì?",
    options: [
      { id: "a", text: "Một model riêng kiểm tra điều kiện sau mỗi lượt; Claude làm tiếp tới khi đạt", feedback: "Đúng." },
      { id: "b", text: "Xoá các test đang trượt", feedback: "Không — mục tiêu là làm cho test đạt." },
      { id: "c", text: "Chỉ ghi chú cho đẹp", feedback: "Có tác dụng thật." },
    ],
    answer: "a",
    explanation: "Hữu ích cho việc dài chạy nền khi Claude có thể dừng sớm với bản tóm tắt tiến độ.",
  },
  {
    questionId: "ch09-l06-q07", lessonId: L, conceptId: "stop-hook", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "true-false",
    statement: "Stop hook chạy script mỗi khi Claude định kết thúc lượt; nếu script thoát mã 2, Claude bị đưa quay lại làm tiếp.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Mức này do Claude Code (harness) ép buộc, không phụ thuộc Claude tự quyết.",
  },
  {
    questionId: "ch09-l06-q08", lessonId: L, conceptId: "e2e-flow", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép ca kiểm thử với tầng phù hợp.",
    pairs: [
      { id: "p1", left: "Hàm định dạng ngày dd/mm/yyyy", right: "Test đơn vị" },
      { id: "p2", left: "DELETE bởi công nhân trả 403", right: "Test API" },
      { id: "p3", left: "Đăng nhập → ghi lỗi → thấy trong danh sách", right: "Test luồng (end-to-end)" },
      { id: "p4", left: "Dùng trình đọc màn hình đi hết form", right: "Kiểm thử thủ công" },
    ],
    explanation: "Tầng dưới nhiều ca nhanh; tầng trên ít ca nhưng quan trọng.",
  },
  {
    questionId: "ch09-l06-q09", lessonId: L, conceptId: "regression", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn vừa sửa lỗi thống kê đếm trùng khi một lỗi được sửa mô tả. Bước tiếp theo nên là gì?",
    options: [
      { id: "a", text: "Thêm test hồi quy tái hiện đúng tình huống đó, để lỗi không quay lại", feedback: "Đúng." },
      { id: "b", text: "Không cần test vì đã sửa", feedback: "Lỗi có thể quay lại khi sửa chỗ khác." },
      { id: "c", text: "Ghi chú vào README là đã sửa", feedback: "Không ngăn lỗi quay lại." },
    ],
    answer: "a",
    explanation: "Best practices: viết test tái hiện lỗi rồi sửa.",
  },
  {
    questionId: "ch09-l06-q10", lessonId: L, conceptId: "review-fresh", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Vì sao /code-review là một mức kiểm tra khác với việc Claude tự chạy test trong cùng hội thoại?",
    options: [
      { id: "a", text: "Nó review trong subagent mới không thấy hội thoại, nên không bị ảnh hưởng bởi lập luận đã tạo ra code", feedback: "Đúng." },
      { id: "b", text: "Nó chạy nhanh hơn test", feedback: "Không phải điểm chính." },
      { id: "c", text: "Nó tự merge code", feedback: "Không merge." },
    ],
    answer: "a",
    explanation: "Góc nhìn của người không viết code.",
  },
  {
    questionId: "ch09-l06-q11", lessonId: L, conceptId: "test-evidence", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Claude báo “Đã hoàn thành, mọi thứ hoạt động tốt.” Cách hỏi tiếp tốt nhất?",
    options: [
      { id: "a", text: "“Lập bảng mỗi tiêu chí trong @SPEC.md → ca kiểm thử → đạt/chưa, kèm lệnh và kết quả.”", feedback: "Đúng." },
      { id: "b", text: "“Cảm ơn, gửi link cho xưởng nhé.”", feedback: "Chưa có bằng chứng." },
      { id: "c", text: "“Chắc chưa?”", feedback: "Không yêu cầu bằng chứng cụ thể." },
    ],
    answer: "a",
    explanation: "“Xong” nghĩa là mọi tiêu chí có bằng chứng đạt.",
  },
  {
    questionId: "ch09-l06-q12", lessonId: L, conceptId: "stop-hook", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Nhóm yêu cầu: không lượt làm việc nào được kết thúc khi typecheck còn lỗi, không có ngoại lệ. Mức ép buộc nào phù hợp nhất?",
    options: [
      { id: "a", text: "Stop hook chạy typecheck, thoát mã 2 khi còn lỗi", feedback: "Đúng — Claude Code ép buộc." },
      { id: "b", text: "Dặn trong prompt mỗi lần", feedback: "Claude tự quyết khi nào xong; có thể quên." },
      { id: "c", text: "Ghi vào README", feedback: "Không có tác dụng ép buộc." },
    ],
    answer: "a",
    explanation: "Quy tắc không ngoại lệ → hook (Chương 7).",
  },
  {
    questionId: "ch09-l06-q13", lessonId: L, conceptId: "criteria-to-tests", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn lập kế hoạch kiểm thử như dưới đây. Chọn các ý SAI.",
    segments: [
      { id: "s1", text: "Lập bảng tiêu chí → ca kiểm thử từ SPEC.md.", isError: false },
      { id: "s2", text: "Tiêu chí “dùng tốt trên điện thoại ở xưởng” không cần kiểm vì đã có test API.", isError: true, why: "Cần kiểm thử thủ công trên thiết bị thật." },
      { id: "s3", text: "Dùng bảng lương thật để thử chức năng xuất báo cáo.", isError: true, why: "Dữ liệu thử phải tự tạo, không có thông tin cá nhân thật." },
      { id: "s4", text: "Mỗi lỗi đã sửa có một test hồi quy.", isError: false },
    ],
    explanation: "Đủ tầng, dữ liệu thử an toàn, có hồi quy.",
  },
  {
    questionId: "ch09-l06-q14", lessonId: L, conceptId: "e2e-flow", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bộ test có 200 test đơn vị đều đạt, nhưng người dùng báo không lưu được lỗi trên web thật. Bộ test đang thiếu gì nhất?",
    options: [
      { id: "a", text: "Test luồng người dùng (end-to-end) và /verify — kiểm tra frontend, API, dữ liệu phối hợp với nhau", feedback: "Đúng." },
      { id: "b", text: "Thêm 200 test đơn vị nữa", feedback: "Không kiểm được sự phối hợp." },
      { id: "c", text: "Không thiếu gì, người dùng nhầm", feedback: "Cần kiểm chứng trước khi kết luận." },
    ],
    answer: "a",
    explanation: "Các phần đúng riêng lẻ chưa chắc chạy đúng khi ghép lại.",
  },
  {
    questionId: "ch09-l06-q15", lessonId: L, conceptId: "goal-cmd", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết kế hoạch kiểm thử ngắn (4–6 dòng) trước khi giao web đặt phòng họp, có tầng kiểm thử, mức ép buộc và kiểm thử thủ công.",
    source: "SPEC.md có 6 tiêu chí, trong đó: không cho đặt trùng giờ; nhân viên chỉ huỷ lượt của mình; dùng được trên máy tính bảng ở cửa phòng họp. Lệnh: npm test, npm run lint.",
    rubric: [
      { id: "map", label: "Tiêu chí → ca", weight: 1, check: { kind: "anyKeyword", keywords: ["mỗi tiêu chí", "bảng tiêu chí", "tiêu chí →"] }, pass: "Có ánh xạ tiêu chí.", fail: "Lập bảng mỗi tiêu chí → ca kiểm thử." },
      { id: "layers", label: "Có các tầng", weight: 1, check: { kind: "allGroups", groups: [["api", "đơn vị"], ["luồng", "end-to-end", "e2e"]] }, pass: "Có tầng.", fail: "Nêu test API/đơn vị và test luồng." },
      { id: "enforce", label: "Mức ép buộc", weight: 1, check: { kind: "anyKeyword", keywords: ["/goal", "stop hook", "/code-review", "/verify"] }, pass: "Có mức ép buộc.", fail: "Dùng /goal, Stop hook, /code-review hoặc /verify." },
      { id: "manual", label: "Thủ công trên máy tính bảng", weight: 1, check: { kind: "anyKeyword", keywords: ["máy tính bảng", "thủ công"] }, pass: "Có thủ công.", fail: "Thử thủ công trên máy tính bảng ở cửa phòng." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "1. Lập bảng mỗi tiêu chí → ca kiểm thử → tầng; bổ sung test còn thiếu.\n2. Test API: đặt trùng giờ → 409; nhân viên huỷ lượt người khác → 403; test đơn vị cho hàm kiểm tra chồng khung giờ.\n3. Test luồng (end-to-end): đặt phòng → thấy trong Lịch của tôi → huỷ.\n4. /goal mọi test đạt và npm run lint sạch; sau đó /verify và /code-review.\n5. Kiểm thử thủ công trên máy tính bảng ở cửa phòng họp với một nhân viên thật.",
    explanation: "Đủ ánh xạ tiêu chí, tầng, ép buộc và thủ công.",
  },
];
