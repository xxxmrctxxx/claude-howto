import type { Question } from "@/lib/types/content";

const L = "ch04-l06";

/** 15 questions for "Chỉnh sửa và kiểm tra sản phẩm" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03 (Claude Help Center). */
export const questionsCh04L06: Question[] = [
  {
    questionId: "ch04-l06-q01", lessonId: L, conceptId: "direct-edit", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "Trong Claude Docs, bạn có thể gõ trực tiếp vào tài liệu; thay đổi tự lưu và hiện ngay với mọi người đang mở.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Theo bài Get started with Claude Docs.",
  },
  {
    questionId: "ch04-l06-q02", lessonId: L, conceptId: "comment-claude", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trong Claude Docs, làm sao nhờ Claude sửa một đoạn ngay trong luồng bình luận?",
    options: [
      { id: "a", text: "Chọn đoạn văn, để bình luận và nhắc @Claude", feedback: "Đúng." },
      { id: "b", text: "Gửi email cho Claude", feedback: "Không phải cách làm." },
      { id: "c", text: "Đổi tên tài liệu", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Claude trả lời trong luồng và giải thích thay đổi.",
  },
  {
    questionId: "ch04-l06-q03", lessonId: L, conceptId: "keyboard-keys", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền tên phím.",
    template: "Phím [[b1]] đưa bạn vào trong artifact, còn phím [[b2]] đưa bạn ra lại khung artifact.",
    blanks: [
      { id: "b1", accepted: ["Tab"], width: 6 },
      { id: "b2", accepted: ["Escape", "Esc"], width: 8 },
    ],
    explanation: "Theo bài Use artifacts with a keyboard or screen reader.",
  },
  {
    questionId: "ch04-l06-q04", lessonId: L, conceptId: "check-content", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Kiểm tra nhóm “nội dung” của một artifact gồm những gì? Chọn tất cả.",
    options: [
      { id: "a", text: "Số liệu, tên, ngày khớp với nguồn", feedback: "Đúng." },
      { id: "b", text: "Không có thông tin tự thêm", feedback: "Đúng." },
      { id: "c", text: "Chính tả", feedback: "Đúng." },
      { id: "d", text: "Bấm thử từng nút", feedback: "Đó là nhóm chức năng." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Năm nhóm: nội dung, chức năng, hiển thị, tiếp cận, dữ liệu.",
  },
  {
    questionId: "ch04-l06-q05", lessonId: L, conceptId: "branch-version", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bạn muốn thử bố cục mới cho bản trình chiếu nhưng sợ mất bản hiện tại đang tốt. Cách an toàn?",
    options: [
      { id: "a", text: "Sửa tin nhắn yêu cầu trước đó để tạo phiên bản riêng với artifact riêng", feedback: "Đúng." },
      { id: "b", text: "Nhờ Claude ghi đè ngay", feedback: "Mất bản tốt hiện tại." },
      { id: "c", text: "Xoá artifact rồi làm lại", feedback: "Mất bản hiện tại." },
    ],
    answer: "a",
    explanation: "Phiên bản cũ vẫn còn để so sánh.",
  },
  {
    questionId: "ch04-l06-q06", lessonId: L, conceptId: "edit-with-claude-sel", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép thay đổi với cách sửa phù hợp nhất.",
    pairs: [
      { id: "p1", left: "Sửa một con số sai trong Docs", right: "Gõ trực tiếp" },
      { id: "p2", left: "Viết lại đoạn mở đầu cho dễ hiểu", right: "Bôi đen → Edit with Claude" },
      { id: "p3", left: "Thêm tính năng lọc vào công cụ", right: "Nhờ Claude trong chat" },
      { id: "p4", left: "Công cụ báo lỗi khi mở", right: "Try fixing with Claude" },
    ],
    explanation: "Cách sửa nhỏ nhất đủ dùng thường là cách nhanh và an toàn nhất.",
  },
  {
    questionId: "ch04-l06-q07", lessonId: L, conceptId: "check-function", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Công cụ tính giờ trông đúng với ca 8h–17h. Trước khi chia sẻ, kiểm tra chức năng thế nào cho đủ?",
    options: [
      { id: "a", text: "Chạy thêm ca qua nửa đêm, ô trống, giá trị nhập sai; bấm mọi nút", feedback: "Đúng." },
      { id: "b", text: "Một ca đúng là đủ", feedback: "Trường hợp biên hay sai nhất." },
      { id: "c", text: "Hỏi Claude công cụ có đúng không", feedback: "Phải tự chạy thử." },
    ],
    answer: "a",
    explanation: "Xem lại bài 4.3 về ca kiểm thử.",
  },
  {
    questionId: "ch04-l06-q08", lessonId: L, conceptId: "check-data", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "true-false",
    statement: "Trước khi chia sẻ một artifact tạo trong chat, nên rà các tệp đính kèm của chat vì người xem có thể được truy cập cả tệp của chat đó.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Help Center về chia sẻ artifact khuyên rà tệp đính kèm trước khi chia sẻ.",
  },
  {
    questionId: "ch04-l06-q09", lessonId: L, conceptId: "keyboard-keys", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trong bản trình chiếu (Slides), bạn đang ở trong một ô chữ và muốn lên lại cấp slide. Dùng phím nào?",
    options: [
      { id: "a", text: "Shift+Return", feedback: "Đúng — lên một cấp." },
      { id: "b", text: "Return", feedback: "Return đi vào sâu hơn." },
      { id: "c", text: "Ctrl+P", feedback: "Không phải phím điều hướng artifact." },
    ],
    answer: "a",
    explanation: "F6 (Cmd+F6 / Ctrl+F6) chuyển giữa các vùng soạn thảo.",
  },
  {
    questionId: "ch04-l06-q10", lessonId: L, conceptId: "check-display", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bảng lịch trực hiển thị đẹp trên máy tính nhưng tràn ngang trên điện thoại. Yêu cầu sửa nào tốt nhất?",
    options: [
      { id: "a", text: "“Bảng tràn ngang trên màn hình hẹp — cho cuộn ngang trong khung bảng, giữ cột Ngày cố định.”", feedback: "Đúng — cụ thể, kiểm tra được." },
      { id: "b", text: "“Làm cho đẹp trên điện thoại.”", feedback: "Mơ hồ." },
      { id: "c", text: "“Bỏ bảng đi.”", feedback: "Mất nội dung chính." },
    ],
    answer: "a",
    explanation: "Mô tả hiện tượng + mong muốn cụ thể.",
  },
  {
    questionId: "ch04-l06-q11", lessonId: L, conceptId: "one-change", learningObjective: "o4", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Vì sao nên gửi yêu cầu sửa dạng danh sách đánh số và dặn “giữ nguyên phần khác”?",
    options: [
      { id: "a", text: "Để Claude sửa đúng chỗ, không đổi phần đang đúng, và bạn dễ kiểm tra lại từng điểm", feedback: "Đúng." },
      { id: "b", text: "Để Claude chạy nhanh gấp đôi", feedback: "Không phải lý do." },
      { id: "c", text: "Vì Claude chỉ đọc được danh sách", feedback: "Không đúng." },
    ],
    answer: "a",
    explanation: "Có thể xin Claude liệt kê những gì đã đổi sau mỗi lần sửa.",
  },
  {
    questionId: "ch04-l06-q12", lessonId: L, conceptId: "check-a11y", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn nghiệm thu khả năng tiếp cận như dưới đây. Chọn các ý SAI.",
    segments: [
      { id: "s1", text: "Thử Tab vào artifact và Escape ra.", isError: false },
      { id: "s2", text: "Trang không có nút hay liên kết nào cũng không sao, vì phím mũi tên luôn cuộn được.", isError: true, why: "Help Center: trang không có nút/liên kết bị Tab bỏ qua, mũi tên không cuộn." },
      { id: "s3", text: "Chữ xám nhạt trên nền trắng là ổn nếu trên máy mình đọc được.", isError: true, why: "Tương phản thấp khó đọc với nhiều người." },
      { id: "s4", text: "Thêm mô tả cho ảnh sơ đồ.", isError: false },
    ],
    explanation: "Tiếp cận là kiểm tra với người dùng khác bạn.",
  },
  {
    questionId: "ch04-l06-q13", lessonId: L, conceptId: "check-data", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Khi nghiệm thu, bạn thấy lưu trữ chung của artifact chứa số điện thoại cá nhân của 30 công nhân. Quyết định đúng?",
    options: [
      { id: "a", text: "Yêu cầu bỏ số điện thoại khỏi lưu trữ chung, chỉ giữ dữ liệu cần thiết, rồi mới chia sẻ", feedback: "Đúng." },
      { id: "b", text: "Chia sẻ luôn, ai cũng là đồng nghiệp", feedback: "Lộ dữ liệu cá nhân." },
      { id: "c", text: "Giữ nguyên, thêm dòng “vui lòng không xem”", feedback: "Lời dặn không bảo vệ dữ liệu." },
    ],
    answer: "a",
    explanation: "Lưu trữ chung ai mở artifact cũng thấy.",
  },
  {
    questionId: "ch04-l06-q14", lessonId: L, conceptId: "check-content", learningObjective: "o2", thinkingSkill: "apply", difficulty: "advanced",
    questionType: "ordering",
    prompt: "Sắp xếp năm nhóm kiểm tra theo thứ tự nghiệm thu đề xuất trong bài.",
    items: [
      { id: "a", text: "Nội dung" },
      { id: "b", text: "Chức năng" },
      { id: "c", text: "Hiển thị" },
      { id: "d", text: "Khả năng tiếp cận" },
      { id: "e", text: "Dữ liệu và riêng tư" },
    ],
    explanation: "Đúng nội dung trước, rồi chạy được, hiển thị tốt, ai cũng dùng được, và an toàn dữ liệu trước khi chia sẻ.",
  },
  {
    questionId: "ch04-l06-q15", lessonId: L, conceptId: "one-change", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết một yêu cầu sửa (dạng danh sách đánh số) cho các lỗi dưới đây, có ghi nhóm lỗi và câu dặn giữ nguyên phần khác.",
    source: "Artifact “Báo cáo lỗi tuần 44”: tổng lỗi ghi 412 nhưng nguồn là 398; nút “Tải PDF” không phản hồi; biểu đồ không có mô tả cho người dùng trình đọc màn hình.",
    rubric: [
      { id: "numbered", label: "Danh sách đánh số", weight: 1, check: { kind: "minMatches", pattern: "(\\(\\d\\)|^\\s*\\d[.)])", value: 3 }, pass: "Có 3 điểm đánh số.", fail: "Đánh số 3 điểm cần sửa." },
      { id: "groups", label: "Ghi nhóm lỗi", weight: 1, check: { kind: "allGroups", groups: [["nội dung"], ["chức năng"], ["tiếp cận", "trình đọc màn hình"]] }, pass: "Có nhóm lỗi.", fail: "Ghi nhóm: nội dung, chức năng, tiếp cận." },
      { id: "specific", label: "Có con số đúng", weight: 1, check: { kind: "anyKeyword", keywords: ["398"] }, pass: "Có số đúng.", fail: "Nêu số đúng 398." },
      { id: "keep", label: "Dặn giữ nguyên phần khác", weight: 1, check: { kind: "anyKeyword", keywords: ["giữ nguyên", "không đổi phần khác"] }, pass: "Có dặn.", fail: "Thêm: giữ nguyên các phần khác." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Sửa 3 điểm:\n(1) Nội dung: tổng lỗi tuần 44 là 398 theo nguồn, không phải 412 — sửa cả ở tiêu đề và bảng.\n(2) Chức năng: nút “Tải PDF” không phản hồi — sửa để tải được file PDF của báo cáo.\n(3) Tiếp cận: thêm mô tả cho biểu đồ để trình đọc màn hình đọc được, nêu xu hướng chính.\nGiữ nguyên các phần khác, rồi liệt kê những gì đã đổi.",
    explanation: "Đánh số + nhóm lỗi + số đúng + giữ nguyên phần khác = yêu cầu sửa dễ kiểm tra.",
  },
];
