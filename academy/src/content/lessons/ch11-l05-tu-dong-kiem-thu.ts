import type { Lesson } from "@/lib/types/content";

const HL = "https://code.claude.com/docs/en/headless";
const GA = "https://code.claude.com/docs/en/github-actions";
const PM = "https://code.claude.com/docs/en/permission-modes";

export const lessonTuDongKiemThu: Lesson = {
  id: "ch11-l05",
  chapterId: "ch11",
  slug: "tu-dong-kiem-thu",
  title: "Tự động kiểm thử",
  subtitle: "Đưa Claude vào CI đúng vai: chạy claude -p không tương tác với quyền tối thiểu, đọc kết quả có khuôn, dùng Claude Code GitHub Actions — còn bộ test tự động vẫn là cổng chặn chính.",
  level: "advanced",
  estimatedMinutes: 40,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chạy claude -p trong script/CI: --bare, mã thoát, pipe dữ liệu (giới hạn 10 MB), --output-format json và --json-schema." },
    { id: "o2", text: "Giới hạn quyền trong CI: --allowedTools theo mẫu lệnh, --permission-mode dontAsk, không cấp quyền thừa." },
    { id: "o3", text: "Thiết lập Claude Code GitHub Actions: secret, quyền workflow tối thiểu, ai kích hoạt được, chi phí." },
    { id: "o4", text: "Giữ đúng vai: test tự động là cổng chặn; nhận xét của Claude là ý kiến tham khảo; con người quyết định merge." },
  ],
  concepts: [
    { id: "claude-p-ci", label: "claude -p trong CI" },
    { id: "exit-code", label: "Mã thoát" },
    { id: "bare-mode", label: "Chế độ --bare" },
    { id: "stdin-limit", label: "Giới hạn dữ liệu pipe" },
    { id: "json-output", label: "--output-format json và --json-schema" },
    { id: "scoped-tools", label: "--allowedTools theo mẫu" },
    { id: "dontask-mode", label: "Chế độ dontAsk" },
    { id: "gha-action", label: "claude-code-action@v1" },
    { id: "ci-secrets", label: "Secret trong GitHub" },
    { id: "trigger-guard", label: "Ai kích hoạt được" },
    { id: "tests-gate", label: "Test là cổng chặn" },
    { id: "ci-cost-limits", label: "Giới hạn lượt, thời gian, chạy song song" },
  ],
  hints: [
    "Trong CI: --bare + API key trong biến môi trường + công cụ cho phép tối thiểu.",
    "Bash(npm test *) chỉ cho lệnh bắt đầu bằng npm test — chú ý dấu cách trước *.",
    "Claude nhận xét; test quyết định đỏ/xanh; người quyết định merge.",
  ],
  sources: [
    { label: "Claude Code Docs — Run Claude Code programmatically (claude -p, --bare, mã thoát, stdin 10 MB, --json-schema, --allowedTools, dontAsk)", href: HL },
    { label: "Claude Code Docs — GitHub Actions (cài đặt, secret, quyền, automation mode, chi phí, --max-turns)", href: GA },
    { label: "Claude Code Docs — Permission modes", href: PM },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Chương 6 và 9 bạn đã cho Claude chạy test và sửa lỗi khi làm việc tương tác. Bài này đưa Claude vào **CI** (máy chạy tự động khi có commit hoặc pull request). Công cụ chính: **`claude -p`** (hay `--print`) — chạy Claude Code **không tương tác**, in kết quả rồi thoát với **mã 0 nếu thành công, khác 0 nếu thất bại**, nên script rẽ nhánh được. Trong script và CI, thêm **`--bare`**: bỏ qua tự nạp hooks, skills, plugin, MCP server, auto memory và CLAUDE.md của máy — kết quả **giống nhau trên mọi máy**. Bare mode không dùng đăng nhập gói Claude, nên cần **`ANTHROPIC_API_KEY`**.",
        "**Dữ liệu vào – ra.** Có thể **pipe** dữ liệu vào: `git diff main | claude -p \"…\"` — stdin giới hạn **10 MB**, lớn hơn thì ghi ra file và nhắc tên file trong prompt. Muốn đọc kết quả bằng code: `--output-format json` (có trường `result`, session ID, chi phí ước tính) và thêm **`--json-schema`** để nhận **`structured_output`** đúng khuôn. Nếu Claude từ chối hoặc không ra được kết quả hợp lệ, **trường `structured_output` sẽ không có** — script phải kiểm tra trước khi dùng.",
        "**Quyền tối thiểu.** `--allowedTools` cho phép công cụ không cần hỏi, theo cú pháp quy tắc quyền: `Read`, `Bash(npm test *)` (chỉ lệnh bắt đầu bằng `npm test` — dấu cách trước `*` quan trọng). Với CI khoá chặt, dùng **`--permission-mode dontAsk`**: mọi lệnh lẽ ra phải hỏi đều **bị từ chối** thay vì treo chờ. Chỉ cấp `Edit` khi job thật sự cần sửa file, và job đó nên tạo PR để người duyệt, không đẩy thẳng vào nhánh chính.",
        "**Claude Code GitHub Actions** (`anthropics/claude-code-action@v1`): cài nhanh bằng `/install-github-app` trong Claude Code hoặc cài tay (GitHub App, secret, file workflow). Không có `prompt` → **interactive mode**, trả lời khi ai đó nhắc **`@claude`**; có `prompt` → **automation mode**, chạy theo sự kiện (pull request, lịch). Key lưu trong **GitHub Secrets** (`ANTHROPIC_API_KEY`), **không commit**; cấp quyền workflow tối thiểu; chỉ người có quyền ghi mới kích hoạt được (bot bị chặn trừ khi liệt kê); PR từ fork trên repo công khai không nhận secret. Chi phí gồm **phút GitHub Actions + token API** — giới hạn bằng `--max-turns` trong `claude_args`, `timeout-minutes`, và kiểm soát chạy song song. Cuối cùng: **bộ test tự động vẫn là cổng chặn**; nhận xét của Claude là tham khảo; người quyết định merge.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Như dây chuyền có máy đo tự động (test) và một chuyên gia đi kiểm tra (Claude). Máy đo quyết định sản phẩm đạt hay loại; chuyên gia ghi nhận xét, chỉ được vào những khu được cấp thẻ (allowedTools), không được tự sửa máy nếu không có lệnh — và quản đốc ký xuất xưởng (người merge).",
      },
      terms: [
        { term: "CI", definition: "Tích hợp liên tục: máy tự chạy build và test mỗi khi có thay đổi." },
        { term: "Mã thoát", definition: "Số chương trình trả về khi kết thúc: 0 là thành công, khác 0 là lỗi." },
        { term: "stdin / pipe", definition: "Đưa đầu ra của lệnh này làm đầu vào của lệnh khác bằng dấu |." },
        { term: "Workflow (GitHub Actions)", definition: "File YAML trong .github/workflows mô tả việc chạy tự động khi có sự kiện." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: một lệnh claude -p cho CI",
      infographic: {
        kind: "annotated",
        label: "Rà diff tìm lỗi chính tả trong tài liệu",
        lines: [
          { text: "git diff origin/main |", tone: "context", note: "Đưa diff vào qua stdin (≤ 10 MB)" },
          { text: "claude --bare -p \"Liệt kê lỗi chính tả trong diff…\"", tone: "task", note: "Không tương tác; không nạp cấu hình của máy" },
          { text: "--permission-mode dontAsk", tone: "constraints", note: "Lệnh nào phải hỏi thì bị từ chối" },
          { text: "--output-format json --json-schema '{…\"loi\":…}'", tone: "output", note: "Đọc structured_output bằng code" },
          { text: "| jq '.structured_output'", tone: "output", note: "Không có trường này → coi như không có kết quả hợp lệ" },
        ],
      },
      caption: "Theo Run Claude Code programmatically (đối chiếu 03/11/2026). Cần ANTHROPIC_API_KEY trong môi trường CI.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vai trò trong pipeline pull request",
      mermaid: `flowchart TD
  A["Mở pull request"] --> B["Test tự động (unit, e2e, lint)"]
  B -->|"Đỏ"| X["Chặn merge"]
  B -->|"Xanh"| C["Claude rà PR (claude-code-action, quyền đọc)"]
  C --> D["Nhận xét trong log hoặc comment"]
  D --> E{"Người review"}
  E -->|"Cần sửa"| F["Tác giả sửa (có thể nhờ @claude)"]
  F --> B
  E -->|"Đồng ý"| G["Merge"]`,
      caption: "Test là cổng chặn; Claude bổ sung góc nhìn; con người quyết định.",
      alt: "Lưu đồ pull request: mở PR, chạy test tự động; đỏ thì chặn merge; xanh thì Claude rà PR với quyền đọc, đưa nhận xét vào log hoặc comment; người review quyết định: cần sửa thì tác giả sửa, có thể nhờ @claude, rồi chạy lại test; đồng ý thì merge.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: job CI có Claude",
      bad: {
        label: "Quyền rộng, không giới hạn",
        content: "claude -p \"Sửa mọi lỗi rồi push lên main\" --permission-mode bypassPermissions (key dán trong file workflow, không timeout, chạy trên mọi comment)",
        notes: ["Key lộ trong repo.", "Claude được làm mọi thứ, kể cả đẩy thẳng lên main.", "Chi phí và thời gian không giới hạn."],
      },
      good: {
        label: "Quyền tối thiểu, kết quả có khuôn",
        content: "claude --bare -p \"Rà diff theo CLAUDE.md…\" --permission-mode dontAsk --allowedTools \"Read\" --output-format json --json-schema '…' — key từ secrets.ANTHROPIC_API_KEY, timeout-minutes 15, --max-turns 5, nhận xét để người review quyết định.",
        notes: ["Không lộ key.", "Chỉ đọc, không sửa.", "Có giới hạn chi phí; kết quả đọc được bằng code."],
      },
      takeaway: "Trong CI, quyền càng ít càng an toàn; kết quả càng có khuôn càng dễ kiểm.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đối chiếu với tài liệu claude -p",
      sim: {
        kind: "verify",
        sourceTitle: "Trích Run Claude Code programmatically và GitHub Actions (đối chiếu 03/11/2026)",
        sourceLines: [
          "Claude Code exits with code 0 on success and a non-zero code when the run fails, so your scripts can branch on the exit status.",
          "Add --bare to reduce startup time by skipping auto-discovery of hooks, skills, custom commands, subagents, installed plugins, MCP servers, auto memory, and CLAUDE.md.",
          "In bare mode, Claude Code never reads OAuth credentials or the system keychain.",
          "Piped stdin is capped at 10MB.",
          "If a run ends without valid structured output, for example because Claude declined the request, the response has no structured_output field.",
          "dontAsk: Claude Code denies every call that would otherwise prompt, which is useful for locked-down CI runs.",
          "Never commit API keys or OAuth tokens directly to your repository. Always store them as GitHub Secrets.",
        ],
        verdicts: [
          { id: "dung", label: "Đúng theo nguồn" },
          { id: "sai", label: "Sai theo nguồn" },
          { id: "khong-noi", label: "Nguồn không nói" },
        ],
        claims: [
          { id: "c1", text: "Script CI có thể dựa vào mã thoát của claude -p để biết lần chạy thành công hay thất bại.", verdict: "dung", why: "Dòng 1." },
          { id: "c2", text: "Với --bare, claude -p vẫn tự nạp CLAUDE.md của dự án.", verdict: "sai", why: "Dòng 2: bare bỏ qua CLAUDE.md." },
          { id: "c3", text: "Ở bare mode có thể dùng đăng nhập gói Claude thay cho API key.", verdict: "sai", why: "Dòng 3: không đọc OAuth." },
          { id: "c4", text: "Có thể pipe trực tiếp file log 50 MB vào claude -p.", verdict: "sai", why: "Dòng 4: tối đa 10 MB." },
          { id: "c5", text: "Dùng --json-schema thì phản hồi luôn có structured_output.", verdict: "sai", why: "Dòng 5: có thể thiếu khi từ chối." },
          { id: "c6", text: "dontAsk phù hợp với CI bị khoá chặt.", verdict: "dung", why: "Dòng 6." },
          { id: "c7", text: "claude -p chạy nhanh gấp đôi trên runner Linux so với macOS.", verdict: "khong-noi", why: "Không đoạn nào nói về tốc độ theo hệ điều hành." },
        ],
        note: "Cờ và hành vi thay đổi theo phiên bản Claude Code; kiểm tra tài liệu khi nâng cấp.",
      },
      intro: "Xếp mỗi khẳng định: đúng, sai, hay nguồn không nói.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: thêm Claude vào CI của dự án",
      steps: [
        {
          title: "Thử cục bộ một lệnh chỉ đọc",
          detail: "Pipe diff vào; Claude không cần quyền Bash để đọc diff.",
          code: { lang: "bash", content: "git diff main | claude --bare -p \"Liệt kê lỗi chính tả trong diff: file:dòng và lỗi. Không có thì in KHONG_CO_LOI.\"" },
        },
        {
          title: "Lấy kết quả có khuôn",
          detail: "Kiểm tra structured_output tồn tại trước khi dùng.",
          code: {
            lang: "bash",
            content:
              "git diff main | claude --bare -p \"Rà lỗi chính tả trong diff\" \\\n  --permission-mode dontAsk \\\n  --output-format json \\\n  --json-schema '{\"type\":\"object\",\"properties\":{\"loi\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"required\":[\"loi\"]}' \\\n  | jq '.structured_output'",
          },
        },
        { title: "Cài GitHub Actions", detail: "Trong Claude Code chạy /install-github-app (repo github.com, cần quyền admin), hoặc cài GitHub App + thêm secret ANTHROPIC_API_KEY + chép workflow mẫu." },
        {
          title: "Workflow rà PR chỉ đọc",
          detail: "Quyền tối thiểu, có timeout và giới hạn lượt.",
          code: {
            lang: "yaml",
            content:
              "name: Claude review\non:\n  pull_request:\n    types: [opened, synchronize]\njobs:\n  review:\n    runs-on: ubuntu-latest\n    timeout-minutes: 15\n    permissions:\n      contents: read\n      pull-requests: read\n      issues: read\n      id-token: write\n    steps:\n      - uses: actions/checkout@v6\n        with:\n          fetch-depth: 1\n      - uses: anthropics/claude-code-action@v1\n        with:\n          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}\n          prompt: \"Rà PR này theo CLAUDE.md, ghi nhận xét vào log.\"\n          claude_args: \"--max-turns 5\"",
          },
        },
        { title: "Giữ test là cổng chặn", detail: "Bắt buộc job test xanh mới merge (branch protection); job Claude chỉ là nhận xét." },
        { title: "Theo dõi chi phí", detail: "Xem phút Actions và usage API hằng tuần; giảm --max-turns hoặc tần suất nếu vượt dự kiến." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết một lệnh claude -p (hoặc bước workflow) để CI rà diff tài liệu tìm thuật ngữ sai so với bảng chuẩn, theo yêu cầu trong dữ liệu mẫu. Lệnh phải: chạy chế độ bare, không cho Claude chạy lệnh ngoài phạm vi, trả kết quả JSON, và lấy key từ secret/biến môi trường.",
      sampleData: {
        name: "Yêu cầu của nhóm tài liệu",
        content: "Mỗi PR sửa thư mục docs/ cần kiểm tra thuật ngữ theo file docs/thuat-ngu.md. Chỉ cần nhận xét, không sửa file. Kết quả phải đọc được bằng script để đăng tóm tắt. Không được để lộ API key.",
      },
      placeholder: "claude -p \"…\"",
      rubric: [
        { id: "bare", label: "Chế độ bare", weight: 1, check: { kind: "anyKeyword", keywords: ["--bare"] }, pass: "Có --bare.", fail: "Thêm --bare cho kết quả ổn định trong CI." },
        { id: "perm", label: "Giới hạn quyền", weight: 1, check: { kind: "anyKeyword", keywords: ["dontask", "allowedtools"] }, pass: "Có giới hạn quyền.", fail: "Thêm --permission-mode dontAsk và/hoặc --allowedTools \"Read\"." },
        { id: "json", label: "Kết quả JSON", weight: 1, check: { kind: "anyKeyword", keywords: ["output-format json", "json-schema"] }, pass: "Có kết quả có khuôn.", fail: "Thêm --output-format json (và --json-schema)." },
        { id: "secret", label: "Key từ secret/môi trường", weight: 1, check: { kind: "anyKeyword", keywords: ["secrets", "anthropic_api_key"] }, pass: "Key không nằm trong code.", fail: "Lấy key từ secrets.ANTHROPIC_API_KEY hoặc biến môi trường." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "env:\n  ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}\nrun: |\n  git diff origin/main -- docs/ | claude --bare -p \"Đọc docs/thuat-ngu.md. Liệt kê thuật ngữ trong diff không khớp bảng chuẩn: file, từ sai, từ đúng. Không sửa file.\" \\\n    --allowedTools \"Read\" --permission-mode dontAsk \\\n    --output-format json \\\n    --json-schema '{\"type\":\"object\",\"properties\":{\"sai_thuat_ngu\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"required\":[\"sai_thuat_ngu\"]}' \\\n    > ket-qua.json\n  jq -e '.structured_output' ket-qua.json",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "claude -p chạy không tương tác, trả mã thoát; trong script/CI thêm --bare và đặt ANTHROPIC_API_KEY.",
        "Pipe tối đa 10 MB; --output-format json + --json-schema → kiểm tra structured_output tồn tại.",
        "Quyền tối thiểu: --allowedTools theo mẫu, --permission-mode dontAsk cho CI khoá chặt.",
        "GitHub Actions: secret trong GitHub Secrets, quyền workflow tối thiểu, --max-turns, timeout.",
        "Test tự động là cổng chặn; Claude nhận xét; người quyết định merge.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Một repo của nhóm bạn đã có test chạy trong CI.",
      tasks: [
        "Thêm một bước claude -p chỉ đọc (rà tài liệu hoặc rà diff theo CLAUDE.md), kết quả JSON.",
        "Chạy thử trên 5 PR, so nhận xét của Claude với nhận xét của người review.",
        "Ghi chi phí (phút Actions + token) và quyết định giữ, chỉnh hay bỏ.",
      ],
      deliverable: "File workflow + bảng so sánh 5 PR + số liệu chi phí.",
      checklist: ["Key nằm trong GitHub Secrets", "Job Claude chỉ có quyền đọc", "Test vẫn là điều kiện bắt buộc để merge"],
    },
  ],
};
