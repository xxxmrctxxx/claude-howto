import type { Lesson } from "@/lib/types/content";

const SO = "https://platform.claude.com/docs/en/build-with-claude/structured-outputs";
const TU = "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview";
const WM = "https://platform.claude.com/docs/en/build-with-claude/working-with-messages";

export const lessonXuLyDuLieu: Lesson = {
  id: "ch11-l02",
  chapterId: "ch11",
  slug: "xu-ly-du-lieu",
  title: "Xử lý dữ liệu",
  subtitle: "Biến ghi chú tự do thành dữ liệu có cấu trúc bằng structured outputs (JSON schema), rồi kiểm tra từng bản ghi trước khi nạp vào hệ thống.",
  level: "intermediate",
  estimatedMinutes: 35,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Dùng structured outputs (output_config.format, JSON schema) để Claude trả về JSON đúng khuôn." },
    { id: "o2", text: "Thiết kế schema tốt: trường bắt buộc, enum, additionalProperties false, cho phép “chưa rõ” thay vì bắt đoán." },
    { id: "o3", text: "Biết giới hạn: ràng buộc số/độ dài không được hỗ trợ, refusal/max_tokens có thể làm JSON không khớp, enum có thể lệch chữ hoa." },
    { id: "o4", text: "Kiểm tra cục bộ và đối chiếu nguồn trước khi nạp dữ liệu vào bảng hay cơ sở dữ liệu." },
  ],
  concepts: [
    { id: "structured-outputs", label: "Structured outputs" },
    { id: "json-schema", label: "JSON schema" },
    { id: "required-fields", label: "Trường bắt buộc" },
    { id: "no-extra-fields", label: "additionalProperties: false" },
    { id: "enum-field", label: "Trường enum" },
    { id: "strict-tools", label: "Strict tool use" },
    { id: "schema-limits", label: "Ràng buộc không hỗ trợ" },
    { id: "local-validation", label: "Kiểm tra cục bộ" },
    { id: "stop-check", label: "refusal và max_tokens" },
    { id: "enum-casing", label: "Lệch chữ hoa trong enum" },
    { id: "unknown-value", label: "Cho phép “chưa rõ”" },
    { id: "source-check", label: "Đối chiếu ghi chú gốc" },
  ],
  hints: [
    "Schema đặt trong output_config.format với type json_schema; JSON trả về nằm trong khối text.",
    "minimum/maximum/minLength không được hỗ trợ trong schema — tự kiểm tra sau khi nhận.",
    "Ghi chú gốc không có thông tin thì cho phép null/“chưa rõ”, đừng ép Claude đoán.",
  ],
  sources: [
    { label: "Claude API Docs — Structured outputs (output_config.format, tính năng schema hỗ trợ/không hỗ trợ, trường hợp không khớp)", href: SO },
    { label: "Claude API Docs — Tool use overview (strict tool use)", href: TU },
    { label: "Claude API Docs — Using the Messages API (không hỗ trợ prefill trên mô hình mới)", href: WM },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Dữ liệu ở xưởng thường là **văn bản tự do**: “ca 2 thấy 3 vỏ nứt ở lắp ráp, nặng”. Muốn tính toán, bạn cần **bản ghi có cấu trúc**: công đoạn, loại lỗi, số lượng, mức độ. Claude đọc văn bản tự do rất tốt; việc của bạn là bắt nó **trả về đúng khuôn** để chương trình đọc được.",
        "**Structured outputs**: đặt một **JSON schema** trong `output_config.format` (`type: \"json_schema\"`). Claude trả về JSON theo schema trong khối `text`, bạn `json.loads` là dùng được. Schema tốt có **`required`** (trường bắt buộc), **`enum`** cho giá trị cố định (công đoạn, mức độ), **`additionalProperties: false`** (bắt buộc với object). Khi Claude gọi **công cụ** của bạn (bài 11.6), thêm `strict: true` vào định nghĩa công cụ để tham số luôn khớp schema. Trên các mô hình mới, kỹ thuật “prefill” (viết sẵn đầu câu trả lời) không còn được hỗ trợ — dùng structured outputs thay thế.",
        "**Giới hạn cần nhớ** (theo tài liệu): ràng buộc số (`minimum`, `maximum`) và độ dài chuỗi (`minLength`, `maxLength`) **không được hỗ trợ** — dùng sẽ bị lỗi 400, nên phải **tự kiểm tra sau khi nhận**. Khi `stop_reason` là **`refusal`** hoặc **`max_tokens`**, JSON **có thể không khớp** schema (bị cắt hoặc là lời từ chối). Giá trị enum có thể **lệch chữ hoa/thường** — so sánh không phân biệt hoa thường. Có giới hạn độ phức tạp (ví dụ tối đa 24 tham số tuỳ chọn mỗi yêu cầu).",
        "**JSON đúng khuôn chưa chắc đúng sự thật.** Nếu ghi chú gốc không nêu số lượng mà schema bắt buộc số nguyên, Claude có thể phải điền một con số. Hãy cho phép **`null` hoặc “chưa rõ”** cho trường có thể thiếu, và **đối chiếu ngẫu nhiên** một số bản ghi với ghi chú gốc. Quy trình: trích → kiểm tra stop_reason → kiểm tra cục bộ (số âm, ngày, enum) → đối chiếu mẫu → mới nạp vào bảng.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Giống phát cho người ghi chép một biểu mẫu in sẵn ô (schema) thay vì giấy trắng: ai cũng điền cùng khuôn. Nhưng biểu mẫu không đảm bảo người ta điền đúng — tổ trưởng vẫn phải soát ô số âm, ô bỏ trống và đối chiếu vài phiếu với thực tế.",
      },
      terms: [
        { term: "JSON", definition: "Định dạng dữ liệu dạng cặp tên–giá trị mà chương trình đọc dễ dàng." },
        { term: "JSON schema", definition: "Bản mô tả khuôn của JSON: có những trường nào, kiểu gì, trường nào bắt buộc." },
        { term: "enum", definition: "Danh sách giá trị cho phép của một trường, ví dụ nhe/trung-binh/nang." },
        { term: "Kiểm tra cục bộ", definition: "Code của bạn tự kiểm các điều kiện mà schema không diễn đạt được (số âm, khoảng ngày…)." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: từ ghi chú đến bản ghi tin được",
      infographic: {
        kind: "flow",
        steps: [
          { title: "Ghi chú tự do", body: "“ca 2 thấy 3 vỏ nứt ở lắp ráp, nặng”", icon: "file" },
          { title: "Gọi API + schema", body: "output_config.format: json_schema, required, enum, additionalProperties false", icon: "code" },
          { title: "Kiểm tra stop_reason", body: "end_turn mới dùng; refusal/max_tokens thì ghi log", icon: "alert" },
          { title: "Kiểm tra cục bộ", body: "Số âm, enum lệch hoa thường, ngày sai", icon: "check" },
          { title: "Đối chiếu mẫu", body: "So vài bản ghi với ghi chú gốc", icon: "search" },
          { title: "Nạp vào bảng", body: "Chỉ bản ghi đã qua kiểm tra", icon: "chart" },
        ],
      },
      caption: "Quy trình gợi ý của khoá học, dựa trên tài liệu Structured outputs (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: cổng kiểm tra cho mỗi bản ghi",
      mermaid: `flowchart TD
  A["Ghi chú gốc"] --> B["Messages API + JSON schema"]
  B --> C{"stop_reason = end_turn?"}
  C -->|"Không"| R["Hàng chờ xem lại (ghi log)"]
  C -->|"Có"| D["json.loads"]
  D --> E{"Kiểm tra cục bộ đạt?"}
  E -->|"Không"| R
  E -->|"Có"| F{"Có trường null / chưa rõ?"}
  F -->|"Có"| R
  F -->|"Không"| G["Nạp vào bảng"]
  R --> H["Người kiểm tra đối chiếu ghi chú gốc"]`,
      caption: "Bản ghi không qua cổng nào sẽ vào hàng chờ cho người xem lại, không bị bỏ mất.",
      alt: "Lưu đồ: ghi chú gốc được gửi tới Messages API cùng JSON schema. Nếu stop_reason khác end_turn thì đưa vào hàng chờ xem lại. Nếu đúng thì parse JSON, kiểm tra cục bộ; không đạt thì vào hàng chờ. Đạt thì xét có trường null hay chưa rõ; có thì vào hàng chờ, không thì nạp vào bảng. Hàng chờ được người kiểm tra đối chiếu với ghi chú gốc.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: trích lỗi từ ghi chú ca",
      bad: {
        label: "Xin JSON bằng lời, tin luôn",
        content: "“Trả về JSON gồm công đoạn, loại lỗi, số lượng.” → json.loads(text) → nạp thẳng vào bảng.",
        notes: ["Có lúc kèm câu dẫn, json.loads lỗi.", "Tên trường mỗi lần một kiểu.", "Số âm, số đoán vẫn lọt vào bảng."],
      },
      good: {
        label: "Schema + kiểm tra + hàng chờ",
        content: "output_config.format với schema (required, enum công đoạn/mức độ, so_luong integer hoặc null, additionalProperties false). Kiểm stop_reason, so_luong ≥ 0, enum không phân biệt hoa thường; bản ghi lỗi hoặc null vào hàng chờ xem lại.",
        notes: ["JSON parse được ổn định.", "Lỗi dữ liệu bị chặn trước khi vào bảng.", "Không ép Claude đoán khi ghi chú thiếu."],
      },
      takeaway: "Schema lo phần khuôn; code và con người lo phần đúng.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: soát kết quả trích xuất",
      sim: {
        kind: "highlight",
        instruction: "Mỗi dòng là ghi chú gốc → kết quả Claude trả về (schema: cong_doan enum, loai_loi, so_luong, muc_do enum nhe/trung-binh/nang). Đánh dấu những bản ghi KHÔNG được nạp thẳng vào bảng.",
        segments: [
          { id: "g1", text: "“sơn bong 3 chỗ, nhẹ” → {cong_doan: Sơn, loai_loi: Bong sơn, so_luong: 3, muc_do: nhe}", target: false },
          { id: "g2", text: "“đứt dây 2 cuộn” → {cong_doan: Quấn dây, loai_loi: Đứt dây, so_luong: -2, muc_do: trung-binh}", target: true, why: "Số âm — schema không chặn được minimum, phải kiểm tra cục bộ." },
          { id: "g3", text: "(stop_reason: max_tokens) → {cong_doan: Lắp ráp vỏ, loai_loi: Nứt", target: true, why: "Bị cắt vì max_tokens — JSON không hoàn chỉnh." },
          { id: "g4", text: "“vỏ móp, chưa đếm” → {cong_doan: Lắp ráp vỏ, loai_loi: Móp vỏ, so_luong: 1, muc_do: nhe}", target: true, why: "Ghi chú không có số lượng mà kết quả có 1 — giá trị bị đoán; schema nên cho phép null." },
          { id: "g5", text: "“quấn dây lỏng 4 cuộn, trung bình” → {cong_doan: Quấn dây, loai_loi: Dây lỏng, so_luong: 4, muc_do: trung-binh}", target: false },
          { id: "g6", text: "“nứt vỏ 5 cái, nặng” → {cong_doan: Lắp Ráp Vỏ, loai_loi: Nứt vỏ, so_luong: 5, muc_do: nang}", target: true, why: "Enum lệch chữ hoa — chuẩn hoá trước khi nạp, nếu không sẽ thành nhóm riêng." },
        ],
      },
      intro: "Có 4 bản ghi cần xử lý. Tìm chúng như bước kiểm tra cục bộ.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: trích lỗi từ ghi chú ca (Python)",
      steps: [
        {
          title: "Viết schema",
          detail: "Bắt buộc đủ trường; enum cho giá trị cố định; số lượng cho phép null khi ghi chú không nêu.",
          code: {
            lang: "python",
            content:
              "SCHEMA = {\n    \"type\": \"object\",\n    \"properties\": {\n        \"cong_doan\": {\"type\": \"string\", \"enum\": [\"Lắp ráp vỏ\", \"Quấn dây\", \"Sơn\"]},\n        \"loai_loi\": {\"type\": \"string\"},\n        \"so_luong\": {\"anyOf\": [{\"type\": \"integer\"}, {\"type\": \"null\"}]},\n        \"muc_do\": {\"type\": \"string\", \"enum\": [\"nhe\", \"trung-binh\", \"nang\"]},\n    },\n    \"required\": [\"cong_doan\", \"loai_loi\", \"so_luong\", \"muc_do\"],\n    \"additionalProperties\": False,\n}",
          },
        },
        {
          title: "Gọi API với output_config.format",
          detail: "Dặn rõ: không có số lượng thì để null, không đoán.",
          code: {
            lang: "python",
            content:
              "msg = client.messages.create(\n    model=\"claude-opus-5-5\",\n    max_tokens=1024,\n    messages=[{\"role\": \"user\", \"content\": f\"Trích một bản ghi lỗi từ ghi chú sau. Không có số lượng thì để null, không đoán.\\n\\n{ghi_chu}\"}],\n    output_config={\"format\": {\"type\": \"json_schema\", \"schema\": SCHEMA}},\n)",
          },
        },
        { title: "Kiểm tra stop_reason", detail: "Chỉ parse khi end_turn; refusal hoặc max_tokens thì đưa vào hàng chờ." },
        {
          title: "Kiểm tra cục bộ",
          detail: "Những điều schema không diễn đạt được.",
          code: {
            lang: "python",
            content:
              "ban_ghi = json.loads(\"\".join(b.text for b in msg.content if b.type == \"text\"))\nloi = []\nif ban_ghi[\"so_luong\"] is None: loi.append(\"thiếu số lượng\")\nelif ban_ghi[\"so_luong\"] < 0: loi.append(\"số âm\")\nban_ghi[\"cong_doan\"] = chuan_hoa(ban_ghi[\"cong_doan\"])  # so khớp không phân biệt hoa thường",
          },
        },
        { title: "Đối chiếu mẫu", detail: "Mỗi lô chọn ngẫu nhiên vài bản ghi, so với ghi chú gốc; tỷ lệ sai cao thì sửa prompt/schema." },
        { title: "Nạp vào bảng", detail: "Chỉ bản ghi sạch; phần còn lại vào hàng chờ cho người xem." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết JSON schema cho bản ghi “phiếu bảo trì” trong dữ liệu mẫu. Yêu cầu: các trường bắt buộc, may (mã máy) là chuỗi, loai (loại bảo trì) chỉ nhận “dinh-ky” hoặc “su-co”, so_gio_dung là số nguyên hoặc null, không cho thêm trường lạ.",
      sampleData: {
        name: "Ghi chú bảo trì (trích)",
        content: "- Máy ép M-07 dừng 3 giờ do kẹt khuôn, sự cố.\n- Bảo dưỡng định kỳ máy cắt C-02, không ghi thời gian dừng.\n- Máy sơn S-01 dừng 1 giờ thay béc phun, sự cố.",
      },
      placeholder: "{\n  \"type\": \"object\",\n  \"properties\": { … }\n}",
      rubric: [
        { id: "required", label: "Có required", weight: 1, check: { kind: "anyKeyword", keywords: ["required"] }, pass: "Có trường bắt buộc.", fail: "Thêm \"required\": [\"may\", \"loai\", \"so_gio_dung\"]." },
        { id: "strict", label: "additionalProperties false", weight: 1, check: { kind: "anyKeyword", keywords: ["additionalproperties"] }, pass: "Chặn trường lạ.", fail: "Thêm \"additionalProperties\": false." },
        { id: "enum", label: "Enum cho loại", weight: 1, check: { kind: "allGroups", groups: [["enum"], ["dinh-ky", "dinh ky"], ["su-co", "su co"]] }, pass: "Có enum đúng.", fail: "loai cần \"enum\": [\"dinh-ky\", \"su-co\"]." },
        { id: "nullable", label: "Cho phép null", weight: 1, check: { kind: "anyKeyword", keywords: ["null"] }, pass: "Cho phép thiếu giá trị.", fail: "so_gio_dung cần cho phép null (ghi chú thứ hai không có thời gian dừng)." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"may\": {\"type\": \"string\"},\n    \"loai\": {\"type\": \"string\", \"enum\": [\"dinh-ky\", \"su-co\"]},\n    \"so_gio_dung\": {\"anyOf\": [{\"type\": \"integer\"}, {\"type\": \"null\"}]}\n  },\n  \"required\": [\"may\", \"loai\", \"so_gio_dung\"],\n  \"additionalProperties\": false\n}\nGhi chú: số giờ âm phải tự kiểm tra sau khi nhận vì schema không hỗ trợ minimum.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Structured outputs: JSON schema trong output_config.format; JSON trả về nằm trong khối text.",
        "Schema tốt: required, enum, additionalProperties false; cho phép null khi dữ liệu có thể thiếu.",
        "Không hỗ trợ minimum/maximum/minLength…: tự kiểm tra sau khi nhận.",
        "refusal/max_tokens có thể làm JSON không khớp; enum có thể lệch chữ hoa.",
        "Đúng khuôn ≠ đúng sự thật: đối chiếu mẫu với ghi chú gốc, bản ghi lỗi vào hàng chờ.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Bộ phận bạn có sổ ghi chú ca (văn bản tự do) cần chuyển thành bảng lỗi hằng tuần.",
      tasks: [
        "Viết schema với enum theo danh mục công đoạn thật, cho phép null với trường có thể thiếu.",
        "Chạy thử trên 30 ghi chú, kiểm tra stop_reason và kiểm tra cục bộ.",
        "Đối chiếu ngẫu nhiên 10 bản ghi với ghi chú gốc, ghi tỷ lệ sai và loại sai.",
      ],
      deliverable: "Schema + script + bảng đối chiếu 10 bản ghi + đề xuất chỉnh sửa.",
      checklist: ["Không ép đoán giá trị thiếu", "Có hàng chờ cho bản ghi lỗi", "Có tỷ lệ sai đo được"],
    },
  ],
};
