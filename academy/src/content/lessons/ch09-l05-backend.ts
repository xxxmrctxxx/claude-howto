import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const SEC = "https://code.claude.com/docs/en/security";

export const lessonBackend: Lesson = {
  id: "ch09-l05",
  chapterId: "ch09",
  slug: "backend",
  title: "Xây dựng backend",
  subtitle: "Từ user story ra API và mô hình dữ liệu, kiểm tra dữ liệu ở máy chủ, phân quyền và giữ bí mật — viết test cho API để Claude tự chạy tới khi đạt.",
  level: "advanced",
  estimatedMinutes: 35,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Từ user story ra danh sách API (phương thức, đường dẫn, dữ liệu vào/ra) và mô hình dữ liệu." },
    { id: "o2", text: "Kiểm tra dữ liệu ở máy chủ và trả lỗi rõ ràng bằng mã trạng thái phù hợp; không tin dữ liệu từ trình duyệt." },
    { id: "o3", text: "Áp dụng an toàn cơ bản: truy vấn tham số hoá, phân quyền thao tác, bí mật từ biến môi trường, không ghi log dữ liệu cá nhân." },
    { id: "o4", text: "Viết test cho API (hợp lệ, thiếu dữ liệu, không có quyền) để Claude chạy tới khi đạt; yêu cầu bằng chứng." },
  ],
  concepts: [
    { id: "api-list", label: "Danh sách API" },
    { id: "data-model", label: "Mô hình dữ liệu" },
    { id: "server-validation", label: "Kiểm tra ở máy chủ" },
    { id: "status-codes", label: "Mã trạng thái HTTP" },
    { id: "error-messages", label: "Thông báo lỗi rõ ràng" },
    { id: "parameterized", label: "Truy vấn tham số hoá" },
    { id: "authorization", label: "Phân quyền" },
    { id: "env-secrets", label: "Bí mật từ biến môi trường" },
    { id: "no-pii-logs", label: "Không ghi log dữ liệu cá nhân" },
    { id: "api-tests", label: "Test cho API" },
    { id: "test-first", label: "Viết test trước" },
    { id: "backend-plan", label: "Lập kế hoạch backend" },
  ],
  hints: [
    "Mỗi story → một hoặc vài API: phương thức + đường dẫn + dữ liệu vào/ra + lỗi.",
    "Không tin trình duyệt: kiểm tra lại mọi dữ liệu ở máy chủ.",
    "Test API cho ca hợp lệ, ca thiếu dữ liệu, ca không có quyền.",
  ],
  sources: [
    { label: "Claude Code — Best practices (viết test tái hiện rồi sửa, cho Claude phép kiểm tra để chạy, bằng chứng)", href: BP },
    { label: "Claude Code — Security (thận trọng với dữ liệu nhạy cảm, quyền)", href: SEC },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Frontend cần nơi lưu và lấy dữ liệu — đó là **backend**. Bắt đầu bằng **kế hoạch** (plan mode): từ mỗi user story, liệt kê **API** — *phương thức* (GET lấy, POST tạo, DELETE xoá…), *đường dẫn* (`/api/loi`), *dữ liệu vào*, *dữ liệu ra*, *các lỗi có thể xảy ra* — và **mô hình dữ liệu** (bảng `loi`: id, ngày, công đoạn, mô tả, mức độ, người ghi). Duyệt danh sách này trước khi Claude viết code.",
        "**Không tin dữ liệu từ trình duyệt**: frontend đã kiểm tra rồi thì máy chủ vẫn phải **kiểm tra lại** (thiếu công đoạn? mức độ ngoài Thấp/Trung bình/Cao? mô tả quá dài?). Trả lỗi bằng **mã trạng thái** phù hợp kèm **thông báo dễ hiểu**: 201 tạo thành công, 400 dữ liệu không hợp lệ, 401 chưa đăng nhập, 403 không có quyền, 404 không tìm thấy.",
        "**An toàn cơ bản** cần ghi rõ trong yêu cầu: dùng **truy vấn tham số hoá** (không ghép chuỗi người dùng nhập vào câu truy vấn); **phân quyền** — ví dụ chỉ tổ trưởng được xoá lỗi, và kiểm tra ở máy chủ chứ không chỉ ẩn nút; **bí mật** (mật khẩu cơ sở dữ liệu) đọc từ **biến môi trường**, không viết cứng trong code; **không ghi log** dữ liệu cá nhân.",
        "**Test cho API** là phép kiểm tra để Claude tự chạy: mỗi API có ca **hợp lệ**, ca **thiếu/sai dữ liệu**, ca **không có quyền**. Best practices gợi ý cách làm khi sửa lỗi: *viết test tái hiện lỗi trước, rồi sửa*. Với tính năng mới cũng vậy: nhờ Claude viết test theo tiêu chí trong SPEC.md trước, xác nhận test đang **trượt**, rồi mới viết code cho tới khi **đạt** — và luôn yêu cầu xem **lệnh đã chạy và kết quả**.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Backend giống kho của xưởng: có quầy nhận/phát hàng với quy trình rõ (API), sổ kho ghi đúng mẫu (mô hình dữ liệu), thủ kho kiểm tra lại phiếu dù tổ trưởng đã ký (kiểm tra ở máy chủ), chỉ người có thẩm quyền mới được xuất hàng (phân quyền), chìa khoá kho cất riêng (bí mật). Định kỳ kiểm kê thử (test) để biết quy trình còn đúng.",
      },
      terms: [
        { term: "API", definition: "Cổng để frontend gửi/nhận dữ liệu với máy chủ: phương thức + đường dẫn + dữ liệu." },
        { term: "Mã trạng thái HTTP", definition: "Con số máy chủ trả về cho biết kết quả: 201, 400, 401, 403, 404…" },
        { term: "Truy vấn tham số hoá", definition: "Truyền dữ liệu người dùng như tham số riêng, không ghép vào câu truy vấn — chống SQL injection." },
        { term: "Phân quyền", definition: "Quy định ai được làm thao tác nào, kiểm tra tại máy chủ." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: API cho web theo dõi lỗi",
      infographic: {
        kind: "table",
        headers: ["API", "Dữ liệu vào", "Kết quả", "Lỗi"],
        rows: [
          ["POST /api/loi", "công đoạn, mô tả, mức độ", "201 + lỗi vừa tạo", "400 thiếu/sai dữ liệu · 401 chưa đăng nhập"],
          ["GET /api/loi?tuan=45", "tuần", "200 + danh sách lỗi", "400 tuần không hợp lệ"],
          ["GET /api/thong-ke?tuan=45", "tuần", "200 + số lỗi theo công đoạn", "400 tuần không hợp lệ"],
          ["DELETE /api/loi/:id", "id", "204 đã xoá", "403 không phải tổ trưởng · 404 không tìm thấy"],
        ],
      },
      caption: "Bảng API tự soạn cho dự án mẫu của chương; mã trạng thái theo quy ước HTTP phổ biến.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: một yêu cầu đi qua backend",
      mermaid: `flowchart LR
  A["Trình duyệt gửi POST /api/loi"] --> B{"Đã đăng nhập?"}
  B -->|"Không"| E1["401"]
  B -->|"Có"| C{"Dữ liệu hợp lệ? (kiểm tra lại ở máy chủ)"}
  C -->|"Không"| E2["400 + thông báo rõ"]
  C -->|"Có"| D{"Có quyền thao tác?"}
  D -->|"Không"| E3["403"]
  D -->|"Có"| F["Lưu bằng truy vấn tham số hoá"]
  F --> G["201 + dữ liệu đã lưu"]`,
      caption: "Mỗi nhánh lỗi là một ca kiểm thử cần có.",
      alt: "Sơ đồ: trình duyệt gửi POST /api/loi. Nếu chưa đăng nhập trả 401. Nếu đã đăng nhập, kiểm tra lại dữ liệu ở máy chủ; không hợp lệ trả 400 kèm thông báo rõ. Hợp lệ thì kiểm tra quyền; không có quyền trả 403. Có quyền thì lưu bằng truy vấn tham số hoá và trả 201 kèm dữ liệu đã lưu.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu xây API",
      bad: {
        label: "Thiếu kiểm tra và quyền",
        content: "“Viết API lưu lỗi vào database, mật khẩu là Abc@123, cho nhanh thì ghép chuỗi SQL.”",
        notes: ["Mật khẩu viết cứng trong yêu cầu/code.", "Ghép chuỗi SQL → nguy cơ SQL injection.", "Không có kiểm tra dữ liệu, phân quyền, test."],
      },
      good: {
        label: "Kế hoạch, an toàn, có test",
        content: "“Theo bảng API đã duyệt và @SPEC.md: viết test trước cho POST /api/loi (201 hợp lệ, 400 thiếu công đoạn, 401 chưa đăng nhập) và DELETE /api/loi/:id (403 nếu không phải tổ trưởng). Chạy cho thấy test trượt, rồi viết code tới khi đạt. Truy vấn tham số hoá, mật khẩu đọc từ biến môi trường, không log mô tả lỗi kèm tên người. Cho tôi xem lệnh test và kết quả.”",
        notes: ["Test là định nghĩa “xong”.", "An toàn ghi rõ.", "Có bằng chứng."],
      },
      takeaway: "Backend tốt = kiểm tra lại, phân quyền ở máy chủ, bí mật ngoài code, có test.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: máy chủ nên trả mã nào?",
      sim: {
        kind: "choose",
        options: [
          { id: "201", label: "201 — Đã tạo" },
          { id: "400", label: "400 — Dữ liệu không hợp lệ" },
          { id: "401", label: "401 — Chưa đăng nhập" },
          { id: "403", label: "403 — Không có quyền" },
          { id: "404", label: "404 — Không tìm thấy" },
        ],
        scenarios: [
          { id: "s1", text: "Công nhân đã đăng nhập gửi lỗi đủ công đoạn, mô tả, mức độ.", answer: "201", why: "Tạo thành công." },
          { id: "s2", text: "Gửi lỗi thiếu công đoạn (ai đó sửa frontend để bỏ qua kiểm tra).", answer: "400", why: "Máy chủ kiểm tra lại và từ chối." },
          { id: "s3", text: "Công nhân gọi DELETE /api/loi/12 — chỉ tổ trưởng được xoá.", answer: "403", why: "Đã đăng nhập nhưng không có quyền." },
          { id: "s4", text: "Gọi API khi phiên đăng nhập đã hết hạn.", answer: "401", why: "Chưa xác thực." },
          { id: "s5", text: "Tổ trưởng xoá lỗi id 9999 không tồn tại.", answer: "404", why: "Không tìm thấy đối tượng." },
          { id: "s6", text: "Gửi mức độ là “Rất rất cao” — ngoài danh sách cho phép.", answer: "400", why: "Giá trị không hợp lệ." },
        ],
      },
      intro: "Mỗi tình huống, máy chủ nên trả mã trạng thái nào?",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: xây một API có test",
      steps: [
        { title: "Lập bảng API và mô hình dữ liệu", detail: "Plan mode; duyệt trước khi viết code.", code: { lang: "text", content: "/plan Từ @SPEC.md, lập bảng API (phương thức, đường dẫn, dữ liệu vào/ra, lỗi và mã trạng thái) và mô hình dữ liệu cho bảng loi. Nêu ai được làm thao tác nào. Chưa viết code." } },
        { title: "Viết test trước", detail: "Ca hợp lệ, thiếu dữ liệu, không có quyền; xác nhận test đang trượt.", code: { lang: "text", content: "Viết test cho POST /api/loi và DELETE /api/loi/:id theo bảng đã duyệt. Chạy npm test và cho tôi xem các test đang trượt." } },
        { title: "Viết code tới khi đạt", detail: "Kèm các ràng buộc an toàn.", code: { lang: "text", content: "Viết code cho hai API để test đạt. Truy vấn tham số hoá, mật khẩu cơ sở dữ liệu đọc từ biến môi trường DATABASE_URL, kiểm tra quyền ở máy chủ, không log dữ liệu cá nhân. Chạy npm test tới khi đạt và cho tôi xem kết quả." } },
        { title: "Xem lại và commit", detail: "/diff: không có bí mật viết cứng, không có ghép chuỗi SQL; rồi commit." },
        { title: "Nối frontend", detail: "Màn hình Ghi lỗi gọi POST /api/loi; hiển thị đúng thông báo cho 400, 401." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Từ hai story trong dữ liệu mẫu, viết bảng API (ít nhất 3 dòng: phương thức + đường dẫn + lỗi có mã trạng thái) và liệt kê 3 ca test.",
      sampleData: {
        name: "Story (dự án đặt phòng họp)",
        content:
          "Story 1: Nhân viên đặt phòng theo khung giờ; không được đặt trùng.\nStory 2: Trưởng phòng hành chính huỷ được mọi lượt đặt; nhân viên chỉ huỷ lượt của mình.",
      },
      placeholder: "API:\n- …\nTest:\n- …",
      rubric: [
        { id: "apis", label: "Ít nhất 3 API", weight: 1, check: { kind: "minMatches", pattern: "(get|post|delete|put|patch)\\s+/", value: 3 }, pass: "Có bảng API.", fail: "Liệt kê ít nhất 3 API dạng “POST /api/…”." },
        { id: "conflict", label: "Lỗi đặt trùng", weight: 1, check: { kind: "regex", pattern: "(409|400)[^\\n]*(trung)|trung[^\\n]*(409|400)" }, pass: "Có xử lý trùng.", fail: "Nêu mã lỗi khi đặt trùng (ví dụ 409 hoặc 400)." },
        { id: "forbidden", label: "403 khi huỷ lượt người khác", weight: 1, check: { kind: "regex", pattern: "403" }, pass: "Có 403.", fail: "Nhân viên huỷ lượt người khác → 403." },
        { id: "tests", label: "Có 3 ca test", weight: 1, check: { kind: "regex", pattern: "test[\\s\\S]*(-[^\\n]+\\n[\\s\\S]*){2}-[^\\n]+" }, pass: "Có ca test.", fail: "Liệt kê 3 ca test dưới “Test:”." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "API:\n- GET /api/phong?ngay=… → 200 danh sách phòng và khung trống; 400 ngày không hợp lệ\n- POST /api/dat-phong → 201 đã đặt; 400 thiếu dữ liệu; 409 khung giờ bị trùng\n- DELETE /api/dat-phong/:id → 204 đã huỷ; 403 nhân viên huỷ lượt của người khác; 404 không tìm thấy\nTest:\n- Đặt khung trống hợp lệ → 201\n- Đặt trùng khung đã có người đặt → 409\n- Nhân viên A huỷ lượt của nhân viên B → 403",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Lập bảng API (phương thức, đường dẫn, vào/ra, lỗi) và mô hình dữ liệu trong plan mode; duyệt trước.",
        "Kiểm tra lại dữ liệu ở máy chủ; trả 201/400/401/403/404 kèm thông báo rõ.",
        "Truy vấn tham số hoá, phân quyền ở máy chủ, bí mật từ biến môi trường, không log dữ liệu cá nhân.",
        "Viết test trước (hợp lệ, sai dữ liệu, không quyền), xác nhận trượt, rồi code tới khi đạt.",
        "Luôn xem lệnh test và kết quả; /diff trước khi commit.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Tiếp tục dự án của bạn sau bài 9.4.",
      tasks: [
        "Lập bảng API và mô hình dữ liệu cho các story “Phải có”.",
        "Cho Claude viết test trước, xem test trượt, rồi viết code tới khi đạt.",
        "Rà /diff tìm bí mật viết cứng, ghép chuỗi SQL, log dữ liệu cá nhân.",
      ],
      deliverable: "Bảng API + kết quả npm test đạt + commit backend.",
      checklist: ["Mỗi API có ca không hợp lệ và không có quyền", "Không có bí mật trong code", "Frontend hiển thị đúng thông báo lỗi"],
    },
  ],
};
