import type { Question } from "@/lib/types/content";

const L = "ch02-l06";

/** 15 questions for "Sử dụng Artifacts" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03 (Claude Help Center). */
export const questionsCh02L06: Question[] = [
  {
    questionId: "ch02-l06-q01", lessonId: L, conceptId: "artifact-def", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Theo Help Center, artifact là gì?",
    options: [
      { id: "a", text: "Thứ Claude làm cho bạn mà bạn sẽ đưa ra trước người khác — mở ở cửa sổ riêng, sửa và chia sẻ được", feedback: "Đúng." },
      { id: "b", text: "Một bản ghi lỗi của hệ thống", feedback: "Không phải." },
      { id: "c", text: "Một gói trả phí", feedback: "Artifact có trên mọi gói." },
    ],
    answer: "a",
    explanation: "Ví dụ: tài liệu, trang web, sơ đồ, dashboard, công cụ nhỏ.",
  },
  {
    questionId: "ch02-l06-q02", lessonId: L, conceptId: "artifacts-library", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "Mọi artifact bạn đã tạo được lưu trong tab Artifacts ở thanh bên.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Trên ứng dụng điện thoại cũng có tab Artifacts.",
  },
  {
    questionId: "ch02-l06-q03", lessonId: L, conceptId: "private-default", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Artifact vừa tạo xong thì ai có đường dẫn trên Internet cũng mở được ngay.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Artifact mặc định là riêng tư cho tới khi bạn chia sẻ.",
  },
  {
    questionId: "ch02-l06-q04", lessonId: L, conceptId: "plan-availability", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Tạo artifact trong chat có trên những gói nào?",
    options: [
      { id: "a", text: "Mọi gói, kể cả Free", feedback: "Đúng." },
      { id: "b", text: "Chỉ gói Enterprise", feedback: "Không đúng." },
      { id: "c", text: "Chỉ khi dùng Claude Code", feedback: "Artifact có ngay trong chat." },
    ],
    answer: "a",
    explanation: "Một số mẫu beta như Dashboards chỉ có ở gói trả phí.",
  },
  {
    questionId: "ch02-l06-q05", lessonId: L, conceptId: "side-window", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Claude vừa soạn xong một tài liệu dạng artifact. Bạn đọc và chỉnh tài liệu đó ở chỗ nào?",
    options: [
      { id: "a", text: "Trong cửa sổ riêng bên cạnh cuộc trò chuyện", feedback: "Đúng." },
      { id: "b", text: "Chỉ trong email gửi về", feedback: "Không đúng." },
      { id: "c", text: "Ẩn, phải tải về mới xem được", feedback: "Xem ngay bên cạnh chat." },
    ],
    answer: "a",
    explanation: "Bạn xem, sửa và quay lại artifact ở đó.",
  },
  {
    questionId: "ch02-l06-q06", lessonId: L, conceptId: "artifact-criteria", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Theo Help Center, Claude thường tạo artifact khi nội dung có những đặc điểm nào? Chọn tất cả.",
    options: [
      { id: "a", text: "Đáng kể và tự đứng được, thường hơn 15 dòng", feedback: "Đúng." },
      { id: "b", text: "Có khả năng được sửa, dùng lại bên ngoài cuộc trò chuyện", feedback: "Đúng." },
      { id: "c", text: "Hiểu được mà không cần đọc cả cuộc trò chuyện", feedback: "Đúng." },
      { id: "d", text: "Là câu trả lời một dòng", feedback: "Câu trả lời ngắn thường nằm trong chat." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Muốn chắc có artifact, nói rõ loại sản phẩm cần tạo.",
  },
  {
    questionId: "ch02-l06-q07", lessonId: L, conceptId: "edit-with-claude", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Trong một tài liệu artifact dài, bạn chỉ muốn viết lại đoạn thứ ba cho dễ hiểu hơn. Cách gọn nhất?",
    options: [
      { id: "a", text: "Bôi đen đoạn đó → Edit with Claude → mô tả thay đổi", feedback: "Đúng." },
      { id: "b", text: "Xoá artifact và tạo lại toàn bộ", feedback: "Mất phần đã tốt." },
      { id: "c", text: "Tải tài liệu về và tự gõ lại", feedback: "Được nhưng chậm hơn nhiều." },
    ],
    answer: "a",
    explanation: "Edit with Claude sửa đúng đoạn đã chọn trong tài liệu hoặc file Markdown.",
  },
  {
    questionId: "ch02-l06-q08", lessonId: L, conceptId: "try-fixing", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Công cụ tính giờ trong artifact hiện thông báo lỗi khi mở. Bước đầu tiên hợp lý?",
    options: [
      { id: "a", text: "Bấm Try fixing with Claude; nếu chưa được, mô tả lỗi cụ thể (bấm nút nào, thấy gì)", feedback: "Đúng." },
      { id: "b", text: "Kết luận Claude không làm được công cụ", feedback: "Thường sửa được." },
      { id: "c", text: "Gửi ngay cho đồng nghiệp dùng thử", feedback: "Chưa chạy được thì chưa nên gửi." },
    ],
    answer: "a",
    explanation: "Help Center: Try fixing with Claude không bảo đảm luôn thành công.",
  },
  {
    questionId: "ch02-l06-q09", lessonId: L, conceptId: "export-formats", learningObjective: "o4", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép loại artifact với định dạng xuất theo Help Center.",
    pairs: [
      { id: "p1", left: "Tài liệu (Docs)", right: "Word, PDF, Markdown, Google Docs" },
      { id: "p2", left: "Bản trình chiếu", right: "PowerPoint, PDF, Google Slides" },
      { id: "p3", left: "Thiết kế (Design)", right: ".zip, PDF, PowerPoint, HTML độc lập" },
      { id: "p4", left: "Hoạt ảnh (Motion)", right: "MP4" },
    ],
    explanation: "Định dạng xuất có thể thay đổi theo thời gian.",
  },
  {
    questionId: "ch02-l06-q10", lessonId: L, conceptId: "capability-required", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn yêu cầu rõ “tạo một artifact trang web” nhưng Claude chỉ trả lời bằng code trong chat, không mở cửa sổ artifact. Kiểm tra gì trước?",
    options: [
      { id: "a", text: "Settings > Capabilities đã bật Cloud code execution and file creation chưa", feedback: "Đúng." },
      { id: "b", text: "Đổi sang chat ẩn danh", feedback: "Không liên quan." },
      { id: "c", text: "Xác minh lại số điện thoại", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Artifact cần khả năng này (với Team/Enterprise: trong Organization settings).",
  },
  {
    questionId: "ch02-l06-q11", lessonId: L, conceptId: "ask-to-edit", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bạn muốn thử một bố cục hoàn toàn khác cho trang web artifact nhưng vẫn giữ bản hiện tại để so sánh. Cách nào phù hợp?",
    options: [
      { id: "a", text: "Sửa tin nhắn yêu cầu trước đó để tạo phiên bản riêng của chat, kèm artifact riêng", feedback: "Đúng." },
      { id: "b", text: "Yêu cầu Claude ghi đè bản hiện tại", feedback: "Mất bản cũ để so sánh." },
      { id: "c", text: "Xoá chat và làm lại", feedback: "Mất bản hiện tại." },
    ],
    answer: "a",
    explanation: "Help Center: sửa tin nhắn trước tạo phiên bản riêng có artifact riêng, không mất phần cũ.",
  },
  {
    questionId: "ch02-l06-q12", lessonId: L, conceptId: "artifact-criteria", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây để Claude tạo đúng artifact cần dùng.",
    source: "làm cái lịch trực",
    rubric: [
      { id: "type", label: "Nói rõ loại sản phẩm", weight: 1, check: { kind: "anyKeyword", keywords: ["artifact", "bảng", "tài liệu", "công cụ", "trang"] }, pass: "Có loại sản phẩm.", fail: "Nói rõ: tạo artifact dạng bảng/tài liệu/công cụ." },
      { id: "content", label: "Có nội dung cụ thể", weight: 1, check: { kind: "regex", pattern: "\\d+[^\\n]*(nguoi|ca|tuan|ngay)" }, pass: "Có số liệu cụ thể.", fail: "Nêu số người, số ca, khoảng thời gian." },
      { id: "use", label: "Cách dùng/người đọc", weight: 1, check: { kind: "anyKeyword", keywords: ["in", "dán", "điện thoại", "gửi", "bảng tin"] }, pass: "Có cách dùng.", fail: "Nêu sẽ in, dán bảng tin hay xem trên điện thoại." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Tạo một artifact dạng bảng lịch trực tuần cho tổ bảo trì: 6 người, 3 ca (sáng, chiều, đêm), từ thứ Hai đến Chủ nhật, mỗi người không trực quá 5 ca/tuần và không trực hai ca liền nhau. Bảng để in dán ở bảng tin, chữ to, có cột ghi chú.",
    explanation: "Yêu cầu tốt nêu loại sản phẩm, nội dung cụ thể và cách dùng.",
  },
  {
    questionId: "ch02-l06-q13", lessonId: L, conceptId: "private-default", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Chọn các nhận định SAI về artifact.",
    segments: [
      { id: "s1", text: "Artifact mặc định là riêng tư cho tới khi bạn chia sẻ.", isError: false },
      { id: "s2", text: "Muốn tạo artifact phải nâng cấp gói trả phí.", isError: true, why: "Tạo artifact có trên mọi gói, kể cả Free." },
      { id: "s3", text: "Code artifact do người lạ gửi cứ dùng ngay vì Claude đã tạo ra nó.", isError: true, why: "Cần thận trọng với code từ người gửi không rõ." },
      { id: "s4", text: "Tài liệu artifact xuất được sang Word hoặc PDF.", isError: false },
    ],
    explanation: "Riêng tư mặc định, mọi gói đều tạo được, và luôn thận trọng với nguồn lạ.",
  },
  {
    questionId: "ch02-l06-q14", lessonId: L, conceptId: "artifact-types", learningObjective: "o1", thinkingSkill: "apply", difficulty: "advanced",
    questionType: "ordering",
    prompt: "Sắp xếp quy trình làm một artifact dùng được cho người khác.",
    items: [
      { id: "a", text: "Bật Cloud code execution and file creation" },
      { id: "b", text: "Gửi yêu cầu nêu rõ loại sản phẩm, nội dung, người dùng" },
      { id: "c", text: "Kiểm tra trong cửa sổ bên cạnh, bấm thử các nút" },
      { id: "d", text: "Sửa từng điểm cho tới khi đạt" },
      { id: "e", text: "Xuất file hoặc chia sẻ cho người cần" },
    ],
    explanation: "Chuẩn bị → yêu cầu → kiểm tra → sửa → đưa đi.",
  },
  {
    questionId: "ch02-l06-q15", lessonId: L, conceptId: "artifact-types", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết yêu cầu tạo artifact cho nhu cầu dưới đây, kèm 2 tiêu chí bạn sẽ dùng để kiểm tra kết quả.",
    source: "Phòng kế hoạch cần một sơ đồ quy trình phê duyệt đơn mua vật tư: Tổ trưởng lập đơn → Quản đốc duyệt → nếu trên 20 triệu thì Giám đốc duyệt → Phòng mua hàng đặt hàng. Sơ đồ sẽ đưa vào sổ tay quy trình.",
    rubric: [
      { id: "type", label: "Nói rõ là sơ đồ/lưu đồ", weight: 1, check: { kind: "anyKeyword", keywords: ["sơ đồ", "lưu đồ", "flowchart"] }, pass: "Có loại sản phẩm.", fail: "Nêu: tạo artifact sơ đồ/lưu đồ." },
      { id: "steps", label: "Có đủ các bước và nhánh 20 triệu", weight: 1, check: { kind: "allGroups", groups: [["tổ trưởng"], ["quản đốc"], ["20 triệu"], ["mua hàng"]] }, pass: "Có đủ bước.", fail: "Đưa đủ 4 vai trò và điều kiện trên 20 triệu." },
      { id: "criteria", label: "Có tiêu chí kiểm tra", weight: 1, check: { kind: "regex", pattern: "(tieu chi|kiem tra)[^\\n]*:" }, pass: "Có tiêu chí.", fail: "Thêm “Tiêu chí kiểm tra: …”." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Tạo một artifact lưu đồ quy trình phê duyệt đơn mua vật tư để đưa vào sổ tay quy trình: Tổ trưởng lập đơn → Quản đốc duyệt → nếu giá trị trên 20 triệu thì Giám đốc duyệt, không thì chuyển thẳng → Phòng mua hàng đặt hàng. Mỗi bước ghi vai trò; nhánh điều kiện ghi rõ “> 20 triệu” và “≤ 20 triệu”.\nTiêu chí kiểm tra: (1) đủ 4 vai trò theo đúng thứ tự; (2) nhánh 20 triệu có cả hai hướng và đều đi tới Phòng mua hàng.",
    explanation: "Yêu cầu tốt + tiêu chí kiểm tra rõ giúp bạn duyệt artifact nhanh và chắc.",
  },
];
