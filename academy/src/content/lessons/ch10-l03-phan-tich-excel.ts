import type { Lesson } from "@/lib/types/content";

const FC = "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude";
const UP = "https://support.claude.com/en/articles/8241126-upload-files-to-claude";

export const lessonPhanTichExcel: Lesson = {
  id: "ch10-l03",
  chapterId: "ch10",
  slug: "phan-tich-excel",
  title: "Công cụ phân tích Excel",
  subtitle: "Nhờ Claude đọc, phân tích và tạo file Excel đúng cách: chuẩn bị file, “khám” dữ liệu trước, yêu cầu kết quả có công thức để kiểm tra, giữ nguyên file gốc và cảnh giác với file từ nguồn lạ.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chuẩn bị file Excel: bật khả năng tạo/sửa file, bỏ cột nhạy cảm, mô tả cấu trúc sheet." },
    { id: "o2", text: "Nhờ Claude “khám” dữ liệu trước (cột, kiểu, ô trống, giá trị lạ) rồi mới phân tích." },
    { id: "o3", text: "Yêu cầu kết quả kiểm tra được: file mới có công thức, sheet ghi chú cách tính, file gốc giữ nguyên." },
    { id: "o4", text: "Kiểm chứng bằng phép tính tay/hàm Excel và cảnh giác với chỉ thị ẩn trong file từ nguồn lạ." },
  ],
  concepts: [
    { id: "enable-files", label: "Bật tạo/sửa file" },
    { id: "describe-sheets", label: "Mô tả cấu trúc sheet" },
    { id: "remove-sensitive", label: "Bỏ cột nhạy cảm" },
    { id: "profile-data", label: "Khám dữ liệu trước" },
    { id: "formulas-output", label: "Kết quả có công thức" },
    { id: "notes-sheet", label: "Sheet ghi chú cách tính" },
    { id: "keep-original", label: "Giữ nguyên file gốc" },
    { id: "file-limit", label: "Giới hạn 30 MB" },
    { id: "sandbox", label: "Container cô lập" },
    { id: "verify-sumif", label: "Kiểm chứng bằng hàm Excel" },
    { id: "untrusted-files", label: "File từ nguồn lạ" },
    { id: "download-output", label: "Tải về / Google Drive" },
  ],
  hints: [
    "Khả năng: Settings > Capabilities → Code execution and file creation (giao diện mới: Create and edit files).",
    "Xin kết quả là file Excel có công thức để bạn bấm vào ô và xem cách tính.",
    "File từ nguồn lạ có thể chứa chỉ thị ẩn — theo dõi Claude khi xử lý.",
  ],
  sources: [
    { label: "Claude Help Center — Create and edit files with Claude (loại file, 30 MB, bật khả năng, container, an toàn)", href: FC },
    { label: "Claude Help Center — Upload files to Claude (XLSX cần bật khả năng)", href: UP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude có thể **đọc file Excel** và **tạo/sửa file Excel, PowerPoint, Word, PDF** cùng biểu đồ PNG — mỗi file tối đa **30 MB** khi tải lên/tải về trong tính năng này. Cần bật **Code execution and file creation** trong *Settings > Capabilities* (giao diện mới ghi *Create and edit files*; mặc định đang bật). Claude làm việc trong một **container cô lập** — không phải trên máy tính của bạn — rồi trả file để bạn **tải về** hoặc **lưu vào Google Drive**.",
        "**Chuẩn bị file**: bỏ cột nhạy cảm (lương, CCCD, số điện thoại) nếu không cần cho câu hỏi; **mô tả cấu trúc**: sheet nào chứa gì, mỗi dòng là gì, cột nào là ngày/số. Rồi nhờ Claude **“khám” dữ liệu trước**: liệt kê sheet, cột, kiểu dữ liệu, số ô trống, giá trị lạ — **chưa phân tích**. Bước này lộ ra vấn đề (ô gộp, đơn vị lẫn lộn, dòng tổng giữa bảng) trước khi chúng làm sai kết quả.",
        "**Yêu cầu kết quả kiểm tra được**: xin một **file Excel mới** trong đó các ô tổng hợp dùng **công thức** (SUMIFS, AVERAGEIFS…) chứ không chỉ số tĩnh — bạn bấm vào ô là thấy cách tính; thêm **sheet “Ghi chú”** nêu định nghĩa, bộ lọc, các dòng đã loại. **Giữ nguyên file gốc**, mọi thay đổi nằm ở file mới.",
        "**Kiểm chứng**: chọn 2–3 con số, tự tính bằng hàm Excel trên file gốc và so sánh. **An toàn**: Help Center cảnh báo chỉ thị độc hại ẩn trong file hay trang web bên ngoài có thể lừa Claude chạy code không tin cậy hoặc gửi dữ liệu trong context ra ngoài — với file từ nguồn lạ, **theo dõi Claude khi xử lý** và dừng lại nếu thấy truy cập dữ liệu bất thường.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Giao bảng tính cho một kế toán mới: bạn giải thích từng sheet, họ xem qua dữ liệu và hỏi lại chỗ lạ trước khi tính, rồi nộp bảng tổng hợp có công thức để bạn soát — và không bao giờ sửa thẳng vào sổ gốc.",
      },
      terms: [
        { term: "Khám dữ liệu (profiling)", definition: "Xem tổng quan: cột, kiểu, ô trống, giá trị lạ — trước khi phân tích." },
        { term: "Công thức", definition: "Ô tính bằng hàm như SUMIFS; bấm vào thấy cách tính, khác với số gõ tĩnh." },
        { term: "Container cô lập", definition: "Môi trường tách biệt nơi Claude chạy code để xử lý file, không phải máy của bạn." },
        { term: "SUMIFS", definition: "Hàm Excel cộng các ô thoả nhiều điều kiện — tiện để kiểm chứng tổng." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: file kết quả kiểm tra được",
      infographic: {
        kind: "annotated",
        label: "bao-cao-vat-tu-thang-10.xlsx (file mới)",
        lines: [
          { text: "Sheet “Dữ liệu”: bản sao dữ liệu đã làm sạch", note: "File gốc giữ nguyên", tone: "context" },
          { text: "Sheet “Tổng hợp”: =SUMIFS(Dữ liệu!E:E, Dữ liệu!B:B, A2)", note: "Ô dùng công thức, bấm vào là thấy", tone: "task" },
          { text: "Sheet “Biểu đồ”: chi phí theo nhóm vật tư", note: "Có nhãn, đơn vị", tone: "output" },
          { text: "Sheet “Ghi chú”: định nghĩa, bộ lọc, 4 dòng đã loại (ô trống)", note: "Minh bạch cách tính", tone: "constraints" },
        ],
      },
      caption: "Cấu trúc gợi ý của khoá học cho file Excel Claude tạo.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: phân tích Excel cùng Claude",
      mermaid: `flowchart TD
  A["File Excel gốc"] --> B["Bỏ cột nhạy cảm, mô tả cấu trúc"]
  B --> C["Claude khám dữ liệu: cột, kiểu, ô trống, giá trị lạ"]
  C --> D["Bạn quyết định cách xử lý"]
  D --> E["Claude tạo file mới: công thức + sheet Ghi chú"]
  E --> F{"Kiểm chứng 2–3 số bằng hàm Excel"}
  F -->|"Lệch"| C
  F -->|"Khớp"| G["Tải về / lưu Google Drive"]`,
      caption: "File gốc không bị đụng tới; kết quả có công thức để soát.",
      alt: "Lưu đồ: từ file Excel gốc, bỏ cột nhạy cảm và mô tả cấu trúc; Claude khám dữ liệu gồm cột, kiểu, ô trống, giá trị lạ; bạn quyết định cách xử lý; Claude tạo file mới có công thức và sheet Ghi chú; kiểm chứng 2–3 con số bằng hàm Excel — lệch thì quay lại khám dữ liệu, khớp thì tải về hoặc lưu Google Drive.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: nhờ phân tích file chi phí",
      bad: {
        label: "Tính ngay, trả số trong chat",
        content: "“Tính tổng chi phí vật tư theo nhóm từ file này.” → Claude trả 6 con số trong chat.",
        notes: ["Không biết Claude hiểu cột nào là chi phí.", "Dòng tổng giữa bảng có thể bị cộng hai lần.", "Không có gì để soát."],
      },
      good: {
        label: "Khám trước, kết quả có công thức",
        content: "“File vat-tu.xlsx: sheet Nhap, mỗi dòng một lần nhập, cột E là thành tiền (VND). Trước hết liệt kê cột, kiểu, ô trống, dòng tổng/ô gộp — chưa tính. Sau đó tạo file mới có sheet Tổng hợp dùng SUMIFS theo nhóm vật tư và sheet Ghi chú; giữ nguyên file gốc.”",
        notes: ["Cấu trúc được mô tả.", "Lộ vấn đề trước khi tính.", "Kết quả soát được."],
      },
      takeaway: "Khám trước, công thức sau, file gốc không đụng.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đối chiếu khẳng định với Help Center",
      sim: {
        kind: "verify",
        sourceTitle: "Trích bài Create and edit files with Claude (đối chiếu 03/11/2026)",
        sourceLines: [
          "Claude can create Excel (.xlsx), PowerPoint (.pptx), Word (.docx), and PDF files, plus Python scripts and PNG charts.",
          "Each file is capped at 30MB for uploads and downloads.",
          "Go to Settings > Capabilities and toggle “Code execution and file creation”.",
          "Claude works in an isolated container.",
          "Malicious instructions hidden in external files or websites could trick Claude into running untrusted code or sending data from its context to third parties.",
          "Download files directly from the conversation, or save them to Google Drive.",
        ],
        verdicts: [
          { id: "dung", label: "Đúng theo nguồn" },
          { id: "sai", label: "Sai theo nguồn" },
          { id: "khong-noi", label: "Nguồn không nói" },
        ],
        claims: [
          { id: "c1", text: "Claude tạo được file Excel để bạn tải về.", verdict: "dung", why: "Dòng 1." },
          { id: "c2", text: "Trong tính năng tạo/sửa file, mỗi file được tới 100 MB.", verdict: "sai", why: "Dòng 2: 30 MB." },
          { id: "c3", text: "Claude chạy code trực tiếp trên máy tính của bạn.", verdict: "sai", why: "Dòng 4: trong container cô lập." },
          { id: "c4", text: "File từ bên ngoài có thể chứa chỉ thị ẩn khiến Claude làm điều không mong muốn.", verdict: "dung", why: "Dòng 5." },
          { id: "c5", text: "Claude tự gửi file kết quả qua email cho kế toán.", verdict: "khong-noi", why: "Đoạn trích không nói về gửi email." },
          { id: "c6", text: "Có thể lưu file kết quả vào Google Drive.", verdict: "dung", why: "Dòng 6." },
        ],
        note: "Giới hạn có thể thay đổi; kiểm tra Help Center khi cần.",
      },
      intro: "Xếp mỗi khẳng định: đúng, sai, hay nguồn không nói.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: phân tích một file Excel",
      steps: [
        { title: "Chuẩn bị", detail: "Bật khả năng tạo/sửa file; tạo bản sao file, bỏ cột nhạy cảm không cần." },
        { title: "Mô tả và khám dữ liệu", detail: "Chưa phân tích.", code: { lang: "text", content: "File vat-tu.xlsx: sheet Nhap, mỗi dòng một lần nhập vật tư; cột A ngày, B nhóm vật tư, E thành tiền (VND). Liệt kê các sheet, cột, kiểu dữ liệu, số ô trống, giá trị lạ, ô gộp, dòng tổng giữa bảng. Chưa tính gì." } },
        { title: "Quyết định cách xử lý", detail: "Loại dòng tổng, xử lý ô trống, thống nhất đơn vị." },
        { title: "Yêu cầu file kết quả", detail: "Có công thức và ghi chú.", code: { lang: "text", content: "Tạo file mới bao-cao-vat-tu-thang-10.xlsx: sheet Dữ liệu (đã làm sạch), sheet Tổng hợp dùng SUMIFS theo nhóm vật tư và tháng, sheet Biểu đồ (cột, có nhãn và đơn vị), sheet Ghi chú (định nghĩa, các dòng đã loại). Giữ nguyên file gốc." } },
        { title: "Kiểm chứng", detail: "Tự tính 2–3 tổng bằng SUMIFS trên file gốc, so với file kết quả." },
        { title: "Tải về hoặc lưu Drive", detail: "Đặt tên file có tháng và phiên bản." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết hai yêu cầu gửi Claude cho file trong dữ liệu mẫu: (1) khám dữ liệu, (2) tạo file kết quả kiểm tra được. Thêm một dòng về cách bạn kiểm chứng.",
      sampleData: {
        name: "File cham-cong-thang-10.xlsx",
        content:
          "Sheet ChamCong: mỗi dòng một ca làm của một người — Ngày, Mã NV, Tổ, Giờ vào, Giờ ra, Lương giờ.\nCâu hỏi: tổng giờ tăng ca theo tổ trong tháng (vượt 8 giờ/ca).\nCột Lương giờ không cần cho câu hỏi.",
      },
      placeholder: "Yêu cầu 1: …\nYêu cầu 2: …\nKiểm chứng: …",
      rubric: [
        { id: "profile", label: "Yêu cầu khám dữ liệu, chưa tính", weight: 1, check: { kind: "anyKeyword", keywords: ["chưa tính", "liệt kê", "ô trống"] }, pass: "Có bước khám.", fail: "Yêu cầu 1: liệt kê cột, kiểu, ô trống, giá trị lạ — chưa tính." },
        { id: "sensitive", label: "Bỏ cột lương", weight: 1, check: { kind: "anyKeyword", keywords: ["bỏ cột lương", "không dùng lương", "lương giờ"] }, pass: "Có xử lý cột nhạy cảm.", fail: "Bỏ cột Lương giờ (không cần, nhạy cảm)." },
        { id: "formulas", label: "Kết quả có công thức", weight: 1, check: { kind: "anyKeyword", keywords: ["công thức", "sumifs", "file mới"] }, pass: "Có công thức.", fail: "Yêu cầu 2: file mới, ô tổng dùng công thức." },
        { id: "original", label: "Giữ nguyên file gốc", weight: 1, check: { kind: "anyKeyword", keywords: ["giữ nguyên", "file gốc"] }, pass: "Có giữ file gốc.", fail: "Dặn giữ nguyên file gốc." },
        { id: "verify", label: "Cách kiểm chứng", weight: 1, check: { kind: "regex", pattern: "kiem chung\\s*:\\s*\\S+" }, pass: "Có kiểm chứng.", fail: "Thêm “Kiểm chứng: …”." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Yêu cầu 1: File cham-cong-thang-10.xlsx, sheet ChamCong, mỗi dòng một ca của một người. Liệt kê các cột, kiểu dữ liệu, số ô trống, ca qua nửa đêm, giá trị lạ — chưa tính gì. Bỏ cột Lương giờ vì không cần cho câu hỏi.\nYêu cầu 2: Tạo file mới tang-ca-thang-10.xlsx: sheet Dữ liệu (đã làm sạch), sheet Tổng hợp dùng công thức SUMIFS tính tổng giờ tăng ca (phần vượt 8 giờ/ca) theo tổ, sheet Ghi chú nêu cách tính và các dòng đã loại. Giữ nguyên file gốc.\nKiểm chứng: tự tính giờ tăng ca của một tổ nhỏ bằng tay/Excel và so với sheet Tổng hợp.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Claude đọc và tạo/sửa Excel, PowerPoint, Word, PDF (≤ 30 MB/file) trong container cô lập; cần bật Code execution and file creation.",
        "Chuẩn bị: bỏ cột nhạy cảm, mô tả cấu trúc sheet.",
        "Khám dữ liệu trước (cột, kiểu, ô trống, giá trị lạ), quyết định cách xử lý, rồi mới phân tích.",
        "Kết quả: file mới có công thức + sheet Ghi chú; giữ nguyên file gốc; tải về hoặc lưu Google Drive.",
        "Kiểm chứng bằng hàm Excel; theo dõi Claude khi xử lý file từ nguồn lạ.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một bảng tính bạn tổng hợp thủ công mỗi tháng.",
      tasks: [
        "Tạo bản sao, bỏ cột nhạy cảm, nhờ Claude khám dữ liệu.",
        "Yêu cầu file kết quả có công thức và sheet Ghi chú.",
        "Kiểm chứng 3 con số; so thời gian với cách làm thủ công.",
      ],
      deliverable: "File kết quả + 3 con số đã kiểm chứng + ghi chú thời gian tiết kiệm.",
      checklist: ["File gốc giữ nguyên", "Ô tổng dùng công thức", "Đã kiểm chứng"],
    },
  ],
};
