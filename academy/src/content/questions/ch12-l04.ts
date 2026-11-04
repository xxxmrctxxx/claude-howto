import type { Question } from "@/lib/types/content";

const L = "ch12-l04";

/** 15 questions for "Triển khai" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh12L04: Question[] = [
  {
    questionId: "ch12-l04-q01", lessonId: L, conceptId: "course-correct", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Claude Code đang sửa một file không liên quan đến mốc. Phím nào dừng nó ngay?",
    options: [
      { id: "a", text: "Esc", feedback: "Đúng." },
      { id: "b", text: "Tab", feedback: "Không dừng tác vụ." },
      { id: "c", text: "Đóng laptop", feedback: "Không phải cách điều khiển." },
    ],
    answer: "a",
    explanation: "Dừng rồi nói lại yêu cầu rõ phạm vi.",
  },
  {
    questionId: "ch12-l04-q02", lessonId: L, conceptId: "checkpoints", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Có checkpoint của Claude Code rồi thì không cần commit Git nữa.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Checkpoint không thay Git; commit sau mỗi mốc đạt.",
  },
  {
    questionId: "ch12-l04-q03", lessonId: L, conceptId: "one-milestone-session", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao nên làm “một mốc một phiên”?",
    options: [
      { id: "a", text: "Ngữ cảnh gọn, phạm vi rõ, dễ biết cái gì đã đổi và kiểm tra", feedback: "Đúng." },
      { id: "b", text: "Vì Claude chỉ làm được một việc mỗi ngày", feedback: "Không đúng." },
      { id: "c", text: "Để tốn nhiều token hơn", feedback: "Ngược lại — tiết kiệm token." },
    ],
    answer: "a",
    explanation: "Liên hệ quản lý ngữ cảnh ở Chương 6 và 8.",
  },
  {
    questionId: "ch12-l04-q04", lessonId: L, conceptId: "commit-often", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Khi nào nên commit trong lúc triển khai?",
    options: [
      { id: "a", text: "Sau mỗi mốc (hoặc bước nhỏ) đã qua phép kiểm tra", feedback: "Đúng." },
      { id: "b", text: "Chỉ một lần khi xong cả dự án", feedback: "Khó quay lại, khó review." },
      { id: "c", text: "Sau mỗi phím gõ", feedback: "Quá vụn, lịch sử khó đọc." },
    ],
    answer: "a",
    explanation: "Commit nhỏ, có ý nghĩa, lời nhắn rõ.",
  },
  {
    questionId: "ch12-l04-q05", lessonId: L, conceptId: "verify-each-step", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Theo best practices, việc nào có tác động lớn nhất đến chất lượng khi làm với Claude Code?",
    options: [
      { id: "a", text: "Cho Claude cách tự kiểm tra công việc (test, bộ mẫu, ảnh mong đợi)", feedback: "Đúng." },
      { id: "b", text: "Viết prompt thật dài", feedback: "Dài không bằng kiểm chứng được." },
      { id: "c", text: "Dùng phông chữ đẹp trong terminal", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Có phép kiểm tra thì Claude tự phát hiện và sửa lỗi.",
  },
  {
    questionId: "ch12-l04-q06", lessonId: L, conceptId: "context-hygiene", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Xong mốc bảng tuần, bạn chuyển sang mốc CI khác hẳn; phiên hiện tại đầy log test cũ. Làm gì?",
    options: [
      { id: "a", text: "/clear rồi bắt đầu lại: “Đọc @PLAN.md, làm mốc CI…”", feedback: "Đúng." },
      { id: "b", text: "Tiếp tục trong phiên cũ", feedback: "Ngữ cảnh cũ làm nhiễu và tốn token." },
      { id: "c", text: "Cài lại Claude Code", feedback: "Không cần." },
    ],
    answer: "a",
    explanation: "PLAN.md giữ tiến độ nên /clear không mất thông tin.",
  },
  {
    questionId: "ch12-l04-q07", lessonId: L, conceptId: "subagent-investigation", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn cần biết mọi chỗ trong 60 file cũ đọc cột “Ngay” để đổi định dạng ngày, nhưng muốn giữ ngữ cảnh chính gọn. Cách hợp lý?",
    options: [
      { id: "a", text: "Nhờ Claude giao việc tìm kiếm cho subagent và chỉ báo lại danh sách file:dòng", feedback: "Đúng." },
      { id: "b", text: "Dán cả 60 file vào chat", feedback: "Làm đầy ngữ cảnh." },
      { id: "c", text: "Đoán vài file rồi sửa", feedback: "Dễ sót." },
    ],
    answer: "a",
    explanation: "Subagent chạy trong ngữ cảnh riêng.",
  },
  {
    questionId: "ch12-l04-q08", lessonId: L, conceptId: "claude-md-update", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Lần thứ ba Claude quên chạy test trước khi báo xong. Cải thiện lâu dài?",
    options: [
      { id: "a", text: "Thêm vào CLAUDE.md: “Trước khi báo xong, chạy lệnh test và cho xem kết quả.”", feedback: "Đúng." },
      { id: "b", text: "Nhắc lại bằng lời mỗi lần", feedback: "Dễ quên, không bền." },
      { id: "c", text: "Bỏ test", feedback: "Mất kiểm soát chất lượng." },
    ],
    answer: "a",
    explanation: "CLAUDE.md được nạp ở mọi phiên.",
  },
  {
    questionId: "ch12-l04-q09", lessonId: L, conceptId: "review-diffs", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Mốc yêu cầu chỉ sửa src/bang_tuan/. git status cho kết quả dưới đây. Nên làm gì?",
    context: { label: "git status (rút gọn)", content: "modified:   src/bang_tuan/gop.py\nmodified:   tests/test_bang_tuan.py\nmodified:   src/trich_xuat/schema.py\nmodified:   .github/workflows/ci.yml", lang: "text" },
    options: [
      { id: "a", text: "Hỏi lý do sửa schema.py và ci.yml; không liên quan thì hoàn tác các file đó trước khi commit", feedback: "Đúng." },
      { id: "b", text: "Commit tất cả vì test xanh", feedback: "Có thay đổi ngoài phạm vi chưa được xem xét." },
      { id: "c", text: "Xoá nhánh, làm lại từ đầu", feedback: "Quá tay khi phần chính đã đúng." },
    ],
    answer: "a",
    explanation: "Đọc diff để giữ phạm vi.",
  },
  {
    questionId: "ch12-l04-q10", lessonId: L, conceptId: "feature-branch", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "terminal-task",
    prompt: "Trong terminal mô phỏng (dự án web-qa đã có một commit): tạo nhánh moc-3, tạo file PLAN.md ghi dòng “M3 dang lam”, rồi commit trên nhánh đó.",
    preset: "git-committed",
    checks: [
      { kind: "gitState", path: "~/web-qa", head: "moc-3", label: "Đang ở nhánh moc-3" },
      { kind: "file", path: "~/web-qa/PLAN.md", contains: "M3", label: "PLAN.md có M3" },
      { kind: "commitCount", path: "~/web-qa", min: 2, label: "Có commit mới" },
      { kind: "cleanTree", path: "~/web-qa", label: "Không còn thay đổi chưa commit" },
    ],
    referenceCommands: ["git switch -c moc-3", 'echo "M3 dang lam" > PLAN.md', "git add PLAN.md", 'git commit -m "docs: cap nhat tien do M3"'],
    hint: "git switch -c moc-3, echo \"…\" > PLAN.md, git add, git commit -m.",
    explanation: "Mỗi mốc một nhánh, tiến độ được commit cùng mã.",
  },
  {
    questionId: "ch12-l04-q11", lessonId: L, conceptId: "skill-for-repeat", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép tình huống với nơi lưu kiến thức phù hợp.",
    pairs: [
      { id: "p1", left: "Quy tắc áp dụng mọi phiên: “dùng pnpm, chạy test trước khi báo xong”", right: "CLAUDE.md" },
      { id: "p2", left: "Quy trình 6 bước chạy bộ đo 50 ghi chú và xuất bảng kết quả, dùng vài lần mỗi tuần", right: "Skill" },
      { id: "p3", left: "Tiến độ mốc và phát hiện của tuần", right: "PLAN.md" },
    ],
    explanation: "Mỗi loại thông tin một chỗ (Chương 7).",
  },
  {
    questionId: "ch12-l04-q12", lessonId: L, conceptId: "checkpoints", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Sau 4 lượt sửa, Claude làm hỏng phần đã chạy tốt; lượt đầu tiên là đúng hướng. Cách xử lý tốt nhất?",
    options: [
      { id: "a", text: "Esc hai lần hoặc /rewind về checkpoint sau lượt đầu, rồi đưa yêu cầu cụ thể hơn", feedback: "Đúng." },
      { id: "b", text: "Yêu cầu Claude sửa tiếp lượt thứ 5, 6", feedback: "Dễ càng rối." },
      { id: "c", text: "Tự gõ lại toàn bộ code", feedback: "Tốn công khi có thể quay lại." },
    ],
    answer: "a",
    explanation: "Quay về điểm tốt rồi chỉnh hướng.",
  },
  {
    questionId: "ch12-l04-q13", lessonId: L, conceptId: "one-milestone-session", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Nhật ký một phiên triển khai như dưới đây. Chọn các việc SAI.",
    segments: [
      { id: "s1", text: "Mở phiên với @SPEC.md, @PLAN.md và mốc M3, nêu thư mục được sửa.", isError: false },
      { id: "s2", text: "Claude báo “xong” nên commit ngay, không chạy test.", isError: true, why: "Cần kết quả kiểm tra thật trước khi commit." },
      { id: "s3", text: "Làm luôn M4 và M5 trong cùng phiên cho nhanh.", isError: true, why: "Một mốc một phiên; /clear giữa các việc." },
      { id: "s4", text: "Cuối phiên cập nhật PLAN.md và ghi quy tắc mới vào CLAUDE.md.", isError: false },
    ],
    explanation: "Kiểm tra trước commit; giữ nhịp một mốc một phiên.",
  },
  {
    questionId: "ch12-l04-q14", lessonId: L, conceptId: "progress-log", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn nghỉ 1 tuần rồi quay lại dự án. Điều gì giúp bắt đầu lại nhanh nhất?",
    options: [
      { id: "a", text: "PLAN.md cập nhật (mốc xong, phát hiện, việc tiếp) + lịch sử commit rõ ràng; mở phiên mới với @PLAN.md", feedback: "Đúng." },
      { id: "b", text: "Nhớ lại bằng trí nhớ", feedback: "Không đáng tin sau một tuần." },
      { id: "c", text: "Đọc lại toàn bộ code từ đầu", feedback: "Chậm hơn nhiều." },
    ],
    answer: "a",
    explanation: "Ghi tiến độ là đầu tư cho chính bạn và người tiếp nhận.",
  },
  {
    questionId: "ch12-l04-q15", lessonId: L, conceptId: "verify-each-step", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết yêu cầu giao cho Claude Code mốc “xuất báo cáo nháp tuần” — có phạm vi, phép kiểm tra và yêu cầu bằng chứng.",
    source: "Mốc M4: tạo bao_cao_tuan.md từ bảng tuần theo mẫu 3 mục; code trong src/bao_cao/; kiểm: tests/test_bao_cao.py, báo cáo đủ 3 mục.",
    rubric: [
      { id: "scope", label: "Phạm vi", weight: 1, check: { kind: "anyKeyword", keywords: ["src/bao_cao", "chỉ sửa", "không sửa"] }, pass: "Có phạm vi.", fail: "Nêu thư mục được sửa." },
      { id: "check", label: "Kiểm tra", weight: 1, check: { kind: "anyKeyword", keywords: ["test_bao_cao", "chạy test", "pytest"] }, pass: "Có kiểm tra.", fail: "Yêu cầu chạy tests/test_bao_cao.py." },
      { id: "evidence", label: "Bằng chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["cho tôi xem", "kết quả", "in ra"] }, pass: "Có bằng chứng.", fail: "Yêu cầu xem kết quả thật." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Đọc @SPEC.md và @PLAN.md. Làm mốc M4: tạo bao_cao_tuan.md từ bảng tuần theo mẫu 3 mục trong SPEC. Chỉ sửa trong src/bao_cao/ và tests/. Xong thì chạy pytest tests/test_bao_cao.py, tạo một báo cáo từ dữ liệu mẫu và cho tôi xem kết quả test cùng nội dung báo cáo. Chưa commit.",
    explanation: "Phạm vi + kiểm tra + bằng chứng.",
  },
];
