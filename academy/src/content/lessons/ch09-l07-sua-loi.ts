import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const CW = "https://code.claude.com/docs/en/common-workflows";

export const lessonSuaLoiWebsite: Lesson = {
  id: "ch09-l07",
  chapterId: "ch09",
  slug: "sua-loi",
  title: "Sửa lỗi",
  subtitle: "Khi người dùng thật báo lỗi: thu thập đủ thông tin để tái hiện, xếp mức ưu tiên, sửa theo vòng test trượt → sửa → test hồi quy, và báo lại cho người dùng.",
  level: "advanced",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Thu thập báo lỗi đủ để tái hiện: các bước, thiết bị, thời điểm, thông báo nguyên văn hoặc ảnh." },
    { id: "o2", text: "Xếp mức ưu tiên: chặn công việc, có cách tránh, giao diện nhỏ, cần thêm thông tin." },
    { id: "o3", text: "Sửa theo vòng: tái hiện bằng test trượt → sửa nguyên nhân gốc → test hồi quy → kiểm tra không hỏng chỗ khác." },
    { id: "o4", text: "Đưa log và lỗi cho Claude đúng cách (pipe vào claude -p, @file, dán ảnh) và báo lại người dùng." },
  ],
  concepts: [
    { id: "bug-report", label: "Báo lỗi đủ thông tin" },
    { id: "repro-steps", label: "Bước tái hiện" },
    { id: "environment-info", label: "Thiết bị, thời điểm" },
    { id: "priority", label: "Mức ưu tiên" },
    { id: "need-info", label: "Cần thêm thông tin" },
    { id: "failing-test-first", label: "Test trượt trước" },
    { id: "root-cause", label: "Nguyên nhân gốc" },
    { id: "regression-test", label: "Test hồi quy" },
    { id: "pipe-logs", label: "Đưa log bằng claude -p" },
    { id: "attach-evidence", label: "@file và ảnh" },
    { id: "security-bug", label: "Lỗi bảo mật ưu tiên cao" },
    { id: "close-loop", label: "Báo lại người dùng" },
  ],
  hints: [
    "Không tái hiện được thì chưa sửa được — hỏi thêm bước, thiết bị, thời điểm.",
    "Lỗi bảo mật hoặc chặn công việc của nhiều người: sửa ngay.",
    "Test tái hiện phải trượt trước khi sửa và đạt sau khi sửa.",
  ],
  sources: [
    { label: "Claude Code — Best practices (viết test tái hiện rồi sửa; đưa log bằng claude -p; dán ảnh lỗi)", href: BP },
    { label: "Claude Code — Common workflows (tham chiếu file, sửa lỗi)", href: CW },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Website đã có người dùng thật thì lỗi sẽ đến dưới dạng “web bị lỗi rồi!”. Bài 6.4 dạy cách debug cùng Claude; bài này là **quy trình xử lý lỗi sau khi giao**. Bước đầu là **thu thập báo lỗi đủ để tái hiện**: làm những **bước** nào, trên **thiết bị/trình duyệt** nào, **lúc nào**, thấy **thông báo nguyên văn** gì (ảnh chụp càng tốt), mong đợi điều gì. Không tái hiện được thì chưa sửa được — hỏi thêm thay vì đoán.",
        "**Xếp mức ưu tiên**: *sửa ngay* khi lỗi chặn công việc của nhiều người hoặc là **lỗ hổng bảo mật** (công nhân xoá được lỗi của người khác); *đợt tới* khi có cách tránh tạm; *để sau* với lỗi giao diện nhỏ; *cần thêm thông tin* khi báo lỗi quá mơ hồ. Ghi mỗi lỗi một mục, kèm mức ưu tiên và người báo.",
        "**Vòng sửa** theo Best practices: mô tả triệu chứng và nơi nghi ngờ, **viết test tái hiện lỗi (phải trượt)**, rồi sửa — ví dụ trong tài liệu: “người dùng báo đăng nhập lỗi sau khi phiên hết hạn. xem phần làm mới token trong src/auth/, viết test trượt tái hiện, rồi sửa”. Sửa **nguyên nhân gốc** chứ không vá triệu chứng; giữ test làm **test hồi quy**; chạy toàn bộ test để chắc không hỏng chỗ khác.",
        "**Đưa bằng chứng cho Claude** thay vì kể lại: dán **ảnh chụp lỗi**, gõ **@** để đính kèm file, hoặc **pipe log** từ shell: `cat error.log | claude -p \"chuyện gì đang xảy ra\"`. Sửa xong, triển khai lại (bài 9.8) và **báo lại người báo lỗi**: đã sửa gì, họ cần làm gì (tải lại trang…), nhờ họ xác nhận.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Xưởng bảo trì nhận phiếu báo hỏng: phiếu ghi “máy kêu to” thì thợ phải hỏi máy nào, lúc nào, kêu khi làm gì. Máy dừng cả dây chuyền thì sửa ngay; ốc lỏng tấm che thì để lịch bảo trì. Sửa xong, thợ chạy thử, ghi sổ, và báo lại người đã báo.",
      },
      terms: [
        { term: "Tái hiện lỗi", definition: "Làm lại các bước để lỗi xuất hiện lần nữa — điều kiện để sửa và kiểm chứng." },
        { term: "Nguyên nhân gốc", definition: "Lý do thật gây lỗi, khác với triệu chứng người dùng thấy." },
        { term: "claude -p", definition: "Chạy Claude Code một lần không tương tác; có thể nhận dữ liệu pipe từ shell." },
        { term: "Hotfix", definition: "Bản sửa gấp cho lỗi nghiêm trọng, triển khai ngay ngoài lịch thường." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: mẫu báo lỗi đủ thông tin",
      infographic: {
        kind: "annotated",
        label: "Báo lỗi #17",
        lines: [
          { text: "Tiêu đề: Không lưu được lỗi khi mô tả có dấu nháy (\")", note: "Cụ thể, không chỉ “web lỗi”", tone: "task" },
          { text: "Bước: 1) Mở Ghi lỗi 2) Mô tả: Vỏ “A3” bị nứt 3) Bấm Lưu lỗi", note: "Tái hiện được", tone: "context" },
          { text: "Thấy: “Không lưu được” · Mong đợi: lỗi hiện trong danh sách", note: "Thực tế vs mong đợi", tone: "output" },
          { text: "Thiết bị: Android, Chrome · Lúc: 07:42 ngày 03/11 · Ảnh: đính kèm", note: "Bối cảnh", tone: "role" },
          { text: "Ưu tiên: Đợt tới (tránh tạm: không dùng dấu nháy)", note: "Có cách tránh", tone: "constraints" },
        ],
      },
      caption: "Mẫu tự soạn cho dự án của chương; điều chỉnh theo công cụ quản lý lỗi nhóm bạn dùng.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ báo lỗi đến báo lại",
      mermaid: `flowchart TD
  A["Người dùng báo lỗi"] --> B{"Đủ để tái hiện?"}
  B -->|"Chưa"| C["Hỏi thêm: bước, thiết bị, lúc nào, ảnh"]
  C --> B
  B -->|"Đủ"| D["Xếp ưu tiên"]
  D --> E["Viết test tái hiện (trượt)"]
  E --> F["Sửa nguyên nhân gốc"]
  F --> G["Test đạt + toàn bộ test đạt"]
  G --> H["Triển khai"]
  H --> I["Báo lại người dùng, nhờ xác nhận"]`,
      caption: "Test tái hiện vừa chứng minh lỗi có thật, vừa chứng minh đã sửa.",
      alt: "Lưu đồ: người dùng báo lỗi; nếu chưa đủ để tái hiện thì hỏi thêm bước, thiết bị, thời điểm, ảnh. Đủ thì xếp ưu tiên, viết test tái hiện đang trượt, sửa nguyên nhân gốc, chạy để test đó và toàn bộ test đạt, triển khai, rồi báo lại người dùng và nhờ xác nhận.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: giao lỗi cho Claude",
      bad: {
        label: "Kể lại mơ hồ",
        content: "“Có người bảo không lưu được, sửa đi.”",
        notes: ["Không biết lưu cái gì, lúc nào.", "Claude phải đoán, có thể sửa nhầm chỗ.", "Không có cách chứng minh đã sửa."],
      },
      good: {
        label: "Bằng chứng + test tái hiện",
        content: "(Dán ảnh lỗi) “Người dùng báo: mô tả có dấu nháy kép thì bấm Lưu báo ‘Không lưu được’ (Android, Chrome). Xem API POST /api/loi trong @server/loi.js. Viết test trượt tái hiện với mô tả Vỏ \\\"A3\\\" bị nứt, rồi sửa nguyên nhân gốc. Chạy toàn bộ npm test và cho tôi xem kết quả.”",
        notes: ["Có triệu chứng, thiết bị, nơi nghi ngờ.", "Test tái hiện trước khi sửa.", "Có bằng chứng."],
      },
      takeaway: "Bằng chứng vào, test tái hiện ra — rồi mới sửa.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xếp mức ưu tiên cho báo lỗi",
      sim: {
        kind: "choose",
        options: [
          { id: "now", label: "Sửa ngay" },
          { id: "next", label: "Đợt tới (có cách tránh)" },
          { id: "later", label: "Để sau (giao diện nhỏ)" },
          { id: "info", label: "Cần thêm thông tin" },
        ],
        scenarios: [
          { id: "s1", text: "Từ sáng không ai lưu được lỗi nào.", answer: "now", why: "Chặn công việc của mọi người." },
          { id: "s2", text: "Công nhân xoá được lỗi do người khác ghi.", answer: "now", why: "Lỗ hổng phân quyền — bảo mật, sửa ngay." },
          { id: "s3", text: "Thống kê tuần đếm sai khi lỗi được sửa mô tả; tạm thời đếm tay từ danh sách được.", answer: "next", why: "Sai nhưng có cách tránh." },
          { id: "s4", text: "Nút Lưu lệch 2px trên một mẫu điện thoại, vẫn bấm được.", answer: "later", why: "Giao diện nhỏ, không ảnh hưởng công việc." },
          { id: "s5", text: "Tin nhắn: “Web bị lỗi rồi!” — không kèm gì thêm.", answer: "info", why: "Chưa đủ để tái hiện." },
          { id: "s6", text: "Mô tả có dấu nháy kép thì không lưu được; bỏ dấu nháy thì lưu bình thường.", answer: "next", why: "Có cách tránh tạm; sửa trong đợt tới." },
        ],
      },
      intro: "Mỗi báo lỗi cần một mức ưu tiên. Chọn mức hợp lý.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: xử lý một báo lỗi",
      steps: [
        { title: "Hỏi đủ thông tin", detail: "Các bước, thiết bị/trình duyệt, thời điểm, thông báo nguyên văn hoặc ảnh, điều mong đợi." },
        { title: "Xếp ưu tiên và ghi mục lỗi", detail: "Sửa ngay / đợt tới / để sau / cần thêm thông tin." },
        { title: "Đưa bằng chứng cho Claude", detail: "Dán ảnh, @file nghi ngờ; log thì pipe từ shell.", code: { lang: "bash", content: "tail -n 200 logs/server.log | claude -p \"Tóm tắt các lỗi liên quan tới POST /api/loi sáng nay và nguyên nhân có khả năng\"" } },
        { title: "Test tái hiện, rồi sửa", detail: "Test phải trượt trước, đạt sau.", code: { lang: "text", content: "Viết test trượt tái hiện lỗi #17 (mô tả có dấu nháy kép không lưu được), rồi sửa nguyên nhân gốc trong @server/loi.js. Chạy toàn bộ npm test và cho tôi xem kết quả." } },
        { title: "Xem diff, commit, triển khai", detail: "Commit nêu số lỗi, ví dụ “fix: luu mo ta co dau nhay (#17)”." },
        { title: "Báo lại người dùng", detail: "Đã sửa gì, họ cần làm gì, nhờ xác nhận." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Từ tin nhắn trong dữ liệu mẫu, viết (1) 3 câu hỏi bạn cần hỏi lại người báo, và (2) yêu cầu gửi Claude khi đã có đủ thông tin (giả định câu trả lời trong dữ liệu mẫu).",
      sampleData: {
        name: "Báo lỗi và thông tin bổ sung",
        content:
          "Tin nhắn ban đầu: “Trang thống kê không chạy.”\nSau khi hỏi lại: tổ trưởng B, iPhone, Safari; mở Thống kê tuần lúc 16:30 ngày 03/11; màn hình trắng, không có số; các tổ trưởng khác dùng Android thì bình thường. File nghi ngờ: src/thong-ke.js.",
      },
      placeholder: "Câu hỏi:\n1. …\n2. …\n3. …\nYêu cầu gửi Claude: …",
      rubric: [
        { id: "questions", label: "Có 3 câu hỏi", weight: 1, check: { kind: "minMatches", pattern: "^\\s*\\d[.)]\\s*\\S", value: 3 }, pass: "Có câu hỏi.", fail: "Viết 3 câu hỏi đánh số." },
        { id: "device", label: "Hỏi thiết bị/trình duyệt", weight: 1, check: { kind: "anyKeyword", keywords: ["thiết bị", "điện thoại", "trình duyệt"] }, pass: "Có hỏi thiết bị.", fail: "Hỏi thiết bị và trình duyệt." },
        { id: "repro", label: "Yêu cầu test tái hiện", weight: 1, check: { kind: "anyKeyword", keywords: ["test trượt", "tái hiện", "test tái hiện"] }, pass: "Có tái hiện.", fail: "Yêu cầu viết test/tái hiện trước khi sửa." },
        { id: "context", label: "Đưa bối cảnh cụ thể", weight: 1, check: { kind: "allGroups", groups: [["safari", "iphone"], ["thong-ke.js"]] }, pass: "Có bối cảnh.", fail: "Nêu Safari/iPhone và @src/thong-ke.js." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Câu hỏi:\n1. Anh dùng điện thoại và trình duyệt nào?\n2. Mở trang lúc nào, bấm những gì trước khi thấy lỗi?\n3. Màn hình hiện gì — chụp giúp em ảnh màn hình được không?\nYêu cầu gửi Claude: Tổ trưởng B báo trang Thống kê tuần hiện màn hình trắng trên iPhone, Safari (16:30 ngày 03/11); Android bình thường. Xem @src/thong-ke.js, tìm phần có thể không chạy trên Safari, viết test tái hiện (trượt) nếu được, rồi sửa nguyên nhân gốc. Chạy toàn bộ npm test và cho tôi xem kết quả.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Báo lỗi đủ để tái hiện: bước, thiết bị/trình duyệt, thời điểm, thông báo hoặc ảnh, điều mong đợi.",
        "Ưu tiên: sửa ngay (chặn công việc, bảo mật), đợt tới (có cách tránh), để sau (giao diện nhỏ), cần thêm thông tin.",
        "Vòng sửa: test tái hiện trượt → sửa nguyên nhân gốc → test đạt + toàn bộ test đạt; giữ test hồi quy.",
        "Đưa bằng chứng: dán ảnh, @file, pipe log vào claude -p.",
        "Triển khai lại và báo cho người báo lỗi, nhờ xác nhận.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Dự án của bạn sau khi có người dùng thử.",
      tasks: [
        "Tạo mẫu báo lỗi (5 mục) và gửi cho người dùng thử.",
        "Xếp ưu tiên các lỗi nhận được; sửa lỗi ưu tiên cao nhất theo vòng test tái hiện.",
        "Báo lại người báo lỗi và ghi kết quả xác nhận.",
      ],
      deliverable: "Danh sách lỗi có ưu tiên + một lỗi đã sửa kèm test hồi quy + xác nhận của người dùng.",
      checklist: ["Lỗi bảo mật được sửa ngay", "Mỗi lỗi đã sửa có test", "Người báo được thông báo"],
    },
  ],
};
