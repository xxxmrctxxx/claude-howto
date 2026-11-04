import type { Lesson } from "@/lib/types/content";

const FO = "https://code.claude.com/docs/en/features-overview";
const HK = "https://code.claude.com/docs/en/hooks-guide";

export const lessonKhiNaoDung: Lesson = {
  id: "ch07-l03",
  chapterId: "ch07",
  slug: "khi-nao-dung",
  title: "Khi nào cần dùng?",
  subtitle: "CLAUDE.md, skill, MCP, subagent, hook hay plugin? Nhận ra dấu hiệu của từng loại, hiểu chi phí context, và bổ sung dần thay vì cấu hình mọi thứ từ đầu.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Nhận ra dấu hiệu cho từng tính năng mở rộng theo bảng “Build your setup over time”." },
    { id: "o2", text: "So sánh cách nạp và chi phí context của CLAUDE.md, skill, MCP, subagent và hook." },
    { id: "o3", text: "Chọn hook cho việc phải xảy ra mọi lần (rào chắn), skill cho việc cần Claude suy luận." },
    { id: "o4", text: "Lập lộ trình bổ sung dần và kết hợp các tính năng cho một dự án thật." },
  ],
  concepts: [
    { id: "build-over-time", label: "Bổ sung dần" },
    { id: "trigger-claude-md", label: "Dấu hiệu: CLAUDE.md" },
    { id: "trigger-skill", label: "Dấu hiệu: skill" },
    { id: "trigger-subagent", label: "Dấu hiệu: subagent" },
    { id: "trigger-hook", label: "Dấu hiệu: hook" },
    { id: "trigger-plugin", label: "Dấu hiệu: plugin" },
    { id: "context-cost", label: "Chi phí context" },
    { id: "claude-md-size", label: "CLAUDE.md dưới 200 dòng" },
    { id: "hook-vs-skill", label: "Hook và skill" },
    { id: "guardrail-hook", label: "Rào chắn bằng hook" },
    { id: "combine-features", label: "Kết hợp tính năng" },
    { id: "feature-layering", label: "Nhiều cấp cùng lúc" },
  ],
  hints: [
    "Mỗi tính năng có một dấu hiệu dễ nhận ra — thêm khi dấu hiệu xuất hiện.",
    "Phải xảy ra mọi lần, không cần suy nghĩ → hook. Cần Claude suy luận → skill.",
    "Hook không tốn context trừ khi trả output; CLAUDE.md tốn ở mọi request.",
  ],
  sources: [
    { label: "Claude Code — Extend Claude Code (bảng tính năng, Build your setup over time, so sánh, chi phí context)", href: FO },
    { label: "Claude Code — Automate workflows with hooks", href: HK },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude Code có nhiều cách mở rộng, mỗi cách giải một bài toán: **CLAUDE.md** — ngữ cảnh luôn có ở mọi phiên; **skill** — kiến thức và quy trình dùng theo nhu cầu; **MCP** — kết nối dịch vụ bên ngoài; **subagent** — làm việc trong context riêng, chỉ trả bản tóm tắt; **hook** — chạy lệnh của bạn khi tới một sự kiện (ví dụ sau mỗi lần sửa file); **plugin** — đóng gói những thứ trên để dùng lại ở repo khác hoặc chia sẻ.",
        "Tài liệu khuyên **không cần cấu hình mọi thứ từ đầu**: bắt đầu bằng CLAUDE.md, rồi thêm khi gặp dấu hiệu. Claude làm sai quy ước hoặc lệnh **hai lần** → CLAUDE.md. Bạn cứ **gõ lại cùng một prompt** để bắt đầu việc, hoặc **dán cùng một quy trình lần thứ ba** → skill. Bạn cứ **copy dữ liệu từ tab trình duyệt** Claude không thấy → MCP. Một **việc phụ đổ đầy output** bạn sẽ không xem lại → subagent. Muốn điều gì đó **xảy ra mọi lần mà không phải nhắc** → hook. **Repo thứ hai** cần cùng bộ cấu hình → plugin.",
        "Mỗi tính năng tốn context khác nhau: CLAUDE.md nạp toàn bộ từ đầu phiên và có mặt ở **mọi request** (vì vậy nên giữ dưới 200 dòng); skill chỉ nạp **mô tả**, nội dung nạp khi dùng; MCP nạp **tên công cụ**, schema khi cần; subagent dùng **context riêng**; hook **không tốn** trừ khi trả output vào hội thoại.",
        "**Hook khác skill ở tính chắc chắn**: hook chạy theo sự kiện mà không cần Claude quyết định; skill là hướng dẫn Claude diễn giải, kết quả có thể khác nhau. Một câu “không bao giờ sửa .env” trong CLAUDE.md hay skill chỉ là **yêu cầu**; một hook `PreToolUse` chặn việc sửa đó mới là **thực thi**. Các tính năng kết hợp được: CLAUDE.md cho quy ước, skill cho quy trình phát hành, MCP nối cơ sở dữ liệu, hook chạy lint sau mỗi lần sửa.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Mở một xưởng nhỏ: nội quy dán ở cửa (CLAUDE.md), tập quy trình chuẩn trên kệ (skill), đường dây tới nhà cung cấp (MCP), thuê ngoài một việc rồi nhận báo cáo (subagent), cảm biến tự ngắt máy khi quá nhiệt (hook), và bộ “bộ khung xưởng” để mở chi nhánh thứ hai (plugin). Không ai mua đủ mọi thứ từ ngày đầu — gặp vấn đề nào thì bổ sung thứ đó.",
      },
      terms: [
        { term: "Hook", definition: "Lệnh, yêu cầu HTTP, prompt… do Claude Code tự chạy khi tới một sự kiện vòng đời, như sau khi dùng công cụ." },
        { term: "Subagent", definition: "Trợ lý làm việc trong context riêng và chỉ trả bản tóm tắt về hội thoại chính." },
        { term: "Plugin", definition: "Gói đóng skill, hook, subagent, MCP server để cài một lần, dùng ở nhiều repo." },
        { term: "Chi phí context", definition: "Phần context window mà một tính năng chiếm, ảnh hưởng chất lượng và chi phí." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: dấu hiệu nào, thêm gì",
      infographic: {
        kind: "table",
        headers: ["Dấu hiệu", "Thêm"],
        rows: [
          ["Claude làm sai một quy ước hoặc lệnh lần thứ hai", "CLAUDE.md"],
          ["Bạn cứ gõ lại cùng một prompt để bắt đầu một việc", "Skill gọi bằng /tên"],
          ["Bạn dán cùng một quy trình nhiều bước lần thứ ba", "Skill"],
          ["Bạn cứ copy dữ liệu từ tab trình duyệt Claude không thấy", "MCP server"],
          ["Một việc phụ đổ đầy output bạn sẽ không xem lại", "Subagent"],
          ["Muốn điều gì đó xảy ra mọi lần mà không phải nhắc", "Hook"],
          ["Repo thứ hai cần cùng bộ cấu hình", "Plugin"],
        ],
      },
      caption: "Rút gọn từ bảng “Build your setup over time” trong tài liệu Extend Claude Code (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: chọn tính năng",
      mermaid: `flowchart TD
  A["Vấn đề lặp lại"] --> B{"Phải xảy ra mọi lần, không cần suy nghĩ?"}
  B -->|"Có"| H["Hook"]
  B -->|"Không"| C{"Cần dữ liệu/hành động ở hệ thống ngoài?"}
  C -->|"Có"| M["MCP server"]
  C -->|"Không"| D{"Claude cần biết ở mọi phiên?"}
  D -->|"Có"| CM["CLAUDE.md"]
  D -->|"Không"| E{"Việc phụ đổ nhiều output?"}
  E -->|"Có"| S["Subagent"]
  E -->|"Không"| K["Skill"]
  K --> P{"Repo thứ hai cần cùng bộ?"}
  H --> P
  M --> P
  CM --> P
  S --> P
  P -->|"Có"| PL["Đóng gói thành plugin"]`,
      caption: "Sơ đồ đơn giản hoá để luyện tư duy; thực tế các tính năng thường kết hợp với nhau.",
      alt: "Lưu đồ chọn tính năng: nếu việc phải xảy ra mọi lần mà không cần suy nghĩ thì dùng hook; nếu không, cần dữ liệu hoặc hành động ở hệ thống ngoài thì dùng MCP server; nếu không, Claude cần biết ở mọi phiên thì CLAUDE.md; nếu không, việc phụ đổ nhiều output thì subagent; còn lại dùng skill. Sau đó nếu repo thứ hai cần cùng bộ thì đóng gói thành plugin.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: quy tắc bắt buộc",
      bad: {
        label: "Chỉ dặn trong CLAUDE.md",
        content: "CLAUDE.md:\n- KHÔNG BAO GIỜ sửa file .env!!!\n- Luôn format code bằng Prettier sau khi sửa.",
        notes: ["Đây là yêu cầu, không phải bảo đảm.", "Claude có thể quên khi context dài.", "Tốn context ở mọi request."],
      },
      good: {
        label: "Hook thực thi, CLAUDE.md giải thích",
        content: "Hook PreToolUse: chặn mọi lần sửa .env (thoát mã 2 kèm lý do).\nHook PostToolUse (matcher Edit|Write): chạy Prettier cho file vừa sửa.\nCLAUDE.md: “Bí mật nằm trong .env và được hook bảo vệ; cần biến mới thì hỏi người dùng.”",
        notes: ["Rào chắn chạy mọi lần.", "Format tự động, không cần nhắc.", "CLAUDE.md chỉ giữ phần Claude cần hiểu."],
      },
      takeaway: "Quy tắc phải đúng mọi lần → hook. Hướng dẫn cần suy luận → CLAUDE.md hoặc skill.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xếp mỗi dấu hiệu vào đúng tính năng",
      sim: {
        kind: "classify",
        bins: [
          { id: "claude-md", label: "CLAUDE.md" },
          { id: "skill", label: "Skill" },
          { id: "mcp", label: "MCP" },
          { id: "subagent", label: "Subagent" },
          { id: "hook", label: "Hook" },
          { id: "plugin", label: "Plugin" },
        ],
        items: [
          { id: "i1", text: "Claude lần thứ hai dùng npm trong khi dự án dùng pnpm.", bin: "claude-md", why: "Quy ước sai lần thứ hai → CLAUDE.md." },
          { id: "i2", text: "Lần thứ ba bạn dán cùng quy trình phát hành 8 bước vào chat.", bin: "skill", why: "Quy trình nhiều bước lặp lại → skill." },
          { id: "i3", text: "Bạn liên tục copy danh sách ticket từ trang quản lý công việc trên trình duyệt.", bin: "mcp", why: "Dữ liệu ở hệ thống Claude không thấy → MCP." },
          { id: "i4", text: "Tìm hiểu 40 file log để trả lời một câu hỏi làm hội thoại đầy output.", bin: "subagent", why: "Việc phụ nhiều output → subagent, chỉ trả tóm tắt." },
          { id: "i5", text: "Muốn Prettier tự chạy sau mỗi lần Claude sửa file, không cần nhắc.", bin: "hook", why: "Xảy ra mọi lần theo sự kiện → hook." },
          { id: "i6", text: "Repo thứ hai của nhóm cần đúng bộ skill và hook như repo đầu.", bin: "plugin", why: "Dùng lại ở repo khác → plugin." },
          { id: "i7", text: "Phải chặn tuyệt đối mọi lần sửa file .env.", bin: "hook", why: "Rào chắn bắt buộc → hook PreToolUse." },
          { id: "i8", text: "Bạn cứ gõ lại cùng một câu mở đầu để bắt đầu buổi review tuần.", bin: "skill", why: "Prompt lặp lại để bắt đầu việc → skill gọi bằng /tên." },
        ],
      },
      intro: "Mỗi dấu hiệu dưới đây khớp với một tính năng trong bảng của tài liệu.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: bổ sung dần cho một dự án",
      steps: [
        { title: "Bắt đầu với CLAUDE.md", detail: "Tạo bằng /init, giữ ngắn (dưới 200 dòng): lệnh build/test, quy ước chính.", code: { lang: "text", content: "/init" } },
        { title: "Ghi nhật ký lặp lại trong một tuần", detail: "Mỗi lần sửa Claude cùng một lỗi, dán lại cùng một đoạn, hay copy dữ liệu từ nơi khác — ghi lại." },
        { title: "Đối chiếu bảng dấu hiệu", detail: "Mỗi mục trong nhật ký khớp với tính năng nào? Thêm đúng tính năng đó, từng cái một." },
        { title: "Kiểm tra chi phí context", detail: "Xem phần nào đang chiếm context và trạng thái các MCP server.", code: { lang: "text", content: "/context\n/mcp" } },
        { title: "Đóng gói khi cần dùng lại", detail: "Khi repo thứ hai cần cùng bộ skill/hook/MCP, đóng gói thành plugin." },
        { title: "Dọn định kỳ", detail: "Bỏ skill không còn dùng; chuyển phần tham khảo dài từ CLAUDE.md sang skill." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc nhật ký một tuần của nhóm trong dữ liệu mẫu. Với mỗi mục T1–T5, viết một dòng: thêm tính năng nào và vì sao.",
      sampleData: {
        name: "Nhật ký tuần của nhóm",
        content:
          "T1: Claude lại chạy npm test thay vì pnpm test (lần thứ hai trong tuần).\nT2: Mỗi lần phát hành, tôi dán cùng checklist 10 bước vào chat (đã ba lần).\nT3: Tôi phải copy số liệu lỗi từ trang giám sát trên trình duyệt vào chat.\nT4: Muốn mọi file Claude sửa đều được format tự động, không cần nhắc.\nT5: Dự án mới của nhóm cần dùng lại toàn bộ skill và hook của dự án này.",
      },
      placeholder: "T1: … vì …\nT2: …\nT3: …\nT4: …\nT5: …",
      rubric: [
        { id: "t1", label: "T1 → CLAUDE.md", weight: 1, check: { kind: "regex", pattern: "t1[^\\n]*claude\\.md" }, pass: "T1 đúng.", fail: "T1: sai quy ước lần hai → CLAUDE.md." },
        { id: "t2", label: "T2 → skill", weight: 1, check: { kind: "regex", pattern: "t2[^\\n]*skill" }, pass: "T2 đúng.", fail: "T2: quy trình dán lần ba → skill." },
        { id: "t3", label: "T3 → MCP", weight: 1, check: { kind: "regex", pattern: "t3[^\\n]*mcp" }, pass: "T3 đúng.", fail: "T3: dữ liệu ở hệ thống ngoài → MCP." },
        { id: "t4", label: "T4 → hook", weight: 1, check: { kind: "regex", pattern: "t4[^\\n]*hook" }, pass: "T4 đúng.", fail: "T4: xảy ra mọi lần → hook." },
        { id: "t5", label: "T5 → plugin", weight: 1, check: { kind: "regex", pattern: "t5[^\\n]*plugin" }, pass: "T5 đúng.", fail: "T5: dùng lại ở repo khác → plugin." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "T1: CLAUDE.md — Claude làm sai lệnh lần thứ hai, ghi “dùng pnpm test”.\nT2: skill — quy trình nhiều bước đã dán ba lần, gọi bằng /phat-hanh.\nT3: MCP — dữ liệu nằm ở trang giám sát Claude không thấy.\nT4: hook — PostToolUse chạy format sau mỗi lần sửa, không cần nhắc.\nT5: plugin — đóng gói skill và hook để dùng ở repo khác.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "CLAUDE.md: mọi phiên. Skill: kiến thức/quy trình theo nhu cầu. MCP: dịch vụ ngoài. Subagent: context riêng. Hook: tự chạy theo sự kiện. Plugin: đóng gói để dùng lại.",
        "Bổ sung dần theo dấu hiệu: sai lần hai → CLAUDE.md; dán lần ba → skill; copy từ trình duyệt → MCP; việc phụ ồn ào → subagent; mọi lần → hook; repo thứ hai → plugin.",
        "Chi phí context: CLAUDE.md mọi request (giữ dưới 200 dòng); skill mô tả; MCP tên công cụ; subagent riêng; hook không tốn trừ khi trả output.",
        "Quy tắc bắt buộc đặt trong hook (thực thi), không chỉ dặn trong CLAUDE.md (yêu cầu).",
        "Các tính năng kết hợp: mỗi cái làm phần việc nó giỏi nhất.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Áp dụng cho dự án bạn dùng Claude Code nhiều nhất.",
      tasks: [
        "Ghi nhật ký lặp lại trong 5 ngày làm việc.",
        "Đối chiếu từng mục với bảng dấu hiệu; chọn đúng một tính năng cho mỗi mục.",
        "Thêm tính năng cho mục xuất hiện nhiều nhất trước; đo lại sau một tuần.",
      ],
      deliverable: "Bảng: Mục lặp lại | Số lần | Dấu hiệu | Tính năng | Đã thêm? | Kết quả sau một tuần.",
      checklist: ["Không thêm tính năng khi chưa có dấu hiệu", "Quy tắc bắt buộc đã thành hook", "CLAUDE.md vẫn dưới 200 dòng"],
    },
  ],
};
