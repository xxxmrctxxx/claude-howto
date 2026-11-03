import type { Lesson } from "@/lib/types/content";

const COSTS = "https://code.claude.com/docs/en/costs";
const BP = "https://code.claude.com/docs/en/best-practices";

export const lessonChiaCongViec: Lesson = {
  id: "ch08-l04",
  chapterId: "ch08",
  slug: "chia-cong-viec",
  title: "Cách chia công việc",
  subtitle: "Chia việc lớn thành phần nhỏ có kiểm tra riêng, biết khi nào giữ phiên, khi nào /clear, và giao phần “ồn ào” cho subagent.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chia việc lớn thành các phần nhỏ, mỗi phần có mục tiêu và cách kiểm tra riêng." },
    { id: "o2", text: "Quyết định khi nào tiếp tục cùng phiên, khi nào /clear, khi nào đặt tên phiên để quay lại." },
    { id: "o3", text: "Giao thao tác dài dòng (chạy test, đọc tài liệu dài, xử lý log) cho subagent để giữ context chính gọn." },
    { id: "o4", text: "Dùng đặc tả trong file, chế độ Plan và kiểm thử từng bước để tránh làm lại tốn kém." },
  ],
  concepts: [
    { id: "decompose", label: "Chia nhỏ việc lớn" },
    { id: "one-task-session", label: "Mỗi việc một phiên" },
    { id: "clear-vs-continue", label: "Tiếp tục hay /clear" },
    { id: "rename-resume", label: "Đặt tên phiên và quay lại" },
    { id: "subagent-isolation", label: "Subagent giữ context gọn" },
    { id: "subagent-model", label: "Chọn model cho subagent" },
    { id: "plan-first", label: "Lập kế hoạch trước" },
    { id: "spec-file", label: "Đặc tả trong file" },
    { id: "incremental-test", label: "Kiểm thử từng bước" },
  ],
  hints: [
    "Mỗi phần nhỏ nên trả lời được: làm xong thì kiểm tra bằng gì?",
    "Việc mới không liên quan → /clear. Cùng việc nhưng dài → /compact.",
    "Thao tác sinh nhiều output (test, log, tài liệu dài) → giao subagent, chỉ nhận lại bản tóm tắt.",
  ],
  sources: [
    { label: "Claude Code — Manage costs: Clear between tasks, Delegate verbose operations to subagents, Work efficiently on complex tasks", href: COSTS },
    { label: "Claude Code — Best practices: interview → SPEC.md → phiên mới; Give Claude a check to run", href: BP },
    { label: "Claude Code — How Claude Code works: Manage context with skills and subagents", href: "https://code.claude.com/docs/en/how-claude-code-works" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Một yêu cầu khổng lồ (“làm cả hệ thống báo cáo”) vừa khó làm đúng vừa tốn: context phình to, sai một chỗ phải làm lại nhiều chỗ. Hãy **chia nhỏ**: mỗi phần có **mục tiêu** và **cách kiểm tra** riêng; làm xong phần nào thì kiểm thử phần đó rồi mới làm tiếp (tài liệu gọi là test incrementally).",
        "Quy tắc phiên: việc **mới không liên quan** → `/clear` (không tốn gì, việc sau không gánh lịch sử việc trước). Việc **cùng mạch** nhưng hội thoại đã dài → `/compact` kèm trọng tâm. Định quay lại sau → `/rename` đặt tên phiên trước khi clear, rồi `/resume` khi cần.",
        "Thao tác sinh **nhiều output** — chạy cả bộ test, đọc tài liệu dài, xử lý log — có thể **giao cho subagent**. Subagent làm việc trong context riêng, chỉ gửi **bản tóm tắt** về hội thoại chính. Lưu ý: yêu cầu của subagent vẫn tính vào mức dùng; với việc đơn giản có thể chọn model nhỏ hơn cho subagent.",
        "Với việc phức tạp: nhờ Claude **phỏng vấn** bạn rồi ghi **SPEC.md**, sau đó mở **phiên mới** để xây từ SPEC.md (bắt đầu với context sạch và định nghĩa “xong” rõ ràng); dùng **chế độ Plan** để duyệt hướng làm trước — tránh làm lại tốn kém khi hướng ban đầu sai.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Lắp một trạm biến áp không ai làm “một lèo”: đổ móng → nghiệm thu móng → lắp máy → thử nghiệm → đấu nối → thử nghiệm. Đo đạc chi tiết thì giao tổ đo, tổ chỉ nộp biên bản tóm tắt (subagent). Xong hạng mục nào, dọn mặt bằng hạng mục đó (/clear).",
      },
      terms: [
        { term: "Subagent", definition: "Một tác tử phụ làm việc trong context riêng, trả về bản tóm tắt cho hội thoại chính." },
        { term: "SPEC.md", definition: "File đặc tả: mục tiêu, phạm vi, tiêu chí hoàn thành — dùng làm điểm xuất phát cho phiên mới." },
        { term: "Test incrementally", definition: "Làm một phần, kiểm thử, rồi mới làm phần tiếp theo." },
        { term: "/rename, /resume", definition: "Đặt tên phiên hiện tại; mở lại một phiên cũ để tiếp tục." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: chia một việc lớn",
      infographic: {
        kind: "flow",
        steps: [
          { title: "Phỏng vấn → SPEC.md", body: "Claude hỏi đến khi đủ thông tin rồi ghi đặc tả.", icon: "file" },
          { title: "Phiên mới + Plan", body: "Bắt đầu với context sạch, duyệt kế hoạch.", icon: "list" },
          { title: "Phần 1: làm + kiểm thử", body: "Ví dụ: đọc CSV, test với dữ liệu mẫu. Commit.", icon: "check" },
          { title: "Phần 2…n", body: "Mỗi phần một mục tiêu, một phép kiểm tra.", icon: "layers" },
          { title: "Việc ồn ào → subagent", body: "Chạy cả bộ test, đọc tài liệu dài: chỉ nhận tóm tắt.", icon: "cpu" },
          { title: "Đổi việc → /clear", body: "Đặt tên phiên (/rename) nếu sẽ quay lại.", icon: "repeat" },
        ],
      },
      caption: "Dựa trên mục Work efficiently on complex tasks và Best practices (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: tiếp tục, clear hay subagent?",
      mermaid: `flowchart TD
  A["Việc tiếp theo"] --> B{"Liên quan việc đang làm?"}
  B -->|"Không"| C{"Sẽ quay lại việc cũ?"}
  C -->|"Có"| D["/rename rồi /clear"]
  C -->|"Không"| E["/clear"]
  B -->|"Có"| F{"Sinh nhiều output? (test, log, tài liệu dài)"}
  F -->|"Có"| G["Giao subagent, nhận tóm tắt"]
  F -->|"Không"| H{"Hội thoại đã rất dài?"}
  H -->|"Có"| I["/compact kèm trọng tâm"]
  H -->|"Không"| J["Tiếp tục cùng phiên"]`,
      caption: "Ba câu hỏi đủ để quyết định cho phần lớn tình huống.",
      alt: "Lưu đồ: việc tiếp theo có liên quan việc đang làm không. Không: nếu sẽ quay lại thì /rename rồi /clear, nếu không thì /clear. Có: nếu sinh nhiều output thì giao subagent; nếu không, hội thoại đã rất dài thì /compact kèm trọng tâm, nếu chưa thì tiếp tục cùng phiên.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: giao việc lớn",
      bad: {
        label: "Một yêu cầu khổng lồ",
        content: "Xây cho tôi hệ thống báo cáo QA: nhập liệu, tính tổng, biểu đồ, xuất Excel, gửi email hằng tuần.",
        notes: ["Không có tiêu chí kiểm tra cho từng phần.", "Sai ở phần đầu kéo theo làm lại cả hệ thống.", "Context phình to rất nhanh."],
      },
      good: {
        label: "Chia phần, mỗi phần có kiểm tra",
        content:
          "Phần 1: đọc data/loi.csv → test: 3 dòng mẫu cho đúng 3 bản ghi.\nPhần 2: tính tổng theo công đoạn → test: Quấn dây = 2, Lắp ráp vỏ = 5.\nPhần 3: biểu đồ cột → kiểm tra bằng ảnh chụp.\nPhần 4: xuất Excel → mở file kiểm tra đủ cột.\nMỗi phần đạt thì commit. Chạy cả bộ test bằng subagent, chỉ báo test lỗi.",
        notes: ["Mỗi phần có phép kiểm tra.", "Lỗi được bắt sớm, sửa rẻ.", "Output dài nằm ngoài context chính."],
      },
      takeaway: "Phần nhỏ + kiểm tra ngay = ít làm lại, ít token.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: cùng phiên, phiên mới hay subagent?",
      sim: {
        kind: "classify",
        bins: [
          { id: "same", label: "Tiếp tục cùng phiên" },
          { id: "new", label: "/clear hoặc phiên mới" },
          { id: "sub", label: "Giao subagent" },
        ],
        items: [
          { id: "i1", text: "Sửa tiếp lỗi vừa tìm ra trong cùng hàm tinhTong", bin: "same", why: "Cùng mạch, cần ngữ cảnh vừa có." },
          { id: "i2", text: "Thêm test cho chính hàm vừa sửa", bin: "same", why: "Liên quan trực tiếp việc đang làm." },
          { id: "i3", text: "Viết email cho khách sau khi sửa lỗi xong", bin: "new", why: "Không liên quan — lịch sử sửa lỗi chỉ làm tốn token." },
          { id: "i4", text: "Bắt đầu xây tính năng mới từ SPEC.md vừa viết", bin: "new", why: "Phiên mới với context sạch, đặc tả trong file." },
          { id: "i5", text: "Chạy toàn bộ 400 test và tóm tắt những test lỗi", bin: "sub", why: "Output dài nằm trong subagent, chỉ tóm tắt quay về." },
          { id: "i6", text: "Đọc tài liệu API 60 trang để lấy 3 tham số cần dùng", bin: "sub", why: "Subagent đọc, chỉ trả về 3 tham số." },
        ],
      },
      intro: "Xếp mỗi việc vào cách làm giúp context chính gọn mà không mất ngữ cảnh cần thiết.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: chia và thực hiện một việc lớn",
      steps: [
        { title: "Viết đặc tả bằng phỏng vấn", detail: "Claude hỏi đến khi đủ thông tin rồi ghi SPEC.md.", code: { lang: "text", content: "Tôi muốn làm hệ thống báo cáo lỗi QA hằng tuần nhưng chưa nghĩ kỹ. Hãy phỏng vấn tôi đến khi đủ để viết đặc tả, rồi ghi vào SPEC.md." } },
        { title: "Mở phiên mới từ SPEC.md, bật Plan", detail: "Shift+Tab sang Plan; yêu cầu chia thành các phần có phép kiểm tra.", code: { lang: "text", content: "Đọc @SPEC.md và đề xuất kế hoạch chia thành 4–5 phần, mỗi phần có cách kiểm tra. Chưa viết code." } },
        { title: "Làm từng phần, kiểm thử ngay", detail: "Phần nào đạt thì commit rồi mới làm phần sau." },
        { title: "Giao việc ồn ào cho subagent", detail: "Chỉ nhận lại phần tóm tắt cần thiết.", code: { lang: "text", content: "Dùng một subagent chạy toàn bộ test, chỉ báo lại test lỗi kèm nguyên nhân ngắn gọn." } },
        { title: "Đổi việc thì đặt tên và clear", detail: "Đặt tên phiên trước khi /clear để có thể /resume.", code: { lang: "text", content: "/rename bao-cao-qa\n/clear" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Việc lớn: “Xây công cụ tổng hợp lỗi QA hằng tuần: đọc CSV của 3 xưởng, tính tổng theo công đoạn, vẽ biểu đồ, xuất Excel.” Chia thành 4–5 phần đánh số; mỗi phần ghi cách kiểm tra. Chỉ rõ phần nào giao subagent, chỗ nào /clear hoặc mở phiên mới, và bước chuẩn bị đặc tả/kế hoạch.",
      placeholder: "0. Chuẩn bị: …\n1. …\n2. …\n3. …\n4. …",
      rubric: [
        { id: "parts", label: "Ít nhất 4 phần đánh số", weight: 1, check: { kind: "minMatches", pattern: "^\\s*\\d+[.)]\\s+\\S", value: 4 }, pass: "Đủ phần.", fail: "Chia ít nhất 4 phần, mỗi dòng bắt đầu bằng số." },
        { id: "checks", label: "Mỗi phần có kiểm tra", weight: 1, check: { kind: "minMatches", pattern: "(kiem tra|test|ảnh chụp|anh chup)", value: 3 }, pass: "Có kiểm tra cho các phần.", fail: "Ghi cách kiểm tra cho từng phần." },
        { id: "sub", label: "Có giao subagent", weight: 1, check: { kind: "anyKeyword", keywords: ["subagent"] }, pass: "Có subagent.", fail: "Giao việc sinh nhiều output (chạy cả bộ test) cho subagent." },
        { id: "session", label: "Quản lý phiên", weight: 1, check: { kind: "regex", pattern: "(/clear|phien moi|/compact)" }, pass: "Có quản lý phiên.", fail: "Nêu chỗ /clear hoặc mở phiên mới." },
        { id: "prep", label: "Đặc tả/kế hoạch trước", weight: 1, check: { kind: "regex", pattern: "(spec|dac ta|ke hoach|plan)" }, pass: "Có chuẩn bị.", fail: "Bắt đầu bằng đặc tả (SPEC.md) hoặc kế hoạch ở chế độ Plan." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "0. Chuẩn bị: nhờ Claude phỏng vấn và ghi SPEC.md; mở phiên mới, bật Plan để duyệt kế hoạch.\n1. Đọc CSV của 3 xưởng thành một danh sách chung — kiểm tra: file mẫu 3 dòng mỗi xưởng cho đủ 9 bản ghi.\n2. Tính tổng theo công đoạn — test: Quấn dây = 2, Lắp ráp vỏ = 5 với dữ liệu mẫu.\n3. Vẽ biểu đồ cột — kiểm tra bằng ảnh chụp so với số liệu phần 2.\n4. Xuất Excel — kiểm tra: mở file thấy đủ cột Công đoạn, Số lỗi, Tuần.\nChạy toàn bộ test bằng subagent, chỉ báo test lỗi. Mỗi phần đạt thì commit; xong cả công cụ thì /clear trước khi làm việc khác.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Chia việc lớn thành phần nhỏ; mỗi phần có mục tiêu và phép kiểm tra; kiểm thử ngay sau mỗi phần.",
        "Việc không liên quan → /clear; cùng mạch nhưng dài → /compact; sẽ quay lại → /rename rồi /resume.",
        "Thao tác nhiều output → subagent, chỉ nhận tóm tắt; subagent vẫn tính vào mức dùng.",
        "Việc phức tạp: phỏng vấn → SPEC.md → phiên mới → Plan.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một việc lớn bạn định làm với Claude Code trong tháng này.",
      tasks: [
        "Nhờ Claude phỏng vấn bạn và ghi SPEC.md.",
        "Chia thành các phần có phép kiểm tra; làm và commit từng phần.",
        "Giao ít nhất một thao tác nhiều output cho subagent.",
        "Ghi lại số lần phải làm lại so với lần làm “một lèo” trước đây.",
      ],
      deliverable: "SPEC.md, danh sách phần kèm phép kiểm tra, và lịch sử commit theo từng phần.",
      checklist: ["Mỗi phần có phép kiểm tra", "Có ít nhất một subagent", "Có /clear giữa các việc không liên quan"],
    },
  ],
};
