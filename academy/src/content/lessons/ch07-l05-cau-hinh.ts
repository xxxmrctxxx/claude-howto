import type { Lesson } from "@/lib/types/content";

const MCP = "https://code.claude.com/docs/en/mcp";
const SK = "https://code.claude.com/docs/en/skills";
const ST = "https://code.claude.com/docs/en/settings";

export const lessonCauHinhMoRong: Lesson = {
  id: "ch07-l05",
  chapterId: "ch07",
  slug: "cau-hinh",
  title: "Cách cấu hình",
  subtitle: "Chọn phạm vi cho MCP server, chia sẻ .mcp.json mà không lộ bí mật, điều khiển skill bằng frontmatter, và hiểu file settings nào thắng khi trùng.",
  level: "advanced",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chọn phạm vi MCP server (local mặc định, project, user) và biết định nghĩa nào được dùng khi trùng tên." },
    { id: "o2", text: "Viết .mcp.json dùng chung cho nhóm với biến môi trường ${VAR} thay cho bí mật; hiểu bước duyệt server dự án." },
    { id: "o3", text: "Điều khiển skill bằng frontmatter (disable-model-invocation, user-invocable, allowed-tools, context: fork) và skillOverrides." },
    { id: "o4", text: "Phân biệt các file settings (user, project, local, managed) và thứ tự ưu tiên của chúng." },
  ],
  concepts: [
    { id: "mcp-scopes", label: "Phạm vi MCP" },
    { id: "mcp-precedence", label: "Ưu tiên MCP khi trùng tên" },
    { id: "mcp-json", label: ".mcp.json" },
    { id: "env-expansion", label: "Biến ${VAR} trong .mcp.json" },
    { id: "project-approval", label: "Duyệt server dự án" },
    { id: "disable-model-invocation", label: "disable-model-invocation" },
    { id: "user-invocable", label: "user-invocable" },
    { id: "allowed-tools", label: "allowed-tools" },
    { id: "context-fork", label: "context: fork" },
    { id: "skill-overrides", label: "skillOverrides" },
    { id: "settings-scopes", label: "Các file settings" },
    { id: "settings-precedence", label: "Ưu tiên settings" },
  ],
  hints: [
    "claude mcp add không ghi --scope → phạm vi local (chỉ bạn, dự án hiện tại).",
    "Bí mật trong .mcp.json: dùng ${TEN_BIEN}, mỗi người tự đặt biến trong máy mình.",
    "Skill có tác dụng phụ (triển khai, gửi tin) → disable-model-invocation: true.",
  ],
  sources: [
    { label: "Claude Code — MCP: phạm vi, .mcp.json, biến môi trường, duyệt server dự án", href: MCP },
    { label: "Claude Code — Skills: frontmatter reference, Control who invokes a skill, skillOverrides", href: SK },
    { label: "Claude Code — Settings files and precedence", href: ST },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Phạm vi MCP server** (chọn bằng `--scope`): **local** — mặc định, chỉ bạn, chỉ dự án hiện tại, lưu trong `~/.claude.json`; **project** — cả nhóm, lưu trong `.mcp.json` ở gốc dự án và commit vào git; **user** — chỉ bạn, mọi dự án, lưu trong `~/.claude.json`. Khi cùng một tên server được định nghĩa ở nhiều nơi, Claude Code dùng định nghĩa ở nguồn ưu tiên cao nhất theo thứ tự **local → project → user** (rồi đến server của plugin và connector của claude.ai), và dùng **nguyên cả mục đó** — các trường không được trộn giữa các phạm vi.",
        "**`.mcp.json` dùng chung không được chứa bí mật.** Claude Code hỗ trợ biến môi trường: `${VAR}` lấy giá trị của biến, `${VAR:-mặc_định}` dùng giá trị mặc định khi biến chưa đặt. Mỗi người tự đặt token trong máy mình. Thiếu biến mà không có mặc định thì cấu hình vẫn nạp, nhưng `claude mcp list` báo cảnh báo thiếu biến và chuỗi `${VAR}` được dùng nguyên văn — server sẽ không xác thực được. Vì lý do an toàn, lần đầu gặp server từ `.mcp.json`, Claude Code **hỏi bạn duyệt** trước khi dùng; muốn đặt lại các lựa chọn đó: `claude mcp reset-project-choices`.",
        "**Frontmatter điều khiển skill**: `disable-model-invocation: true` — Claude không tự dùng, chỉ chạy khi bạn gõ `/tên` (nên dùng cho skill có tác dụng phụ như triển khai); `user-invocable: false` — ẩn khỏi menu `/`, chỉ Claude tự dùng (hợp với kiến thức nền); `allowed-tools` — công cụ Claude được dùng **không cần hỏi quyền** trong lượt gọi skill, hết hiệu lực khi bạn gửi tin nhắn tiếp; `context: fork` — chạy skill trong một subagent tách riêng. Với skill bạn không viết, dùng `skillOverrides` trong settings: `\"name-only\"` (Claude chỉ thấy tên), `\"user-invocable-only\"` (ẩn với Claude, vẫn có trong menu), `\"off\"` (ẩn hẳn).",
        "**File settings** (JSON): `~/.claude/settings.json` — bạn, mọi dự án; `.claude/settings.json` — cả nhóm, commit vào git (quyền, hook, plugin dùng chung); `.claude/settings.local.json` — chỉ bạn trong dự án này, không commit; **managed** — do tổ chức triển khai. Thứ tự ưu tiên từ cao xuống: **managed → `--settings` trên dòng lệnh → local → project → user**. Riêng các danh sách như `permissions.allow` thì được **gộp** từ mọi file chứ không ghi đè. Chạy `/status` để xem những file settings nào đã được nạp.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Sổ tay chung của phòng (project) ghi “gọi kho qua số nội bộ ${SO_KHO}” — mỗi người tự điền số của mình, không ai ghi mật khẩu vào sổ chung. Ghi chú dán trên bàn bạn (local) được ưu tiên hơn sổ chung khi hai bên khác nhau, còn quy định của công ty (managed) thì không ai ghi đè được.",
      },
      terms: [
        { term: ".mcp.json", definition: "File ở gốc dự án chứa MCP server phạm vi project, commit để cả nhóm dùng." },
        { term: "${VAR:-mặc_định}", definition: "Cú pháp lấy biến môi trường VAR, dùng giá trị mặc định nếu VAR chưa đặt." },
        { term: "Frontmatter", definition: "Phần YAML đầu SKILL.md khai báo description và các tuỳ chọn điều khiển skill." },
        { term: "settings.local.json", definition: "File settings cá nhân trong dự án, ưu tiên hơn file dùng chung và không commit." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: ba phạm vi của MCP server",
      infographic: {
        kind: "table",
        headers: ["Phạm vi", "Cách chọn", "Lưu ở", "Ai dùng"],
        rows: [
          ["local (mặc định)", "claude mcp add … (không ghi --scope)", "~/.claude.json", "Chỉ bạn, dự án hiện tại"],
          ["project", "--scope project", ".mcp.json ở gốc dự án", "Cả nhóm, qua git"],
          ["user", "--scope user", "~/.claude.json", "Chỉ bạn, mọi dự án"],
        ],
      },
      caption: "Theo bảng phạm vi trong tài liệu MCP của Claude Code (đối chiếu 03/11/2026). Trùng tên: local > project > user.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: file settings nào thắng",
      mermaid: `flowchart TD
  A["Managed (tổ chức)"] --> B["--settings trên dòng lệnh (một phiên)"]
  B --> C[".claude/settings.local.json (bạn, dự án này)"]
  C --> D[".claude/settings.json (cả nhóm, commit)"]
  D --> E["~/.claude/settings.json (bạn, mọi dự án)"]
  F["Danh sách như permissions.allow"] -.->|"được gộp từ mọi file"| C`,
      caption: "Trên cao thắng dưới thấp khi cùng một khoá; danh sách thì được gộp.",
      alt: "Sơ đồ thứ tự ưu tiên settings từ cao xuống thấp: managed của tổ chức, --settings trên dòng lệnh cho một phiên, .claude/settings.local.json của bạn trong dự án, .claude/settings.json dùng chung của nhóm, và ~/.claude/settings.json của bạn cho mọi dự án. Ghi chú: các danh sách như permissions.allow được gộp từ mọi file.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: .mcp.json dùng chung",
      bad: {
        label: "Token thật trong file commit",
        content: "{\n  \"mcpServers\": {\n    \"tickets\": {\n      \"type\": \"http\",\n      \"url\": \"https://mcp.tickets.vi-du.com/mcp\",\n      \"headers\": { \"Authorization\": \"Bearer sk-live-8f2a91…\" }\n    }\n  }\n}",
        notes: ["Token lộ cho mọi người đọc được repo.", "Cả nhóm dùng chung một danh tính.", "Đổi token phải sửa và commit lại."],
      },
      good: {
        label: "Biến môi trường, mỗi người tự đặt",
        content: "{\n  \"mcpServers\": {\n    \"tickets\": {\n      \"type\": \"http\",\n      \"url\": \"${TICKETS_URL:-https://mcp.tickets.vi-du.com}/mcp\",\n      \"headers\": { \"Authorization\": \"Bearer ${TICKETS_TOKEN}\" }\n    }\n  }\n}",
        notes: ["Không có bí mật trong git.", "Mỗi người dùng token của mình.", "URL có giá trị mặc định nhờ ${VAR:-…}."],
      },
      takeaway: "File dùng chung chỉ chứa cấu trúc; bí mật nằm trong biến môi trường của từng máy.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn tuỳ chọn cấu hình skill",
      sim: {
        kind: "choose",
        options: [
          { id: "dmi", label: "disable-model-invocation: true" },
          { id: "ui", label: "user-invocable: false" },
          { id: "at", label: "allowed-tools: Bash(npm run *)" },
          { id: "fork", label: "context: fork" },
          { id: "name-only", label: "skillOverrides: \"name-only\"" },
          { id: "off", label: "skillOverrides: \"off\"" },
        ],
        scenarios: [
          { id: "s1", text: "Skill /trien-khai đẩy code lên máy chủ thật; chỉ được chạy khi chính bạn gõ lệnh.", answer: "dmi", why: "Claude không tự dùng; chỉ chạy khi bạn gõ /trien-khai." },
          { id: "s2", text: "Skill chứa kiến thức nền về hệ thống cũ; gõ /tên chẳng có ý nghĩa, chỉ cần Claude tự dùng khi liên quan.", answer: "ui", why: "Ẩn khỏi menu /, Claude vẫn tự dùng." },
          { id: "s3", text: "Skill chạy npm run lint và npm run test; không muốn bị hỏi quyền từng lệnh trong lượt đó.", answer: "at", why: "allowed-tools cho phép các lệnh khớp mà không hỏi, trong lượt gọi skill." },
          { id: "s4", text: "Skill nghiên cứu đọc rất nhiều file; muốn chạy tách riêng để hội thoại chính không bị đầy.", answer: "fork", why: "context: fork chạy skill trong subagent riêng." },
          { id: "s5", text: "Skill do người khác viết, ít dùng; vẫn muốn có trong menu / nhưng bớt chiếm chỗ mô tả trong context.", answer: "name-only", why: "Claude chỉ thấy tên, không thấy mô tả." },
          { id: "s6", text: "Skill cũ không còn dùng; muốn ẩn hoàn toàn mà không sửa hay xoá file của nó.", answer: "off", why: "\"off\" ẩn cả với Claude lẫn khỏi menu." },
        ],
      },
      intro: "Mỗi tình huống cần đúng một tuỳ chọn. Bốn tuỳ chọn đầu nằm trong frontmatter SKILL.md; skillOverrides nằm trong file settings.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: cấu hình MCP dùng chung cho nhóm",
      steps: [
        { title: "Thêm server ở phạm vi project", detail: "Lệnh ghi server vào .mcp.json ở gốc dự án.", code: { lang: "bash", content: "claude mcp add --transport http --scope project tickets https://mcp.tickets.vi-du.com/mcp" } },
        { title: "Thay bí mật bằng biến môi trường", detail: "Mở .mcp.json, dùng ${TICKETS_TOKEN} trong headers.", code: { lang: "json", content: "{\n  \"mcpServers\": {\n    \"tickets\": {\n      \"type\": \"http\",\n      \"url\": \"https://mcp.tickets.vi-du.com/mcp\",\n      \"headers\": { \"Authorization\": \"Bearer ${TICKETS_TOKEN}\" }\n    }\n  }\n}" } },
        { title: "Mỗi người đặt biến trong máy mình", detail: "Ví dụ trong file cấu hình shell; không commit giá trị.", code: { lang: "bash", content: "export TICKETS_TOKEN=\"token-cua-ban\"" } },
        { title: "Commit .mcp.json, đồng đội duyệt", detail: "Lần đầu mở claude trong dự án, mỗi người được hỏi duyệt server dự án." },
        { title: "Kiểm tra", detail: "Thiếu biến sẽ hiện cảnh báo cho server đó.", code: { lang: "bash", content: "claude mcp list" } },
        { title: "Skill có tác dụng phụ: khoá lại", detail: "Thêm vào frontmatter của skill triển khai.", code: { lang: "yaml", content: "---\ndescription: Triển khai bản build lên máy chủ thử nghiệm.\ndisable-model-invocation: true\n---" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết nội dung .mcp.json cho yêu cầu trong dữ liệu mẫu. Không ghi bí mật trực tiếp; dùng biến môi trường.",
      sampleData: {
        name: "Yêu cầu của nhóm",
        content:
          "Server 1: tên tickets, kiểu http, URL https://mcp.tickets.vi-du.com/mcp, cần header Authorization: Bearer <token của từng người> (biến TICKETS_TOKEN).\nServer 2: tên logs, kiểu stdio, chạy bằng lệnh npx với tham số -y log-mcp-server; cần biến LOG_DIR, mặc định /var/log/app nếu chưa đặt.",
      },
      placeholder: "{\n  \"mcpServers\": {\n    …\n  }\n}",
      rubric: [
        { id: "root", label: "Có khoá mcpServers", weight: 1, check: { kind: "regex", pattern: "\"mcpservers\"\\s*:" }, pass: "Có mcpServers.", fail: "Bọc các server trong khoá \"mcpServers\"." },
        { id: "http", label: "tickets kiểu http", weight: 1, check: { kind: "regex", pattern: "\"type\"\\s*:\\s*\"http\"" }, pass: "Có kiểu http.", fail: "Server tickets: \"type\": \"http\"." },
        { id: "token", label: "Token qua ${TICKETS_TOKEN}", weight: 1, check: { kind: "regex", pattern: "bearer \\$\\{tickets_token\\}" }, pass: "Không lộ token.", fail: "Header: \"Authorization\": \"Bearer ${TICKETS_TOKEN}\"." },
        { id: "stdio", label: "logs chạy bằng npx", weight: 1, check: { kind: "regex", pattern: "\"command\"\\s*:\\s*\"npx\"" }, pass: "Có command.", fail: "Server logs: \"command\": \"npx\", \"args\": [\"-y\", \"log-mcp-server\"]." },
        { id: "default", label: "LOG_DIR có mặc định", weight: 1, check: { kind: "regex", pattern: "\\$\\{log_dir:-/var/log/app\\}" }, pass: "Có giá trị mặc định.", fail: "Dùng \"${LOG_DIR:-/var/log/app}\"." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "{\n  \"mcpServers\": {\n    \"tickets\": {\n      \"type\": \"http\",\n      \"url\": \"https://mcp.tickets.vi-du.com/mcp\",\n      \"headers\": { \"Authorization\": \"Bearer ${TICKETS_TOKEN}\" }\n    },\n    \"logs\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"log-mcp-server\"],\n      \"env\": { \"LOG_DIR\": \"${LOG_DIR:-/var/log/app}\" }\n    }\n  }\n}",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "MCP: local (mặc định, ~/.claude.json), project (.mcp.json, commit), user (~/.claude.json, mọi dự án). Trùng tên: local > project > user, dùng nguyên mục thắng.",
        ".mcp.json dùng ${VAR} và ${VAR:-mặc_định} cho bí mật/giá trị riêng; server dự án cần được duyệt (đặt lại: claude mcp reset-project-choices).",
        "Frontmatter: disable-model-invocation (chỉ gọi tay), user-invocable: false (chỉ Claude), allowed-tools (không hỏi quyền trong lượt đó), context: fork (subagent riêng).",
        "skillOverrides cho skill không phải của bạn: name-only, user-invocable-only, off.",
        "Settings: managed > --settings > local > project > user; danh sách như permissions.allow được gộp; /status xem file đã nạp.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Áp dụng cho một repo nhóm bạn dùng chung.",
      tasks: [
        "Rà .mcp.json (nếu có): tìm và thay mọi bí mật bằng ${VAR}; ghi hướng dẫn đặt biến vào README.",
        "Rà các skill có tác dụng phụ (gửi, triển khai, xoá) và thêm disable-model-invocation: true.",
        "Chạy /status để xem file settings nào đang được nạp; chuyển thiết lập cá nhân sang settings.local.json.",
      ],
      deliverable: "Bảng thay đổi cấu hình: File | Thay đổi | Lý do | Đã kiểm tra bằng lệnh nào.",
      checklist: ["Không còn bí mật trong file commit", "Skill có tác dụng phụ chỉ chạy khi gọi tay", "Thiết lập cá nhân không nằm trong file chung"],
    },
  ],
};
