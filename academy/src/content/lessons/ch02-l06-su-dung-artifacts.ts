import type { Lesson } from "@/lib/types/content";

const AR = "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them";
const SH = "https://support.claude.com/en/articles/9547008-share-artifacts";

export const lessonSuDungArtifacts: Lesson = {
  id: "ch02-l06",
  chapterId: "ch02",
  slug: "su-dung-artifacts",
  title: "Sử dụng Artifacts",
  subtitle: "Artifact là sản phẩm Claude làm ra để bạn đưa cho người khác — tài liệu, trang web, sơ đồ, công cụ nhỏ — mở ở cửa sổ riêng, sửa được, xuất được.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích artifact là gì và khi nào Claude tạo artifact thay vì trả lời trong chat." },
    { id: "o2", text: "Yêu cầu tạo artifact cụ thể và tìm lại artifact đã làm." },
    { id: "o3", text: "Chỉnh sửa artifact: nhờ Claude sửa, Edit with Claude trên đoạn đã chọn, sửa tin nhắn trước, Try fixing with Claude khi lỗi." },
    { id: "o4", text: "Xuất artifact ra file và nắm các lưu ý: riêng tư mặc định, cần bật khả năng tạo file, thận trọng với code từ người lạ." },
  ],
  concepts: [
    { id: "artifact-def", label: "Artifact" },
    { id: "artifact-criteria", label: "Khi nào thành artifact" },
    { id: "artifact-types", label: "Các loại artifact" },
    { id: "side-window", label: "Cửa sổ bên cạnh chat" },
    { id: "artifacts-library", label: "Tab Artifacts" },
    { id: "ask-to-edit", label: "Nhờ Claude sửa" },
    { id: "edit-with-claude", label: "Edit with Claude" },
    { id: "try-fixing", label: "Try fixing with Claude" },
    { id: "export-formats", label: "Xuất file" },
    { id: "private-default", label: "Riêng tư mặc định" },
    { id: "capability-required", label: "Cần bật code execution and file creation" },
    { id: "plan-availability", label: "Có trên mọi gói" },
  ],
  hints: [
    "Artifact: nội dung đáng kể, tự đứng được, thường hơn 15 dòng, sẽ được sửa hoặc dùng lại.",
    "Mọi artifact nằm trong tab Artifacts ở thanh bên.",
    "Artifact mặc định là riêng tư cho tới khi bạn chia sẻ.",
  ],
  sources: [
    { label: "Claude Help Center — What are artifacts and how do I use them?", href: AR },
    { label: "Claude Help Center — Share artifacts", href: SH },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Theo Help Center, artifact là **“bất cứ thứ gì Claude làm cho bạn mà bạn sẽ đưa ra trước người khác”**: tài liệu, đoạn code, trang web một trang, hình ảnh, sơ đồ và lưu đồ, dashboard, công cụ tương tác nhỏ. Artifact mở trong **cửa sổ riêng bên cạnh cuộc trò chuyện**, nơi bạn xem, sửa, quay lại sau và chia sẻ. Mọi artifact được lưu trong **tab Artifacts** ở thanh bên (trên điện thoại cũng có tab Artifacts).",
        "Claude thường tạo artifact khi nội dung **đáng kể và tự đứng được** (thường **hơn 15 dòng**), **có khả năng được sửa, dùng lại bên ngoài cuộc trò chuyện**, và **đọc hiểu được mà không cần đọc cả cuộc trò chuyện**. Câu trả lời ngắn, giải thích nhanh thì vẫn nằm trong chat. Muốn chắc chắn có artifact, hãy nói rõ: “tạo một trang web…”, “soạn tài liệu… để in”. Ngoài ra còn có các mẫu: **Docs, Slides, Design** (mọi gói), Dashboards và Motion (bản beta, theo gói).",
        "**Sửa artifact**: cách đơn giản nhất là **nhờ Claude sửa** trong chat (“đổi màu tiêu đề”, “thêm cột Hạn”). Với tài liệu/Markdown, **bôi đen đoạn văn → Edit with Claude** rồi mô tả thay đổi. Muốn thử hướng khác mà không mất bản cũ, **sửa một tin nhắn trước đó** để tạo phiên bản riêng. Nếu artifact báo lỗi, bấm **Try fixing with Claude** — không phải lúc nào cũng sửa được, khi đó hãy mô tả lỗi cụ thể hơn.",
        "**Xuất và lưu ý**: tài liệu (Docs) xuất được sang **Word, PDF, Markdown, Google Docs**; bản trình chiếu sang **PowerPoint, PDF** hoặc Google Slides. Artifact **mặc định là riêng tư** — chỉ người được bạn chia sẻ mới mở được (bài chia sẻ ở Chương 4). Tạo artifact có trên **mọi gói, kể cả Free**, nhưng cần bật **Cloud code execution and file creation** trong *Settings > Capabilities* (mặc định đang bật; giao diện mới có thể ghi là *Create and edit files*). Code artifact do người lạ gửi cần được xem xét thận trọng trước khi dùng.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Trò chuyện với Claude giống họp với một trợ lý; artifact là bản tài liệu trợ lý đặt lên bàn bên cạnh — bạn chỉnh trực tiếp, in ra, hoặc gửi cho sếp. Câu trả lời miệng thì nằm trong biên bản họp (chat); thứ cần đưa cho người khác thì thành tài liệu riêng.",
      },
      terms: [
        { term: "Artifact", definition: "Sản phẩm Claude làm ra (tài liệu, trang web, sơ đồ, công cụ…) mở ở cửa sổ riêng, sửa và chia sẻ được." },
        { term: "Tab Artifacts", definition: "Nơi lưu mọi artifact bạn đã tạo, nằm ở thanh bên." },
        { term: "Edit with Claude", definition: "Bôi đen một đoạn trong tài liệu và mô tả thay đổi để Claude sửa đúng đoạn đó." },
        { term: "Try fixing with Claude", definition: "Nút nhờ Claude sửa khi artifact gặp lỗi; không bảo đảm thành công." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: những gì có thể là artifact",
      infographic: {
        kind: "cards",
        cards: [
          { title: "Tài liệu", body: "Quy trình, báo cáo, thư — xuất Word, PDF, Markdown.", foot: "Mẫu Docs", icon: "file" },
          { title: "Trang web một trang", body: "Giới thiệu, biểu mẫu, trang hướng dẫn.", foot: "Xem trực tiếp bên cạnh chat", icon: "globe" },
          { title: "Sơ đồ, lưu đồ", body: "Quy trình xử lý, sơ đồ tổ chức.", foot: "Đưa vào báo cáo", icon: "layers" },
          { title: "Dashboard", body: "Bảng số liệu và biểu đồ.", foot: "Dashboards (beta) cho gói trả phí", icon: "chart" },
          { title: "Công cụ nhỏ", body: "Máy tính chi phí, checklist bấm được.", foot: "Tương tác ngay trong cửa sổ", icon: "wrench" },
          { title: "Bản trình chiếu", body: "Slide cho buổi họp.", foot: "Xuất PowerPoint, PDF", icon: "target" },
        ],
      },
      caption: "Theo bài What are artifacts của Help Center (đối chiếu 03/11/2026). Tính năng beta và theo gói có thể thay đổi.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng đời một artifact",
      mermaid: `flowchart LR
  A["Yêu cầu cụ thể"] --> B["Artifact mở bên cạnh chat"]
  B --> C{"Đạt yêu cầu?"}
  C -->|"Chưa"| D["Nhờ Claude sửa / Edit with Claude / sửa tin nhắn trước"]
  D --> B
  C -->|"Lỗi"| E["Try fixing with Claude hoặc mô tả lỗi cụ thể"]
  E --> B
  C -->|"Đạt"| F["Xuất file (Word, PDF…) hoặc chia sẻ"]
  F --> G["Tìm lại sau ở tab Artifacts"]`,
      caption: "Artifact riêng tư cho tới khi bạn chia sẻ.",
      alt: "Lưu đồ: gửi yêu cầu cụ thể, artifact mở bên cạnh chat. Nếu chưa đạt thì nhờ Claude sửa, dùng Edit with Claude hoặc sửa tin nhắn trước rồi xem lại. Nếu lỗi thì bấm Try fixing with Claude hoặc mô tả lỗi cụ thể. Nếu đạt thì xuất file như Word, PDF hoặc chia sẻ. Sau này tìm lại ở tab Artifacts.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu một artifact",
      bad: {
        label: "Mơ hồ",
        content: "“Làm cái checklist bảo trì.”",
        notes: ["Không rõ máy nào, bao nhiêu mục.", "Không rõ dạng: tài liệu in hay công cụ bấm được.", "Khó kiểm tra đúng sai."],
      },
      good: {
        label: "Rõ sản phẩm, nội dung, cách dùng",
        content: "“Tạo một artifact checklist bảo trì hằng ngày cho máy ép nhựa: 10 mục chia 3 nhóm (Điện, Thuỷ lực, An toàn), mỗi mục có ô đánh dấu và ô ghi chú; có nút ‘Đặt lại’ và dòng tổng số mục đã xong. Giao diện đơn giản, chữ to, dùng được trên điện thoại.”",
        notes: ["Rõ đây là công cụ tương tác.", "Có cấu trúc và số mục cụ thể.", "Có tiêu chí để kiểm tra."],
      },
      takeaway: "Nói rõ loại sản phẩm, nội dung, cách người dùng sẽ dùng nó.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: artifact hay trả lời trong chat?",
      sim: {
        kind: "choose",
        options: [
          { id: "artifact", label: "Thường thành artifact" },
          { id: "chat", label: "Thường trả lời trong chat" },
        ],
        scenarios: [
          { id: "s1", text: "“Thủ đô của Nhật Bản là gì?”", answer: "chat", why: "Câu trả lời ngắn, không cần sửa hay dùng lại." },
          { id: "s2", text: "“Tạo trang web giới thiệu xưởng, có menu, 3 mục và form liên hệ.”", answer: "artifact", why: "Sản phẩm đáng kể, tự đứng được, sẽ dùng lại." },
          { id: "s3", text: "“Soạn quy trình đào tạo an toàn khoảng 40 dòng để in phát cho công nhân.”", answer: "artifact", why: "Dài hơn 15 dòng, sẽ đưa cho người khác." },
          { id: "s4", text: "“Giải thích ngắn gọn khác nhau giữa PDF và DOCX.”", answer: "chat", why: "Giải thích nhanh trong cuộc trò chuyện." },
          { id: "s5", text: "“Vẽ lưu đồ quy trình xử lý khiếu nại 6 bước để đưa vào báo cáo.”", answer: "artifact", why: "Sơ đồ dùng lại bên ngoài cuộc trò chuyện." },
          { id: "s6", text: "“Câu này nên dùng ‘đã’ hay ‘vừa’?”", answer: "chat", why: "Hỏi đáp ngắn." },
        ],
      },
      intro: "Theo tiêu chí trong Help Center, mỗi yêu cầu dưới đây thường cho kết quả ở đâu?",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tạo và hoàn thiện artifact đầu tiên",
      steps: [
        { title: "Bật khả năng cần thiết", detail: "Settings > Capabilities → bật Cloud code execution and file creation." },
        { title: "Gửi yêu cầu cụ thể", detail: "Nói rõ loại sản phẩm, nội dung, người dùng.", code: { lang: "text", content: "Tạo một tài liệu “Hướng dẫn nhận ca” 1 trang cho công nhân mới: 6 bước, mỗi bước 1–2 câu, có phần “Điều cần nhớ” cuối trang. Ngôn ngữ đơn giản." } },
        { title: "Kiểm tra trong cửa sổ bên cạnh", detail: "Đọc hết, đối chiếu với yêu cầu; với trang web/công cụ thì bấm thử các nút." },
        { title: "Sửa từng điểm", detail: "Nhờ Claude sửa trong chat, hoặc bôi đen đoạn văn → Edit with Claude.", code: { lang: "text", content: "Gộp bước 4 và 5, và in đậm các từ “bắt buộc”." } },
        { title: "Xuất hoặc lưu", detail: "Xuất Word/PDF để in; artifact vẫn nằm trong tab Artifacts để sửa sau." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết yêu cầu tạo artifact cho nhu cầu trong dữ liệu mẫu, kèm một yêu cầu sửa sau khi xem bản đầu.",
      sampleData: {
        name: "Nhu cầu",
        content:
          "Tổ trưởng muốn một công cụ nhỏ tính số giờ tăng ca trong tuần: nhập giờ vào/ra từng ngày (thứ Hai–thứ Bảy), tự tính số giờ làm, giờ vượt 8 giờ/ngày là tăng ca, hiện tổng tăng ca cuối tuần. Dùng trên điện thoại ở xưởng.",
      },
      placeholder: "Yêu cầu: …\nYêu cầu sửa: …",
      rubric: [
        { id: "artifact", label: "Nói rõ là công cụ/artifact", weight: 1, check: { kind: "anyKeyword", keywords: ["artifact", "công cụ", "ứng dụng", "trang"] }, pass: "Có loại sản phẩm.", fail: "Nói rõ: tạo một artifact/công cụ tương tác." },
        { id: "inputs", label: "Có dữ liệu nhập", weight: 1, check: { kind: "allGroups", groups: [["giờ vào", "giờ ra", "vào/ra"], ["thứ hai", "6 ngày", "từng ngày"]] }, pass: "Có dữ liệu nhập.", fail: "Nêu nhập giờ vào/ra cho từng ngày thứ Hai–thứ Bảy." },
        { id: "rule", label: "Có quy tắc tính", weight: 1, check: { kind: "anyKeyword", keywords: ["8 giờ", "vượt 8", "trên 8"] }, pass: "Có quy tắc tăng ca.", fail: "Nêu quy tắc: vượt 8 giờ/ngày là tăng ca." },
        { id: "mobile", label: "Dùng trên điện thoại", weight: 1, check: { kind: "anyKeyword", keywords: ["điện thoại", "màn hình nhỏ", "mobile"] }, pass: "Có bối cảnh dùng.", fail: "Nêu: dùng trên điện thoại." },
        { id: "edit", label: "Có yêu cầu sửa", weight: 1, check: { kind: "regex", pattern: "yeu cau sua\\s*:\\s*\\S+" }, pass: "Có yêu cầu sửa.", fail: "Thêm dòng “Yêu cầu sửa: …”." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Yêu cầu: Tạo một artifact là công cụ tính giờ tăng ca trong tuần. Mỗi ngày từ thứ Hai đến thứ Bảy có ô nhập giờ vào và giờ ra; công cụ tự tính số giờ làm từng ngày, phần vượt 8 giờ/ngày tính là tăng ca, và hiện tổng giờ tăng ca cuối tuần. Giao diện đơn giản, chữ to, dùng tốt trên điện thoại.\nYêu cầu sửa: Thêm nút “Xoá hết” và hiện cảnh báo nếu giờ ra sớm hơn giờ vào.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Artifact: thứ Claude làm ra để bạn đưa cho người khác — tài liệu, trang web, sơ đồ, dashboard, công cụ nhỏ.",
        "Thường được tạo khi nội dung đáng kể, tự đứng được (thường hơn 15 dòng), sẽ được sửa hoặc dùng lại.",
        "Mở bên cạnh chat; tìm lại ở tab Artifacts.",
        "Sửa: nhờ Claude, Edit with Claude, sửa tin nhắn trước; lỗi thì Try fixing with Claude.",
        "Xuất Word/PDF/Markdown…; riêng tư mặc định; có trên mọi gói nhưng cần bật Cloud code execution and file creation.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một tài liệu hoặc công cụ nhỏ bạn cần trong công việc tuần này.",
      tasks: [
        "Viết yêu cầu cụ thể và tạo artifact.",
        "Sửa ít nhất 2 lần (một lần nhờ trong chat, một lần bằng Edit with Claude nếu là tài liệu).",
        "Xuất ra file và gửi cho một đồng nghiệp xem thử.",
      ],
      deliverable: "Artifact hoàn chỉnh + ghi chú: yêu cầu ban đầu, các lần sửa, nhận xét của đồng nghiệp.",
      checklist: ["Yêu cầu nói rõ loại sản phẩm", "Đã kiểm tra nội dung/các nút", "Đã xuất hoặc lưu đúng chỗ"],
    },
  ],
};
