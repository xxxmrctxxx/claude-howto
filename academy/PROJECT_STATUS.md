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
| 6 | Nội dung các chương còn lại | Đang làm — Chương 1 (6/6), Chương 2 (7/7), Chương 3 (8/8), Chương 4 (7/7), Chương 5 (9/9), Chương 6 (9/9), Chương 7 (8/8), Chương 8 (8/8), Chương 9 (8/8) hoàn thành; các chương khác xem bảng |
| 7 | Gamification, cá nhân hoá, tìm kiếm, UX | Hoàn thành phần nền tảng |
| 8 | Kiểm thử tổng thể, chuẩn bị production | Có CI + bộ test; xem giới hạn |

## Nội dung đã phát hành

| Chương | Bài đã phát hành | Câu hỏi |
| --- | --- | --- |
| 1. Claude AI là gì? | Đủ 6/6 bài: AI hoạt động như thế nào? · Claude khác chatbot ra sao? · Các phiên bản và khả năng · Claude làm được gì? · Giới hạn của AI · Lỗi thường gặp | 6 × 15 = 90 |
| 2. Bắt đầu sử dụng Claude | Đủ 7/7 bài: Tạo tài khoản · Tìm hiểu giao diện · Tạo cuộc hội thoại · Tải file và hình ảnh · Sử dụng Projects · Sử dụng Artifacts · Quản lý hội thoại và ngữ cảnh | 7 × 15 = 105 |
| 3. Prompt Engineering | Đủ 8/8 bài: Prompt là gì? · Cấu trúc prompt tốt · RCTCO · Few-shot · Chain-of-thought · Prompt có cấu trúc · Giảm hiểu nhầm · Thực hành tối ưu | 8 × 15 = 120 |
| 4. Claude Artifacts | Đủ 7/7 bài: Artifacts là gì? · Tạo website · Tạo ứng dụng tương tác · Tạo biểu đồ · Tạo dashboard · Chỉnh sửa và kiểm tra sản phẩm · Xuất và chia sẻ kết quả | 7 × 15 = 105 |
| 5. Claude Code cơ bản | Đủ 9/9 bài: Claude Code là gì? · Terminal là gì? · Cài đặt môi trường · Cài đặt Claude Code · Đăng nhập và xác thực · Mở dự án · Giải thích file và thư mục · Tạo ứng dụng đầu tiên · Các lệnh cơ bản | 9 × 15 = 135 |
| 6. Claude Code nâng cao | Đủ 9/9 bài: Quản lý context · Lập kế hoạch trước khi code · Đọc và chỉnh sửa nhiều file · Debug · Git và GitHub · Kiểm thử tự động · Refactoring · Code review · Phân chia tác vụ | 9 × 15 = 135 |
| 7. Skills, MCP và công cụ mở rộng | Đủ 8/8 bài: Skill là gì? · MCP là gì? · Khi nào cần dùng? · Cách cài đặt · Cách cấu hình · Cách kiểm tra kết nối · Các lỗi phổ biến · Ví dụ sử dụng thực tế | 8 × 15 = 120 |
| 8. Tối ưu token và chi phí | Đủ 8/8 bài: Token là gì? · Context window · Vì sao tiêu hao token? · Cách chia công việc · Sử dụng tài liệu dự án · Tránh đọc file không cần thiết · So sánh phương pháp làm việc · Theo dõi chi phí khi có dữ liệu | 8 × 15 = 120 |
| 9. Xây dựng website bằng Claude | Đủ 8/8 bài: Phân tích yêu cầu · Thiết kế giao diện · Tạo project · Xây dựng frontend · Xây dựng backend · Kiểm thử · Sửa lỗi · Deploy | 8 × 15 = 120 |
| Các chương khác | Đề cương hiển thị “Sắp ra mắt”, không có trang rỗng | — |
| **Tổng** | **70 bài đầy đủ 12 phần (9 chương trọn vẹn)** | **1.050 câu, 0 cảnh báo trùng chưa duyệt** |

Chương 3 dùng hạ tầng **bài học thuần dữ liệu**: infographic (`flow`, `compare`, `cards`, `table`, `annotated`) và mô phỏng (`classify`, `choose`, `sequence`, `highlight`, `verify`, `terminal`, `prompt-lab`) được khai báo ngay trong file bài học, không cần viết component mới. Nội dung đối chiếu trang Prompting best practices và Prompt engineering overview của Anthropic (03/11/2026).

