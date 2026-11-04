import type { Lesson } from "@/lib/types/content";

const BP = "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices";

export const lessonCauTrucPrompt: Lesson = {
  id: "ch03-l02",
  chapterId: "ch03",
  slug: "cau-truc-prompt-tot",
  title: "Cấu trúc prompt tốt",
  subtitle: "Năm nguyên tắc giúp prompt dễ hiểu: nói rõ, nêu lý do, chia bước khi thứ tự quan trọng, nói rõ phạm vi và chọn phong cách phù hợp đầu ra.",
  level: "beginner",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Nêu và nhận ra 5 nguyên tắc cấu trúc một prompt rõ ràng." },
    { id: "o2", text: "Viết chỉ dẫn thành các bước đánh số khi thứ tự hoặc sự đầy đủ của các bước là quan trọng." },
    { id: "o3", text: "Giải thích lý do (bối cảnh, động cơ) để Claude hiểu mục đích và tự áp dụng hợp lý." },
    { id: "o4", text: "Điều chỉnh phạm vi và phong cách prompt để kiểm soát độ dài, độ sâu và định dạng đầu ra." },
  ],
  concepts: [
    { id: "clarity", label: "Rõ ràng, trực tiếp" },
    { id: "motivation", label: "Nêu lý do / động cơ" },
    { id: "numbered-steps", label: "Bước đánh số" },
    { id: "explicit-scope", label: "Nói rõ phạm vi mong muốn" },
    { id: "style-matching", label: "Phong cách prompt ↔ đầu ra" },
    { id: "specificity", label: "Chi tiết cụ thể" },
    { id: "single-goal", label: "Một mục tiêu chính rõ ràng" },
  ],
  hints: [
    "Theo Anthropic: muốn Claude làm nhiều hơn mức tối thiểu, hãy yêu cầu rõ ràng thay vì mong nó tự suy ra.",
    "Khi thứ tự quan trọng (quy trình, checklist), viết thành 1., 2., 3.",
    "Một câu “vì sao” ngắn giúp Claude hiểu mục đích và áp dụng cho cả trường hợp bạn không nói tới.",
  ],
  sources: [
    { label: "Anthropic — Prompting best practices: Be clear and direct, Add context, Control the format", href: BP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Ở bài trước, bạn biết prompt cần đủ thông tin. Bài này bàn về **cách sắp xếp** thông tin đó để Claude đọc là hiểu ngay.",
        "**1. Rõ ràng, trực tiếp.** Viết điều bạn muốn bằng câu khẳng định, cụ thể. Anthropic nhấn mạnh: nếu bạn muốn Claude làm **nhiều hơn mức tối thiểu**, hãy nói rõ, đừng mong nó tự suy ra từ một yêu cầu mơ hồ.",
        "**2. Nêu lý do.** Giải thích vì sao bạn cần một điều, ví dụ “báo cáo sẽ được đọc trên điện thoại, nên mỗi ý tối đa 1 dòng”. Claude hiểu mục đích và áp dụng hợp lý cả ở những chỗ bạn không nói tới.",
        "**3. Chia bước khi thứ tự quan trọng.** Với quy trình, checklist, phân tích nhiều giai đoạn — viết chỉ dẫn thành **danh sách đánh số**.",
        "**4. Nói rõ phạm vi và định dạng.** Độ dài, mức chi tiết, ngôn ngữ, cấu trúc kết quả.",
        "**5. Phong cách prompt ảnh hưởng đầu ra.** Prompt viết toàn gạch đầu dòng và chữ đậm dễ nhận về câu trả lời cũng vậy. Muốn văn xuôi liền mạch, hãy viết prompt bằng văn xuôi và nói rõ điều đó.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Giao việc cho đồng nghiệp: “Gửi báo giá cho khách An Phát trước 15h, vì 16h họ họp chốt nhà cung cấp. Các bước: 1) lấy giá mới nhất, 2) áp chiết khấu 5%, 3) gửi kèm catalog.” — có mục tiêu, lý do, các bước và hạn chót.",
      },
      terms: [
        { term: "Motivation", definition: "Lý do đằng sau chỉ dẫn; giúp Claude hiểu mục đích để áp dụng đúng." },
        { term: "Scope", definition: "Phạm vi công việc: làm đến đâu, chi tiết đến mức nào." },
        { term: "Sequential steps", definition: "Chỉ dẫn theo thứ tự, thường viết dạng danh sách đánh số." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: một prompt được cấu trúc tốt",
      infographic: {
        kind: "annotated",
        label: "Prompt mẫu: chuẩn bị tài liệu đào tạo an toàn",
        lines: [
          { text: "Bạn là chuyên viên an toàn lao động của nhà máy.", note: "Vai trò", tone: "role" },
          { text: "Tài liệu dùng cho công nhân mới; nhiều người đọc trên điện thoại giờ nghỉ ca.", note: "Lý do → ảnh hưởng độ dài", tone: "context" },
          { text: "Hãy soạn hướng dẫn an toàn khi thay dầu máy biến áp.", note: "Mục tiêu chính", tone: "task" },
          { text: "1. Nêu 3 rủi ro chính.\n2. Liệt kê các bước theo đúng thứ tự thao tác.\n3. Kết thúc bằng checklist kiểm tra trước khi đóng điện.", note: "Bước đánh số vì thứ tự quan trọng", tone: "task" },
          { text: "Mỗi ý tối đa 1 dòng, tổng không quá 200 từ, tiếng Việt dễ hiểu.", note: "Phạm vi đo được", tone: "constraints" },
          { text: "Trình bày: tiêu đề + 3 mục có đánh số.", note: "Định dạng đầu ra", tone: "output" },
        ],
      },
      caption: "Mỗi dòng có một vai trò rõ ràng: ai, vì sao, làm gì, theo thứ tự nào, giới hạn và định dạng.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: xây prompt theo lớp",
      mermaid: `flowchart TD
  A["Mục tiêu: muốn nhận được gì?"] --> B["Lý do và người đọc"]
  B --> C{"Thứ tự các bước có quan trọng?"}
  C -- "Có" --> D["Viết danh sách bước đánh số"]
  C -- "Không" --> E["Một đoạn chỉ dẫn ngắn gọn"]
  D --> F["Phạm vi: độ dài, mức chi tiết, ngôn ngữ"]
  E --> F
  F --> G["Định dạng đầu ra và phong cách"]`,
      caption: "Đi từ mục tiêu đến định dạng; chỉ chia bước khi thật sự cần.",
      alt: "Lưu đồ: mục tiêu, lý do và người đọc, nếu thứ tự quan trọng thì viết bước đánh số, nếu không thì một đoạn ngắn, sau đó phạm vi rồi định dạng đầu ra.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Thiếu cấu trúc",
        content: "Làm checklist kiểm tra xe nâng, đầy đủ vào, đừng dài quá, cho công nhân.",
        notes: ["“Đầy đủ” và “đừng dài quá” mâu thuẫn, không đo được.", "Không có lý do, không rõ thứ tự kiểm tra."],
      },
      good: {
        label: "Có cấu trúc",
        content:
          "Soạn checklist kiểm tra xe nâng đầu ca cho công nhân vận hành. Checklist được dán cạnh xe nên cần đọc nhanh trong 2 phút. Sắp xếp theo thứ tự thao tác: 1) quan sát bên ngoài, 2) kiểm tra khi chưa nổ máy, 3) kiểm tra khi vận hành thử. Tối đa 12 mục, mỗi mục một dòng có ô ☐.",
        notes: ["Lý do (đọc trong 2 phút) giải thích giới hạn 12 mục.", "Thứ tự thao tác được nêu rõ."],
      },
      takeaway: "Cấu trúc tốt biến các yêu cầu cảm tính thành chỉ dẫn có thứ tự, có lý do và đo được.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn nguyên tắc sửa lỗi",
      sim: {
        kind: "choose",
        options: [
          { id: "clear", label: "Nói rõ, cụ thể hơn" },
          { id: "why", label: "Thêm lý do" },
          { id: "steps", label: "Chia bước đánh số" },
          { id: "scope", label: "Nói rõ phạm vi muốn nhiều hơn" },
          { id: "style", label: "Đổi phong cách prompt" },
        ],
        scenarios: [
          { id: "s1", text: "Claude làm checklist bảo dưỡng nhưng các bước bị đảo lộn thứ tự.", answer: "steps", why: "Khi thứ tự quan trọng, viết các bước thành danh sách đánh số." },
          { id: "s2", text: "Bạn muốn một dashboard có lọc, biểu đồ và xuất file, nhưng chỉ nhận được bản rất cơ bản.", answer: "scope", why: "Muốn nhiều hơn mức tối thiểu thì phải yêu cầu rõ ràng." },
          { id: "s3", text: "Bạn muốn văn xuôi liền mạch nhưng prompt viết toàn gạch đầu dòng và chữ đậm; kết quả cũng toàn gạch đầu dòng.", answer: "style", why: "Phong cách prompt ảnh hưởng phong cách đầu ra." },
          { id: "s4", text: "Bạn ghi “không dùng thuật ngữ” nhưng Claude vẫn dùng một số từ chuyên môn trong phần giải thích cho khách hàng.", answer: "why", why: "Nói lý do (người đọc là khách hàng không chuyên) giúp Claude áp dụng đúng tinh thần." },
          { id: "s5", text: "Prompt chỉ ghi “viết về lỗi sơn” — Claude không biết viết báo cáo, email hay hướng dẫn.", answer: "clear", why: "Nêu cụ thể nhiệm vụ và sản phẩm mong muốn." },
        ],
      },
      intro: "Mỗi tình huống là một kết quả chưa như ý. Chọn nguyên tắc giúp sửa đúng nguyên nhân.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tái cấu trúc một prompt",
      steps: [
        { title: "Viết ra mục tiêu chính trong một câu", detail: "“Tôi cần một … để …”. Nếu không viết được một câu, hãy tách thành nhiều prompt." },
        { title: "Thêm lý do và người đọc", detail: "Ai đọc, đọc ở đâu, dùng để làm gì — những điều này quyết định độ dài và giọng văn." },
        { title: "Chuyển chỉ dẫn có thứ tự thành danh sách đánh số", detail: "Giữ mỗi bước một hành động." },
        { title: "Ghi phạm vi bằng con số", detail: "Số mục, số từ, mức chi tiết; nếu muốn đầy đủ, nói rõ “bao gồm cả …”." },
        {
          title: "Chọn phong cách phù hợp đầu ra",
          detail: "Muốn văn xuôi: viết prompt bằng văn xuôi và yêu cầu rõ. Muốn bảng: mô tả cột.",
          code: { lang: "text", content: "Viết phần nhận xét thành 2 đoạn văn liền mạch, không dùng gạch đầu dòng, vì nội dung sẽ được dán vào email gửi ban giám đốc." },
        },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Tái cấu trúc prompt: “Viết quy trình xử lý khi khách hàng báo máy biến áp kêu to bất thường, chi tiết vào nhưng ngắn gọn.” Áp dụng: lý do, bước đánh số, phạm vi đo được và định dạng.",
      placeholder: "Hãy soạn quy trình … vì … 1. … 2. … Tối đa … Trình bày …",
      rubric: [
        { id: "why", label: "Có lý do / người đọc", weight: 1, check: { kind: "anyKeyword", keywords: ["vì", "để", "người đọc", "dùng cho", "nhân viên", "kỹ thuật viên"] }, pass: "Có lý do.", fail: "Thêm lý do: quy trình dùng cho ai, trong tình huống nào." },
        { id: "steps", label: "Có bước đánh số", weight: 1, check: { kind: "minMatches", pattern: "(^|\\n|\\s)[1-9][.)]\\s", value: 3 }, pass: "Có ít nhất 3 bước đánh số.", fail: "Viết các bước thành 1., 2., 3." },
        { id: "scope", label: "Phạm vi đo được", weight: 1, check: { kind: "regex", pattern: "(toi da|khong qua|it nhat)\\s*\\d|\\d+\\s*(tu|buoc|dong|y|muc|trang)" }, pass: "Có phạm vi đo được.", fail: "Thay “chi tiết nhưng ngắn gọn” bằng con số cụ thể." },
        { id: "format", label: "Định dạng đầu ra", weight: 1, check: { kind: "anyKeyword", keywords: ["trình bày", "bảng", "danh sách", "tiêu đề", "checklist", "định dạng"] }, pass: "Có định dạng.", fail: "Mô tả định dạng kết quả." },
        { id: "detail", label: "Đủ chi tiết", weight: 1, check: { kind: "minChars", value: 200 }, pass: "Đủ chi tiết.", fail: "Viết đầy đủ nội dung từng bước, không chỉ khung." },
        { id: "no-vague", label: "Bỏ yêu cầu mâu thuẫn", weight: 1, check: { kind: "noKeyword", keywords: ["chi tiết vào nhưng ngắn gọn", "ngắn gọn nhưng chi tiết"] }, pass: "Không còn yêu cầu mâu thuẫn.", fail: "Bỏ cụm “chi tiết nhưng ngắn gọn”." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Bạn là kỹ sư dịch vụ kỹ thuật. Hãy soạn quy trình xử lý khi khách hàng báo máy biến áp kêu to bất thường, dùng cho nhân viên trực tổng đài kỹ thuật (không phải kỹ sư) để hướng dẫn khách qua điện thoại.\n1. Hỏi thông tin ban đầu (mã máy, thời điểm, tải hiện tại).\n2. Hướng dẫn kiểm tra an toàn từ xa, không mở tủ.\n3. Xác định mức khẩn cấp.\n4. Quyết định cử kỹ thuật viên hay hẹn lịch.\nTối đa 6 bước, mỗi bước không quá 2 câu. Trình bày dạng danh sách đánh số kèm tiêu đề.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Viết rõ ràng, trực tiếp; muốn nhiều hơn mức tối thiểu thì yêu cầu rõ.",
        "Nêu lý do giúp Claude hiểu mục đích và áp dụng đúng cả ở chỗ bạn không nói tới.",
        "Thứ tự quan trọng → danh sách bước đánh số.",
        "Phạm vi bằng con số; tránh yêu cầu mâu thuẫn.",
        "Phong cách prompt ảnh hưởng phong cách đầu ra.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một quy trình bạn hay phải giải thích cho người mới (nhập liệu, kiểm tra hàng, báo cáo ca).",
      tasks: ["Viết prompt yêu cầu Claude soạn hướng dẫn quy trình đó theo 5 nguyên tắc.", "Gửi cho Claude, rồi đưa kết quả cho một đồng nghiệp mới đọc thử.", "Ghi lại chỗ đồng nghiệp còn thắc mắc và sửa prompt."],
      deliverable: "Prompt phiên bản cuối + hướng dẫn quy trình đã được người mới đọc thử.",
      checklist: ["Có lý do và người đọc", "Có bước đánh số", "Đã cho người mới đọc thử"],
    },
  ],
};
