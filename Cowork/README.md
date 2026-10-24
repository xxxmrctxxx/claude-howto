# Cowork

Thư mục làm việc cho Claude Cowork. Mở thư mục này trong app Claude (chế độ Cowork) và trong Obsidian (dạng vault).

## Cấu trúc

```text
Cowork/
├── ABOUT ME/
│   ├── about-me.md
│   ├── my-company.md
│   └── anti-ai-writing-style.md
├── OUTPUTS/
└── TEMPLATES/
```

## Tiến độ thiết lập

| Bước | Việc | Trạng thái |
|------|------|------------|
| 1 | Tải app Claude | Tự làm trên máy |
| 2 | Nâng cấp gói Pro | Tự làm trên máy |
| 3 | Tạo thư mục Cowork và 3 thư mục con | Xong |
| 4 | Tạo 3 tệp trong ABOUT ME | Xong |
| 5 | Phỏng vấn để viết nội dung | Xong, còn các chỗ `[...]` cần tự điền |
| 6 | Global Instructions | Đã soạn sẵn bên dưới, dán vào Settings |
| 7 | Chọn mô hình | Tự chọn trong app |
| 8 | Mở thư mục bằng Obsidian | Tự làm trên máy |
| 9 | Phiên làm việc đầu tiên | Câu lệnh mẫu bên dưới |
| 10 | Lưu template | Làm sau phiên đầu tiên thành công |

## Global Instructions (Bước 6)

Vào Settings → Cowork → Edit Global Instructions và dán:

```text
Trước khi bắt đầu bất kỳ tác vụ nào trong thư mục Cowork, đọc toàn bộ các tệp trong thư mục "ABOUT ME":
- about-me.md: tôi là ai, tôi dùng Claude để làm gì, cách tôi muốn làm việc
- my-company.md: mô hình làm việc indie/freelance, sản phẩm, mục tiêu tăng trưởng
- anti-ai-writing-style.md: quy tắc viết bắt buộc

Quy tắc chung:
1. Mọi văn bản phải tuân theo anti-ai-writing-style.md.
2. Yêu cầu chưa rõ thì dùng AskUserQuestion để hỏi trước khi làm.
3. Trước khi làm, xem thư mục TEMPLATES có mẫu phù hợp không. Có thì làm theo mẫu.
4. Lưu kết quả vào thư mục OUTPUTS, tên tệp dạng YYYY-MM-DD-ten-tac-vu.
5. Trả lời bằng tiếng Việt. Thuật ngữ kỹ thuật và code giữ nguyên tiếng Anh.
```

## Chọn mô hình (Bước 7)

- Tác vụ phức tạp (thiết kế kiến trúc app, gỡ lỗi khó, nghiên cứu nhiều nguồn): bản Opus mới nhất trong danh sách, bật Extended Thinking.
- Tác vụ ngắn (sửa câu chữ, tóm tắt ngắn, đổi tên biến): Sonnet, để tiết kiệm hạn mức.

## Phiên đầu tiên (Bước 9)

```text
Hãy đọc thư mục của tôi. Giúp tôi thực hiện [nhiệm vụ]. Sử dụng AskUserQuestion trước khi bắt đầu.
```

## Lưu template (Bước 10)

Sau một phiên làm tốt, gửi:

```text
Lưu cấu trúc và quy trình của phiên này thành một template trong thư mục TEMPLATES, đặt tên theo loại tác vụ (VD: growth-research.md). Ghi rõ: mục đích, thông tin đầu vào cần hỏi, các bước thực hiện, định dạng đầu ra.
```
