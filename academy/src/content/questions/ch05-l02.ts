import type { Question } from "@/lib/types/content";

const L = "ch05-l02";

/** 15 questions for "Terminal là gì?" — 5 beginner, 6 intermediate, 4 advanced. */
export const questionsCh05L02: Question[] = [
  {
    questionId: "ch05-l02-q01", lessonId: L, conceptId: "terminal", learningObjective: "o1", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "single-choice",
    prompt: "Terminal là gì?",
    options: [
      { id: "a", text: "Cửa sổ để ra lệnh cho máy tính bằng chữ", feedback: "Đúng." },
      { id: "b", text: "Một trình duyệt web", feedback: "Không — trình duyệt dùng để xem trang web." },
      { id: "c", text: "Phần mềm diệt virus", feedback: "Không liên quan." },
    ],
    answer: "a",
    explanation: "Terminal cho bạn gõ lệnh thay vì bấm chuột; shell là chương trình đọc và chạy lệnh đó.",
  },
  {
    questionId: "ch05-l02-q02", lessonId: L, conceptId: "open-terminal", learningObjective: "o2", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "matching",
    prompt: "Ghép hệ điều hành với cách mở terminal.",
    pairs: [
      { id: "p1", left: "macOS", right: "Cmd + Space, gõ Terminal" },
      { id: "p2", left: "Linux (phần lớn bản phân phối)", right: "Ctrl + Alt + T" },
      { id: "p3", left: "Windows", right: "Win + X, chọn Windows PowerShell" },
    ],
    explanation: "Đây là cách mở được hướng dẫn trong Terminal guide chính thức của Claude Code.",
  },
  {
    questionId: "ch05-l02-q03", lessonId: L, conceptId: "prompt-sign", learningObjective: "o2", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "scenario",
    prompt: "Đầu dòng terminal của bạn hiện `PS C:\\Users\\Lan>`. Bạn đang ở đâu?",
    options: [
      { id: "a", text: "PowerShell", feedback: "Đúng — chữ PS ở đầu là dấu hiệu PowerShell." },
      { id: "b", text: "CMD", feedback: "CMD hiện C:\\Users\\Lan> không có PS." },
      { id: "c", text: "Terminal của macOS", feedback: "macOS không dùng đường dẫn C:\\." },
    ],
    answer: "a",
    explanation: "PowerShell và CMD dùng lệnh khác nhau, nên nhận ra dấu nhắc giúp bạn chọn đúng lệnh cài đặt.",
  },
  {
    questionId: "ch05-l02-q04", lessonId: L, conceptId: "nav-commands", learningObjective: "o3", thinkingSkill: "remember", difficulty: "beginner",
    questionType: "fill-blank",
    prompt: "Điền lệnh (macOS/Linux).",
    template: "Lệnh [[b1]] in ra thư mục hiện tại; lệnh [[b2]] liệt kê file và thư mục bên trong.",
    blanks: [
      { id: "b1", accepted: ["pwd"], width: 6 },
      { id: "b2", accepted: ["ls"], width: 6 },
    ],
    explanation: "pwd = print working directory; ls = list.",
  },
  {
    questionId: "ch05-l02-q05", lessonId: L, conceptId: "working-dir", learningObjective: "o1", thinkingSkill: "understand", difficulty: "beginner",
    questionType: "true-false",
    statement: "Cùng một lệnh `ls` có thể cho kết quả khác nhau tuỳ bạn đang đứng ở thư mục nào.",
    prompt: "Đúng hay sai?",
    answer: true,
    explanation: "Lệnh chạy tương đối với thư mục làm việc. Đó cũng là lý do phải mở Claude Code ở đúng thư mục dự án.",
  },
  {
    questionId: "ch05-l02-q06", lessonId: L, conceptId: "paths", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "predict-output",
    prompt: "Kết quả dòng cuối là gì?",
    context: { label: "Terminal", content: "$ pwd\n/home/hocvien/du-an-qa\n$ cd ..\n$ pwd", lang: "bash" },
    options: [
      { id: "a", text: "/home/hocvien", feedback: "Đúng — .. là thư mục cha." },
      { id: "b", text: "/home/hocvien/du-an-qa", feedback: "cd .. đã đi lên một cấp." },
      { id: "c", text: "/", feedback: "Chỉ lên một cấp, không về gốc." },
    ],
    answer: "a",
    explanation: "`..` luôn chỉ thư mục cha của thư mục hiện tại.",
  },
  {
    questionId: "ch05-l02-q07", lessonId: L, conceptId: "file-commands", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "terminal-task",
    prompt: "Trong terminal mô phỏng: tạo thư mục hop-thang-11 bên trong tai-lieu, rồi tạo file rỗng bien-ban.txt trong thư mục mới.",
    preset: "home-basic",
    checks: [
      { kind: "dir", path: "~/tai-lieu/hop-thang-11", label: "Có thư mục ~/tai-lieu/hop-thang-11" },
      { kind: "file", path: "~/tai-lieu/hop-thang-11/bien-ban.txt", label: "Có file bien-ban.txt trong thư mục đó" },
    ],
    referenceCommands: ["cd tai-lieu", "mkdir hop-thang-11", "touch hop-thang-11/bien-ban.txt"],
    hint: "mkdir tạo thư mục, touch tạo file rỗng.",
    explanation: "mkdir tạo thư mục; touch tạo file rỗng. Có thể dùng đường dẫn tương đối như hop-thang-11/bien-ban.txt.",
  },
  {
    questionId: "ch05-l02-q08", lessonId: L, conceptId: "shortcuts", learningObjective: "o4", thinkingSkill: "remember", difficulty: "intermediate",
    questionType: "matching",
    prompt: "Ghép phím hoặc lệnh với tác dụng trong terminal.",
    pairs: [
      { id: "p1", left: "Tab", right: "Tự điền phần còn lại của tên file/thư mục" },
      { id: "p2", left: "Mũi tên lên ↑", right: "Gọi lại lệnh vừa gõ" },
      { id: "p3", left: "Ctrl + C", right: "Dừng lệnh đang chạy" },
      { id: "p4", left: "clear", right: "Xoá màn hình cho gọn" },
    ],
    explanation: "Các phím này giúp gõ nhanh, ít sai chính tả và thoát khỏi lệnh treo.",
  },
  {
    questionId: "ch05-l02-q09", lessonId: L, conceptId: "shell", learningObjective: "o1", thinkingSkill: "understand", difficulty: "intermediate",
    questionType: "multiple-choice",
    prompt: "Theo yêu cầu hệ thống, Claude Code chạy được với những shell nào? Chọn tất cả.",
    options: [
      { id: "a", text: "Bash", feedback: "Đúng." },
      { id: "b", text: "Zsh", feedback: "Đúng — shell mặc định trên macOS." },
      { id: "c", text: "PowerShell", feedback: "Đúng." },
      { id: "d", text: "CMD", feedback: "Đúng." },
      { id: "e", text: "Microsoft Excel", feedback: "Excel là bảng tính, không phải shell." },
    ],
    answer: ["a", "b", "c", "d"],
    explanation: "Trang Advanced setup liệt kê shell: Bash, Zsh, PowerShell hoặc CMD.",
  },
  {
    questionId: "ch05-l02-q10", lessonId: L, conceptId: "paths", learningObjective: "o3", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "find-error",
    prompt: "Bạn đang ở thư mục nhà, trong đó có thư mục “du an qa” (có dấu cách) và thư mục du-an-qa. Chọn các lệnh sẽ báo lỗi.",
    segments: [
      { id: "s1", text: "cd du an qa", isError: true, why: "Thiếu ngoặc kép: shell hiểu thành ba đối số. Dùng cd \"du an qa\"." },
      { id: "s2", text: "mkdir bao-cao-moi", isError: false },
      { id: "s3", text: "cat du-an-qa", isError: true, why: "cat đọc file, còn du-an-qa là thư mục (Is a directory)." },
      { id: "s4", text: "cd ~", isError: false },
    ],
    explanation: "Tên có dấu cách cần ngoặc kép; cat chỉ dùng cho file.",
  },
  {
    questionId: "ch05-l02-q11", lessonId: L, conceptId: "safety", learningObjective: "o4", thinkingSkill: "evaluate", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn sắp chạy `rm -r bao-cao-nhap`. Việc nào nên làm trước?",
    options: [
      { id: "a", text: "Chạy pwd và ls để chắc chắn đang ở đúng thư mục và tên đúng", feedback: "Đúng — lệnh xoá trong terminal không vào thùng rác." },
      { id: "b", text: "Không cần kiểm tra, rm luôn hỏi lại trước khi xoá", feedback: "Sai — rm -r thường xoá ngay không hỏi." },
      { id: "c", text: "Thêm sudo cho chắc", feedback: "sudo chỉ làm lệnh mạnh hơn, không an toàn hơn." },
    ],
    answer: "a",
    explanation: "Thói quen pwd + ls trước lệnh nguy hiểm giúp tránh xoá nhầm thư mục cùng tên ở chỗ khác.",
  },
  {
    questionId: "ch05-l02-q12", lessonId: L, conceptId: "shell", learningObjective: "o2", thinkingSkill: "analyze", difficulty: "advanced",
    questionType: "scenario",
    prompt: "Bạn dán lệnh cài đặt `irm https://claude.ai/install.ps1 | iex` và nhận thông báo `'irm' is not recognized as an internal or external command`. Nguyên nhân?",
    options: [
      { id: "a", text: "Bạn đang ở CMD chứ không phải PowerShell", feedback: "Đúng — irm là lệnh PowerShell." },
      { id: "b", text: "Mạng bị mất", feedback: "Mất mạng sẽ báo lỗi khác." },
      { id: "c", text: "Máy bạn chưa cài Claude Code nên không hiểu irm", feedback: "irm thuộc PowerShell, không thuộc Claude Code." },
    ],
    answer: "a",
    explanation: "Tài liệu chính thức nêu đúng thông báo này: bạn đang ở CMD. Mở PowerShell, hoặc dùng lệnh cài đặt dành cho CMD.",
  },
  {
    questionId: "ch05-l02-q13", lessonId: L, conceptId: "working-dir", learningObjective: "o3", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "ordering",
    prompt: "Bạn đang ở thư mục nhà và muốn xem file du-lieu.csv trong thư mục du-an-qa. Sắp xếp các lệnh.",
    items: [
      { id: "a", text: "pwd" },
      { id: "b", text: "ls" },
      { id: "c", text: "cd du-an-qa" },
      { id: "d", text: "cat du-lieu.csv" },
    ],
    explanation: "Xác nhận vị trí → xem có gì → đi vào thư mục → đọc file.",
  },
  {
    questionId: "ch05-l02-q14", lessonId: L, conceptId: "shortcuts", learningObjective: "o2", thinkingSkill: "apply", difficulty: "intermediate",
    questionType: "single-choice",
    prompt: "Trên terminal Linux, tổ hợp phím nào để dán lệnh vừa sao chép?",
    options: [
      { id: "a", text: "Ctrl + Shift + V", feedback: "Đúng." },
      { id: "b", text: "Ctrl + C", feedback: "Trong terminal, Ctrl + C dừng lệnh đang chạy." },
      { id: "c", text: "Alt + F4", feedback: "Phím này đóng cửa sổ." },
    ],
    answer: "a",
    explanation: "macOS dùng Cmd + V; Linux dùng Ctrl + Shift + V; PowerShell dùng Ctrl + V hoặc chuột phải.",
  },
  {
    questionId: "ch05-l02-q15", lessonId: L, conceptId: "terminal", learningObjective: "o4", thinkingSkill: "create", difficulty: "advanced",
    questionType: "real-task",
    prompt: "Viết hướng dẫn ngắn cho một đồng nghiệp dùng Windows, chưa từng mở terminal, để họ đi tới thư mục dự án D:\\du-an\\web-qa và kiểm tra mình đã đến đúng chỗ.",
    source: "Đồng nghiệp dùng Windows 11, chưa biết PowerShell và CMD khác nhau thế nào.",
    rubric: [
      { id: "open", label: "Cách mở PowerShell", weight: 1, check: { kind: "regex", pattern: "(win\\s*\\+\\s*x|powershell)" }, pass: "Có cách mở PowerShell.", fail: "Hướng dẫn mở PowerShell (Win + X)." },
      { id: "sign", label: "Nhận biết PowerShell", weight: 1, check: { kind: "regex", pattern: "\\bps\\b" }, pass: "Có dấu hiệu PS.", fail: "Nhắc dấu nhắc bắt đầu bằng PS là PowerShell." },
      { id: "cd", label: "Lệnh di chuyển", weight: 1, check: { kind: "regex", pattern: "\\bcd\\s+[\"']?d:" }, pass: "Có cd tới ổ D.", fail: "Dùng cd D:\\du-an\\web-qa." },
      { id: "check", label: "Kiểm tra vị trí", weight: 1, check: { kind: "regex", pattern: "\\b(pwd|ls|dir)\\b" }, pass: "Có lệnh kiểm tra.", fail: "Thêm pwd và ls (hoặc dir) để kiểm tra." },
    ],
    passScore: 0.75,
    referenceAnswer:
      "1. Nhấn Win + X, chọn Windows PowerShell (hoặc Terminal).\n2. Đầu dòng phải có chữ PS, ví dụ PS C:\\Users\\Lan> — nếu không có PS là bạn đang ở CMD.\n3. Gõ: cd D:\\du-an\\web-qa rồi Enter.\n4. Gõ pwd để xem đường dẫn hiện tại, rồi ls để thấy các file của dự án.",
    explanation: "Hướng dẫn tốt cho người mới: cách mở, dấu hiệu nhận biết, lệnh cụ thể và cách tự kiểm tra.",
  },
];
