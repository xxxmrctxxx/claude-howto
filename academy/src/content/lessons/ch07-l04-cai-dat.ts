import type { Lesson } from "@/lib/types/content";

const SK = "https://code.claude.com/docs/en/skills";
const MCP = "https://code.claude.com/docs/en/mcp";
const PL = "https://code.claude.com/docs/en/discover-plugins";

const SKILL = ".claude/skills/bao-cao-loi/SKILL.md";

export const lessonCaiDatMoRong: Lesson = {
  id: "ch07-l04",
  chapterId: "ch07",
  slug: "cai-dat",
  title: "Cách cài đặt",
  subtitle: "Cài một skill bằng thư mục và SKILL.md, thêm MCP server bằng claude mcp add (HTTP và stdio), cài plugin từ marketplace — và đọc kỹ trước khi cài.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Cài một skill cá nhân hoặc dự án bằng thư mục và SKILL.md; biết khi nào cần /reload-skills." },
    { id: "o2", text: "Thêm MCP server bằng claude mcp add: HTTP với URL, stdio với --env và dấu -- ngăn cách." },
    { id: "o3", text: "Cài plugin: /plugin install tên@marketplace, chọn phạm vi, thêm marketplace khác, /reload-plugins." },
    { id: "o4", text: "Đọc kỹ những gì sẽ được cài (plugin có thể chạy hook và MCP server) và kiểm tra ngay sau khi cài." },
  ],
  concepts: [
    { id: "skill-folder", label: "Thư mục skill" },
    { id: "skill-live-reload", label: "Skill được nhận ngay" },
    { id: "reload-skills", label: "/reload-skills" },
    { id: "mcp-add-http", label: "claude mcp add --transport http" },
    { id: "mcp-add-stdio", label: "claude mcp add --transport stdio" },
    { id: "double-dash", label: "Dấu -- ngăn cách" },
    { id: "env-flag", label: "--env" },
    { id: "header-flag", label: "--header" },
    { id: "plugin-install", label: "/plugin install" },
    { id: "marketplace-add", label: "/plugin marketplace add" },
    { id: "plugin-scope", label: "Phạm vi cài plugin" },
    { id: "plugin-review", label: "Đọc trước khi cài" },
  ],
  hints: [
    "Skill: mkdir -p .claude/skills/<tên> rồi viết SKILL.md.",
    "MCP từ xa: claude mcp add --transport http <tên> <url>.",
    "MCP stdio: mọi tuỳ chọn của Claude đặt trước tên server; lệnh chạy server đặt sau dấu --.",
  ],
  sources: [
    { label: "Claude Code — Extend Claude with skills (tạo skill, phát hiện thay đổi, /reload-skills)", href: SK },
    { label: "Claude Code — Connect Claude Code to tools via MCP (claude mcp add, --env, --)", href: MCP },
    { label: "Claude Code — Install and manage plugins (/plugin install, phạm vi, marketplace)", href: PL },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Cài skill** không cần lệnh đặc biệt: tạo thư mục rồi viết `SKILL.md`. Skill dự án: `.claude/skills/<tên>/SKILL.md` (commit để cả nhóm dùng); skill cá nhân: `~/.claude/skills/<tên>/SKILL.md`. Khi bạn thêm, sửa hay xoá skill trong các thư mục đó, Claude Code **nhận thay đổi ngay trong phiên**, không cần khởi động lại. Ngoại lệ: nếu thư mục skills cấp cao nhất (ví dụ `.claude/skills/`) **chưa tồn tại lúc mở phiên** và bạn mới tạo nó, hãy chạy `/reload-skills`.",
        "**Thêm MCP server** bằng lệnh `claude mcp add` chạy trong terminal. Server từ xa dùng HTTP: `claude mcp add --transport http <tên> <url>`; cần token thì thêm `--header \"Authorization: Bearer …\"`. Server stdio chạy trên máy: các tuỳ chọn của Claude (`--transport`, `--env`, `--scope`) đứng **trước tên server**, còn lệnh chạy server đứng **sau dấu `--`** — mọi thứ sau `--` được chuyển nguyên cho server. Lưu ý: `--env` nhận nhiều cặp `KEY=value`; nếu tên server đứng ngay sau `--env`, CLI sẽ hiểu tên đó là một cặp nữa và báo lỗi.",
        "**Cài plugin**: trong phiên Claude Code, gõ `/plugin install <tên>@claude-plugins-official` (marketplace chính thức của Anthropic, được tự thêm ở phiên tương tác đầu tiên). Lệnh mở bảng chi tiết để bạn **đọc trước**: plugin sẽ thêm lệnh, agent, skill, hook, MCP server gì. Sau đó chọn phạm vi: **user** (bạn, mọi dự án), **project** (cả nhóm qua `.claude/settings.json`), **local** (bạn, chỉ repo này). Thông báo cuối cho biết plugin đã chạy ngay (`Plugin is now active.`) hay cần `/reload-plugins`. Plugin từ marketplace khác: thêm trước bằng `/plugin marketplace add owner/repo`. Từ terminal: `claude plugin install <tên>@<marketplace>` (mặc định phạm vi user).",
        "**An toàn**: plugin có thể chạy hook và MCP server, nên tài liệu yêu cầu đọc bảng chi tiết trước khi cài; MCP server cũng chỉ nên thêm khi bạn tin nguồn. Cài xong hãy kiểm tra ngay: gõ `/` để thấy skill mới (skill của plugin có dạng `/tên-plugin:tên-skill`), chạy `claude mcp list` để xem server đã kết nối chưa — chi tiết ở bài 7.6.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Skill như tờ quy trình bạn tự in và kẹp vào bìa — kẹp vào là dùng được. MCP server như kéo một đường dây mới: phải ghi đúng địa chỉ và thứ tự đấu nối. Plugin như mua một bộ thiết bị trọn gói: đọc kỹ danh mục trong hộp trước khi lắp, vì có thể có cả thiết bị tự vận hành.",
      },
      terms: [
        { term: "claude mcp add", definition: "Lệnh terminal thêm một MCP server vào cấu hình Claude Code." },
        { term: "Dấu --", definition: "Ngăn tuỳ chọn của Claude với lệnh chạy server stdio; phần sau được chuyển nguyên cho server." },
        { term: "Marketplace", definition: "Danh mục plugin; cần được thêm trước khi cài plugin từ đó." },
        { term: "claude-plugins-official", definition: "Tên marketplace chính thức của Anthropic." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: cài gì, gõ gì, kiểm tra ra sao",
      infographic: {
        kind: "table",
        headers: ["Cài gì", "Cách cài", "Kiểm tra nhanh"],
        rows: [
          ["Skill dự án", "mkdir -p .claude/skills/<tên> rồi viết SKILL.md", "Gõ / và tìm /<tên>"],
          ["MCP server từ xa", "claude mcp add --transport http <tên> <url>", "claude mcp list"],
          ["MCP server trên máy", "claude mcp add --transport stdio <tên> -- <lệnh chạy server>", "claude mcp list"],
          ["Plugin chính thức", "/plugin install <tên>@claude-plugins-official", "Gõ / và tìm /<plugin>:<skill>"],
          ["Marketplace khác", "/plugin marketplace add owner/repo", "Tab Discover trong /plugin"],
        ],
      },
      caption: "Theo tài liệu Skills, MCP và Install plugins của Claude Code (đối chiếu 03/11/2026). Lệnh claude mcp chạy trong terminal; lệnh /plugin gõ trong phiên Claude Code.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: cài một plugin",
      mermaid: `flowchart TD
  A["/plugin install tên@marketplace"] --> B["Bảng chi tiết: sẽ cài lệnh, skill, hook, MCP gì"]
  B --> C{"Tin nguồn và đồng ý?"}
  C -->|"Không"| X["Không cài"]
  C -->|"Có"| D["Chọn phạm vi: user / project / local"]
  D --> E{"Thông báo cuối"}
  E -->|"Plugin is now active."| F["Dùng ngay"]
  E -->|"Run /reload-plugins to apply."| G["Chạy /reload-plugins"]
  E -->|"couldn't be loaded"| H["Xem tab Errors trong /plugin"]
  F --> I["Gõ / để thấy /plugin:skill"]
  G --> I`,
      caption: "Đọc trước khi cài; đọc thông báo cuối để biết bước tiếp theo.",
      alt: "Lưu đồ cài plugin: gõ /plugin install tên@marketplace, xem bảng chi tiết những gì sẽ cài. Nếu không tin nguồn thì không cài. Nếu đồng ý thì chọn phạm vi user, project hoặc local. Thông báo cuối: Plugin is now active thì dùng ngay; Run /reload-plugins to apply thì chạy /reload-plugins; couldn't be loaded thì xem tab Errors. Cuối cùng gõ / để thấy lệnh dạng /plugin:skill.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: thêm MCP server stdio",
      bad: {
        label: "Sai thứ tự, thiếu dấu --",
        content: "claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY airtable --transport stdio npx -y airtable-mcp-server",
        notes: ["Tên airtable đứng ngay sau --env nên bị hiểu là một cặp KEY=value nữa và bị từ chối.", "Thiếu --: cờ -y có thể bị hiểu là tuỳ chọn của Claude thay vì của npx."],
      },
      good: {
        label: "Tuỳ chọn trước tên, lệnh server sau --",
        content: "claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\\n  -- npx -y airtable-mcp-server",
        notes: ["--transport ngăn --env với tên server.", "Mọi thứ sau -- chuyển nguyên cho server.", "Khoá API thật thay cho YOUR_KEY, không commit vào repo."],
      },
      takeaway: "Tuỳ chọn của Claude → tên server → -- → lệnh chạy server.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: cài skill /bao-cao-loi cho dự án",
      sim: {
        kind: "terminal",
        preset: "claude-project",
        steps: [
          { instruction: "Vào thư mục dự án du-an/web-loi-qa.", hint: "cd du-an/web-loi-qa", check: { kind: "cwd", path: "~/du-an/web-loi-qa", label: "Đang ở thư mục dự án" } },
          { instruction: "Tạo thư mục skill .claude/skills/bao-cao-loi (kể cả thư mục cha).", hint: "mkdir -p .claude/skills/bao-cao-loi", check: { kind: "dir", path: "~/du-an/web-loi-qa/.claude/skills/bao-cao-loi", label: "Có thư mục skill" } },
          { instruction: "Mở frontmatter: ghi dòng --- vào SKILL.md.", hint: `echo "---" > ${SKILL}`, check: { kind: "file", path: `~/du-an/web-loi-qa/${SKILL}`, label: "Đã tạo SKILL.md" } },
          { instruction: "Thêm dòng description nói rõ làm gì và khi nào dùng.", hint: `echo "description: Viet bao cao loi theo mau QA. Dung khi nguoi dung nho ghi lai loi." >> ${SKILL}`, check: { kind: "file", path: `~/du-an/web-loi-qa/${SKILL}`, contains: "description:", label: "Có description" } },
          { instruction: "Đóng frontmatter bằng một dòng --- nữa.", hint: `echo "---" >> ${SKILL}`, check: { kind: "file", path: `~/du-an/web-loi-qa/${SKILL}`, contains: "\n---\n", label: "Frontmatter đã đóng" } },
          { instruction: "Thêm bước đầu tiên của mẫu báo cáo.", hint: `echo "1. Tieu de: [Khu vuc] Hien tuong" >> ${SKILL}`, check: { kind: "file", path: `~/du-an/web-loi-qa/${SKILL}`, contains: "Tieu de", label: "Có hướng dẫn" } },
          { instruction: "Xem lại toàn bộ SKILL.md.", hint: `cat ${SKILL}`, check: { kind: "lastCommand", command: "cat", label: "Đã xem lại file" } },
        ],
      },
      intro: "Terminal MÔ PHỎNG: tạo skill dự án từng dòng bằng echo. Trên máy thật bạn sẽ dùng trình soạn thảo, nhưng cấu trúc thư mục và file giống hệt.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: cài ba loại mở rộng",
      steps: [
        { title: "Skill: tạo thư mục và SKILL.md", detail: "Viết description rõ ràng; nếu .claude/skills/ vừa được tạo giữa phiên thì chạy /reload-skills.", code: { lang: "bash", content: "mkdir -p .claude/skills/bao-cao-loi\n# viết .claude/skills/bao-cao-loi/SKILL.md bằng trình soạn thảo" } },
        { title: "MCP server từ xa (HTTP)", detail: "Ví dụ trong tài liệu: server Notion.", code: { lang: "bash", content: "claude mcp add --transport http notion https://mcp.notion.com/mcp" } },
        { title: "MCP server có token", detail: "Truyền header xác thực; không dán token thật vào file sẽ commit.", code: { lang: "bash", content: "claude mcp add --transport http secure-api https://api.example.com/mcp \\\n  --header \"Authorization: Bearer your-token\"" } },
        { title: "MCP server stdio", detail: "Tuỳ chọn trước tên, lệnh chạy server sau --.", code: { lang: "bash", content: "claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\\n  -- npx -y airtable-mcp-server" } },
        { title: "Plugin từ marketplace chính thức", detail: "Đọc bảng chi tiết, chọn phạm vi, đọc thông báo cuối.", code: { lang: "text", content: "/plugin install commit-commands@claude-plugins-official" } },
        { title: "Plugin từ marketplace khác", detail: "Thêm marketplace một lần, rồi cài như trên.", code: { lang: "text", content: "/plugin marketplace add your-org/plugins\n/plugin install formatter@your-org" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc yêu cầu trong dữ liệu mẫu và viết đúng lệnh cho từng mục (C1–C3), mỗi mục một dòng.",
      sampleData: {
        name: "Yêu cầu cài đặt của nhóm",
        content:
          "C1: Thêm MCP server từ xa tên “tickets”, địa chỉ https://mcp.tickets.vi-du.com/mcp.\nC2: Thêm MCP server stdio tên “logs”, chạy bằng lệnh npx -y log-mcp-server, cần biến môi trường LOG_DIR=/var/log/app.\nC3: Cài plugin commit-commands từ marketplace chính thức của Anthropic (gõ trong phiên Claude Code).",
      },
      placeholder: "C1: …\nC2: …\nC3: …",
      rubric: [
        { id: "c1", label: "C1: claude mcp add --transport http", weight: 1, check: { kind: "regex", pattern: "claude mcp add --transport http tickets https://mcp\\.tickets\\.vi-du\\.com/mcp" }, pass: "C1 đúng.", fail: "C1: claude mcp add --transport http tickets https://mcp.tickets.vi-du.com/mcp" },
        { id: "c2env", label: "C2: có --env LOG_DIR", weight: 1, check: { kind: "regex", pattern: "claude mcp add[^\\n]*--env log_dir=/var/log/app" }, pass: "Có biến môi trường.", fail: "C2: thêm --env LOG_DIR=/var/log/app." },
        { id: "c2sep", label: "C2: tên trước --, lệnh server sau --", weight: 1, check: { kind: "regex", pattern: "--transport stdio logs\\s+(\\\\\\s*)?--\\s+npx -y log-mcp-server" }, pass: "Thứ tự đúng.", fail: "C2: … --transport stdio logs -- npx -y log-mcp-server" },
        { id: "c3", label: "C3: /plugin install …@claude-plugins-official", weight: 1, check: { kind: "regex", pattern: "/plugin install commit-commands@claude-plugins-official" }, pass: "C3 đúng.", fail: "C3: /plugin install commit-commands@claude-plugins-official" },
      ],
      passScore: 0.75,
      referenceAnswer:
        "C1: claude mcp add --transport http tickets https://mcp.tickets.vi-du.com/mcp\nC2: claude mcp add --env LOG_DIR=/var/log/app --transport stdio logs -- npx -y log-mcp-server\nC3: /plugin install commit-commands@claude-plugins-official",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Skill: tạo .claude/skills/<tên>/SKILL.md (dự án) hoặc ~/.claude/skills/<tên>/SKILL.md (cá nhân); thay đổi được nhận ngay, trừ khi thư mục skills cấp cao vừa được tạo → /reload-skills.",
        "MCP từ xa: claude mcp add --transport http <tên> <url> (thêm --header khi cần token).",
        "MCP stdio: tuỳ chọn của Claude trước tên server, lệnh chạy server sau --; tên không đứng ngay sau --env.",
        "Plugin: /plugin install <tên>@claude-plugins-official, chọn phạm vi user/project/local; marketplace khác thêm bằng /plugin marketplace add.",
        "Đọc bảng chi tiết trước khi cài (plugin có thể chạy hook, MCP server) và kiểm tra ngay sau khi cài.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Thực hiện trên máy của bạn, trong một dự án thử (không phải dự án đang chạy thật).",
      tasks: [
        "Tạo một skill dự án nhỏ và gọi thử bằng /tên-skill.",
        "Thêm một MCP server chính thức mà bạn thực sự cần (HTTP nếu có), rồi chạy claude mcp list.",
        "Mở /plugin, đọc bảng chi tiết của một plugin trong marketplace chính thức; chỉ cài nếu thấy cần và tin nguồn.",
      ],
      deliverable: "Ghi chú cài đặt: Lệnh đã chạy | Phạm vi | Kết quả kiểm tra | Ghi chú rủi ro.",
      checklist: ["Không dán token thật vào file sẽ commit", "Đã đọc bảng chi tiết plugin", "Đã kiểm tra sau khi cài"],
    },
  ],
};
