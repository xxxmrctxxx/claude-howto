import type { Lesson } from "@/lib/types/content";

const CR = "https://code.claude.com/docs/en/code-review-local";
const BP = "https://code.claude.com/docs/en/best-practices";

export const lessonCodeReview: Lesson = {
  id: "ch06-l08",
  chapterId: "ch06",
  slug: "code-review",
  title: "Code review",
  subtitle: "Dùng /code-review để có một góc nhìn mới tìm lỗi, chọn đúng mục tiêu và mức effort, viết yêu cầu review theo tiêu chí riêng, và thẩm định từng phát hiện.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chạy /code-review cho nhánh hiện tại và chọn đúng mục tiêu: PR, nhánh, khoảng commit, thư mục." },
    { id: "o2", text: "Chọn mức effort và cờ (--fix, --comment) phù hợp; hiểu review chạy nền trong subagent riêng." },
    { id: "o3", text: "Viết yêu cầu review theo tiêu chí riêng: so với đặc tả, chỉ lỗi ảnh hưởng tính đúng đắn, bỏ qua góp ý trình bày." },
    { id: "o4", text: "Thẩm định phát hiện: sửa lỗi thật có kiểm chứng, bỏ báo nhầm; biết giới hạn của --fix và vai trò của người review." },
  ],
  concepts: [
    { id: "code-review-cmd", label: "/code-review" },
    { id: "review-target", label: "Mục tiêu review" },
    { id: "effort-level", label: "Mức effort" },
    { id: "fix-flag", label: "--fix" },
    { id: "comment-flag", label: "--comment" },
    { id: "background-subagent", label: "Chạy nền trong subagent" },
    { id: "claude-md-rules", label: "Quy tắc review trong CLAUDE.md" },
    { id: "custom-review", label: "Yêu cầu review tự viết" },
    { id: "skip-style", label: "“skip style”" },
    { id: "triage", label: "Thẩm định phát hiện" },
    { id: "fix-limits", label: "Giới hạn của --fix" },
    { id: "human-review", label: "Người review vẫn cần" },
  ],
  hints: [
    "/review là bí danh của /code-review.",
    "Mức low: ít phát hiện nhưng chắc chắn nhất; mức cao: phủ rộng hơn.",
    "Thêm “skip style” khi chỉ cần lỗi ảnh hưởng tính đúng đắn.",
  ],
  sources: [
    { label: "Claude Code — Review locally with /code-review (mục tiêu, effort, --fix, --comment, giới hạn)", href: CR },
    { label: "Claude Code — Best practices: review by someone who didn't write the code, “skip style”", href: BP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Người viết code thường khó thấy lỗi của chính mình — Claude cũng vậy trong cùng hội thoại. `/code-review` (bí danh `/review`) chạy một lượt xem xét trong **subagent chạy nền với context riêng**, không bị ảnh hưởng bởi lập luận đã tạo ra code, nên hội thoại chính không bị đầy. Nó tìm **lỗi về tính đúng đắn**; tuỳ model và mức effort, có thể kèm gợi ý tái sử dụng, đơn giản hoá, hiệu năng. Lệnh dùng được với mọi gói và tính vào mức dùng như phần còn lại của phiên.",
        "Không ghi mục tiêu, review xem các commit của nhánh chưa có ở upstream cộng thay đổi chưa commit. Có thể chỉ định: số PR (`/code-review 1234`), so hai nhánh (`/code-review main...my-feature`), khoảng commit (`/code-review HEAD~15..HEAD`), một commit, hoặc thư mục (`/code-review src/auth`).",
        "**Mức effort**: `low` chỉ báo các phát hiện chắc chắn nhất (ít báo nhầm); từ `medium` đến `max` phủ rộng hơn. Lần sau không ghi mức thì dùng lại mức bạn gõ gần nhất. **Cờ**: `--fix` nhờ Claude áp dụng các phát hiện (vẫn qua chế độ quyền); `--comment` đăng phát hiện thành comment inline trên PR GitHub. Review làm theo **CLAUDE.md** của dự án — muốn mọi lần review áp dụng quy tắc nhóm, ghi vào đó.",
        "Phát hiện cần được **thẩm định**: lỗi thật thì sửa kèm test; báo nhầm thì bỏ và ghi lý do. Tài liệu Best practices cảnh báo: người review được bảo “tìm vấn đề” luôn tìm ra *thứ gì đó*; sửa hết mọi góp ý dễ sinh lớp trừu tượng thừa — vì vậy khi tự viết yêu cầu review, thêm **“skip style”** và nêu tiêu chí (so với SPEC.md, chỉ lỗi ảnh hưởng tính đúng đắn). Lưu ý: `--fix` chạy nền sửa file **ngoài checkpoint** của phiên — /rewind không khôi phục hết, hãy dùng git. Và review của Claude **không thay** review của đồng nghiệp trên PR.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Bản vẽ do kỹ sư A vẽ nên giao kỹ sư B kiểm tra — B không biết A đã nghĩ gì nên dễ thấy chỗ sai. Nhưng nếu dặn B “tìm lỗi đi”, B sẽ luôn ghi vài góp ý kiểu “nên đổi màu nét”; chỉ những lỗi ảnh hưởng an toàn và kích thước mới phải sửa ngay.",
      },
      terms: [
        { term: "/code-review", definition: "Lệnh xem xét thay đổi để tìm lỗi, chạy trong subagent nền với context riêng." },
        { term: "Finding", definition: "Một phát hiện của review: vị trí, mô tả ngắn, loại (ví dụ correctness)." },
        { term: "False positive", definition: "Báo nhầm: review cho là lỗi nhưng thực ra không phải." },
        { term: "Effort level", definition: "Mức công sức: low ít mà chắc, medium–max phủ rộng hơn." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: chọn mục tiêu cho /code-review",
      infographic: {
        kind: "table",
        headers: ["Muốn review", "Gõ"],
        rows: [
          ["Nhánh hiện tại và thay đổi chưa commit", "/code-review"],
          ["15 commit gần nhất", "/code-review HEAD~15..HEAD"],
          ["Nhánh này so với nhánh khác", "/code-review main...my-feature"],
          ["Một commit", "/code-review abc1234^..abc1234"],
          ["Một pull request", "/code-review 1234"],
          ["Một file hoặc thư mục", "/code-review src/auth"],
        ],
      },
      caption: "Theo trang Review locally with /code-review (đối chiếu 03/11/2026). Mức effort và cờ đặt trước mục tiêu, ví dụ /code-review high --fix src/auth.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: review và thẩm định",
      mermaid: `flowchart TD
  A["Thay đổi đã test"] --> B["/code-review (subagent nền, context riêng)"]
  B --> C["Danh sách phát hiện"]
  C --> D{"Thẩm định từng mục"}
  D -->|"Lỗi thật"| E["Sửa + thêm test"]
  D -->|"Góp ý trình bày"| F["Để sau hoặc bỏ"]
  D -->|"Báo nhầm"| G["Bỏ, ghi lý do"]
  E --> H["Chạy test, /diff"]
  H --> I["PR → đồng nghiệp review → merge"]`,
      caption: "Review của Claude là một lớp lọc, không thay người review.",
      alt: "Lưu đồ: thay đổi đã test được /code-review trong subagent nền; ra danh sách phát hiện; thẩm định từng mục: lỗi thật thì sửa và thêm test, góp ý trình bày thì để sau, báo nhầm thì bỏ và ghi lý do; chạy test và /diff; mở PR cho đồng nghiệp review rồi merge.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: nhờ review",
      bad: {
        label: "Tự review trong cùng hội thoại, sửa hết",
        content: "(Cùng phiên vừa viết code) “Review lại code giúp, có gì sửa hết luôn.”",
        notes: ["Claude bị ảnh hưởng bởi chính lập luận đã viết code.", "“Sửa hết” kéo theo góp ý trình bày và trừu tượng thừa.", "Không có tiêu chí."],
      },
      good: {
        label: "Góc nhìn mới, có tiêu chí",
        content: "/code-review high main...feature/thue-vat\nHoặc tự viết: “Dùng một subagent review diff của nhánh này so với SPEC.md: kiểm tra từng yêu cầu đã được làm và các trường hợp biên đã có test; chỉ báo lỗi ảnh hưởng tính đúng đắn, skip style.”",
        notes: ["Subagent với context mới.", "Tiêu chí bám đặc tả.", "“skip style” tránh góp ý vụn vặt."],
      },
      takeaway: "Góc nhìn mới + tiêu chí rõ + thẩm định từng phát hiện.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: gõ lệnh review nào?",
      sim: {
        kind: "choose",
        options: [
          { id: "plain", label: "/code-review" },
          { id: "pr", label: "/code-review 1234" },
          { id: "branches", label: "/code-review main...my-feature" },
          { id: "path", label: "/code-review src/auth" },
          { id: "low", label: "/code-review low" },
          { id: "fix", label: "/code-review --fix" },
          { id: "comment", label: "/code-review --comment" },
        ],
        scenarios: [
          { id: "s1", text: "Xem lại thay đổi trên nhánh hiện tại, kể cả phần chưa commit.", answer: "plain", why: "Không ghi mục tiêu: nhánh hiện tại + thay đổi chưa commit." },
          { id: "s2", text: "Review pull request số 1234.", answer: "pr", why: "Ghi số PR làm mục tiêu." },
          { id: "s3", text: "So toàn bộ nhánh my-feature với main.", answer: "branches", why: "Khoảng nhánh main...my-feature." },
          { id: "s4", text: "Chỉ xem phần xác thực trong thư mục src/auth.", answer: "path", why: "Ghi đường dẫn làm mục tiêu." },
          { id: "s5", text: "Bạn chỉ muốn vài phát hiện chắc chắn nhất, ít báo nhầm.", answer: "low", why: "Mức low ưu tiên độ chắc chắn." },
          { id: "s6", text: "Muốn Claude áp dụng luôn các sửa đổi sau khi review.", answer: "fix", why: "--fix áp dụng phát hiện vào working tree (qua chế độ quyền)." },
          { id: "s7", text: "Muốn đăng các phát hiện thành comment inline trên PR GitHub.", answer: "comment", why: "--comment đăng lên PR." },
        ],
      },
      intro: "Chọn lệnh phù hợp cho từng nhu cầu review.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: một vòng review",
      steps: [
        { title: "Test xong rồi mới review", detail: "Review không thay thế test." },
        { title: "Chạy review đúng mục tiêu và mức", detail: "Review chạy nền; bạn làm việc khác, kết quả về khi xong.", code: { lang: "text", content: "/code-review high main...feature/thue-vat" } },
        { title: "Hoặc tự viết tiêu chí", detail: "Bám đặc tả, chỉ lỗi ảnh hưởng tính đúng đắn.", code: { lang: "text", content: "Dùng một subagent review diff của nhánh này so với SPEC.md: kiểm tra từng yêu cầu đã làm, các trường hợp biên đã có test; chỉ báo lỗi ảnh hưởng tính đúng đắn, skip style." } },
        { title: "Thẩm định và sửa", detail: "Lỗi thật: sửa + test. Báo nhầm: bỏ và ghi lý do. Góp ý trình bày: để sau." },
        { title: "Ghi quy tắc review vào CLAUDE.md", detail: "Mọi lần /code-review sau sẽ áp dụng.", code: { lang: "text", content: "## Quy tắc review\n- Mọi hàm tính tiền phải có test cho số âm và số 0.\n- Không log dữ liệu cá nhân." } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc 5 phát hiện review trong dữ liệu mẫu. Viết phản hồi cho Claude: phát hiện nào sửa (kèm test), phát hiện nào để sau/bỏ, phát hiện nào là báo nhầm (giải thích), và yêu cầu bằng chứng sau khi sửa.",
      sampleData: {
        name: "Phát hiện của /code-review",
        content:
          "F1 (correctness): tinhThue dùng 0.08 cho mặt hàng nhóm A, SPEC.md quy định 0.1.\nF2 (style): nên đổi tên biến a thành amount.\nF3 (cleanup): có thể tách hàm xuLyHoaDon thành hai hàm nhỏ.\nF4 (correctness): không kiểm tra số lượng âm trước khi tính tiền.\nF5 (correctness): biến khachHang có thể null ở dòng 48 — nhưng dòng 46 đã return khi khachHang null.",
      },
      placeholder: "F1: …\nF2: …\nF3: …\nF4: …\nF5: …\nSau khi sửa: …",
      rubric: [
        { id: "f1", label: "F1: sửa + test", weight: 1, check: { kind: "regex", pattern: "f1[^\\n]*(sua|0[.,]1)[^\\n]*test" }, pass: "F1 đúng.", fail: "F1 là lỗi thật: sửa thành 0.1 và thêm test." },
        { id: "f4", label: "F4: sửa + test", weight: 1, check: { kind: "regex", pattern: "f4[^\\n]*(sua|kiem tra|bao loi)[^\\n]*test" }, pass: "F4 đúng.", fail: "F4 là lỗi thật: thêm kiểm tra số âm và test." },
        { id: "style", label: "F2/F3: để sau hoặc bỏ", weight: 1, check: { kind: "regex", pattern: "f[23][^\\n]*(de sau|bo qua|khong sua|chua sua)" }, pass: "Đã xử lý góp ý trình bày.", fail: "F2, F3 là trình bày/dọn dẹp: để sau hoặc bỏ." },
        { id: "fp", label: "F5: báo nhầm có lý do", weight: 1, check: { kind: "regex", pattern: "f5[^\\n]*(bao nham|khong phai loi|da kiem tra|dong 46)" }, pass: "F5 đúng.", fail: "F5 là báo nhầm: dòng 46 đã kiểm tra null." },
        { id: "evidence", label: "Đòi bằng chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["cho tôi xem", "kết quả", "chạy lại"] }, pass: "Có bằng chứng.", fail: "Yêu cầu chạy test và cho xem kết quả." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "F1: lỗi thật — sửa tỷ lệ nhóm A thành 0.1 theo SPEC.md và thêm test cho nhóm A.\nF2: góp ý trình bày, để sau.\nF3: dọn dẹp, để sau, không sửa trong lượt này.\nF4: lỗi thật — thêm kiểm tra số lượng âm (báo lỗi) và thêm test cho số âm.\nF5: báo nhầm — dòng 46 đã return khi khachHang null, không cần sửa.\nSau khi sửa: chạy lại npm test và cho tôi xem kết quả.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "/code-review (bí danh /review) chạy nền trong subagent với context riêng, tìm lỗi tính đúng đắn.",
        "Mục tiêu: không ghi = nhánh hiện tại; hoặc số PR, main...nhánh, HEAD~N..HEAD, commit, đường dẫn.",
        "Effort low = ít mà chắc; cao hơn = phủ rộng. --fix áp dụng sửa; --comment đăng lên PR.",
        "Tự viết yêu cầu review: so với đặc tả, chỉ lỗi ảnh hưởng tính đúng đắn, skip style; quy tắc chung ghi vào CLAUDE.md.",
        "Thẩm định từng phát hiện; --fix chạy nền nằm ngoài checkpoint (dùng git); review của Claude không thay đồng nghiệp.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Áp dụng cho nhánh bạn sắp mở PR trong dự án thật.",
      tasks: [
        "Chạy /code-review ở mức low rồi ở mức high, so sánh số phát hiện và chất lượng.",
        "Thẩm định từng phát hiện: lỗi thật / trình bày / báo nhầm.",
        "Ghi 1–2 quy tắc review của nhóm vào CLAUDE.md.",
      ],
      deliverable: "Bảng phát hiện: Mục | Loại | Quyết định | Lý do | Test đã thêm.",
      checklist: ["Mỗi phát hiện có quyết định và lý do", "Lỗi thật có test", "Vẫn có đồng nghiệp review PR"],
    },
  ],
};
