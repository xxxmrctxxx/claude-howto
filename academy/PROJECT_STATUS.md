# Trạng thái dự án — Claude HowTo Academy

Cập nhật: 02/11/2026. File này được cập nhật sau mỗi phase để phiên làm việc sau có thể tiếp tục.

## Tổng quan

| Phase | Nội dung | Trạng thái |
| --- | --- | --- |
| 1 | Phân tích yêu cầu, kiến trúc, sơ đồ website, thiết kế UI | Hoàn thành |
| 2 | Giao diện, điều hướng, lưu tiến độ | Hoàn thành |
| 3 | Lesson Engine + bài mẫu đầy đủ | Hoàn thành (bài “Prompt là gì?”) |
| 4 | Question Engine, chống trùng, kiểm tra | Hoàn thành |
| 5 | 5 Practice Labs | Hoàn thành |
| 6 | Nội dung các chương còn lại | Đang làm — Chương 1 hoàn thành (6/6 bài); các chương khác xem bảng |
| 7 | Gamification, cá nhân hoá, tìm kiếm, UX | Hoàn thành phần nền tảng |
| 8 | Kiểm thử tổng thể, chuẩn bị production | Có CI + bộ test; xem giới hạn |

## Nội dung đã phát hành

| Chương | Bài đã phát hành | Câu hỏi |
| --- | --- | --- |
| 1. Claude AI là gì? | Đủ 6/6 bài: AI hoạt động như thế nào? · Claude khác chatbot ra sao? · Các phiên bản và khả năng · Claude làm được gì? · Giới hạn của AI · Lỗi thường gặp | 6 × 15 = 90 |
| 3. Prompt Engineering | 1/8 bài: Prompt là gì? | 15 |
| Các chương khác | Đề cương hiển thị “Sắp ra mắt”, không có trang rỗng | — |
| **Tổng** | **7 bài đầy đủ 12 phần** | **105 câu, 0 cảnh báo trùng** |

Mỗi bài Chương 1 có infographic riêng và một mô phỏng tương tác thật: đoán từ tiếp theo (lấy mẫu theo xác suất minh hoạ), chatbot từ khoá chạy thật, chọn model theo hướng dẫn chính thức, phân loại 8 công việc, xếp tài liệu vào context window, kiểm chứng khẳng định với phiếu thông số.

Thông tin về model (danh sách, mô tả, độ trễ, giá API, context window, mốc kiến thức) được đối chiếu với trang Models overview của Anthropic ngày 02/11/2026 — cần đối chiếu lại khi Anthropic phát hành model mới.

## Tính năng đã kiểm thử tự động

- **Question Engine** (Vitest): trùng `questionId`, trùng nội dung chuẩn hoá, trùng fingerprint khi đảo đáp án, cùng khái niệm + mục tiêu + dạng tư duy, cảnh báo tương đồng từ vựng, chọn câu chưa gặp, tăng/giảm độ khó, ôn lại cùng kỹ năng sau khi sai, hết ngân hàng, khôi phục phiên sau khi tải lại (JSON round-trip).
- **Chấm điểm**: 12 dạng câu hỏi, rubric quy tắc (đáp án tham khảo luôn đạt rubric của chính nó).
- **Terminal Simulator**: pwd, ls, cd, mkdir, touch, cat, echo, rm, git init/status/add/commit/log/branch/switch; mọi nhiệm vụ hoàn thành được bằng lệnh gợi ý.
- **Debug Challenge**: code lỗi trượt test, lời giải qua hết test; lỗi cú pháp và vòng lặp vô hạn được xử lý.
- **Tiến độ**: XP chỉ tính một lần, mốc chương, streak, huy hiệu, dữ liệu hỏng được sao lưu.
- **Nội dung**: mọi bài phát hành đủ 12 phần, có hình và mô phỏng đăng ký, mỗi mục tiêu học tập có câu hỏi; mọi đáp án tham khảo đạt rubric của chính nó.
- **Số lượng**: 88 unit test (Vitest) và 121 E2E (Playwright, 3 test bỏ qua có chủ đích theo thiết bị).
- **E2E** (Playwright, desktop + mobile): 6 mô phỏng Chương 1, mốc hoàn thành chương (6 bài × 50 XP + 100 XP), điều hướng, 404, tìm kiếm bằng bàn phím, quiz thích ứng đủ 15 câu không lặp + reload giữa chừng, mô phỏng lắp ráp prompt, bài tập, ghi chú/bookmark/hoàn thành sau reload, 5 lab, dark mode, responsive (không tràn ngang), ngân sách hiệu năng trang chủ, axe WCAG 2.1 AA ở chế độ sáng và tối.

## Giới hạn hiện tại (trung thực)

- Chưa kết nối AI API: bài tự luận chấm bằng rubric quy tắc; có thể chấm thiếu câu trả lời đúng nhưng diễn đạt khác. Giao diện luôn hiện đáp án tham khảo và ghi rõ giới hạn.
- Tầng chống trùng thứ 5 chỉ so sánh từ vựng, không hiểu nghĩa.
- Số token là ước tính theo tỷ lệ Anthropic công bố, không phải tokenizer thật.
- Tiến độ chỉ lưu trong trình duyệt (localStorage); đổi máy cần xuất/nhập file JSON.
- Bản xem trước trong Project Builder chạy trong iframe sandbox nên localStorage của trang người học có thể bị chặn ở đó.
- Monaco được tự host (khoảng 25 MB trong `out/monaco`), chỉ tải ở trang Debug Challenge.

## Bước tiếp theo đề xuất

1. Chương 3: 7 bài còn lại (cấu trúc prompt, RCTCO, few-shot, chain-of-thought, prompt có cấu trúc, giảm hiểu nhầm, thực hành tối ưu) để hoàn thành chương.
2. Chương 5: bài “Terminal là gì?” dùng dạng câu hỏi `terminal-task` (engine và giao diện đã sẵn sàng, đã có test).
3. Chương 2 (Bắt đầu sử dụng Claude): cần đối chiếu giao diện hiện hành của ứng dụng Claude; không dùng ảnh chụp giả.
4. Cân nhắc adapter lưu trữ phía máy chủ khi cần đồng bộ nhiều thiết bị.

## Ghi chú cho phiên làm việc sau

- Kiểm tra Mermaid bằng hook Pele (`scripts/check_mermaid.py --strict`) chưa chạy được trong môi trường này vì mạng chặn tải bundle Pele; sơ đồ trong `ARCHITECTURE.md` đã được render thử thành công bằng thư viện Mermaid.
- Thay đổi chưa được commit/push: chờ người dùng cho phép (quy tắc trong `CLAUDE.md` gốc của repo).
