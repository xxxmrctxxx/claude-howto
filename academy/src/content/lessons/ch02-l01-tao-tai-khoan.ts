import type { Lesson } from "@/lib/types/content";

const GS = "https://support.claude.com/en/articles/8114491-get-started-with-claude";
const LG = "https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account";
const PH = "https://support.claude.com/en/articles/8287232-verify-your-phone-number";
const WH = "https://support.claude.com/en/articles/8461763-where-can-i-access-claude";

export const lessonTaoTaiKhoan: Lesson = {
  id: "ch02-l01",
  chapterId: "ch02",
  slug: "tao-tai-khoan",
  title: "Tạo tài khoản",
  subtitle: "Đăng ký Claude bằng Google hoặc email, xác minh số điện thoại đúng cách, và xử lý các lỗi hay gặp khi đăng nhập.",
  level: "beginner",
  estimatedMinutes: 15,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Biết các nơi dùng Claude (web, ứng dụng máy tính, điện thoại) và điều kiện sử dụng (từ 18 tuổi, ở khu vực được hỗ trợ)." },
    { id: "o2", text: "Đăng ký và đăng nhập bằng Google hoặc email; hiểu liên kết đăng nhập và mã xác minh khi mở trên thiết bị khác." },
    { id: "o3", text: "Xác minh số điện thoại đúng quy định: số di động nhận SMS, không dùng số VoIP; tối đa 3 tài khoản cho một số; không đổi được số sau khi xác minh." },
    { id: "o4", text: "Tự xử lý sự cố đăng nhập và xác minh thường gặp." },
  ],
  concepts: [
    { id: "access-points", label: "Nơi dùng Claude" },
    { id: "eligibility", label: "Điều kiện: 18 tuổi, khu vực hỗ trợ" },
    { id: "google-login", label: "Continue with Google" },
    { id: "email-link", label: "Liên kết đăng nhập qua email" },
    { id: "cross-device-code", label: "Mã xác minh khi khác thiết bị" },
    { id: "no-password", label: "Không có mật khẩu" },
    { id: "phone-verification", label: "Xác minh số điện thoại" },
    { id: "voip-not-accepted", label: "Không nhận số VoIP" },
    { id: "three-accounts", label: "Tối đa 3 tài khoản/số" },
    { id: "number-permanent", label: "Không đổi được số" },
    { id: "login-troubleshoot", label: "Xử lý lỗi đăng nhập" },
    { id: "free-limit", label: "Giới hạn gói Free" },
  ],
  hints: [
    "Không có mật khẩu: đăng nhập bằng Google hoặc liên kết gửi qua email.",
    "Số điện thoại phải là số di động nhận được SMS; số VoIP, Google Voice, số cố định không được chấp nhận.",
    "Không thấy email đăng nhập → kiểm tra thư rác, cho phép @mail.anthropic.com.",
  ],
  sources: [
    { label: "Claude Help Center — Get started with Claude (nơi dùng, 18 tuổi, giới hạn gói Free)", href: GS },
    { label: "Claude Help Center — Log in to your Claude account (Google, email, mã khi khác thiết bị)", href: LG },
    { label: "Claude Help Center — Verify your phone number", href: PH },
    { label: "Claude Help Center — Where can I access Claude? (danh sách khu vực, có Việt Nam)", href: WH },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Bạn có thể dùng Claude trên **web tại claude.ai**, **ứng dụng máy tính** cho Mac và Windows, hoặc **ứng dụng điện thoại** iOS và Android — cùng một tài khoản. Theo Help Center, bạn phải **từ 18 tuổi** và đang ở **khu vực được hỗ trợ**; Việt Nam có trong danh sách khu vực (bài viết cập nhật 16/03/2026 — danh sách có thể thay đổi, hãy xem lại khi cần).",
        "Claude **không dùng mật khẩu**. Có hai cách đăng ký/đăng nhập chính: **Continue with Google**, hoặc **Continue with email** — Claude gửi thư có tiêu đề “Secure link to log in to Claude.ai” chứa liên kết đăng nhập. Mở liên kết trên **cùng thiết bị** thì đăng nhập luôn; mở trên **thiết bị khác** thì liên kết hiện một **mã xác minh** để bạn nhập trên thiết bị đã yêu cầu email. Dùng cùng một địa chỉ email trên mọi thiết bị để vào đúng một tài khoản.",
        "**Mọi tài khoản mới đều phải xác minh số điện thoại**, không bỏ qua được. Số phải là **số di động nhận được SMS** ở khu vực được hỗ trợ; **không** chấp nhận số VoIP, Google Voice, số tạo từ ứng dụng hay số cố định. Một số điện thoại xác minh được **tối đa 3 tài khoản**, và **sau khi xác minh thì không đổi được số** — hãy dùng số bạn sẽ giữ lâu dài.",
        "Sự cố hay gặp: không thấy email → xem thư rác, cho phép địa chỉ @mail.anthropic.com, chờ vài phút; email công ty/trường học có thể cần bộ phận IT nới bộ lọc. Không nhận mã SMS sau 5 phút → bấm “Try again” và kiểm tra lại số. Mã bị từ chối → mã có hạn, xin mã mới và nhập ngay. Báo số đã dùng quá nhiều lần → dùng số khác hoặc liên hệ Support. Gói **Free** có giới hạn sử dụng theo phiên, **đặt lại sau mỗi 5 giờ**; gói trả phí có nhiều lượt dùng hơn.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Giống làm thẻ thư viện: bạn cần đủ tuổi, đăng ký bằng giấy tờ thật (số di động thật), và thẻ gắn với một số liên lạc cố định. Thư viện không đưa mật khẩu — mỗi lần vào, họ gửi “vé vào cửa” qua email.",
      },
      terms: [
        { term: "Magic link", definition: "Liên kết đăng nhập gửi qua email thay cho mật khẩu." },
        { term: "SMS", definition: "Tin nhắn văn bản gửi tới số di động, dùng để nhận mã xác minh." },
        { term: "VoIP", definition: "Số điện thoại qua Internet (ví dụ Google Voice) — Claude không chấp nhận để xác minh." },
        { term: "Khu vực được hỗ trợ", definition: "Danh sách quốc gia/vùng lãnh thổ nơi Anthropic cung cấp Claude." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: các bước tạo tài khoản",
      infographic: {
        kind: "flow",
        steps: [
          { title: "Mở Claude", body: "Vào claude.ai, hoặc mở ứng dụng máy tính/điện thoại.", icon: "globe" },
          { title: "Chọn cách đăng nhập", body: "Continue with Google hoặc Continue with email.", icon: "user" },
          { title: "Mở email đăng nhập", body: "Thư “Secure link to log in to Claude.ai” — bấm liên kết; khác thiết bị thì nhập mã.", icon: "message" },
          { title: "Xác minh số di động", body: "Nhập số nhận được SMS, rồi nhập mã mới nhất.", icon: "shield" },
          { title: "Bắt đầu trò chuyện", body: "Gõ yêu cầu đầu tiên vào ô chat và bấm gửi.", icon: "rocket" },
        ],
      },
      caption: "Tổng hợp từ Help Center (đối chiếu 03/11/2026). Giao diện thật có thể khác đôi chút theo thiết bị và thời điểm.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: đăng nhập bằng email",
      mermaid: `flowchart TD
  A["Continue with email"] --> B["Nhận thư: Secure link to log in to Claude.ai"]
  B --> C{"Mở liên kết trên thiết bị nào?"}
  C -->|"Cùng thiết bị"| D["Đăng nhập ngay"]
  C -->|"Thiết bị khác"| E["Liên kết hiện mã xác minh"]
  E --> F["Nhập mã trên thiết bị đã yêu cầu email"]
  F --> D
  B -.->|"Không thấy thư"| G["Xem thư rác, cho phép @mail.anthropic.com, chờ vài phút"]`,
      caption: "Không có mật khẩu: mỗi lần đăng nhập bằng email là một liên kết hoặc mã mới.",
      alt: "Lưu đồ đăng nhập bằng email: chọn Continue with email, nhận thư Secure link to log in to Claude.ai. Nếu mở liên kết trên cùng thiết bị thì đăng nhập ngay; nếu mở trên thiết bị khác thì liên kết hiện mã xác minh, nhập mã đó trên thiết bị đã yêu cầu email rồi đăng nhập. Nếu không thấy thư thì xem thư rác, cho phép @mail.anthropic.com và chờ vài phút.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: chuẩn bị tài khoản",
      bad: {
        label: "Tiện trước mắt",
        content: "Dùng email chung của phòng (phong-qa@…) và một số Google Voice cho nhanh; lần sau đổi số cũng được.",
        notes: ["Số VoIP/Google Voice không được chấp nhận.", "Số đã xác minh không đổi được.", "Email chung khiến nhiều người dùng một tài khoản."],
      },
      good: {
        label: "Bền vững",
        content: "Dùng email của chính bạn (cá nhân hoặc công ty, dùng lâu dài) và số di động thật nhận được SMS mà bạn sẽ giữ lâu.",
        notes: ["Đúng quy định xác minh.", "Không phụ thuộc người khác.", "Đăng nhập bằng cùng email trên mọi thiết bị."],
      },
      takeaway: "Email của bạn + số di động thật, giữ lâu dài.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: gỡ rối khi đăng ký",
      sim: {
        kind: "choose",
        options: [
          { id: "spam", label: "Xem thư rác, cho phép @mail.anthropic.com" },
          { id: "code", label: "Nhập mã trên thiết bị đã yêu cầu email" },
          { id: "mobile", label: "Dùng số di động thật nhận được SMS" },
          { id: "new-code", label: "Xin mã mới và nhập ngay" },
          { id: "retry", label: "Bấm “Try again”, kiểm tra lại số" },
          { id: "other-number", label: "Dùng số khác hoặc liên hệ Support" },
        ],
        scenarios: [
          { id: "s1", text: "Đã chọn Continue with email nhưng 10 phút chưa thấy thư đăng nhập.", answer: "spam", why: "Thư có thể vào thư rác hoặc bị bộ lọc giữ lại." },
          { id: "s2", text: "Yêu cầu email trên laptop nhưng mở liên kết trên điện thoại.", answer: "code", why: "Khác thiết bị: liên kết hiện mã, nhập mã trên laptop." },
          { id: "s3", text: "Nhập số Google Voice thì bị từ chối.", answer: "mobile", why: "Không chấp nhận số VoIP/Google Voice." },
          { id: "s4", text: "Nhập mã SMS nhận từ hôm qua thì báo sai.", answer: "new-code", why: "Mã có hạn; dùng mã mới nhất." },
          { id: "s5", text: "Hơn 5 phút chưa nhận được SMS.", answer: "retry", why: "Help Center: quá 5 phút thì bấm Try again và nhập lại đúng số." },
          { id: "s6", text: "Báo số điện thoại đã được dùng quá nhiều lần.", answer: "other-number", why: "Mỗi số tối đa 3 tài khoản." },
        ],
      },
      intro: "Mỗi tình huống là một lỗi thật hay gặp. Chọn cách xử lý theo Help Center.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: tạo tài khoản",
      steps: [
        { title: "Kiểm tra điều kiện", detail: "Từ 18 tuổi, đang ở khu vực được hỗ trợ; có số di động nhận SMS." },
        { title: "Mở claude.ai", detail: "Hoặc tải ứng dụng Claude cho máy tính (Mac/Windows) hay điện thoại (iOS/Android)." },
        { title: "Chọn cách đăng nhập", detail: "Continue with Google, hoặc Continue with email rồi mở thư “Secure link to log in to Claude.ai”." },
        { title: "Xác minh số di động", detail: "Nhập số bạn sẽ giữ lâu dài, nhập mã SMS mới nhất. Sau bước này không đổi được số." },
        { title: "Gửi tin nhắn đầu tiên", detail: "Bắt đầu bằng một câu hỏi đơn giản, cụ thể.", code: { lang: "text", content: "Giải thích ngắn gọn cho người mới: Claude có thể giúp gì cho công việc văn phòng hằng ngày? Trả lời bằng 5 gạch đầu dòng." } },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc tình huống trong dữ liệu mẫu và viết hướng dẫn ngắn (4–6 dòng) giúp chị Lan tạo tài khoản đúng ngay từ đầu.",
      sampleData: {
        name: "Tình huống",
        content:
          "Chị Lan, 25 tuổi, làm ở Hà Nội. Chị có: email cá nhân, email công ty (bộ lọc thư rất chặt), số máy bàn ở văn phòng, số di động cá nhân dùng nhiều năm, và một số ảo tạo từ ứng dụng gọi điện qua Internet. Chị định dùng Claude trên cả laptop và điện thoại.",
      },
      placeholder: "1. …\n2. …\n3. …\n4. …",
      rubric: [
        { id: "login", label: "Cách đăng nhập (Google hoặc email)", weight: 1, check: { kind: "anyKeyword", keywords: ["google", "continue with email", "email"] }, pass: "Có cách đăng nhập.", fail: "Nêu cách đăng nhập: Google hoặc email." },
        { id: "mobile", label: "Dùng số di động cá nhân", weight: 1, check: { kind: "regex", pattern: "(so )?di dong[^\\n]*(ca nhan|that|sms|lau dai)" }, pass: "Chọn đúng số.", fail: "Chọn số di động cá nhân nhận SMS, giữ lâu dài." },
        { id: "not-voip", label: "Loại số ảo/máy bàn", weight: 1, check: { kind: "anyKeyword", keywords: ["không dùng số ảo", "không dùng số máy bàn", "voip", "không dùng máy bàn", "không dùng số cố định"] }, pass: "Có loại số không hợp lệ.", fail: "Nói rõ: không dùng số ảo (VoIP) hay số máy bàn." },
        { id: "spam", label: "Xử lý email bị lọc", weight: 1, check: { kind: "anyKeyword", keywords: ["thư rác", "spam", "mail.anthropic.com", "bộ phận it"] }, pass: "Có xử lý thư bị lọc.", fail: "Nhắc kiểm tra thư rác / cho phép @mail.anthropic.com." },
        { id: "same-email", label: "Cùng email trên mọi thiết bị", weight: 1, check: { kind: "anyKeyword", keywords: ["cùng email", "cùng một email", "cùng địa chỉ email", "cùng tài khoản"] }, pass: "Có lưu ý đa thiết bị.", fail: "Dùng cùng một email trên laptop và điện thoại." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "1. Đăng ký bằng Continue with email với email cá nhân (hoặc Continue with Google) — email công ty lọc chặt, nếu dùng thì nhờ bộ phận IT cho phép @mail.anthropic.com.\n2. Không thấy thư đăng nhập thì xem thư rác.\n3. Xác minh bằng số di động cá nhân dùng nhiều năm (nhận SMS, giữ lâu dài).\n4. Không dùng số ảo VoIP hay số máy bàn — không được chấp nhận.\n5. Trên laptop và điện thoại, đăng nhập bằng cùng một email để vào cùng tài khoản.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Dùng Claude trên web (claude.ai), ứng dụng máy tính Mac/Windows, ứng dụng iOS/Android — cùng một tài khoản.",
        "Điều kiện: từ 18 tuổi, ở khu vực được hỗ trợ (Việt Nam có trong danh sách, xem lại khi cần).",
        "Không có mật khẩu: Continue with Google hoặc liên kết qua email; mở trên thiết bị khác thì nhập mã.",
        "Bắt buộc xác minh số di động nhận SMS; không nhận VoIP/Google Voice/số cố định; tối đa 3 tài khoản/số; không đổi được số.",
        "Gói Free giới hạn theo phiên, đặt lại sau mỗi 5 giờ.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Tạo (hoặc rà lại) tài khoản Claude của bạn.",
      tasks: [
        "Tạo tài khoản bằng email bạn sẽ dùng lâu dài, xác minh bằng số di động của chính bạn.",
        "Đăng nhập trên một thiết bị thứ hai bằng cùng email; thử luồng nhập mã khi mở liên kết trên thiết bị khác.",
        "Gửi một câu hỏi đầu tiên cụ thể và ghi lại điều bạn thấy hữu ích.",
      ],
      deliverable: "Ghi chú: Email dùng | Cách đăng nhập | Thiết bị đã đăng nhập | Câu hỏi đầu tiên và nhận xét.",
      checklist: ["Không dùng số ảo hay số máy bàn", "Không dùng chung tài khoản với người khác", "Đã thử đăng nhập trên thiết bị thứ hai"],
    },
  ],
};
