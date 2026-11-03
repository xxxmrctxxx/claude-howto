import type { Lesson } from "@/lib/types/content";

const AR = "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them";
const SH = "https://support.claude.com/en/articles/9547008-share-artifacts";

export const lessonTaoUngDungTuongTac: Lesson = {
  id: "ch04-l03",
  chapterId: "ch04",
  slug: "tao-ung-dung-tuong-tac",
  title: "Tạo ứng dụng tương tác",
  subtitle: "Dựng công cụ nhỏ bấm được — máy tính, checklist, biểu mẫu — bằng cách mô tả đầu vào, quy tắc, đầu ra và ca kiểm thử; hiểu artifact gọi Claude, ứng dụng kết nối và dữ liệu lưu chung.",
  level: "intermediate",
  estimatedMinutes: 30,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Mô tả một công cụ tương tác theo bốn phần: đầu vào, quy tắc xử lý, đầu ra, giao diện." },
    { id: "o2", text: "Viết ca kiểm thử có kết quả mong đợi, gồm cả trường hợp biên, và dùng chúng để duyệt công cụ." },
    { id: "o3", text: "Hiểu các khả năng nâng cao: artifact gọi Claude, ứng dụng kết nối, dữ liệu lưu trữ — và giới hạn của chúng." },
    { id: "o4", text: "Quyết định dữ liệu nào được lưu và ai thấy; không nhập thông tin nhạy cảm vào lưu trữ chung." },
  ],
  concepts: [
    { id: "tool-inputs", label: "Đầu vào" },
    { id: "tool-rules", label: "Quy tắc xử lý" },
    { id: "tool-outputs", label: "Đầu ra" },
    { id: "tool-ui", label: "Giao diện" },
    { id: "test-cases", label: "Ca kiểm thử" },
    { id: "edge-cases", label: "Trường hợp biên" },
    { id: "calls-claude", label: "Artifact gọi Claude" },
    { id: "connected-data", label: "Dữ liệu từ ứng dụng kết nối" },
    { id: "storage-limit", label: "Giới hạn lưu trữ" },
    { id: "shared-storage", label: "Lưu trữ chung" },
    { id: "sensitive-input", label: "Không nhập dữ liệu nhạy cảm" },
    { id: "tool-iterate", label: "Sửa công cụ theo kết quả thử" },
  ],
  hints: [
    "Mô tả theo khuôn: Đầu vào → Quy tắc → Đầu ra → Giao diện.",
    "Viết 3–5 ca kiểm thử có đáp án trước, gồm ô trống, số âm, giá trị cực lớn.",
    "Lưu trữ chung: ai mở artifact cũng thấy — đừng nhập dữ liệu nhạy cảm.",
  ],
  sources: [
    { label: "Claude Help Center — What are artifacts (công cụ tương tác, artifact gọi Claude, ứng dụng kết nối, lưu trữ 20 MB)", href: AR },
    { label: "Claude Help Center — Share artifacts (lưu trữ chung, dữ liệu từ ứng dụng kết nối của người xem)", href: SH },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Công cụ tương tác nhỏ là loại artifact rất hữu ích ở văn phòng và nhà xưởng: máy tính giờ tăng ca, checklist bấm được, biểu mẫu tính chi phí, bài trắc nghiệm đào tạo. Để Claude làm đúng, mô tả theo **bốn phần**: **đầu vào** (người dùng nhập gì), **quy tắc xử lý** (tính toán, điều kiện), **đầu ra** (hiện gì, ở đâu) và **giao diện** (nút, cỡ chữ, thiết bị).",
        "Công cụ có tính toán thì **phải có ca kiểm thử**: vài bộ dữ liệu vào kèm **kết quả mong đợi** do bạn tự tính trước. Nhớ thêm **trường hợp biên**: ô bỏ trống, số âm, giờ ra sớm hơn giờ vào (ca qua nửa đêm), giá trị rất lớn. Đưa các ca này ngay trong yêu cầu và dùng chúng để duyệt bản đầu — công cụ chạy “có vẻ đúng” chưa chắc đã đúng.",
        "Một số khả năng nâng cao: artifact có thể **gọi Claude** bên trong (ví dụ tóm tắt ghi chú người dùng nhập) — không cần API key, nhưng **mỗi người dùng tốn lượt của chính họ**. Artifact có thể lấy dữ liệu từ **ứng dụng kết nối** — mỗi người phải **tự duyệt và kết nối ứng dụng của mình**; người xem không có quyền thì phần đó báo lỗi. Artifact có thể **lưu dữ liệu**, tối đa **20 MB**, chỉ dạng văn bản.",
        "Cẩn thận với **lưu trữ chung**: Help Center cảnh báo một số artifact lưu dữ liệu chung mà **ai mở artifact cũng thấy** — kiểm tra trước khi nhập thông tin nhạy cảm. Khi thiết kế, hãy nói rõ dữ liệu nào **chỉ lưu cho từng người** và dữ liệu nào **dùng chung** (ví dụ checklist ca làm việc), và tuyệt đối không cho nhập số CCCD, lương, mật khẩu vào phần dùng chung.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Đặt thợ làm một cái cân điện tử: bạn phải nói cân cái gì (đầu vào), cách tính giá (quy tắc), hiện gì trên màn hình (đầu ra), nút bấm ra sao (giao diện). Nhận cân rồi, bạn đặt quả cân chuẩn 1 kg, 5 kg lên thử (ca kiểm thử) — và thử cả khi không đặt gì (trường hợp biên).",
      },
      terms: [
        { term: "Ca kiểm thử", definition: "Một bộ dữ liệu vào kèm kết quả mong đợi, dùng để kiểm tra công cụ tính đúng." },
        { term: "Trường hợp biên", definition: "Tình huống ở rìa: ô trống, số âm, giá trị rất lớn, qua nửa đêm…" },
        { term: "Lưu trữ chung", definition: "Dữ liệu artifact lưu mà mọi người mở artifact đều thấy." },
        { term: "Ứng dụng kết nối", definition: "Dịch vụ bên ngoài người dùng tự kết nối với Claude để artifact lấy dữ liệu." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: bốn phần của một công cụ",
      infographic: {
        kind: "flow",
        steps: [
          { title: "Đầu vào", body: "Giờ vào, giờ ra từng ngày; mã nhân viên.", icon: "list" },
          { title: "Quy tắc", body: "Vượt 8 giờ/ngày là tăng ca; Chủ nhật nhân hệ số 2.", icon: "wrench" },
          { title: "Đầu ra", body: "Bảng từng ngày + tổng giờ tăng ca cuối tuần.", icon: "chart" },
          { title: "Giao diện", body: "Chữ lớn, dùng trên điện thoại, nút Đặt lại.", icon: "target" },
          { title: "Ca kiểm thử", body: "Vào 8h, ra 18h, nghỉ trưa 1 giờ không tính → 9 giờ làm, 1 giờ tăng ca.", icon: "check" },
        ],
      },
      caption: "Ví dụ tự soạn. Mọi quy tắc mơ hồ (nghỉ trưa có tính không?) phải được ghi rõ trong yêu cầu.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: đặc tả → công cụ → kiểm thử",
      mermaid: `flowchart TD
  A["Đặc tả: đầu vào · quy tắc · đầu ra · giao diện"] --> B["Ca kiểm thử có đáp án (gồm trường hợp biên)"]
  B --> C["Yêu cầu Claude tạo artifact"]
  C --> D["Chạy từng ca kiểm thử"]
  D --> E{"Khớp đáp án?"}
  E -->|"Không"| F["Báo Claude: ca nào, kết quả sai thế nào"]
  F --> C
  E -->|"Có"| G{"Có lưu dữ liệu chung?"}
  G -->|"Có"| H["Kiểm tra không có dữ liệu nhạy cảm"]
  G -->|"Không"| I["Sẵn sàng chia sẻ"]
  H --> I`,
      caption: "Báo lỗi bằng ca kiểm thử cụ thể giúp Claude sửa đúng chỗ.",
      alt: "Lưu đồ: viết đặc tả gồm đầu vào, quy tắc, đầu ra, giao diện; viết ca kiểm thử có đáp án gồm trường hợp biên; yêu cầu Claude tạo artifact; chạy từng ca kiểm thử. Không khớp thì báo Claude ca nào sai và sai thế nào rồi sửa lại. Khớp thì xét có lưu dữ liệu chung không; nếu có thì kiểm tra không có dữ liệu nhạy cảm; sau đó sẵn sàng chia sẻ.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: báo lỗi cho Claude",
      bad: {
        label: "Báo lỗi chung chung",
        content: "“Công cụ tính sai rồi, sửa lại đi.”",
        notes: ["Không biết sai ở ca nào.", "Claude có thể sửa nhầm chỗ đang đúng.", "Không kiểm chứng được."],
      },
      good: {
        label: "Báo lỗi bằng ca kiểm thử",
        content: "“Ca 3 sai: vào 22h, ra 6h sáng hôm sau, mong đợi 8 giờ làm, 0 giờ tăng ca; công cụ hiện −16 giờ. Hãy xử lý ca qua nửa đêm (giờ ra nhỏ hơn giờ vào thì cộng 24 giờ), rồi chạy lại cả 5 ca và cho tôi xem kết quả.”",
        notes: ["Chỉ đúng ca sai.", "Nêu quy tắc cần sửa.", "Yêu cầu chạy lại toàn bộ ca."],
      },
      takeaway: "Ca kiểm thử là ngôn ngữ chung để bạn và Claude biết thế nào là đúng.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: xếp đặc tả máy tính giờ tăng ca",
      sim: {
        kind: "classify",
        bins: [
          { id: "input", label: "Đầu vào" },
          { id: "rule", label: "Quy tắc xử lý" },
          { id: "output", label: "Đầu ra" },
          { id: "edge", label: "Trường hợp biên" },
        ],
        items: [
          { id: "i1", text: "Giờ vào, giờ ra của từng ngày", bin: "input", why: "Người dùng nhập." },
          { id: "i2", text: "Phần vượt 8 giờ/ngày tính là tăng ca", bin: "rule", why: "Cách tính." },
          { id: "i3", text: "Tổng giờ tăng ca cuối tuần", bin: "output", why: "Kết quả hiện ra." },
          { id: "i4", text: "Ca đêm: giờ ra (6h) nhỏ hơn giờ vào (22h)", bin: "edge", why: "Qua nửa đêm — dễ tính ra số âm." },
          { id: "i5", text: "Ô bỏ trống vào ngày nghỉ", bin: "edge", why: "Không được báo lỗi hay tính sai." },
          { id: "i6", text: "Tăng ca Chủ nhật nhân hệ số 2", bin: "rule", why: "Điều kiện tính." },
          { id: "i7", text: "Bảng từng ngày: giờ làm, giờ tăng ca", bin: "output", why: "Kết quả chi tiết." },
          { id: "i8", text: "Mã nhân viên", bin: "input", why: "Người dùng nhập." },
        ],
      },
      intro: "Xếp từng dòng đặc tả vào đúng nhóm. Trường hợp biên là chỗ công cụ hay sai nhất.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dựng một công cụ tương tác",
      steps: [
        { title: "Viết đặc tả bốn phần", detail: "Đầu vào, quy tắc, đầu ra, giao diện — ghi rõ mọi quy tắc mơ hồ (làm tròn? nghỉ trưa?)." },
        { title: "Tự tính 3–5 ca kiểm thử", detail: "Gồm ít nhất một trường hợp biên." },
        { title: "Gửi yêu cầu kèm ca kiểm thử", detail: "Yêu cầu Claude tự chạy các ca và báo kết quả.", code: { lang: "text", content: "Tạo artifact công cụ tính số lượng đặt hàng. Đầu vào: tồn tối thiểu M, tồn hiện tại T (số nguyên ≥ 0). Quy tắc: đặt = 2M − T, nếu ≤ 0 thì 0, làm tròn lên bội số 10. Đầu ra: số lượng đặt, chữ lớn. Ca kiểm thử: M=50,T=30 → 70; M=50,T=35 → 70; M=50,T=120 → 0; T trống → báo “Nhập tồn hiện tại”." } },
        { title: "Chạy lại từng ca bằng tay", detail: "Đừng chỉ tin báo cáo — tự nhập và so kết quả." },
        { title: "Báo lỗi bằng ca cụ thể", detail: "Ca nào, mong đợi gì, công cụ hiện gì; yêu cầu chạy lại toàn bộ." },
        { title: "Rà dữ liệu lưu trữ", detail: "Nếu có lưu chung: chỉ lưu dữ liệu không nhạy cảm; ghi chú cho người dùng." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết 4 ca kiểm thử (mỗi ca một dòng, dạng “đầu vào → kết quả mong đợi”) cho công cụ trong dữ liệu mẫu, trong đó có ca kết quả bằng 0, ca cần làm tròn, và ca dữ liệu không hợp lệ.",
      sampleData: {
        name: "Đặc tả công cụ tính số lượng đặt hàng",
        content:
          "Đầu vào: tồn tối thiểu M, tồn hiện tại T.\nQuy tắc: đặt = 2M − T; nếu kết quả ≤ 0 thì đặt 0; làm tròn lên bội số 10.\nKhông hợp lệ: T trống hoặc âm → báo lỗi “Kiểm tra số tồn”.",
      },
      placeholder: "Ca 1: M=…, T=… → …\nCa 2: …\nCa 3: …\nCa 4: …",
      rubric: [
        { id: "count", label: "Có ít nhất 3 ca có kết quả số", weight: 1, check: { kind: "minMatches", pattern: "(→|->|=>)\\s*\\d+", value: 3 }, pass: "Đủ ca có số.", fail: "Viết ít nhất 3 ca dạng “M=…, T=… → số”." },
        { id: "zero", label: "Có ca kết quả 0", weight: 1, check: { kind: "regex", pattern: "(→|->|=>)\\s*0\\b" }, pass: "Có ca bằng 0.", fail: "Thêm ca T ≥ 2M → 0." },
        { id: "round", label: "Có ca làm tròn", weight: 1, check: { kind: "regex", pattern: "(lam tron|boi so|(→|->|=>)\\s*\\d*[1-9]0\\b)" }, pass: "Có ca làm tròn.", fail: "Thêm ca như M=50, T=35 → 65 làm tròn lên 70." },
        { id: "invalid", label: "Có ca không hợp lệ", weight: 1, check: { kind: "regex", pattern: "(so am|[−-]\\s*\\d|\\btrong\\b|khong hop le|bao loi|kiem tra so ton)" }, pass: "Có ca không hợp lệ.", fail: "Thêm ca T trống hoặc âm → báo lỗi." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Ca 1: M=50, T=30 → 70\nCa 2: M=50, T=35 → 70 (65 làm tròn lên bội số 10)\nCa 3: M=50, T=120 → 0\nCa 4: M=50, T=−5 (số âm) → báo lỗi “Kiểm tra số tồn”",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Mô tả công cụ theo bốn phần: đầu vào, quy tắc, đầu ra, giao diện; ghi rõ mọi quy tắc mơ hồ.",
        "Viết ca kiểm thử có đáp án, gồm trường hợp biên; tự chạy lại để duyệt.",
        "Báo lỗi bằng ca cụ thể: ca nào, mong đợi gì, công cụ hiện gì.",
        "Artifact gọi Claude: không cần API key, mỗi người tốn lượt của mình; ứng dụng kết nối: mỗi người tự duyệt; lưu trữ ≤ 20 MB văn bản.",
        "Lưu trữ chung ai mở cũng thấy — không nhập dữ liệu nhạy cảm.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một phép tính hay checklist bạn đang làm bằng tay hoặc Excel mỗi tuần.",
      tasks: [
        "Viết đặc tả bốn phần và 4 ca kiểm thử có đáp án.",
        "Nhờ Claude tạo công cụ; chạy lại cả 4 ca, báo lỗi bằng ca cụ thể nếu sai.",
        "Ghi rõ công cụ có lưu dữ liệu không, ai thấy được.",
      ],
      deliverable: "Công cụ hoàn chỉnh + bảng ca kiểm thử (Đầu vào | Mong đợi | Thực tế | Đạt?).",
      checklist: ["Có trường hợp biên", "Mọi ca đều đạt", "Không có dữ liệu nhạy cảm trong lưu trữ chung"],
    },
  ],
};
