import type { Lesson } from "@/lib/types/content";

const BA = "https://platform.claude.com/docs/en/build-with-claude/batch-processing";
const HL = "https://code.claude.com/docs/en/headless";
const GA = "https://code.claude.com/docs/en/github-actions";
const OV = "https://platform.claude.com/docs/en/api/overview";

export const lessonTaoBaoCao: Lesson = {
  id: "ch11-l03",
  chapterId: "ch11",
  slug: "tao-bao-cao",
  title: "Tạo báo cáo",
  subtitle: "Báo cáo tự động đáng tin: code tính số, Claude viết lời theo mẫu cố định; chọn đúng kênh chạy (gọi ngay, Batches, claude -p, GitHub Actions theo lịch) và luôn có người duyệt.",
  level: "intermediate",
  estimatedMinutes: 35,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Thiết kế pipeline báo cáo: code tổng hợp số liệu, Claude viết phần diễn giải theo mẫu, người duyệt trước khi gửi." },
    { id: "o2", text: "Chọn kênh chạy phù hợp: Messages API, Message Batches, claude -p trong script, GitHub Actions theo lịch, hoặc làm tay." },
    { id: "o3", text: "Dùng Message Batches đúng: giảm 50% chi phí, giới hạn kích thước/thời gian, ghép kết quả theo custom_id." },
    { id: "o4", text: "Kiểm soát chất lượng và chi phí: kiểm tra từng kết quả, ghi usage, ghi rõ báo cáo được tạo tự động." },
  ],
  concepts: [
    { id: "report-pipeline", label: "Pipeline báo cáo" },
    { id: "code-computes", label: "Code tính số, Claude viết lời" },
    { id: "fixed-template", label: "Mẫu báo cáo cố định" },
    { id: "realtime-api", label: "Gọi Messages API trực tiếp" },
    { id: "batch-api", label: "Message Batches API" },
    { id: "batch-limits", label: "Giới hạn của batch" },
    { id: "custom-id", label: "custom_id" },
    { id: "batch-results", label: "Loại kết quả batch" },
    { id: "scheduled-run", label: "Chạy theo lịch" },
    { id: "claude-p-script", label: "claude -p trong script" },
    { id: "human-review", label: "Người duyệt trước khi gửi" },
    { id: "cost-usage", label: "Theo dõi chi phí" },
  ],
  hints: [
    "Tổng, tỷ lệ, xu hướng: để code tính. Claude nhận số đã tính và viết diễn giải.",
    "Không cần kết quả ngay và có nhiều yêu cầu → Message Batches (giảm 50%).",
    "Kết quả batch về theo thứ tự bất kỳ — luôn ghép bằng custom_id.",
  ],
  sources: [
    { label: "Claude API Docs — Batch processing (50%, 100.000 yêu cầu/256 MB, 24 giờ, kết quả lưu 29 ngày, custom_id, loại kết quả)", href: BA },
    { label: "Claude Code Docs — Run Claude Code programmatically (claude -p, --bare, --output-format json, pipe dữ liệu)", href: HL },
    { label: "Claude Code Docs — GitHub Actions (chạy theo lịch, automation mode, chi phí)", href: GA },
    { label: "Claude API Docs — API overview (Message Batches API, giới hạn kích thước)", href: OV },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Báo cáo lặp lại (tuần, tháng, theo lô) là việc đáng tự động nhất. Nguyên tắc vàng: **code tính số, Claude viết lời**. Tổng lỗi, tỷ lệ, so sánh tuần trước — để script (Python, Excel, SQL) tính chính xác. Claude nhận **số đã tính** cùng **mẫu báo cáo cố định** và viết phần diễn giải: điểm nổi bật, nguyên nhân khả dĩ, việc cần làm. Dặn rõ: chỉ dùng số được cung cấp, không tự tính thêm; điều chưa chắc ghi “cần xác nhận”.",
        "**Chọn kênh chạy.** Cần kết quả ngay cho một yêu cầu (bấm nút trên web nội bộ) → gọi **Messages API** trực tiếp (bài 11.1). Nhiều báo cáo, không cần ngay → **Message Batches API**: gửi một lô yêu cầu, xử lý bất đồng bộ, **giảm 50% chi phí**; phần lớn lô xong dưới 1 giờ. Cần Claude **tự đọc nhiều file trong thư mục dự án** từ script/cron → **`claude -p`** (Claude Code không tương tác, nên thêm `--bare` trong script, có `--output-format json`). Báo cáo về repo GitHub mỗi sáng → **GitHub Actions** với `schedule` và `prompt`. Báo cáo một lần cần nhiều vòng góp ý → làm tay trong Project (Chương 10).",
        "**Message Batches cần nhớ** (theo tài liệu): mỗi lô tối đa **100.000 yêu cầu hoặc 256 MB**; lô chưa xong trong **24 giờ** thì phần còn lại **hết hạn** (`expired`, không tính phí); kết quả tải được trong **29 ngày**. Mỗi yêu cầu có **`custom_id`** riêng (1–64 ký tự: chữ, số, `-`, `_`). Kết quả **về theo thứ tự bất kỳ** — ghép bằng custom_id, không ghép theo vị trí. Mỗi kết quả có loại `succeeded`, `errored`, `canceled` hoặc `expired`; ba loại sau không tính phí và cần xử lý lại.",
        "**Chất lượng và chi phí.** Mỗi báo cáo vẫn qua cổng kiểm tra: `stop_reason`, đủ mục theo mẫu, số trong lời văn khớp số đầu vào. **Người duyệt** trước khi gửi ra ngoài phòng ban; ghi rõ “Báo cáo được tạo tự động, đã được … duyệt”. Ghi `usage` từng lần (hoặc `total_cost_usd` trong output JSON của `claude -p` — đây là ước tính phía máy, có thể khác hoá đơn) để biết chi phí thật mỗi tháng (Chương 8).",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Như phòng kế toán: máy tính cộng sổ (code tính số), kế toán viên viết thuyết minh (Claude viết lời), kế toán trưởng ký duyệt (người duyệt). Hồ sơ không gấp thì gom cả chồng gửi một lần cho rẻ (Batches), mỗi bộ có mã riêng để khỏi lẫn (custom_id).",
      },
      terms: [
        { term: "Pipeline", definition: "Chuỗi bước tự động nối tiếp: lấy dữ liệu → tính → viết → kiểm tra → gửi." },
        { term: "Bất đồng bộ", definition: "Gửi yêu cầu rồi quay lại lấy kết quả sau, không ngồi chờ." },
        { term: "custom_id", definition: "Mã bạn đặt cho mỗi yêu cầu trong lô để ghép đúng kết quả." },
        { term: "cron", definition: "Cách hẹn giờ chạy lệnh định kỳ (ví dụ 7 giờ sáng mỗi ngày)." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: chọn kênh chạy báo cáo",
      infographic: {
        kind: "table",
        headers: ["Kênh", "Khi nào dùng", "Lưu ý"],
        rows: [
          ["Messages API", "Một yêu cầu, cần kết quả ngay", "Giá chuẩn; kiểm tra stop_reason"],
          ["Message Batches", "Nhiều yêu cầu, chờ được (thường < 1 giờ)", "Giảm 50%; ≤ 100.000 yêu cầu/256 MB; ghép theo custom_id"],
          ["claude -p", "Script cần Claude tự đọc file trong dự án", "Thêm --bare; --output-format json; giới hạn công cụ"],
          ["GitHub Actions (schedule)", "Báo cáo về repo theo lịch", "Chạy từ nhánh mặc định; tốn phút Actions + token"],
          ["Làm tay trong Project", "Báo cáo một lần, nhiều vòng góp ý", "Không cần code"],
        ],
      },
      caption: "Theo Batch processing, Run Claude Code programmatically và GitHub Actions (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: pipeline báo cáo hằng tuần",
      mermaid: `flowchart TD
  A["Dữ liệu tuần (CSV/DB)"] --> B["Script tính tổng, tỷ lệ, so sánh"]
  B --> C["Prompt: mẫu cố định + số đã tính"]
  C --> D{"Nhiều báo cáo, chờ được?"}
  D -->|"Có"| E["Message Batches (ghép theo custom_id)"]
  D -->|"Không"| F["Messages API"]
  E --> G["Cổng kiểm tra: stop_reason, đủ mục, số khớp đầu vào"]
  F --> G
  G -->|"Không đạt"| C
  G -->|"Đạt"| H["Người duyệt"]
  H --> I["Gửi, ghi rõ tạo tự động"]`,
      caption: "Số đi từ code; lời đi từ Claude; chữ ký đi từ con người.",
      alt: "Lưu đồ: dữ liệu tuần đi vào script tính tổng, tỷ lệ, so sánh; tạo prompt gồm mẫu cố định và số đã tính. Nếu nhiều báo cáo và chờ được thì dùng Message Batches ghép kết quả theo custom_id, nếu không thì gọi Messages API. Kết quả qua cổng kiểm tra stop_reason, đủ mục, số khớp đầu vào; không đạt thì làm lại prompt, đạt thì chuyển người duyệt rồi gửi kèm ghi chú tạo tự động.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: báo cáo lỗi tuần",
      bad: {
        label: "Đưa 5.000 dòng thô, nhờ tính và viết",
        content: "“Đây là dữ liệu lỗi cả tuần (5.000 dòng). Tính tỷ lệ lỗi từng công đoạn, so với tuần trước và viết báo cáo gửi giám đốc.” → gửi thẳng.",
        notes: ["Tốn token cho dữ liệu thô.", "Phép tính trong lời văn khó kiểm chứng.", "Không ai duyệt trước khi gửi."],
      },
      good: {
        label: "Số đã tính + mẫu + cổng kiểm tra + duyệt",
        content: "Script tính bảng tổng hợp (8 dòng). Prompt: “Dùng đúng các số dưới đây, không tự tính thêm. Viết theo mẫu: (1) Tóm tắt 3 dòng (2) Công đoạn tăng lỗi (3) Việc cần làm. Điều chưa chắc ghi ‘cần xác nhận’.” → kiểm tra số trong lời văn khớp bảng → trưởng QA duyệt.",
        notes: ["Ít token, nhanh.", "Số liệu truy được về script.", "Có người chịu trách nhiệm."],
      },
      takeaway: "Đừng bắt Claude làm máy tính; hãy để nó làm người viết thuyết minh.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn kênh chạy",
      sim: {
        kind: "choose",
        options: [
          { id: "messages", label: "Gọi Messages API trực tiếp" },
          { id: "batch", label: "Message Batches API" },
          { id: "claude-p", label: "claude -p trong script" },
          { id: "gha", label: "GitHub Actions theo lịch" },
          { id: "manual", label: "Làm tay trong Project" },
        ],
        scenarios: [
          { id: "s1", text: "Cuối tháng cần 300 báo cáo lô hàng, hạn là sáng mai.", answer: "batch", why: "Nhiều yêu cầu, chờ được — giảm 50% chi phí." },
          { id: "s2", text: "Kỹ sư bấm nút trên web nội bộ, cần bản tóm tắt sự cố trong vài giây.", answer: "messages", why: "Một yêu cầu, cần ngay." },
          { id: "s3", text: "Mỗi sáng tóm tắt commit và issue hôm qua của repo trên GitHub.", answer: "gha", why: "Workflow schedule với prompt (ví dụ Daily Report trong tài liệu)." },
          { id: "s4", text: "Cron trên máy chủ cần Claude tự đọc các file log trong thư mục dự án rồi viết nhận xét.", answer: "claude-p", why: "Cần công cụ đọc file của Claude Code, chạy không tương tác." },
          { id: "s5", text: "Báo cáo tổng kết dự án một lần, sẽ chỉnh nhiều vòng với trưởng phòng.", answer: "manual", why: "Không lặp lại — tự động hoá không đáng công." },
        ],
      },
      intro: "Chọn kênh phù hợp cho từng tình huống (theo tài liệu, 03/11/2026).",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: 300 báo cáo lô bằng Message Batches (Python)",
      steps: [
        { title: "Tính số bằng code", detail: "Mỗi lô một bảng tổng hợp nhỏ (số mẫu, số lỗi, tỷ lệ, so với tiêu chuẩn)." },
        {
          title: "Tạo lô yêu cầu",
          detail: "Mỗi yêu cầu một custom_id duy nhất theo mã lô.",
          code: {
            lang: "python",
            content:
              "batch = client.messages.batches.create(requests=[\n    {\n        \"custom_id\": f\"lo-{ma_lo}\",\n        \"params\": {\n            \"model\": \"claude-opus-5-5\",\n            \"max_tokens\": 2048,\n            \"messages\": [{\"role\": \"user\", \"content\": prompt_bao_cao(bang)}],\n        },\n    }\n    for ma_lo, bang in cac_lo.items()\n])",
          },
        },
        { title: "Chờ lô xong", detail: "Kiểm tra định kỳ đến khi processing_status là ended (tối đa 24 giờ).", code: { lang: "python", content: "trang_thai = client.messages.batches.retrieve(batch.id).processing_status" } },
        {
          title: "Ghép kết quả theo custom_id",
          detail: "Không ghép theo thứ tự; loại khác succeeded vào danh sách gửi lại.",
          code: {
            lang: "python",
            content:
              "for r in client.messages.batches.results(batch.id):\n    if r.result.type == \"succeeded\":\n        luu_ban_nhap(r.custom_id, r.result.message)\n    else:\n        gui_lai.append((r.custom_id, r.result.type))",
          },
        },
        { title: "Cổng kiểm tra", detail: "stop_reason end_turn, đủ mục, số trong lời văn khớp bảng; không đạt thì xếp hàng làm lại." },
        { title: "Duyệt và gửi", detail: "Người phụ trách duyệt mẫu ngẫu nhiên và mọi báo cáo bị cờ; ghi “tạo tự động, đã duyệt”." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết prompt cho báo cáo lỗi tuần từ bảng số đã tính trong dữ liệu mẫu. Prompt phải: yêu cầu chỉ dùng số được cung cấp, nêu mẫu báo cáo có các mục, quy định cách ghi khi chưa chắc, và giới hạn độ dài.",
      sampleData: {
        name: "Bảng tổng hợp tuần 45 (do script tính)",
        content: "Công đoạn | Lỗi tuần 45 | Lỗi tuần 44 | Tỷ lệ lỗi tuần 45\nLắp ráp vỏ | 42 | 30 | 2,1%\nQuấn dây | 18 | 21 | 0,9%\nSơn | 27 | 26 | 1,4%\nTổng | 87 | 77 | 1,5%",
      },
      placeholder: "Dưới đây là bảng tổng hợp tuần 45 …",
      rubric: [
        { id: "numbers", label: "Chỉ dùng số được cung cấp", weight: 1, check: { kind: "anyKeyword", keywords: ["không tự tính", "chỉ dùng", "dùng đúng", "không tính thêm"] }, pass: "Có ràng buộc số liệu.", fail: "Thêm: chỉ dùng số trong bảng, không tự tính thêm." },
        { id: "template", label: "Có mẫu nhiều mục", weight: 1, check: { kind: "regex", pattern: "(\\(1\\)|1[.)])[\\s\\S]*(\\(2\\)|2[.)])" }, pass: "Có mẫu đánh số.", fail: "Nêu mẫu có các mục đánh số (1), (2), (3)." },
        { id: "unsure", label: "Quy định khi chưa chắc", weight: 1, check: { kind: "anyKeyword", keywords: ["cần xác nhận", "chưa chắc", "không chắc"] }, pass: "Có quy định.", fail: "Thêm: điều chưa chắc ghi “cần xác nhận”." },
        { id: "length", label: "Giới hạn độ dài", weight: 1, check: { kind: "regex", pattern: "(toi da|khong qua|duoi)\\s*\\d+\\s*(tu|dong|cau|trang)" }, pass: "Có giới hạn độ dài.", fail: "Giới hạn độ dài, ví dụ “tối đa 200 từ”." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Dưới đây là bảng tổng hợp lỗi tuần 45 do script tính. Chỉ dùng đúng các số trong bảng, không tự tính thêm số mới.\nViết báo cáo tối đa 200 từ theo mẫu:\n(1) Tóm tắt 3 dòng.\n(2) Công đoạn có lỗi tăng so với tuần 44 và mức tăng (lấy từ bảng).\n(3) Việc cần làm tuần tới, mỗi việc một dòng.\nNguyên nhân là phỏng đoán thì ghi rõ “cần xác nhận”. Không thêm nội dung ngoài bảng.\n[bảng]",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Code tính số, Claude viết lời theo mẫu cố định, người duyệt trước khi gửi.",
        "Cần ngay → Messages API; nhiều, chờ được → Message Batches (giảm 50%).",
        "Batches: ≤ 100.000 yêu cầu/256 MB, hết hạn sau 24 giờ, kết quả lưu 29 ngày, ghép theo custom_id.",
        "claude -p (thêm --bare) khi script cần Claude tự đọc file; GitHub Actions schedule cho báo cáo về repo.",
        "Kiểm tra từng kết quả, ghi usage, ghi rõ báo cáo tạo tự động.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một báo cáo bạn đang làm tay mỗi tuần.",
      tasks: [
        "Tách phần số liệu thành script; phần lời thành prompt với mẫu cố định.",
        "Chạy 2 tuần song song với cách làm tay, so sánh chất lượng và thời gian.",
        "Ghi chi phí (usage) mỗi lần và quyết định kênh chạy phù hợp.",
      ],
      deliverable: "Script + prompt + bảng so sánh 2 tuần + quyết định có tự động hoá hay không.",
      checklist: ["Số liệu do code tính", "Có cổng kiểm tra và người duyệt", "Có số liệu chi phí thật"],
    },
  ],
};
