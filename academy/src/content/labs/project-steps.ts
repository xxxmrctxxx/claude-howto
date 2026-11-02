export type HtmlCheck =
  | { kind: "selector"; selector: string; min: number; label: string }
  | { kind: "text"; pattern: string; label: string };

export interface ProjectStep {
  id: string;
  title: string;
  goal: string;
  prompt: string;
  expected: string;
  manualChecks: string[];
  autoChecks: HtmlCheck[];
  commonErrors: { error: string; fix: string }[];
}

export const PROJECT = {
  title: "Trang theo dõi lỗi QA",
  summary:
    "Một trang HTML duy nhất để ghi nhận lỗi sản phẩm (ngày, mã máy, công đoạn, loại lỗi, mức độ), lưu trong trình duyệt và lọc theo mức độ. Làm trong Claude (Artifacts) hoặc Claude Code, rồi dán code vào đây để kiểm tra.",
};

export const PROJECT_STEPS: ProjectStep[] = [
  {
    id: "ke-hoach",
    title: "Bước 1 — Lập kế hoạch trước khi code",
    goal: "Có danh sách chức năng và trường dữ liệu rõ ràng, chưa có dòng code nào.",
    prompt:
      "Bạn là lập trình viên web cẩn thận. Tôi muốn làm một trang HTML duy nhất để ghi nhận lỗi sản phẩm tại xưởng máy biến áp.\nMỗi lỗi gồm: ngày, mã máy, công đoạn, loại lỗi, mức độ (Nhẹ/Trung bình/Nghiêm trọng).\nCHƯA viết code. Hãy liệt kê: (1) các chức năng, (2) các trường dữ liệu và kiểu dữ liệu, (3) các bước xây dựng theo thứ tự.",
    expected: "Một danh sách chức năng (thêm, hiển thị, lưu, lọc, thống kê), bảng trường dữ liệu và 4–6 bước xây dựng.",
    manualChecks: ["Có đủ 5 trường dữ liệu", "Có nhắc đến lưu dữ liệu khi tải lại trang", "Claude chưa viết code"],
    autoChecks: [],
    commonErrors: [
      { error: "Claude viết luôn cả trang web.", fix: "Nhắc lại rõ: “Chưa viết code, chỉ lập kế hoạch.” Tách lập kế hoạch và viết code thành hai lượt." },
      { error: "Thiếu trường mức độ hoặc ngày.", fix: "Liệt kê chính xác các trường trong prompt, đừng để Claude tự đoán." },
    ],
  },
  {
    id: "khung",
    title: "Bước 2 — Tạo form và bảng",
    goal: "Trang có form nhập 5 trường và bảng hiển thị danh sách lỗi.",
    prompt:
      "Dựa trên kế hoạch trên, hãy viết một file HTML hoàn chỉnh (HTML + CSS + JavaScript trong cùng file).\nGồm: form với 5 trường (ngày dạng date, mã máy, công đoạn, loại lỗi, mức độ dạng select 3 giá trị) và nút “Thêm lỗi”; bên dưới là bảng có tiêu đề cột tương ứng.\nGiao diện tiếng Việt, có <meta charset=\"utf-8\"> và viewport cho điện thoại. Chưa cần lưu dữ liệu.",
    expected: "Một file HTML mở được trong trình duyệt, có form 5 trường và bảng trống với 5 cột.",
    manualChecks: ["Mở file trong trình duyệt thấy form và bảng", "Gõ tiếng Việt có dấu hiển thị đúng"],
    autoChecks: [
      { kind: "selector", selector: "form", min: 1, label: "Có thẻ <form>" },
      { kind: "selector", selector: "form input, form select", min: 5, label: "Form có ít nhất 5 trường" },
      { kind: "selector", selector: "select option", min: 3, label: "Ô mức độ có ít nhất 3 lựa chọn" },
      { kind: "selector", selector: "table th", min: 5, label: "Bảng có ít nhất 5 tiêu đề cột" },
      { kind: "selector", selector: 'meta[charset], meta[http-equiv="Content-Type"]', min: 1, label: "Khai báo bảng mã (charset)" },
      { kind: "selector", selector: 'meta[name="viewport"]', min: 1, label: "Có meta viewport cho điện thoại" },
    ],
    commonErrors: [
      { error: "Tiếng Việt hiển thị thành ký tự lạ.", fix: "Thêm <meta charset=\"utf-8\"> trong <head> và lưu file dạng UTF-8." },
      { error: "Bấm “Thêm lỗi” thì trang tải lại.", fix: "Yêu cầu Claude dùng event.preventDefault() trong sự kiện submit." },
    ],
  },
  {
    id: "luu",
    title: "Bước 3 — Thêm lỗi vào bảng và lưu lại",
    goal: "Bấm “Thêm lỗi” thì dòng mới hiện trong bảng và vẫn còn sau khi tải lại trang.",
    prompt:
      "Hãy bổ sung JavaScript cho trang trên: khi submit form thì thêm lỗi vào danh sách, hiển thị lên bảng và lưu danh sách vào localStorage (dùng JSON.stringify). Khi mở trang thì đọc lại từ localStorage (dùng JSON.parse) và hiển thị. Chỉ sửa phần cần thiết và gửi lại toàn bộ file.",
    expected: "Thêm 2–3 lỗi, tải lại trang (F5) vẫn thấy đủ các dòng.",
    manualChecks: ["Thêm 3 lỗi, tải lại trang vẫn còn 3 dòng", "Form được xoá trắng sau khi thêm"],
    autoChecks: [
      { kind: "text", pattern: "localStorage", label: "Có dùng localStorage" },
      { kind: "text", pattern: "JSON\\.stringify", label: "Có JSON.stringify khi lưu" },
      { kind: "text", pattern: "JSON\\.parse", label: "Có JSON.parse khi đọc" },
      { kind: "text", pattern: "preventDefault", label: "Chặn tải lại trang khi submit" },
    ],
    commonErrors: [
      { error: "Tải lại trang thì mất dữ liệu.", fix: "Kiểm tra code có ĐỌC localStorage khi mở trang, không chỉ ghi." },
      { error: "Lỗi “Unexpected token” khi mở trang.", fix: "Dữ liệu cũ bị hỏng: yêu cầu Claude bọc JSON.parse trong try/catch và dùng mảng rỗng khi lỗi." },
    ],
  },
  {
    id: "loc",
    title: "Bước 4 — Lọc và thống kê",
    goal: "Lọc danh sách theo mức độ và hiển thị số lỗi theo từng mức.",
    prompt:
      "Hãy thêm: (1) một ô select “Lọc theo mức độ” (Tất cả/Nhẹ/Trung bình/Nghiêm trọng) phía trên bảng, dùng Array.filter để hiển thị; (2) một dòng thống kê số lỗi theo từng mức độ, cập nhật mỗi khi thêm lỗi. Gửi lại toàn bộ file.",
    expected: "Chọn “Nghiêm trọng” thì bảng chỉ còn các lỗi nghiêm trọng; dòng thống kê đếm đúng.",
    manualChecks: ["Lọc từng mức độ cho kết quả đúng", "Thống kê cập nhật ngay khi thêm lỗi"],
    autoChecks: [
      { kind: "selector", selector: "select", min: 2, label: "Có thêm ô select để lọc" },
      { kind: "text", pattern: "\\.filter\\(", label: "Có dùng .filter(" },
      { kind: "text", pattern: "(Nghiêm trọng|Nghiem trong)", label: "Có mức “Nghiêm trọng”" },
    ],
    commonErrors: [
      { error: "Lọc xong thì lỗi mới thêm không hiện.", fix: "Sau khi thêm, gọi lại hàm hiển thị với bộ lọc hiện tại." },
      { error: "Thống kê sai khi lọc.", fix: "Thống kê phải tính trên toàn bộ danh sách, không phải danh sách đã lọc (nói rõ điều này trong prompt)." },
    ],
  },
  {
    id: "kiem-thu",
    title: "Bước 5 — Kiểm thử và sửa lỗi",
    goal: "Trang chạy đúng với dữ liệu thật, không lỗi trên điện thoại.",
    prompt:
      "Đóng vai kiểm thử viên. Hãy liệt kê 8 ca kiểm thử cho trang này (gồm dữ liệu trống, ký tự tiếng Việt, mã máy trùng, nhiều lỗi cùng lúc, màn hình điện thoại) và chỉ ra chỗ trong code có thể gây lỗi. Sau đó đề xuất bản sửa.",
    expected: "Một danh sách ca kiểm thử có bước làm và kết quả mong đợi; các lỗi tìm được đã được sửa.",
    manualChecks: ["Không cho thêm lỗi khi bỏ trống mã máy", "Trang hiển thị tốt trên màn hình điện thoại", "Tất cả ca kiểm thử đều qua"],
    autoChecks: [
      { kind: "selector", selector: "input[required], select[required]", min: 2, label: "Có trường bắt buộc (required)" },
      { kind: "text", pattern: "@media", label: "Có CSS responsive (@media)" },
    ],
    commonErrors: [
      { error: "Bảng tràn ngang trên điện thoại.", fix: "Bọc bảng trong div có overflow-x: auto hoặc chuyển thành thẻ trên màn hình nhỏ." },
      { error: "Thêm được lỗi trống.", fix: "Thêm thuộc tính required và kiểm tra giá trị trước khi lưu." },
    ],
  },
];
