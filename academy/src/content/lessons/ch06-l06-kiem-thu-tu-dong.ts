import type { Lesson } from "@/lib/types/content";

const CW = "https://code.claude.com/docs/en/common-workflows";
const BP = "https://code.claude.com/docs/en/best-practices";

export const lessonKiemThuTuDong: Lesson = {
  id: "ch06-l06",
  chapterId: "ch06",
  slug: "kiem-thu-tu-dong",
  title: "Kiểm thử tự động",
  subtitle: "Nhờ Claude viết test đúng phong cách dự án, chọn trường hợp biên và lỗi, biến test thành phép kiểm tra để Claude tự khép vòng — và giữ test trung thực.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Nhờ Claude tìm phần chưa có test và viết test theo phong cách sẵn có của dự án." },
    { id: "o2", text: "Chọn trường hợp test tốt: bình thường, giá trị biên, dữ liệu lỗi hoặc bất thường." },
    { id: "o3", text: "Biến test thành phép kiểm tra để Claude tự khép vòng; biết các mức cưỡng chế (/goal, Stop hook) ở mức khái niệm." },
    { id: "o4", text: "Giữ test trung thực: test phải trượt khi code sai; không skip, không sửa kỳ vọng cho khớp kết quả sai." },
  ],
  concepts: [
    { id: "find-untested", label: "Tìm phần chưa có test" },
    { id: "match-style", label: "Theo phong cách test sẵn có" },
    { id: "edge-cases", label: "Trường hợp biên và bất thường" },
    { id: "boundary", label: "Giá trị biên" },
    { id: "error-cases", label: "Dữ liệu lỗi" },
    { id: "check-loop", label: "Test là phép kiểm tra" },
    { id: "goal-hook", label: "/goal và Stop hook" },
    { id: "evidence-test", label: "Bằng chứng chạy test" },
    { id: "test-first", label: "Viết test trước" },
    { id: "honest-tests", label: "Test trung thực" },
  ],
  hints: [
    "Thêm vào yêu cầu: “chạy test sau khi sửa và tiếp tục đến khi đạt”.",
    "Giá trị biên của khoảng 1–100: thử 0, 1, 100, 101.",
    "Một test mới đạt ngay cả khi chưa viết tính năng là test đáng ngờ.",
  ],
  sources: [
    { label: "Claude Code — Common workflows: Work with tests", href: CW },
    { label: "Claude Code — Best practices: Give Claude a check to run (prompt, /goal, Stop hook, /code-review), ask for evidence", href: BP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude viết test rất nhanh, và — theo tài liệu — **xem các file test sẵn có để theo đúng phong cách, framework và cách assert** của dự án. Quy trình gợi ý: tìm hàm **chưa có test** → thêm test → bổ sung **trường hợp biên** → **chạy và sửa** test trượt. Hãy nói rõ hành vi bạn muốn kiểm chứng.",
        "Test tốt phủ ba loại trường hợp: **bình thường** (dữ liệu điển hình), **giá trị biên** (rỗng, một phần tử, đúng ngưỡng, vượt ngưỡng một đơn vị), và **lỗi/bất thường** (dòng trống, số âm, chữ trong cột số). Bạn có thể nhờ Claude chỉ ra các trường hợp bạn có thể đã bỏ sót.",
        "Test còn là **phép kiểm tra trả về đạt/không đạt** để Claude tự khép vòng: thêm “chạy test sau khi sửa và tiếp tục đến khi đạt” vào yêu cầu. Mạnh hơn có `/goal` (một model riêng kiểm tra điều kiện sau mỗi lượt) và **Stop hook** (Claude Code chạy script của bạn mỗi khi Claude định kết thúc lượt, không đạt thì làm tiếp) — hữu ích cho việc chạy lâu. Dù cách nào, hãy đòi **bằng chứng**: lệnh đã chạy và kết quả.",
        "Test chỉ có giá trị khi **trung thực**: một test phải **trượt khi code sai**. Không skip test, không sửa kỳ vọng cho khớp kết quả sai, không viết test chỉ gọi hàm mà không kiểm tra kết quả. Với tính năng mới, một cách làm chặt chẽ là **viết test trước**, xác nhận nó trượt, rồi mới viết code cho đến khi đạt.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Test giống quy trình nghiệm thu máy biến áp: thử ở điều kiện định mức (bình thường), ở ngưỡng cho phép (biên) và trong sự cố giả lập (lỗi). Bài thử không bao giờ được “nới chuẩn” cho khớp máy kém — nếu nới, biên bản nghiệm thu mất hết giá trị.",
      },
      terms: [
        { term: "Unit test", definition: "Test một hàm hoặc đơn vị nhỏ với đầu vào và kết quả mong đợi." },
        { term: "Edge case", definition: "Trường hợp biên hoặc bất thường: rỗng, ngưỡng, dữ liệu sai." },
        { term: "/goal", definition: "Đặt điều kiện hoàn thành; một model riêng kiểm tra sau mỗi lượt cho đến khi đạt." },
        { term: "Stop hook", definition: "Script chạy mỗi khi Claude định kết thúc lượt; nếu báo chưa đạt, Claude làm tiếp." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: ba loại trường hợp test cho hàm kiemTraSoLuong (1–100)",
      infographic: {
        kind: "table",
        headers: ["Loại", "Đầu vào", "Kết quả mong đợi"],
        rows: [
          ["Bình thường", "50", "Hợp lệ"],
          ["Biên", "1 và 100", "Hợp lệ"],
          ["Biên", "0 và 101", "Báo lỗi ngoài khoảng"],
          ["Lỗi", "“” (để trống)", "Báo lỗi bắt buộc nhập"],
          ["Lỗi", "“-5”", "Báo lỗi số âm"],
          ["Bất thường", "“abc”", "Báo lỗi không phải số"],
        ],
      },
      caption: "Lỗi hay nằm ở biên và dữ liệu bất thường — đừng chỉ test trường hợp đẹp.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: test làm phép kiểm tra cho Claude",
      mermaid: `flowchart TD
  A["Viết test cho hành vi mong muốn"] --> B["Chạy: test mới phải trượt"]
  B --> C["Claude viết/sửa code"]
  C --> D["Chạy test"]
  D -->|"Trượt"| C
  D -->|"Đạt"| E["Xem lệnh + kết quả, commit"]
  F["Không được: skip test, sửa kỳ vọng cho khớp code sai"] -.-> D`,
      caption: "Test trượt khi code sai, đạt khi code đúng — chỉ vậy test mới có giá trị.",
      alt: "Lưu đồ: viết test cho hành vi mong muốn, chạy và xác nhận test trượt, Claude viết hoặc sửa code, chạy test; trượt thì sửa tiếp, đạt thì xem lệnh và kết quả rồi commit. Không được skip test hay sửa kỳ vọng cho khớp code sai.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: nhờ Claude viết test",
      bad: {
        label: "Quá chung",
        content: "viết test cho file report.js",
        notes: ["Không nói hành vi cần kiểm chứng.", "Không có trường hợp biên/lỗi.", "Không yêu cầu chạy và đạt."],
      },
      good: {
        label: "Có hành vi, trường hợp và vòng kiểm tra",
        content:
          "Viết test cho hàm tinhTong trong @src/report.js, theo cách viết của các test trong tests/. Trường hợp: dữ liệu điển hình; danh sách rỗng trả về 0; dòng trống bị bỏ qua; số âm báo lỗi. Chạy npm test và tiếp tục đến khi đạt. Không skip test, không sửa kỳ vọng cho khớp kết quả sai. Cho tôi xem lệnh và kết quả.",
        notes: ["Nêu rõ hành vi từng trường hợp.", "Có vòng chạy–sửa–chạy.", "Có ràng buộc trung thực và bằng chứng."],
      },
      takeaway: "Nói rõ hành vi, liệt kê trường hợp, đòi chạy đến khi đạt và đòi bằng chứng.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: phân loại trường hợp test",
      sim: {
        kind: "classify",
        bins: [
          { id: "normal", label: "Bình thường" },
          { id: "edge", label: "Giá trị biên" },
          { id: "bad", label: "Dữ liệu lỗi / bất thường" },
        ],
        items: [
          { id: "i1", text: "3 dòng dữ liệu hợp lệ của tuần 44", bin: "normal", why: "Dữ liệu điển hình." },
          { id: "i2", text: "Danh sách rỗng (tuần không có lỗi nào)", bin: "edge", why: "Biên dưới: không có phần tử." },
          { id: "i3", text: "Chỉ một dòng dữ liệu", bin: "edge", why: "Biên: một phần tử." },
          { id: "i4", text: "Số lỗi bằng 0 ở mọi dòng", bin: "edge", why: "Giá trị biên của số lỗi." },
          { id: "i5", text: "Dòng trống ở cuối file CSV", bin: "bad", why: "Dữ liệu bất thường hay gặp." },
          { id: "i6", text: "Số lỗi là số âm", bin: "bad", why: "Dữ liệu không hợp lệ." },
          { id: "i7", text: "Chữ “abc” trong cột số lỗi", bin: "bad", why: "Sai kiểu dữ liệu." },
        ],
      },
      intro: "Hàm tinhTong cộng số lỗi từ các dòng CSV. Xếp mỗi trường hợp test vào đúng loại.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: thêm test cùng Claude",
      steps: [
        { title: "Tìm phần chưa có test", detail: "Bắt đầu từ chỗ rủi ro cao.", code: { lang: "text", content: "Tìm các hàm trong src/report/ chưa có test." } },
        { title: "Viết test theo phong cách dự án", detail: "Claude xem test sẵn có để theo cùng framework và cách assert.", code: { lang: "text", content: "Thêm test cho hàm tinhTong, theo cách viết của các test trong tests/." } },
        { title: "Bổ sung trường hợp biên và lỗi", detail: "Nhờ Claude chỉ ra trường hợp có thể đã bỏ sót.", code: { lang: "text", content: "Thêm test cho các trường hợp biên: danh sách rỗng, một dòng, dòng trống, số âm. Có trường hợp nào khác tôi đã bỏ sót không?" } },
        { title: "Chạy đến khi đạt, có bằng chứng", detail: "Biến test thành phép kiểm tra để Claude tự khép vòng.", code: { lang: "text", content: "Chạy npm test và tiếp tục sửa code đến khi đạt. Không skip test, không sửa kỳ vọng. Cho tôi xem lệnh và kết quả." } },
        { title: "Việc dài: đặt mục tiêu", detail: "Một model riêng kiểm tra điều kiện sau mỗi lượt.", code: { lang: "text", content: "/goal all tests in tests/report pass and lint is clean" } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Hàm kiemTraSoLuong(giaTri) trong src/form/validate.js chấp nhận số nguyên từ 1 đến 100. Viết yêu cầu gửi Claude để thêm test: nêu trường hợp bình thường, biên và lỗi; yêu cầu chạy đến khi đạt; ràng buộc giữ test trung thực; và đòi bằng chứng.",
      placeholder: "Viết test cho … Trường hợp: … Chạy … Không … Cho tôi xem …",
      rubric: [
        { id: "target", label: "Chỉ rõ hàm/file", weight: 1, check: { kind: "regex", pattern: "kiemtrasoluong|validate\\.js" }, pass: "Có hàm/file.", fail: "Nêu kiemTraSoLuong trong src/form/validate.js." },
        { id: "edges", label: "Có giá trị biên", weight: 1, check: { kind: "allGroups", groups: [["0"], ["101"]] }, pass: "Có biên 0 và 101.", fail: "Thêm biên: 0, 1, 100, 101." },
        { id: "bad", label: "Có dữ liệu lỗi", weight: 1, check: { kind: "regex", pattern: "(de trong|so am|-\\d|abc|khong phai so)" }, pass: "Có dữ liệu lỗi.", fail: "Thêm: để trống, số âm, chữ." },
        { id: "loop", label: "Chạy đến khi đạt", weight: 1, check: { kind: "regex", pattern: "(den khi|cho den khi)[^\\n]*dat" }, pass: "Có vòng chạy.", fail: "Thêm: chạy test và tiếp tục đến khi đạt." },
        { id: "honest", label: "Test trung thực + bằng chứng", weight: 1, check: { kind: "allGroups", groups: [["không skip", "không sửa kỳ vọng", "không bỏ qua test"], ["cho tôi xem", "kết quả"]] }, pass: "Có ràng buộc và bằng chứng.", fail: "Nêu không skip/không sửa kỳ vọng và đòi xem kết quả." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Viết test cho hàm kiemTraSoLuong trong @src/form/validate.js, theo cách viết của các test trong tests/.\nTrường hợp: 50 hợp lệ; biên 1 và 100 hợp lệ, 0 và 101 báo lỗi ngoài khoảng; để trống báo lỗi bắt buộc nhập; số âm -5 báo lỗi; “abc” báo lỗi không phải số.\nChạy npm test và tiếp tục đến khi đạt. Không skip test, không sửa kỳ vọng cho khớp kết quả sai.\nCho tôi xem lệnh đã chạy và kết quả.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Claude xem test sẵn có để viết theo cùng phong cách, framework và cách assert.",
        "Phủ ba loại trường hợp: bình thường, biên, lỗi/bất thường; nhờ Claude chỉ ra trường hợp bỏ sót.",
        "Test là phép kiểm tra: “chạy và tiếp tục đến khi đạt”; mạnh hơn có /goal và Stop hook; luôn đòi bằng chứng.",
        "Test trung thực: trượt khi code sai; không skip, không sửa kỳ vọng cho khớp kết quả sai.",
        "Tính năng mới: có thể viết test trước, xác nhận trượt, rồi mới viết code.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một hàm quan trọng nhưng chưa có test trong dự án thật.",
      tasks: [
        "Nhờ Claude viết test theo phong cách dự án, có đủ ba loại trường hợp.",
        "Cố ý làm sai code một chút để xác nhận test trượt, rồi hoàn tác.",
        "Thêm lệnh chạy test vào CLAUDE.md nếu chưa có.",
      ],
      deliverable: "File test mới, bằng chứng test trượt khi code sai và đạt khi code đúng.",
      checklist: ["Có trường hợp biên và lỗi", "Test trượt khi code sai", "Lệnh test có trong CLAUDE.md"],
    },
  ],
};
