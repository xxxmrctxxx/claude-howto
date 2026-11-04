import type { Lesson } from "@/lib/types/content";

const AR = "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them";
const DO = "https://support.claude.com/en/articles/16923645-get-started-with-claude-docs";
const KB = "https://support.claude.com/en/articles/17457950-use-artifacts-with-a-keyboard-or-screen-reader";
const SH = "https://support.claude.com/en/articles/9547008-share-artifacts";

export const lessonChinhSuaKiemTra: Lesson = {
  id: "ch04-l06",
  chapterId: "ch04",
  slug: "chinh-sua-kiem-tra",
  title: "Chỉnh sửa và kiểm tra sản phẩm",
  subtitle: "Chọn đúng cách sửa artifact — nhờ trong chat, sửa trực tiếp, Edit with Claude, bình luận @Claude, phiên bản riêng — và duyệt sản phẩm theo 5 nhóm: nội dung, chức năng, hiển thị, tiếp cận, dữ liệu.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chọn cách sửa phù hợp: nhờ trong chat, sửa trực tiếp trên mẫu, Edit with Claude, bình luận @Claude trong Docs, tạo phiên bản riêng." },
    { id: "o2", text: "Duyệt sản phẩm theo 5 nhóm: nội dung, chức năng, hiển thị, khả năng tiếp cận, dữ liệu và quyền riêng tư." },
    { id: "o3", text: "Kiểm tra thao tác bàn phím với artifact: Tab vào, Escape ra; Return và Shift+Return trong slide, thiết kế." },
    { id: "o4", text: "Quản lý vòng sửa: mỗi lần một thay đổi rõ ràng, kiểm tra lại, giữ bản tốt." },
  ],
  concepts: [
    { id: "edit-in-chat", label: "Nhờ sửa trong chat" },
    { id: "direct-edit", label: "Sửa trực tiếp" },
    { id: "edit-with-claude-sel", label: "Edit with Claude" },
    { id: "comment-claude", label: "Bình luận @Claude" },
    { id: "branch-version", label: "Phiên bản riêng" },
    { id: "check-content", label: "Kiểm tra nội dung" },
    { id: "check-function", label: "Kiểm tra chức năng" },
    { id: "check-display", label: "Kiểm tra hiển thị" },
    { id: "check-a11y", label: "Kiểm tra tiếp cận" },
    { id: "check-data", label: "Kiểm tra dữ liệu" },
    { id: "keyboard-keys", label: "Phím Tab, Escape, Return" },
    { id: "one-change", label: "Mỗi lần một thay đổi" },
  ],
  hints: [
    "Sửa vài chữ → gõ trực tiếp; viết lại một đoạn → Edit with Claude; đổi lớn → nhờ trong chat.",
    "Duyệt theo 5 nhóm: nội dung, chức năng, hiển thị, tiếp cận, dữ liệu.",
    "Tab đi vào artifact, Escape ra lại khung artifact.",
  ],
  sources: [
    { label: "Claude Help Center — What are artifacts (các cách sửa, phiên bản, Try fixing with Claude)", href: AR },
    { label: "Claude Help Center — Get started with Claude Docs (sửa trực tiếp, bình luận @Claude)", href: DO },
    { label: "Claude Help Center — Use artifacts with a keyboard or screen reader", href: KB },
    { label: "Claude Help Center — Share artifacts (lưu trữ chung, rà tệp đính kèm)", href: SH },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Có năm cách sửa artifact, mỗi cách hợp một loại thay đổi. **Nhờ Claude trong chat** — cho thay đổi lớn hoặc nhiều chỗ (“thêm cột Hạn, đổi màu tiêu đề”). **Sửa trực tiếp** — với mẫu Docs, Slides, Design bạn gõ thẳng vào; trong Docs, thay đổi **tự lưu** và hiện ngay với mọi người đang mở. **Edit with Claude** — bôi đen một đoạn trong tài liệu/Markdown rồi mô tả thay đổi. **Bình luận @Claude** (Docs) — chọn đoạn văn, để bình luận và nhắc @Claude; Claude trả lời trong luồng bình luận và giải thích thay đổi. **Phiên bản riêng** — sửa một tin nhắn trước đó để thử hướng khác mà không mất bản cũ.",
        "**Duyệt theo 5 nhóm** trước khi đưa ai dùng: (1) **Nội dung** — số liệu, tên, ngày khớp nguồn; không có thông tin tự thêm; chính tả. (2) **Chức năng** — bấm từng nút, chạy ca kiểm thử. (3) **Hiển thị** — khung hẹp như điện thoại, chữ không tràn. (4) **Khả năng tiếp cận** — tương phản, chữ đủ lớn, mô tả ảnh, dùng được bằng bàn phím. (5) **Dữ liệu và riêng tư** — lưu trữ chung có gì, tệp đính kèm trong chat có gì nhạy cảm không (chia sẻ artifact trong chat có thể kèm quyền xem tệp của chat).",
        "**Thử bằng bàn phím** theo Help Center: **Tab** đi vào artifact, **Escape** ra lại khung artifact (trình đọc màn hình đọc “Artifact panel” và tiêu đề). Trong slide và thiết kế, **Return** đi vào một slide/nhóm/ô chữ, **Shift+Return** lên một cấp; **F6** (hoặc Cmd+F6 / Ctrl+F6) chuyển giữa các vùng soạn thảo. Lưu ý giới hạn: artifact kiểu cũ không có đường Escape ra khỏi nội dung; trang web không có nút/liên kết bị Tab bỏ qua.",
        "**Quản lý vòng sửa**: ghi danh sách lỗi theo 5 nhóm; mỗi lần gửi **một thay đổi rõ ràng** (hoặc danh sách đánh số), kiểm tra lại đúng chỗ đó và những chỗ liên quan; giữ bản tốt bằng phiên bản riêng trước khi thử thay đổi lớn. Lỗi hiển thị/chạy thì bấm **Try fixing with Claude** — không bảo đảm thành công, khi đó mô tả lỗi cụ thể hơn.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Duyệt artifact giống nghiệm thu một căn phòng sửa xong: xem đúng bản vẽ (nội dung), bật thử đèn, vòi nước (chức năng), nhìn từ cửa ra vào (hiển thị), thử với người dùng xe lăn (tiếp cận), và kiểm tra không để quên chìa khoá nhà trong phòng (dữ liệu). Mỗi lỗi ghi một dòng, thợ sửa từng việc.",
      },
      terms: [
        { term: "Nghiệm thu", definition: "Kiểm tra sản phẩm theo tiêu chí trước khi đưa vào dùng." },
        { term: "Edit with Claude", definition: "Bôi đen đoạn văn và mô tả thay đổi để Claude sửa đúng chỗ." },
        { term: "Bình luận @Claude", definition: "Trong Claude Docs, nhắc @Claude trong bình luận để nhờ sửa; Claude trả lời trong luồng." },
        { term: "Khung artifact", definition: "Vùng chứa artifact; phím Escape đưa bạn từ nội dung ra khung này." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: chọn cách sửa",
      infographic: {
        kind: "table",
        headers: ["Thay đổi", "Cách sửa phù hợp"],
        rows: [
          ["Sửa vài chữ, một con số", "Gõ trực tiếp (Docs, Slides, Design)"],
          ["Viết lại một đoạn cho dễ hiểu", "Bôi đen → Edit with Claude"],
          ["Góp ý cần thảo luận trong nhóm", "Bình luận, nhắc @Claude (Docs)"],
          ["Đổi bố cục, thêm tính năng", "Nhờ Claude trong chat"],
          ["Thử hướng khác, giữ bản cũ", "Sửa tin nhắn trước → phiên bản riêng"],
          ["Artifact báo lỗi khi chạy", "Try fixing with Claude / mô tả lỗi"],
        ],
      },
      caption: "Theo các bài Artifacts và Claude Docs của Help Center (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng nghiệm thu",
      mermaid: `flowchart TD
  A["Bản nháp artifact"] --> B["Duyệt 5 nhóm: nội dung · chức năng · hiển thị · tiếp cận · dữ liệu"]
  B --> C{"Có lỗi?"}
  C -->|"Có"| D["Ghi danh sách lỗi theo nhóm"]
  D --> E["Sửa một thay đổi bằng cách phù hợp"]
  E --> F["Kiểm tra lại chỗ đã sửa + chỗ liên quan"]
  F --> C
  C -->|"Không"| G["Sẵn sàng chia sẻ"]`,
      caption: "Lặp cho tới khi không còn lỗi trong cả 5 nhóm.",
      alt: "Lưu đồ vòng nghiệm thu: từ bản nháp artifact, duyệt theo 5 nhóm nội dung, chức năng, hiển thị, tiếp cận, dữ liệu. Nếu có lỗi thì ghi danh sách lỗi theo nhóm, sửa một thay đổi bằng cách phù hợp, kiểm tra lại chỗ đã sửa và chỗ liên quan, rồi duyệt lại. Không còn lỗi thì sẵn sàng chia sẻ.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: gửi yêu cầu sửa",
      bad: {
        label: "Gộp mọi thứ, mơ hồ",
        content: "“Sửa lại hết cho ổn, chỗ nào thấy sai thì sửa, làm đẹp hơn chút.”",
        notes: ["Claude không biết bạn thấy sai chỗ nào.", "Có thể đổi luôn phần đang đúng.", "Không kiểm tra lại được."],
      },
      good: {
        label: "Danh sách đánh số theo nhóm",
        content: "“Sửa 3 điểm: (1) Nội dung: số lỗi tháng 9 là 398, không phải 412. (2) Hiển thị: bảng tràn ngang trên điện thoại — cho cuộn ngang trong khung bảng. (3) Tiếp cận: thêm mô tả cho ảnh sơ đồ xưởng. Giữ nguyên các phần khác.”",
        notes: ["Mỗi điểm cụ thể, kiểm tra được.", "Ghi rõ nhóm lỗi.", "Dặn giữ nguyên phần đúng."],
      },
      takeaway: "Yêu cầu sửa cụ thể → thay đổi đúng chỗ → kiểm tra lại nhanh.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: sắp xếp vòng nghiệm thu",
      sim: {
        kind: "sequence",
        items: [
          { id: "a", text: "Đọc lại yêu cầu ban đầu và tiêu chí đã đặt" },
          { id: "b", text: "Kiểm tra nội dung so với nguồn" },
          { id: "c", text: "Chạy thử chức năng: bấm nút, chạy ca kiểm thử" },
          { id: "d", text: "Xem ở khung hẹp và thử bàn phím (Tab, Escape)" },
          { id: "e", text: "Rà dữ liệu lưu trữ và tệp đính kèm nhạy cảm" },
          { id: "f", text: "Ghi danh sách lỗi, gửi từng yêu cầu sửa" },
          { id: "g", text: "Kiểm tra lại sau khi sửa" },
        ],
        explain: "Biết tiêu chí trước → duyệt 5 nhóm (nội dung, chức năng, hiển thị/tiếp cận, dữ liệu) → ghi lỗi và sửa từng điểm → kiểm tra lại.",
      },
      intro: "Sắp xếp các bước nghiệm thu một artifact trước khi chia sẻ.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: nghiệm thu một artifact",
      steps: [
        { title: "Mở lại tiêu chí", detail: "Yêu cầu ban đầu, ca kiểm thử, người dùng và thiết bị." },
        { title: "Nội dung", detail: "So số liệu, tên, ngày với nguồn; tìm thông tin tự thêm; đọc chính tả." },
        { title: "Chức năng", detail: "Bấm mọi nút, nhập ca kiểm thử, thử ô trống." },
        { title: "Hiển thị và tiếp cận", detail: "Thu hẹp cửa sổ như điện thoại; Tab vào artifact, Escape ra; kiểm tra tương phản, mô tả ảnh." },
        { title: "Dữ liệu", detail: "Lưu trữ chung có gì; tệp trong chat có nhạy cảm không trước khi chia sẻ." },
        { title: "Gửi yêu cầu sửa theo danh sách", detail: "Đánh số, ghi nhóm lỗi, dặn giữ nguyên phần đúng.", code: { lang: "text", content: "Sửa 2 điểm: (1) Chức năng: nút “Đặt lại” không xoá ô tổng — sửa để xoá cả ô tổng. (2) Tiếp cận: chữ ghi chú màu xám nhạt — đổi sang xám đậm. Giữ nguyên phần khác, rồi liệt kê những gì đã đổi." } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Với mỗi lỗi E1–E5 trong biên bản nghiệm thu, ghi nhóm lỗi (nội dung, chức năng, hiển thị, tiếp cận, dữ liệu) và viết yêu cầu sửa cụ thể.",
      sampleData: {
        name: "Biên bản nghiệm thu artifact “Lịch trực tuần”",
        content:
          "E1: Ghi “Thứ Nằm” thay vì “Thứ Năm”.\nE2: Ca đêm thứ Sáu ghi người trực là Hùng, bảng phân công gốc ghi là Minh.\nE3: Nút “Xuất bảng” bấm không có phản hồi.\nE4: Trang không có nút hay liên kết nào, người dùng bàn phím không cuộn được.\nE5: Phần lưu trữ chung đang lưu cả số điện thoại cá nhân của từng người.",
      },
      placeholder: "E1: nhóm … — yêu cầu: …\nE2: …\nE3: …\nE4: …\nE5: …",
      rubric: [
        { id: "e1", label: "E1: nội dung (chính tả)", weight: 1, check: { kind: "regex", pattern: "e1[^\\n]*(noi dung|chinh ta)" }, pass: "E1 đúng.", fail: "E1: nhóm nội dung — sửa “Thứ Nằm” thành “Thứ Năm”." },
        { id: "e2", label: "E2: nội dung (sai nguồn)", weight: 1, check: { kind: "regex", pattern: "e2[^\\n]*(noi dung|nguon|minh)" }, pass: "E2 đúng.", fail: "E2: nhóm nội dung — đổi thành Minh theo bảng gốc." },
        { id: "e3", label: "E3: chức năng", weight: 1, check: { kind: "regex", pattern: "e3[^\\n]*chuc nang" }, pass: "E3 đúng.", fail: "E3: nhóm chức năng — sửa nút Xuất bảng." },
        { id: "e4", label: "E4: tiếp cận", weight: 1, check: { kind: "regex", pattern: "e4[^\\n]*(tiep can|ban phim)" }, pass: "E4 đúng.", fail: "E4: nhóm tiếp cận — thêm liên kết/nút để Tab tới được." },
        { id: "e5", label: "E5: dữ liệu", weight: 1, check: { kind: "regex", pattern: "e5[^\\n]*(du lieu|rieng tu|nhay cam)" }, pass: "E5 đúng.", fail: "E5: nhóm dữ liệu — bỏ số điện thoại khỏi lưu trữ chung." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "E1: nhóm nội dung (chính tả) — yêu cầu: sửa “Thứ Nằm” thành “Thứ Năm”.\nE2: nhóm nội dung (sai nguồn) — yêu cầu: ca đêm thứ Sáu đổi thành Minh theo bảng phân công gốc.\nE3: nhóm chức năng — yêu cầu: sửa nút “Xuất bảng” để tải bảng xuống, rồi cho tôi biết đã sửa gì.\nE4: nhóm tiếp cận (bàn phím) — yêu cầu: thêm mục lục có liên kết tới từng ngày và nút “Lên đầu trang”.\nE5: nhóm dữ liệu (riêng tư) — yêu cầu: bỏ số điện thoại cá nhân khỏi lưu trữ chung, chỉ giữ tên và tổ.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Năm cách sửa: nhờ trong chat, gõ trực tiếp (Docs/Slides/Design), Edit with Claude, bình luận @Claude (Docs), phiên bản riêng.",
        "Duyệt 5 nhóm: nội dung, chức năng, hiển thị, khả năng tiếp cận, dữ liệu và riêng tư.",
        "Bàn phím: Tab vào, Escape ra; Return/Shift+Return trong slide và thiết kế; F6 chuyển vùng.",
        "Yêu cầu sửa đánh số, ghi nhóm lỗi, dặn giữ nguyên phần đúng; kiểm tra lại sau mỗi lần.",
        "Lỗi chạy/hiển thị: Try fixing with Claude, không được thì mô tả cụ thể.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một artifact bạn đã làm ở các bài trước.",
      tasks: [
        "Nghiệm thu theo 5 nhóm, ghi biên bản lỗi.",
        "Sửa bằng ít nhất 2 cách khác nhau (ví dụ Edit with Claude và nhờ trong chat).",
        "Nhờ một đồng nghiệp thử bằng điện thoại hoặc chỉ dùng bàn phím.",
      ],
      deliverable: "Biên bản nghiệm thu: Lỗi | Nhóm | Cách sửa | Đã kiểm tra lại?",
      checklist: ["Đủ 5 nhóm", "Mỗi lỗi có yêu cầu sửa cụ thể", "Đã kiểm tra lại sau sửa"],
    },
  ],
};
