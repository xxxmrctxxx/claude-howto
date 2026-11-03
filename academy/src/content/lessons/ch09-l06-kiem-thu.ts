import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const HK = "https://code.claude.com/docs/en/hooks-guide";

export const lessonKiemThuWebsite: Lesson = {
  id: "ch09-l06",
  chapterId: "ch09",
  slug: "kiem-thu",
  title: "Kiểm thử",
  subtitle: "Kiểm thử cả website trước khi giao: từ tiêu chí chấp nhận ra ca kiểm thử, chia tầng (đơn vị, API, luồng, thủ công), chọn mức ép buộc (prompt, /goal, Stop hook, /code-review) và dùng dữ liệu thử an toàn.",
  level: "advanced",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Lập kế hoạch kiểm thử từ tiêu chí chấp nhận trong SPEC.md: mỗi tiêu chí có ít nhất một ca." },
    { id: "o2", text: "Chia tầng kiểm thử: đơn vị, API, luồng người dùng, thủ công trên thiết bị thật." },
    { id: "o3", text: "Chọn mức ép buộc phép kiểm tra: trong prompt, /goal, Stop hook, /code-review; dùng /verify để chạy app và xem kết quả." },
    { id: "o4", text: "Dùng dữ liệu thử an toàn và giữ test hồi quy cho lỗi đã sửa." },
  ],
  concepts: [
    { id: "criteria-to-tests", label: "Tiêu chí → ca kiểm thử" },
    { id: "unit-tests", label: "Test đơn vị" },
    { id: "api-layer", label: "Test API" },
    { id: "e2e-flow", label: "Test luồng người dùng" },
    { id: "manual-test", label: "Kiểm thử thủ công" },
    { id: "goal-cmd", label: "/goal" },
    { id: "stop-hook", label: "Stop hook" },
    { id: "review-fresh", label: "/code-review" },
    { id: "verify-cmd", label: "/verify" },
    { id: "test-data", label: "Dữ liệu thử an toàn" },
    { id: "regression", label: "Test hồi quy" },
    { id: "test-evidence", label: "Bằng chứng kiểm thử" },
  ],
  hints: [
    "Mỗi tiêu chí chấp nhận trong SPEC.md phải có ít nhất một ca kiểm thử.",
    "Từ mềm tới cứng: dặn trong prompt → /goal → Stop hook (Claude Code ép buộc).",
    "Không dùng dữ liệu thật có thông tin cá nhân làm dữ liệu thử.",
  ],
  sources: [
    { label: "Claude Code — Best practices: Give Claude a check to run (prompt, /goal, Stop hook, /code-review, bằng chứng, /verify)", href: BP },
    { label: "Claude Code — Automate workflows with hooks (Stop hook)", href: HK },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Bài 6.6 dạy cách nhờ Claude viết và chạy test. Bài này nhìn **cả dự án**: trước khi giao website, làm sao biết nó đạt SPEC.md? Bắt đầu từ **tiêu chí chấp nhận**: mỗi tiêu chí phải có **ít nhất một ca kiểm thử**. Tiêu chí nào chưa có ca là chỗ bạn đang “hy vọng” chứ chưa “biết”.",
        "Chia **tầng**: **test đơn vị** cho hàm tính toán, định dạng (nhanh, nhiều); **test API** cho từng đường dẫn và mã lỗi (bài 9.5); **test luồng người dùng** (end-to-end) mô phỏng một người mở web, ghi lỗi, thấy lỗi trong danh sách; và **kiểm thử thủ công** những gì máy khó kiểm: bấm trên điện thoại thật ở xưởng, đeo găng, dùng trình đọc màn hình. Tầng dưới nhiều ca, tầng trên ít ca nhưng quan trọng.",
        "Theo Best practices, có nhiều **mức ép buộc** phép kiểm tra: dặn **trong prompt** (“chạy test, tiếp tục tới khi đạt” — Claude tự quyết khi nào xong); đặt **/goal** (ví dụ “mọi test trong tests/ đạt và lint sạch”) — một model riêng kiểm tra sau mỗi lượt, Claude làm tiếp tới khi đạt; **Stop hook** — Claude Code chạy script mỗi khi Claude định kết thúc lượt và đưa Claude quay lại làm nếu script thoát mã 2; và **/code-review** — người review không viết code, chạy trong subagent mới. Khi Claude báo xong, chạy **/verify** để Claude build, chạy app và xem kết quả — bắt được loại lỗi test bỏ sót.",
        "**Dữ liệu thử** phải an toàn: dùng dữ liệu mẫu tự tạo, **không** sao chép dữ liệu thật có tên, số điện thoại công nhân. Mỗi lỗi đã sửa nên có một **test hồi quy** giữ lại để lỗi không quay về. Cuối cùng, yêu cầu **bằng chứng**: lệnh đã chạy và kết quả, ảnh chụp — “All tests pass” một mình nói rất ít.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Nghiệm thu một chiếc xe: kiểm từng linh kiện (đơn vị), kiểm từng hệ thống phanh, điện (API), chạy thử một vòng đường thật (luồng), và nhờ tài xế thật lái thử trong mưa (thủ công). Lỗi nào từng xảy ra thì thêm vào danh mục kiểm tra cố định (hồi quy).",
      },
      terms: [
        { term: "Test đơn vị", definition: "Kiểm tra một hàm nhỏ với đầu vào và kết quả mong đợi." },
        { term: "Test end-to-end", definition: "Mô phỏng người dùng đi trọn một luồng qua giao diện, API và dữ liệu." },
        { term: "/goal", definition: "Đặt điều kiện hoàn thành; một model riêng kiểm tra sau mỗi lượt và Claude làm tiếp tới khi đạt." },
        { term: "Test hồi quy", definition: "Test giữ lại sau khi sửa một lỗi, để lỗi đó không quay lại." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: mức ép buộc phép kiểm tra",
      infographic: {
        kind: "table",
        headers: ["Cách", "Ai quyết định “xong”", "Hợp khi"],
        rows: [
          ["Dặn trong prompt: “chạy test tới khi đạt”", "Claude tự quyết", "Mọi việc, không cần thiết lập"],
          ["/goal mọi test đạt và lint sạch", "Một model riêng kiểm tra sau mỗi lượt", "Việc dài chạy nền"],
          ["Stop hook chạy typecheck/test", "Claude Code (harness) ép buộc", "Quy tắc không có ngoại lệ"],
          ["/code-review", "Subagent mới không thấy hội thoại", "Góc nhìn độc lập trước khi merge"],
          ["/verify", "Claude chạy app và xem kết quả", "Bắt lỗi test bỏ sót"],
        ],
      },
      caption: "Theo mục Give Claude a check to run trong Best practices (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ SPEC.md đến “sẵn sàng giao”",
      mermaid: `flowchart TD
  A["Tiêu chí chấp nhận trong SPEC.md"] --> B["Ca kiểm thử cho từng tiêu chí"]
  B --> C["Test đơn vị + API + luồng (tự động)"]
  B --> D["Danh sách kiểm thử thủ công"]
  C --> E["Chạy với mức ép buộc phù hợp (/goal, Stop hook)"]
  E --> F{"Đạt hết?"}
  F -->|"Chưa"| G["Sửa + thêm test hồi quy"]
  G --> E
  F -->|"Đạt"| H["/verify + /code-review"]
  D --> I["Thử trên điện thoại thật"]
  H & I --> J["Sẵn sàng giao"]`,
      caption: "Tự động cho thứ máy kiểm được; thủ công cho thứ cần con người.",
      alt: "Lưu đồ: từ tiêu chí chấp nhận trong SPEC.md ra ca kiểm thử cho từng tiêu chí. Một nhánh là test tự động gồm đơn vị, API, luồng, chạy với mức ép buộc phù hợp như /goal hoặc Stop hook; chưa đạt thì sửa và thêm test hồi quy rồi chạy lại; đạt thì chạy /verify và /code-review. Nhánh kia là danh sách kiểm thử thủ công, thử trên điện thoại thật. Cả hai xong thì sẵn sàng giao.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: “xong chưa?”",
      bad: {
        label: "Tin lời báo",
        content: "Claude: “Đã hoàn thành, mọi thứ hoạt động tốt.” → Bạn gửi link cho cả xưởng dùng.",
        notes: ["Không biết tiêu chí nào đã kiểm.", "Không có bằng chứng.", "Chưa ai thử trên điện thoại thật."],
      },
      good: {
        label: "Đối chiếu tiêu chí + bằng chứng",
        content: "“Lập bảng: mỗi tiêu chí trong @SPEC.md → ca kiểm thử → tầng → đạt/chưa, kèm lệnh và kết quả. Tiêu chí nào chưa có ca thì viết thêm.” → /verify → /code-review → bạn và một tổ trưởng thử trên điện thoại ở xưởng.",
        notes: ["Mỗi tiêu chí có ca.", "Có bằng chứng.", "Có kiểm thử thủ công với người dùng thật."],
      },
      takeaway: "“Xong” nghĩa là mọi tiêu chí trong SPEC.md có bằng chứng đạt.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xếp ca kiểm thử vào đúng tầng",
      sim: {
        kind: "classify",
        bins: [
          { id: "unit", label: "Test đơn vị" },
          { id: "api", label: "Test API" },
          { id: "e2e", label: "Test luồng (end-to-end)" },
          { id: "manual", label: "Kiểm thử thủ công" },
        ],
        items: [
          { id: "i1", text: "Hàm tính tỷ lệ lỗi trả 0 khi sản lượng bằng 0.", bin: "unit", why: "Một hàm, đầu vào/ra rõ." },
          { id: "i2", text: "POST /api/loi thiếu công đoạn trả 400.", bin: "api", why: "Một đường dẫn, một mã lỗi." },
          { id: "i3", text: "Công nhân mở web, ghi lỗi, thấy lỗi ở đầu danh sách.", bin: "e2e", why: "Trọn một luồng qua giao diện và API." },
          { id: "i4", text: "Tổ trưởng đeo găng bấm nút Lưu trên điện thoại ở xưởng.", bin: "manual", why: "Điều kiện thật, máy khó mô phỏng." },
          { id: "i5", text: "DELETE /api/loi/:id bởi công nhân trả 403.", bin: "api", why: "Phân quyền ở API." },
          { id: "i6", text: "Hàm định dạng ngày ra dd/mm/yyyy.", bin: "unit", why: "Một hàm nhỏ." },
          { id: "i7", text: "Dùng trình đọc màn hình đi hết màn hình Ghi lỗi.", bin: "manual", why: "Cần con người đánh giá trải nghiệm." },
          { id: "i8", text: "Tổ trưởng đăng nhập, mở Thống kê tuần, số khớp dữ liệu mẫu.", bin: "e2e", why: "Luồng đầy đủ với dữ liệu mẫu." },
        ],
      },
      intro: "Mỗi ca kiểm thử thuộc một tầng. Xếp đúng tầng để biết dùng công cụ nào.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: kiểm thử trước khi giao",
      steps: [
        { title: "Bảng tiêu chí → ca kiểm thử", detail: "Tìm tiêu chí chưa có ca.", code: { lang: "text", content: "Lập bảng từ @SPEC.md: Tiêu chí | Ca kiểm thử | Tầng (đơn vị/API/luồng/thủ công) | Đã có test chưa. Viết thêm test cho các tiêu chí tự động hoá được mà chưa có." } },
        { title: "Chạy với điều kiện hoàn thành", detail: "Cho việc dài, đặt mục tiêu rõ.", code: { lang: "text", content: "/goal mọi test trong tests/ đạt và npm run lint sạch" } },
        { title: "Sửa lỗi kèm test hồi quy", detail: "Lỗi nào sửa xong cũng có một test giữ lại." },
        { title: "Chạy app và xem kết quả", detail: "Bắt lỗi test bỏ sót.", code: { lang: "text", content: "/verify" } },
        { title: "Review độc lập", detail: "Subagent mới so với SPEC.md.", code: { lang: "text", content: "/code-review" } },
        { title: "Kiểm thử thủ công", detail: "Bạn và một người dùng thật thử trên điện thoại ở xưởng; ghi lại vấn đề." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Với 4 tiêu chí chấp nhận trong dữ liệu mẫu, viết mỗi tiêu chí một dòng: ca kiểm thử cụ thể và tầng (đơn vị / API / luồng / thủ công).",
      sampleData: {
        name: "Tiêu chí chấp nhận (SPEC.md)",
        content:
          "T1: Bấm Lưu khi thiếu công đoạn thì báo lỗi và không lưu.\nT2: Thống kê tuần hiện đúng số lỗi theo công đoạn.\nT3: Chỉ tổ trưởng được xoá lỗi.\nT4: Nút Lưu bấm được dễ dàng trên điện thoại ở xưởng.",
      },
      placeholder: "T1: … — tầng: …\nT2: …\nT3: …\nT4: …",
      rubric: [
        { id: "t1", label: "T1 có ca và tầng", weight: 1, check: { kind: "regex", pattern: "t1[^\\n]*(400|bao loi|khong luu)[^\\n]*(api|luong|don vi)" }, pass: "T1 đúng.", fail: "T1: gửi thiếu công đoạn → 400/không lưu — tầng API (và luồng)." },
        { id: "t2", label: "T2 có dữ liệu mẫu", weight: 1, check: { kind: "regex", pattern: "t2[^\\n]*(du lieu mau|khop|\\d+)" }, pass: "T2 đúng.", fail: "T2: dữ liệu mẫu có đáp án, so số hiển thị." },
        { id: "t3", label: "T3 có 403", weight: 1, check: { kind: "regex", pattern: "t3[^\\n]*403" }, pass: "T3 đúng.", fail: "T3: công nhân gọi xoá → 403 (tầng API)." },
        { id: "t4", label: "T4 thủ công", weight: 1, check: { kind: "regex", pattern: "t4[^\\n]*thu cong" }, pass: "T4 đúng.", fail: "T4: kiểm thử thủ công trên điện thoại thật." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "T1: gửi POST /api/loi thiếu công đoạn → 400 và không lưu; thêm ca luồng bấm Lưu thấy báo lỗi dưới ô — tầng API và luồng.\nT2: tạo dữ liệu mẫu 7 lỗi (Quấn dây 3, Lắp ráp vỏ 4), mở Thống kê tuần, số hiển thị khớp 3 và 4 — tầng luồng (kèm test đơn vị cho hàm đếm).\nT3: công nhân gọi DELETE /api/loi/:id → 403; tổ trưởng → 204 — tầng API.\nT4: tổ trưởng đeo găng bấm Lưu trên điện thoại ở xưởng 5 lần — kiểm thử thủ công.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Mỗi tiêu chí chấp nhận trong SPEC.md có ít nhất một ca kiểm thử.",
        "Tầng: đơn vị (nhiều, nhanh), API, luồng người dùng, thủ công trên thiết bị thật.",
        "Mức ép buộc: prompt → /goal → Stop hook; góc nhìn độc lập: /code-review; chạy app xem kết quả: /verify.",
        "Dữ liệu thử tự tạo, không dùng dữ liệu cá nhân thật; mỗi lỗi đã sửa có test hồi quy.",
        "“Xong” = mọi tiêu chí có bằng chứng đạt.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Dự án của bạn sau bài 9.5.",
      tasks: [
        "Lập bảng tiêu chí → ca kiểm thử → tầng; bổ sung test còn thiếu.",
        "Chạy /verify và /code-review; sửa và thêm test hồi quy.",
        "Kiểm thử thủ công với một người dùng thật; ghi lại vấn đề.",
      ],
      deliverable: "Bảng kiểm thử đã điền + kết quả test + biên bản kiểm thử thủ công.",
      checklist: ["Không tiêu chí nào thiếu ca", "Dữ liệu thử không có thông tin cá nhân thật", "Có kiểm thử với người dùng thật"],
    },
  ],
};
