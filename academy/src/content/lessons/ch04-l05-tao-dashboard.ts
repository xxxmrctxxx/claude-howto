import type { Lesson } from "@/lib/types/content";

const DB = "https://support.claude.com/en/articles/17454700-get-started-with-claude-dashboards";
const AR = "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them";

export const lessonTaoDashboard: Lesson = {
  id: "ch04-l05",
  chapterId: "ch04",
  slug: "tao-dashboard",
  title: "Tạo dashboard",
  subtitle: "Claude Dashboards biến câu hỏi về dữ liệu công ty thành bảng điều khiển: hỏi bằng câu hỏi, nêu đúng nguồn dữ liệu, mở câu truy vấn của từng biểu đồ để kiểm tra trước khi tin số.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích Claude Dashboards: nguồn dữ liệu được hỗ trợ, gói có tính năng (beta) và cách Enterprise bật." },
    { id: "o2", text: "Tạo dashboard bằng câu hỏi rõ ràng, nêu đúng bảng hoặc ứng dụng chứa dữ liệu." },
    { id: "o3", text: "Kiểm tra từng biểu đồ qua câu truy vấn SQL và thời điểm làm mới; sửa bằng yêu cầu trong chat." },
    { id: "o4", text: "Thiết kế dashboard gọn, biết giới hạn của tính năng và phương án khi không có kho dữ liệu." },
  ],
  concepts: [
    { id: "dashboards-def", label: "Claude Dashboards" },
    { id: "data-sources", label: "Nguồn dữ liệu" },
    { id: "dash-plans", label: "Gói và cách bật" },
    { id: "question-first", label: "Hỏi bằng câu hỏi" },
    { id: "name-source", label: "Nêu bảng/ứng dụng" },
    { id: "create-paths", label: "Cách tạo" },
    { id: "chart-sql", label: "Câu SQL của từng biểu đồ" },
    { id: "last-refreshed", label: "Thời điểm làm mới" },
    { id: "edit-dashboard", label: "Sửa dashboard" },
    { id: "focused-design", label: "Dashboard gọn" },
    { id: "dash-limits", label: "Giới hạn" },
    { id: "no-warehouse", label: "Khi không có kho dữ liệu" },
  ],
  hints: [
    "Mô tả câu hỏi bạn muốn trả lời, không chỉ mô tả biểu đồ; nêu bảng hoặc ứng dụng chứa dữ liệu.",
    "Mỗi biểu đồ hiện câu SQL và thời điểm làm mới — mở ra kiểm tra.",
    "Dashboards (beta) có trên Pro, Max, Ultra, Team, Enterprise; Enterprise cần chủ sở hữu bật.",
  ],
  sources: [
    { label: "Claude Help Center — Get started with Claude Dashboards", href: DB },
    { label: "Claude Help Center — What are artifacts (mẫu Dashboards, gói)", href: AR },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Theo Help Center, **Claude Dashboards biến câu hỏi về dữ liệu công ty thành dashboard**. Mỗi dashboard là một artifact tạo từ mẫu Dashboards, lưu ở tab Artifacts. Dữ liệu lấy từ **kho dữ liệu** (Amazon Redshift, BigQuery, ClickHouse, Databricks, Snowflake) và **các ứng dụng đã kết nối với Claude** như Salesforce. Tính năng đang **beta** trên gói **Pro, Max, Ultra, Team, Enterprise**; với Enterprise, tính năng **tắt mặc định** cho tới khi chủ sở hữu bật trong *Organization settings > Artifacts*.",
        "**Cách tạo**: hỏi trong chat bằng ngôn ngữ thường (ví dụ “số đăng ký mới mỗi tuần trong 6 tháng qua, chia theo gói”), hoặc chọn *Output* trong ô nhập → *Dashboards*, hoặc chọn mẫu Dashboards ở tab Artifacts. Mẹo của Help Center: **mô tả câu hỏi bạn muốn trả lời, không chỉ mô tả biểu đồ**; nếu dữ liệu nằm ở **bảng hay ứng dụng cụ thể, hãy nêu tên**.",
        "**Kiểm tra trước khi tin số**: Claude **viết một câu truy vấn SQL cho mỗi biểu đồ** và chạy trên nguồn dữ liệu. Mỗi biểu đồ hiện **câu truy vấn** và **thời điểm dữ liệu được làm mới**. Mở câu truy vấn xem Claude có đếm đúng thứ bạn muốn không (ví dụ đơn đã huỷ có bị tính vào doanh thu?). Sai thì nói rõ cần đổi gì; muốn thêm bộ lọc hay đổi sang xem theo tuần thì yêu cầu trong chat.",
        "**Giới hạn**: dashboard **tính vào lượt dùng** của gói; được thiết kế cho **câu hỏi khám phá nhanh** — phân tích sâu nên chuyển sang công cụ khác. Dashboard **riêng tư mặc định**, chia sẻ bằng nút *Share*. Thiết kế **gọn**: ít chỉ số, đúng câu hỏi của người xem. Chưa có kho dữ liệu hay đang dùng gói Free? Có thể nhờ Claude dựng **artifact dashboard từ file CSV** tải lên — khi đó dữ liệu là bản bạn đã tải, muốn số mới phải tải file mới.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Dashboard giống bảng đồng hồ ô tô: chỉ vài kim quan trọng (tốc độ, nhiên liệu, nhiệt độ), mỗi kim nối với một cảm biến cụ thể. Trước khi tin kim xăng, thợ kiểm tra dây nối tới đúng bình xăng — với Claude Dashboards, “dây nối” chính là câu SQL của từng biểu đồ.",
      },
      terms: [
        { term: "Dashboard", definition: "Bảng điều khiển gồm vài biểu đồ/chỉ số trả lời các câu hỏi chính." },
        { term: "Kho dữ liệu", definition: "Hệ thống lưu dữ liệu tập trung của công ty, ví dụ BigQuery, Snowflake." },
        { term: "SQL", definition: "Ngôn ngữ truy vấn dữ liệu; Claude viết một câu cho mỗi biểu đồ." },
        { term: "Làm mới (refresh)", definition: "Thời điểm dữ liệu của biểu đồ được lấy lại từ nguồn." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: một dashboard gọn",
      infographic: {
        kind: "cards",
        cards: [
          { title: "Câu hỏi 1", body: "Đơn hàng mỗi tuần 12 tuần qua tăng hay giảm?", foot: "Đường · SQL + làm mới lúc …", icon: "chart" },
          { title: "Câu hỏi 2", body: "Chi nhánh nào có tỷ lệ đơn huỷ cao nhất tháng này?", foot: "Cột · loại đơn thử nghiệm", icon: "target" },
          { title: "Câu hỏi 3", body: "Top 5 sản phẩm theo doanh thu quý 3?", foot: "Bảng · đơn vị triệu đồng", icon: "list" },
          { title: "Bộ lọc", body: "Chi nhánh, khoảng thời gian.", foot: "Thêm bằng yêu cầu trong chat", icon: "search" },
        ],
      },
      caption: "Ví dụ tự soạn theo mẹo “mô tả câu hỏi” trong bài Get started with Claude Dashboards (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: Claude Dashboards hoạt động thế nào",
      mermaid: `flowchart LR
  Q["Câu hỏi bằng ngôn ngữ thường"] --> C["Claude"]
  C -->|"viết SQL cho mỗi biểu đồ"| W["Kho dữ liệu / ứng dụng kết nối"]
  W -->|"kết quả"| D["Dashboard (artifact)"]
  D --> V["Bạn mở câu SQL + xem thời điểm làm mới"]
  V -->|"đếm sai ý"| C
  V -->|"đúng"| S["Dùng · chia sẻ bằng Share"]`,
      caption: "Mở câu SQL là bước kiểm tra quan trọng nhất.",
      alt: "Sơ đồ: câu hỏi bằng ngôn ngữ thường gửi tới Claude; Claude viết câu SQL cho mỗi biểu đồ và chạy trên kho dữ liệu hoặc ứng dụng kết nối; kết quả thành dashboard dạng artifact. Bạn mở câu SQL và xem thời điểm làm mới; nếu đếm sai ý thì yêu cầu Claude sửa, nếu đúng thì dùng và chia sẻ bằng Share.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu dashboard",
      bad: {
        label: "Mô tả biểu đồ, không có câu hỏi",
        content: "“Làm dashboard bán hàng có 8 biểu đồ cột và tròn cho đẹp.”",
        notes: ["Không biết cần trả lời câu hỏi gì.", "Không biết dữ liệu ở bảng nào.", "Nhiều biểu đồ, ít ý nghĩa."],
      },
      good: {
        label: "Câu hỏi + nguồn + điều kiện",
        content: "“Từ bảng orders trong BigQuery, làm dashboard trả lời: (1) đơn mỗi tuần 12 tuần qua tăng hay giảm; (2) chi nhánh nào có tỷ lệ huỷ cao nhất tháng này. Không tính đơn có trạng thái ‘test’. Thêm bộ lọc chi nhánh.”",
        notes: ["Rõ câu hỏi.", "Rõ bảng nguồn.", "Rõ điều kiện loại trừ — dễ kiểm tra trong SQL."],
      },
      takeaway: "Dashboard tốt bắt đầu bằng câu hỏi, không bằng số biểu đồ.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đối chiếu khẳng định với Help Center",
      sim: {
        kind: "verify",
        sourceTitle: "Trích bài Get started with Claude Dashboards (đối chiếu 03/11/2026)",
        sourceLines: [
          "Claude Dashboards turn questions about your company's data into dashboards.",
          "Data warehouses: Amazon Redshift, BigQuery, ClickHouse, Databricks, and Snowflake; plus other apps connected to Claude, such as Salesforce.",
          "Claude writes a SQL query for each chart. Each chart shows its query and when its data was last refreshed.",
          "Describe the question you want answered, not just the chart. If the data lives in a specific table or app, name it.",
          "Available in beta on Pro, Max, Ultra, Team, and Enterprise plans. On Enterprise, off by default until an owner turns it on.",
          "Dashboards count toward your plan's usage limits and are designed for quick, exploratory questions.",
        ],
        verdicts: [
          { id: "dung", label: "Đúng theo nguồn" },
          { id: "sai", label: "Sai theo nguồn" },
          { id: "khong-noi", label: "Nguồn không nói" },
        ],
        claims: [
          { id: "c1", text: "Có thể xem câu truy vấn mà Claude dùng cho từng biểu đồ.", verdict: "dung", why: "Dòng 3." },
          { id: "c2", text: "Claude Dashboards có trên gói Free.", verdict: "sai", why: "Dòng 5: Pro, Max, Ultra, Team, Enterprise." },
          { id: "c3", text: "Dashboard không tính vào lượt dùng của gói.", verdict: "sai", why: "Dòng 6: có tính vào giới hạn sử dụng." },
          { id: "c4", text: "Nên nêu tên bảng hoặc ứng dụng chứa dữ liệu khi yêu cầu.", verdict: "dung", why: "Dòng 4." },
          { id: "c5", text: "Dashboard tự làm mới mỗi 5 phút.", verdict: "khong-noi", why: "Nguồn chỉ nói mỗi biểu đồ hiện thời điểm làm mới, không nói tần suất." },
          { id: "c6", text: "Trên Enterprise, Dashboards bật sẵn cho mọi người.", verdict: "sai", why: "Dòng 5: tắt mặc định cho tới khi chủ sở hữu bật." },
        ],
        note: "Tính năng đang beta; chi tiết có thể thay đổi.",
      },
      intro: "Xếp mỗi khẳng định: đúng, sai, hay nguồn không nói.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dashboard đầu tiên",
      steps: [
        { title: "Viết 2–3 câu hỏi người xem cần trả lời", detail: "Mỗi câu hỏi sẽ thành một biểu đồ hoặc chỉ số." },
        { title: "Xác định nguồn", detail: "Bảng nào trong kho dữ liệu, hay ứng dụng nào đã kết nối; điều kiện loại trừ (đơn thử, đơn huỷ…)." },
        { title: "Gửi yêu cầu", detail: "Trong chat, hoặc Output → Dashboards, hoặc mẫu ở tab Artifacts.", code: { lang: "text", content: "Từ bảng orders trong BigQuery, làm dashboard trả lời: (1) số đơn mỗi tuần trong 12 tuần qua; (2) tỷ lệ đơn huỷ theo chi nhánh tháng này. Không tính đơn trạng thái “test”. Thêm bộ lọc chi nhánh." } },
        { title: "Mở câu SQL từng biểu đồ", detail: "Kiểm tra bảng, điều kiện lọc, cách đếm; xem thời điểm làm mới." },
        { title: "Sửa bằng chat", detail: "Nói rõ cần đổi gì.", code: { lang: "text", content: "Biểu đồ 2 đang tính cả đơn “test” — thêm điều kiện status != 'test' và chạy lại." } },
        { title: "Chia sẻ khi đã kiểm tra", detail: "Dashboard riêng tư mặc định; dùng Share khi số đã đúng (bài 4.7)." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết yêu cầu tạo dashboard cho tình huống trong dữ liệu mẫu, rồi viết 2 điều bạn sẽ kiểm tra trong câu SQL.",
      sampleData: {
        name: "Tình huống",
        content:
          "Dữ liệu sản xuất nằm ở bảng production_log trong Snowflake (cột ngay, xuong, san_luong, so_loi, trang_thai). Trưởng phòng muốn biết: (1) tỷ lệ lỗi theo xưởng mỗi tuần trong 8 tuần qua; (2) xưởng nào có sản lượng tuần này thấp hơn trung bình 8 tuần. Dòng có trang_thai = 'chay_thu' không được tính.",
      },
      placeholder: "Yêu cầu: …\nKiểm tra SQL: 1) … 2) …",
      rubric: [
        { id: "source", label: "Nêu bảng nguồn", weight: 1, check: { kind: "anyKeyword", keywords: ["production_log", "snowflake"] }, pass: "Có nguồn.", fail: "Nêu bảng production_log trong Snowflake." },
        { id: "questions", label: "Có câu hỏi cần trả lời", weight: 1, check: { kind: "allGroups", groups: [["tỷ lệ lỗi"], ["8 tuần"]] }, pass: "Có câu hỏi.", fail: "Nêu câu hỏi: tỷ lệ lỗi theo xưởng mỗi tuần, 8 tuần qua." },
        { id: "exclude", label: "Loại dòng chạy thử", weight: 1, check: { kind: "anyKeyword", keywords: ["chay_thu", "chạy thử", "không tính", "loại"] }, pass: "Có điều kiện loại trừ.", fail: "Nêu: không tính trang_thai = 'chay_thu'." },
        { id: "sql", label: "Có điểm kiểm tra SQL", weight: 1, check: { kind: "regex", pattern: "kiem tra (sql|cau truy van)[^\\n]*:" }, pass: "Có kiểm tra SQL.", fail: "Thêm “Kiểm tra SQL: …”." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Yêu cầu: Từ bảng production_log trong Snowflake, làm dashboard trả lời: (1) tỷ lệ lỗi (so_loi / san_luong) theo xưởng mỗi tuần trong 8 tuần qua; (2) xưởng nào có sản lượng tuần này thấp hơn trung bình 8 tuần. Không tính các dòng trang_thai = 'chay_thu'. Thêm bộ lọc xưởng.\nKiểm tra SQL: 1) có điều kiện loại trang_thai = 'chay_thu'; 2) tỷ lệ lỗi là tổng so_loi chia tổng san_luong theo tuần, không phải trung bình các tỷ lệ ngày.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Claude Dashboards: câu hỏi về dữ liệu công ty → dashboard (artifact, tab Artifacts).",
        "Nguồn: Redshift, BigQuery, ClickHouse, Databricks, Snowflake và ứng dụng đã kết nối như Salesforce.",
        "Beta trên Pro, Max, Ultra, Team, Enterprise; Enterprise tắt mặc định tới khi chủ sở hữu bật.",
        "Hỏi bằng câu hỏi, nêu bảng/ứng dụng; mỗi biểu đồ có câu SQL và thời điểm làm mới — mở ra kiểm tra.",
        "Tính vào lượt dùng, hợp với khám phá nhanh; không có kho dữ liệu thì dựng artifact dashboard từ CSV (dữ liệu tĩnh).",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một cuộc họp định kỳ hay phải xem số liệu.",
      tasks: [
        "Viết 2–3 câu hỏi cuộc họp luôn cần trả lời.",
        "Có Dashboards: tạo từ nguồn thật và kiểm tra câu SQL từng biểu đồ. Chưa có: dựng artifact dashboard từ file CSV.",
        "Nhờ một người dự họp xem và góp ý: dashboard có trả lời đúng câu hỏi không?",
      ],
      deliverable: "Dashboard + ghi chú kiểm tra SQL (hoặc ghi chú nguồn CSV và ngày dữ liệu).",
      checklist: ["Mỗi biểu đồ trả lời một câu hỏi", "Đã kiểm tra điều kiện lọc", "Ghi rõ thời điểm dữ liệu"],
    },
  ],
};
