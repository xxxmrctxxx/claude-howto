import type { Lesson } from "@/lib/types/content";

const PM = "https://code.claude.com/docs/en/permission-modes";

export const lessonLapKeHoach: Lesson = {
  id: "ch06-l02",
  chapterId: "ch06",
  slug: "lap-ke-hoach",
  title: "Lập kế hoạch trước khi code",
  subtitle: "Dùng chế độ Plan để Claude khảo sát và đề xuất cách làm trước khi sửa: vào/ra Plan, đọc và sửa kế hoạch, chọn cách duyệt hợp với mức rủi ro.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Vào và ra chế độ Plan (Shift+Tab, /plan, --permission-mode plan); biết Plan làm được và không làm gì." },
    { id: "o2", text: "Đọc, chất vấn và chỉnh kế hoạch: “No, keep planning”, Ctrl+G sửa trực tiếp." },
    { id: "o3", text: "Chọn cách duyệt kế hoạch hợp với mức rủi ro: tự động hay duyệt từng thay đổi." },
    { id: "o4", text: "Biết khi nào đáng lập kế hoạch và yêu cầu một kế hoạch tốt: phạm vi, file, bước, kiểm chứng, rủi ro." },
  ],
  concepts: [
    { id: "plan-mode", label: "Chế độ Plan" },
    { id: "enter-plan", label: "Vào/ra Plan bằng Shift+Tab" },
    { id: "plan-prefix", label: "/plan cho một yêu cầu" },
    { id: "plan-cli", label: "Mở phiên ở chế độ Plan" },
    { id: "default-plan", label: "Plan làm mặc định cho dự án" },
    { id: "review-plan", label: "Đọc và chất vấn kế hoạch" },
    { id: "keep-planning", label: "No, keep planning" },
    { id: "edit-plan", label: "Ctrl+G sửa kế hoạch" },
    { id: "approve-options", label: "Các lựa chọn khi duyệt" },
    { id: "manual-approve", label: "Duyệt từng thay đổi" },
    { id: "when-plan", label: "Khi nào nên lập kế hoạch" },
    { id: "good-plan", label: "Kế hoạch tốt" },
  ],
  hints: [
    "Thanh trạng thái hiện “⏸ plan mode on” khi đang ở Plan.",
    "Nhấn Shift+Tab lần nữa để rời Plan mà không duyệt kế hoạch.",
    "Kế hoạch tốt có bước kiểm chứng — nếu thiếu, chọn “No, keep planning” và yêu cầu bổ sung.",
  ],
  sources: [
    { label: "Claude Code — Permission modes: Plan mode (vào/ra, duyệt, Ctrl+G, defaultMode)", href: PM },
    { label: "Claude Code — Common workflows: Plan before editing", href: "https://code.claude.com/docs/en/common-workflows" },
    { label: "Claude Code — Manage costs: Use plan mode for complex tasks", href: "https://code.claude.com/docs/en/costs" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Chế độ Plan** bảo Claude **khảo sát và đề xuất** thay đổi mà chưa làm: Claude đọc file, có thể chạy lệnh để tìm hiểu, rồi viết kế hoạch — nhưng **không sửa mã nguồn** cho tới khi bạn duyệt. Vào Plan bằng `Shift+Tab` (thanh trạng thái hiện `⏸ plan mode on`), hoặc thêm `/plan` trước một yêu cầu, hoặc mở phiên bằng `claude --permission-mode plan`. Nhấn `Shift+Tab` lần nữa để rời Plan mà không duyệt.",
        "Khi kế hoạch xong, Claude hỏi cách tiếp tục: **Yes, and use auto mode** (hoặc **Yes, auto-accept edits** nếu không có auto mode) — duyệt và để Claude làm tiếp ít hỏi; **Yes, manually approve edits** — duyệt nhưng bạn xem từng thay đổi; **No, keep planning** — ở lại Plan và nói điều cần sửa. Muốn sửa trực tiếp, nhấn `Ctrl+G` để mở kế hoạch trong trình soạn thảo.",
        "Chọn cách duyệt theo **rủi ro**: thay đổi chạm cấu hình production, thanh toán, dữ liệu thật → duyệt từng thay đổi; refactor nhỏ có bộ test tốt → có thể để Claude tự làm. Trước khi duyệt, hãy **chất vấn** kế hoạch: có bước kiểm chứng không? có bước nào xoá, đổi tên rộng, hay đụng ngoài phạm vi không?",
        "Plan đáng công nhất khi thay đổi **lớn hoặc chưa rõ hướng**: nhiều file, cấu trúc dữ liệu dùng chung, bạn chưa quen phần code đó. Việc nhỏ, rõ ràng có thể làm thẳng. Muốn mọi phiên terminal của dự án bắt đầu ở Plan, đặt `permissions.defaultMode` là `plan` trong `.claude/settings.json`.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Sửa chữa lớn một trạm biến áp luôn có phương án thi công được duyệt trước: khảo sát hiện trạng, các bước, biện pháp an toàn, cách nghiệm thu. Kỹ sư trưởng đọc, hỏi lại, yêu cầu bổ sung — rồi mới ký cho thi công. Hạng mục nguy hiểm thì giám sát từng bước.",
      },
      terms: [
        { term: "Plan mode", definition: "Chế độ Claude khảo sát và đề xuất kế hoạch, không sửa mã nguồn cho tới khi bạn duyệt." },
        { term: "/plan", definition: "Tiền tố đặt trước một yêu cầu để lập kế hoạch cho riêng yêu cầu đó." },
        { term: "Ctrl+G", definition: "Mở kế hoạch đề xuất trong trình soạn thảo mặc định để sửa trực tiếp." },
        { term: "defaultMode", definition: "Thiết lập chế độ quyền khởi đầu cho phiên (ví dụ plan) trong settings." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: ba lựa chọn khi duyệt kế hoạch",
      infographic: {
        kind: "cards",
        cards: [
          { title: "Yes, and use auto mode", body: "Duyệt và chuyển sang auto mode; Claude làm tiếp, bộ phân loại chặn hành động rủi ro.", foot: "Hợp với: thay đổi rủi ro thấp, có test tốt", icon: "zap" },
          { title: "Yes, manually approve edits", body: "Duyệt kế hoạch nhưng bạn xem và đồng ý từng thay đổi.", foot: "Hợp với: cấu hình production, dữ liệu thật, thanh toán", icon: "shield" },
          { title: "No, keep planning", body: "Ở lại Plan và nói điều cần sửa; hoặc Ctrl+G sửa trực tiếp.", foot: "Hợp với: kế hoạch thiếu kiểm chứng hoặc lệch phạm vi", icon: "repeat" },
        ],
      },
      caption: "Nếu không có auto mode, lựa chọn đầu hiện là “Yes, auto-accept edits” (theo tài liệu Permission modes, 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng lập kế hoạch",
      mermaid: `flowchart TD
  A["Shift+Tab → plan mode on"] --> B["Mô tả mục tiêu, phạm vi, cách kiểm chứng"]
  B --> C["Claude khảo sát và đề xuất kế hoạch"]
  C --> D{"Kế hoạch ổn?"}
  D -->|"Chưa"| E["No, keep planning / Ctrl+G sửa"]
  E --> C
  D -->|"Ổn, rủi ro cao"| F["Yes, manually approve edits"]
  D -->|"Ổn, rủi ro thấp"| G["Yes, and use auto mode"]
  F --> H["Claude làm và chạy kiểm chứng"]
  G --> H`,
      caption: "Chất vấn kế hoạch rẻ hơn nhiều so với sửa lại code đã làm sai hướng.",
      alt: "Lưu đồ: Shift+Tab vào plan mode, mô tả mục tiêu, phạm vi và cách kiểm chứng; Claude đề xuất kế hoạch. Chưa ổn thì keep planning hoặc Ctrl+G sửa rồi lặp lại. Ổn và rủi ro cao thì duyệt từng thay đổi; ổn và rủi ro thấp thì dùng auto mode. Sau đó Claude làm và chạy kiểm chứng.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu lập kế hoạch",
      bad: {
        label: "Thiếu khung",
        content: "/plan thêm xuất PDF",
        notes: ["Không nói phạm vi — Claude có thể đề xuất đổi cả kiến trúc.", "Không yêu cầu bước kiểm chứng.", "Không hỏi rủi ro."],
      },
      good: {
        label: "Kế hoạch có khung",
        content: "/plan Thêm nút “Xuất PDF” cho trang báo cáo tuần. Phạm vi: chỉ src/report/ và tests/report/; không đổi định dạng dữ liệu. Hãy liệt kê file sẽ sửa, các bước, cách kiểm chứng (test nào, chạy lệnh gì) và rủi ro có thể gặp. Chưa sửa code.",
        notes: ["Có phạm vi và giới hạn.", "Yêu cầu bước kiểm chứng và rủi ro.", "Rõ là chỉ lập kế hoạch."],
      },
      takeaway: "Yêu cầu kế hoạch càng có khung, kế hoạch nhận về càng dễ duyệt.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: sắp xếp quy trình lập kế hoạch",
      sim: {
        kind: "sequence",
        items: [
          { id: "a", text: "Nhấn Shift+Tab đến khi thấy ⏸ plan mode on" },
          { id: "b", text: "Mô tả mục tiêu, phạm vi và cách kiểm chứng" },
          { id: "c", text: "Đọc kế hoạch Claude đề xuất, hỏi lại chỗ chưa rõ" },
          { id: "d", text: "Chọn No, keep planning và yêu cầu bổ sung bước chạy test" },
          { id: "e", text: "Chọn Yes, manually approve edits vì thay đổi chạm cấu hình production" },
          { id: "f", text: "Xem từng thay đổi rồi kiểm tra kết quả test" },
        ],
        explain: "Vào Plan → nêu khung → đọc và chất vấn → bổ sung thiếu sót → chọn cách duyệt theo rủi ro → kiểm chứng.",
      },
      intro: "Xếp các bước theo đúng thứ tự cho một thay đổi có chạm cấu hình production.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: lập kế hoạch cho một thay đổi lớn",
      steps: [
        { title: "Vào Plan", detail: "Shift+Tab giữa phiên, /plan cho một yêu cầu, hoặc mở phiên ở Plan.", code: { lang: "bash", content: "claude --permission-mode plan" } },
        { title: "Yêu cầu kế hoạch có khung", detail: "Phạm vi, file liên quan, các bước, cách kiểm chứng, rủi ro; nói rõ “chưa sửa code”." },
        { title: "Chất vấn kế hoạch", detail: "Có bước kiểm chứng? Có xoá/đổi tên rộng? Có đụng ngoài phạm vi? Thiếu thì chọn No, keep planning." },
        { title: "Sửa trực tiếp nếu cần", detail: "Nhấn Ctrl+G để mở kế hoạch trong trình soạn thảo và sửa." },
        { title: "Duyệt theo rủi ro", detail: "Rủi ro cao → Yes, manually approve edits; rủi ro thấp, có test tốt → Yes, and use auto mode. Muốn Plan là mặc định của dự án:", code: { lang: "json", content: "{\n  \"permissions\": {\n    \"defaultMode\": \"plan\"\n  }\n}" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc kế hoạch Claude đề xuất trong phần dữ liệu mẫu. Viết phản hồi bạn sẽ gửi khi chọn “No, keep planning”: chỉ ra ít nhất 3 vấn đề và yêu cầu sửa cụ thể.",
      sampleData: {
        name: "Kế hoạch đề xuất",
        content:
          "Mục tiêu: đổi định dạng ngày sang DD/MM/YYYY trên toàn bộ ứng dụng.\n1. Sửa hàm formatDate trong src/utils/date.js.\n2. Đổi tên formatDate thành formatDateVN cho rõ nghĩa.\n3. Xoá thư mục tests/legacy vì có nhiều test cũ bị lỗi.\n4. Cập nhật luôn cấu hình máy chủ production cho đồng bộ.",
      },
      placeholder: "No, keep planning.\nVấn đề 1: …\nVấn đề 2: …\nVấn đề 3: …\nYêu cầu: …",
      rubric: [
        { id: "verify", label: "Thiếu bước kiểm chứng", weight: 1, check: { kind: "regex", pattern: "(kiem chung|chay test|npm test|buoc test|them test)" }, pass: "Đã yêu cầu kiểm chứng.", fail: "Kế hoạch thiếu bước chạy test — hãy yêu cầu bổ sung." },
        { id: "rename", label: "Đổi tên rộng không cập nhật nơi gọi", weight: 1, check: { kind: "regex", pattern: "(doi ten|rename)[^\\n]*(noi goi|cap nhat|tat ca|anh huong|giu nguyen)" }, pass: "Đã chỉ ra rủi ro đổi tên.", fail: "Đổi tên hàm cần cập nhật mọi nơi gọi — hoặc giữ nguyên tên." },
        { id: "delete", label: "Không xoá test", weight: 1, check: { kind: "regex", pattern: "(khong xoa|giu|sua)[^\\n]*test|test[^\\n]*(khong xoa|giu lai)" }, pass: "Đã phản đối xoá test.", fail: "Không xoá tests/legacy để “cho qua”; sửa hoặc đánh giá từng test." },
        { id: "scope", label: "Ra ngoài phạm vi (production)", weight: 1, check: { kind: "regex", pattern: "production[^\\n]*(bo|khong|ngoai pham vi|tach)|(bo|khong|ngoai pham vi|tach)[^\\n]*production" }, pass: "Đã loại bước production.", fail: "Cấu hình production nằm ngoài phạm vi — bỏ hoặc tách riêng." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "No, keep planning.\nVấn đề 1: kế hoạch thiếu bước kiểm chứng — thêm test cho formatDate và chạy npm test sau khi sửa.\nVấn đề 2: đổi tên formatDate thành formatDateVN ảnh hưởng mọi nơi gọi — giữ nguyên tên hàm.\nVấn đề 3: không xoá tests/legacy; giữ lại và báo cáo test nào lỗi để xem xét riêng.\nVấn đề 4: bỏ bước cấu hình production, ngoài phạm vi thay đổi này.\nYêu cầu: cập nhật kế hoạch, liệt kê các file gọi formatDate và rủi ro hiển thị ngày cũ.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Plan: Claude đọc, khảo sát, đề xuất — không sửa mã nguồn cho tới khi bạn duyệt.",
        "Vào: Shift+Tab, /plan trước một yêu cầu, hoặc claude --permission-mode plan; rời: Shift+Tab.",
        "Duyệt: auto mode/auto-accept, duyệt từng thay đổi, hoặc No, keep planning; Ctrl+G sửa kế hoạch.",
        "Chọn cách duyệt theo rủi ro; chất vấn kế hoạch trước khi duyệt (kiểm chứng, xoá, đổi tên, phạm vi).",
        "Đáng lập kế hoạch khi thay đổi lớn hoặc chưa rõ hướng; defaultMode: plan để làm mặc định.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một thay đổi chạm từ 3 file trở lên trong dự án thật.",
      tasks: [
        "Vào Plan và yêu cầu kế hoạch có phạm vi, file, bước, kiểm chứng, rủi ro.",
        "Chất vấn ít nhất một lần bằng No, keep planning hoặc Ctrl+G.",
        "Chọn cách duyệt theo mức rủi ro và giải thích lý do.",
      ],
      deliverable: "Kế hoạch cuối cùng đã duyệt, các điểm bạn đã yêu cầu sửa, và kết quả kiểm chứng.",
      checklist: ["Kế hoạch có bước kiểm chứng", "Không có bước ngoài phạm vi", "Cách duyệt khớp mức rủi ro"],
    },
  ],
};
