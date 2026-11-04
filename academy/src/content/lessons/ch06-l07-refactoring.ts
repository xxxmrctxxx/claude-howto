import type { Lesson } from "@/lib/types/content";

const CW = "https://code.claude.com/docs/en/common-workflows";

export const lessonRefactoring: Lesson = {
  id: "ch06-l07",
  chapterId: "ch06",
  slug: "refactoring",
  title: "Refactoring",
  subtitle: "Cải thiện cấu trúc code mà giữ nguyên hành vi: có lưới an toàn bằng test, đi từng bước nhỏ, không trộn với tính năng mới, và biết từ chối đề xuất quá đà.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Hiểu refactoring là đổi cấu trúc nhưng giữ nguyên hành vi, và cần test làm lưới an toàn trước khi bắt đầu." },
    { id: "o2", text: "Làm theo quy trình với Claude: tìm chỗ cần sửa → đề xuất kèm lợi ích → refactor giữ hành vi → chạy test, từng bước nhỏ." },
    { id: "o3", text: "Giữ phạm vi: tương thích ngược khi cần, không trộn refactor với thay đổi hành vi." },
    { id: "o4", text: "Đánh giá đề xuất refactor: tránh trừu tượng thừa và viết lại không cần thiết; biết /simplify dùng cho dọn dẹp." },
  ],
  concepts: [
    { id: "refactor-def", label: "Refactoring là gì" },
    { id: "safety-net", label: "Test làm lưới an toàn" },
    { id: "find-legacy", label: "Tìm code cũ cần cải thiện" },
    { id: "benefits", label: "Hỏi lợi ích" },
    { id: "same-behavior", label: "Giữ nguyên hành vi" },
    { id: "small-steps", label: "Từng bước nhỏ" },
    { id: "backward-compat", label: "Tương thích ngược" },
    { id: "no-mix", label: "Không trộn với tính năng mới" },
    { id: "over-engineering", label: "Quá đà" },
    { id: "simplify", label: "/simplify" },
    { id: "judge-proposal", label: "Đánh giá đề xuất" },
  ],
  hints: [
    "Chưa có test? Nhờ Claude viết test ghi lại hành vi hiện tại trước khi refactor.",
    "Một commit refactor không nên chứa thay đổi hành vi.",
    "Đề xuất thêm nhiều lớp trừu tượng cho code chỉ dùng một chỗ thường là quá đà.",
  ],
  sources: [
    { label: "Claude Code — Common workflows: Refactor code", href: CW },
    { label: "Claude Code — Best practices: reviewer prompt “skip style”, tránh lớp trừu tượng thừa", href: "https://code.claude.com/docs/en/best-practices" },
    { label: "Claude Code — Review locally with /code-review (/simplify)", href: "https://code.claude.com/docs/en/code-review-local" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Refactoring** là sắp xếp lại code cho dễ đọc, dễ sửa — **mà không đổi hành vi**: cùng đầu vào, cùng kết quả. Vì vậy trước khi refactor cần **lưới an toàn**: bộ test bao phủ phần sắp sửa. Chưa có test thì nhờ Claude viết test ghi lại hành vi hiện tại trước.",
        "Quy trình theo tài liệu: **tìm** code cũ (“find deprecated API usage in our codebase”) → **xin đề xuất** (“suggest how to refactor utils.js…”) và nhờ giải thích **lợi ích** → **refactor giữ nguyên hành vi** (“…while maintaining the same behavior”) → **chạy test**. Tài liệu khuyên làm **từng bước nhỏ, kiểm thử được**, và yêu cầu **tương thích ngược** khi có nơi khác phụ thuộc.",
        "Giữ phạm vi sạch: **không trộn** refactor với thêm tính năng hay sửa lỗi trong cùng một commit — người review không phân biệt được đâu là thay đổi hành vi. Nếu trong lúc refactor phát hiện lỗi, ghi lại và sửa ở commit riêng.",
        "Cảnh giác **quá đà**: thêm interface, factory, nhiều lớp trừu tượng cho code chỉ dùng một chỗ; viết lại cả module sang framework mới khi nó đang ổn định. Tài liệu Best practices nhắc: người review được yêu cầu “tìm vấn đề” thì luôn tìm ra *thứ gì đó*; sửa hết mọi góp ý dễ sinh thêm lớp trừu tượng thừa. Với dọn dẹp nhỏ, `/simplify` xem xét riêng phần dọn dẹp và áp dụng sửa.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Sắp xếp lại tủ điện cho gọn — đi lại dây, dán nhãn — mà mọi thiết bị vẫn chạy y như cũ. Trước khi làm, ghi lại thông số hiện trạng (test); làm từng ngăn một, đo lại sau mỗi ngăn; và đừng tiện tay thay luôn thiết bị mới (tính năng) trong lúc sắp xếp.",
      },
      terms: [
        { term: "Refactoring", definition: "Cải thiện cấu trúc code mà không đổi hành vi bên ngoài." },
        { term: "Characterization test", definition: "Test ghi lại hành vi hiện tại của code cũ để refactor an toàn." },
        { term: "Backward compatibility", definition: "Tương thích ngược: nơi đang dùng code không bị hỏng sau thay đổi." },
        { term: "Over-engineering", definition: "Làm phức tạp hơn mức cần thiết (lớp trừu tượng thừa, test cho trường hợp không thể xảy ra)." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: quy trình refactor an toàn",
      infographic: {
        kind: "flow",
        steps: [
          { title: "Lưới an toàn", body: "Có test bao phủ; chưa có thì viết test ghi lại hành vi hiện tại. Commit.", icon: "shield" },
          { title: "Tìm và đề xuất", body: "Tìm code cũ; xin đề xuất kèm lợi ích; quyết định có đáng không.", icon: "search" },
          { title: "Một bước nhỏ", body: "Refactor một phần, giữ nguyên hành vi.", icon: "wrench" },
          { title: "Chạy test", body: "Đạt → commit bước đó; trượt → sửa hoặc /rewind.", icon: "check" },
          { title: "Lặp lại", body: "Bước tiếp theo, đến khi xong; không trộn tính năng mới.", icon: "repeat" },
        ],
      },
      caption: "Dựa trên mục Refactor code trong Common workflows (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: mỗi bước refactor là một vòng kiểm chứng",
      mermaid: `flowchart TD
  A{"Có test bao phủ?"} -->|"Chưa"| B["Viết test ghi lại hành vi hiện tại"]
  B --> C["Commit"]
  A -->|"Có"| C
  C --> D["Refactor một bước nhỏ"]
  D --> E{"Test đạt?"}
  E -->|"Không"| F["Sửa hoặc /rewind"]
  F --> D
  E -->|"Có"| G["Commit bước này"]
  G --> H{"Còn bước?"}
  H -->|"Có"| D
  H -->|"Không"| I["/diff tổng thể, mở PR"]`,
      caption: "Bước càng nhỏ, lỗi càng dễ khoanh vùng.",
      alt: "Lưu đồ: nếu chưa có test thì viết test ghi lại hành vi hiện tại, commit. Refactor một bước nhỏ, chạy test; trượt thì sửa hoặc /rewind, đạt thì commit bước đó; còn bước thì lặp lại, hết thì xem /diff tổng thể và mở PR.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu refactor",
      bad: {
        label: "Mơ hồ, trộn lẫn",
        content: "refactor report.js cho đẹp, tiện thêm luôn cột Ca làm việc",
        notes: ["“Cho đẹp” không có tiêu chí.", "Trộn refactor với tính năng mới.", "Không nói giữ hành vi, không có test."],
      },
      good: {
        label: "Giữ hành vi, từng bước",
        content:
          "Refactor hàm taoBaoCao (120 dòng) trong @src/report.js thành các hàm nhỏ dễ đọc, giữ nguyên hành vi và chữ ký hàm. Trước tiên đề xuất cách chia và lợi ích, chờ tôi duyệt. Làm từng bước; sau mỗi bước chạy npm test. Không thêm tính năng, không sửa lỗi trong lượt này — nếu thấy lỗi, ghi lại riêng.",
        notes: ["Tiêu chí rõ: giữ hành vi và chữ ký.", "Từng bước có test.", "Tách bạch với tính năng/sửa lỗi."],
      },
      takeaway: "Refactor tốt nhàm chán theo cách tốt: không ai nhận ra hành vi thay đổi.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đâu là refactor thật?",
      sim: {
        kind: "classify",
        bins: [
          { id: "refactor", label: "Refactor (giữ nguyên hành vi)" },
          { id: "behavior", label: "Thay đổi hành vi (tính năng / sửa lỗi)" },
          { id: "over", label: "Quá đà / không đáng" },
        ],
        items: [
          { id: "i1", text: "Tách hàm 120 dòng thành 3 hàm nhỏ, kết quả như cũ", bin: "refactor", why: "Cấu trúc đổi, hành vi giữ nguyên." },
          { id: "i2", text: "Đổi tên biến x thành soLoiTheoNgay", bin: "refactor", why: "Dễ đọc hơn, hành vi không đổi." },
          { id: "i3", text: "Thay vòng for bằng reduce, test vẫn đạt", bin: "refactor", why: "Cách viết khác, cùng kết quả." },
          { id: "i4", text: "Thêm cột “Ca làm việc” vào báo cáo", bin: "behavior", why: "Tính năng mới — commit riêng." },
          { id: "i5", text: "Đổi làm tròn từ 1 sang 2 chữ số thập phân", bin: "behavior", why: "Kết quả thay đổi." },
          { id: "i6", text: "Tạo interface, factory và 4 lớp cho một hàm chỉ dùng ở một chỗ", bin: "over", why: "Trừu tượng thừa, khó đọc hơn." },
          { id: "i7", text: "Viết lại cả module ổn định sang framework mới “cho hiện đại”", bin: "over", why: "Rủi ro lớn, không giải quyết vấn đề nào." },
        ],
      },
      intro: "Xếp mỗi thay đổi Claude đề xuất vào đúng nhóm.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: refactor cùng Claude",
      steps: [
        { title: "Dựng lưới an toàn", detail: "Chưa có test thì ghi lại hành vi hiện tại trước, rồi commit.", code: { lang: "text", content: "Hàm taoBaoCao chưa có test. Viết test ghi lại hành vi hiện tại với 3 file CSV mẫu, chạy npm test, chưa sửa code." } },
        { title: "Tìm chỗ cần cải thiện", detail: "Ví dụ API đã lỗi thời, hàm quá dài, code lặp.", code: { lang: "text", content: "Tìm các chỗ dùng API đã lỗi thời trong src/." } },
        { title: "Xin đề xuất kèm lợi ích", detail: "Bạn quyết định có đáng làm không.", code: { lang: "text", content: "Đề xuất cách refactor utils.js dùng cú pháp JavaScript hiện đại; giải thích lợi ích của từng thay đổi. Chưa sửa." } },
        { title: "Refactor từng bước, giữ hành vi", detail: "Sau mỗi bước chạy test và commit.", code: { lang: "text", content: "Thực hiện bước 1 của đề xuất, giữ nguyên hành vi và chữ ký hàm. Chạy npm test và cho tôi xem kết quả." } },
        { title: "Dọn dẹp nhỏ và duyệt tổng thể", detail: "/simplify cho dọn dẹp; /diff trước khi mở PR.", code: { lang: "text", content: "/simplify\n/diff" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Hàm xuLyDuLieu trong src/import.js dài 200 dòng, được module của nhóm khác gọi, và chưa có test. Viết yêu cầu refactor an toàn gửi Claude.",
      placeholder: "Trước tiên … Sau đó … Ràng buộc: …",
      rubric: [
        { id: "net", label: "Viết test trước khi refactor", weight: 1, check: { kind: "regex", pattern: "(viet test|test ghi lai|hanh vi hien tai)[^\\n]*(truoc|chua sua)|(truoc|truoc tien)[^\\n]*test" }, pass: "Có lưới an toàn.", fail: "Trước tiên viết test ghi lại hành vi hiện tại." },
        { id: "same", label: "Giữ nguyên hành vi", weight: 1, check: { kind: "regex", pattern: "(giu nguyen hanh vi|khong doi (hanh vi|ket qua))" }, pass: "Có giữ hành vi.", fail: "Nêu rõ giữ nguyên hành vi." },
        { id: "compat", label: "Tương thích ngược", weight: 1, check: { kind: "regex", pattern: "(chu ky|tuong thich|khong doi ten ham|giu nguyen ten)" }, pass: "Có tương thích ngược.", fail: "Giữ nguyên chữ ký hàm vì nhóm khác đang gọi." },
        { id: "steps", label: "Từng bước có chạy test", weight: 1, check: { kind: "regex", pattern: "(tung buoc|moi buoc)[^\\n]*(test|chay)" }, pass: "Có từng bước kèm test.", fail: "Làm từng bước, chạy test sau mỗi bước." },
        { id: "nomix", label: "Không trộn tính năng/sửa lỗi", weight: 1, check: { kind: "regex", pattern: "khong (them tinh nang|sua loi)" }, pass: "Có tách bạch.", fail: "Không thêm tính năng hay sửa lỗi trong lượt refactor." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Trước tiên viết test ghi lại hành vi hiện tại của xuLyDuLieu trong @src/import.js với vài file mẫu, chạy npm test, chưa sửa code.\nSau đó đề xuất cách chia hàm thành các hàm nhỏ và lợi ích, chờ tôi duyệt.\nRefactor từng bước, sau mỗi bước chạy npm test và commit.\nRàng buộc: giữ nguyên hành vi và chữ ký hàm (nhóm khác đang gọi), không thêm tính năng, không sửa lỗi trong lượt này — thấy lỗi thì ghi lại riêng.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Refactor = đổi cấu trúc, giữ hành vi; cần test làm lưới an toàn trước.",
        "Tìm → đề xuất kèm lợi ích → refactor giữ hành vi → chạy test; từng bước nhỏ, commit từng bước.",
        "Giữ tương thích ngược khi có nơi phụ thuộc; không trộn refactor với tính năng hay sửa lỗi.",
        "Từ chối đề xuất quá đà: trừu tượng thừa, viết lại không cần thiết; /simplify cho dọn dẹp nhỏ.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một hàm dài hoặc khó đọc trong dự án thật.",
      tasks: [
        "Đảm bảo có test (viết test ghi lại hành vi hiện tại nếu cần).",
        "Nhờ Claude đề xuất cách refactor kèm lợi ích; loại bỏ đề xuất quá đà.",
        "Refactor từng bước, mỗi bước một commit có test đạt.",
      ],
      deliverable: "Chuỗi commit refactor, kết quả test sau mỗi bước, và ghi chú đề xuất nào bạn đã từ chối vì sao.",
      checklist: ["Có test trước khi refactor", "Không commit nào trộn tính năng", "Hành vi không đổi (test đạt suốt quá trình)"],
    },
  ],
};
