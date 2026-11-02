@AGENTS.md

# Claude HowTo Academy — ghi chú cho Claude Code

Ứng dụng Next.js (static export) trong thư mục `academy/` của repo claude-howto. Đọc theo thứ tự khi bắt đầu phiên mới:

1. `PROJECT_STATUS.md` — đang ở phase nào, việc tiếp theo
2. `ARCHITECTURE.md` — lớp nội dung / engine / lưu trữ / UI
3. `CONTENT_GUIDELINES.md` và `QUESTION_BANK_RULES.md` — khi thêm bài hoặc câu hỏi

## Lệnh

```bash
npm run dev            # dev server
npm test               # Vitest (nhanh, chạy sau mỗi thay đổi engine/nội dung)
npm run lint && npm run typecheck
npm run build && npm run test:e2e   # Playwright trên bản build tĩnh
```

## Quy tắc

- Nội dung là dữ liệu trong `src/content/`; không viết nội dung bài học trong component.
- Engine trong `src/lib/engine/` phải là hàm thuần và có unit test.
- Không tuyên bố có AI chấm bài; mô phỏng phải được gắn nhãn.
- Thông tin về Claude phải đối chiếu tài liệu chính thức và ghi vào `Lesson.sources`.
- Commit theo dạng `type(academy): subject`.
