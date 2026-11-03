import type { Question } from "@/lib/types/content";

const L = "ch04-l02";

/** 15 questions for "Tạo website" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh04L02: Question[] = [
  {
    questionId: "ch04-l02-q01", lessonId: L, conceptId: "site-purpose", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Một yêu cầu tạo trang web tốt nên nêu những gì? Chọn tất cả.",
    options: [
      { id: "a", text: "Trang để làm gì và cho ai xem", feedback: "Đúng." },
      { id: "b", text: "Các phần của trang", feedback: "Đúng." },
      { id: "c", text: "Nội dung thật cần đưa vào", feedback: "Đúng." },
      { id: "d", text: "Chỉ cần “cho đẹp”", feedback: "Chủ quan, không kiểm tra được." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Thêm phong cách và thiết bị người xem dùng.",
  },
  {
    questionId: "ch04-l02-q02", lessonId: L, conceptId: "placeholders", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Nếu bạn không đưa số điện thoại, Claude có thể điền một số minh hoạ trông như thật — vì vậy nên dặn để chỗ trống như [CẦN ĐIỀN].",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Chỗ trống giúp bạn thấy ngay thông tin nào còn phải điền.",
  },
  {
    questionId: "ch04-l02-q03", lessonId: L, conceptId: "mobile-friendly", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trang thông báo cho công nhân sẽ được mở qua mã QR dán ở cổng. Nên thêm yêu cầu gì?",
    options: [
      { id: "a", text: "Bố cục dùng tốt trên điện thoại, chữ lớn", feedback: "Đúng." },
      { id: "b", text: "Tối ưu cho màn hình máy chiếu", feedback: "Người xem dùng điện thoại." },
      { id: "c", text: "Không cần nói gì về thiết bị", feedback: "Thiết bị ảnh hưởng nhiều tới bố cục." },
    ],
    answer: "a",
    explanation: "Mã QR → điện thoại → màn hình hẹp.",
  },
  {
    questionId: "ch04-l02-q04", lessonId: L, conceptId: "site-next-step", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trang artifact hiện thông báo lỗi ngay khi mở. Nút nào trong Help Center giúp nhờ Claude sửa nhanh?",
    options: [
      { id: "a", text: "Try fixing with Claude", feedback: "Đúng." },
      { id: "b", text: "Rename", feedback: "Đó là đổi tên hội thoại." },
      { id: "c", text: "Add files or photos", feedback: "Đó là đính kèm file." },
    ],
    answer: "a",
    explanation: "Không bảo đảm sửa được; khi đó mô tả lỗi cụ thể hơn.",
  },
  {
    questionId: "ch04-l02-q05", lessonId: L, conceptId: "real-content", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền cụm từ.",
    template: "Để chặn thông tin tự thêm, hãy dặn: “Chỉ dùng thông tin tôi [[b1]]; thiếu thì để [CẦN ĐIỀN].”",
    blanks: [{ id: "b1", accepted: ["cung cấp", "đưa", "đã cho", "đưa ra"], width: 10 }],
    explanation: "Câu dặn này áp dụng cho mọi sản phẩm có thông tin thật: trang web, tờ rơi, email.",
  },
  {
    questionId: "ch04-l02-q06", lessonId: L, conceptId: "keyboard-nav", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Theo Help Center, trang web artifact không có liên kết hay nút nào gặp hạn chế gì với người dùng bàn phím?",
    options: [
      { id: "a", text: "Phím Tab bỏ qua trang và phím mũi tên không cuộn được", feedback: "Đúng." },
      { id: "b", text: "Trang tự đóng lại", feedback: "Không đúng." },
      { id: "c", text: "Không có hạn chế nào", feedback: "Có hạn chế đã được nêu." },
    ],
    answer: "a",
    explanation: "Thêm nút/liên kết giúp điều hướng được bằng bàn phím.",
  },
  {
    questionId: "ch04-l02-q07", lessonId: L, conceptId: "contrast", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Phần Liên hệ trên trang nháp dùng chữ xám nhạt cỡ nhỏ trên nền trắng. Yêu cầu sửa nào tốt nhất?",
    options: [
      { id: "a", text: "“Đổi phần Liên hệ sang chữ đen hoặc xám đậm, cỡ chữ lớn hơn (khoảng 18px).”", feedback: "Đúng — cụ thể, kiểm tra được." },
      { id: "b", text: "“Làm cho đẹp hơn.”", feedback: "Mơ hồ." },
      { id: "c", text: "“Xoá phần Liên hệ.”", feedback: "Mất thông tin cần thiết." },
    ],
    answer: "a",
    explanation: "Tương phản đủ và chữ đủ lớn giúp mọi người đọc dễ hơn.",
  },
  {
    questionId: "ch04-l02-q08", lessonId: L, conceptId: "alt-text", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "true-false",
    statement: "Mô tả ảnh (alt text) giúp người dùng trình đọc màn hình biết ảnh thể hiện gì.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Mô tả nên nói nội dung có ích, ví dụ “Lối vào nhà ăn tầng 1, cửa kính bên trái”.",
  },
  {
    questionId: "ch04-l02-q09", lessonId: L, conceptId: "site-checklist", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp các bước kiểm tra trang nháp trước khi chia sẻ.",
    items: [
      { id: "a", text: "Đối chiếu nội dung với thông tin thật, tìm chỗ tự thêm" },
      { id: "b", text: "Kiểm tra đủ các phần đã yêu cầu" },
      { id: "c", text: "Bấm thử từng nút và biểu mẫu" },
      { id: "d", text: "Xem ở khung hẹp như điện thoại" },
      { id: "e", text: "Điền hết các [CẦN ĐIỀN]" },
    ],
    explanation: "Nội dung trước, chức năng sau, hoàn thiện cuối cùng.",
  },
  {
    questionId: "ch04-l02-q10", lessonId: L, conceptId: "iterate-site", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Trang nháp có 5 điểm cần sửa. Cách làm việc hiệu quả với Claude?",
    options: [
      { id: "a", text: "Gửi từng yêu cầu sửa cụ thể (hoặc một danh sách đánh số rõ ràng), kiểm tra sau mỗi lần", feedback: "Đúng." },
      { id: "b", text: "“Sửa hết mọi thứ cho ổn”", feedback: "Mơ hồ, khó kiểm tra." },
      { id: "c", text: "Tạo lại từ đầu mỗi khi thấy lỗi", feedback: "Mất phần đã tốt." },
    ],
    answer: "a",
    explanation: "Yêu cầu sửa cụ thể giúp thay đổi đúng chỗ và dễ kiểm tra.",
  },
  {
    questionId: "ch04-l02-q11", lessonId: L, conceptId: "site-sections", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép mục đích trang với các phần phù hợp.",
    pairs: [
      { id: "p1", left: "Trang đăng ký khám sức khoẻ", right: "Thời gian · Địa điểm · Cần mang theo · Biểu mẫu" },
      { id: "p2", left: "Trang giới thiệu xưởng cho khách", right: "Năng lực · Quy trình đặt hàng · Liên hệ" },
      { id: "p3", left: "Trang hướng dẫn khách tham quan", right: "Giờ tham quan · Quy định an toàn · Bản đồ" },
    ],
    explanation: "Các phần đi theo câu hỏi người xem cần được trả lời.",
  },
  {
    questionId: "ch04-l02-q12", lessonId: L, conceptId: "real-content", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Bạn chỉ đưa tên xưởng, 3 dịch vụ và 4 bước đặt hàng. Trên trang nháp, chọn các phần cần sửa.",
    segments: [
      { id: "s1", text: "Dịch vụ: gia công CNC, hàn, sơn tĩnh điện.", isError: false },
      { id: "s2", text: "Thành lập năm 1998, hơn 200 khách hàng.", isError: true, why: "Thông tin không có trong dữ liệu bạn đưa." },
      { id: "s3", text: "Quy trình đặt hàng 4 bước.", isError: false },
      { id: "s4", text: "Địa chỉ: 12 Nguyễn Văn Linh, Q.7.", isError: true, why: "Bạn chưa đưa địa chỉ — có thể là thông tin minh hoạ." },
    ],
    explanation: "Mọi thông tin bạn không đưa đều phải được kiểm tra hoặc thay bằng [CẦN ĐIỀN].",
  },
  {
    questionId: "ch04-l02-q13", lessonId: L, conceptId: "site-style", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây thành yêu cầu tạo trang web cụ thể.",
    source: "làm trang web quán cơm cho xịn",
    rubric: [
      { id: "type", label: "Loại sản phẩm", weight: 1, check: { kind: "anyKeyword", keywords: ["trang web", "artifact"] }, pass: "Có loại sản phẩm.", fail: "Nói rõ: tạo artifact trang web một trang." },
      { id: "sections", label: "Các phần cụ thể", weight: 1, check: { kind: "minMatches", pattern: "(thuc don|gio mo cua|dia chi|lien he|dat ban|gioi thieu)", value: 2 }, pass: "Có các phần.", fail: "Liệt kê các phần: thực đơn, giờ mở cửa, liên hệ…" },
      { id: "no-invent", label: "Chặn tự thêm thông tin", weight: 1, check: { kind: "regex", pattern: "\\[[^\\]]+\\]|chi dung thong tin|khong (tu )?(them|bia)" }, pass: "Có chặn.", fail: "Dặn chỉ dùng thông tin bạn đưa, thiếu thì để [CẦN ĐIỀN]." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Tạo artifact trang web một trang cho quán cơm Bà Năm, khách là nhân viên văn phòng gần đó, xem trên điện thoại. Các phần: Giới thiệu ngắn, Thực đơn hôm nay, Giờ mở cửa, Liên hệ và đặt bàn. Chỉ dùng thông tin tôi cung cấp; giá và số điện thoại để [CẦN ĐIỀN]. Chữ lớn, màu ấm, tương phản cao.",
    explanation: "Thay “cho xịn” bằng nội dung, cấu trúc và tiêu chí kiểm tra được.",
  },
  {
    questionId: "ch04-l02-q14", lessonId: L, conceptId: "keyboard-nav", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Đồng nghiệp chỉ dùng bàn phím báo không đọc hết được trang hướng dẫn artifact của bạn — trang chỉ có chữ, không có nút hay liên kết. Cải thiện hợp lý nhất?",
    options: [
      { id: "a", text: "Nhờ Claude thêm mục lục có liên kết tới từng phần và nút “Lên đầu trang”", feedback: "Đúng — có phần tử để Tab tới." },
      { id: "b", text: "Tăng số lượng ảnh", feedback: "Không giải quyết điều hướng." },
      { id: "c", text: "Bảo đồng nghiệp dùng chuột", feedback: "Không phải ai cũng dùng được chuột." },
    ],
    answer: "a",
    explanation: "Help Center: trang không có nút/liên kết bị Tab bỏ qua và phím mũi tên không cuộn được.",
  },
  {
    questionId: "ch04-l02-q15", lessonId: L, conceptId: "site-purpose", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết yêu cầu tạo trang web cho tình huống dưới đây (4–6 dòng), kèm 2 tiêu chí bạn dùng để duyệt bản nháp.",
    source: "Phòng nhân sự cần trang “Chào mừng nhân viên mới”: ngày đầu đi làm (thứ Hai, 7h45 có mặt ở phòng nhân sự tầng 2), cần mang (CCCD, ảnh 3x4, sổ khám sức khoẻ), lịch tuần đầu (thứ Hai: đào tạo an toàn; thứ Ba–Sáu: kèm cặp tại tổ). Chưa có: số điện thoại người hướng dẫn.",
    rubric: [
      { id: "type", label: "Loại sản phẩm và người xem", weight: 1, check: { kind: "allGroups", groups: [["trang web", "artifact"], ["nhân viên mới"]] }, pass: "Có loại và người xem.", fail: "Nêu: artifact trang web cho nhân viên mới." },
      { id: "facts", label: "Dùng đúng thông tin", weight: 1, check: { kind: "allGroups", groups: [["7h45"], ["cccd"], ["an toàn"]] }, pass: "Có thông tin thật.", fail: "Đưa giờ 7h45, giấy tờ cần mang, lịch tuần đầu." },
      { id: "placeholder", label: "Chỗ trống cho số điện thoại", weight: 1, check: { kind: "regex", pattern: "\\[[^\\]]+\\]" }, pass: "Có chỗ trống.", fail: "Số điện thoại để [CẦN ĐIỀN]." },
      { id: "criteria", label: "Có tiêu chí duyệt", weight: 1, check: { kind: "regex", pattern: "(tieu chi|kiem tra|duyet)[^\\n]*:" }, pass: "Có tiêu chí.", fail: "Thêm “Tiêu chí duyệt: …”." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Tạo artifact trang web một trang “Chào mừng nhân viên mới”, xem trên điện thoại. Các phần: Ngày đầu đi làm (thứ Hai, có mặt 7h45 tại phòng nhân sự tầng 2), Cần mang theo (CCCD, ảnh 3x4, sổ khám sức khoẻ), Lịch tuần đầu (thứ Hai đào tạo an toàn; thứ Ba–Sáu kèm cặp tại tổ), Liên hệ người hướng dẫn: [CẦN ĐIỀN]. Chỉ dùng thông tin này, chữ lớn, tương phản cao, có mục lục liên kết.\nTiêu chí duyệt: (1) mọi giờ, ngày, giấy tờ khớp thông tin gốc, không có thông tin tự thêm; (2) xem tốt trên điện thoại và các liên kết mục lục hoạt động.",
    explanation: "Yêu cầu tốt + tiêu chí duyệt rõ = trang dùng được ngay.",
  },
];
