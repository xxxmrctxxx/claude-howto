import type { Question } from "@/lib/types/content";

const L = "ch10-l01";

/** 15 questions for "Ứng dụng quản lý công việc" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh10L01: Question[] = [
  {
    questionId: "ch10-l01-q01", lessonId: L, conceptId: "task-status", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "ordering",
    prompt: "Sắp xếp ba trạng thái cơ bản của một công việc theo thứ tự.",
    items: [
      { id: "a", text: "Cần làm" },
      { id: "b", text: "Đang làm" },
      { id: "c", text: "Xong" },
    ],
    explanation: "Bắt đầu với ba trạng thái; thêm trạng thái khi thật cần.",
  },
  {
    questionId: "ch10-l01-q02", lessonId: L, conceptId: "task-fields", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Bản đầu của bảng giao việc cần những trường nào? Chọn tất cả.",
    options: [
      { id: "a", text: "Tên việc", feedback: "Đúng." },
      { id: "b", text: "Người phụ trách", feedback: "Đúng." },
      { id: "c", text: "Hạn chót", feedback: "Đúng." },
      { id: "d", text: "Số điện thoại cá nhân của thợ", feedback: "Nhạy cảm, không cần cho việc giao việc." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Thêm mức ưu tiên và trạng thái.",
  },
  {
    questionId: "ch10-l01-q03", lessonId: L, conceptId: "shared-data", learningObjective: "o3", thinkingSkill: "apply", difficulty: "beginner",
    questionType: "scenario",
    prompt: "Tổ trưởng muốn ghi chú lý do một thợ nghỉ ốm (kèm chẩn đoán) vào bảng giao việc dùng chung của tổ. Nên làm gì?",
    options: [
      { id: "a", text: "Không ghi chẩn đoán vào bảng dùng chung; chỉ chuyển việc cho người khác và ghi “vắng”", feedback: "Đúng — cả tổ đều thấy dữ liệu chung." },
      { id: "b", text: "Ghi đầy đủ cho mọi người biết", feedback: "Lộ thông tin sức khoẻ cá nhân." },
      { id: "c", text: "Ghi bằng chữ viết tắt để người khác khó hiểu", feedback: "Vẫn là thông tin nhạy cảm." },
    ],
    answer: "a",
    explanation: "Lưu trữ chung của artifact ai mở cũng thấy — chỉ ghi điều cần cho việc giao việc.",
  },
  {
    questionId: "ch10-l01-q04", lessonId: L, conceptId: "export-backup", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao nên thêm nút xuất CSV cho bảng giao việc?",
    options: [
      { id: "a", text: "Làm bản dự phòng và dùng cho báo cáo tháng trong Excel", feedback: "Đúng." },
      { id: "b", text: "Để trang trông chuyên nghiệp hơn", feedback: "Không phải lý do chính." },
      { id: "c", text: "Vì artifact không lưu được gì", feedback: "Artifact lưu được văn bản (tối đa 20 MB)." },
    ],
    answer: "a",
    explanation: "CSV mở được bằng Excel.",
  },
  {
    questionId: "ch10-l01-q05", lessonId: L, conceptId: "pilot-week", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Nên cho tổ dùng thử bản nhỏ một tuần rồi cải tiến theo góp ý, thay vì thêm thật nhiều tính năng ngay từ đầu.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Góp ý thật cho biết tính năng nào thật sự cần.",
  },
  {
    questionId: "ch10-l01-q06", lessonId: L, conceptId: "artifact-route", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Tổ 8 người, ai cũng có tài khoản Claude, chỉ cần danh sách việc đơn giản trong tuần này. Cách làm hợp lý nhất?",
    options: [
      { id: "a", text: "Artifact công cụ, chia sẻ bằng Share", feedback: "Đúng — nhanh, đủ dùng." },
      { id: "b", text: "Dự án Claude Code có máy chủ, cơ sở dữ liệu, pipeline", feedback: "Quá nặng cho nhu cầu này." },
      { id: "c", text: "Mua phần mềm lớn", feedback: "Chưa cần." },
    ],
    answer: "a",
    explanation: "Chọn cách đơn giản nhất đáp ứng yêu cầu.",
  },
  {
    questionId: "ch10-l01-q07", lessonId: L, conceptId: "code-route", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Cả xưởng 120 người cần dùng, nhiều người không có tài khoản Claude, phải đăng nhập bằng tài khoản công ty. Cách làm hợp lý?",
    options: [
      { id: "a", text: "Dự án Claude Code theo quy trình Chương 9, triển khai trên máy chủ công ty", feedback: "Đúng." },
      { id: "b", text: "Artifact chia sẻ Anyone with the link", feedback: "Người xem thường cần tài khoản Claude." },
      { id: "c", text: "Gửi file Excel qua email mỗi ngày", feedback: "Không giải quyết được vấn đề." },
    ],
    answer: "a",
    explanation: "Có người dùng ngoài Claude, cần đăng nhập công ty → ứng dụng riêng.",
  },
  {
    questionId: "ch10-l01-q08", lessonId: L, conceptId: "storage-cap", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Tổ muốn đính kèm ảnh hiện trường cho mỗi việc trong artifact giao việc. Cân nhắc nào đúng?",
    options: [
      { id: "a", text: "Lưu trữ artifact chỉ dạng văn bản, tối đa 20 MB — để sau, hoặc lưu đường dẫn ảnh ở nơi khác", feedback: "Đúng." },
      { id: "b", text: "Lưu ảnh trực tiếp, không giới hạn", feedback: "Có giới hạn và chỉ văn bản." },
      { id: "c", text: "Bỏ luôn dự án", feedback: "Chỉ cần đổi cách lưu ảnh." },
    ],
    answer: "a",
    explanation: "Thiết kế dữ liệu theo giới hạn ngay từ đầu.",
  },
  {
    questionId: "ch10-l01-q09", lessonId: L, conceptId: "usage-scenarios", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bước kịch bản kiểm thử nào viết tốt nhất?",
    options: [
      { id: "a", text: "Đặt một việc hạn hôm qua, chưa Xong → mong đợi: việc tô đỏ", feedback: "Đúng — có hành động và kết quả mong đợi." },
      { id: "b", text: "Kiểm tra xem app chạy tốt không", feedback: "Mơ hồ." },
      { id: "c", text: "Bấm lung tung xem có lỗi không", feedback: "Không lặp lại được." },
    ],
    answer: "a",
    explanation: "Mỗi bước: hành động → kết quả mong đợi.",
  },
  {
    questionId: "ch10-l01-q10", lessonId: L, conceptId: "roles", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép vai trò với việc được làm trong bảng giao việc.",
    pairs: [
      { id: "p1", left: "Tổ trưởng", right: "Giao việc, đổi hạn, đóng việc" },
      { id: "p2", left: "Thợ", right: "Cập nhật trạng thái việc của mình" },
      { id: "p3", left: "Quản đốc", right: "Xem tổng quan, không sửa" },
    ],
    explanation: "Ghi rõ vai trò trong đặc tả; với artifact, chọn quyền chia sẻ tương ứng.",
  },
  {
    questionId: "ch10-l01-q11", lessonId: L, conceptId: "no-sensitive", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Một bạn đề xuất các trường cho artifact giao việc dùng chung. Chọn các trường KHÔNG nên có.",
    segments: [
      { id: "s1", text: "Tên việc, người phụ trách, hạn, trạng thái", isError: false },
      { id: "s2", text: "Mức lương của người phụ trách", isError: true, why: "Nhạy cảm, không liên quan giao việc." },
      { id: "s3", text: "Ghi chú tiến độ ngắn", isError: false },
      { id: "s4", text: "Lý do bị kỷ luật gần nhất", isError: true, why: "Nhạy cảm; dữ liệu chung ai cũng thấy." },
    ],
    explanation: "Chỉ lưu dữ liệu cần cho nghiệp vụ.",
  },
  {
    questionId: "ch10-l01-q12", lessonId: L, conceptId: "iterate-feedback", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Sau một tuần, tổ góp ý: (1) muốn lọc theo ưu tiên, (2) muốn biểu đồ Gantt, (3) hay quên cập nhật trạng thái. Ưu tiên cải tiến hợp lý nhất?",
    options: [
      { id: "a", text: "Làm (1) vì nhỏ và nhiều người cần; tìm nguyên nhân (3) — có thể giao diện cập nhật quá rườm rà; (2) để sau", feedback: "Đúng." },
      { id: "b", text: "Làm Gantt trước vì trông ấn tượng", feedback: "Không giải quyết vấn đề chính." },
      { id: "c", text: "Không sửa gì", feedback: "Bỏ phí góp ý." },
    ],
    answer: "a",
    explanation: "Ưu tiên cải tiến nhỏ, giá trị cao, và gỡ trở ngại sử dụng.",
  },
  {
    questionId: "ch10-l01-q13", lessonId: L, conceptId: "artifact-route", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây thành yêu cầu tạo artifact giao việc đủ dùng và an toàn.",
    source: "làm app quản lý công việc xịn, đủ mọi tính năng",
    rubric: [
      { id: "fields", label: "Trường và trạng thái", weight: 1, check: { kind: "allGroups", groups: [["người phụ trách"], ["hạn"], ["trạng thái", "cần làm"]] }, pass: "Có trường.", fail: "Nêu trường: người phụ trách, hạn, trạng thái." },
      { id: "safe", label: "Không lưu thông tin nhạy cảm", weight: 1, check: { kind: "anyKeyword", keywords: ["không lưu", "thông tin cá nhân", "nhạy cảm"] }, pass: "Có ràng buộc dữ liệu.", fail: "Dặn không lưu thông tin cá nhân/nhạy cảm." },
      { id: "scope", label: "Phạm vi nhỏ, rõ", weight: 1, check: { kind: "noKeyword", keywords: ["mọi tính năng", "xịn"] }, pass: "Phạm vi rõ.", fail: "Bỏ “mọi tính năng”, nêu tính năng cụ thể." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Tạo artifact công cụ giao việc cho tổ 8 người: mỗi việc có tên, người phụ trách, hạn, ưu tiên, trạng thái (Cần làm/Đang làm/Xong); việc quá hạn tô đỏ; lọc theo người và trạng thái; nút xuất CSV. Dữ liệu dùng chung cho tổ; không lưu thông tin cá nhân như số điện thoại hay lương.",
    explanation: "Tính năng cụ thể + dữ liệu an toàn.",
  },
  {
    questionId: "ch10-l01-q14", lessonId: L, conceptId: "code-route", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Chọn các lý do KHÔNG đúng để chuyển từ artifact sang dự án Claude Code.",
    segments: [
      { id: "s1", text: "Nhiều người dùng không có tài khoản Claude.", isError: false },
      { id: "s2", text: "Muốn trông “chuyên nghiệp” hơn dù nhu cầu không đổi.", isError: true, why: "Không phải nhu cầu thật; tăng chi phí bảo trì." },
      { id: "s3", text: "Cần đăng nhập bằng tài khoản công ty và tích hợp hệ thống nhân sự.", isError: false },
      { id: "s4", text: "Vì artifact không có nút bấm được.", isError: true, why: "Artifact làm được công cụ tương tác." },
    ],
    explanation: "Chuyển khi nhu cầu thật vượt khả năng của artifact.",
  },
  {
    questionId: "ch10-l01-q15", lessonId: L, conceptId: "usage-scenarios", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết kịch bản kiểm thử 4 bước (mỗi bước có “mong đợi”) cho ứng dụng dưới đây.",
    source: "Bảng theo dõi yêu cầu sửa chữa của phòng hành chính: nhân viên gửi yêu cầu (vị trí, mô tả, mức khẩn); hành chính nhận và chuyển trạng thái Đã nhận → Đang sửa → Hoàn tất; yêu cầu khẩn chưa nhận sau 2 giờ phải nổi bật.",
    rubric: [
      { id: "steps", label: "Có 4 bước", weight: 1, check: { kind: "minMatches", pattern: "^\\s*\\d[.)]", value: 4 }, pass: "Đủ bước.", fail: "Viết 4 bước đánh số." },
      { id: "expected", label: "Có mong đợi", weight: 1, check: { kind: "minMatches", pattern: "mong doi", value: 3 }, pass: "Có mong đợi.", fail: "Mỗi bước ghi “mong đợi: …”." },
      { id: "urgent", label: "Bước yêu cầu khẩn quá 2 giờ", weight: 1, check: { kind: "anyKeyword", keywords: ["2 giờ", "khẩn"] }, pass: "Có bước khẩn.", fail: "Thêm bước yêu cầu khẩn chưa nhận sau 2 giờ." },
      { id: "status", label: "Chuyển trạng thái", weight: 1, check: { kind: "anyKeyword", keywords: ["đang sửa", "hoàn tất", "đã nhận"] }, pass: "Có trạng thái.", fail: "Thêm bước chuyển trạng thái." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "1. Nhân viên gửi yêu cầu (phòng họp B, đèn hỏng, mức thường) → mong đợi: yêu cầu hiện ở danh sách, trạng thái chờ nhận.\n2. Hành chính bấm Đã nhận → mong đợi: trạng thái đổi sang Đã nhận, ghi giờ nhận.\n3. Gửi yêu cầu khẩn, để quá 2 giờ chưa nhận → mong đợi: yêu cầu nổi bật màu đỏ ở đầu danh sách.\n4. Chuyển Đang sửa rồi Hoàn tất → mong đợi: yêu cầu chuyển đúng cột, không còn nổi bật.",
    explanation: "Kịch bản bao trọn luồng chính và trường hợp cần nổi bật.",
  },
];
