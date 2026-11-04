import type { Lesson } from "@/lib/types/content";

const OV = "https://platform.claude.com/docs/en/api/overview";
const AU = "https://platform.claude.com/docs/en/manage-claude/authentication";
const WM = "https://platform.claude.com/docs/en/build-with-claude/working-with-messages";
const ER = "https://platform.claude.com/docs/en/api/errors";
const VE = "https://platform.claude.com/docs/en/api/versioning";

export const lessonKetNoiApi: Lesson = {
  id: "ch11-l01",
  chapterId: "ch11",
  slug: "ket-noi-api",
  title: "Kết nối API",
  subtitle: "Gọi Claude từ chương trình của bạn: tài khoản Console, API key giữ bí mật, một yêu cầu Messages API, đọc phản hồi và xử lý lỗi.",
  level: "intermediate",
  estimatedMinutes: 35,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Phân biệt dùng Claude qua giao diện với gọi Claude API; biết cần tài khoản Claude Console và API key." },
    { id: "o2", text: "Giữ API key an toàn: biến môi trường, không đưa vào code/repo, đặt hạn dùng, vô hiệu hoá key nghi lộ." },
    { id: "o3", text: "Viết một yêu cầu Messages API (model, max_tokens, messages) và đọc phản hồi (content, stop_reason, usage)." },
    { id: "o4", text: "Xử lý lỗi thường gặp (401, 429, 529, 500) và biết SDK tự thử lại; ghi request-id khi cần hỗ trợ." },
  ],
  concepts: [
    { id: "console-account", label: "Tài khoản Console và API key" },
    { id: "api-key-secret", label: "API key là bí mật" },
    { id: "env-var", label: "Biến môi trường ANTHROPIC_API_KEY" },
    { id: "key-expiration", label: "Hạn dùng và vô hiệu hoá key" },
    { id: "messages-endpoint", label: "POST /v1/messages" },
    { id: "request-headers", label: "Header của yêu cầu" },
    { id: "request-body", label: "model, max_tokens, messages" },
    { id: "response-blocks", label: "content, stop_reason, usage" },
    { id: "stateless", label: "API không tự nhớ hội thoại" },
    { id: "official-sdk", label: "SDK chính thức" },
    { id: "error-codes", label: "Mã lỗi thường gặp" },
    { id: "request-id", label: "request-id" },
  ],
  hints: [
    "SDK đọc key từ biến môi trường ANTHROPIC_API_KEY — không cần (và không nên) viết key vào code.",
    "Phản hồi có nhiều khối trong content; đọc stop_reason để biết vì sao Claude dừng.",
    "API không nhớ gì giữa các lần gọi: muốn hội thoại nhiều lượt thì gửi lại toàn bộ lịch sử.",
  ],
  sources: [
    { label: "Claude API Docs — API overview (endpoint, header, lấy API key, giới hạn kích thước)", href: OV },
    { label: "Claude API Docs — Authentication (loại key, hạn dùng, lưu trữ an toàn)", href: AU },
    { label: "Claude API Docs — Using the Messages API (yêu cầu, phản hồi, stateless)", href: WM },
    { label: "Claude API Docs — Errors (mã lỗi, SDK tự thử lại, request-id)", href: ER },
    { label: "Claude API Docs — Versions (header anthropic-version)", href: VE },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Từ Chương 2 đến 10 bạn làm việc với Claude qua **giao diện** (claude.ai, Claude Code). Chương 11 đưa Claude vào **chương trình của bạn** — script đọc file, tóm tắt, ghi báo cáo mà không ai phải ngồi gõ. Cửa vào là **Claude API**: một API REST tại `https://api.anthropic.com`. Để dùng, bạn cần **tài khoản Claude Console** (platform.claude.com) và một **API key** tạo ở trang API keys của Console.",
        "**API key là bí mật** — ai có key là gọi API được bằng tài khoản của bạn. Quy tắc: lưu key trong **biến môi trường `ANTHROPIC_API_KEY`** (SDK tự đọc) hoặc trình quản lý bí mật; **không** viết vào code, không commit lên Git, không dán vào chat. Khi tạo key, chọn **hạn dùng** (3 giờ, 1 ngày, 7 ngày, 30 ngày, tuỳ chỉnh hoặc không hết hạn); nghi lộ thì **Disable** (bật lại được) hoặc **Delete** (vĩnh viễn) ngay trong Console. Việc dùng chung, tự động (CI, máy chủ) nên dùng key của **service account** thay vì key cá nhân.",
        "Một lần gọi là `POST /v1/messages` với header xác thực (`Authorization: Bearer <key>`, hoặc `x-api-key` kiểu cũ), `anthropic-version` (phiên bản API, ví dụ `2026-10-21`) và `content-type: application/json`. Thân yêu cầu tối thiểu: **`model`** (ID mô hình, xem trang Models overview), **`max_tokens`** (giới hạn độ dài trả lời) và **`messages`** (danh sách lượt `user`/`assistant`). Dùng **SDK chính thức** (Python, TypeScript…) thì SDK tự gửi header, tự **thử lại** lỗi tạm thời (mặc định 2 lần, có giãn cách) và báo lỗi theo kiểu rõ ràng.",
        "Phản hồi có **`content`** (danh sách khối — thường là khối `text`), **`stop_reason`** (`end_turn` = xong tự nhiên, `max_tokens` = bị cắt vì hết giới hạn, `tool_use` = muốn gọi công cụ, `refusal` = từ chối) và **`usage`** (số token vào/ra — để tính chi phí, Chương 8). API **không tự nhớ hội thoại**: mỗi lần gọi phải gửi lại toàn bộ lịch sử cần thiết. Lỗi hay gặp: **401** key sai/hết hạn, **429** chạm giới hạn tốc độ hoặc chi tiêu, **529** API quá tải, **500** lỗi nội bộ (thử lại có giãn cách). Mỗi phản hồi có **`request-id`** — ghi lại khi cần liên hệ hỗ trợ.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Giống gọi tổng đài kỹ thuật bằng thẻ nhân viên: thẻ (API key) không cho ai mượn, mỗi cuộc gọi phải nói rõ mình là ai và hỏi gì (header + messages), tổng đài viên không nhớ cuộc gọi trước (stateless) nên bạn phải tóm tắt lại, và mỗi cuộc gọi có mã phiếu (request-id) để tra cứu khi khiếu nại.",
      },
      terms: [
        { term: "API", definition: "Cửa giao tiếp giữa các chương trình; ở đây là cách chương trình của bạn gửi yêu cầu cho Claude." },
        { term: "API key", definition: "Chuỗi bí mật xác định tài khoản gọi API; tạo trong Claude Console." },
        { term: "Biến môi trường", definition: "Giá trị cấu hình đặt ngoài code (ví dụ ANTHROPIC_API_KEY), chương trình đọc khi chạy." },
        { term: "stop_reason", definition: "Lý do Claude dừng trả lời: end_turn, max_tokens, tool_use, refusal…" },
        { term: "Stateless", definition: "Không lưu trạng thái giữa các lần gọi; mỗi yêu cầu phải tự chứa đủ ngữ cảnh." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: giải phẫu một lần gọi API",
      infographic: {
        kind: "annotated",
        label: "Một yêu cầu Messages API (HTTP)",
        lines: [
          { text: "POST https://api.anthropic.com/v1/messages", tone: "role", note: "Endpoint Messages API" },
          { text: "Authorization: Bearer $ANTHROPIC_API_KEY", tone: "constraints", note: "Key lấy từ biến môi trường, không viết thẳng" },
          { text: "anthropic-version: 2026-10-21", tone: "context", note: "Phiên bản API; SDK tự gửi" },
          { text: "{ \"model\": \"claude-opus-5-5\", \"max_tokens\": 1024,", tone: "task", note: "Chọn mô hình và giới hạn độ dài" },
          { text: "  \"messages\": [{ \"role\": \"user\", \"content\": \"Tóm tắt…\" }] }", tone: "task", note: "Nội dung yêu cầu" },
          { text: "→ content[…], stop_reason, usage, request-id", tone: "output", note: "Đọc khối text, lý do dừng, token; lưu request-id khi lỗi" },
        ],
      },
      caption: "Theo API overview và Using the Messages API (đối chiếu 03/11/2026). ID mô hình và phiên bản API thay đổi theo thời gian.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: script gọi Claude API",
      mermaid: `flowchart TD
  A["Script đọc ANTHROPIC_API_KEY từ biến môi trường"] --> B["Gửi POST /v1/messages qua SDK"]
  B --> C{"Mã phản hồi"}
  C -->|"200"| D{"stop_reason"}
  C -->|"429 / 529 / 5xx"| E["SDK tự thử lại có giãn cách"]
  E --> B
  C -->|"401 / 400"| F["Dừng, sửa key hoặc yêu cầu; ghi request-id"]
  D -->|"end_turn"| G["Lấy khối text, ghi usage"]
  D -->|"max_tokens"| H["Tăng max_tokens hoặc chia nhỏ việc"]
  D -->|"refusal"| I["Ghi log, không dùng kết quả"]`,
      caption: "Lỗi tạm thời thì thử lại; lỗi do yêu cầu hoặc key thì sửa rồi mới gọi lại.",
      alt: "Lưu đồ: script đọc API key từ biến môi trường, gửi POST /v1/messages qua SDK. Nếu mã 200 thì xét stop_reason: end_turn lấy văn bản và ghi usage; max_tokens thì tăng giới hạn hoặc chia nhỏ việc; refusal thì ghi log và không dùng kết quả. Nếu 429, 529 hoặc 5xx thì SDK tự thử lại có giãn cách. Nếu 401 hoặc 400 thì dừng, sửa key hoặc yêu cầu và ghi request-id.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: script tóm tắt biên bản",
      bad: {
        label: "Key trong code, không kiểm tra gì",
        content: "client = anthropic.Anthropic(api_key=\"sk-ant-api03-…\")  # dán thẳng key\nmsg = client.messages.create(model=…, max_tokens=50, messages=[…])\nprint(msg.content[0].text)  # in luôn, không xem stop_reason",
        notes: ["Commit file là lộ key.", "max_tokens 50 dễ cắt cụt bản tóm tắt.", "Không biết khi nào kết quả bị cắt hoặc bị từ chối."],
      },
      good: {
        label: "Key từ môi trường, kiểm tra stop_reason, ghi usage",
        content: "client = anthropic.Anthropic()  # đọc ANTHROPIC_API_KEY\nmsg = client.messages.create(model=…, max_tokens=1024, messages=[…])\nif msg.stop_reason != \"end_turn\": ghi log (stop_reason, request-id) và dừng\nlấy các khối type == \"text\"; ghi msg.usage để theo dõi chi phí",
        notes: ["Key không nằm trong code.", "Biết được kết quả bị cắt/từ chối.", "Có số liệu token để kiểm soát chi phí."],
      },
      takeaway: "Bí mật nằm ngoài code; mọi kết quả đều được kiểm tra trước khi dùng.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: đối chiếu với tài liệu API",
      sim: {
        kind: "verify",
        sourceTitle: "Trích API overview, Authentication, Using the Messages API, Errors (đối chiếu 03/11/2026)",
        sourceLines: [
          "To use the Claude API, you need a Claude Console account and an API key from the Console.",
          "If you are using the Client SDKs, the SDK sends the authentication, version, and content-type headers automatically.",
          "Store API keys in a secrets manager, rotate them periodically, and disable or delete any key you suspect has leaked.",
          "The Messages API is stateless, which means that you always send the full conversational history to the API.",
          "The official SDK automatically retries transient failures with exponential backoff, twice by default.",
          "Every API response includes a unique request-id header.",
        ],
        verdicts: [
          { id: "dung", label: "Đúng theo nguồn" },
          { id: "sai", label: "Sai theo nguồn" },
          { id: "khong-noi", label: "Nguồn không nói" },
        ],
        claims: [
          { id: "c1", text: "Dùng SDK thì không phải tự viết header anthropic-version.", verdict: "dung", why: "Dòng 2." },
          { id: "c2", text: "API tự nhớ các lượt trước nên chỉ cần gửi câu hỏi mới.", verdict: "sai", why: "Dòng 4: stateless — gửi lại toàn bộ lịch sử." },
          { id: "c3", text: "Nghi key bị lộ thì vô hiệu hoá hoặc xoá key đó.", verdict: "dung", why: "Dòng 3." },
          { id: "c4", text: "SDK thử lại vô hạn lần cho đến khi thành công.", verdict: "sai", why: "Dòng 5: mặc định 2 lần." },
          { id: "c5", text: "Gọi API được bằng tài khoản claude.ai miễn phí mà không cần API key.", verdict: "sai", why: "Dòng 1: cần tài khoản Console và API key." },
          { id: "c6", text: "Mỗi phản hồi có request-id để tra cứu.", verdict: "dung", why: "Dòng 6." },
          { id: "c7", text: "Mọi yêu cầu API đều miễn phí trong tháng đầu.", verdict: "khong-noi", why: "Các đoạn trích không nói về giá; xem trang Pricing." },
        ],
        note: "Chi tiết thay đổi theo thời gian; luôn đối chiếu tài liệu hiện hành.",
      },
      intro: "Xếp mỗi khẳng định: đúng, sai, hay nguồn không nói.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: lần gọi API đầu tiên (Python)",
      steps: [
        { title: "Tạo API key", detail: "Console → API keys → Create key; đặt tên rõ nghĩa và chọn hạn dùng. Sao chép key một lần, cất vào trình quản lý bí mật." },
        { title: "Đặt biến môi trường", detail: "Trong terminal của bạn (không ghi vào file sẽ commit).", code: { lang: "bash", content: "export ANTHROPIC_API_KEY=\"dán-key-vào-đây\"" } },
        { title: "Cài SDK", detail: "Thư viện chính thức cho Python.", code: { lang: "bash", content: "pip install anthropic" } },
        {
          title: "Viết script",
          detail: "Đọc key từ môi trường, kiểm tra stop_reason, in văn bản và usage.",
          code: {
            lang: "python",
            content:
              "import anthropic\n\nclient = anthropic.Anthropic()  # đọc ANTHROPIC_API_KEY\nmsg = client.messages.create(\n    model=\"claude-opus-5-5\",  # xem Models overview để chọn ID hiện hành\n    max_tokens=1024,\n    messages=[{\"role\": \"user\", \"content\": \"Tóm tắt biên bản sau trong 3 gạch đầu dòng: ...\"}],\n)\nif msg.stop_reason != \"end_turn\":\n    raise SystemExit(f\"Dừng vì {msg.stop_reason}, request-id {msg._request_id}\")\nprint(\"\".join(b.text for b in msg.content if b.type == \"text\"))\nprint(msg.usage.input_tokens, msg.usage.output_tokens)",
          },
        },
        { title: "Chạy và đọc kết quả", detail: "Ghi lại số token để ước tính chi phí khi chạy hằng ngày.", code: { lang: "bash", content: "python tom_tat.py" } },
        { title: "Bảo vệ repo", detail: "Thêm .env vào .gitignore nếu bạn lưu key trong file .env cục bộ; kiểm tra git status trước mỗi commit." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Đọc đoạn script trong dữ liệu mẫu. Liệt kê các lỗi và cách sửa: ít nhất về (1) nơi để API key, (2) giới hạn max_tokens, (3) việc kiểm tra stop_reason, (4) hội thoại nhiều lượt.",
      sampleData: {
        name: "script_bao_cao.py (trích)",
        content:
          "client = anthropic.Anthropic(api_key=\"sk-ant-api03-AbC...\")\nmsg1 = client.messages.create(model=\"claude-opus-5-5\", max_tokens=30,\n    messages=[{\"role\": \"user\", \"content\": \"Tóm tắt báo cáo lỗi tuần 45: ...\"}])\nmsg2 = client.messages.create(model=\"claude-opus-5-5\", max_tokens=30,\n    messages=[{\"role\": \"user\", \"content\": \"So sánh với tuần trước bạn vừa tóm tắt\"}])\nprint(msg2.content[0].text)",
      },
      placeholder: "1. …\n2. …\n3. …\n4. …",
      rubric: [
        { id: "env", label: "Key ra biến môi trường", weight: 1, check: { kind: "anyKeyword", keywords: ["biến môi trường", "anthropic_api_key", "env", "secret"] }, pass: "Đã chuyển key ra ngoài code.", fail: "Key phải đọc từ biến môi trường ANTHROPIC_API_KEY." },
        { id: "tokens", label: "Tăng max_tokens", weight: 1, check: { kind: "anyKeyword", keywords: ["max_tokens", "max tokens"] }, pass: "Có xử lý max_tokens.", fail: "max_tokens 30 quá nhỏ — tăng lên (ví dụ 1024)." },
        { id: "stop", label: "Kiểm tra stop_reason", weight: 1, check: { kind: "anyKeyword", keywords: ["stop_reason", "stop reason"] }, pass: "Có kiểm tra lý do dừng.", fail: "Kiểm tra stop_reason trước khi dùng kết quả." },
        { id: "history", label: "Gửi lại lịch sử", weight: 1, check: { kind: "anyKeyword", keywords: ["lịch sử", "stateless", "không nhớ", "gửi lại"] }, pass: "Hiểu API không nhớ.", fail: "Lần gọi 2 không biết bản tóm tắt cũ — gửi lại lịch sử hội thoại." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "1. Key viết thẳng trong code → xoá, dùng anthropic.Anthropic() đọc biến môi trường ANTHROPIC_API_KEY; key đã lộ thì vô hiệu hoá trong Console và tạo key mới.\n2. max_tokens=30 quá nhỏ, bản tóm tắt sẽ bị cắt → tăng lên khoảng 1024.\n3. Không kiểm tra stop_reason → nếu khác end_turn (ví dụ max_tokens, refusal) thì ghi log kèm request-id và không dùng kết quả.\n4. API không nhớ (stateless): lần gọi 2 không biết bản tóm tắt tuần 45 → gửi lại lịch sử: lượt user 1, lượt assistant là msg1, rồi câu hỏi mới. Thêm: lấy mọi khối type text thay vì chỉ content[0].",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Claude API cần tài khoản Claude Console và API key; endpoint chính là POST /v1/messages.",
        "API key là bí mật: biến môi trường hoặc trình quản lý bí mật, có hạn dùng, nghi lộ thì vô hiệu hoá.",
        "Yêu cầu tối thiểu: model, max_tokens, messages; SDK tự gửi header và tự thử lại lỗi tạm thời.",
        "Đọc content theo khối, kiểm tra stop_reason, ghi usage; API không nhớ hội thoại.",
        "401 sửa key, 429/529/5xx thử lại có giãn cách, ghi request-id khi cần hỗ trợ.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Bạn muốn một script tóm tắt nhật ký ca làm việc (file văn bản) mỗi sáng.",
      tasks: [
        "Tạo API key có hạn dùng, lưu vào biến môi trường hoặc trình quản lý bí mật.",
        "Viết script đọc file, gọi Messages API, kiểm tra stop_reason, in tóm tắt và usage.",
        "Chạy 3 ngày, ghi số token mỗi lần và ước tính chi phí tháng theo trang Pricing.",
      ],
      deliverable: "Script chạy được + bảng token 3 ngày + ước tính chi phí có ghi nguồn giá.",
      checklist: ["Không có key trong code hoặc lịch sử Git", "Có xử lý stop_reason khác end_turn", "Có ghi request-id khi lỗi"],
    },
  ],
};
