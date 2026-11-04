import type { Question } from "@/lib/types/content";

const L = "ch06-l03";

/** 15 questions for "Đọc và chỉnh sửa nhiều file" — 5 beginner, 5 intermediate, 5 advanced. */
export const questionsCh06L03: Question[] = [
  {
    questionId: "ch06-l03-q01", lessonId: L, conceptId: "find-code", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bạn chưa biết phần xử lý đăng nhập nằm ở đâu trong dự án. Cách bắt đầu hợp lý?",
    options: [
      { id: "a", text: "Nhờ Claude: “tìm các file xử lý đăng nhập”", feedback: "Đúng — Claude tự tìm bằng công cụ tìm kiếm." },
      { id: "b", text: "Tự mở lần lượt từng file", feedback: "Chậm; Claude tìm nhanh hơn nhiều." },
      { id: "c", text: "Đoán tên file rồi sửa", feedback: "Dễ sửa nhầm chỗ." },
    ],
    answer: "a",
    explanation: "Common workflows: find the files that handle user authentication.",
  },
  {
    questionId: "ch06-l03-q02", lessonId: L, conceptId: "at-file", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Tin nhắn “Giải thích logic trong @src/utils/auth.js” khác gì so với không có @?",
    options: [
      { id: "a", text: "Nội dung file được đưa thẳng vào hội thoại, Claude không phải tự tìm và đọc", feedback: "Đúng." },
      { id: "b", text: "File bị xoá", feedback: "@ chỉ tham chiếu, không xoá." },
      { id: "c", text: "Claude chỉ thấy tên file, không thấy nội dung", feedback: "Đó là khi @ một thư mục (chỉ thấy danh sách)." },
    ],
    answer: "a",
    explanation: "@file đưa nội dung vào context (file quá lớn có giới hạn).",
  },
  {
    questionId: "ch06-l03-q03", lessonId: L, conceptId: "at-dir", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Gõ @src/components sẽ đưa toàn bộ nội dung mọi file trong thư mục vào hội thoại.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Tham chiếu thư mục chỉ cho danh sách file, không phải nội dung.",
  },
  {
    questionId: "ch06-l03-q04", lessonId: L, conceptId: "diff-review", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Claude vừa sửa nhiều file. Lệnh nào trong phiên giúp bạn xem toàn bộ thay đổi chưa commit?",
    options: [
      { id: "a", text: "/diff", feedback: "Đúng." },
      { id: "b", text: "/init", feedback: "/init tạo CLAUDE.md." },
      { id: "c", text: "/btw", feedback: "/btw hỏi bên lề." },
    ],
    answer: "a",
    explanation: "/diff mở trình xem thay đổi chưa commit, liệt kê file và số dòng thêm/bớt.",
  },
  {
    questionId: "ch06-l03-q05", lessonId: L, conceptId: "git-safety", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Checkpoint của Claude Code thay thế được git cho lịch sử lâu dài và làm việc nhóm.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Tài liệu nói rõ checkpoint dành cho khôi phục nhanh trong phiên, không thay thế version control.",
  },
  {
    questionId: "ch06-l03-q06", lessonId: L, conceptId: "trace-flow", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn muốn hiểu dữ liệu đi từ form nhập lỗi đến cơ sở dữ liệu qua những bước nào. Yêu cầu nào phù hợp?",
    options: [
      { id: "a", text: "“Lần theo luồng lưu một lỗi mới từ form đến cơ sở dữ liệu, nêu từng file và hàm”", feedback: "Đúng." },
      { id: "b", text: "“Sửa luôn cho nhanh hơn”", feedback: "Chưa hiểu đã sửa." },
      { id: "c", text: "“Đọc file README”", feedback: "README thường không mô tả chi tiết luồng code." },
    ],
    answer: "a",
    explanation: "Common workflows: trace the login process from front-end to database.",
  },
  {
    questionId: "ch06-l03-q07", lessonId: L, conceptId: "at-claudemd", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "true-false",
    statement: "Tham chiếu một file bằng @ cũng đưa CLAUDE.md của thư mục chứa file và các thư mục cha vào context.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Nhờ vậy quy ước riêng của thư mục đó được áp dụng khi làm việc với file.",
  },
  {
    questionId: "ch06-l03-q08", lessonId: L, conceptId: "coordinated-edit", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây thành một yêu cầu sửa nhiều file an toàn.",
    source: "đổi tên ngayLoi thành ngayPhatHien",
    rubric: [
      { id: "all", label: "Đồng bộ mọi nơi", weight: 1, check: { kind: "regex", pattern: "(moi noi|tat ca|dong bo|liet ke)" }, pass: "Có yêu cầu đồng bộ.", fail: "Yêu cầu đổi ở mọi nơi và liệt kê chỗ dùng trước." },
      { id: "scope", label: "Giới hạn", weight: 1, check: { kind: "regex", pattern: "(khong doi|giu nguyen|chi trong|chi sua)" }, pass: "Có giới hạn.", fail: "Nêu điều không được đổi (ví dụ dữ liệu đã lưu)." },
      { id: "verify", label: "Kiểm chứng", weight: 1, check: { kind: "regex", pattern: "(test|kiem tra|/diff)" }, pass: "Có kiểm chứng.", fail: "Chạy test và duyệt /diff." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Đổi tên trường ngayLoi thành ngayPhatHien ở mọi nơi trong src/ và tests/. Trước tiên liệt kê các chỗ đang dùng ngayLoi. Không đổi tên cột trong file CSV đã lưu. Sửa xong chạy npm test; tôi sẽ xem lại bằng /diff.",
    explanation: "Đồng bộ + giới hạn + kiểm chứng giúp thay đổi xuyên file không bỏ sót.",
  },
  {
    questionId: "ch06-l03-q09", lessonId: L, conceptId: "accept-edits", learningObjective: "o4", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Chế độ Accept edits khác chế độ Manual thế nào?",
    options: [
      { id: "a", text: "Tự duyệt việc sửa file và các lệnh tạo/chuyển file thông dụng trong thư mục làm việc; lệnh khác vẫn hỏi", feedback: "Đúng." },
      { id: "b", text: "Chạy mọi lệnh không hỏi gì", feedback: "Đó gần với bypassPermissions — chỉ dùng trong môi trường cách ly." },
      { id: "c", text: "Không cho sửa file", feedback: "Đó gần với Plan." },
    ],
    answer: "a",
    explanation: "Hợp với thay đổi nhiều file rủi ro thấp khi đã có git và test.",
  },
  {
    questionId: "ch06-l03-q10", lessonId: L, conceptId: "checkpoint-limits", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Claude chạy lệnh sed trong shell để sửa file config.ini (file này Claude chưa từng sửa bằng công cụ sửa file). Bạn muốn hoàn tác. /rewind có giúp được không?",
    options: [
      { id: "a", text: "Không — file chỉ bị đổi bởi lệnh shell không được checkpoint; dùng git để khôi phục", feedback: "Đúng." },
      { id: "b", text: "Có — checkpoint theo dõi mọi thay đổi trên ổ đĩa", feedback: "Checkpoint chỉ theo dõi file Claude đã sửa bằng công cụ sửa file." },
      { id: "c", text: "Có, nhưng chỉ khi chạy /compact trước", feedback: "/compact không liên quan." },
    ],
    answer: "a",
    explanation: "Theo mục Limitations: Bash command changes not tracked (trừ file Claude đã sửa bằng công cụ sửa file trước đó).",
  },
  {
    questionId: "ch06-l03-q11", lessonId: L, conceptId: "find-code", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp các bước tìm hiểu code lạ trước khi sửa.",
    items: [
      { id: "a", text: "Nhờ Claude tìm các file liên quan" },
      { id: "b", text: "Hỏi các file đó phối hợp với nhau thế nào" },
      { id: "c", text: "Lần theo luồng xử lý từ đầu đến cuối" },
      { id: "d", text: "Commit trạng thái hiện tại" },
      { id: "e", text: "Giao thay đổi có phạm vi và kiểm chứng" },
    ],
    explanation: "Rộng → hẹp → lưới an toàn → thay đổi.",
  },
  {
    questionId: "ch06-l03-q12", lessonId: L, conceptId: "coordinated-edit", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Cần đổi tên một hàm được gọi ở khoảng 20 file. Cách nào tốt nhất?",
    options: [
      { id: "a", text: "Lập kế hoạch, liệt kê mọi nơi gọi, sửa đồng bộ, chạy test rồi duyệt /diff", feedback: "Đúng." },
      { id: "b", text: "Mỗi file một phiên riêng trong 20 phiên", feedback: "Mất ngữ cảnh chung, dễ không nhất quán." },
      { id: "c", text: "Tìm–thay thế mù toàn bộ chuỗi trong mọi file", feedback: "Có thể đổi nhầm chuỗi trùng tên ở chỗ khác." },
    ],
    answer: "a",
    explanation: "Thay đổi phối hợp cần cái nhìn toàn cục, kiểm chứng và duyệt lại.",
  },
  {
    questionId: "ch06-l03-q13", lessonId: L, conceptId: "diff-review", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Chọn các bước SAI trong quy trình sau khi Claude sửa 8 file.",
    segments: [
      { id: "s1", text: "Commit ngay mà không xem thay đổi.", isError: true, why: "Cần duyệt toàn bộ thay đổi (/diff) trước khi commit." },
      { id: "s2", text: "Mở /diff xem từng file.", isError: false },
      { id: "s3", text: "Chạy bộ test.", isError: false },
      { id: "s4", text: "Đẩy lên nhánh chính trước khi chạy test.", isError: true, why: "Kiểm chứng trước khi chia sẻ thay đổi." },
    ],
    explanation: "Thứ tự an toàn: test → duyệt diff → commit → đẩy lên.",
  },
  {
    questionId: "ch06-l03-q14", lessonId: L, conceptId: "at-file", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn muốn Claude so sánh hai file cấu hình dev và prod để tìm khác biệt. Tin nhắn nào gọn nhất?",
    options: [
      { id: "a", text: "“So sánh @config/dev.json và @config/prod.json, liệt kê khác biệt”", feedback: "Đúng — nhiều @ trong một tin nhắn." },
      { id: "b", text: "Dán tay nội dung hai file", feedback: "Không cần — @ làm việc đó." },
      { id: "c", text: "“@config” rồi hỏi khác biệt", feedback: "@thư mục chỉ cho danh sách, không có nội dung." },
    ],
    answer: "a",
    explanation: "Có thể tham chiếu nhiều file trong một tin nhắn.",
  },
  {
    questionId: "ch06-l03-q15", lessonId: L, conceptId: "coordinated-edit", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết yêu cầu gửi Claude để thêm trường “Ca làm việc” vào hệ thống ghi lỗi QA, thay đổi xuyên nhiều file.",
    source: "Các nơi liên quan: form nhập (src/form/loi.tsx), kiểm tra dữ liệu ở API (src/api/loi.ts), file xuất Excel (src/export/excel.ts), test trong tests/. Giá trị hợp lệ: Ca 1, Ca 2, Ca 3.",
    rubric: [
      { id: "files", label: "Nêu ít nhất 3 nơi", weight: 1, check: { kind: "minMatches", pattern: "[a-z0-9_/-]+\\.(tsx?|js)", value: 3 }, pass: "Có các file liên quan.", fail: "Nêu form, API, file xuất." },
      { id: "valid", label: "Ràng buộc giá trị", weight: 1, check: { kind: "regex", pattern: "ca 1[^\\n]*ca 2[^\\n]*ca 3" }, pass: "Có giá trị hợp lệ.", fail: "Nêu giá trị hợp lệ: Ca 1, Ca 2, Ca 3." },
      { id: "tests", label: "Thêm/chạy test", weight: 1, check: { kind: "regex", pattern: "test" }, pass: "Có test.", fail: "Yêu cầu thêm và chạy test." },
      { id: "review", label: "Duyệt thay đổi", weight: 1, check: { kind: "regex", pattern: "(/diff|xem lai|duyet)" }, pass: "Có bước duyệt.", fail: "Duyệt bằng /diff trước khi commit." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Thêm trường “Ca làm việc” (giá trị hợp lệ: Ca 1, Ca 2, Ca 3) cho bản ghi lỗi QA:\n- src/form/loi.tsx: thêm ô chọn ca, bắt buộc nhập.\n- src/api/loi.ts: từ chối giá trị ngoài Ca 1, Ca 2, Ca 3.\n- src/export/excel.ts: thêm cột Ca làm việc.\n- tests/: thêm test cho giá trị hợp lệ và không hợp lệ, rồi chạy npm test.\nKhông đổi các bản ghi cũ. Xong tôi sẽ xem lại bằng /diff.",
    explanation: "Nêu mọi nơi ảnh hưởng, ràng buộc dữ liệu, test và bước duyệt.",
  },
];
