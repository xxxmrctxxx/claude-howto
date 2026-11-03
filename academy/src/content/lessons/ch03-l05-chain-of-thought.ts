import type { Lesson } from "@/lib/types/content";

const BP = "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices";

export const lessonChainOfThought: Lesson = {
  id: "ch03-l05",
  chapterId: "ch03",
  slug: "chain-of-thought",
  title: "Chain-of-thought ở mức phù hợp",
  subtitle: "Khi nào nên yêu cầu Claude trình bày các bước suy luận, khi nào hỏi thẳng, và khi nào chia việc thành chuỗi prompt.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Giải thích chain-of-thought và việc các model Claude hiện tại có khả năng suy nghĩ tích hợp (adaptive thinking)." },
    { id: "o2", text: "Nhận biết khi nào nên yêu cầu trình bày các bước và khi nào nên hỏi thẳng." },
    { id: "o3", text: "Yêu cầu tách phần lập luận và phần kết luận để dễ kiểm tra." },
    { id: "o4", text: "Biết khi nào chia nhiệm vụ thành chuỗi prompt và dùng mẫu tự sửa (nháp → rà soát → hoàn thiện)." },
  ],
  concepts: [
    { id: "cot", label: "Chain-of-thought" },
    { id: "adaptive-thinking", label: "Suy nghĩ thích ứng (adaptive thinking)" },
    { id: "when-show-steps", label: "Khi nào cần trình bày các bước" },
    { id: "overthinking", label: "Suy nghĩ quá mức" },
    { id: "separate-reasoning", label: "Tách lập luận và kết luận" },
    { id: "verify-reasoning", label: "Kiểm tra các bước" },
    { id: "prompt-chaining", label: "Chuỗi prompt" },
    { id: "self-correction", label: "Mẫu tự sửa" },
  ],
  hints: [
    "Câu hỏi đơn giản: hỏi thẳng. Tính toán, so sánh nhiều tiêu chí: yêu cầu trình bày các bước để kiểm tra.",
    "Đặt các bước trong một phần riêng và kết luận trong phần khác để đọc nhanh kết quả mà vẫn kiểm tra được lập luận.",
    "Việc lớn nhiều giai đoạn, cần xem kết quả giữa chừng → chia thành chuỗi prompt.",
  ],
  sources: [
    { label: "Anthropic — Prompting best practices: Thinking and reasoning, Chain complex prompts", href: BP },
    { label: "Anthropic — Reduce hallucinations (chain-of-thought verification)", href: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations" },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "**Chain-of-thought** (chuỗi suy luận) là để mô hình suy nghĩ qua từng bước trước khi đưa ra kết luận, thay vì “nhảy” thẳng tới đáp án.",
        "Các model Claude hiện tại có **khả năng suy nghĩ tích hợp**. Theo Anthropic (11/2026), với Claude Opus 5.5 và Fable 5.1, chế độ suy nghĩ thích ứng **luôn bật**: Claude tự quyết định suy nghĩ nhiều hay ít dựa trên độ phức tạp của câu hỏi; câu dễ thì trả lời luôn. Vì vậy bạn không cần lúc nào cũng viết “hãy suy nghĩ từng bước”.",
        "Điều bạn vẫn nên làm: khi cần **kiểm tra lập luận** — phép tính, so sánh nhiều tiêu chí, quyết định có hệ quả — hãy yêu cầu Claude **trình bày các bước trong câu trả lời**, tách riêng phần **kết luận**. Bạn đọc kết luận nhanh, và khi thấy nghi ngờ thì soát lại từng bước.",
        "Tránh **suy nghĩ quá mức**: với việc đơn giản, yêu cầu “phân tích thật kỹ mọi khía cạnh” chỉ làm câu trả lời chậm và dài. Anthropic còn có prompt mẫu nhắc Claude chỉ suy nghĩ khi điều đó thật sự cải thiện chất lượng.",
        "Với việc lớn nhiều giai đoạn mà bạn muốn xem kết quả giữa chừng, dùng **chuỗi prompt**: mỗi bước một prompt. Mẫu phổ biến nhất là **tự sửa**: viết nháp → rà soát theo tiêu chí → hoàn thiện.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Hỏi đồng nghiệp “mấy giờ họp?” thì cần đáp ngay. Nhờ họ tính khối lượng dầu cần mua cho 12 máy thì bạn muốn xem cách tính. Còn làm hồ sơ thầu thì chia thành nhiều buổi: thu thập, viết nháp, rà soát, hoàn thiện.",
      },
      terms: [
        { term: "Chain-of-thought", definition: "Suy luận qua các bước trung gian trước khi kết luận." },
        { term: "Adaptive thinking", definition: "Chế độ Claude tự điều chỉnh mức suy nghĩ theo độ khó của câu hỏi." },
        { term: "Prompt chaining", definition: "Chia nhiệm vụ thành nhiều prompt nối tiếp; đầu ra bước trước là đầu vào bước sau." },
        { term: "Self-correction", definition: "Mẫu: nháp → rà soát theo tiêu chí → hoàn thiện." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: ba cách giao việc theo độ phức tạp",
      infographic: {
        kind: "compare",
        columns: [
          { title: "Hỏi thẳng", tone: "neutral", items: ["Câu hỏi dữ kiện đơn giản", "Viết lại câu ngắn, dịch câu chào", "Không cần xem lập luận"] },
          { title: "Yêu cầu trình bày các bước", tone: "good", items: ["Tính toán nhiều bước", "So sánh nhiều tiêu chí có trọng số", "Cần kiểm tra lập luận trước khi dùng", "Tách phần các bước và phần kết luận"] },
          { title: "Chuỗi prompt", tone: "neutral", items: ["Nhiệm vụ lớn nhiều giai đoạn", "Muốn xem và sửa kết quả giữa chừng", "Mẫu: nháp → rà soát → hoàn thiện"] },
        ],
      },
      caption: "Mức “suy nghĩ” bạn yêu cầu nên tương xứng với độ phức tạp và nhu cầu kiểm tra.",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: chọn cách giao việc",
      mermaid: `flowchart TD
  A["Nhiệm vụ mới"] --> B{"Đơn giản, không cần xem lập luận?"}
  B -- "Có" --> C["Hỏi thẳng"]
  B -- "Không" --> D{"Một lượt là đủ?"}
  D -- "Có" --> E["Yêu cầu trình bày các bước, tách kết luận"]
  D -- "Không, nhiều giai đoạn" --> F["Chuỗi prompt"]
  F --> G["Nháp"] --> H["Rà soát theo tiêu chí"] --> I["Hoàn thiện"]`,
      caption: "Hai câu hỏi: có cần xem lập luận không, và có cần nhiều giai đoạn không.",
      alt: "Lưu đồ: nhiệm vụ đơn giản thì hỏi thẳng; nếu không, một lượt đủ thì yêu cầu trình bày các bước và tách kết luận; nếu nhiều giai đoạn thì dùng chuỗi prompt gồm nháp, rà soát, hoàn thiện.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng",
      bad: {
        label: "Không kiểm tra được",
        content: "Chọn nhà cung cấp dầu biến áp tốt nhất trong 3 báo giá này.",
        notes: ["Chỉ nhận được một cái tên, không biết dựa trên tiêu chí nào.", "Nếu sai, không biết sai ở bước nào."],
      },
      good: {
        label: "Kiểm tra được",
        content:
          "So sánh 3 báo giá theo tiêu chí có trọng số: giá 40%, thời gian giao 30%, bảo hành 30%. Trong phần <cac_buoc>, chấm điểm từng tiêu chí và tính tổng có trọng số. Trong phần <ket_luan>, nêu nhà cung cấp đề xuất trong 2 câu.",
        notes: ["Thấy rõ cách chấm và cách tính.", "Đọc kết luận nhanh, soát các bước khi cần."],
      },
      takeaway: "Với quyết định có hệ quả, yêu cầu lập luận hiển thị và tách riêng kết luận.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn cách giao việc",
      sim: {
        kind: "choose",
        options: [
          { id: "direct", label: "Hỏi thẳng" },
          { id: "steps", label: "Yêu cầu trình bày các bước" },
          { id: "chain", label: "Chia thành chuỗi prompt" },
        ],
        scenarios: [
          { id: "s1", text: "Đổi 2.500 kVA sang MVA.", answer: "direct", why: "Phép đổi đơn giản, không cần xem lập luận." },
          { id: "s2", text: "Tính tổng tổn hao năng lượng của 12 máy trong một năm và so với ngân sách điện.", answer: "steps", why: "Nhiều phép tính — cần xem từng bước để kiểm tra." },
          { id: "s3", text: "Chọn nhà cung cấp theo 5 tiêu chí có trọng số.", answer: "steps", why: "Quyết định nhiều tiêu chí — cần thấy cách chấm điểm." },
          { id: "s4", text: "Làm hồ sơ dự thầu: tổng hợp yêu cầu, viết nháp, rà soát theo tiêu chí chấm thầu, hoàn thiện.", answer: "chain", why: "Nhiều giai đoạn, cần xem và sửa kết quả giữa chừng." },
          { id: "s5", text: "Viết lại câu chào trong email cho lịch sự hơn.", answer: "direct", why: "Việc đơn giản." },
        ],
      },
      intro: "Với mỗi nhiệm vụ, chọn cách giao việc phù hợp nhất.",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: yêu cầu lập luận có thể kiểm tra",
      steps: [
        { title: "Nêu dữ liệu và tiêu chí", detail: "Dữ liệu đầu vào, công thức hoặc tiêu chí đánh giá, trọng số nếu có." },
        { title: "Yêu cầu trình bày các bước trong một phần riêng", detail: "Mỗi bước một dòng, có số liệu trung gian." },
        {
          title: "Tách phần kết luận",
          detail: "Dùng thẻ hoặc tiêu đề để bạn đọc kết luận nhanh.",
          code: { lang: "text", content: "Trình bày các bước tính trong <cac_buoc>, mỗi bước một dòng kèm số liệu trung gian.\nNêu kết quả cuối cùng trong <ket_luan>, tối đa 2 câu." },
        },
        { title: "Soát các bước khi kết quả bất thường", detail: "Đặc biệt các phép tính — đối chiếu lại bằng bảng tính." },
        { title: "Việc nhiều giai đoạn: chia thành chuỗi", detail: "Prompt 1: nháp. Prompt 2: rà soát nháp theo tiêu chí. Prompt 3: hoàn thiện theo rà soát." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết prompt để Claude tính tỷ lệ lỗi từng chuyền và xác định chuyền cần ưu tiên cải tiến, với lập luận kiểm tra được và kết luận tách riêng.",
      sampleData: { name: "loi_theo_chuyen.csv", content: "Chuyen,San_luong,So_loi\nA,1200,18\nB,950,21\nC,1400,14" },
      placeholder: "Dưới đây là … Hãy … Trình bày các bước … Kết luận …",
      rubric: [
        { id: "data", label: "Có dữ liệu", weight: 1, check: { kind: "anyKeyword", keywords: ["dữ liệu", "bảng", "dưới đây", "csv"] }, pass: "Có dữ liệu.", fail: "Đưa dữ liệu vào prompt." },
        { id: "steps", label: "Yêu cầu trình bày các bước", weight: 1, check: { kind: "anyKeyword", keywords: ["các bước", "từng bước", "cách tính", "trình bày phép tính"] }, pass: "Có yêu cầu các bước.", fail: "Yêu cầu trình bày các bước tính." },
        { id: "separate", label: "Tách kết luận", weight: 1, check: { kind: "regex", pattern: "(<\\s*ket_luan|<\\s*conclusion|ket luan rieng|phan ket luan|<\\s*cac_buoc|tach rieng)" }, pass: "Có tách kết luận.", fail: "Tách phần kết luận, ví dụ trong thẻ <ket_luan>." },
        { id: "criteria", label: "Nêu công thức/tiêu chí", weight: 1, check: { kind: "anyKeyword", keywords: ["tỷ lệ lỗi", "số lỗi", "sản lượng", "công thức", "tiêu chí"] }, pass: "Có tiêu chí.", fail: "Nêu cách tính: tỷ lệ lỗi = số lỗi / sản lượng." },
      ],
      passScore: 0.75,
      referenceAnswer:
        "Dưới đây là bảng sản lượng và số lỗi của 3 chuyền (loi_theo_chuyen.csv).\nHãy tính tỷ lệ lỗi từng chuyền (tỷ lệ lỗi = số lỗi / sản lượng × 100%) và xác định chuyền cần ưu tiên cải tiến.\nTrình bày các bước tính trong <cac_buoc>, mỗi chuyền một dòng kèm phép tính.\nNêu chuyền cần ưu tiên và lý do trong <ket_luan>, tối đa 2 câu. Chỉ dùng số liệu trong bảng.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Chain-of-thought: suy luận qua các bước trước khi kết luận.",
        "Model Claude hiện tại có suy nghĩ thích ứng; không cần lúc nào cũng nhắc “suy nghĩ từng bước”.",
        "Cần kiểm tra lập luận (tính toán, nhiều tiêu chí) → yêu cầu trình bày các bước, tách kết luận.",
        "Việc đơn giản → hỏi thẳng; tránh yêu cầu phân tích quá mức.",
        "Việc nhiều giai đoạn → chuỗi prompt; mẫu tự sửa: nháp → rà soát → hoàn thiện.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một quyết định nhỏ trong công việc cần so sánh nhiều phương án (nhà cung cấp, lịch bảo trì, phương án sửa chữa).",
      tasks: ["Hỏi Claude theo cách hỏi thẳng và ghi lại kết quả.", "Hỏi lại với tiêu chí, yêu cầu trình bày các bước và tách kết luận.", "Soát các bước, ghi lại chỗ bạn đồng ý / không đồng ý."],
      deliverable: "Hai câu trả lời và ghi chú về chỗ lập luận cần chỉnh.",
      checklist: ["Có tiêu chí và trọng số", "Đã soát từng bước", "Đã ghi nhận xét vào ô Ghi chú"],
    },
  ],
};
