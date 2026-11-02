export interface DebugChallenge {
  id: string;
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  story: string;
  functionName: string;
  code: string;
  /** 1-based line number of the bug. */
  buggyLine: number;
  lineFeedback: string;
  fixOptions: { id: string; text: string; correct: boolean; feedback: string }[];
  /** Each test: JS expression calling the function, and the expected JSON value. */
  tests: { name: string; call: string; expected: unknown }[];
  solution: string;
}

/** Lab 3: small JavaScript functions from QA / office work, each with one real bug. */
export const DEBUG_CHALLENGES: DebugChallenge[] = [
  {
    id: "ty-le-loi",
    title: "Tỷ lệ lỗi phần trăm",
    difficulty: "beginner",
    story: "Hàm tính tỷ lệ % sản phẩm lỗi cho báo cáo QA hằng ngày. Báo cáo hôm qua ghi tỷ lệ lỗi 0,25% trong khi thực tế là 2,5%.",
    functionName: "tyLeLoi",
    code: `function tyLeLoi(soLoi, tongSanPham) {
  if (tongSanPham === 0) return 0;
  const tyLe = soLoi / tongSanPham * 10;
  return Math.round(tyLe * 100) / 100;
}`,
    buggyLine: 3,
    lineFeedback: "Đúng: phép nhân với 10 làm kết quả nhỏ đi 10 lần — phần trăm phải nhân 100.",
    fixOptions: [
      { id: "a", text: "Đổi * 10 thành * 100", correct: true, feedback: "Chính xác: tỷ lệ phần trăm = số lỗi / tổng × 100." },
      { id: "b", text: "Đổi Math.round thành Math.floor", correct: false, feedback: "Cách làm tròn không gây sai lệch 10 lần." },
      { id: "c", text: "Bỏ dòng kiểm tra tongSanPham === 0", correct: false, feedback: "Dòng đó đúng — nó tránh chia cho 0." },
    ],
    tests: [
      { name: "5 lỗi / 200 sản phẩm = 2.5%", call: "tyLeLoi(5, 200)", expected: 2.5 },
      { name: "Không có lỗi = 0%", call: "tyLeLoi(0, 50)", expected: 0 },
      { name: "Tất cả lỗi = 100%", call: "tyLeLoi(3, 3)", expected: 100 },
      { name: "Không có sản phẩm = 0 (không chia cho 0)", call: "tyLeLoi(0, 0)", expected: 0 },
    ],
    solution: `function tyLeLoi(soLoi, tongSanPham) {
  if (tongSanPham === 0) return 0;
  const tyLe = soLoi / tongSanPham * 100;
  return Math.round(tyLe * 100) / 100;
}`,
  },
  {
    id: "tong-san-luong",
    title: "Tổng sản lượng ca",
    difficulty: "beginner",
    story: "Hàm cộng sản lượng của các công đoạn trong ca. Tổng luôn thiếu đúng bằng sản lượng của công đoạn đầu tiên.",
    functionName: "tongSanLuong",
    code: `function tongSanLuong(danhSach) {
  let tong = 0;
  for (let i = 1; i < danhSach.length; i++) {
    tong += danhSach[i].soLuong;
  }
  return tong;
}`,
    buggyLine: 3,
    lineFeedback: "Đúng: vòng lặp bắt đầu từ i = 1 nên bỏ qua phần tử đầu tiên (chỉ số 0).",
    fixOptions: [
      { id: "a", text: "Đổi i < danhSach.length thành i <= danhSach.length", correct: false, feedback: "Sẽ đọc vượt mảng (undefined) và vẫn bỏ sót phần tử đầu." },
      { id: "b", text: "Khởi tạo let i = 0", correct: true, feedback: "Chính xác: mảng JavaScript bắt đầu từ chỉ số 0." },
      { id: "c", text: "Khởi tạo let tong = 1", correct: false, feedback: "Chỉ che lỗi trong một trường hợp, không sửa nguyên nhân." },
    ],
    tests: [
      { name: "3 công đoạn", call: "tongSanLuong([{soLuong: 120}, {soLuong: 80}, {soLuong: 100}])", expected: 300 },
      { name: "1 công đoạn", call: "tongSanLuong([{soLuong: 45}])", expected: 45 },
      { name: "Danh sách rỗng", call: "tongSanLuong([])", expected: 0 },
    ],
    solution: `function tongSanLuong(danhSach) {
  let tong = 0;
  for (let i = 0; i < danhSach.length; i++) {
    tong += danhSach[i].soLuong;
  }
  return tong;
}`,
  },
  {
    id: "loc-khong-dat",
    title: "Lọc máy biến áp không đạt",
    difficulty: "intermediate",
    story: "Máy không đạt khi tổn hao đo được VƯỢT giới hạn cho phép. Danh sách “không đạt” lại đang liệt kê toàn máy đạt.",
    functionName: "locKhongDat",
    code: `function locKhongDat(ketQua) {
  return ketQua
    .filter((m) => m.tonHao < m.gioiHan)
    .map((m) => m.maMay);
}`,
    buggyLine: 3,
    lineFeedback: "Đúng: điều kiện lọc bị đảo — đang giữ máy có tổn hao NHỎ HƠN giới hạn.",
    fixOptions: [
      { id: "a", text: "Đổi < thành >", correct: true, feedback: "Chính xác: không đạt nghĩa là tonHao > gioiHan." },
      { id: "b", text: "Đổi .map thành .forEach", correct: false, feedback: "forEach không trả về mảng — kết quả sẽ là undefined." },
      { id: "c", text: "Đổi < thành <=", correct: false, feedback: "Vẫn giữ máy đạt; chỉ thêm máy bằng đúng giới hạn." },
    ],
    tests: [
      {
        name: "Một máy vượt giới hạn",
        call: "locKhongDat([{maMay: 'T250-118', tonHao: 410, gioiHan: 420}, {maMay: 'T630-046', tonHao: 865, gioiHan: 840}])",
        expected: ["T630-046"],
      },
      { name: "Bằng giới hạn vẫn đạt", call: "locKhongDat([{maMay: 'A', tonHao: 500, gioiHan: 500}])", expected: [] },
      { name: "Danh sách rỗng", call: "locKhongDat([])", expected: [] },
    ],
    solution: `function locKhongDat(ketQua) {
  return ketQua
    .filter((m) => m.tonHao > m.gioiHan)
    .map((m) => m.maMay);
}`,
  },
  {
    id: "dinh-dang-ngay",
    title: "Định dạng ngày dd/mm/yyyy",
    difficulty: "intermediate",
    story: "Biên bản kiểm tra ngày 02/11/2026 lại in ra 02/10/2026. Tháng luôn bị lùi 1.",
    functionName: "dinhDangNgay",
    code: `function dinhDangNgay(d) {
  const ngay = String(d.getDate()).padStart(2, "0");
  const thang = String(d.getMonth()).padStart(2, "0");
  return ngay + "/" + thang + "/" + d.getFullYear();
}`,
    buggyLine: 3,
    lineFeedback: "Đúng: getMonth() trả về 0–11 (tháng 1 là 0).",
    fixOptions: [
      { id: "a", text: "Dùng d.getDay() thay cho d.getDate()", correct: false, feedback: "getDay() là thứ trong tuần (0–6), không phải ngày trong tháng." },
      { id: "b", text: "Cộng 1: d.getMonth() + 1", correct: true, feedback: "Chính xác: getMonth() đếm từ 0." },
      { id: "c", text: "Đổi padStart(2) thành padStart(3)", correct: false, feedback: "Chỉ thêm số 0, không sửa giá trị tháng." },
    ],
    tests: [
      { name: "2/11/2026", call: "dinhDangNgay(new Date(2026, 10, 2))", expected: "02/11/2026" },
      { name: "Ngày đầu năm", call: "dinhDangNgay(new Date(2026, 0, 1))", expected: "01/01/2026" },
      { name: "Ngày cuối năm", call: "dinhDangNgay(new Date(2025, 11, 31))", expected: "31/12/2025" },
    ],
    solution: `function dinhDangNgay(d) {
  const ngay = String(d.getDate()).padStart(2, "0");
  const thang = String(d.getMonth() + 1).padStart(2, "0");
  return ngay + "/" + thang + "/" + d.getFullYear();
}`,
  },
  {
    id: "dem-theo-loai",
    title: "Đếm lỗi theo loại",
    difficulty: "advanced",
    story: "Hàm thống kê số lần xuất hiện của từng loại lỗi để vẽ biểu đồ Pareto. Mọi giá trị đều ra NaN.",
    functionName: "demTheoLoai",
    code: `function demTheoLoai(dsLoi) {
  const dem = {};
  for (const loi of dsLoi) {
    dem[loi.loai] = dem[loi.loai] + 1;
  }
  return dem;
}`,
    buggyLine: 4,
    lineFeedback: "Đúng: lần đầu gặp một loại lỗi, dem[loi.loai] là undefined, và undefined + 1 = NaN.",
    fixOptions: [
      { id: "a", text: "Khởi tạo const dem = [] thay vì {}", correct: false, feedback: "Mảng không giải quyết việc giá trị ban đầu là undefined." },
      { id: "b", text: "Dùng (dem[loi.loai] || 0) + 1", correct: true, feedback: "Chính xác: lấy 0 khi loại lỗi chưa có trong bảng đếm." },
      { id: "c", text: "Đổi for...of thành for...in", correct: false, feedback: "for...in lặp qua chỉ số dạng chuỗi, không phải đối tượng lỗi." },
    ],
    tests: [
      {
        name: "Nhiều loại lỗi",
        call: "demTheoLoai([{loai: 'Rò dầu'}, {loai: 'Bong sơn'}, {loai: 'Rò dầu'}])",
        expected: { "Rò dầu": 2, "Bong sơn": 1 },
      },
      { name: "Không có lỗi", call: "demTheoLoai([])", expected: {} },
    ],
    solution: `function demTheoLoai(dsLoi) {
  const dem = {};
  for (const loi of dsLoi) {
    dem[loi.loai] = (dem[loi.loai] || 0) + 1;
  }
  return dem;
}`,
  },
];
