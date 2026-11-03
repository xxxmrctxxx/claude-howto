import type { Lesson } from "@/lib/types/content";

const UP = "https://support.claude.com/en/articles/8241126-upload-files-to-claude";
const FC = "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude";

export const lessonXuLyPdf: Lesson = {
  id: "ch10-l04",
  chapterId: "ch10",
  slug: "xu-ly-pdf",
  title: "Công cụ xử lý PDF",
  subtitle: "Dùng Claude để trích bảng từ hoá đơn, tóm tắt quy chuẩn dài, so sánh hai phiên bản tài liệu — đưa PDF đúng cách, yêu cầu ghi số trang nguồn, nói “không rõ” thay vì đoán, và kiểm chứng ngẫu nhiên.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Đưa PDF đúng cách theo việc cần: tới 100 trang đọc cả hình; dài hơn tách phần cần; trên 1000 trang chia nhỏ." },
    { id: "o2", text: "Trích dữ liệu có cấu trúc (bảng hoá đơn, biên bản) ra bảng/Excel với cột định nghĩa rõ, ghi “không rõ” thay vì đoán, kèm số trang." },
    { id: "o3", text: "Tóm tắt và so sánh tài liệu dài có trích dẫn trang; kiểm chứng ngẫu nhiên vài mục." },
    { id: "o4", text: "Che thông tin nhạy cảm; với hợp đồng, quy chuẩn an toàn, Claude hỗ trợ đọc chứ không thay người chịu trách nhiệm." },
  ],
  concepts: [
    { id: "pdf-100", label: "PDF tới 100 trang: chữ + hình" },
    { id: "pdf-long", label: "PDF dài: chỉ chữ" },
    { id: "pdf-split", label: "Tách/chia PDF" },
    { id: "extract-table", label: "Trích bảng ra Excel" },
    { id: "column-spec", label: "Định nghĩa cột" },
    { id: "unknown-not-guess", label: "Ghi “không rõ”, không đoán" },
    { id: "page-citation", label: "Ghi số trang nguồn" },
    { id: "summarize-long", label: "Tóm tắt tài liệu dài" },
    { id: "compare-versions", label: "So sánh hai phiên bản" },
    { id: "spot-check", label: "Kiểm chứng ngẫu nhiên" },
    { id: "redact", label: "Che thông tin nhạy cảm" },
    { id: "human-responsible", label: "Người chịu trách nhiệm cuối" },
  ],
  hints: [
    "Cần đọc bảng/biểu đồ dạng ảnh → PDF ≤ 100 trang; tách phần cần nếu file dài.",
    "Yêu cầu mỗi giá trị trích ra kèm số trang (theo trình xem PDF).",
    "Ô không đọc được ghi “không rõ” — đừng để Claude đoán.",
  ],
  sources: [
    { label: "Claude Help Center — Upload files to Claude (PDF ≤ 100 trang chữ + hình; 101–1000 chỉ chữ; số trang theo trình xem)", href: UP },
    { label: "Claude Help Center — Create and edit files with Claude (tạo Excel/PDF kết quả)", href: FC },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Văn phòng và nhà xưởng có rất nhiều PDF: hoá đơn, biên bản kiểm tra, quy chuẩn kỹ thuật, hợp đồng. Nhắc lại cách Claude đọc (bài 2.4): PDF **tới 100 trang** — đọc **cả chữ và phần hình** (bảng dạng ảnh, biểu đồ); **101–1000 trang** — **chỉ chữ**; trên 1000 trang không tải được. PDF quét dài (mỗi trang là một ảnh) vì vậy nên **tách thành các file ≤ 100 trang** chỉ gồm phần cần đọc.",
        "**Trích dữ liệu có cấu trúc** là việc giá trị nhất: từ 12 hoá đơn ra một bảng Excel. Viết rõ **cột cần lấy** (số hoá đơn, ngày, nhà cung cấp, tổng tiền trước thuế, thuế, tổng thanh toán), **định dạng** (ngày dd/mm/yyyy, số không dấu chấm), và hai quy tắc quan trọng: **ô không đọc được ghi “không rõ” — không đoán**, và **mỗi dòng ghi số trang nguồn** (theo trình xem PDF). Kết quả xuất file Excel để kiểm tra.",
        "**Tóm tắt và so sánh**: với quy chuẩn 80 trang, yêu cầu tóm tắt theo mục kèm **số trang** cho từng ý để bạn mở ra kiểm. So sánh **hai phiên bản** (quy trình 2025 và 2026): yêu cầu bảng “điều khoản — bản cũ — bản mới — trang” chỉ liệt kê chỗ **khác nhau**. Sau đó **kiểm chứng ngẫu nhiên** 3–5 mục bằng cách mở đúng trang được dẫn.",
        "**An toàn và trách nhiệm**: che số tài khoản, CCCD, thông tin khách hàng không cần cho câu hỏi. Với hợp đồng, quy chuẩn an toàn, hồ sơ pháp lý — Claude giúp **đọc nhanh và chỉ chỗ cần xem**, còn quyết định và chữ ký vẫn là của **người có trách nhiệm**; luôn đọc lại điều khoản gốc ở những chỗ quan trọng.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Nhờ thư ký tổng hợp chồng hoá đơn: dặn rõ cần chép cột nào, chỗ nào mờ thì ghi “không rõ” chứ đừng đoán, và ghi hoá đơn đó ở trang mấy của tập — để bạn lật lại kiểm vài tờ bất kỳ trước khi nộp kế toán.",
      },
      terms: [
        { term: "PDF quét", definition: "PDF mà mỗi trang là ảnh chụp, chữ không phải văn bản chọn được." },
        { term: "Trích xuất có cấu trúc", definition: "Lấy thông tin từ tài liệu ra bảng với các cột định nghĩa trước." },
        { term: "Trích dẫn trang", definition: "Ghi số trang (theo trình xem PDF) nơi lấy thông tin, để kiểm lại." },
        { term: "Kiểm chứng ngẫu nhiên", definition: "Chọn vài mục bất kỳ, mở tài liệu gốc đối chiếu." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bảng trích từ hoá đơn",
      infographic: {
        kind: "table",
        headers: ["Số HĐ", "Ngày", "Nhà cung cấp", "Tổng thanh toán", "Trang"],
        rows: [
          ["0001245", "02/10/2026", "Cơ khí Minh Phát", "12.540.000", "1"],
          ["0001251", "05/10/2026", "Vật tư Tân Tiến", "không rõ", "3"],
          ["0001263", "09/10/2026", "Cơ khí Minh Phát", "8.910.000", "4"],
        ],
      },
      caption: "Dữ liệu minh hoạ tự tạo. Ô “không rõ” là ô Claude không đọc được — cần mở trang 3 để điền tay.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ chồng PDF đến bảng kiểm tra được",
      mermaid: `flowchart TD
  A["PDF hoá đơn/biên bản"] --> B{"Cần đọc bảng dạng ảnh? File dài?"}
  B -->|"≤ 100 trang"| C["Tải nguyên file"]
  B -->|"Dài hơn"| D["Tách phần cần thành file ≤ 100 trang"]
  C & D --> E["Che thông tin nhạy cảm không cần"]
  E --> F["Yêu cầu: cột rõ, “không rõ” thay vì đoán, số trang nguồn"]
  F --> G["File Excel kết quả"]
  G --> H["Kiểm chứng ngẫu nhiên 3–5 dòng"]
  H --> I["Điền tay các ô “không rõ”"]`,
      caption: "Cột rõ + số trang + “không rõ” = kết quả kiểm tra được.",
      alt: "Lưu đồ: từ PDF hoá đơn hoặc biên bản, xét có cần đọc bảng dạng ảnh và file có dài không; tới 100 trang thì tải nguyên file, dài hơn thì tách phần cần thành file tới 100 trang. Che thông tin nhạy cảm không cần; yêu cầu cột rõ, ghi không rõ thay vì đoán, ghi số trang nguồn; nhận file Excel kết quả; kiểm chứng ngẫu nhiên 3–5 dòng; điền tay các ô không rõ.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: trích hoá đơn",
      bad: {
        label: "Mơ hồ, không kiểm được",
        content: "“Đọc mấy hoá đơn này rồi cho tôi bảng tổng.”",
        notes: ["Không rõ cột nào.", "Ô mờ có thể bị đoán số.", "Không biết dòng nào lấy từ trang nào."],
      },
      good: {
        label: "Cột rõ, không đoán, có trang",
        content: "“Từ hoa-don-thang-10.pdf (12 trang), tạo file Excel: Số HĐ, Ngày (dd/mm/yyyy), Nhà cung cấp, Tiền trước thuế, Thuế, Tổng thanh toán (số, không dấu chấm), Trang. Ô không đọc được ghi “không rõ”, không đoán. Thêm dòng tổng cuối bảng dùng công thức SUM.”",
        notes: ["Cột và định dạng rõ.", "Không bịa số.", "Có trang để kiểm."],
      },
      takeaway: "Kết quả trích xuất phải truy được về trang gốc.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đưa PDF thế nào?",
      sim: {
        kind: "choose",
        options: [
          { id: "whole", label: "Tải nguyên file" },
          { id: "extract", label: "Tách phần cần thành PDF ngắn" },
          { id: "split", label: "Chia thành nhiều file" },
          { id: "export", label: "Xuất phần cần sang PDF từ Word" },
          { id: "batch", label: "Gộp thành một PDF hoặc chia đợt (≤ 20 file/chat)" },
        ],
        scenarios: [
          { id: "s1", text: "Hoá đơn PDF 2 trang, cần trích tổng tiền.", answer: "whole", why: "Ngắn, đọc cả chữ lẫn hình." },
          { id: "s2", text: "Quy chuẩn 850 trang, cần đọc bảng dạng ảnh ở trang 40.", answer: "extract", why: "Trên 100 trang chỉ đọc chữ — tách trang cần." },
          { id: "s3", text: "Hồ sơ dự án 1.400 trang cần tóm tắt từng chương.", answer: "split", why: "Trên 1000 trang không tải được — chia nhỏ." },
          { id: "s4", text: "Báo cáo Word 40 trang có biểu đồ dán vào, cần nhận xét biểu đồ.", answer: "export", why: "File không phải PDF chỉ lấy chữ — xuất phần có biểu đồ sang PDF." },
          { id: "s5", text: "26 hoá đơn, mỗi hoá đơn một file PDF một trang.", answer: "batch", why: "Một chat tối đa 20 file — gộp thành một PDF hoặc chia hai đợt." },
        ],
      },
      intro: "Chọn cách đưa PDF cho Claude theo từng tình huống (giới hạn theo Help Center, 03/11/2026).",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: trích bảng từ PDF",
      steps: [
        { title: "Chuẩn bị file", detail: "Tách phần cần (≤ 100 trang nếu có bảng dạng ảnh); che thông tin nhạy cảm không cần." },
        { title: "Định nghĩa cột và định dạng", detail: "Liệt kê cột, kiểu dữ liệu, định dạng ngày/số." },
        { title: "Gửi yêu cầu trích xuất", detail: "Kèm hai quy tắc: “không rõ” và số trang.", code: { lang: "text", content: "Từ bien-ban-kiem-tra.pdf, tạo file Excel với cột: Ngày kiểm tra (dd/mm/yyyy), Thiết bị, Hạng mục, Kết quả (Đạt/Không đạt), Người kiểm tra, Trang. Ô không đọc được ghi “không rõ”, không đoán. Cuối bảng đếm số hạng mục Không đạt bằng công thức." } },
        { title: "Kiểm chứng ngẫu nhiên", detail: "Chọn 3–5 dòng, mở đúng trang được ghi, so từng ô." },
        { title: "Hoàn thiện", detail: "Điền tay các ô “không rõ”; lưu file kèm tên nguồn và ngày trích." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết yêu cầu so sánh hai phiên bản tài liệu trong dữ liệu mẫu, có định dạng kết quả, số trang, quy tắc khi không chắc, và cách bạn kiểm chứng.",
      sampleData: {
        name: "Hai phiên bản quy trình",
        content:
          "quy-trinh-khoa-may-2025.pdf (24 trang) và quy-trinh-khoa-may-2026.pdf (27 trang).\nTổ trưởng cần biết: những điều gì thay đổi, để đào tạo lại công nhân trước ngày 15/11.",
      },
      placeholder: "So sánh … \nKiểm chứng: …",
      rubric: [
        { id: "table", label: "Định dạng bảng so sánh", weight: 1, check: { kind: "allGroups", groups: [["bảng"], ["bản cũ", "2025"], ["bản mới", "2026"]] }, pass: "Có bảng so sánh.", fail: "Yêu cầu bảng: điều khoản — bản cũ — bản mới." },
        { id: "pages", label: "Có số trang", weight: 1, check: { kind: "anyKeyword", keywords: ["trang"] }, pass: "Có trang.", fail: "Mỗi thay đổi kèm số trang ở cả hai bản." },
        { id: "only-diff", label: "Chỉ chỗ khác nhau", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ liệt kê", "khác nhau", "thay đổi"] }, pass: "Có phạm vi.", fail: "Chỉ liệt kê điểm khác nhau." },
        { id: "unsure", label: "Quy tắc khi không chắc", weight: 1, check: { kind: "anyKeyword", keywords: ["không chắc", "không rõ", "không đoán"] }, pass: "Có quy tắc.", fail: "Ghi “không chắc” thay vì đoán." },
        { id: "verify", label: "Kiểm chứng", weight: 1, check: { kind: "regex", pattern: "kiem chung\\s*:\\s*\\S+" }, pass: "Có kiểm chứng.", fail: "Thêm “Kiểm chứng: …”." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "So sánh quy-trinh-khoa-may-2025.pdf và quy-trinh-khoa-may-2026.pdf. Chỉ liệt kê những điểm khác nhau, dạng bảng: Mục/điều khoản | Bản cũ (2025) | Bản mới (2026) | Trang bản cũ | Trang bản mới | Ảnh hưởng tới công nhân. Chỗ nào không chắc là thay đổi hay chỉ diễn đạt lại thì ghi “không chắc”, không đoán. Cuối bảng tóm tắt 3 điểm cần đào tạo lại trước 15/11.\nKiểm chứng: mở 3 dòng bất kỳ ở đúng trang của cả hai bản để đối chiếu, đặc biệt các bước an toàn.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "PDF ≤ 100 trang: chữ + hình; 101–1000: chỉ chữ; > 1000: chia nhỏ; PDF quét dài nên tách phần cần.",
        "Trích xuất: cột và định dạng rõ, “không rõ” thay vì đoán, số trang nguồn, xuất Excel.",
        "Tóm tắt/so sánh kèm số trang; so sánh chỉ liệt kê chỗ khác nhau.",
        "Kiểm chứng ngẫu nhiên 3–5 mục ở đúng trang.",
        "Che thông tin nhạy cảm; với hợp đồng, quy chuẩn an toàn, người có trách nhiệm quyết định cuối.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một chồng PDF bạn phải chép tay vào Excel hằng tháng.",
      tasks: [
        "Định nghĩa cột, tách/che file nếu cần, nhờ Claude trích ra Excel có số trang.",
        "Kiểm chứng 5 dòng ngẫu nhiên; điền tay ô “không rõ”.",
        "So thời gian với cách chép tay; ghi lại lỗi Claude hay mắc.",
      ],
      deliverable: "File Excel kết quả + biên bản kiểm chứng 5 dòng + ghi chú thời gian.",
      checklist: ["Mỗi dòng có số trang", "Không có giá trị đoán", "Đã kiểm chứng ngẫu nhiên"],
    },
  ],
};
