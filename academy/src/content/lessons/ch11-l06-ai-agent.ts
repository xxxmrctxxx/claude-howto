import type { Lesson } from "@/lib/types/content";

const TU = "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview";
const BEA = "https://www.anthropic.com/engineering/building-effective-agents";
const SDK = "https://code.claude.com/docs/en/agent-sdk/overview";
const SP = "https://code.claude.com/docs/en/agent-sdk/permissions";

export const lessonAiAgent: Lesson = {
  id: "ch11-l06",
  chapterId: "ch11",
  slug: "ai-agent",
  title: "Xây dựng AI Agent",
  subtitle: "Agent là Claude tự lập kế hoạch và gọi công cụ trong vòng lặp. Hiểu vòng tool use, thiết kế công cụ tốt, chọn cách xây (tự viết vòng lặp, tool runner, Agent SDK) và đặt điểm dừng, điểm duyệt.",
  level: "advanced",
  estimatedMinutes: 45,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích vòng tool use: tool_use → code của bạn chạy công cụ → tool_result → Claude tiếp tục đến khi xong." },
    { id: "o2", text: "Thiết kế công cụ: tên, mô tả chi tiết, input_schema chặt; trả lỗi bằng is_error thay vì im lặng." },
    { id: "o3", text: "Chọn cách xây: tự viết vòng lặp với Messages API, tool runner của SDK, hoặc Claude Agent SDK (công cụ có sẵn của Claude Code)." },
    { id: "o4", text: "Quyết định khi nào cần agent và đặt rào chắn: thử trong sandbox, giới hạn số vòng, điểm duyệt của con người." },
  ],
  concepts: [
    { id: "agent-definition", label: "Agent là gì" },
    { id: "when-agent", label: "Khi nào cần agent" },
    { id: "tool-definition", label: "Định nghĩa công cụ" },
    { id: "tool-description", label: "Mô tả công cụ (ACI)" },
    { id: "tool-loop", label: "Vòng tool use" },
    { id: "tool-error", label: "Báo lỗi công cụ (is_error)" },
    { id: "client-server-tools", label: "Công cụ phía bạn và phía Anthropic" },
    { id: "tool-runner", label: "Tool runner của SDK" },
    { id: "agent-sdk", label: "Claude Agent SDK" },
    { id: "max-iterations", label: "Giới hạn số vòng" },
    { id: "human-checkpoint", label: "Điểm duyệt của con người" },
    { id: "sandbox-testing", label: "Thử trong môi trường cô lập" },
  ],
  hints: [
    "stop_reason tool_use = Claude muốn gọi công cụ; code của bạn chạy rồi gửi tool_result có đúng tool_use_id.",
    "Mô tả công cụ là “hướng dẫn sử dụng” cho Claude — viết kỹ như viết cho đồng nghiệp mới.",
    "Agent cần điểm dừng: số vòng tối đa, ngân sách, và chỗ để người duyệt hành động quan trọng.",
  ],
  sources: [
    { label: "Claude API Docs — Tool use with Claude (client/server tools, stop_reason tool_use, tool_result, tool runner)", href: TU },
    { label: "Anthropic Engineering — Building effective agents (khi nào dùng agent, rào chắn, thiết kế công cụ)", href: BEA },
    { label: "Claude Code Docs — Agent SDK overview (công cụ có sẵn, hooks, subagents, MCP, quyền, xác thực bằng API key)", href: SDK },
    { label: "Claude Code Docs — Agent SDK: Configure permissions (allowedTools, permissionMode)", href: SP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Agent** là hệ thống trong đó Claude **tự lập kế hoạch và tự gọi công cụ** để hoàn thành việc, kiểm tra kết quả thật (“ground truth”) sau mỗi bước — khác workflow ở bài 11.4 nơi code định sẵn đường đi. Claude Code chính là một agent. Agent hợp với việc **mở**, không đoán trước được số bước (điều tra một lỗi lạ, gom thông tin từ nhiều nguồn); đổi lại **tốn hơn** và **lỗi có thể cộng dồn**. Nếu việc chia được thành bước cố định, quay lại workflow.",
        "**Vòng tool use** (Messages API): bạn gửi tin nhắn kèm danh sách **tools** — mỗi công cụ có `name`, `description`, `input_schema`. Nếu cần, Claude trả về **`stop_reason: \"tool_use\"`** cùng khối **`tool_use`** (`id`, `name`, `input`). **Code của bạn** chạy công cụ (đây là **client tool**), rồi gửi lại khối **`tool_result`** với đúng `tool_use_id`. Claude đọc kết quả, gọi tiếp hoặc trả lời, đến khi `stop_reason` là `end_turn`. Công cụ lỗi thì trả `tool_result` có **`is_error: true`** và thông báo rõ, đừng im lặng. Một số công cụ chạy **phía Anthropic** (server tools: web search, web fetch, code execution) — bạn chỉ khai báo, không phải tự chạy.",
        "**Ba cách xây**: (1) **Tự viết vòng lặp** với Messages API — kiểm soát hoàn toàn. (2) **Tool runner** trong SDK (beta) — bạn chỉ viết hàm công cụ, SDK lo vòng lặp, vẫn có điểm chèn để duyệt, ghi log. (3) **Claude Agent SDK** (Python `claude-agent-sdk`, TypeScript `@anthropic-ai/claude-agent-sdk`) — đưa “bộ máy” của Claude Code vào chương trình: công cụ có sẵn (đọc/sửa file, chạy lệnh, tìm kiếm), hooks, subagents, MCP, quyền, phiên làm việc. Sản phẩm bạn phát hành cho người khác phải **xác thực bằng API key**, không dùng đăng nhập claude.ai (trừ khi được Anthropic chấp thuận). Muốn Anthropic chạy luôn vòng lặp và môi trường thì có Managed Agents (beta).",
        "**Công cụ tốt** quyết định agent tốt: Anthropic khuyên đầu tư vào “giao diện agent–máy” (ACI) như đầu tư giao diện cho người — mô tả **khi nào dùng**, **định dạng đầu vào**, **ví dụ**, **ranh giới** với công cụ khác; thiết kế để **khó dùng sai** (ví dụ bắt buộc đường dẫn tuyệt đối). **Rào chắn**: thử kỹ trong **môi trường cô lập**, đặt **giới hạn số vòng**, và **điểm duyệt của con người** trước hành động quan trọng (gửi thư, xoá dữ liệu, đặt hàng).",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Agent giống kỹ thuật viên mới được giao điều tra sự cố: tự quyết đi xem máy nào, tra sổ nào (gọi công cụ), báo lại từng phát hiện (tool_result). Bạn đưa họ hộp dụng cụ có nhãn rõ ràng (mô tả công cụ), dặn “tối đa 2 giờ” (giới hạn vòng), và “muốn dừng dây chuyền phải gọi tôi” (điểm duyệt).",
      },
      terms: [
        { term: "Tool use", definition: "Cơ chế để Claude yêu cầu gọi một hàm/công cụ với tham số có khuôn." },
        { term: "tool_use / tool_result", definition: "Khối Claude gửi để gọi công cụ / khối bạn gửi lại chứa kết quả, nối bằng tool_use_id." },
        { term: "Agent SDK", definition: "Thư viện đưa vòng lặp, công cụ và quản lý ngữ cảnh của Claude Code vào chương trình của bạn." },
        { term: "ACI", definition: "Agent–computer interface: cách công cụ được mô tả và thiết kế để mô hình dùng đúng." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: ba cách xây agent",
      infographic: {
        kind: "compare",
        columns: [
          { title: "Tự viết vòng lặp (Messages API)", tone: "neutral", items: ["Bạn viết vòng while stop_reason == tool_use", "Chỉ có công cụ bạn định nghĩa", "Kiểm soát mọi bước", "Nhiều code nhất"] },
          { title: "Tool runner (SDK, beta)", tone: "neutral", items: ["Bạn viết hàm công cụ", "SDK chạy vòng lặp", "Có điểm chèn để duyệt, ghi log", "Không có công cụ có sẵn"] },
          { title: "Claude Agent SDK", tone: "neutral", items: ["Công cụ có sẵn: đọc/sửa file, chạy lệnh, tìm kiếm", "Hooks, subagents, MCP, quyền, phiên", "Bạn tự host", "Xác thực bằng API key"] },
        ],
      },
      caption: "Theo Tool use overview và Agent SDK overview (đối chiếu 03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: vòng tool use có rào chắn",
      mermaid: `flowchart TD
  A["Tin nhắn + danh sách tools"] --> B["Claude"]
  B --> C{"stop_reason"}
  C -->|"end_turn"| Z["Trả kết quả"]
  C -->|"tool_use"| D{"Vòng thứ n vượt giới hạn?"}
  D -->|"Có"| Y["Dừng, chuyển người xử lý"]
  D -->|"Không"| E{"Hành động quan trọng?"}
  E -->|"Có"| F["Người duyệt"]
  F -->|"Từ chối"| G["tool_result: is_error, lý do"]
  F -->|"Đồng ý"| H["Code của bạn chạy công cụ"]
  E -->|"Không"| H
  H --> I["tool_result (tool_use_id)"]
  G --> B
  I --> B`,
      caption: "Code của bạn luôn đứng giữa Claude và thế giới thật: kiểm tra, giới hạn, xin duyệt.",
      alt: "Lưu đồ vòng tool use: gửi tin nhắn kèm danh sách công cụ cho Claude. Nếu stop_reason là end_turn thì trả kết quả. Nếu là tool_use thì kiểm tra số vòng; vượt giới hạn thì dừng và chuyển người. Nếu hành động quan trọng thì xin người duyệt; từ chối thì gửi tool_result is_error kèm lý do; đồng ý hoặc hành động thường thì code chạy công cụ, gửi tool_result theo tool_use_id, quay lại Claude.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: định nghĩa công cụ tra lô hàng",
      bad: {
        label: "Mô tả sơ sài",
        content: "{ \"name\": \"lookup\", \"description\": \"Tra cứu\", \"input_schema\": { \"type\": \"object\", \"properties\": { \"q\": { \"type\": \"string\" } } } }",
        notes: ["Claude không biết tra gì, khi nào dùng.", "Tham số q mơ hồ, không bắt buộc.", "Dễ gọi sai, kết quả rỗng mà không biết vì sao."],
      },
      good: {
        label: "Mô tả như hướng dẫn cho đồng nghiệp",
        content: "{ \"name\": \"tra_cuu_lo_hang\", \"description\": \"Tra thông tin một lô hàng theo mã lô (dạng LH-YYYY-NNNN, ví dụ LH-2026-0457): ngày sản xuất, dây chuyền, kết quả QC. Dùng khi người hỏi nhắc tới mã lô. Không dùng để tìm theo tên khách — dùng tra_cuu_don_hang.\", \"input_schema\": { \"type\": \"object\", \"properties\": { \"ma_lo\": { \"type\": \"string\", \"description\": \"Mã lô dạng LH-YYYY-NNNN\" } }, \"required\": [\"ma_lo\"] } }",
        notes: ["Rõ khi nào dùng và không dùng.", "Có định dạng và ví dụ.", "Tham số bắt buộc, khó dùng sai."],
      },
      takeaway: "Viết mô tả công cụ kỹ như viết hướng dẫn công việc.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: sắp xếp vòng tool use",
      sim: {
        kind: "sequence",
        items: [
          { id: "a", text: "Gửi tin nhắn người dùng kèm danh sách tools (name, description, input_schema)" },
          { id: "b", text: "Claude trả stop_reason tool_use và khối tool_use (id, name, input)" },
          { id: "c", text: "Code của bạn kiểm tra input, xin duyệt nếu là hành động quan trọng" },
          { id: "d", text: "Code của bạn chạy công cụ" },
          { id: "e", text: "Gửi khối tool_result với đúng tool_use_id (lỗi thì is_error: true)" },
          { id: "f", text: "Claude đọc kết quả rồi gọi tiếp hoặc trả lời; dừng khi end_turn hoặc chạm giới hạn vòng" },
        ],
        explain: "Claude chỉ đề xuất gọi; code của bạn kiểm tra, chạy và báo kết quả — rồi vòng lặp tiếp tục đến điểm dừng.",
      },
      intro: "Sắp xếp các bước của một vòng tool use với client tool.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: agent nhỏ tra cứu lô hàng",
      steps: [
        { title: "Hỏi: có cần agent không?", detail: "Việc có mở, nhiều bước khó đoán? Lợi ích đáng chi phí? Lỗi có phát hiện và sửa được? Không thì dùng workflow." },
        { title: "Định nghĩa công cụ", detail: "Bắt đầu với 2–3 công cụ chỉ đọc (tra lô, tra đơn, tra kết quả QC); mô tả kỹ, input_schema chặt." },
        {
          title: "Viết vòng lặp có giới hạn (Python)",
          detail: "Tối đa 10 vòng; lỗi công cụ trả is_error.",
          code: {
            lang: "python",
            content:
              "messages = [{\"role\": \"user\", \"content\": cau_hoi}]\nfor vong in range(10):\n    msg = client.messages.create(model=\"claude-opus-5-5\", max_tokens=4096,\n                                 tools=TOOLS, messages=messages)\n    messages.append({\"role\": \"assistant\", \"content\": msg.content})\n    if msg.stop_reason != \"tool_use\":\n        break\n    ket_qua = []\n    for b in msg.content:\n        if b.type == \"tool_use\":\n            try:\n                ket_qua.append({\"type\": \"tool_result\", \"tool_use_id\": b.id, \"content\": chay(b.name, b.input)})\n            except Exception as e:\n                ket_qua.append({\"type\": \"tool_result\", \"tool_use_id\": b.id, \"content\": str(e), \"is_error\": True})\n    messages.append({\"role\": \"user\", \"content\": ket_qua})\nelse:\n    chuyen_nguoi_xu_ly(messages)",
          },
        },
        {
          title: "Hoặc dùng Agent SDK (TypeScript)",
          detail: "Khi cần công cụ có sẵn của Claude Code; giới hạn công cụ được phép.",
          code: {
            lang: "typescript",
            content:
              "import { query } from \"@anthropic-ai/claude-agent-sdk\";\n\nfor await (const message of query({\n  prompt: \"Đọc các file trong bao-cao/ và tóm tắt lỗi lặp lại\",\n  options: { allowedTools: [\"Read\", \"Glob\", \"Grep\"], permissionMode: \"dontAsk\" },\n})) {\n  if (\"result\" in message) console.log(message.result);\n}",
          },
        },
        { title: "Thử trong môi trường cô lập", detail: "Dữ liệu giả, không quyền ghi vào hệ thống thật; chạy bộ 20 câu hỏi mẫu, đọc log từng vòng." },
        { title: "Thêm điểm duyệt rồi mới mở rộng", detail: "Công cụ có ghi/xoá/gửi phải qua người duyệt; mở dần quyền khi đã tin cậy." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết định nghĩa công cụ (JSON) cho “tra_cuu_ket_qua_qc” theo yêu cầu trong dữ liệu mẫu: có name, description nêu khi nào dùng và định dạng đầu vào kèm ví dụ, input_schema với trường bắt buộc.",
      sampleData: {
        name: "Yêu cầu công cụ",
        content: "Công cụ trả kết quả kiểm tra QC của một lô theo mã lô (dạng LH-YYYY-NNNN). Chỉ đọc. Không dùng để tra đơn hàng của khách. Agent sẽ dùng khi người hỏi muốn biết lô đạt hay không đạt và lý do.",
      },
      placeholder: "{\n  \"name\": \"tra_cuu_ket_qua_qc\",\n  …\n}",
      rubric: [
        { id: "desc", label: "Có description", weight: 1, check: { kind: "anyKeyword", keywords: ["description"] }, pass: "Có mô tả.", fail: "Thêm description." },
        { id: "schema", label: "Có input_schema", weight: 1, check: { kind: "anyKeyword", keywords: ["input_schema"] }, pass: "Có input_schema.", fail: "Thêm input_schema." },
        { id: "required", label: "Trường bắt buộc", weight: 1, check: { kind: "anyKeyword", keywords: ["required"] }, pass: "Có required.", fail: "ma_lo phải nằm trong required." },
        { id: "usage", label: "Khi nào dùng + ví dụ định dạng", weight: 1, check: { kind: "allGroups", groups: [["dùng khi", "khi nào", "không dùng"], ["ví dụ", "lh-"]] }, pass: "Mô tả đủ ngữ cảnh.", fail: "Mô tả nêu khi nào dùng/không dùng và ví dụ mã lô." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "{\n  \"name\": \"tra_cuu_ket_qua_qc\",\n  \"description\": \"Trả kết quả kiểm tra QC của một lô: đạt/không đạt, các hạng mục không đạt và lý do. Dùng khi người hỏi muốn biết một lô đạt hay không. Không dùng để tra đơn hàng của khách (dùng tra_cuu_don_hang). Chỉ đọc. Mã lô dạng LH-YYYY-NNNN, ví dụ LH-2026-0457.\",\n  \"input_schema\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"ma_lo\": {\"type\": \"string\", \"description\": \"Mã lô dạng LH-YYYY-NNNN, ví dụ LH-2026-0457\"}\n    },\n    \"required\": [\"ma_lo\"]\n  }\n}",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Agent: Claude tự lập kế hoạch và gọi công cụ; hợp với việc mở, đắt hơn và lỗi có thể cộng dồn.",
        "Vòng tool use: tool_use → code chạy → tool_result (đúng tool_use_id, lỗi thì is_error) → đến end_turn.",
        "Ba cách xây: tự viết vòng lặp, tool runner, Claude Agent SDK (xác thực bằng API key).",
        "Mô tả công cụ kỹ: khi nào dùng, định dạng, ví dụ, ranh giới; thiết kế để khó dùng sai.",
        "Rào chắn: thử trong môi trường cô lập, giới hạn số vòng, người duyệt hành động quan trọng.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Một câu hỏi lặp lại ở bộ phận bạn cần tra nhiều nguồn (ví dụ: “lô X có vấn đề gì, đã giao cho khách nào?”).",
      tasks: [
        "Kiểm tra 4 câu hỏi: có cần agent không, hay workflow là đủ.",
        "Định nghĩa 2–3 công cụ chỉ đọc với mô tả kỹ; dựng vòng lặp giới hạn 10 vòng trên dữ liệu giả.",
        "Chạy 20 câu hỏi mẫu, ghi số vòng, công cụ được gọi, câu trả lời sai và nguyên nhân.",
      ],
      deliverable: "Định nghĩa công cụ + log 20 lần chạy + danh sách cải tiến mô tả công cụ.",
      checklist: ["Chỉ công cụ đọc ở giai đoạn thử", "Có giới hạn vòng", "Có kế hoạch điểm duyệt trước khi thêm công cụ ghi"],
    },
  ],
};
