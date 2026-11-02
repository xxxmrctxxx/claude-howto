import type { PromptBlocks, ScenarioExpectation } from "@/lib/engine/prompt/evaluate";

export interface PromptScenario {
  id: string;
  title: string;
  domain: string;
  brief: string;
  starter: PromptBlocks;
  expectations: ScenarioExpectation[];
  reference: PromptBlocks;
}

/** Lab 1 scenarios. Starters are deliberately weak so the learner improves them. */
export const PROMPT_SCENARIOS: PromptScenario[] = [
  {
    id: "bao-cao-8d",
    title: "Báo cáo 8D sự cố rò dầu",
    domain: "QA/QC · Máy biến áp",
    brief:
      "Khách hàng phản ánh 3 máy biến áp 250 kVA (lô 07/2024) rò dầu ở mặt bích van xả. Bạn cần Claude soạn bản nháp báo cáo 8D gửi phòng chất lượng của khách hàng.",
    starter: { role: "", context: "Bị rò dầu.", task: "Viết báo cáo", constraints: "Viết hay vào.", output: "" },
    expectations: [
      { block: "context", keywords: ["rò dầu", "máy biến áp", "mặt bích", "khách hàng", "250 kva", "lô"], ok: "Bối cảnh nêu đúng sự cố.", missing: "Bối cảnh nên nêu sự cố cụ thể: thiết bị, vị trí rò, số lượng, lô." },
      { block: "output", keywords: ["8d", "d1", "d8", "bảng", "song ngữ"], ok: "Định dạng bám theo cấu trúc 8D.", missing: "Nêu cấu trúc kết quả: 8 bước D1–D8, bảng, ngôn ngữ." },
    ],
    reference: {
      role: "Bạn là kỹ sư QA có 10 năm kinh nghiệm về máy biến áp ngâm dầu.",
      context:
        "Khách hàng phản ánh rò dầu tại mặt bích van xả của 3 máy biến áp 250 kVA thuộc lô sản xuất 07/2024. Báo cáo gửi phòng chất lượng của khách hàng; dữ liệu kiểm tra đính kèm trong thẻ <du_lieu>.",
      task: "Hãy soạn bản nháp báo cáo 8D cho sự cố này.",
      constraints:
        "Chỉ dùng thông tin trong dữ liệu; chỗ nào thiếu thì ghi [CẦN BỔ SUNG] thay vì suy đoán. Mỗi bước tối đa 80 từ.",
      output: "Trình bày dạng bảng 8 dòng D1–D8, song ngữ Việt – Anh, cột: Bước | Nội dung | Người phụ trách.",
    },
  },
  {
    id: "tong-hop-excel",
    title: "Tổng hợp doanh số từ Excel",
    domain: "Văn phòng · Phân tích dữ liệu",
    brief:
      "Bạn có file Excel doanh số quý 3 của 4 chi nhánh. Sếp cần một bản tóm tắt để đọc trong 2 phút trước cuộc họp sáng mai.",
    starter: { role: "", context: "File Excel đây.", task: "Phân tích giúp", constraints: "", output: "Ngắn thôi." },
    expectations: [
      { block: "context", keywords: ["quý", "chi nhánh", "doanh số", "excel", "bảng"], ok: "Bối cảnh nêu rõ dữ liệu.", missing: "Nói rõ dữ liệu: doanh số quý mấy, mấy chi nhánh, file gì." },
      { block: "task", keywords: ["so sánh", "tổng hợp", "xác định", "chỉ ra", "xếp hạng"], ok: "Nhiệm vụ cụ thể.", missing: "“Phân tích giúp” quá rộng: so sánh gì, cần chỉ ra điều gì?" },
    ],
    reference: {
      role: "Bạn là chuyên viên phân tích kinh doanh.",
      context: "Bảng Excel bên dưới là doanh số quý 3/2026 của 4 chi nhánh, kèm số liệu quý 2. Người đọc là giám đốc, chỉ có 2 phút trước cuộc họp.",
      task: "Hãy so sánh doanh số quý 3 với quý 2 của từng chi nhánh và chỉ ra chi nhánh tăng/giảm mạnh nhất.",
      constraints: "Chỉ dùng số liệu trong bảng, làm tròn 1 chữ số thập phân, tối đa 120 từ.",
      output: "Một bảng 4 cột (Chi nhánh | Q2 | Q3 | % thay đổi), sau đó 3 gạch đầu dòng nhận xét.",
    },
  },
  {
    id: "email-giao-tre",
    title: "Email xin lỗi vì giao hàng trễ",
    domain: "Chăm sóc khách hàng",
    brief:
      "Đơn hàng 20 tủ điện của công ty An Phát giao trễ 5 ngày do thiếu linh kiện. Hàng sẽ giao ngày 15/11. Bạn cần email xin lỗi và cam kết hỗ trợ.",
    starter: { role: "", context: "", task: "Viết email xin lỗi khách", constraints: "Đừng dài quá.", output: "" },
    expectations: [
      { block: "context", keywords: ["an phát", "đơn hàng", "trễ", "linh kiện", "15/11", "tủ điện"], ok: "Bối cảnh có chi tiết sự việc.", missing: "Đưa chi tiết: khách nào, đơn gì, trễ bao lâu, vì sao, ngày giao mới." },
      { block: "output", keywords: ["email", "tiêu đề", "chữ ký", "đoạn"], ok: "Định dạng email rõ ràng.", missing: "Mô tả hình thức: tiêu đề, số đoạn, lời chào, chữ ký." },
    ],
    reference: {
      role: "Bạn là trưởng phòng chăm sóc khách hàng của một công ty sản xuất tủ điện.",
      context:
        "Đơn hàng 20 tủ điện của Công ty An Phát bị giao trễ 5 ngày do thiếu linh kiện nhập khẩu. Hàng sẽ giao ngày 15/11. Đây là khách hàng lâu năm.",
      task: "Hãy viết email xin lỗi, giải thích ngắn gọn nguyên nhân và nêu cam kết hỗ trợ.",
      constraints: "Giọng văn lịch sự, chân thành; tối đa 150 từ; nêu rõ ngày giao mới và người liên hệ.",
      output: "Trình bày: dòng tiêu đề email, 3 đoạn ngắn (xin lỗi – nguyên nhân – cam kết), chữ ký.",
    },
  },
];
