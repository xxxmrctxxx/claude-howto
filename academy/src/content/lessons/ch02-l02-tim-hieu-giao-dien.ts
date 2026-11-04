import type { Lesson } from "@/lib/types/content";

const GS = "https://support.claude.com/en/articles/8114491-get-started-with-claude";
const UP = "https://support.claude.com/en/articles/8241126-upload-files-to-claude";
const DR = "https://support.claude.com/en/articles/8230524-delete-or-rename-a-conversation";
const IN = "https://support.claude.com/en/articles/12260368-use-incognito-chats";
const ME = "https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context";

export const lessonTimHieuGiaoDien: Lesson = {
  id: "ch02-l02",
  chapterId: "ch02",
  slug: "tim-hieu-giao-dien",
  title: "Tìm hiểu giao diện",
  subtitle: "Ô nhập, nút +, bộ chọn model, thanh bên, chat ẩn danh và phần cài đặt — biết mỗi thứ nằm đâu, dùng để làm gì.",
  level: "beginner",
  estimatedMinutes: 15,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Nhận ra các vùng chính: ô nhập và nút gửi, nút +, bộ chọn model, thanh bên, khu vực hội thoại." },
    { id: "o2", text: "Biết đổi model ở đâu trên web/máy tính và trên điện thoại." },
    { id: "o3", text: "Tìm được các thao tác hay dùng: đính kèm file, chat ẩn danh, đổi tên/xoá hội thoại, cài đặt bộ nhớ." },
    { id: "o4", text: "Tự định hướng khi giao diện thay đổi: đọc nhãn, dùng nút + hoặc gõ /, tra Help Center." },
  ],
  concepts: [
    { id: "chat-input", label: "Ô nhập và nút gửi" },
    { id: "plus-button", label: "Nút +" },
    { id: "slash-menu", label: "Gõ /" },
    { id: "model-selector", label: "Bộ chọn model" },
    { id: "sidebar", label: "Thanh bên" },
    { id: "artifacts-tab", label: "Tab Artifacts" },
    { id: "incognito-icon", label: "Biểu tượng chat ẩn danh" },
    { id: "chat-menu", label: "Menu ⋮ của hội thoại" },
    { id: "settings-your-claude", label: "Settings > Your Claude" },
    { id: "capabilities", label: "Settings > Capabilities" },
    { id: "effort-thinking", label: "Effort và extended thinking" },
    { id: "ui-changes", label: "Giao diện thay đổi theo thời gian" },
  ],
  hints: [
    "Đính kèm file: nút + ở góc dưới bên trái ô nhập → Add files or photos.",
    "Đổi model: bấm tên model bên dưới ô nhập (web, máy tính) hoặc ở đầu màn hình (điện thoại).",
    "Chat ẩn danh: biểu tượng con ma ở góc trên bên phải.",
  ],
  sources: [
    { label: "Claude Help Center — Get started with Claude (ô nhập, nút +, gõ /, bộ chọn model, cài đặt)", href: GS },
    { label: "Claude Help Center — Upload files to Claude (nút + → Add files or photos, kéo thả, dán ảnh)", href: UP },
    { label: "Claude Help Center — Delete or rename a conversation (menu ⋮, Chats and tasks)", href: DR },
    { label: "Claude Help Center — Use incognito chats (biểu tượng con ma)", href: IN },
    { label: "Claude Help Center — Chat search and memory (Settings > Your Claude)", href: ME },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Màn hình Claude có ba vùng chính. **Ô nhập** ở dưới: gõ yêu cầu rồi bấm nút gửi. Ở góc dưới bên trái ô nhập có **nút +**: chọn *Add files or photos* để đính kèm file hoặc ảnh, cùng các tuỳ chọn khác; bạn cũng có thể **gõ `/`** để mở nhanh các lệnh và tuỳ chọn. Ngay dưới ô nhập (web và ứng dụng máy tính) là **tên model đang dùng** — bấm vào để mở bộ chọn model; trên điện thoại, bộ chọn model nằm ở **đầu màn hình**.",
        "**Thanh bên** bên trái là nơi bắt đầu chat mới và quay lại công việc cũ: danh sách hội thoại (mục *Chats and tasks*), **Projects**, và tab **Artifacts** chứa mọi artifact bạn đã tạo. Mỗi hội thoại có **nút ⋮** để **Rename** (đổi tên) hoặc **Delete** (xoá). Khi mở một chat mới (ngoài project), **biểu tượng con ma** ở góc trên bên phải bật **chat ẩn danh** — không lưu vào lịch sử và bộ nhớ.",
        "**Cài đặt** (Settings) chứa các lựa chọn cá nhân: ngôn ngữ, giao diện; mục **Your Claude** quản lý bộ nhớ (*Generate memory from chats*) và tìm kiếm chat cũ; mục **Capabilities** bật các khả năng như *Cloud code execution and file creation* (cần cho artifact và đọc file XLSX). Bạn cũng có thể điều chỉnh **mức effort** Claude bỏ ra và bật/tắt **extended thinking** (suy nghĩ mở rộng) khi cần.",
        "Giao diện Claude **thay đổi khá thường xuyên** — tên nút, vị trí có thể khác với bài này. Khi không tìm thấy, hãy: đọc nhãn khi rê chuột, thử nút + hoặc gõ `/`, và tra **Help Center** (support.claude.com). Bài học này mô tả bằng **sơ đồ chữ**, không dùng ảnh chụp màn hình giả.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Giống bảng điều khiển ô tô mới: vô lăng (ô nhập) dùng liên tục, cần số (bộ chọn model) đổi khi cần, hộc đồ (nút +) để thêm đồ, gương chiếu hậu (thanh bên) để xem lại đường đã đi. Xe đời mới có thể dời nút sang chỗ khác — đọc ký hiệu và sách hướng dẫn là tìm ra.",
      },
      terms: [
        { term: "Bộ chọn model", definition: "Nơi đổi model Claude cho hội thoại; hiện tên model đang dùng." },
        { term: "Thanh bên", definition: "Cột bên trái chứa chat mới, danh sách hội thoại, Projects, Artifacts." },
        { term: "Chat ẩn danh", definition: "Chat tạm thời, không lưu vào lịch sử và bộ nhớ của Claude." },
        { term: "Extended thinking", definition: "Chế độ để Claude suy nghĩ kỹ hơn trước khi trả lời." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: sơ đồ chữ màn hình claude.ai",
      infographic: {
        kind: "annotated",
        label: "Bố cục (minh hoạ bằng chữ, không phải ảnh chụp)",
        lines: [
          { text: "[Thanh bên trái]  Chat mới · Chats and tasks · Projects · Artifacts", note: "Bắt đầu và quay lại công việc", tone: "context" },
          { text: "[Góc trên phải]   👻 Chat ẩn danh", note: "Không lưu lịch sử, không dùng bộ nhớ", tone: "constraints" },
          { text: "[Vùng giữa]       Hội thoại · artifact mở ở cửa sổ bên cạnh", note: "Nơi đọc câu trả lời", tone: "neutral" },
          { text: "[Ô nhập]          Gõ yêu cầu …                         [Gửi]", note: "Gõ / để mở lệnh nhanh", tone: "task" },
          { text: "[Dưới ô nhập]     ( + )   Tên model đang dùng ▾", note: "+ để đính kèm; bấm tên model để đổi", tone: "role" },
        ],
      },
      caption: "Theo mô tả trong Help Center (đối chiếu 03/11/2026). Vị trí thật có thể khác theo thiết bị và phiên bản.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: muốn làm gì, tìm ở đâu",
      mermaid: `flowchart LR
  A["Muốn…"] --> B["Hỏi Claude"] --> B1["Ô nhập + nút gửi"]
  A --> C["Đính kèm file/ảnh"] --> C1["Nút + → Add files or photos"]
  A --> D["Đổi model"] --> D1["Bấm tên model dưới ô nhập"]
  A --> E["Chat không lưu"] --> E1["Biểu tượng con ma, góc trên phải"]
  A --> F["Đổi tên/xoá hội thoại"] --> F1["Nút ⋮ cạnh hội thoại"]
  A --> G["Bật/tắt bộ nhớ"] --> G1["Settings > Your Claude"]`,
      caption: "Sáu việc hay làm nhất và nơi tìm chúng.",
      alt: "Sơ đồ: muốn hỏi Claude thì dùng ô nhập và nút gửi; đính kèm file hoặc ảnh thì nút + rồi Add files or photos; đổi model thì bấm tên model dưới ô nhập; chat không lưu thì biểu tượng con ma ở góc trên phải; đổi tên hoặc xoá hội thoại thì nút ba chấm cạnh hội thoại; bật tắt bộ nhớ thì Settings, mục Your Claude.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: đổi model",
      bad: {
        label: "Nhờ Claude tự đổi",
        content: "Gõ vào ô chat: “Từ giờ hãy dùng model mạnh nhất nhé.”",
        notes: ["Model được chọn trong giao diện, không đổi bằng lời nhờ.", "Claude có thể trả lời như đã đổi nhưng model không đổi.", "Mất một lượt dùng."],
      },
      good: {
        label: "Dùng bộ chọn model",
        content: "Bấm tên model ngay dưới ô nhập (trên điện thoại: đầu màn hình) → chọn model phù hợp → gửi yêu cầu.",
        notes: ["Đổi thật, thấy rõ tên model.", "Chọn model theo việc: nhanh hay suy luận sâu.", "Xem lại Chương 1 bài Các phiên bản."],
      },
      takeaway: "Thao tác giao diện làm bằng giao diện; ô chat dành cho nội dung công việc.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: bấm vào đâu?",
      sim: {
        kind: "choose",
        options: [
          { id: "input", label: "Ô nhập và nút gửi" },
          { id: "plus", label: "Nút +" },
          { id: "model", label: "Tên model dưới ô nhập" },
          { id: "ghost", label: "Biểu tượng con ma" },
          { id: "dots", label: "Nút ⋮ cạnh hội thoại" },
          { id: "settings", label: "Settings > Your Claude" },
        ],
        scenarios: [
          { id: "s1", text: "Đính kèm file báo cáo PDF để Claude tóm tắt.", answer: "plus", why: "Nút + → Add files or photos (hoặc kéo thả)." },
          { id: "s2", text: "Chuyển sang một model khác cho câu hỏi khó.", answer: "model", why: "Bấm tên model để mở bộ chọn." },
          { id: "s3", text: "Hỏi một việc riêng tư, không muốn lưu vào lịch sử chat.", answer: "ghost", why: "Chat ẩn danh không lưu vào lịch sử và bộ nhớ." },
          { id: "s4", text: "Đổi tên hội thoại “Untitled” thành “Báo cáo lỗi tuần 44”.", answer: "dots", why: "Nút ⋮ → Rename." },
          { id: "s5", text: "Tắt việc Claude tự tạo bộ nhớ từ các cuộc chat.", answer: "settings", why: "Settings > Your Claude → Generate memory from chats." },
          { id: "s6", text: "Đặt câu hỏi đầu tiên cho Claude.", answer: "input", why: "Gõ vào ô nhập và bấm gửi." },
        ],
      },
      intro: "Mỗi việc dưới đây làm ở một chỗ trên giao diện. Chọn đúng chỗ.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: một vòng làm quen giao diện",
      steps: [
        { title: "Gửi một câu hỏi", detail: "Gõ vào ô nhập, bấm gửi; đọc câu trả lời ở vùng giữa." },
        { title: "Mở nút + và thử gõ /", detail: "Xem các tuỳ chọn có sẵn: đính kèm file, các công cụ, bật/tắt tính năng cho chat này." },
        { title: "Mở bộ chọn model", detail: "Bấm tên model dưới ô nhập; xem danh sách, chưa cần đổi." },
        { title: "Đổi tên hội thoại", detail: "Ở thanh bên, bấm ⋮ cạnh hội thoại → Rename, đặt tên có nghĩa." },
        { title: "Xem Settings", detail: "Tìm mục Your Claude (bộ nhớ, tìm kiếm chat) và Capabilities (các khả năng như tạo file)." },
        { title: "Thử chat ẩn danh", detail: "Mở chat mới, bấm biểu tượng con ma; để ý viền đen và nhãn Incognito chat." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết hướng dẫn “muốn làm gì → bấm ở đâu” cho 5 việc trong dữ liệu mẫu (V1–V5), mỗi việc một dòng.",
      sampleData: {
        name: "5 việc của người mới",
        content:
          "V1: Gửi ảnh chụp màn hình lỗi cho Claude.\nV2: Chuyển sang model khác.\nV3: Mở một cuộc chat không lưu lịch sử.\nV4: Xoá một hội thoại cũ.\nV5: Xem lại các artifact đã tạo trước đây.",
      },
      placeholder: "V1: …\nV2: …\nV3: …\nV4: …\nV5: …",
      rubric: [
        { id: "v1", label: "V1: nút + / kéo thả / dán", weight: 1, check: { kind: "regex", pattern: "v1[^\\n]*(\\+|add files|keo tha|dan)" }, pass: "V1 đúng.", fail: "V1: nút + → Add files or photos, hoặc kéo thả, dán ảnh." },
        { id: "v2", label: "V2: bộ chọn model", weight: 1, check: { kind: "regex", pattern: "v2[^\\n]*(ten model|bo chon model|model)" }, pass: "V2 đúng.", fail: "V2: bấm tên model dưới ô nhập." },
        { id: "v3", label: "V3: con ma / ẩn danh", weight: 1, check: { kind: "regex", pattern: "v3[^\\n]*(con ma|an danh|incognito)" }, pass: "V3 đúng.", fail: "V3: biểu tượng con ma (chat ẩn danh)." },
        { id: "v4", label: "V4: nút ⋮ → Delete", weight: 1, check: { kind: "regex", pattern: "v4[^\\n]*(⋮|ba cham|delete|xoa)" }, pass: "V4 đúng.", fail: "V4: nút ⋮ cạnh hội thoại → Delete." },
        { id: "v5", label: "V5: tab Artifacts", weight: 1, check: { kind: "regex", pattern: "v5[^\\n]*artifacts" }, pass: "V5 đúng.", fail: "V5: tab Artifacts ở thanh bên." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "V1: bấm nút + ở góc dưới trái ô nhập → Add files or photos (hoặc kéo thả, dán ảnh).\nV2: bấm tên model bên dưới ô nhập để mở bộ chọn model.\nV3: mở chat mới, bấm biểu tượng con ma ở góc trên phải (chat ẩn danh).\nV4: ở thanh bên, bấm nút ⋮ cạnh hội thoại → Delete và xác nhận.\nV5: mở tab Artifacts ở thanh bên.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Ô nhập + nút gửi để hỏi; nút + (góc dưới trái) để đính kèm và tuỳ chọn; gõ / để mở lệnh nhanh.",
        "Bộ chọn model: dưới ô nhập (web, máy tính), đầu màn hình (điện thoại).",
        "Thanh bên: chat mới, Chats and tasks, Projects, Artifacts; nút ⋮ để đổi tên/xoá.",
        "Biểu tượng con ma: chat ẩn danh. Settings: Your Claude (bộ nhớ, tìm chat), Capabilities (tạo file, chạy code).",
        "Giao diện hay thay đổi: đọc nhãn, thử + hoặc /, tra Help Center.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Thực hiện trên tài khoản Claude của bạn, trên cả máy tính và điện thoại nếu có.",
      tasks: [
        "Làm đủ 6 bước làm quen ở phần hướng dẫn trên máy tính.",
        "Trên điện thoại, tìm bộ chọn model và cách đổi tên một hội thoại; ghi lại điểm khác với máy tính.",
        "Đặt tên có nghĩa cho 3 hội thoại gần nhất.",
      ],
      deliverable: "Bảng: Việc | Vị trí trên máy tính | Vị trí trên điện thoại | Ghi chú.",
      checklist: ["Tìm được nút + và bộ chọn model", "Đã thử chat ẩn danh", "Đã xem Settings > Your Claude"],
    },
  ],
};
