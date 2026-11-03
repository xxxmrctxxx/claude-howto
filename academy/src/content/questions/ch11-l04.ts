import type { Question } from "@/lib/types/content";

const L = "ch11-l04";

/** 15 questions for "Workflow nhiều bước" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh11L04: Question[] = [
  {
    questionId: "ch11-l04-q01", lessonId: L, conceptId: "workflow-vs-agent", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Theo Building effective agents, điểm khác cốt lõi giữa workflow và agent là gì?",
    options: [
      { id: "a", text: "Workflow đi theo đường do code định sẵn; agent để mô hình tự quyết bước và công cụ", feedback: "Đúng." },
      { id: "b", text: "Workflow dùng mô hình nhỏ, agent dùng mô hình lớn", feedback: "Không phải tiêu chí phân biệt." },
      { id: "c", text: "Workflow không dùng API", feedback: "Workflow vẫn gọi Claude qua API." },
    ],
    answer: "a",
    explanation: "Ai quyết định bước tiếp theo — code hay mô hình.",
  },
  {
    questionId: "ch11-l04-q02", lessonId: L, conceptId: "start-simple", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Lời khuyên của Anthropic là luôn bắt đầu bằng workflow nhiều bước để có kết quả tốt nhất.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Bắt đầu từ giải pháp đơn giản nhất; thêm bước khi đo được là cần.",
  },
  {
    questionId: "ch11-l04-q03", lessonId: L, conceptId: "prompt-chaining", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Mẫu nào mô tả “mỗi bước xử lý đầu ra của bước trước, có kiểm tra bằng code ở giữa”?",
    options: [
      { id: "a", text: "Prompt chaining", feedback: "Đúng." },
      { id: "b", text: "Routing", feedback: "Routing là phân loại rồi rẽ nhánh." },
      { id: "c", text: "Parallelization", feedback: "Song song, không nối tiếp." },
    ],
    answer: "a",
    explanation: "Đổi độ trễ lấy độ chính xác.",
  },
  {
    questionId: "ch11-l04-q04", lessonId: L, conceptId: "routing", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Khi nào routing là lựa chọn hợp lý?",
    options: [
      { id: "a", text: "Đầu vào chia thành các loại khác nhau rõ rệt, mỗi loại cần cách xử lý riêng", feedback: "Đúng." },
      { id: "b", text: "Mọi đầu vào đều giống nhau", feedback: "Không cần rẽ nhánh." },
      { id: "c", text: "Khi muốn lặp lại đến khi đạt", feedback: "Đó là evaluator-optimizer." },
    ],
    answer: "a",
    explanation: "Ví dụ: câu dễ sang mô hình nhỏ rẻ hơn, câu khó sang mô hình mạnh.",
  },
  {
    questionId: "ch11-l04-q05", lessonId: L, conceptId: "gate-check", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bước 1 trích dữ liệu thiếu mã lô. Cổng kiểm tra nên làm gì?",
    options: [
      { id: "a", text: "Dừng nhánh này, đưa vào hàng chờ cho người xử lý", feedback: "Đúng." },
      { id: "b", text: "Cho sang bước 2, để bước sau tự đoán mã lô", feedback: "Lỗi sẽ dồn và khuếch đại." },
      { id: "c", text: "Xoá yêu cầu", feedback: "Mất việc cần xử lý." },
    ],
    answer: "a",
    explanation: "Không chuyển rác sang bước sau.",
  },
  {
    questionId: "ch11-l04-q06", lessonId: L, conceptId: "parallel-voting", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn cần kết luận “bản vẽ có thiếu kích thước bắt buộc không” với độ tin cậy cao hơn một lần hỏi. Mẫu nào phù hợp?",
    options: [
      { id: "a", text: "Parallelization kiểu bỏ phiếu: chạy vài lần, lấy đa số, bất đồng thì chuyển người", feedback: "Đúng." },
      { id: "b", text: "Routing", feedback: "Không có nhiều loại đầu vào cần rẽ nhánh." },
      { id: "c", text: "Orchestrator-workers", feedback: "Phần việc đã rõ, không cần điều phối." },
    ],
    answer: "a",
    explanation: "Bỏ phiếu cho nhiều góc nhìn về cùng một việc.",
  },
  {
    questionId: "ch11-l04-q07", lessonId: L, conceptId: "orchestrator-workers", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Cần cập nhật một quy định mới vào bộ tài liệu 60 file, không biết trước file nào bị ảnh hưởng. Mẫu nào phù hợp?",
    options: [
      { id: "a", text: "Orchestrator-workers: một lần gọi xác định file liên quan và giao việc, các worker sửa từng file, rồi tổng hợp", feedback: "Đúng." },
      { id: "b", text: "Prompt chaining với 60 bước cố định", feedback: "Không biết trước bước nào cần." },
      { id: "c", text: "Một lần gọi với cả 60 file", feedback: "Khó kiểm soát và dễ sót." },
    ],
    answer: "a",
    explanation: "Dùng khi phần việc không đoán trước được.",
  },
  {
    questionId: "ch11-l04-q08", lessonId: L, conceptId: "evaluator-optimizer", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn dùng evaluator-optimizer để viết hướng dẫn công việc. Điều kiện nào cần có để mẫu này hiệu quả?",
    options: [
      { id: "a", text: "Tiêu chí chấm rõ ràng và vòng sửa sau tốt hơn đo được; giới hạn số vòng", feedback: "Đúng." },
      { id: "b", text: "Tiêu chí mơ hồ như “hay hơn”", feedback: "Không chấm được nhất quán." },
      { id: "c", text: "Lặp không giới hạn đến khi hoàn hảo", feedback: "Tốn chi phí, có thể không dừng." },
    ],
    answer: "a",
    explanation: "Theo bài viết: dùng khi tiêu chí đánh giá rõ và lặp mang lại giá trị đo được.",
  },
  {
    questionId: "ch11-l04-q09", lessonId: L, conceptId: "step-logging", learningObjective: "o4", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Mỗi bước trong workflow nên ghi log những gì để gỡ lỗi và kiểm soát chi phí? Chọn tất cả.",
    options: [
      { id: "a", text: "Tên bước và stop_reason", feedback: "Đúng." },
      { id: "b", text: "usage (token vào/ra)", feedback: "Đúng." },
      { id: "c", text: "Thời gian chạy", feedback: "Đúng." },
      { id: "d", text: "API key", feedback: "Không bao giờ ghi key vào log." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Biết bước nào sai, bước nào chậm, bước nào đắt.",
  },
  {
    questionId: "ch11-l04-q10", lessonId: L, conceptId: "parallel-sectioning", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép tình huống với mẫu workflow.",
    pairs: [
      { id: "p1", left: "Rà hợp đồng song song theo ba góc: kỹ thuật, tài chính, pháp lý", right: "Parallelization (chia phần)" },
      { id: "p2", left: "Dịch → kiểm thuật ngữ → định dạng", right: "Prompt chaining" },
      { id: "p3", left: "Thư hỏi giá sang nhánh kinh doanh, thư khiếu nại sang nhánh QA", right: "Routing" },
      { id: "p4", left: "Viết nháp → chấm theo checklist → sửa", right: "Evaluator-optimizer" },
    ],
    explanation: "Nhận diện mẫu giúp thiết kế cổng kiểm tra phù hợp.",
  },
  {
    questionId: "ch11-l04-q11", lessonId: L, conceptId: "failure-handling", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp cách xử lý khi một bước giữa workflow trả về stop_reason là max_tokens.",
    items: [
      { id: "a", text: "Ghi log bước, stop_reason, request-id" },
      { id: "b", text: "Không chuyển đầu ra dở sang bước sau" },
      { id: "c", text: "Thử lại bước đó với max_tokens lớn hơn hoặc chia nhỏ đầu vào" },
      { id: "d", text: "Vẫn lỗi thì đưa vào hàng chờ cho người xử lý" },
    ],
    explanation: "Ghi nhận → chặn → thử lại có kiểm soát → chuyển người.",
  },
  {
    questionId: "ch11-l04-q12", lessonId: L, conceptId: "gate-check", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Workflow xử lý biên bản sự cố như dưới đây. Chọn các điểm SAI.",
    segments: [
      { id: "s1", text: "Bước 1 trích JSON có schema (mã lô, hiện tượng, số lượng).", isError: false },
      { id: "s2", text: "Đầu ra bước 2 là văn bản tự do, bước 3 đọc bằng cách tìm chữ “Nguyên nhân:”.", isError: true, why: "Đầu ra không có khuôn — cổng kiểm tra dễ đọc sai; dùng structured outputs." },
      { id: "s3", text: "Evaluator chấm và cho sửa lặp không giới hạn đến khi đạt.", isError: true, why: "Cần giới hạn vòng, quá thì chuyển người." },
      { id: "s4", text: "Email gửi khách phải qua nhân viên duyệt.", isError: false },
    ],
    explanation: "Khuôn đầu ra và giới hạn vòng lặp là hai thiếu sót phổ biến.",
  },
  {
    questionId: "ch11-l04-q13", lessonId: L, conceptId: "cost-latency", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Workflow 5 bước cho kết quả đúng 92%, một lần gọi có ví dụ cho 91%; workflow tốn gấp 4 lần token và chậm gấp 3. Quyết định hợp lý?",
    options: [
      { id: "a", text: "Ưu tiên một lần gọi; chỉ giữ workflow nếu 1% chênh lệch có giá trị lớn hơn chi phí và độ trễ thêm", feedback: "Đúng." },
      { id: "b", text: "Luôn chọn workflow vì chính xác hơn", feedback: "Bỏ qua chi phí và độ trễ." },
      { id: "c", text: "Bỏ đo, chọn theo cảm giác", feedback: "Quyết định cần dựa trên số đo." },
    ],
    answer: "a",
    explanation: "Thêm độ phức tạp chỉ khi đo được là đáng.",
  },
  {
    questionId: "ch11-l04-q14", lessonId: L, conceptId: "workflow-vs-agent", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Quy trình duyệt đề xuất mua hàng gồm 4 bước cố định đã biết rõ. Đồng nghiệp muốn xây “agent tự quyết”. Bạn khuyên gì?",
    options: [
      { id: "a", text: "Dùng workflow (chaining có cổng): bước đã biết rõ thì code điều khiển dễ kiểm soát và rẻ hơn", feedback: "Đúng." },
      { id: "b", text: "Agent luôn tốt hơn workflow", feedback: "Agent hợp với việc không đoán trước được số bước." },
      { id: "c", text: "Không dùng Claude", feedback: "Workflow vẫn tận dụng được Claude." },
    ],
    answer: "a",
    explanation: "Tự chủ cao hơn đi kèm chi phí và rủi ro lỗi cộng dồn.",
  },
  {
    questionId: "ch11-l04-q15", lessonId: L, conceptId: "prompt-chaining", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Thiết kế workflow 3 bước xử lý phiếu yêu cầu bảo trì (văn bản tự do) thành lệnh công việc. Ghi rõ đầu ra mỗi bước và cổng kiểm tra.",
    source: "Phiếu mẫu: “Máy ép M-07 kêu lạ ở trục chính từ sáng, ca 1 báo, cần xem gấp.”",
    rubric: [
      { id: "steps", label: "Có 3 bước", weight: 1, check: { kind: "regex", pattern: "(buoc 1|1[.)])[\\s\\S]*(buoc 2|2[.)])[\\s\\S]*(buoc 3|3[.)])" }, pass: "Có 3 bước.", fail: "Liệt kê bước 1, 2, 3." },
      { id: "schema", label: "Đầu ra có khuôn", weight: 1, check: { kind: "anyKeyword", keywords: ["json", "schema", "trường"] }, pass: "Có khuôn.", fail: "Nêu đầu ra có khuôn (JSON/schema)." },
      { id: "gate", label: "Có cổng kiểm tra", weight: 1, check: { kind: "anyKeyword", keywords: ["cổng", "kiểm tra", "hàng chờ"] }, pass: "Có cổng.", fail: "Thêm cổng kiểm tra giữa các bước." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Bước 1: trích JSON (ma_may, bo_phan, hien_tuong, muc_khan: thuong/gap, nguoi_bao). Cổng: thiếu ma_may thì vào hàng chờ.\nBước 2: phân loại nhóm sự cố (cơ khí/điện/thuỷ lực) theo enum, kèm câu trích làm bằng chứng. Cổng: không có bằng chứng thì vào hàng chờ.\nBước 3: tạo lệnh công việc theo mẫu (việc, tổ phụ trách, hạn theo mức khẩn). Cổng: đủ trường, stop_reason end_turn; tổ trưởng bảo trì duyệt trước khi phát lệnh.",
    explanation: "Mỗi bước có đầu ra kiểm tra được.",
  },
];
