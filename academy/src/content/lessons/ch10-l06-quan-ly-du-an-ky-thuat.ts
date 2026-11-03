import type { Lesson } from "@/lib/types/content";

const WP = "https://support.claude.com/en/articles/9517075-what-are-projects";
const DO = "https://support.claude.com/en/articles/16923645-get-started-with-claude-docs";
const SH = "https://support.claude.com/en/articles/9547008-share-artifacts";

export const lessonQuanLyDuAnKyThuat: Lesson = {
  id: "ch10-l06",
  chapterId: "ch10",
  slug: "quan-ly-du-an-ky-thuat",
  title: "Ứng dụng quản lý dự án kỹ thuật",
  subtitle: "Ghép các công cụ đã học thành “trạm điều hành” cho một dự án kỹ thuật: Project chứa hồ sơ, Docs cho biên bản, artifact theo dõi mốc và rủi ro, báo cáo tuần có cấu trúc — kèm quy tắc bảo mật và kiểm chứng.",
  level: "advanced",
  estimatedMinutes: 35,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Tổ chức dự án kỹ thuật trên Claude: Project chứa tài liệu nền và hướng dẫn; mỗi chủ đề một chat." },
    { id: "o2", text: "Dựng công cụ theo dõi: mốc tiến độ, danh sách rủi ro (khả năng × ảnh hưởng), nhật ký quyết định." },
    { id: "o3", text: "Tạo báo cáo tuần từ biên bản họp theo cấu trúc cố định, số liệu có nguồn, việc mở có người và hạn." },
    { id: "o4", text: "Quản trị: tài liệu mật theo chính sách công ty, chia sẻ đúng người, kiểm chứng số liệu trước khi gửi lãnh đạo." },
  ],
  concepts: [
    { id: "project-hub", label: "Project làm trạm điều hành" },
    { id: "topic-chats", label: "Mỗi chủ đề một chat" },
    { id: "milestones", label: "Mốc tiến độ" },
    { id: "risk-register", label: "Danh sách rủi ro" },
    { id: "risk-score", label: "Điểm rủi ro" },
    { id: "decision-log", label: "Nhật ký quyết định" },
    { id: "weekly-report", label: "Báo cáo tuần" },
    { id: "report-structure", label: "Cấu trúc báo cáo cố định" },
    { id: "open-actions", label: "Việc mở có người và hạn" },
    { id: "confidential-docs", label: "Tài liệu mật" },
    { id: "share-right-people", label: "Chia sẻ đúng người" },
    { id: "verify-before-send", label: "Kiểm chứng trước khi gửi" },
  ],
  hints: [
    "Hồ sơ nền → Project knowledge; mẫu báo cáo → Project instructions; theo dõi → artifact/Docs.",
    "Điểm rủi ro = khả năng (1–5) × ảnh hưởng (1–5); xử lý từ điểm cao xuống.",
    "Mọi con số trong báo cáo gửi lãnh đạo phải có nguồn và được kiểm chứng.",
  ],
  sources: [
    { label: "Claude Help Center — What are projects (knowledge, instructions, chia sẻ Team/Enterprise)", href: WP },
    { label: "Claude Help Center — Get started with Claude Docs (tài liệu cùng sửa, bình luận)", href: DO },
    { label: "Claude Help Center — Share artifacts (phạm vi, quyền)", href: SH },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Dự án kỹ thuật (lắp đặt dây chuyền mới, cải tạo hệ thống khí nén…) kéo dài nhiều tuần, nhiều tài liệu, nhiều cuộc họp. Bài cuối chương ghép các công cụ đã học thành một **trạm điều hành**: một **Project** (bài 2.5) chứa **hồ sơ nền** trong knowledge (phạm vi, danh mục bản vẽ, tiêu chuẩn áp dụng, danh sách nhà thầu) và **instructions** (giọng văn, mẫu báo cáo, quy tắc ghi nguồn). Mỗi **chủ đề một chat** trong project: tiến độ, rủi ro, mua sắm, nghiệm thu — để ngữ cảnh gọn.",
        "**Công cụ theo dõi**: **mốc tiến độ** (mốc, ngày kế hoạch, ngày thực tế, trạng thái); **danh sách rủi ro** — mỗi rủi ro có mô tả, **khả năng (1–5) × ảnh hưởng (1–5) = điểm**, biện pháp, người phụ trách, hạn; **nhật ký quyết định** — ngày, quyết định, lý do, người quyết, tài liệu liên quan. Làm bằng **artifact** để xem/lọc, hoặc **Claude Docs** để cả nhóm cùng sửa và bình luận.",
        "**Báo cáo tuần** là việc lặp lại tốn công nhất. Đặt **cấu trúc cố định** trong project instructions: (1) tóm tắt 3 dòng, (2) mốc tiến độ — đúng/chậm, (3) 5 rủi ro điểm cao nhất, (4) quyết định trong tuần, (5) việc mở có **người phụ trách và hạn**. Mỗi tuần dán biên bản họp vào chat, yêu cầu báo cáo theo cấu trúc, **mọi số liệu kèm nguồn** (biên bản ngày nào, tài liệu nào). Người dùng Claude Code có thể ghi quy trình thành **skill** (Chương 7).",
        "**Quản trị**: tài liệu mật (giá hợp đồng, bản vẽ có bản quyền của nhà thầu) **chỉ đưa lên nếu chính sách công ty cho phép** — không chắc thì hỏi. Chia sẻ project, artifact **đúng người, đúng quyền** (Team/Enterprise: trong tổ chức, Can view/Can edit). Trước khi gửi báo cáo cho lãnh đạo: **kiểm chứng** các con số và ngày mốc với nguồn gốc, đọc lại phần rủi ro — báo cáo sai làm mất niềm tin nhanh hơn báo cáo chậm.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Giống phòng điều hành công trường: tủ hồ sơ (knowledge), quy định viết báo cáo dán trên tường (instructions), bảng tiến độ và bảng rủi ro treo cạnh nhau (artifact), sổ ghi quyết định (nhật ký), và mỗi chiều thứ Sáu chỉ huy trưởng tổng hợp báo cáo theo đúng mẫu — có kiểm tra số trước khi ký.",
      },
      terms: [
        { term: "Danh sách rủi ro", definition: "Bảng các rủi ro của dự án, mỗi rủi ro có điểm, biện pháp, người phụ trách, hạn." },
        { term: "Điểm rủi ro", definition: "Khả năng xảy ra × mức ảnh hưởng (mỗi thang 1–5); điểm cao xử lý trước." },
        { term: "Nhật ký quyết định", definition: "Ghi lại mỗi quyết định, lý do và người quyết — tránh tranh cãi về sau." },
        { term: "Việc mở", definition: "Việc chưa xong, phải có người phụ trách và hạn cụ thể." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: trạm điều hành dự án",
      infographic: {
        kind: "cards",
        cards: [
          { title: "Project knowledge", body: "Phạm vi, danh mục bản vẽ, tiêu chuẩn, danh sách nhà thầu.", foot: "Tên file rõ nghĩa", icon: "book" },
          { title: "Project instructions", body: "Mẫu báo cáo 5 mục, ghi nguồn, giọng văn.", foot: "Áp dụng cho mọi chat", icon: "list" },
          { title: "Mốc tiến độ", body: "Mốc, kế hoạch, thực tế, trạng thái.", foot: "Artifact", icon: "clock" },
          { title: "Danh sách rủi ro", body: "Khả năng × ảnh hưởng, biện pháp, người, hạn.", foot: "Artifact hoặc Docs", icon: "alert" },
          { title: "Nhật ký quyết định", body: "Ngày, quyết định, lý do, người quyết.", foot: "Claude Docs", icon: "file" },
          { title: "Báo cáo tuần", body: "Từ biên bản họp, theo mẫu, số liệu có nguồn.", foot: "Kiểm chứng trước khi gửi", icon: "chart" },
        ],
      },
      caption: "Bố cục gợi ý của khoá học, dùng Projects, Docs và artifacts theo Help Center (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng tuần của dự án",
      mermaid: `flowchart TD
  A["Họp tuần"] --> B["Biên bản (Docs)"]
  B --> C["Chat “Báo cáo tuần” trong Project"]
  C --> D["Cập nhật mốc, rủi ro, quyết định (artifact/Docs)"]
  D --> E["Báo cáo theo mẫu 5 mục, số liệu có nguồn"]
  E --> F{"Kiểm chứng số và mốc với nguồn"}
  F -->|"Lệch"| C
  F -->|"Khớp"| G["Gửi lãnh đạo"]
  G --> A`,
      caption: "Mỗi tuần một vòng; nguồn của mọi con số truy được về biên bản và tài liệu.",
      alt: "Lưu đồ vòng tuần: họp tuần, ghi biên bản trên Docs, đưa vào chat Báo cáo tuần trong Project; cập nhật mốc, rủi ro, quyết định trong artifact hoặc Docs; tạo báo cáo theo mẫu 5 mục với số liệu có nguồn; kiểm chứng số và mốc với nguồn — lệch thì quay lại chỉnh, khớp thì gửi lãnh đạo, rồi sang tuần họp tiếp theo.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: báo cáo tuần",
      bad: {
        label: "Dán biên bản, nhận đoạn văn",
        content: "“Tóm tắt biên bản này thành báo cáo gửi giám đốc.” → Mỗi tuần một kiểu, không biết số nào từ đâu, việc mở không có người phụ trách.",
        notes: ["Không so sánh được giữa các tuần.", "Số liệu không có nguồn.", "Việc mở trôi nổi."],
      },
      good: {
        label: "Mẫu cố định + nguồn + việc mở rõ",
        content: "(Trong Project có instructions mẫu 5 mục) “Từ biên bản họp 07/11 dưới đây, lập báo cáo tuần 45 theo mẫu. Cập nhật mốc và 5 rủi ro điểm cao nhất từ artifact theo dõi. Mỗi số liệu ghi nguồn (biên bản ngày nào/tài liệu nào). Việc mở phải có người phụ trách và hạn; thiếu thì ghi “chưa giao”.”",
        notes: ["Báo cáo nhất quán qua các tuần.", "Kiểm chứng được.", "Không để việc mở vô chủ."],
      },
      takeaway: "Mẫu cố định + nguồn rõ = báo cáo đáng tin, làm nhanh.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: mỗi thứ nằm ở đâu?",
      sim: {
        kind: "classify",
        bins: [
          { id: "knowledge", label: "Project knowledge" },
          { id: "instructions", label: "Project instructions" },
          { id: "tracker", label: "Artifact/Docs theo dõi" },
          { id: "keep-out", label: "Không đưa lên" },
        ],
        items: [
          { id: "i1", text: "Danh mục bản vẽ và tiêu chuẩn kỹ thuật áp dụng cho dự án.", bin: "knowledge", why: "Tài liệu nền dùng chung lâu dài." },
          { id: "i2", text: "Mẫu báo cáo tuần 5 mục và quy tắc ghi nguồn.", bin: "instructions", why: "Quy tắc áp dụng cho mọi chat." },
          { id: "i3", text: "Danh sách rủi ro cập nhật hằng tuần.", bin: "tracker", why: "Dữ liệu thay đổi, cần xem/lọc." },
          { id: "i4", text: "Bảng mốc tiến độ kế hoạch và thực tế.", bin: "tracker", why: "Theo dõi theo thời gian." },
          { id: "i5", text: "Phụ lục giá hợp đồng mà quy định công ty không cho đưa ra ngoài hệ thống nội bộ.", bin: "keep-out", why: "Tuân thủ chính sách dữ liệu công ty." },
          { id: "i6", text: "Phạm vi dự án đã được phê duyệt.", bin: "knowledge", why: "Tài liệu nền." },
          { id: "i7", text: "“Trả lời ngắn gọn, ưu tiên bảng, ghi rõ khi không chắc.”", bin: "instructions", why: "Cách Claude nên trả lời." },
          { id: "i8", text: "Nhật ký quyết định của ban dự án.", bin: "tracker", why: "Ghi nhận theo thời gian, cả nhóm cùng sửa (Docs)." },
        ],
      },
      intro: "Xếp từng nội dung vào đúng nơi trong trạm điều hành dự án.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dựng trạm điều hành dự án",
      steps: [
        { title: "Kiểm tra chính sách dữ liệu", detail: "Tài liệu nào được đưa lên Claude theo quy định công ty; không chắc thì hỏi." },
        { title: "Tạo Project", detail: "Knowledge: phạm vi, danh mục bản vẽ, tiêu chuẩn (tên file rõ nghĩa)." },
        { title: "Viết instructions", detail: "Mẫu báo cáo và quy tắc.", code: { lang: "text", content: "Bạn hỗ trợ ban dự án lắp đặt dây chuyền số 3. Trả lời bằng tiếng Việt, ngắn gọn, ưu tiên bảng.\nBáo cáo tuần gồm 5 mục: (1) Tóm tắt 3 dòng (2) Mốc tiến độ: đúng/chậm (3) 5 rủi ro điểm cao nhất (4) Quyết định trong tuần (5) Việc mở: việc | người | hạn.\nMỗi số liệu ghi nguồn. Không chắc thì ghi “cần xác nhận”." } },
        { title: "Dựng công cụ theo dõi", detail: "Artifact mốc tiến độ và rủi ro (điểm = khả năng × ảnh hưởng); Docs nhật ký quyết định." },
        { title: "Vòng tuần", detail: "Biên bản → chat Báo cáo tuần → cập nhật theo dõi → báo cáo theo mẫu." },
        { title: "Kiểm chứng và gửi", detail: "Đối chiếu số và mốc với nguồn; đọc lại phần rủi ro; chia sẻ đúng người." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Từ biên bản họp trong dữ liệu mẫu, viết phần (3) rủi ro và (5) việc mở của báo cáo tuần: rủi ro có điểm (khả năng × ảnh hưởng), việc mở có người và hạn (thiếu thì ghi “chưa giao”).",
      sampleData: {
        name: "Biên bản họp 07/11 (trích)",
        content:
          "- Nhà thầu điện báo tủ điện giao chậm 10 ngày (khả năng 4, ảnh hưởng 4). Anh Hùng liên hệ nhà cung cấp dự phòng trước 12/11.\n- Bản vẽ móng máy ép bản sửa đổi chưa được duyệt (khả năng 3, ảnh hưởng 5). Chưa phân công.\n- Thiếu 2 thợ hàn có chứng chỉ (khả năng 2, ảnh hưởng 3). Chị Lan tuyển gấp, hạn 20/11.",
      },
      placeholder: "(3) Rủi ro:\n- …\n(5) Việc mở:\n- …",
      rubric: [
        { id: "scores", label: "Có điểm rủi ro", weight: 1, check: { kind: "allGroups", groups: [["16"], ["15"], ["6"]] }, pass: "Có điểm.", fail: "Tính điểm: 4×4=16, 3×5=15, 2×3=6." },
        { id: "order", label: "Sắp theo điểm giảm dần", weight: 1, check: { kind: "regex", pattern: "16[\\s\\S]*15[\\s\\S]*\\b6\\b" }, pass: "Đúng thứ tự.", fail: "Sắp rủi ro theo điểm giảm dần." },
        { id: "owners", label: "Việc mở có người và hạn", weight: 1, check: { kind: "allGroups", groups: [["hùng"], ["12/11"], ["lan"], ["20/11"]] }, pass: "Có người và hạn.", fail: "Ghi người và hạn: Hùng 12/11, Lan 20/11." },
        { id: "unassigned", label: "Ghi “chưa giao”", weight: 1, check: { kind: "anyKeyword", keywords: ["chưa giao", "chưa phân công"] }, pass: "Có ghi chưa giao.", fail: "Việc duyệt bản vẽ móng chưa có người → ghi “chưa giao”." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "(3) Rủi ro:\n- Tủ điện giao chậm 10 ngày — điểm 16 (4×4) — biện pháp: tìm nhà cung cấp dự phòng.\n- Bản vẽ móng máy ép sửa đổi chưa duyệt — điểm 15 (3×5) — biện pháp: cần phân công người thúc duyệt.\n- Thiếu 2 thợ hàn có chứng chỉ — điểm 6 (2×3) — biện pháp: tuyển gấp.\n(5) Việc mở:\n- Liên hệ nhà cung cấp tủ điện dự phòng | Hùng | 12/11\n- Thúc duyệt bản vẽ móng máy ép | chưa giao | cần xác nhận\n- Tuyển 2 thợ hàn có chứng chỉ | Lan | 20/11\nNguồn: biên bản họp 07/11.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Project làm trạm điều hành: knowledge cho hồ sơ nền, instructions cho mẫu báo cáo và quy tắc; mỗi chủ đề một chat.",
        "Theo dõi: mốc tiến độ, rủi ro (khả năng × ảnh hưởng), nhật ký quyết định — artifact hoặc Docs.",
        "Báo cáo tuần theo mẫu cố định, số liệu có nguồn, việc mở có người và hạn (“chưa giao” nếu thiếu).",
        "Tài liệu mật theo chính sách công ty; chia sẻ đúng người, đúng quyền.",
        "Kiểm chứng số và mốc trước khi gửi lãnh đạo.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một dự án kỹ thuật bạn đang tham gia (hoặc mô phỏng một dự án đã xong).",
      tasks: [
        "Dựng Project với knowledge và instructions mẫu báo cáo 5 mục.",
        "Tạo danh sách rủi ro và mốc tiến độ; nhập dữ liệu thật (đã kiểm tra chính sách).",
        "Làm báo cáo tuần từ một biên bản họp, kiểm chứng và nhờ trưởng dự án góp ý.",
      ],
      deliverable: "Project + công cụ theo dõi + một báo cáo tuần đã kiểm chứng + góp ý của trưởng dự án.",
      checklist: ["Không có tài liệu trái chính sách", "Mọi số liệu có nguồn", "Mọi việc mở có người hoặc ghi “chưa giao”"],
    },
  ],
};
