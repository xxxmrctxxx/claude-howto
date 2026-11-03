# Hướng dẫn biên soạn nội dung

## Triết lý

Học bằng hình ảnh → Hiểu bằng ví dụ → Thực hành → Kiểm tra → Ứng dụng thực tế.

- Viết 100% tiếng Việt; giữ thuật ngữ tiếng Anh (prompt, context, token, commit…) và giải thích ngay lần đầu xuất hiện.
- Câu ngắn, ví dụ đời thường trước, thuật ngữ sau.
- Ưu tiên ví dụ: văn phòng, Excel/Word, phân tích dữ liệu, QA/QC, máy biến áp, CAD, Android, website, tự động hoá. Mỗi ví dụ kỹ thuật có dữ liệu mẫu để thực hành.
- Không lặp đoạn văn, không bài rỗng, không nút giả.

## 12 phần bắt buộc của một bài

| # | Loại block | Nội dung |
| --- | --- | --- |
| 1 | `objectives` | Mục tiêu học tập (lấy từ `Lesson.objectives`) |
| 2 | `explain` | Giải thích cực kỳ đơn giản + ví dụ đời thường + thuật ngữ |
| 3 | `illustration` | Infographic SVG/HTML có ích, đăng ký trong `components/visuals/registry.tsx` |
| 4 | `diagram` | Sơ đồ nguyên lý bằng Mermaid, có `alt` mô tả bằng chữ |
| 5 | `compare` | Ví dụ sai và ví dụ đúng, kèm bài học rút ra |
| 6 | `simulation` | Mô phỏng tương tác, đăng ký trong `components/lesson/widgets.tsx` |
| 7 | `steps` | Hướng dẫn từng bước (có thể kèm code mẫu) |
| 8 | `exercise` | Bài tập có rubric quy tắc và đáp án tham khảo |
| 9 | `quiz` | Câu hỏi kiểm tra thích ứng |
| 10 | `answers` | Giải thích đáp án các câu đã làm |
| 11 | `summary` | Tóm tắt kiến thức |
| 12 | `mission` | Nhiệm vụ ứng dụng thực tế + checklist tự kiểm tra |

Test `tests/unit/content.test.ts` thất bại nếu bài đã phát hành thiếu bất kỳ phần nào.

## Hình minh hoạ và mô phỏng bằng dữ liệu

Bài mới nên khai báo trực tiếp trong file bài học thay vì viết component:

| Block | Trường | Các loại có sẵn |
| --- | --- | --- |
| `illustration` | `infographic` | `flow` (các bước), `compare` (cột tốt/xấu), `cards`, `table`, `annotated` (prompt có chú thích từng dòng) |
| `simulation` | `sim` | `classify` (xếp vào nhóm), `choose` (chọn phương án cho từng tình huống), `sequence` (sắp thứ tự), `highlight` (đánh dấu đoạn văn), `verify` (đối chiếu với nguồn), `terminal` (nhiệm vụ dòng lệnh mô phỏng), `prompt-lab` (sửa prompt 5 khối) |

Test nội dung kiểm tra mỗi mô phỏng giải được đúng như khai báo. Chỉ viết component riêng (`visual`, `widget`) khi các loại trên không thể hiện được ý tưởng.

## Cách thêm một bài học mới

1. Tạo `src/content/lessons/<id>-<slug>.ts` xuất một `Lesson`.
2. Tạo `src/content/questions/<id>.ts` xuất mảng `Question[]` theo `QUESTION_BANK_RULES.md`.
3. Đăng ký cả hai trong `src/content/registry.ts`.
4. Thêm `lessonId` vào mục tương ứng trong `src/content/course.ts`.
5. Nếu cần hình hoặc mô phỏng mới: thêm component và đăng ký trong registry tương ứng.
6. Chạy `npm test` rồi `npm run build`.

Không cần sửa trang bài học, sidebar, tìm kiếm hay trang tiến độ — chúng đọc dữ liệu từ registry.

## Định dạng chữ trong bài

Chuỗi trong bài hỗ trợ `**đậm**` và `` `mã` ``. Không dùng HTML.

## Độ chính xác

- Tính năng, phiên bản, lệnh, cách cài đặt: đối chiếu tài liệu chính thức tại [platform.claude.com/docs](https://platform.claude.com/docs) và [code.claude.com/docs](https://code.claude.com/docs/en/overview), hoặc các module đã được kiểm chứng trong repo này (ví dụ [10-cli](../10-cli/README.md)).
- Ghi nguồn vào `Lesson.sources` và ngày cập nhật vào `Lesson.updatedAt`.
- Thông tin dễ thay đổi (danh sách model, giá) phải ghi rõ ngày đối chiếu và dẫn tới trang chính thức.
- Không dùng ảnh chụp giao diện giả rồi trình bày như giao diện chính thức. Hình minh hoạ tự vẽ phải trông như sơ đồ, không như ảnh chụp màn hình.

## Trung thực về mô phỏng

- Terminal Simulator luôn gắn nhãn “MÔ PHỎNG”.
- Số token là ước tính; ghi rõ “ước tính” và cách tính.
- Rubric quy tắc phải ghi “không phải AI chấm” và luôn hiện đáp án tham khảo.
