import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const PE = "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices";
const MEM = "https://code.claude.com/docs/en/memory";

export const lessonVietYeuCau: Lesson = {
  id: "ch12-l02",
  chapterId: "ch12",
  slug: "viet-yeu-cau",
  title: "Viết yêu cầu",
  subtitle: "Biến điều lệ dự án thành đặc tả SPEC.md mà người và Claude đều kiểm tra được: để Claude phỏng vấn bạn, viết câu chuyện người dùng, tiêu chí chấp nhận có số, ví dụ dữ liệu và trường hợp ngoại lệ.",
  level: "intermediate",
  estimatedMinutes: 40,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Dùng cách “để Claude phỏng vấn” để lộ ra yêu cầu ẩn, rồi viết SPEC.md và bắt đầu phiên mới để triển khai." },
    { id: "o2", text: "Viết câu chuyện người dùng và tiêu chí chấp nhận dạng Cho/Khi/Thì, có con số kiểm tra được." },
    { id: "o3", text: "Đưa ví dụ dữ liệu, trường hợp ngoại lệ, yêu cầu phi chức năng và phần ngoài phạm vi vào đặc tả." },
    { id: "o4", text: "Thay từ mơ hồ (nhanh, thân thiện, chính xác) bằng tiêu chí đo được; xin người dùng xác nhận." },
  ],
  concepts: [
    { id: "interview-first", label: "Để Claude phỏng vấn" },
    { id: "spec-file", label: "File SPEC.md" },
    { id: "user-stories", label: "Câu chuyện người dùng" },
    { id: "acceptance-criteria", label: "Tiêu chí chấp nhận Cho/Khi/Thì" },
    { id: "measurable-terms", label: "Thay từ mơ hồ bằng số" },
    { id: "examples-in-spec", label: "Ví dụ đầu vào – đầu ra" },
    { id: "edge-cases", label: "Trường hợp ngoại lệ" },
    { id: "non-functional", label: "Yêu cầu phi chức năng" },
    { id: "out-of-scope", label: "Ngoài phạm vi" },
    { id: "open-questions", label: "Câu hỏi còn mở" },
    { id: "fresh-session", label: "Phiên mới để triển khai" },
    { id: "user-signoff", label: "Người dùng xác nhận" },
  ],
  hints: [
    "Mỗi tiêu chí chấp nhận phải trả lời được bằng “đạt” hoặc “không đạt”.",
    "Từ “nhanh”, “dễ dùng”, “chính xác” là dấu hiệu cần thêm con số.",
    "Viết SPEC xong thì mở phiên mới: ngữ cảnh sạch, chỉ cần @SPEC.md.",
  ],
  sources: [
    { label: "Claude Code Docs — Best practices (để Claude phỏng vấn bằng AskUserQuestion, viết SPEC.md, mở phiên mới; cho Claude cách kiểm chứng)", href: BP },
    { label: "Claude API Docs — Prompting best practices (nói rõ, đưa ví dụ, nêu ngữ cảnh)", href: PE },
    { label: "Claude Code Docs — Memory (CLAUDE.md, tham chiếu file bằng @)", href: MEM },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Điều lệ dự án (bài 12.1) nói **làm gì và vì sao**; **đặc tả** nói **thế nào là xong**. Với Claude Code, best practices gợi ý một cách hiệu quả cho tính năng lớn: bắt đầu bằng yêu cầu ngắn và **để Claude phỏng vấn bạn** (công cụ AskUserQuestion) về cách làm, giao diện, trường hợp biên, đánh đổi — những điều bạn chưa nghĩ tới. Khi đủ, Claude viết đặc tả vào **`SPEC.md`**; sau đó **mở phiên mới** để triển khai, ngữ cảnh sạch và chỉ cần đọc `@SPEC.md`.",
        "**Câu chuyện người dùng** gói nhu cầu: “Là [ai], tôi muốn [làm gì] để [được gì]” (bài 9.1). Mỗi câu chuyện có **tiêu chí chấp nhận** dạng **Cho / Khi / Thì**: “**Cho** 50 ghi chú mẫu có đáp án, **khi** chạy trích xuất, **thì** ≥ 45 bản ghi khớp đáp án”. Tiêu chí tốt **trả lời được bằng đạt/không đạt** — chính là “phép kiểm tra” để Claude tự xác minh công việc (best practices).",
        "Đặc tả tốt còn có: **ví dụ đầu vào – đầu ra** (ghi chú thật → bản ghi mong đợi); **trường hợp ngoại lệ** (ghi chú thiếu số lượng, viết tắt, hai lỗi trong một câu); **yêu cầu phi chức năng** (dữ liệu ở đâu, ai xem được, thời gian xử lý, chi phí tối đa mỗi tuần); **ngoài phạm vi**; và **câu hỏi còn mở** cần người dùng trả lời. Thay mọi từ mơ hồ bằng số: “nhanh” → “bảng tuần tạo xong ≤ 1 phút cho 500 ghi chú”.",
        "Cuối cùng, **người dùng đọc và xác nhận** SPEC.md — rẻ hơn nhiều so với phát hiện hiểu lầm sau khi đã code. Lưu SPEC.md trong repo cùng mã nguồn; khi yêu cầu đổi, sửa SPEC trước rồi mới sửa code. Trong CLAUDE.md có thể ghi “đọc @SPEC.md trước khi làm tính năng mới”.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Như bản vẽ kỹ thuật có dung sai: “trục phải chính xác” không ai kiểm được, nhưng “Ø25 ±0,02 mm” thì thước cặp trả lời ngay đạt hay không. SPEC.md là bản vẽ có dung sai cho phần mềm.",
      },
      terms: [
        { term: "Đặc tả (spec)", definition: "Tài liệu mô tả chính xác hệ thống phải làm gì và thế nào là đạt." },
        { term: "Tiêu chí chấp nhận", definition: "Điều kiện kiểm tra được để xác nhận một câu chuyện người dùng đã xong." },
        { term: "Cho/Khi/Thì", definition: "Khuôn viết tiêu chí: điều kiện ban đầu, hành động, kết quả mong đợi." },
        { term: "Phi chức năng", definition: "Yêu cầu về hiệu năng, bảo mật, dữ liệu, chi phí — không phải chức năng cụ thể." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: khung SPEC.md",
      infographic: {
        kind: "annotated",
        label: "SPEC.md — Sổ tay ca số (rút gọn)",
        lines: [
          { text: "## Bối cảnh và người dùng", tone: "context", note: "Lấy từ điều lệ dự án" },
          { text: "## Câu chuyện: Là trưởng xưởng, tôi muốn xem bảng lỗi tuần để chọn việc ưu tiên", tone: "role", note: "Ai – muốn gì – để làm gì" },
          { text: "Cho 50 ghi chú mẫu có đáp án, khi chạy trích xuất, thì ≥ 45 bản ghi khớp", tone: "task", note: "Tiêu chí kiểm tra được" },
          { text: "## Ví dụ: “ca 2 thấy 3 vỏ nứt, nặng” → {Lắp ráp vỏ, Nứt vỏ, 3, nang}", tone: "output", note: "Đầu vào – đầu ra mong đợi" },
          { text: "## Ngoại lệ: thiếu số lượng → để trống, vào hàng chờ", tone: "constraints", note: "Không đoán" },
          { text: "## Phi chức năng: ≤ 1 phút/500 ghi chú; dữ liệu nội bộ; ≤ X đồng/tuần", tone: "constraints", note: "Thay từ mơ hồ bằng số" },
          { text: "## Ngoài phạm vi / Câu hỏi còn mở", tone: "neutral", note: "Ranh giới và việc cần hỏi" },
        ],
      },
      caption: "Khung gợi ý của khoá học; quy trình phỏng vấn → SPEC.md → phiên mới theo Best practices của Claude Code (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ điều lệ đến SPEC đã xác nhận",
      mermaid: `flowchart TD
  A["Điều lệ dự án"] --> B["Yêu cầu ngắn + nhờ Claude phỏng vấn"]
  B --> C["Trả lời câu hỏi: cách làm, biên, đánh đổi"]
  C --> D["Claude viết SPEC.md"]
  D --> E{"Mọi tiêu chí đạt/không đạt được?"}
  E -->|"Chưa"| F["Thay từ mơ hồ bằng số, thêm ví dụ"]
  F --> E
  E -->|"Rồi"| G{"Người dùng xác nhận?"}
  G -->|"Chưa"| H["Sửa theo góp ý, ghi câu hỏi mở"]
  H --> G
  G -->|"Rồi"| I["Mở phiên mới, triển khai từ @SPEC.md"]`,
      caption: "Đặc tả chỉ xong khi kiểm tra được và người dùng đã đồng ý.",
      alt: "Lưu đồ: từ điều lệ dự án, đưa yêu cầu ngắn và nhờ Claude phỏng vấn; trả lời các câu hỏi; Claude viết SPEC.md. Nếu chưa phải mọi tiêu chí đều kiểm tra được thì thay từ mơ hồ bằng số, thêm ví dụ. Nếu người dùng chưa xác nhận thì sửa theo góp ý và ghi câu hỏi mở. Khi xong thì mở phiên mới và triển khai từ SPEC.md.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: một yêu cầu",
      bad: {
        label: "Mơ hồ",
        content: "“Hệ thống phải trích lỗi chính xác và nhanh, giao diện thân thiện.”",
        notes: ["Không biết thế nào là “chính xác”, “nhanh”.", "Không có ví dụ.", "Không nói chuyện gì xảy ra khi ghi chú thiếu thông tin."],
      },
      good: {
        label: "Kiểm tra được",
        content: "“Cho 50 ghi chú mẫu có đáp án (thư mục mau/), khi chạy trích xuất, thì ≥ 45 bản ghi khớp đáp án về công đoạn, loại lỗi, số lượng. Cho 500 ghi chú, thì bảng tuần tạo xong ≤ 1 phút. Ghi chú không nêu số lượng thì so_luong để trống và bản ghi vào hàng chờ.”",
        notes: ["Đo được, có bộ mẫu.", "Có giới hạn thời gian cụ thể.", "Ngoại lệ được xử lý rõ."],
      },
      takeaway: "Viết yêu cầu sao cho một người lạ cũng chấm được đạt/không đạt.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: soát SPEC.md",
      sim: {
        kind: "highlight",
        instruction: "Đây là các dòng trong SPEC.md của “Sổ tay ca số”. Đánh dấu những dòng mơ hồ hoặc không kiểm tra được.",
        segments: [
          { id: "g1", text: "Người dùng: kỹ sư 3 ca ghi chú; trưởng xưởng lắp ráp xem bảng tuần.", target: false },
          { id: "g2", text: "Hệ thống phải nhanh.", target: true, why: "Không đo được — nêu số, ví dụ ≤ 1 phút cho 500 ghi chú." },
          { id: "g3", text: "Cho 50 ghi chú mẫu có đáp án, khi chạy trích xuất, thì ≥ 45 bản ghi khớp đáp án.", target: false },
          { id: "g4", text: "Giao diện thân thiện, dễ dùng.", target: true, why: "Mơ hồ — ví dụ: trưởng xưởng tìm được lỗi nhiều nhất tuần trong ≤ 30 giây, không cần hướng dẫn." },
          { id: "g5", text: "Ghi chú không nêu số lượng thì so_luong để trống và bản ghi vào hàng chờ.", target: false },
          { id: "g6", text: "AI phải luôn chính xác 100%.", target: true, why: "Phi thực tế — đặt ngưỡng đo được và có người duyệt hàng chờ." },
          { id: "g7", text: "Ngoài phạm vi: tích hợp ERP; gửi báo cáo ra ngoài xưởng.", target: false },
          { id: "g8", text: "Xử lý được mọi loại dữ liệu.", target: true, why: "Không rõ loại nào — liệt kê định dạng đầu vào được hỗ trợ." },
        ],
      },
      intro: "Có 4 dòng cần viết lại. Tìm chúng.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: viết SPEC.md với Claude Code",
      steps: [
        { title: "Chuẩn bị", detail: "Đặt điều lệ dự án và 5–10 ví dụ dữ liệu thật (đã được phép dùng) vào thư mục dự án." },
        {
          title: "Nhờ Claude phỏng vấn",
          detail: "Yêu cầu ngắn, để Claude hỏi những điều bạn chưa nghĩ tới.",
          code: { lang: "text", content: "Đọc @dieu-le.md và các file trong mau/. Tôi muốn xây phần trích lỗi từ ghi chú ca. Hãy phỏng vấn tôi bằng AskUserQuestion về cách làm, trường hợp biên, dữ liệu, giới hạn chi phí và đánh đổi. Đừng hỏi điều đã rõ trong tài liệu. Khi đủ thông tin, viết đặc tả vào SPEC.md." },
        },
        { title: "Soát tiêu chí", detail: "Mỗi tiêu chí phải chấm được đạt/không đạt; thay từ mơ hồ bằng số; thêm ví dụ đầu vào – đầu ra." },
        { title: "Thêm ngoại lệ và phi chức năng", detail: "Ghi chú thiếu thông tin, dữ liệu ở đâu, ai xem được, thời gian xử lý, chi phí tối đa." },
        { title: "Xin xác nhận", detail: "Người dùng đọc SPEC.md; ghi câu hỏi còn mở; sửa đến khi đồng ý." },
        {
          title: "Mở phiên mới để triển khai",
          detail: "Ngữ cảnh sạch; Claude đọc SPEC.md.",
          code: { lang: "text", content: "/clear\nĐọc @SPEC.md. Lập kế hoạch triển khai phần trích lỗi. Chưa viết code." },
        },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết lại ba yêu cầu mơ hồ trong dữ liệu mẫu thành tiêu chí chấp nhận dạng Cho/Khi/Thì. Mỗi tiêu chí cần kiểm tra được; có ít nhất một con số, một ví dụ hoặc bộ mẫu, và một trường hợp ngoại lệ.",
      sampleData: {
        name: "Yêu cầu mơ hồ (dự án trợ lý soạn bản nháp 8D)",
        content: "1. Bản nháp phải nhanh.\n2. Nội dung phải chính xác.\n3. Xử lý tốt các khiếu nại khó.",
      },
      placeholder: "1. …\n2. …\n3. …",
      rubric: [
        { id: "gwt", label: "Khuôn Cho/Khi/Thì", weight: 1, check: { kind: "regex", pattern: "\\bkhi\\b[^\\n]*\\bthi\\b" }, pass: "Có Cho/Khi/Thì.", fail: "Viết theo khuôn: Cho …, khi …, thì …" },
        { id: "number", label: "Có con số", weight: 1, check: { kind: "regex", pattern: "\\d+\\s*(giay|phut|gio|%|khieu nai|ban)" }, pass: "Có con số.", fail: "Thêm con số: thời gian, tỷ lệ, số mẫu." },
        { id: "sample", label: "Có bộ mẫu/ví dụ", weight: 1, check: { kind: "anyKeyword", keywords: ["bộ mẫu", "ví dụ", "khiếu nại cũ", "dữ liệu mẫu"] }, pass: "Có bộ mẫu.", fail: "Nêu bộ mẫu dùng để kiểm (ví dụ 5 khiếu nại cũ)." },
        { id: "edge", label: "Có ngoại lệ", weight: 1, check: { kind: "anyKeyword", keywords: ["thiếu", "không có", "chưa rõ", "cần xác nhận", "hàng chờ"] }, pass: "Có ngoại lệ.", fail: "Thêm trường hợp thiếu thông tin và cách xử lý." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "1. Cho một khiếu nại có đủ biên bản và lịch sử lô, khi kỹ sư yêu cầu bản nháp, thì bản nháp D1–D4 xong trong ≤ 30 phút kể từ lúc bắt đầu.\n2. Cho bộ mẫu 5 khiếu nại cũ có báo cáo 8D đã duyệt, khi tạo bản nháp, thì trưởng phòng QA đánh giá ≥ 80% nội dung dùng được; mọi con số trong bản nháp trích dẫn được về biên bản gốc.\n3. Cho khiếu nại thiếu ảnh lỗi hoặc không có mã lô, khi tạo bản nháp, thì bản nháp ghi rõ “cần xác nhận” ở mục thiếu và liệt kê thông tin cần bổ sung, không tự suy đoán.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Để Claude phỏng vấn để lộ yêu cầu ẩn; viết SPEC.md; mở phiên mới để triển khai.",
        "Câu chuyện người dùng + tiêu chí Cho/Khi/Thì chấm được đạt/không đạt.",
        "Thêm ví dụ đầu vào – đầu ra, ngoại lệ, phi chức năng, ngoài phạm vi, câu hỏi mở.",
        "Thay từ mơ hồ bằng số; tiêu chí là phép kiểm tra cho cả người và Claude.",
        "Người dùng xác nhận SPEC; yêu cầu đổi thì sửa SPEC trước, code sau.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Tiếp tục dự án tốt nghiệp của bạn từ điều lệ đã xác nhận.",
      tasks: [
        "Nhờ Claude phỏng vấn và viết SPEC.md cho phiên bản tối thiểu.",
        "Soát để mọi tiêu chí kiểm tra được; thêm ít nhất 5 ví dụ đầu vào – đầu ra và 3 ngoại lệ.",
        "Xin người dùng xác nhận; lưu SPEC.md trong repo hoặc Project.",
      ],
      deliverable: "SPEC.md đã xác nhận + bộ ví dụ đầu vào – đầu ra.",
      checklist: ["Không còn từ mơ hồ không có số", "Có ngoại lệ và ngoài phạm vi", "Có xác nhận của người dùng"],
    },
  ],
};
