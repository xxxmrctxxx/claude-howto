import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const MEM = "https://code.claude.com/docs/en/memory";

export const lessonThietKeGiaoDien: Lesson = {
  id: "ch09-l02",
  chapterId: "ch09",
  slug: "thiet-ke-giao-dien",
  title: "Thiết kế giao diện",
  subtitle: "Từ user story ra khung màn hình và luồng thao tác, liệt kê đủ trạng thái (rỗng, đang tải, lỗi, thành công), đặt quy ước giao diện — rồi đưa thiết kế cho Claude và so kết quả với bản vẽ.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Phác khung màn hình và luồng thao tác từ user story (wireframe bằng chữ hoặc bản vẽ tay)." },
    { id: "o2", text: "Liệt kê trạng thái của mỗi màn hình: rỗng, đang tải, lỗi, thành công, xác nhận." },
    { id: "o3", text: "Đặt quy ước giao diện (màu, cỡ chữ, nhãn, khoảng cách) và yêu cầu tiếp cận; ghi vào nơi Claude đọc được." },
    { id: "o4", text: "Đưa thiết kế cho Claude (ảnh mockup, @file, “be ambitious”) và so kết quả với bản vẽ." },
  ],
  concepts: [
    { id: "wireframe", label: "Khung màn hình (wireframe)" },
    { id: "user-flow", label: "Luồng thao tác" },
    { id: "empty-state", label: "Trạng thái rỗng" },
    { id: "loading-state", label: "Đang tải" },
    { id: "error-state", label: "Trạng thái lỗi" },
    { id: "success-state", label: "Thành công" },
    { id: "confirm-state", label: "Xác nhận thao tác nguy hiểm" },
    { id: "ui-conventions", label: "Quy ước giao diện" },
    { id: "a11y-ui", label: "Tiếp cận trong thiết kế" },
    { id: "mockup-image", label: "Dán ảnh mockup" },
    { id: "compare-mockup", label: "So với bản vẽ" },
    { id: "mobile-first", label: "Thiết kế cho điện thoại trước" },
  ],
  hints: [
    "Mỗi màn hình: rỗng, đang tải, lỗi, thành công — thiếu một là người dùng bối rối.",
    "Có bản vẽ thì dán ảnh vào prompt; có file thì gõ @ để đính kèm.",
    "Quy ước giao diện ghi vào CLAUDE.md để mọi phiên đều theo.",
  ],
  sources: [
    { label: "Claude Code — Best practices (dán ảnh thiết kế, be ambitious, so ảnh chụp trình duyệt với mockup, /verify)", href: BP },
    { label: "Claude Code — Memory (CLAUDE.md cho quy ước dự án)", href: MEM },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Từ SPEC.md, mỗi user story thành **một hoặc vài màn hình**. Trước khi nhờ Claude code, hãy phác **khung màn hình (wireframe)** — vẽ tay, hoặc mô tả bằng chữ: màn hình có những vùng nào, nút nào, theo thứ tự nào — và **luồng thao tác**: người dùng đi từ màn hình nào sang màn hình nào. Web theo dõi lỗi QA có 3 màn hình chính: *Ghi lỗi*, *Danh sách lỗi*, *Thống kê tuần*.",
        "Thiết kế thường chỉ vẽ trạng thái “đẹp”. Hãy liệt kê đủ **trạng thái** của mỗi màn hình: **rỗng** (chưa có lỗi nào — nói gì, gợi ý làm gì), **đang tải**, **lỗi** (nhập thiếu, mất mạng — báo gì, ở đâu), **thành công** (lưu xong thấy gì), và **xác nhận** trước thao tác khó hoàn tác (xoá). Tài liệu Best practices lấy đúng ví dụ này: muốn Claude làm bản đầy đủ — trạng thái rỗng và lỗi, luồng lưu, điều hướng bàn phím — thì nói rõ **“be ambitious”**.",
        "Đặt **quy ước giao diện**: màu chính, màu báo lỗi, cỡ chữ tối thiểu (xưởng dùng điện thoại, nên chữ lớn), khoảng cách, cách đặt nhãn ô nhập, chữ trên nút (“Lưu lỗi” thay vì “OK”). Kèm **yêu cầu tiếp cận**: tương phản đủ, mọi ô nhập có nhãn, dùng được bằng bàn phím. Ghi quy ước vào **CLAUDE.md** của dự án để mọi phiên Claude Code đều theo, không phải nhắc lại. Thiết kế **cho điện thoại trước**, rồi mở rộng ra màn hình lớn.",
        "**Đưa thiết kế cho Claude**: có ảnh mockup hay bản vẽ tay thì **dán ảnh vào prompt**; có file (SPEC.md, quy ước) thì gõ **@** và đường dẫn để đính kèm nội dung. Sau khi Claude dựng xong, **so kết quả với bản vẽ** — Best practices gợi ý dùng ảnh chụp trình duyệt đặt cạnh mockup làm phép kiểm tra; và có thể chạy **/verify** để Claude build, chạy ứng dụng và xem kết quả. Yêu cầu Claude đưa bằng chứng (ảnh chụp), không chỉ câu “đã xong”.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Thiết kế giao diện giống làm biển báo trong xưởng: không chỉ biển “Lối đi” khi mọi thứ bình thường, mà còn biển “Đang sửa chữa”, “Lối thoát hiểm”, “Cấm vào”. Biển phải đủ to để đọc từ xa, đủ tương phản dưới đèn xưởng, và cùng một kiểu cho cả nhà máy.",
      },
      terms: [
        { term: "Wireframe", definition: "Khung màn hình đơn giản cho biết vùng, nút, thứ tự — chưa cần màu sắc." },
        { term: "Trạng thái rỗng", definition: "Màn hình khi chưa có dữ liệu; nên giải thích và gợi ý bước tiếp theo." },
        { term: "Mockup", definition: "Bản vẽ giao diện chi tiết hơn wireframe, gần với sản phẩm thật." },
        { term: "@file", definition: "Trong Claude Code, gõ @ và đường dẫn để đưa nội dung file vào yêu cầu." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: wireframe bằng chữ — màn hình Ghi lỗi",
      infographic: {
        kind: "annotated",
        label: "Màn hình “Ghi lỗi” (điện thoại)",
        lines: [
          { text: "[Tiêu đề] Ghi lỗi mới                       [Danh sách →]", note: "Điều hướng rõ", tone: "role" },
          { text: "Công đoạn  [ chọn ▾ ]   (bắt buộc)", note: "Nhãn luôn hiện, không chỉ dùng chữ mờ trong ô", tone: "context" },
          { text: "Mô tả      [ ............................ ]   (bắt buộc)", tone: "context" },
          { text: "Mức độ     ( ) Thấp  ( ) Trung bình  ( ) Cao", tone: "context" },
          { text: "[ Lưu lỗi ]  ← nút lớn, toàn chiều ngang", note: "Chữ trên nút nói đúng việc", tone: "task" },
          { text: "Lỗi: “Chọn công đoạn” hiện ngay dưới ô · Thành công: “Đã lưu” + lỗi lên đầu danh sách", note: "Trạng thái lỗi và thành công", tone: "constraints" },
        ],
      },
      caption: "Wireframe tự soạn cho dự án mẫu của chương; không phải ảnh chụp sản phẩm thật.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: luồng màn hình và trạng thái",
      mermaid: `flowchart LR
  A["Ghi lỗi"] -->|"Lưu thành công"| B["Danh sách lỗi"]
  A -->|"Thiếu ô bắt buộc"| A2["Báo lỗi dưới ô, không lưu"]
  A2 --> A
  B -->|"Chưa có lỗi"| B0["Trạng thái rỗng: hướng dẫn ghi lỗi đầu tiên"]
  B -->|"Bấm Xoá"| B1["Hộp xác nhận"]
  B1 --> B
  B --> C["Thống kê tuần"]
  C -->|"Đang lấy số liệu"| C1["Đang tải"]
  C1 --> C`,
      caption: "Mỗi mũi tên là một hành động; mỗi nhánh phụ là một trạng thái cần thiết kế.",
      alt: "Sơ đồ luồng: màn hình Ghi lỗi, lưu thành công thì sang Danh sách lỗi; thiếu ô bắt buộc thì báo lỗi dưới ô và không lưu. Danh sách lỗi khi chưa có lỗi hiện trạng thái rỗng hướng dẫn ghi lỗi đầu tiên; bấm Xoá thì hiện hộp xác nhận. Từ Danh sách sang Thống kê tuần; khi đang lấy số liệu hiện trạng thái đang tải.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu dựng giao diện",
      bad: {
        label: "Chỉ trạng thái đẹp",
        content: "“Làm màn hình danh sách lỗi đẹp, hiện đại.”",
        notes: ["Không nói chưa có dữ liệu thì hiện gì.", "Không nói lỗi mạng xử lý sao.", "“Hiện đại” không so được với bản vẽ."],
      },
      good: {
        label: "Bản vẽ + trạng thái + quy ước",
        content: "(Dán ảnh bản vẽ tay) “Dựng màn hình Danh sách lỗi theo ảnh này và quy ước trong @CLAUDE.md. Be ambitious: trạng thái rỗng (hướng dẫn ghi lỗi đầu tiên), đang tải, lỗi mạng (nút Thử lại), hộp xác nhận khi xoá, điều hướng bàn phím. Xong thì chụp ảnh màn hình khổ điện thoại để tôi so với bản vẽ.”",
        notes: ["Có bản vẽ để so.", "Đủ trạng thái.", "Có bằng chứng (ảnh chụp)."],
      },
      takeaway: "Thiết kế đủ trạng thái + bằng chứng so với bản vẽ.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: tình huống nào, trạng thái nào?",
      sim: {
        kind: "choose",
        options: [
          { id: "empty", label: "Trạng thái rỗng" },
          { id: "loading", label: "Đang tải" },
          { id: "error", label: "Trạng thái lỗi" },
          { id: "success", label: "Thành công" },
          { id: "confirm", label: "Xác nhận trước khi làm" },
        ],
        scenarios: [
          { id: "s1", text: "Tuần mới, chưa ai ghi lỗi nào; tổ trưởng mở Danh sách lỗi.", answer: "empty", why: "Không có dữ liệu — giải thích và gợi ý ghi lỗi đầu tiên." },
          { id: "s2", text: "Bấm Lưu nhưng mất kết nối mạng ở xưởng.", answer: "error", why: "Báo lỗi rõ ràng, giữ nội dung đã nhập, có nút Thử lại." },
          { id: "s3", text: "Lưu lỗi xong.", answer: "success", why: "Báo đã lưu, lỗi mới hiện trong danh sách." },
          { id: "s4", text: "Trang thống kê đang lấy số liệu từ máy chủ.", answer: "loading", why: "Cho người dùng biết hệ thống đang làm việc." },
          { id: "s5", text: "Tổ trưởng bấm Xoá một lỗi đã ghi.", answer: "confirm", why: "Thao tác khó hoàn tác cần hỏi lại." },
          { id: "s6", text: "Bấm Lưu khi chưa chọn công đoạn.", answer: "error", why: "Lỗi nhập liệu: báo ngay dưới ô cần sửa." },
        ],
      },
      intro: "Mỗi tình huống cần một trạng thái giao diện. Chọn đúng trạng thái.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: thiết kế trước khi dựng",
      steps: [
        { title: "Từ story ra màn hình", detail: "Mỗi story → màn hình nào; vẽ luồng giữa các màn hình." },
        { title: "Phác wireframe", detail: "Vẽ tay rồi chụp ảnh, hoặc mô tả bằng chữ: vùng, ô nhập, nút, thứ tự." },
        { title: "Liệt kê trạng thái", detail: "Rỗng, đang tải, lỗi, thành công, xác nhận — cho từng màn hình." },
        { title: "Ghi quy ước vào CLAUDE.md", detail: "Để mọi phiên đều theo.", code: { lang: "markdown", content: "## Quy ước giao diện\n- Thiết kế cho điện thoại trước; cỡ chữ tối thiểu 16px, nút cao tối thiểu 44px.\n- Màu chính #1d4ed8, màu lỗi #b91c1c; tương phản đạt WCAG AA.\n- Mọi ô nhập có nhãn hiện rõ; thông báo lỗi ngay dưới ô.\n- Chữ trên nút nói đúng việc (“Lưu lỗi”, không “OK”)." } },
        { title: "Đưa cho Claude dựng", detail: "Dán ảnh wireframe, đính kèm quy ước, nói rõ trạng thái.", code: { lang: "text", content: "Dựng màn hình Ghi lỗi theo ảnh đính kèm và quy ước trong @CLAUDE.md. Be ambitious: đủ trạng thái lỗi nhập liệu, lỗi mạng, thành công, điều hướng bàn phím. Xong chụp ảnh khổ điện thoại để so với bản vẽ." } },
        { title: "So với bản vẽ", detail: "Đặt ảnh chụp cạnh wireframe; liệt kê chỗ lệch và sửa từng điểm; có thể chạy /verify." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết wireframe bằng chữ cho màn hình trong dữ liệu mẫu, kèm danh sách trạng thái (rỗng, đang tải, lỗi, thành công) và mỗi trạng thái hiện gì.",
      sampleData: {
        name: "Màn hình “Thống kê tuần”",
        content:
          "Story: Là tổ trưởng, tôi muốn xem số lỗi tuần này theo công đoạn trên điện thoại để biết công đoạn nào cần chấn chỉnh.\nDữ liệu lấy từ máy chủ, có thể chậm vài giây. Có thể chưa có lỗi nào trong tuần.",
      },
      placeholder: "Wireframe:\n…\nTrạng thái:\n- Rỗng: …\n- Đang tải: …\n- Lỗi: …\n- Thành công: …",
      rubric: [
        { id: "wire", label: "Wireframe có vùng/phần tử", weight: 1, check: { kind: "minMatches", pattern: "\\[[^\\]]+\\]", value: 2 }, pass: "Có wireframe.", fail: "Mô tả các vùng/nút dạng [Tiêu đề], [Bảng]…" },
        { id: "empty", label: "Trạng thái rỗng có nội dung", weight: 1, check: { kind: "regex", pattern: "rong\\s*:\\s*[a-z]" }, pass: "Có trạng thái rỗng.", fail: "Viết “Rỗng: …” — hiện gì khi chưa có lỗi." },
        { id: "loading", label: "Đang tải có nội dung", weight: 1, check: { kind: "regex", pattern: "dang tai\\s*:\\s*[a-z]" }, pass: "Có đang tải.", fail: "Viết “Đang tải: …”." },
        { id: "error", label: "Lỗi có nội dung", weight: 1, check: { kind: "regex", pattern: "loi\\s*:\\s*[a-z]" }, pass: "Có trạng thái lỗi.", fail: "Viết “Lỗi: …” — ví dụ mất mạng, nút Thử lại." },
        { id: "success", label: "Thành công có nội dung", weight: 1, check: { kind: "regex", pattern: "thanh cong\\s*:\\s*[a-z]" }, pass: "Có thành công.", fail: "Viết “Thành công: …” — hiện số liệu thế nào." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Wireframe:\n[Tiêu đề] Thống kê tuần 45 (03–09/11)   [Ghi lỗi +]\n[Thẻ tổng] Tổng lỗi tuần · Lỗi mức Cao\n[Biểu đồ cột ngang] Số lỗi theo công đoạn, sắp giảm dần\n[Danh sách] 5 lỗi mức Cao gần nhất\nTrạng thái:\n- Rỗng: hiện “Tuần này chưa có lỗi nào được ghi” và nút “Ghi lỗi đầu tiên”.\n- Đang tải: khung xám giữ chỗ cho thẻ và biểu đồ, kèm chữ “Đang lấy số liệu…”.\n- Lỗi: báo “Không tải được số liệu, kiểm tra mạng” và nút “Thử lại”.\n- Thành công: hiện thẻ tổng, biểu đồ và danh sách lỗi mức Cao.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Từ user story ra màn hình và luồng; phác wireframe trước khi code.",
        "Mỗi màn hình đủ trạng thái: rỗng, đang tải, lỗi, thành công, xác nhận thao tác khó hoàn tác.",
        "Quy ước giao diện (màu, cỡ chữ, nhãn, chữ trên nút) và tiếp cận ghi vào CLAUDE.md; thiết kế cho điện thoại trước.",
        "Đưa thiết kế cho Claude: dán ảnh, @file, “be ambitious” cho trạng thái.",
        "So kết quả với bản vẽ bằng ảnh chụp; yêu cầu bằng chứng; có thể chạy /verify.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Tiếp tục dự án có SPEC.md từ bài 9.1.",
      tasks: [
        "Vẽ wireframe cho 2–3 màn hình chính và luồng giữa chúng.",
        "Liệt kê trạng thái cho từng màn hình.",
        "Viết mục “Quy ước giao diện” trong CLAUDE.md.",
      ],
      deliverable: "Ảnh/tệp wireframe + bảng trạng thái + mục quy ước trong CLAUDE.md.",
      checklist: ["Mỗi màn hình có đủ trạng thái", "Quy ước có cỡ chữ và màu lỗi", "Có yêu cầu tiếp cận"],
    },
  ],
};
