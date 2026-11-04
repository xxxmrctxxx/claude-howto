import type { Lesson } from "@/lib/types/content";

const BP = "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices";

export const lessonRctco: Lesson = {
  id: "ch03-l03",
  chapterId: "ch03",
  slug: "rctco",
  title: "Role, Context, Task, Constraints, Output",
  subtitle: "Đi sâu từng thành phần: viết thế nào cho tốt, lỗi nào hay gặp và cách sửa.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Viết vai trò (Role) cụ thể, phù hợp chuyên môn và người đọc." },
    { id: "o2", text: "Viết bối cảnh (Context) đủ: tình huống, dữ liệu, người đọc, mục đích." },
    { id: "o3", text: "Viết nhiệm vụ (Task) bằng động từ rõ và ràng buộc (Constraints) đo được, khả thi, không mâu thuẫn." },
    { id: "o4", text: "Mô tả đầu ra (Output): cấu trúc, độ dài, ngôn ngữ, khung mẫu." },
  ],
  concepts: [
    { id: "role-specific", label: "Vai trò cụ thể" },
    { id: "system-prompt", label: "Vai trò trong system prompt" },
    { id: "context-audience", label: "Người đọc và mục đích" },
    { id: "context-data", label: "Dữ liệu nền" },
    { id: "task-verb", label: "Động từ nhiệm vụ" },
    { id: "constraint-feasible", label: "Ràng buộc khả thi" },
    { id: "constraint-positive", label: "Ràng buộc đo được, khẳng định" },
    { id: "output-structure", label: "Cấu trúc đầu ra" },
    { id: "output-template", label: "Khung mẫu đầu ra" },
  ],
  hints: [
    "Role tốt = chuyên môn + bối cảnh làm việc: “kỹ sư QA của nhà máy máy biến áp” tốt hơn “chuyên gia”.",
    "Context thường thiếu nhất ở 2 chỗ: ai đọc kết quả và dữ liệu nằm ở đâu.",
    "Muốn định dạng ổn định qua nhiều lần dùng, hãy đưa khung mẫu (template) đầu ra.",
  ],
  sources: [
    { label: "Anthropic — Prompting best practices: Give Claude a role, Be clear and direct", href: BP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Role** định hướng góc nhìn, thuật ngữ và giọng văn. Anthropic cho biết đặt vai trò trong **system prompt** (lời nhắn hệ thống, khi dùng API) giúp Claude tập trung hành vi cho đúng trường hợp sử dụng — chỉ một câu cũng tạo khác biệt. Trong khung chat, bạn đặt vai trò ở đầu tin nhắn.",
        "**Context** trả lời: chuyện gì đang xảy ra, **ai đọc** kết quả, dùng để làm gì, và **dữ liệu** nào cần dùng. Đây là phần Claude không thể tự biết.",
        "**Task** là một động từ chính + đối tượng: “so sánh…”, “trích xuất…”, “đề xuất…”. Nếu có nhiều việc độc lập, tách thành nhiều prompt.",
        "**Constraints** phải **đo được** (số từ, số mục), **khả thi** với dữ liệu có sẵn và **không mâu thuẫn** nhau. Ưu tiên viết dạng khẳng định.",
        "**Output** mô tả hình thức: bảng mấy cột, bao nhiêu đoạn, ngôn ngữ nào. Khi cần kết quả giống nhau qua nhiều lần, đưa luôn **khung mẫu** để Claude điền vào.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Đặt may một bộ đồng phục: thợ may (Role), dáng người và môi trường làm việc (Context), may áo khoác (Task), vải chống cháy, xong trước thứ Sáu (Constraints), size L, có logo ở ngực trái (Output).",
      },
      terms: [
        { term: "System prompt", definition: "Lời nhắn hệ thống đặt trước hội thoại khi dùng API, thường chứa vai trò và quy tắc chung." },
        { term: "Template", definition: "Khung mẫu đầu ra có sẵn tiêu đề/ô trống để Claude điền." },
        { term: "Feasible", definition: "Khả thi: làm được với dữ liệu và giới hạn đã cho." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bảng tra 5 thành phần",
      infographic: {
        kind: "table",
        headers: ["Thành phần", "Trả lời câu hỏi", "Ví dụ tốt", "Lỗi thường gặp"],
        rows: [
          ["Role", "Claude đóng vai ai?", "Kỹ sư QA nhà máy máy biến áp", "Quá chung (“chuyên gia”) hoặc phóng đại"],
          ["Context", "Chuyện gì, ai đọc, dữ liệu nào?", "Báo cáo cho trưởng xưởng, dữ liệu tuần 44 đính kèm", "Thiếu người đọc, thiếu dữ liệu"],
          ["Task", "Làm việc gì?", "So sánh số lỗi tuần 44 với tuần 43", "Động từ mơ hồ: “xem giúp”, “xử lý”"],
          ["Constraints", "Giới hạn nào?", "Tối đa 150 từ, chỉ dùng số liệu trong bảng", "Mâu thuẫn, không đo được, không khả thi"],
          ["Output", "Kết quả trông thế nào?", "Bảng 3 cột + 3 gạch đầu dòng nhận xét", "Không nói định dạng → mỗi lần một kiểu"],
        ],
      },
      caption: "Dùng bảng này như checklist mỗi khi viết prompt cho công việc quan trọng.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: kiểm tra từng thành phần",
      mermaid: `flowchart LR
  R["Role: cụ thể?"] --> C["Context: có người đọc và dữ liệu?"]
  C --> T["Task: một động từ chính?"]
  T --> K["Constraints: đo được, khả thi, không mâu thuẫn?"]
  K --> O["Output: có cấu trúc hoặc khung mẫu?"]
  O --> D["Prompt sẵn sàng"]`,
      caption: "Năm câu hỏi kiểm tra nhanh trước khi gửi.",
      alt: "Chuỗi kiểm tra: vai trò cụ thể, bối cảnh có người đọc và dữ liệu, nhiệm vụ một động từ chính, ràng buộc đo được khả thi không mâu thuẫn, đầu ra có cấu trúc, rồi prompt sẵn sàng.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Thành phần yếu",
        content: "Bạn là chuyên gia. Xem giúp số liệu sản xuất. Viết hay, không dài.",
        notes: ["Role quá chung.", "Không có dữ liệu, người đọc.", "“Xem giúp” không phải nhiệm vụ rõ.", "Ràng buộc cảm tính, chỉ nói điều cấm."],
      },
      good: {
        label: "Thành phần tốt",
        content:
          "Bạn là kỹ sư kế hoạch sản xuất. Bảng dưới là sản lượng 3 ca ngày 02/11, dùng cho họp giao ban với quản đốc. Hãy so sánh sản lượng thực tế với kế hoạch của từng ca. Chỉ dùng số liệu trong bảng, tối đa 120 từ. Trình bày: bảng (Ca | Kế hoạch | Thực tế | Chênh lệch %) và 2 gạch đầu dòng nhận xét.",
        notes: ["Mỗi thành phần đều cụ thể và kiểm tra được."],
      },
      takeaway: "Sửa từng thành phần một — thường chỉ cần thêm người đọc, dữ liệu và một động từ rõ là kết quả đã khác hẳn.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: hoàn thiện prompt báo cáo ca",
      sim: {
        kind: "prompt-lab",
        brief: "Quản đốc cần bản tóm tắt sản lượng và sự cố của ca đêm 01/11 để họp giao ban 7h sáng. Dữ liệu: bảng sản lượng 3 chuyền và nhật ký sự cố.",
        starter: { role: "Bạn là chuyên gia.", context: "Ca đêm.", task: "Xem giúp báo cáo", constraints: "Đừng dài quá.", output: "" },
        expectations: [
          { block: "context", keywords: ["ca đêm", "quản đốc", "giao ban", "sản lượng", "sự cố", "bảng"], ok: "Bối cảnh có người đọc và dữ liệu.", missing: "Nêu người đọc (quản đốc), mục đích (giao ban) và dữ liệu (sản lượng, sự cố)." },
          { block: "output", keywords: ["bảng", "gạch đầu dòng", "cột"], ok: "Định dạng cụ thể.", missing: "Mô tả bảng hoặc số gạch đầu dòng." },
        ],
        reference: {
          role: "Bạn là trưởng ca sản xuất của xưởng lắp ráp.",
          context: "Dưới đây là bảng sản lượng 3 chuyền và nhật ký sự cố ca đêm 01/11. Bản tóm tắt dùng cho quản đốc trong buổi giao ban 7h sáng.",
          task: "Hãy tổng hợp sản lượng từng chuyền so với kế hoạch và tóm tắt các sự cố chính.",
          constraints: "Chỉ dùng số liệu trong bảng và nhật ký; tối đa 120 từ; nêu tối đa 3 sự cố quan trọng nhất.",
          output: "Trình bày: bảng 4 cột (Chuyền | Kế hoạch | Thực tế | %) và 3 gạch đầu dòng sự cố.",
        },
      },
      intro: "Sửa từng ô thành phần cho đến khi đạt từ 80%. Bạn có thể xem đáp án tham khảo sau khi đánh giá.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: checklist 5 thành phần",
      steps: [
        { title: "Role: chuyên môn + nơi làm việc", detail: "“Bạn là kế toán thuế của công ty sản xuất” thay vì “Bạn là chuyên gia”." },
        { title: "Context: người đọc + mục đích + dữ liệu", detail: "Ba yếu tố này quyết định giọng văn, độ sâu và căn cứ của câu trả lời." },
        { title: "Task: một động từ chính", detail: "Nếu thấy chữ “và” nối hai việc lớn, cân nhắc tách prompt." },
        { title: "Constraints: đo được, khả thi, nhất quán", detail: "Kiểm tra: dữ liệu có đủ để làm không? Các giới hạn có xung đột nhau không?" },
        {
          title: "Output: cấu trúc hoặc khung mẫu",
          detail: "Khi cần định dạng ổn định qua nhiều lần dùng, dán khung mẫu.",
          code: { lang: "text", content: "Trình bày theo đúng khung sau:\nTIÊU ĐỀ: Báo cáo ca <ngày>\n1. Sản lượng: <bảng>\n2. Sự cố: <tối đa 3 gạch đầu dòng>\n3. Việc cần quyết định: <1 câu>" },
        },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions: "Viết prompt đủ 5 thành phần để Claude soạn biên bản sự cố mất điện xưởng sơn ngày 30/10 (dữ liệu: nhật ký vận hành và lời khai 2 công nhân).",
      placeholder: "Bạn là … Dưới đây là … Hãy … Chỉ dùng … Trình bày …",
      rubric: [
        { id: "role", label: "Role cụ thể", weight: 1, check: { kind: "regex", pattern: "ban la .{8,}" }, pass: "Có vai trò cụ thể.", fail: "Thêm vai trò có chuyên môn: “Bạn là kỹ sư điện của nhà máy…”." },
        { id: "context", label: "Context có dữ liệu và người đọc", weight: 1, check: { kind: "allGroups", groups: [["nhật ký", "lời khai", "dữ liệu", "dưới đây"], ["người đọc", "ban giám đốc", "dùng cho", "gửi", "để", "lưu hồ sơ"]] }, pass: "Có dữ liệu và mục đích.", fail: "Nêu dữ liệu (nhật ký, lời khai) và ai đọc/dùng để làm gì." },
        { id: "task", label: "Task có động từ rõ", weight: 1, check: { kind: "anyKeyword", keywords: ["soạn", "lập", "viết", "tổng hợp"] }, pass: "Có nhiệm vụ rõ.", fail: "Nêu rõ: soạn/lập biên bản sự cố." },
        { id: "constraints", label: "Constraints đo được", weight: 1, check: { kind: "regex", pattern: "(chi dung|toi da|khong qua|khong suy doan|\\d+\\s*(tu|muc|trang))" }, pass: "Có ràng buộc đo được.", fail: "Thêm ràng buộc: chỉ dùng dữ liệu cung cấp, độ dài tối đa…" },
        { id: "output", label: "Output có cấu trúc", weight: 1, check: { kind: "anyKeyword", keywords: ["mục", "bảng", "trình bày", "khung", "tiêu đề"] }, pass: "Có cấu trúc đầu ra.", fail: "Mô tả các mục của biên bản." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Bạn là kỹ sư điện của nhà máy, phụ trách an toàn điện.\nDưới đây là nhật ký vận hành và lời khai của 2 công nhân về sự cố mất điện xưởng sơn ngày 30/10. Biên bản dùng để gửi ban giám đốc và lưu hồ sơ an toàn.\nHãy soạn biên bản sự cố.\nChỉ dùng thông tin trong tài liệu, không suy đoán nguyên nhân khi chưa có bằng chứng; tối đa 1 trang.\nTrình bày theo các mục: 1) Thời gian – địa điểm, 2) Diễn biến, 3) Thiệt hại, 4) Nguyên nhân sơ bộ, 5) Kiến nghị.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Role: chuyên môn + bối cảnh làm việc; với API đặt trong system prompt.",
        "Context: tình huống, người đọc, mục đích, dữ liệu.",
        "Task: một động từ chính; nhiều việc độc lập thì tách prompt.",
        "Constraints: đo được, khả thi với dữ liệu, không mâu thuẫn, ưu tiên câu khẳng định.",
        "Output: cấu trúc rõ; cần ổn định thì dùng khung mẫu.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Tạo một “prompt mẫu” (template) cho báo cáo bạn làm định kỳ.",
      tasks: ["Viết prompt đủ 5 thành phần, chỗ thay đổi mỗi kỳ để dạng <…>.", "Dùng thử 2 kỳ liên tiếp và so sánh định dạng kết quả.", "Chia sẻ template cho đồng nghiệp cùng nhóm."],
      deliverable: "Một prompt template dùng lại được + 2 kết quả thử.",
      checklist: ["Đủ 5 thành phần", "Có khung mẫu đầu ra", "Đã dùng thử 2 lần"],
    },
  ],
};
