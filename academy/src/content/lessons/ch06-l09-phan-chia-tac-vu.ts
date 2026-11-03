import type { Lesson } from "@/lib/types/content";

const SA = "https://code.claude.com/docs/en/sub-agents";
const CW = "https://code.claude.com/docs/en/common-workflows";

export const lessonPhanChiaTacVu: Lesson = {
  id: "ch06-l09",
  chapterId: "ch06",
  slug: "phan-chia-tac-vu",
  title: "Phân chia tác vụ",
  subtitle: "Giao việc cho subagent có context và công cụ riêng, tự tạo subagent cho việc lặp lại, chạy phiên song song bằng worktree và xử lý hàng loạt bằng claude -p.",
  level: "advanced",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Hiểu subagent: context, công cụ và quyền riêng, trả về tóm tắt; biết ba subagent có sẵn (Explore, Plan, general-purpose)." },
    { id: "o2", text: "Quyết định giao việc cho subagent hay giữ ở hội thoại chính." },
    { id: "o3", text: "Tạo subagent tuỳ chỉnh bằng file .claude/agents/*.md (name, description, tools, model) và gọi nó." },
    { id: "o4", text: "Làm song song và tự động hoá: subagent nền, worktree cho phiên song song, claude -p cho xử lý hàng loạt." },
  ],
  concepts: [
    { id: "subagent-def", label: "Subagent là gì" },
    { id: "builtin-agents", label: "Subagent có sẵn" },
    { id: "when-subagent", label: "Khi nào dùng subagent" },
    { id: "when-main", label: "Khi nào giữ ở hội thoại chính" },
    { id: "custom-agent", label: "Subagent tuỳ chỉnh" },
    { id: "frontmatter", label: "Phần khai báo (frontmatter)" },
    { id: "tools-limit", label: "Giới hạn công cụ" },
    { id: "agent-model", label: "Chọn model cho subagent" },
    { id: "agent-scope", label: "Phạm vi: dự án hay mọi dự án" },
    { id: "invoke-agent", label: "Gọi subagent" },
    { id: "foreground-background", label: "Chạy nền hay chờ kết quả" },
    { id: "worktree-parallel", label: "Phiên song song bằng worktree" },
    { id: "headless-batch", label: "claude -p cho xử lý hàng loạt" },
  ],
  hints: [
    "Subagent hợp với việc sinh nhiều output và tự hoàn thành được, trả về tóm tắt.",
    "Việc cần trao đổi qua lại nhiều lần nên giữ ở hội thoại chính.",
    "Chỉ name và description là bắt buộc trong file subagent; description quyết định khi nào Claude giao việc.",
  ],
  sources: [
    { label: "Claude Code — Subagents (built-in, tạo file, frontmatter, foreground/background, khi nào dùng)", href: SA },
    { label: "Claude Code — Common workflows: Delegate research to subagents, Run parallel sessions with worktrees, Pipe Claude into scripts", href: CW },
    { label: "Claude Code — Manage costs: Delegate verbose operations to subagents", href: "https://code.claude.com/docs/en/costs" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Subagent** là trợ lý chuyên biệt chạy trong **context riêng**, với hướng dẫn, **công cụ và quyền riêng**; làm xong thì gửi **kết quả tóm tắt** về hội thoại chính. Claude Code có sẵn: **Explore** (tìm kiếm, phân tích codebase, chỉ đọc, nhanh), **Plan** (khảo sát khi ở chế độ Plan, chỉ đọc), **general-purpose** (việc nhiều bước cần cả khám phá lẫn hành động).",
        "Dùng subagent khi việc **sinh nhiều output** bạn không cần giữ trong hội thoại chính (khảo sát hàng trăm file, chạy cả bộ test), khi cần **giới hạn công cụ/quyền**, hoặc khi việc **tự hoàn thành được** và chỉ cần tóm tắt. Giữ ở **hội thoại chính** khi cần trao đổi qua lại nhiều lần, các bước dùng chung nhiều ngữ cảnh, sửa nhanh có mục tiêu, hoặc cần phản hồi nhanh (subagent không phải fork thì bắt đầu “trắng”).",
        "Việc lặp lại thì **tạo subagent riêng**: nhờ Claude viết, hoặc tự tạo file Markdown trong `.claude/agents/` (cho dự án) hay `~/.claude/agents/` (cho mọi dự án). Phần đầu file là YAML: **name** và **description** bắt buộc (description cho Claude biết khi nào giao việc), **tools** để giới hạn công cụ, **model** (`sonnet`, `opus`, `haiku`, `fable`, mã model đầy đủ, hoặc `inherit`). Phần thân là hướng dẫn hệ thống. Gọi bằng lời (“dùng subagent test-runner để…”) hoặc gõ `@` chọn subagent (`@agent-<tên>`).",
        "Subagent Claude tạo từ hội thoại chính mặc định **chạy nền** — bạn làm việc tiếp, khi cần quyền thì Claude Code hỏi bạn trong phiên chính. Muốn nhiều phiên Claude **sửa song song** không giẫm chân nhau: `claude --worktree <tên>`. Xử lý **hàng loạt/tự động**: `claude -p` nhận dữ liệu qua pipe như một lệnh Unix, ví dụ `git log --oneline -20 | claude -p \"summarize these recent commits\"`. Lưu ý: yêu cầu của subagent vẫn tính vào mức dùng của bạn.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Trưởng dự án (hội thoại chính) không tự đi đo đạc cả nhà máy: giao tổ khảo sát (Explore) đi đo và chỉ nộp báo cáo tóm tắt; giao tổ thí nghiệm (subagent test-runner, chỉ có dụng cụ đo, không có dụng cụ sửa) chạy thử và báo kết quả. Hai đội thi công hai hạng mục độc lập thì làm ở hai mặt bằng riêng (worktree) để không giẫm chân nhau.",
      },
      terms: [
        { term: "Subagent", definition: "Trợ lý chuyên biệt với context, công cụ và quyền riêng; trả về tóm tắt." },
        { term: "Frontmatter", definition: "Phần khai báo YAML ở đầu file (giữa hai dòng ---): name, description, tools, model." },
        { term: "Foreground / background", definition: "Chờ subagent xong mới làm tiếp / subagent chạy song song với bạn." },
        { term: "Headless (claude -p)", definition: "Chạy Claude không tương tác: nhận đầu vào, in kết quả, thoát — dùng trong script, CI." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: một file subagent có chú thích",
      infographic: {
        kind: "annotated",
        label: ".claude/agents/test-runner.md",
        lines: [
          { text: "---", note: "Bắt đầu phần khai báo YAML", tone: "neutral" },
          { text: "name: test-runner", note: "Bắt buộc: tên duy nhất", tone: "role" },
          { text: "description: Chạy bộ test và báo test lỗi kèm nguyên nhân. Dùng sau khi sửa code.", note: "Bắt buộc: Claude dựa vào đây để biết khi nào giao việc", tone: "context" },
          { text: "tools: Read, Grep, Glob, Bash", note: "Giới hạn công cụ: không có Edit/Write → không sửa file", tone: "constraints" },
          { text: "model: haiku", note: "Việc đơn giản → model nhỏ, rẻ hơn", tone: "constraints" },
          { text: "---", note: "Kết thúc khai báo", tone: "neutral" },
          { text: "Bạn chạy npm test, chỉ báo các test lỗi: tên test, thông báo lỗi, file nghi ngờ. Tối đa 15 dòng.", note: "Hướng dẫn hệ thống của subagent", tone: "task" },
        ],
      },
      caption: "Định dạng theo tài liệu Subagents (đối chiếu 03/11/2026). File trong .claude/agents/ áp dụng cho dự án; ~/.claude/agents/ cho mọi dự án.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: chia việc giữa hội thoại chính, subagent và phiên song song",
      mermaid: `flowchart TD
  M["Hội thoại chính: điều phối, trao đổi với bạn"] -->|"Khảo sát rộng"| E["Explore (chỉ đọc)"]
  M -->|"Chạy test"| T["test-runner (haiku, không sửa file)"]
  M -->|"Review với góc nhìn mới"| R["/code-review"]
  E -->|"Tóm tắt"| M
  T -->|"Danh sách test lỗi"| M
  R -->|"Phát hiện"| M
  W1["claude --worktree tinh-nang-a"] -.->|"Song song, nhánh riêng"| W2["claude --worktree sua-loi-b"]
  B["Dữ liệu qua pipe"] --> P["claude -p: xử lý hàng loạt"]`,
      caption: "Hội thoại chính giữ mạch; việc ồn ào đi subagent; việc độc lập chạy ở worktree riêng.",
      alt: "Sơ đồ: hội thoại chính giao khảo sát rộng cho Explore, chạy test cho subagent test-runner, review cho /code-review; mỗi bên gửi tóm tắt về hội thoại chính. Hai phiên worktree chạy song song trên nhánh riêng. Dữ liệu qua pipe vào claude -p để xử lý hàng loạt.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: một ngày nhiều việc",
      bad: {
        label: "Một hội thoại làm tất cả",
        content: "Khảo sát 200 file tìm API cũ → chạy cả bộ 400 test và đọc hết output → tự review code vừa viết → tiện làm luôn tính năng B trong cùng thư mục.",
        notes: ["Context chính đầy output không cần giữ.", "Tự review bị ảnh hưởng bởi lập luận cũ.", "Hai việc độc lập dễ giẫm lên nhau."],
      },
      good: {
        label: "Chia đúng nơi",
        content: "Explore khảo sát 200 file, trả danh sách chỗ dùng API cũ.\nSubagent test-runner (haiku) chạy test, chỉ báo test lỗi.\n/code-review cho góc nhìn mới.\nTính năng B làm ở claude --worktree tinh-nang-b.",
        notes: ["Hội thoại chính gọn, giữ mạch.", "Công cụ giới hạn đúng việc.", "Việc độc lập chạy song song an toàn."],
      },
      takeaway: "Hội thoại chính để suy nghĩ cùng bạn; việc ồn ào và việc độc lập thì tách ra.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: giao việc đúng chỗ",
      sim: {
        kind: "classify",
        bins: [
          { id: "main", label: "Hội thoại chính" },
          { id: "sub", label: "Subagent" },
          { id: "worktree", label: "Phiên song song (worktree)" },
        ],
        items: [
          { id: "i1", text: "Sửa nhanh lỗi chính tả trong một file", bin: "main", why: "Việc nhỏ, có mục tiêu — subagent chỉ thêm độ trễ." },
          { id: "i2", text: "Tinh chỉnh giao diện qua nhiều vòng góp ý", bin: "main", why: "Cần trao đổi qua lại liên tục." },
          { id: "i3", text: "Khảo sát 200 file tìm mọi chỗ gọi API cũ", bin: "sub", why: "Nhiều output, chỉ cần danh sách tóm tắt." },
          { id: "i4", text: "Chạy toàn bộ test và tóm tắt các test lỗi", bin: "sub", why: "Output dài, việc tự hoàn thành được." },
          { id: "i5", text: "Review diff với góc nhìn chưa thấy hội thoại", bin: "sub", why: "Context mới, không bị ảnh hưởng bởi lập luận cũ." },
          { id: "i6", text: "Làm tính năng A trong khi phiên khác sửa lỗi B độc lập", bin: "worktree", why: "Hai việc sửa file độc lập — mỗi phiên một nhánh riêng." },
          { id: "i7", text: "Thử hai cách triển khai cùng lúc để so sánh", bin: "worktree", why: "Mỗi cách một bản checkout riêng." },
        ],
      },
      intro: "Xếp mỗi việc vào nơi phù hợp nhất.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: chia việc với Claude Code",
      steps: [
        { title: "Dùng subagent có sẵn để khám phá", detail: "Chỉ phần kết luận quay về hội thoại chính.", code: { lang: "text", content: "Dùng một subagent tìm hiểu hệ thống xác thực xử lý refresh token thế nào, báo lại tối đa 10 dòng." } },
        { title: "Tạo subagent cho việc lặp lại", detail: "Nhờ Claude viết, hoặc tự tạo file trong .claude/agents/.", code: { lang: "markdown", content: "---\nname: test-runner\ndescription: Chạy bộ test và báo test lỗi kèm nguyên nhân. Dùng sau khi sửa code.\ntools: Read, Grep, Glob, Bash\nmodel: haiku\n---\n\nBạn chạy npm test, chỉ báo các test lỗi: tên test, thông báo lỗi, file nghi ngờ. Tối đa 15 dòng." } },
        { title: "Gọi subagent", detail: "Bằng lời, hoặc gõ @ và chọn subagent.", code: { lang: "text", content: "Dùng subagent test-runner kiểm tra các thay đổi vừa rồi.\n@agent-test-runner chạy lại sau khi tôi sửa xong" } },
        { title: "Chạy phiên song song", detail: "Mỗi phiên một worktree, một nhánh riêng (kho cần có ít nhất một commit).", code: { lang: "bash", content: "claude --worktree tinh-nang-a\n# terminal khác\nclaude --worktree sua-loi-b" } },
        { title: "Xử lý hàng loạt bằng claude -p", detail: "Dùng trong script, CI, pre-commit.", code: { lang: "bash", content: "git log --oneline -20 | claude -p \"summarize these recent commits\"" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết nội dung file .claude/agents/doc-checker.md cho một subagent kiểm tra tài liệu: chỉ được đọc (không sửa file), dùng model nhỏ, được gọi khi có thay đổi trong thư mục docs/, và chỉ báo lại các vấn đề (link hỏng, mục thiếu) dưới dạng danh sách ngắn.",
      placeholder: "---\nname: …\ndescription: …\n---\n…",
      rubric: [
        { id: "fm", label: "Có phần khai báo YAML", weight: 1, check: { kind: "regex", pattern: "^---\\s*$[\\s\\S]*^---\\s*$" }, pass: "Có frontmatter.", fail: "Bao phần khai báo giữa hai dòng ---." },
        { id: "name", label: "name và description có nội dung", weight: 1, check: { kind: "allGroups", groups: [["name doc checker", "name docchecker"], ["description"]] }, pass: "Có name và description.", fail: "Thêm name: doc-checker và description nêu khi nào dùng." },
        { id: "tools", label: "Chỉ công cụ đọc", weight: 1, check: { kind: "regex", pattern: "^tools:[^\\n]*(read|grep|glob)" }, pass: "Có giới hạn công cụ.", fail: "tools: Read, Grep, Glob (không có Edit/Write)." },
        { id: "model", label: "Model nhỏ", weight: 1, check: { kind: "regex", pattern: "^model:\\s*(haiku|sonnet)" }, pass: "Có model phù hợp.", fail: "model: haiku cho việc đơn giản." },
        { id: "body", label: "Hướng dẫn báo cáo ngắn", weight: 1, check: { kind: "regex", pattern: "(chi bao|danh sach|toi da|ngan gon)" }, pass: "Có hướng dẫn báo cáo.", fail: "Phần thân: chỉ báo vấn đề dạng danh sách ngắn." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "---\nname: doc-checker\ndescription: Kiểm tra tài liệu trong docs/ sau mỗi thay đổi: link hỏng, mục bắt buộc bị thiếu. Không sửa file.\ntools: Read, Grep, Glob\nmodel: haiku\n---\n\nBạn kiểm tra các file Markdown trong docs/. Chỉ báo vấn đề dưới dạng danh sách ngắn (tối đa 20 dòng): file, dòng, loại vấn đề (link hỏng, thiếu mục Cài đặt, thiếu mục Ví dụ). Không đề xuất viết lại nội dung.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Subagent: context, công cụ, quyền riêng; trả về tóm tắt. Có sẵn: Explore, Plan, general-purpose.",
        "Subagent cho việc nhiều output, tự hoàn thành, cần giới hạn công cụ; hội thoại chính cho việc trao đổi qua lại, sửa nhanh.",
        "Tạo file .claude/agents/<tên>.md (dự án) hoặc ~/.claude/agents/ (mọi dự án): name, description bắt buộc; tools, model tuỳ chọn.",
        "Gọi bằng lời hoặc @agent-<tên>; subagent tạo từ hội thoại chính mặc định chạy nền; vẫn tính vào mức dùng.",
        "Song song: claude --worktree; hàng loạt: claude -p qua pipe.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Áp dụng vào một dự án thật có việc lặp lại (chạy test, kiểm tra tài liệu, khảo sát code).",
      tasks: [
        "Tạo một subagent trong .claude/agents/ với công cụ và model phù hợp.",
        "Dùng nó ít nhất 3 lần; tinh chỉnh description nếu Claude không tự giao việc đúng lúc.",
        "Thử một lần chạy hai phiên song song bằng worktree.",
      ],
      deliverable: "File subagent, ghi chú 3 lần dùng (việc, kết quả, mức dùng /usage), và nhận xét về worktree.",
      checklist: ["Subagent có description rõ khi nào dùng", "Công cụ được giới hạn đúng việc", "Có so sánh mức dùng trước/sau"],
    },
  ],
};
