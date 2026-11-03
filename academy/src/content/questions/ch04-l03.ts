import type { Question } from "@/lib/types/content";

const L = "ch04-l03";

/** 15 questions for "Tạo ứng dụng tương tác" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03 (Claude Help Center). */
export const questionsCh04L03: Question[] = [
  {
    questionId: "ch04-l03-q01", lessonId: L, conceptId: "tool-inputs", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "ordering",
    prompt: "Sắp xếp bốn phần của một đặc tả công cụ theo thứ tự hợp lý.",
    items: [
      { id: "a", text: "Đầu vào: người dùng nhập gì" },
      { id: "b", text: "Quy tắc xử lý: tính toán, điều kiện" },
      { id: "c", text: "Đầu ra: hiện gì, ở đâu" },
      { id: "d", text: "Giao diện: nút, cỡ chữ, thiết bị" },
    ],
    explanation: "Đầu vào → quy tắc → đầu ra → giao diện.",
  },
  {
    questionId: "ch04-l03-q02", lessonId: L, conceptId: "test-cases", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Ca kiểm thử của một công cụ tính toán là gì?",
    options: [
      { id: "a", text: "Một bộ dữ liệu vào kèm kết quả mong đợi bạn đã tự tính trước", feedback: "Đúng." },
      { id: "b", text: "Ảnh chụp màn hình công cụ", feedback: "Không cho biết kết quả có đúng không." },
      { id: "c", text: "Lời khen của người dùng", feedback: "Không kiểm chứng được tính đúng." },
    ],
    answer: "a",
    explanation: "Ca kiểm thử là thước đo chung để biết công cụ tính đúng.",
  },
  {
    questionId: "ch04-l03-q03", lessonId: L, conceptId: "calls-claude", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "Để artifact gọi Claude bên trong (ví dụ tóm tắt ghi chú người dùng nhập), bạn phải dán API key vào artifact.",
    prompt: "Đúng hay sai?",
    answer: false,
    explanation: "Không cần API key; lượt dùng tính vào giới hạn của từng người dùng.",
  },
  {
    questionId: "ch04-l03-q04", lessonId: L, conceptId: "shared-storage", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Dữ liệu một artifact lưu ở chế độ dùng chung có thể được mọi người mở artifact đó nhìn thấy.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Help Center khuyên kiểm tra trước khi nhập thông tin nhạy cảm.",
  },
  {
    questionId: "ch04-l03-q05", lessonId: L, conceptId: "edge-cases", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Với máy tính giờ tăng ca, đâu là trường hợp biên nên kiểm thử? Chọn tất cả.",
    options: [
      { id: "a", text: "Ca đêm: vào 22h, ra 6h sáng hôm sau", feedback: "Đúng." },
      { id: "b", text: "Ô bỏ trống vào ngày nghỉ", feedback: "Đúng." },
      { id: "c", text: "Giờ ra nhập nhầm sớm hơn giờ vào trong cùng ngày", feedback: "Đúng." },
      { id: "d", text: "Một ngày làm đúng 8h–17h bình thường", feedback: "Đây là ca thường, không phải biên." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Trường hợp biên là chỗ công cụ hay tính sai nhất.",
  },
  {
    questionId: "ch04-l03-q06", lessonId: L, conceptId: "tool-rules", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Đánh dấu những chỗ còn mơ hồ trong quy tắc của đặc tả dưới đây.",
    segments: [
      { id: "s1", text: "Tính giờ làm từ giờ vào đến giờ ra;", isError: false },
      { id: "s2", text: "trừ thời gian nghỉ hợp lý;", isError: true, why: "“Hợp lý” là bao nhiêu? Ghi rõ, ví dụ trừ 1 giờ nghỉ trưa." },
      { id: "s3", text: "phần vượt 8 giờ/ngày là tăng ca;", isError: false },
      { id: "s4", text: "làm tròn cho đẹp.", isError: true, why: "Làm tròn thế nào? Ví dụ tới 0,5 giờ gần nhất." },
    ],
    explanation: "Quy tắc mơ hồ → Claude tự đoán → kết quả khác ý bạn.",
  },
  {
    questionId: "ch04-l03-q07", lessonId: L, conceptId: "tool-iterate", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Ca kiểm thử “vào 22h, ra 6h” mong đợi 8 giờ làm nhưng công cụ hiện −16. Cách báo lỗi tốt nhất?",
    options: [
      { id: "a", text: "Nêu ca sai, kết quả mong đợi và kết quả thực tế; nêu quy tắc qua nửa đêm; yêu cầu chạy lại mọi ca", feedback: "Đúng." },
      { id: "b", text: "“Tính sai rồi, sửa đi.”", feedback: "Không chỉ ra chỗ sai." },
      { id: "c", text: "Xoá công cụ và làm lại từ đầu", feedback: "Mất phần đã đúng." },
    ],
    answer: "a",
    explanation: "Chạy lại mọi ca để chắc bản sửa không làm hỏng ca khác.",
  },
  {
    questionId: "ch04-l03-q08", lessonId: L, conceptId: "connected-data", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Artifact của bạn lấy dữ liệu từ một ứng dụng kết nối. Đồng nghiệp mở thì phần đó báo lỗi. Giải thích hợp lý nhất?",
    options: [
      { id: "a", text: "Mỗi người dùng kết nối ứng dụng của chính mình; đồng nghiệp chưa kết nối hoặc không có quyền", feedback: "Đúng." },
      { id: "b", text: "Artifact bị hỏng hoàn toàn", feedback: "Chỉ phần dùng ứng dụng kết nối bị ảnh hưởng." },
      { id: "c", text: "Đồng nghiệp hết dung lượng ổ đĩa", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Help Center: artifact dùng kết nối của người xem; thiếu quyền thì phần đó báo lỗi.",
  },
  {
    questionId: "ch04-l03-q09", lessonId: L, conceptId: "storage-limit", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Bạn định để công cụ checklist lưu cả ảnh chụp hiện trường của mỗi ca làm việc. Theo giới hạn lưu trữ artifact, điều nào đúng?",
    options: [
      { id: "a", text: "Lưu trữ artifact tối đa 20 MB và chỉ dạng văn bản — nên lưu mô tả/đường dẫn, không lưu ảnh", feedback: "Đúng." },
      { id: "b", text: "Lưu được không giới hạn ảnh", feedback: "Có giới hạn và chỉ văn bản." },
      { id: "c", text: "Ảnh tự nén vào lưu trữ chung", feedback: "Không có cơ chế này." },
    ],
    answer: "a",
    explanation: "Thiết kế dữ liệu theo đúng giới hạn ngay từ đầu.",
  },
  {
    questionId: "ch04-l03-q10", lessonId: L, conceptId: "tool-outputs", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép dòng đặc tả với phần tương ứng.",
    pairs: [
      { id: "p1", left: "Tồn tối thiểu M, tồn hiện tại T", right: "Đầu vào" },
      { id: "p2", left: "Đặt = 2M − T, làm tròn lên bội số 10", right: "Quy tắc xử lý" },
      { id: "p3", left: "Hiện số lượng đặt bằng chữ lớn", right: "Đầu ra" },
      { id: "p4", left: "T trống hoặc âm → báo “Kiểm tra số tồn”", right: "Trường hợp biên" },
    ],
    explanation: "Đặc tả tách bạch giúp Claude và bạn cùng hiểu một ý.",
  },
  {
    questionId: "ch04-l03-q11", lessonId: L, conceptId: "test-cases", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Theo quy tắc dưới đây, công cụ đúng phải hiện số lượng đặt bao nhiêu?",
    context: { label: "Quy tắc và dữ liệu", content: "Đặt = 2M − T; ≤ 0 thì 0; làm tròn lên bội số 10.\nM = 40, T = 23", lang: "text" },
    options: [
      { id: "a", text: "60", feedback: "Đúng: 2×40 − 23 = 57, làm tròn lên 60." },
      { id: "b", text: "57", feedback: "Chưa làm tròn lên bội số 10." },
      { id: "c", text: "50", feedback: "Làm tròn lên, không phải xuống." },
    ],
    answer: "a",
    explanation: "Tự tính trước để có đáp án so với công cụ.",
  },
  {
    questionId: "ch04-l03-q12", lessonId: L, conceptId: "sensitive-input", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn làm công cụ ghi nhận sự cố ca làm việc, lưu chung cho cả tổ xem. Một tổ trưởng đề nghị thêm ô “Số CCCD và lương người liên quan”. Quyết định đúng?",
    options: [
      { id: "a", text: "Không thêm — lưu trữ chung ai mở cũng thấy; chỉ ghi mã nhân viên nếu thật cần", feedback: "Đúng." },
      { id: "b", text: "Thêm vì tiện tra cứu", feedback: "Lộ dữ liệu nhạy cảm cho cả tổ." },
      { id: "c", text: "Thêm nhưng ghi chú “đừng xem”", feedback: "Lời dặn không bảo vệ dữ liệu." },
    ],
    answer: "a",
    explanation: "Chỉ lưu dữ liệu cần thiết và không nhạy cảm vào phần dùng chung.",
  },
  {
    questionId: "ch04-l03-q13", lessonId: L, conceptId: "calls-claude", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Một bạn lên kế hoạch cho công cụ “tóm tắt biên bản” có gọi Claude bên trong. Chọn các ý SAI.",
    segments: [
      { id: "s1", text: "Mỗi người dùng công cụ sẽ tốn lượt dùng Claude của chính họ.", isError: false },
      { id: "s2", text: "Dán API key của mình vào công cụ để cả phòng dùng chung.", isError: true, why: "Không cần API key; không chia sẻ khoá." },
      { id: "s3", text: "Lưu mọi biên bản gốc vào lưu trữ chung, kể cả biên bản kỷ luật cá nhân.", isError: true, why: "Lưu trữ chung ai mở cũng thấy." },
      { id: "s4", text: "Thử với 3 biên bản mẫu và đối chiếu bản tóm tắt.", isError: false },
    ],
    explanation: "Hiểu cách tính lượt và phạm vi dữ liệu trước khi phát hành công cụ.",
  },
  {
    questionId: "ch04-l03-q14", lessonId: L, conceptId: "tool-ui", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây thành đặc tả công cụ đủ bốn phần.",
    source: "làm cái app tính lương tăng ca",
    rubric: [
      { id: "input", label: "Đầu vào", weight: 1, check: { kind: "anyKeyword", keywords: ["đầu vào", "nhập"] }, pass: "Có đầu vào.", fail: "Nêu đầu vào: giờ vào/ra, đơn giá…" },
      { id: "rule", label: "Quy tắc", weight: 1, check: { kind: "anyKeyword", keywords: ["quy tắc", "vượt 8", "hệ số", "nhân"] }, pass: "Có quy tắc.", fail: "Nêu cách tính: vượt 8 giờ, hệ số…" },
      { id: "output", label: "Đầu ra", weight: 1, check: { kind: "anyKeyword", keywords: ["đầu ra", "hiện", "tổng"] }, pass: "Có đầu ra.", fail: "Nêu đầu ra: tổng giờ, tổng tiền." },
      { id: "test", label: "Có ca kiểm thử", weight: 1, check: { kind: "regex", pattern: "(→|->|=>)\\s*\\d" }, pass: "Có ca kiểm thử.", fail: "Thêm ít nhất một ca “… → kết quả”." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Tạo artifact công cụ tính tiền tăng ca. Đầu vào: giờ vào, giờ ra từng ngày (thứ Hai–Chủ nhật), đơn giá giờ. Quy tắc: trừ 1 giờ nghỉ trưa; phần vượt 8 giờ/ngày là tăng ca, nhân hệ số 1,5; Chủ nhật hệ số 2. Đầu ra: hiện bảng từng ngày và tổng tiền tăng ca. Giao diện chữ lớn, dùng trên điện thoại. Ca kiểm thử: thứ Hai 8h–19h, đơn giá 30.000 → 2 giờ tăng ca → 90.000 đồng.",
    explanation: "Đủ bốn phần + ca kiểm thử thì mới kiểm tra được.",
  },
  {
    questionId: "ch04-l03-q15", lessonId: L, conceptId: "edge-cases", learningObjective: "o2", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết đặc tả ngắn và 3 ca kiểm thử (có ít nhất một trường hợp biên) cho công cụ dưới đây.",
    source: "Công cụ tính số thùng cần để đóng gói: nhập số sản phẩm và số sản phẩm mỗi thùng; kết quả là số thùng (thùng cuối chưa đầy vẫn tính một thùng).",
    rubric: [
      { id: "rule", label: "Quy tắc làm tròn lên", weight: 1, check: { kind: "anyKeyword", keywords: ["làm tròn lên", "chưa đầy", "dư"] }, pass: "Có quy tắc.", fail: "Nêu: thùng chưa đầy vẫn tính một thùng (làm tròn lên)." },
      { id: "cases", label: "Có 3 ca có kết quả", weight: 1, check: { kind: "minMatches", pattern: "(→|->|=>)\\s*\\S+", value: 3 }, pass: "Đủ ca.", fail: "Viết 3 ca dạng “… → kết quả”." },
      { id: "edge", label: "Có trường hợp biên", weight: 1, check: { kind: "regex", pattern: "(\\b0\\b|trong|so am|chia het|bao loi)" }, pass: "Có trường hợp biên.", fail: "Thêm ca 0 sản phẩm, chia hết, hoặc nhập trống." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Đặc tả: Đầu vào số sản phẩm N và số sản phẩm mỗi thùng K (số nguyên dương). Quy tắc: số thùng = N chia K, thùng chưa đầy vẫn tính một thùng (làm tròn lên). Đầu ra: số thùng, chữ lớn.\nCa 1: N=100, K=24 → 5\nCa 2: N=96, K=24 (chia hết) → 4\nCa 3: K trống hoặc bằng 0 → báo lỗi “Nhập số sản phẩm mỗi thùng”",
    explanation: "Ca chia hết và ca nhập sai là hai trường hợp biên điển hình.",
  },
];
