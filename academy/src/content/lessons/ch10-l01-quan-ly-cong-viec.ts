import type { Lesson } from "@/lib/types/content";

const AR = "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them";
const SH = "https://support.claude.com/en/articles/9547008-share-artifacts";
const BP = "https://code.claude.com/docs/en/best-practices";

export const lessonQuanLyCongViec: Lesson = {
  id: "ch10-l01",
  chapterId: "ch10",
  slug: "quan-ly-cong-viec",
  title: "Ứng dụng quản lý công việc",
  subtitle: "Dự án nhỏ cho tổ/nhóm: đặc tả nhanh, chọn cách làm (artifact hay dự án Claude Code), thiết kế dữ liệu an toàn, kiểm thử bằng kịch bản và cải tiến sau một tuần dùng thật.",
  level: "intermediate",
  estimatedMinutes: 35,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Đặc tả nhanh ứng dụng quản lý công việc: trường dữ liệu, trạng thái, ai làm gì." },
    { id: "o2", text: "Chọn cách làm: artifact công cụ (nhanh, dùng trong Claude) hay dự án Claude Code (máy chủ riêng, tích hợp)." },
    { id: "o3", text: "Thiết kế dữ liệu và lưu trữ an toàn: dữ liệu chung ai mở cũng thấy, giới hạn dung lượng, không lưu thông tin nhạy cảm, có bản xuất dự phòng." },
    { id: "o4", text: "Kiểm thử bằng kịch bản sử dụng thật và cải tiến sau một tuần dùng." },
  ],
  concepts: [
    { id: "task-fields", label: "Trường dữ liệu công việc" },
    { id: "task-status", label: "Trạng thái công việc" },
    { id: "roles", label: "Vai trò và quyền" },
    { id: "artifact-route", label: "Làm bằng artifact" },
    { id: "code-route", label: "Làm bằng Claude Code" },
    { id: "shared-data", label: "Dữ liệu dùng chung" },
    { id: "storage-cap", label: "Giới hạn lưu trữ" },
    { id: "no-sensitive", label: "Không lưu dữ liệu nhạy cảm" },
    { id: "export-backup", label: "Xuất dự phòng" },
    { id: "usage-scenarios", label: "Kịch bản sử dụng" },
    { id: "pilot-week", label: "Dùng thử một tuần" },
    { id: "iterate-feedback", label: "Cải tiến theo góp ý" },
  ],
  hints: [
    "Bắt đầu với 5–6 trường và 3 trạng thái: Cần làm, Đang làm, Xong.",
    "Nhóm đều dùng Claude, dữ liệu đơn giản → artifact; cần máy chủ riêng, đăng nhập công ty → Claude Code.",
    "Lưu trữ chung của artifact ai mở cũng thấy, tối đa 20 MB văn bản.",
  ],
  sources: [
    { label: "Claude Help Center — What are artifacts (công cụ tương tác, lưu trữ 20 MB văn bản)", href: AR },
    { label: "Claude Help Center — Share artifacts (lưu trữ chung, quyền)", href: SH },
    { label: "Claude Code — Best practices (đặc tả, phép kiểm tra)", href: BP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Chương 10 là các **dự án ứng dụng nhỏ** ghép kỹ năng từ những chương trước. Dự án đầu: **quản lý công việc** cho tổ bảo trì — thay bảng trắng và nhóm chat lộn xộn. Bắt đầu bằng **đặc tả nhanh** (bài 9.1 thu gọn): mỗi việc có **tên, người phụ trách, hạn chót, mức ưu tiên, trạng thái**; ba trạng thái **Cần làm → Đang làm → Xong**; **ai được làm gì** (tổ trưởng giao và đóng việc, thợ cập nhật trạng thái việc của mình).",
        "**Chọn cách làm**: nếu cả tổ đều dùng Claude và dữ liệu đơn giản, làm **artifact công cụ** (Chương 4) — nhanh, chia sẻ bằng Share, dữ liệu lưu trong artifact. Nếu cần **máy chủ riêng**, đăng nhập bằng tài khoản công ty, tích hợp hệ thống khác, hay người dùng không có tài khoản Claude, làm **dự án Claude Code** theo quy trình Chương 9. Đừng chọn cách phức tạp khi cách đơn giản đủ dùng.",
        "**Dữ liệu**: với artifact, lưu trữ **dùng chung** thì **ai mở cũng thấy**, tối đa **20 MB** và chỉ dạng văn bản — đủ cho danh sách công việc, không đủ cho ảnh. **Không lưu** thông tin nhạy cảm (số điện thoại cá nhân, lương, đánh giá kỷ luật). Thêm nút **xuất CSV** làm bản dự phòng và để báo cáo tháng.",
        "**Kiểm thử bằng kịch bản sử dụng** thay vì chỉ bấm thử: “Sáng thứ Hai tổ trưởng giao 5 việc; thợ A chuyển 2 việc sang Đang làm; một việc quá hạn hiện màu đỏ; cuối ngày lọc việc Xong của tuần.” Rồi **dùng thử một tuần** với tổ, ghi góp ý, **cải tiến từng điểm** — đừng thêm 10 tính năng ngay từ đầu.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Giống thay bảng trắng giao việc bằng một tấm bảng điện tử: chỉ cần vài cột rõ ràng (việc, người, hạn, trạng thái), ai cũng nhìn thấy — nên không dán lên đó giấy tờ riêng tư. Treo thử một tuần, hỏi tổ thấy thiếu gì, rồi mới sửa.",
      },
      terms: [
        { term: "Trạng thái công việc", definition: "Giai đoạn của một việc: Cần làm, Đang làm, Xong." },
        { term: "Kịch bản sử dụng", definition: "Chuỗi thao tác thực tế của người dùng trong một ngày/tuần, dùng để kiểm thử." },
        { term: "Dùng thử (pilot)", definition: "Cho một nhóm nhỏ dùng thật trong thời gian ngắn để lấy góp ý." },
        { term: "CSV", definition: "File bảng dạng văn bản, mở được bằng Excel — dùng để xuất dự phòng." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: chọn cách làm",
      infographic: {
        kind: "compare",
        columns: [
          { title: "Artifact công cụ", tone: "neutral", items: ["Cả nhóm có tài khoản Claude", "Dữ liệu văn bản đơn giản (≤ 20 MB)", "Cần có trong vài giờ", "Chia sẻ bằng Share, quyền xem/sửa", "Không tích hợp hệ thống khác"] },
          { title: "Dự án Claude Code", tone: "neutral", items: ["Có người dùng không dùng Claude", "Cần máy chủ, đăng nhập công ty", "Cần tích hợp (email, hệ thống nhân sự…)", "Quy trình Chương 9: SPEC → test → deploy", "Có người bảo trì code"] },
        ],
      },
      caption: "Tiêu chí gợi ý của khoá học; chọn cách đơn giản nhất đáp ứng yêu cầu.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ bảng trắng đến ứng dụng",
      mermaid: `flowchart TD
  A["Vấn đề: giao việc lộn xộn"] --> B["Đặc tả nhanh: trường, trạng thái, vai trò"]
  B --> C{"Mọi người dùng Claude, dữ liệu đơn giản?"}
  C -->|"Có"| D["Artifact công cụ"]
  C -->|"Không"| E["Dự án Claude Code (Chương 9)"]
  D & E --> F["Kiểm thử bằng kịch bản sử dụng"]
  F --> G["Dùng thử 1 tuần với tổ"]
  G --> H["Góp ý → cải tiến từng điểm"]`,
      caption: "Chọn đường đơn giản nhất đủ dùng; cải tiến bằng góp ý thật.",
      alt: "Lưu đồ: từ vấn đề giao việc lộn xộn, viết đặc tả nhanh gồm trường, trạng thái, vai trò. Nếu mọi người dùng Claude và dữ liệu đơn giản thì làm artifact công cụ, nếu không thì làm dự án Claude Code theo Chương 9. Sau đó kiểm thử bằng kịch bản sử dụng, dùng thử một tuần với tổ, nhận góp ý và cải tiến từng điểm.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu ứng dụng giao việc",
      bad: {
        label: "Quá nhiều, quá mơ hồ",
        content: "“Làm app quản lý công việc xịn như phần mềm lớn: Gantt, chat, nhắc việc, chấm công, đánh giá nhân viên, lưu cả số điện thoại và lương để tiện liên hệ.”",
        notes: ["Phạm vi khổng lồ.", "Lưu dữ liệu nhạy cảm vào nơi dùng chung.", "Không có kịch bản để kiểm thử."],
      },
      good: {
        label: "Đủ dùng, an toàn, kiểm thử được",
        content: "“Tạo artifact công cụ giao việc cho tổ bảo trì 8 người: mỗi việc có tên, người phụ trách, hạn, ưu tiên, trạng thái (Cần làm/Đang làm/Xong); việc quá hạn tô đỏ; lọc theo người và trạng thái; nút xuất CSV. Dữ liệu dùng chung cho cả tổ, không lưu số điện thoại hay thông tin cá nhân. Kiểm thử theo kịch bản: …”",
        notes: ["MVP rõ.", "Dữ liệu an toàn.", "Có kịch bản kiểm thử."],
      },
      takeaway: "Nhỏ, rõ, an toàn — rồi cải tiến bằng góp ý.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: trường nào lưu, trường nào để sau, trường nào không lưu?",
      sim: {
        kind: "classify",
        bins: [
          { id: "mvp", label: "Cần cho bản đầu" },
          { id: "later", label: "Để sau" },
          { id: "never", label: "Không nên lưu" },
        ],
        items: [
          { id: "i1", text: "Tên việc", bin: "mvp", why: "Cốt lõi." },
          { id: "i2", text: "Người phụ trách", bin: "mvp", why: "Ai làm." },
          { id: "i3", text: "Hạn chót", bin: "mvp", why: "Cần để tô đỏ việc quá hạn." },
          { id: "i4", text: "Trạng thái Cần làm/Đang làm/Xong", bin: "mvp", why: "Cốt lõi của bảng việc." },
          { id: "i5", text: "Ảnh hiện trường đính kèm mỗi việc", bin: "later", why: "Lưu trữ artifact chỉ văn bản, tối đa 20 MB — cần cách khác." },
          { id: "i6", text: "Nhắc việc qua tin nhắn điện thoại", bin: "later", why: "Cần tích hợp, để sau." },
          { id: "i7", text: "Số điện thoại cá nhân của thợ", bin: "never", why: "Nhạy cảm, dữ liệu chung ai cũng thấy." },
          { id: "i8", text: "Ghi chú đánh giá kỷ luật", bin: "never", why: "Nhạy cảm, không thuộc công cụ giao việc." },
        ],
      },
      intro: "Xếp mỗi trường dữ liệu vào đúng nhóm cho artifact giao việc dùng chung của tổ.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dựng bảng giao việc bằng artifact",
      steps: [
        { title: "Đặc tả nhanh", detail: "Trường, trạng thái, vai trò, những gì không lưu." },
        { title: "Viết kịch bản kiểm thử", detail: "Một ngày làm việc thật của tổ, kèm kết quả mong đợi." },
        { title: "Gửi yêu cầu tạo artifact", detail: "Kèm đặc tả và kịch bản.", code: { lang: "text", content: "Tạo artifact công cụ giao việc cho tổ bảo trì 8 người. Trường: tên việc, người phụ trách, hạn, ưu tiên (Cao/TB/Thấp), trạng thái (Cần làm/Đang làm/Xong). Việc quá hạn chưa Xong tô đỏ. Lọc theo người và trạng thái. Nút xuất CSV. Dữ liệu dùng chung cho tổ; không lưu số điện thoại hay thông tin cá nhân. Chữ lớn, dùng tốt trên điện thoại." } },
        { title: "Chạy kịch bản", detail: "Làm từng bước, so kết quả mong đợi; báo lỗi bằng bước cụ thể." },
        { title: "Chia sẻ cho tổ", detail: "Share với quyền phù hợp (bài 4.7); nhắc mọi người không ghi thông tin riêng tư." },
        { title: "Dùng thử một tuần, cải tiến", detail: "Thu góp ý, sửa từng điểm; xuất CSV dự phòng cuối tuần." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết kịch bản kiểm thử (5 bước, mỗi bước có kết quả mong đợi) cho bảng giao việc của tổ trong dữ liệu mẫu.",
      sampleData: {
        name: "Bối cảnh",
        content:
          "Tổ bảo trì 8 người. Tổ trưởng giao việc đầu ca; thợ cập nhật trạng thái việc của mình; việc quá hạn chưa Xong phải nổi bật; cuối tuần tổ trưởng xuất danh sách việc Xong để báo cáo.",
      },
      placeholder: "1. … → mong đợi: …\n2. …",
      rubric: [
        { id: "count", label: "Có 5 bước", weight: 1, check: { kind: "minMatches", pattern: "^\\s*\\d[.)]", value: 5 }, pass: "Đủ bước.", fail: "Viết 5 bước đánh số." },
        { id: "expected", label: "Có kết quả mong đợi", weight: 1, check: { kind: "minMatches", pattern: "mong doi", value: 3 }, pass: "Có kết quả mong đợi.", fail: "Mỗi bước ghi “mong đợi: …”." },
        { id: "overdue", label: "Bước về việc quá hạn", weight: 1, check: { kind: "anyKeyword", keywords: ["quá hạn"] }, pass: "Có quá hạn.", fail: "Thêm bước kiểm tra việc quá hạn nổi bật." },
        { id: "export", label: "Bước xuất CSV", weight: 1, check: { kind: "anyKeyword", keywords: ["xuất", "csv"] }, pass: "Có xuất.", fail: "Thêm bước xuất danh sách việc Xong." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "1. Tổ trưởng tạo 5 việc cho 3 thợ, đặt hạn khác nhau → mong đợi: 5 việc hiện ở Cần làm, đúng người phụ trách.\n2. Thợ A chuyển 2 việc của mình sang Đang làm → mong đợi: hai việc chuyển cột, các việc khác giữ nguyên.\n3. Đặt một việc có hạn hôm qua, chưa Xong → mong đợi: việc đó tô đỏ (quá hạn).\n4. Lọc theo thợ B, trạng thái Xong → mong đợi: chỉ hiện việc Xong của B.\n5. Cuối tuần bấm xuất CSV việc Xong → mong đợi: file CSV có đủ cột tên việc, người, hạn, trạng thái và đúng số dòng.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Đặc tả nhanh: tên, người, hạn, ưu tiên, trạng thái (Cần làm/Đang làm/Xong), ai làm gì.",
        "Artifact khi nhóm dùng Claude và dữ liệu đơn giản; dự án Claude Code khi cần máy chủ, đăng nhập công ty, tích hợp.",
        "Dữ liệu chung ai mở cũng thấy, ≤ 20 MB văn bản; không lưu thông tin nhạy cảm; xuất CSV dự phòng.",
        "Kiểm thử bằng kịch bản sử dụng thật có kết quả mong đợi.",
        "Dùng thử một tuần, cải tiến từng điểm theo góp ý.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một nhóm nhỏ (3–10 người) đang giao việc bằng giấy hoặc nhóm chat.",
      tasks: [
        "Viết đặc tả nhanh và kịch bản kiểm thử 5 bước.",
        "Dựng bảng giao việc (artifact hoặc Claude Code), chạy kịch bản.",
        "Cho nhóm dùng thử một tuần; ghi 3 góp ý và cải tiến.",
      ],
      deliverable: "Ứng dụng + kịch bản kiểm thử đạt + 3 góp ý và thay đổi tương ứng.",
      checklist: ["Không lưu thông tin nhạy cảm", "Có xuất dự phòng", "Có góp ý của người dùng thật"],
    },
  ],
};
