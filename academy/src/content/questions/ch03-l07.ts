import type { Question } from "@/lib/types/content";

const L = "ch03-l07";

/** 15 questions for "Cách giảm hiểu nhầm" — 5 beginner, 6 intermediate, 4 advanced. */
export const questionsCh03L07: Question[] = [
  {
    questionId: "ch03-l07-q01", lessonId: L, conceptId: "ambiguous-words", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Những cụm từ nào MƠ HỒ, nên thay bằng thông tin cụ thể? Chọn tất cả.",
    options: [
      { id: "a", text: "“Gửi sớm nhé”", feedback: "Đúng — sớm là mấy giờ?" },
      { id: "b", text: "“Viết ngắn thôi”", feedback: "Đúng — ngắn là bao nhiêu từ?" },
      { id: "c", text: "“Trước 15h ngày 05/11”", feedback: "Đã cụ thể." },
      { id: "d", text: "“Một vài ví dụ”", feedback: "Đúng — vài là mấy?" },
    ],
    answer: ["a", "b", "d"],
    explanation: "Từ chỉ thời gian, số lượng, mức độ chung chung buộc Claude phải đoán.",
  },
  {
    questionId: "ch03-l07-q02", lessonId: L, conceptId: "jargon", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Vì sao viết tắt nội bộ như “PO-TBA” dễ gây hiểu nhầm?",
    options: [
      { id: "a", text: "Claude không biết quy ước nội bộ của công ty bạn; viết tắt có thể mang nghĩa khác bên ngoài", feedback: "Đúng." },
      { id: "b", text: "Vì Claude không đọc được chữ in hoa", feedback: "Không đúng." },
      { id: "c", text: "Viết tắt luôn bị cấm trong prompt", feedback: "Không bị cấm — chỉ cần định nghĩa." },
    ],
    answer: "a",
    explanation: "Như một nhân viên mới, Claude không biết thuật ngữ riêng của bạn. Định nghĩa một lần là đủ.",
  },
  {
    questionId: "ch03-l07-q03", lessonId: L, conceptId: "audience", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Prompt ghi “làm báo cáo cho sếp”. Điều gì còn thiếu quan trọng nhất?",
    options: [
      { id: "a", text: "Sếp là ai (chức danh) và cần báo cáo để làm gì", feedback: "Đúng — người đọc và mục đích quyết định nội dung." },
      { id: "b", text: "Màu chữ của báo cáo", feedback: "Không phải điều quan trọng nhất." },
      { id: "c", text: "Tên của Claude", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Giám đốc cần quyết định ngân sách sẽ cần báo cáo khác hẳn quản đốc cần xếp lịch ca.",
  },
  {
    questionId: "ch03-l07-q04", lessonId: L, conceptId: "clarifying-questions", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Câu nào cho phép Claude hỏi lại khi thiếu thông tin?",
    options: [
      { id: "a", text: "“Nếu thiếu thông tin quan trọng, hãy hỏi tôi tối đa 3 câu trước khi viết.”", feedback: "Đúng." },
      { id: "b", text: "“Viết ngay, không hỏi gì cả.”", feedback: "Ngược lại — buộc Claude phải đoán." },
      { id: "c", text: "“Viết thật hay.”", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Với việc lớn, vài câu hỏi làm rõ tiết kiệm nhiều lần sửa sau đó.",
  },
  {
    questionId: "ch03-l07-q05", lessonId: L, conceptId: "conflicts", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền từ còn thiếu.",
    template: "“Ngắn gọn nhưng đầy đủ mọi chi tiết” là ví dụ về hai chỉ dẫn [[b1]] nhau.",
    blanks: [{ id: "b1", accepted: ["mâu thuẫn", "xung đột", "trái ngược"], width: 10 }],
    explanation: "Khi hai yêu cầu không thể cùng đáp ứng, hãy nêu ưu tiên và giới hạn cụ thể.",
  },
  {
    questionId: "ch03-l07-q06", lessonId: L, conceptId: "negative-instructions", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Cách viết lại nào tốt nhất cho câu “Đừng dùng thuật ngữ kỹ thuật”?",
    options: [
      { id: "a", text: "“Viết bằng ngôn ngữ phổ thông, giải thích như cho người không chuyên, vì người đọc là khách hàng hộ gia đình.”", feedback: "Đúng — khẳng định + lý do." },
      { id: "b", text: "“TUYỆT ĐỐI KHÔNG dùng thuật ngữ!!!”", feedback: "Vẫn chỉ nói điều cấm, không cho đích đến." },
      { id: "c", text: "Bỏ câu đó đi", feedback: "Mất thông tin quan trọng về người đọc." },
    ],
    answer: "a",
    explanation: "Câu khẳng định cho Claude đích đến rõ ràng; lý do giúp áp dụng đúng tinh thần.",
  },
  {
    questionId: "ch03-l07-q07", lessonId: L, conceptId: "restate", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn cách làm phù hợp.",
    context: {
      label: "Tình huống",
      content: "Bạn nhờ Claude soạn quy trình vận hành mới dài 15 trang. Nếu Claude hiểu sai phạm vi ngay từ đầu, bạn sẽ mất nhiều công sửa.",
    },
    options: [
      { id: "a", text: "Yêu cầu Claude nêu giả định, phạm vi và dàn ý trước; bạn duyệt rồi mới viết chi tiết", feedback: "Đúng." },
      { id: "b", text: "Yêu cầu viết ngay toàn bộ 15 trang", feedback: "Rủi ro phải làm lại nhiều nếu hiểu sai phạm vi." },
      { id: "c", text: "Chỉ gửi tiêu đề “Quy trình vận hành”", feedback: "Thiếu thông tin trầm trọng." },
    ],
    answer: "a",
    explanation: "Duyệt giả định và dàn ý trước là cách rẻ nhất để phát hiện hiểu nhầm.",
  },
  {
    questionId: "ch03-l07-q08", lessonId: L, conceptId: "conflicts", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Chọn các cặp/câu chỉ dẫn MÂU THUẪN trong prompt sau.",
    segments: [
      { id: "s1", text: "Viết bằng tiếng Việt.", isError: false },
      { id: "s2", text: "Trình bày dạng bảng, không dùng bảng.", isError: true, why: "Tự mâu thuẫn trong cùng một câu." },
      { id: "s3", text: "Tối đa 100 từ, phân tích đầy đủ 12 nguyên nhân kèm ví dụ.", isError: true, why: "100 từ không đủ cho 12 nguyên nhân kèm ví dụ." },
      { id: "s4", text: "Chỉ dùng số liệu trong bảng đính kèm.", isError: false },
    ],
    explanation: "Gặp yêu cầu mâu thuẫn, Claude phải tự chọn bỏ một yêu cầu — và có thể chọn khác ý bạn.",
  },
  {
    questionId: "ch03-l07-q09", lessonId: L, conceptId: "jargon", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trong công ty bạn, “MBA” nghĩa là máy biến áp. Cách viết nào tránh hiểu nhầm tốt nhất?",
    options: [
      { id: "a", text: "“Báo cáo tồn kho MBA (máy biến áp) theo công suất…”", feedback: "Đúng — định nghĩa ngay lần đầu xuất hiện." },
      { id: "b", text: "“Báo cáo tồn kho MBA…” (không giải thích)", feedback: "MBA phổ biến với nghĩa “thạc sĩ quản trị kinh doanh”." },
      { id: "c", text: "Viết “mba” chữ thường", feedback: "Không giải quyết được nghĩa." },
    ],
    answer: "a",
    explanation: "Viết tắt có nghĩa phổ biến khác bên ngoài là nguồn hiểu nhầm điển hình — định nghĩa một lần trong prompt.",
  },
  {
    questionId: "ch03-l07-q10", lessonId: L, conceptId: "diagnose-output", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chẩn đoán nguyên nhân.",
    context: {
      label: "Tình huống",
      content: "Prompt: “Tổng hợp lỗi tháng này từ file đính kèm.” File có dữ liệu tháng 8, 9, 10. Claude tổng hợp cả 3 tháng.",
    },
    options: [
      { id: "a", text: "“Tháng này” mơ hồ — cần ghi rõ tháng 10/2026", feedback: "Đúng — Claude không biết “này” là tháng nào." },
      { id: "b", text: "Claude cố ý làm khác yêu cầu", feedback: "Không có cơ sở." },
      { id: "c", text: "File quá lớn", feedback: "Không phải nguyên nhân hiểu sai phạm vi." },
    ],
    answer: "a",
    explanation: "Đọc ngược từ kết quả: Claude dùng cả 3 tháng → câu xác định phạm vi thời gian đã không rõ.",
  },
  {
    questionId: "ch03-l07-q11", lessonId: L, conceptId: "audience", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép mỗi người đọc với điều chỉnh phù hợp nhất cho cùng một báo cáo sự cố.",
    pairs: [
      { id: "worker", left: "Công nhân vận hành", right: "Việc cần làm ngay, câu ngắn, không thuật ngữ khó" },
      { id: "director", left: "Ban giám đốc", right: "Tác động, chi phí, phương án cần quyết định" },
      { id: "customer", left: "Khách hàng", right: "Giọng lịch sự, cam kết xử lý, mốc thời gian" },
      { id: "engineer", left: "Kỹ sư bảo trì", right: "Số liệu đo, nguyên nhân kỹ thuật, bước sửa chữa" },
    ],
    explanation: "Nêu rõ người đọc giúp Claude tự điều chỉnh trọng tâm và giọng văn.",
  },
  {
    questionId: "ch03-l07-q12", lessonId: L, conceptId: "clarifying-questions", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Đánh giá thiết kế prompt sau.",
    context: {
      label: "Tình huống",
      content: "Một hệ thống tự động gửi hàng trăm phiếu báo lỗi cho Claude phân loại mỗi đêm, không có người theo dõi. Prompt có câu: “Nếu thiếu thông tin, hãy hỏi lại tôi trước khi phân loại.”",
    },
    options: [
      { id: "a", text: "Không phù hợp: không có ai trả lời; nên quy định cách xử lý mặc định, ví dụ gán nhãn “Chưa đủ thông tin”", feedback: "Đúng." },
      { id: "b", text: "Phù hợp, vì hỏi lại luôn là tốt nhất", feedback: "Hỏi lại chỉ hữu ích khi có người trả lời." },
      { id: "c", text: "Bỏ hết hướng dẫn xử lý trường hợp thiếu thông tin", feedback: "Claude sẽ phải đoán." },
    ],
    answer: "a",
    explanation: "Kỹ thuật làm rõ phải hợp với bối cảnh: hội thoại có người → hỏi lại; quy trình tự động → quy tắc mặc định rõ ràng.",
  },
  {
    questionId: "ch03-l07-q13", lessonId: L, conceptId: "diagnose-output", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Khi kết quả sai ý, cách hiệu quả nhất là luôn viết lại toàn bộ prompt từ đầu.",
    answer: false,
    explanation: "Sai. Tìm đúng câu Claude đã hiểu khác và sửa câu đó thường nhanh hơn và giữ được phần đã tốt.",
  },
  {
    questionId: "ch03-l07-q14", lessonId: L, conceptId: "ambiguous-words", learningObjective: "o2", thinkingSkill: "create", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Sửa prompt dưới đây sao cho chỉ còn một cách hiểu hợp lý.",
    source: "Gửi khách mấy mẫu thông báo bảo trì sớm, viết hay hay, đừng dài, cho mấy anh bên kỹ thuật duyệt trước.",
    rubric: [
      { id: "count", label: "Số lượng cụ thể thay cho “mấy”", weight: 1, check: { kind: "regex", pattern: "\\b(\\d+|hai|ba|bon|nam)\\s*(mau|ban|thong bao)" }, pass: "Có số lượng cụ thể.", fail: "Ghi rõ số mẫu cần soạn." },
      { id: "time", label: "Thời gian cụ thể thay cho “sớm”", weight: 1, check: { kind: "regex", pattern: "(truoc\\s*\\d|\\d{1,2}h|\\d{1,2}/\\d{1,2}|ngay\\s*\\d)" }, pass: "Có thời gian cụ thể.", fail: "Thay “sớm” bằng giờ/ngày cụ thể." },
      { id: "length", label: "Độ dài đo được", weight: 1, check: { kind: "regex", pattern: "(toi da|khong qua|\\d+\\s*(tu|cau|dong))" }, pass: "Có độ dài đo được.", fail: "Thay “đừng dài” bằng giới hạn cụ thể." },
      { id: "reviewer", label: "Người duyệt cụ thể", weight: 1, check: { kind: "anyKeyword", keywords: ["trưởng phòng kỹ thuật", "kỹ sư", "phòng kỹ thuật", "người duyệt"] }, pass: "Có người duyệt cụ thể.", fail: "Ghi rõ ai duyệt." },
      { id: "style", label: "Giọng văn cụ thể thay cho “hay”", weight: 1, check: { kind: "anyKeyword", keywords: ["lịch sự", "trang trọng", "thân thiện", "giọng văn", "dễ hiểu"] }, pass: "Có giọng văn cụ thể.", fail: "Thay “viết hay” bằng mô tả giọng văn." },
    ],
    passScore: 0.8,
    referenceAnswer:
      "Hãy soạn 2 mẫu thông báo bảo trì trạm biến áp gửi khách hàng doanh nghiệp, để trưởng phòng kỹ thuật duyệt trước 10h ngày 06/11. Giọng lịch sự, dễ hiểu; mỗi mẫu tối đa 120 từ, gồm thời gian cắt điện, phạm vi ảnh hưởng và số điện thoại liên hệ.",
    explanation: "Năm chỗ mơ hồ (“mấy”, “sớm”, “hay”, “đừng dài”, “mấy anh”) đều được thay bằng thông tin cụ thể.",
  },
  {
    questionId: "ch03-l07-q15", lessonId: L, conceptId: "restate", learningObjective: "o3", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Nhiệm vụ thực tế: viết prompt cho một việc lớn, yêu cầu Claude nêu giả định và câu hỏi trước khi làm.",
    source: "Bạn cần Claude soạn kế hoạch đào tạo an toàn điện cho 120 công nhân trong quý 1. Viết prompt sao cho Claude trước tiên trình bày giả định, dàn ý và câu hỏi làm rõ, chờ bạn xác nhận rồi mới viết chi tiết.",
    rubric: [
      { id: "assume", label: "Yêu cầu nêu giả định", weight: 1, check: { kind: "anyKeyword", keywords: ["giả định"] }, pass: "Có yêu cầu nêu giả định.", fail: "Yêu cầu liệt kê các giả định." },
      { id: "questions", label: "Cho phép đặt câu hỏi", weight: 1, check: { kind: "anyKeyword", keywords: ["câu hỏi", "hỏi lại", "hỏi tôi"] }, pass: "Có cho phép hỏi.", fail: "Cho phép Claude đặt câu hỏi làm rõ." },
      { id: "wait", label: "Chờ xác nhận trước khi viết", weight: 1, check: { kind: "anyKeyword", keywords: ["chờ", "sau khi tôi xác nhận", "trước khi viết", "chưa viết"] }, pass: "Có bước chờ xác nhận.", fail: "Yêu cầu chờ bạn xác nhận rồi mới viết chi tiết." },
      { id: "context", label: "Có bối cảnh cụ thể", weight: 1, check: { kind: "anyKeyword", keywords: ["120", "quý 1", "an toàn điện", "công nhân"] }, pass: "Có bối cảnh.", fail: "Nêu bối cảnh: 120 công nhân, quý 1, an toàn điện." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Bạn là chuyên viên đào tạo an toàn lao động. Tôi cần kế hoạch đào tạo an toàn điện cho 120 công nhân sản xuất trong quý 1/2027.\nChưa viết kế hoạch chi tiết. Trước tiên hãy: (1) liệt kê các giả định bạn đang dùng (số lớp, thời lượng, giảng viên…), (2) đề xuất dàn ý, (3) đặt tối đa 4 câu hỏi về thông tin còn thiếu.\nChờ tôi trả lời và xác nhận rồi mới viết kế hoạch chi tiết.",
    explanation: "Duyệt giả định và dàn ý trước giúp phát hiện hiểu nhầm khi còn rẻ để sửa.",
  },
];
