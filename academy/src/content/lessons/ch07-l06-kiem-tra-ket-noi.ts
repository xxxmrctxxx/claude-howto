import type { Lesson } from "@/lib/types/content";

const MCP = "https://code.claude.com/docs/en/mcp";
const SK = "https://code.claude.com/docs/en/skills";
const PL = "https://code.claude.com/docs/en/discover-plugins";
const ST = "https://code.claude.com/docs/en/settings";

export const lessonKiemTraKetNoi: Lesson = {
  id: "ch07-l06",
  chapterId: "ch07",
  slug: "kiem-tra-ket-noi",
  title: "Cách kiểm tra kết nối",
  subtitle: "Đọc trạng thái MCP server, xác thực trong /mcp, kiểm tra skill và plugin đã được nhận — rồi thử bằng một yêu cầu nhỏ, chỉ đọc, đối chiếu được.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Đọc trạng thái trong claude mcp list (Connected, Needs authentication, Failed to connect, Pending approval) và chọn bước tiếp theo." },
    { id: "o2", text: "Dùng /mcp trong phiên để xem trạng thái, xác thực và xem công cụ (tên dạng mcp__server__tool)." },
    { id: "o3", text: "Kiểm tra skill và plugin đã được nhận: gõ /, hỏi Claude, claude plugin list, tab Errors, claude plugin validate." },
    { id: "o4", text: "Xác minh đầu–cuối bằng yêu cầu nhỏ chỉ đọc có kết quả đối chiếu được; dùng /status khi settings không có hiệu lực." },
  ],
  concepts: [
    { id: "mcp-list", label: "claude mcp list" },
    { id: "status-needs-auth", label: "Needs authentication" },
    { id: "status-failed", label: "Failed to connect" },
    { id: "status-pending", label: "Pending approval" },
    { id: "missing-var", label: "Cảnh báo thiếu biến" },
    { id: "slash-mcp", label: "/mcp" },
    { id: "mcp-tool-names", label: "Tên công cụ mcp__server__tool" },
    { id: "skills-check", label: "Kiểm tra skill" },
    { id: "plugin-list", label: "claude plugin list" },
    { id: "plugin-validate", label: "claude plugin validate" },
    { id: "smoke-test", label: "Thử nhỏ, chỉ đọc" },
    { id: "status-sources", label: "/status và Setting sources" },
  ],
  hints: [
    "Ngoài phiên: claude mcp list. Trong phiên: /mcp.",
    "Needs authentication → /mcp để đăng nhập. Pending approval → mở claude trong dự án để duyệt.",
    "“Connected” chưa phải là “đúng”: thử một yêu cầu chỉ đọc và đối chiếu kết quả.",
  ],
  sources: [
    { label: "Claude Code — MCP: claude mcp list/get, /mcp, trạng thái, MCP_TIMEOUT, biến thiếu", href: MCP },
    { label: "Claude Code — Skills: Troubleshooting (skill not triggering, claude plugin validate, --debug)", href: SK },
    { label: "Claude Code — Install and manage plugins (claude plugin list, tab Installed/Errors)", href: PL },
    { label: "Claude Code — Settings: Confirm what loaded (/status)", href: ST },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Cài xong chưa có nghĩa là dùng được. Với MCP, chạy **`claude mcp list`** trong terminal để xem từng server và trạng thái: **✔ Connected** — kết nối được; **! Needs authentication** — cần đăng nhập; **✘ Failed to connect** — không kết nối được; **⏸ Pending approval** — server từ `.mcp.json` đang chờ bạn duyệt (mở `claude` trong dự án để duyệt). `claude mcp get <tên>` xem chi tiết một server. Nếu `.mcp.json` dùng `${VAR}` mà biến chưa đặt, danh sách hiện **cảnh báo thiếu biến** cho server đó.",
        "Trong phiên Claude Code, gõ **`/mcp`** để xem trạng thái các server, **xác thực** với server cần đăng nhập (trình duyệt mở ra để bạn đăng nhập), và xem danh sách công cụ — mỗi công cụ có tên đầy đủ dạng `mcp__<server>__<công-cụ>`. Server stdio khởi động chậm có thể vượt thời gian chờ: thử tăng bằng biến `MCP_TIMEOUT` (ví dụ `MCP_TIMEOUT=10000 claude` là 10 giây).",
        "Với **skill**: gõ `/` để xem skill có trong menu, hoặc hỏi Claude “What skills are available?”. Skill gọi tay được nhưng Claude không tự dùng → thường do description; nếu frontmatter YAML bị lỗi, skill vẫn gọi được bằng `/tên` nhưng Claude **không khớp được description** — chạy `claude plugin validate .claude/skills` (hoặc `claude --debug`) để tìm lỗi. Với **plugin**: `claude plugin list` in Version, Scope, Status; trong `/plugin`, tab **Installed** liệt kê plugin, tab **Errors** cho biết vì sao plugin không tải.",
        "Bước quan trọng nhất là **thử đầu–cuối bằng một yêu cầu nhỏ, chỉ đọc, có kết quả đối chiếu được**: “Dùng server tickets liệt kê 3 ticket mới nhất kèm mã” rồi so với trang web. Trạng thái Connected chỉ nói kết nối được, không nói dữ liệu đúng hay quyền đủ. Khi một thiết lập trong file settings dường như không có hiệu lực, chạy **`/status`**: dòng *Setting sources* cho biết những file settings nào đã được nạp; `claude doctor` cho biết mục nào bị từ chối.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Lắp đường dây điện thoại mới: đèn báo “có tín hiệu” (Connected) chưa đủ. Bạn gọi thử một số quen, hỏi một câu đơn giản và kiểm tra câu trả lời có đúng không — trước khi dùng đường dây đó để đặt hàng thật.",
      },
      terms: [
        { term: "claude mcp list", definition: "Lệnh terminal liệt kê MCP server đã cấu hình kèm trạng thái kết nối." },
        { term: "/mcp", definition: "Lệnh trong phiên để xem trạng thái server, xác thực và xem danh sách công cụ." },
        { term: "Smoke test", definition: "Bài thử nhỏ, an toàn để xác nhận hệ thống chạy đúng trước khi dùng thật." },
        { term: "Setting sources", definition: "Dòng trong /status liệt kê các file settings đã được nạp cho phiên." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: đọc kết quả claude mcp list",
      infographic: {
        kind: "annotated",
        label: "claude mcp list (minh hoạ)",
        lines: [
          { text: "tickets: https://mcp.tickets.vi-du.com/mcp (HTTP) - ✔ Connected", note: "Kết nối được — vẫn nên thử một yêu cầu chỉ đọc", tone: "output" },
          { text: "notion: https://mcp.notion.com/mcp (HTTP) - ! Needs authentication", note: "Vào /mcp trong phiên để đăng nhập", tone: "constraints" },
          { text: "logs: npx -y log-mcp-server - ✘ Failed to connect", note: "Kiểm tra lệnh chạy, biến môi trường, MCP_TIMEOUT", tone: "task" },
          { text: "db: https://db.vi-du.com/mcp (HTTP) - ⏸ Pending approval (run `claude` to approve)", note: "Server từ .mcp.json chờ bạn duyệt", tone: "context" },
        ],
      },
      caption: "Bốn trạng thái lấy từ tài liệu MCP (đối chiếu 03/11/2026); bố cục từng dòng chỉ là minh hoạ, máy thật có thể hiển thị khác.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ trạng thái đến hành động",
      mermaid: `flowchart TD
  A["claude mcp list"] --> B{"Trạng thái?"}
  B -->|"✔ Connected"| C["Thử yêu cầu nhỏ, chỉ đọc"]
  B -->|"! Needs authentication"| D["/mcp → xác thực trong trình duyệt"]
  B -->|"✘ Failed to connect"| E["Kiểm tra URL/lệnh, biến môi trường, MCP_TIMEOUT"]
  B -->|"⏸ Pending approval"| F["Mở claude trong dự án, duyệt server"]
  D --> A
  E --> A
  F --> A
  C --> G{"Kết quả khớp nguồn?"}
  G -->|"Có"| H["Dùng cho việc thật"]
  G -->|"Không"| I["Xem lại quyền, cấu hình, server"]`,
      caption: "Lặp lại claude mcp list sau mỗi lần sửa; chỉ dùng thật khi bài thử nhỏ khớp nguồn.",
      alt: "Lưu đồ: chạy claude mcp list và xem trạng thái. Connected thì thử yêu cầu nhỏ chỉ đọc; Needs authentication thì vào /mcp xác thực trong trình duyệt; Failed to connect thì kiểm tra URL hoặc lệnh, biến môi trường, MCP_TIMEOUT; Pending approval thì mở claude trong dự án để duyệt. Sau khi sửa thì chạy lại claude mcp list. Nếu kết quả thử khớp nguồn thì dùng cho việc thật, không khớp thì xem lại quyền, cấu hình và server.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: lần dùng đầu tiên",
      bad: {
        label: "Tin trạng thái, giao ngay việc lớn",
        content: "(Thấy ✔ Connected)\n“Cập nhật trạng thái tất cả đơn hàng tuần trước thành Đã giao.”",
        notes: ["Chưa biết công cụ trả dữ liệu đúng không.", "Thao tác ghi hàng loạt, khó hoàn tác.", "Không có gì để đối chiếu."],
      },
      good: {
        label: "Thử nhỏ, chỉ đọc, đối chiếu được",
        content: "“Dùng server don-hang đếm số đơn ngày 02/11 và liệt kê 3 mã đơn đầu tiên. Chỉ đọc, không thay đổi dữ liệu.”\n→ So với báo cáo ngày 02/11 trên trang quản trị.",
        notes: ["Chỉ đọc nên an toàn.", "Kết quả đối chiếu được với nguồn khác.", "Khớp rồi mới giao việc ghi."],
      },
      takeaway: "Connected = có đường dây. Thử nhỏ chỉ đọc = biết đường dây nói đúng.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: thấy gì, làm gì tiếp?",
      sim: {
        kind: "choose",
        options: [
          { id: "none", label: "Thử một yêu cầu nhỏ, chỉ đọc" },
          { id: "auth", label: "Vào /mcp và xác thực" },
          { id: "fix", label: "Kiểm tra lệnh/URL, biến môi trường, MCP_TIMEOUT" },
          { id: "approve", label: "Mở claude trong dự án và duyệt server" },
          { id: "env", label: "Đặt biến môi trường còn thiếu" },
          { id: "ask", label: "Gõ / hoặc hỏi “What skills are available?”" },
        ],
        scenarios: [
          { id: "s1", text: "claude mcp list hiện: tickets … ✔ Connected", answer: "none", why: "Kết nối được; xác minh dữ liệu bằng một yêu cầu chỉ đọc." },
          { id: "s2", text: "claude mcp list hiện: notion … ! Needs authentication", answer: "auth", why: "Server cần đăng nhập; /mcp mở luồng xác thực." },
          { id: "s3", text: "claude mcp list hiện: logs (stdio) … ✘ Failed to connect", answer: "fix", why: "Kiểm tra lệnh chạy server, biến môi trường; server chậm thì tăng MCP_TIMEOUT." },
          { id: "s4", text: "claude mcp list hiện: db … ⏸ Pending approval (run `claude` to approve)", answer: "approve", why: "Server từ .mcp.json chờ bạn duyệt trong phiên tương tác." },
          { id: "s5", text: "claude mcp list cảnh báo server tickets thiếu biến TICKETS_TOKEN.", answer: "env", why: "Đặt biến trong máy bạn; nếu không, chuỗi ${TICKETS_TOKEN} được dùng nguyên văn." },
          { id: "s6", text: "Vừa thêm skill /tong-hop-loi, muốn biết Claude đã nhận chưa.", answer: "ask", why: "Theo mục Troubleshooting: kiểm tra skill có trong danh sách skill." },
        ],
      },
      intro: "Mỗi dòng là thứ bạn thấy sau khi cài. Chọn bước tiếp theo hợp lý nhất.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: kiểm tra sau khi cài",
      steps: [
        { title: "Xem trạng thái MCP từ terminal", detail: "Mỗi server một dòng kèm trạng thái.", code: { lang: "bash", content: "claude mcp list\nclaude mcp get tickets" } },
        { title: "Xác thực và xem công cụ trong phiên", detail: "Chọn server cần đăng nhập để xác thực; xem tên công cụ dạng mcp__tickets__….", code: { lang: "text", content: "/mcp" } },
        { title: "Thử một yêu cầu nhỏ, chỉ đọc", detail: "Kết quả phải đối chiếu được với nguồn khác.", code: { lang: "text", content: "Dùng server tickets liệt kê 3 ticket mới nhất kèm mã và tiêu đề. Chỉ đọc, không thay đổi gì." } },
        { title: "Kiểm tra skill", detail: "Gõ / để thấy skill; hỏi danh sách skill; frontmatter lỗi thì validate.", code: { lang: "bash", content: "claude plugin validate .claude/skills" } },
        { title: "Kiểm tra plugin", detail: "Xem Version, Scope, Status; plugin lỗi thì xem tab Errors trong /plugin.", code: { lang: "bash", content: "claude plugin list" } },
        { title: "Thiết lập không có hiệu lực?", detail: "Xem dòng Setting sources trong /status; claude doctor cho biết mục bị từ chối.", code: { lang: "text", content: "/status" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc 5 dòng tình trạng trong dữ liệu mẫu. Với mỗi dòng L1–L5, viết chẩn đoán ngắn và bước tiếp theo.",
      sampleData: {
        name: "Tình trạng sau khi cài",
        content:
          "L1: tickets … ✔ Connected\nL2: notion … ! Needs authentication\nL3: logs (stdio, npx -y log-mcp-server) … ✘ Failed to connect\nL4: db (từ .mcp.json) … ⏸ Pending approval (run `claude` to approve)\nL5: Mở phiên trong repo chưa có .claude/skills/; giữa phiên tạo skill /tong-hop-loi nhưng gõ / không thấy.",
      },
      placeholder: "L1: …\nL2: …\nL3: …\nL4: …\nL5: …",
      rubric: [
        { id: "l1", label: "L1: dùng được, thử chỉ đọc", weight: 1, check: { kind: "regex", pattern: "l1[^\\n]*(chi doc|thu nho|thu mot|dung duoc|san sang)" }, pass: "L1 đúng.", fail: "L1: kết nối được — thử một yêu cầu nhỏ chỉ đọc." },
        { id: "l2", label: "L2: /mcp xác thực", weight: 1, check: { kind: "regex", pattern: "l2[^\\n]*/mcp" }, pass: "L2 đúng.", fail: "L2: vào /mcp để xác thực." },
        { id: "l3", label: "L3: kiểm tra lệnh/biến/timeout", weight: 1, check: { kind: "regex", pattern: "l3[^\\n]*(lenh|bien moi truong|timeout|npx)" }, pass: "L3 đúng.", fail: "L3: kiểm tra lệnh npx chạy được không, biến môi trường, MCP_TIMEOUT." },
        { id: "l4", label: "L4: duyệt server dự án", weight: 1, check: { kind: "regex", pattern: "l4[^\\n]*(duyet|approve)" }, pass: "L4 đúng.", fail: "L4: mở claude trong dự án và duyệt server." },
        { id: "l5", label: "L5: /reload-skills", weight: 1, check: { kind: "regex", pattern: "l5[^\\n]*/reload-skills" }, pass: "L5 đúng.", fail: "L5: thư mục skills cấp cao tạo giữa phiên → /reload-skills." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "L1: kết nối được; thử một yêu cầu nhỏ chỉ đọc và đối chiếu kết quả.\nL2: server cần đăng nhập — vào /mcp chọn notion để xác thực.\nL3: kiểm tra lệnh npx -y log-mcp-server chạy được không, biến môi trường cần thiết, thử tăng MCP_TIMEOUT.\nL4: server từ .mcp.json chờ duyệt — mở claude trong dự án và duyệt (approve).\nL5: thư mục .claude/skills/ được tạo giữa phiên — chạy /reload-skills.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "claude mcp list: ✔ Connected, ! Needs authentication, ✘ Failed to connect, ⏸ Pending approval; claude mcp get <tên> xem chi tiết.",
        "/mcp trong phiên: trạng thái, xác thực, danh sách công cụ mcp__server__tool. Server chậm: MCP_TIMEOUT.",
        "Skill: gõ / hoặc hỏi danh sách skill; frontmatter lỗi → claude plugin validate hoặc --debug.",
        "Plugin: claude plugin list; tab Installed/Errors trong /plugin.",
        "Connected chưa đủ: thử yêu cầu nhỏ chỉ đọc, đối chiếu nguồn. Settings không có hiệu lực → /status (Setting sources), claude doctor.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Áp dụng ngay sau khi bạn cài một MCP server, skill hoặc plugin thật.",
      tasks: [
        "Chạy claude mcp list và ghi trạng thái từng server; xử lý mọi dòng không phải Connected.",
        "Viết một yêu cầu thử chỉ đọc cho mỗi server và đối chiếu với nguồn.",
        "Kiểm tra mỗi skill bằng cả /tên và một câu nói tự nhiên.",
      ],
      deliverable: "Biên bản kiểm tra: Thành phần | Trạng thái | Bài thử | Kết quả đối chiếu | Việc cần làm.",
      checklist: ["Mọi server đều Connected hoặc có lý do", "Có bài thử chỉ đọc", "Đã đối chiếu kết quả với nguồn"],
    },
  ],
};
