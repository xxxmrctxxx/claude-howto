import type { Lesson } from "@/lib/types/content";

const MEM = "https://code.claude.com/docs/en/memory";
const COSTS = "https://code.claude.com/docs/en/costs";

export const lessonTaiLieuDuAn: Lesson = {
  id: "ch08-l05",
  chapterId: "ch08",
  slug: "tai-lieu-du-an",
  title: "Sử dụng tài liệu dự án",
  subtitle: "Viết CLAUDE.md ngắn mà đắt giá, đưa quy trình hiếm dùng sang skill, quy tắc riêng sang .claude/rules — để Claude khỏi phải khám phá lại mỗi phiên.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích CLAUDE.md được nạp mỗi phiên và vì sao cần ngắn, cụ thể (dưới khoảng 200 dòng)." },
    { id: "o2", text: "Xếp nội dung vào đúng chỗ: CLAUDE.md, skill (nạp khi cần), quy tắc theo đường dẫn, hoặc bỏ đi." },
    { id: "o3", text: "Dùng tài liệu dự án để Claude không phải khám phá lại: lệnh kiểm tra, cấu trúc, skill tổng quan." },
    { id: "o4", text: "Hiểu giới hạn: @import không giảm context; CLAUDE.md là ngữ cảnh, không phải luật bắt buộc." },
  ],
  concepts: [
    { id: "claude-md-load", label: "CLAUDE.md nạp mỗi phiên" },
    { id: "claude-md-size", label: "Độ dài CLAUDE.md" },
    { id: "specific", label: "Hướng dẫn cụ thể" },
    { id: "skills-on-demand", label: "Skill nạp khi cần" },
    { id: "path-rules", label: "Quy tắc theo đường dẫn" },
    { id: "classify-content", label: "Xếp nội dung vào đúng chỗ" },
    { id: "test-command", label: "Lệnh kiểm tra trong CLAUDE.md" },
    { id: "overview-skill", label: "Tài liệu tổng quan dự án" },
    { id: "memory-check", label: "Kiểm tra file đã nạp" },
    { id: "imports", label: "@import" },
    { id: "enforce", label: "Ngữ cảnh khác với luật bắt buộc" },
  ],
  hints: [
    "Dòng đáng giá nhất trong CLAUDE.md thường là lệnh chạy phép kiểm tra (test, build).",
    "Quy trình dùng vài lần mỗi năm → skill; quy tắc chỉ cho một thư mục → .claude/rules.",
    "Điều tuyệt đối không được làm → hook hoặc quy tắc quyền, không chỉ ghi trong CLAUDE.md.",
  ],
  sources: [
    { label: "Claude Code — How Claude remembers your project (kích thước, @import, quy tắc theo đường dẫn, /memory)", href: MEM },
    { label: "Claude Code — Manage costs: Move instructions from CLAUDE.md to skills, Offload processing to hooks and skills", href: COSTS },
    { label: "Claude Code — Best practices: lệnh kiểm tra là dòng hữu ích nhất trong CLAUDE.md", href: "https://code.claude.com/docs/en/best-practices" },
    { label: "Claude Code — Configure permissions: Read deny rules", href: "https://code.claude.com/docs/en/permissions" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Tài liệu dự án tốt giúp Claude **không phải khám phá lại** mỗi phiên — tiết kiệm token đọc file. Nhưng **CLAUDE.md được nạp vào context ở đầu mọi phiên**, kể cả khi bạn làm việc không liên quan. Tài liệu khuyên mỗi file **dưới khoảng 200 dòng**: file dài tốn context và **giảm mức tuân thủ**; hướng dẫn càng cụ thể, ngắn gọn thì Claude làm theo càng đều.",
        "Xếp nội dung vào đúng chỗ: **CLAUDE.md** cho điều cần ở mọi phiên (lệnh build/test, quy ước đặt tên, quyết định kiến trúc chính). **Skill** cho quy trình chuyên biệt dùng khi cần (review PR, migrate database) — skill chỉ nạp nội dung đầy đủ khi được dùng. **Quy tắc theo đường dẫn** trong `.claude/rules/` cho hướng dẫn chỉ áp dụng một phần codebase — chỉ nạp khi Claude làm việc với file khớp. Bí mật, lịch sử thay đổi, lời khuyên chung chung (“viết code tốt”) thì **bỏ đi**.",
        "Theo Best practices, nếu dự án có phép kiểm tra (test, build, lint), **dòng hữu ích nhất trong CLAUDE.md là lệnh chạy nó**. Một skill “tổng quan codebase” mô tả kiến trúc, thư mục chính và quy ước giúp Claude có ngay ngữ cảnh thay vì đọc nhiều file.",
        "Hai giới hạn cần nhớ: tách file bằng `@path/to/file` (import) giúp **sắp xếp** nhưng **không giảm** context, vì file được import nạp cùng CLAUDE.md. Và CLAUDE.md là **ngữ cảnh, không phải luật bắt buộc** — muốn chặn tuyệt đối một hành động, dùng hook hoặc quy tắc quyền (ví dụ `Read(./.env)` trong danh sách deny).",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "CLAUDE.md giống tấm bảng nội quy ở cửa xưởng: ai vào cũng đọc, nên chỉ ghi những điều cốt lõi. Quy trình bảo dưỡng định kỳ 40 bước thì để trong sổ tay riêng, cần mới lấy ra (skill). Quy định riêng của phòng sơn thì dán ở cửa phòng sơn (.claude/rules). Còn cửa kho hoá chất thì phải có khoá thật (hook, permission), không chỉ dán giấy “cấm vào”.",
      },
      terms: [
        { term: "Skill", definition: "Gói hướng dẫn/quy trình mà Claude nạp đầy đủ khi cần dùng (học kỹ ở Chương 7)." },
        { term: ".claude/rules/", definition: "Thư mục quy tắc; quy tắc có khai báo paths chỉ nạp khi làm việc với file khớp." },
        { term: "@import", definition: "Cú pháp @đường/dẫn trong CLAUDE.md để kéo nội dung file khác vào." },
        { term: "Adherence", definition: "Mức Claude tuân theo hướng dẫn; giảm khi hướng dẫn quá dài hoặc mơ hồ." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: đặt hướng dẫn ở đâu?",
      infographic: {
        kind: "table",
        headers: ["Nơi đặt", "Khi nào nạp", "Nên chứa", "Ví dụ"],
        rows: [
          ["CLAUDE.md", "Đầu mọi phiên", "Điều cần ở mọi việc", "npm test; đơn vị ghi kVA; cấu trúc thư mục"],
          ["Skill", "Khi được dùng", "Quy trình chuyên biệt, dài", "Quy trình review PR, migrate database"],
          [".claude/rules/ (có paths)", "Khi làm việc với file khớp", "Quy tắc cho một phần codebase", "src/api/**: lỗi trả về dạng JSON"],
          ["Hook / quy tắc quyền", "Luôn được thực thi", "Điều tuyệt đối không được làm", "Read(./.env) trong deny"],
          ["Bỏ đi", "—", "Bí mật, lịch sử thay đổi, lời khuyên chung chung", "API key; “viết code tốt”"],
        ],
      },
      caption: "Theo tài liệu Memory, Manage costs và Permissions (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: xếp một dòng hướng dẫn",
      mermaid: `flowchart TD
  A["Một dòng hướng dẫn"] --> B{"Là bí mật, lịch sử hay lời khuyên chung chung?"}
  B -->|"Có"| X["Bỏ đi"]
  B -->|"Không"| C{"Phải đúng tuyệt đối, không ngoại lệ?"}
  C -->|"Có"| H["Hook hoặc quy tắc quyền"]
  C -->|"Không"| D{"Cần ở mọi phiên?"}
  D -->|"Không, chỉ khi làm quy trình đó"| S["Skill"]
  D -->|"Có"| E{"Chỉ cho một phần codebase?"}
  E -->|"Có"| R[".claude/rules/ theo đường dẫn"]
  E -->|"Không"| M["CLAUDE.md, viết ngắn và cụ thể"]`,
      caption: "Mỗi dòng trong CLAUDE.md nên “đáng” được nạp ở mọi phiên.",
      alt: "Lưu đồ xếp một dòng hướng dẫn: nếu là bí mật, lịch sử hay lời khuyên chung chung thì bỏ. Nếu phải đúng tuyệt đối thì dùng hook hoặc quy tắc quyền. Nếu không cần ở mọi phiên thì đưa vào skill. Nếu cần ở mọi phiên nhưng chỉ cho một phần codebase thì .claude/rules theo đường dẫn; còn lại thì CLAUDE.md, viết ngắn và cụ thể.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: CLAUDE.md",
      bad: {
        label: "900 dòng, đủ thứ",
        content: "# Dự án\nViết code sạch, tốt, dễ hiểu.\nAPI key test: sk-ant-xxxx\nLịch sử thay đổi 2019–2026: …(300 dòng)\nQuy trình review PR: …(250 dòng)\nQuy trình migrate database: …(200 dòng)",
        notes: ["Nạp 900 dòng ở mọi phiên, mọi việc.", "Lời khuyên chung chung không hướng dẫn được gì.", "Có bí mật — không bao giờ để trong file dự án."],
      },
      good: {
        label: "Ngắn, cụ thể, đúng chỗ",
        content: "# Dự án web-loi-qa\n- Chạy test: npm test (chạy trước mỗi commit)\n- Đơn vị công suất ghi kVA; ngày dạng DD/MM/YYYY\n- src/: mã nguồn; tests/: kiểm thử; data/: CSV mẫu, chỉ đọc\n- Review PR: dùng skill review-pr\n- Quy tắc riêng cho src/api/ nằm trong .claude/rules/api.md",
        notes: ["Mỗi dòng cụ thể, kiểm tra được.", "Quy trình dài chuyển sang skill, quy tắc riêng sang rules.", "Bí mật và lịch sử bị loại."],
      },
      takeaway: "Ngắn hơn không có nghĩa là ít thông tin hơn — mà là đúng thông tin ở đúng chỗ.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: dọn dẹp một CLAUDE.md quá dài",
      sim: {
        kind: "classify",
        bins: [
          { id: "keep", label: "Giữ trong CLAUDE.md" },
          { id: "skill", label: "Chuyển sang skill" },
          { id: "rules", label: "Quy tắc theo đường dẫn (.claude/rules/)" },
          { id: "drop", label: "Bỏ đi" },
        ],
        items: [
          { id: "i1", text: "Chạy test: npm test", bin: "keep", why: "Lệnh kiểm tra là dòng hữu ích nhất, cần ở mọi phiên." },
          { id: "i2", text: "Đơn vị công suất ghi kVA, không ghi KVA", bin: "keep", why: "Quy ước dùng ở mọi việc." },
          { id: "i3", text: "Quy trình review PR chi tiết 40 bước", bin: "skill", why: "Chỉ cần khi review — nạp khi dùng." },
          { id: "i4", text: "Hướng dẫn migrate database (dùng 2 lần mỗi năm)", bin: "skill", why: "Quy trình hiếm dùng." },
          { id: "i5", text: "Với file trong src/api/: luôn trả lỗi dạng JSON", bin: "rules", why: "Chỉ áp dụng một phần codebase." },
          { id: "i6", text: "Hãy viết code sạch và tốt", bin: "drop", why: "Chung chung, không hướng dẫn được hành động cụ thể." },
          { id: "i7", text: "API key test: sk-ant-…", bin: "drop", why: "Bí mật không bao giờ để trong file dự án." },
          { id: "i8", text: "Lịch sử thay đổi từ 2019 đến nay", bin: "drop", why: "Đã có trong git log/CHANGELOG; không cần nạp mỗi phiên." },
        ],
      },
      intro: "Mỗi dòng dưới đây lấy từ một CLAUDE.md 900 dòng. Xếp từng dòng vào nơi phù hợp nhất.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: rút gọn CLAUDE.md",
      steps: [
        { title: "Mở và kiểm tra", detail: "/memory mở file để sửa; /context (mục Memory files) cho biết file nào đã nạp. File quá dài sẽ có cảnh báo khi khởi động và trong /status.", code: { lang: "text", content: "/memory\n/context" } },
        { title: "Đặt lệnh kiểm tra lên đầu", detail: "Lệnh test/build/lint là thông tin giá trị nhất." },
        { title: "Chuyển quy trình dài sang skill", detail: "Quy trình chuyên biệt chỉ nạp khi dùng (cách viết skill học ở Chương 7)." },
        { title: "Tách quy tắc theo thư mục", detail: "Đặt trong .claude/rules/ với khai báo paths để chỉ nạp khi làm việc với file khớp." },
        { title: "Chuyển điều tuyệt đối sang hook/quyền", detail: "Ví dụ chặn đọc file bí mật bằng quy tắc deny.", code: { lang: "json", content: "{\n  \"permissions\": {\n    \"deny\": [\"Read(./.env)\", \"Read(./secrets/**)\"]\n  }\n}" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Rút gọn đoạn CLAUDE.md trong phần dữ liệu mẫu. Viết bản CLAUDE.md mới (ngắn, cụ thể) và ghi rõ phần nào chuyển sang skill, phần nào sang .claude/rules, phần nào bỏ đi.",
      sampleData: {
        name: "CLAUDE.md hiện tại (trích)",
        content:
          "Viết code cẩn thận và test kỹ.\nChạy test bằng pytest -q.\nMật khẩu DB dev: qa2026\nQuy trình phát hành phiên bản (60 dòng)…\nVới file trong src/api/: mọi hàm phải ghi log lỗi.\nTên biến dùng snake_case.\nLịch sử dự án từ 2020 (120 dòng)…",
      },
      placeholder: "CLAUDE.md mới:\n- …\nChuyển sang skill: …\nChuyển sang .claude/rules: …\nBỏ đi: …",
      rubric: [
        { id: "test", label: "Giữ lệnh test", weight: 1, check: { kind: "regex", pattern: "pytest" }, pass: "Có lệnh test.", fail: "Giữ lệnh pytest -q trong CLAUDE.md." },
        { id: "naming", label: "Giữ quy ước cụ thể", weight: 1, check: { kind: "regex", pattern: "snake_case" }, pass: "Có quy ước đặt tên.", fail: "Giữ quy ước snake_case." },
        { id: "skill", label: "Quy trình phát hành → skill", weight: 1, check: { kind: "regex", pattern: "skill[^\\n]*phat hanh|phat hanh[^\\n]*skill" }, pass: "Đã chuyển quy trình phát hành sang skill.", fail: "Chuyển quy trình phát hành sang skill." },
        { id: "rules", label: "Quy tắc src/api → rules", weight: 1, check: { kind: "regex", pattern: "(\\.claude/rules|rules)[^\\n]*src/api|src/api[^\\n]*rules" }, pass: "Đã tách quy tắc src/api.", fail: "Đưa quy tắc cho src/api/ vào .claude/rules." },
        { id: "nosecret", label: "Loại bí mật", weight: 1, check: { kind: "regex", pattern: "bo[^\\n]*mat khau|mat khau[^\\n]*(bo|bien moi truong|secret)" }, pass: "Đã loại mật khẩu.", fail: "Bỏ mật khẩu khỏi CLAUDE.md (dùng biến môi trường)." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "CLAUDE.md mới:\n- Chạy test: pytest -q (chạy trước mỗi commit)\n- Tên biến dùng snake_case\nChuyển sang skill: quy trình phát hành phiên bản → skill phat-hanh.\nChuyển sang .claude/rules: quy tắc ghi log lỗi cho src/api/ → .claude/rules/api.md với paths src/api/**.\nBỏ đi: mật khẩu DB (chuyển sang biến môi trường), lịch sử dự án (đã có trong git), câu “viết code cẩn thận” vì chung chung.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "CLAUDE.md nạp ở đầu mọi phiên: giữ dưới khoảng 200 dòng, viết cụ thể.",
        "Lệnh kiểm tra (test/build) là dòng hữu ích nhất.",
        "Quy trình chuyên biệt → skill (nạp khi dùng); quy tắc cho một phần codebase → .claude/rules có paths.",
        "@import giúp sắp xếp nhưng không giảm context.",
        "CLAUDE.md là ngữ cảnh, không phải luật: điều tuyệt đối dùng hook hoặc quy tắc quyền.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Rà soát CLAUDE.md của một dự án thật bạn đang dùng với Claude Code.",
      tasks: [
        "Đếm số dòng; đánh dấu từng đoạn: giữ / skill / rules / bỏ.",
        "Rút gọn và đưa lệnh kiểm tra lên đầu.",
        "Chạy /context để xác nhận file đã nạp và so sánh mức dùng trước/sau bằng /usage.",
      ],
      deliverable: "CLAUDE.md mới kèm bảng: Đoạn | Quyết định | Lý do.",
      checklist: ["CLAUDE.md dưới khoảng 200 dòng", "Không còn bí mật hay lịch sử thay đổi", "Lệnh kiểm tra nằm ở đầu file"],
    },
  ],
};
