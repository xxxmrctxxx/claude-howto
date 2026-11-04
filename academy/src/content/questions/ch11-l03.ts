import type { Question } from "@/lib/types/content";

const L = "ch11-l03";

/** 15 questions for "Tạo báo cáo" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh11L03: Question[] = [
  {
    questionId: "ch11-l03-q01", lessonId: L, conceptId: "batch-api", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền mức giảm chi phí của Message Batches theo tài liệu.",
    template: "Message Batches API xử lý bất đồng bộ và giảm [[b1]] % chi phí so với gọi thường.",
    blanks: [{ id: "b1", accepted: ["50"], width: 4 }],
    explanation: "Đổi lại, kết quả không có ngay (phần lớn lô xong dưới 1 giờ).",
  },
  {
    questionId: "ch11-l03-q02", lessonId: L, conceptId: "code-computes", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trong pipeline báo cáo, ai nên tính tổng lỗi và tỷ lệ lỗi?",
    options: [
      { id: "a", text: "Script/bảng tính — rồi đưa số đã tính cho Claude viết diễn giải", feedback: "Đúng." },
      { id: "b", text: "Claude, từ dữ liệu thô", feedback: "Phép tính trong lời văn khó kiểm chứng và tốn token." },
      { id: "c", text: "Người đọc báo cáo tự tính", feedback: "Mất ý nghĩa của tự động hoá." },
    ],
    answer: "a",
    explanation: "Code tính số, Claude viết lời.",
  },
  {
    questionId: "ch11-l03-q03", lessonId: L, conceptId: "custom-id", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Kết quả của một Message Batch luôn trả về đúng thứ tự các yêu cầu đã gửi.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Thứ tự bất kỳ — ghép bằng custom_id.",
  },
  {
    questionId: "ch11-l03-q04", lessonId: L, conceptId: "human-review", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Báo cáo tự động sắp gửi cho khách hàng. Bước nào không nên bỏ?",
    options: [
      { id: "a", text: "Người phụ trách duyệt và ghi rõ báo cáo được tạo tự động", feedback: "Đúng." },
      { id: "b", text: "Đổi font chữ", feedback: "Không phải bước kiểm soát chất lượng." },
      { id: "c", text: "Chạy lại để có bản khác", feedback: "Không thay được việc duyệt." },
    ],
    answer: "a",
    explanation: "Có người chịu trách nhiệm trước khi thông tin ra ngoài.",
  },
  {
    questionId: "ch11-l03-q05", lessonId: L, conceptId: "batch-limits", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Theo tài liệu Batch processing, điều nào đúng? Chọn tất cả.",
    options: [
      { id: "a", text: "Mỗi lô tối đa 100.000 yêu cầu hoặc 256 MB, tuỳ cái nào tới trước", feedback: "Đúng." },
      { id: "b", text: "Lô chưa xong trong 24 giờ thì phần còn lại hết hạn", feedback: "Đúng." },
      { id: "c", text: "Kết quả tải được trong 29 ngày", feedback: "Đúng." },
      { id: "d", text: "Mọi lô đều xong trong 5 phút", feedback: "Phần lớn xong dưới 1 giờ, không phải 5 phút." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Thiết kế lịch chạy có dư thời gian.",
  },
  {
    questionId: "ch11-l03-q06", lessonId: L, conceptId: "batch-results", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép loại kết quả batch với cách xử lý.",
    pairs: [
      { id: "p1", left: "succeeded", right: "Lấy message, qua cổng kiểm tra rồi lưu bản nháp" },
      { id: "p2", left: "errored", right: "Xem lỗi: yêu cầu sai thì sửa, lỗi máy chủ thì gửi lại" },
      { id: "p3", left: "expired", right: "Lô quá 24 giờ chưa tới lượt — gửi lại trong lô mới" },
      { id: "p4", left: "canceled", right: "Bạn đã huỷ lô — gửi lại nếu vẫn cần" },
    ],
    explanation: "errored, canceled, expired không tính phí.",
  },
  {
    questionId: "ch11-l03-q07", lessonId: L, conceptId: "realtime-api", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Web nội bộ có nút “Tóm tắt sự cố”; người dùng chờ kết quả trên màn hình. Chọn kênh nào?",
    options: [
      { id: "a", text: "Gọi Messages API trực tiếp", feedback: "Đúng." },
      { id: "b", text: "Message Batches để tiết kiệm", feedback: "Batch có thể mất tới giờ — người dùng không chờ được." },
      { id: "c", text: "GitHub Actions theo lịch", feedback: "Không phản hồi theo thao tác người dùng." },
    ],
    answer: "a",
    explanation: "Batches hợp với việc không cần ngay.",
  },
  {
    questionId: "ch11-l03-q08", lessonId: L, conceptId: "claude-p-script", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trong script chạy định kỳ, vì sao tài liệu khuyên thêm --bare khi gọi claude -p?",
    options: [
      { id: "a", text: "Bỏ qua tự nạp hooks, skills, plugin, MCP, CLAUDE.md của máy — kết quả giống nhau trên mọi máy", feedback: "Đúng." },
      { id: "b", text: "Để Claude trả lời dài hơn", feedback: "Không liên quan." },
      { id: "c", text: "Để dùng đăng nhập claude.ai thay API key", feedback: "Ngược lại: bare mode không đọc OAuth, cần ANTHROPIC_API_KEY." },
    ],
    answer: "a",
    explanation: "Bare mode là chế độ được khuyên cho script và SDK.",
  },
  {
    questionId: "ch11-l03-q09", lessonId: L, conceptId: "fixed-template", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Báo cáo tự động mỗi tuần một bố cục, lãnh đạo khó so sánh. Sửa ở đâu?",
    options: [
      { id: "a", text: "Đưa mẫu cố định có các mục đánh số vào prompt (hoặc system), kiểm tra đủ mục trong cổng kiểm tra", feedback: "Đúng." },
      { id: "b", text: "Đổi mô hình mỗi tuần", feedback: "Càng thiếu nhất quán." },
      { id: "c", text: "Bỏ báo cáo", feedback: "Không giải quyết vấn đề." },
    ],
    answer: "a",
    explanation: "Mẫu cố định giúp so sánh giữa các kỳ.",
  },
  {
    questionId: "ch11-l03-q10", lessonId: L, conceptId: "scheduled-run", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Về báo cáo chạy theo lịch bằng Claude Code GitHub Actions, điều nào đúng theo tài liệu? Chọn tất cả.",
    options: [
      { id: "a", text: "Có input prompt thì action chạy ở automation mode, không cần ai nhắc @claude", feedback: "Đúng." },
      { id: "b", text: "Mỗi lần chạy tốn phút GitHub Actions và token API", feedback: "Đúng." },
      { id: "c", text: "Workflow theo lịch chỉ chạy từ nhánh mặc định", feedback: "Đúng." },
      { id: "d", text: "Mặc định kết quả được gửi email cho cả công ty", feedback: "Mặc định kết quả nằm trong log của workflow run." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Muốn đăng lên issue/PR thì prompt phải yêu cầu và cấp công cụ phù hợp.",
  },
  {
    questionId: "ch11-l03-q11", lessonId: L, conceptId: "cost-usage", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn muốn biết chi phí thật của báo cáo tự động mỗi tháng. Cách làm hợp lý?",
    options: [
      { id: "a", text: "Ghi usage (token vào/ra) mỗi lần gọi, nhân với bảng giá hiện hành; đối chiếu hoá đơn trong Console", feedback: "Đúng." },
      { id: "b", text: "Đoán theo cảm giác", feedback: "Không kiểm soát được." },
      { id: "c", text: "Chỉ xem hoá đơn cuối năm", feedback: "Quá muộn để điều chỉnh." },
    ],
    answer: "a",
    explanation: "total_cost_usd của claude -p là ước tính phía máy, có thể khác hoá đơn.",
  },
  {
    questionId: "ch11-l03-q12", lessonId: L, conceptId: "report-pipeline", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một pipeline báo cáo tháng như dưới đây. Chọn các bước SAI.",
    segments: [
      { id: "s1", text: "Script tính bảng tổng hợp theo công đoạn từ cơ sở dữ liệu.", isError: false },
      { id: "s2", text: "Gửi 300 yêu cầu trong một batch, đọc kết quả theo thứ tự rồi gán cho lô 1, 2, 3…", isError: true, why: "Kết quả về thứ tự bất kỳ — phải ghép theo custom_id." },
      { id: "s3", text: "Bản nào có stop_reason max_tokens vẫn gửi đi vì “gần đủ”.", isError: true, why: "Báo cáo bị cắt — không dùng, gửi lại với max_tokens lớn hơn." },
      { id: "s4", text: "Trưởng QA duyệt mẫu ngẫu nhiên và mọi bản bị cờ trước khi gửi.", isError: false },
    ],
    explanation: "Ghép đúng và chặn bản lỗi trước khi gửi.",
  },
  {
    questionId: "ch11-l03-q13", lessonId: L, conceptId: "code-computes", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Báo cáo viết “lỗi tăng 25%” trong khi bảng đầu vào là 30 → 42 (tăng 40%). Cải thiện nào hợp lý nhất?",
    options: [
      { id: "a", text: "Script tính sẵn phần trăm thay đổi đưa vào bảng; prompt cấm tự tính; cổng kiểm tra so số trong lời văn với bảng", feedback: "Đúng." },
      { id: "b", text: "Dặn Claude “tính cẩn thận hơn”", feedback: "Vẫn để Claude tính — rủi ro còn đó." },
      { id: "c", text: "Bỏ phần trăm khỏi báo cáo", feedback: "Mất thông tin quan trọng." },
    ],
    answer: "a",
    explanation: "Đưa phép tính về code và kiểm tra tự động.",
  },
  {
    questionId: "ch11-l03-q14", lessonId: L, conceptId: "batch-api", learningObjective: "o2", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Đội bạn chạy 2.000 bản tóm tắt hồ sơ mỗi đêm bằng Messages API, mỗi bản một yêu cầu, sáng mới cần. Đề xuất nào tốt nhất?",
    options: [
      { id: "a", text: "Chuyển sang Message Batches: giảm 50% chi phí, gửi lúc tối, sáng ghép kết quả theo custom_id, gửi lại phần expired/errored", feedback: "Đúng." },
      { id: "b", text: "Giữ nguyên, không có cách rẻ hơn", feedback: "Batches giảm 50% cho việc không cần ngay." },
      { id: "c", text: "Gộp 2.000 hồ sơ vào một yêu cầu duy nhất", feedback: "Quá dài, khó kiểm tra từng bản." },
    ],
    answer: "a",
    explanation: "Việc không gấp, số lượng lớn là trường hợp điển hình của Batches.",
  },
  {
    questionId: "ch11-l03-q15", lessonId: L, conceptId: "fixed-template", learningObjective: "o1", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết prompt tạo báo cáo bảo trì tháng từ bảng số đã tính (số lần dừng máy, tổng giờ dừng theo máy).",
    source: "Bảng: Máy ép M-07: 6 lần, 14 giờ · Máy cắt C-02: 2 lần, 3 giờ · Máy sơn S-01: 4 lần, 5 giờ (tháng trước tổng 15 giờ)",
    rubric: [
      { id: "numbers", label: "Chỉ dùng số trong bảng", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ dùng", "không tự tính", "dùng đúng"] }, pass: "Có ràng buộc.", fail: "Yêu cầu chỉ dùng số trong bảng." },
      { id: "template", label: "Mẫu đánh số", weight: 1, check: { kind: "regex", pattern: "(\\(1\\)|1[.)])[\\s\\S]*(\\(2\\)|2[.)])" }, pass: "Có mẫu.", fail: "Nêu các mục đánh số." },
      { id: "unsure", label: "Ghi khi chưa chắc", weight: 1, check: { kind: "anyKeyword", keywords: ["cần xác nhận", "chưa chắc"] }, pass: "Có quy định.", fail: "Nguyên nhân phỏng đoán ghi “cần xác nhận”." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Dưới đây là bảng dừng máy tháng 10 do hệ thống bảo trì tổng hợp. Chỉ dùng đúng số trong bảng, không tự tính số mới.\nViết báo cáo tối đa 150 từ:\n(1) Tóm tắt 2 dòng, so tổng giờ dừng với tháng trước theo bảng.\n(2) Máy cần ưu tiên và lý do dựa trên số lần/giờ dừng.\n(3) Đề xuất việc bảo trì tháng tới.\nNguyên nhân là phỏng đoán thì ghi “cần xác nhận”.\n[bảng]",
    explanation: "Số từ code, mẫu cố định, quy định khi chưa chắc.",
  },
];
