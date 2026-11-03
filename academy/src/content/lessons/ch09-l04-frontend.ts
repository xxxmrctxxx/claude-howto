import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const CW = "https://code.claude.com/docs/en/common-workflows";

export const lessonFrontend: Lesson = {
  id: "ch09-l04",
  chapterId: "ch09",
  slug: "frontend",
  title: "Xây dựng frontend",
  subtitle: "Dựng giao diện từng màn hình một: yêu cầu cụ thể (theo wireframe, theo file mẫu, không thêm thư viện), kiểm tra bằng ảnh chụp và bàn phím, commit từng phần nhỏ.",
  level: "intermediate",
  estimatedMinutes: 35,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chia frontend thành từng màn hình, từng thành phần; mỗi lần giao một phần nhỏ có tiêu chí." },
    { id: "o2", text: "Viết yêu cầu cụ thể: @SPEC.md và wireframe, theo cách viết của file mẫu, không thêm thư viện, đủ trạng thái." },
    { id: "o3", text: "Kiểm tra mỗi phần: chạy thử, ảnh chụp so với wireframe, khổ điện thoại, bàn phím; yêu cầu bằng chứng." },
    { id: "o4", text: "Xem thay đổi trước khi commit và commit từng phần nhỏ; giữ phạm vi, không để thay đổi lan sang phần khác." },
  ],
  concepts: [
    { id: "one-screen", label: "Mỗi lần một màn hình" },
    { id: "spec-reference", label: "Tham chiếu @SPEC.md" },
    { id: "follow-pattern", label: "Theo file mẫu" },
    { id: "no-new-libs", label: "Không thêm thư viện" },
    { id: "all-states", label: "Đủ trạng thái" },
    { id: "screenshot-check", label: "Ảnh chụp so wireframe" },
    { id: "mobile-check", label: "Kiểm tra khổ điện thoại" },
    { id: "keyboard-check", label: "Kiểm tra bàn phím" },
    { id: "evidence", label: "Bằng chứng" },
    { id: "review-diff", label: "Xem thay đổi trước commit" },
    { id: "small-commits", label: "Commit nhỏ" },
    { id: "scope-creep", label: "Thay đổi lan phạm vi" },
  ],
  hints: [
    "Một yêu cầu = một màn hình + tiêu chí + bằng chứng.",
    "“Theo cách viết của @src/… ” giúp code mới giống code cũ.",
    "Xem /diff trước khi commit; mỗi màn hình một commit.",
  ],
  sources: [
    { label: "Claude Code — Best practices (yêu cầu cụ thể, theo mẫu có sẵn, không thêm thư viện, bằng chứng, /verify)", href: BP },
    { label: "Claude Code — Common workflows (tham chiếu file bằng @)", href: CW },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Đừng giao “làm hết frontend” trong một lần. Chia theo **màn hình** (Ghi lỗi, Danh sách, Thống kê) và **thành phần** (form, bảng, thẻ số liệu); mỗi lần giao **một phần nhỏ** có tiêu chí chấp nhận lấy từ SPEC.md. Phần nhỏ thì Claude làm chính xác hơn, bạn kiểm tra nhanh hơn, và lỗi dễ khoanh vùng.",
        "Viết yêu cầu **cụ thể**: đính kèm **@SPEC.md** (story nào) và ảnh wireframe; nếu đã có màn hình làm đúng chuẩn, dặn **“theo cách viết của @src/…”** để code mới nhất quán — Best practices lấy ví dụ “follow the pattern in … và … no new libraries”. Nói rõ **không thêm thư viện**, **đủ trạng thái** (rỗng, đang tải, lỗi, thành công) và **chỉ sửa các file của màn hình này**.",
        "Kiểm tra từng phần: chạy thử, **ảnh chụp đặt cạnh wireframe**, thu hẹp về **khổ điện thoại**, thử **bàn phím** (Tab qua các ô, Enter để gửi). Yêu cầu Claude đưa **bằng chứng** — lệnh đã chạy và kết quả, hoặc ảnh chụp; câu “đã xong” một mình nói rất ít. Có thể chạy **/verify** để Claude build, chạy ứng dụng và xem kết quả — cách này bắt được loại lỗi mà test và kiểm tra kiểu thường bỏ sót.",
        "Trước khi commit, **xem thay đổi** (`/diff` trong phiên, hoặc `git diff`): có file nào ngoài phạm vi bị sửa không? Mỗi màn hình đạt tiêu chí thì **một commit** với thông điệp rõ. Nếu thấy Claude “tiện tay” sửa server, đổi cấu trúc thư mục hay cài thư viện mới — đó là **thay đổi lan phạm vi**, hãy yêu cầu hoàn tác phần đó.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Lắp nội thất cho một văn phòng: lắp xong từng phòng, nghiệm thu phòng đó (đúng bản vẽ, cửa đóng mở được, ổ điện chạy), rồi mới sang phòng khác. Thợ lắp phòng họp mà tiện tay đục tường phòng bên cạnh thì phải dừng lại ngay.",
      },
      terms: [
        { term: "Frontend", definition: "Phần giao diện người dùng thấy và thao tác trên trình duyệt." },
        { term: "Thành phần (component)", definition: "Một khối giao diện dùng lại được: form, bảng, thẻ số liệu." },
        { term: "/diff", definition: "Lệnh trong Claude Code xem các thay đổi chưa commit." },
        { term: "Thay đổi lan phạm vi", definition: "Sửa ra ngoài phần được giao, khó kiểm soát và khó review." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: một vòng dựng màn hình",
      infographic: {
        kind: "flow",
        steps: [
          { title: "Chọn một màn hình", body: "Ví dụ: Ghi lỗi — story 1 trong SPEC.md.", icon: "target" },
          { title: "Yêu cầu cụ thể", body: "Wireframe, @SPEC.md, theo file mẫu, không thêm thư viện, đủ trạng thái.", icon: "message" },
          { title: "Claude dựng", body: "Chỉ sửa file của màn hình này.", icon: "code" },
          { title: "Kiểm tra", body: "Ảnh chụp cạnh wireframe, khổ điện thoại, bàn phím, bằng chứng.", icon: "check" },
          { title: "Xem diff, commit", body: "Không có file ngoài phạm vi → một commit.", icon: "git" },
        ],
      },
      caption: "Vòng làm việc gợi ý cho khoá học, dựa trên Best practices của Claude Code (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từng màn hình một",
      mermaid: `flowchart TD
  A["Danh sách màn hình từ SPEC.md"] --> B["Chọn màn hình tiếp theo"]
  B --> C["Yêu cầu cụ thể + tiêu chí"]
  C --> D["Claude dựng, đưa bằng chứng"]
  D --> E{"Đạt tiêu chí? Đúng wireframe? Chỉ sửa đúng file?"}
  E -->|"Chưa"| F["Sửa từng điểm / hoàn tác phần lan phạm vi"]
  F --> D
  E -->|"Đạt"| G["/diff → commit"]
  G --> H{"Còn màn hình?"}
  H -->|"Còn"| B
  H -->|"Hết"| I["Sang backend"]`,
      caption: "Lặp theo màn hình; mỗi vòng kết thúc bằng một commit.",
      alt: "Lưu đồ: từ danh sách màn hình trong SPEC.md, chọn màn hình tiếp theo, viết yêu cầu cụ thể kèm tiêu chí, Claude dựng và đưa bằng chứng. Nếu chưa đạt tiêu chí, chưa đúng wireframe hoặc sửa sai file thì sửa từng điểm hoặc hoàn tác phần lan phạm vi. Đạt thì xem diff và commit. Còn màn hình thì lặp lại, hết thì sang backend.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: giao việc frontend",
      bad: {
        label: "Giao cả khối",
        content: "“Làm toàn bộ giao diện web theo dõi lỗi, dùng thư viện gì cũng được, sửa gì cần thì sửa.”",
        notes: ["Quá lớn để kiểm tra.", "Thư viện tuỳ ý.", "Không giới hạn phạm vi file."],
      },
      good: {
        label: "Một màn hình, đủ tiêu chí",
        content: "“Dựng màn hình Danh sách lỗi (story 2 trong @SPEC.md) theo wireframe đính kèm, theo cách viết của @src/ghi-loi.js. Không thêm thư viện, chỉ sửa src/danh-sach.* . Đủ trạng thái rỗng, đang tải, lỗi mạng, xác nhận khi xoá. Xong chụp ảnh khổ điện thoại và liệt kê file đã sửa.”",
        notes: ["Phạm vi nhỏ, rõ file.", "Nhất quán với code cũ.", "Có bằng chứng để duyệt."],
      },
      takeaway: "Nhỏ, cụ thể, có bằng chứng — rồi commit.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: tìm chỗ sẽ gây rắc rối trong yêu cầu",
      sim: {
        kind: "highlight",
        instruction: "Đánh dấu những phần của yêu cầu dưới đây sẽ gây rắc rối khi dựng frontend.",
        segments: [
          { id: "g1", text: "Dựng màn hình Ghi lỗi theo wireframe đính kèm và story 1 trong @SPEC.md.", target: false },
          { id: "g2", text: "Làm luôn trang quản trị và hệ thống thông báo cho tiện.", target: true, why: "Ngoài phạm vi màn hình này (và có thể ngoài MVP)." },
          { id: "g3", text: "Theo cách viết của @src/components/form-mau.js.", target: false },
          { id: "g4", text: "Dùng thư viện giao diện nào bạn thích.", target: true, why: "Thư viện tuỳ ý — dặn không thêm thư viện ngoài danh sách đã duyệt." },
          { id: "g5", text: "Đủ trạng thái lỗi nhập liệu và lỗi mạng.", target: false },
          { id: "g6", text: "Thấy cần thì sửa luôn file server.", target: true, why: "Lan phạm vi sang backend; khó review." },
          { id: "g7", text: "Xong chụp ảnh khổ điện thoại để tôi so với wireframe.", target: false },
        ],
      },
      intro: "Yêu cầu tốt giới hạn phạm vi. Có 3 chỗ không ổn.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dựng một màn hình",
      steps: [
        { title: "Chọn màn hình và tiêu chí", detail: "Lấy story và tiêu chí chấp nhận từ SPEC.md." },
        { title: "Gửi yêu cầu cụ thể", detail: "Kèm wireframe (dán ảnh), file mẫu, giới hạn file, trạng thái.", code: { lang: "text", content: "Dựng màn hình Ghi lỗi (story 1 trong @SPEC.md) theo ảnh wireframe đính kèm và quy ước trong CLAUDE.md. Không thêm thư viện. Chỉ tạo/sửa file trong src/ghi-loi. Be ambitious: lỗi nhập liệu dưới từng ô, lỗi mạng giữ nội dung đã nhập, trạng thái đang lưu, điều hướng bàn phím. Xong chạy npm test, chụp ảnh khổ điện thoại và liệt kê file đã sửa." } },
        { title: "Kiểm tra bằng chứng", detail: "Đọc kết quả test, đặt ảnh chụp cạnh wireframe; tự thử Tab và Enter." },
        { title: "Sửa từng điểm", detail: "Danh sách đánh số, dặn giữ nguyên phần khác." },
        { title: "Xem thay đổi và commit", detail: "Không có file ngoài phạm vi thì commit.", code: { lang: "text", content: "/diff" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết yêu cầu dựng màn hình trong dữ liệu mẫu cho Claude Code, đủ: tham chiếu đặc tả, file mẫu, giới hạn phạm vi, trạng thái, bằng chứng.",
      sampleData: {
        name: "Màn hình Thống kê tuần",
        content:
          "Story 3 trong SPEC.md: tổ trưởng xem số lỗi tuần theo công đoạn.\nĐã có màn hình Danh sách lỗi viết đúng chuẩn ở src/danh-sach.js.\nFile của màn hình mới: src/thong-ke.js, src/thong-ke.css.\nLệnh test: npm test.",
      },
      placeholder: "Dựng màn hình …",
      rubric: [
        { id: "spec", label: "Tham chiếu SPEC.md", weight: 1, check: { kind: "anyKeyword", keywords: ["spec.md", "@spec.md", "story 3"] }, pass: "Có đặc tả.", fail: "Tham chiếu story 3 trong @SPEC.md." },
        { id: "pattern", label: "Theo file mẫu", weight: 1, check: { kind: "anyKeyword", keywords: ["danh-sach.js", "@src/danh-sach.js"] }, pass: "Có file mẫu.", fail: "Dặn theo cách viết của @src/danh-sach.js." },
        { id: "scope", label: "Giới hạn file/thư viện", weight: 1, check: { kind: "anyKeyword", keywords: ["chỉ sửa", "chỉ tạo", "không thêm thư viện", "thong-ke.js"] }, pass: "Có giới hạn.", fail: "Chỉ sửa src/thong-ke.*, không thêm thư viện." },
        { id: "states", label: "Đủ trạng thái", weight: 1, check: { kind: "allGroups", groups: [["rỗng"], ["đang tải", "lỗi"]] }, pass: "Có trạng thái.", fail: "Nêu trạng thái rỗng, đang tải, lỗi." },
        { id: "evidence", label: "Yêu cầu bằng chứng", weight: 1, check: { kind: "anyKeyword", keywords: ["npm test", "chụp", "liệt kê file"] }, pass: "Có bằng chứng.", fail: "Yêu cầu chạy npm test, chụp ảnh, liệt kê file đã sửa." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Dựng màn hình Thống kê tuần (story 3 trong @SPEC.md) theo cách viết của @src/danh-sach.js và quy ước trong CLAUDE.md. Không thêm thư viện; chỉ tạo/sửa src/thong-ke.js và src/thong-ke.css. Đủ trạng thái rỗng (tuần chưa có lỗi), đang tải, lỗi mạng có nút Thử lại. Xong chạy npm test, chụp ảnh khổ điện thoại và liệt kê file đã sửa.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Chia frontend theo màn hình/thành phần; mỗi lần một phần nhỏ có tiêu chí từ SPEC.md.",
        "Yêu cầu cụ thể: @SPEC.md, wireframe, “theo cách viết của @file mẫu”, không thêm thư viện, đủ trạng thái, giới hạn file.",
        "Kiểm tra: ảnh chụp cạnh wireframe, khổ điện thoại, bàn phím; yêu cầu bằng chứng; có thể chạy /verify.",
        "Xem /diff trước khi commit; mỗi màn hình một commit.",
        "Thấy thay đổi lan phạm vi thì yêu cầu hoàn tác phần đó.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Tiếp tục dự án của bạn sau bài 9.3.",
      tasks: [
        "Dựng màn hình quan trọng nhất theo đúng vòng: yêu cầu → bằng chứng → sửa → diff → commit.",
        "Dựng màn hình thứ hai theo cách viết của màn hình đầu.",
        "Tự thử cả hai màn hình trên điện thoại và chỉ bằng bàn phím.",
      ],
      deliverable: "2 màn hình, mỗi màn hình một commit + ảnh chụp so với wireframe.",
      checklist: ["Không có thư viện ngoài danh sách", "Mỗi commit chỉ chứa file của một màn hình", "Đủ trạng thái"],
    },
  ],
};
