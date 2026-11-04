import type { Lesson } from "@/lib/types/content";

const CW = "https://code.claude.com/docs/en/common-workflows";
const BP = "https://code.claude.com/docs/en/best-practices";

export const lessonDebug: Lesson = {
  id: "ch06-l04",
  chapterId: "ch06",
  slug: "debug",
  title: "Debug",
  subtitle: "Đưa cho Claude đủ manh mối, đi từ tái hiện đến nguyên nhân gốc, sửa đúng bệnh chứ không che triệu chứng, và biết lúc nào nên đổi hướng.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Cung cấp manh mối tốt: thông báo lỗi nguyên văn, lệnh tái hiện, các bước, lỗi luôn xảy ra hay thỉnh thoảng, ảnh chụp với lỗi giao diện." },
    { id: "o2", text: "Đi theo quy trình: tái hiện → giả thuyết → vài cách sửa → áp dụng → chạy lại phép kiểm tra." },
    { id: "o3", text: "Phân biệt sửa nguyên nhân gốc với che triệu chứng (xoá/skip test, nuốt lỗi, @ts-ignore)." },
    { id: "o4", text: "Điều hướng phiên debug: Esc khi lệch hướng, /rewind để thử hướng khác, đòi bằng chứng trước khi tin “đã sửa”." },
  ],
  concepts: [
    { id: "error-info", label: "Thông tin lỗi" },
    { id: "reproduce", label: "Lệnh tái hiện" },
    { id: "intermittent", label: "Lỗi lúc có lúc không" },
    { id: "screenshot", label: "Ảnh chụp lỗi" },
    { id: "shell-mode", label: "Chạy lệnh bằng !" },
    { id: "hypotheses", label: "Giả thuyết nguyên nhân" },
    { id: "fix-options", label: "Vài cách sửa" },
    { id: "verify-fix", label: "Kiểm chứng bản sửa" },
    { id: "root-cause", label: "Nguyên nhân gốc" },
    { id: "symptom-masking", label: "Che triệu chứng" },
    { id: "course-correct", label: "Đổi hướng kịp thời" },
    { id: "evidence", label: "Bằng chứng" },
  ],
  hints: [
    "Đưa lệnh tái hiện: Claude chạy được, thấy stack trace, và dùng lại để kiểm chứng.",
    "Xoá test, skip test, try/catch trả về 0, @ts-ignore… thường là che triệu chứng.",
    "“Đã sửa” chỉ đáng tin khi kèm lệnh đã chạy và kết quả.",
  ],
  sources: [
    { label: "Claude Code — Common workflows: Fix bugs efficiently, Work with images", href: CW },
    { label: "Claude Code — Best practices: Give Claude a check to run, ask for evidence, course-correct", href: BP },
    { label: "Claude Code — Interactive mode: Shell mode with ! prefix", href: "https://code.claude.com/docs/en/interactive-mode" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Debug nhanh hay chậm phụ thuộc phần lớn vào **manh mối** bạn đưa. Tài liệu Claude Code khuyên: nói cho Claude **lệnh để tái hiện** lỗi và lấy stack trace, nêu **các bước tái hiện**, và cho biết lỗi **luôn xảy ra hay thỉnh thoảng**. Dán **thông báo lỗi nguyên văn**; với lỗi giao diện, dán **ảnh chụp** (Ctrl+V, hoặc Alt+V trên Windows/WSL). Trong phiên, gõ `!npm test` để chạy lệnh và đưa kết quả vào hội thoại.",
        "Quy trình gợi ý: **tái hiện** → nhờ Claude nêu **giả thuyết** và cách xác nhận từng giả thuyết → xin **vài cách sửa** (“suggest a few ways to fix…”) để so sánh → **áp dụng** cách đã chọn → **chạy lại** đúng lệnh tái hiện. Sau khi sửa, thêm **test chống tái phát** cho đúng trường hợp lỗi.",
        "Cảnh giác **che triệu chứng**: xoá hoặc skip test đang lỗi, bọc try/catch rồi trả về giá trị mặc định, thêm `@ts-ignore`, sửa kỳ vọng trong test cho khớp kết quả sai. Bộ test xanh nhưng lỗi vẫn còn — tệ hơn là đỏ.",
        "Điều hướng: thấy Claude đi lệch thì nhấn **Esc** ngay; muốn thử hướng táo bạo thì cứ thử vì `/rewind` đưa code và hội thoại về điểm trước; đã sửa hai lần vẫn sai thì `/clear` và viết một yêu cầu mới gom những gì đã biết. Và chỉ tin “đã sửa” khi có **bằng chứng**: lệnh đã chạy và kết quả.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Máy biến áp báo nhiệt độ cao: tháo cảm biến cho hết báo động là che triệu chứng. Kỹ sư giỏi đo lại, ghi điều kiện xảy ra (luôn hay chỉ giờ cao điểm), đặt giả thuyết (quạt hỏng? quá tải?), kiểm từng giả thuyết, sửa nguyên nhân, rồi theo dõi để chắc nó không tái diễn.",
      },
      terms: [
        { term: "Stack trace", definition: "Danh sách các lời gọi hàm dẫn tới lỗi — chỉ ra lỗi nảy sinh ở đâu." },
        { term: "Root cause", definition: "Nguyên nhân gốc — sửa nó thì lỗi hết thật, không chỉ hết triệu chứng." },
        { term: "Regression test", definition: "Test chống tái phát: tái hiện đúng lỗi cũ để nó không quay lại." },
        { term: "Intermittent bug", definition: "Lỗi lúc có lúc không, thường liên quan dữ liệu, thời gian hoặc chạy song song." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: quy trình debug cùng Claude",
      infographic: {
        kind: "flow",
        steps: [
          { title: "Tái hiện", body: "Lệnh + các bước; luôn hay thỉnh thoảng; ảnh chụp nếu là giao diện.", icon: "terminal" },
          { title: "Bằng chứng", body: "Thông báo lỗi nguyên văn, stack trace, log đã lọc.", icon: "search" },
          { title: "Giả thuyết", body: "Nhờ Claude nêu các nguyên nhân có thể và cách xác nhận.", icon: "list" },
          { title: "Sửa nguyên nhân", body: "So vài cách sửa, chọn cách chữa đúng bệnh.", icon: "wrench" },
          { title: "Kiểm chứng", body: "Chạy lại lệnh tái hiện; xem lệnh và kết quả.", icon: "check" },
          { title: "Chống tái phát", body: "Thêm test cho đúng trường hợp lỗi.", icon: "shield" },
        ],
      },
      caption: "Dựa trên Fix bugs efficiently và Best practices (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng debug và đổi hướng",
      mermaid: `flowchart TD
  A["Tái hiện được lỗi"] --> B["Giả thuyết + cách xác nhận"]
  B --> C["Áp dụng cách sửa đã chọn"]
  C --> D{"Lệnh tái hiện hết lỗi?"}
  D -->|"Có"| E["Thêm test chống tái phát, commit"]
  D -->|"Chưa"| F{"Đã sửa sai mấy lần?"}
  F -->|"Một lần"| G["Phản hồi cụ thể, thử lại"]
  G --> C
  F -->|"Hai lần"| H["/clear + yêu cầu mới gom điều đã biết"]
  H --> B
  C -.->|"Lệch hướng"| I["Esc, hoặc /rewind về điểm trước"]
  I --> B`,
      caption: "Không lặp lại một cách sửa thất bại lần thứ ba.",
      alt: "Lưu đồ: tái hiện lỗi, nêu giả thuyết và cách xác nhận, áp dụng cách sửa. Nếu hết lỗi thì thêm test chống tái phát và commit. Nếu chưa: sai một lần thì phản hồi cụ thể và thử lại; sai hai lần thì /clear và viết yêu cầu mới. Khi lệch hướng thì Esc hoặc /rewind về điểm trước.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: báo lỗi cho Claude",
      bad: {
        label: "Thiếu manh mối",
        content: "Báo cáo bị lỗi, sửa đi.",
        notes: ["Không có thông báo lỗi, không có lệnh tái hiện.", "Không biết lỗi luôn hay thỉnh thoảng.", "Không có tiêu chí “đã sửa”."],
      },
      good: {
        label: "Đủ manh mối",
        content:
          "Chạy npm test thì test “tong_tuan” trượt: Expected 7, Received NaN. Lỗi luôn xảy ra khi file CSV có dòng trống ở cuối (data/loi-tuan-44.csv). Trước tiên nêu 2–3 giả thuyết và cách xác nhận, chưa sửa. Sau đó đề xuất vài cách sửa; khi tôi chọn thì sửa, chạy lại npm test và cho tôi xem kết quả.",
        notes: ["Thông báo lỗi nguyên văn và lệnh tái hiện.", "Điều kiện xảy ra rõ ràng.", "Giả thuyết trước, sửa sau, có bằng chứng."],
      },
      takeaway: "Manh mối tốt + kiểm chứng rõ = ít vòng thử–sai.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: phát hiện kiểu sửa “che triệu chứng”",
      sim: {
        kind: "highlight",
        instruction: "Bấm chọn những thay đổi chỉ che triệu chứng, không sửa nguyên nhân.",
        segments: [
          { id: "s1", text: "Thêm bước bỏ qua dòng trống trước khi cộng số lỗi trong tinhTong.", target: false },
          { id: "s2", text: "Bọc cả hàm tinhTong trong try/catch, lỗi thì trả về 0.", target: true, why: "Nuốt lỗi: tổng sai nhưng không ai biết." },
          { id: "s3", text: "Thêm // @ts-ignore cho hết báo lỗi kiểu.", target: true, why: "Tắt cảnh báo chứ không sửa kiểu dữ liệu sai." },
          { id: "s4", text: "Đánh dấu test tong_tuan là skip.", target: true, why: "Bộ test xanh nhưng lỗi vẫn còn." },
          { id: "s5", text: "Thêm test cho trường hợp file có dòng trống ở cuối.", target: false },
          { id: "s6", text: "Đổi kỳ vọng trong test từ 7 thành NaN cho khớp kết quả.", target: true, why: "Sửa test cho khớp kết quả sai." },
          { id: "s7", text: "Ghi log dòng dữ liệu không hợp lệ kèm số dòng.", target: false },
        ],
      },
      intro: "Claude đề xuất danh sách thay đổi dưới đây để “sửa” test tong_tuan đang trượt. Thay đổi nào chỉ làm test xanh mà lỗi vẫn còn?",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: một phiên debug",
      steps: [
        { title: "Tái hiện ngay trong phiên", detail: "Tiền tố ! chạy lệnh trực tiếp và đưa kết quả vào hội thoại để Claude phản hồi.", code: { lang: "text", content: "!npm test" } },
        { title: "Xin giả thuyết trước khi sửa", detail: "Ép Claude suy nghĩ về nguyên nhân thay vì sửa mò.", code: { lang: "text", content: "Nêu 2–3 giả thuyết cho lỗi NaN ở test tong_tuan, mỗi giả thuyết kèm cách xác nhận. Chưa sửa code." } },
        { title: "Xin vài cách sửa rồi chọn", detail: "So sánh ưu nhược điểm; chọn cách sửa nguyên nhân gốc.", code: { lang: "text", content: "Đề xuất vài cách sửa cho giả thuyết dòng trống, nêu ưu nhược điểm. Không xoá hay skip test." } },
        { title: "Áp dụng và kiểm chứng", detail: "Chạy lại đúng lệnh tái hiện; xem lệnh và kết quả.", code: { lang: "text", content: "Áp dụng cách 1, chạy lại npm test và cho tôi xem kết quả." } },
        { title: "Chống tái phát", detail: "Thêm test cho đúng trường hợp lỗi, rồi commit." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Dựa trên dữ liệu mẫu, viết tin nhắn báo lỗi gửi Claude Code: có thông báo lỗi nguyên văn, lệnh tái hiện, điều kiện xảy ra, yêu cầu giả thuyết trước khi sửa, ràng buộc không che triệu chứng, và cách kiểm chứng.",
      sampleData: {
        name: "Điều bạn quan sát",
        content:
          "Lệnh: npm run export\nLỗi: TypeError: Cannot read properties of undefined (reading 'toFixed') at formatTong (src/export/excel.ts:42)\nXảy ra: chỉ khi tuần có ngày nghỉ (không có dữ liệu ngày đó). Tuần đủ ngày thì chạy bình thường.",
      },
      placeholder: "Khi chạy … thì gặp lỗi: …\nXảy ra khi …\nHãy …",
      rubric: [
        { id: "error", label: "Thông báo lỗi nguyên văn", weight: 1, check: { kind: "regex", pattern: "typeerror|cannot read properties" }, pass: "Có thông báo lỗi.", fail: "Dán thông báo lỗi nguyên văn." },
        { id: "repro", label: "Lệnh tái hiện", weight: 1, check: { kind: "regex", pattern: "npm run export" }, pass: "Có lệnh tái hiện.", fail: "Nêu lệnh npm run export." },
        { id: "when", label: "Điều kiện xảy ra", weight: 1, check: { kind: "regex", pattern: "(ngay nghi|khong co du lieu|chi khi)" }, pass: "Có điều kiện.", fail: "Nêu lỗi chỉ xảy ra khi tuần có ngày nghỉ." },
        { id: "hypo", label: "Giả thuyết trước khi sửa", weight: 1, check: { kind: "regex", pattern: "(gia thuyet|nguyen nhan)[^\\n]*(truoc|chua sua)|(truoc|chua sua)[^\\n]*(gia thuyet|nguyen nhan)" }, pass: "Có yêu cầu giả thuyết trước.", fail: "Yêu cầu nêu giả thuyết/nguyên nhân trước, chưa sửa." },
        { id: "nomask", label: "Không che triệu chứng + kiểm chứng", weight: 1, check: { kind: "allGroups", groups: [["không xoá", "không skip", "không bọc", "không nuốt", "không che"], ["chạy lại", "kiểm chứng", "cho tôi xem"]] }, pass: "Có ràng buộc và kiểm chứng.", fail: "Nêu: không nuốt lỗi/không skip test; sửa xong chạy lại và cho xem kết quả." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Khi chạy npm run export thì gặp lỗi: TypeError: Cannot read properties of undefined (reading 'toFixed') at formatTong (src/export/excel.ts:42).\nXảy ra chỉ khi tuần có ngày nghỉ (không có dữ liệu ngày đó); tuần đủ ngày chạy bình thường.\nTrước tiên nêu 2–3 giả thuyết nguyên nhân và cách xác nhận, chưa sửa code.\nKhi sửa: không bọc try/catch nuốt lỗi, không skip test. Thêm test cho tuần có ngày nghỉ, rồi chạy lại npm run export và npm test, cho tôi xem kết quả.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Manh mối: lỗi nguyên văn, lệnh tái hiện, các bước, luôn hay thỉnh thoảng, ảnh chụp nếu là giao diện; !lệnh để đưa kết quả vào phiên.",
        "Quy trình: tái hiện → giả thuyết → vài cách sửa → áp dụng → chạy lại → test chống tái phát.",
        "Không che triệu chứng: không xoá/skip test, không nuốt lỗi, không @ts-ignore, không sửa kỳ vọng cho khớp kết quả sai.",
        "Esc khi lệch; /rewind để thử hướng khác; hai lần sai thì /clear với yêu cầu mới.",
        "Chỉ tin “đã sửa” khi có lệnh đã chạy và kết quả.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Lần tới gặp lỗi trong dự án thật, debug cùng Claude theo quy trình của bài.",
      tasks: [
        "Viết báo lỗi đủ manh mối trước khi nhờ sửa.",
        "Yêu cầu giả thuyết và vài cách sửa; ghi lại cách bạn chọn và lý do.",
        "Kiểm tra bản sửa không che triệu chứng; thêm test chống tái phát.",
      ],
      deliverable: "Ghi chú debug: báo lỗi ban đầu, giả thuyết, cách sửa đã chọn, bằng chứng đã sửa, test chống tái phát.",
      checklist: ["Có lệnh tái hiện", "Bản sửa không xoá/skip test", "Có test chống tái phát"],
    },
  ],
};
