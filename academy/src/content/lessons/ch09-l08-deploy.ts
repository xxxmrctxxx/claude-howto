import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const SK = "https://code.claude.com/docs/en/skills";
const WF = "https://github.com/xxxmrctxxx/claude-howto/blob/main/.github/workflows/pages.yml";

export const lessonDeploy: Lesson = {
  id: "ch09-l08",
  chapterId: "ch09",
  slug: "deploy",
  title: "Deploy",
  subtitle: "Đưa website lên mạng an toàn: chọn nơi triển khai theo loại ứng dụng, tự động hoá build/deploy, đặt bí mật đúng chỗ, kiểm tra bản thật và có sẵn đường quay lui.",
  level: "advanced",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Phân biệt site tĩnh và ứng dụng có backend; chọn nơi triển khai phù hợp." },
    { id: "o2", text: "Đọc hiểu một pipeline tự động: đẩy lên nhánh chính → build → tải bản build → deploy." },
    { id: "o3", text: "Đặt bí mật và cấu hình (biến môi trường, đường dẫn gốc) trên nơi triển khai, không trong code." },
    { id: "o4", text: "Sau deploy: kiểm tra khói trên bản thật, theo dõi log, quay lui khi cần; giữ quyền duyệt bước deploy." },
  ],
  concepts: [
    { id: "static-vs-backend", label: "Site tĩnh và có backend" },
    { id: "hosting-choice", label: "Chọn nơi triển khai" },
    { id: "pipeline", label: "Pipeline build/deploy" },
    { id: "trigger-main", label: "Kích hoạt khi đẩy lên nhánh chính" },
    { id: "build-step", label: "Bước build" },
    { id: "base-path", label: "Đường dẫn gốc" },
    { id: "host-secrets", label: "Bí mật trên nơi triển khai" },
    { id: "smoke-test", label: "Kiểm tra khói" },
    { id: "rollback", label: "Quay lui" },
    { id: "monitor-logs", label: "Theo dõi log" },
    { id: "deploy-approval", label: "Duyệt bước deploy" },
    { id: "deploy-skill", label: "Skill /deploy" },
  ],
  hints: [
    "Chỉ có HTML/CSS/JS → site tĩnh. Có API và cơ sở dữ liệu → cần máy chủ chạy backend.",
    "Bí mật đặt trong cài đặt của nơi triển khai, không trong repo.",
    "Deploy xong phải mở bản thật, làm thử luồng chính.",
  ],
  sources: [
    { label: "Claude Code — Best practices (quy trình deploy chỉ nằm trong đầu một người → ghi lại; bằng chứng)", href: BP },
    { label: "Claude Code — Skills (disable-model-invocation cho skill có tác dụng phụ như deploy)", href: SK },
    { label: "Ví dụ thật: workflow pages.yml triển khai chính khoá học này", href: WF },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Deploy** là đưa website lên nơi người dùng truy cập được. Đầu tiên xác định **loại ứng dụng**: **site tĩnh** chỉ gồm HTML, CSS, JavaScript đã build sẵn — chỉ cần nơi phục vụ file (ví dụ GitHub Pages, như chính khoá học này); **ứng dụng có backend** (API, cơ sở dữ liệu như web theo dõi lỗi) cần **máy chủ chạy code** và cơ sở dữ liệu — máy chủ nội bộ của công ty hoặc dịch vụ hosting có hỗ trợ backend. Chọn nơi nhóm bạn được phép dùng và bảo trì được.",
        "**Tự động hoá** để deploy giống nhau mọi lần: một **pipeline** chạy khi bạn đẩy code lên nhánh chính. Ví dụ thật — workflow `pages.yml` của repo khoá học này: khi có thay đổi được đẩy lên `main`, GitHub Actions cài Node.js 22, chạy `npm ci` và `npm run build`, đặt **đường dẫn gốc** qua biến `ACADEMY_BASE_PATH`, tải bản build lên rồi deploy lên GitHub Pages. Không ai phải chép file bằng tay.",
        "**Bí mật và cấu hình** (mật khẩu cơ sở dữ liệu, khoá API) đặt trong **cài đặt bí mật/biến môi trường của nơi triển khai** hoặc của pipeline — không bao giờ trong repo. Best practices nhắc: *một quy trình deploy chỉ nằm trong đầu một người* là thứ Claude không thể biết — hãy ghi lại, ví dụ thành skill `/deploy` với `disable-model-invocation: true` để chỉ chạy khi chính bạn gõ.",
        "**Sau deploy**: làm **kiểm tra khói** trên bản thật — mở trang, đăng nhập, ghi một lỗi thử, xem thống kê (dữ liệu thử, xoá sau). **Theo dõi log** vài giờ đầu. Có vấn đề nghiêm trọng thì **quay lui**: revert commit gây lỗi và deploy lại bản trước. Deploy là hành động ra bên ngoài, ảnh hưởng người dùng thật — dặn Claude **dừng trước bước deploy** để bạn duyệt, và đọc kỹ các yêu cầu cấp quyền.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Đưa sản phẩm từ xưởng ra cửa hàng: hàng đóng gói sẵn (site tĩnh) chỉ cần kệ trưng bày; món ăn nấu tại chỗ (có backend) cần cả bếp và đầu bếp. Có quy trình xuất kho cố định (pipeline), chìa khoá kho giữ riêng (bí mật), bày hàng xong kiểm tra lại kệ (kiểm tra khói), và nếu lô hàng lỗi thì thu hồi về lô trước (quay lui).",
      },
      terms: [
        { term: "Deploy", definition: "Đưa phiên bản mới của ứng dụng lên nơi người dùng truy cập." },
        { term: "Pipeline", definition: "Chuỗi bước tự động: build, kiểm tra, deploy — chạy khi có thay đổi." },
        { term: "Kiểm tra khói (smoke test)", definition: "Thử nhanh các luồng chính trên bản thật ngay sau deploy." },
        { term: "Quay lui (rollback)", definition: "Trở về phiên bản trước khi bản mới gây lỗi nghiêm trọng." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: pipeline của chính khoá học này",
      infographic: {
        kind: "annotated",
        label: ".github/workflows/pages.yml (rút gọn)",
        lines: [
          { text: "on: push → branches: main (khi academy/** thay đổi)", note: "Kích hoạt khi đẩy lên nhánh chính", tone: "context" },
          { text: "permissions: pages: write, id-token: write", note: "Quyền tối thiểu để deploy Pages", tone: "constraints" },
          { text: "setup-node: node-version 22 → npm ci → npm run build", note: "Build giống nhau mọi lần", tone: "task" },
          { text: "env: ACADEMY_BASE_PATH = …/academy", note: "Đường dẫn gốc của site", tone: "role" },
          { text: "upload-pages-artifact → deploy", note: "Đưa bản build lên GitHub Pages", tone: "output" },
        ],
      },
      caption: "Trích workflow thật trong repo claude-howto (đối chiếu 03/11/2026). Đây là site tĩnh; ứng dụng có backend cần thêm máy chủ và cơ sở dữ liệu.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ merge đến bản thật",
      mermaid: `flowchart TD
  A["Test đạt, /code-review xong"] --> B["Merge vào nhánh chính"]
  B --> C["Pipeline: build"]
  C --> D{"Build thành công?"}
  D -->|"Không"| E["Sửa, không deploy"]
  D -->|"Có"| F["Deploy (bí mật lấy từ cài đặt nơi triển khai)"]
  F --> G["Kiểm tra khói trên bản thật"]
  G --> H{"Ổn?"}
  H -->|"Không"| I["Quay lui: revert + deploy lại bản trước"]
  H -->|"Có"| J["Theo dõi log, báo người dùng"]`,
      caption: "Deploy thất bại thì dừng; bản thật lỗi nghiêm trọng thì quay lui.",
      alt: "Lưu đồ: khi test đạt và /code-review xong thì merge vào nhánh chính; pipeline build; build thất bại thì sửa và không deploy; thành công thì deploy với bí mật lấy từ cài đặt nơi triển khai; kiểm tra khói trên bản thật; không ổn thì quay lui bằng revert và deploy lại bản trước; ổn thì theo dõi log và báo người dùng.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: lần deploy đầu tiên",
      bad: {
        label: "Deploy tay, bí mật trong code",
        content: "Chép file bằng tay lên máy chủ lúc 17h thứ Sáu; mật khẩu cơ sở dữ liệu viết trong server.js; không thử lại; về nhà.",
        notes: ["Không lặp lại được.", "Bí mật lộ trong repo.", "Lỗi cuối tuần không ai biết, không có đường quay lui."],
      },
      good: {
        label: "Pipeline + bí mật đúng chỗ + kiểm tra khói",
        content: "Sáng thứ Ba: merge sau khi test đạt → pipeline build và deploy → mật khẩu lấy từ biến môi trường của nơi triển khai → kiểm tra khói 5 bước trên bản thật → theo dõi log 2 giờ → sẵn lệnh revert nếu cần.",
        notes: ["Lặp lại được.", "Không bí mật trong repo.", "Phát hiện lỗi sớm, quay lui nhanh."],
      },
      takeaway: "Deploy tốt là deploy nhàm chán: tự động, có kiểm tra, có đường lui.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: sắp xếp quy trình deploy",
      sim: {
        kind: "sequence",
        items: [
          { id: "a", text: "Mọi test đạt, /code-review xong" },
          { id: "b", text: "Merge vào nhánh chính" },
          { id: "c", text: "Pipeline build" },
          { id: "d", text: "Pipeline deploy (bí mật từ cài đặt nơi triển khai)" },
          { id: "e", text: "Kiểm tra khói trên bản thật" },
          { id: "f", text: "Theo dõi log, báo người dùng" },
        ],
        explain: "Kiểm tra trước khi merge → tự động build/deploy → kiểm tra bản thật → theo dõi. Có lỗi nghiêm trọng ở bước kiểm tra khói thì quay lui.",
      },
      intro: "Sắp xếp các bước để một bản mới lên mạng an toàn.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: deploy với Claude Code",
      steps: [
        { title: "Chọn nơi triển khai", detail: "Site tĩnh hay cần backend? Nơi nào công ty cho phép, ai bảo trì?" },
        { title: "Nhờ Claude soạn pipeline, dừng trước khi deploy", detail: "Duyệt file pipeline như mọi thay đổi khác.", code: { lang: "text", content: "Soạn workflow build và deploy cho dự án theo nơi triển khai đã chọn: build khi đẩy lên main, chạy npm test trước khi deploy, đọc DATABASE_URL từ bí mật của pipeline. Không tự chạy deploy — dừng lại để tôi duyệt." } },
        { title: "Đặt bí mật trên nơi triển khai", detail: "Trong cài đặt bí mật của pipeline/hosting; repo chỉ có .env.example." },
        { title: "Ghi quy trình thành skill", detail: "Để quy trình không chỉ nằm trong đầu một người.", code: { lang: "markdown", content: "---\ndescription: Kiểm tra trước và sau khi deploy web-loi-qa.\ndisable-model-invocation: true\n---\n1. Xác nhận npm test đạt và đã merge vào main.\n2. Theo dõi pipeline tới khi deploy xong.\n3. Kiểm tra khói: mở trang, ghi lỗi thử, xem thống kê, xoá lỗi thử.\n4. Lỗi nghiêm trọng: git revert commit gây lỗi, đẩy lên main để deploy lại." } },
        { title: "Kiểm tra khói và theo dõi", detail: "Làm thử luồng chính trên bản thật; xem log vài giờ đầu; báo người dùng." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết kế hoạch deploy ngắn cho dự án trong dữ liệu mẫu: loại ứng dụng và nơi triển khai, bí mật đặt ở đâu, 3 bước kiểm tra khói, cách quay lui.",
      sampleData: {
        name: "Dự án web-loi-qa",
        content:
          "Có frontend, API và cơ sở dữ liệu. Công ty có máy chủ nội bộ chạy được Node.js. Mật khẩu cơ sở dữ liệu hiện nằm trong .env trên máy dev. Luồng chính: ghi lỗi, xem danh sách, xem thống kê tuần.",
      },
      placeholder: "Loại và nơi triển khai: …\nBí mật: …\nKiểm tra khói:\n1. …\nQuay lui: …",
      rubric: [
        { id: "type", label: "Nhận ra cần backend", weight: 1, check: { kind: "anyKeyword", keywords: ["backend", "máy chủ", "không phải site tĩnh"] }, pass: "Có loại ứng dụng.", fail: "Có API và cơ sở dữ liệu → cần máy chủ chạy backend." },
        { id: "secrets", label: "Bí mật ngoài repo", weight: 1, check: { kind: "anyKeyword", keywords: ["biến môi trường", "cài đặt bí mật", "secret"] }, pass: "Có bí mật đúng chỗ.", fail: "Mật khẩu đặt trong biến môi trường/bí mật của máy chủ hoặc pipeline." },
        { id: "smoke", label: "3 bước kiểm tra khói", weight: 1, check: { kind: "minMatches", pattern: "^\\s*\\d[.)]\\s*[a-z]", value: 3 }, pass: "Có kiểm tra khói.", fail: "Viết 3 bước kiểm tra khói đánh số." },
        { id: "rollback", label: "Cách quay lui", weight: 1, check: { kind: "anyKeyword", keywords: ["revert", "bản trước", "quay lui"] }, pass: "Có quay lui.", fail: "Nêu cách quay lui: revert và deploy lại bản trước." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Loại và nơi triển khai: có API và cơ sở dữ liệu nên không phải site tĩnh — chạy backend trên máy chủ nội bộ Node.js của công ty, deploy bằng pipeline khi merge vào main.\nBí mật: mật khẩu cơ sở dữ liệu đặt trong biến môi trường của máy chủ (hoặc bí mật của pipeline), không trong repo; repo chỉ có .env.example.\nKiểm tra khói:\n1. Mở trang và đăng nhập bằng tài khoản thử.\n2. Ghi một lỗi thử, thấy lỗi trong danh sách.\n3. Mở thống kê tuần, số khớp; xoá lỗi thử.\nQuay lui: git revert commit gây lỗi và đẩy lên main để deploy lại bản trước.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Site tĩnh chỉ cần nơi phục vụ file; ứng dụng có API/cơ sở dữ liệu cần máy chủ chạy backend.",
        "Pipeline tự động: đẩy lên nhánh chính → build → deploy (ví dụ thật: pages.yml của khoá học).",
        "Bí mật và cấu hình đặt trên nơi triển khai/pipeline, không trong repo; đường dẫn gốc cấu hình qua biến.",
        "Sau deploy: kiểm tra khói, theo dõi log, sẵn sàng quay lui (revert + deploy lại).",
        "Giữ quyền duyệt bước deploy; ghi quy trình thành skill /deploy chỉ chạy khi gọi tay.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Hoàn tất dự án Chương 9 của bạn.",
      tasks: [
        "Chọn nơi triển khai phù hợp và được phép; nhờ Claude soạn pipeline, tự duyệt trước khi chạy.",
        "Đặt bí mật đúng chỗ; deploy; làm kiểm tra khói trên bản thật.",
        "Ghi quy trình deploy và quay lui thành skill /deploy (chỉ gọi tay).",
      ],
      deliverable: "Đường dẫn bản thật + kết quả kiểm tra khói + file skill /deploy.",
      checklist: ["Không bí mật trong repo", "Kiểm tra khói đạt", "Có cách quay lui đã ghi lại"],
    },
  ],
};
