import type { Lesson } from "@/lib/types/content";

const PR = "https://platform.claude.com/docs/en/about-claude/pricing";
const BA = "https://platform.claude.com/docs/en/build-with-claude/batch-processing";
const CO = "https://code.claude.com/docs/en/costs";
const BEA = "https://www.anthropic.com/engineering/building-effective-agents";
const BP = "https://code.claude.com/docs/en/best-practices";

export const lessonToiUuDuAn: Lesson = {
  id: "ch12-l06",
  chapterId: "ch12",
  slug: "toi-uu",
  title: "Tối ưu",
  subtitle: "Tối ưu có kỷ luật: đo trước, tìm điểm nghẽn (độ chính xác, chi phí, thời gian, cách dùng), mỗi lần đổi một thứ, đo lại trên cùng bộ mẫu — và dừng khi đã đủ tốt.",
  level: "advanced",
  estimatedMinutes: 40,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Đo hiện trạng và xác định điểm nghẽn: độ chính xác, chi phí, thời gian hay cách dùng." },
    { id: "o2", text: "Chọn đòn bẩy phù hợp: ví dụ/bảng thuật ngữ, cắt ngữ cảnh, prompt caching, Batches, chuyển phép tính sang code, định tuyến việc dễ sang mô hình nhỏ." },
    { id: "o3", text: "Mỗi lần đổi một thứ và đo lại trên cùng bộ mẫu để tránh hồi quy." },
    { id: "o4", text: "Biết dừng khi đạt chỉ số; ghi nhật ký tối ưu; tái cấu trúc code khi test đang xanh." },
  ],
  concepts: [
    { id: "measure-first", label: "Đo trước khi tối ưu" },
    { id: "bottleneck", label: "Điểm nghẽn" },
    { id: "one-change", label: "Mỗi lần đổi một thứ" },
    { id: "eval-rerun", label: "Đo lại trên cùng bộ mẫu" },
    { id: "good-enough", label: "Dừng khi đủ tốt" },
    { id: "accuracy-levers", label: "Đòn bẩy độ chính xác" },
    { id: "trim-context", label: "Cắt ngữ cảnh" },
    { id: "caching-lever", label: "Prompt caching" },
    { id: "batch-lever", label: "Message Batches" },
    { id: "code-over-llm", label: "Chuyển phép tính sang code" },
    { id: "model-routing", label: "Định tuyến sang mô hình nhỏ" },
    { id: "optimization-log", label: "Nhật ký tối ưu" },
  ],
  hints: [
    "Không đo thì không biết đã tốt hơn hay chỉ khác đi.",
    "Đổi hai thứ cùng lúc thì không biết thứ nào có tác dụng.",
    "Đạt chỉ số trong điều lệ rồi thì dừng — thời gian còn lại dành cho người dùng.",
  ],
  sources: [
    { label: "Claude API Docs — Pricing (giá theo token, prompt caching, batch)", href: PR },
    { label: "Claude API Docs — Batch processing (giảm 50% cho việc không cần ngay)", href: BA },
    { label: "Claude Code Docs — Manage costs effectively", href: CO },
    { label: "Anthropic Engineering — Building effective agents (routing: việc dễ sang mô hình nhỏ hơn)", href: BEA },
    { label: "Claude Code Docs — Best practices (quản lý ngữ cảnh, phép kiểm tra)", href: BP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Sau kiểm thử (bài 12.5) bạn có **số đo**: độ chính xác từng trường, chi phí mỗi tuần, thời gian chạy, thời gian người dùng thao tác. Tối ưu bắt đầu từ đó: **tìm điểm nghẽn** — chỉ số nào còn xa mục tiêu trong điều lệ, hoặc tốn nhất. Đừng tối ưu thứ đã đủ tốt.",
        "**Đòn bẩy theo loại vấn đề.** *Độ chính xác*: thêm **ví dụ** đúng loại sai, **bảng viết tắt/thuật ngữ** của xưởng, siết **schema**; trường hợp khó chuyển **hàng chờ cho người** (Chương 3, 11). *Chi phí*: **cắt ngữ cảnh** — chỉ gửi phần cần (Chương 8); **prompt caching** khi đầu prompt lặp lại (tài liệu dài giống nhau mỗi lần) — phần đọc từ cache có giá thấp hơn; **Message Batches** cho việc không cần ngay — giảm 50%; **định tuyến** việc dễ sang **mô hình nhỏ hơn, rẻ hơn** (routing, bài 11.4); và **chuyển phép tính sang code** — vừa rẻ vừa chính xác. *Thời gian*: chạy song song hoặc theo lô, bớt bước thừa. *Cách dùng*: gộp đầu ra về một chỗ, bớt thao tác cho người dùng.",
        "**Kỷ luật đo**: ghi **mốc hiện trạng**, **mỗi lần đổi một thứ**, chạy lại **cùng bộ mẫu** và so **từng trường** — một thay đổi tăng trường này có thể làm giảm trường khác. Giữ thay đổi nếu tốt hơn đo được, bỏ nếu không. Ghi tất cả vào **nhật ký tối ưu** (ngày, thay đổi, số trước/sau, quyết định).",
        "**Dừng khi đủ tốt**: đạt chỉ số trong điều lệ là xong phần tối ưu; thời gian còn lại dành cho người dùng và tài liệu bàn giao. Với code, **tái cấu trúc** (Chương 6) chỉ khi test đang xanh, từng bước nhỏ, chạy test sau mỗi bước. Chi phí theo dõi bằng `/usage` (Claude Code) hoặc `usage` của API, đối chiếu bảng giá hiện hành.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Như cải tiến năng suất dây chuyền: đo thời gian từng trạm, tìm trạm nghẽn, thay đổi một yếu tố, đo lại; trạm đã đạt nhịp thì thôi không đụng — cải tiến tiếp ở chỗ nghẽn mới.",
      },
      terms: [
        { term: "Điểm nghẽn", definition: "Chỉ số hoặc bước đang giới hạn kết quả chung nhiều nhất." },
        { term: "Prompt caching", definition: "Cơ chế API cho phép phần đầu prompt lặp lại được đọc từ cache với giá thấp hơn." },
        { term: "Định tuyến (routing)", definition: "Chuyển từng loại yêu cầu sang cách xử lý phù hợp, ví dụ việc dễ sang mô hình nhỏ." },
        { term: "Tái cấu trúc", definition: "Sửa cấu trúc code cho gọn, dễ hiểu mà không đổi hành vi — có test bảo vệ." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: nhật ký tối ưu “Sổ tay ca số”",
      infographic: {
        kind: "table",
        headers: ["Thay đổi (một thứ)", "Trước", "Sau", "Quyết định"],
        rows: [
          ["Thêm bảng viết tắt (sl, cái, vỏ)", "so_luong 84%", "so_luong 93%, trường khác giữ nguyên", "Giữ"],
          ["Chỉ gửi ghi chú của tuần thay vì cả tháng", "~18.000 token/lần", "~4.000 token/lần, độ chính xác giữ nguyên", "Giữ"],
          ["Chạy đêm bằng Message Batches", "Giá chuẩn", "Giảm 50%, báo cáo vẫn có trước 7 giờ", "Giữ"],
          ["Đổi mô hình nhỏ hơn cho mọi ghi chú", "loai_loi 95%", "loai_loi 88% (dưới ngưỡng)", "Bỏ — chỉ dùng cho ghi chú ngắn"],
        ],
      },
      caption: "Ví dụ do khoá học soạn; số liệu minh hoạ. Mức giảm 50% của Batches theo tài liệu Batch processing (03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng tối ưu",
      mermaid: `flowchart TD
  A["Số đo hiện trạng"] --> B{"Đã đạt mọi chỉ số điều lệ?"}
  B -->|"Có"| Z["Dừng tối ưu, chuyển sang bàn giao"]
  B -->|"Chưa"| C["Chọn điểm nghẽn lớn nhất"]
  C --> D["Chọn một đòn bẩy phù hợp"]
  D --> E["Đổi một thứ"]
  E --> F["Chạy lại cùng bộ mẫu + đo chi phí, thời gian"]
  F --> G{"Tốt hơn và không hồi quy?"}
  G -->|"Có"| H["Giữ, ghi nhật ký"]
  G -->|"Không"| I["Hoàn tác, ghi nhật ký"]
  H --> A
  I --> A`,
      caption: "Mỗi vòng: một điểm nghẽn, một thay đổi, một lần đo.",
      alt: "Lưu đồ vòng tối ưu: từ số đo hiện trạng, nếu đã đạt mọi chỉ số điều lệ thì dừng và chuyển sang bàn giao. Nếu chưa, chọn điểm nghẽn lớn nhất, chọn một đòn bẩy, đổi một thứ, chạy lại cùng bộ mẫu và đo chi phí, thời gian. Nếu tốt hơn và không hồi quy thì giữ và ghi nhật ký; nếu không thì hoàn tác và ghi nhật ký; rồi quay lại số đo hiện trạng.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: tối ưu chi phí",
      bad: {
        label: "Đổi nhiều thứ cùng lúc, không đo",
        content: "Cùng lúc: đổi mô hình nhỏ hơn, rút gọn prompt, bỏ ví dụ, chuyển sang batch. Chi phí giảm 70% — “thành công”. Hai tuần sau trưởng xưởng phàn nàn bảng sai nhiều.",
        notes: ["Không biết thay đổi nào gây giảm chính xác.", "Không chạy lại bộ mẫu.", "Đổi chất lượng lấy chi phí mà không ai đồng ý."],
      },
      good: {
        label: "Một thay đổi, đo trên bộ mẫu",
        content: "Lần 1: chỉ gửi ghi chú của tuần — token giảm 78%, bộ mẫu giữ nguyên → giữ. Lần 2: chuyển sang Batches — giảm 50% giá, kịp giờ → giữ. Lần 3: thử mô hình nhỏ — loai_loi giảm dưới ngưỡng → bỏ, chỉ dùng cho ghi chú ngắn sau khi đo riêng.",
        notes: ["Biết rõ tác dụng của từng thay đổi.", "Chất lượng được bảo vệ bằng bộ mẫu.", "Quyết định có số liệu."],
      },
      takeaway: "Tối ưu là thí nghiệm có kiểm soát, không phải đoán mò.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn đòn bẩy cho từng triệu chứng",
      sim: {
        kind: "choose",
        options: [
          { id: "examples", label: "Thêm ví dụ, bảng viết tắt" },
          { id: "trim", label: "Cắt ngữ cảnh, chỉ gửi phần cần" },
          { id: "caching", label: "Prompt caching cho phần lặp lại" },
          { id: "batch", label: "Chuyển sang Message Batches" },
          { id: "code", label: "Chuyển phép tính sang code" },
        ],
        scenarios: [
          { id: "s1", text: "Trường số lượng sai nhiều với ghi chú dùng viết tắt “sl”, “cái”.", answer: "examples", why: "Thiếu kiến thức riêng của xưởng — đưa vào prompt." },
          { id: "s2", text: "Mỗi lần gửi cả file log 5.000 dòng trong khi chỉ cần các dòng ERROR.", answer: "trim", why: "Lọc trước, gửi phần cần." },
          { id: "s3", text: "Mỗi yêu cầu đều gửi lại cùng 30 trang quy chuẩn ở đầu prompt.", answer: "caching", why: "Đầu prompt lặp lại — đọc từ cache rẻ hơn." },
          { id: "s4", text: "Mỗi đêm 2.000 ghi chú, sáng mới cần, chi phí cao.", answer: "batch", why: "Không cần ngay, số lượng lớn — giảm 50%." },
          { id: "s5", text: "Báo cáo đôi khi cộng sai tổng lỗi.", answer: "code", why: "Phép tính xác định nên để code làm." },
        ],
      },
      intro: "Chọn đòn bẩy phù hợp nhất cho từng triệu chứng.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: một vòng tối ưu",
      steps: [
        { title: "Ghi mốc hiện trạng", detail: "Độ chính xác từng trường trên bộ mẫu, token và chi phí mỗi lần chạy, thời gian, thời gian thao tác của người dùng." },
        { title: "Chọn điểm nghẽn", detail: "Chỉ số xa mục tiêu nhất hoặc khoản tốn nhất — chỉ một." },
        {
          title: "Nhờ Claude đề xuất, bạn chọn một",
          detail: "Yêu cầu nhiều phương án, có đánh đổi.",
          code: { lang: "text", content: "Đây là số đo hiện tại [bảng]. Điểm nghẽn: so_luong 84% (ngưỡng 90%). Đề xuất 3 cách cải thiện, mỗi cách nêu rủi ro làm giảm trường khác. Chưa sửa gì." },
        },
        { title: "Đổi một thứ", detail: "Trên nhánh riêng; commit để dễ hoàn tác." },
        { title: "Đo lại cùng bộ mẫu", detail: "So từng trường và chi phí với mốc; tốt hơn và không hồi quy thì giữ, không thì hoàn tác." },
        { title: "Ghi nhật ký và quyết định dừng", detail: "Ngày, thay đổi, số trước/sau, quyết định. Đạt mọi chỉ số điều lệ thì dừng tối ưu." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết một mục nhật ký tối ưu cho tình huống trong dữ liệu mẫu: số trước, đúng một thay đổi, cách đo (cùng bộ mẫu), số sau, quyết định giữ hay bỏ và lý do.",
      sampleData: {
        name: "Tình huống",
        content: "Trợ lý tra cứu QC: 17/20 câu đúng (ngưỡng 18). 3 câu sai đều hỏi về “AQL” — tài liệu dùng cụm “mức chất lượng chấp nhận”, người hỏi dùng viết tắt. Bạn thử thêm bảng thuật ngữ (AQL = mức chất lượng chấp nhận…) vào instructions của Project. Chạy lại 20 câu: 19/20 đúng; 5 câu ngoài tài liệu vẫn trả lời “không tìm thấy” cả 5.",
      },
      placeholder: "Thay đổi: …",
      rubric: [
        { id: "before-after", label: "Số trước và sau", weight: 1, check: { kind: "allGroups", groups: [["17"], ["19"]] }, pass: "Có số trước/sau.", fail: "Ghi 17/20 trước và 19/20 sau." },
        { id: "one", label: "Một thay đổi", weight: 1, check: { kind: "anyKeyword", keywords: ["bảng thuật ngữ", "một thay đổi", "chỉ đổi"] }, pass: "Rõ thay đổi.", fail: "Nêu đúng một thay đổi: thêm bảng thuật ngữ." },
        { id: "same-set", label: "Cùng bộ mẫu", weight: 1, check: { kind: "anyKeyword", keywords: ["cùng bộ", "20 câu", "bộ mẫu"] }, pass: "Đo trên cùng bộ.", fail: "Nêu đo lại trên cùng 20 câu." },
        { id: "decision", label: "Quyết định + hồi quy", weight: 1, check: { kind: "allGroups", groups: [["giữ"], ["không tìm thấy", "hồi quy", "ngoài tài liệu"]] }, pass: "Có quyết định và kiểm hồi quy.", fail: "Quyết định giữ, nêu kiểm hồi quy (5 câu ngoài tài liệu vẫn đúng)." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Ngày 03/11. Điểm nghẽn: độ chính xác 17/20 (ngưỡng 18), 3 câu sai đều về “AQL”.\nThay đổi (một thứ): thêm bảng thuật ngữ vào instructions (AQL = mức chất lượng chấp nhận…).\nCách đo: chạy lại cùng bộ 20 câu mẫu + 5 câu ngoài tài liệu.\nKết quả: 19/20 đúng; 5/5 câu ngoài tài liệu vẫn trả lời “không tìm thấy” — không hồi quy.\nQuyết định: giữ. Đã đạt ngưỡng → dừng tối ưu độ chính xác, chuyển sang nghiệm thu.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Đo hiện trạng, chọn một điểm nghẽn: độ chính xác, chi phí, thời gian hay cách dùng.",
        "Độ chính xác: ví dụ, bảng thuật ngữ, schema, hàng chờ cho người.",
        "Chi phí: cắt ngữ cảnh, prompt caching, Batches (giảm 50%), mô hình nhỏ cho việc dễ, phép tính sang code.",
        "Mỗi lần đổi một thứ, đo lại cùng bộ mẫu từng trường; ghi nhật ký tối ưu.",
        "Đạt chỉ số điều lệ thì dừng; tái cấu trúc khi test xanh.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Dự án tốt nghiệp của bạn đã có kết quả kiểm thử.",
      tasks: [
        "Ghi mốc hiện trạng và chọn điểm nghẽn lớn nhất.",
        "Thực hiện ít nhất 2 vòng tối ưu, mỗi vòng một thay đổi, đo trên cùng bộ mẫu.",
        "Ghi nhật ký tối ưu và quyết định dừng có căn cứ.",
      ],
      deliverable: "Nhật ký tối ưu (số trước/sau từng vòng) + số đo cuối so với chỉ số điều lệ.",
      checklist: ["Mỗi vòng chỉ một thay đổi", "Đo lại cùng bộ mẫu, từng trường", "Không đổi chất lượng lấy chi phí khi chưa được đồng ý"],
    },
  ],
};
