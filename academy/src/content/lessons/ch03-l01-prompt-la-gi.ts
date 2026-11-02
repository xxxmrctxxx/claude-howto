import type { Lesson } from "@/lib/types/content";

const GOOD_8D =
  "Bạn là kỹ sư QA. Hãy viết báo cáo 8D về lỗi rò dầu máy biến áp, trình bày song ngữ Việt - Anh, gồm nguyên nhân, hành động khắc phục và phòng ngừa.";

export const lessonPromptLaGi: Lesson = {
  id: "ch03-l01",
  chapterId: "ch03",
  slug: "prompt-la-gi",
  title: "Prompt là gì?",
  subtitle: "Giao việc cho Claude giống như giao việc cho một nhân viên giỏi nhưng mới vào làm.",
  level: "beginner",
  estimatedMinutes: 25,
  updatedAt: "2026-11-02",
  objectives: [
    { id: "o1", text: "Giải thích prompt là gì bằng ví dụ giao việc hằng ngày." },
    { id: "o2", text: "Nhận ra 5 thành phần Role, Context, Task, Constraints, Output trong một prompt." },
    { id: "o3", text: "Phân biệt prompt mơ hồ với prompt rõ ràng và chỉ ra chỗ còn thiếu." },
    { id: "o4", text: "Viết lại một prompt mơ hồ thành prompt đủ 5 thành phần." },
    { id: "o5", text: "Áp dụng vòng lặp kiểm tra – cải tiến prompt cho công việc thật." },
  ],
  concepts: [
    { id: "prompt-definition", label: "Định nghĩa prompt" },
    { id: "components", label: "5 thành phần của prompt" },
    { id: "role", label: "Role – vai trò" },
    { id: "context", label: "Context – bối cảnh" },
    { id: "task", label: "Task – nhiệm vụ" },
    { id: "constraints", label: "Constraints – ràng buộc" },
    { id: "output-format", label: "Output – định dạng kết quả" },
    { id: "specificity", label: "Độ cụ thể, tránh mơ hồ" },
    { id: "positive-instructions", label: "Nói điều cần làm thay vì điều cấm" },
    { id: "colleague-test", label: "Phép thử đồng nghiệp" },
    { id: "iteration", label: "Vòng lặp cải tiến prompt" },
  ],
  hints: [
    "Đọc lại prompt và tự hỏi: một đồng nghiệp chưa biết gì về việc này có làm được ngay không?",
    "Thiếu Context là lỗi phổ biến nhất: Claude không biết công ty, khách hàng hay dữ liệu của bạn nếu bạn không đưa vào.",
    "Thay từ cảm tính như “hay”, “ngắn thôi” bằng tiêu chí đo được: “tối đa 120 từ”, “3 gạch đầu dòng”.",
    "Mô tả Output trước tiên: bạn muốn nhận bảng, email, checklist hay đoạn văn?",
  ],
  sources: [
    {
      label: "Anthropic — Prompting best practices (Be clear and direct)",
      href: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
    },
    {
      label: "Anthropic — Prompt engineering overview",
      href: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
    },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Prompt** là toàn bộ những gì bạn gửi cho Claude: câu hỏi, yêu cầu, tài liệu đính kèm, ví dụ mẫu. Claude chỉ biết những gì có trong cuộc hội thoại — nó không tự biết công ty, khách hàng hay tiêu chuẩn nội bộ của bạn.",
        "Anthropic khuyên hãy coi Claude như **một nhân viên mới rất giỏi nhưng chưa biết quy trình và thói quen làm việc của bạn**. Bạn giải thích càng chính xác điều mình muốn, kết quả càng tốt.",
        "Một prompt đầy đủ thường trả lời 5 câu hỏi: Claude đóng vai ai (**Role**)? Tình huống là gì (**Context**)? Cần làm việc gì (**Task**)? Có giới hạn hay yêu cầu bắt buộc nào (**Constraints**)? Kết quả trình bày ra sao (**Output**)?",
        "Không phải prompt nào cũng cần đủ 5 phần. Hỏi “Thủ đô của Pháp là gì?” thì một câu là đủ. Nhưng với công việc thật — báo cáo, email, phân tích số liệu — thiếu phần nào thì Claude phải **đoán** phần đó, và đoán thì dễ sai ý bạn.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Prompt giống như việc bạn giao nhiệm vụ cho một nhân viên. Bạn nói càng rõ, nhân viên càng dễ thực hiện đúng. Nói “Làm báo cáo đi” thì nhân viên sẽ hỏi lại: báo cáo gì, cho ai, khi nào, dài bao nhiêu? Claude cũng cần đúng những thông tin đó.",
      },
      terms: [
        { term: "Prompt", definition: "Nội dung bạn gửi cho Claude để yêu cầu nó làm một việc." },
        { term: "Role", definition: "Vai trò, góc nhìn chuyên môn bạn muốn Claude đảm nhận." },
        { term: "Context", definition: "Bối cảnh, dữ liệu nền, lý do — những điều Claude không thể tự biết." },
        { term: "Task", definition: "Việc cụ thể cần làm, nên bắt đầu bằng động từ: viết, tóm tắt, so sánh…" },
        { term: "Constraints", definition: "Ràng buộc: độ dài, phạm vi, ngôn ngữ, điều bắt buộc phải có." },
        { term: "Output", definition: "Hình thức kết quả: bảng, email, checklist, JSON, số gạch đầu dòng…" },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: giải phẫu hai prompt",
      visual: "prompt-anatomy",
      caption:
        "Cùng một mong muốn “có báo cáo”, nhưng prompt bên trái chỉ có Task; prompt bên phải phủ đủ 5 thành phần nên Claude không phải đoán.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: prompt → kết quả → cải tiến",
      mermaid: `flowchart TD
  A["Bạn xác định mục tiêu và tiêu chí đạt"] --> B["Viết prompt: Role, Context, Task, Constraints, Output"]
  B --> C["Claude đọc toàn bộ prompt và tạo câu trả lời"]
  C --> D{"Kết quả đạt tiêu chí?"}
  D -- "Đạt" --> E["Dùng kết quả, lưu prompt làm mẫu"]
  D -- "Chưa đạt" --> F["Tìm phần còn thiếu hoặc mơ hồ"]
  F --> B`,
      caption: "Viết prompt là một vòng lặp: đặt tiêu chí trước, kiểm tra kết quả, rồi bổ sung đúng phần còn thiếu.",
      alt: "Lưu đồ: xác định mục tiêu, viết prompt 5 thành phần, Claude trả lời, kiểm tra tiêu chí. Nếu đạt thì dùng và lưu mẫu, nếu chưa đạt thì tìm phần thiếu và quay lại viết prompt.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Prompt chưa tốt",
        content: "Viết báo cáo.",
        notes: [
          "Không biết báo cáo về việc gì, cho ai đọc.",
          "Không có dữ liệu hay bối cảnh — Claude phải tự bịa tình huống.",
          "Không có định dạng, độ dài, ngôn ngữ.",
        ],
      },
      good: {
        label: "Prompt tốt",
        content: GOOD_8D,
        notes: [
          "Role: kỹ sư QA → dùng đúng thuật ngữ chất lượng.",
          "Task + Context: báo cáo 8D về lỗi rò dầu máy biến áp.",
          "Output: song ngữ Việt – Anh; Constraints: phải có nguyên nhân, khắc phục, phòng ngừa.",
        ],
      },
      takeaway:
        "Prompt tốt chưa chắc dài, nhưng phải trả lời được các câu hỏi mà một người làm thay bạn sẽ hỏi. Muốn tốt hơn nữa, hãy đính kèm dữ liệu thật của sự cố (ngày phát hiện, số lượng, kết quả kiểm tra).",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: lắp ráp một prompt",
      widget: "prompt-assembler",
      intro:
        "Kéo từng mảnh câu vào đúng ô thành phần (hoặc chọn mảnh rồi bấm vào ô). Có 2 mảnh “gây nhiễu” không thuộc ô nào — hãy để chúng lại. Bấm Kiểm tra để xem phân tích.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: viết prompt đầu tiên",
      steps: [
        {
          title: "Bắt đầu từ kết quả (Output)",
          detail:
            "Tự hỏi: mình muốn cầm trên tay thứ gì? Ví dụ: “một bảng tổng hợp lỗi theo công đoạn, kèm 3 nhận xét”. Viết điều này ra trước.",
        },
        {
          title: "Chọn vai trò (Role)",
          detail: "Một câu là đủ: “Bạn là chuyên viên phân tích chất lượng của nhà máy sản xuất máy biến áp.”",
        },
        {
          title: "Đưa bối cảnh và dữ liệu (Context)",
          detail:
            "Nêu lý do và người đọc, rồi dán dữ liệu. Khi prompt dài, bọc dữ liệu trong thẻ như <du_lieu>…</du_lieu> để Claude tách bạch dữ liệu với chỉ dẫn.",
        },
        {
          title: "Nêu nhiệm vụ bằng động từ cụ thể (Task)",
          detail: "“Tổng hợp”, “so sánh”, “đề xuất” rõ ràng hơn nhiều so với “xem giúp” hay “làm gì đó với file này”.",
        },
        {
          title: "Thêm ràng buộc đo được (Constraints)",
          detail:
            "Thay “ngắn thôi” bằng “tối đa 150 từ”. Nói điều cần làm (“viết bằng tiếng Việt, dùng thuật ngữ ISO 9001”) thay vì chỉ nói điều cấm.",
        },
        {
          title: "Kiểm tra bằng phép thử đồng nghiệp rồi gửi",
          detail:
            "Đưa prompt cho một đồng nghiệp chưa biết việc này đọc. Nếu họ phải hỏi lại, Claude cũng sẽ bối rối. Sau khi nhận kết quả, so với tiêu chí và sửa đúng phần còn thiếu.",
          code: {
            lang: "text",
            content:
              "Bạn là chuyên viên phân tích chất lượng của nhà máy sản xuất máy biến áp.\nBáo cáo này dùng cho cuộc họp giao ban QA sáng thứ Hai; người đọc là trưởng các xưởng.\n<du_lieu>\n(dán bảng lỗi tuần 44 vào đây)\n</du_lieu>\nHãy tổng hợp số lỗi theo công đoạn và chỉ ra 3 công đoạn có tỷ lệ lỗi cao nhất.\nChỉ dùng số liệu trong bảng, không suy đoán thêm. Tối đa 150 từ, viết bằng tiếng Việt.\nTrình bày: một bảng 3 cột (Công đoạn | Số lỗi | Tỷ lệ %), sau đó 3 gạch đầu dòng nhận xét.",
          },
        },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đồng nghiệp gửi cho Claude prompt: “Tóm tắt file Excel này.” kèm dữ liệu bên dưới. Hãy viết lại thành prompt đầy đủ 5 thành phần. Bạn có thể dán dữ liệu mẫu vào prompt.",
      sampleData: {
        name: "loi_tuan_44.csv",
        content:
          "Ngay,Cong_doan,San_pham,Loai_loi,So_luong\n28/10,Quan day,MBA 250kVA,Chap vong,2\n28/10,Say chan khong,MBA 250kVA,Do am cao,1\n29/10,Lap rap vo,MBA 630kVA,Ro dau mat bich,3\n30/10,Lap rap vo,MBA 250kVA,Ro dau mat bich,2\n31/10,Thu nghiem,MBA 630kVA,Ton hao vuot chuan,1\n01/11,Son phu,MBA 250kVA,Bong son,4",
      },
      placeholder: "Bạn là ... Bối cảnh: ... Hãy ... Yêu cầu: ... Trình bày: ...",
      rubric: [
        {
          id: "role",
          label: "Có vai trò (Role)",
          weight: 1,
          check: { kind: "anyKeyword", keywords: ["bạn là", "đóng vai", "với vai trò", "vai trò", "you are", "act as"] },
          pass: "Đã gán vai trò cho Claude.",
          fail: "Thêm một câu vai trò, ví dụ “Bạn là kỹ sư QA của nhà máy…”.",
        },
        {
          id: "context",
          label: "Có bối cảnh/dữ liệu (Context)",
          weight: 1,
          check: {
            kind: "anyKeyword",
            keywords: ["dữ liệu", "bảng", "file", "tuần", "excel", "csv", "báo cáo này", "người đọc", "cuộc họp", "số liệu"],
          },
          pass: "Đã nêu bối cảnh hoặc dữ liệu nền.",
          fail: "Nói rõ dữ liệu là gì, dùng cho ai, để làm gì (ví dụ: “bảng lỗi tuần 44, dùng cho họp giao ban”).",
        },
        {
          id: "task",
          label: "Nhiệm vụ rõ bằng động từ (Task)",
          weight: 1,
          check: {
            kind: "anyKeyword",
            keywords: ["tổng hợp", "tóm tắt", "phân tích", "so sánh", "liệt kê", "xác định", "đề xuất", "tính", "chỉ ra", "thống kê"],
          },
          pass: "Nhiệm vụ có động từ cụ thể.",
          fail: "Viết nhiệm vụ bằng động từ cụ thể: tổng hợp, so sánh, chỉ ra…",
        },
        {
          id: "constraints",
          label: "Có ràng buộc đo được (Constraints)",
          weight: 1,
          check: {
            kind: "regex",
            pattern:
              "(toi da|khong qua|it nhat|chi dung|chi dua|chi tap trung|gioi han|khong suy doan|\\d+\\s*(tu|dong|y|cau|gach|muc|cong doan|trang))",
          },
          pass: "Có ràng buộc cụ thể, đo được.",
          fail: "Thêm ràng buộc đo được: độ dài (tối đa 150 từ), phạm vi (chỉ dùng số liệu trong bảng)…",
        },
        {
          id: "output",
          label: "Có định dạng đầu ra (Output)",
          weight: 1,
          check: {
            kind: "anyKeyword",
            keywords: ["bảng", "cột", "gạch đầu dòng", "danh sách", "trình bày", "định dạng", "biểu đồ", "đoạn văn", "tiêu đề"],
          },
          pass: "Đã mô tả hình thức kết quả.",
          fail: "Mô tả kết quả mong muốn: bảng mấy cột, bao nhiêu gạch đầu dòng…",
        },
        {
          id: "clarity",
          label: "Đủ chi tiết để người khác làm được",
          weight: 1,
          check: { kind: "minChars", value: 160 },
          pass: "Prompt đủ chi tiết.",
          fail: "Prompt còn quá ngắn — một đồng nghiệp đọc vào chưa thể làm ngay.",
        },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Bạn là kỹ sư QA của nhà máy sản xuất máy biến áp.\nDưới đây là bảng lỗi tuần 44 (file loi_tuan_44.csv), dùng cho cuộc họp giao ban QA với trưởng các xưởng.\n<du_lieu>…dán dữ liệu…</du_lieu>\nHãy tổng hợp tổng số lỗi theo công đoạn và theo loại lỗi, rồi chỉ ra công đoạn cần ưu tiên cải tiến.\nChỉ dùng số liệu trong bảng, không suy đoán nguyên nhân khi chưa có dữ liệu. Tối đa 150 từ, viết bằng tiếng Việt.\nTrình bày: bảng 3 cột (Công đoạn | Số lỗi | Loại lỗi chính), sau đó 3 gạch đầu dòng đề xuất.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Prompt là mọi thứ bạn gửi cho Claude; Claude chỉ biết những gì có trong cuộc hội thoại.",
        "Hãy coi Claude như một nhân viên mới rất giỏi nhưng chưa biết quy trình của bạn — nói càng rõ, làm càng đúng.",
        "5 thành phần: Role (vai trò), Context (bối cảnh), Task (nhiệm vụ), Constraints (ràng buộc), Output (định dạng).",
        "Thay từ cảm tính bằng tiêu chí đo được; nói điều cần làm thay vì chỉ nói điều cấm.",
        "Phép thử đồng nghiệp: người không biết việc mà làm được ngay thì prompt đã đủ rõ.",
        "Viết prompt là vòng lặp: đặt tiêu chí → gửi → kiểm tra → bổ sung phần thiếu.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context:
        "Chọn một việc bạn làm lặp lại mỗi tuần: báo cáo, email cho khách hàng, biên bản họp, tổng hợp số liệu Excel…",
      tasks: [
        "Viết prompt một dòng như bạn vẫn hay gõ, gửi cho Claude và lưu lại kết quả.",
        "Viết lại prompt đủ 5 thành phần (dùng Prompt Builder trong Phòng thực hành nếu cần).",
        "Gửi prompt mới, so sánh hai kết quả theo 3 tiêu chí: đúng ý, đúng định dạng, ít phải sửa.",
        "Lưu prompt tốt nhất làm mẫu dùng lại cho tuần sau.",
      ],
      deliverable: "Một prompt mẫu cho công việc thật của bạn + ghi chú so sánh trước/sau.",
      checklist: [
        "Prompt có đủ Role, Context, Task, Constraints, Output",
        "Đã gửi thử cả hai phiên bản và so sánh",
        "Đã ghi lại điều mình học được (vào ô Ghi chú của bài)",
      ],
    },
  ],
};
