import type { Lesson } from "@/lib/types/content";

const SK = "https://code.claude.com/docs/en/skills";
const FO = "https://code.claude.com/docs/en/features-overview";

export const lessonSkillLaGi: Lesson = {
  id: "ch07-l01",
  chapterId: "ch07",
  slug: "skill-la-gi",
  title: "Skill là gì?",
  subtitle: "Skill là một thư mục chứa SKILL.md: hướng dẫn và quy trình mà Claude nạp khi cần hoặc khi bạn gõ /tên-skill — khác CLAUDE.md ở chỗ không chiếm context mỗi phiên.",
  level: "intermediate",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích skill là gì: thư mục có SKILL.md gồm frontmatter và hướng dẫn; Claude dùng khi liên quan hoặc khi bạn gõ /tên-skill." },
    { id: "o2", text: "Phân biệt skill với CLAUDE.md: CLAUDE.md nạp mỗi phiên; skill chỉ để sẵn mô tả, phần thân nạp khi dùng." },
    { id: "o3", text: "Nhận ra các nơi đặt skill (cá nhân, dự án, plugin, tổ chức) và thứ tự ưu tiên khi trùng tên." },
    { id: "o4", text: "Nhận ra quy trình nào nên thành skill và vì sao description quyết định khi nào Claude tự dùng skill." },
  ],
  concepts: [
    { id: "skill-def", label: "Skill" },
    { id: "skill-md", label: "SKILL.md" },
    { id: "frontmatter-description", label: "description trong frontmatter" },
    { id: "invoke-slash", label: "Gọi bằng /tên-skill" },
    { id: "auto-invoke", label: "Claude tự dùng skill" },
    { id: "on-demand-loading", label: "Nạp khi dùng" },
    { id: "vs-claude-md", label: "Skill và CLAUDE.md" },
    { id: "skill-locations", label: "Nơi đặt skill" },
    { id: "skill-precedence", label: "Ưu tiên khi trùng tên" },
    { id: "commands-merged", label: ".claude/commands/ cũ" },
    { id: "bundled-skills", label: "Skill có sẵn" },
    { id: "first-skill", label: "Tạo skill đầu tiên" },
  ],
  hints: [
    "Tên thư mục (hoặc trường name) trở thành lệnh: .claude/skills/bao-cao-loi/ → /bao-cao-loi.",
    "Description là thứ Claude đọc để quyết định có dùng skill hay không.",
    "Phần thân của skill chỉ nạp khi skill được dùng.",
  ],
  sources: [
    { label: "Claude Code — Extend Claude with skills (SKILL.md, nơi đặt, ưu tiên, nạp khi dùng)", href: SK },
    { label: "Claude Code — Extend Claude Code (so sánh CLAUDE.md, skill và các tính năng khác)", href: FO },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Bạn có những việc lặp đi lặp lại theo cùng một cách: viết báo cáo lỗi theo mẫu của nhóm, chuẩn bị bản phát hành, tóm tắt thay đổi trước khi commit. Thay vì mỗi lần dán lại cùng một đoạn hướng dẫn, bạn ghi nó một lần vào **skill**. Theo tài liệu Claude Code: tạo một file `SKILL.md` chứa hướng dẫn, Claude thêm nó vào bộ công cụ; Claude **tự dùng khi liên quan**, hoặc bạn gọi thẳng bằng **`/tên-skill`**.",
        "Mỗi skill là **một thư mục**, bên trong bắt buộc có `SKILL.md` gồm hai phần: **frontmatter YAML** giữa hai dòng `---` (quan trọng nhất là `description` — cho Claude biết *khi nào* dùng skill) và **nội dung markdown** là các bước Claude làm theo. Tên thư mục (hoặc trường `name` nếu có) trở thành lệnh: `.claude/skills/bao-cao-loi/SKILL.md` → `/bao-cao-loi`. Thư mục có thể chứa thêm file mẫu, tài liệu tham khảo, script.",
        "Điểm khác lớn nhất so với **CLAUDE.md**: CLAUDE.md được nạp vào context **mỗi phiên**. Với skill, mặc định chỉ **mô tả** luôn nằm trong context; **phần thân chỉ nạp khi skill được dùng**. Vì vậy quy ước cần ở mọi phiên (lệnh build, quy tắc đặt tên) để trong CLAUDE.md; quy trình dài, chỉ cần thỉnh thoảng thì để trong skill.",
        "Skill đặt ở nhiều nơi: **cá nhân** `~/.claude/skills/<tên>/SKILL.md` (mọi dự án của bạn), **dự án** `.claude/skills/<tên>/SKILL.md` (commit để cả nhóm dùng), **plugin** (gọi theo dạng `/tên-plugin:tên-skill`), và **tổ chức** qua managed settings. Khi trùng tên: tổ chức > cá nhân > dự án. Lệnh tự tạo kiểu cũ trong `.claude/commands/` vẫn chạy và tương đương skill, nhưng tài liệu khuyên dùng skill cho việc mới. Claude Code cũng có sẵn một số skill đi kèm — `/code-review` ở Chương 6 là một ví dụ. Skill theo chuẩn mở **Agent Skills**, dùng được ở nhiều công cụ AI.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "CLAUDE.md giống bảng nội quy dán ở cửa xưởng — ai vào cũng đọc. Skill giống tập quy trình chuẩn (SOP) xếp trên kệ: bìa ghi rõ “dùng khi nào”, chỉ khi cần mới lấy xuống đọc từng bước. Bìa ghi mơ hồ thì không ai biết lấy tập nào.",
      },
      terms: [
        { term: "Skill", definition: "Thư mục chứa SKILL.md với hướng dẫn; Claude dùng khi liên quan hoặc khi bạn gõ /tên-skill." },
        { term: "SKILL.md", definition: "File bắt buộc của skill: frontmatter YAML giữa hai dòng --- và nội dung markdown." },
        { term: "Frontmatter", definition: "Phần đầu file giữa hai dòng ---, khai báo description, name và các tuỳ chọn." },
        { term: "description", definition: "Mô tả skill làm gì và khi nào dùng; Claude dựa vào đây để tự chọn skill." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: cấu tạo một SKILL.md",
      infographic: {
        kind: "annotated",
        label: ".claude/skills/bao-cao-loi/SKILL.md",
        lines: [
          { text: "---", note: "Mở frontmatter", tone: "neutral" },
          { text: "description: Viết báo cáo lỗi theo mẫu của nhóm QA. Dùng khi người dùng nhờ ghi lại lỗi, viết bug report hoặc tóm tắt lỗi vừa tái hiện.", note: "Làm gì + khi nào dùng — Claude đọc dòng này để tự chọn skill", tone: "role" },
          { text: "---", note: "Đóng frontmatter", tone: "neutral" },
          { text: "## Mẫu báo cáo", note: "Phần thân: chỉ nạp khi skill được dùng", tone: "context" },
          { text: "1. Tiêu đề: [Khu vực] Hiện tượng", tone: "task" },
          { text: "2. Bước tái hiện (đánh số) · 3. Kết quả mong đợi / thực tế", tone: "task" },
          { text: "4. Mức độ: Cao / Trung bình / Thấp — kèm lý do", tone: "constraints" },
          { text: "Trả về markdown, không quá 15 dòng.", note: "Định dạng đầu ra", tone: "output" },
        ],
      },
      caption: "Ví dụ tự soạn theo cấu trúc trong tài liệu Skills (đối chiếu 03/11/2026). Tên thư mục bao-cao-loi trở thành lệnh /bao-cao-loi.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: skill được nạp khi nào",
      mermaid: `flowchart TD
  A["Bắt đầu phiên"] --> B["Context có: CLAUDE.md đầy đủ + mô tả các skill"]
  B --> C{"Yêu cầu của bạn"}
  C -->|"Gõ /bao-cao-loi"| D["Nạp toàn bộ SKILL.md"]
  C -->|"Khớp description"| D
  C -->|"Không liên quan"| E["Skill không được nạp"]
  D --> F["Claude làm theo các bước trong skill"]`,
      caption: "Mô tả luôn sẵn; phần thân chỉ vào context khi skill được gọi hoặc khớp yêu cầu.",
      alt: "Lưu đồ: khi bắt đầu phiên, context có CLAUDE.md đầy đủ và mô tả các skill. Tuỳ yêu cầu: gõ /bao-cao-loi hoặc yêu cầu khớp description thì nạp toàn bộ SKILL.md và Claude làm theo các bước; yêu cầu không liên quan thì skill không được nạp.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: viết description",
      bad: {
        label: "Description mơ hồ",
        content: "---\ndescription: Hỗ trợ báo cáo.\n---\nViết báo cáo theo mẫu nhóm…",
        notes: ["Không nói báo cáo gì, khi nào dùng.", "Thiếu từ khoá người dùng hay nói (“ghi lại lỗi”, “bug report”).", "Claude khó tự chọn skill này."],
      },
      good: {
        label: "Description nói rõ làm gì và khi nào",
        content: "---\ndescription: Viết báo cáo lỗi theo mẫu của nhóm QA. Dùng khi người dùng nhờ ghi lại lỗi, viết bug report hoặc tóm tắt lỗi vừa tái hiện.\n---\n## Mẫu báo cáo\n1. Tiêu đề: [Khu vực] Hiện tượng …",
        notes: ["Nêu việc skill làm.", "Liệt kê tình huống và từ khoá kích hoạt.", "Ý quan trọng đặt ở đầu."],
      },
      takeaway: "Description là “bìa” của skill: làm gì + dùng khi nào + từ khoá người dùng hay nói.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đối chiếu khẳng định với tài liệu",
      sim: {
        kind: "verify",
        sourceTitle: "Trích tài liệu Extend Claude with skills (đối chiếu 03/11/2026)",
        sourceLines: [
          "Create a SKILL.md file with instructions, and Claude adds it to its toolkit. Claude uses skills when relevant, or you can invoke one directly with /skill-name.",
          "Every skill needs a SKILL.md file with two parts: YAML frontmatter between --- markers that tells Claude when to use the skill, and markdown content with the instructions.",
          "Unlike CLAUDE.md content, a skill's body loads only when it's used.",
          "Personal: ~/.claude/skills/<skill-name>/SKILL.md. Project: .claude/skills/<skill-name>/SKILL.md.",
          "Enterprise over personal, and personal over project.",
          "A file at .claude/commands/deploy.md and a skill at .claude/skills/deploy/SKILL.md both create /deploy and work the same way.",
        ],
        verdicts: [
          { id: "dung", label: "Đúng theo nguồn" },
          { id: "sai", label: "Sai theo nguồn" },
          { id: "khong-noi", label: "Nguồn không nói" },
        ],
        claims: [
          { id: "c1", text: "Skill chỉ chạy khi bạn gõ /tên-skill, Claude không bao giờ tự dùng.", verdict: "sai", why: "Dòng 1: Claude dùng skill khi liên quan, hoặc bạn gọi trực tiếp." },
          { id: "c2", text: "Phần thân của skill luôn nạp vào context ngay khi mở phiên, giống CLAUDE.md.", verdict: "sai", why: "Dòng 3: phần thân chỉ nạp khi skill được dùng." },
          { id: "c3", text: "Skill cá nhân và skill dự án trùng tên thì bản cá nhân được dùng.", verdict: "dung", why: "Dòng 5: personal over project." },
          { id: "c4", text: "File .claude/commands/deploy.md cũ vẫn tạo được lệnh /deploy.", verdict: "dung", why: "Dòng 6: cả hai cách đều tạo /deploy." },
          { id: "c5", text: "Mỗi skill chỉ được dài tối đa 20 dòng.", verdict: "khong-noi", why: "Đoạn trích không nêu giới hạn này." },
          { id: "c6", text: "Phần frontmatter cho Claude biết khi nào nên dùng skill.", verdict: "dung", why: "Dòng 2: frontmatter tells Claude when to use the skill." },
        ],
        note: "Đây là bài đối chiếu với đoạn trích; tài liệu đầy đủ còn nhiều chi tiết hơn.",
      },
      intro: "Đọc đoạn trích tài liệu, rồi xếp từng khẳng định vào: đúng, sai, hay nguồn không nói.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tạo skill đầu tiên",
      steps: [
        { title: "Chọn một việc lặp lại", detail: "Việc bạn đã dán cùng hướng dẫn vào chat nhiều lần, ví dụ viết báo cáo lỗi theo mẫu." },
        { title: "Tạo thư mục skill trong dự án", detail: "Tên thư mục sẽ là tên lệnh. Đặt trong .claude/skills/ để commit cho cả nhóm, hoặc ~/.claude/skills/ nếu chỉ dùng riêng.", code: { lang: "bash", content: "mkdir -p .claude/skills/bao-cao-loi" } },
        { title: "Viết SKILL.md", detail: "Frontmatter có description nói rõ làm gì và khi nào dùng; phần thân là các bước hoặc mẫu.", code: { lang: "markdown", content: "---\ndescription: Viết báo cáo lỗi theo mẫu của nhóm QA. Dùng khi người dùng nhờ ghi lại lỗi hoặc viết bug report.\n---\n\n## Mẫu báo cáo\n1. Tiêu đề: [Khu vực] Hiện tượng\n2. Bước tái hiện (đánh số)\n3. Kết quả mong đợi / Kết quả thực tế\n4. Mức độ: Cao / Trung bình / Thấp, kèm lý do" } },
        { title: "Thử hai cách gọi", detail: "Gọi trực tiếp /bao-cao-loi; và nói tự nhiên “ghi lại lỗi nút Lưu không phản hồi” để xem Claude có tự dùng skill không." },
        { title: "Chỉnh description nếu cần", detail: "Claude không tự dùng → thêm từ khoá người dùng hay nói; dùng quá thường xuyên → viết description cụ thể hơn." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc ghi chú trong dữ liệu mẫu. Viết nội dung SKILL.md cho quy trình này: frontmatter có description (làm gì + dùng khi nào), phần thân có các bước đánh số, và một dòng về định dạng đầu ra.",
      sampleData: {
        name: "Ghi chú của trưởng nhóm QA",
        content:
          "Mỗi sáng thứ Hai tôi đều dán cùng một đoạn vào chat: “Đọc file loi-tuan.csv, đếm số lỗi theo công đoạn, nêu 3 công đoạn nhiều lỗi nhất, so với tuần trước nếu có file cũ, viết thành bảng markdown”.\nTôi muốn gõ /tong-hop-loi-tuan là xong, và khi tôi nói “tổng hợp lỗi tuần này” thì Claude cũng tự làm đúng như vậy.",
      },
      placeholder: "---\ndescription: …\n---\n\n## Các bước\n1. …",
      rubric: [
        { id: "fm", label: "Có frontmatter giữa hai dòng ---", weight: 1, check: { kind: "regex", pattern: "^---\\s*$[\\s\\S]*^---\\s*$" }, pass: "Có frontmatter.", fail: "Mở và đóng frontmatter bằng hai dòng ---." },
        { id: "desc", label: "Có description", weight: 1, check: { kind: "regex", pattern: "^description:\\s*\\S+" }, pass: "Có description.", fail: "Thêm dòng description: … trong frontmatter." },
        { id: "when", label: "Description nói khi nào dùng", weight: 1, check: { kind: "regex", pattern: "description:[^\\n]*(dung khi|khi nguoi dung|khi can|khi duoc nho|use when)" }, pass: "Có tình huống kích hoạt.", fail: "Trong description, thêm “Dùng khi …” với từ khoá như “tổng hợp lỗi tuần”." },
        { id: "steps", label: "Có các bước đánh số", weight: 1, check: { kind: "minMatches", pattern: "^\\s*\\d+[.)]", value: 3 }, pass: "Có các bước.", fail: "Liệt kê ít nhất 3 bước đánh số." },
        { id: "output", label: "Nêu định dạng đầu ra", weight: 1, check: { kind: "anyKeyword", keywords: ["bảng", "markdown", "định dạng"] }, pass: "Có định dạng.", fail: "Nêu định dạng: bảng markdown." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "---\ndescription: Tổng hợp lỗi QA trong tuần từ loi-tuan.csv. Dùng khi người dùng nhờ tổng hợp lỗi tuần, báo cáo lỗi thứ Hai hoặc so sánh lỗi với tuần trước.\n---\n\n## Các bước\n1. Đọc file loi-tuan.csv.\n2. Đếm số lỗi theo từng công đoạn.\n3. Nêu 3 công đoạn nhiều lỗi nhất.\n4. Nếu có file của tuần trước, so sánh và ghi mức tăng/giảm.\n\n## Đầu ra\nMột bảng markdown: Công đoạn | Số lỗi | So với tuần trước.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Skill = thư mục có SKILL.md: frontmatter (description) + hướng dẫn; Claude tự dùng khi liên quan hoặc bạn gõ /tên-skill.",
        "Tên thư mục (hoặc name) thành lệnh; thư mục có thể kèm file mẫu, tài liệu, script.",
        "CLAUDE.md nạp mỗi phiên; skill chỉ để sẵn mô tả, phần thân nạp khi dùng.",
        "Nơi đặt: cá nhân ~/.claude/skills, dự án .claude/skills, plugin (/plugin:skill), tổ chức. Trùng tên: tổ chức > cá nhân > dự án.",
        "Description viết rõ làm gì + khi nào dùng; .claude/commands/ cũ vẫn chạy nhưng nên dùng skill cho việc mới.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Tìm trong lịch sử chat của bạn những đoạn hướng dẫn bạn đã dán lại nhiều lần.",
      tasks: [
        "Liệt kê 3 việc lặp lại; với mỗi việc ghi: dùng mỗi phiên hay chỉ thỉnh thoảng.",
        "Chọn một việc chỉ cần thỉnh thoảng và viết SKILL.md cho nó (cá nhân hoặc dự án).",
        "Thử gọi bằng /tên-skill và bằng một câu nói tự nhiên; chỉnh description đến khi Claude tự chọn đúng.",
      ],
      deliverable: "Một SKILL.md chạy được và ghi chú: câu nói nào kích hoạt skill, câu nào không.",
      checklist: ["Description có “dùng khi …”", "Phần thân có bước rõ ràng", "Đã thử cả hai cách gọi"],
    },
  ],
};
