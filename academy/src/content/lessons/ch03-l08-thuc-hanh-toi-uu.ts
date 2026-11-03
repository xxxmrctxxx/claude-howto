import type { Lesson } from "@/lib/types/content";

const OV = "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview";
const BP = "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices";

export const lessonToiUuPrompt: Lesson = {
  id: "ch03-l08",
  chapterId: "ch03",
  slug: "thuc-hanh-toi-uu-prompt",
  title: "Thực hành tối ưu prompt",
  subtitle: "Tối ưu prompt như làm cải tiến chất lượng: đặt tiêu chí, thử trên bộ mẫu, thay đổi từng điểm, ghi lại phiên bản.",
  level: "advanced",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Xác định tiêu chí thành công đo được trước khi tối ưu prompt." },
    { id: "o2", text: "Xây bộ mẫu thử nhỏ và so sánh các phiên bản prompt trên cùng bộ mẫu." },
    { id: "o3", text: "Cải tiến bằng cách thay đổi từng điểm một và ghi lại phiên bản." },
    { id: "o4", text: "Nhận ra khi vấn đề không nằm ở prompt và dùng chuỗi tự rà soát khi phù hợp." },
  ],
  concepts: [
    { id: "success-criteria", label: "Tiêu chí thành công" },
    { id: "test-set", label: "Bộ mẫu thử" },
    { id: "one-change", label: "Thay đổi từng điểm" },
    { id: "versioning", label: "Ghi phiên bản" },
    { id: "not-prompt-problem", label: "Khi vấn đề không ở prompt" },
    { id: "self-review", label: "Chuỗi tự rà soát" },
    { id: "prompt-library", label: "Thư viện prompt" },
    { id: "console", label: "Claude Console" },
  ],
  hints: [
    "Anthropic: trước khi tối ưu prompt, cần có tiêu chí thành công, cách kiểm tra thực nghiệm và một bản nháp đầu tiên.",
    "Thay đổi nhiều thứ cùng lúc thì không biết thay đổi nào có tác dụng.",
    "Không phải lỗi nào cũng sửa được bằng prompt: độ trễ, chi phí có khi xử lý dễ hơn bằng cách đổi model.",
  ],
  sources: [
    { label: "Anthropic — Prompt engineering overview (before prompt engineering, when to prompt engineer)", href: OV },
    { label: "Anthropic — Prompting best practices: Chain complex prompts", href: BP },
    { label: "Anthropic — Models overview (Claude Console)", href: "https://platform.claude.com/docs/en/about-claude/models/overview" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Tài liệu Anthropic nêu ba điều cần có **trước khi** tối ưu prompt: **tiêu chí thành công** rõ ràng, **cách kiểm tra thực nghiệm** theo tiêu chí đó, và **một bản nháp prompt** đầu tiên.",
        "Cách làm giống cải tiến chất lượng trong sản xuất: chuẩn bị **bộ mẫu thử** (vài chục đầu vào thật, gồm cả trường hợp khó), chạy từng phiên bản prompt trên **cùng bộ mẫu**, chấm theo tiêu chí. Mỗi lần chỉ **thay đổi một điểm**, ghi lại **phiên bản** và kết quả — nếu thay đổi làm kết quả kém đi thì quay lại.",
        "Không phải vấn đề nào cũng giải bằng prompt. Anthropic lưu ý độ trễ và chi phí đôi khi cải thiện dễ hơn bằng cách **chọn model khác**; còn nếu thiếu dữ liệu đầu vào thì phải bổ sung dữ liệu.",
        "Với đầu ra quan trọng, dùng **chuỗi tự rà soát**: nháp → rà soát theo tiêu chí → hoàn thiện. Prompt tốt nên được lưu vào **thư viện prompt** của nhóm kèm phiên bản và kết quả thử. Lập trình viên có thể soạn và thử prompt trên **Claude Console** trong trình duyệt.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Chỉnh thông số máy ép: bạn có tiêu chuẩn sản phẩm, chạy mẫu thử, mỗi lần chỉnh một thông số và ghi vào sổ. Không ai chỉnh cùng lúc nhiệt độ, áp suất và tốc độ rồi đoán xem cái nào có tác dụng.",
      },
      terms: [
        { term: "Success criteria", definition: "Tiêu chí thành công đo được: ví dụ “đúng định dạng 10/10 mẫu”." },
        { term: "Test set", definition: "Bộ mẫu thử cố định dùng để so sánh các phiên bản prompt." },
        { term: "Regression", definition: "Thay đổi làm kết quả kém đi so với phiên bản trước." },
        { term: "Claude Console", definition: "Công cụ trên trình duyệt của Anthropic để soạn và thử prompt." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: sổ phiên bản prompt (số liệu minh hoạ)",
      infographic: {
        kind: "table",
        headers: ["Phiên bản", "Thay đổi duy nhất", "Đạt tiêu chí (trên 10 mẫu)", "Quyết định"],
        rows: [
          ["v1", "Bản nháp đầu tiên", "4/10", "Tiếp tục cải tiến"],
          ["v2", "Thêm người đọc và mục đích", "7/10", "Giữ"],
          ["v3", "Thêm 3 ví dụ đa dạng trong thẻ", "9/10", "Giữ — tốt nhất"],
          ["v4", "Rút gọn chỉ dẫn cho ngắn", "8/10", "Kém đi → quay lại v3"],
        ],
      },
      caption: "Số liệu trong bảng là ví dụ minh hoạ cách ghi sổ, không phải kết quả đo thật.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng lặp tối ưu",
      mermaid: `flowchart TD
  A["Đặt tiêu chí thành công"] --> B["Chuẩn bị bộ mẫu thử"]
  B --> C["Viết bản nháp prompt"]
  C --> D["Chạy trên bộ mẫu, chấm theo tiêu chí"]
  D --> E{"Đạt yêu cầu?"}
  E -- "Đạt" --> F["Lưu vào thư viện kèm phiên bản"]
  E -- "Chưa" --> G{"Vấn đề nằm ở prompt?"}
  G -- "Có" --> H["Thay đổi MỘT điểm, ghi phiên bản"]
  H --> D
  G -- "Không" --> I["Đổi model, bổ sung dữ liệu hoặc chia quy trình"]`,
      caption: "Tối ưu có hệ thống: đo, sửa một điểm, đo lại.",
      alt: "Lưu đồ: đặt tiêu chí, bộ mẫu thử, bản nháp, chạy và chấm; nếu đạt thì lưu vào thư viện; nếu chưa và vấn đề ở prompt thì thay đổi một điểm và chạy lại; nếu không ở prompt thì đổi model, bổ sung dữ liệu hoặc chia quy trình.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Tối ưu theo cảm tính",
        content: "Thử prompt trên 1 email, thấy “có vẻ ổn” → sửa 5 chỗ cùng lúc → thử email khác → “hình như tốt hơn”.",
        notes: ["Không có tiêu chí, không có bộ mẫu cố định.", "Không biết thay đổi nào có tác dụng."],
      },
      good: {
        label: "Tối ưu có hệ thống",
        content: "4 tiêu chí đo được, 10 email mẫu cố định, mỗi phiên bản thay 1 điểm, ghi sổ kết quả; chọn phiên bản đạt 9/10 và lưu vào thư viện.",
        notes: ["Quyết định dựa trên số liệu.", "Có thể quay lại phiên bản tốt."],
      },
      takeaway: "Không đo thì không biết prompt mới tốt hơn hay chỉ khác đi.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: sắp xếp vòng lặp tối ưu",
      sim: {
        kind: "sequence",
        items: [
          { id: "a", text: "Đặt tiêu chí thành công đo được" },
          { id: "b", text: "Chuẩn bị bộ mẫu thử cố định (có trường hợp khó)" },
          { id: "c", text: "Viết bản nháp prompt đầu tiên" },
          { id: "d", text: "Chạy trên bộ mẫu và chấm theo tiêu chí" },
          { id: "e", text: "Thay đổi một điểm, ghi phiên bản" },
          { id: "f", text: "Chạy lại trên cùng bộ mẫu và so sánh" },
          { id: "g", text: "Lưu phiên bản tốt nhất vào thư viện prompt" },
        ],
        explain: "Tiêu chí và bộ mẫu có trước, rồi mới viết và cải tiến prompt.",
      },
      intro: "Dùng mũi tên để sắp xếp các bước theo đúng thứ tự của một vòng tối ưu prompt.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tối ưu một prompt dùng hằng ngày",
      steps: [
        { title: "Viết 3–5 tiêu chí đo được", detail: "Ví dụ: đúng định dạng, đủ 3 mục bắt buộc, không bịa số liệu, ≤ 150 từ." },
        { title: "Chọn 10–20 mẫu thử thật", detail: "Gồm mẫu điển hình, trường hợp khó và những mẫu từng cho kết quả sai." },
        { title: "Chạy phiên bản hiện tại, chấm điểm", detail: "Ghi số mẫu đạt từng tiêu chí." },
        { title: "Sửa một điểm dựa trên lỗi phổ biến nhất", detail: "Ví dụ thiếu người đọc → thêm người đọc. Chạy lại và so sánh." },
        {
          title: "Ghi sổ và lưu vào thư viện",
          detail: "Mỗi mục thư viện có đủ thông tin để người khác dùng lại.",
          code: { lang: "text", content: "Tên: Tóm tắt biên bản họp QA\nPhiên bản: v3 (03/11/2026)\nMục đích: tóm tắt cho trưởng phòng trong 5 dòng\nKết quả thử: 9/10 mẫu đạt 4 tiêu chí\nGiới hạn đã biết: biên bản viết tay chụp ảnh mờ → cần kiểm tra lại số\nPrompt: …" },
        },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Bạn sắp tối ưu prompt “tóm tắt biên bản họp giao ban”. Viết kế hoạch tối ưu gồm: ít nhất 3 tiêu chí đo được, bộ mẫu thử (bao nhiêu mẫu, gồm loại nào), và cách so sánh các phiên bản.",
      placeholder: "Tiêu chí: 1. … 2. … 3. … Bộ mẫu thử: … Cách so sánh: …",
      rubric: [
        { id: "criteria", label: "Có ít nhất 3 tiêu chí", weight: 1, check: { kind: "minMatches", pattern: "(^|\\n|\\s)[1-9][.)]\\s", value: 3 }, pass: "Có từ 3 tiêu chí đánh số.", fail: "Liệt kê ít nhất 3 tiêu chí (1., 2., 3.)." },
        { id: "measurable", label: "Tiêu chí đo được", weight: 1, check: { kind: "regex", pattern: "(toi da|\\d+\\s*(tu|dong|muc|y)|du\\s*\\d|\\d+\\s*/\\s*\\d+)" }, pass: "Có tiêu chí đo được.", fail: "Tiêu chí cần con số: ≤ 5 dòng, đủ 3 mục…" },
        { id: "testset", label: "Có bộ mẫu thử", weight: 1, check: { kind: "regex", pattern: "\\d+\\s*(mau|bien ban)" }, pass: "Có bộ mẫu thử.", fail: "Nêu số mẫu thử và loại mẫu." },
        { id: "compare", label: "So sánh trên cùng bộ mẫu", weight: 1, check: { kind: "anyKeyword", keywords: ["cùng bộ mẫu", "so sánh", "phiên bản", "chấm điểm"] }, pass: "Có cách so sánh.", fail: "Nêu cách so sánh các phiên bản trên cùng bộ mẫu." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Tiêu chí:\n1. Tóm tắt tối đa 5 dòng.\n2. Có đủ 3 mục: quyết định, việc cần làm, người phụ trách.\n3. Không có thông tin không xuất hiện trong biên bản (đối chiếu 100% câu).\nBộ mẫu thử: 12 biên bản thật — 6 họp ngắn, 4 họp dài, 2 biên bản từng bị tóm tắt sai.\nCách so sánh: chạy mỗi phiên bản trên cùng 12 mẫu, chấm từng tiêu chí, ghi sổ phiên bản; mỗi lần chỉ thay một điểm.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Trước khi tối ưu: tiêu chí thành công, cách kiểm tra thực nghiệm, bản nháp đầu tiên.",
        "So sánh các phiên bản trên cùng bộ mẫu thử có cả trường hợp khó.",
        "Mỗi lần thay một điểm, ghi phiên bản; kết quả kém đi thì quay lại.",
        "Không phải vấn đề nào cũng ở prompt: có khi cần đổi model hoặc bổ sung dữ liệu.",
        "Lưu prompt tốt vào thư viện kèm phiên bản, kết quả thử và giới hạn đã biết.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn prompt bạn dùng nhiều nhất trong tuần.",
      tasks: ["Viết 3–5 tiêu chí đo được và chọn 10 mẫu thử thật.", "Chấm điểm phiên bản hiện tại.", "Làm ít nhất 2 vòng cải tiến, mỗi vòng thay một điểm, ghi sổ.", "Lưu phiên bản tốt nhất vào thư viện prompt của nhóm."],
      deliverable: "Sổ phiên bản (ít nhất 3 phiên bản) + mục thư viện prompt.",
      checklist: ["Có tiêu chí đo được", "Cùng bộ mẫu cho mọi phiên bản", "Đã lưu vào thư viện kèm giới hạn đã biết"],
    },
  ],
};
