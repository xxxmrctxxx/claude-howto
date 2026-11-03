import type { Lesson } from "@/lib/types/content";

const BP = "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices";

export const lessonGiamHieuNham: Lesson = {
  id: "ch03-l07",
  chapterId: "ch03",
  slug: "giam-hieu-nham",
  title: "Cách giảm hiểu nhầm",
  subtitle: "Tìm và sửa những chỗ khiến Claude hiểu khác ý bạn: từ mơ hồ, viết tắt nội bộ, chỉ dẫn mâu thuẫn, câu phủ định, người đọc không rõ.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Nhận diện nguồn gây hiểu nhầm: từ mơ hồ, viết tắt nội bộ, chỉ dẫn mâu thuẫn." },
    { id: "o2", text: "Viết lại bằng câu khẳng định, định nghĩa thuật ngữ, nêu rõ người đọc và tiêu chí đo được." },
    { id: "o3", text: "Dùng kỹ thuật làm rõ: cho phép Claude hỏi lại khi thiếu thông tin, yêu cầu nêu giả định trước khi làm việc lớn." },
    { id: "o4", text: "Đọc ngược kết quả sai để tìm đúng câu trong prompt đã gây hiểu nhầm." },
  ],
  concepts: [
    { id: "ambiguous-words", label: "Từ mơ hồ" },
    { id: "jargon", label: "Viết tắt, thuật ngữ nội bộ" },
    { id: "conflicts", label: "Chỉ dẫn mâu thuẫn" },
    { id: "negative-instructions", label: "Câu phủ định" },
    { id: "audience", label: "Người đọc không rõ" },
    { id: "clarifying-questions", label: "Cho phép hỏi lại" },
    { id: "restate", label: "Nêu giả định trước khi làm" },
    { id: "diagnose-output", label: "Chẩn đoán từ kết quả sai" },
  ],
  hints: [
    "Từ như “sớm”, “ngắn thôi”, “sếp”, “tháng này” cần được thay bằng thông tin cụ thể.",
    "Viết tắt nội bộ (PO-TBA, MBA…) có thể mang nghĩa khác bên ngoài công ty — hãy định nghĩa.",
    "Kết quả sai ý thường chỉ ra đúng câu gây hiểu nhầm: hỏi “Claude đã hiểu câu nào theo cách khác?”.",
  ],
  sources: [{ label: "Anthropic — Prompting best practices: Be clear and direct, Add context, Control the format", href: BP }],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Hiểu nhầm hiếm khi do Claude “không thông minh”; thường do prompt **có nhiều cách hiểu**. Năm nguồn phổ biến: **từ mơ hồ** (“sớm”, “ngắn thôi”), **viết tắt nội bộ** (“PO-TBA”), **chỉ dẫn mâu thuẫn** (“ngắn gọn nhưng đầy đủ mọi chi tiết”), **câu phủ định** chỉ nói điều cấm, và **người đọc không rõ** (“cho sếp”).",
        "Cách sửa: thay từ mơ hồ bằng con số, ngày giờ; **định nghĩa** viết tắt và thuật ngữ; chọn một ưu tiên khi hai yêu cầu xung đột; nói **điều cần làm** thay vì chỉ nói điều cấm (Anthropic khuyên như vậy) và **giải thích lý do**; nêu rõ người đọc và mục đích.",
        "Với việc lớn, có hai kỹ thuật làm rõ hữu ích: cho phép Claude **hỏi lại** khi thiếu thông tin quan trọng, hoặc yêu cầu Claude **nêu các giả định và kế hoạch** trước khi làm — bạn sửa giả định sai trước khi tốn công.",
        "Khi kết quả sai ý, hãy **đọc ngược**: Claude đã hiểu câu nào theo cách khác? Sửa đúng câu đó thay vì viết lại toàn bộ.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Nhắn đồng nghiệp “gửi sớm file MBA cho sếp nhé”: sớm là mấy giờ? MBA là máy biến áp hay hồ sơ thạc sĩ? Sếp là trưởng phòng hay giám đốc? Ba chỗ mơ hồ trong một câu.",
      },
      terms: [
        { term: "Ambiguity", definition: "Một câu có nhiều cách hiểu hợp lý." },
        { term: "Jargon", definition: "Thuật ngữ, viết tắt chỉ dùng trong nội bộ hoặc chuyên ngành." },
        { term: "Assumption", definition: "Giả định — điều Claude tự cho là đúng khi thiếu thông tin." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: 5 nguồn hiểu nhầm và cách sửa",
      infographic: {
        kind: "table",
        headers: ["Nguồn hiểu nhầm", "Ví dụ", "Cách sửa"],
        rows: [
          ["Từ mơ hồ", "“Gửi sớm”, “ngắn thôi”", "“Trước 15h ngày 05/11”, “tối đa 120 từ”"],
          ["Viết tắt nội bộ", "“Tổng hợp PO-TBA”", "“PO-TBA = đơn đặt hàng trạm biến áp”"],
          ["Chỉ dẫn mâu thuẫn", "“Ngắn gọn nhưng đầy đủ mọi chi tiết”", "Chọn ưu tiên: “tối đa 1 trang, ưu tiên số liệu”"],
          ["Câu phủ định", "“Đừng dùng thuật ngữ”", "“Viết bằng ngôn ngữ phổ thông vì người đọc là khách hàng”"],
          ["Người đọc không rõ", "“Báo cáo cho sếp”", "“Cho trưởng phòng QA, cần quyết định trong họp thứ Hai”"],
        ],
      },
      caption: "Mỗi lần viết prompt quan trọng, rà nhanh 5 dòng này.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: chẩn đoán khi kết quả sai ý",
      mermaid: `flowchart TD
  A["Kết quả sai ý"] --> B["Claude đã hiểu câu nào khác ý mình?"]
  B --> C{"Nguồn gây hiểu nhầm"}
  C --> D["Từ mơ hồ: thay bằng con số, ngày giờ"]
  C --> E["Viết tắt: định nghĩa"]
  C --> F["Mâu thuẫn: chọn ưu tiên"]
  C --> G["Thiếu người đọc: nêu rõ"]
  D --> H["Sửa đúng câu đó và thử lại"]
  E --> H
  F --> H
  G --> H`,
      caption: "Sửa đúng câu gây hiểu nhầm hiệu quả hơn viết lại toàn bộ prompt.",
      alt: "Lưu đồ: kết quả sai ý, tìm câu Claude hiểu khác, xác định nguồn (từ mơ hồ, viết tắt, mâu thuẫn, thiếu người đọc), áp dụng cách sửa tương ứng rồi sửa đúng câu đó và thử lại.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Nhiều cách hiểu",
        content: "Tổng hợp PO-TBA tháng này cho sếp, ngắn gọn nhưng đầy đủ, không được sai số.",
        notes: ["PO-TBA là gì? Tháng này là tháng mấy?", "Sếp nào, cần gì?", "Ngắn gọn mâu thuẫn với đầy đủ; “không được sai số” không nói cách đảm bảo."],
      },
      good: {
        label: "Một cách hiểu",
        content:
          "Tổng hợp đơn đặt hàng trạm biến áp (PO-TBA) tháng 10/2026 từ file đính kèm cho trưởng phòng kinh doanh, để chốt kế hoạch sản xuất tháng 11. Tối đa 1 trang, ưu tiên: tổng giá trị, số đơn theo khách hàng, đơn giao trong tháng 11. Chỉ dùng số liệu trong file và đối chiếu tổng với dòng cuối file.",
        notes: ["Mọi từ mơ hồ được thay bằng thông tin cụ thể.", "Có ưu tiên khi không thể “đầy đủ mọi thứ”."],
      },
      takeaway: "Viết sao cho chỉ có một cách hiểu hợp lý.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: tìm chỗ gây hiểu nhầm",
      sim: {
        kind: "highlight",
        instruction: "Bấm chọn các đoạn có thể gây hiểu nhầm.",
        segments: [
          { id: "s1", text: "Bạn là nhân viên phòng kế hoạch.", target: false },
          { id: "s2", text: "Tổng hợp số liệu PO-TBA", target: true, why: "Viết tắt nội bộ chưa được định nghĩa." },
          { id: "s3", text: "tháng này", target: true, why: "Không rõ tháng nào — ghi rõ tháng/năm." },
          { id: "s4", text: "cho sếp.", target: true, why: "Người đọc không rõ và không rõ mục đích." },
          { id: "s5", text: "Dữ liệu ở file ke_hoach_T10.xlsx đính kèm.", target: false },
          { id: "s6", text: "Không được làm sai số.", target: true, why: "Chỉ nói điều cấm — nên nói cách làm: chỉ dùng số liệu trong file, đối chiếu tổng." },
          { id: "s7", text: "Trình bày ngắn gọn nhưng đầy đủ mọi chi tiết.", target: true, why: "Hai yêu cầu mâu thuẫn — chọn ưu tiên và giới hạn cụ thể." },
        ],
      },
      intro: "Đọc prompt dưới đây như một người mới vào công ty và đánh dấu mọi chỗ có thể hiểu theo nhiều cách.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: rà soát chống hiểu nhầm",
      steps: [
        { title: "Gạch chân từ mơ hồ", detail: "Thời gian, số lượng, chất lượng (“sớm”, “vài”, “tốt”) → thay bằng con số." },
        { title: "Định nghĩa viết tắt và thuật ngữ", detail: "Đặc biệt những từ có nghĩa khác bên ngoài công ty." },
        { title: "Tìm cặp yêu cầu xung đột", detail: "Nếu không thể đáp ứng cùng lúc, nêu ưu tiên." },
        { title: "Đổi câu phủ định thành câu khẳng định kèm lý do", detail: "“Viết bằng ngôn ngữ phổ thông vì người đọc là khách hàng” thay cho “đừng dùng thuật ngữ”." },
        {
          title: "Với việc lớn: cho phép hỏi lại hoặc nêu giả định trước",
          detail: "Bạn sửa giả định sai trước khi Claude làm cả việc.",
          code: { lang: "text", content: "Trước khi viết, hãy liệt kê các giả định bạn đang dùng và tối đa 3 câu hỏi nếu còn thiếu thông tin quan trọng. Chờ tôi trả lời rồi mới viết." },
        },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions: "Viết lại prompt: “Gửi sớm báo cáo MBA quý này cho sếp, ngắn thôi nhưng đủ hết, không được sai.” Loại bỏ mọi chỗ có thể hiểu nhầm.",
      placeholder: "Hãy … (MBA = …) … quý … năm … cho … để … Tối đa … Chỉ dùng …",
      rubric: [
        { id: "define", label: "Định nghĩa viết tắt", weight: 1, check: { kind: "regex", pattern: "(mba\\s*(=|la|:|\\()|may bien ap\\s*\\(mba\\)|viet tat)" }, pass: "Có định nghĩa MBA.", fail: "Định nghĩa MBA (máy biến áp)." },
        { id: "time", label: "Thời gian cụ thể", weight: 1, check: { kind: "regex", pattern: "(quy\\s*[1-4]|quy\\s*(i|ii|iii|iv)\\b|\\d{1,2}/\\d{4}|truoc\\s*\\d)" }, pass: "Có thời gian cụ thể.", fail: "Ghi rõ quý, năm và hạn gửi." },
        { id: "reader", label: "Người đọc cụ thể", weight: 1, check: { kind: "anyKeyword", keywords: ["trưởng phòng", "giám đốc", "ban giám đốc", "quản đốc", "người đọc"] }, pass: "Có người đọc cụ thể.", fail: "Thay “sếp” bằng chức danh và mục đích." },
        { id: "limit", label: "Giới hạn đo được, không mâu thuẫn", weight: 1, check: { kind: "regex", pattern: "(toi da|khong qua|\\d+\\s*(tu|trang|dong|y|muc))" }, pass: "Có giới hạn đo được.", fail: "Thay “ngắn thôi nhưng đủ hết” bằng giới hạn cụ thể và ưu tiên." },
        { id: "positive", label: "Câu khẳng định thay cho “không được sai”", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ dùng", "đối chiếu", "kiểm tra lại", "chỉ lấy"] }, pass: "Có cách đảm bảo chính xác.", fail: "Nói cách làm: chỉ dùng số liệu trong file, đối chiếu tổng." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Hãy soạn báo cáo sản lượng máy biến áp (MBA = máy biến áp) quý 4/2026 cho trưởng phòng kinh doanh, gửi trước 15h ngày 05/01, để chuẩn bị họp kế hoạch năm.\nTối đa 1 trang; ưu tiên: tổng sản lượng theo tháng, so với kế hoạch, 3 đơn hàng lớn nhất.\nChỉ dùng số liệu trong file đính kèm và đối chiếu tổng với dòng cuối của file.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "5 nguồn hiểu nhầm: từ mơ hồ, viết tắt nội bộ, chỉ dẫn mâu thuẫn, câu phủ định, người đọc không rõ.",
        "Sửa: con số và ngày giờ, định nghĩa thuật ngữ, chọn ưu tiên, câu khẳng định kèm lý do, nêu rõ người đọc.",
        "Việc lớn: cho phép Claude hỏi lại hoặc nêu giả định trước khi làm.",
        "Kết quả sai ý: đọc ngược để tìm đúng câu gây hiểu nhầm.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Lấy 3 prompt bạn đã dùng gần đây mà kết quả chưa như ý.",
      tasks: ["Với mỗi prompt, tìm câu Claude đã hiểu khác ý bạn.", "Xếp nó vào 1 trong 5 nguồn hiểu nhầm.", "Sửa đúng câu đó và thử lại."],
      deliverable: "Bảng: Prompt | Câu gây hiểu nhầm | Nguồn | Câu đã sửa | Kết quả mới.",
      checklist: ["Đã phân tích đủ 3 prompt", "Chỉ sửa câu gây hiểu nhầm", "Đã so sánh kết quả trước/sau"],
    },
  ],
};
