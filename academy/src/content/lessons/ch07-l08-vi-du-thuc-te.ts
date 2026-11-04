import type { Lesson } from "@/lib/types/content";

const FO = "https://code.claude.com/docs/en/features-overview";
const SK = "https://code.claude.com/docs/en/skills";
const HK = "https://code.claude.com/docs/en/hooks-guide";
const MCP = "https://code.claude.com/docs/en/mcp";

export const lessonViDuThucTeMoRong: Lesson = {
  id: "ch07-l08",
  chapterId: "ch07",
  slug: "vi-du-thuc-te",
  title: "Ví dụ sử dụng thực tế",
  subtitle: "Một nhóm QA ghép CLAUDE.md, skill có file mẫu, MCP tới issue tracker, hook định dạng và subagent thành một quy trình — rồi triển khai dần cho cả nhóm.",
  level: "advanced",
  estimatedMinutes: 35,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Phân tích một tình huống thật và chọn tổ hợp tính năng: CLAUDE.md, skill, MCP, hook, subagent, plugin." },
    { id: "o2", text: "Viết skill có file hỗ trợ và chèn ngữ cảnh động bằng !`lệnh`; dùng ${CLAUDE_SKILL_DIR} cho script đi kèm." },
    { id: "o3", text: "Đọc và viết hook PostToolUse chạy sau mỗi lần Claude sửa hoặc tạo file." },
    { id: "o4", text: "Lên kế hoạch triển khai cho nhóm: thử cá nhân, đo, chia sẻ, đóng gói — kèm kiểm tra an toàn." },
  ],
  concepts: [
    { id: "case-analysis", label: "Phân tích tình huống" },
    { id: "skill-supporting-files", label: "File hỗ trợ của skill" },
    { id: "skill-dir-var", label: "${CLAUDE_SKILL_DIR}" },
    { id: "dynamic-injection", label: "Chèn ngữ cảnh động !`lệnh`" },
    { id: "skill-with-script", label: "Skill kèm script" },
    { id: "hook-posttooluse", label: "Hook PostToolUse" },
    { id: "hook-matcher", label: "matcher của hook" },
    { id: "skill-plus-subagent", label: "Skill + subagent" },
    { id: "plugin-share", label: "Chia sẻ qua plugin" },
    { id: "rollout-plan", label: "Kế hoạch triển khai" },
    { id: "safety-review", label: "Kiểm tra an toàn" },
    { id: "skill-mcp-flow", label: "Skill dùng công cụ MCP" },
  ],
  hints: [
    "Mỗi tính năng làm đúng phần việc của nó; đừng dồn hết vào một chỗ.",
    "!`git log --oneline -5` trong SKILL.md chạy trước, kết quả thay vào chỗ đó rồi mới gửi cho Claude.",
    "Thử ở phạm vi cá nhân/local trước, ổn rồi mới chia sẻ cho cả nhóm.",
  ],
  sources: [
    { label: "Claude Code — Extend Claude Code: Combine features (Skill + MCP, Skill + Subagent, Hook + MCP)", href: FO },
    { label: "Claude Code — Skills: supporting files, dynamic context injection, ${CLAUDE_SKILL_DIR}, codebase-visualizer", href: SK },
    { label: "Claude Code — Automate workflows with hooks (PostToolUse, matcher Edit|Write, Prettier)", href: HK },
    { label: "Claude Code — MCP: phạm vi project, biến môi trường, bảo mật", href: MCP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Tình huống**: nhóm QA của một xưởng lắp ráp duy trì repo `web-loi-qa`. Họ gặp năm việc lặp lại: Claude hay quên quy ước ngày `dd/mm/yyyy`; mỗi lỗi phải viết báo cáo theo mẫu 4 mục; báo cáo xong phải mở issue tracker trên trình duyệt để tạo ticket; code Claude sửa thường lệch định dạng; và thỉnh thoảng phải đọc hàng chục file log để tìm nguyên nhân lỗi lặp lại.",
        "**Cách ghép**: quy ước ngày → **CLAUDE.md** (cần mọi phiên). Báo cáo lỗi → skill **/bao-cao-loi** có file mẫu `mau-bao-cao.md` đi kèm; SKILL.md có thể chèn **ngữ cảnh động** bằng cú pháp `!`lệnh`` — lệnh chạy **trước** khi nội dung skill được gửi cho Claude và kết quả thay vào chỗ đó (ví dụ `!`git log --oneline -5``). Tạo ticket → **MCP server** của tracker (HTTP, phạm vi project, token qua `${TRACKER_TOKEN}`), và skill chỉ cho Claude cách điền ticket theo quy ước của nhóm — mẫu **Skill + MCP**. Định dạng → **hook PostToolUse** với matcher `Edit|Write` chạy Prettier cho file vừa sửa. Đọc log → **subagent**, chỉ trả bản tóm tắt.",
        "Skill còn có thể **kèm script**: ví dụ codebase-visualizer trong tài liệu đặt script Python trong thư mục skill, gọi bằng `python3 ${CLAUDE_SKILL_DIR}/scripts/visualize.py .` — biến `${CLAUDE_SKILL_DIR}` trỏ đúng thư mục skill dù skill ở cấp cá nhân, dự án hay plugin — và khai báo `allowed-tools: Bash(python3 *)`. Script làm phần việc nặng, Claude lo điều phối.",
        "**Triển khai dần**: thử từng phần ở phạm vi cá nhân/local, dùng một tuần, sửa description và quy ước; ổn rồi mới chuyển vào `.claude/` và `.mcp.json` dùng chung và commit. Khi repo thứ hai cần cùng bộ, đóng gói thành **plugin** (skill gọi dạng `/qa-tools:bao-cao-loi`). **An toàn**: không để bí mật trong file commit; skill có tác dụng phụ (tạo ticket thật) thì `disable-model-invocation: true`; nội dung ticket do người ngoài viết có thể chứa prompt injection — giai đoạn đầu để Claude soạn bản nháp, người duyệt rồi mới tạo.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Một dây chuyền tốt không dồn mọi việc cho một người: bảng nội quy ở cửa, quy trình chuẩn trên kệ, đường dây tới kho, cảm biến tự kiểm tra sau mỗi công đoạn, tổ phân tích riêng cho việc nặng. Muốn mở xưởng thứ hai thì đóng gói cả bộ — nhưng chỉ sau khi xưởng đầu chạy ổn.",
      },
      terms: [
        { term: "Ngữ cảnh động", definition: "Cú pháp !`lệnh` trong SKILL.md: lệnh chạy trước, kết quả được chèn vào nội dung gửi cho Claude." },
        { term: "${CLAUDE_SKILL_DIR}", definition: "Biến trỏ tới thư mục của skill, giúp gọi script đi kèm đúng đường dẫn." },
        { term: "PostToolUse", definition: "Sự kiện hook chạy sau khi Claude dùng xong một công cụ, ví dụ sau khi sửa file." },
        { term: "matcher", definition: "Mẫu chọn công cụ mà hook áp dụng, ví dụ Edit|Write." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: một ngày làm việc của nhóm QA",
      infographic: {
        kind: "flow",
        steps: [
          { title: "Mở phiên", body: "CLAUDE.md nạp quy ước: ngày dd/mm/yyyy, lệnh test, cấu trúc thư mục.", icon: "book" },
          { title: "“Ghi lại lỗi nút Lưu”", body: "Skill /bao-cao-loi tự kích hoạt, dùng mau-bao-cao.md và 5 commit gần nhất.", icon: "file" },
          { title: "Tạo ticket", body: "Công cụ MCP của tracker tạo bản nháp; người duyệt rồi mới gửi.", icon: "plug" },
          { title: "Sửa code", body: "Sau mỗi Edit/Write, hook PostToolUse chạy Prettier cho file vừa sửa.", icon: "wrench" },
          { title: "Tìm nguyên nhân lặp lại", body: "Subagent đọc 40 file log, trả về tóm tắt kèm file và dòng.", icon: "search" },
          { title: "Repo thứ hai", body: "Đóng gói skill, hook, MCP thành plugin qa-tools.", icon: "layers" },
        ],
      },
      caption: "Tình huống minh hoạ do khoá học xây dựng, áp dụng các mẫu kết hợp trong tài liệu Extend Claude Code (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: các thành phần quanh Claude Code",
      mermaid: `flowchart LR
  CM["CLAUDE.md: quy ước"] --> CC["Claude Code"]
  SK["Skill /bao-cao-loi + mau-bao-cao.md"] --> CC
  CC <-->|"MCP (HTTP)"| TR["Issue tracker"]
  CC -->|"Edit/Write"| HK["Hook PostToolUse: Prettier"]
  CC -->|"giao việc"| SA["Subagent đọc log"]
  SA -->|"tóm tắt"| CC
  PL["Plugin qa-tools"] -.->|"đóng gói"| SK
  PL -.-> HK`,
      caption: "Mỗi thành phần làm đúng một việc; plugin đóng gói để dùng lại ở repo khác.",
      alt: "Sơ đồ: CLAUDE.md chứa quy ước và skill /bao-cao-loi kèm file mẫu cùng đưa vào Claude Code. Claude Code nói chuyện hai chiều với issue tracker qua MCP HTTP. Mỗi lần Edit hoặc Write kích hoạt hook PostToolUse chạy Prettier. Claude Code giao việc đọc log cho subagent và nhận lại bản tóm tắt. Plugin qa-tools đóng gói skill và hook để dùng lại.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: dựng bộ cấu hình cho nhóm",
      bad: {
        label: "Một file làm tất cả",
        content: "CLAUDE.md 900 dòng: quy ước, mẫu báo cáo, 30 trang hướng dẫn tracker, “NHỚ format code!!!”, và cả token tracker để Claude tự gọi API.",
        notes: ["Tốn context ở mọi request.", "Format vẫn chỉ là lời dặn.", "Token lộ trong repo."],
      },
      good: {
        label: "Mỗi phần đúng chỗ",
        content: "CLAUDE.md 60 dòng (quy ước) · skill /bao-cao-loi + mau-bao-cao.md · .mcp.json với ${TRACKER_TOKEN} · hook PostToolUse (Edit|Write) chạy Prettier · subagent cho việc đọc log.",
        notes: ["Context gọn, nạp đúng lúc.", "Định dạng được thực thi.", "Không có bí mật trong git."],
      },
      takeaway: "Ghép tính năng theo việc, không dồn mọi thứ vào CLAUDE.md.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: sắp xếp lộ trình triển khai cho nhóm",
      sim: {
        kind: "sequence",
        items: [
          { id: "a", text: "Ghi nhật ký việc lặp lại trong một tuần" },
          { id: "b", text: "Bổ sung quy ước vào CLAUDE.md" },
          { id: "c", text: "Viết skill /bao-cao-loi, thử ở phạm vi cá nhân" },
          { id: "d", text: "Kết nối MCP tracker ở phạm vi local, thử yêu cầu chỉ đọc" },
          { id: "e", text: "Thêm hook format, thử trên vài file" },
          { id: "f", text: "Chuyển vào .claude/ và .mcp.json dùng chung, commit" },
          { id: "g", text: "Đóng gói plugin khi repo thứ hai cần cùng bộ" },
        ],
        explain: "Quan sát → phần rẻ và ít rủi ro trước (CLAUDE.md, skill) → kết nối ngoài thử chỉ đọc → tự động hoá → chia sẻ khi đã ổn → đóng gói khi có nhu cầu dùng lại.",
      },
      intro: "Kéo hoặc dùng nút để sắp xếp các bước theo thứ tự hợp lý.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dựng skill /bao-cao-loi và hook định dạng",
      steps: [
        { title: "Tạo thư mục skill và file mẫu", detail: "File mẫu nằm cạnh SKILL.md; Claude chỉ đọc khi cần.", code: { lang: "bash", content: "mkdir -p .claude/skills/bao-cao-loi\n# viết .claude/skills/bao-cao-loi/mau-bao-cao.md (4 mục của nhóm)" } },
        {
          title: "Viết SKILL.md có ngữ cảnh động",
          detail: "Dòng !`…` chạy trước khi gửi cho Claude; liên kết tới file mẫu để Claude biết khi nào đọc.",
          code: {
            lang: "markdown",
            content: "---\ndescription: Viết báo cáo lỗi theo mẫu của nhóm QA. Dùng khi người dùng nhờ ghi lại lỗi, viết bug report hoặc tóm tắt lỗi vừa tái hiện.\n---\n\n## Commit gần đây\n!`git log --oneline -5`\n\n## Cách làm\n1. Đọc mẫu trong [mau-bao-cao.md](mau-bao-cao.md) và điền đủ 4 mục.\n2. Nếu lỗi liên quan commit ở trên, ghi mã commit.\n3. Ngày ghi dạng dd/mm/yyyy.",
          },
        },
        {
          title: "Thêm hook định dạng vào .claude/settings.json",
          detail: "Sau mỗi Edit hoặc Write, lấy đường dẫn file từ JSON đầu vào và chạy Prettier.",
          code: {
            lang: "json",
            content: "{\n  \"hooks\": {\n    \"PostToolUse\": [\n      {\n        \"matcher\": \"Edit|Write\",\n        \"hooks\": [\n          {\n            \"type\": \"command\",\n            \"command\": \"jq -r '.tool_input.file_path' | xargs npx prettier --write\"\n          }\n        ]\n      }\n    ]\n  }\n}",
          },
        },
        { title: "Thử từng phần", detail: "Gọi /bao-cao-loi và nói tự nhiên “ghi lại lỗi …”; nhờ Claude sửa một file rồi xem file đã được format." },
        { title: "Chia sẻ khi đã ổn", detail: "Commit .claude/skills/, .claude/settings.json và .mcp.json (không chứa bí mật); ghi hướng dẫn đặt biến môi trường vào README." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết nội dung .claude/settings.json có hook theo yêu cầu trong dữ liệu mẫu.",
      sampleData: {
        name: "Yêu cầu hook của phòng kế toán",
        content:
          "Repo có script scripts/kiem-tra-csv.py nhận một đường dẫn file. Muốn: sau mỗi lần Claude sửa hoặc tạo file (công cụ Edit, Write) thì tự chạy script với file vừa sửa.\nHook nhận JSON qua stdin; đường dẫn file nằm ở .tool_input.file_path (lấy bằng jq -r).",
      },
      placeholder: "{\n  \"hooks\": {\n    …\n  }\n}",
      rubric: [
        { id: "root", label: "Có khoá hooks", weight: 1, check: { kind: "regex", pattern: "\"hooks\"\\s*:\\s*\\{" }, pass: "Có hooks.", fail: "Bọc cấu hình trong \"hooks\": { … }." },
        { id: "event", label: "Sự kiện PostToolUse", weight: 1, check: { kind: "regex", pattern: "\"posttooluse\"\\s*:" }, pass: "Đúng sự kiện.", fail: "Dùng sự kiện \"PostToolUse\" (sau khi dùng công cụ)." },
        { id: "matcher", label: "matcher Edit|Write", weight: 1, check: { kind: "regex", pattern: "\"matcher\"\\s*:\\s*\"(edit\\|write|write\\|edit)\"" }, pass: "Đúng matcher.", fail: "\"matcher\": \"Edit|Write\"." },
        { id: "type", label: "Kiểu command", weight: 1, check: { kind: "regex", pattern: "\"type\"\\s*:\\s*\"command\"" }, pass: "Có type command.", fail: "Mỗi hook cần \"type\": \"command\"." },
        { id: "cmd", label: "Lệnh chạy script với file vừa sửa", weight: 1, check: { kind: "regex", pattern: "tool_input\\.file_path[^\\n]*kiem-tra-csv\\.py" }, pass: "Lệnh đúng.", fail: "\"command\": \"jq -r '.tool_input.file_path' | xargs python3 scripts/kiem-tra-csv.py\"." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "{\n  \"hooks\": {\n    \"PostToolUse\": [\n      {\n        \"matcher\": \"Edit|Write\",\n        \"hooks\": [\n          {\n            \"type\": \"command\",\n            \"command\": \"jq -r '.tool_input.file_path' | xargs python3 scripts/kiem-tra-csv.py\"\n          }\n        ]\n      }\n    ]\n  }\n}",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Ghép theo việc: quy ước → CLAUDE.md; quy trình → skill; dữ liệu ngoài → MCP; việc bắt buộc mỗi lần → hook; việc đọc nhiều → subagent; dùng lại → plugin.",
        "Skill có thể kèm file mẫu, script (${CLAUDE_SKILL_DIR}) và ngữ cảnh động !`lệnh` chạy trước khi gửi cho Claude.",
        "Skill + MCP: MCP lo kết nối, skill chỉ cách dùng theo quy ước nhóm.",
        "Hook PostToolUse với matcher Edit|Write chạy sau mỗi lần sửa/tạo file; đường dẫn lấy từ .tool_input.file_path.",
        "Triển khai dần: cá nhân/local → đo → chia sẻ (commit) → plugin; không bí mật trong git, việc có tác dụng phụ cần người duyệt.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Dự án cuối chương: áp dụng cho một quy trình thật của bạn hoặc nhóm.",
      tasks: [
        "Chọn một quy trình có ít nhất 3 việc lặp lại; xếp mỗi việc vào đúng tính năng.",
        "Dựng ít nhất một skill (có file hỗ trợ) và một hook; nếu có hệ thống ngoài, kết nối MCP và thử chỉ đọc.",
        "Dùng một tuần ở phạm vi cá nhân, ghi lại kết quả, rồi đề xuất phần nào chia sẻ cho nhóm.",
      ],
      deliverable: "Bản mô tả bộ cấu hình: Việc | Tính năng | File/lệnh | Kết quả sau một tuần | Chia sẻ? | Rủi ro và cách giảm.",
      checklist: ["Mỗi tính năng có lý do", "Không có bí mật trong file commit", "Đã thử trước khi chia sẻ"],
    },
  ],
};
