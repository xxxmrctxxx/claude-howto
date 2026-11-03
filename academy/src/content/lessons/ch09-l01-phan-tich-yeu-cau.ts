import type { Lesson } from "@/lib/types/content";

const BP = "https://code.claude.com/docs/en/best-practices";

export const lessonPhanTichYeuCau: Lesson = {
  id: "ch09-l01",
  chapterId: "ch09",
  slug: "phan-tich-yeu-cau",
  title: "Phân tích yêu cầu",
  subtitle: "Biến ý tưởng “làm cái web theo dõi lỗi” thành SPEC.md rõ ràng: người dùng, vấn đề, user story, tiêu chí chấp nhận, phạm vi — và để Claude phỏng vấn bạn trước khi viết.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chuyển ý tưởng thành yêu cầu: ai dùng, vấn đề gì, mục tiêu đo được." },
    { id: "o2", text: "Viết user story kèm tiêu chí chấp nhận kiểm tra được." },
    { id: "o3", text: "Chia phạm vi phải có / để sau, nêu yêu cầu phi chức năng và đánh dấu chỗ còn mơ hồ." },
    { id: "o4", text: "Để Claude phỏng vấn bạn rồi viết SPEC.md; mở phiên mới để xây từ SPEC.md." },
  ],
  concepts: [
    { id: "user-problem", label: "Người dùng và vấn đề" },
    { id: "measurable-goal", label: "Mục tiêu đo được" },
    { id: "user-story", label: "User story" },
    { id: "acceptance-criteria", label: "Tiêu chí chấp nhận" },
    { id: "scope-mvp", label: "Phạm vi phải có (MVP)" },
    { id: "out-of-scope", label: "Ngoài phạm vi" },
    { id: "non-functional", label: "Yêu cầu phi chức năng" },
    { id: "ambiguity", label: "Chỗ mơ hồ" },
    { id: "interview-me", label: "Claude phỏng vấn bạn" },
    { id: "spec-md", label: "SPEC.md" },
    { id: "fresh-session", label: "Phiên mới để xây" },
    { id: "be-ambitious", label: "“be ambitious”" },
  ],
  hints: [
    "User story: “Là [ai], tôi muốn [làm gì] để [được gì]”.",
    "Tiêu chí chấp nhận phải trả lời được bằng “đạt / không đạt”.",
    "Chưa nghĩ kỹ? Nhờ Claude phỏng vấn bạn rồi viết SPEC.md.",
  ],
  sources: [
    { label: "Claude Code — Best practices: Brainstorm with Claude first (phỏng vấn, SPEC.md, phiên mới), be ambitious", href: BP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Chương này đi trọn một dự án: **web theo dõi lỗi QA** cho xưởng lắp ráp (thư mục `web-loi-qa` bạn đã gặp ở Chương 5–6). Bước đầu tiên không phải code mà là **yêu cầu**: ai dùng (công nhân ghi lỗi, tổ trưởng xem thống kê), họ đang gặp vấn đề gì (ghi giấy, cuối tuần mới tổng hợp, hay sót), và **mục tiêu đo được** (tổ trưởng xem được số lỗi theo công đoạn trong ngày thay vì cuối tuần).",
        "Mỗi tính năng viết thành **user story**: “Là **[ai]**, tôi muốn **[làm gì]** để **[được gì]**”, kèm **tiêu chí chấp nhận** — các câu trả lời được bằng *đạt/không đạt* (“bấm Lưu khi thiếu công đoạn thì hiện thông báo lỗi và không lưu”). Tiêu chí chấp nhận sau này chính là **ca kiểm thử** và là thước đo “xong”.",
        "Chia **phạm vi**: *phải có* cho bản đầu (MVP), *để sau*, và *ngoài phạm vi* — ghi rõ để Claude không tự làm thêm hay bỏ sót. Thêm **yêu cầu phi chức năng**: chạy trên điện thoại Android giá rẻ ở xưởng, không lưu số điện thoại cá nhân, khoảng bao nhiêu người dùng. Những chữ như “thân thiện”, “nhanh” là **chỗ mơ hồ** — đổi thành con số hoặc tiêu chí cụ thể.",
        "Chưa nghĩ kỹ? Tài liệu Best practices gợi ý: **nhờ Claude phỏng vấn bạn** cho tới khi đủ để viết đặc tả, rồi ghi vào **SPEC.md**. Claude sẽ hỏi lại những phần bạn chưa chốt (thường dạng nhiều lựa chọn). Có SPEC.md rồi, **mở phiên mới để xây** — bắt đầu với context sạch và một định nghĩa “xong” bằng văn bản; SPEC.md cũng là file để review đối chiếu sau này. Khi muốn bản đầy đủ (trạng thái rỗng, lỗi, điều hướng bàn phím…), nói rõ **“be ambitious”** — Claude thường làm bản nhỏ nhất thoả yêu cầu nếu bạn không nói phạm vi.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Xây nhà không bắt đầu bằng trộn xi măng mà bằng buổi nói chuyện với kiến trúc sư: nhà cho mấy người, cần mấy phòng, ngân sách bao nhiêu, cái gì để sau. Kiến trúc sư giỏi hỏi lại bạn nhiều câu — rồi mới ra bản vẽ (SPEC.md) để đội thi công làm theo.",
      },
      terms: [
        { term: "User story", definition: "Câu mô tả nhu cầu: “Là [ai], tôi muốn [làm gì] để [được gì]”." },
        { term: "Tiêu chí chấp nhận", definition: "Điều kiện kiểm tra được bằng đạt/không đạt để coi một tính năng là xong." },
        { term: "MVP", definition: "Phiên bản nhỏ nhất dùng được, chỉ gồm tính năng phải có." },
        { term: "SPEC.md", definition: "File đặc tả trong repo: yêu cầu, phạm vi, tiêu chí — định nghĩa “xong”." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: khung SPEC.md",
      infographic: {
        kind: "annotated",
        label: "SPEC.md — Web theo dõi lỗi QA",
        lines: [
          { text: "## Người dùng & vấn đề: công nhân ghi lỗi trên giấy; tổ trưởng cuối tuần mới tổng hợp, hay sót.", note: "Ai, vấn đề gì", tone: "context" },
          { text: "## Mục tiêu: tổ trưởng xem số lỗi theo công đoạn trong ngày.", note: "Đo được", tone: "role" },
          { text: "## Story 1: Là công nhân, tôi muốn ghi lỗi trên điện thoại để không phải chép giấy.", note: "User story", tone: "task" },
          { text: "   - Thiếu công đoạn → báo lỗi, không lưu · Lưu xong → hiện trong danh sách ngay", note: "Tiêu chí chấp nhận", tone: "constraints" },
          { text: "## Phạm vi: Phải có — ghi lỗi, thống kê tuần · Để sau — thông báo, xuất Excel · Ngoài — đăng nhập SSO", note: "Phạm vi", tone: "output" },
          { text: "## Phi chức năng: Android giá rẻ, không lưu số điện thoại cá nhân, ~60 người dùng", note: "Phi chức năng", tone: "neutral" },
        ],
      },
      caption: "Khung tự soạn cho khoá học; tài liệu Best practices gợi ý ghi đặc tả vào SPEC.md (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ ý tưởng đến SPEC.md",
      mermaid: `flowchart TD
  A["Ý tưởng: web theo dõi lỗi"] --> B["Nhờ Claude phỏng vấn bạn"]
  B --> C["Trả lời: người dùng, vấn đề, mục tiêu, phạm vi"]
  C --> D["Claude viết SPEC.md"]
  D --> E{"Bạn duyệt: tiêu chí kiểm tra được? chỗ mơ hồ?"}
  E -->|"Chưa"| B
  E -->|"Đạt"| F["Commit SPEC.md"]
  F --> G["Mở phiên mới: xây từ SPEC.md"]`,
      caption: "SPEC.md là định nghĩa “xong” bằng văn bản cho cả quá trình xây.",
      alt: "Lưu đồ: từ ý tưởng web theo dõi lỗi, nhờ Claude phỏng vấn bạn; bạn trả lời về người dùng, vấn đề, mục tiêu, phạm vi; Claude viết SPEC.md; bạn duyệt xem tiêu chí đã kiểm tra được chưa, còn chỗ mơ hồ không. Chưa đạt thì phỏng vấn tiếp; đạt thì commit SPEC.md và mở phiên mới để xây từ SPEC.md.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: bắt đầu dự án",
      bad: {
        label: "Nhảy thẳng vào code",
        content: "“Làm cho tôi cái web theo dõi lỗi QA, thân thiện, nhanh, đầy đủ tính năng.”",
        notes: ["Không rõ ai dùng, làm gì.", "“Thân thiện”, “nhanh”, “đầy đủ” không kiểm tra được.", "Claude phải đoán phạm vi."],
      },
      good: {
        label: "Phỏng vấn trước, đặc tả sau",
        content: "“Tôi muốn làm web theo dõi lỗi QA cho xưởng nhưng chưa nghĩ kỹ. Hãy phỏng vấn tôi cho tới khi đủ để viết đặc tả: người dùng, vấn đề, user story với tiêu chí chấp nhận, phạm vi phải có/để sau, yêu cầu phi chức năng. Rồi ghi vào SPEC.md.”",
        notes: ["Claude hỏi lại phần chưa chốt.", "Kết quả là file có thể review.", "Có định nghĩa “xong” trước khi code."],
      },
      takeaway: "Một giờ phân tích tiết kiệm nhiều ngày làm lại.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xếp các dòng yêu cầu",
      sim: {
        kind: "classify",
        bins: [
          { id: "mvp", label: "Phải có (MVP)" },
          { id: "later", label: "Để sau" },
          { id: "nfr", label: "Phi chức năng" },
          { id: "unclear", label: "Mơ hồ — cần hỏi lại" },
        ],
        items: [
          { id: "i1", text: "Công nhân ghi lỗi gồm công đoạn, mô tả, mức độ.", bin: "mvp", why: "Lõi của vấn đề cần giải quyết." },
          { id: "i2", text: "Tổ trưởng xem số lỗi theo công đoạn trong tuần.", bin: "mvp", why: "Gắn trực tiếp với mục tiêu." },
          { id: "i3", text: "Gửi tin nhắn cho quản đốc khi có lỗi nghiêm trọng.", bin: "later", why: "Hữu ích nhưng không cần cho bản đầu." },
          { id: "i4", text: "Chạy tốt trên điện thoại Android giá rẻ ở xưởng.", bin: "nfr", why: "Điều kiện về thiết bị, không phải tính năng." },
          { id: "i5", text: "Không lưu số điện thoại cá nhân của công nhân.", bin: "nfr", why: "Yêu cầu về dữ liệu cá nhân." },
          { id: "i6", text: "Giao diện phải thân thiện.", bin: "unclear", why: "Thân thiện là thế nào? Cần tiêu chí cụ thể." },
          { id: "i7", text: "Xuất báo cáo tháng ra Excel.", bin: "later", why: "Để sau khi bản đầu chạy ổn." },
          { id: "i8", text: "Trang phải tải nhanh.", bin: "unclear", why: "Nhanh là bao nhiêu giây, trên thiết bị nào?" },
        ],
      },
      intro: "Xếp từng dòng yêu cầu của tổ trưởng vào đúng nhóm.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: từ ý tưởng đến SPEC.md",
      steps: [
        { title: "Viết ý tưởng một câu", detail: "Ai, vấn đề gì, mong muốn gì." },
        { title: "Nhờ Claude phỏng vấn", detail: "Trả lời từng câu; chưa biết thì nói chưa biết.", code: { lang: "text", content: "Tôi muốn làm web theo dõi lỗi QA cho xưởng nhưng chưa nghĩ kỹ. Hãy phỏng vấn tôi cho tới khi đủ để viết đặc tả, rồi ghi vào SPEC.md: người dùng, vấn đề, mục tiêu đo được, user story kèm tiêu chí chấp nhận, phạm vi phải có / để sau / ngoài phạm vi, yêu cầu phi chức năng." } },
        { title: "Duyệt SPEC.md", detail: "Mỗi tiêu chí trả lời được bằng đạt/không đạt? Còn chữ “thân thiện”, “nhanh” nào không?" },
        { title: "Commit SPEC.md", detail: "Để cả nhóm và các phiên sau cùng dựa vào.", code: { lang: "bash", content: "git add SPEC.md\ngit commit -m \"docs: dac ta web theo doi loi QA\"" } },
        { title: "Mở phiên mới để xây", detail: "Context sạch, bắt đầu từ SPEC.md (bài 9.3).", code: { lang: "text", content: "Đọc @SPEC.md. Lập kế hoạch xây bản MVP theo đúng phạm vi “Phải có”, chưa viết code." } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Từ ghi chú trong dữ liệu mẫu, viết 1 user story, 3 tiêu chí chấp nhận kiểm tra được, và 2 mục ngoài phạm vi.",
      sampleData: {
        name: "Ghi chú của tổ trưởng",
        content:
          "Tôi cần biết hôm nay tổ mình có bao nhiêu lỗi ở từng công đoạn, xem trên điện thoại lúc giao ca. Lỗi mức Cao thì phải nổi bật. Hiện giờ phải đếm tay từ sổ. Chưa cần gửi tin nhắn, chưa cần in.",
      },
      placeholder: "User story: Là …, tôi muốn … để …\nTiêu chí chấp nhận:\n- …\nNgoài phạm vi:\n- …",
      rubric: [
        { id: "story", label: "User story đúng dạng", weight: 1, check: { kind: "regex", pattern: "la [a-z][^\\n]*toi muon [a-z][^\\n]*de [a-z]" }, pass: "Có user story.", fail: "Viết “Là [ai], tôi muốn [làm gì] để [được gì]”." },
        { id: "criteria", label: "Có 3 tiêu chí", weight: 1, check: { kind: "minMatches", pattern: "^\\s*[-*\\d]", value: 4 }, pass: "Đủ tiêu chí.", fail: "Liệt kê 3 tiêu chí chấp nhận (gạch đầu dòng)." },
        { id: "high", label: "Tiêu chí về lỗi mức Cao", weight: 1, check: { kind: "anyKeyword", keywords: ["mức cao", "nổi bật", "màu đỏ", "lên đầu"] }, pass: "Có lỗi mức Cao.", fail: "Thêm tiêu chí: lỗi mức Cao hiển thị nổi bật." },
        { id: "mobile", label: "Điện thoại", weight: 1, check: { kind: "anyKeyword", keywords: ["điện thoại", "màn hình hẹp"] }, pass: "Có thiết bị.", fail: "Thêm tiêu chí xem được trên điện thoại." },
        { id: "out", label: "Ngoài phạm vi", weight: 1, check: { kind: "regex", pattern: "ngoai pham vi[\\s\\S]*(tin nhan|in)" }, pass: "Có ngoài phạm vi.", fail: "Ghi ngoài phạm vi: gửi tin nhắn, in." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "User story: Là tổ trưởng, tôi muốn xem số lỗi hôm nay theo từng công đoạn trên điện thoại để nắm tình hình ngay lúc giao ca.\nTiêu chí chấp nhận:\n- Trang hiện số lỗi hôm nay của tổ, chia theo công đoạn, khớp với dữ liệu đã ghi.\n- Lỗi mức Cao được hiển thị nổi bật (màu đỏ, đứng đầu danh sách).\n- Xem được trên điện thoại màn hình hẹp mà không phải cuộn ngang.\nNgoài phạm vi:\n- Gửi tin nhắn thông báo.\n- In báo cáo.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Bắt đầu từ người dùng, vấn đề và mục tiêu đo được — không phải từ code.",
        "User story “Là… tôi muốn… để…” + tiêu chí chấp nhận đạt/không đạt (sau này thành ca kiểm thử).",
        "Phạm vi: phải có / để sau / ngoài phạm vi; thêm yêu cầu phi chức năng; đổi chữ mơ hồ thành tiêu chí.",
        "Chưa rõ thì nhờ Claude phỏng vấn rồi viết SPEC.md; commit SPEC.md.",
        "Mở phiên mới để xây từ SPEC.md; muốn bản đầy đủ thì nói rõ “be ambitious”.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một website nhỏ bạn muốn làm cho công việc của mình.",
      tasks: [
        "Nhờ Claude phỏng vấn bạn và viết SPEC.md.",
        "Duyệt SPEC.md: mỗi tiêu chí kiểm tra được, không còn chữ mơ hồ.",
        "Đưa SPEC.md cho một người dùng thật đọc và hỏi: “Đây có đúng thứ anh/chị cần không?”",
      ],
      deliverable: "SPEC.md đã duyệt + ghi chú góp ý của người dùng thật.",
      checklist: ["Có mục tiêu đo được", "Mỗi story có tiêu chí chấp nhận", "Có phần ngoài phạm vi"],
    },
  ],
};
