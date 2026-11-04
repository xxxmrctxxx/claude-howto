import type { Lesson } from "@/lib/types/content";

const DB = "https://support.claude.com/en/articles/17454700-get-started-with-claude-dashboards";
const UP = "https://support.claude.com/en/articles/8241126-upload-files-to-claude";
const AR = "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them";

export const lessonDashboardQa: Lesson = {
  id: "ch10-l02",
  chapterId: "ch10",
  slug: "dashboard-qa",
  title: "Dashboard QA",
  subtitle: "Dashboard chất lượng cho xưởng: định nghĩa chỉ số rõ (tỷ lệ lỗi, Pareto, xu hướng), làm sạch dữ liệu trước khi vẽ, đối chiếu số với Excel và lập quy trình cập nhật hằng tuần.",
  level: "intermediate",
  estimatedMinutes: 35,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chọn chỉ số QA có ý nghĩa và định nghĩa công thức rõ ràng." },
    { id: "o2", text: "Làm sạch dữ liệu trước khi vẽ: tên viết khác nhau, định dạng ngày, dòng trùng, ô trống, giá trị vô lý." },
    { id: "o3", text: "Chọn biểu đồ cho QA: xu hướng theo tuần, Pareto loại lỗi, so sánh công đoạn/ca." },
    { id: "o4", text: "Đối chiếu số với Excel và lập quy trình cập nhật hằng tuần." },
  ],
  concepts: [
    { id: "defect-rate", label: "Tỷ lệ lỗi" },
    { id: "kpi-definition", label: "Định nghĩa chỉ số" },
    { id: "count-vs-rate", label: "Số lỗi và tỷ lệ lỗi" },
    { id: "clean-names", label: "Chuẩn hoá tên" },
    { id: "date-format", label: "Định dạng ngày" },
    { id: "duplicates", label: "Dòng trùng" },
    { id: "invalid-values", label: "Giá trị trống/vô lý" },
    { id: "pareto", label: "Biểu đồ Pareto" },
    { id: "trend-week", label: "Xu hướng theo tuần" },
    { id: "cross-check", label: "Đối chiếu với Excel" },
    { id: "weekly-routine", label: "Quy trình cập nhật hằng tuần" },
    { id: "data-source-choice", label: "Nguồn dữ liệu" },
  ],
  hints: [
    "Tỷ lệ lỗi = số lỗi ÷ sản lượng × 100% — so sánh công đoạn bằng tỷ lệ, không bằng số lỗi.",
    "Làm sạch trước khi vẽ: tên công đoạn, định dạng ngày, dòng trùng, ô trống.",
    "Pareto: cột loại lỗi giảm dần + đường % tích luỹ.",
  ],
  sources: [
    { label: "Claude Help Center — Get started with Claude Dashboards (nguồn dữ liệu, SQL mỗi biểu đồ)", href: DB },
    { label: "Claude Help Center — Upload files to Claude (CSV, XLSX)", href: UP },
    { label: "Claude Help Center — What are artifacts (dashboard dạng artifact)", href: AR },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Dashboard QA trả lời ba câu hỏi của giao ban: **chất lượng đang tốt lên hay xấu đi** (xu hướng theo tuần), **lỗi nào chiếm nhiều nhất** (Pareto), **công đoạn/ca nào cần chú ý** (so sánh). Trước khi vẽ, **định nghĩa chỉ số**: ví dụ **tỷ lệ lỗi = số lỗi ÷ sản lượng × 100%**. Công đoạn làm nhiều hàng đương nhiên có nhiều lỗi hơn — so sánh bằng **tỷ lệ**, không bằng **số lỗi**.",
        "**Làm sạch dữ liệu trước**: file ghi tay thường có “Lắp ráp vỏ”, “lap rap vo”, “Lắp Ráp Vỏ” là một; ngày “03/11/2026” và “11/03/2026” dễ hiểu nhầm tháng/ngày; dòng nhập trùng; ô số lỗi trống hoặc số âm. Nhờ Claude **liệt kê vấn đề trước**, bạn quyết định cách xử lý, rồi mới tính — đừng để Claude âm thầm sửa.",
        "**Biểu đồ cho QA**: **đường** cho tỷ lệ lỗi theo tuần; **Pareto** — cột loại lỗi sắp giảm dần kèm đường % tích luỹ, giúp thấy vài loại lỗi chiếm phần lớn; **cột** so sánh tỷ lệ lỗi theo công đoạn hoặc ca. Mỗi biểu đồ có tiêu đề nói ý chính, nhãn trục và đơn vị (bài 4.4).",
        "**Nguồn và cập nhật**: dữ liệu ở file CSV/Excel → artifact dashboard từ file tải lên, mỗi tuần tải file mới (XLSX cần bật khả năng tạo file). Dữ liệu đã nằm trong kho dữ liệu (BigQuery, Snowflake…) và gói Pro trở lên → **Claude Dashboards** (beta), mỗi biểu đồ có câu SQL để kiểm tra (bài 4.5). Dù cách nào, **đối chiếu 2–3 con số với Excel** mỗi lần cập nhật và ghi rõ **ngày dữ liệu** trên dashboard.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Bác sĩ đọc kết quả xét nghiệm: trước khi kết luận, phải chắc mẫu không bị lẫn (làm sạch), đơn vị đo thống nhất (định nghĩa chỉ số), rồi mới nhìn xu hướng qua các lần khám (biểu đồ đường) và chỉ số nào bất thường nhất (Pareto).",
      },
      terms: [
        { term: "Tỷ lệ lỗi", definition: "Số lỗi chia sản lượng, nhân 100% — so sánh được giữa các công đoạn có sản lượng khác nhau." },
        { term: "Biểu đồ Pareto", definition: "Cột các loại lỗi sắp giảm dần kèm đường % tích luỹ." },
        { term: "Làm sạch dữ liệu", definition: "Chuẩn hoá tên, ngày; bỏ dòng trùng; xử lý ô trống và giá trị vô lý trước khi tính." },
        { term: "Ngày dữ liệu", definition: "Thời điểm số liệu được lấy, ghi trên dashboard để tránh hiểu nhầm." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: ba khối của dashboard QA",
      infographic: {
        kind: "cards",
        cards: [
          { title: "Xu hướng", body: "Tỷ lệ lỗi (%) theo tuần, 12 tuần gần nhất.", foot: "Biểu đồ đường", icon: "chart" },
          { title: "Pareto", body: "Loại lỗi sắp giảm dần + % tích luỹ.", foot: "Thấy nhóm lỗi chính", icon: "layers" },
          { title: "So sánh", body: "Tỷ lệ lỗi theo công đoạn và ca tuần này.", foot: "Biểu đồ cột, trục từ 0", icon: "target" },
          { title: "Ghi chú", body: "Ngày dữ liệu, định nghĩa chỉ số, số dòng đã loại khi làm sạch.", foot: "Minh bạch", icon: "file" },
        ],
      },
      caption: "Bố cục gợi ý của khoá học cho dashboard QA xưởng.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ file ghi lỗi đến dashboard đáng tin",
      mermaid: `flowchart TD
  A["File ghi lỗi + sản lượng"] --> B["Claude liệt kê vấn đề dữ liệu"]
  B --> C["Bạn quyết định cách xử lý"]
  C --> D["Làm sạch + ghi số dòng đã sửa/loại"]
  D --> E["Tính chỉ số theo định nghĩa"]
  E --> F["Dashboard: xu hướng · Pareto · so sánh"]
  F --> G{"Đối chiếu 2–3 số với Excel"}
  G -->|"Lệch"| B
  G -->|"Khớp"| H["Ghi ngày dữ liệu → giao ban"]`,
      caption: "Liệt kê vấn đề trước, sửa sau — để biết dashboard dựa trên dữ liệu nào.",
      alt: "Lưu đồ: từ file ghi lỗi và sản lượng, Claude liệt kê vấn đề dữ liệu; bạn quyết định cách xử lý; làm sạch và ghi số dòng đã sửa hoặc loại; tính chỉ số theo định nghĩa; dựng dashboard gồm xu hướng, Pareto, so sánh; đối chiếu 2–3 con số với Excel — lệch thì quay lại kiểm tra dữ liệu, khớp thì ghi ngày dữ liệu và dùng trong giao ban.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: so sánh công đoạn",
      bad: {
        label: "So bằng số lỗi",
        content: "“Lắp ráp vỏ có 120 lỗi, Quấn dây có 40 lỗi — Lắp ráp vỏ kém nhất.”",
        notes: ["Lắp ráp vỏ làm 20.000 sản phẩm, Quấn dây chỉ 2.000.", "Kết luận ngược thực tế.", "Thiếu định nghĩa chỉ số."],
      },
      good: {
        label: "So bằng tỷ lệ",
        content: "“Tỷ lệ lỗi: Lắp ráp vỏ 120 ÷ 20.000 = 0,6%; Quấn dây 40 ÷ 2.000 = 2,0% — Quấn dây cần chú ý hơn.”",
        notes: ["Định nghĩa rõ.", "So sánh công bằng.", "Kết luận đúng."],
      },
      takeaway: "Định nghĩa chỉ số trước, kết luận sau.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: tìm vấn đề trong dữ liệu trước khi vẽ",
      sim: {
        kind: "highlight",
        instruction: "Mỗi dòng là một bản ghi trong file loi-tuan.csv (Ngay, Cong_doan, Loai_loi, So_loi). Đánh dấu những dòng cần xử lý trước khi tính.",
        segments: [
          { id: "g1", text: "2026-11-02, Lắp ráp vỏ, Nứt vỏ, 3", target: false },
          { id: "g2", text: "2026-11-02, lap rap vo, Nứt vỏ, 2", target: true, why: "Tên công đoạn viết khác — chuẩn hoá về “Lắp ráp vỏ”." },
          { id: "g3", text: "11/03/2026, Quấn dây, Đứt dây, 1", target: true, why: "Định dạng ngày khác, dễ nhầm ngày/tháng." },
          { id: "g4", text: "2026-11-03, Quấn dây, Đứt dây, 4", target: false },
          { id: "g5", text: "2026-11-03, Quấn dây, Đứt dây, 4", target: true, why: "Trùng hệt dòng trên — kiểm tra có nhập hai lần không." },
          { id: "g6", text: "2026-11-04, Sơn, Bong sơn, ", target: true, why: "Ô số lỗi trống." },
          { id: "g7", text: "2026-11-04, Sơn, Chảy sơn, -2", target: true, why: "Số lỗi âm — giá trị vô lý." },
        ],
      },
      intro: "Có 5 dòng cần xử lý. Tìm chúng trước khi để Claude tính chỉ số.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dashboard QA hằng tuần",
      steps: [
        { title: "Viết định nghĩa chỉ số", detail: "Ghi vào đầu yêu cầu và trên dashboard.", code: { lang: "text", content: "Tỷ lệ lỗi = tổng So_loi ÷ tổng San_luong × 100%, tính theo tuần (thứ Hai–Chủ nhật) và theo công đoạn." } },
        { title: "Nhờ Claude liệt kê vấn đề dữ liệu", detail: "Chưa sửa gì.", code: { lang: "text", content: "Đọc loi-tuan.csv và san-luong.csv. Liệt kê vấn đề dữ liệu: tên công đoạn viết khác nhau, định dạng ngày lẫn lộn, dòng trùng, ô trống, giá trị âm. Chưa sửa, chỉ báo số dòng và ví dụ." } },
        { title: "Quyết định cách xử lý", detail: "Ví dụ: gộp tên, chuẩn ngày yyyy-mm-dd, loại dòng trùng sau khi hỏi tổ trưởng, loại dòng âm/trống và ghi lại số dòng." },
        { title: "Dựng dashboard", detail: "Ba khối: xu hướng, Pareto, so sánh; kèm bảng tổng hợp và ghi chú.", code: { lang: "text", content: "Tạo artifact dashboard QA: (1) đường tỷ lệ lỗi theo tuần, 12 tuần; (2) Pareto loại lỗi tuần này; (3) cột tỷ lệ lỗi theo công đoạn. Mỗi biểu đồ có tiêu đề nói ý chính, trục từ 0. Ghi ngày dữ liệu, định nghĩa chỉ số và số dòng đã loại. Kèm bảng tổng hợp." } },
        { title: "Đối chiếu", detail: "So 2–3 con số với Excel (SUM, COUNTIF) trước giao ban." },
        { title: "Quy trình hằng tuần", detail: "Ghi các bước trên thành một skill hoặc ghi chú dùng lại mỗi tuần." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết yêu cầu gửi Claude cho dữ liệu trong mẫu: định nghĩa chỉ số, bước liệt kê vấn đề dữ liệu, ba biểu đồ, và yêu cầu đối chiếu.",
      sampleData: {
        name: "Dữ liệu QA",
        content:
          "File loi-6-thang.csv: Ngay, Ca (Sáng/Chiều/Đêm), Cong_doan, Loai_loi, So_loi.\nFile san-luong.csv: Ngay, Ca, Cong_doan, San_luong.\nNgười ghi khác nhau nên tên công đoạn và định dạng ngày không thống nhất.\nGiao ban muốn: xu hướng tỷ lệ lỗi theo tuần, loại lỗi chính, ca nào tỷ lệ lỗi cao.",
      },
      placeholder: "Định nghĩa: …\nBước 1: …\nBiểu đồ: …\nĐối chiếu: …",
      rubric: [
        { id: "def", label: "Định nghĩa tỷ lệ lỗi", weight: 1, check: { kind: "regex", pattern: "ty le loi[^\\n]*(so_loi|so loi)[^\\n]*(san_luong|san luong)" }, pass: "Có định nghĩa.", fail: "Tỷ lệ lỗi = So_loi ÷ San_luong × 100%." },
        { id: "clean", label: "Liệt kê vấn đề dữ liệu trước", weight: 1, check: { kind: "anyKeyword", keywords: ["liệt kê vấn đề", "chưa sửa", "làm sạch"] }, pass: "Có bước làm sạch.", fail: "Yêu cầu liệt kê vấn đề dữ liệu trước khi tính." },
        { id: "charts", label: "Ba biểu đồ", weight: 1, check: { kind: "allGroups", groups: [["đường", "xu hướng"], ["pareto"], ["ca"]] }, pass: "Có biểu đồ.", fail: "Đường theo tuần, Pareto, so sánh theo ca." },
        { id: "check", label: "Đối chiếu", weight: 1, check: { kind: "anyKeyword", keywords: ["đối chiếu", "excel", "bảng tổng hợp"] }, pass: "Có đối chiếu.", fail: "Yêu cầu bảng tổng hợp để đối chiếu với Excel." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Định nghĩa: tỷ lệ lỗi = tổng So_loi ÷ tổng San_luong × 100%, theo tuần và theo ca.\nBước 1: đọc hai file, liệt kê vấn đề dữ liệu (tên công đoạn khác nhau, định dạng ngày lẫn lộn, dòng trùng, ô trống, số âm) — chưa sửa, chỉ báo số dòng và ví dụ.\nBiểu đồ: (1) đường tỷ lệ lỗi theo tuần trong 6 tháng; (2) Pareto loại lỗi 4 tuần gần nhất; (3) cột tỷ lệ lỗi theo ca tuần này, trục từ 0.\nĐối chiếu: kèm bảng tổng hợp theo tuần và ca để tôi so với Excel; ghi ngày dữ liệu và số dòng đã loại.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Định nghĩa chỉ số trước: tỷ lệ lỗi = số lỗi ÷ sản lượng × 100%; so sánh bằng tỷ lệ.",
        "Làm sạch trước khi vẽ: tên, ngày, dòng trùng, ô trống, giá trị vô lý — liệt kê trước, quyết định sau.",
        "Ba khối: xu hướng (đường), Pareto (cột giảm dần + % tích luỹ), so sánh công đoạn/ca (cột).",
        "File CSV/Excel → artifact dashboard; kho dữ liệu + gói trả phí → Claude Dashboards (beta).",
        "Đối chiếu số với Excel, ghi ngày dữ liệu; lập quy trình cập nhật hằng tuần.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Dùng dữ liệu QA thật (đã bỏ thông tin cá nhân) của bộ phận bạn.",
      tasks: [
        "Viết định nghĩa 2–3 chỉ số, nhờ Claude liệt kê vấn đề dữ liệu.",
        "Dựng dashboard ba khối; đối chiếu 3 con số với Excel.",
        "Dùng trong một buổi giao ban, ghi lại câu hỏi người xem đặt ra.",
      ],
      deliverable: "Dashboard + định nghĩa chỉ số + ghi chú làm sạch + 3 con số đã đối chiếu.",
      checklist: ["So sánh bằng tỷ lệ", "Có ghi ngày dữ liệu", "Đã đối chiếu với Excel"],
    },
  ],
};
