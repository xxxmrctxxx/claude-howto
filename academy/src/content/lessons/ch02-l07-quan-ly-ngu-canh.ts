import type { Lesson } from "@/lib/types/content";

const DR = "https://support.claude.com/en/articles/8230524-delete-or-rename-a-conversation";
const SH = "https://support.claude.com/en/articles/10593882-share-and-unshare-chats";
const ME = "https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context";
const UL = "https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work";

export const lessonQuanLyNguCanh: Lesson = {
  id: "ch02-l07",
  chapterId: "ch02",
  slug: "quan-ly-ngu-canh",
  title: "Quản lý hội thoại và ngữ cảnh",
  subtitle: "Dọn và chia sẻ hội thoại an toàn, điều khiển bộ nhớ và tìm kiếm chat cũ, hiểu giới hạn sử dụng và độ dài để làm việc dài hơi mà không “cháy” lượt dùng.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Quản lý hội thoại: đổi tên, xoá (cả xoá hàng loạt), chia sẻ và thu hồi chia sẻ một cách an toàn." },
    { id: "o2", text: "Điều khiển bộ nhớ và tìm kiếm chat cũ: bật/tắt, xem, sửa, xoá; hiểu bộ nhớ riêng của project." },
    { id: "o3", text: "Phân biệt giới hạn sử dụng (theo phiên 5 giờ, theo tuần) và giới hạn độ dài (context window); hiểu quản lý context tự động." },
    { id: "o4", text: "Áp dụng thói quen tiết kiệm: mở chat mới, dùng project, tắt extended thinking và công cụ không cần." },
  ],
  concepts: [
    { id: "rename-delete", label: "Đổi tên và xoá" },
    { id: "bulk-delete", label: "Xoá hàng loạt" },
    { id: "share-snapshot", label: "Chia sẻ là ảnh chụp tại thời điểm" },
    { id: "share-privacy", label: "Thu hồi chia sẻ" },
    { id: "memory", label: "Bộ nhớ" },
    { id: "manage-memory", label: "Xem, sửa, xoá bộ nhớ" },
    { id: "chat-search", label: "Tìm kiếm chat cũ" },
    { id: "project-memory", label: "Bộ nhớ của project" },
    { id: "usage-limit", label: "Giới hạn sử dụng" },
    { id: "length-limit", label: "Giới hạn độ dài" },
    { id: "auto-context", label: "Quản lý context tự động" },
    { id: "save-usage", label: "Thói quen tiết kiệm" },
  ],
  hints: [
    "Chia sẻ chat = ảnh chụp các tin nhắn tới lúc chia sẻ; file đính kèm không đi kèm.",
    "Bộ nhớ: Settings > Your Claude; có thể bảo Claude “nhớ”, “sửa”, “quên” ngay trong chat.",
    "Giới hạn sử dụng (lượt dùng theo thời gian) khác giới hạn độ dài (một chat chứa được bao nhiêu).",
  ],
  sources: [
    { label: "Claude Help Center — Delete or rename a conversation", href: DR },
    { label: "Claude Help Center — Share and unshare chats", href: SH },
    { label: "Claude Help Center — Chat search and memory", href: ME },
    { label: "Claude Help Center — How do usage and length limits work?", href: UL },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Dọn hội thoại**: nút **⋮** cạnh hội thoại → *Rename* hoặc *Delete*. Xoá nhiều cùng lúc: vào **Chats and tasks** → ⋮ trên một hội thoại → *Select* → đánh dấu → *Delete*. Hội thoại đã xoá biến khỏi lịch sử ngay và được xoá khỏi hệ thống phía sau **trong vòng 30 ngày** — hãy cân nhắc trước khi xoá.",
        "**Chia sẻ chat**: nút **Share** ở góc trên phải → tạo liên kết. Người có liên kết xem được **ảnh chụp các tin nhắn tới lúc chia sẻ** (kể cả artifact); tin nhắn gửi sau đó vẫn riêng tư; **file đính kèm không được chia sẻ**. Thu hồi: mở menu Share, đổi từ *Public* sang *Private*. Trên gói Free/Pro/Max/Ultra, xem lại các chat đã chia sẻ ở *Settings > Privacy*. Trên Team/Enterprise, chỉ chia sẻ được trong tổ chức. Vì ai có liên kết cũng xem được, **kiểm tra nội dung trước khi chia sẻ**.",
        "**Bộ nhớ và tìm kiếm chat cũ**: Claude có thể lưu **bộ nhớ** theo từng chủ đề khi bạn trò chuyện; bạn cũng có thể nói “nhớ điều này”. Bật/tắt ở **Settings > Your Claude** (*Generate memory from chats*; khi tắt chọn *Pause* để giữ hoặc *Reset* để xoá vĩnh viễn); xem và sửa từng chủ đề qua *Manage* → *Topics*. **Tìm kiếm chat cũ** (*Search and reference chats*) chỉ có ở gói trả phí, tìm trong các chat ngoài project và trong từng project, **không xuyên project**. Mỗi project có **bộ nhớ riêng**.",
        "**Hai loại giới hạn**: *giới hạn sử dụng* — bạn dùng được bao nhiêu theo thời gian (giới hạn theo phiên **đặt lại sau 5 giờ**; gói trả phí còn có giới hạn theo tuần; dùng chung giữa claude.ai, Claude Code và Claude Desktop); *giới hạn độ dài* — một chat chứa được bao nhiêu (context window, tới 1 triệu token với các model mới nhất trên gói trả phí). Khi chat gần đầy, nếu bật code execution, Claude **tự tóm tắt phần cũ** (có thể thấy “organizing its thoughts”) — nhưng chat dài vẫn tốn nhiều lượt dùng. Thói quen tốt: **mở chat mới** khi đổi việc, dùng **project** cho tài liệu dùng chung, rút gọn instructions, bỏ file thừa, **tắt extended thinking** và **công cụ/connector** khi không cần, hạ **effort** cho việc thường ngày.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Hộp thư làm việc của bạn: đặt tên rõ cho từng chủ đề, dọn thư cũ, chuyển tiếp có chọn lọc (người nhận chỉ thấy tới thư bạn chuyển). Sổ tay ghi nhớ (bộ nhớ) bạn có thể đọc, sửa, xé trang. Còn “gói cước” (lượt dùng) thì cuộc gọi càng dài càng tốn — gác máy và gọi cuộc mới khi đổi chủ đề.",
      },
      terms: [
        { term: "Bộ nhớ (Memory)", definition: "Thông tin Claude lưu theo chủ đề từ các cuộc trò chuyện để dùng ở chat sau." },
        { term: "Giới hạn sử dụng", definition: "Mức dùng tối đa theo thời gian: theo phiên (đặt lại sau 5 giờ) và theo tuần (gói trả phí)." },
        { term: "Giới hạn độ dài", definition: "Lượng nội dung tối đa một chat chứa được — chính là context window." },
        { term: "Quản lý context tự động", definition: "Khi chat gần đầy, Claude tóm tắt phần cũ để tiếp tục; lịch sử đầy đủ vẫn được giữ." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: giới hạn sử dụng và giới hạn độ dài",
      infographic: {
        kind: "compare",
        columns: [
          { title: "Giới hạn sử dụng", tone: "neutral", items: ["Đo lượng bạn dùng theo thời gian", "Theo phiên: đặt lại sau 5 giờ", "Gói trả phí: thêm giới hạn theo tuần", "Dùng chung claude.ai, Claude Code, Desktop", "Chạm giới hạn: chờ đặt lại hoặc nâng gói"] },
          { title: "Giới hạn độ dài", tone: "neutral", items: ["Một chat chứa được bao nhiêu (context window)", "Tới 1M token với model mới nhất trên gói trả phí", "Gần đầy: tự tóm tắt phần cũ (khi bật code execution)", "Chạm giới hạn: mở chat mới hoặc dùng project", "Một phần luôn dành cho câu trả lời"] },
        ],
      },
      caption: "Theo bài How do usage and length limits work? của Help Center (đối chiếu 03/11/2026). Con số có thể thay đổi theo gói và model.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: giữ hội thoại gọn và an toàn",
      mermaid: `flowchart TD
  A["Một chat đang dùng"] --> B{"Đổi sang việc khác?"}
  B -->|"Có"| C["Mở chat mới (hoặc chat trong project)"]
  B -->|"Không"| D{"Chat đã rất dài?"}
  D -->|"Có"| E["Tóm tắt ý chính → mở chat mới với bản tóm tắt"]
  D -->|"Không"| F["Tiếp tục"]
  A --> G{"Cần cho người khác xem?"}
  G -->|"Có"| H["Kiểm tra nội dung → Share (ảnh chụp tới lúc chia sẻ)"]
  H --> I["Xong việc: đổi Public → Private"]`,
      caption: "Một chat cho một việc; chia sẻ có kiểm tra và có thu hồi.",
      alt: "Lưu đồ: với một chat đang dùng, nếu đổi sang việc khác thì mở chat mới hoặc chat trong project; nếu không đổi việc nhưng chat đã rất dài thì tóm tắt ý chính rồi mở chat mới kèm bản tóm tắt, còn không thì tiếp tục. Nếu cần cho người khác xem thì kiểm tra nội dung rồi Share, người nhận thấy ảnh chụp tới lúc chia sẻ; xong việc thì đổi Public sang Private.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: chia sẻ một chat cho đồng nghiệp",
      bad: {
        label: "Chia sẻ vội",
        content: "Bấm Share chat đang có cả bảng lương đã dán vào, gửi liên kết vào nhóm chat 50 người, rồi tiếp tục bàn chuyện nhạy cảm trong chat đó.",
        notes: ["Nội dung đã dán (chữ) hiện trong ảnh chụp.", "Ai có liên kết cũng xem được.", "Không thu hồi khi xong việc."],
      },
      good: {
        label: "Chia sẻ có kiểm soát",
        content: "Mở chat mới chỉ với phần cần chia sẻ (không dữ liệu cá nhân) → Share → gửi cho đúng người → xong việc đổi Public sang Private (hoặc xem lại ở Settings > Privacy).",
        notes: ["Không lộ dữ liệu nhạy cảm.", "Người nhận chỉ thấy tới lúc chia sẻ.", "Thu hồi khi không cần."],
      },
      takeaway: "Chia sẻ là công khai cho ai có liên kết — kiểm tra trước, thu hồi sau.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đối chiếu khẳng định với Help Center",
      sim: {
        kind: "verify",
        sourceTitle: "Trích các bài Help Center về quản lý hội thoại (đối chiếu 03/11/2026)",
        sourceLines: [
          "A deleted conversation is removed from your conversation history immediately and deleted from our back-end systems within 30 days.",
          "Anyone with the link can view a snapshot that includes all messages sent prior to sharing; messages sent after sharing remain private by default.",
          "The file itself is not included in the shared snapshot and remains private.",
          "Chat search: paid plans only. It searches chats outside projects and conversations within each individual project, but not across projects.",
          "Free users have a session-based usage limit that resets every five hours.",
          "With code execution enabled, automatic context management summarizes earlier messages as a conversation nears the context limit.",
        ],
        verdicts: [
          { id: "dung", label: "Đúng theo nguồn" },
          { id: "sai", label: "Sai theo nguồn" },
          { id: "khong-noi", label: "Nguồn không nói" },
        ],
        claims: [
          { id: "c1", text: "Người nhận liên kết chia sẻ sẽ thấy cả những tin nhắn bạn gửi sau khi chia sẻ.", verdict: "sai", why: "Dòng 2: tin nhắn sau khi chia sẻ vẫn riêng tư." },
          { id: "c2", text: "File PDF bạn đính kèm trong chat được gửi kèm khi chia sẻ.", verdict: "sai", why: "Dòng 3: file không nằm trong ảnh chụp chia sẻ." },
          { id: "c3", text: "Tìm kiếm chat cũ có thể tìm xuyên qua nhiều project khác nhau.", verdict: "sai", why: "Dòng 4: không xuyên project." },
          { id: "c4", text: "Hội thoại đã xoá biến mất khỏi lịch sử ngay lập tức.", verdict: "dung", why: "Dòng 1." },
          { id: "c5", text: "Giới hạn theo phiên của gói Free đặt lại sau 5 giờ.", verdict: "dung", why: "Dòng 5." },
          { id: "c6", text: "Mỗi tài khoản Free chỉ được lưu tối đa 100 hội thoại.", verdict: "khong-noi", why: "Đoạn trích không nói về số hội thoại tối đa." },
        ],
        note: "Chính sách và giới hạn có thể thay đổi; xem Help Center khi cần con số chính xác.",
      },
      intro: "Đọc đoạn trích, rồi xếp mỗi khẳng định: đúng, sai, hay nguồn không nói.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dọn dẹp và thiết lập định kỳ",
      steps: [
        { title: "Đặt tên và xoá hội thoại thừa", detail: "⋮ → Rename cho chat quan trọng; Chats and tasks → Select → Delete cho chat không cần." },
        { title: "Rà các chat đã chia sẻ", detail: "Settings > Privacy → Shared chats → Manage; chuyển các chat không còn cần về Private." },
        { title: "Xem lại bộ nhớ", detail: "Settings > Your Claude → Manage (Your memory) → Topics: sửa hoặc xoá chủ đề sai, cũ." },
        { title: "Sửa bộ nhớ ngay trong chat khi cần", detail: "Bảo Claude nhớ, sửa hoặc quên một điều.", code: { lang: "text", content: "Hãy quên thông tin về dự án cũ “Dây chuyền B” — dự án đã kết thúc. Nhớ giúp: báo cáo tuần của mình gửi vào sáng thứ Hai." } },
        { title: "Chat dài thì chuyển sang chat mới có tóm tắt", detail: "Nhờ Claude tóm tắt rồi mở chat mới với bản tóm tắt.", code: { lang: "text", content: "Tóm tắt những gì đã thống nhất trong chat này thành 8 gạch đầu dòng (quyết định, số liệu, việc còn lại) để mình mở chat mới tiếp tục." } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc 5 tình huống trong dữ liệu mẫu và viết cách xử lý cho từng tình huống (T1–T5), mỗi tình huống một dòng.",
      sampleData: {
        name: "Tình huống",
        content:
          "T1: Một chat làm báo cáo đã kéo dài 2 tuần, câu trả lời chậm và bạn sắp hết lượt dùng.\nT2: Bạn đã chia sẻ một chat cho đối tác; giờ dự án kết thúc.\nT3: Claude cứ nhắc đến dự án cũ đã kết thúc trong các chat mới.\nT4: Bạn muốn đồng nghiệp xem file PDF đã đính kèm trong chat bạn chia sẻ.\nT5: Bạn chỉ nhờ sửa chính tả email ngắn nhưng đang bật extended thinking và nhiều connector.",
      },
      placeholder: "T1: …\nT2: …\nT3: …\nT4: …\nT5: …",
      rubric: [
        { id: "t1", label: "T1: tóm tắt + chat mới", weight: 1, check: { kind: "regex", pattern: "t1[^\\n]*(chat moi|hoi thoai moi|tom tat)" }, pass: "T1 đúng.", fail: "T1: tóm tắt ý chính rồi mở chat mới." },
        { id: "t2", label: "T2: chuyển về Private", weight: 1, check: { kind: "regex", pattern: "t2[^\\n]*(private|thu hoi|huy chia se|rieng tu)" }, pass: "T2 đúng.", fail: "T2: đổi Public sang Private để thu hồi." },
        { id: "t3", label: "T3: sửa/xoá bộ nhớ", weight: 1, check: { kind: "regex", pattern: "t3[^\\n]*(bo nho|memory|quen)" }, pass: "T3 đúng.", fail: "T3: xoá chủ đề trong bộ nhớ hoặc bảo Claude quên." },
        { id: "t4", label: "T4: gửi file riêng", weight: 1, check: { kind: "regex", pattern: "t4[^\\n]*(khong (duoc )?(chia se|kem)|gui rieng|gui file)" }, pass: "T4 đúng.", fail: "T4: file không đi kèm khi chia sẻ — gửi file riêng." },
        { id: "t5", label: "T5: tắt extended thinking/connector", weight: 1, check: { kind: "regex", pattern: "t5[^\\n]*(tat|ha effort)" }, pass: "T5 đúng.", fail: "T5: tắt extended thinking và connector không cần." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "T1: nhờ Claude tóm tắt các quyết định và việc còn lại, rồi mở chat mới với bản tóm tắt (hoặc đưa tài liệu vào project).\nT2: mở menu Share, đổi Public sang Private để thu hồi; xem lại ở Settings > Privacy.\nT3: vào Settings > Your Claude → Manage → Topics để xoá chủ đề dự án cũ trong bộ nhớ, hoặc bảo Claude quên dự án đó.\nT4: file đính kèm không được chia sẻ cùng chat — gửi file riêng cho đồng nghiệp.\nT5: tắt extended thinking và các connector không cần, hạ effort cho việc đơn giản.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "⋮ → Rename/Delete; xoá hàng loạt ở Chats and tasks; đã xoá thì mất khỏi lịch sử ngay, xoá khỏi hệ thống trong 30 ngày.",
        "Share tạo ảnh chụp tới lúc chia sẻ (kèm artifact, không kèm file); thu hồi bằng Public → Private.",
        "Bộ nhớ: Settings > Your Claude (bật/tắt, Pause/Reset, Manage → Topics); có thể bảo Claude nhớ/sửa/quên.",
        "Tìm chat cũ: gói trả phí, không xuyên project; mỗi project có bộ nhớ riêng.",
        "Giới hạn sử dụng (5 giờ, theo tuần) khác giới hạn độ dài (context window); chat mới, project, tắt tính năng thừa để tiết kiệm.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Dành 15 phút dọn dẹp tài khoản Claude của bạn.",
      tasks: [
        "Đặt tên lại 5 chat quan trọng, xoá các chat không cần.",
        "Rà danh sách chat đã chia sẻ; thu hồi những chat không còn cần.",
        "Mở phần bộ nhớ, sửa hoặc xoá ít nhất một chủ đề không còn đúng.",
      ],
      deliverable: "Ghi chú: số chat đã đặt tên/xoá, số chia sẻ đã thu hồi, thay đổi trong bộ nhớ.",
      checklist: ["Không còn chia sẻ thừa", "Bộ nhớ không chứa thông tin sai/cũ", "Có thói quen mở chat mới khi đổi việc"],
    },
  ],
};
