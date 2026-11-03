# Trạng thái dự án — Claude HowTo Academy

Cập nhật: 03/11/2026. File này được cập nhật sau mỗi phase để phiên làm việc sau có thể tiếp tục.

## Tổng quan

| Phase | Nội dung | Trạng thái |
| --- | --- | --- |
| 1 | Phân tích yêu cầu, kiến trúc, sơ đồ website, thiết kế UI | Hoàn thành |
| 2 | Giao diện, điều hướng, lưu tiến độ | Hoàn thành |
| 3 | Lesson Engine + bài mẫu đầy đủ | Hoàn thành (bài “Prompt là gì?”) |
| 4 | Question Engine, chống trùng, kiểm tra | Hoàn thành |
| 5 | 5 Practice Labs | Hoàn thành |
| 6 | Nội dung các chương còn lại | Đang làm — Chương 1 (6/6), Chương 3 (8/8), Chương 5 (9/9) hoàn thành; các chương khác xem bảng |
| 7 | Gamification, cá nhân hoá, tìm kiếm, UX | Hoàn thành phần nền tảng |
| 8 | Kiểm thử tổng thể, chuẩn bị production | Có CI + bộ test; xem giới hạn |

## Nội dung đã phát hành

| Chương | Bài đã phát hành | Câu hỏi |
| --- | --- | --- |
| 1. Claude AI là gì? | Đủ 6/6 bài: AI hoạt động như thế nào? · Claude khác chatbot ra sao? · Các phiên bản và khả năng · Claude làm được gì? · Giới hạn của AI · Lỗi thường gặp | 6 × 15 = 90 |
| 3. Prompt Engineering | Đủ 8/8 bài: Prompt là gì? · Cấu trúc prompt tốt · RCTCO · Few-shot · Chain-of-thought · Prompt có cấu trúc · Giảm hiểu nhầm · Thực hành tối ưu | 8 × 15 = 120 |
| 5. Claude Code cơ bản | Đủ 9/9 bài: Claude Code là gì? · Terminal là gì? · Cài đặt môi trường · Cài đặt Claude Code · Đăng nhập và xác thực · Mở dự án · Giải thích file và thư mục · Tạo ứng dụng đầu tiên · Các lệnh cơ bản | 9 × 15 = 135 |
| Các chương khác | Đề cương hiển thị “Sắp ra mắt”, không có trang rỗng | — |
| **Tổng** | **23 bài đầy đủ 12 phần (3 chương trọn vẹn)** | **345 câu, 0 cảnh báo trùng chưa duyệt** |

Chương 3 dùng hạ tầng **bài học thuần dữ liệu**: infographic (`flow`, `compare`, `cards`, `table`, `annotated`) và mô phỏng (`classify`, `choose`, `sequence`, `highlight`, `verify`, `terminal`, `prompt-lab`) được khai báo ngay trong file bài học, không cần viết component mới. Nội dung đối chiếu trang Prompting best practices và Prompt engineering overview của Anthropic (03/11/2026).

Chương 5 đối chiếu tài liệu Claude Code chính thức ngày 03/11/2026 (Quickstart, Advanced setup, Terminal guide, Authentication, How Claude Code works, Security, Memory, Interactive mode, Best practices). Hai bài dùng terminal mô phỏng (preset mới `claude-project`: dự án mẫu đã commit, lệnh `claude` chỉ in giải thích có nhãn MÔ PHỎNG); câu hỏi `terminal-task` đầu tiên được chấm trên shell mô phỏng. Yêu cầu hệ thống, lệnh cài và thứ tự ưu tiên xác thực dễ thay đổi — cần đối chiếu lại định kỳ.

Mỗi bài Chương 1 có infographic riêng và một mô phỏng tương tác thật: đoán từ tiếp theo (lấy mẫu theo xác suất minh hoạ), chatbot từ khoá chạy thật, chọn model theo hướng dẫn chính thức, phân loại 8 công việc, xếp tài liệu vào context window, kiểm chứng khẳng định với phiếu thông số.

Thông tin về model (danh sách, mô tả, độ trễ, giá API, context window, mốc kiến thức) được đối chiếu với trang Models overview của Anthropic ngày 02/11/2026 — cần đối chiếu lại khi Anthropic phát hành model mới.

## Tính năng đã kiểm thử tự động

