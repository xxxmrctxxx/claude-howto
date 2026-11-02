# Claude HowTo Academy

Website học Claude AI và Claude Code bằng tiếng Việt: học bằng hình ảnh, hiểu bằng ví dụ, thực hành, kiểm tra và ứng dụng thực tế.

Đây là ứng dụng web nằm trong repo [claude-howto](../README.md). Nội dung tham chiếu các module của repo và tài liệu chính thức của Anthropic.

## Tính năng

- Lộ trình 12 chương; bài đã phát hành có đủ 12 phần (mục tiêu → nhiệm vụ thực tế).
- Trang học 3 khu vực trên máy tính (mục lục · bài học · thực hành/gợi ý/ghi chú/câu hỏi), chuyển thành tab trên điện thoại.
- Question Engine: 12 dạng câu hỏi, chống trùng 5 tầng, độ khó thích ứng, ôn lại đúng kỹ năng khi trả lời sai.
- 5 Practice Labs: Prompt Builder, Terminal Simulator (có sơ đồ Git), Debug Challenge (chạy test thật trong Web Worker), Project Builder, Token Optimization.
- Cá nhân hoá: kiểm tra đầu vào, đề xuất lộ trình, tiến độ, kỹ năng còn yếu, ghi chú, bookmark, lịch sử, tìm kiếm.
- Gamification: XP (chỉ tính lần đầu), cấp độ, huy hiệu, chuỗi ngày học.
- Dark/Light mode, responsive, kiểm tra accessibility bằng axe.

## Chạy dự án

Yêu cầu Node.js 20 trở lên.

```bash
cd academy
npm install
npm run dev          # http://localhost:3000
```

Bản production (site tĩnh trong `out/`):

```bash
npm run build
npm run serve        # http://localhost:4321
```

## Kiểm thử

```bash
npm run lint
npm run typecheck
npm test             # Vitest: engine, nội dung, tiến độ
npm run test:e2e     # Playwright: cần chạy npm run build trước
```

## Tài liệu dự án

- [ARCHITECTURE.md](ARCHITECTURE.md) — kiến trúc, schema, quyết định kỹ thuật
- [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) — cấu trúc 12 phần, cách thêm bài
- [QUESTION_BANK_RULES.md](QUESTION_BANK_RULES.md) — quy tắc câu hỏi và chống trùng
- [PROJECT_STATUS.md](PROJECT_STATUS.md) — tiến độ theo phase, giới hạn, bước tiếp theo
