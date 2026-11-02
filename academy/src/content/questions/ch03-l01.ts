import type { Question } from "@/lib/types/content";

const L = "ch03-l01";

/**
 * 15 questions for "Prompt là gì?". Each one tests a distinct
 * (concept, learning objective, thinking skill) combination — see
 * QUESTION_BANK_RULES.md. 5 beginner, 6 intermediate, 4 advanced.
 */
export const questionsCh03L01: Question[] = [
  {
    questionId: "ch03-l01-q01",
    lessonId: L,
    conceptId: "prompt-definition",
    learningObjective: "o1",
    thinkingSkill: "remember",
    difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Khi làm việc với Claude, “prompt” là gì?",
    options: [
      { id: "a", text: "Nội dung bạn gửi cho Claude: câu hỏi, yêu cầu, tài liệu, ví dụ", feedback: "Đúng: mọi thứ bạn gửi đều là prompt." },
      { id: "b", text: "Mật khẩu để đăng nhập vào tài khoản Claude", feedback: "Không phải — đăng nhập dùng email/tài khoản, không liên quan tới prompt." },
      { id: "c", text: "Câu trả lời mà Claude tạo ra", feedback: "Đó là đầu ra (output/response), còn prompt là đầu vào bạn gửi." },
      { id: "d", text: "Một gói trả phí giúp Claude chạy nhanh hơn", feedback: "Không phải — prompt là nội dung, không phải gói dịch vụ." },
    ],
    answer: "a",
    explanation:
      "Prompt là toàn bộ đầu vào bạn đưa cho Claude. Claude chỉ biết những gì có trong cuộc hội thoại, nên chất lượng prompt quyết định phần lớn chất lượng kết quả.",
  },
  {
    questionId: "ch03-l01-q02",
    lessonId: L,
    conceptId: "specificity",
    learningObjective: "o3",
    thinkingSkill: "understand",
    difficulty: "beginner",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Prompt càng ngắn thì Claude càng hiểu đúng ý bạn, vì có ít chữ nên ít chỗ để hiểu nhầm.",
    answer: false,
    explanation:
      "Sai. Prompt quá ngắn thường thiếu bối cảnh, ràng buộc và định dạng, buộc Claude phải đoán. Độ dài không phải mục tiêu — mục tiêu là đủ thông tin để không phải đoán.",
  },
  {
    questionId: "ch03-l01-q03",
    lessonId: L,
    conceptId: "components",
    learningObjective: "o2",
    thinkingSkill: "remember",
    difficulty: "beginner",
    questionType: "matching",
    prompt: "Ghép mỗi thành phần của prompt với ý nghĩa của nó.",
    pairs: [
      { id: "role", left: "Role", right: "Claude đóng vai ai, nhìn vấn đề từ chuyên môn nào" },
      { id: "context", left: "Context", right: "Tình huống, dữ liệu nền, người đọc, lý do" },
      { id: "task", left: "Task", right: "Việc cụ thể cần làm" },
      { id: "constraints", left: "Constraints", right: "Giới hạn và yêu cầu bắt buộc: độ dài, phạm vi, ngôn ngữ" },
      { id: "output", left: "Output", right: "Hình thức kết quả: bảng, email, checklist…" },
    ],
    explanation:
      "Năm thành phần trả lời năm câu hỏi mà một người làm thay bạn sẽ hỏi: làm với tư cách gì, trong hoàn cảnh nào, làm gì, giới hạn ra sao, nộp kết quả dạng gì.",
  },
  {
    questionId: "ch03-l01-q04",
    lessonId: L,
    conceptId: "context",
    learningObjective: "o2",
    thinkingSkill: "understand",
    difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Bạn cần Claude viết báo cáo 8D về sự cố rò dầu. Những câu nào dưới đây thuộc phần CONTEXT (bối cảnh)? Chọn tất cả câu đúng.",
    options: [
      { id: "a", text: "Lỗi rò dầu ở mặt bích van xả của 3 máy biến áp 250 kVA, lô tháng 7/2024.", feedback: "Đúng — mô tả sự cố là bối cảnh." },
      { id: "b", text: "Khách hàng đã phản ánh lỗi này 2 lần trong tháng.", feedback: "Đúng — lịch sử phản ánh là bối cảnh giúp xác định mức độ nghiêm trọng." },
      { id: "c", text: "Bạn là kỹ sư QA có 10 năm kinh nghiệm.", feedback: "Đây là Role (vai trò), không phải Context." },
      { id: "d", text: "Trình bày dạng bảng theo 8 bước D1–D8.", feedback: "Đây là Output (định dạng kết quả)." },
      { id: "e", text: "Báo cáo sẽ được gửi cho phòng chất lượng của khách hàng.", feedback: "Đúng — người đọc là một phần của bối cảnh." },
    ],
    answer: ["a", "b", "e"],
    explanation:
      "Context gồm những điều Claude không thể tự biết: chuyện gì đã xảy ra, ở đâu, bao nhiêu, ai sẽ đọc kết quả. Role và Output là các thành phần khác.",
  },
  {
    questionId: "ch03-l01-q05",
    lessonId: L,
    conceptId: "task",
    learningObjective: "o2",
    thinkingSkill: "remember",
    difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền tên thành phần còn thiếu (tiếng Anh hoặc tiếng Việt đều được).",
    template:
      "Phần [[b1]] nêu rõ việc Claude cần làm và nên bắt đầu bằng một động từ cụ thể như “tóm tắt”, “so sánh”, “đề xuất”.",
    blanks: [{ id: "b1", accepted: ["Task", "nhiệm vụ", "nhiem vu", "nhiệm vụ (Task)", "Task (nhiệm vụ)"], width: 10 }],
    explanation:
      "Task là nhiệm vụ. Động từ cụ thể giúp Claude biết phải tạo ra thứ gì: “tóm tắt” khác hẳn “phân tích nguyên nhân”, dù cùng một tài liệu.",
  },
  {
    questionId: "ch03-l01-q06",
    lessonId: L,
    conceptId: "iteration",
    learningObjective: "o5",
    thinkingSkill: "apply",
    difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp các bước cải tiến prompt theo đúng thứ tự.",
    items: [
      { id: "s1", text: "Xác định kết quả mong muốn và tiêu chí “đạt”" },
      { id: "s2", text: "Viết prompt đủ Role, Context, Task, Constraints, Output" },
      { id: "s3", text: "Gửi cho Claude và đọc kỹ kết quả" },
      { id: "s4", text: "So sánh kết quả với tiêu chí đã đặt" },
      { id: "s5", text: "Bổ sung hoặc sửa đúng phần còn thiếu, rồi gửi lại" },
    ],
    explanation:
      "Đặt tiêu chí trước để có thước đo khách quan. Nếu không có tiêu chí, bạn chỉ biết “chưa ưng” mà không biết phải sửa phần nào của prompt.",
  },
  {
    questionId: "ch03-l01-q07",
    lessonId: L,
    conceptId: "specificity",
    learningObjective: "o3",
    thinkingSkill: "analyze",
    difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Bấm chọn TẤT CẢ các đoạn mơ hồ trong prompt dưới đây (những chỗ khiến Claude phải đoán).",
    segments: [
      { id: "s1", text: "Bạn là chuyên viên nhân sự của công ty sản xuất có 300 công nhân.", isError: false },
      { id: "s2", text: "Viết thông báo lịch nghỉ Quốc khánh 2/9 gửi toàn thể công nhân.", isError: false },
      { id: "s3", text: "Viết sao cho hay.", isError: true, why: "“Hay” là cảm tính, không đo được. Nên nói rõ: giọng thân thiện, dễ hiểu với công nhân." },
      { id: "s4", text: "Đừng dài quá.", isError: true, why: "Mơ hồ và chỉ nói điều cấm. Nên ghi: “tối đa 150 từ”." },
      { id: "s5", text: "Gồm: thời gian nghỉ, ngày làm bù, người liên hệ; trình bày bằng gạch đầu dòng.", isError: false },
    ],
    explanation:
      "Hai đoạn “viết sao cho hay” và “đừng dài quá” không cho Claude tiêu chí cụ thể. Thay bằng mô tả đo được: giọng văn cụ thể, giới hạn số từ.",
  },
  {
    questionId: "ch03-l01-q08",
    lessonId: L,
    conceptId: "components",
    learningObjective: "o4",
    thinkingSkill: "create",
    difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại prompt dưới đây thành prompt đủ 5 thành phần. Bạn có thể tự đặt bối cảnh hợp lý.",
    source: "Phân tích doanh số cho tôi.",
    rubric: [
      {
        id: "role",
        label: "Có Role",
        weight: 1,
        check: { kind: "anyKeyword", keywords: ["bạn là", "đóng vai", "vai trò", "you are"] },
        pass: "Có vai trò.",
        fail: "Thêm vai trò, ví dụ “Bạn là chuyên viên phân tích kinh doanh”.",
      },
      {
        id: "context",
        label: "Có Context (dữ liệu, thời gian, người đọc)",
        weight: 1,
        check: {
          kind: "anyKeyword",
          keywords: ["tháng", "quý", "năm", "dữ liệu", "bảng", "file", "chi nhánh", "khu vực", "cửa hàng", "người đọc", "ban giám đốc"],
        },
        pass: "Có bối cảnh.",
        fail: "Nói rõ dữ liệu của giai đoạn nào, đơn vị nào, ai sẽ đọc.",
      },
      {
        id: "task",
        label: "Task cụ thể",
        weight: 1,
        check: { kind: "anyKeyword", keywords: ["so sánh", "xác định", "chỉ ra", "tính", "tổng hợp", "đề xuất", "tìm", "liệt kê"] },
        pass: "Nhiệm vụ cụ thể.",
        fail: "“Phân tích” quá rộng — nói rõ: so sánh gì với gì, tìm ra điều gì.",
      },
      {
        id: "constraints",
        label: "Có ràng buộc đo được",
        weight: 1,
        check: {
          kind: "regex",
          pattern: "(toi da|khong qua|it nhat|chi dung|chi tap trung|gioi han|\\d+\\s*(tu|dong|y|cau|gach|san pham|muc|trang))",
        },
        pass: "Có ràng buộc.",
        fail: "Thêm ràng buộc: số ý, độ dài, phạm vi dữ liệu được dùng.",
      },
      {
        id: "output",
        label: "Có Output",
        weight: 1,
        check: { kind: "anyKeyword", keywords: ["bảng", "cột", "gạch đầu dòng", "biểu đồ", "trình bày", "danh sách", "đoạn"] },
        pass: "Có định dạng kết quả.",
        fail: "Mô tả định dạng: bảng, biểu đồ, số gạch đầu dòng…",
      },
    ],
    passScore: 0.8,
    referenceAnswer:
      "Bạn là chuyên viên phân tích kinh doanh. Dưới đây là doanh số quý 3/2026 của 4 chi nhánh (bảng đính kèm), dùng cho cuộc họp ban giám đốc. Hãy so sánh doanh số từng chi nhánh với quý 2 và chỉ ra 2 chi nhánh giảm mạnh nhất. Chỉ dùng số liệu trong bảng, tối đa 120 từ. Trình bày: bảng 3 cột (Chi nhánh | Q2 | Q3 | % thay đổi) và 3 gạch đầu dòng nhận xét.",
    explanation:
      "“Phân tích doanh số” thiếu gần như mọi thứ: dữ liệu nào, so với cái gì, cho ai, dài bao nhiêu, trình bày thế nào. Bài chấm tự động theo rubric quy tắc — hãy đọc từng tiêu chí để biết phần nào còn thiếu.",
  },
  {
    questionId: "ch03-l01-q09",
    lessonId: L,
    conceptId: "context",
    learningObjective: "o3",
    thinkingSkill: "evaluate",
    difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn cách cải thiện hiệu quả nhất cho tình huống sau.",
    context: {
      label: "Tình huống",
      content:
        "Chị Lan gửi Claude: “Viết email xin lỗi khách hàng.” Kết quả rất chung chung, không nhắc tên khách, không nói lỗi gì, cũng không có cam kết xử lý. Chị định làm lại.",
    },
    options: [
      { id: "a", text: "Gửi lại đúng câu đó vài lần cho tới khi ra kết quả ưng ý", feedback: "Thiếu thông tin vẫn thiếu — Claude vẫn phải đoán, kết quả chỉ ngẫu nhiên khác đi." },
      {
        id: "b",
        text: "Bổ sung bối cảnh: tên khách, sản phẩm, lỗi xảy ra, đã xử lý gì, cam kết gì, giọng văn mong muốn",
        feedback: "Đúng — đây chính là phần Context còn thiếu.",
      },
      { id: "c", text: "Viết hoa toàn bộ: “HÃY VIẾT THẬT TỐT”", feedback: "Nhấn mạnh không thay được thông tin. Claude vẫn không biết khách là ai, lỗi gì." },
      { id: "d", text: "Đổi sang một model Claude khác mạnh hơn", feedback: "Model mạnh hơn cũng không thể biết chi tiết sự việc nếu bạn không cung cấp." },
    ],
    answer: "b",
    explanation:
      "Vấn đề nằm ở đầu vào, không phải ở model. Email xin lỗi tốt cần chi tiết cụ thể mà chỉ chị Lan biết — hãy đưa chúng vào prompt.",
  },
  {
    questionId: "ch03-l01-q10",
    lessonId: L,
    conceptId: "output-format",
    learningObjective: "o3",
    thinkingSkill: "analyze",
    difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Với prompt dưới đây, kết quả nào ĐÚNG YÊU CẦU nhất mà bạn nên mong đợi?",
    context: {
      label: "Prompt",
      lang: "text",
      content:
        "Liệt kê 3 nguyên nhân phổ biến gây rò dầu ở máy biến áp ngâm dầu.\nTrình bày dạng bảng 2 cột: Nguyên nhân | Cách kiểm tra.\nKhông cần đoạn mở đầu hay kết luận.",
    },
    options: [
      { id: "a", text: "Một bảng 2 cột, đúng 3 dòng nguyên nhân, không có đoạn mở đầu", feedback: "Đúng — khớp cả số lượng, cấu trúc và ràng buộc." },
      { id: "b", text: "Một bài viết dài 5 đoạn về lịch sử máy biến áp", feedback: "Sai cả nhiệm vụ lẫn định dạng." },
      { id: "c", text: "Danh sách 10 nguyên nhân dạng gạch đầu dòng", feedback: "Sai số lượng (3) và sai định dạng (bảng)." },
      { id: "d", text: "Một bảng 4 cột kèm đoạn giới thiệu và kết luận", feedback: "Thừa cột và thừa phần mở đầu/kết luận mà prompt đã loại bỏ." },
    ],
    answer: "a",
    explanation:
      "Prompt nêu rõ số lượng (3), cấu trúc (bảng 2 cột, tên cột) và loại bỏ phần thừa. Khi Output được mô tả cụ thể, bạn có thể kiểm tra kết quả ngay bằng mắt.",
  },
  {
    questionId: "ch03-l01-q11",
    lessonId: L,
    conceptId: "role",
    learningObjective: "o2",
    thinkingSkill: "understand",
    difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Vì sao thêm câu “Bạn là kỹ sư QA có 10 năm kinh nghiệm về máy biến áp” thường giúp kết quả tốt hơn?",
    options: [
      { id: "a", text: "Vai trò định hướng góc nhìn, thuật ngữ và độ sâu chuyên môn của câu trả lời", feedback: "Đúng." },
      { id: "b", text: "Vai trò cho phép Claude truy cập dữ liệu nội bộ của công ty bạn", feedback: "Sai — vai trò không cấp quyền truy cập dữ liệu nào. Dữ liệu phải do bạn cung cấp." },
      { id: "c", text: "Vai trò đảm bảo câu trả lời luôn đúng 100%", feedback: "Sai — vẫn cần kiểm tra lại, đặc biệt với số liệu kỹ thuật." },
      { id: "d", text: "Thiếu vai trò thì Claude sẽ từ chối trả lời", feedback: "Sai — vai trò là tuỳ chọn, giúp tập trung chứ không bắt buộc." },
    ],
    answer: "a",
    explanation:
      "Theo hướng dẫn của Anthropic, đặt vai trò giúp Claude tập trung hành vi và giọng văn cho đúng trường hợp sử dụng — chỉ một câu cũng tạo khác biệt. Nhưng vai trò không thay thế dữ liệu và không đảm bảo đúng tuyệt đối.",
  },
  {
    questionId: "ch03-l01-q12",
    lessonId: L,
    conceptId: "positive-instructions",
    learningObjective: "o4",
    thinkingSkill: "understand",
    difficulty: "intermediate",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement:
      "Theo hướng dẫn của Anthropic, nói cho Claude điều NÊN làm (ví dụ “viết thành các đoạn văn liền mạch”) thường hiệu quả hơn chỉ nói điều KHÔNG được làm (ví dụ “đừng dùng markdown”).",
    answer: true,
    explanation:
      "Đúng. Hướng dẫn định dạng của Anthropic khuyên “nói điều cần làm thay vì điều không được làm”. Câu khẳng định cho Claude một đích đến rõ ràng; câu cấm chỉ loại bỏ một khả năng.",
  },
  {
    questionId: "ch03-l01-q13",
    lessonId: L,
    conceptId: "constraints",
    learningObjective: "o3",
    thinkingSkill: "analyze",
    difficulty: "advanced",
    questionType: "single-choice",
    prompt: "Prompt sau có vấn đề lớn nhất ở đâu?",
    options: [
      {
        id: "a",
        text: "Các ràng buộc mâu thuẫn: 50 từ khó chứa đủ 5 tính năng kèm ví dụ cho từng tính năng",
        feedback: "Đúng — Claude buộc phải hy sinh một yêu cầu, và bạn không biết nó sẽ bỏ yêu cầu nào.",
      },
      { id: "b", text: "Thiếu Role nên Claude không thể trả lời", feedback: "Thiếu Role chỉ làm giảm độ tập trung, không làm Claude không trả lời được." },
      { id: "c", text: "Prompt quá dài so với nhiệm vụ", feedback: "Prompt này ngắn; vấn đề không nằm ở độ dài." },
      { id: "d", text: "Không có vấn đề gì, prompt đã rất rõ", feedback: "Hãy thử tính: 5 tính năng × (tên + ví dụ) trong 50 từ…" },
    ],
    answer: "a",
    explanation:
      "Ràng buộc phải khả thi và nhất quán với nhau. Khi chúng xung đột, hãy ưu tiên rõ ràng (ví dụ “tối đa 150 từ” hoặc “chỉ nêu 3 tính năng chính”).",
    hint: "Thử đếm số từ tối thiểu cần để nêu 5 tính năng, mỗi tính năng một ví dụ.",
  },
  {
    questionId: "ch03-l01-q14",
    lessonId: L,
    conceptId: "colleague-test",
    learningObjective: "o5",
    thinkingSkill: "evaluate",
    difficulty: "advanced",
    questionType: "multiple-choice",
    prompt:
      "Bạn đưa prompt cho một đồng nghiệp chưa biết gì về việc này đọc (phép thử đồng nghiệp). Những dấu hiệu nào cho thấy prompt CẦN SỬA? Chọn tất cả.",
    options: [
      { id: "a", text: "Đồng nghiệp hỏi lại: “Báo cáo này ai đọc?”", feedback: "Đúng — thiếu Context về người đọc." },
      { id: "b", text: "Đồng nghiệp không biết nên viết dài bao nhiêu", feedback: "Đúng — thiếu Constraints về độ dài." },
      { id: "c", text: "Đồng nghiệp phải đoán từ viết tắt nội bộ “PO-TBA” nghĩa là gì", feedback: "Đúng — thuật ngữ nội bộ cần được giải thích." },
      { id: "d", text: "Đồng nghiệp làm được ngay và kết quả khớp với tiêu chí bạn đặt", feedback: "Đây là dấu hiệu prompt ĐÃ đủ rõ." },
    ],
    answer: ["a", "b", "c"],
    explanation:
      "Anthropic gợi ý phép thử: đưa prompt cho một đồng nghiệp ít bối cảnh; nếu họ bối rối thì Claude cũng sẽ bối rối. Mỗi câu hỏi lại của đồng nghiệp chỉ ra một thông tin còn thiếu.",
  },
  {
    questionId: "ch03-l01-q15",
    lessonId: L,
    conceptId: "iteration",
    learningObjective: "o5",
    thinkingSkill: "create",
    difficulty: "advanced",
    questionType: "real-task",
    prompt: "Nhiệm vụ thực tế: viết prompt phiên bản 2 dựa trên kết quả chưa đạt của phiên bản 1.",
    source:
      "Prompt v1: “Bạn là kỹ sư QA. Tóm tắt các lỗi trong bảng kiểm tra xuất xưởng dưới đây.”\nKết quả v1 có 3 vấn đề: (1) dài gần 600 từ, (2) trộn lẫn tiếng Anh, (3) không tách lỗi theo mức độ nghiêm trọng nên trưởng xưởng khó ưu tiên.\nHãy viết prompt v2 giữ phần tốt của v1 và sửa cả 3 vấn đề.",
    sampleData: {
      name: "kiem_tra_xuat_xuong.csv",
      content:
        "Ma_may,Hang_muc,Ket_qua,Muc_do\nT250-118,Do dien tro cach dien,Dat,-\nT250-119,Kiem tra ro ri dau,Khong dat,Nghiem trong\nT630-045,Kiem tra ngoai quan,Tray son nhe,Nhe\nT630-046,Thu ton hao khong tai,Vuot 3%,Trung binh",
    },
    rubric: [
      {
        id: "keep-role",
        label: "Giữ vai trò",
        weight: 1,
        check: { kind: "anyKeyword", keywords: ["bạn là", "vai trò", "kỹ sư qa", "đóng vai"] },
        pass: "Vẫn giữ vai trò từ v1.",
        fail: "Đừng bỏ phần tốt của v1: giữ lại vai trò.",
      },
      {
        id: "length",
        label: "Sửa vấn đề độ dài bằng giới hạn cụ thể",
        weight: 1,
        check: { kind: "regex", pattern: "(toi da|khong qua|duoi|gioi han)\\s*\\d+|\\d+\\s*(tu|dong|cau|gach)" },
        pass: "Có giới hạn độ dài đo được.",
        fail: "Thêm giới hạn cụ thể, ví dụ “tối đa 150 từ”.",
      },
      {
        id: "language",
        label: "Sửa vấn đề ngôn ngữ",
        weight: 1,
        check: { kind: "anyKeyword", keywords: ["tiếng việt", "bằng tiếng việt", "chỉ dùng tiếng việt"] },
        pass: "Đã yêu cầu viết bằng tiếng Việt.",
        fail: "Nêu rõ ngôn ngữ: “viết hoàn toàn bằng tiếng Việt (giữ thuật ngữ kỹ thuật nếu cần)”.",
      },
      {
        id: "severity",
        label: "Sửa vấn đề phân loại theo mức độ",
        weight: 1,
        check: { kind: "allGroups", groups: [["mức độ", "nghiêm trọng", "ưu tiên"], ["nhóm", "phân loại", "sắp xếp", "tách", "theo"]] },
        pass: "Đã yêu cầu phân loại theo mức độ nghiêm trọng.",
        fail: "Yêu cầu nhóm/sắp xếp lỗi theo mức độ nghiêm trọng.",
      },
      {
        id: "format",
        label: "Mô tả định dạng đầu ra",
        weight: 1,
        check: { kind: "anyKeyword", keywords: ["bảng", "cột", "gạch đầu dòng", "danh sách", "trình bày", "tiêu đề"] },
        pass: "Đã mô tả định dạng.",
        fail: "Mô tả định dạng giúp trưởng xưởng đọc nhanh: bảng, nhóm có tiêu đề…",
      },
    ],
    passScore: 0.8,
    referenceAnswer:
      "Bạn là kỹ sư QA của nhà máy máy biến áp. Bảng kiểm tra xuất xưởng bên dưới dùng cho trưởng xưởng để quyết định ưu tiên sửa chữa trong ca sáng.\n<du_lieu>…</du_lieu>\nHãy tóm tắt các hạng mục KHÔNG ĐẠT, nhóm theo mức độ nghiêm trọng (Nghiêm trọng → Trung bình → Nhẹ).\nViết hoàn toàn bằng tiếng Việt, tối đa 150 từ, chỉ dùng dữ liệu trong bảng.\nTrình bày: mỗi mức độ là một tiêu đề, bên dưới là gạch đầu dòng “Mã máy – Hạng mục – Kết quả”.",
    explanation:
      "Cải tiến prompt hiệu quả là sửa đúng nguyên nhân của từng vấn đề: dài → giới hạn số từ; lẫn tiếng Anh → chỉ định ngôn ngữ; khó ưu tiên → yêu cầu nhóm theo mức độ. Rubric chấm theo quy tắc nên hãy dùng từ ngữ rõ ràng.",
  },
];
