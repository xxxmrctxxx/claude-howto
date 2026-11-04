import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const CR = "https://code.claude.com/docs/en/code-review-local";
const HL = "https://code.claude.com/docs/en/headless";
const HAL = "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations";

export const lessonKiemThuDuAn: Lesson = {
  id: "ch12-l05",
  chapterId: "ch12",
  slug: "kiem-thu",
  title: "Kiểm thử",
  subtitle: "Chứng minh dự án đạt SPEC bằng bốn lớp: test đơn vị cho phần code, đánh giá đầu ra AI trên bộ mẫu có đáp án, test đầu-cuối, và nghiệm thu với người dùng thật — kèm báo cáo kiểm thử.",
  level: "advanced",
  estimatedMinutes: 45,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Phân biệt bốn lớp kiểm thử: đơn vị, đánh giá đầu ra AI trên bộ mẫu, đầu-cuối, nghiệm thu người dùng." },
    { id: "o2", text: "Xây bộ mẫu có đáp án, đo theo từng trường, đặt ngưỡng từ SPEC; phân tích loại sai." },
    { id: "o3", text: "Dùng Claude Code để viết test tái hiện lỗi trước khi sửa, rà code (/code-review) và chạy test trong CI." },
    { id: "o4", text: "Tổ chức nghiệm thu với người dùng thật và viết báo cáo kiểm thử: đạt/không đạt theo từng tiêu chí." },
  ],
  concepts: [
    { id: "test-levels", label: "Bốn lớp kiểm thử" },
    { id: "unit-tests", label: "Test đơn vị" },
    { id: "eval-set", label: "Bộ mẫu có đáp án" },
    { id: "field-accuracy", label: "Đo theo từng trường" },
    { id: "error-analysis", label: "Phân tích loại sai" },
    { id: "e2e-test", label: "Test đầu-cuối" },
    { id: "uat", label: "Nghiệm thu người dùng" },
    { id: "repro-test-first", label: "Test tái hiện lỗi trước" },
    { id: "edge-case-tests", label: "Test cho ngoại lệ" },
    { id: "review-and-ci", label: "/code-review và CI" },
    { id: "test-data-privacy", label: "Dữ liệu kiểm thử an toàn" },
    { id: "test-report", label: "Báo cáo kiểm thử" },
  ],
  hints: [
    "Code xác định (gộp, chuẩn hoá) → test đơn vị; đầu ra của Claude → đo trên bộ mẫu có đáp án.",
    "Tỷ lệ chung che giấu lỗi: đo riêng từng trường và đọc từng bản ghi sai.",
    "Test xanh chưa đủ — người dùng thật phải dùng được với dữ liệu thật.",
  ],
  sources: [
    { label: "Claude Code Docs — Best practices (cho Claude phép kiểm tra; viết test tái hiện lỗi rồi sửa)", href: BP },
    { label: "Claude Code Docs — Review locally with /code-review", href: CR },
    { label: "Claude Code Docs — Run Claude Code programmatically (chạy kiểm tra trong script/CI)", href: HL },
    { label: "Claude API Docs — Reduce hallucinations (kiểm chứng, trích dẫn nguồn)", href: HAL },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Kiểm thử trả lời câu hỏi: **dự án đã đạt SPEC chưa — có bằng chứng không?** Dự án có Claude gồm hai loại phần: **phần code xác định** (gộp bản ghi, chuẩn hoá tên, tính tỷ lệ) — cùng đầu vào luôn cùng kết quả; và **phần do mô hình tạo** (trích xuất, viết báo cáo) — cần đo trên nhiều mẫu. Vì vậy có **bốn lớp**: (1) **test đơn vị** cho code; (2) **đánh giá đầu ra AI trên bộ mẫu có đáp án**; (3) **test đầu-cuối** từ đầu vào đến sản phẩm cuối; (4) **nghiệm thu** với người dùng thật.",
        "**Bộ mẫu có đáp án** là tài sản quan trọng nhất của dự án AI: 30–100 trường hợp thật (đã được phép dùng, ẩn thông tin nhạy cảm nếu cần), mỗi trường hợp có kết quả đúng do người làm. Đo **theo từng trường** (công đoạn đúng 98%, số lượng đúng 86%) thay vì một con số chung, và **đọc từng bản ghi sai** để phân loại nguyên nhân (viết tắt, hai lỗi một câu, thiếu số). So với ngưỡng trong SPEC — ví dụ ≥ 90%. Bộ mẫu chạy lại mỗi khi đổi prompt, schema hay mô hình.",
        "**Claude Code hỗ trợ kiểm thử**: nhờ Claude viết test cho các tiêu chí và ngoại lệ trong SPEC; gặp lỗi thì **viết test tái hiện lỗi trước**, thấy test đỏ, rồi mới sửa đến khi xanh (best practices). Chạy **`/code-review`** để rà thay đổi trước khi merge. Đưa test và bộ đo vào **CI** (bài 11.5) để chặn hồi quy.",
        "**Nghiệm thu**: người dùng thật dùng với dữ liệu thật trong một khoảng thời gian (ví dụ 1 tuần), đo đúng chỉ số trong điều lệ (thời gian tổng hợp, tỷ lệ phải sửa) và ghi góp ý. Kết thúc bằng **báo cáo kiểm thử**: mỗi tiêu chí trong SPEC → đạt/không đạt, số đo, bằng chứng (link log, file kết quả), lỗi còn tồn và kế hoạch xử lý.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Như nghiệm thu một máy mới: kiểm từng bộ phận (đơn vị), chạy lô mẫu có kích thước chuẩn để đo tỷ lệ đạt (bộ mẫu), chạy cả dây chuyền với máy mới (đầu-cuối), rồi để công nhân vận hành một tuần (nghiệm thu) — cuối cùng lập biên bản nghiệm thu có số đo.",
      },
      terms: [
        { term: "Test đơn vị", definition: "Kiểm một hàm/thành phần nhỏ với đầu vào và kết quả mong đợi cố định." },
        { term: "Bộ mẫu có đáp án", definition: "Tập trường hợp thật kèm kết quả đúng, dùng để đo đầu ra của mô hình." },
        { term: "Hồi quy", definition: "Lỗi cũ quay lại hoặc chức năng đang chạy bị hỏng sau một thay đổi." },
        { term: "Nghiệm thu (UAT)", definition: "Người dùng thật xác nhận hệ thống đáp ứng nhu cầu trong điều kiện thật." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bốn lớp kiểm thử của “Sổ tay ca số”",
      infographic: {
        kind: "table",
        headers: ["Lớp", "Kiểm cái gì", "Ngưỡng/bằng chứng"],
        rows: [
          ["Đơn vị", "Chuẩn hoá tên công đoạn, gộp bản ghi, tính tỷ lệ", "Mọi test xanh trong CI"],
          ["Bộ mẫu có đáp án", "Trích xuất trên 50 ghi chú thật", "Từng trường ≥ 90%; danh sách bản ghi sai"],
          ["Đầu-cuối", "Thư mục ghi chú → báo cáo tuần bằng một lệnh", "Báo cáo đủ 3 mục; 500 ghi chú ≤ 1 phút"],
          ["Nghiệm thu", "Trưởng xưởng dùng 1 tuần với dữ liệu thật", "Tổng hợp ≤ 15 phút; góp ý được ghi lại"],
        ],
      },
      caption: "Ví dụ do khoá học soạn; ngưỡng lấy từ SPEC của dự án mẫu.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng kiểm thử trước khi bàn giao",
      mermaid: `flowchart TD
  A["Thay đổi mới"] --> B["Test đơn vị"]
  B -->|"Đỏ"| F["Viết test tái hiện, sửa"]
  F --> B
  B -->|"Xanh"| C["Chạy bộ mẫu có đáp án"]
  C --> D{"Từng trường đạt ngưỡng SPEC?"}
  D -->|"Không"| E["Đọc bản ghi sai, phân loại, sửa prompt/schema/code"]
  E --> C
  D -->|"Có"| G["Test đầu-cuối + /code-review"]
  G --> H["Nghiệm thu với người dùng thật"]
  H --> I["Báo cáo kiểm thử: tiêu chí → đạt/không đạt + bằng chứng"]`,
      caption: "Lớp nhanh chạy trước; người dùng thật ở cuối; mọi kết luận có bằng chứng.",
      alt: "Lưu đồ kiểm thử: thay đổi mới chạy test đơn vị; đỏ thì viết test tái hiện và sửa. Xanh thì chạy bộ mẫu có đáp án; nếu từng trường chưa đạt ngưỡng thì đọc bản ghi sai, phân loại, sửa prompt, schema hoặc code rồi chạy lại. Đạt thì chạy test đầu-cuối và /code-review, rồi nghiệm thu với người dùng thật, cuối cùng viết báo cáo kiểm thử theo từng tiêu chí kèm bằng chứng.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: kết luận kiểm thử",
      bad: {
        label: "Cảm tính",
        content: "“Thử 5 ghi chú thấy ổn. Test đơn vị xanh. Kết luận: hệ thống chính xác.”",
        notes: ["5 mẫu quá ít.", "Không đo theo trường, không có ngưỡng.", "Chưa có người dùng thật thử."],
      },
      good: {
        label: "Có số đo và bằng chứng",
        content: "“Bộ 50 ghi chú: công đoạn 98%, loại lỗi 94%, số lượng 86% (dưới ngưỡng 90% — 5/7 lỗi do viết tắt ‘sl’, đã thêm vào bảng viết tắt, chạy lại 92%). Đầu-cuối: 500 ghi chú 41 giây. Nghiệm thu 1 tuần: tổng hợp 12 phút/tuần. Log: ket-qua/2026-11-03.json.”",
        notes: ["Đo theo trường, có ngưỡng.", "Phân tích nguyên nhân, sửa có mục tiêu.", "Có người dùng thật và bằng chứng."],
      },
      takeaway: "Kết luận kiểm thử là số đo so với ngưỡng, kèm bằng chứng.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xếp ca kiểm thử vào đúng lớp",
      sim: {
        kind: "classify",
        bins: [
          { id: "unit", label: "Test đơn vị" },
          { id: "eval", label: "Đánh giá trên bộ mẫu có đáp án" },
          { id: "e2e", label: "Test đầu-cuối" },
          { id: "uat", label: "Nghiệm thu người dùng" },
        ],
        items: [
          { id: "i1", text: "Hàm chuẩn hoá: “lap rap vo” → “Lắp ráp vỏ”.", bin: "unit", why: "Code xác định, đầu vào – đầu ra cố định." },
          { id: "i2", text: "Chạy trích xuất trên 50 ghi chú có đáp án, đo tỷ lệ khớp từng trường.", bin: "eval", why: "Đo đầu ra của mô hình trên bộ mẫu." },
          { id: "i3", text: "Từ thư mục ghi chú đến file báo cáo tuần bằng một lệnh; kiểm báo cáo đủ 3 mục.", bin: "e2e", why: "Đi hết hệ thống." },
          { id: "i4", text: "Trưởng xưởng dùng 1 tuần với ghi chú thật, ghi thời gian tổng hợp và góp ý.", bin: "uat", why: "Người dùng thật, điều kiện thật." },
          { id: "i5", text: "Hàm gộp: hai bản ghi cùng công đoạn, cùng loại lỗi được cộng số lượng.", bin: "unit", why: "Logic code xác định." },
          { id: "i6", text: "So 5 bản nháp 8D với 5 báo cáo đã duyệt theo checklist của trưởng phòng.", bin: "eval", why: "Đo đầu ra mô hình với đáp án." },
          { id: "i7", text: "Mở trang bảng tuần, lọc theo công đoạn, kiểm số hiển thị khớp file dữ liệu.", bin: "e2e", why: "Kiểm luồng qua giao diện đến dữ liệu." },
          { id: "i8", text: "Tổ QC tra 20 câu hỏi thật trong ca làm việc và chấm hữu ích/không.", bin: "uat", why: "Người dùng thật đánh giá giá trị." },
        ],
      },
      intro: "Xếp mỗi ca kiểm thử vào lớp phù hợp.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: kiểm thử dự án tốt nghiệp",
      steps: [
        { title: "Lập bảng kiểm thử từ SPEC", detail: "Mỗi tiêu chí chấp nhận → lớp kiểm thử → cách đo → ngưỡng." },
        {
          title: "Nhờ Claude viết test cho tiêu chí và ngoại lệ",
          detail: "Bắt đầu từ ngoại lệ trong SPEC.",
          code: { lang: "text", content: "Đọc @SPEC.md. Viết test đơn vị cho các ngoại lệ trong mục “Ngoại lệ” (thiếu số lượng, hai lỗi một câu, viết tắt). Chạy test và cho tôi xem kết quả. Chưa sửa code chính." },
        },
        { title: "Xây và chạy bộ mẫu", detail: "30–100 trường hợp thật có đáp án; đo theo từng trường; lưu kết quả có ngày để so sánh các lần chạy." },
        {
          title: "Lỗi thì tái hiện trước",
          detail: "Test đỏ trước, sửa sau.",
          code: { lang: "text", content: "Ghi chú “sl 3 vo nut” bị trích sai số lượng. Viết test tái hiện lỗi này, chạy để thấy đỏ, rồi sửa đến khi xanh mà không làm đỏ test khác." },
        },
        { title: "Rà và tự động hoá", detail: "Chạy /code-review trước khi merge; đưa test và bộ đo vào CI." },
        { title: "Nghiệm thu và báo cáo", detail: "Người dùng thật dùng 1 tuần; đo chỉ số trong điều lệ; viết báo cáo kiểm thử theo từng tiêu chí." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết kế hoạch kiểm thử cho dự án trong dữ liệu mẫu, đủ bốn lớp: đơn vị, bộ mẫu có đáp án (số lượng mẫu và ngưỡng), đầu-cuối, nghiệm thu với người dùng thật.",
      sampleData: {
        name: "Dự án: Trợ lý tra cứu hướng dẫn công việc QC",
        content: "Project trên claude.ai chứa 40 file hướng dẫn; có script nhỏ đổi tên file theo mã quy trình (QT-xxx). SPEC: ≥ 18/20 câu hỏi mẫu trả lời đúng và nêu tên file nguồn; câu hỏi ngoài tài liệu phải trả lời “không tìm thấy”. Người dùng: tổ QC 5 người.",
      },
      placeholder: "Kế hoạch kiểm thử: …",
      rubric: [
        { id: "unit", label: "Test đơn vị", weight: 1, check: { kind: "anyKeyword", keywords: ["đơn vị", "unit", "script đổi tên"] }, pass: "Có lớp đơn vị.", fail: "Script đổi tên file cần test đơn vị." },
        { id: "eval", label: "Bộ mẫu + ngưỡng", weight: 1, check: { kind: "allGroups", groups: [["20 câu", "bộ mẫu", "câu hỏi mẫu"], ["18"]] }, pass: "Có bộ mẫu và ngưỡng.", fail: "Dùng 20 câu hỏi mẫu có đáp án, ngưỡng ≥ 18." },
        { id: "edge", label: "Ngoại lệ ngoài tài liệu", weight: 1, check: { kind: "anyKeyword", keywords: ["không tìm thấy", "ngoài tài liệu"] }, pass: "Có ngoại lệ.", fail: "Kiểm câu hỏi ngoài tài liệu phải trả lời “không tìm thấy”." },
        { id: "uat", label: "Nghiệm thu", weight: 1, check: { kind: "anyKeyword", keywords: ["nghiệm thu", "tổ qc", "dùng thử", "người dùng thật"] }, pass: "Có nghiệm thu.", fail: "Tổ QC dùng thử với câu hỏi thật." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "1. Đơn vị: test script đổi tên file — “huong dan kiem ngoai quan.docx” có mã QT-012 → “QT-012-kiem-ngoai-quan.docx”; file không có mã thì báo lỗi.\n2. Bộ mẫu: 20 câu hỏi mẫu có đáp án do tổ trưởng QC soạn; đạt khi ≥ 18 câu đúng và nêu tên file nguồn; thêm 5 câu hỏi ngoài tài liệu, đạt khi cả 5 trả lời “không tìm thấy”.\n3. Đầu-cuối: thêm một file hướng dẫn mới vào Project, hỏi về nội dung mới, kiểm câu trả lời trích đúng file mới.\n4. Nghiệm thu: tổ QC 5 người dùng thử 1 tuần với câu hỏi thật, chấm hữu ích/không và ghi thời gian tra cứu.\nBáo cáo kiểm thử: mỗi tiêu chí đạt/không đạt kèm số đo.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Bốn lớp: đơn vị (code), bộ mẫu có đáp án (đầu ra AI), đầu-cuối, nghiệm thu người dùng.",
        "Bộ mẫu 30–100 trường hợp thật; đo theo từng trường; đọc bản ghi sai để tìm nguyên nhân.",
        "Lỗi → test tái hiện trước, sửa sau; /code-review trước merge; test vào CI.",
        "Dữ liệu kiểm thử phải được phép dùng, ẩn thông tin nhạy cảm khi cần.",
        "Báo cáo kiểm thử: tiêu chí → đạt/không đạt → số đo → bằng chứng → lỗi tồn.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Dự án tốt nghiệp của bạn đã xong các mốc chính.",
      tasks: [
        "Xây bộ mẫu ít nhất 30 trường hợp có đáp án; đo theo từng trường và phân tích loại sai.",
        "Viết test cho mọi ngoại lệ trong SPEC; đưa test và bộ đo vào CI (nếu có repo).",
        "Tổ chức nghiệm thu với người dùng thật, viết báo cáo kiểm thử.",
      ],
      deliverable: "Bộ mẫu + kết quả đo + báo cáo kiểm thử có xác nhận của người dùng.",
      checklist: ["Đo theo từng trường, có ngưỡng", "Mọi ngoại lệ trong SPEC có test", "Nghiệm thu với dữ liệu thật"],
    },
  ],
};
