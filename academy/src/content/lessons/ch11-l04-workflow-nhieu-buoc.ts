import type { Lesson } from "@/lib/types/content";

const BEA = "https://www.anthropic.com/engineering/building-effective-agents";
const SO = "https://platform.claude.com/docs/en/build-with-claude/structured-outputs";
const BA = "https://platform.claude.com/docs/en/build-with-claude/batch-processing";

export const lessonWorkflowNhieuBuoc: Lesson = {
  id: "ch11-l04",
  chapterId: "ch11",
  slug: "workflow-nhieu-buoc",
  title: "Workflow nhiều bước",
  subtitle: "Ghép nhiều lần gọi Claude thành quy trình do code điều khiển: nối chuỗi có cổng kiểm tra, định tuyến, chạy song song, điều phối – thực thi, sinh – đánh giá.",
  level: "advanced",
  estimatedMinutes: 40,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Phân biệt workflow (đường đi do code định sẵn) với agent (mô hình tự quyết bước); bắt đầu từ giải pháp đơn giản nhất." },
    { id: "o2", text: "Nhận diện 5 mẫu workflow: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer." },
    { id: "o3", text: "Đặt cổng kiểm tra giữa các bước và xử lý khi một bước lỗi." },
    { id: "o4", text: "Cân nhắc đánh đổi: độ chính xác với độ trễ và chi phí; ghi log từng bước để gỡ lỗi." },
  ],
  concepts: [
    { id: "workflow-vs-agent", label: "Workflow và agent" },
    { id: "start-simple", label: "Bắt đầu đơn giản" },
    { id: "prompt-chaining", label: "Prompt chaining" },
    { id: "gate-check", label: "Cổng kiểm tra giữa các bước" },
    { id: "routing", label: "Routing (định tuyến)" },
    { id: "parallel-sectioning", label: "Song song: chia phần" },
    { id: "parallel-voting", label: "Song song: bỏ phiếu" },
    { id: "orchestrator-workers", label: "Orchestrator-workers" },
    { id: "evaluator-optimizer", label: "Evaluator-optimizer" },
    { id: "step-logging", label: "Ghi log từng bước" },
    { id: "failure-handling", label: "Xử lý bước lỗi" },
    { id: "cost-latency", label: "Đánh đổi chi phí, độ trễ" },
  ],
  hints: [
    "Workflow: code quyết định bước tiếp theo. Agent: mô hình tự quyết.",
    "Mỗi bước nhỏ, đầu ra có khuôn (structured outputs) để cổng kiểm tra đọc được.",
    "Một lần gọi đủ tốt thì đừng xây chuỗi năm bước.",
  ],
  sources: [
    { label: "Anthropic Engineering — Building effective agents (workflow và agent, năm mẫu workflow, bắt đầu đơn giản)", href: BEA },
    { label: "Claude API Docs — Structured outputs (đầu ra có khuôn cho từng bước)", href: SO },
    { label: "Claude API Docs — Batch processing (chạy song song số lượng lớn)", href: BA },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Nhiều việc thật quá lớn cho một lần gọi: xử lý khiếu nại gồm đọc thư, phân loại, tra quy trình, soạn trả lời, kiểm tra. Bài viết **Building effective agents** của Anthropic phân biệt hai cách: **workflow** — các lần gọi Claude và công cụ được nối theo **đường đi do code định sẵn**; và **agent** — Claude **tự quyết** bước tiếp theo và công cụ cần dùng (bài 11.6). Lời khuyên đầu tiên: **tìm giải pháp đơn giản nhất**; thường một lần gọi có tài liệu và ví dụ là đủ. Chỉ thêm bước khi đo được là cần.",
        "**Năm mẫu workflow**: (1) **Prompt chaining** — mỗi bước xử lý đầu ra của bước trước, có **cổng kiểm tra** bằng code ở giữa; dùng khi việc chia được thành các bước cố định, đổi độ trễ lấy độ chính xác. (2) **Routing** — phân loại đầu vào rồi chuyển sang nhánh xử lý chuyên biệt; ví dụ câu hỏi dễ chuyển sang mô hình nhỏ, rẻ hơn. (3) **Parallelization** — chạy song song: **chia phần** (mỗi lần gọi một khía cạnh) hoặc **bỏ phiếu** (cùng một việc chạy nhiều lần, lấy đa số). (4) **Orchestrator-workers** — một lần gọi điều phối chia việc khi **không biết trước** các phần, các “worker” làm từng phần, rồi tổng hợp. (5) **Evaluator-optimizer** — một lần gọi tạo bản nháp, một lần khác chấm theo tiêu chí rõ ràng, lặp đến khi đạt.",
        "**Cổng kiểm tra** là linh hồn của workflow: sau mỗi bước, code kiểm tra đầu ra (dùng structured outputs bài 11.2 để đọc được) — thiếu trường, giá trị lạ, `stop_reason` khác `end_turn` thì **dừng hoặc đưa vào hàng chờ**, không chuyển rác sang bước sau. Lỗi ở bước 1 mà không chặn sẽ **dồn và khuếch đại** ở bước 5.",
        "**Đánh đổi**: mỗi bước thêm độ trễ và token. Ghi **log từng bước** (đầu vào rút gọn, đầu ra, stop_reason, usage, thời gian) để biết bước nào sai, bước nào đắt. Đo trước và sau: workflow mới phải **tốt hơn đo được** so với một lần gọi, nếu không thì quay về đơn giản.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Như dây chuyền sản xuất: mỗi trạm làm một việc (chaining), có trạm QC giữa các công đoạn (cổng kiểm tra), băng chuyền rẽ nhánh theo loại sản phẩm (routing), nhiều trạm làm song song (parallelization), tổ trưởng chia việc theo đơn hàng (orchestrator), và KCS trả hàng về làm lại đến khi đạt (evaluator).",
      },
      terms: [
        { term: "Workflow", definition: "Chuỗi lần gọi Claude/công cụ theo đường đi do code định sẵn." },
        { term: "Agent", definition: "Hệ thống trong đó Claude tự quyết bước và công cụ cần dùng." },
        { term: "Cổng kiểm tra", definition: "Đoạn code kiểm đầu ra của một bước trước khi cho sang bước sau." },
        { term: "Độ trễ", definition: "Thời gian chờ từ lúc gửi đến lúc có kết quả cuối." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: năm mẫu workflow",
      infographic: {
        kind: "cards",
        cards: [
          { title: "Prompt chaining", body: "Bước nối bước, có cổng kiểm tra ở giữa.", foot: "Việc chia được thành bước cố định", icon: "layers" },
          { title: "Routing", body: "Phân loại rồi rẽ nhánh chuyên biệt.", foot: "Loại đầu vào khác nhau rõ rệt", icon: "target" },
          { title: "Parallelization", body: "Chia phần chạy cùng lúc, hoặc chạy nhiều lần rồi bỏ phiếu.", foot: "Cần nhanh hoặc cần nhiều góc nhìn", icon: "zap" },
          { title: "Orchestrator-workers", body: "Điều phối chia việc, worker làm, rồi tổng hợp.", foot: "Không biết trước các phần việc", icon: "cpu" },
          { title: "Evaluator-optimizer", body: "Tạo nháp → chấm theo tiêu chí → sửa → lặp.", foot: "Tiêu chí rõ, sửa vòng sau tốt hơn đo được", icon: "repeat" },
          { title: "Đơn giản trước", body: "Một lần gọi có tài liệu và ví dụ thường là đủ.", foot: "Chỉ thêm bước khi đo được là cần", icon: "check" },
        ],
      },
      caption: "Theo Building effective agents (Anthropic Engineering), đối chiếu 03/11/2026.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: xử lý khiếu nại chất lượng",
      mermaid: `flowchart TD
  A["Thư khiếu nại"] --> B["Bước 1: phân loại (routing)"]
  B -->|"Chất lượng"| C["Bước 2: trích thông tin lỗi (JSON)"]
  B -->|"Giao hàng"| K["Nhánh kho"]
  C --> G1{"Cổng: đủ mã lô, mô tả lỗi?"}
  G1 -->|"Thiếu"| Q["Hàng chờ người xử lý"]
  G1 -->|"Đủ"| D["Bước 3: soạn trả lời theo quy trình"]
  D --> E["Bước 4: chấm theo checklist (evaluator)"]
  E -->|"Chưa đạt, tối đa 2 vòng"| D
  E -->|"Đạt"| H["Nhân viên duyệt rồi gửi"]
  E -->|"Vẫn chưa đạt"| Q`,
      caption: "Ghép routing, chaining có cổng và evaluator; giới hạn số vòng lặp; luôn có lối ra cho con người.",
      alt: "Lưu đồ xử lý khiếu nại: bước 1 phân loại thư; nhánh giao hàng sang kho; nhánh chất lượng sang bước 2 trích thông tin lỗi dạng JSON. Cổng kiểm tra: thiếu mã lô hoặc mô tả lỗi thì vào hàng chờ người xử lý. Đủ thì bước 3 soạn trả lời theo quy trình, bước 4 chấm theo checklist; chưa đạt thì quay lại soạn, tối đa 2 vòng; vẫn chưa đạt thì vào hàng chờ; đạt thì nhân viên duyệt rồi gửi.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: workflow xử lý biên bản sự cố",
      bad: {
        label: "Chuỗi dài, không cổng, không log",
        content: "Gọi 1: tóm tắt biên bản → Gọi 2: phân tích 5M từ bản tóm tắt → Gọi 3: kế hoạch khắc phục → Gọi 4: email gửi khách. Đầu ra mỗi bước là văn bản tự do, chuyển thẳng sang bước sau.",
        notes: ["Bản tóm tắt thiếu chi tiết → 5M sai → kế hoạch sai → email sai.", "Không biết bước nào hỏng.", "Bước 4 gửi ra ngoài mà không ai duyệt."],
      },
      good: {
        label: "Bước có khuôn, cổng, log, người duyệt",
        content: "Gọi 1: trích JSON (mã lô, hiện tượng, thời điểm, số lượng) → cổng: đủ trường, stop_reason end_turn → Gọi 2: phân loại 5M (enum) → cổng: mỗi nguyên nhân có bằng chứng trích từ biên bản → Gọi 3: kế hoạch theo mẫu → người duyệt. Ghi log đầu ra, usage, thời gian từng bước.",
        notes: ["Lỗi bị chặn sớm.", "Biết bước nào sai, bước nào đắt.", "Không gì ra ngoài khi chưa duyệt."],
      },
      takeaway: "Mỗi bước nhỏ, có khuôn, có cổng — và có người ở cuối.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: nhận diện mẫu workflow",
      sim: {
        kind: "classify",
        bins: [
          { id: "chaining", label: "Prompt chaining" },
          { id: "routing", label: "Routing" },
          { id: "parallel", label: "Parallelization" },
          { id: "orchestrator", label: "Orchestrator-workers" },
          { id: "evaluator", label: "Evaluator-optimizer" },
        ],
        items: [
          { id: "i1", text: "Dịch tài liệu kỹ thuật: bước 1 dịch, bước 2 kiểm thuật ngữ theo bảng chuẩn, bước 3 định dạng.", bin: "chaining", why: "Các bước cố định, nối tiếp." },
          { id: "i2", text: "Email khiếu nại chất lượng sang quy trình QA, hỏi giao hàng sang quy trình kho, câu hỏi đơn giản sang mô hình nhỏ hơn.", bin: "routing", why: "Phân loại rồi rẽ nhánh." },
          { id: "i3", text: "Rà một báo cáo cùng lúc theo ba góc: số liệu, an toàn, pháp lý — rồi gộp nhận xét.", bin: "parallel", why: "Chia phần chạy song song." },
          { id: "i4", text: "Hỏi ba lần “bản vẽ có thiếu kích thước không?” rồi lấy kết luận đa số.", bin: "parallel", why: "Bỏ phiếu (voting)." },
          { id: "i5", text: "Sửa một lỗi lan qua nhiều file mà không biết trước file nào: một lần gọi lập kế hoạch và giao từng file, các lần gọi con sửa, rồi tổng hợp.", bin: "orchestrator", why: "Phần việc không biết trước." },
          { id: "i6", text: "Viết hướng dẫn công việc, một lần gọi khác chấm theo checklist 8 tiêu chí, sửa và lặp đến khi đạt.", bin: "evaluator", why: "Tạo – chấm – sửa." },
          { id: "i7", text: "Trích dữ liệu từ biên bản; nếu thiếu mã lô thì dừng; đủ thì viết báo cáo.", bin: "chaining", why: "Nối tiếp có cổng kiểm tra." },
          { id: "i8", text: "Câu hỏi về an toàn hoá chất chuyển sang prompt kèm phiếu an toàn hoá chất; câu khác dùng prompt chung.", bin: "routing", why: "Rẽ nhánh theo loại câu hỏi." },
        ],
      },
      intro: "Xếp mỗi quy trình vào đúng mẫu workflow.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: dựng một workflow chaining có cổng (Python)",
      steps: [
        { title: "Thử một lần gọi trước", detail: "Đo chất lượng của giải pháp đơn giản nhất làm mốc so sánh." },
        { title: "Chia bước và khuôn đầu ra", detail: "Mỗi bước một việc; đầu ra dùng structured outputs để code đọc được." },
        {
          title: "Viết hàm gọi có log",
          detail: "Mỗi lần gọi ghi lại bước, stop_reason, usage, thời gian.",
          code: {
            lang: "python",
            content:
              "def goi(buoc, prompt, schema):\n    bat_dau = time.time()\n    msg = client.messages.create(model=\"claude-opus-5-5\", max_tokens=2048,\n        messages=[{\"role\": \"user\", \"content\": prompt}],\n        output_config={\"format\": {\"type\": \"json_schema\", \"schema\": schema}})\n    log(buoc, msg.stop_reason, msg.usage, time.time() - bat_dau)\n    if msg.stop_reason != \"end_turn\":\n        raise BuocLoi(buoc, msg.stop_reason)\n    return json.loads(\"\".join(b.text for b in msg.content if b.type == \"text\"))",
          },
        },
        {
          title: "Nối bước với cổng",
          detail: "Không đạt cổng thì đưa vào hàng chờ, không đi tiếp.",
          code: {
            lang: "python",
            content:
              "su_co = goi(\"trich\", f\"Trích thông tin sự cố từ biên bản:\\n{bien_ban}\", SCHEMA_SU_CO)\nif not su_co[\"ma_lo\"]:\n    return hang_cho(\"thiếu mã lô\", bien_ban)\nnguyen_nhan = goi(\"5M\", f\"Phân loại nguyên nhân theo 5M, kèm câu trích làm bằng chứng:\\n{su_co}\", SCHEMA_5M)\nif any(not n[\"bang_chung\"] for n in nguyen_nhan[\"danh_sach\"]):\n    return hang_cho(\"nguyên nhân thiếu bằng chứng\", su_co)\nke_hoach = goi(\"ke-hoach\", f\"Lập kế hoạch khắc phục theo mẫu:\\n{nguyen_nhan}\", SCHEMA_KE_HOACH)",
          },
        },
        { title: "Giới hạn vòng lặp", detail: "Với evaluator-optimizer: tối đa 2–3 vòng; quá thì chuyển người." },
        { title: "So với mốc", detail: "Chạy cùng bộ 20 ca thật; workflow phải tốt hơn đo được mới giữ." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Thiết kế workflow xử lý yêu cầu đổi trả trong dữ liệu mẫu. Ghi rõ: các bước, mẫu workflow dùng ở đâu (chaining, routing…), cổng kiểm tra giữa các bước, và nơi con người duyệt.",
      sampleData: {
        name: "Yêu cầu đổi trả (mô tả)",
        content: "Khách gửi email: có khi là lỗi sản phẩm (cần mã lô, ảnh lỗi), có khi là giao nhầm mẫu (cần mã đơn), có khi chỉ hỏi chính sách. Công ty muốn trả lời trong ngày, đúng chính sách đổi trả, và không hứa bồi thường khi chưa có phê duyệt.",
      },
      placeholder: "Bước 1: …\nBước 2: …",
      rubric: [
        { id: "routing", label: "Có định tuyến", weight: 1, check: { kind: "anyKeyword", keywords: ["routing", "định tuyến", "phân loại", "rẽ nhánh"] }, pass: "Có phân loại đầu vào.", fail: "Ba loại email khác nhau → cần routing." },
        { id: "chain", label: "Có chuỗi bước", weight: 1, check: { kind: "anyKeyword", keywords: ["chaining", "nối tiếp", "chuỗi"] }, pass: "Có chuỗi bước.", fail: "Nêu rõ các bước nối tiếp (chaining)." },
        { id: "gate", label: "Có cổng kiểm tra", weight: 1, check: { kind: "anyKeyword", keywords: ["cổng", "gate", "kiểm tra", "hàng chờ"] }, pass: "Có cổng.", fail: "Thêm cổng: thiếu mã lô/mã đơn thì vào hàng chờ." },
        { id: "human", label: "Có người duyệt", weight: 1, check: { kind: "anyKeyword", keywords: ["duyệt", "phê duyệt", "con người"] }, pass: "Có người duyệt.", fail: "Bồi thường cần phê duyệt — thêm bước người duyệt." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Bước 1 (routing): phân loại email thành lỗi sản phẩm / giao nhầm / hỏi chính sách.\nNhánh lỗi sản phẩm (chaining): bước 2 trích JSON (mã lô, mô tả, có ảnh không) → cổng: thiếu mã lô hoặc ảnh thì soạn thư xin bổ sung, đưa vào hàng chờ → bước 3 soạn trả lời theo chính sách đổi trả → bước 4 kiểm tra (evaluator) theo checklist: đúng chính sách, không hứa bồi thường.\nNhánh giao nhầm: trích mã đơn → cổng: có mã đơn → soạn hướng dẫn đổi.\nNhánh hỏi chính sách: trả lời từ tài liệu chính sách.\nMọi thư có nhắc bồi thường phải được nhân viên phê duyệt trước khi gửi; mọi thư gửi đi đều có nhân viên duyệt nhanh.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Workflow: code định sẵn đường đi; agent: mô hình tự quyết. Bắt đầu đơn giản nhất.",
        "Năm mẫu: chaining, routing, parallelization (chia phần/bỏ phiếu), orchestrator-workers, evaluator-optimizer.",
        "Cổng kiểm tra sau mỗi bước; đầu ra có khuôn; lỗi thì dừng hoặc vào hàng chờ.",
        "Giới hạn số vòng lặp; luôn có lối ra cho con người.",
        "Ghi log từng bước; workflow phải tốt hơn đo được so với một lần gọi.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một quy trình giấy tờ nhiều bước ở bộ phận bạn (xử lý khiếu nại, duyệt đề xuất mua hàng…).",
      tasks: [
        "Vẽ quy trình hiện tại, đánh dấu bước nào hợp với mẫu workflow nào.",
        "Dựng thử 2–3 bước với cổng kiểm tra và log, chạy trên 20 ca thật đã có kết quả.",
        "So với làm tay: tỷ lệ đúng, thời gian, chi phí token.",
      ],
      deliverable: "Sơ đồ workflow + kết quả chạy 20 ca + quyết định giữ, sửa hay bỏ.",
      checklist: ["Có cổng sau mỗi bước", "Có giới hạn vòng lặp", "Có người duyệt trước khi ra ngoài"],
    },
  ],
};
