import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const CP = "https://code.claude.com/docs/en/checkpointing";
const SA = "https://code.claude.com/docs/en/sub-agents";
const MEM = "https://code.claude.com/docs/en/memory";
const CW = "https://code.claude.com/docs/en/common-workflows";

export const lessonTrienKhai: Lesson = {
  id: "ch12-l04",
  chapterId: "ch12",
  slug: "trien-khai",
  title: "Triển khai",
  subtitle: "Làm từng mốc theo PLAN.md với Claude Code: một mốc một phiên, phép kiểm tra sau mỗi bước, chỉnh hướng sớm, quay lại checkpoint khi cần, giữ ngữ cảnh gọn và commit thường xuyên.",
  level: "intermediate",
  estimatedMinutes: 45,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Triển khai theo mốc: mỗi phiên một mốc, bắt đầu bằng @SPEC.md và @PLAN.md, kết thúc bằng phép kiểm tra và commit." },
    { id: "o2", text: "Chỉnh hướng sớm: Esc để dừng, Esc hai lần hoặc /rewind để quay lại checkpoint, đọc diff trước khi chấp nhận." },
    { id: "o3", text: "Giữ ngữ cảnh gọn: /clear giữa các việc khác nhau, subagent cho việc điều tra, cập nhật CLAUDE.md khi Claude lặp lỗi." },
    { id: "o4", text: "Làm việc an toàn với Git: nhánh riêng cho mốc, commit nhỏ có lời nhắn rõ, cập nhật tiến độ trong PLAN.md." },
  ],
  concepts: [
    { id: "one-milestone-session", label: "Một mốc một phiên" },
    { id: "verify-each-step", label: "Kiểm tra sau mỗi bước" },
    { id: "course-correct", label: "Chỉnh hướng sớm (Esc)" },
    { id: "checkpoints", label: "Checkpoint và /rewind" },
    { id: "review-diffs", label: "Đọc diff trước khi chấp nhận" },
    { id: "context-hygiene", label: "/clear giữa các việc" },
    { id: "subagent-investigation", label: "Subagent cho điều tra" },
    { id: "claude-md-update", label: "Cập nhật CLAUDE.md" },
    { id: "feature-branch", label: "Nhánh cho mỗi mốc" },
    { id: "commit-often", label: "Commit nhỏ, thường xuyên" },
    { id: "progress-log", label: "Cập nhật PLAN.md" },
    { id: "skill-for-repeat", label: "Skill cho quy trình lặp" },
  ],
  hints: [
    "Thấy Claude đi sai hướng thì nhấn Esc ngay — sửa sớm rẻ hơn sửa muộn.",
    "Checkpoint không thay Git: commit sau mỗi mốc đạt.",
    "Claude lặp cùng một lỗi lần thứ hai → ghi quy tắc vào CLAUDE.md.",
  ],
  sources: [
    { label: "Claude Code Docs — Best practices (cho Claude cách kiểm chứng, chỉnh hướng sớm, quản lý ngữ cảnh)", href: BP },
    { label: "Claude Code Docs — Checkpointing (Esc hai lần, /rewind; checkpoint không thay Git)", href: CP },
    { label: "Claude Code Docs — Subagents (ngữ cảnh riêng cho việc điều tra)", href: SA },
    { label: "Claude Code Docs — Memory (CLAUDE.md)", href: MEM },
    { label: "Claude Code Docs — Common workflows", href: CW },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Triển khai là lặp lại một nhịp đơn giản cho từng mốc trong PLAN.md: **tạo nhánh → mở phiên → đưa @SPEC.md, @PLAN.md và mốc cần làm → Claude làm → chạy phép kiểm tra → đọc diff → commit → đánh dấu mốc**. **Một mốc một phiên** giữ ngữ cảnh gọn và giúp bạn biết chính xác cái gì đã đổi.",
        "**Cho Claude cách tự kiểm tra** — best practices gọi đây là việc có tác động lớn nhất: lệnh test, bộ ghi chú mẫu có đáp án, ảnh chụp giao diện mong đợi. Dặn Claude chạy phép kiểm tra và **cho xem kết quả** trước khi báo xong. Bạn vẫn **đọc diff**: file nào đổi, có đụng chỗ không liên quan không.",
        "**Chỉnh hướng sớm**: thấy Claude đi lệch (sửa file không liên quan, chọn cách quá phức tạp) thì nhấn **Esc** để dừng và nói lại. Kết quả tệ hơn lúc trước thì **Esc hai lần** hoặc **`/rewind`** để quay về **checkpoint** — Claude Code lưu trạng thái trước mỗi lần sửa file. Nhưng checkpoint **không thay Git**: commit sau mỗi mốc đạt, trên **nhánh riêng**, lời nhắn rõ (Chương 6).",
        "**Ngữ cảnh gọn**: chuyển sang việc khác hẳn thì **`/clear`** rồi bắt đầu lại từ @PLAN.md. Việc **điều tra** đọc nhiều file (tìm mọi chỗ gọi một hàm) giao cho **subagent** — nó làm trong ngữ cảnh riêng và chỉ báo lại kết quả. Claude **lặp một lỗi** (dùng npm thay pnpm, quên chạy test) → ghi quy tắc vào **CLAUDE.md**. Quy trình bạn lặp nhiều lần (tạo bản ghi mẫu, chạy bộ đo) → đóng gói thành **skill** (Chương 7). Cuối mỗi phiên, cập nhật PLAN.md: mốc nào xong, phát hiện gì, việc tiếp theo.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Như lắp ráp theo lệnh sản xuất: mỗi ca một lệnh (một mốc), đo kiểm sau mỗi công đoạn, thấy lệch thì dừng máy ngay (Esc), lỗi thì quay về bán thành phẩm đạt gần nhất (checkpoint), cuối ca nhập kho có phiếu (commit) và ghi sổ giao ca (PLAN.md).",
      },
      terms: [
        { term: "Checkpoint", definition: "Trạng thái Claude Code tự lưu trước mỗi lần sửa, cho phép quay lại bằng Esc hai lần hoặc /rewind." },
        { term: "Diff", definition: "Danh sách thay đổi giữa hai phiên bản của file." },
        { term: "Subagent", definition: "Trợ lý con chạy trong ngữ cảnh riêng, làm một việc và báo lại kết quả." },
        { term: "Nhánh (branch)", definition: "Dòng phát triển riêng trong Git để thử thay đổi mà không ảnh hưởng nhánh chính." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: nhịp làm một mốc",
      infographic: {
        kind: "flow",
        steps: [
          { title: "Nhánh mới", body: "git switch -c moc-3-trich-xuat", icon: "git" },
          { title: "Mở phiên", body: "@SPEC.md @PLAN.md + mốc cần làm + phép kiểm tra", icon: "terminal" },
          { title: "Claude làm", body: "Theo dõi; lệch hướng thì Esc", icon: "code" },
          { title: "Kiểm tra", body: "Chạy test/bộ mẫu, xem kết quả thật", icon: "check" },
          { title: "Đọc diff", body: "Đúng file, không đụng chỗ khác", icon: "search" },
          { title: "Commit + PLAN.md", body: "Lời nhắn rõ; đánh dấu mốc, ghi phát hiện", icon: "list" },
        ],
      },
      caption: "Nhịp làm việc gợi ý của khoá học, dựa trên Best practices và Checkpointing (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: xử lý khi triển khai đi lệch",
      mermaid: `flowchart TD
  A["Claude đang làm mốc"] --> B{"Đi đúng hướng?"}
  B -->|"Lệch"| C["Esc, nói lại yêu cầu"]
  C --> A
  B -->|"Đúng"| D["Chạy phép kiểm tra"]
  D --> E{"Đạt?"}
  E -->|"Không, tệ hơn trước"| F["Esc hai lần hoặc /rewind về checkpoint"]
  F --> A
  E -->|"Không, gần đạt"| G["Đưa lỗi cụ thể cho Claude sửa"]
  G --> D
  E -->|"Đạt"| H["Đọc diff, commit, cập nhật PLAN.md"]
  H --> I{"Claude lặp lỗi cũ?"}
  I -->|"Có"| J["Thêm quy tắc vào CLAUDE.md"]
  I -->|"Không"| K["/clear, sang mốc tiếp"]
  J --> K`,
      caption: "Sửa sớm, quay lại khi cần, ghi bài học vào CLAUDE.md.",
      alt: "Lưu đồ: khi Claude làm mốc, nếu lệch hướng thì nhấn Esc và nói lại. Nếu đúng hướng thì chạy phép kiểm tra: tệ hơn trước thì Esc hai lần hoặc /rewind về checkpoint; gần đạt thì đưa lỗi cụ thể để sửa rồi kiểm lại; đạt thì đọc diff, commit, cập nhật PLAN.md. Nếu Claude lặp lỗi cũ thì thêm quy tắc vào CLAUDE.md, sau đó /clear và sang mốc tiếp.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu cho một mốc",
      bad: {
        label: "Giao cả dự án, không kiểm tra",
        content: "“Làm tiếp dự án đi, xong hết thì báo tôi.” → 2 giờ sau: 23 file đổi, test không chạy, không rõ cái gì đã làm.",
        notes: ["Không giới hạn phạm vi.", "Không có phép kiểm tra.", "Không commit giữa chừng — khó quay lại."],
      },
      good: {
        label: "Một mốc, có kiểm tra, có ranh giới",
        content: "“Đọc @SPEC.md và @PLAN.md. Làm mốc 3 (trích đầy đủ + ngoại lệ). Chỉ sửa trong src/trich_xuat/ và tests/. Xong thì chạy `pytest tests/test_trich_xuat.py` và bộ 50 ghi chú mẫu, cho tôi xem kết quả. Không commit — tôi sẽ đọc diff.”",
        notes: ["Phạm vi rõ.", "Có bằng chứng xong.", "Người vẫn kiểm soát commit."],
      },
      takeaway: "Mỗi lần giao việc: phạm vi + phép kiểm tra + ranh giới.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn cách xử lý",
      sim: {
        kind: "choose",
        options: [
          { id: "esc", label: "Nhấn Esc, nói lại yêu cầu" },
          { id: "rewind", label: "Esc hai lần hoặc /rewind về checkpoint" },
          { id: "clear", label: "/clear rồi bắt đầu từ @PLAN.md" },
          { id: "subagent", label: "Giao cho subagent điều tra" },
          { id: "claudemd", label: "Thêm quy tắc vào CLAUDE.md" },
        ],
        scenarios: [
          { id: "s1", text: "Claude bắt đầu sửa file cấu hình không liên quan đến mốc đang làm.", answer: "esc", why: "Dừng ngay, nói rõ phạm vi." },
          { id: "s2", text: "Sau ba lượt sửa, code tệ hơn lúc đầu; muốn về trạng thái trước đó.", answer: "rewind", why: "Quay về checkpoint trước các lần sửa." },
          { id: "s3", text: "Xong mốc 2, chuyển sang mốc 3 khác hẳn; ngữ cảnh đầy log cũ.", answer: "clear", why: "Ngữ cảnh sạch cho việc mới." },
          { id: "s4", text: "Cần tìm trong 40 file cũ mọi chỗ gọi hàm định dạng ngày, không muốn làm đầy ngữ cảnh chính.", answer: "subagent", why: "Điều tra trong ngữ cảnh riêng, chỉ nhận kết quả." },
          { id: "s5", text: "Lần thứ ba Claude dùng npm trong khi dự án dùng pnpm.", answer: "claudemd", why: "Lỗi lặp lại → quy tắc lâu dài." },
        ],
      },
      intro: "Chọn cách xử lý phù hợp cho từng tình huống khi triển khai.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: một phiên triển khai",
      steps: [
        { title: "Tạo nhánh cho mốc", detail: "Mỗi mốc một nhánh để dễ quay lại và review.", code: { lang: "bash", content: "git switch -c moc-3-trich-xuat" } },
        {
          title: "Giao việc rõ ràng",
          detail: "Phạm vi, phép kiểm tra, ranh giới.",
          code: { lang: "text", content: "Đọc @SPEC.md và @PLAN.md. Làm mốc 3. Chỉ sửa trong src/trich_xuat/ và tests/. Xong thì chạy lệnh test trong CLAUDE.md và bộ 50 ghi chú mẫu, cho tôi xem kết quả thật." },
        },
        { title: "Theo dõi và chỉnh hướng", detail: "Lệch thì Esc; tệ hơn thì Esc hai lần hoặc /rewind." },
        { title: "Kiểm tra và đọc diff", detail: "Xem kết quả test thật; xem git diff — đúng file, không đụng chỗ khác.", code: { lang: "bash", content: "git status\ngit diff" } },
        { title: "Commit và cập nhật PLAN.md", detail: "Lời nhắn theo quy ước; đánh dấu mốc; ghi phát hiện và việc tiếp theo.", code: { lang: "bash", content: "git add src/trich_xuat tests PLAN.md\ngit commit -m \"feat(trich-xuat): xu ly ngoai le va hang cho\"" } },
        { title: "Rút kinh nghiệm", detail: "Lỗi lặp → CLAUDE.md; quy trình lặp → skill; rồi /clear trước mốc tiếp theo." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết yêu cầu giao cho Claude Code làm một mốc trong dữ liệu mẫu. Yêu cầu phải: tham chiếu SPEC và PLAN, nêu phạm vi file được sửa, nêu phép kiểm tra phải chạy và cho xem kết quả.",
      sampleData: {
        name: "PLAN.md (trích)",
        content: "- [x] M1. Thử trích 50 ghi chú mẫu (đạt 92%)\n- [x] M2. Khung xuyên suốt\n- [ ] M3. Bảng tuần: gộp bản ghi theo công đoạn và loại lỗi; kiểm: tests/test_bang_tuan.py + 500 ghi chú ≤ 1 phút\nCode bảng tuần nằm trong src/bang_tuan/.",
      },
      placeholder: "…",
      rubric: [
        { id: "refs", label: "Tham chiếu SPEC/PLAN", weight: 1, check: { kind: "allGroups", groups: [["spec"], ["plan"]] }, pass: "Có tham chiếu.", fail: "Tham chiếu @SPEC.md và @PLAN.md." },
        { id: "scope", label: "Phạm vi file", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ sửa", "src/bang_tuan", "không sửa", "phạm vi"] }, pass: "Có phạm vi.", fail: "Nêu thư mục được sửa (src/bang_tuan/, tests/)." },
        { id: "check", label: "Phép kiểm tra", weight: 1, check: { kind: "anyKeyword", keywords: ["test_bang_tuan", "chạy test", "pytest", "500 ghi chú"] }, pass: "Có kiểm tra.", fail: "Yêu cầu chạy tests/test_bang_tuan.py và đo 500 ghi chú." },
        { id: "evidence", label: "Cho xem kết quả", weight: 1, check: { kind: "anyKeyword", keywords: ["cho tôi xem", "kết quả", "in ra"] }, pass: "Có yêu cầu bằng chứng.", fail: "Yêu cầu Claude cho xem kết quả thật." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Đọc @SPEC.md và @PLAN.md. Làm mốc M3 (bảng tuần). Chỉ sửa trong src/bang_tuan/ và tests/, không sửa phần trích xuất. Xong thì chạy pytest tests/test_bang_tuan.py và đo thời gian tạo bảng cho 500 ghi chú mẫu, cho tôi xem kết quả thật (số test đạt, thời gian). Chưa commit.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Một mốc một phiên: @SPEC.md, @PLAN.md, phạm vi, phép kiểm tra, ranh giới.",
        "Cho Claude cách tự kiểm tra và yêu cầu xem kết quả thật; bạn vẫn đọc diff.",
        "Lệch hướng → Esc; tệ hơn → Esc hai lần hoặc /rewind; checkpoint không thay Git.",
        "/clear giữa các việc; subagent cho điều tra; lỗi lặp → CLAUDE.md; quy trình lặp → skill.",
        "Nhánh cho mỗi mốc, commit nhỏ, cập nhật PLAN.md cuối phiên.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Triển khai dự án tốt nghiệp theo PLAN.md.",
      tasks: [
        "Làm ít nhất 3 mốc theo nhịp: nhánh → phiên → kiểm tra → diff → commit → PLAN.md.",
        "Ghi nhật ký: lần nào dùng Esc, /rewind, /clear, subagent; quy tắc nào thêm vào CLAUDE.md.",
        "Cuối mỗi mốc ghi thời gian và chi phí thực tế so với ước lượng.",
      ],
      deliverable: "Lịch sử Git theo mốc + PLAN.md cập nhật + nhật ký làm việc với Claude.",
      checklist: ["Mỗi mốc có kết quả kiểm tra thật", "Commit nhỏ, lời nhắn rõ", "CLAUDE.md có quy tắc rút từ lỗi lặp"],
    },
  ],
};
