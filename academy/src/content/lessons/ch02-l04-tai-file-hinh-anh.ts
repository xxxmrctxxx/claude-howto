import type { Lesson } from "@/lib/types/content";

const UP = "https://support.claude.com/en/articles/8241126-upload-files-to-claude";

export const lessonTaiFileHinhAnh: Lesson = {
  id: "ch02-l04",
  chapterId: "ch02",
  slug: "tai-file-hinh-anh",
  title: "Tải file và hình ảnh",
  subtitle: "Đưa tài liệu và ảnh cho Claude đúng cách: loại file được hỗ trợ, giới hạn, Claude đọc PDF và file khác thế nào, và mẹo để kết quả chính xác.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Tải file và ảnh lên bằng nút +, kéo thả, hoặc dán ảnh." },
    { id: "o2", text: "Biết loại file được hỗ trợ và các giới hạn khi tải vào chat." },
    { id: "o3", text: "Hiểu cách Claude đọc: PDF tới 100 trang đọc cả chữ lẫn hình; PDF dài hơn và file không phải PDF chỉ lấy chữ." },
    { id: "o4", text: "Áp dụng mẹo để kết quả chính xác và an toàn: ảnh đủ nét, số trang theo trình xem PDF, chia nhỏ file lớn, che dữ liệu nhạy cảm." },
  ],
  concepts: [
    { id: "upload-methods", label: "Cách tải lên" },
    { id: "doc-types", label: "Loại tài liệu hỗ trợ" },
    { id: "image-types", label: "Loại ảnh hỗ trợ" },
    { id: "xlsx-capability", label: "XLSX cần bật khả năng" },
    { id: "chat-limits", label: "Giới hạn khi tải vào chat" },
    { id: "pdf-visual", label: "PDF tới 100 trang đọc cả hình" },
    { id: "pdf-text-only", label: "PDF 101–1000 trang chỉ đọc chữ" },
    { id: "non-pdf-text", label: "File không phải PDF chỉ lấy chữ" },
    { id: "project-files", label: "File trong Project" },
    { id: "image-quality", label: "Ảnh đủ nét" },
    { id: "page-numbers", label: "Số trang theo trình xem PDF" },
    { id: "sensitive-data", label: "Dữ liệu nhạy cảm" },
  ],
  hints: [
    "Nút + → Add files or photos; hoặc kéo thả; ảnh thì dán được.",
    "PDF tới 100 trang: Claude xem cả hình. Word, Excel, TXT…: chỉ lấy chữ.",
    "Nói số trang theo trình xem PDF, không theo số in trên giấy.",
  ],
  sources: [
    { label: "Claude Help Center — Upload files to Claude (cách tải, loại file, giới hạn, PDF, mẹo)", href: UP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Có ba cách đưa file cho Claude: bấm **nút +** ở góc dưới bên trái ô chat → **Add files or photos**; **kéo thả** file vào cửa sổ chat; hoặc **dán** ảnh đã sao chép. Claude hỗ trợ tài liệu **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON, XLSX** và ảnh **JPEG, PNG, GIF, WebP**. Riêng **XLSX** cần bật *code execution and file creation* trong tài khoản.",
        "Giới hạn khi tải vào **chat** (theo Help Center, 03/11/2026): mỗi file tối đa **500 MB**, tối đa **20 file** mỗi chat, ảnh tối đa **8000 × 8000 px**, PDF tối đa **1000 trang**. File tải vào **Project** có giới hạn khác: tối đa **30 MB** mỗi file, số file không giới hạn nhưng tổng nội dung phải vừa context window (bài 2.5).",
        "Claude **đọc khác nhau tuỳ loại file**: PDF **tới 100 trang** — đọc cả **chữ và phần hình** (biểu đồ, bảng dạng ảnh); PDF **101–1000 trang** — **chỉ đọc chữ**; trên 1000 trang thì không tải được (báo *Uploaded file is too large*). Với **file không phải PDF** (Word, Excel…), Claude **chỉ lấy chữ** — ảnh nhúng bên trong không đọc được. Vì vậy biểu đồ quan trọng nằm trong file Word nên xuất ra PDF ngắn hoặc chụp ảnh riêng.",
        "**Mẹo**: ảnh nên từ **1000 × 1000 px** trở lên cho rõ; khi nhắc trang PDF, dùng **số trang trình xem PDF hiển thị**, không dùng số in trên giấy; file lớn thì **chia nhỏ** thành từng phần. Và trước khi tải, hãy **che hoặc bỏ** thông tin nhạy cảm không cần cho câu hỏi (số CCCD, lương, thông tin khách hàng) — chỉ đưa những gì Claude cần.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Gửi tài liệu cho một chuyên gia đọc hộ: bản PDF mỏng thì họ xem kỹ cả hình; cuốn sách dày thì chỉ kịp đọc chữ; còn file Word bạn gửi thì họ chỉ nhận được phần chữ, hình dán trong đó bị rơi mất. Muốn họ xem biểu đồ, hãy gửi riêng biểu đồ đó.",
      },
      terms: [
        { term: "Định dạng file", definition: "Loại file theo đuôi: .pdf, .docx, .csv, .png…" },
        { term: "Ảnh nhúng", definition: "Hình nằm bên trong file Word/Excel — Claude không đọc được khi tải file đó." },
        { term: "Độ phân giải", definition: "Kích thước ảnh tính bằng điểm ảnh, ví dụ 1000 × 1000 px." },
        { term: "Trình xem PDF", definition: "Phần mềm mở PDF; số trang nó hiển thị có thể khác số in trên giấy." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: loại file và cách Claude đọc",
      infographic: {
        kind: "table",
        headers: ["Loại", "Định dạng", "Claude đọc gì / lưu ý"],
        rows: [
          ["PDF tới 100 trang", ".pdf", "Chữ + phần hình (biểu đồ, bảng ảnh)"],
          ["PDF 101–1000 trang", ".pdf", "Chỉ chữ"],
          ["Tài liệu khác", ".docx .csv .txt .html .odt .rtf .epub .json", "Chỉ chữ; ảnh nhúng không đọc được"],
          ["Bảng tính", ".xlsx", "Cần bật code execution and file creation"],
          ["Ảnh", ".jpeg .png .gif .webp", "Tối đa 8000 × 8000 px; nên ≥ 1000 × 1000 px"],
          ["Giới hạn chat", "—", "500 MB/file, 20 file/chat, PDF ≤ 1000 trang"],
        ],
      },
      caption: "Theo bài Upload files to Claude của Help Center (đối chiếu 03/11/2026). Giới hạn có thể thay đổi.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: chuẩn bị file trước khi tải",
      mermaid: `flowchart TD
  A["File cần đưa cho Claude"] --> B{"Loại file?"}
  B -->|"PDF"| C{"Bao nhiêu trang?"}
  C -->|"≤ 100"| D["Đọc chữ + hình"]
  C -->|"101–1000"| E["Chỉ đọc chữ — cần hình thì tách phần đó ra PDF ngắn"]
  C -->|"> 1000"| F["Không tải được — chia nhỏ"]
  B -->|"Word, Excel, TXT…"| G["Chỉ lấy chữ — biểu đồ quan trọng: xuất PDF hoặc chụp ảnh"]
  B -->|"Ảnh"| H["JPEG/PNG/GIF/WebP, nên ≥ 1000 × 1000 px"]
  D & E & G & H --> I["Che thông tin nhạy cảm rồi mới tải"]`,
      caption: "Chọn định dạng theo điều bạn cần Claude nhìn thấy.",
      alt: "Lưu đồ chuẩn bị file: nếu là PDF thì xét số trang — tới 100 trang Claude đọc chữ và hình; 101 đến 1000 trang chỉ đọc chữ, cần hình thì tách phần đó ra PDF ngắn; trên 1000 trang không tải được, phải chia nhỏ. Nếu là Word, Excel, TXT thì chỉ lấy chữ, biểu đồ quan trọng nên xuất PDF hoặc chụp ảnh. Nếu là ảnh thì dùng JPEG, PNG, GIF, WebP, nên từ 1000 × 1000 px. Cuối cùng che thông tin nhạy cảm rồi mới tải.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: hỏi về biểu đồ trong báo cáo",
      bad: {
        label: "Tải file Word dài, hỏi về hình",
        content: "Tải bao-cao-nam.docx (120 trang, nhiều biểu đồ dán vào) rồi hỏi: “Biểu đồ ở trang 12 cho thấy xu hướng gì?”",
        notes: ["File không phải PDF: Claude chỉ lấy chữ, không thấy biểu đồ.", "“Trang 12” của Word không rõ ràng.", "Claude có thể đoán sai dựa trên chữ xung quanh."],
      },
      good: {
        label: "Tách đúng phần cần xem",
        content: "Xuất trang chứa biểu đồ thành PDF ngắn (vài trang), tải lên và hỏi: “Biểu đồ ở trang 2 của PDF này (theo trình xem PDF) cho thấy xu hướng gì? Nêu 3 điểm, ghi rõ số liệu đọc được.”",
        notes: ["PDF ≤ 100 trang: Claude đọc cả hình.", "Số trang theo trình xem PDF.", "Yêu cầu ghi số liệu để dễ kiểm tra."],
      },
      takeaway: "Muốn Claude thấy hình, đưa hình theo cách Claude đọc được hình.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đối chiếu khẳng định với Help Center",
      sim: {
        kind: "verify",
        sourceTitle: "Trích bài Upload files to Claude (đối chiếu 03/11/2026)",
        sourceLines: [
          "Click the + button in the lower left of the chat box, then select Add files or photos. You can also drag and drop files.",
          "Images: JPEG, PNG, GIF, and WebP. XLSX uploads require enabling code execution and file creation.",
          "Chat uploads: 500MB per file, up to 20 files per chat, images up to 8000x8000 pixels, PDFs up to 1000 pages.",
          "For PDFs of 100 pages or fewer, Claude analyzes both text and visual elements; for 101 to 1000 pages, text only.",
          "For non-PDF documents, Claude extracts text only; embedded images can't be read.",
          "Use the page numbers shown in your PDF viewer, not those printed on the document.",
        ],
        verdicts: [
          { id: "dung", label: "Đúng theo nguồn" },
          { id: "sai", label: "Sai theo nguồn" },
          { id: "khong-noi", label: "Nguồn không nói" },
        ],
        claims: [
          { id: "c1", text: "Có thể kéo thả file vào cửa sổ chat thay vì dùng nút +.", verdict: "dung", why: "Dòng 1." },
          { id: "c2", text: "Claude đọc được biểu đồ dán trong file Word.", verdict: "sai", why: "Dòng 5: file không phải PDF chỉ lấy chữ." },
          { id: "c3", text: "Một PDF 300 trang được Claude xem cả hình lẫn chữ.", verdict: "sai", why: "Dòng 4: 101–1000 trang chỉ đọc chữ." },
          { id: "c4", text: "Một chat nhận tối đa 20 file.", verdict: "dung", why: "Dòng 3." },
          { id: "c5", text: "Claude tự xoá file sau 24 giờ.", verdict: "khong-noi", why: "Đoạn trích không nói về thời gian lưu file." },
          { id: "c6", text: "Khi hỏi về trang PDF, nên dùng số trang in ở chân trang tài liệu.", verdict: "sai", why: "Dòng 6: dùng số trang của trình xem PDF." },
        ],
        note: "Giới hạn có thể thay đổi; kiểm tra Help Center khi cần con số chính xác.",
      },
      intro: "Đọc đoạn trích rồi xếp mỗi khẳng định: đúng, sai, hay nguồn không nói.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tải file và hỏi đúng cách",
      steps: [
        { title: "Chọn đúng định dạng", detail: "Cần Claude xem hình → PDF ngắn (≤ 100 trang) hoặc ảnh. Chỉ cần chữ → định dạng nào cũng được." },
        { title: "Lọc dữ liệu", detail: "Che hoặc xoá thông tin nhạy cảm không cần cho câu hỏi; file quá dài thì tách phần cần." },
        { title: "Tải lên", detail: "Nút + → Add files or photos, kéo thả, hoặc dán ảnh." },
        { title: "Hỏi cụ thể, chỉ rõ vị trí", detail: "Nêu file, trang (theo trình xem PDF), bảng hay biểu đồ nào.", code: { lang: "text", content: "Trong file bao-cao-q3.pdf, bảng ở trang 4 (theo trình xem PDF): tính tỷ lệ lỗi từng công đoạn và chỉ ra công đoạn tăng nhiều nhất so với quý 2." } },
        { title: "Kiểm tra lại", detail: "Đối chiếu vài con số Claude trích ra với file gốc trước khi dùng." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Với mỗi file F1–F5 trong dữ liệu mẫu, viết một dòng: cần chuẩn bị hay tải thế nào để Claude làm được việc.",
      sampleData: {
        name: "5 file cần đưa cho Claude",
        content:
          "F1: bao-cao-quy.docx — 40 trang, 6 biểu đồ quan trọng dán trong file; cần Claude nhận xét các biểu đồ.\nF2: tieu-chuan.pdf — 850 trang; cần đọc sơ đồ ở trang 40.\nF3: anh-loi.png — ảnh chụp màn hình lỗi 600 × 400 px, chữ nhoè.\nF4: doanh-so.xlsx — cần Claude tính tổng theo tháng.\nF5: ho-so-du-an.pdf — 1.200 trang.",
      },
      placeholder: "F1: …\nF2: …\nF3: …\nF4: …\nF5: …",
      rubric: [
        { id: "f1", label: "F1: xuất PDF/chụp biểu đồ", weight: 1, check: { kind: "regex", pattern: "f1[^\\n]*(pdf|chup|anh)" }, pass: "F1 đúng.", fail: "F1: Word chỉ lấy chữ — xuất PDF (≤ 100 trang) hoặc chụp ảnh biểu đồ." },
        { id: "f2", label: "F2: tách phần cần", weight: 1, check: { kind: "regex", pattern: "f2[^\\n]*(tach|chia|cat|100 trang)" }, pass: "F2 đúng.", fail: "F2: >100 trang chỉ đọc chữ — tách trang có sơ đồ ra PDF ngắn." },
        { id: "f3", label: "F3: chụp lại rõ hơn", weight: 1, check: { kind: "regex", pattern: "f3[^\\n]*(1000|chup lai|ro hon|net hon|do phan giai)" }, pass: "F3 đúng.", fail: "F3: chụp lại ảnh rõ, từ 1000 × 1000 px." },
        { id: "f4", label: "F4: bật khả năng cho XLSX", weight: 1, check: { kind: "regex", pattern: "f4[^\\n]*(code execution|file creation|capabilities|bat)" }, pass: "F4 đúng.", fail: "F4: bật code execution and file creation." },
        { id: "f5", label: "F5: chia nhỏ", weight: 1, check: { kind: "regex", pattern: "f5[^\\n]*(chia|tach|1000)" }, pass: "F5 đúng.", fail: "F5: quá 1000 trang — chia thành nhiều phần." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "F1: file Word chỉ được lấy chữ — xuất các trang có biểu đồ ra PDF ngắn hoặc chụp ảnh từng biểu đồ rồi tải lên.\nF2: PDF trên 100 trang chỉ đọc chữ — tách trang 40 (theo trình xem PDF) ra một PDF ngắn để Claude xem được sơ đồ.\nF3: chụp lại màn hình rõ hơn, từ 1000 × 1000 px trở lên.\nF4: bật code execution and file creation trong cài đặt rồi tải file XLSX.\nF5: quá 1000 trang nên không tải được — chia thành nhiều file nhỏ, chỉ tải phần cần.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Tải bằng nút + (Add files or photos), kéo thả, hoặc dán ảnh.",
        "Hỗ trợ PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON, XLSX (cần bật khả năng) và ảnh JPEG/PNG/GIF/WebP.",
        "Chat: 500 MB/file, 20 file/chat, ảnh ≤ 8000 × 8000 px, PDF ≤ 1000 trang. Project: 30 MB/file.",
        "PDF ≤ 100 trang đọc cả hình; 101–1000 trang chỉ chữ; file không phải PDF chỉ lấy chữ.",
        "Ảnh ≥ 1000 × 1000 px, số trang theo trình xem PDF, chia nhỏ file lớn, che dữ liệu nhạy cảm.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một tài liệu thật bạn hay phải đọc (báo cáo, quy trình, bảng số liệu).",
      tasks: [
        "Xác định bạn cần Claude đọc chữ hay cả hình; chọn định dạng phù hợp.",
        "Lọc bỏ thông tin nhạy cảm, tải lên và hỏi một câu chỉ rõ trang/bảng.",
        "Đối chiếu 3 con số Claude trích ra với file gốc.",
      ],
      deliverable: "Ghi chú: File | Định dạng đã dùng | Câu hỏi | 3 con số đã đối chiếu | Kết quả.",
      checklist: ["Đúng định dạng cho việc cần làm", "Đã che dữ liệu nhạy cảm", "Đã kiểm tra số liệu"],
    },
  ],
};
