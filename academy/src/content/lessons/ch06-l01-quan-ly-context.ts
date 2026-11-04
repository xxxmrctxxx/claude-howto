import type { Lesson } from "@/lib/types/content";

const CP = "https://code.claude.com/docs/en/checkpointing";

export const lessonQuanLyContext: Lesson = {
  id: "ch06-l01",
  chapterId: "ch06",
  slug: "quan-ly-context",
  title: "Quản lý context",
  subtitle: "Giữ phiên làm việc dài vẫn sắc nét: đọc /context, tóm tắt đúng đoạn bằng /rewind, hỏi bên lề bằng /btw, tách nhánh bằng /branch và đẩy việc khám phá sang subagent.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Đọc /context để biết cái gì đang chiếm chỗ và quyết định hành động." },
    { id: "o2", text: "Chọn đúng công cụ: /clear, /compact có trọng tâm, hay Summarize trong menu /rewind." },
    { id: "o3", text: "Hỏi bên lề và thử hướng khác mà không làm bẩn context: /btw, /branch, subagent khám phá." },
    { id: "o4", text: "Giữ điều quan trọng qua các lần tóm tắt: CLAUDE.md, file ghi chú, hướng dẫn cho bản tóm tắt." },
  ],
  concepts: [
    { id: "context-view", label: "Đọc /context" },
    { id: "choose-tool", label: "Chọn công cụ quản lý context" },
    { id: "compact-focus", label: "/compact có trọng tâm" },
    { id: "summarize-rewind", label: "Summarize trong /rewind" },
    { id: "guide-summary", label: "Hướng dẫn bản tóm tắt" },
    { id: "btw", label: "/btw — hỏi bên lề" },
    { id: "branch-fork", label: "/branch — tách nhánh phiên" },
    { id: "subagent-explore", label: "Subagent khám phá" },
    { id: "persist-notes", label: "Ghi lại điều quan trọng" },
  ],
  hints: [
    "Summarize from here: nén từ điểm chọn trở về sau, giữ nguyên phần đầu (ví dụ yêu cầu ban đầu).",
    "/btw trả lời câu hỏi nhanh mà không thêm gì vào lịch sử.",
    "/branch sao chép lịch sử sang phiên mới — phiên gốc giữ nguyên để quay lại.",
  ],
  sources: [
    { label: "Claude Code — Checkpointing: Rewind and summarize, Guide a summary", href: CP },
    { label: "Claude Code — Best practices: /btw, /clear, /rewind, Esc", href: "https://code.claude.com/docs/en/best-practices" },
    { label: "Claude Code — How Claude Code works: context window, resume or fork sessions", href: "https://code.claude.com/docs/en/how-claude-code-works" },
    { label: "Claude Code — Common workflows: Delegate research to subagents", href: "https://code.claude.com/docs/en/common-workflows" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Ở Chương 8 bạn đã biết vì sao context ảnh hưởng tới chi phí. Bài này tập trung vào **chất lượng**: phiên dài chứa nhiều thử–sai, log, câu hỏi bên lề làm Claude dễ lẫn. Việc đầu tiên là **nhìn**: `/context` cho thấy hội thoại, file đã đọc, kết quả công cụ, CLAUDE.md đang chiếm bao nhiêu.",
        "Ba mức “dọn dẹp”: `/clear` bắt đầu lại sạch (dùng khi đổi việc); `/compact` tóm tắt **cả** hội thoại, có thể kèm trọng tâm như `/compact Focus on code samples and API usage`; và **Summarize** trong menu `/rewind` (hoặc Esc hai lần khi ô nhập trống) để nén **đúng một đoạn**: *Summarize from here* nén từ điểm chọn trở về sau và giữ nguyên phần trước — hợp với buổi debug dài mà yêu cầu ban đầu vẫn quan trọng; *Summarize up to here* nén phần trước và giữ các tin nhắn sau. Bạn có thể gõ hướng dẫn cho bản tóm tắt ở dòng “add context (optional)”.",
        "Không phải câu hỏi nào cũng nên vào lịch sử: `/btw` trả lời một câu hỏi nhanh **mà không thêm vào hội thoại**. Muốn thử một hướng táo bạo nhưng giữ nguyên phiên hiện tại: `/branch` sao chép lịch sử sang **phiên mới**, phiên gốc không đổi. Cần tìm hiểu rộng trong codebase lớn: nhờ **subagent** khám phá — nó đọc file trong context riêng và chỉ gửi về bản tóm tắt.",
        "Tóm tắt luôn có thể làm rơi chi tiết. Điều cần nhớ lâu dài (quyết định kiến trúc, quy ước) hãy ghi vào **CLAUDE.md**; kết luận của một việc dài có thể ghi ra **file ghi chú** để phiên mới đọc lại.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Cuộc họp dài 3 tiếng: thư ký không xoá cả biên bản (clear) mà tóm tắt phần tranh luận lan man, giữ nguyên phần mục tiêu đầu buổi (Summarize from here). Câu hỏi bên lề “máy chiếu mượn của ai?” thì hỏi nhỏ, không ghi biên bản (/btw). Muốn bàn phương án B mà không làm rối phương án A thì mở một tờ biên bản riêng (/branch).",
      },
      terms: [
        { term: "Rewind menu", definition: "Menu mở bằng /rewind hoặc Esc hai lần (ô nhập trống): khôi phục code/hội thoại hoặc tóm tắt một đoạn." },
        { term: "Summarize from here / up to here", definition: "Nén phần từ điểm chọn trở đi / phần trước điểm chọn thành bản tóm tắt." },
        { term: "/btw", definition: "Hỏi nhanh một câu; câu trả lời không thêm vào lịch sử hội thoại." },
        { term: "/branch", definition: "Tách phiên: sao chép lịch sử sang phiên mới, phiên gốc giữ nguyên." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bộ công cụ quản lý context",
      infographic: {
        kind: "table",
        headers: ["Công cụ", "Làm gì", "Giữ lại gì", "Dùng khi"],
        rows: [
          ["/context", "Xem cái gì chiếm chỗ", "—", "Trước khi quyết định dọn dẹp"],
          ["/clear", "Bắt đầu hội thoại mới", "Không gì (CLAUDE.md vẫn nạp lại)", "Chuyển sang việc không liên quan"],
          ["/compact [trọng tâm]", "Tóm tắt cả hội thoại", "Điều bạn nêu trong trọng tâm", "Cùng việc nhưng hội thoại quá dài"],
          ["/rewind → Summarize from here", "Nén từ điểm chọn trở đi", "Toàn bộ phần trước điểm chọn", "Debug dài, yêu cầu ban đầu còn quan trọng"],
          ["/rewind → Summarize up to here", "Nén phần trước điểm chọn", "Các tin nhắn sau điểm chọn", "Phần đầu toàn log cũ không cần nữa"],
          ["/btw", "Trả lời câu hỏi nhanh", "Lịch sử không đổi", "Câu hỏi bên lề"],
          ["/branch", "Sao chép sang phiên mới", "Phiên gốc nguyên vẹn", "Thử hướng khác"],
        ],
      },
      caption: "Theo tài liệu Checkpointing và Best practices (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: chọn công cụ",
      mermaid: `flowchart TD
  A["Context có vấn đề (/context)"] --> B{"Còn làm cùng việc?"}
  B -->|"Không"| C["/clear"]
  B -->|"Có"| D{"Phần nào thừa?"}
  D -->|"Đoạn thử-sai sau yêu cầu ban đầu"| E["/rewind → Summarize from here"]
  D -->|"Đoạn đầu toàn log cũ"| F["/rewind → Summarize up to here"]
  D -->|"Rải rác khắp nơi"| G["/compact kèm trọng tâm"]
  H["Câu hỏi bên lề"] --> I["/btw"]
  J["Muốn thử hướng khác"] --> K["/branch"]
  L["Cần khám phá rộng"] --> M["Subagent, nhận tóm tắt"]`,
      caption: "Dọn đúng đoạn cần dọn, giữ phần còn giá trị.",
      alt: "Lưu đồ: xem /context. Nếu không còn làm cùng việc thì /clear. Nếu cùng việc: đoạn thử-sai sau yêu cầu ban đầu thì Summarize from here; đoạn đầu toàn log cũ thì Summarize up to here; thừa rải rác thì /compact kèm trọng tâm. Câu hỏi bên lề dùng /btw; thử hướng khác dùng /branch; khám phá rộng dùng subagent.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: phiên debug 3 giờ",
      bad: {
        label: "Để mọi thứ chồng chất",
        content: "Yêu cầu ban đầu → 40 lần thử–sai → hỏi bên lề về cú pháp regex → dán thêm 2 file log → /clear vì “rối quá” → giải thích lại từ đầu.",
        notes: ["Câu hỏi bên lề nằm lại trong lịch sử.", "/clear làm mất cả yêu cầu ban đầu và những gì đã loại trừ.", "Phải giải thích lại tốn thời gian."],
      },
      good: {
        label: "Dọn đúng đoạn",
        content: "Câu hỏi regex → /btw.\nSau 40 lần thử → /rewind, chọn tin nhắn sau yêu cầu ban đầu → Summarize from here, ghi: “giữ các giả thuyết đã loại trừ”.\nTìm hiểu module cache → subagent, nhận tóm tắt.\nChốt nguyên nhân → ghi vào ghi-chu-debug.md.",
        notes: ["Yêu cầu ban đầu giữ nguyên.", "Thử–sai được nén có hướng dẫn.", "Kết luận nằm trong file, không phụ thuộc lịch sử."],
      },
      takeaway: "Dọn dẹp có chọn lọc tốt hơn xoá sạch.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn công cụ cho từng tình huống",
      sim: {
        kind: "choose",
        options: [
          { id: "clear", label: "/clear" },
          { id: "compact", label: "/compact kèm trọng tâm" },
          { id: "sum-from", label: "/rewind → Summarize from here" },
          { id: "btw", label: "/btw" },
          { id: "branch", label: "/branch" },
          { id: "subagent", label: "Nhờ subagent khám phá" },
          { id: "claudemd", label: "Ghi vào CLAUDE.md" },
        ],
        scenarios: [
          { id: "s1", text: "Debug 2 giờ: yêu cầu ban đầu ở đầu phiên vẫn quan trọng, phía sau là rất nhiều thử–sai.", answer: "sum-from", why: "Nén từ sau yêu cầu ban đầu trở đi, giữ nguyên phần đầu." },
          { id: "s2", text: "Đang làm dở tính năng, muốn hỏi nhanh cú pháp một biểu thức chính quy.", answer: "btw", why: "/btw trả lời mà không thêm vào lịch sử." },
          { id: "s3", text: "Muốn thử một cách làm táo bạo nhưng vẫn giữ nguyên phiên hiện tại để quay lại.", answer: "branch", why: "/branch sao chép sang phiên mới, phiên gốc không đổi." },
          { id: "s4", text: "Cần biết hệ thống xác thực xử lý refresh token thế nào trong một codebase lớn.", answer: "subagent", why: "Subagent đọc file trong context riêng, chỉ gửi về tóm tắt." },
          { id: "s5", text: "Đã xong tính năng, chuyển sang viết tài liệu cho phần khác.", answer: "clear", why: "Việc mới không liên quan — bắt đầu sạch." },
          { id: "s6", text: "Cùng một tính năng, hội thoại đã rất dài và lẫn lộn; cần giữ các thay đổi API.", answer: "compact", why: "/compact kèm trọng tâm “giữ thay đổi API”." },
          { id: "s7", text: "Nhóm vừa chốt quy ước đặt tên mới, cần áp dụng ở mọi phiên sau.", answer: "claudemd", why: "Quy tắc lâu dài nằm trong CLAUDE.md, được nạp mỗi phiên." },
        ],
      },
      intro: "Chọn công cụ phù hợp nhất cho mỗi tình huống trong một phiên Claude Code dài.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dọn context giữa phiên",
      steps: [
        { title: "Xem trước khi dọn", detail: "Biết cái gì chiếm chỗ mới chọn đúng cách dọn.", code: { lang: "text", content: "/context" } },
        { title: "Hỏi bên lề không làm bẩn lịch sử", detail: "Câu trả lời hiện ra nhưng không vào hội thoại.", code: { lang: "text", content: "/btw regex nào khớp số điện thoại Việt Nam 10 chữ số?" } },
        { title: "Nén đúng đoạn bằng /rewind", detail: "Chọn tin nhắn, dùng mũi tên tới Summarize from here, gõ hướng dẫn ở dòng add context (optional) rồi Enter.", code: { lang: "text", content: "/rewind\n→ chọn tin nhắn sau yêu cầu ban đầu\n→ Summarize from here: “giữ các giả thuyết đã loại trừ và lệnh tái hiện lỗi”" } },
        { title: "Đẩy khám phá sang subagent", detail: "Chỉ phần kết luận quay về hội thoại chính.", code: { lang: "text", content: "Dùng một subagent tìm hiểu module cache xử lý hết hạn dữ liệu thế nào, báo lại tối đa 10 dòng." } },
        { title: "Ghi điều cần nhớ ra file", detail: "Quy tắc lâu dài → CLAUDE.md; kết luận việc dài → file ghi chú trong dự án." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Bạn đang debug lỗi tính sai tổng tuần đã 3 giờ trong một phiên. Phần đầu có yêu cầu và lệnh tái hiện lỗi; sau đó là hàng chục lần thử, vài câu hỏi bên lề, và bạn còn cần tìm hiểu module đọc CSV. Viết kế hoạch 4–5 bước quản lý context, có lệnh cụ thể.",
      placeholder: "1. …\n2. …\n3. …\n4. …",
      rubric: [
        { id: "view", label: "Xem /context", weight: 1, check: { kind: "regex", pattern: "/context" }, pass: "Có /context.", fail: "Bắt đầu bằng /context." },
        { id: "rewind", label: "Nén đúng đoạn bằng /rewind", weight: 1, check: { kind: "regex", pattern: "(/rewind|summarize from here|summarize up to here)" }, pass: "Có tóm tắt có chọn lọc.", fail: "Dùng /rewind → Summarize from here để giữ yêu cầu ban đầu." },
        { id: "side", label: "Câu hỏi bên lề", weight: 1, check: { kind: "regex", pattern: "/btw" }, pass: "Có /btw.", fail: "Câu hỏi bên lề dùng /btw." },
        { id: "sub", label: "Subagent khám phá", weight: 1, check: { kind: "anyKeyword", keywords: ["subagent"] }, pass: "Có subagent.", fail: "Nhờ subagent tìm hiểu module đọc CSV." },
        { id: "persist", label: "Ghi kết luận", weight: 1, check: { kind: "regex", pattern: "(claude\\.md|ghi chu|\\.md\\b|ghi vao file)" }, pass: "Có ghi lại kết luận.", fail: "Ghi kết luận vào file ghi chú hoặc CLAUDE.md." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "1. /context để xem log và kết quả công cụ đang chiếm bao nhiêu.\n2. /rewind, chọn tin nhắn ngay sau yêu cầu ban đầu → Summarize from here, hướng dẫn: giữ lệnh tái hiện lỗi và các giả thuyết đã loại trừ.\n3. Từ giờ câu hỏi bên lề dùng /btw.\n4. Dùng một subagent tìm hiểu module đọc CSV, chỉ báo lại cách xử lý dòng trống.\n5. Khi tìm ra nguyên nhân, ghi kết luận vào ghi-chu-debug.md; quy ước mới thì thêm vào CLAUDE.md.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Nhìn trước khi dọn: /context.",
        "/clear khi đổi việc; /compact (kèm trọng tâm) khi cùng việc nhưng dài; /rewind → Summarize để nén đúng một đoạn.",
        "Summarize from here giữ phần đầu; Summarize up to here giữ phần sau; có thể gõ hướng dẫn cho bản tóm tắt.",
        "/btw cho câu hỏi bên lề; /branch để thử hướng khác; subagent cho khám phá rộng.",
        "Điều quan trọng ghi vào CLAUDE.md hoặc file ghi chú — không dựa vào lịch sử hội thoại.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Trong phiên Claude Code dài tiếp theo của bạn (ít nhất 1 giờ).",
      tasks: [
        "Dùng /btw cho mọi câu hỏi bên lề.",
        "Dùng /rewind → Summarize ít nhất một lần, có gõ hướng dẫn tóm tắt.",
        "Thử /branch cho một hướng làm thay thế.",
        "So sánh /context trước và sau.",
      ],
      deliverable: "Ghi chú: các lần dùng công cụ, lý do, và kết quả /context trước/sau.",
      checklist: ["Có dùng /btw", "Có Summarize kèm hướng dẫn", "Kết luận quan trọng được ghi ra file"],
    },
  ],
};
