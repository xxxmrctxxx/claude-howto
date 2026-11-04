import type { Lesson } from "@/lib/types/content";

const QS = "https://code.claude.com/docs/en/quickstart";
const CW = "https://code.claude.com/docs/en/common-workflows";

export const lessonGitGithub: Lesson = {
  id: "ch06-l05",
  chapterId: "ch06",
  slug: "git-github",
  title: "Git và GitHub",
  subtitle: "Dùng git qua hội thoại, làm việc trên nhánh riêng với commit nhỏ, tạo pull request cùng Claude, và giữ an toàn khi đẩy code.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Dùng git qua hội thoại với Claude: xem thay đổi, xem lịch sử, hiểu Claude thấy gì về trạng thái git." },
    { id: "o2", text: "Làm việc trên nhánh riêng, commit nhỏ với thông điệp rõ ràng (luyện trên terminal mô phỏng)." },
    { id: "o3", text: "Tạo pull request cùng Claude, xem lại mô tả trước khi gửi, quay lại phiên gắn với PR." },
    { id: "o4", text: "Giữ an toàn: duyệt trước khi đẩy, không đẩy thẳng nhánh chính, xử lý xung đột có kiểm tra, worktree cho phiên song song." },
  ],
  concepts: [
    { id: "git-chat", label: "Git qua hội thoại" },
    { id: "git-state", label: "Claude thấy trạng thái git" },
    { id: "history", label: "Lịch sử commit" },
    { id: "branch", label: "Nhánh" },
    { id: "staging", label: "Staging" },
    { id: "commit-msg", label: "Thông điệp commit" },
    { id: "small-commits", label: "Commit nhỏ" },
    { id: "pr-create", label: "Tạo pull request" },
    { id: "pr-review", label: "Xem lại PR" },
    { id: "from-pr", label: "Phiên gắn với PR" },
    { id: "attribution", label: "Dòng ghi công trong commit" },
    { id: "conflicts", label: "Xung đột khi merge" },
    { id: "worktree", label: "Worktree cho phiên song song" },
    { id: "push-safety", label: "An toàn khi đẩy code" },
  ],
  hints: [
    "Claude Code thấy nhánh hiện tại, thay đổi chưa commit và lịch sử gần đây.",
    "git switch -c ten-nhanh: tạo và chuyển sang nhánh mới.",
    "Xem lại mô tả PR Claude viết và nhờ nó nêu rủi ro trước khi gửi.",
  ],
  sources: [
    { label: "Claude Code — Quickstart: Use Git with Claude Code", href: QS },
    { label: "Claude Code — Common workflows: Create pull requests, Run parallel sessions with worktrees", href: CW },
    { label: "Claude Code — How Claude Code works: What Claude can access (git state), attribution", href: "https://code.claude.com/docs/en/how-claude-code-works" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude Code biến thao tác git thành **hội thoại**: “tôi đã đổi những file nào?”, “commit các thay đổi với thông điệp mô tả rõ”, “tạo nhánh mới tên feature/bao-cao”, “cho xem 5 commit gần nhất”, “giúp tôi giải quyết xung đột khi merge”. Claude thấy được **nhánh hiện tại, thay đổi chưa commit và lịch sử gần đây**, nên trả lời dựa trên trạng thái thật.",
        "Thói quen tốt: mỗi tính năng một **nhánh riêng**; **commit nhỏ**, mỗi commit một ý, thông điệp nói **làm gì và vì sao**. Ba bước cơ bản: sửa file → `git add` đưa thay đổi vào **staging** → `git commit -m \"…\"` lưu lại. Phần mô phỏng của bài cho bạn luyện các lệnh này.",
        "Tạo **pull request**: nói “create a pr for my changes”, hoặc từng bước — tóm tắt thay đổi, tạo PR, rồi nhờ bổ sung mô tả. Tài liệu khuyên **xem lại PR Claude tạo** trước khi gửi và nhờ Claude chỉ ra rủi ro. Muốn quay lại phiên đã làm PR: `claude --from-pr 1234`. Lưu ý: Claude Code mặc định thêm dòng ghi công (ví dụ Co-Authored-By) vào commit và PR; có thể đổi bằng thiết lập `attribution` nếu quy định nhóm khác.",
        "An toàn: duyệt thay đổi (`/diff`) và chạy test trước khi commit; **không đẩy thẳng lên nhánh chính** — đẩy nhánh tính năng và mở PR để người khác xem. Xung đột khi merge: để Claude giải thích từng chỗ xung đột rồi chạy test, đừng chấp nhận mù. Cần hai phiên Claude sửa song song mà không giẫm chân nhau: `claude --worktree ten` tạo bản checkout riêng trên nhánh riêng (dự án cần có ít nhất một commit).",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Git giống sổ nhật ký bản vẽ: mỗi lần sửa ghi một dòng rõ ràng (commit), phương án mới vẽ trên bản sao riêng (nhánh), muốn đưa vào bản chính phải trình duyệt (pull request). Không ai tự ý tẩy xoá trên bản gốc.",
      },
      terms: [
        { term: "Branch (nhánh)", definition: "Dòng phát triển riêng, tách khỏi nhánh chính để làm tính năng." },
        { term: "Staging", definition: "Vùng chờ: những thay đổi đã git add, sẽ vào commit tiếp theo." },
        { term: "Pull request (PR)", definition: "Đề nghị gộp nhánh vào nhánh chính, kèm mô tả để người khác xem xét." },
        { term: "Worktree", definition: "Một bản checkout riêng của cùng kho git, trên nhánh riêng, để làm song song." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: nói với Claude — git làm gì",
      infographic: {
        kind: "table",
        headers: ["Bạn nói với Claude", "Tương ứng thao tác git"],
        rows: [
          ["“Tôi đã đổi những file nào?”", "git status, git diff"],
          ["“Tạo nhánh mới tên feature/bao-cao”", "git switch -c feature/bao-cao"],
          ["“Commit các thay đổi với thông điệp mô tả rõ”", "git add … ; git commit -m \"…\""],
          ["“Cho xem 5 commit gần nhất”", "git log -5"],
          ["“Giúp tôi giải quyết xung đột khi merge”", "Đọc các đoạn xung đột, sửa, git add, chạy test"],
          ["“Tạo pull request cho thay đổi này”", "Đẩy nhánh, gh pr create"],
        ],
      },
      caption: "Câu nói mẫu theo Quickstart và Common workflows; lệnh git cụ thể Claude chọn có thể khác.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ nhánh tính năng đến merge",
      mermaid: `flowchart LR
  A["main"] --> B["git switch -c feature/bao-cao"]
  B --> C["Commit nhỏ 1"]
  C --> D["Commit nhỏ 2"]
  D --> E["Chạy test + /diff"]
  E --> F["Đẩy nhánh, tạo PR"]
  F --> G["Xem lại mô tả, nêu rủi ro"]
  G --> H["Review của đồng nghiệp"]
  H --> I["Merge vào main"]`,
      caption: "Nhánh chính chỉ nhận thay đổi đã được xem xét.",
      alt: "Sơ đồ: từ main tạo nhánh feature/bao-cao, commit nhỏ 1 và 2, chạy test và /diff, đẩy nhánh và tạo PR, xem lại mô tả và rủi ro, đồng nghiệp review, rồi merge vào main.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: quy trình git với Claude",
      bad: {
        label: "Làm thẳng trên main",
        content: "Sửa 15 file trên main → “commit hết với message update” → đẩy luôn lên main.",
        notes: ["Một commit khổng lồ, thông điệp vô nghĩa.", "Không ai xem trước khi vào nhánh chính.", "Khó quay lại một phần thay đổi."],
      },
      good: {
        label: "Nhánh + commit nhỏ + PR",
        content: "Tạo nhánh feature/cot-ca-lam-viec.\nCommit 1: “feat(form): them o chon ca lam viec”.\nCommit 2: “feat(export): them cot Ca vao file Excel”.\nChạy test, /diff, rồi tạo PR; nhờ Claude nêu rủi ro trong mô tả.",
        notes: ["Mỗi commit một ý, dễ xem và dễ hoàn tác.", "PR cho đồng nghiệp xem trước khi merge."],
      },
      takeaway: "Nhánh riêng, commit nhỏ, PR có xem xét — Claude làm nhanh nhưng quy trình vẫn phải đúng.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: một vòng làm việc trên nhánh tính năng",
      sim: {
        kind: "terminal",
        preset: "git-committed",
        steps: [
          { instruction: "Xem trạng thái git của dự án web-qa.", hint: "git status", check: { kind: "usedCommand", command: "git status", label: "Đã xem git status" } },
          { instruction: "Tạo và chuyển sang nhánh them-cot-ca.", hint: "git switch -c them-cot-ca", check: { kind: "gitState", path: "~/web-qa", head: "them-cot-ca", label: "Đang ở nhánh them-cot-ca" } },
          { instruction: "Thêm dòng “Them cot Ca lam viec” vào cuối README.md.", hint: "echo \"Them cot Ca lam viec\" >> README.md", check: { kind: "file", path: "~/web-qa/README.md", contains: "Them cot Ca lam viec", label: "README.md có dòng mới" } },
          { instruction: "Đưa README.md vào staging.", hint: "git add README.md", check: { kind: "gitState", path: "~/web-qa", stagedMin: 1, label: "Có thay đổi trong staging" } },
          { instruction: "Commit với thông điệp rõ ràng.", hint: "git commit -m \"docs: ghi chu them cot Ca lam viec\"", check: { kind: "commitCount", path: "~/web-qa", min: 2, label: "Có commit mới" } },
          { instruction: "Xem lịch sử commit dạng ngắn.", hint: "git log --oneline", check: { kind: "lastCommand", command: "git log", label: "Đã xem git log" } },
        ],
      },
      intro: "Terminal MÔ PHỎNG với dự án web-qa đã có một commit. Đây là những lệnh Claude chạy khi bạn nói “tạo nhánh”, “commit thay đổi” — luyện để hiểu Claude đang làm gì.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tính năng mới đến pull request",
      steps: [
        { title: "Kiểm tra và tạo nhánh", detail: "Nói với Claude hoặc tự gõ.", code: { lang: "text", content: "Tôi đang có thay đổi chưa commit nào không? Tạo nhánh mới tên feature/cot-ca-lam-viec." } },
        { title: "Làm việc và commit nhỏ", detail: "Mỗi phần xong, chạy test rồi commit với thông điệp rõ.", code: { lang: "text", content: "Chạy npm test. Nếu đạt, commit thay đổi ở form với thông điệp mô tả rõ, theo quy ước feat(scope): ..." } },
        { title: "Duyệt trước khi đẩy", detail: "Xem toàn bộ thay đổi so với nhánh chính.", code: { lang: "text", content: "/diff" } },
        { title: "Tạo PR và xem lại", detail: "Claude dùng gh để tạo PR; bạn đọc lại mô tả và nhờ nêu rủi ro.", code: { lang: "text", content: "Tóm tắt các thay đổi trên nhánh này rồi tạo pull request. Trong mô tả, thêm mục Rủi ro và Cách kiểm thử." } },
        { title: "Làm song song khi cần", detail: "Mỗi phiên một worktree, không giẫm chân nhau.", code: { lang: "bash", content: "claude --worktree sua-loi-xuat-excel" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết các tin nhắn bạn sẽ gửi Claude để làm tính năng “cột Ca làm việc” theo quy trình git an toàn: tạo nhánh, commit nhỏ có thông điệp rõ, duyệt thay đổi, tạo PR có mô tả rủi ro, và không đẩy thẳng lên nhánh chính.",
      placeholder: "1. …\n2. …\n3. …\n4. …",
      rubric: [
        { id: "branch", label: "Tạo nhánh riêng", weight: 1, check: { kind: "regex", pattern: "(nhanh|branch|switch -c)" }, pass: "Có nhánh riêng.", fail: "Tạo nhánh riêng cho tính năng." },
        { id: "commit", label: "Commit nhỏ, thông điệp rõ", weight: 1, check: { kind: "regex", pattern: "commit[^\\n]*(thong diep|message|feat|fix)" }, pass: "Có commit với thông điệp.", fail: "Yêu cầu commit nhỏ với thông điệp mô tả rõ." },
        { id: "review", label: "Duyệt thay đổi", weight: 1, check: { kind: "regex", pattern: "(/diff|chay test|npm test|xem lai)" }, pass: "Có bước duyệt.", fail: "Chạy test và /diff trước khi đẩy." },
        { id: "pr", label: "PR có rủi ro", weight: 1, check: { kind: "regex", pattern: "(pull request|\\bpr\\b)[^\\n]*rui ro|rui ro[^\\n]*(pull request|\\bpr\\b)" }, pass: "Có PR kèm rủi ro.", fail: "Tạo PR, mô tả có mục rủi ro." },
        { id: "nomain", label: "Không đẩy thẳng nhánh chính", weight: 1, check: { kind: "regex", pattern: "khong (day|push)[^\\n]*(main|nhanh chinh)" }, pass: "Có ràng buộc.", fail: "Nói rõ: không đẩy thẳng lên main." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "1. Kiểm tra thay đổi chưa commit, rồi tạo nhánh mới feature/cot-ca-lam-viec.\n2. Sau mỗi phần (form, API, xuất Excel), chạy npm test; đạt thì commit với thông điệp rõ theo dạng feat(scope): ...\n3. Trước khi đẩy, tôi sẽ xem lại bằng /diff.\n4. Tóm tắt thay đổi và tạo pull request; mô tả PR có mục Rủi ro và Cách kiểm thử.\n5. Không đẩy thẳng lên main; chỉ đẩy nhánh tính năng.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Git qua hội thoại: hỏi thay đổi, tạo nhánh, commit, xem lịch sử, giải quyết xung đột; Claude thấy trạng thái git thật.",
        "Nhánh riêng cho mỗi tính năng; commit nhỏ, mỗi commit một ý, thông điệp rõ.",
        "PR: tóm tắt → tạo PR → xem lại mô tả, nhờ nêu rủi ro; claude --from-pr để quay lại phiên.",
        "Duyệt /diff và chạy test trước khi đẩy; không đẩy thẳng main; xung đột thì giải thích từng chỗ rồi chạy test.",
        "claude --worktree cho các phiên song song không giẫm chân nhau.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Làm một thay đổi nhỏ trong dự án thật có kho git (GitHub hoặc nội bộ).",
      tasks: [
        "Tạo nhánh riêng qua hội thoại với Claude.",
        "Commit ít nhất 2 lần, mỗi lần một ý, thông điệp rõ.",
        "Tạo PR (hoặc chuẩn bị mô tả PR) có mục Rủi ro và Cách kiểm thử; tự đọc lại trước khi gửi.",
      ],
      deliverable: "Link PR (hoặc nội dung mô tả PR) và danh sách commit.",
      checklist: ["Không commit thẳng lên main", "Mỗi commit một ý", "Mô tả PR có rủi ro và cách kiểm thử"],
    },
  ],
};
