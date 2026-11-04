import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const BEA = "https://www.anthropic.com/engineering/building-effective-agents";
const WP = "https://support.claude.com/en/articles/9517075-what-are-projects";

export const lessonChonDuAn: Lesson = {
  id: "ch12-l01",
  chapterId: "ch12",
  slug: "chon-du-an",
  title: "Tự chọn một dự án",
  subtitle: "Chọn một dự án tốt nghiệp đáng làm: vấn đề thật có người cần, phạm vi vừa sức, dữ liệu được phép dùng, kết quả kiểm chứng được — và chốt lại bằng một trang “điều lệ dự án”.",
  level: "intermediate",
  estimatedMinutes: 40,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Đánh giá ý tưởng theo 5 tiêu chí: vấn đề thật, người dùng cụ thể, chỉ số thành công đo được, phạm vi vừa sức, dữ liệu được phép." },
    { id: "o2", text: "Nhận ra ý tưởng cần thu hẹp, ý tưởng vướng dữ liệu/chính sách và việc không cần AI." },
    { id: "o3", text: "Chọn công cụ phù hợp: claude.ai (Projects, Artifacts), Claude Code, hay Claude API/tự động hoá." },
    { id: "o4", text: "Viết điều lệ dự án một trang: vấn đề, người dùng, chỉ số, phạm vi trong/ngoài, dữ liệu, rủi ro." },
  ],
  concepts: [
    { id: "real-problem", label: "Vấn đề thật" },
    { id: "problem-owner", label: "Người dùng và người chờ kết quả" },
    { id: "success-metric", label: "Chỉ số thành công" },
    { id: "scope-size", label: "Phạm vi vừa sức" },
    { id: "mvp", label: "Phiên bản tối thiểu dùng được" },
    { id: "data-policy", label: "Dữ liệu và chính sách" },
    { id: "verifiability", label: "Kiểm chứng được" },
    { id: "tool-fit", label: "Chọn công cụ phù hợp" },
    { id: "no-ai-needed", label: "Việc không cần AI" },
    { id: "skill-coverage", label: "Vận dụng kiến thức các chương" },
    { id: "risk-check", label: "Rủi ro ban đầu" },
    { id: "project-charter", label: "Điều lệ dự án" },
  ],
  hints: [
    "Dự án tốt có người đang chờ kết quả — hỏi họ “xong thì anh/chị dùng thế nào?”.",
    "Chỉ số thành công phải có con số: phút tiết kiệm, tỷ lệ đúng, số lỗi bắt được.",
    "Nếu một công thức Excel hay một lệnh có sẵn làm được, đó không phải dự án AI.",
  ],
  sources: [
    { label: "Claude Code Docs — Best practices (cho Claude cách kiểm chứng, phỏng vấn để viết đặc tả)", href: BP },
    { label: "Anthropic Engineering — Building effective agents (bắt đầu từ giải pháp đơn giản nhất)", href: BEA },
    { label: "Claude Help Center — What are projects (dự án trên claude.ai)", href: WP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Chương 12 là **dự án tốt nghiệp**: bạn tự chọn và làm trọn một dự án, từ yêu cầu đến đánh giá. Mỗi bài trong chương là một chặng; khoá học đi kèm **dự án mẫu “Sổ tay ca số”** (ghi chú ca tự do → trích bản ghi lỗi → bảng tuần → báo cáo tự động cho trưởng xưởng) để bạn so sánh — nhưng bài nộp là **dự án của bạn**.",
        "Ý tưởng tốt qua được **5 câu hỏi**: (1) **Vấn đề thật?** — đang tốn thời gian hoặc gây lỗi, có ví dụ cụ thể. (2) **Ai dùng, ai chờ kết quả?** — một người hoặc nhóm có tên. (3) **Đo thành công bằng gì?** — có con số: “giảm thời gian tổng hợp báo cáo ca từ 60 xuống 15 phút”, “bắt được ≥ 90% lỗi trong bộ ca mẫu”. (4) **Vừa sức?** — làm xong **phiên bản tối thiểu dùng được** trong 2–4 tuần. (5) **Dữ liệu có được phép dùng?** — theo chính sách công ty (Chương 10); không chắc thì hỏi trước.",
        "Ba kiểu ý tưởng cần xử lý: **quá lớn** (“ERP mới cho cả công ty”) → **thu hẹp** về một quy trình, một nhóm người dùng; **vướng dữ liệu/chính sách** (dữ liệu nhân sự, sức khoẻ, hợp đồng mật) hoặc **rủi ro không chấp nhận được** (agent tự đặt hàng không ai duyệt) → đổi hướng; **không cần AI** (một công thức Excel, một lệnh có sẵn làm được) → dùng công cụ sẵn có. Lời khuyên từ Anthropic: luôn bắt đầu từ **giải pháp đơn giản nhất**.",
        "**Chọn công cụ** theo bản chất việc: tra cứu tài liệu, soạn thảo → **claude.ai** với Projects/Artifacts (Chương 2–4, 10); phần mềm, script, trang web → **Claude Code** (Chương 5–9); chạy định kỳ, xử lý hàng loạt, tích hợp hệ thống → **Claude API**/tự động hoá (Chương 11). Ưu tiên dự án **kiểm chứng được** — có bộ ví dụ đúng/sai để so, vì best practices của Claude Code nhấn mạnh: cho Claude **cách tự kiểm tra** công việc là việc có tác động lớn nhất. Chốt lại bằng **điều lệ dự án một trang**.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Như chọn đề tài cải tiến (kaizen) ở xưởng: đề tài tốt có “nỗi đau” thấy rõ, có trưởng bộ phận muốn nó, đo được trước–sau, làm xong trong một đợt, và không đụng vào thứ chưa được phép.",
      },
      terms: [
        { term: "Điều lệ dự án", definition: "Tài liệu một trang nêu vấn đề, người dùng, chỉ số thành công, phạm vi, dữ liệu và rủi ro." },
        { term: "Phiên bản tối thiểu dùng được", definition: "Bản nhỏ nhất mà người dùng thật đã dùng được và mang lại giá trị." },
        { term: "Chỉ số thành công", definition: "Con số cho biết dự án đạt mục tiêu hay chưa." },
        { term: "Phạm vi", definition: "Ranh giới những gì dự án làm và không làm." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: điều lệ dự án mẫu “Sổ tay ca số”",
      infographic: {
        kind: "table",
        headers: ["Mục", "Nội dung"],
        rows: [
          ["Vấn đề", "Trưởng xưởng mất ~60 phút mỗi tuần đọc ghi chú ca để tổng hợp lỗi; hay sót"],
          ["Người dùng", "Kỹ sư 3 ca (ghi chú), trưởng xưởng lắp ráp (đọc báo cáo)"],
          ["Chỉ số thành công", "Tổng hợp ≤ 15 phút/tuần; ≥ 90% bản ghi đúng trên bộ 50 ghi chú mẫu"],
          ["Phạm vi trong", "Trích lỗi từ ghi chú, bảng tuần, báo cáo nháp để trưởng xưởng duyệt"],
          ["Ngoài phạm vi", "Tích hợp ERP, tự gửi báo cáo ra ngoài xưởng"],
          ["Dữ liệu", "Ghi chú ca nội bộ — đã được trưởng phòng cho phép dùng"],
          ["Công cụ", "Claude API (structured outputs) + Claude Code cho script và trang bảng"],
        ],
      },
      caption: "Ví dụ do khoá học soạn; số liệu là giả định để minh hoạ.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: sàng lọc ý tưởng",
      mermaid: `flowchart TD
  A["Ý tưởng"] --> B{"Công cụ có sẵn đã làm được?"}
  B -->|"Có"| N["Dùng công cụ sẵn có, không cần dự án AI"]
  B -->|"Không"| C{"Dữ liệu được phép, rủi ro chấp nhận được?"}
  C -->|"Không"| D["Đổi hướng hoặc hỏi chính sách trước"]
  C -->|"Có"| E{"Có người dùng cụ thể và chỉ số đo được?"}
  E -->|"Không"| F["Gặp người dùng, làm rõ"]
  F --> E
  E -->|"Có"| G{"Bản tối thiểu xong trong 2–4 tuần?"}
  G -->|"Không"| H["Thu hẹp phạm vi"]
  H --> G
  G -->|"Có"| I["Viết điều lệ dự án một trang"]`,
      caption: "Ý tưởng qua hết các cổng mới thành dự án.",
      alt: "Lưu đồ sàng lọc ý tưởng: nếu công cụ có sẵn đã làm được thì dùng công cụ đó; nếu dữ liệu không được phép hoặc rủi ro không chấp nhận được thì đổi hướng hoặc hỏi chính sách; nếu chưa có người dùng cụ thể và chỉ số đo được thì gặp người dùng làm rõ; nếu bản tối thiểu không xong trong 2 đến 4 tuần thì thu hẹp phạm vi; qua hết thì viết điều lệ dự án một trang.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: phát biểu dự án",
      bad: {
        label: "Mơ hồ, quá rộng",
        content: "“Ứng dụng AI giúp nhà máy làm việc hiệu quả hơn, quản lý chất lượng, sản xuất và nhân sự.”",
        notes: ["Không rõ ai dùng, dùng lúc nào.", "Không đo được thế nào là “hiệu quả hơn”.", "Đụng dữ liệu nhân sự nhạy cảm."],
      },
      good: {
        label: "Cụ thể, đo được, vừa sức",
        content: "“Trích bản ghi lỗi từ ghi chú ca của xưởng lắp ráp và tạo bảng tuần cho trưởng xưởng; mục tiêu tổng hợp ≤ 15 phút/tuần và ≥ 90% bản ghi đúng trên 50 ghi chú mẫu; không tích hợp ERP ở giai đoạn này.”",
        notes: ["Có người dùng và nhu cầu thật.", "Có chỉ số và bộ mẫu để kiểm chứng.", "Phạm vi rõ trong/ngoài."],
      },
      takeaway: "Phát biểu dự án tốt trả lời được: ai, việc gì, đo bằng gì, không làm gì.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: sàng lọc ý tưởng dự án",
      sim: {
        kind: "classify",
        bins: [
          { id: "phu-hop", label: "Phù hợp" },
          { id: "thu-hep", label: "Quá lớn — cần thu hẹp" },
          { id: "chinh-sach", label: "Vướng dữ liệu, chính sách hoặc rủi ro" },
          { id: "khong-can-ai", label: "Không cần AI" },
        ],
        items: [
          { id: "i1", text: "Trích bản ghi lỗi từ ghi chú ca của xưởng lắp ráp; trưởng xưởng đang chờ dùng; dữ liệu nội bộ đã được cho phép.", bin: "phu-hop", why: "Vấn đề thật, người dùng rõ, dữ liệu được phép." },
          { id: "i2", text: "Xây hệ thống ERP mới cho toàn công ty trong 3 tuần.", bin: "thu-hep", why: "Quá rộng — chọn một quy trình nhỏ." },
          { id: "i3", text: "Phân tích hồ sơ sức khoẻ nhân viên để dự đoán ai sắp nghỉ việc.", bin: "chinh-sach", why: "Dữ liệu cá nhân nhạy cảm." },
          { id: "i4", text: "Tính tổng cột số lượng trong một file Excel mỗi tuần.", bin: "khong-can-ai", why: "Một công thức SUM là đủ." },
          { id: "i5", text: "Agent tự đặt hàng nhà cung cấp khi tồn kho thấp, không ai duyệt.", bin: "chinh-sach", why: "Hành động không đảo ngược không có người duyệt." },
          { id: "i6", text: "Trợ lý tra cứu quy trình QA từ 40 file hướng dẫn công việc cho tổ QC, dùng Project trên claude.ai.", bin: "phu-hop", why: "Vừa sức, dùng ngay được, kiểm chứng bằng câu hỏi mẫu." },
          { id: "i7", text: "Chatbot trả lời mọi câu hỏi của khách về mọi sản phẩm, bằng mọi ngôn ngữ.", bin: "thu-hep", why: "Thu hẹp về một dòng sản phẩm, một loại câu hỏi." },
          { id: "i8", text: "Đổi tên 30 file theo một mẫu cố định.", bin: "khong-can-ai", why: "Lệnh đổi tên hàng loạt có sẵn là đủ." },
        ],
      },
      intro: "Xếp mỗi ý tưởng vào nhóm phù hợp.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: từ ý tưởng đến điều lệ dự án",
      steps: [
        { title: "Liệt kê 3–5 việc gây “đau”", detail: "Việc lặp lại tốn thời gian, hay sai, hoặc người khác hay phàn nàn." },
        { title: "Gặp người dùng", detail: "Hỏi: hiện làm thế nào, mất bao lâu, xong thì dùng thế nào. Ghi lại ví dụ thật." },
        { title: "Sàng lọc", detail: "Qua 5 câu hỏi: vấn đề thật, người dùng, chỉ số, vừa sức, dữ liệu được phép. Loại việc không cần AI." },
        { title: "Chọn công cụ", detail: "claude.ai / Claude Code / Claude API theo bản chất việc; có thể kết hợp." },
        {
          title: "Nhờ Claude phản biện",
          detail: "Dán mô tả ý tưởng và yêu cầu Claude chỉ ra điểm mơ hồ, rủi ro.",
          code: { lang: "text", content: "Đây là ý tưởng dự án của tôi: [mô tả]. Hãy hỏi tôi tối đa 5 câu để làm rõ người dùng, chỉ số thành công, phạm vi và dữ liệu. Chỉ ra rủi ro lớn nhất. Đừng viết giải pháp." },
        },
        { title: "Viết điều lệ một trang", detail: "Vấn đề, người dùng, chỉ số (có số), phạm vi trong/ngoài, dữ liệu và chính sách, công cụ, rủi ro chính. Xin người dùng xác nhận." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết điều lệ dự án một trang cho ý tưởng trong dữ liệu mẫu (hoặc ý tưởng của bạn). Bắt buộc có: người dùng cụ thể, chỉ số thành công có con số, phần ngoài phạm vi, và ghi chú về dữ liệu/chính sách.",
      sampleData: {
        name: "Ý tưởng của một kỹ sư QA",
        content: "“Mỗi lần khách khiếu nại, tôi mất khoảng 2 giờ lục biên bản kiểm tra, ảnh lỗi và lịch sử lô để viết báo cáo 8D bản nháp. Tôi muốn Claude giúp gom thông tin và soạn bản nháp. Mỗi tháng có khoảng 6 khiếu nại. Trưởng phòng QA là người duyệt báo cáo.”",
      },
      placeholder: "Tên dự án: …",
      rubric: [
        { id: "user", label: "Người dùng cụ thể", weight: 1, check: { kind: "anyKeyword", keywords: ["người dùng", "kỹ sư qa", "trưởng phòng"] }, pass: "Có người dùng.", fail: "Nêu người dùng: kỹ sư QA soạn, trưởng phòng QA duyệt." },
        { id: "metric", label: "Chỉ số có con số", weight: 1, check: { kind: "regex", pattern: "\\d+\\s*(%|phut|gio|ngay|lan)" }, pass: "Có chỉ số đo được.", fail: "Thêm chỉ số có số, ví dụ “bản nháp 8D trong ≤ 30 phút”." },
        { id: "out", label: "Ngoài phạm vi", weight: 1, check: { kind: "anyKeyword", keywords: ["ngoài phạm vi", "không làm", "không bao gồm"] }, pass: "Có ranh giới.", fail: "Nêu rõ phần không làm (ví dụ: không tự gửi báo cáo cho khách)." },
        { id: "data", label: "Dữ liệu và chính sách", weight: 1, check: { kind: "anyKeyword", keywords: ["chính sách", "được phép", "dữ liệu khách"] }, pass: "Có lưu ý dữ liệu.", fail: "Ghi chú dữ liệu khiếu nại của khách có được phép đưa lên Claude không." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Tên dự án: Trợ lý soạn bản nháp 8D.\nVấn đề: mỗi khiếu nại mất ~2 giờ gom biên bản, ảnh, lịch sử lô để viết bản nháp 8D; khoảng 6 khiếu nại/tháng.\nNgười dùng: kỹ sư QA (soạn), trưởng phòng QA (duyệt).\nChỉ số thành công: bản nháp 8D trong ≤ 30 phút; trưởng phòng đánh giá ≥ 80% nội dung dùng được không cần viết lại, trên 5 khiếu nại cũ.\nPhạm vi: gom thông tin từ biên bản và lịch sử lô, soạn D1–D4 nháp.\nNgoài phạm vi: không tự gửi báo cáo cho khách, không kết luận nguyên nhân gốc thay kỹ sư.\nDữ liệu và chính sách: dữ liệu khách và biên bản nội bộ — xin xác nhận chính sách trước khi đưa lên; ẩn tên khách nếu cần.\nCông cụ: Project trên claude.ai (tài liệu 8D mẫu) giai đoạn đầu.\nRủi ro: nội dung sai lọt vào báo cáo — luôn có trưởng phòng duyệt.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Dự án tốt: vấn đề thật, người dùng cụ thể, chỉ số có số, vừa sức 2–4 tuần, dữ liệu được phép.",
        "Quá lớn thì thu hẹp; vướng chính sách thì đổi hướng; công cụ sẵn có làm được thì không cần AI.",
        "Chọn công cụ theo bản chất việc: claude.ai, Claude Code, hay Claude API.",
        "Ưu tiên dự án kiểm chứng được bằng bộ ví dụ đúng/sai.",
        "Chốt bằng điều lệ dự án một trang, có xác nhận của người dùng.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Bắt đầu dự án tốt nghiệp của bạn.",
      tasks: [
        "Liệt kê 3–5 ý tưởng, sàng lọc bằng 5 câu hỏi, chọn một.",
        "Gặp ít nhất một người dùng, ghi 3 ví dụ thật của vấn đề.",
        "Viết điều lệ dự án một trang và xin người dùng xác nhận.",
      ],
      deliverable: "Điều lệ dự án một trang có xác nhận của người dùng + 3 ví dụ thật.",
      checklist: ["Chỉ số thành công có con số", "Có phần ngoài phạm vi", "Dữ liệu đã được xác nhận được phép dùng"],
    },
  ],
};
