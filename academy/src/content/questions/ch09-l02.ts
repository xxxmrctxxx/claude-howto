import type { Question } from "@/lib/types/content";

const L = "ch09-l02";

/** 15 questions for "Thiết kế giao diện" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh09L02: Question[] = [
  {
    questionId: "ch09-l02-q01", lessonId: L, conceptId: "wireframe", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Wireframe là gì?",
    options: [
      { id: "a", text: "Khung màn hình đơn giản cho biết vùng, ô nhập, nút và thứ tự — chưa cần màu sắc", feedback: "Đúng." },
      { id: "b", text: "Mã nguồn hoàn chỉnh của trang", feedback: "Wireframe là bản phác, chưa phải code." },
      { id: "c", text: "Một loại cáp mạng", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Có thể vẽ tay rồi chụp ảnh, hoặc mô tả bằng chữ.",
  },
  {
    questionId: "ch09-l02-q02", lessonId: L, conceptId: "empty-state", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Trạng thái rỗng (chưa có dữ liệu) nên giải thích tình hình và gợi ý bước tiếp theo, thay vì để trắng màn hình.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Ví dụ: “Tuần này chưa có lỗi nào được ghi” + nút “Ghi lỗi đầu tiên”.",
  },
  {
    questionId: "ch09-l02-q03", lessonId: L, conceptId: "mockup-image", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bạn có bản vẽ tay giao diện. Theo Best practices, cách đưa cho Claude nhanh nhất?",
    options: [
      { id: "a", text: "Chụp ảnh và dán ảnh vào prompt", feedback: "Đúng." },
      { id: "b", text: "Mô tả lại bằng lời thật dài", feedback: "Có thể, nhưng dán ảnh trực tiếp hơn." },
      { id: "c", text: "Không đưa, để Claude tự nghĩ", feedback: "Claude không thấy bản vẽ thì phải đoán." },
    ],
    answer: "a",
    explanation: "Có file thì gõ @ và đường dẫn để đính kèm nội dung.",
  },
  {
    questionId: "ch09-l02-q04", lessonId: L, conceptId: "ui-conventions", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Ghi quy ước giao diện (màu, cỡ chữ, nhãn ô nhập) vào CLAUDE.md giúp mọi phiên Claude Code theo cùng quy ước mà không phải nhắc lại.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "CLAUDE.md được nạp ở mỗi phiên.",
  },
  {
    questionId: "ch09-l02-q05", lessonId: L, conceptId: "confirm-state", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Thao tác nào nên có hộp xác nhận trước khi thực hiện?",
    options: [
      { id: "a", text: "Xoá một lỗi đã ghi", feedback: "Đúng — khó hoàn tác." },
      { id: "b", text: "Mở trang thống kê", feedback: "Không làm thay đổi dữ liệu." },
      { id: "c", text: "Cuộn danh sách", feedback: "Không cần xác nhận." },
    ],
    answer: "a",
    explanation: "Xác nhận cho thao tác khó hoàn tác.",
  },
  {
    questionId: "ch09-l02-q06", lessonId: L, conceptId: "error-state", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Công nhân bấm Lưu nhưng mất mạng. Thiết kế trạng thái lỗi nào tốt nhất?",
    options: [
      { id: "a", text: "Báo “Chưa lưu được — kiểm tra mạng”, giữ nguyên nội dung đã nhập, có nút Thử lại", feedback: "Đúng." },
      { id: "b", text: "Xoá form và quay về đầu trang", feedback: "Mất công nhập lại." },
      { id: "c", text: "Không báo gì", feedback: "Người dùng tưởng đã lưu." },
    ],
    answer: "a",
    explanation: "Lỗi phải nói rõ chuyện gì xảy ra và làm gì tiếp.",
  },
  {
    questionId: "ch09-l02-q07", lessonId: L, conceptId: "user-flow", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp luồng chính khi công nhân ghi một lỗi mới.",
    items: [
      { id: "a", text: "Mở màn hình Ghi lỗi" },
      { id: "b", text: "Chọn công đoạn, nhập mô tả, chọn mức độ" },
      { id: "c", text: "Bấm “Lưu lỗi”" },
      { id: "d", text: "Thấy thông báo “Đã lưu”" },
      { id: "e", text: "Lỗi mới hiện ở đầu Danh sách lỗi" },
    ],
    explanation: "Luồng rõ giúp Claude dựng đúng thứ tự màn hình và trạng thái.",
  },
  {
    questionId: "ch09-l02-q08", lessonId: L, conceptId: "a11y-ui", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Yêu cầu tiếp cận nào nên có trong quy ước giao diện? Chọn tất cả.",
    options: [
      { id: "a", text: "Mọi ô nhập có nhãn hiện rõ", feedback: "Đúng." },
      { id: "b", text: "Tương phản chữ/nền đủ cao", feedback: "Đúng." },
      { id: "c", text: "Dùng được bằng bàn phím", feedback: "Đúng." },
      { id: "d", text: "Chỉ dùng màu để phân biệt lỗi Cao/Thấp, không kèm chữ", feedback: "Người khó phân biệt màu sẽ không đọc được." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Thông tin không nên chỉ truyền qua màu.",
  },
  {
    questionId: "ch09-l02-q09", lessonId: L, conceptId: "mobile-first", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Người dùng chính là công nhân dùng điện thoại ở xưởng, tay có thể đeo găng. Quy ước nào hợp lý nhất?",
    options: [
      { id: "a", text: "Thiết kế cho điện thoại trước; nút lớn (cao ≥ 44px), chữ ≥ 16px, ít ô nhập", feedback: "Đúng." },
      { id: "b", text: "Thiết kế cho màn hình máy tính rồi thu nhỏ", feedback: "Nút và chữ sẽ quá nhỏ." },
      { id: "c", text: "Nhiều ô nhập nhỏ để đủ thông tin", feedback: "Khó thao tác khi đeo găng." },
    ],
    answer: "a",
    explanation: "Thiết kế theo người dùng và điều kiện thật.",
  },
  {
    questionId: "ch09-l02-q10", lessonId: L, conceptId: "compare-mockup", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Claude báo “đã dựng xong màn hình Danh sách lỗi”. Theo Best practices, bạn nên làm gì?",
    options: [
      { id: "a", text: "Yêu cầu bằng chứng: ảnh chụp màn hình khổ điện thoại để đặt cạnh bản vẽ; có thể chạy /verify", feedback: "Đúng." },
      { id: "b", text: "Tin luôn và chuyển sang việc khác", feedback: "“Đã xong” một mình không cho biết nhiều." },
      { id: "c", text: "Hỏi lại “chắc chưa?”", feedback: "Cần bằng chứng cụ thể." },
    ],
    answer: "a",
    explanation: "Ảnh chụp trình duyệt cạnh mockup là một phép kiểm tra Claude đọc được.",
  },
  {
    questionId: "ch09-l02-q11", lessonId: L, conceptId: "loading-state", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép tình huống với trạng thái giao diện.",
    pairs: [
      { id: "p1", left: "Chưa có lỗi nào trong tuần", right: "Trạng thái rỗng" },
      { id: "p2", left: "Đang lấy số liệu từ máy chủ", right: "Đang tải" },
      { id: "p3", left: "Thiếu ô bắt buộc khi bấm Lưu", right: "Trạng thái lỗi" },
      { id: "p4", left: "Bấm Xoá một lỗi", right: "Xác nhận trước khi làm" },
    ],
    explanation: "Mỗi màn hình cần thiết kế cho cả các trạng thái này.",
  },
  {
    questionId: "ch09-l02-q12", lessonId: L, conceptId: "success-state", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn mô tả trạng thái cho màn hình Ghi lỗi. Chọn các ý SAI.",
    segments: [
      { id: "s1", text: "Lưu xong: hiện “Đã lưu” và lỗi mới lên đầu danh sách.", isError: false },
      { id: "s2", text: "Lỗi nhập liệu: hiện một hộp thông báo chung “Có lỗi” ở đầu trang, không nói ô nào.", isError: true, why: "Báo ngay dưới ô cần sửa, nói rõ lỗi gì." },
      { id: "s3", text: "Mất mạng: xoá form để người dùng nhập lại cho sạch.", isError: true, why: "Giữ nội dung đã nhập, có nút Thử lại." },
      { id: "s4", text: "Đang gửi: nút Lưu hiện “Đang lưu…” và tạm khoá để tránh bấm hai lần.", isError: false },
    ],
    explanation: "Trạng thái tốt nói rõ chuyện gì xảy ra và không làm mất công người dùng.",
  },
  {
    questionId: "ch09-l02-q13", lessonId: L, conceptId: "mockup-image", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây để Claude dựng đúng giao diện.",
    source: "làm màn hình danh sách lỗi cho đẹp",
    rubric: [
      { id: "design", label: "Đưa thiết kế/quy ước", weight: 1, check: { kind: "anyKeyword", keywords: ["ảnh", "bản vẽ", "wireframe", "@claude.md", "quy ước"] }, pass: "Có thiết kế.", fail: "Dán ảnh bản vẽ hoặc đính kèm quy ước (@CLAUDE.md)." },
      { id: "states", label: "Nêu trạng thái", weight: 1, check: { kind: "allGroups", groups: [["rỗng"], ["lỗi"]] }, pass: "Có trạng thái.", fail: "Nêu trạng thái rỗng và lỗi (be ambitious)." },
      { id: "evidence", label: "Yêu cầu bằng chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["chụp", "ảnh chụp", "screenshot", "/verify"] }, pass: "Có bằng chứng.", fail: "Yêu cầu ảnh chụp để so với bản vẽ." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Dựng màn hình Danh sách lỗi theo ảnh bản vẽ đính kèm và quy ước trong @CLAUDE.md. Be ambitious: trạng thái rỗng (hướng dẫn ghi lỗi đầu tiên), đang tải, lỗi mạng có nút Thử lại, hộp xác nhận khi xoá, điều hướng bàn phím. Xong chụp ảnh khổ điện thoại để tôi so với bản vẽ.",
    explanation: "Thay “đẹp” bằng bản vẽ, trạng thái và bằng chứng.",
  },
  {
    questionId: "ch09-l02-q14", lessonId: L, conceptId: "ui-conventions", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Mỗi lần mở phiên mới, Claude lại dùng màu nút và cỡ chữ khác nhau. Cách khắc phục bền vững?",
    options: [
      { id: "a", text: "Ghi mục “Quy ước giao diện” (màu, cỡ chữ, nút, nhãn) vào CLAUDE.md của dự án", feedback: "Đúng." },
      { id: "b", text: "Nhắc lại trong mỗi tin nhắn", feedback: "Mệt và dễ quên." },
      { id: "c", text: "Không dùng phiên mới nữa", feedback: "Phiên dài tốn context và lượt dùng." },
    ],
    answer: "a",
    explanation: "Claude làm sai quy ước lần hai → ghi vào CLAUDE.md (Chương 7).",
  },
  {
    questionId: "ch09-l02-q15", lessonId: L, conceptId: "wireframe", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết wireframe bằng chữ (4–6 dòng) cho màn hình dưới đây, có ít nhất 2 trạng thái ngoài trạng thái bình thường.",
    source: "Màn hình “Đặt phòng họp” trên điện thoại: chọn ngày, xem các phòng và khung giờ trống, chọn một khung, bấm Đặt. Có thể không còn phòng trống; có thể có người đặt trước bạn vài giây.",
    rubric: [
      { id: "regions", label: "Có vùng/nút", weight: 1, check: { kind: "minMatches", pattern: "\\[[^\\]]+\\]", value: 3 }, pass: "Có wireframe.", fail: "Mô tả ít nhất 3 vùng/nút dạng [ … ]." },
      { id: "empty", label: "Trạng thái không còn phòng", weight: 1, check: { kind: "anyKeyword", keywords: ["không còn", "hết phòng", "rỗng"] }, pass: "Có trạng thái rỗng.", fail: "Thêm trạng thái khi không còn phòng trống." },
      { id: "conflict", label: "Trạng thái bị đặt trước", weight: 1, check: { kind: "anyKeyword", keywords: ["vừa được đặt", "đã có người đặt", "trùng", "chọn khung khác"] }, pass: "Có xử lý trùng.", fail: "Thêm trạng thái khi khung vừa bị người khác đặt." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "[Tiêu đề] Đặt phòng họp\n[Chọn ngày ▾]\n[Danh sách phòng] mỗi phòng một hàng, các khung giờ trống là nút bấm được\n[Đặt phòng] nút lớn, chỉ bật khi đã chọn khung\nRỗng: “Ngày này không còn phòng trống” + gợi ý chọn ngày khác.\nTrùng: “Khung này vừa được đặt — vui lòng chọn khung khác”, danh sách tự cập nhật.",
    explanation: "Wireframe tốt nêu cả trạng thái hiếm nhưng chắc chắn xảy ra.",
  },
];
