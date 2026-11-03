import type { Lesson } from "@/lib/types/content";

const WP = "https://support.claude.com/en/articles/9517075-what-are-projects";
const CM = "https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects";
const RG = "https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects";
const ME = "https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context";

export const lessonSuDungProjects: Lesson = {
  id: "ch02-l05",
  chapterId: "ch02",
  slug: "su-dung-projects",
  title: "Sử dụng Projects",
  subtitle: "Project là không gian làm việc riêng: tài liệu nền, hướng dẫn chung và các chat cùng chủ đề — tạo đúng cách để không phải dán lại bối cảnh mỗi lần.",
  level: "beginner",
  estimatedMinutes: 20,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích Project: không gian riêng có kiến thức (knowledge), hướng dẫn (instructions), lịch sử chat và bộ nhớ riêng." },
    { id: "o2", text: "Tạo project, thêm kiến thức, đặt hướng dẫn, và chuyển chat cũ vào project." },
    { id: "o3", text: "Hiểu giới hạn và cách Claude dùng kiến thức: Free tối đa 5 project, chat không chia sẻ ngữ cảnh ngoài knowledge, chế độ RAG trên gói trả phí." },
    { id: "o4", text: "Quyết định khi nào dùng project và quản lý project: lưu trữ, xoá, chia sẻ trong nhóm." },
  ],
  concepts: [
    { id: "project-def", label: "Project" },
    { id: "project-knowledge", label: "Kiến thức của project" },
    { id: "project-instructions", label: "Hướng dẫn của project" },
    { id: "name-not-seen", label: "Tên và mô tả Claude không thấy" },
    { id: "create-project", label: "Tạo project" },
    { id: "move-chat", label: "Chuyển chat vào project" },
    { id: "chats-not-shared", label: "Chat không chia sẻ ngữ cảnh" },
    { id: "free-five", label: "Free: tối đa 5 project" },
    { id: "rag-mode", label: "Chế độ RAG" },
    { id: "descriptive-filenames", label: "Tên file rõ ràng" },
    { id: "archive-delete", label: "Lưu trữ và xoá" },
    { id: "project-sharing", label: "Chia sẻ project trong nhóm" },
  ],
  hints: [
    "Quy tắc cho Claude đặt trong “Set project instructions”, không đặt trong tên hay mô tả project.",
    "Các chat trong project không tự thấy nhau — điều cần dùng chung phải nằm trong knowledge.",
    "Gói Free tạo tối đa 5 project.",
  ],
  sources: [
    { label: "Claude Help Center — What are projects? (knowledge, instructions, giới hạn, chia sẻ)", href: WP },
    { label: "Claude Help Center — How can I create and manage projects?", href: CM },
    { label: "Claude Help Center — RAG for projects", href: RG },
    { label: "Claude Help Center — Chat search and memory (bộ nhớ riêng của project)", href: ME },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Nếu bạn làm một việc kéo dài nhiều tuần — dự án cải tiến chất lượng, báo cáo tháng, đào tạo nhân viên mới — việc dán lại cùng tài liệu và cùng yêu cầu vào mỗi chat rất mất công. **Project** là **không gian làm việc riêng** gồm: **kiến thức** (knowledge — tài liệu, văn bản, đoạn code bạn tải lên), **hướng dẫn** (instructions — cách Claude nên trả lời, áp dụng cho mọi chat trong project), **lịch sử chat riêng** và **bộ nhớ riêng** của project.",
        "**Tạo project**: bấm **Projects** ở thanh bên (hoặc vào claude.ai/projects) → **+ New Project** → nhập tên và mô tả. Lưu ý: **Claude không thấy tên và mô tả** — đó là nhãn cho bạn. Thêm kiến thức bằng nút **+** ở vùng knowledge bên phải; đặt quy tắc bằng **Set project instructions** → *Save instructions*. Chat cũ có thể chuyển vào bằng mũi tên cạnh tên chat → **Add to project**.",
        "Hai điều hay bị hiểu nhầm: (1) **các chat trong project không tự thấy nội dung của nhau** — chỉ những gì nằm trong knowledge (và hướng dẫn) là dùng chung; (2) knowledge cũng chiếm context. Trên gói **trả phí** (Pro, Max, Ultra, Team, Enterprise), khi knowledge gần chạm giới hạn context, Claude tự bật **chế độ RAG**: thay vì nạp hết, Claude dùng công cụ tìm kiếm trong knowledge để lấy phần liên quan, chứa được **tới khoảng 10 lần** nội dung. Vì vậy hãy **đặt tên file rõ nghĩa** và nhắc đúng tên tài liệu trong câu hỏi.",
        "Giới hạn và quản lý: project có trên **mọi gói**, nhưng gói **Free tạo tối đa 5 project**. Muốn cất project đã xong: nút ba chấm → lưu trữ (archive) — vẫn mở lại được; muốn **xoá** thì phải **bỏ lưu trữ trước**. Trên gói Team/Enterprise, project có thể **chia sẻ** cho đồng nghiệp với quyền *Can view* (xem, chat) hoặc *Can edit* (sửa hướng dẫn, kiến thức, thành viên).",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Project giống một bìa hồ sơ dự án trên bàn: bên trong có tài liệu gốc (knowledge), tờ “quy ước làm việc” kẹp đầu bìa (instructions), và các biên bản họp (chat). Nhãn ghi ngoài bìa chỉ để bạn tìm — người đọc hồ sơ (Claude) không đọc nhãn đó. Biên bản họp này không tự biết nội dung biên bản họp khác, trừ khi bạn kẹp vào phần tài liệu chung.",
      },
      terms: [
        { term: "Project knowledge", definition: "Tài liệu, văn bản, code tải vào project để Claude dùng làm bối cảnh cho mọi chat trong đó." },
        { term: "Project instructions", definition: "Hướng dẫn cách trả lời, áp dụng cho mọi chat trong project." },
        { term: "RAG", definition: "Truy xuất có chọn lọc: Claude tìm và lấy phần tài liệu liên quan thay vì nạp tất cả." },
        { term: "Archive", definition: "Lưu trữ project đã xong; vẫn mở lại được, không mất dữ liệu." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bốn phần của một project",
      infographic: {
        kind: "cards",
        cards: [
          { title: "Knowledge", body: "Tài liệu, văn bản, code tải lên — dùng chung cho mọi chat trong project.", foot: "Đặt tên file rõ nghĩa", icon: "book" },
          { title: "Instructions", body: "Cách Claude nên trả lời: giọng văn, định dạng, vai trò.", foot: "Set project instructions", icon: "list" },
          { title: "Chats", body: "Các cuộc trò chuyện trong project; mỗi chat không tự thấy chat khác.", foot: "Chuyển chat cũ: Add to project", icon: "message" },
          { title: "Bộ nhớ riêng", body: "Project có bộ nhớ riêng, không lẫn bộ nhớ của project khác.", foot: "Có thể tắt Use account memory", icon: "layers" },
        ],
      },
      caption: "Theo các bài về Projects và Memory của Help Center (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: Claude dùng gì khi trả lời trong project",
      mermaid: `flowchart TD
  K["Knowledge (tài liệu)"] --> C["Chat trong project"]
  I["Instructions (quy tắc)"] --> C
  M["Bộ nhớ của project"] --> C
  N["Tên + mô tả project"] -.->|"Claude không thấy"| X["Chỉ là nhãn cho bạn"]
  C2["Chat khác trong cùng project"] -.->|"Không tự chia sẻ"| C
  K -->|"Gần giới hạn context, gói trả phí"| R["Chế độ RAG: tìm phần liên quan"]`,
      caption: "Muốn dùng chung giữa các chat, đưa vào knowledge hoặc instructions.",
      alt: "Sơ đồ: knowledge, instructions và bộ nhớ của project cùng đưa vào mỗi chat trong project. Tên và mô tả project Claude không thấy, chỉ là nhãn cho bạn. Một chat khác trong cùng project không tự chia sẻ nội dung. Khi knowledge gần giới hạn context trên gói trả phí, Claude chuyển sang chế độ RAG để tìm phần liên quan.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: đặt quy tắc cho project",
      bad: {
        label: "Ghi quy tắc vào mô tả project",
        content: "Tên: “Báo cáo QA — LUÔN trả lời tiếng Việt, dạng bảng!”\nMô tả: “Claude hãy dùng giọng trang trọng và ghi nguồn tài liệu.”",
        notes: ["Claude không thấy tên và mô tả.", "Quy tắc không được áp dụng.", "Tên dài, khó tìm."],
      },
      good: {
        label: "Quy tắc trong instructions, tài liệu trong knowledge",
        content: "Tên: “Báo cáo QA 2026”.\nInstructions: “Trả lời bằng tiếng Việt, giọng trang trọng. Khi tóm tắt lỗi, dùng bảng: Lỗi | Nguyên nhân | Hành động. Ghi tên tài liệu nguồn.”\nKnowledge: so-tay-quy-trinh-qa.pdf, ma-cong-doan.csv.",
        notes: ["Quy tắc áp dụng cho mọi chat.", "Tài liệu dùng chung.", "Tên file rõ nghĩa giúp tìm đúng."],
      },
      takeaway: "Tên/mô tả cho bạn; instructions và knowledge cho Claude.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xếp nội dung vào đúng chỗ",
      sim: {
        kind: "classify",
        bins: [
          { id: "knowledge", label: "Project knowledge" },
          { id: "instructions", label: "Project instructions" },
          { id: "chat", label: "Chỉ gửi trong một chat" },
        ],
        items: [
          { id: "i1", text: "Sổ tay quy trình QA 40 trang mà mọi chat đều cần tra.", bin: "knowledge", why: "Tài liệu dùng chung lâu dài." },
          { id: "i2", text: "“Luôn trả lời bằng tiếng Việt, giọng trang trọng, kết thúc bằng bước tiếp theo.”", bin: "instructions", why: "Quy tắc trả lời cho mọi chat." },
          { id: "i3", text: "Ảnh chụp một lỗi hôm nay, chỉ hỏi một lần.", bin: "chat", why: "Dùng một lần, không cần lưu cho cả project." },
          { id: "i4", text: "Bảng mã công đoạn và ý nghĩa từng mã.", bin: "knowledge", why: "Tra cứu lâu dài." },
          { id: "i5", text: "“Khi tóm tắt báo cáo, dùng bảng 3 cột: Lỗi | Nguyên nhân | Hành động.”", bin: "instructions", why: "Định dạng áp dụng mọi lần." },
          { id: "i6", text: "Bản nháp email gửi riêng một khách hàng.", bin: "chat", why: "Việc riêng lẻ, không phải tài liệu nền." },
        ],
      },
      intro: "Mỗi nội dung nên nằm ở đâu: knowledge, instructions, hay chỉ trong một chat?",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tạo project đầu tiên",
      steps: [
        { title: "Tạo project", detail: "Projects ở thanh bên (hoặc claude.ai/projects) → + New Project → tên ngắn, rõ." },
        { title: "Thêm knowledge", detail: "Nút + ở vùng knowledge bên phải → tải tài liệu nền. Đặt tên file rõ nghĩa trước khi tải." },
        { title: "Đặt instructions", detail: "Set project instructions → viết quy tắc trả lời → Save instructions.", code: { lang: "text", content: "Bạn hỗ trợ nhóm QA xưởng lắp ráp. Trả lời bằng tiếng Việt, ngắn gọn.\nKhi tóm tắt lỗi: bảng Lỗi | Nguyên nhân | Hành động.\nLuôn ghi tên tài liệu trong knowledge đã dùng; không chắc thì nói không chắc." } },
        { title: "Chat trong project", detail: "Mở chat mới bên trong project; chuyển chat cũ liên quan vào bằng Add to project." },
        { title: "Hỏi có chỉ tên tài liệu", detail: "Nhắc đúng tên file để Claude tìm đúng chỗ.", code: { lang: "text", content: "Theo so-tay-quy-trinh-qa.pdf, quy trình xử lý lỗi mức Cao gồm những bước nào?" } },
        { title: "Dọn dẹp khi xong", detail: "Lưu trữ (archive) project đã hoàn thành; xoá thì phải bỏ lưu trữ trước." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Thiết kế project cho tình huống trong dữ liệu mẫu: đặt tên project, liệt kê file knowledge (tên file rõ nghĩa), và viết instructions.",
      sampleData: {
        name: "Tình huống",
        content:
          "Phòng nhân sự cần Claude hỗ trợ trả lời câu hỏi của nhân viên mới trong 3 tháng. Tài liệu có: sổ tay nhân viên (PDF), quy chế nghỉ phép (DOCX), danh sách phòng ban và người liên hệ (CSV). Yêu cầu: trả lời tiếng Việt, thân thiện, ngắn gọn; luôn ghi tài liệu nguồn; câu nào không có trong tài liệu thì hướng dẫn hỏi phòng nhân sự, không tự đoán.",
      },
      placeholder: "Tên project: …\nKnowledge: …\nInstructions: …",
      rubric: [
        { id: "name", label: "Có tên project", weight: 1, check: { kind: "regex", pattern: "ten project\\s*:\\s*\\S+" }, pass: "Có tên.", fail: "Thêm dòng “Tên project: …”." },
        { id: "files", label: "Tên file rõ nghĩa", weight: 1, check: { kind: "minMatches", pattern: "[a-z0-9-]+\\.(pdf|docx|csv)", value: 3 }, pass: "Có 3 file rõ nghĩa.", fail: "Liệt kê 3 file với tên rõ nghĩa, ví dụ so-tay-nhan-vien.pdf." },
        { id: "style", label: "Instructions có giọng văn/độ dài", weight: 1, check: { kind: "anyKeyword", keywords: ["thân thiện", "ngắn gọn", "tiếng việt"] }, pass: "Có giọng văn.", fail: "Instructions: tiếng Việt, thân thiện, ngắn gọn." },
        { id: "source", label: "Ghi nguồn", weight: 1, check: { kind: "anyKeyword", keywords: ["ghi nguồn", "ghi tên tài liệu", "tài liệu nguồn", "nguồn"] }, pass: "Có ghi nguồn.", fail: "Yêu cầu ghi tài liệu nguồn." },
        { id: "unknown", label: "Không đoán khi thiếu thông tin", weight: 1, check: { kind: "anyKeyword", keywords: ["không đoán", "không tự đoán", "hỏi phòng nhân sự", "không có trong tài liệu"] }, pass: "Có quy tắc khi thiếu thông tin.", fail: "Thêm: không có trong tài liệu thì hướng dẫn hỏi phòng nhân sự." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Tên project: Hỗ trợ nhân viên mới 2026\nKnowledge: so-tay-nhan-vien.pdf, quy-che-nghi-phep.docx, phong-ban-lien-he.csv\nInstructions: Bạn hỗ trợ nhân viên mới. Trả lời bằng tiếng Việt, thân thiện, ngắn gọn (tối đa 6 dòng). Luôn ghi tên tài liệu nguồn đã dùng. Nếu câu hỏi không có trong tài liệu thì nói rõ và hướng dẫn hỏi phòng nhân sự, không tự đoán.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Project = không gian riêng: knowledge, instructions, chat và bộ nhớ riêng.",
        "Tạo: Projects → + New Project; tên và mô tả Claude không thấy; quy tắc đặt trong Set project instructions.",
        "Chat trong project không tự thấy nhau — dùng chung qua knowledge; chuyển chat cũ bằng Add to project.",
        "Free tối đa 5 project; gói trả phí tự bật RAG khi knowledge gần giới hạn (tới ~10 lần) — đặt tên file rõ nghĩa.",
        "Lưu trữ khi xong; xoá phải bỏ lưu trữ trước; Team/Enterprise chia sẻ với quyền Can view / Can edit.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một việc bạn làm lặp lại trong nhiều tuần.",
      tasks: [
        "Tạo một project, tải 2–3 tài liệu nền với tên file rõ nghĩa.",
        "Viết instructions 3–5 dòng: giọng văn, định dạng, ghi nguồn, xử lý khi thiếu thông tin.",
        "Mở 2 chat trong project; kiểm tra Claude có dùng đúng tài liệu và quy tắc không.",
      ],
      deliverable: "Ảnh chụp hoặc ghi chú cấu hình project: tên, danh sách file, instructions, 2 câu hỏi thử và nhận xét.",
      checklist: ["Quy tắc nằm trong instructions", "Tên file rõ nghĩa", "Đã thử hỏi có nhắc tên tài liệu"],
    },
  ],
};
