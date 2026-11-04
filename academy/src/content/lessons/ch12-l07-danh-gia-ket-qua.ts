import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";
const CO = "https://code.claude.com/docs/en/costs";
const PR = "https://platform.claude.com/docs/en/about-claude/pricing";
const HAL = "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations";

export const lessonDanhGiaKetQua: Lesson = {
  id: "ch12-l07",
  chapterId: "ch12",
  slug: "danh-gia-ket-qua",
  title: "Đánh giá kết quả",
  subtitle: "Khép lại dự án tốt nghiệp: so kết quả với điều lệ bằng số đo có bằng chứng, cân giá trị với chi phí, nói rõ hạn chế, rút kinh nghiệm, bàn giao để người khác vận hành được — và quyết định bước tiếp theo.",
  level: "intermediate",
  estimatedMinutes: 40,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "So từng chỉ số trong điều lệ: trước – sau, cách đo, bằng chứng; không nói quá điều số liệu chứng minh." },
    { id: "o2", text: "Cân giá trị (thời gian, lỗi giảm) với chi phí (API, công bảo trì) và ghi phản hồi người dùng." },
    { id: "o3", text: "Viết hạn chế, rủi ro còn lại, bài học (giữ – bỏ – thử) và quyết định: tiếp tục, mở rộng hay dừng." },
    { id: "o4", text: "Bàn giao: README, hướng dẫn sử dụng, người phụ trách, cách cập nhật bộ mẫu, chi phí dự kiến, xử lý khi lỗi." },
  ],
  concepts: [
    { id: "metric-comparison", label: "So chỉ số trước – sau" },
    { id: "evidence", label: "Bằng chứng cho mỗi kết luận" },
    { id: "value-vs-cost", label: "Giá trị và chi phí" },
    { id: "user-feedback", label: "Phản hồi người dùng" },
    { id: "honest-limits", label: "Nói rõ hạn chế" },
    { id: "overclaim", label: "Tránh nói quá" },
    { id: "retrospective", label: "Rút kinh nghiệm: giữ – bỏ – thử" },
    { id: "handover-docs", label: "Tài liệu bàn giao" },
    { id: "owner-maintenance", label: "Người phụ trách và bảo trì" },
    { id: "next-decision", label: "Quyết định bước tiếp theo" },
    { id: "demo", label: "Trình bày kết quả" },
    { id: "keep-learning", label: "Cập nhật kiến thức định kỳ" },
  ],
  hints: [
    "Mỗi câu kết luận trong báo cáo phải chỉ được tới một số đo hoặc một tài liệu.",
    "Hạn chế viết ra là dấu hiệu đáng tin, không phải điểm yếu.",
    "Dự án chưa xong nếu người khác không vận hành được khi bạn vắng mặt.",
  ],
  sources: [
    { label: "Claude Code Docs — Best practices (phép kiểm tra, CLAUDE.md làm tài liệu sống)", href: BP },
    { label: "Claude Code Docs — Manage costs effectively (theo dõi chi phí)", href: CO },
    { label: "Claude API Docs — Pricing (giá hiện hành để tính chi phí)", href: PR },
    { label: "Claude API Docs — Reduce hallucinations (kiểm chứng, trích nguồn)", href: HAL },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Bài cuối của khoá học trả lời: **dự án có đạt điều đã hứa không?** Lấy lại **điều lệ** (bài 12.1) và đi từng chỉ số: **trước – sau – cách đo – bằng chứng** (file kết quả, bảng chấm công việc, log). Ví dụ: “Tổng hợp lỗi tuần: 60 → 12 phút, trung bình 4 tuần dùng thử, theo ghi chép của trưởng xưởng”. **Không nói quá**: bộ mẫu đạt 92% thì không viết “chính xác tuyệt đối”; chưa tính tiền thì không viết “tiết kiệm hàng trăm triệu”.",
        "**Giá trị và chi phí**: giá trị = thời gian tiết kiệm × tần suất, lỗi được bắt sớm, quyết định nhanh hơn; chi phí = API/gói dịch vụ (tính theo usage thật và bảng giá hiện hành), thời gian bảo trì bộ mẫu và prompt, thời gian người duyệt. Thêm **phản hồi người dùng** có cấu trúc: điều gì hữu ích, điều gì vướng, có muốn dùng tiếp không, bao nhiêu người đang dùng.",
        "**Hạn chế và bài học**: ghi rõ những gì chưa làm được (ghi chú viết tay chụp ảnh, dữ liệu nằm ở hệ thống khác), rủi ro còn lại và cách kiểm soát (người duyệt hàng chờ). Rút kinh nghiệm theo **giữ – bỏ – thử**, kể cả về cách làm với Claude (quy tắc nào đã thêm vào CLAUDE.md, cách giao việc nào hiệu quả). Kết thúc bằng **quyết định**: tiếp tục như hiện tại, mở rộng (xưởng khác, loại dữ liệu khác), hay dừng — có lý do.",
        "**Bàn giao**: dự án chỉ thật sự xong khi **người khác vận hành được**. Tài liệu gồm: README (cách cài, cách chạy), hướng dẫn sử dụng cho người dùng, **người phụ trách**, nơi lưu key/bí mật và ai có quyền (Chương 11), cách cập nhật bộ mẫu và chạy lại đánh giá, chi phí dự kiến mỗi tháng, xử lý khi lỗi. Trình bày kết quả 5–10 phút với dữ liệu thật. Và nhớ: tính năng, giới hạn, giá của Claude **thay đổi theo thời gian** — đối chiếu tài liệu chính thức định kỳ.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Như biên bản kết thúc một dự án cải tiến: số đo trước–sau có chữ ký xác nhận, chi phí đã bỏ ra, những gì chưa đạt, bài học cho lần sau, và sổ tay vận hành để ca khác làm theo được.",
      },
      terms: [
        { term: "Bằng chứng", definition: "Số đo, file kết quả hoặc tài liệu cho phép người khác kiểm lại kết luận." },
        { term: "Giữ – bỏ – thử", definition: "Khung rút kinh nghiệm: tiếp tục làm gì, ngừng làm gì, thử gì mới." },
        { term: "Bàn giao", definition: "Chuyển dự án cho người vận hành, kèm tài liệu đủ để họ làm được mà không cần bạn." },
        { term: "Nói quá", definition: "Kết luận vượt quá điều dữ liệu chứng minh." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bảng đánh giá “Sổ tay ca số”",
      infographic: {
        kind: "table",
        headers: ["Chỉ số điều lệ", "Trước → Sau", "Bằng chứng", "Kết luận"],
        rows: [
          ["Tổng hợp ≤ 15 phút/tuần", "60 → 12 phút", "Ghi chép 4 tuần của trưởng xưởng", "Đạt"],
          ["≥ 90% bản ghi đúng (từng trường)", "— → 92–96%", "ket-qua/bo-mau-50.json", "Đạt"],
          ["Chi phí ≤ ngân sách tuần", "— → 61% ngân sách", "Usage API 4 tuần", "Đạt"],
          ["Ghi chú viết tay chụp ảnh", "Chưa hỗ trợ", "—", "Hạn chế, đề xuất giai đoạn 2"],
        ],
      },
      caption: "Ví dụ do khoá học soạn; số liệu minh hoạ.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ số đo đến quyết định",
      mermaid: `flowchart TD
  A["Điều lệ: chỉ số đã hứa"] --> B["Số đo trước – sau + bằng chứng"]
  B --> C["Giá trị so với chi phí"]
  C --> D["Phản hồi người dùng"]
  D --> E["Hạn chế, rủi ro còn lại"]
  E --> F["Rút kinh nghiệm: giữ – bỏ – thử"]
  F --> G{"Quyết định"}
  G -->|"Tiếp tục"| H["Bàn giao: README, hướng dẫn, người phụ trách"]
  G -->|"Mở rộng"| I["Điều lệ mới cho giai đoạn 2"]
  G -->|"Dừng"| J["Lưu trữ, ghi lý do"]`,
      caption: "Quyết định dựa trên số đo, chi phí, phản hồi và hạn chế đã nói rõ.",
      alt: "Lưu đồ đánh giá: từ các chỉ số trong điều lệ, lập số đo trước và sau kèm bằng chứng, so giá trị với chi phí, thu phản hồi người dùng, ghi hạn chế và rủi ro còn lại, rút kinh nghiệm theo giữ, bỏ, thử; rồi quyết định: tiếp tục thì bàn giao với README, hướng dẫn và người phụ trách; mở rộng thì viết điều lệ mới cho giai đoạn 2; dừng thì lưu trữ và ghi lý do.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: câu kết luận",
      bad: {
        label: "Nói quá, không bằng chứng",
        content: "“Dự án thành công rực rỡ. AI chính xác tuyệt đối, mọi người rất hài lòng, tiết kiệm hàng trăm triệu mỗi năm. Từ nay không cần người kiểm tra.”",
        notes: ["Không số đo nào được dẫn.", "“Tuyệt đối”, “hàng trăm triệu” không có cơ sở.", "Bỏ kiểm soát của con người."],
      },
      good: {
        label: "Số đo, bằng chứng, hạn chế",
        content: "“Tổng hợp lỗi tuần 60 → 12 phút (4 tuần, ghi chép của trưởng xưởng). Bộ 50 ghi chú: 92–96% theo trường; ~3% bản ghi vào hàng chờ cho người xem. Chi phí 61% ngân sách tuần. Hạn chế: chưa xử lý ghi chú viết tay chụp ảnh. Đề xuất: tiếp tục, giữ người duyệt hàng chờ.”",
        notes: ["Mỗi kết luận có số và nguồn.", "Hạn chế được nói rõ.", "Kiểm soát của con người được giữ."],
      },
      takeaway: "Báo cáo đáng tin là báo cáo người khác kiểm lại được.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: soát báo cáo đánh giá",
      sim: {
        kind: "highlight",
        instruction: "Đây là các dòng trong báo cáo đánh giá dự án. Đánh dấu những dòng nói quá, thiếu bằng chứng hoặc làm mất kiểm soát.",
        segments: [
          { id: "g1", text: "Thời gian tổng hợp: 60 → 12 phút/tuần (trung bình 4 tuần dùng thử, ghi chép của trưởng xưởng).", target: false },
          { id: "g2", text: "Hệ thống chính xác tuyệt đối.", target: true, why: "Bộ mẫu cho 92–96% — “tuyệt đối” là nói quá." },
          { id: "g3", text: "Bộ 50 ghi chú: 92–96% theo trường; khoảng 3% bản ghi vào hàng chờ cho người xem.", target: false },
          { id: "g4", text: "Tiết kiệm hàng trăm triệu đồng mỗi năm.", target: true, why: "Không có cách tính — chỉ nêu khi có số giờ × đơn giá × tần suất." },
          { id: "g5", text: "Chi phí API trung bình 61% ngân sách tuần (usage 4 tuần).", target: false },
          { id: "g6", text: "Mọi người trong xưởng đều rất hài lòng.", target: true, why: "Chỉ một người dùng thử, không có khảo sát." },
          { id: "g7", text: "Hạn chế: chưa xử lý ghi chú viết tay chụp ảnh; chưa thử ghi chú tiếng Anh.", target: false },
          { id: "g8", text: "Từ nay không cần người kiểm tra báo cáo nữa.", target: true, why: "Bỏ kiểm soát — hàng chờ vẫn cần người duyệt." },
        ],
      },
      intro: "Có 4 dòng cần sửa. Tìm chúng.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: khép lại dự án tốt nghiệp",
      steps: [
        { title: "Bảng chỉ số", detail: "Mỗi chỉ số điều lệ: trước, sau, cách đo, bằng chứng, đạt/không đạt." },
        { title: "Giá trị và chi phí", detail: "Thời gian tiết kiệm × tần suất; chi phí API theo usage thật và bảng giá hiện hành; công bảo trì." },
        { title: "Phản hồi người dùng", detail: "3 câu hỏi: hữu ích gì, vướng gì, có dùng tiếp không; ghi số người dùng và tần suất dùng." },
        {
          title: "Nhờ Claude soát báo cáo",
          detail: "Tìm câu nói quá hoặc thiếu bằng chứng.",
          code: { lang: "text", content: "Đọc @bao-cao-danh-gia.md và @ket-qua/. Liệt kê mọi câu kết luận không có số đo hoặc nguồn đi kèm, và mọi câu nói quá điều dữ liệu chứng minh. Chưa sửa file." },
        },
        { title: "Rút kinh nghiệm và quyết định", detail: "Giữ – bỏ – thử (cả về cách làm với Claude); quyết định tiếp tục/mở rộng/dừng có lý do." },
        { title: "Bàn giao và trình bày", detail: "README, hướng dẫn sử dụng, người phụ trách, nơi lưu bí mật, cách chạy lại bộ mẫu, chi phí dự kiến, xử lý khi lỗi; demo 5–10 phút với dữ liệu thật." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết tóm tắt đánh giá (khoảng 8–10 dòng) cho dự án trong dữ liệu mẫu: chỉ số trước – sau có nguồn, kết luận đạt/không đạt, chi phí, hạn chế, quyết định bước tiếp theo.",
      sampleData: {
        name: "Kết quả dự án Trợ lý soạn bản nháp 8D",
        content: "Điều lệ: bản nháp ≤ 30 phút; ≥ 80% nội dung dùng được.\nĐo trên 6 khiếu nại thật (sổ theo dõi của kỹ sư): trước ~120 phút/bản nháp, sau trung bình 35 phút.\nTrưởng phòng chấm: trung bình 75% nội dung dùng được.\nChi phí: gói Team hiện có, không phát sinh thêm.\nVướng: lịch sử lô nằm ở hệ thống khác, phải sao chép tay mất ~15 phút mỗi lần.",
      },
      placeholder: "Tóm tắt đánh giá: …",
      rubric: [
        { id: "numbers", label: "Trước – sau có số", weight: 1, check: { kind: "allGroups", groups: [["120"], ["35"]] }, pass: "Có số trước – sau.", fail: "Ghi 120 → 35 phút." },
        { id: "verdict", label: "Đạt/không đạt trung thực", weight: 1, check: { kind: "allGroups", groups: [["không đạt", "chưa đạt"], ["75"]] }, pass: "Kết luận trung thực.", fail: "Cả hai chỉ số đều chưa đạt (35 > 30 phút; 75% < 80%) — nói rõ." },
        { id: "limit", label: "Hạn chế", weight: 1, check: { kind: "anyKeyword", keywords: ["hạn chế", "lịch sử lô", "sao chép tay"] }, pass: "Có hạn chế.", fail: "Nêu hạn chế: lịch sử lô phải sao chép tay." },
        { id: "next", label: "Quyết định tiếp", weight: 1, check: { kind: "anyKeyword", keywords: ["tiếp tục", "mở rộng", "dừng", "bước tiếp", "đề xuất"] }, pass: "Có quyết định.", fail: "Nêu quyết định và lý do." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Thời gian bản nháp 8D: 120 → 35 phút (6 khiếu nại thật, sổ theo dõi của kỹ sư) — CHƯA ĐẠT mục tiêu ≤ 30 phút, nhưng giảm ~70%.\nNội dung dùng được: 75% (trưởng phòng chấm 6 bản) — CHƯA ĐẠT mục tiêu 80%.\nChi phí: dùng gói Team hiện có, không phát sinh thêm.\nHạn chế: lịch sử lô nằm ở hệ thống khác, phải sao chép tay ~15 phút mỗi lần — đây là phần lớn khoảng cách tới mục tiêu thời gian.\nĐề xuất: tiếp tục dùng; giai đoạn 2 xin xuất lịch sử lô tự động và bổ sung ví dụ 8D đã duyệt vào Project, đo lại sau 6 khiếu nại tiếp theo.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "So từng chỉ số điều lệ: trước – sau – cách đo – bằng chứng – đạt/không đạt.",
        "Cân giá trị với chi phí thật; thu phản hồi người dùng có cấu trúc.",
        "Nói rõ hạn chế và rủi ro; tránh mọi câu vượt quá dữ liệu.",
        "Rút kinh nghiệm giữ – bỏ – thử; quyết định tiếp tục, mở rộng hay dừng.",
        "Bàn giao đủ để người khác vận hành; đối chiếu tài liệu Claude định kỳ vì tính năng thay đổi.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Hoàn tất dự án tốt nghiệp của bạn.",
      tasks: [
        "Viết báo cáo đánh giá: bảng chỉ số có bằng chứng, giá trị – chi phí, phản hồi, hạn chế, giữ – bỏ – thử, quyết định.",
        "Chuẩn bị bộ bàn giao: README, hướng dẫn sử dụng, người phụ trách, cách chạy lại bộ mẫu, chi phí dự kiến.",
        "Trình bày 5–10 phút với người dùng và người quản lý; ghi câu hỏi và quyết định cuối.",
      ],
      deliverable: "Báo cáo đánh giá + bộ tài liệu bàn giao + biên bản buổi trình bày.",
      checklist: ["Mọi kết luận có số đo hoặc nguồn", "Hạn chế được nêu rõ", "Người khác chạy được hệ thống theo README"],
    },
  ],
};
