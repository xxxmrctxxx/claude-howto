# Quy tắc ngân hàng câu hỏi

Áp dụng cho mọi file trong `src/content/questions/`. Bộ kiểm tra tự động nằm ở `src/lib/engine/question/validate.ts`; test `tests/unit/question-engine.test.ts` sẽ thất bại nếu ngân hàng vi phạm.

## Trường bắt buộc

| Trường | Ý nghĩa |
| --- | --- |
| `questionId` | Duy nhất toàn hệ thống, dạng `<lessonId>-qNN` |
| `lessonId` | Bài học sở hữu câu hỏi |
| `conceptId` | Phải nằm trong `Lesson.concepts` |
| `learningObjective` | Phải là `id` trong `Lesson.objectives` |
| `difficulty` | `beginner`, `intermediate` hoặc `advanced` |
| `thinkingSkill` | Dạng tư duy: `remember`, `understand`, `apply`, `analyze`, `evaluate`, `create` |
| `questionType` | Một trong 12 dạng (xem dưới) |
| `explanation` | Giải thích vì sao đúng/sai (tối thiểu 20 ký tự) |
| Đáp án hoặc rubric | `answer`, `items`, `pairs`, `segments`, `blanks`, `rubric` + `referenceAnswer`, hoặc `checks` |
| `canonicalFingerprint` | **Tự động tính** khi nạp ngân hàng — không viết tay |

## 12 dạng câu hỏi

`single-choice`, `multiple-choice`, `true-false`, `fill-blank`, `ordering`, `matching`, `find-error`, `fix-prompt`, `predict-output`, `terminal-task`, `scenario`, `real-task`.

## Chống trùng lặp theo 5 tầng

1. **questionId** trùng → lỗi.
2. **Nội dung chuẩn hoá** (bỏ dấu, chữ hoa, dấu câu, từ đệm như “là”, “gì”, “vậy”) trùng trong cùng dạng câu hỏi → lỗi.
3. **Canonical fingerprint** trùng → lỗi. Fingerprint không phụ thuộc thứ tự đáp án, nên đảo vị trí đáp án không tạo ra câu mới.
4. **Khoá ngữ nghĩa** `conceptId + learningObjective + thinkingSkill` trùng trong một bài → lỗi: hai câu đang hỏi cùng một ý.
5. **Độ tương đồng từ vựng** (trigram ký tự + Dice theo từ) ≥ 0,90 cùng dạng → lỗi; ≥ 0,72 → cảnh báo cần người duyệt. Người duyệt có thể ghi `reviewedDistinctFrom: ["<id>"]` nếu xác nhận hai câu khác ý.

Giới hạn trung thực: tầng 5 chỉ là so sánh từ vựng, **không** hiểu nghĩa. Hai câu cùng ý nhưng dùng từ hoàn toàn khác có thể không bị phát hiện ở tầng này — đó là lý do tầng 4 là bắt buộc. Không tuyên bố bảo đảm tuyệt đối không trùng nghĩa.

## Khi người học làm bài

- Mỗi lượt chỉ lấy câu **chưa từng gặp** — kiểm tra theo id, fingerprint và khoá ngữ nghĩa trong lịch sử.
- Trong một lượt, ưu tiên khái niệm chưa hỏi.
- Đúng 2 câu liên tiếp → lên mức khó hơn; sai 2 câu liên tiếp → xuống một mức.
- Trả lời sai → hiện giải thích, câu tiếp theo là câu **khác** cùng khái niệm (hoặc cùng dạng tư duy).
- Hết câu mới → thông báo rõ và chuyển sang bài thực hành vận dụng. Có chế độ “Ôn lại câu từng sai” nhưng **không tính XP**.

## Tiêu chuẩn nội dung

- Tối thiểu 15 câu có ý nghĩa khác nhau cho mỗi bài phát hành đầy đủ; nếu nội dung quá hẹp, giảm số câu và ghi lý do trong `PROJECT_STATUS.md`.
- Mỗi mục tiêu học tập có ít nhất một câu hỏi.
- Có đủ 3 mức độ khó.
- Mỗi lựa chọn sai nên có `feedback` giải thích vì sao sai.
- Câu tự luận (`fix-prompt`, `real-task`) phải có rubric ≥ 3 tiêu chí và đáp án tham khảo **đạt chính rubric đó** (có test kiểm tra).
- Thông tin về Claude phải đối chiếu tài liệu chính thức của Anthropic.
