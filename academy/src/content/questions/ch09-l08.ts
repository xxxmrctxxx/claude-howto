import type { Question } from "@/lib/types/content";

const L = "ch09-l08";

/** 15 questions for "Deploy" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh09L08: Question[] = [
  {
    questionId: "ch09-l08-q01", lessonId: L, conceptId: "static-vs-backend", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Web theo dõi lỗi có API và cơ sở dữ liệu. Nó cần loại nơi triển khai nào?",
    options: [
      { id: "a", text: "Nơi có máy chủ chạy code backend và cơ sở dữ liệu", feedback: "Đúng." },
      { id: "b", text: "Chỉ cần nơi phục vụ file tĩnh", feedback: "Không chạy được API và cơ sở dữ liệu." },
      { id: "c", text: "Gửi file HTML qua email cho mọi người", feedback: "Không phải triển khai." },
    ],
    answer: "a",
    explanation: "Site tĩnh (chỉ HTML/CSS/JS đã build) thì chỉ cần nơi phục vụ file.",
  },
  {
    questionId: "ch09-l08-q02", lessonId: L, conceptId: "host-secrets", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "Mật khẩu cơ sở dữ liệu của bản thật nên đặt trong cài đặt bí mật/biến môi trường của nơi triển khai hoặc pipeline, không trong repo.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Repo chỉ chứa .env.example với tên biến.",
  },
  {
    questionId: "ch09-l08-q03", lessonId: L, conceptId: "smoke-test", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Kiểm tra khói (smoke test) sau deploy là gì?",
    options: [
      { id: "a", text: "Thử nhanh các luồng chính trên bản thật ngay sau khi deploy", feedback: "Đúng." },
      { id: "b", text: "Kiểm tra máy chủ có bốc khói không", feedback: "Chỉ là tên gọi." },
      { id: "c", text: "Chạy lại toàn bộ test đơn vị trên máy dev", feedback: "Đó là việc trước khi deploy." },
    ],
    answer: "a",
    explanation: "Ví dụ: mở trang, ghi lỗi thử, xem thống kê, xoá lỗi thử.",
  },
  {
    questionId: "ch09-l08-q04", lessonId: L, conceptId: "pipeline", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Pipeline tự động giúp mỗi lần deploy chạy cùng các bước giống nhau, không phụ thuộc ai chép file bằng tay.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Ví dụ thật: workflow pages.yml của chính khoá học này.",
  },
  {
    questionId: "ch09-l08-q05", lessonId: L, conceptId: "rollback", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bản mới vừa deploy làm không ai lưu được lỗi. Cách quay lui nhanh và an toàn?",
    options: [
      { id: "a", text: "Revert commit gây lỗi, đẩy lên nhánh chính để deploy lại bản trước", feedback: "Đúng." },
      { id: "b", text: "Sửa trực tiếp trên máy chủ thật", feedback: "Khó kiểm soát, lệch với repo." },
      { id: "c", text: "Chờ người dùng quen dần", feedback: "Không chấp nhận được." },
    ],
    answer: "a",
    explanation: "Sau khi ổn định, sửa lỗi theo vòng ở bài 9.7.",
  },
  {
    questionId: "ch09-l08-q06", lessonId: L, conceptId: "trigger-main", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Với cấu hình dưới đây (trích pages.yml của khoá học), khi nào pipeline chạy?",
    context: { label: "pages.yml (trích)", content: "on:\n  push:\n    branches:\n      - main\n    paths:\n      - 'academy/**'\n  workflow_dispatch:", lang: "yaml" },
    options: [
      { id: "a", text: "Khi có commit đẩy lên main làm thay đổi file trong academy/, hoặc khi chạy tay (workflow_dispatch)", feedback: "Đúng." },
      { id: "b", text: "Mỗi giờ một lần", feedback: "Không có lịch định kỳ." },
      { id: "c", text: "Khi đẩy lên bất kỳ nhánh nào", feedback: "Chỉ nhánh main." },
    ],
    answer: "a",
    explanation: "workflow_dispatch cho phép chạy tay từ giao diện GitHub Actions.",
  },
  {
    questionId: "ch09-l08-q07", lessonId: L, conceptId: "base-path", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trong pages.yml, biến ACADEMY_BASE_PATH dùng để làm gì?",
    options: [
      { id: "a", text: "Cho bản build biết site nằm dưới đường dẫn gốc nào (…/academy) để liên kết và tài nguyên đúng", feedback: "Đúng." },
      { id: "b", text: "Lưu mật khẩu", feedback: "Không phải bí mật." },
      { id: "c", text: "Chọn phiên bản Node.js", feedback: "Phiên bản Node đặt ở setup-node." },
    ],
    answer: "a",
    explanation: "Sai đường dẫn gốc thường làm trang trắng hoặc mất CSS sau deploy.",
  },
  {
    questionId: "ch09-l08-q08", lessonId: L, conceptId: "deploy-approval", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn nhờ Claude soạn pipeline deploy. Cách giao việc an toàn nhất?",
    options: [
      { id: "a", text: "Nhờ soạn file pipeline nhưng dặn không tự chạy deploy, dừng lại để bạn duyệt", feedback: "Đúng." },
      { id: "b", text: "Cho Claude tự deploy lên bản thật ngay", feedback: "Hành động ra bên ngoài nên có người duyệt." },
      { id: "c", text: "Không dùng pipeline", feedback: "Mất tính lặp lại." },
    ],
    answer: "a",
    explanation: "Deploy ảnh hưởng người dùng thật.",
  },
  {
    questionId: "ch09-l08-q09", lessonId: L, conceptId: "deploy-skill", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bạn ghi quy trình deploy thành skill /deploy. Nên thêm gì vào frontmatter?",
    options: [
      { id: "a", text: "disable-model-invocation: true — chỉ chạy khi chính bạn gõ /deploy", feedback: "Đúng." },
      { id: "b", text: "user-invocable: false", feedback: "Như vậy chỉ Claude tự gọi — ngược với mong muốn." },
      { id: "c", text: "Không cần gì", feedback: "Claude có thể tự gọi skill có tác dụng phụ." },
    ],
    answer: "a",
    explanation: "Skill có tác dụng phụ nên chỉ gọi tay (Chương 7).",
  },
  {
    questionId: "ch09-l08-q10", lessonId: L, conceptId: "monitor-logs", learningObjective: "o4", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "true-false",
    statement: "Theo dõi log vài giờ đầu sau deploy giúp phát hiện sớm lỗi mà kiểm tra khói bỏ sót.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Có thể pipe log vào claude -p để tóm tắt (bài 9.7).",
  },
  {
    questionId: "ch09-l08-q11", lessonId: L, conceptId: "hosting-choice", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép dự án với loại nơi triển khai phù hợp.",
    pairs: [
      { id: "p1", left: "Trang hướng dẫn chỉ có HTML/CSS/JS", right: "Nơi phục vụ site tĩnh (ví dụ GitHub Pages)" },
      { id: "p2", left: "Web theo dõi lỗi có API và cơ sở dữ liệu", right: "Máy chủ chạy backend + cơ sở dữ liệu" },
      { id: "p3", left: "Khoá học này (Next.js build ra file tĩnh)", right: "Nơi phục vụ site tĩnh (ví dụ GitHub Pages)" },
    ],
    explanation: "Câu hỏi then chốt: có cần chạy code phía máy chủ không?",
  },
  {
    questionId: "ch09-l08-q12", lessonId: L, conceptId: "smoke-test", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn lên kế hoạch deploy như dưới đây. Chọn các bước SAI.",
    segments: [
      { id: "s1", text: "Deploy lúc 17h thứ Sáu rồi về, thứ Hai xem sau.", isError: true, why: "Không ai theo dõi khi có lỗi; chọn lúc có người trực." },
      { id: "s2", text: "Kiểm tra khói bằng tài khoản và dữ liệu thử, xoá dữ liệu thử sau.", isError: false },
      { id: "s3", text: "Đặt mật khẩu cơ sở dữ liệu trong server.js cho pipeline đọc được.", isError: true, why: "Bí mật phải nằm trong cài đặt bí mật, không trong repo." },
      { id: "s4", text: "Ghi sẵn lệnh revert nếu bản mới lỗi nghiêm trọng.", isError: false },
    ],
    explanation: "Deploy tốt: đúng thời điểm, bí mật đúng chỗ, có kiểm tra và đường lui.",
  },
  {
    questionId: "ch09-l08-q13", lessonId: L, conceptId: "build-step", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Pipeline có bước build nhưng không chạy test; tuần trước một bản lỗi vẫn được deploy. Cải thiện hợp lý nhất?",
    options: [
      { id: "a", text: "Thêm bước chạy npm test trước deploy; test trượt thì dừng, không deploy", feedback: "Đúng." },
      { id: "b", text: "Bỏ bước build cho nhanh", feedback: "Mất bản build." },
      { id: "c", text: "Deploy hai lần cho chắc", feedback: "Không ngăn được bản lỗi." },
    ],
    answer: "a",
    explanation: "Phép kiểm tra là cổng chặn trước khi tới người dùng.",
  },
  {
    questionId: "ch09-l08-q14", lessonId: L, conceptId: "base-path", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Site tĩnh chạy tốt trên máy, nhưng sau deploy lên địa chỉ dạng …/ten-repo/academy/ thì trang trắng và mất CSS. Nghi ngờ đầu tiên?",
    options: [
      { id: "a", text: "Đường dẫn gốc (base path) chưa được cấu hình đúng khi build", feedback: "Đúng." },
      { id: "b", text: "Máy chủ hết dung lượng", feedback: "Ít khả năng hơn." },
      { id: "c", text: "Người dùng dùng sai trình duyệt", feedback: "Không phải nghi ngờ đầu tiên." },
    ],
    answer: "a",
    explanation: "Đó là lý do pages.yml đặt ACADEMY_BASE_PATH khi build.",
  },
  {
    questionId: "ch09-l08-q15", lessonId: L, conceptId: "rollback", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết checklist deploy (5–6 dòng) cho web đặt phòng họp, gồm trước deploy, kiểm tra khói và quay lui.",
    source: "Web có API và cơ sở dữ liệu, chạy trên máy chủ nội bộ; pipeline chạy khi merge vào main. Luồng chính: xem phòng trống, đặt phòng, huỷ lượt của mình.",
    rubric: [
      { id: "before", label: "Trước deploy", weight: 1, check: { kind: "anyKeyword", keywords: ["npm test", "test đạt", "/code-review", "merge"] }, pass: "Có bước trước.", fail: "Thêm: test đạt, review, merge." },
      { id: "secrets", label: "Bí mật đúng chỗ", weight: 1, check: { kind: "anyKeyword", keywords: ["biến môi trường", "bí mật", "secret"] }, pass: "Có bí mật.", fail: "Kiểm tra bí mật đặt trên máy chủ/pipeline." },
      { id: "smoke", label: "Kiểm tra khói luồng chính", weight: 1, check: { kind: "allGroups", groups: [["đặt phòng", "đặt thử"], ["huỷ"]] }, pass: "Có kiểm tra khói.", fail: "Thử đặt phòng và huỷ trên bản thật." },
      { id: "rollback", label: "Quay lui", weight: 1, check: { kind: "anyKeyword", keywords: ["revert", "quay lui", "bản trước"] }, pass: "Có quay lui.", fail: "Nêu cách quay lui." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "1. Trước deploy: npm test đạt, /code-review xong, merge vào main trong giờ làm việc.\n2. Kiểm tra bí mật (mật khẩu cơ sở dữ liệu) đặt trong biến môi trường của máy chủ, không trong repo.\n3. Theo dõi pipeline build và deploy tới khi xong.\n4. Kiểm tra khói: xem phòng trống, đặt thử một phòng, thấy trong Lịch của tôi, huỷ lượt thử.\n5. Theo dõi log 2 giờ đầu, báo người dùng bản mới.\n6. Lỗi nghiêm trọng: git revert commit gây lỗi, đẩy lên main để deploy lại bản trước.",
    explanation: "Checklist đủ: trước, trong, sau và đường lui.",
  },
];
