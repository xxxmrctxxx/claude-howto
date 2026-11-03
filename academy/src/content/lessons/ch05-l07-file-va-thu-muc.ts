import type { Lesson } from "@/lib/types/content";

const MEM = "https://code.claude.com/docs/en/memory";

export const lessonFileVaThuMuc: Lesson = {
  id: "ch05-l07",
  chapterId: "ch05",
  slug: "file-va-thu-muc",
  title: "Giải thích file và thư mục",
  subtitle: "Đọc hiểu cấu trúc một dự án: file nào để sửa, file nào do công cụ tạo, file nào là bí mật, và file nào dành riêng cho Claude Code.",
  level: "beginner",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Nhận ra vai trò các file và thư mục phổ biến: README, package.json, src, tests, data." },
    { id: "o2", text: "Phân biệt file nên sửa, file do công cụ tạo (node_modules, dist, .git) và file bí mật (.env)." },
    { id: "o3", text: "Hiểu các file dành cho Claude Code: CLAUDE.md, CLAUDE.local.md, thư mục .claude, .mcp.json." },
    { id: "o4", text: "Nhờ Claude Code giải thích đúng trọng tâm: xem file ẩn, tham chiếu file bằng @, hỏi cụ thể." },
  ],
  concepts: [
    { id: "readme", label: "README" },
    { id: "manifest", label: "File khai báo dự án (package.json…)" },
    { id: "src-tests", label: "Thư mục src, tests, data" },
    { id: "hidden-files", label: "File ẩn" },
    { id: "generated", label: "File do công cụ tạo" },
    { id: "secrets", label: "File bí mật" },
    { id: "gitignore", label: ".gitignore" },
    { id: "claude-md-files", label: "CLAUDE.md và CLAUDE.local.md" },
    { id: "claude-dir", label: "Thư mục .claude và .mcp.json" },
    { id: "file-mention", label: "Tham chiếu file bằng @" },
    { id: "ask-explain", label: "Hỏi Claude giải thích" },
  ],
  hints: [
    "File và thư mục bắt đầu bằng dấu chấm là file ẩn — xem bằng `ls -a`.",
    "node_modules, dist, .git do công cụ quản lý: không sửa tay.",
    "Gõ `@` trong Claude Code để chọn file cần hỏi.",
  ],
  sources: [
    { label: "Claude Code — How Claude remembers your project (CLAUDE.md, CLAUDE.local.md, ~/.claude/CLAUDE.md)", href: MEM },
    { label: "Claude Code — Interactive mode: quick commands (@ file path mention)", href: "https://code.claude.com/docs/en/interactive-mode" },
    { label: "Claude Code — How Claude Code works (.claude/settings.json, sessions in ~/.claude/projects)", href: "https://code.claude.com/docs/en/how-claude-code-works" },
    { label: "Claude Code — Security (.mcp.json có bước duyệt riêng)", href: "https://code.claude.com/docs/en/security" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Một dự án là một thư mục có cấu trúc. Thường gặp: **README.md** (giới thiệu, cách chạy — đọc đầu tiên), **file khai báo** như `package.json` (JavaScript) hay `requirements.txt`, `pyproject.toml` (Python) chứa tên dự án, thư viện cần dùng và lệnh tắt (scripts), **src/** (mã nguồn), **tests/** (kiểm thử), **data/** (dữ liệu mẫu).",
        "Có những thứ **do công cụ tạo và quản lý**, không sửa tay: `node_modules/` (thư viện tải về), `dist/` hoặc `build/` (sản phẩm đóng gói), `.git/` (lịch sử git). Và có **file bí mật** như `.env` chứa mật khẩu, khoá API — không commit. File `.gitignore` liệt kê những gì git bỏ qua, thường gồm `node_modules/` và `.env`.",
        "File dành cho Claude Code: **CLAUDE.md** (ở `./CLAUDE.md` hoặc `./.claude/CLAUDE.md`) chứa hướng dẫn chung của dự án, commit để cả nhóm dùng; **CLAUDE.local.md** là ghi chú cá nhân cho dự án, nên đưa vào .gitignore; `~/.claude/CLAUDE.md` là sở thích cá nhân cho mọi dự án. Thư mục **.claude/** chứa cấu hình như `settings.json` (ví dụ cho phép sẵn lệnh `npm test`); **.mcp.json** khai báo các kết nối MCP của dự án.",
        "Muốn hiểu một file, hãy hỏi Claude **cụ thể**: gõ `@` để chọn đúng file, rồi nói bạn cần hiểu điều gì và ở mức nào. Tên bắt đầu bằng dấu chấm là **file ẩn** — dùng `ls -a` để thấy.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Dự án giống hồ sơ một trạm biến áp: bìa hồ sơ (README), danh mục vật tư (package.json), bản vẽ thi công (src), biên bản thử nghiệm (tests), mẫu đo (data). Kho vật tư do nhà cung cấp giao (node_modules) thì không tự cưa sửa; két sắt chìa khoá (.env) thì không photo phát cho ai.",
      },
      terms: [
        { term: "Manifest", definition: "File khai báo dự án: tên, phiên bản, thư viện phụ thuộc, lệnh tắt (ví dụ package.json)." },
        { term: "Dependency", definition: "Thư viện dự án cần; công cụ tải về (ví dụ vào node_modules)." },
        { term: "Hidden file", definition: "File/thư mục có tên bắt đầu bằng dấu chấm; ls thường không hiện." },
        { term: ".gitignore", definition: "Danh sách file và thư mục git bỏ qua, không đưa vào commit." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: cây thư mục có chú thích",
      infographic: {
        kind: "annotated",
        label: "web-loi-qa/",
        lines: [
          { text: "├── README.md", note: "Giới thiệu và cách chạy — đọc đầu tiên" },
          { text: "├── package.json", note: "Tên dự án, thư viện, lệnh tắt (npm test…)" },
          { text: "├── CLAUDE.md", note: "Hướng dẫn chung cho Claude, commit cho cả nhóm" },
          { text: "├── .claude/settings.json", note: "Cấu hình Claude Code của dự án" },
          { text: "├── src/", note: "Mã nguồn — nơi bạn và Claude sửa nhiều nhất" },
          { text: "├── tests/", note: "Kiểm thử — chạy để chứng minh code đúng" },
          { text: "├── data/", note: "Dữ liệu mẫu để chạy thử" },
          { text: "├── node_modules/", note: "Thư viện tải về — không sửa tay, không commit" },
          { text: "├── .git/", note: "Lịch sử git — không sửa tay" },
          { text: "├── .gitignore", note: "Những gì git bỏ qua: node_modules/, .env" },
          { text: "└── .env", note: "Bí mật (mật khẩu, khoá) — không commit, không dán vào chat" },
        ],
      },
      caption: "Cấu trúc minh hoạ cho một dự án web nhỏ; dự án thật có thể khác tên nhưng vai trò tương tự.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: Claude đọc gì và khi nào",
      mermaid: `flowchart LR
  A["Mở phiên claude"] --> B["Nạp CLAUDE.md và CLAUDE.local.md từ thư mục đang mở và các thư mục cha"]
  A --> C["Đọc .claude/settings.json: quyền cho phép sẵn"]
  D["Bạn giao việc"] --> E["Claude tìm và đọc file liên quan trong src, tests, data"]
  E --> F["CLAUDE.md trong thư mục con được nạp khi Claude làm việc ở đó"]
  G["node_modules, .git, .env"] -.->|"Không sửa tay; .env không commit"| H["Bạn giữ nguyên tắc"]`,
      caption: "CLAUDE.md được nạp đầu phiên; file mã nguồn được đọc theo nhu cầu của việc.",
      alt: "Sơ đồ: khi mở phiên, Claude nạp CLAUDE.md và CLAUDE.local.md từ thư mục đang mở và các thư mục cha, đọc cấu hình .claude/settings.json. Khi bạn giao việc, Claude tìm và đọc file liên quan trong src, tests, data; CLAUDE.md ở thư mục con được nạp khi làm việc ở đó. node_modules, .git, .env: không sửa tay, .env không commit.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: nhờ Claude giải thích",
      bad: {
        label: "Quá rộng",
        content: "giải thích hết dự án cho tôi",
        notes: ["Câu trả lời dài, chung chung.", "Không biết bạn cần hiểu đến mức nào, để làm gì."],
      },
      good: {
        label: "Đúng file, đúng mục đích",
        content: "Giải thích @package.json cho người mới: mỗi lệnh trong scripts làm gì, thư viện nào quan trọng nhất và vì sao. Trình bày dạng bảng, không sửa file.",
        notes: ["Dùng @ để chỉ đúng file.", "Nêu người đọc, nội dung cần và định dạng.", "Có ràng buộc không sửa."],
      },
      takeaway: "Một file, một mục đích, một định dạng — câu trả lời dùng được ngay.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: phân loại file trong dự án",
      sim: {
        kind: "classify",
        bins: [
          { id: "main", label: "Nội dung chính (đọc và sửa)" },
          { id: "config", label: "Cấu hình và hướng dẫn" },
          { id: "generated", label: "Do công cụ tạo — không sửa tay" },
          { id: "secret", label: "Bí mật — không commit" },
        ],
        items: [
          { id: "f1", text: "src/app.js", bin: "main", why: "Mã nguồn chính của ứng dụng." },
          { id: "f2", text: "tests/loc-du-lieu.test.js", bin: "main", why: "Kiểm thử là một phần của dự án, sửa cùng mã nguồn." },
          { id: "f3", text: "README.md", bin: "main", why: "Tài liệu dự án, cập nhật khi dự án thay đổi." },
          { id: "f4", text: "package.json", bin: "config", why: "Khai báo dự án, thư viện và lệnh tắt." },
          { id: "f5", text: "CLAUDE.md", bin: "config", why: "Hướng dẫn cho Claude, commit cho cả nhóm." },
          { id: "f6", text: ".gitignore", bin: "config", why: "Cấu hình git bỏ qua file nào." },
          { id: "f7", text: "node_modules/", bin: "generated", why: "Thư viện do trình quản lý gói tải về." },
          { id: "f8", text: ".git/", bin: "generated", why: "Git tự quản lý lịch sử." },
          { id: "f9", text: "dist/", bin: "generated", why: "Sản phẩm build tạo tự động." },
          { id: "f10", text: ".env", bin: "secret", why: "Chứa mật khẩu và khoá — phải nằm trong .gitignore." },
        ],
      },
      intro: "Xếp từng file/thư mục của dự án web-loi-qa vào đúng nhóm.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: đọc hiểu một dự án",
      steps: [
        { title: "Xem đủ file, kể cả file ẩn", detail: "Chú ý .gitignore, .env, .claude/.", code: { lang: "bash", content: "ls -a" } },
        { title: "Đọc README trước", detail: "Biết dự án làm gì và chạy thế nào.", code: { lang: "bash", content: "cat README.md" } },
        { title: "Hỏi Claude về vai trò từng thư mục", detail: "Giới hạn độ dài để câu trả lời gọn.", code: { lang: "text", content: "Giải thích vai trò của từng thư mục cấp đầu trong dự án, mỗi thư mục 1 dòng. Không sửa file." } },
        { title: "Hỏi sâu một file bằng @", detail: "Gõ @ rồi chọn file trong danh sách gợi ý.", code: { lang: "text", content: "Giải thích @src/app.js cho người mới học: hàm nào đọc dữ liệu, hàm nào vẽ bảng?" } },
        { title: "Kiểm tra bí mật đã được bỏ qua", detail: "Nếu .env chưa có trong .gitignore, thêm vào trước khi commit.", code: { lang: "bash", content: "cat .gitignore" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết bảng giải thích ngắn (mỗi mục một dòng) cho đồng nghiệp mới về các mục sau trong dự án: README.md, package.json, src/, tests/, node_modules/, .env, .gitignore, CLAUDE.md. Với mục nào không được sửa tay hoặc không được commit, ghi rõ.",
      placeholder: "README.md: …\npackage.json: …\nsrc/: …\n…",
      rubric: [
        { id: "nm", label: "node_modules: không sửa/không commit", weight: 1, check: { kind: "regex", pattern: "node_modules[^\\n]*(khong sua|khong commit|tu tai|tai ve|tu dong)" }, pass: "node_modules được giải thích đúng.", fail: "Ghi rõ node_modules là thư viện tải về, không sửa tay, không commit." },
        { id: "env", label: ".env là bí mật", weight: 1, check: { kind: "regex", pattern: "\\.env[^\\n]*(bi mat|mat khau|khoa|khong commit)" }, pass: ".env được giải thích đúng.", fail: "Ghi rõ .env chứa bí mật, không commit." },
        { id: "claude", label: "CLAUDE.md cho Claude", weight: 1, check: { kind: "regex", pattern: "claude\\.md[^\\n]*(huong dan|quy uoc|claude doc)" }, pass: "CLAUDE.md được giải thích đúng.", fail: "Ghi rõ CLAUDE.md là hướng dẫn/quy ước Claude đọc mỗi phiên." },
        { id: "pkg", label: "package.json khai báo dự án", weight: 1, check: { kind: "regex", pattern: "package\\.json[^\\n]*(thu vien|script|lenh|phu thuoc|dependenc)" }, pass: "package.json được giải thích đúng.", fail: "Nêu package.json chứa thư viện và lệnh tắt (scripts)." },
        { id: "gi", label: ".gitignore", weight: 1, check: { kind: "regex", pattern: "\\.gitignore[^\\n]*(bo qua|khong dua|khong commit)" }, pass: ".gitignore được giải thích đúng.", fail: "Nêu .gitignore liệt kê file git bỏ qua." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "README.md: giới thiệu dự án và cách chạy, đọc đầu tiên.\npackage.json: tên dự án, thư viện phụ thuộc và các lệnh tắt (scripts) như npm test.\nsrc/: mã nguồn chính.\ntests/: kiểm thử, chạy để kiểm tra code đúng.\nnode_modules/: thư viện tải về tự động, không sửa tay, không commit.\n.env: chứa bí mật như mật khẩu, khoá API — không commit, không dán vào chat.\n.gitignore: danh sách file git bỏ qua (node_modules/, .env).\nCLAUDE.md: hướng dẫn và quy ước dự án mà Claude đọc mỗi phiên, commit cho cả nhóm.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "README đọc đầu tiên; package.json/requirements.txt khai báo thư viện và lệnh; src, tests, data chứa nội dung chính.",
        "node_modules, dist, .git do công cụ quản lý — không sửa tay; .env chứa bí mật — không commit.",
        ".gitignore quyết định git bỏ qua gì; file bắt đầu bằng dấu chấm là file ẩn (ls -a).",
        "CLAUDE.md (dự án, commit), CLAUDE.local.md (cá nhân, gitignore), ~/.claude/CLAUDE.md (mọi dự án).",
        "Hỏi Claude cụ thể: dùng @ để chọn file, nói rõ mục đích và định dạng.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Mở Claude Code trong một dự án bạn đang làm (hoặc dự án mẫu) và lập “bản đồ dự án”.",
      tasks: [
        "Dùng ls -a để liệt kê cấp đầu, đánh dấu file ẩn.",
        "Hỏi Claude vai trò từng thư mục, mỗi thư mục 1 dòng, không sửa file.",
        "Kiểm tra .gitignore đã có .env và thư mục do công cụ tạo chưa.",
        "Thêm mục “Cấu trúc thư mục” ngắn vào CLAUDE.md.",
      ],
      deliverable: "Bản đồ dự án (bảng) và đoạn “Cấu trúc thư mục” trong CLAUDE.md.",
      checklist: ["Có phân loại: sửa được / do công cụ tạo / bí mật", ".gitignore đã bảo vệ .env", "CLAUDE.md có mục cấu trúc thư mục"],
    },
  ],
};