Chương 2 đối chiếu Claude Help Center ngày 03/11/2026: Get started, Log in, Verify your phone number, Where can I access Claude, Upload files, What are projects, Create and manage projects, RAG for projects, Artifacts, Delete or rename, Share and unshare chats, Chat search and memory, Incognito chats, Usage and length limits. Giao diện được mô tả bằng **sơ đồ chữ**, không dùng ảnh chụp màn hình giả; mỗi bài nhắc rằng vị trí nút và giới hạn (500 MB/file, 20 file/chat, PDF ≤ 1000 trang, Free tối đa 5 project, giới hạn theo phiên 5 giờ) có thể thay đổi.

Chương 4 đối chiếu Claude Help Center ngày 03/11/2026: What are artifacts, Share artifacts, Get started with Claude Dashboards, Get started with Claude Docs, Create and edit files, Visual and interactive content, Use artifacts with a keyboard or screen reader. Các phần về cách viết yêu cầu (trang web, công cụ, biểu đồ) là hướng dẫn thực hành của khoá học, ghi rõ là ví dụ tự soạn. Lưu ý thay đổi gần đây: artifact kiểu cũ (trước 16/09/2026) không tạo mới được; Dashboards đang beta (Pro trở lên, Enterprise cần chủ sở hữu bật).

Chương 5 đối chiếu tài liệu Claude Code chính thức ngày 03/11/2026 (Quickstart, Advanced setup, Terminal guide, Authentication, How Claude Code works, Security, Memory, Interactive mode, Best practices). Hai bài dùng terminal mô phỏng (preset mới `claude-project`: dự án mẫu đã commit, lệnh `claude` chỉ in giải thích có nhãn MÔ PHỎNG); câu hỏi `terminal-task` đầu tiên được chấm trên shell mô phỏng. Yêu cầu hệ thống, lệnh cài và thứ tự ưu tiên xác thực dễ thay đổi — cần đối chiếu lại định kỳ.

Chương 6 đối chiếu ngày 03/11/2026: Common workflows, Permission modes (Plan), Checkpointing, Review locally with /code-review, Subagents, Best practices. Bài Git dùng terminal mô phỏng (nhánh, staging, commit, log) và có câu `terminal-task` thứ hai.

Chương 7 đối chiếu ngày 03/11/2026: Extend Claude with skills (frontmatter, nơi đặt, ưu tiên, Troubleshooting), Connect Claude Code to tools via MCP (transport, phạm vi, `.mcp.json`, biến môi trường, trạng thái, giới hạn output), Extend Claude Code (so sánh tính năng, chi phí context, Build your setup over time), Automate workflows with hooks, Install and manage plugins, Settings files and precedence. Bài Cài đặt có terminal mô phỏng tạo skill dự án và câu `terminal-task` thứ ba (skill cá nhân); shell mô phỏng in gợi ý MÔ PHỎNG cho `claude mcp …` và `claude plugin …` thay vì giả lập kết nối. Tên lệnh, trạng thái và giới hạn (10.000/25.000 token) dễ thay đổi theo phiên bản — cần đối chiếu lại định kỳ.

Chương 9 đi trọn một dự án mẫu (web theo dõi lỗi QA `web-loi-qa`) và đối chiếu Best practices của Claude Code ngày 03/11/2026 (phỏng vấn → SPEC.md → phiên mới, be ambitious, dán ảnh thiết kế, phép kiểm tra cho Claude, /goal, Stop hook, /code-review, /verify, viết test tái hiện rồi sửa, pipe log vào claude -p). Bài Deploy dùng workflow `pages.yml` thật của repo làm ví dụ; tài liệu GitHub Pages (docs.github.com) không truy cập được từ phiên làm việc nên bài không nêu giới hạn/gói của GitHub Pages. Bài Tạo project có terminal mô phỏng dựng khung dự án và câu `terminal-task` thứ tư (.gitignore + commit).

