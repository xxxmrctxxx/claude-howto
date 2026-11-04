import type { Lesson } from "@/lib/types/content";

const AR = "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them";
const VI = "https://support.claude.com/en/articles/13641943-visual-and-interactive-content";
const FC = "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude";
const DO = "https://support.claude.com/en/articles/16923645-get-started-with-claude-docs";

export const lessonArtifactsLaGi: Lesson = {
  id: "ch04-l01",
  chapterId: "ch04",
  slug: "artifacts-la-gi",
  title: "Artifacts là gì?",
  subtitle: "Bốn dạng kết quả Claude có thể đưa ra — chữ, hình trực quan trong chat, artifact, file tải về — và khi nào chọn artifact cùng các mẫu Docs, Slides, Design, Dashboards.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Phân biệt bốn dạng đầu ra: chữ trong chat, hình trực quan trong chat, artifact, file tải về." },
    { id: "o2", text: "Biết các mẫu artifact (Docs, Slides, Design, Dashboards, Motion) và gói nào dùng được." },
    { id: "o3", text: "Hiểu artifact có dùng Claude bên trong và dữ liệu: không cần API key, tính vào lượt dùng của từng người, ứng dụng kết nối cần người dùng duyệt, lưu trữ có giới hạn." },
    { id: "o4", text: "Chọn đúng dạng đầu ra cho từng nhu cầu công việc văn phòng." },
  ],
  concepts: [
    { id: "output-forms", label: "Bốn dạng đầu ra" },
    { id: "custom-visuals", label: "Hình trực quan trong chat" },
    { id: "artifact-window", label: "Artifact" },
    { id: "file-creation", label: "File tải về (xlsx, pptx, docx, pdf)" },
    { id: "templates", label: "Mẫu artifact" },
    { id: "docs-template", label: "Claude Docs" },
    { id: "dashboards-beta", label: "Dashboards (beta)" },
    { id: "ai-in-artifact", label: "Artifact có dùng Claude" },
    { id: "connected-apps", label: "Ứng dụng kết nối" },
    { id: "artifact-storage", label: "Lưu trữ của artifact" },
    { id: "legacy-artifacts", label: "Artifact kiểu cũ" },
    { id: "choose-form", label: "Chọn dạng đầu ra" },
  ],
  hints: [
    "Cần đưa cho người khác, sửa nhiều lần → artifact. Cần file Excel/PowerPoint để gửi → file tải về.",
    "Mẫu Docs, Slides, Design có trên mọi gói; Dashboards (beta) từ gói Pro trở lên.",
    "Artifact dùng Claude bên trong: mỗi người dùng tốn lượt của chính họ.",
  ],
  sources: [
    { label: "Claude Help Center — What are artifacts and how do I use them?", href: AR },
    { label: "Claude Help Center — Visual and interactive content", href: VI },
    { label: "Claude Help Center — Create and edit files with Claude", href: FC },
    { label: "Claude Help Center — Get started with Claude Docs", href: DO },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude có thể trả kết quả theo **bốn dạng**. (1) **Chữ trong chat** — câu trả lời thông thường. (2) **Hình trực quan trong chat** — biểu đồ, sơ đồ, phần tương tác nhỏ Claude dựng ngay trong cuộc trò chuyện khi hình rõ hơn chữ (tính năng *custom visuals*, beta, trên web và ứng dụng máy tính); ví dụ tải CSV lên có thể nhận một biểu đồ khám phá được. (3) **Artifact** — sản phẩm mở ở cửa sổ riêng, sửa, quay lại và chia sẻ được, lưu ở tab Artifacts. (4) **File tải về** — Claude tạo file **Excel, PowerPoint, Word, PDF** (tối đa 30 MB) để bạn tải xuống hoặc lưu vào Google Drive.",
        "Artifact có các **mẫu** (template): **Docs** — tài liệu văn bản có tiêu đề, bảng, nhiều tab; **Slides** — bản trình chiếu; **Design** — thiết kế; ba mẫu này có trên **mọi gói**. **Dashboards** (beta) có từ gói **Pro** trở lên, **Motion** (beta) cho Team và Enterprise. Ngoài mẫu, Claude còn tạo trang web một trang, sơ đồ, công cụ tương tác nhỏ… Claude Docs có thể tạo bằng cách hỏi trong chat, gõ `/docs`, hoặc chọn mẫu ở tab Artifacts; Claude thường hỏi lại vài câu trước khi viết.",
        "Một số artifact **dùng Claude bên trong** (ví dụ công cụ tóm tắt văn bản cho cả phòng): **không cần API key**, và **mỗi người dùng tốn lượt dùng của chính họ**. Artifact lấy dữ liệu từ **ứng dụng kết nối** thì cần người dùng **duyệt**, mỗi người kết nối ứng dụng của mình. Dữ liệu artifact lưu được tối đa **20 MB** và chỉ dạng văn bản. Artifact kiểu cũ (tạo trước 16/09/2026) vẫn chạy nhưng không tạo mới được nữa.",
        "**Chọn dạng nào?** Câu trả lời ngắn → chữ. Muốn *hiểu nhanh* một bảng số liệu ngay trong lúc trò chuyện → hình trực quan trong chat. Sản phẩm sẽ **sửa nhiều lần, quay lại sau, đưa cho người khác xem/dùng** → artifact (tài liệu nhóm cùng sửa → Docs; buổi họp → Slides). Người nhận cần **đúng một file Excel/PowerPoint/Word** để lưu trữ hay chỉnh trong phần mềm của họ → file tải về. Lưu ý: artifact và tạo file đều cần khả năng *Code execution and file creation* (giao diện mới: *Create and edit files*) đang bật — mặc định là bật.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Hỏi một chuyên viên: có lúc họ trả lời miệng (chữ), có lúc vẽ nhanh lên bảng trắng (hình trong chat), có lúc mở hồ sơ dùng chung để cả nhóm cùng chỉnh (artifact), có lúc gửi bạn đúng một file Excel để nộp lên trên (file tải về). Chọn đúng hình thức thì đỡ phải làm lại.",
      },
      terms: [
        { term: "Custom visuals", definition: "Biểu đồ, sơ đồ, phần tương tác Claude dựng ngay trong chat (beta, web và máy tính)." },
        { term: "Template", definition: "Mẫu artifact có sẵn: Docs, Slides, Design, Dashboards, Motion." },
        { term: "Claude Docs", definition: "Tài liệu văn bản lưu trong tài khoản, sửa trực tiếp, bình luận, xuất Word/PDF/Markdown/Google Docs." },
        { term: "File creation", definition: "Khả năng Claude tạo và sửa file Excel, PowerPoint, Word, PDF để tải về." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bốn dạng đầu ra",
      infographic: {
        kind: "table",
        headers: ["Dạng", "Nằm ở đâu", "Hợp khi"],
        rows: [
          ["Chữ trong chat", "Trong cuộc trò chuyện", "Hỏi đáp, giải thích ngắn"],
          ["Hình trực quan trong chat (beta)", "Trong cuộc trò chuyện", "Hiểu nhanh số liệu, sơ đồ minh hoạ"],
          ["Artifact (Docs, Slides, Design, trang web, công cụ…)", "Cửa sổ riêng + tab Artifacts", "Sửa nhiều lần, quay lại, chia sẻ"],
          ["File tải về (.xlsx .pptx .docx .pdf)", "Tải xuống / Google Drive", "Người nhận cần đúng một file"],
        ],
      },
      caption: "Theo các bài Artifacts, Visual and interactive content, Create and edit files của Help Center (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: chọn dạng đầu ra",
      mermaid: `flowchart TD
  A["Bạn cần gì?"] --> B{"Chỉ cần câu trả lời?"}
  B -->|"Có"| C["Chữ trong chat"]
  B -->|"Không"| D{"Chỉ để hiểu nhanh lúc này?"}
  D -->|"Có"| E["Hình trực quan trong chat"]
  D -->|"Không"| F{"Người nhận cần một file Office/PDF?"}
  F -->|"Có"| G["File tải về"]
  F -->|"Không"| H["Artifact"]
  H --> I["Docs · Slides · Design · Dashboards · trang web · công cụ"]`,
      caption: "Sản phẩm sống, sửa và chia sẻ trên Claude → artifact; cần file rời → file tải về.",
      alt: "Lưu đồ chọn dạng đầu ra: nếu chỉ cần câu trả lời thì chữ trong chat; nếu chỉ để hiểu nhanh lúc này thì hình trực quan trong chat; nếu người nhận cần một file Office hoặc PDF thì file tải về; còn lại là artifact, gồm Docs, Slides, Design, Dashboards, trang web, công cụ.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: chọn dạng cho báo cáo tuần",
      bad: {
        label: "Không nói dạng, nhận về đoạn chữ dài",
        content: "“Làm báo cáo tuần từ file CSV này.”\n→ Claude trả một đoạn chữ dài trong chat; bạn phải tự chép sang Word, tự vẽ biểu đồ.",
        notes: ["Không rõ người đọc cần gì.", "Phải làm lại thủ công.", "Khó sửa chung với nhóm."],
      },
      good: {
        label: "Nói rõ dạng theo người nhận",
        content: "“Từ file CSV này, tạo một Claude Doc ‘Báo cáo lỗi tuần 44’ để cả nhóm cùng sửa: tóm tắt 5 gạch đầu dòng, bảng lỗi theo công đoạn, và một biểu đồ cột. Sau đó xuất thêm bản PDF để gửi quản lý.”",
        notes: ["Nhóm sửa chung trên Docs.", "Quản lý nhận đúng một file PDF.", "Có cấu trúc để kiểm tra."],
      },
      takeaway: "Nghĩ tới người nhận trước: họ cần xem, cùng sửa, hay cần một file?",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn dạng đầu ra",
      sim: {
        kind: "choose",
        options: [
          { id: "text", label: "Chữ trong chat" },
          { id: "visual", label: "Hình trực quan trong chat" },
          { id: "docs", label: "Artifact: Claude Docs" },
          { id: "slides", label: "Artifact: Slides" },
          { id: "tool", label: "Artifact: công cụ tương tác" },
          { id: "file", label: "File tải về (Excel, Word…)" },
        ],
        scenarios: [
          { id: "s1", text: "Hỏi nhanh: “Hàm VLOOKUP dùng để làm gì?”", answer: "text", why: "Câu trả lời ngắn." },
          { id: "s2", text: "Đang trao đổi, muốn nhìn nhanh xu hướng lỗi trong file CSV vừa tải.", answer: "visual", why: "Hiểu nhanh ngay trong cuộc trò chuyện." },
          { id: "s3", text: "Quy trình nhận ca mà 4 tổ trưởng sẽ cùng góp ý và chỉnh sửa trong tuần.", answer: "docs", why: "Tài liệu nhóm cùng sửa, bình luận." },
          { id: "s4", text: "Chuẩn bị 8 trang trình bày cho cuộc họp giao ban thứ Hai.", answer: "slides", why: "Bản trình chiếu, xuất PowerPoint/PDF khi cần." },
          { id: "s5", text: "Công cụ để công nhân tự tính giờ tăng ca trên điện thoại.", answer: "tool", why: "Sản phẩm tương tác dùng nhiều lần." },
          { id: "s6", text: "Phòng kế toán yêu cầu nộp đúng một file Excel có công thức.", answer: "file", why: "Người nhận cần một file Office." },
        ],
      },
      intro: "Với mỗi nhu cầu, dạng đầu ra nào hợp nhất?",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: yêu cầu đúng dạng đầu ra",
      steps: [
        { title: "Xác định người nhận và cách họ dùng", detail: "Xem, cùng sửa, trình chiếu, hay cần một file?" },
        { title: "Kiểm tra khả năng tạo file", detail: "Settings > Capabilities: Code execution and file creation (hoặc Create and edit files) đang bật." },
        { title: "Nói rõ dạng trong yêu cầu", detail: "Ví dụ tạo tài liệu bằng Docs.", code: { lang: "text", content: "/docs Soạn “Quy trình nhận ca” cho tổ sản xuất: 6 bước, mỗi bước 1–2 câu, có bảng trách nhiệm và phần Điều cần nhớ." } },
        { title: "Trả lời câu hỏi làm rõ của Claude", detail: "Với Docs, Claude thường hỏi lại vài câu trước khi viết." },
        { title: "Tìm lại ở tab Artifacts", detail: "Mọi artifact (kể cả Docs, Slides) được lưu ở đó để sửa tiếp." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Với mỗi nhu cầu N1–N5 trong dữ liệu mẫu, chọn một dạng đầu ra và giải thích ngắn vì sao.",
      sampleData: {
        name: "Nhu cầu của phòng kế hoạch",
        content:
          "N1: Hỏi định nghĩa “tồn kho an toàn”.\nN2: Tài liệu chính sách mua hàng mà 3 phòng sẽ cùng góp ý.\nN3: File Excel kế hoạch vật tư để nộp lên hệ thống của tập đoàn.\nN4: 10 trang trình bày kết quả quý cho ban giám đốc.\nN5: Công cụ để nhân viên tự tính số lượng đặt hàng từ tồn kho hiện tại.",
      },
      placeholder: "N1: … vì …\nN2: …\nN3: …\nN4: …\nN5: …",
      rubric: [
        { id: "n1", label: "N1: chữ trong chat", weight: 1, check: { kind: "regex", pattern: "n1[^\\n]*(chu|chat|tra loi)" }, pass: "N1 đúng.", fail: "N1: câu hỏi ngắn → chữ trong chat." },
        { id: "n2", label: "N2: Docs", weight: 1, check: { kind: "regex", pattern: "n2[^\\n]*(docs|tai lieu)" }, pass: "N2 đúng.", fail: "N2: nhiều người cùng góp ý → Claude Docs." },
        { id: "n3", label: "N3: file Excel tải về", weight: 1, check: { kind: "regex", pattern: "n3[^\\n]*(file|excel|xlsx|tai ve)" }, pass: "N3 đúng.", fail: "N3: cần đúng một file → file Excel tải về." },
        { id: "n4", label: "N4: Slides", weight: 1, check: { kind: "regex", pattern: "n4[^\\n]*(slides|trinh chieu|powerpoint)" }, pass: "N4 đúng.", fail: "N4: trình bày → Slides." },
        { id: "n5", label: "N5: công cụ tương tác", weight: 1, check: { kind: "regex", pattern: "n5[^\\n]*(cong cu|tuong tac|ung dung|artifact)" }, pass: "N5 đúng.", fail: "N5: dùng nhiều lần, có nhập liệu → artifact công cụ tương tác." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "N1: chữ trong chat — chỉ cần câu trả lời ngắn.\nN2: Claude Docs — ba phòng cùng sửa và bình luận trên một tài liệu.\nN3: file Excel tải về — hệ thống tập đoàn cần đúng một file .xlsx.\nN4: Slides — bản trình chiếu, xuất PowerPoint hoặc PDF khi cần.\nN5: artifact công cụ tương tác — nhân viên nhập tồn kho và dùng lại nhiều lần.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Bốn dạng: chữ trong chat, hình trực quan trong chat (beta), artifact, file tải về (xlsx, pptx, docx, pdf; ≤ 30 MB).",
        "Mẫu artifact: Docs, Slides, Design (mọi gói); Dashboards (beta, từ Pro); Motion (beta, Team/Enterprise).",
        "Artifact dùng Claude bên trong: không cần API key, mỗi người tốn lượt của chính họ; ứng dụng kết nối cần người dùng duyệt; lưu trữ ≤ 20 MB văn bản.",
        "Artifact kiểu cũ (trước 16/09/2026) vẫn chạy nhưng không tạo mới.",
        "Chọn theo người nhận: xem/cùng sửa/trình chiếu → artifact; cần một file → file tải về.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Nhìn lại 5 sản phẩm bạn làm thường xuyên (báo cáo, biểu mẫu, bản trình bày…).",
      tasks: [
        "Với mỗi sản phẩm, ghi người nhận và cách họ dùng.",
        "Chọn dạng đầu ra phù hợp nhất cho từng sản phẩm.",
        "Thử làm một sản phẩm bằng dạng bạn vừa chọn và ghi lại thời gian tiết kiệm được.",
      ],
      deliverable: "Bảng: Sản phẩm | Người nhận | Cách dùng | Dạng đầu ra | Lý do.",
      checklist: ["Đã nghĩ tới người nhận", "Đúng dạng cho từng việc", "Đã thử ít nhất một sản phẩm"],
    },
  ],
};