- **Question Engine** (Vitest): trùng `questionId`, trùng nội dung chuẩn hoá, trùng fingerprint khi đảo đáp án, cùng khái niệm + mục tiêu + dạng tư duy, cảnh báo tương đồng từ vựng, chọn câu chưa gặp, tăng/giảm độ khó, ôn lại cùng kỹ năng sau khi sai, hết ngân hàng, khôi phục phiên sau khi tải lại (JSON round-trip).
- **Chấm điểm**: 12 dạng câu hỏi, rubric quy tắc (đáp án tham khảo luôn đạt rubric của chính nó).
- **Terminal Simulator**: pwd, ls, cd, mkdir, touch, cat, echo, rm, git init/status/add/commit/log/branch/switch; mọi nhiệm vụ hoàn thành được bằng lệnh gợi ý.
- **Debug Challenge**: code lỗi trượt test, lời giải qua hết test; lỗi cú pháp và vòng lặp vô hạn được xử lý.
- **Tiến độ**: XP chỉ tính một lần, mốc chương, streak, huy hiệu, dữ liệu hỏng được sao lưu.
- **Nội dung**: mọi bài phát hành đủ 12 phần, có hình và mô phỏng đăng ký, mỗi mục tiêu học tập có câu hỏi; mọi đáp án tham khảo đạt rubric của chính nó.
- **Bài tập**: đáp án tham khảo đạt rubric của chính nó, còn khung gợi ý (placeholder) thì không — chống rubric quá dễ.
- **Mô phỏng dữ liệu**: mỗi mô phỏng giải được đúng như khai báo (nhãn tồn tại, nhiệm vụ terminal hoàn thành bằng lệnh gợi ý, prompt-lab: đáp án ≥ 80%, khung ban đầu < 80%).
- **Câu hỏi terminal-task**: lệnh tham khảo đạt mọi điều kiện, và trạng thái ban đầu chưa đạt sẵn.
- **Số lượng**: 184 unit test (Vitest) và 179 E2E (Playwright, 3 test bỏ qua có chủ đích theo thiết bị).
- **E2E** (Playwright, desktop + mobile): 6 mô phỏng Chương 1, mốc hoàn thành chương (6 bài × 50 XP + 100 XP), điều hướng, 404, tìm kiếm bằng bàn phím, quiz thích ứng đủ 15 câu không lặp + reload giữa chừng, mô phỏng lắp ráp prompt, bài tập, ghi chú/bookmark/hoàn thành sau reload, 5 lab, dark mode, responsive (không tràn ngang), ngân sách hiệu năng trang chủ, axe WCAG 2.1 AA ở chế độ sáng và tối; Chương 5: 9 bài đủ 12 phần + sơ đồ, 2 terminal mô phỏng, đối chiếu nguồn (verify), chọn tình huống, phân loại, sắp thứ tự, và một câu terminal-task chấm trong quiz.

## Giới hạn hiện tại (trung thực)

- Chưa kết nối AI API: bài tự luận chấm bằng rubric quy tắc; có thể chấm thiếu câu trả lời đúng nhưng diễn đạt khác. Giao diện luôn hiện đáp án tham khảo và ghi rõ giới hạn.
- Tầng chống trùng thứ 5 chỉ so sánh từ vựng, không hiểu nghĩa.
- Số token là ước tính theo tỷ lệ Anthropic công bố, không phải tokenizer thật.
- Tiến độ chỉ lưu trong trình duyệt (localStorage); đổi máy cần xuất/nhập file JSON.
- Bản xem trước trong Project Builder chạy trong iframe sandbox nên localStorage của trang người học có thể bị chặn ở đó.
- Monaco được tự host (khoảng 25 MB trong `out/monaco`), chỉ tải ở trang Debug Challenge.

## Bước tiếp theo đề xuất

Thứ tự còn lại (60 bài), mỗi chương một PR, kiểm thử trước khi sang chương sau:

1. Chương 8 — Tối ưu token và chi phí (8 bài): nguồn Context windows, Models overview, Token counting.
2. Chương 6 — Claude Code nâng cao (9 bài), Chương 7 — Skills, MCP (8 bài): nguồn module `03-skills`, `05-mcp`… của repo.
3. Chương 2 — Bắt đầu sử dụng Claude (7 bài) và Chương 4 — Artifacts (7 bài): cần đối chiếu Help Center hiện hành; không dùng ảnh chụp giả.
4. Chương 9–12: dự án thực hành, xây trên Project Builder và Debug Challenge.
5. Cân nhắc adapter lưu trữ phía máy chủ khi cần đồng bộ nhiều thiết bị.

## Triển khai

- GitHub Pages: `pages.yml` build academy với `ACADEMY_BASE_PATH=<base path của Pages>/academy` và chép vào `site/academy/`. Đã chạy thử bản build dưới `/claude-howto/academy/` trên máy chủ tĩnh: điều hướng, Mermaid, Monaco, terminal hoạt động, không có lỗi tải file.
- Đã bật Pages; site chạy tại `https://xxxmrctxxx.github.io/claude-howto/academy/`. Mỗi lần merge thay đổi trong `academy/` vào `main` sẽ tự deploy lại.

## Ghi chú cho phiên làm việc sau

- Kiểm tra Mermaid bằng hook Pele (`scripts/check_mermaid.py --strict`) chưa chạy được trong môi trường này vì mạng chặn tải bundle Pele; sơ đồ trong `ARCHITECTURE.md` đã được render thử thành công bằng thư viện Mermaid.