Chương 8 đối chiếu ngày 03/11/2026: trang Manage costs, Memory, Permissions, Best practices của Claude Code và Pricing, Context windows, Token counting của Anthropic. Giá theo MTok (Opus 5.5 $4/$20, Sonnet 5.5 $2/$10, Haiku 5.5 $0,10/$0,50, Fable 5.1 $10/$50; cache, Batch −50%) và số liệu tham khảo ($13/ngày/lập trình viên) **dễ thay đổi** — mọi chỗ dùng đều ghi ngày và ghi rõ là ước tính.

**Hiệu năng:** khi thêm Chương 8, JS trang chủ vượt ngân sách 1,5 MB vì nội dung mọi bài bị đóng gói vào mọi trang. Đã tách: client chỉ dùng `content/catalog.ts` (từ đề cương), ngân hàng câu hỏi truyền từ trang server, tìm kiếm tải chỉ mục khi gõ. Đo lại: trang chủ 691 KB (trước 1.291 KB với ít bài hơn), không còn tăng theo số bài. Bộ chống trùng câu hỏi cũng được tối ưu (tính trước đặc trưng mỗi câu, bỏ qua cặp chắc chắn dưới ngưỡng) — từ hơn 5 giây xuống dưới 1 giây cho 465 câu.

Mỗi bài Chương 1 có infographic riêng và một mô phỏng tương tác thật: đoán từ tiếp theo (lấy mẫu theo xác suất minh hoạ), chatbot từ khoá chạy thật, chọn model theo hướng dẫn chính thức, phân loại 8 công việc, xếp tài liệu vào context window, kiểm chứng khẳng định với phiếu thông số.

Thông tin về model (danh sách, mô tả, độ trễ, giá API, context window, mốc kiến thức) được đối chiếu với trang Models overview của Anthropic ngày 02/11/2026 — cần đối chiếu lại khi Anthropic phát hành model mới.

## Tính năng đã kiểm thử tự động

- **Question Engine** (Vitest): trùng `questionId`, trùng nội dung chuẩn hoá, trùng fingerprint khi đảo đáp án, cùng khái niệm + mục tiêu + dạng tư duy, cảnh báo tương đồng từ vựng, chọn câu chưa gặp, tăng/giảm độ khó, ôn lại cùng kỹ năng sau khi sai, hết ngân hàng, khôi phục phiên sau khi tải lại (JSON round-trip).
- **Chấm điểm**: 12 dạng câu hỏi, rubric quy tắc (đáp án tham khảo luôn đạt rubric của chính nó).
- **Terminal Simulator**: pwd, ls, cd, mkdir, touch, cat, echo, rm, git init/status/add/commit/log/branch/switch; `claude`, `claude mcp …`, `claude plugin …` chỉ in gợi ý có nhãn MÔ PHỎNG; mọi nhiệm vụ hoàn thành được bằng lệnh gợi ý.
- **Debug Challenge**: code lỗi trượt test, lời giải qua hết test; lỗi cú pháp và vòng lặp vô hạn được xử lý.
- **Tiến độ**: XP chỉ tính một lần, mốc chương, streak, huy hiệu, dữ liệu hỏng được sao lưu.
- **Nội dung**: mọi bài phát hành đủ 12 phần, có hình và mô phỏng đăng ký, mỗi mục tiêu học tập có câu hỏi; mọi đáp án tham khảo đạt rubric của chính nó.
- **Bài tập**: đáp án tham khảo đạt rubric của chính nó, còn khung gợi ý (placeholder) thì không — chống rubric quá dễ.
- **Mô phỏng dữ liệu**: mỗi mô phỏng giải được đúng như khai báo (nhãn tồn tại, nhiệm vụ terminal hoàn thành bằng lệnh gợi ý, prompt-lab: đáp án ≥ 80%, khung ban đầu < 80%).
- **Câu hỏi terminal-task**: lệnh tham khảo đạt mọi điều kiện, và trạng thái ban đầu chưa đạt sẵn.
- **Số lượng**: 423 unit test (Vitest) và 311 E2E (Playwright, 3 test bỏ qua có chủ đích theo thiết bị).
- **E2E** (Playwright, desktop + mobile): 6 mô phỏng Chương 1, mốc hoàn thành chương (6 bài × 50 XP + 100 XP), điều hướng, 404, tìm kiếm bằng bàn phím, quiz thích ứng đủ 15 câu không lặp + reload giữa chừng, mô phỏng lắp ráp prompt, bài tập, ghi chú/bookmark/hoàn thành sau reload, 5 lab, dark mode, responsive (không tràn ngang), ngân sách hiệu năng trang chủ, axe WCAG 2.1 AA ở chế độ sáng và tối; Chương 5: 9 bài đủ 12 phần + sơ đồ, 2 terminal mô phỏng, đối chiếu nguồn (verify), chọn tình huống, phân loại, sắp thứ tự, và một câu terminal-task chấm trong quiz; Chương 8: 8 bài đủ 12 phần + sơ đồ, mọi mô phỏng giải được (phân loại, đối chiếu nguồn, đánh dấu, chọn tình huống) và XP mô phỏng tính đúng một lần. Chương 6: 9 bài đủ 12 phần + sơ đồ, mọi mô phỏng giải được (gồm terminal git) và câu terminal-task với nhánh + commit. Chương 7: 8 bài đủ 12 phần + sơ đồ, mọi mô phỏng giải được (đối chiếu nguồn, chọn tình huống, phân loại 6 nhóm, terminal tạo SKILL.md, đánh dấu, sắp thứ tự). Chương 2: 7 bài đủ 12 phần + sơ đồ, mọi mô phỏng giải được (chọn tình huống, đối chiếu nguồn, phân loại). Chương 4: 7 bài đủ 12 phần + sơ đồ, mọi mô phỏng giải được (chọn tình huống, đánh dấu, phân loại, đối chiếu nguồn, sắp thứ tự). Chương 9: 8 bài đủ 12 phần + sơ đồ, mọi mô phỏng giải được (gồm terminal dựng khung dự án và commit).
- **Chặn bundle phình to**: test tĩnh từ chối mọi file `"use client"` import registry hoặc chỉ mục tìm kiếm; test kiểm tra catalog khớp registry (tiêu đề, link, 12 mã phần).

