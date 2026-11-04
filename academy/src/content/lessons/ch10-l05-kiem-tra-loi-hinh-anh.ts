import type { Lesson } from "@/lib/types/content";

const VI = "https://platform.claude.com/docs/en/build-with-claude/vision";
const UP = "https://support.claude.com/en/articles/8241126-upload-files-to-claude";

export const lessonKiemTraLoiHinhAnh: Lesson = {
  id: "ch10-l05",
  chapterId: "ch10",
  slug: "kiem-tra-loi-hinh-anh",
  title: "Ứng dụng kiểm tra lỗi hình ảnh",
  subtitle: "Dùng khả năng nhìn ảnh của Claude để hỗ trợ kiểm tra ngoại quan: chụp ảnh đúng chuẩn, so với mẫu chuẩn theo tiêu chí rõ — và hiểu giới hạn để con người luôn là người quyết định.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Biết Claude nhận ảnh thế nào: định dạng, kích thước tối đa, số ảnh mỗi tin nhắn, ảnh lớn bị thu nhỏ." },
    { id: "o2", text: "Chụp ảnh đủ chuẩn để kiểm tra: rõ nét, đủ sáng, không xoay, có mẫu chuẩn và thước tham chiếu." },
    { id: "o3", text: "Viết yêu cầu so với mẫu chuẩn theo tiêu chí cụ thể; đòi vị trí, mức chắc chắn và “không xác định được” khi không chắc." },
    { id: "o4", text: "Nắm giới hạn (ảnh kém, toạ độ gần đúng, đếm nhiều vật nhỏ, không đo chính xác) và giữ con người duyệt quyết định." },
  ],
  concepts: [
    { id: "image-formats", label: "Định dạng ảnh" },
    { id: "image-limits", label: "Giới hạn ảnh" },
    { id: "downscale", label: "Ảnh lớn bị thu nhỏ" },
    { id: "photo-quality", label: "Chất lượng ảnh chụp" },
    { id: "reference-sample", label: "Ảnh mẫu chuẩn" },
    { id: "defect-criteria", label: "Tiêu chí lỗi" },
    { id: "location-confidence", label: "Vị trí và mức chắc chắn" },
    { id: "cannot-determine", label: "“Không xác định được”" },
    { id: "accuracy-limit", label: "Giới hạn độ chính xác" },
    { id: "spatial-limit", label: "Vị trí chỉ gần đúng" },
    { id: "counting-limit", label: "Đếm có thể sai" },
    { id: "human-review", label: "Con người quyết định" },
  ],
  hints: [
    "Ảnh rõ, đủ sáng, không xoay; kèm ảnh mẫu chuẩn đã đạt để so.",
    "Tiêu chí lỗi cụ thể: loại lỗi, kích thước ngưỡng, vùng cần xem.",
    "Claude hỗ trợ sàng lọc — người kiểm tra quyết định đạt/không đạt.",
  ],
  sources: [
    { label: "Anthropic — Vision (định dạng, giới hạn ảnh, thu nhỏ ảnh, hướng dẫn chất lượng, Limitations)", href: VI },
    { label: "Claude Help Center — Upload files to Claude (ảnh ≥ 1000 × 1000 px cho kết quả tốt)", href: UP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude **nhìn được ảnh**: bạn tải ảnh lên claude.ai như tải file, hoặc kéo thả. Theo tài liệu Vision của Anthropic: định dạng **JPEG, PNG, GIF, WebP** (ảnh động chỉ lấy khung đầu); mỗi ảnh tối đa **8000 × 8000 px**; trên claude.ai tối đa **20 ảnh mỗi tin nhắn** và **10 MB mỗi ảnh**. Ảnh quá lớn sẽ được **thu nhỏ** trước khi xử lý — chữ nhỏ có thể khó đọc hơn, nên **cắt đúng vùng cần xem** thay vì gửi cả khung hình rộng.",
        "Chất lượng ảnh quyết định kết quả. Chụp **rõ nét**, **đủ sáng**, **không xoay nghiêng**, chữ trên nhãn **đọc được**; tránh nén quá mức (nén JPEG mạnh làm chữ nhoè). Help Center gợi ý ảnh từ khoảng **1000 × 1000 px**. Kèm **ảnh mẫu chuẩn** (sản phẩm đạt) chụp cùng góc và ánh sáng, và **thước tham chiếu** nếu kích thước quan trọng.",
        "Yêu cầu tốt nêu **tiêu chí lỗi cụ thể**: “so ảnh 2 với ảnh mẫu 1; kiểm tra vết xước dài trên 5 mm, móp, bong sơn, nhãn thiếu mã lô; với mỗi điểm nghi lỗi nêu **vị trí** (ví dụ góc trên bên trái), **loại lỗi**, **mức chắc chắn**; chỗ nào ảnh không đủ rõ thì ghi **“không xác định được”**”. Kết quả nên là danh sách để người kiểm tra xem lại, không phải kết luận cuối.",
        "**Giới hạn** theo tài liệu Vision: Claude có thể **sai hoặc bịa** với ảnh kém chất lượng, xoay, hoặc rất nhỏ (dưới 200 px); **vị trí/toạ độ chỉ gần đúng**; **đếm** nhiều vật nhỏ có thể không chính xác; không xác định được ảnh có do AI tạo hay không; không dùng để nhận diện người. Tài liệu nhấn mạnh: luôn xem lại kết quả, nhất là việc quan trọng, và **không dùng cho việc cần độ chính xác tuyệt đối nếu không có con người giám sát**. Vì vậy: Claude **sàng lọc**, người kiểm tra **quyết định**.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Claude giống một trợ lý QC mới, mắt tinh nhưng chưa có thước đo: đặt sản phẩm cạnh mẫu chuẩn dưới đèn tốt thì trợ lý chỉ ra chỗ khả nghi rất nhanh; nhưng việc kết luận “loại bỏ lô hàng” vẫn là của trưởng QC sau khi tự kiểm tra.",
      },
      terms: [
        { term: "Ảnh mẫu chuẩn", definition: "Ảnh sản phẩm đạt, chụp cùng góc và ánh sáng, dùng để so sánh." },
        { term: "Thu nhỏ ảnh", definition: "Ảnh vượt giới hạn độ phân giải được giảm kích thước trước khi Claude xử lý." },
        { term: "Mức chắc chắn", definition: "Claude tự đánh giá độ chắc của từng phát hiện, giúp người kiểm tra ưu tiên xem lại." },
        { term: "Sàng lọc", definition: "Lọc nhanh các trường hợp khả nghi để con người kiểm tra kỹ." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: chụp ảnh kiểm tra đúng chuẩn",
      infographic: {
        kind: "compare",
        columns: [
          { title: "Ảnh khó dùng", tone: "bad", items: ["Mờ, rung tay", "Tối hoặc loá đèn", "Chụp nghiêng, xoay", "Cả khung hình rộng, chi tiết nhỏ xíu", "Nén mạnh, chữ nhoè", "Không có mẫu để so"] },
          { title: "Ảnh dùng được", tone: "good", items: ["Rõ nét, đặt máy cố định", "Đủ sáng, không loá", "Chụp thẳng góc", "Cắt đúng vùng cần xem", "Chữ trên nhãn đọc được", "Kèm ảnh mẫu chuẩn + thước"] },
        ],
      },
      caption: "Theo phần Image quality guidance và Limitations của tài liệu Vision (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: Claude sàng lọc, người quyết định",
      mermaid: `flowchart TD
  A["Chụp ảnh đúng chuẩn + ảnh mẫu chuẩn"] --> B["Yêu cầu: tiêu chí lỗi, vị trí, mức chắc chắn"]
  B --> C["Claude liệt kê điểm nghi lỗi"]
  C --> D{"Có điểm nghi lỗi hoặc “không xác định được”?"}
  D -->|"Có"| E["Người kiểm tra xem trực tiếp sản phẩm"]
  D -->|"Không"| F["Người kiểm tra duyệt nhanh ảnh"]
  E & F --> G["Người kiểm tra kết luận Đạt / Không đạt"]
  G --> H["Ghi kết quả + ảnh vào hồ sơ"]`,
      caption: "Kết luận cuối luôn do người kiểm tra đưa ra.",
      alt: "Lưu đồ: chụp ảnh đúng chuẩn kèm ảnh mẫu chuẩn; yêu cầu Claude theo tiêu chí lỗi, nêu vị trí và mức chắc chắn; Claude liệt kê điểm nghi lỗi. Nếu có điểm nghi lỗi hoặc không xác định được thì người kiểm tra xem trực tiếp sản phẩm; nếu không thì người kiểm tra duyệt nhanh ảnh. Người kiểm tra kết luận đạt hoặc không đạt và ghi kết quả cùng ảnh vào hồ sơ.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: nhờ kiểm tra ảnh sản phẩm",
      bad: {
        label: "Giao quyết định cho Claude",
        content: "(Ảnh chụp xa, hơi tối) “Sản phẩm này có lỗi không? Trả lời Đạt hay Không đạt để tôi xuất hàng.”",
        notes: ["Ảnh kém → dễ sai.", "Không có tiêu chí, không có mẫu.", "Dùng kết quả làm quyết định cuối."],
      },
      good: {
        label: "Sàng lọc theo tiêu chí, người quyết định",
        content: "(Ảnh 1: mẫu chuẩn; ảnh 2: sản phẩm, chụp thẳng, đủ sáng) “So ảnh 2 với mẫu 1. Kiểm tra: vết xước dài hơn 5 mm, móp, bong sơn, nhãn thiếu mã lô. Mỗi điểm nghi lỗi: vị trí, loại, mức chắc chắn. Chỗ ảnh không đủ rõ ghi ‘không xác định được’. Đây là sàng lọc, người kiểm tra sẽ quyết định.”",
        notes: ["Có mẫu và tiêu chí.", "Kết quả có vị trí để xem lại.", "Vai trò rõ ràng."],
      },
      takeaway: "Ảnh tốt + mẫu chuẩn + tiêu chí rõ → sàng lọc hữu ích; quyết định vẫn là của người.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đối chiếu khẳng định với tài liệu Vision",
      sim: {
        kind: "verify",
        sourceTitle: "Trích tài liệu Vision của Anthropic (đối chiếu 03/11/2026)",
        sourceLines: [
          "Claude supports JPEG, PNG, GIF, and WebP images. Animations are unsupported, and only the first frame is used.",
          "The maximum number of images is 20 for each message on claude.ai. The maximum dimensions for each image are 8000x8000 px.",
          "Claude might hallucinate or make mistakes when interpreting low-quality, rotated, or very small images under 200 pixels.",
          "Claude's coordinate and localization outputs are approximate.",
          "Claude can give approximate counts of objects in an image but might not always be precisely accurate, especially with large numbers of small objects.",
          "Do not use Claude for tasks requiring perfect precision or sensitive image analysis without human oversight.",
        ],
        verdicts: [
          { id: "dung", label: "Đúng theo nguồn" },
          { id: "sai", label: "Sai theo nguồn" },
          { id: "khong-noi", label: "Nguồn không nói" },
        ],
        claims: [
          { id: "c1", text: "Claude đếm chính xác tuyệt đối 500 con ốc nhỏ trong một khay.", verdict: "sai", why: "Dòng 5: đếm nhiều vật nhỏ có thể không chính xác." },
          { id: "c2", text: "Ảnh chụp xoay nghiêng, mờ có thể khiến Claude nhận định sai.", verdict: "dung", why: "Dòng 3." },
          { id: "c3", text: "Trên claude.ai có thể gửi 50 ảnh trong một tin nhắn.", verdict: "sai", why: "Dòng 2: tối đa 20 ảnh mỗi tin nhắn." },
          { id: "c4", text: "Vị trí lỗi Claude chỉ ra chỉ là gần đúng.", verdict: "dung", why: "Dòng 4." },
          { id: "c5", text: "Claude đo được độ dày lớp sơn tới micromet từ ảnh điện thoại.", verdict: "khong-noi", why: "Đoạn trích không nói về đo độ dày; và việc cần chính xác tuyệt đối cần người giám sát (dòng 6)." },
          { id: "c6", text: "File GIF động được phân tích đủ mọi khung hình.", verdict: "sai", why: "Dòng 1: chỉ dùng khung đầu tiên." },
        ],
        note: "Giới hạn có thể thay đổi; kiểm tra tài liệu khi cần con số chính xác.",
      },
      intro: "Xếp mỗi khẳng định: đúng, sai, hay nguồn không nói.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: sàng lọc lỗi ngoại quan bằng ảnh",
      steps: [
        { title: "Chuẩn bị điểm chụp", detail: "Đèn cố định, nền trơn, giá giữ điện thoại; chụp thẳng góc; đặt thước tham chiếu nếu cần." },
        { title: "Chụp ảnh mẫu chuẩn", detail: "Sản phẩm đạt, cùng góc và ánh sáng; lưu làm ảnh 1 cho mọi lần so." },
        { title: "Chụp ảnh sản phẩm cần kiểm", detail: "Cắt đúng vùng cần xem; kiểm tra chữ nhãn đọc được; không nén quá mức." },
        { title: "Gửi yêu cầu có tiêu chí", detail: "Ảnh mẫu trước, ảnh kiểm sau.", code: { lang: "text", content: "Ảnh 1 là mẫu chuẩn (đạt). Ảnh 2 là sản phẩm cần kiểm. So ảnh 2 với ảnh 1 theo tiêu chí: vết xước dài hơn 5 mm (dùng thước trong ảnh), móp, bong sơn, nhãn thiếu mã lô. Trả về bảng: vị trí | loại lỗi | mức chắc chắn (cao/trung bình/thấp). Chỗ ảnh không đủ rõ ghi “không xác định được”. Đây là sàng lọc, không phải kết luận." } },
        { title: "Người kiểm tra quyết định", detail: "Xem trực tiếp các điểm nghi lỗi và “không xác định được”; kết luận Đạt/Không đạt; lưu ảnh và kết quả." },
        { title: "Theo dõi độ tin cậy", detail: "Mỗi tuần so kết quả sàng lọc với kết luận của người; ghi lại loại lỗi Claude hay bỏ sót." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết yêu cầu gửi Claude để sàng lọc ảnh trong tình huống dưới đây, và một dòng nói rõ ai quyết định kết quả cuối.",
      sampleData: {
        name: "Tình huống",
        content:
          "Kiểm tra nhãn dán trên thùng hàng trước khi xuất: nhãn phải có mã sản phẩm, mã lô, ngày sản xuất, logo; nhãn không được rách hay nhăn che chữ. Có ảnh mẫu nhãn đúng. Mỗi ca kiểm 15 thùng, chụp bằng điện thoại.",
      },
      placeholder: "Yêu cầu: …\nQuyết định cuối: …",
      rubric: [
        { id: "reference", label: "Dùng ảnh mẫu chuẩn", weight: 1, check: { kind: "anyKeyword", keywords: ["ảnh mẫu", "mẫu chuẩn", "ảnh 1"] }, pass: "Có mẫu chuẩn.", fail: "So với ảnh mẫu nhãn đúng." },
        { id: "criteria", label: "Tiêu chí cụ thể", weight: 1, check: { kind: "allGroups", groups: [["mã lô"], ["ngày sản xuất"], ["rách", "nhăn"]] }, pass: "Có tiêu chí.", fail: "Liệt kê: mã sản phẩm, mã lô, ngày sản xuất, logo, rách/nhăn." },
        { id: "unsure", label: "Không xác định được", weight: 1, check: { kind: "anyKeyword", keywords: ["không xác định được", "không rõ", "mức chắc chắn"] }, pass: "Có xử lý khi không chắc.", fail: "Yêu cầu mức chắc chắn và ghi “không xác định được”." },
        { id: "limit", label: "Giới hạn số ảnh", weight: 1, check: { kind: "anyKeyword", keywords: ["20 ảnh", "chia", "đợt", "15 thùng"] }, pass: "Có tính số ảnh.", fail: "15 ảnh trong một tin nhắn (≤ 20) — hoặc chia đợt." },
        { id: "human", label: "Người quyết định", weight: 1, check: { kind: "regex", pattern: "quyet dinh cuoi\\s*:\\s*[^\\n]*(nguoi|qc|to truong|kiem tra)" }, pass: "Có vai trò người.", fail: "Ghi: người kiểm tra/QC quyết định cuối." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Yêu cầu: Ảnh 1 là mẫu nhãn đúng. Các ảnh 2–16 là nhãn trên 15 thùng của ca (một tin nhắn, dưới 20 ảnh). Với mỗi ảnh, so với ảnh mẫu và kiểm tra: có đủ mã sản phẩm, mã lô, ngày sản xuất, logo; nhãn có rách hay nhăn che chữ không. Trả bảng: số ảnh | thiếu/lỗi gì | vị trí | mức chắc chắn. Chữ không đọc được ghi “không xác định được”. Đây là sàng lọc.\nQuyết định cuối: người kiểm tra QC xem trực tiếp các thùng bị đánh dấu hoặc “không xác định được” và quyết định cho xuất hay không.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Ảnh JPEG/PNG/GIF/WebP, tối đa 8000 × 8000 px; claude.ai tối đa 20 ảnh/tin nhắn, 10 MB/ảnh; ảnh lớn bị thu nhỏ — cắt đúng vùng cần xem.",
        "Ảnh rõ, đủ sáng, thẳng góc, chữ đọc được, không nén quá mức; kèm ảnh mẫu chuẩn và thước.",
        "Yêu cầu: tiêu chí lỗi cụ thể, vị trí, mức chắc chắn, “không xác định được” khi không chắc.",
        "Giới hạn: ảnh kém/xoay/nhỏ dễ sai, vị trí gần đúng, đếm nhiều vật nhỏ có thể sai, không dùng nhận diện người.",
        "Claude sàng lọc, người kiểm tra quyết định; theo dõi độ tin cậy theo thời gian.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một hạng mục kiểm tra ngoại quan đơn giản ở bộ phận bạn (nhãn, vỏ, bao bì).",
      tasks: [
        "Dựng điểm chụp chuẩn và chụp ảnh mẫu.",
        "Chạy thử sàng lọc trên 20 sản phẩm đã biết kết quả (10 đạt, 10 lỗi).",
        "So kết quả với người kiểm tra; ghi tỷ lệ phát hiện đúng và các loại lỗi bị bỏ sót.",
      ],
      deliverable: "Quy trình chụp + yêu cầu mẫu + bảng so sánh 20 sản phẩm (Claude vs người).",
      checklist: ["Có ảnh mẫu chuẩn", "Có mức chắc chắn trong kết quả", "Người kiểm tra quyết định cuối"],
    },
  ],
};
