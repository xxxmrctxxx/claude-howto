import type { Question } from "@/lib/types/content";

const L = "ch01-l06";

/** 15 questions for "Các lỗi thường gặp của AI" — 5 beginner, 6 intermediate, 4 advanced. */
export const questionsCh01L06: Question[] = [
  {
    questionId: "ch01-l06-q01", lessonId: L, conceptId: "hallucination", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Trong tài liệu của Anthropic, “hallucination” là gì?",
    options: [
      { id: "a", text: "Văn bản sai sự thật hoặc mâu thuẫn với ngữ cảnh được cung cấp", feedback: "Đúng." },
      { id: "b", text: "Lỗi kết nối mạng khi gửi câu hỏi", feedback: "Không liên quan." },
      { id: "c", text: "Câu trả lời quá dài", feedback: "Độ dài không phải hallucination." },
    ],
    answer: "a",
    explanation: "Hallucination nguy hiểm vì nghe rất hợp lý. Anthropic lưu ý cả model tiên tiến nhất cũng có thể mắc.",
  },
  {
    questionId: "ch01-l06-q02", lessonId: L, conceptId: "allow-unknown", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Anthropic khuyên nên cho phép Claude nói “tôi không biết” hoặc “không đủ thông tin” để giảm thông tin sai.",
    answer: true,
    explanation: "Đúng. Đây là kỹ thuật cơ bản đầu tiên trong hướng dẫn “Reduce hallucinations”.",
  },
  {
    questionId: "ch01-l06-q03", lessonId: L, conceptId: "hallucination", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Loại thông tin nào DỄ bị bịa nhất và cần kiểm tra kỹ? Chọn tất cả.",
    options: [
      { id: "a", text: "Số hiệu tiêu chuẩn và năm ban hành", feedback: "Đúng." },
      { id: "b", text: "Con số đo lường cụ thể", feedback: "Đúng." },
      { id: "c", text: "Tên tác giả và tiêu đề tài liệu tham khảo", feedback: "Đúng." },
      { id: "d", text: "Câu chào hỏi đầu email", feedback: "Rủi ro thấp — không phải dữ kiện." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Dữ kiện cụ thể (số, tên, mã hiệu, nguồn) là nơi lỗi bịa thường xuất hiện và gây hậu quả.",
  },
  {
    questionId: "ch01-l06-q04", lessonId: L, conceptId: "misunderstanding", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Bạn yêu cầu “tóm tắt báo cáo”, Claude lại viết bài phân tích nguyên nhân dài 2 trang. Đây là loại lỗi nào?",
    options: [
      { id: "a", text: "Hiểu sai yêu cầu (làm việc khác với điều bạn cần)", feedback: "Đúng." },
      { id: "b", text: "Sai tính toán", feedback: "Không có phép tính nào." },
      { id: "c", text: "Thông tin lỗi thời", feedback: "Không liên quan đến thời điểm." },
    ],
    answer: "a",
    explanation: "Cách khắc phục: nêu rõ Task và Output (ví dụ “5 gạch đầu dòng, tối đa 100 từ”).",
  },
  {
    questionId: "ch01-l06-q05", lessonId: L, conceptId: "restrict-sources", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền từ còn thiếu trong câu prompt.",
    template: "“[[b1]] dùng thông tin trong tài liệu được cung cấp, không dùng kiến thức chung.”",
    blanks: [{ id: "b1", accepted: ["chỉ", "Chỉ"], width: 6 }],
    explanation: "Giới hạn nguồn (external knowledge restriction) giúp câu trả lời bám sát tài liệu của bạn.",
  },
  {
    questionId: "ch01-l06-q06", lessonId: L, conceptId: "direct-quotes", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Sắp xếp các bước theo kỹ thuật “trích dẫn nguyên văn trước” cho tài liệu dài.",
    items: [
      { id: "s1", text: "Đưa tài liệu vào thẻ <tai_lieu>" },
      { id: "s2", text: "Yêu cầu trích nguyên văn các đoạn liên quan" },
      { id: "s3", text: "Chỉ phân tích dựa trên các trích dẫn đó" },
      { id: "s4", text: "Ghi số thứ tự trích dẫn sau mỗi ý" },
      { id: "s5", text: "Người đọc đối chiếu trích dẫn với tài liệu gốc" },
    ],
    explanation: "Anthropic khuyên với tài liệu dài, trích nguyên văn trước rồi mới làm nhiệm vụ, để neo câu trả lời vào văn bản thật.",
  },
  {
    questionId: "ch01-l06-q07", lessonId: L, conceptId: "calculation", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Bảng tổng hợp do AI tạo có lỗi tính toán. Dữ liệu gốc: Quấn dây 12 lỗi, Lắp ráp 18 lỗi, Sơn 10 lỗi (tổng 40). Chọn các câu SAI.",
    segments: [
      { id: "s1", text: "Lắp ráp có nhiều lỗi nhất (18 lỗi).", isError: false },
      { id: "s2", text: "Tổng số lỗi là 45.", isError: true, why: "12 + 18 + 10 = 40, không phải 45." },
      { id: "s3", text: "Sơn chiếm 25% tổng số lỗi.", isError: false },
      { id: "s4", text: "Quấn dây chiếm 40% tổng số lỗi.", isError: true, why: "12/40 = 30%, không phải 40%." },
    ],
    explanation: "Với nhiều phép tính, hãy kiểm tra lại bằng bảng tính hoặc yêu cầu Claude trình bày từng bước tính.",
  },
  {
    questionId: "ch01-l06-q08", lessonId: L, conceptId: "outdated", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Chọn cách xử lý đúng.",
    context: {
      label: "Tình huống",
      content: "Claude nêu một mức thuế nhập khẩu linh kiện. Bạn nghi rằng biểu thuế vừa thay đổi tháng trước.",
    },
    options: [
      { id: "a", text: "Đối chiếu với văn bản hiện hành (hoặc dùng tìm kiếm web có nguồn chính thức) trước khi dùng", feedback: "Đúng — có thể là thông tin lỗi thời." },
      { id: "b", text: "Dùng ngay vì Claude đã học rất nhiều tài liệu", feedback: "Thông tin sau mốc kiến thức có thể chưa được học." },
      { id: "c", text: "Hỏi lại Claude cùng câu và lấy câu trả lời thứ hai", feedback: "Hỏi lại không cập nhật được dữ liệu mới." },
    ],
    answer: "a",
    explanation: "Quy định, giá, biểu thuế thay đổi thường xuyên — cần nguồn hiện hành.",
  },
  {
    questionId: "ch01-l06-q09", lessonId: L, conceptId: "verification", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Phiếu thông số ghi: công suất 250 kVA, tổn hao không tải ≤ 420 W, bảo hành 24 tháng. Ghép từng khẳng định của AI với đánh giá đúng.",
    pairs: [
      { id: "ok", left: "“Công suất định mức 250 kVA”", right: "Khớp tài liệu" },
      { id: "wrong", left: "“Tổn hao không tải tối đa 240 W”", right: "Sai so với tài liệu" },
      { id: "none", left: "“Đạt chứng nhận xanh năm 2025”", right: "Không có trong tài liệu — nghi bịa" },
    ],
    explanation: "Ba trạng thái khi đối chiếu: khớp, sai lệch, và không có căn cứ. Trạng thái thứ ba thường là dấu hiệu hallucination.",
  },
  {
    questionId: "ch01-l06-q10", lessonId: L, conceptId: "direct-quotes", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Vì sao yêu cầu Claude kèm trích dẫn cho từng khẳng định giúp giảm lỗi?",
    options: [
      { id: "a", text: "Câu trả lời trở nên kiểm tra được; khẳng định nào không tìm được trích dẫn thì loại bỏ", feedback: "Đúng." },
      { id: "b", text: "Trích dẫn làm câu trả lời dài hơn nên đúng hơn", feedback: "Độ dài không làm tăng độ đúng." },
      { id: "c", text: "Trích dẫn khiến Claude không thể sai", feedback: "Giảm lỗi chứ không loại bỏ hoàn toàn." },
    ],
    answer: "a",
    explanation: "Kỹ thuật “verify with citations”: mỗi khẳng định phải có trích dẫn hỗ trợ, nếu không thì rút lại.",
  },
  {
    questionId: "ch01-l06-q11", lessonId: L, conceptId: "hallucination", learningObjective: "o1", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Bạn chạy cùng một câu hỏi dữ kiện 3 lần và nhận 3 năm ban hành khác nhau cho cùng một tiêu chuẩn. Điều này gợi ý gì?",
    context: { label: "Kết quả 3 lần chạy", content: "Lần 1: 2018 · Lần 2: 2021 · Lần 3: 2019" },
    options: [
      { id: "a", text: "Dấu hiệu nghi vấn hallucination — cần kiểm tra nguồn gốc", feedback: "Đúng — đây là ý tưởng của kỹ thuật best-of-N." },
      { id: "b", text: "Cả ba đều đúng vì tiêu chuẩn có nhiều bản", feedback: "Có thể, nhưng không thể kết luận khi chưa xem nguồn." },
      { id: "c", text: "Lấy trung bình là 2019", feedback: "Trung bình các con số bịa vẫn là con số bịa." },
    ],
    answer: "a",
    explanation: "Anthropic gợi ý so sánh nhiều lần chạy: kết quả mâu thuẫn là dấu hiệu cần kiểm chứng.",
  },
  {
    questionId: "ch01-l06-q12", lessonId: L, conceptId: "risk-process", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Đánh giá quy trình sau.",
    context: {
      label: "Quy trình",
      content: "Phòng kỹ thuật dùng Claude soạn bảng thông số gửi khách hàng. Họ đã thêm “chỉ dùng tài liệu” và “kèm trích dẫn” vào prompt, nên quyết định bỏ bước kỹ sư kiểm tra.",
    },
    options: [
      { id: "a", text: "Chưa an toàn: kỹ thuật giảm lỗi không loại bỏ hoàn toàn lỗi; tài liệu gửi khách hàng vẫn cần người kiểm tra", feedback: "Đúng." },
      { id: "b", text: "An toàn, vì đã có trích dẫn", feedback: "Trích dẫn giúp kiểm tra dễ hơn, nhưng vẫn cần người kiểm tra." },
      { id: "c", text: "An toàn nếu dùng model mạnh nhất", feedback: "Model mạnh vẫn có thể sai." },
    ],
    answer: "a",
    explanation: "Hướng dẫn chính thức nhấn mạnh: luôn kiểm chứng thông tin quan trọng, đặc biệt với quyết định có rủi ro cao.",
  },
  {
    questionId: "ch01-l06-q13", lessonId: L, conceptId: "restrict-sources", learningObjective: "o2", thinkingSkill: "create", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Sửa prompt dưới đây để giảm nguy cơ bịa thông tin, áp dụng các kỹ thuật trong bài.",
    source: "Viết đoạn giới thiệu sản phẩm MBA-250, nêu các chứng nhận và giải thưởng đã đạt.",
    rubric: [
      { id: "restrict", label: "Giới hạn nguồn", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ dùng", "chỉ dựa", "chỉ sử dụng", "không dùng kiến thức"] }, pass: "Có giới hạn nguồn.", fail: "Thêm câu chỉ dùng tài liệu được cung cấp." },
      { id: "unknown", label: "Cho phép thừa nhận thiếu thông tin", weight: 1, check: { kind: "anyKeyword", keywords: ["chưa có thông tin", "không có thông tin", "không tìm thấy", "nói rõ", "không đủ", "không biết"] }, pass: "Có cho phép thừa nhận.", fail: "Cho phép ghi “chưa có thông tin” khi tài liệu không đề cập." },
      { id: "quote", label: "Yêu cầu trích dẫn", weight: 1, check: { kind: "anyKeyword", keywords: ["trích dẫn", "nguyên văn", "dòng tương ứng", "nguồn"] }, pass: "Có trích dẫn.", fail: "Yêu cầu trích dẫn cho mỗi chứng nhận." },
      { id: "doc", label: "Cung cấp tài liệu", weight: 1, check: { kind: "anyKeyword", keywords: ["phiếu thông số", "tài liệu", "dưới đây", "đính kèm", "hồ sơ"] }, pass: "Có tài liệu.", fail: "Đưa tài liệu nguồn (phiếu thông số, hồ sơ chứng nhận) vào prompt." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Dưới đây là phiếu thông số và hồ sơ chứng nhận của MBA-250. Chỉ dùng các tài liệu này, không dùng kiến thức chung.\nViết đoạn giới thiệu sản phẩm (tối đa 120 từ). Mỗi chứng nhận hoặc giải thưởng phải kèm trích dẫn nguyên văn dòng tương ứng trong tài liệu.\nNếu tài liệu không đề cập chứng nhận hay giải thưởng nào, ghi \"chưa có thông tin\" thay vì đoán.",
    explanation: "Prompt gốc mời gọi bịa: không có tài liệu, lại hỏi đúng loại thông tin dễ bị bịa nhất (chứng nhận, giải thưởng).",
  },
  {
    questionId: "ch01-l06-q14", lessonId: L, conceptId: "verification", learningObjective: "o3", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "true-false",
    prompt: "Đúng hay sai?",
    statement: "Khi Claude đưa ra trích dẫn kèm số trang, bạn có thể tin trích dẫn đó tồn tại mà không cần mở tài liệu gốc.",
    answer: false,
    explanation: "Sai. Trích dẫn cũng có thể sai hoặc không tồn tại; giá trị của trích dẫn là giúp bạn kiểm tra nhanh — nhưng vẫn phải kiểm tra.",
  },
  {
    questionId: "ch01-l06-q15", lessonId: L, conceptId: "risk-process", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Nhiệm vụ thực tế: thiết kế quy trình kiểm tra đầu ra AI cho nhóm của bạn theo 2 mức rủi ro.",
    source: "Nhóm QA dùng Claude cho (A) bản nháp email nội bộ và (B) báo cáo kết quả thử nghiệm gửi khách hàng. Viết quy trình kiểm tra cho mỗi loại, nêu ai kiểm tra và kiểm tra những gì.",
    rubric: [
      { id: "low", label: "Loại A: kiểm tra nhẹ", weight: 1, check: { kind: "allGroups", groups: [["email", "loại a", "(a)", "nội bộ"], ["đọc lại", "kiểm tra nhanh", "người gửi"]] }, pass: "Loại A hợp lý.", fail: "Email nội bộ: người gửi đọc lại trước khi gửi." },
      { id: "high", label: "Loại B: đối chiếu số liệu", weight: 1, check: { kind: "allGroups", groups: [["báo cáo", "loại b", "(b)", "khách hàng"], ["đối chiếu", "so sánh", "kiểm tra từng"]] }, pass: "Loại B có đối chiếu.", fail: "Báo cáo cho khách: đối chiếu từng số liệu với dữ liệu gốc." },
      { id: "approver", label: "Có người duyệt cho loại B", weight: 1, check: { kind: "anyKeyword", keywords: ["duyệt", "ký", "trưởng", "người có thẩm quyền", "người thứ hai"] }, pass: "Có người duyệt.", fail: "Báo cáo cho khách cần người có thẩm quyền duyệt." },
      { id: "technique", label: "Dùng kỹ thuật giảm lỗi trong prompt", weight: 1, check: { kind: "anyKeyword", keywords: ["trích dẫn", "chỉ dùng", "không biết", "không đủ"] }, pass: "Có kỹ thuật giảm lỗi.", fail: "Thêm kỹ thuật giảm lỗi vào prompt: trích dẫn, giới hạn nguồn…" },
    ],
    passScore: 0.75,
    referenceAnswer:
      "(A) Email nội bộ: rủi ro thấp — người gửi đọc lại nội dung và giọng văn trước khi gửi.\n(B) Báo cáo thử nghiệm cho khách hàng: rủi ro cao — prompt yêu cầu chỉ dùng dữ liệu thử nghiệm và kèm trích dẫn; kỹ sư QA đối chiếu từng số liệu với file gốc; trưởng phòng QA duyệt và ký trước khi gửi.",
    explanation: "Quy trình tốt cân bằng tốc độ và an toàn: kiểm tra nhẹ cho việc rủi ro thấp, kiểm tra nhiều lớp cho việc rủi ro cao.",
  },
];
