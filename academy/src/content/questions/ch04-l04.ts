import type { Question } from "@/lib/types/content";

const L = "ch04-l04";

/** 15 questions for "Tạo biểu đồ" — 5 beginner, 6 intermediate, 4 advanced. Facts checked 2026-11-03. */
export const questionsCh04L04: Question[] = [
  {
    questionId: "ch04-l04-q01", lessonId: L, conceptId: "line-chart", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Muốn xem số lỗi tăng hay giảm qua 12 tháng, nên dùng loại biểu đồ nào?",
    options: [
      { id: "a", text: "Biểu đồ đường", feedback: "Đúng." },
      { id: "b", text: "Biểu đồ tròn", feedback: "Tròn dùng cho tỷ trọng, không cho xu hướng." },
      { id: "c", text: "Biểu đồ phân tán", feedback: "Phân tán dùng cho quan hệ hai đại lượng." },
    ],
    answer: "a",
    explanation: "Xu hướng theo thời gian → đường.",
  },
  {
    questionId: "ch04-l04-q02", lessonId: L, conceptId: "bar-chart", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "true-false",
    statement: "So sánh tổng số lỗi giữa 6 công đoạn hợp với biểu đồ cột, sắp xếp giảm dần.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Tên công đoạn dài thì dùng cột ngang.",
  },
  {
    questionId: "ch04-l04-q03", lessonId: L, conceptId: "zero-baseline", learningObjective: "o3", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Biểu đồ cột có trục dọc bắt đầu từ 950 thay vì 0 có thể làm chênh lệch nhỏ trông rất lớn.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Độ dài cột phải tỷ lệ với giá trị — trục cột nên bắt đầu từ 0.",
  },
  {
    questionId: "ch04-l04-q04", lessonId: L, conceptId: "summary-table", learningObjective: "o4", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Cách đơn giản nhất để kiểm tra biểu đồ Claude vẽ có đúng số không?",
    options: [
      { id: "a", text: "Xin kèm bảng số đã tổng hợp và so vài con số với file gốc", feedback: "Đúng." },
      { id: "b", text: "Nhìn xem biểu đồ có đẹp không", feedback: "Đẹp không có nghĩa là đúng." },
      { id: "c", text: "Hỏi Claude “chắc chưa?”", feedback: "Cần đối chiếu với nguồn." },
    ],
    answer: "a",
    explanation: "Ví dụ so tổng cả kỳ hoặc tháng cao nhất bằng SUM trong Excel.",
  },
  {
    questionId: "ch04-l04-q05", lessonId: L, conceptId: "chart-output", learningObjective: "o4", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "multiple-choice",
    prompt: "Claude có thể đưa biểu đồ theo những cách nào? Chọn tất cả.",
    options: [
      { id: "a", text: "Hình trực quan ngay trong chat (beta)", feedback: "Đúng." },
      { id: "b", text: "Artifact biểu đồ/dashboard", feedback: "Đúng." },
      { id: "c", text: "File ảnh PNG hoặc file Excel để tải về", feedback: "Đúng." },
      { id: "d", text: "In thẳng ra máy in văn phòng", feedback: "Claude không điều khiển máy in." },
    ],
    answer: ["a", "b", "c"],
    explanation: "Chọn theo người nhận: xem nhanh, chia sẻ cập nhật, hay dán vào báo cáo.",
  },
  {
    questionId: "ch04-l04-q06", lessonId: L, conceptId: "scatter-chart", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Bạn muốn biết các tổ làm tăng ca nhiều có đi kèm số lỗi nhiều hơn không (20 tổ, mỗi tổ một cặp số). Loại biểu đồ nào?",
    options: [
      { id: "a", text: "Phân tán: mỗi tổ một điểm (giờ tăng ca, số lỗi)", feedback: "Đúng." },
      { id: "b", text: "Đường theo thứ tự tên tổ", feedback: "Tên tổ không phải trục thời gian." },
      { id: "c", text: "Tròn", feedback: "Không thể hiện quan hệ hai đại lượng." },
    ],
    answer: "a",
    explanation: "Lưu ý: hai đại lượng đi cùng nhau chưa chắc cái này gây ra cái kia.",
  },
  {
    questionId: "ch04-l04-q07", lessonId: L, conceptId: "share-chart", learningObjective: "o1", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "scenario",
    prompt: "Cần so tỷ lệ 4 loại lỗi trong từng ca (sáng, chiều, đêm). Lựa chọn hợp lý nhất?",
    options: [
      { id: "a", text: "Cột chồng 100%: mỗi ca một cột, các đoạn là tỷ lệ từng loại lỗi", feedback: "Đúng." },
      { id: "b", text: "Ba biểu đồ tròn 3D đặt cạnh nhau", feedback: "3D và nhiều tròn khó so sánh." },
      { id: "c", text: "Biểu đồ đường", feedback: "Ca không phải trục thời gian liên tục." },
    ],
    answer: "a",
    explanation: "Tỷ trọng trong từng nhóm → cột chồng 100%.",
  },
  {
    questionId: "ch04-l04-q08", lessonId: L, conceptId: "aggregation", learningObjective: "o2", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "File có mỗi dòng là một lần phát hiện lỗi (cột Ngay, Cong_doan). Muốn biểu đồ số lỗi theo công đoạn, phép tổng hợp nào đúng?",
    options: [
      { id: "a", text: "Đếm số dòng theo từng công đoạn", feedback: "Đúng." },
      { id: "b", text: "Lấy trung bình cột Ngay", feedback: "Không có ý nghĩa." },
      { id: "c", text: "Cộng các ngày lại với nhau", feedback: "Không có ý nghĩa." },
    ],
    answer: "a",
    explanation: "Nói rõ phép tổng hợp (đếm, cộng, trung bình) để Claude không tự đoán.",
  },
  {
    questionId: "ch04-l04-q09", lessonId: L, conceptId: "title-takeaway", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Tiêu đề nào tốt nhất cho biểu đồ lỗi lắp ráp vỏ 3 tháng gần đây?",
    options: [
      { id: "a", text: "“Lỗi lắp ráp vỏ tăng 3 tháng liền (tháng 8–10/2026)”", feedback: "Đúng — nói ý chính và thời gian." },
      { id: "b", text: "“Biểu đồ 1”", feedback: "Không cho biết gì." },
      { id: "c", text: "“Số liệu”", feedback: "Quá chung chung." },
    ],
    answer: "a",
    explanation: "Tiêu đề nói ý chính giúp người bận đọc nhanh.",
  },
  {
    questionId: "ch04-l04-q10", lessonId: L, conceptId: "data-spec", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "intermediate",
    questionType: "find-error",
    prompt: "Đánh dấu những phần còn thiếu hoặc mơ hồ trong yêu cầu vẽ biểu đồ dưới đây.",
    segments: [
      { id: "s1", text: "Từ file san-luong.csv,", isError: false },
      { id: "s2", text: "vẽ biểu đồ gì đó cho thấy tình hình,", isError: true, why: "Chưa có câu hỏi và loại biểu đồ." },
      { id: "s3", text: "lấy số liệu khoảng gần đây,", isError: true, why: "“Gần đây” là khoảng nào?" },
      { id: "s4", text: "trục dọc ghi “Sản lượng (sản phẩm)”.", isError: false },
    ],
    explanation: "Thiếu câu hỏi và khoảng thời gian → Claude phải tự đoán.",
  },
  {
    questionId: "ch04-l04-q11", lessonId: L, conceptId: "axis-labels", learningObjective: "o3", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép lỗi trình bày với cách sửa.",
    pairs: [
      { id: "p1", left: "Trục dọc không ghi đơn vị", right: "Thêm nhãn “Số lỗi (lần)”" },
      { id: "p2", left: "Trục cột bắt đầu từ 950", right: "Cho trục bắt đầu từ 0" },
      { id: "p3", left: "Biểu đồ tròn 3D 9 phần", right: "Đổi sang cột sắp giảm dần" },
      { id: "p4", left: "Tiêu đề “Biểu đồ 1”", right: "Tiêu đề nói ý chính" },
    ],
    explanation: "Biểu đồ trung thực và dễ đọc quan trọng hơn biểu đồ cầu kỳ.",
  },
  {
    questionId: "ch04-l04-q12", lessonId: L, conceptId: "summary-table", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bảng tổng hợp đi kèm biểu đồ ghi tổng lỗi tháng 9 là 412, nhưng SUM trong Excel của bạn ra 398. Bước tiếp theo?",
    options: [
      { id: "a", text: "Báo Claude con số lệch, hỏi cách lọc và tính (có trùng dòng, có tính cả ngày 1/10 không), yêu cầu tính lại", feedback: "Đúng." },
      { id: "b", text: "Dùng số của Claude vì Claude tính nhanh hơn", feedback: "Chưa rõ ai đúng — phải tìm nguyên nhân." },
      { id: "c", text: "Bỏ bảng, chỉ giữ biểu đồ", feedback: "Che giấu sai lệch." },
    ],
    answer: "a",
    explanation: "Lệch số thường do lọc khoảng thời gian, dòng trùng, hoặc cách đọc ngày.",
  },
  {
    questionId: "ch04-l04-q13", lessonId: L, conceptId: "chart-question", learningObjective: "o1", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "fix-prompt",
    prompt: "Viết lại yêu cầu dưới đây thành yêu cầu vẽ biểu đồ cụ thể.",
    source: "vẽ biểu đồ đẹp từ file doanh-thu.csv",
    rubric: [
      { id: "type", label: "Loại biểu đồ", weight: 1, check: { kind: "anyKeyword", keywords: ["cột", "đường", "phân tán", "bảng"] }, pass: "Có loại biểu đồ.", fail: "Nêu loại biểu đồ theo câu hỏi." },
      { id: "agg", label: "Cột và cách tổng hợp", weight: 1, check: { kind: "anyKeyword", keywords: ["tổng", "trung bình", "đếm", "cộng"] }, pass: "Có tổng hợp.", fail: "Nêu cột và phép tổng hợp." },
      { id: "check", label: "Bảng đối chiếu", weight: 1, check: { kind: "anyKeyword", keywords: ["bảng", "đối chiếu"] }, pass: "Có bảng.", fail: "Xin kèm bảng tổng hợp." },
    ],
    passScore: 0.67,
    referenceAnswer:
      "Từ doanh-thu.csv (cột Thang, Chi_nhanh, Doanh_thu), vẽ biểu đồ cột: tổng Doanh_thu theo chi nhánh trong quý 3/2026, sắp giảm dần, trục từ 0, đơn vị triệu đồng. Tiêu đề nói chi nhánh cao nhất. Kèm bảng tổng theo chi nhánh để tôi đối chiếu.",
    explanation: "Thay “đẹp” bằng câu hỏi, dữ liệu và tiêu chí kiểm tra.",
  },
  {
    questionId: "ch04-l04-q14", lessonId: L, conceptId: "chart-output", learningObjective: "o4", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Biểu đồ sản lượng tuần sẽ được (a) dán vào báo cáo Word gửi tập đoàn, và (b) cả phòng xem, cập nhật mỗi tuần. Cách xuất hợp lý?",
    options: [
      { id: "a", text: "(a) file ảnh PNG để dán; (b) artifact để chia sẻ và cập nhật", feedback: "Đúng." },
      { id: "b", text: "Chỉ dùng hình trong chat cho cả hai", feedback: "Hình trong chat không tiện chia sẻ, cập nhật hay dán báo cáo." },
      { id: "c", text: "Chụp màn hình chat rồi gửi cả hai bên", feedback: "Chất lượng thấp, khó cập nhật." },
    ],
    answer: "a",
    explanation: "Một biểu đồ, hai người nhận, hai dạng xuất.",
  },
  {
    questionId: "ch04-l04-q15", lessonId: L, conceptId: "data-spec", learningObjective: "o2", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết yêu cầu vẽ biểu đồ cho tình huống dưới đây (3–5 dòng), kèm cách bạn sẽ đối chiếu số.",
    source: "File tieu-thu-dien.csv có cột Ngay, Xuong (A, B, C), kWh — dữ liệu từng ngày tháng 7–10/2026. Giám đốc hỏi: xưởng nào tiêu thụ điện nhiều nhất mỗi tháng, và có xưởng nào tăng bất thường không?",
    rubric: [
      { id: "type", label: "Loại biểu đồ hợp lý", weight: 1, check: { kind: "anyKeyword", keywords: ["cột", "đường"] }, pass: "Có loại biểu đồ.", fail: "Cột nhóm theo tháng hoặc đường theo tháng cho mỗi xưởng." },
      { id: "agg", label: "Tổng kWh theo tháng và xưởng", weight: 1, check: { kind: "allGroups", groups: [["tổng", "cộng"], ["tháng"], ["xưởng"]] }, pass: "Có tổng hợp.", fail: "Tổng kWh theo tháng, theo xưởng." },
      { id: "unit", label: "Đơn vị kWh", weight: 1, check: { kind: "anyKeyword", keywords: ["kwh"] }, pass: "Có đơn vị.", fail: "Ghi đơn vị kWh trên trục." },
      { id: "verify", label: "Cách đối chiếu", weight: 1, check: { kind: "anyKeyword", keywords: ["đối chiếu", "so với", "sum", "kiểm tra"] }, pass: "Có đối chiếu.", fail: "Nêu cách đối chiếu: bảng tổng + SUM trong Excel." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "Từ tieu-thu-dien.csv, vẽ biểu đồ đường: tổng kWh theo tháng (tháng 7–10/2026), mỗi xưởng A, B, C một đường; trục dọc “Điện tiêu thụ (kWh)”, trục ngang “Tháng”, trục từ 0. Tiêu đề nói xưởng cao nhất và xưởng tăng nhiều nhất. Kèm bảng tổng kWh theo tháng và xưởng.\nĐối chiếu: dùng SUM trong Excel cho tháng 10 của từng xưởng, so với bảng của Claude.",
    explanation: "Câu hỏi về “mỗi tháng” và “tăng bất thường” → tổng theo tháng, xem xu hướng.",
  },
];
