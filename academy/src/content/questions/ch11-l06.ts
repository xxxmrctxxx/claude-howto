import type { Question } from "@/lib/types/content";

const L = "ch11-l06";

/** 15 questions for "Xây dựng AI Agent" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh11L06: Question[] = [
  {
    questionId: "ch11-l06-q01", lessonId: L, conceptId: "tool-loop", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền giá trị stop_reason khi Claude muốn gọi công cụ.",
    template: "Khi Claude muốn gọi một client tool, phản hồi có stop_reason là [[b1]].",
    blanks: [{ id: "b1", accepted: ["tool_use", "tool use"], width: 10 }],
    explanation: "Kèm một hoặc nhiều khối tool_use.",
  },
  {
    questionId: "ch11-l06-q02", lessonId: L, conceptId: "agent-definition", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Điều gì làm một hệ thống được gọi là agent theo Building effective agents?",
    options: [
      { id: "a", text: "Mô hình tự điều khiển quy trình và tự chọn công cụ để hoàn thành việc", feedback: "Đúng." },
      { id: "b", text: "Có giao diện chat", feedback: "Giao diện không quyết định." },
      { id: "c", text: "Dùng mô hình lớn nhất", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Khác workflow: đường đi do code định sẵn.",
  },
  {
    questionId: "ch11-l06-q03", lessonId: L, conceptId: "client-server-tools", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Với client tool (công cụ bạn định nghĩa), Anthropic tự chạy công cụ trên máy chủ của họ.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Client tool chạy trong ứng dụng của bạn; server tool (web search…) mới chạy phía Anthropic.",
  },
  {
    questionId: "ch11-l06-q04", lessonId: L, conceptId: "tool-definition", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Một client tool tự định nghĩa gồm những trường nào? Chọn tất cả.",
    options: [
      { id: "a", text: "name", feedback: "Đúng." },
      { id: "b", text: "description", feedback: "Đúng." },
      { id: "c", text: "input_schema", feedback: "Đúng." },
      { id: "d", text: "api_key", feedback: "Không thuộc định nghĩa công cụ." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Có thể thêm strict: true để tham số luôn khớp schema.",
  },
  {
    questionId: "ch11-l06-q05", lessonId: L, conceptId: "max-iterations", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao vòng lặp agent cần giới hạn số vòng?",
    options: [
      { id: "a", text: "Tránh chạy mãi khi bế tắc, tốn chi phí; quá giới hạn thì chuyển người", feedback: "Đúng." },
      { id: "b", text: "Vì API cấm quá 3 vòng", feedback: "Không có quy định đó." },
      { id: "c", text: "Để Claude trả lời ngắn hơn", feedback: "Không phải mục đích." },
    ],
    answer: "a",
    explanation: "Building effective agents nêu điều kiện dừng như số vòng tối đa.",
  },
  {
    questionId: "ch11-l06-q06", lessonId: L, conceptId: "tool-error", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Công cụ tra_cuu_lo_hang báo “không tìm thấy mã lô”. Code của bạn nên gửi lại gì?",
    options: [
      { id: "a", text: "tool_result với đúng tool_use_id, is_error: true và thông báo rõ “không tìm thấy mã lô LH-…”", feedback: "Đúng." },
      { id: "b", text: "Không gửi gì, bỏ qua lần gọi đó", feedback: "Mỗi tool_use cần một tool_result." },
      { id: "c", text: "Gửi kết quả giả để Claude đi tiếp", feedback: "Dẫn Claude tới kết luận sai." },
    ],
    answer: "a",
    explanation: "Thông báo lỗi rõ giúp Claude tự điều chỉnh (hỏi lại mã lô).",
  },
  {
    questionId: "ch11-l06-q07", lessonId: L, conceptId: "tool-description", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Agent hay gọi nhầm tra_cuu_lo_hang khi người hỏi đưa tên khách. Sửa ở đâu hiệu quả nhất?",
    options: [
      { id: "a", text: "Mô tả công cụ: ghi rõ chỉ dùng với mã lô (kèm ví dụ), tra theo tên khách thì dùng công cụ khác", feedback: "Đúng." },
      { id: "b", text: "Tăng max_tokens", feedback: "Không liên quan." },
      { id: "c", text: "Xoá công cụ", feedback: "Mất chức năng cần thiết." },
    ],
    answer: "a",
    explanation: "Mô tả công cụ là nơi Claude học khi nào dùng và không dùng.",
  },
  {
    questionId: "ch11-l06-q08", lessonId: L, conceptId: "agent-sdk", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ba nhóm dự án muốn xây agent. Nhóm nào nên chọn cách xây nào?",
    pairs: [
      { id: "p1", left: "Nhóm A: chương trình Python cần agent tự đọc, sửa file và chạy lệnh trong thư mục dự án", right: "Claude Agent SDK" },
      { id: "p2", left: "Nhóm B: ba hàm tra cứu tự viết, không muốn tự code vòng lặp", right: "Tool runner" },
      { id: "p3", left: "Nhóm C: cần quyết định riêng ở từng vòng (ghi log đặc thù, đổi chiến lược giữa chừng)", right: "Tự viết vòng lặp với Messages API" },
    ],
    explanation: "Chọn mức trừu tượng vừa đủ cho nhu cầu.",
  },
  {
    questionId: "ch11-l06-q09", lessonId: L, conceptId: "human-checkpoint", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Agent có công cụ gui_email_khach. Bạn đặt rào chắn thế nào?",
    options: [
      { id: "a", text: "Trước khi chạy công cụ, code của bạn đưa bản nháp cho người duyệt; bị từ chối thì trả tool_result is_error kèm lý do", feedback: "Đúng." },
      { id: "b", text: "Để agent tự gửi cho nhanh", feedback: "Hành động ra bên ngoài cần người duyệt." },
      { id: "c", text: "Dặn trong prompt “hãy cẩn thận”", feedback: "Lời dặn không thay được cổng duyệt." },
    ],
    answer: "a",
    explanation: "Điểm duyệt đặt ở code, không chỉ ở lời nhắc.",
  },
  {
    questionId: "ch11-l06-q10", lessonId: L, conceptId: "tool-loop", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Code dưới đây gửi lại kết quả công cụ. Điều gì sai?",
    context: { label: "Code", content: "messages.append({\"role\": \"user\", \"content\": [\n  {\"type\": \"tool_result\", \"tool_use_id\": \"toolu_A\", \"content\": kq_A}\n]})\nmessages.append({\"role\": \"user\", \"content\": [\n  {\"type\": \"tool_result\", \"tool_use_id\": \"toolu_B\", \"content\": kq_B}\n]})", lang: "python" },
    options: [
      { id: "a", text: "Hai lần gọi song song trong cùng lượt nên trả cả hai tool_result trong một tin nhắn user", feedback: "Đúng." },
      { id: "b", text: "Không sai gì", feedback: "Tách ra nhiều tin nhắn làm Claude ít gọi song song về sau." },
      { id: "c", text: "Phải đổi role thành assistant", feedback: "tool_result nằm trong lượt user." },
    ],
    answer: "a",
    explanation: "Gom mọi tool_result của một lượt vào một tin nhắn.",
  },
  {
    questionId: "ch11-l06-q11", lessonId: L, conceptId: "sandbox-testing", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp lộ trình đưa một agent vào sử dụng.",
    items: [
      { id: "a", text: "Chỉ công cụ đọc, dữ liệu giả, môi trường cô lập" },
      { id: "b", text: "Chạy bộ câu hỏi mẫu, đọc log từng vòng, sửa mô tả công cụ" },
      { id: "c", text: "Thêm công cụ ghi có điểm duyệt của người" },
      { id: "d", text: "Dùng thử với nhóm nhỏ trên dữ liệu thật" },
      { id: "e", text: "Mở rộng dần khi đã đo được độ tin cậy" },
    ],
    explanation: "Tăng quyền theo mức tin cậy đã chứng minh.",
  },
  {
    questionId: "ch11-l06-q12", lessonId: L, conceptId: "agent-sdk", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn xây công cụ nội bộ trên Claude Agent SDK để phát cho các phòng ban khác. Xác thực thế nào cho đúng điều khoản?",
    options: [
      { id: "a", text: "Dùng API key (hoặc phương thức xác thực API khác) của tổ chức; không cho người dùng đăng nhập bằng tài khoản claude.ai", feedback: "Đúng." },
      { id: "b", text: "Cho mỗi người đăng nhập claude.ai cá nhân để dùng hạn mức gói", feedback: "Tài liệu: không cho phép nếu chưa được Anthropic chấp thuận." },
      { id: "c", text: "Không cần xác thực", feedback: "Mọi lần gọi đều cần xác thực." },
    ],
    answer: "a",
    explanation: "Agent SDK overview nêu rõ quy định này.",
  },
  {
    questionId: "ch11-l06-q13", lessonId: L, conceptId: "when-agent", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Việc nào hợp với agent hơn workflow?",
    options: [
      { id: "a", text: "Điều tra nguyên nhân một lỗi lạ: không biết trước phải xem log nào, file cấu hình nào, chạy lệnh gì", feedback: "Đúng." },
      { id: "b", text: "Trích 5 trường từ mỗi phiếu nhập kho theo mẫu cố định", feedback: "Một lần gọi + schema là đủ." },
      { id: "c", text: "Dịch → kiểm thuật ngữ → định dạng", feedback: "Bước cố định — workflow chaining." },
    ],
    answer: "a",
    explanation: "Agent cho việc mở; bước biết trước thì dùng workflow.",
  },
  {
    questionId: "ch11-l06-q14", lessonId: L, conceptId: "tool-description", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Bộ công cụ của một agent như dưới đây. Chọn các thiết kế dễ gây dùng sai.",
    segments: [
      { id: "s1", text: "doc_file(path): “Đọc file. path là đường dẫn” — chấp nhận cả đường dẫn tương đối.", isError: true, why: "Dễ nhầm thư mục — bắt buộc đường dẫn tuyệt đối (poka-yoke)." },
      { id: "s2", text: "tra_cuu_lo_hang(ma_lo): mô tả định dạng LH-YYYY-NNNN, có ví dụ, nói rõ khi không dùng.", isError: false },
      { id: "s3", text: "xu_ly(du_lieu): “Xử lý dữ liệu”, du_lieu kiểu string tự do.", isError: true, why: "Mô tả mơ hồ, tham số không khuôn." },
      { id: "s4", text: "xoa_ban_ghi(id): chạy ngay, không cần duyệt.", isError: true, why: "Hành động không đảo ngược cần người duyệt." },
    ],
    explanation: "Thiết kế công cụ để khó dùng sai và có điểm duyệt.",
  },
  {
    questionId: "ch11-l06-q15", lessonId: L, conceptId: "tool-definition", learningObjective: "o2", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết định nghĩa công cụ (JSON) “tao_phieu_bao_tri” cho agent bảo trì: tạo phiếu với mã máy, mô tả sự cố, mức khẩn (thuong/gap). Ghi rõ công cụ này cần người duyệt.",
    source: "Mã máy dạng M-NN (ví dụ M-07). Phiếu chỉ được tạo sau khi tổ trưởng bảo trì xác nhận.",
    rubric: [
      { id: "desc", label: "Mô tả + điều kiện duyệt", weight: 1, check: { kind: "allGroups", groups: [["description"], ["duyệt", "xác nhận"]] }, pass: "Có mô tả và điều kiện duyệt.", fail: "description phải nêu cần tổ trưởng duyệt." },
      { id: "enum", label: "enum mức khẩn", weight: 1, check: { kind: "allGroups", groups: [["enum"], ["gap"]] }, pass: "Có enum.", fail: "muc_khan cần enum thuong/gap." },
      { id: "required", label: "required", weight: 1, check: { kind: "anyKeyword", keywords: ["required"] }, pass: "Có required.", fail: "Thêm required." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "{\"name\": \"tao_phieu_bao_tri\", \"description\": \"Tạo phiếu bảo trì cho một máy. Chỉ gọi khi đã có mã máy (dạng M-NN, ví dụ M-07) và mô tả sự cố. Hệ thống sẽ đưa phiếu cho tổ trưởng bảo trì duyệt trước khi tạo thật; nếu bị từ chối sẽ trả lỗi kèm lý do.\", \"input_schema\": {\"type\": \"object\", \"properties\": {\"ma_may\": {\"type\": \"string\", \"description\": \"Dạng M-NN\"}, \"mo_ta\": {\"type\": \"string\"}, \"muc_khan\": {\"type\": \"string\", \"enum\": [\"thuong\", \"gap\"]}}, \"required\": [\"ma_may\", \"mo_ta\", \"muc_khan\"]}}",
    explanation: "Công cụ ghi dữ liệu: mô tả kỹ + khuôn chặt + điểm duyệt.",
  },
];
