import type { Lesson } from "@/lib/types/content";

const AR = "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them";
const KB = "https://support.claude.com/en/articles/17457950-use-artifacts-with-a-keyboard-or-screen-reader";
const PB = "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices";

export const lessonTaoWebsite: Lesson = {
  id: "ch04-l02",
  chapterId: "ch04",
  slug: "tao-website",
  title: "Tạo website",
  subtitle: "Nhờ Claude dựng một trang web một trang dưới dạng artifact: mô tả mục đích và nội dung thật, yêu cầu dùng tốt trên điện thoại và dễ tiếp cận, rồi kiểm tra trước khi đưa ai xem.",
  level: "beginner",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Viết yêu cầu tạo trang web một trang: mục đích, người xem, các phần, phong cách." },
    { id: "o2", text: "Cung cấp nội dung thật và chặn việc tự thêm thông tin (số điện thoại, giá, địa chỉ) bằng chỗ trống rõ ràng." },
    { id: "o3", text: "Yêu cầu trang dùng tốt trên điện thoại và dễ tiếp cận: tương phản đủ, chữ đủ lớn, mô tả ảnh, có nút/liên kết để điều hướng bằng bàn phím." },
    { id: "o4", text: "Kiểm tra trang theo checklist, sửa từng điểm và biết bước tiếp theo để chia sẻ." },
  ],
  concepts: [
    { id: "site-purpose", label: "Mục đích và người xem" },
    { id: "site-sections", label: "Các phần của trang" },
    { id: "real-content", label: "Nội dung thật" },
    { id: "placeholders", label: "Chỗ trống thay vì bịa" },
    { id: "site-style", label: "Phong cách" },
    { id: "mobile-friendly", label: "Dùng tốt trên điện thoại" },
    { id: "contrast", label: "Tương phản và cỡ chữ" },
    { id: "alt-text", label: "Mô tả ảnh" },
    { id: "keyboard-nav", label: "Điều hướng bằng bàn phím" },
    { id: "site-checklist", label: "Checklist kiểm tra" },
    { id: "iterate-site", label: "Sửa từng điểm" },
    { id: "site-next-step", label: "Bước tiếp theo: chia sẻ" },
  ],
  hints: [
    "Đưa nội dung thật; chỗ nào chưa có thì yêu cầu để trống kiểu [SỐ ĐIỆN THOẠI].",
    "Nói rõ: “dùng tốt trên điện thoại”, “chữ tối trên nền sáng, cỡ chữ lớn”.",
    "Mở trang, bấm thử từng nút, xem trên khung hẹp trước khi chia sẻ.",
  ],
  sources: [
    { label: "Claude Help Center — What are artifacts (trang web một trang, sửa, Try fixing with Claude)", href: AR },
    { label: "Claude Help Center — Use artifacts with a keyboard or screen reader (giới hạn với trang không có nút/liên kết)", href: KB },
    { label: "Anthropic — Prompting best practices (nói rõ yêu cầu, cung cấp bối cảnh)", href: PB },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Trang web một trang là một trong các loại artifact Claude làm được: trang giới thiệu, trang hướng dẫn, trang sự kiện, biểu mẫu đăng ký. Trang hiện ngay **bên cạnh cuộc trò chuyện** để bạn xem và bấm thử. Kết quả tốt hay không phụ thuộc chủ yếu vào **yêu cầu**: trang để **làm gì**, **cho ai xem**, gồm **những phần nào**, **nội dung** gì, **phong cách** ra sao.",
        "Điều quan trọng nhất: **đưa nội dung thật**. Nếu bạn không đưa số điện thoại, giờ mở cửa, giá…, Claude có thể điền thông tin minh hoạ trông như thật. Hãy dặn rõ: “chỉ dùng thông tin tôi cung cấp; chỗ nào thiếu thì để **chỗ trống** dạng [SỐ ĐIỆN THOẠI]”. Như vậy bạn nhìn là biết chỗ nào cần điền.",
        "Trang sẽ được xem trên **điện thoại** nhiều hơn bạn nghĩ — hãy yêu cầu bố cục dùng tốt ở màn hình hẹp. Yêu cầu luôn cả **dễ tiếp cận**: chữ tối trên nền sáng (tương phản đủ), cỡ chữ đủ lớn, **mô tả cho ảnh**, tiêu đề rõ ràng, và có **nút/liên kết** để điều hướng. Help Center lưu ý: trang web artifact **không có liên kết hay nút nào** sẽ bị phím Tab bỏ qua và phím mũi tên không cuộn được — người dùng bàn phím sẽ khó đọc.",
        "Sau khi có bản đầu, **kiểm tra theo checklist**: nội dung đúng (không có thông tin tự thêm), đủ các phần, bấm thử từng nút và biểu mẫu, xem ở khung hẹp, đọc lại chính tả. Sửa **từng điểm một** bằng cách nhờ Claude trong chat; nếu trang báo lỗi, bấm **Try fixing with Claude** hoặc mô tả lỗi cụ thể. Trang ổn rồi mới chia sẻ (bài 4.7).",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Nhờ thợ in làm tờ rơi: bạn phải đưa đúng số điện thoại, địa chỉ, giá. Nếu chỉ nói “làm tờ rơi cho quán”, thợ sẽ điền số mẫu cho đẹp — in ra 1.000 tờ mới phát hiện thì đã muộn. Luôn duyệt bản in thử trước.",
      },
      terms: [
        { term: "Trang một trang", definition: "Trang web gói gọn trong một trang, cuộn để xem các phần." },
        { term: "Chỗ trống (placeholder)", definition: "Ký hiệu như [SỐ ĐIỆN THOẠI] đánh dấu thông tin bạn sẽ tự điền." },
        { term: "Tương phản", definition: "Độ khác biệt giữa màu chữ và màu nền; đủ cao thì dễ đọc." },
        { term: "Mô tả ảnh (alt text)", definition: "Đoạn chữ mô tả ảnh cho người dùng trình đọc màn hình." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: cấu trúc một yêu cầu tạo trang",
      infographic: {
        kind: "annotated",
        label: "Yêu cầu tạo trang web",
        lines: [
          { text: "Tạo một artifact trang web một trang “Hướng dẫn cho khách tham quan xưởng”.", note: "Loại sản phẩm", tone: "task" },
          { text: "Người xem: khách đối tác, xem trên điện thoại khi tới cổng.", note: "Người xem + thiết bị", tone: "context" },
          { text: "Các phần: Giờ tham quan · Quy định an toàn · Bản đồ khu vực · Liên hệ.", note: "Cấu trúc", tone: "role" },
          { text: "Chỉ dùng thông tin dưới đây; thiếu thì để [CẦN ĐIỀN].", note: "Chặn tự thêm thông tin", tone: "constraints" },
          { text: "Chữ tối trên nền sáng, cỡ chữ lớn, ảnh có mô tả, nút “Gọi bảo vệ” ở đầu trang.", note: "Dễ đọc, dễ tiếp cận", tone: "output" },
        ],
      },
      caption: "Ví dụ tự soạn theo nguyên tắc nói rõ yêu cầu và cung cấp bối cảnh (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ yêu cầu đến trang dùng được",
      mermaid: `flowchart TD
  A["Gom nội dung thật"] --> B["Viết yêu cầu: mục đích, người xem, các phần, phong cách"]
  B --> C["Artifact trang web hiện bên cạnh chat"]
  C --> D{"Checklist: nội dung đúng? đủ phần? nút chạy? xem tốt trên điện thoại?"}
  D -->|"Chưa"| E["Sửa từng điểm trong chat"]
  E --> C
  D -->|"Lỗi hiển thị"| F["Try fixing with Claude / mô tả lỗi"]
  F --> C
  D -->|"Đạt"| G["Điền chỗ trống còn lại → chia sẻ (bài 4.7)"]`,
      caption: "Nội dung thật vào, checklist ra — rồi mới chia sẻ.",
      alt: "Lưu đồ: gom nội dung thật, viết yêu cầu gồm mục đích, người xem, các phần, phong cách; artifact trang web hiện bên cạnh chat; kiểm tra theo checklist nội dung đúng, đủ phần, nút chạy, xem tốt trên điện thoại. Chưa đạt thì sửa từng điểm trong chat; lỗi hiển thị thì Try fixing with Claude hoặc mô tả lỗi; đạt thì điền chỗ trống còn lại rồi chia sẻ.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu trang giới thiệu",
      bad: {
        label: "Thiếu nội dung, thiếu ràng buộc",
        content: "“Làm trang web giới thiệu xưởng cơ khí của tôi cho đẹp.”",
        notes: ["Claude có thể tự điền địa chỉ, số điện thoại, năm thành lập minh hoạ.", "“Cho đẹp” không kiểm tra được.", "Không biết người xem dùng thiết bị gì."],
      },
      good: {
        label: "Nội dung thật + chỗ trống + tiêu chí",
        content: "“Tạo artifact trang web một trang giới thiệu Xưởng cơ khí Minh Phát cho khách hàng doanh nghiệp. Các phần: Năng lực (gia công CNC, hàn, sơn tĩnh điện), Quy trình đặt hàng 4 bước, Liên hệ. Chỉ dùng thông tin này; số điện thoại, địa chỉ để [CẦN ĐIỀN]. Dùng tốt trên điện thoại, chữ tối trên nền sáng, cỡ chữ lớn, có nút ‘Gửi yêu cầu báo giá’.”",
        notes: ["Không có thông tin tự thêm.", "Cấu trúc rõ.", "Tiêu chí kiểm tra được."],
      },
      takeaway: "Trang web tốt bắt đầu từ nội dung thật và tiêu chí rõ.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: duyệt trang nháp trước khi dùng",
      sim: {
        kind: "highlight",
        instruction: "Bạn chỉ đưa: tên xưởng, 3 dịch vụ, 4 bước đặt hàng. Đánh dấu những điểm trên trang nháp cần sửa trước khi chia sẻ.",
        segments: [
          { id: "g1", text: "Tiêu đề: Xưởng cơ khí Minh Phát", target: false },
          { id: "g2", text: "Dịch vụ: gia công CNC · hàn · sơn tĩnh điện", target: false },
          { id: "g3", text: "Hotline: 0901 234 567", target: true, why: "Bạn không cung cấp số này — có thể là số minh hoạ; thay bằng số thật hoặc [CẦN ĐIỀN]." },
          { id: "g4", text: "Ưu đãi: giảm 30% cho đơn đầu tiên!", target: true, why: "Ưu đãi không có trong thông tin bạn đưa." },
          { id: "g5", text: "Quy trình đặt hàng: 4 bước như đã cung cấp", target: false },
          { id: "g6", text: "Phần Liên hệ dùng chữ xám nhạt trên nền trắng, cỡ chữ nhỏ", target: true, why: "Tương phản thấp, khó đọc; yêu cầu chữ tối, cỡ lớn hơn." },
          { id: "g7", text: "Ảnh xưởng không có mô tả", target: true, why: "Thêm mô tả ảnh cho người dùng trình đọc màn hình." },
        ],
      },
      intro: "Trang nháp trông đẹp, nhưng có 4 điểm cần sửa. Tìm chúng.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tạo trang web một trang",
      steps: [
        { title: "Gom nội dung thật", detail: "Tên, dịch vụ, giờ, quy định, thông tin liên hệ — đúng và mới nhất." },
        { title: "Viết yêu cầu đầy đủ", detail: "Loại sản phẩm, người xem, các phần, ràng buộc nội dung, phong cách, thiết bị.", code: { lang: "text", content: "Tạo artifact trang web một trang “Đăng ký khám sức khoẻ định kỳ” cho công nhân. Các phần: Thời gian (12–14/11, 7h30–11h), Địa điểm (nhà ăn tầng 1), Cần mang theo (CCCD, thẻ nhân viên), Biểu mẫu đăng ký (họ tên, tổ, ca). Chỉ dùng thông tin này; thiếu thì để [CẦN ĐIỀN]. Dùng tốt trên điện thoại, chữ lớn, tương phản cao." } },
        { title: "Kiểm tra theo checklist", detail: "Nội dung đúng, không có thông tin tự thêm; đủ phần; bấm thử nút và biểu mẫu; xem ở khung hẹp." },
        { title: "Sửa từng điểm", detail: "Mỗi lần một yêu cầu sửa rõ ràng.", code: { lang: "text", content: "Đổi phần Liên hệ sang chữ đen, cỡ 18px; thêm mô tả cho ảnh nhà ăn: “Lối vào nhà ăn tầng 1, cửa kính bên trái”." } },
        { title: "Điền chỗ trống và chuẩn bị chia sẻ", detail: "Thay mọi [CẦN ĐIỀN] bằng thông tin thật rồi mới chia sẻ (bài 4.7)." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết yêu cầu tạo trang web một trang cho tình huống trong dữ liệu mẫu, dùng đúng thông tin được cho.",
      sampleData: {
        name: "Thông tin trang “Ngày hội an toàn”",
        content:
          "Sự kiện: Ngày hội an toàn lao động 2026, sáng thứ Bảy 22/11, 8h–11h30, tại sân xưởng B.\nHoạt động: thi sơ cứu, trò chơi nhận diện mối nguy, trao thưởng tổ an toàn nhất.\nNgười xem: công nhân, xem trên điện thoại qua mã QR dán ở cổng.\nChưa có: số điện thoại ban tổ chức.",
      },
      placeholder: "Tạo artifact trang web …",
      rubric: [
        { id: "type", label: "Nói rõ trang web/artifact", weight: 1, check: { kind: "anyKeyword", keywords: ["trang web", "artifact", "website"] }, pass: "Có loại sản phẩm.", fail: "Nói rõ: tạo artifact trang web một trang." },
        { id: "facts", label: "Dùng đúng thông tin sự kiện", weight: 1, check: { kind: "allGroups", groups: [["22/11"], ["8h", "11h30"], ["sân xưởng b", "xưởng b"]] }, pass: "Có thông tin thật.", fail: "Đưa ngày 22/11, giờ 8h–11h30, sân xưởng B." },
        { id: "sections", label: "Có các phần", weight: 1, check: { kind: "anyKeyword", keywords: ["các phần", "phần", "mục"] }, pass: "Có cấu trúc.", fail: "Liệt kê các phần của trang." },
        { id: "placeholder", label: "Chỗ trống cho thông tin thiếu", weight: 1, check: { kind: "regex", pattern: "\\[[^\\]]+\\]|khong (tu )?(them|bia)|chi dung thong tin" }, pass: "Có chặn tự thêm thông tin.", fail: "Dặn: chỉ dùng thông tin đã cho; số điện thoại để [CẦN ĐIỀN]." },
        { id: "mobile", label: "Dùng tốt trên điện thoại", weight: 1, check: { kind: "anyKeyword", keywords: ["điện thoại", "màn hình hẹp", "mobile"] }, pass: "Có thiết bị.", fail: "Nêu: xem trên điện thoại." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Tạo artifact trang web một trang “Ngày hội an toàn lao động 2026” cho công nhân, xem trên điện thoại qua mã QR ở cổng. Các phần: Thời gian và địa điểm (thứ Bảy 22/11, 8h–11h30, sân xưởng B); Hoạt động (thi sơ cứu, trò chơi nhận diện mối nguy, trao thưởng tổ an toàn nhất); Liên hệ. Chỉ dùng thông tin này; số điện thoại ban tổ chức để [CẦN ĐIỀN]. Chữ lớn, tối trên nền sáng, nút “Xem bản đồ sân xưởng B” ở đầu trang.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Yêu cầu tốt: loại sản phẩm, mục đích, người xem, các phần, phong cách, thiết bị.",
        "Đưa nội dung thật; dặn “chỉ dùng thông tin đã cho”, thiếu thì để [CẦN ĐIỀN].",
        "Dùng tốt trên điện thoại; tương phản đủ, chữ lớn, mô tả ảnh, có nút/liên kết để điều hướng bằng bàn phím.",
        "Kiểm tra theo checklist: nội dung, đủ phần, nút và biểu mẫu, khung hẹp, chính tả.",
        "Sửa từng điểm; lỗi hiển thị thì Try fixing with Claude; điền đủ chỗ trống rồi mới chia sẻ.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một thông báo hay hướng dẫn mà đồng nghiệp hay hỏi lại (giờ làm, quy trình, sự kiện).",
      tasks: [
        "Gom nội dung thật và viết yêu cầu tạo trang web một trang.",
        "Duyệt bản đầu theo checklist; sửa ít nhất 2 điểm.",
        "Nhờ một đồng nghiệp mở trên điện thoại và góp ý.",
      ],
      deliverable: "Trang web hoàn chỉnh + checklist đã điền + góp ý của đồng nghiệp.",
      checklist: ["Không còn thông tin tự thêm", "Không còn [CẦN ĐIỀN]", "Đã xem trên điện thoại"],
    },
  ],
};