## Giới hạn hiện tại (trung thực)

- Chưa kết nối AI API: bài tự luận chấm bằng rubric quy tắc; có thể chấm thiếu câu trả lời đúng nhưng diễn đạt khác. Giao diện luôn hiện đáp án tham khảo và ghi rõ giới hạn.
- Tầng chống trùng thứ 5 chỉ so sánh từ vựng, không hiểu nghĩa.
- Số token là ước tính theo tỷ lệ Anthropic công bố, không phải tokenizer thật.
- Tiến độ chỉ lưu trong trình duyệt (localStorage); đổi máy cần xuất/nhập file JSON.
- Bản xem trước trong Project Builder chạy trong iframe sandbox nên localStorage của trang người học có thể bị chặn ở đó.
- Monaco được tự host (khoảng 25 MB trong `out/monaco`), chỉ tải ở trang Debug Challenge.

## Bước tiếp theo đề xuất

Thứ tự còn lại (20 bài: Chương 10 — 6, Chương 11 — 7, Chương 12 — 7), kiểm thử trước khi sang chương sau:

1. Chương 10–12: ứng dụng thực tế, workflow tự động hoá, dự án tốt nghiệp — xây trên Project Builder, Debug Challenge và dự án mẫu web-loi-qa của Chương 9. Chương 11 (API, AI Agent) cần đối chiếu tài liệu Claude API/Agent SDK hiện hành.
2. Cân nhắc adapter lưu trữ phía máy chủ khi cần đồng bộ nhiều thiết bị.

## Triển khai

- GitHub Pages: `pages.yml` build academy với `ACADEMY_BASE_PATH=<base path của Pages>/academy` và chép vào `site/academy/`. Đã chạy thử bản build dưới `/claude-howto/academy/` trên máy chủ tĩnh: điều hướng, Mermaid, Monaco, terminal hoạt động, không có lỗi tải file.
- Đã bật Pages; site chạy tại `https://xxxmrctxxx.github.io/claude-howto/academy/`. Mỗi lần merge thay đổi trong `academy/` vào `main` sẽ tự deploy lại.

## Ghi chú cho phiên làm việc sau

- Kiểm tra Mermaid bằng hook Pele (`scripts/check_mermaid.py --strict`) chưa chạy được trong môi trường này vì mạng chặn tải bundle Pele; sơ đồ trong `ARCHITECTURE.md` đã được render thử thành công bằng thư viện Mermaid.
