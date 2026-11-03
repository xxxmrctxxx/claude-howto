import type { Lesson } from "@/lib/types/content";

const SK = "https://code.claude.com/docs/en/skills";
const MCP = "https://code.claude.com/docs/en/mcp";
const PL = "https://code.claude.com/docs/en/discover-plugins";

export const lessonLoiPhoBienMoRong: Lesson = {
  id: "ch07-l07",
  chapterId: "ch07",
  slug: "loi-pho-bien",
  title: "Các lỗi phổ biến",
  subtitle: "Skill không kích hoạt hoặc kích hoạt quá nhiều, MCP sai thứ tự lệnh, sai phạm vi, output quá lớn, plugin chưa nạp — nhận ra triệu chứng và sửa đúng một chỗ.",
  level: "advanced",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chẩn đoán lỗi skill: không tự kích hoạt, kích hoạt quá nhiều, ngừng làm theo giữa chừng, mô tả bị cắt, frontmatter lỗi." },
    { id: "o2", text: "Chẩn đoán lỗi MCP: sai thứ tự tuỳ chọn hoặc thiếu --, sai phạm vi, output vượt giới hạn." },
    { id: "o3", text: "Chẩn đoán lỗi plugin: chưa /reload-plugins, được bật trong dự án nhưng chưa cài trên máy." },
    { id: "o4", text: "Áp dụng vòng xử lý lỗi: đọc thông báo nguyên văn → chẩn đoán → sửa đúng một thứ → kiểm tra lại." },
  ],
  concepts: [
    { id: "skill-not-triggering", label: "Skill không tự kích hoạt" },
    { id: "skill-over-triggering", label: "Skill kích hoạt quá nhiều" },
    { id: "skill-stops-following", label: "Claude ngừng làm theo skill" },
    { id: "description-budget", label: "Description bị cắt" },
    { id: "yaml-error", label: "Frontmatter lỗi" },
    { id: "mcp-order-error", label: "Sai thứ tự lệnh MCP" },
    { id: "mcp-wrong-scope", label: "Sai phạm vi MCP" },
    { id: "mcp-output-limit", label: "Output MCP quá lớn" },
    { id: "plugin-reload", label: "Chưa /reload-plugins" },
    { id: "plugin-not-installed", label: "Plugin bật nhưng chưa cài" },
    { id: "debug-loop", label: "Vòng xử lý lỗi" },
    { id: "skill-length", label: "SKILL.md quá dài" },
  ],
  hints: [
    "Gọi tay được mà Claude không tự dùng → xem lại description.",
    "Quy tắc phải đúng mọi lần mà Claude hay bỏ → chuyển thành hook.",
    "Sửa từng thứ một, rồi kiểm tra lại bằng cùng công cụ.",
  ],
  sources: [
    { label: "Claude Code — Skills: Troubleshooting (not triggering, triggers too often, stops following, descriptions cut short)", href: SK },
    { label: "Claude Code — MCP: --, --env, phạm vi, giới hạn output, MAX_MCP_OUTPUT_TOKENS", href: MCP },
    { label: "Claude Code — Install and manage plugins: /reload-plugins, enabled but not installed", href: PL },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Lỗi skill hay gặp.** *Không tự kích hoạt*: description thiếu từ khoá người dùng hay nói — thêm từ khoá, thử nói gần với description hơn, hoặc gọi thẳng `/tên`. *Kích hoạt quá nhiều*: viết description cụ thể hơn, hoặc thêm `disable-model-invocation: true` nếu chỉ muốn gọi tay. *Frontmatter YAML lỗi*: skill vẫn gọi được bằng `/tên` nhưng Claude không khớp được description — chạy `claude --debug` hoặc `claude plugin validate .claude/skills`.",
        "*Claude làm theo ở lượt đầu rồi bỏ dần*: nội dung skill được thêm vào hội thoại khi gọi và **không được đọc lại** ở các lượt sau. Quy tắc phải đúng mọi lần → chuyển thành **hook**; hướng dẫn cần suy luận → viết cho cả nhiệm vụ (“chạy test sau **mỗi** lần sửa” thay vì “chạy test”). Sau khi hội thoại được **compact**, có thể chỉ còn phần đầu skill — gọi lại skill và đặt ý quan trọng ở **đầu** SKILL.md (tài liệu khuyên giữ SKILL.md dưới 500 dòng). *Description bị cắt*: khi có rất nhiều skill, danh sách skill có ngân sách ký tự (khoảng 1% context window) nên mô tả của skill ít dùng bị bỏ bớt; mỗi mục còn bị giới hạn 1.536 ký tự — đặt ý chính lên đầu, dùng `/doctor` để xem chi phí.",
        "**Lỗi MCP hay gặp.** *Sai thứ tự hoặc thiếu `--`*: tên server đứng ngay sau `--env` bị hiểu là một cặp KEY=value; thiếu `--` khiến tham số của server bị hiểu nhầm. *Sai phạm vi*: thêm không ghi `--scope` là local — đồng đội không thấy; muốn chia sẻ phải dùng `--scope project` và commit `.mcp.json`. *Output quá lớn*: Claude Code cảnh báo khi output của một công cụ MCP vượt **10.000 token** và mặc định giới hạn **25.000 token**; trước hết thu hẹp yêu cầu (lọc theo thời gian, mức lỗi), chỉ khi thật cần mới tăng bằng `MAX_MCP_OUTPUT_TOKENS`.",
        "**Lỗi plugin hay gặp.** Bỏ qua dòng `Run /reload-plugins to apply.` — plugin chưa được nạp vào phiên. Plugin **được bật trong `.claude/settings.json`** nhưng máy đồng đội báo chưa cài: commit chỉ bật plugin, không tải nó về — mỗi người chạy `claude plugin install <tên>@<marketplace> --scope project` một lần. **Vòng xử lý lỗi** chung: đọc nguyên văn thông báo → dùng công cụ chẩn đoán (`claude mcp list`, `/mcp`, tab Errors trong `/plugin`, `--debug`, `/status`) → **sửa đúng một thứ** → kiểm tra lại bằng cùng công cụ. Đừng sửa nhiều thứ cùng lúc hay xoá cả thư mục cấu hình.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Thợ điện giỏi không thay cùng lúc bóng đèn, công tắc và cầu dao. Họ đọc đồng hồ đo, đoán một nguyên nhân, thay đúng một thứ rồi bật thử. Thay ba thứ một lúc thì đèn sáng cũng không biết nhờ cái nào — và lần sau hỏng lại phải đoán từ đầu.",
      },
      terms: [
        { term: "Compact", definition: "Tóm tắt hội thoại để giải phóng context; có thể chỉ giữ phần đầu của skill đã gọi." },
        { term: "MAX_MCP_OUTPUT_TOKENS", definition: "Biến môi trường đổi giới hạn token cho output của công cụ MCP (mặc định 25.000)." },
        { term: "/reload-plugins", definition: "Nạp lại plugin vào phiên đang mở để áp dụng thay đổi." },
        { term: "--debug", definition: "Chạy Claude Code với nhật ký gỡ lỗi, ví dụ để thấy lỗi phân tích frontmatter." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: triệu chứng → nguyên nhân → cách sửa",
      infographic: {
        kind: "table",
        headers: ["Triệu chứng", "Nguyên nhân thường gặp", "Cách sửa"],
        rows: [
          ["Gọi /tên được, nói tự nhiên thì không", "Description thiếu từ khoá; hoặc YAML lỗi", "Thêm từ khoá; --debug / claude plugin validate"],
          ["Skill chạy cả khi không muốn", "Description quá rộng", "Viết cụ thể hơn; disable-model-invocation: true"],
          ["Bỏ quy tắc sau vài lượt", "Skill không được đọc lại; đã compact", "Quy tắc bắt buộc → hook; gọi lại skill; ý chính lên đầu"],
          ["Đồng đội không thấy MCP server", "Thêm ở phạm vi local", "--scope project, commit .mcp.json"],
          ["claude mcp add báo lỗi tên/tham số", "Tên ngay sau --env; thiếu --", "Tuỳ chọn → tên → -- → lệnh server"],
          ["Cảnh báo output MCP lớn, bị cắt", "Vượt 10.000 / giới hạn 25.000 token", "Thu hẹp yêu cầu; MAX_MCP_OUTPUT_TOKENS khi cần"],
          ["Plugin cài xong chưa thấy lệnh", "Chưa nạp vào phiên", "/reload-plugins"],
          ["Plugin bật trong dự án, máy báo chưa cài", "Commit chỉ bật, không tải về", "claude plugin install … --scope project"],
        ],
      },
      caption: "Tổng hợp từ các mục Troubleshooting trong tài liệu Skills, MCP và Plugins (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng xử lý lỗi",
      mermaid: `flowchart TD
  A["Triệu chứng"] --> B["Ghi lại thông báo nguyên văn"]
  B --> C["Công cụ chẩn đoán: claude mcp list, /mcp, /plugin Errors, --debug, /status"]
  C --> D["Một giả thuyết nguyên nhân"]
  D --> E["Sửa đúng một thứ"]
  E --> F["Kiểm tra lại bằng cùng công cụ + bài thử nhỏ"]
  F --> G{"Hết lỗi?"}
  G -->|"Có"| H["Ghi lại cách sửa cho nhóm"]
  G -->|"Không"| D`,
      caption: "Mỗi vòng chỉ đổi một biến; ghi lại cách sửa để lần sau nhanh hơn.",
      alt: "Lưu đồ vòng xử lý lỗi: từ triệu chứng, ghi lại thông báo nguyên văn, dùng công cụ chẩn đoán như claude mcp list, /mcp, tab Errors của /plugin, --debug, /status; đưa ra một giả thuyết nguyên nhân; sửa đúng một thứ; kiểm tra lại bằng cùng công cụ và một bài thử nhỏ. Nếu hết lỗi thì ghi lại cách sửa cho nhóm, nếu chưa thì quay lại bước giả thuyết.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: xử lý MCP server không kết nối",
      bad: {
        label: "Sửa bừa nhiều thứ cùng lúc",
        content: "“Không chạy à? Xoá ~/.claude, cài lại Claude Code, đổi sang SSE, thêm lại server ở phạm vi user, đổi luôn token…”",
        notes: ["Mất toàn bộ cấu hình cá nhân.", "Không biết thay đổi nào có tác dụng.", "SSE đã lỗi thời."],
      },
      good: {
        label: "Đọc, chẩn đoán, sửa một thứ",
        content: "1. claude mcp list → logs: ✘ Failed to connect\n2. Chạy tay: npx -y log-mcp-server → khởi động mất ~8 giây\n3. Giả thuyết: vượt thời gian chờ → MCP_TIMEOUT=15000 claude\n4. claude mcp list → ✔ Connected; thử một yêu cầu chỉ đọc",
        notes: ["Có bằng chứng ở mỗi bước.", "Chỉ đổi một biến.", "Kiểm tra lại bằng cùng lệnh."],
      },
      takeaway: "Một giả thuyết, một thay đổi, một lần kiểm tra.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: tìm chỗ gây lỗi trong nhật ký cấu hình",
      sim: {
        kind: "highlight",
        instruction: "Đánh dấu những việc đã làm sai hoặc sẽ gây lỗi. Bỏ qua những việc làm đúng.",
        segments: [
          { id: "g1", text: "Thêm server: claude mcp add --transport stdio logs npx -y log-mcp-server", target: true, why: "Thiếu -- trước lệnh chạy server." },
          { id: "g2", text: "Thêm server tickets bằng claude mcp add (không ghi --scope), rồi báo cả nhóm là đã cấu hình xong cho mọi người.", target: true, why: "Mặc định là local — chỉ máy bạn thấy." },
          { id: "g3", text: "SKILL.md /bao-cao-loi: description “Viết báo cáo lỗi theo mẫu QA. Dùng khi nhờ ghi lại lỗi hoặc viết bug report.”", target: false },
          { id: "g4", text: "Quy tắc bắt buộc “chạy test sau mỗi lần sửa” chỉ được ghi ở dòng cuối một SKILL.md dài 600 dòng.", target: true, why: "Quy tắc bắt buộc nên là hook; ý quan trọng đặt ở đầu, SKILL.md nên dưới 500 dòng." },
          { id: "g5", text: "Đặt biến TICKETS_TOKEN trong máy rồi chạy lại claude mcp list.", target: false },
          { id: "g6", text: "Cài plugin xong thấy dòng “Run /reload-plugins to apply.” nhưng bỏ qua và làm tiếp.", target: true, why: "Plugin chưa được nạp vào phiên." },
          { id: "g7", text: "Vào /mcp để xác thực server notion đang Needs authentication.", target: false },
        ],
      },
      intro: "Nhật ký dưới đây ghi lại các bước một bạn đã làm. Có 4 chỗ sai.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: vòng xử lý lỗi",
      steps: [
        { title: "Ghi lại triệu chứng và thông báo nguyên văn", detail: "Chép đúng dòng trạng thái hoặc lỗi, kèm lệnh đã chạy." },
        { title: "Chọn công cụ chẩn đoán phù hợp", detail: "MCP: claude mcp list, /mcp. Plugin: tab Errors trong /plugin. Skill: claude --debug, claude plugin validate. Settings: /status.", code: { lang: "bash", content: "claude mcp list\nclaude --debug\nclaude plugin validate .claude/skills" } },
        { title: "Nêu một giả thuyết", detail: "Ví dụ: “server khởi động chậm hơn thời gian chờ”." },
        { title: "Sửa đúng một thứ", detail: "Ví dụ tăng thời gian chờ khởi động MCP.", code: { lang: "bash", content: "MCP_TIMEOUT=15000 claude" } },
        { title: "Kiểm tra lại bằng cùng công cụ", detail: "Rồi thử một yêu cầu nhỏ chỉ đọc. Chưa hết lỗi thì quay lại bước 3." },
        { title: "Ghi lại cách sửa", detail: "Thêm vào README hoặc ghi chú của nhóm để lần sau nhanh hơn." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc 5 sự cố trong dữ liệu mẫu. Với mỗi sự cố E1–E5, viết một dòng: nguyên nhân có khả năng nhất và cách sửa.",
      sampleData: {
        name: "Sự cố của nhóm",
        content:
          "E1: Skill /tong-hop-loi chạy khi gõ lệnh, nhưng nói “tổng hợp lỗi tuần này” thì Claude không dùng.\nE2: Skill /trien-khai tự chạy khi người dùng chỉ hỏi về quy trình triển khai.\nE3: Công cụ MCP truy vấn log trả về rất nhiều dữ liệu; Claude Code cảnh báo output lớn và dữ liệu bị cắt.\nE4: Đồng đội báo plugin team-tools được bật trong .claude/settings.json nhưng máy họ báo chưa cài.\nE5: Sau khi hội thoại được compact, Claude không còn làm theo các bước cuối của skill /phat-hanh.",
      },
      placeholder: "E1: …\nE2: …\nE3: …\nE4: …\nE5: …",
      rubric: [
        { id: "e1", label: "E1: description/từ khoá", weight: 1, check: { kind: "regex", pattern: "e1[^\\n]*(description|mo ta|tu khoa)" }, pass: "E1 đúng.", fail: "E1: description thiếu từ khoá như “tổng hợp lỗi tuần”." },
        { id: "e2", label: "E2: cụ thể hơn / chỉ gọi tay", weight: 1, check: { kind: "regex", pattern: "e2[^\\n]*(disable-model-invocation|cu the|goi tay)" }, pass: "E2 đúng.", fail: "E2: skill có tác dụng phụ → disable-model-invocation: true." },
        { id: "e3", label: "E3: thu hẹp / MAX_MCP_OUTPUT_TOKENS", weight: 1, check: { kind: "regex", pattern: "e3[^\\n]*(max_mcp_output_tokens|thu hep|loc)" }, pass: "E3 đúng.", fail: "E3: thu hẹp truy vấn; khi thật cần mới tăng MAX_MCP_OUTPUT_TOKENS." },
        { id: "e4", label: "E4: claude plugin install", weight: 1, check: { kind: "regex", pattern: "e4[^\\n]*claude plugin install" }, pass: "E4 đúng.", fail: "E4: mỗi người chạy claude plugin install team-tools@<marketplace> --scope project." },
        { id: "e5", label: "E5: gọi lại skill / ý chính lên đầu", weight: 1, check: { kind: "regex", pattern: "e5[^\\n]*(goi lai|len dau|o dau|hook)" }, pass: "E5 đúng.", fail: "E5: gọi lại skill sau compact; đưa bước quan trọng lên đầu SKILL.md." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "E1: description thiếu từ khoá người dùng hay nói — thêm “tổng hợp lỗi tuần, báo cáo lỗi thứ Hai” vào description.\nE2: description quá rộng và skill có tác dụng phụ — viết cụ thể hơn và thêm disable-model-invocation: true để chỉ gọi tay.\nE3: output vượt giới hạn — thu hẹp truy vấn (lọc theo ngày, mức lỗi); chỉ khi thật cần mới tăng MAX_MCP_OUTPUT_TOKENS.\nE4: commit chỉ bật plugin, không tải về — mỗi người chạy claude plugin install team-tools@<marketplace> --scope project một lần.\nE5: sau compact chỉ còn phần đầu skill — gọi lại /phat-hanh và đưa các bước quan trọng lên đầu SKILL.md.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Skill không tự kích hoạt → description thiếu từ khoá hoặc YAML lỗi (--debug, claude plugin validate). Kích hoạt quá nhiều → cụ thể hơn hoặc disable-model-invocation.",
        "Claude bỏ dần skill → quy tắc bắt buộc thành hook, viết hướng dẫn cho cả nhiệm vụ, gọi lại sau compact, ý chính đặt đầu, SKILL.md dưới 500 dòng.",
        "MCP: tuỳ chọn → tên → -- → lệnh; mặc định local nên đồng đội không thấy; output cảnh báo >10.000, giới hạn 25.000 token (MAX_MCP_OUTPUT_TOKENS).",
        "Plugin: làm theo “Run /reload-plugins to apply.”; bật trong dự án nhưng chưa cài → claude plugin install … --scope project.",
        "Vòng xử lý: đọc nguyên văn → chẩn đoán → sửa một thứ → kiểm tra lại → ghi lại.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Áp dụng cho cấu hình Claude Code của bạn hoặc nhóm.",
      tasks: [
        "Rà toàn bộ skill: description có từ khoá chưa, skill nào có tác dụng phụ mà chưa khoá, SKILL.md nào quá dài.",
        "Rà MCP: server nào cần chia sẻ mà đang ở local, công cụ nào hay trả output lớn.",
        "Viết trang “Xử lý sự cố Claude Code” ngắn cho nhóm với 5 lỗi hay gặp nhất và cách sửa.",
      ],
      deliverable: "Trang xử lý sự cố: Triệu chứng | Lệnh chẩn đoán | Nguyên nhân | Cách sửa | Cách kiểm tra lại.",
      checklist: ["Mỗi lỗi có lệnh chẩn đoán", "Mỗi cách sửa chỉ đổi một thứ", "Có bước kiểm tra lại"],
    },
  ],
};
