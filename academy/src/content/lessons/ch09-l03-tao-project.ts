import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const MEM = "https://code.claude.com/docs/en/memory";
const PM = "https://code.claude.com/docs/en/permission-modes";

export const lessonTaoProject: Lesson = {
  id: "ch09-l03",
  chapterId: "ch09",
  slug: "tao-project",
  title: "Tạo project",
  subtitle: "Dựng khung dự án gọn gàng: README, .gitignore, commit đầu tiên, CLAUDE.md có lệnh chạy và lệnh test — để Claude tự kiểm tra được ngay từ ngày đầu.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Dựng khung dự án: thư mục, README có cách chạy, .gitignore loại bí mật và thư mục thừa, git init và commit đầu." },
    { id: "o2", text: "Tạo CLAUDE.md bằng /init và bổ sung lệnh chạy, lệnh test, quy ước, cấu trúc thư mục." },
    { id: "o3", text: "Nhờ Claude đề xuất cấu trúc và công nghệ trong plan mode trước khi tạo file; chọn giải pháp đơn giản." },
    { id: "o4", text: "Thiết lập phép kiểm tra chạy được ngay từ đầu để Claude tự kiểm tra; giữ bí mật ngoài git." },
  ],
  concepts: [
    { id: "project-skeleton", label: "Khung dự án" },
    { id: "readme-run", label: "README có cách chạy" },
    { id: "gitignore", label: ".gitignore" },
    { id: "first-commit", label: "Commit đầu tiên" },
    { id: "init-claude-md", label: "/init tạo CLAUDE.md" },
    { id: "test-command-line", label: "Lệnh test trong CLAUDE.md" },
    { id: "plan-structure", label: "Lập kế hoạch cấu trúc" },
    { id: "simple-stack", label: "Công nghệ đơn giản" },
    { id: "no-extra-deps", label: "Không thêm thư viện thừa" },
    { id: "check-from-start", label: "Kiểm tra từ đầu" },
    { id: "secrets-out", label: "Bí mật ngoài git" },
    { id: "spec-in-repo", label: "SPEC.md trong repo" },
  ],
  hints: [
    "Dòng hữu ích nhất trong CLAUDE.md: lệnh chạy phép kiểm tra (test, build, lint).",
    ".env phải nằm trong .gitignore trước commit đầu tiên.",
    "Hỏi cấu trúc trong plan mode trước, duyệt rồi mới cho tạo file.",
  ],
  sources: [
    { label: "Claude Code — Best practices (lệnh kiểm tra trong CLAUDE.md, cho Claude một phép kiểm tra để chạy)", href: BP },
    { label: "Claude Code — Memory (/init, CLAUDE.md)", href: MEM },
    { label: "Claude Code — Permission modes (plan mode)", href: PM },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Có SPEC.md và wireframe rồi, giờ dựng **khung dự án**. Trước khi Claude tạo hàng chục file, hãy vào **plan mode** và nhờ Claude **đề xuất cấu trúc thư mục và công nghệ** dựa trên SPEC.md — rồi bạn duyệt. Với dự án nhỏ, chọn **giải pháp đơn giản** bạn hoặc đồng đội bảo trì được; dặn rõ **không thêm thư viện** khi chưa cần.",
        "Bộ khung tối thiểu: **README.md** (dự án làm gì, **cách chạy**, cách chạy test), **.gitignore** (loại `node_modules/`, `.env` và các file bí mật — phải có **trước commit đầu tiên**), **SPEC.md** (từ bài 9.1), rồi `git init` và **commit đầu tiên** để có điểm quay lại.",
        "Chạy **`/init`** để Claude đọc dự án và tạo **CLAUDE.md**, rồi bổ sung: lệnh chạy, **lệnh test**, quy ước giao diện (bài 9.2), cấu trúc thư mục. Tài liệu Best practices nhấn mạnh: nếu repo có phép kiểm tra (test, build, linter), **dòng hữu ích nhất trong CLAUDE.md là lệnh chạy phép kiểm tra đó**.",
        "Vì vậy hãy **có phép kiểm tra ngay từ đầu** — dù chỉ một bài test nhỏ — để Claude tự chạy và đọc kết quả: “Cho Claude thứ gì đó chạy được và trả về đạt/không đạt; khi có nó, Claude tự làm tiếp mà bạn không phải canh.” Bí mật (khoá API, mật khẩu cơ sở dữ liệu) để trong `.env` đã bị bỏ qua bởi git, kèm file `.env.example` chỉ có tên biến.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Mở một xưởng mới: trước khi đưa máy vào, bạn kẻ vạch khu vực (cấu trúc thư mục), treo bảng hướng dẫn vận hành ở cửa (README, CLAUDE.md), khoá tủ đựng chìa khoá két (bí mật ngoài git), và đặt sẵn dụng cụ đo kiểm (lệnh test) để mọi sản phẩm ra lò đều được đo.",
      },
      terms: [
        { term: ".gitignore", definition: "File liệt kê những gì git bỏ qua, ví dụ node_modules/ và .env." },
        { term: "/init", definition: "Lệnh Claude Code đọc dự án và tạo CLAUDE.md ban đầu." },
        { term: ".env.example", definition: "File mẫu chỉ có tên biến môi trường, không có giá trị thật, được commit." },
        { term: "Phép kiểm tra", definition: "Lệnh trả về đạt/không đạt: test, build, linter… để Claude tự kiểm tra." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: khung dự án web-loi-qa",
      infographic: {
        kind: "annotated",
        label: "web-loi-qa/",
        lines: [
          { text: "README.md        — dự án làm gì, cách chạy, cách chạy test", note: "Cho người", tone: "context" },
          { text: "CLAUDE.md        — lệnh chạy, lệnh test, quy ước, cấu trúc", note: "Cho Claude, nạp mỗi phiên", tone: "role" },
          { text: "SPEC.md          — yêu cầu, phạm vi, tiêu chí chấp nhận", note: "Định nghĩa “xong”", tone: "task" },
          { text: ".gitignore       — node_modules/  .env", note: "Bí mật ngoài git", tone: "constraints" },
          { text: ".env.example     — DATABASE_URL=", note: "Chỉ tên biến", tone: "constraints" },
          { text: "src/  tests/     — code và bài test", note: "Có test từ ngày đầu", tone: "output" },
        ],
      },
      caption: "Khung gợi ý cho dự án mẫu của chương; tên thư mục cụ thể tuỳ công nghệ bạn chọn.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: dựng khung dự án",
      mermaid: `flowchart TD
  A["SPEC.md + wireframe"] --> B["Plan mode: Claude đề xuất cấu trúc, công nghệ"]
  B --> C{"Bạn duyệt?"}
  C -->|"Chưa"| B
  C -->|"Đạt"| D["Tạo README, .gitignore (.env), thư mục"]
  D --> E["git init + commit đầu"]
  E --> F["/init → CLAUDE.md + bổ sung lệnh test"]
  F --> G["Một bài test nhỏ chạy được"]
  G --> H["Commit: sẵn sàng xây frontend"]`,
      caption: "Commit sớm, có phép kiểm tra sớm.",
      alt: "Lưu đồ: từ SPEC.md và wireframe, vào plan mode để Claude đề xuất cấu trúc và công nghệ; bạn duyệt, chưa đạt thì đề xuất lại. Đạt thì tạo README, .gitignore có .env, các thư mục; git init và commit đầu; chạy /init để có CLAUDE.md và bổ sung lệnh test; viết một bài test nhỏ chạy được; commit và sẵn sàng xây frontend.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: bắt đầu dự án",
      bad: {
        label: "Tạo hết rồi tính",
        content: "“Tạo project web theo dõi lỗi đầy đủ, dùng framework gì cũng được.”\n→ 60 file, 25 thư viện, chưa có test, .env chứa mật khẩu đã bị commit.",
        notes: ["Không duyệt được cấu trúc.", "Thư viện thừa khó bảo trì.", "Bí mật lọt vào lịch sử git."],
      },
      good: {
        label: "Kế hoạch → khung → kiểm tra",
        content: "(Plan mode) “Đọc @SPEC.md, đề xuất cấu trúc thư mục và công nghệ đơn giản nhất đủ cho phạm vi Phải có. Không thêm thư viện ngoài danh sách bạn đề xuất. Chưa tạo file.”\n→ Duyệt → tạo README, .gitignore, một test mẫu → /init → commit.",
        notes: ["Cấu trúc được duyệt.", "Có test từ đầu.", "Bí mật nằm ngoài git."],
      },
      takeaway: "Khung nhỏ, rõ, có kiểm tra — rồi mới xây.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: dựng khung dự án bằng terminal",
      sim: {
        kind: "terminal",
        preset: "home-basic",
        steps: [
          { instruction: "Tạo thư mục dự án web-loi-qa kèm thư mục con src.", hint: "mkdir -p web-loi-qa/src", check: { kind: "dir", path: "~/web-loi-qa/src", label: "Có web-loi-qa/src" } },
          { instruction: "Vào thư mục dự án.", hint: "cd web-loi-qa", check: { kind: "cwd", path: "~/web-loi-qa", label: "Đang ở web-loi-qa" } },
          { instruction: "Tạo README.md có tiêu đề dự án.", hint: 'echo "# Web loi QA" > README.md', check: { kind: "file", path: "~/web-loi-qa/README.md", contains: "Web loi QA", label: "Có README.md" } },
          { instruction: "Tạo .gitignore loại file .env (bí mật).", hint: 'echo ".env" > .gitignore', check: { kind: "file", path: "~/web-loi-qa/.gitignore", contains: ".env", label: ".gitignore có .env" } },
          { instruction: "Tạo CLAUDE.md ghi lệnh chạy test.", hint: 'echo "Chay test: npm test" > CLAUDE.md', check: { kind: "file", path: "~/web-loi-qa/CLAUDE.md", contains: "npm test", label: "CLAUDE.md có lệnh test" } },
          { instruction: "Khởi tạo git.", hint: "git init", check: { kind: "gitInitialized", path: "~/web-loi-qa", label: "Đã git init" } },
          { instruction: "Đưa mọi file vào staging.", hint: "git add .", check: { kind: "gitState", path: "~/web-loi-qa", stagedMin: 3, label: "Đã stage các file" } },
          { instruction: "Tạo commit đầu tiên.", hint: 'git commit -m "chore: khoi tao du an"', check: { kind: "commitCount", path: "~/web-loi-qa", min: 1, label: "Có commit đầu" } },
        ],
      },
      intro: "Terminal MÔ PHỎNG: dựng khung tối thiểu trước khi nhờ Claude viết code. Trên máy thật, sau bước này bạn chạy claude rồi /init.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dựng khung với Claude Code",
      steps: [
        { title: "Mở Claude Code trong thư mục dự án", detail: "Đặt SPEC.md vào thư mục trước.", code: { lang: "bash", content: "cd ~/du-an/web-loi-qa\nclaude" } },
        { title: "Hỏi cấu trúc trong plan mode", detail: "Shift+Tab để vào plan mode, hoặc thêm /plan trước yêu cầu.", code: { lang: "text", content: "/plan Đọc @SPEC.md. Đề xuất cấu trúc thư mục và công nghệ đơn giản nhất đủ cho phạm vi “Phải có”: frontend, backend, nơi lưu dữ liệu, cách chạy test. Liệt kê thư viện cần và lý do. Chưa tạo file." } },
        { title: "Duyệt và cho tạo khung", detail: "Sửa kế hoạch nếu cần; duyệt rồi để Claude tạo README, .gitignore, .env.example, thư mục, một bài test mẫu." },
        { title: "Tạo và bổ sung CLAUDE.md", detail: "Chạy /init, rồi thêm lệnh chạy, lệnh test, quy ước giao diện.", code: { lang: "text", content: "/init" } },
        { title: "Chạy phép kiểm tra lần đầu", detail: "Yêu cầu bằng chứng: lệnh đã chạy và kết quả.", code: { lang: "text", content: "Chạy lệnh test trong CLAUDE.md và cho tôi xem kết quả." } },
        { title: "Commit", detail: "Kiểm tra .env không nằm trong danh sách file trước khi commit.", code: { lang: "bash", content: "git status\ngit add .\ngit commit -m \"chore: khoi tao du an\"" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết nội dung CLAUDE.md (5–8 dòng) cho dự án trong dữ liệu mẫu: lệnh chạy, lệnh test, cấu trúc chính, quy ước và một quy tắc về bí mật.",
      sampleData: {
        name: "Thông tin dự án",
        content:
          "Dự án web-loi-qa: frontend trong src/, API trong server/, bài test trong tests/.\nChạy thử: npm run dev. Chạy test: npm test. Kiểm tra định dạng: npm run lint.\nQuy ước: thiết kế cho điện thoại trước, chữ tối thiểu 16px.\nMật khẩu cơ sở dữ liệu nằm trong .env (không commit).",
      },
      placeholder: "# CLAUDE.md\n## Lệnh\n- …",
      rubric: [
        { id: "test", label: "Có lệnh test", weight: 1, check: { kind: "anyKeyword", keywords: ["npm test"] }, pass: "Có lệnh test.", fail: "Ghi lệnh chạy test: npm test." },
        { id: "run", label: "Có lệnh chạy", weight: 1, check: { kind: "anyKeyword", keywords: ["npm run dev"] }, pass: "Có lệnh chạy.", fail: "Ghi lệnh chạy thử: npm run dev." },
        { id: "structure", label: "Có cấu trúc", weight: 1, check: { kind: "allGroups", groups: [["src"], ["server"], ["tests"]] }, pass: "Có cấu trúc.", fail: "Nêu src/, server/, tests/." },
        { id: "convention", label: "Có quy ước", weight: 1, check: { kind: "anyKeyword", keywords: ["16px", "điện thoại trước"] }, pass: "Có quy ước.", fail: "Thêm quy ước giao diện." },
        { id: "secret", label: "Quy tắc bí mật", weight: 1, check: { kind: "regex", pattern: "\\.env[^\\n]*(khong|cam|commit|doc)" }, pass: "Có quy tắc bí mật.", fail: "Thêm: không commit/không đọc .env." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "# CLAUDE.md\n## Lệnh\n- Chạy thử: npm run dev\n- Chạy test: npm test (chạy sau mỗi thay đổi, phải đạt trước khi commit)\n- Kiểm tra định dạng: npm run lint\n## Cấu trúc\n- src/: frontend · server/: API · tests/: bài test\n## Quy ước\n- Thiết kế cho điện thoại trước, chữ tối thiểu 16px.\n- File .env chứa bí mật: không đọc, không commit; biến mới thì thêm tên vào .env.example.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Hỏi cấu trúc và công nghệ trong plan mode, duyệt trước khi tạo file; chọn giải pháp đơn giản, không thêm thư viện thừa.",
        "Khung tối thiểu: README (cách chạy), .gitignore (.env, node_modules/), SPEC.md, .env.example; git init và commit sớm.",
        "/init tạo CLAUDE.md; bổ sung lệnh chạy, lệnh test, quy ước, cấu trúc.",
        "Dòng hữu ích nhất trong CLAUDE.md là lệnh chạy phép kiểm tra.",
        "Có test từ ngày đầu để Claude tự kiểm tra; luôn yêu cầu bằng chứng.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Tiếp tục dự án của bạn từ bài 9.1–9.2.",
      tasks: [
        "Hỏi Claude đề xuất cấu trúc trong plan mode; duyệt và ghi lại lý do chọn.",
        "Tạo khung tối thiểu, /init, bổ sung CLAUDE.md, một bài test mẫu chạy được.",
        "Commit đầu tiên; kiểm tra .env không có trong lịch sử git.",
      ],
      deliverable: "Repo có README, CLAUDE.md, SPEC.md, .gitignore, một test đạt, commit đầu.",
      checklist: ["CLAUDE.md có lệnh test", ".env bị git bỏ qua", "Test mẫu chạy đạt"],
    },
  ],
};
