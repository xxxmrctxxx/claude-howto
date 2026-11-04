import type { Lesson } from "@/lib/types/content";

const GS = "https://support.claude.com/en/articles/8114491-get-started-with-claude";
const AR = "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them";
const UL = "https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work";
const ME = "https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context";
const IN = "https://support.claude.com/en/articles/12260368-use-incognito-chats";

export const lessonTaoHoiThoai: Lesson = {
  id: "ch02-l03",
  chapterId: "ch02",
  slug: "tao-hoi-thoai",
  title: "Tạo cuộc hội thoại",
  subtitle: "Mở đầu cụ thể, hỏi tiếp để tinh chỉnh, sửa tin nhắn cũ để rẽ nhánh, và biết lúc nào nên mở chat mới, chat ẩn danh hay tắt bộ nhớ.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Mở đầu hội thoại bằng yêu cầu cụ thể, viết tự nhiên như nói với một đồng nghiệp." },
    { id: "o2", text: "Hỏi tiếp và tinh chỉnh; sửa một tin nhắn trước đó để tạo phiên bản riêng mà không mất phần cũ." },
    { id: "o3", text: "Quyết định tiếp tục hay mở chat mới: đổi chủ đề, chat quá dài, tốn lượt dùng." },
    { id: "o4", text: "Chọn kiểu chat phù hợp: chat thường, chat ẩn danh, hoặc tắt bộ nhớ cho riêng chat đó." },
  ],
  concepts: [
    { id: "first-message", label: "Tin nhắn đầu tiên" },
    { id: "be-specific", label: "Yêu cầu cụ thể" },
    { id: "natural-tone", label: "Viết tự nhiên" },
    { id: "follow-up", label: "Hỏi tiếp, tinh chỉnh" },
    { id: "edit-branch", label: "Sửa tin nhắn → phiên bản riêng" },
    { id: "new-chat", label: "Mở chat mới" },
    { id: "long-chat-cost", label: "Chat dài tốn lượt dùng" },
    { id: "chat-separate", label: "Mỗi chat một ngữ cảnh" },
    { id: "incognito-chat", label: "Chat ẩn danh" },
    { id: "memory-off-chat", label: "Tắt bộ nhớ cho một chat" },
    { id: "task-variety", label: "Thử nhiều loại việc" },
    { id: "verify-answer", label: "Kiểm tra câu trả lời" },
  ],
  hints: [
    "Mở đầu tốt: việc cần làm + bối cảnh + kết quả mong muốn.",
    "Muốn thử hướng khác mà không mất phần đã có → sửa tin nhắn trước đó.",
    "Chủ đề mới hoặc chat đã rất dài → mở chat mới.",
  ],
  sources: [
    { label: "Claude Help Center — Get started with Claude (gửi tin nhắn, mẹo dùng lần đầu)", href: GS },
    { label: "Claude Help Center — Artifacts (sửa tin nhắn trước tạo phiên bản riêng)", href: AR },
    { label: "Claude Help Center — How do usage and length limits work?", href: UL },
    { label: "Claude Help Center — Chat search and memory (tắt Memory cho một chat)", href: ME },
    { label: "Claude Help Center — Use incognito chats", href: IN },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Bắt đầu một hội thoại rất đơn giản: gõ yêu cầu vào ô nhập và bấm gửi. Help Center khuyên: bắt đầu bằng câu hỏi đơn giản, **càng cụ thể càng tốt**, viết **tự nhiên như nói với đồng nghiệp hay bạn bè**, và thử nhiều loại việc khác nhau — từ câu hỏi nhanh đến dự án dài. Một mở đầu tốt thường có: **việc cần làm**, **bối cảnh** (cho ai, để làm gì) và **kết quả mong muốn** (độ dài, định dạng) — Chương 3 sẽ đi sâu hơn.",
        "Hội thoại là **hai chiều**: câu trả lời chưa đúng ý thì **hỏi tiếp** hoặc **tinh chỉnh** (“ngắn lại còn 5 dòng”, “viết cho khách hàng chứ không phải cho kỹ thuật”). Muốn thử một hướng khác mà không mất phần đã có, hãy **sửa một tin nhắn trước đó**: Claude tạo một **phiên bản riêng** của hội thoại từ điểm đó, phiên bản cũ vẫn còn.",
        "Mỗi hội thoại có **ngữ cảnh riêng** — Claude dựa vào nội dung trong chính chat đó (cùng với bộ nhớ và tìm kiếm chat cũ nếu bạn bật). **Mở chat mới** khi đổi sang chủ đề khác hẳn, hoặc khi chat đã rất dài: chat dài tốn nhiều lượt dùng hơn, và Help Center gợi ý mở chat mới để giảm tiêu hao. Đừng nhồi mọi việc vào một chat “tổng”.",
        "Có ba kiểu chat: **chat thường** (lưu vào lịch sử, có thể dùng bộ nhớ); **chat ẩn danh** — bấm biểu tượng con ma, không lưu vào lịch sử và bộ nhớ (vẫn được giữ 30 ngày theo mặc định); và **tắt bộ nhớ cho riêng một chat** — trước khi gửi tin nhắn đầu tiên, mở nút + và tắt *Memory*: chat vẫn nằm trong lịch sử nhưng không dùng/tạo bộ nhớ. Dù kiểu nào, hãy **kiểm tra lại** thông tin quan trọng trong câu trả lời.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Làm việc với Claude giống giao việc cho một đồng nghiệp mới: nói rõ việc, bối cảnh và kết quả mong muốn; chưa ưng thì góp ý tiếp. Mỗi việc lớn nên có một “cuộc họp” riêng (chat riêng) thay vì bàn mọi chuyện trong một cuộc họp kéo dài cả ngày.",
      },
      terms: [
        { term: "Hội thoại (chat)", definition: "Một chuỗi tin nhắn qua lại với Claude, có ngữ cảnh riêng." },
        { term: "Hỏi tiếp (follow-up)", definition: "Tin nhắn tiếp theo để làm rõ, chỉnh sửa hoặc mở rộng câu trả lời." },
        { term: "Phiên bản riêng", definition: "Nhánh mới của hội thoại tạo ra khi bạn sửa một tin nhắn trước đó." },
        { term: "Chat ẩn danh", definition: "Chat không lưu vào lịch sử và bộ nhớ của Claude." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: một tin nhắn mở đầu tốt",
      infographic: {
        kind: "annotated",
        label: "Tin nhắn đầu tiên",
        lines: [
          { text: "Mình làm QA ở xưởng lắp ráp, cần gửi báo cáo cho quản lý không chuyên kỹ thuật.", note: "Bối cảnh: bạn là ai, người đọc là ai", tone: "context" },
          { text: "Hãy viết lại đoạn ghi chú dưới đây thành email báo cáo lỗi tuần 44.", note: "Việc cần làm", tone: "task" },
          { text: "Giữ đúng các con số, không thêm số liệu mới.", note: "Ràng buộc", tone: "constraints" },
          { text: "Dài tối đa 120 từ, có 3 gạch đầu dòng và một câu đề xuất.", note: "Kết quả mong muốn", tone: "output" },
        ],
      },
      caption: "Ví dụ tự soạn theo mẹo “cụ thể, tự nhiên” trong Help Center (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: tiếp tục, rẽ nhánh hay mở chat mới",
      mermaid: `flowchart TD
  A["Câu trả lời vừa nhận"] --> B{"Đúng ý chưa?"}
  B -->|"Gần đúng"| C["Hỏi tiếp, tinh chỉnh trong chat này"]
  B -->|"Muốn thử hướng khác"| D["Sửa tin nhắn trước → phiên bản riêng"]
  B -->|"Đúng"| E{"Việc tiếp theo cùng chủ đề?"}
  E -->|"Có"| C
  E -->|"Không, hoặc chat đã rất dài"| F["Mở chat mới"]
  F --> G{"Riêng tư, không muốn lưu?"}
  G -->|"Có"| H["Chat ẩn danh"]
  G -->|"Không"| I["Chat thường"]`,
      caption: "Một chat cho một việc; chat dài thì mở chat mới để tiết kiệm lượt dùng.",
      alt: "Lưu đồ: sau khi nhận câu trả lời, nếu gần đúng thì hỏi tiếp và tinh chỉnh trong chat này; nếu muốn thử hướng khác thì sửa tin nhắn trước để tạo phiên bản riêng; nếu đã đúng và việc tiếp theo cùng chủ đề thì tiếp tục, còn nếu khác chủ đề hoặc chat đã rất dài thì mở chat mới. Chat mới cần riêng tư thì dùng chat ẩn danh, không thì chat thường.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: mở đầu hội thoại",
      bad: {
        label: "Mơ hồ",
        content: "“Viết email.”",
        notes: ["Không biết gửi ai, nội dung gì.", "Không biết độ dài, giọng văn.", "Phải hỏi qua lại nhiều lượt."],
      },
      good: {
        label: "Cụ thể, tự nhiên",
        content: "“Mình cần email gửi quản lý (không chuyên kỹ thuật) báo 3 lỗi chính tuần 44 trong ghi chú dưới đây. Giữ đúng con số, tối đa 120 từ, giọng lịch sự, kết thúc bằng một đề xuất.”",
        notes: ["Có người đọc và mục đích.", "Có ràng buộc và định dạng.", "Thường đúng ý ngay lần đầu."],
      },
      takeaway: "Cụ thể ngay từ đầu tiết kiệm nhiều lượt hỏi lại.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: làm gì tiếp theo?",
      sim: {
        kind: "choose",
        options: [
          { id: "follow", label: "Hỏi tiếp trong chat này" },
          { id: "edit", label: "Sửa tin nhắn trước (tạo phiên bản riêng)" },
          { id: "new", label: "Mở chat mới" },
          { id: "incognito", label: "Mở chat ẩn danh" },
          { id: "memory-off", label: "Tắt Memory cho chat này (nút +)" },
        ],
        scenarios: [
          { id: "s1", text: "Email Claude viết gần ổn nhưng hơi dài.", answer: "follow", why: "Tinh chỉnh: “rút còn 80 từ”." },
          { id: "s2", text: "Bạn muốn thử cách mở đầu hoàn toàn khác cho câu hỏi số 2 mà vẫn giữ phương án hiện tại.", answer: "edit", why: "Sửa tin nhắn trước tạo phiên bản riêng, không mất phần cũ." },
          { id: "s3", text: "Xong việc email, giờ bạn cần lập kế hoạch đào tạo — chủ đề khác hẳn.", answer: "new", why: "Mỗi việc một chat, ngữ cảnh gọn." },
          { id: "s4", text: "Hỏi một việc cá nhân, không muốn chat xuất hiện trong lịch sử.", answer: "incognito", why: "Chat ẩn danh không lưu vào lịch sử và bộ nhớ." },
          { id: "s5", text: "Chat thử nghiệm giọng văn lạ; muốn giữ chat trong lịch sử nhưng không để nó ảnh hưởng bộ nhớ của Claude.", answer: "memory-off", why: "Tắt Memory trước tin nhắn đầu: vẫn lưu lịch sử, không dùng/tạo bộ nhớ." },
          { id: "s6", text: "Chat đã kéo dài cả ngày với rất nhiều việc và bạn sắp hết lượt dùng.", answer: "new", why: "Help Center: chat dài tốn lượt dùng; mở chat mới." },
        ],
      },
      intro: "Chọn bước tiếp theo hợp lý nhất cho từng tình huống.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: một hội thoại hiệu quả",
      steps: [
        { title: "Chọn kiểu chat trước khi gửi", detail: "Chat thường, chat ẩn danh (con ma), hoặc tắt Memory trong nút + nếu cần." },
        { title: "Viết tin nhắn mở đầu cụ thể", detail: "Việc + bối cảnh + kết quả mong muốn.", code: { lang: "text", content: "Mình cần tóm tắt biên bản họp dưới đây cho cả nhóm sản xuất. Tối đa 6 gạch đầu dòng, ghi rõ ai làm gì, hạn khi nào." } },
        { title: "Đọc và kiểm tra", detail: "Đối chiếu con số, tên người, hạn chót với tài liệu gốc." },
        { title: "Hỏi tiếp để tinh chỉnh", detail: "Một yêu cầu chỉnh mỗi lần sẽ dễ kiểm soát hơn.", code: { lang: "text", content: "Gộp hai ý về bảo trì thành một, và thêm cột “Hạn” dạng dd/mm." } },
        { title: "Rẽ nhánh khi cần", detail: "Sửa một tin nhắn trước để thử hướng khác; phiên bản cũ vẫn còn." },
        { title: "Đặt tên và đóng việc", detail: "Đổi tên hội thoại cho dễ tìm; việc mới thì mở chat mới." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết lại yêu cầu mơ hồ trong dữ liệu mẫu thành một tin nhắn mở đầu cụ thể, rồi viết thêm một tin nhắn hỏi tiếp để tinh chỉnh.",
      sampleData: {
        name: "Yêu cầu ban đầu",
        content:
          "“Làm giúp cái thông báo nghỉ lễ.”\nBối cảnh: bạn là trưởng ca ở xưởng, công nhân nghỉ lễ 2/9 từ thứ Bảy đến hết thứ Ba, đi làm lại thứ Tư; ca đêm thứ Tư bắt đầu 22h. Thông báo dán ở bảng tin và gửi nhóm chat.",
      },
      placeholder: "Tin nhắn mở đầu: …\nTin nhắn hỏi tiếp: …",
      rubric: [
        { id: "audience", label: "Có người đọc/bối cảnh", weight: 1, check: { kind: "anyKeyword", keywords: ["công nhân", "trưởng ca", "bảng tin", "nhóm chat"] }, pass: "Có bối cảnh.", fail: "Nêu người đọc (công nhân) và nơi đăng." },
        { id: "facts", label: "Có thông tin cụ thể", weight: 1, check: { kind: "allGroups", groups: [["2/9", "nghỉ lễ"], ["thứ tư", "22h", "đi làm lại"]] }, pass: "Có ngày giờ cụ thể.", fail: "Đưa ngày nghỉ, ngày đi làm lại, giờ ca đêm." },
        { id: "format", label: "Có kết quả mong muốn", weight: 1, check: { kind: "anyKeyword", keywords: ["tối đa", "dòng", "ngắn", "gạch đầu dòng", "từ"] }, pass: "Có định dạng/độ dài.", fail: "Nêu độ dài hoặc định dạng mong muốn." },
        { id: "followup", label: "Có tin nhắn hỏi tiếp", weight: 1, check: { kind: "regex", pattern: "hoi tiep\\s*:\\s*\\S+" }, pass: "Có tinh chỉnh.", fail: "Viết thêm dòng “Tin nhắn hỏi tiếp: …”." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Tin nhắn mở đầu: Mình là trưởng ca ở xưởng. Viết giúp thông báo nghỉ lễ 2/9 cho công nhân: nghỉ từ thứ Bảy đến hết thứ Ba, đi làm lại thứ Tư, ca đêm thứ Tư bắt đầu 22h. Thông báo dán ở bảng tin và gửi nhóm chat, tối đa 8 dòng, giọng thân thiện, ngày giờ in đậm.\nTin nhắn hỏi tiếp: Thêm một dòng nhắc mang thẻ ra vào khi đi làm lại, và làm bản ngắn 2 dòng cho nhóm chat.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Mở đầu cụ thể, tự nhiên: việc + bối cảnh + kết quả mong muốn.",
        "Hội thoại hai chiều: hỏi tiếp, tinh chỉnh từng điểm.",
        "Sửa tin nhắn trước tạo phiên bản riêng, phần cũ vẫn còn.",
        "Mỗi chat một ngữ cảnh; đổi chủ đề hoặc chat quá dài → mở chat mới (tiết kiệm lượt dùng).",
        "Chat ẩn danh: không lưu lịch sử/bộ nhớ; tắt Memory cho một chat: vẫn lưu lịch sử. Luôn kiểm tra thông tin quan trọng.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một việc thật trong tuần (email, biên bản, thông báo).",
      tasks: [
        "Viết tin nhắn mở đầu có đủ việc, bối cảnh, kết quả mong muốn.",
        "Tinh chỉnh bằng ít nhất 2 tin nhắn hỏi tiếp; thử sửa một tin nhắn trước để so hai phiên bản.",
        "Đặt tên hội thoại; việc tiếp theo khác chủ đề thì mở chat mới.",
      ],
      deliverable: "Ghi chú: tin nhắn mở đầu, các lần tinh chỉnh, phiên bản bạn chọn và lý do.",
      checklist: ["Mở đầu có kết quả mong muốn", "Đã kiểm tra số liệu", "Mỗi việc một chat"],
    },
  ],
};
