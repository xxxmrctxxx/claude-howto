import type { Lesson } from "@/lib/types/content";

const SH = "https://support.claude.com/en/articles/9547008-share-artifacts";
const AR = "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them";
const DO = "https://support.claude.com/en/articles/16923645-get-started-with-claude-docs";
const FC = "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude";

export const lessonXuatChiaSe: Lesson = {
  id: "ch04-l07",
  chapterId: "ch04",
  slug: "xuat-chia-se",
  title: "Xuất và chia sẻ kết quả",
  subtitle: "Xuất artifact ra Word, PDF, PowerPoint…, chia sẻ với đúng người và đúng quyền, thu hồi khi xong — và kiểm tra an toàn trước khi bấm Share.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Xuất đúng định dạng cho người nhận: tài liệu, bản trình chiếu, thiết kế, file dữ liệu." },
    { id: "o2", text: "Chia sẻ artifact với phạm vi và quyền phù hợp: chỉ mình bạn, người cụ thể, ai có liên kết, tổ chức; Can view, Commenter, Can edit." },
    { id: "o3", text: "Thu hồi và quản lý quyền: đổi phạm vi, gỡ từng người, Unpublish artifact kiểu cũ, xoá artifact." },
    { id: "o4", text: "Chia sẻ an toàn: rà tệp đính kèm và lưu trữ chung, hiểu người xem dùng kết nối và lượt dùng của chính họ, chỉ mở artifact từ người tin cậy." },
  ],
  concepts: [
    { id: "export-docs", label: "Xuất tài liệu" },
    { id: "export-slides-design", label: "Xuất trình chiếu, thiết kế" },
    { id: "export-files", label: "Tải file, Google Drive" },
    { id: "share-scopes", label: "Phạm vi chia sẻ" },
    { id: "invite-people", label: "Mời người cụ thể" },
    { id: "link-signed-in", label: "Ai có liên kết (cần đăng nhập)" },
    { id: "access-levels", label: "Can view, Commenter, Can edit" },
    { id: "revoke", label: "Thu hồi quyền" },
    { id: "unpublish-legacy", label: "Unpublish artifact kiểu cũ" },
    { id: "team-sharing", label: "Chia sẻ trên Team/Enterprise" },
    { id: "viewer-usage", label: "Lượt dùng và kết nối của người xem" },
    { id: "share-safety", label: "An toàn khi chia sẻ" },
  ],
  hints: [
    "Artifact riêng tư mặc định; bấm Share để chọn ai được mở.",
    "Người không dùng Claude → gửi file xuất (PDF, Word…), không gửi liên kết.",
    "Trước khi chia sẻ: rà tệp đính kèm của chat và dữ liệu lưu trữ chung.",
  ],
  sources: [
    { label: "Claude Help Center — Share artifacts (phạm vi, quyền, thu hồi, Team/Enterprise, an toàn)", href: SH },
    { label: "Claude Help Center — What are artifacts (định dạng xuất)", href: AR },
    { label: "Claude Help Center — Get started with Claude Docs (chia sẻ, xuất Docs)", href: DO },
    { label: "Claude Help Center — Create and edit files (tải file, Google Drive)", href: FC },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Xuất** khi người nhận cần một file: **Docs** xuất **Word, PDF, Markdown** hoặc đưa sang **Google Docs**; **bản trình chiếu** xuất **PowerPoint, PDF** hoặc sang Google Slides; **thiết kế** xuất .zip, PDF, PowerPoint hoặc **HTML độc lập**; hoạt ảnh xuất MP4. File Claude tạo (Excel, Word…) thì **tải về** hoặc **lưu vào Google Drive**. Người nhận **không dùng Claude** (đối tác, cơ quan) → gửi file, không gửi liên kết.",
        "**Chia sẻ**: artifact **riêng tư mặc định**; bấm **Share** để chọn phạm vi: **Only you** (mặc định); **người cụ thể** — mời qua email (beta), họ phải đăng nhập đúng email được mời, lời mời **hết hạn sau 30 ngày** nếu chưa nhận; **Anyone with the link** — ai **đã đăng nhập Claude** và có liên kết đều mở được; **tổ chức** (Team/Enterprise). Với người được mời và tổ chức, chọn quyền: **Can view** (xem và đọc bình luận), **Commenter** (thêm bình luận, tải tệp được cung cấp), **Can edit** (sửa). Lưu ý Claude Docs chỉ có quyền xem và sửa, **không có mức chỉ bình luận**.",
        "**Thu hồi**: mở Share, đặt lại **Only you** (Pro/Max/Ultra) hoặc **Only people invited** (Team/Enterprise); bấm **Remove** để gỡ từng người. Artifact **kiểu cũ** đã publish thì dùng **Unpublish** — **không publish lại được** và **xoá vĩnh viễn** dữ liệu lưu trữ của nó. Xoá artifact thì mọi người được mời đều mất quyền. Trên **Team/Enterprise**, artifact mặc định **chỉ trong tổ chức**; chủ sở hữu quyết định có cho chia sẻ ra ngoài không; mỗi artifact mời tối đa **50 người ngoài**.",
        "**An toàn**: người xem dùng **kết nối ứng dụng của chính họ** và tính năng gọi Claude trừ vào **lượt dùng của chính họ**. **Rà tệp đính kèm** trong chat trước khi chia sẻ artifact (chia sẻ artifact trong chat có thể cho người xem truy cập tệp của chat), kiểm tra **lưu trữ chung** (ai mở cũng thấy). Ngược lại, khi nhận artifact từ người khác: **chỉ mở từ người bạn tin**, coi như file từ người gửi lạ.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Chia sẻ artifact giống đưa chìa khoá phòng họp: chìa “chỉ xem” cho khách, chìa “góp ý” cho trưởng phòng, chìa “toàn quyền” cho người cùng làm. Họp xong thì thu chìa lại. Còn đối tác ở ngoài toà nhà thì gửi họ biên bản (file PDF), không đưa chìa.",
      },
      terms: [
        { term: "Share", definition: "Nút chọn ai được mở artifact và với quyền gì." },
        { term: "Commenter", definition: "Quyền xem, thêm bình luận và tải tệp được cung cấp; không sửa." },
        { term: "Unpublish", definition: "Thu hồi artifact kiểu cũ đã publish; không publish lại được, xoá dữ liệu lưu trữ." },
        { term: "Xuất (export)", definition: "Tạo file Word, PDF, PowerPoint… từ artifact để gửi hoặc lưu." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: phạm vi và quyền chia sẻ",
      infographic: {
        kind: "table",
        headers: ["Phạm vi", "Ai mở được", "Ghi chú"],
        rows: [
          ["Only you", "Chỉ bạn", "Mặc định"],
          ["Người cụ thể (beta)", "Người được mời qua email, đăng nhập đúng email", "Lời mời hết hạn sau 30 ngày; chọn Can view / Commenter / Can edit"],
          ["Anyone with the link", "Ai đã đăng nhập Claude và có liên kết", "Artifact kiểu cũ đã publish xem được không cần tài khoản"],
          ["Tổ chức (Team/Enterprise)", "Người đăng nhập trong tổ chức", "Chia sẻ ra ngoài do chủ sở hữu cho phép"],
        ],
      },
      caption: "Theo bài Share artifacts của Help Center (đối chiếu 03/11/2026). Tên nút có thể khác theo gói và loại artifact.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: xuất hay chia sẻ",
      mermaid: `flowchart TD
  A["Sản phẩm đã nghiệm thu"] --> B{"Người nhận có dùng Claude?"}
  B -->|"Không"| C["Xuất file: PDF, Word, PowerPoint…"]
  B -->|"Có"| D{"Họ cần làm gì?"}
  D -->|"Xem"| E["Can view"]
  D -->|"Góp ý"| F["Commenter"]
  D -->|"Cùng sửa"| G["Can edit"]
  E & F & G --> H["Rà tệp đính kèm + lưu trữ chung → Share"]
  H --> I["Xong việc: thu hồi (Only you / Remove)"]`,
      caption: "Quyền nhỏ nhất đủ dùng; thu hồi khi không còn cần.",
      alt: "Lưu đồ: sản phẩm đã nghiệm thu; nếu người nhận không dùng Claude thì xuất file PDF, Word, PowerPoint. Nếu có dùng Claude thì chọn quyền theo việc họ cần: xem thì Can view, góp ý thì Commenter, cùng sửa thì Can edit. Sau đó rà tệp đính kèm và lưu trữ chung rồi bấm Share; xong việc thì thu hồi bằng Only you hoặc Remove.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: chia sẻ báo cáo cho nhiều bên",
      bad: {
        label: "Một liên kết cho tất cả",
        content: "Bật “Anyone with the link” cho artifact báo cáo (chat gốc có đính kèm bảng lương), gửi liên kết cho đồng nghiệp, trưởng phòng và cả đối tác bên ngoài không dùng Claude.",
        notes: ["Đối tác không đăng nhập Claude thì không mở được.", "Tệp đính kèm nhạy cảm có thể bị lộ.", "Ai cũng cùng một quyền."],
      },
      good: {
        label: "Mỗi bên một cách",
        content: "Rà và bỏ tệp nhạy cảm trước → mời đồng nghiệp “Can edit”, trưởng phòng “Commenter” → xuất PDF gửi đối tác → xong dự án đặt lại “Only you”.",
        notes: ["Đúng quyền cho từng người.", "Người ngoài nhận file.", "Thu hồi khi xong."],
      },
      takeaway: "Quyền nhỏ nhất đủ dùng, đúng kênh cho từng người nhận.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn cách chia sẻ",
      sim: {
        kind: "choose",
        options: [
          { id: "only-you", label: "Giữ Only you" },
          { id: "view", label: "Mời người cụ thể — Can view" },
          { id: "comment", label: "Mời người cụ thể — Commenter" },
          { id: "edit", label: "Mời người cụ thể — Can edit" },
          { id: "org", label: "Chia sẻ trong tổ chức" },
          { id: "export", label: "Xuất file (PDF, Word…)" },
        ],
        scenarios: [
          { id: "s1", text: "Bản nháp chưa nghiệm thu xong.", answer: "only-you", why: "Chưa sẵn sàng thì chưa chia sẻ." },
          { id: "s2", text: "Trưởng phòng cần góp ý từng đoạn nhưng không tự sửa.", answer: "comment", why: "Commenter: xem và bình luận." },
          { id: "s3", text: "Đồng nghiệp cùng soạn quy trình với bạn.", answer: "edit", why: "Can edit: cùng sửa." },
          { id: "s4", text: "Kế toán chỉ cần đọc số liệu cuối tháng.", answer: "view", why: "Can view: chỉ xem." },
          { id: "s5", text: "Công ty dùng gói Team, cả công ty cần xem quy trình an toàn.", answer: "org", why: "Chia sẻ trong tổ chức." },
          { id: "s6", text: "Đối tác bên ngoài không dùng Claude cần báo cáo để lưu hồ sơ.", answer: "export", why: "Người không dùng Claude → gửi file." },
        ],
      },
      intro: "Chọn cách chia sẻ phù hợp cho từng người nhận.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: chia sẻ an toàn",
      steps: [
        { title: "Nghiệm thu xong", detail: "Chỉ chia sẻ khi đã qua 5 nhóm kiểm tra (bài 4.6)." },
        { title: "Rà dữ liệu", detail: "Tệp đính kèm trong chat, dữ liệu lưu trữ chung, thông tin cá nhân." },
        { title: "Chọn kênh theo người nhận", detail: "Dùng Claude → Share với quyền phù hợp; không dùng Claude → xuất file." },
        { title: "Mời đúng người, đúng quyền", detail: "Can view / Commenter / Can edit; nhắc người được mời đăng nhập đúng email, lời mời hết hạn sau 30 ngày." },
        { title: "Ghi chú cho người xem", detail: "Tính năng gọi Claude trừ vào lượt của họ; ứng dụng kết nối dùng tài khoản của họ." },
        { title: "Thu hồi khi xong", detail: "Share → Only you / Only people invited, hoặc Remove từng người; artifact kiểu cũ: Unpublish (không publish lại được)." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Lập kế hoạch chia sẻ cho 4 người nhận R1–R4 trong dữ liệu mẫu (mỗi người một dòng: cách chia sẻ và quyền), thêm một dòng về việc cần rà trước khi chia sẻ.",
      sampleData: {
        name: "Artifact “Quy trình nhận ca” (Claude Docs, công ty dùng gói Pro)",
        content:
          "R1: Tổ trưởng A cùng soạn và chỉnh sửa.\nR2: Quản đốc cần đọc và cho ý kiến, không sửa.\nR3: Phòng an toàn của tập đoàn (không dùng Claude) cần bản lưu hồ sơ.\nR4: 40 công nhân chỉ cần đọc.\nChat gốc có đính kèm danh sách công nhân kèm số điện thoại.",
      },
      placeholder: "R1: …\nR2: …\nR3: …\nR4: …\nRà trước: …",
      rubric: [
        { id: "r1", label: "R1: quyền sửa", weight: 1, check: { kind: "regex", pattern: "r1[^\\n]*(can edit|sua|edit)" }, pass: "R1 đúng.", fail: "R1: mời với quyền sửa (Can edit/editor)." },
        { id: "r2", label: "R2: xem (+ góp ý)", weight: 1, check: { kind: "regex", pattern: "r2[^\\n]*(commenter|binh luan|can view|xem)" }, pass: "R2 đúng.", fail: "R2: quyền xem/bình luận, không sửa." },
        { id: "r3", label: "R3: xuất file", weight: 1, check: { kind: "regex", pattern: "r3[^\\n]*(xuat|pdf|word)" }, pass: "R3 đúng.", fail: "R3: không dùng Claude → xuất PDF/Word." },
        { id: "r4", label: "R4: chỉ xem", weight: 1, check: { kind: "regex", pattern: "r4[^\\n]*(can view|xem|lien ket|pdf|in)" }, pass: "R4 đúng.", fail: "R4: chỉ xem (liên kết cho người có tài khoản) hoặc xuất PDF/in." },
        { id: "check", label: "Rà tệp đính kèm", weight: 1, check: { kind: "regex", pattern: "ra truoc[^\\n]*(dinh kem|so dien thoai|danh sach|nhay cam)" }, pass: "Có rà dữ liệu.", fail: "Rà trước: tệp đính kèm danh sách công nhân và số điện thoại." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "R1: mời tổ trưởng A qua email với quyền sửa (editor / Can edit).\nR2: mời quản đốc với quyền xem (viewer); góp ý gửi qua bình luận nếu cần — Docs không có mức chỉ bình luận.\nR3: xuất PDF (hoặc Word) gửi phòng an toàn tập đoàn để lưu hồ sơ.\nR4: công nhân chỉ cần xem — xuất PDF in dán bảng tin hoặc gửi liên kết chỉ xem cho người có tài khoản Claude.\nRà trước: bỏ tệp đính kèm danh sách công nhân có số điện thoại khỏi phạm vi chia sẻ; kiểm tra tài liệu không chứa thông tin nhạy cảm.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Xuất: Docs → Word/PDF/Markdown/Google Docs; trình chiếu → PowerPoint/PDF/Google Slides; thiết kế → zip/PDF/PowerPoint/HTML; file → tải về/Google Drive.",
        "Share: Only you (mặc định), người cụ thể qua email (beta, hết hạn 30 ngày), ai có liên kết (cần đăng nhập Claude), tổ chức.",
        "Quyền: Can view, Commenter, Can edit (Docs chỉ có xem và sửa).",
        "Thu hồi: Only you / Only people invited, Remove; artifact kiểu cũ: Unpublish (không publish lại, xoá dữ liệu lưu trữ).",
        "An toàn: rà tệp đính kèm và lưu trữ chung; người xem dùng kết nối và lượt của họ; chỉ mở artifact từ người tin cậy.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một artifact đã nghiệm thu ở bài 4.6.",
      tasks: [
        "Liệt kê người nhận, họ có dùng Claude không, họ cần làm gì.",
        "Chia sẻ hoặc xuất file đúng từng người; rà dữ liệu trước.",
        "Đặt lịch nhắc thu hồi quyền khi dự án kết thúc.",
      ],
      deliverable: "Bảng chia sẻ: Người nhận | Dùng Claude? | Kênh | Quyền | Ngày thu hồi.",
      checklist: ["Không có tệp nhạy cảm bị lộ", "Quyền nhỏ nhất đủ dùng", "Có kế hoạch thu hồi"],
    },
  ],
};
