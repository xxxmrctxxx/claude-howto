import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const PM = "https://code.claude.com/docs/en/permission-modes";
const CO = "https://code.claude.com/docs/en/costs";

export const lessonTaoKeHoach: Lesson = {
  id: "ch12-l03",
  chapterId: "ch12",
  slug: "tao-ke-hoach",
  title: "Tạo kế hoạch",
  subtitle: "Từ SPEC.md đến PLAN.md: dùng plan mode để Claude đề xuất, chia mốc nhỏ có phép kiểm tra, làm rủi ro lớn nhất trước, dựng khung xuyên suốt sớm, ước lượng thời gian và chi phí.",
  level: "intermediate",
  estimatedMinutes: 40,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Dùng plan mode để Claude đọc SPEC và đề xuất kế hoạch trước khi sửa file; lưu thành PLAN.md." },
    { id: "o2", text: "Chia việc thành mốc nhỏ, mỗi mốc có phép kiểm tra lấy từ tiêu chí chấp nhận." },
    { id: "o3", text: "Sắp thứ tự: thử nghiệm rủi ro lớn nhất trước, dựng khung xuyên suốt sớm, rồi mới làm đầy." },
    { id: "o4", text: "Ước lượng thời gian và chi phí token; ghi rủi ro; điều chỉnh kế hoạch theo tuần." },
  ],
  concepts: [
    { id: "plan-mode", label: "Plan mode" },
    { id: "plan-file", label: "PLAN.md" },
    { id: "milestones", label: "Mốc nhỏ" },
    { id: "milestone-check", label: "Phép kiểm tra cho mỗi mốc" },
    { id: "riskiest-first", label: "Rủi ro lớn nhất làm trước" },
    { id: "walking-skeleton", label: "Khung xuyên suốt" },
    { id: "task-size", label: "Việc vừa một phiên" },
    { id: "estimate", label: "Ước lượng thời gian và chi phí" },
    { id: "plan-risks", label: "Danh sách rủi ro" },
    { id: "dependencies", label: "Phụ thuộc giữa các việc" },
    { id: "plan-review", label: "Phản biện kế hoạch" },
    { id: "replan", label: "Điều chỉnh kế hoạch" },
  ],
  hints: [
    "Plan mode: Claude đọc và đề xuất, chưa sửa file — bạn duyệt rồi mới làm.",
    "Câu hỏi đầu tiên của kế hoạch: “Điều gì nếu sai thì cả dự án hỏng?” — làm điều đó trước.",
    "Mỗi mốc kết thúc bằng một phép kiểm tra chạy được, không phải cảm giác “có vẻ xong”.",
  ],
  sources: [
    { label: "Claude Code Docs — Best practices (khám phá → lập kế hoạch → triển khai; cho Claude cách kiểm chứng)", href: BP },
    { label: "Claude Code Docs — Permission modes (plan mode)", href: PM },
    { label: "Claude Code Docs — Manage costs effectively (theo dõi chi phí)", href: CO },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "SPEC.md nói **đích đến**; PLAN.md nói **đường đi**. Trong Claude Code, dùng **plan mode** (Shift+Tab chuyển chế độ, hoặc `/plan`): Claude **đọc và đề xuất, chưa sửa file**. Best practices mô tả nhịp làm việc: **khám phá → lập kế hoạch → triển khai → commit**. Bạn duyệt, sửa kế hoạch, rồi lưu thành **PLAN.md** với danh sách mốc có ô đánh dấu để theo dõi qua nhiều phiên.",
        "**Chia mốc nhỏ**: mỗi mốc là một việc làm được trong một phiên, kết thúc bằng **phép kiểm tra chạy được** lấy từ tiêu chí chấp nhận (ví dụ: “script chạy trên 50 ghi chú mẫu, in tỷ lệ khớp”). Ghi **phụ thuộc** (mốc nào cần mốc nào xong trước).",
        "**Thứ tự quan trọng hơn số mốc.** (1) **Rủi ro lớn nhất trước**: với Sổ tay ca số, rủi ro là “Claude có trích đúng ≥ 90% không?” — nên mốc 1 là thử trích 50 ghi chú mẫu và đo, trước khi làm giao diện. Nếu không đạt, đổi hướng khi mới tốn một buổi. (2) **Khung xuyên suốt**: sớm có một đường đi mỏng chạy hết đầu-cuối (1 ghi chú → bản ghi → dòng trong bảng) để lộ vấn đề tích hợp. (3) Rồi mới **làm đầy** từng phần, thêm test, CI, và **dùng thử** với người dùng.",
        "**Ước lượng và rủi ro**: ghi thời gian dự kiến mỗi mốc và **chi phí token** ước tính (Chương 8 — xem `/usage` hoặc usage của API); ghi **danh sách rủi ro** (khả năng × ảnh hưởng, bài 10.6). Nhờ Claude và người dùng **phản biện** kế hoạch. Mỗi tuần so thực tế với kế hoạch và **điều chỉnh** — kế hoạch là công cụ, không phải lời hứa bất biến.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Như chạy thử một dây chuyền mới: trước hết thử công đoạn khó nhất xem có đạt dung sai không (rủi ro lớn nhất), rồi cho một sản phẩm đi hết dây chuyền (khung xuyên suốt), sau đó mới tăng tốc từng trạm — mỗi trạm có phiếu kiểm tra riêng.",
      },
      terms: [
        { term: "Plan mode", definition: "Chế độ Claude Code chỉ khám phá và đề xuất kế hoạch, không sửa file nguồn." },
        { term: "Mốc (milestone)", definition: "Điểm kiểm tra trong kế hoạch, có kết quả cụ thể và phép kiểm tra." },
        { term: "Khung xuyên suốt", definition: "Phiên bản mỏng nhất chạy được từ đầu đến cuối hệ thống." },
        { term: "Thử nghiệm rủi ro (spike)", definition: "Việc nhỏ làm sớm để kiểm tra một giả định quan trọng." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: PLAN.md mẫu “Sổ tay ca số”",
      infographic: {
        kind: "table",
        headers: ["Mốc", "Phép kiểm tra", "Ước lượng"],
        rows: [
          ["M1. Thử trích 50 ghi chú mẫu", "Tỷ lệ khớp đáp án ≥ 90% (in ra màn hình)", "1 buổi"],
          ["M2. Khung xuyên suốt", "1 ghi chú → bản ghi → dòng trong bảng, chạy bằng một lệnh", "1 buổi"],
          ["M3. Trích đầy đủ + ngoại lệ", "Test: thiếu số lượng → hàng chờ; enum chuẩn hoá", "2 buổi"],
          ["M4. Bảng tuần + báo cáo nháp", "500 ghi chú → bảng ≤ 1 phút; báo cáo đủ mục", "2 buổi"],
          ["M5. Test trong CI", "Workflow xanh trên PR", "1 buổi"],
          ["M6. Dùng thử 1 tuần", "Trưởng xưởng tổng hợp ≤ 15 phút; ghi góp ý", "1 tuần"],
        ],
      },
      caption: "Ví dụ do khoá học soạn; ước lượng mang tính minh hoạ.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: lập và theo dõi kế hoạch",
      mermaid: `flowchart TD
  A["SPEC.md đã xác nhận"] --> B["Plan mode: Claude đề xuất kế hoạch"]
  B --> C["Bạn sửa: rủi ro lớn nhất trước, khung xuyên suốt sớm"]
  C --> D["Lưu PLAN.md: mốc, phép kiểm tra, ước lượng, rủi ro"]
  D --> E["Làm mốc tiếp theo"]
  E --> F{"Phép kiểm tra của mốc đạt?"}
  F -->|"Chưa"| E
  F -->|"Đạt"| G["Đánh dấu, commit"]
  G --> H{"Cuối tuần: lệch kế hoạch?"}
  H -->|"Có"| I["Điều chỉnh PLAN.md, báo người dùng"]
  I --> E
  H -->|"Không"| E`,
      caption: "Kế hoạch sống: mỗi mốc có kiểm tra, mỗi tuần có điều chỉnh.",
      alt: "Lưu đồ: từ SPEC.md đã xác nhận, dùng plan mode để Claude đề xuất kế hoạch; bạn sửa để rủi ro lớn nhất làm trước và có khung xuyên suốt sớm; lưu PLAN.md gồm mốc, phép kiểm tra, ước lượng, rủi ro. Làm từng mốc; nếu phép kiểm tra chưa đạt thì tiếp tục; đạt thì đánh dấu và commit. Cuối tuần nếu lệch kế hoạch thì điều chỉnh PLAN.md và báo người dùng.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: kế hoạch dự án",
      bad: {
        label: "Làm giao diện trước, kiểm tra sau cùng",
        content: "Tuần 1: thiết kế giao diện đẹp. Tuần 2: làm trang bảng. Tuần 3: nối với Claude để trích dữ liệu. Tuần 4: kiểm tra.",
        notes: ["Rủi ro lớn nhất (độ chính xác trích xuất) để tuần 3 mới biết.", "Không có phép kiểm tra cho từng mốc.", "Kiểm tra dồn cuối, không còn thời gian sửa."],
      },
      good: {
        label: "Rủi ro trước, khung sớm, mỗi mốc có kiểm tra",
        content: "M1: trích 50 ghi chú mẫu, đo tỷ lệ khớp (đạt ≥ 90% mới đi tiếp). M2: khung xuyên suốt 1 ghi chú → bảng. M3–M4: làm đầy, mỗi mốc có test. M5: CI. M6: dùng thử với trưởng xưởng.",
        notes: ["Biết sớm hướng đi có khả thi không.", "Vấn đề tích hợp lộ ra sớm.", "Mỗi bước có bằng chứng đã xong."],
      },
      takeaway: "Lên kế hoạch để học sớm điều có thể làm hỏng dự án.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: sắp xếp các mốc",
      sim: {
        kind: "sequence",
        items: [
          { id: "a", text: "Thử trích 50 ghi chú mẫu và đo tỷ lệ khớp (rủi ro lớn nhất)" },
          { id: "b", text: "Khung xuyên suốt: 1 ghi chú → bản ghi → dòng trong bảng" },
          { id: "c", text: "Trích xuất đầy đủ với schema, ngoại lệ, hàng chờ" },
          { id: "d", text: "Bảng tuần và báo cáo nháp" },
          { id: "e", text: "Test tự động chạy trong CI" },
          { id: "f", text: "Dùng thử với trưởng xưởng trong 1 tuần" },
        ],
        explain: "Kiểm tra giả định nguy hiểm nhất → nối đầu-cuối → làm đầy → tự động hoá kiểm tra → người dùng thật.",
      },
      intro: "Sắp xếp các mốc của “Sổ tay ca số” theo thứ tự hợp lý.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: lập PLAN.md với plan mode",
      steps: [
        {
          title: "Vào plan mode và yêu cầu kế hoạch",
          detail: "Claude đọc SPEC, đề xuất mốc; chưa sửa file.",
          code: { lang: "text", content: "/plan Đọc @SPEC.md. Đề xuất kế hoạch theo mốc. Mốc 1 phải kiểm tra rủi ro lớn nhất. Mốc 2 là khung xuyên suốt. Mỗi mốc: kết quả, phép kiểm tra chạy được (lấy từ tiêu chí trong SPEC), phụ thuộc, ước lượng. Liệt kê 5 rủi ro chính." },
        },
        { title: "Phản biện", detail: "Hỏi: “Mốc nào quá lớn cho một phiên? Rủi ro nào bị bỏ sót?” Sửa kế hoạch." },
        { title: "Lưu PLAN.md", detail: "Mốc dạng ô đánh dấu, phép kiểm tra, ước lượng thời gian và token, danh sách rủi ro (khả năng × ảnh hưởng)." },
        { title: "Xin người dùng góp ý", detail: "Đặc biệt mốc dùng thử: khi nào, ai tham gia, đo gì." },
        { title: "Làm và đánh dấu", detail: "Mỗi mốc: phép kiểm tra đạt → đánh dấu → commit. Ghi thời gian và chi phí thực tế." },
        { title: "Điều chỉnh hằng tuần", detail: "So thực tế với kế hoạch; lệch thì sửa PLAN.md và báo người dùng, thu hẹp phạm vi nếu cần." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết PLAN.md (ít nhất 4 mốc) cho dự án trong dữ liệu mẫu. Mỗi mốc có phép kiểm tra; mốc đầu kiểm tra rủi ro lớn nhất; có khung xuyên suốt; có danh sách rủi ro.",
      sampleData: {
        name: "Dự án: Trợ lý soạn bản nháp 8D",
        content: "SPEC: bản nháp D1–D4 trong ≤ 30 phút; ≥ 80% nội dung dùng được trên 5 khiếu nại cũ; thiếu thông tin thì ghi “cần xác nhận”. Công cụ: Project trên claude.ai + mẫu 8D. Rủi ro người dùng lo nhất: Claude bịa nguyên nhân.",
      },
      placeholder: "Mốc 1: …",
      rubric: [
        { id: "milestones", label: "≥ 3 mốc đánh số", weight: 1, check: { kind: "regex", pattern: "(moc 1|m1|1[.)])[\\s\\S]*(moc 2|m2|2[.)])[\\s\\S]*(moc 3|m3|3[.)])" }, pass: "Có nhiều mốc.", fail: "Liệt kê ít nhất 3–4 mốc đánh số." },
        { id: "checks", label: "Phép kiểm tra", weight: 1, check: { kind: "anyKeyword", keywords: ["kiểm tra", "đạt", "đo"] }, pass: "Có phép kiểm tra.", fail: "Mỗi mốc cần phép kiểm tra." },
        { id: "skeleton", label: "Khung xuyên suốt", weight: 1, check: { kind: "anyKeyword", keywords: ["xuyên suốt", "đầu-cuối", "đầu cuối", "end-to-end"] }, pass: "Có khung.", fail: "Thêm mốc khung xuyên suốt sớm." },
        { id: "risk", label: "Rủi ro", weight: 1, check: { kind: "anyKeyword", keywords: ["rủi ro"] }, pass: "Có rủi ro.", fail: "Thêm danh sách rủi ro." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Mốc 1 (rủi ro lớn nhất): chạy thử trên 2 khiếu nại cũ, kiểm tra Claude có bịa nguyên nhân không — đạt khi mọi nguyên nhân trích dẫn được về biên bản hoặc ghi “cần xác nhận”.\nMốc 2 (khung xuyên suốt): một khiếu nại đi hết đầu-cuối: tài liệu vào Project → bản nháp D1–D4 theo mẫu → trưởng phòng đọc. Đạt khi đủ 4 mục.\nMốc 3: viết instructions hoàn chỉnh + checklist tự kiểm; đo trên 5 khiếu nại cũ, đạt ≥ 80% dùng được.\nMốc 4: dùng thử 2 tuần với khiếu nại mới, đo thời gian ≤ 30 phút.\nRủi ro: bịa nguyên nhân (4×5), thiếu dữ liệu lịch sử lô (3×3), chính sách dữ liệu khách (2×5).",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Plan mode: Claude đề xuất, chưa sửa file; bạn duyệt rồi lưu PLAN.md.",
        "Mốc nhỏ vừa một phiên, mỗi mốc có phép kiểm tra chạy được.",
        "Rủi ro lớn nhất trước; khung xuyên suốt sớm; rồi làm đầy, CI, dùng thử.",
        "Ước lượng thời gian và token; danh sách rủi ro khả năng × ảnh hưởng.",
        "So thực tế hằng tuần, điều chỉnh và báo người dùng.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Dự án tốt nghiệp của bạn đã có SPEC.md xác nhận.",
      tasks: [
        "Dùng plan mode để có kế hoạch, sửa để mốc 1 kiểm tra rủi ro lớn nhất.",
        "Viết PLAN.md: mốc, phép kiểm tra, ước lượng thời gian và token, rủi ro.",
        "Làm mốc 1 ngay và ghi kết quả đo — quyết định đi tiếp hay đổi hướng.",
      ],
      deliverable: "PLAN.md + kết quả mốc 1 + quyết định đi tiếp/đổi hướng có lý do.",
      checklist: ["Mỗi mốc có phép kiểm tra", "Có khung xuyên suốt sớm", "Có ước lượng chi phí"],
    },
  ],
};
