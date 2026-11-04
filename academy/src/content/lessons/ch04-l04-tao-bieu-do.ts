import type { Lesson } from "@/lib/types/content";

const VI = "https://support.claude.com/en/articles/13641943-visual-and-interactive-content";
const FC = "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude";
const UP = "https://support.claude.com/en/articles/8241126-upload-files-to-claude";

export const lessonTaoBieuDo: Lesson = {
  id: "ch04-l04",
  chapterId: "ch04",
  slug: "tao-bieu-do",
  title: "Tạo biểu đồ",
  subtitle: "Từ file số liệu đến biểu đồ trung thực: chọn loại biểu đồ theo câu hỏi, nói rõ dữ liệu và cách tổng hợp, yêu cầu nhãn và đơn vị, rồi đối chiếu số trước khi dùng.",
  level: "intermediate",
  estimatedMinutes: 25,
  updatedAt: "2026-11-03",
  objectives: [
    { id: "o1", text: "Chọn loại biểu đồ theo câu hỏi: so sánh, xu hướng, tỷ trọng, quan hệ." },
    { id: "o2", text: "Nói rõ dữ liệu: file, cột, khoảng thời gian, cách tổng hợp, đơn vị." },
    { id: "o3", text: "Yêu cầu biểu đồ dễ đọc và trung thực: tiêu đề nói ý chính, nhãn trục và đơn vị, trục cột bắt đầu từ 0, không 3D." },
    { id: "o4", text: "Đối chiếu số liệu qua bảng tổng hợp đi kèm và chọn nơi xuất: hình trong chat, artifact hay file PNG." },
  ],
  concepts: [
    { id: "chart-question", label: "Bắt đầu từ câu hỏi" },
    { id: "bar-chart", label: "Biểu đồ cột" },
    { id: "line-chart", label: "Biểu đồ đường" },
    { id: "share-chart", label: "Tỷ trọng" },
    { id: "scatter-chart", label: "Biểu đồ phân tán" },
    { id: "data-spec", label: "Mô tả dữ liệu" },
    { id: "aggregation", label: "Cách tổng hợp" },
    { id: "title-takeaway", label: "Tiêu đề nói ý chính" },
    { id: "axis-labels", label: "Nhãn trục và đơn vị" },
    { id: "zero-baseline", label: "Trục cột bắt đầu từ 0" },
    { id: "summary-table", label: "Bảng tổng hợp để đối chiếu" },
    { id: "chart-output", label: "Nơi xuất biểu đồ" },
  ],
  hints: [
    "So sánh nhóm → cột. Xu hướng theo thời gian → đường. Quan hệ hai biến → phân tán.",
    "Luôn xin kèm bảng số đã tổng hợp để đối chiếu với file gốc.",
    "Biểu đồ cột phải bắt đầu từ 0, nếu không chênh lệch bị phóng đại.",
  ],
  sources: [
    { label: "Claude Help Center — Visual and interactive content (custom visuals, CSV thành biểu đồ)", href: VI },
    { label: "Claude Help Center — Create and edit files with Claude (biểu đồ PNG, Excel)", href: FC },
    { label: "Claude Help Center — Upload files to Claude (CSV, XLSX)", href: UP },
  ],
  blocks: [
    { id: "muc-tieu", type: "objectives", title: "Mục tiêu bài học" },
    {
      id: "giai-thich",
      type: "explain",
      title: "Giải thích thật đơn giản",
      paragraphs: [
        "Claude dựng biểu đồ được theo nhiều cách: **hình trực quan ngay trong chat** (custom visuals, beta — tải CSV lên có thể nhận biểu đồ khám phá được), **artifact** biểu đồ/dashboard để sửa và chia sẻ, hoặc **file** như ảnh biểu đồ PNG, file Excel để tải về. Dù chọn cách nào, biểu đồ tốt luôn **bắt đầu từ câu hỏi**: bạn muốn người xem thấy điều gì?",
        "**Chọn loại theo câu hỏi**: so sánh các nhóm (lỗi theo công đoạn) → **cột**; xu hướng theo thời gian (lỗi theo tháng) → **đường**; tỷ trọng trong tổng (mỗi loại lỗi chiếm bao nhiêu %) → cột chồng 100% hoặc bảng — biểu đồ tròn chỉ hợp khi rất ít phần; quan hệ giữa hai đại lượng (giờ tăng ca và số lỗi) → **phân tán**. Biểu đồ 3D và quá nhiều màu thường làm khó đọc.",
        "**Nói rõ dữ liệu**: file nào, cột nào, khoảng thời gian, **cách tổng hợp** (cộng, trung bình, đếm) và **đơn vị**. “Vẽ biểu đồ từ file này” để Claude tự đoán cột và phép tính — dễ ra biểu đồ đẹp nhưng sai ý. Yêu cầu **tiêu đề nói ý chính** (“Lỗi lắp ráp vỏ tăng 3 tháng liền”), **nhãn trục kèm đơn vị**, và với biểu đồ cột thì **trục bắt đầu từ 0** — cắt trục làm chênh lệch nhỏ trông rất lớn.",
        "**Đối chiếu trước khi dùng**: xin Claude kèm **bảng số đã tổng hợp** dùng để vẽ, rồi so vài con số (ví dụ tổng cả năm, tháng cao nhất) với file gốc. Lưu ý từ Help Center: file **XLSX** cần bật khả năng tạo file; **custom visuals** đang beta, chỉ có trên web và ứng dụng máy tính. Người nhận cần ảnh để dán vào báo cáo → xin file PNG; cần xem, lọc, cập nhật → artifact.",
      ],
      analogy: {
        title: "Ví dụ đời thường",
        text: "Biểu đồ giống bản đồ: bản đồ đường bộ để tìm đường, bản đồ địa hình để leo núi — chọn sai loại thì đi lạc dù bản đồ vẽ rất đẹp. Và bản đồ phải có tỷ lệ (đơn vị) và hướng Bắc (nhãn trục), không thì đọc sai khoảng cách.",
      },
      terms: [
        { term: "Tổng hợp (aggregate)", definition: "Gộp nhiều dòng dữ liệu thành một số: tổng, trung bình, đếm." },
        { term: "Trục", definition: "Đường ngang/dọc của biểu đồ, cần nhãn và đơn vị." },
        { term: "Biểu đồ phân tán", definition: "Mỗi điểm là một cặp giá trị, dùng để xem quan hệ giữa hai đại lượng." },
        { term: "Cắt trục", definition: "Trục không bắt đầu từ 0, làm chênh lệch trông lớn hơn thực tế." },
      ],
    },
    {
      id: "hinh-minh-hoa",
      type: "illustration",
      title: "Hình minh hoạ: câu hỏi nào, biểu đồ nào",
      infographic: {
        kind: "table",
        headers: ["Câu hỏi", "Loại biểu đồ", "Lưu ý"],
        rows: [
          ["Công đoạn nào nhiều lỗi nhất?", "Cột (ngang nếu tên dài)", "Sắp xếp giảm dần, trục từ 0"],
          ["Lỗi tăng hay giảm theo tháng?", "Đường", "Trục thời gian đều nhau"],
          ["Mỗi loại lỗi chiếm bao nhiêu %?", "Cột chồng 100% hoặc bảng", "Tròn chỉ khi rất ít phần"],
          ["Tăng ca nhiều có kéo theo lỗi nhiều?", "Phân tán", "Quan hệ không có nghĩa là nguyên nhân"],
          ["Cần số chính xác từng dòng", "Bảng", "Biểu đồ không thay được bảng"],
        ],
      },
      caption: "Nguyên tắc trình bày dữ liệu phổ biến, tổng hợp cho khoá học (03/11/2026).",
    },
    {
      id: "so-do",
      type: "diagram",
      title: "Sơ đồ nguyên lý: từ file số liệu đến biểu đồ dùng được",
      mermaid: `flowchart TD
  A["Câu hỏi cần trả lời"] --> B["Chọn loại biểu đồ"]
  B --> C["Mô tả dữ liệu: file, cột, thời gian, tổng hợp, đơn vị"]
  C --> D["Yêu cầu: tiêu đề ý chính, nhãn trục, trục từ 0, kèm bảng tổng hợp"]
  D --> E["Claude dựng biểu đồ"]
  E --> F{"Số trong bảng khớp file gốc?"}
  F -->|"Không"| G["Chỉ ra con số lệch, yêu cầu tính lại"]
  G --> E
  F -->|"Có"| H{"Người nhận cần gì?"}
  H -->|"Xem nhanh lúc này"| I["Hình trong chat"]
  H -->|"Xem, lọc, cập nhật"| J["Artifact"]
  H -->|"Dán vào báo cáo"| K["File PNG / Excel"]`,
      caption: "Câu hỏi quyết định loại biểu đồ; người nhận quyết định nơi xuất.",
      alt: "Lưu đồ: bắt đầu từ câu hỏi cần trả lời, chọn loại biểu đồ, mô tả dữ liệu gồm file, cột, thời gian, cách tổng hợp, đơn vị; yêu cầu tiêu đề nói ý chính, nhãn trục, trục từ 0 và kèm bảng tổng hợp; Claude dựng biểu đồ. Nếu số trong bảng không khớp file gốc thì chỉ ra con số lệch và yêu cầu tính lại. Nếu khớp thì chọn nơi xuất: xem nhanh thì hình trong chat, cần xem lọc cập nhật thì artifact, dán vào báo cáo thì file PNG hoặc Excel.",
    },
    {
      id: "vi-du",
      type: "compare",
      title: "Ví dụ sai và ví dụ đúng: yêu cầu biểu đồ",
      bad: {
        label: "Để Claude tự đoán",
        content: "(Tải loi-6-thang.csv) “Vẽ biểu đồ đẹp từ file này.”",
        notes: ["Không biết dùng cột nào, cộng hay đếm.", "Không biết câu hỏi cần trả lời.", "Không có gì để đối chiếu."],
      },
      good: {
        label: "Câu hỏi + dữ liệu + tiêu chí",
        content: "“Từ loi-6-thang.csv (cột Ngay, Cong_doan, So_loi), vẽ biểu đồ đường: tổng So_loi theo tháng (tháng 5–10/2026), mỗi công đoạn một đường. Tiêu đề nói xu hướng chính; trục dọc ‘Số lỗi’, trục ngang ‘Tháng’. Kèm bảng tổng theo tháng và công đoạn để tôi đối chiếu.”",
        notes: ["Rõ câu hỏi: xu hướng.", "Rõ cột, khoảng thời gian, phép tổng.", "Có bảng để kiểm tra số."],
      },
      takeaway: "Biểu đồ đúng = câu hỏi rõ + dữ liệu rõ + bảng đối chiếu.",
    },
    {
      id: "mo-phong",
      type: "simulation",
      title: "Mô phỏng: chọn loại biểu đồ",
      sim: {
        kind: "choose",
        options: [
          { id: "bar", label: "Cột" },
          { id: "line", label: "Đường" },
          { id: "stack", label: "Cột chồng 100%" },
          { id: "scatter", label: "Phân tán" },
          { id: "table", label: "Bảng" },
        ],
        scenarios: [
          { id: "s1", text: "So sánh tổng số lỗi của 6 công đoạn trong quý.", answer: "bar", why: "So sánh các nhóm → cột, sắp giảm dần." },
          { id: "s2", text: "Số lỗi mỗi tháng trong 12 tháng qua tăng hay giảm?", answer: "line", why: "Xu hướng theo thời gian → đường." },
          { id: "s3", text: "Mỗi ca (sáng, chiều, đêm) có tỷ lệ các loại lỗi khác nhau thế nào?", answer: "stack", why: "Tỷ trọng trong tổng của từng nhóm → cột chồng 100%." },
          { id: "s4", text: "Tổ làm tăng ca nhiều có đi kèm nhiều lỗi hơn không (20 tổ)?", answer: "scatter", why: "Quan hệ hai đại lượng → phân tán." },
          { id: "s5", text: "Kế toán cần số lượng và giá trị chính xác của 15 mã vật tư.", answer: "table", why: "Cần số chính xác → bảng." },
        ],
      },
      intro: "Mỗi câu hỏi hợp với một loại biểu đồ (hoặc bảng).",
    },
    {
      id: "tung-buoc",
      type: "steps",
      title: "Hướng dẫn từng bước: một biểu đồ trung thực",
      steps: [
        { title: "Viết câu hỏi cần trả lời", detail: "Một câu: người xem cần thấy điều gì?" },
        { title: "Chuẩn bị file", detail: "CSV dùng được ngay; XLSX cần bật khả năng tạo file. Bỏ cột nhạy cảm không cần." },
        { title: "Viết yêu cầu đầy đủ", detail: "Loại biểu đồ, cột, khoảng thời gian, cách tổng hợp, đơn vị, tiêu đề, nhãn trục.", code: { lang: "text", content: "Từ san-luong.csv, vẽ biểu đồ cột ngang: tổng San_luong theo To (tháng 10/2026), sắp giảm dần, trục từ 0, đơn vị “sản phẩm”. Tiêu đề nói tổ cao nhất và thấp nhất. Kèm bảng tổng theo tổ." } },
        { title: "Đối chiếu số", detail: "So 2–3 con số trong bảng tổng hợp với file gốc (ví dụ dùng SUM trong Excel)." },
        { title: "Chọn nơi xuất", detail: "Xem nhanh → hình trong chat; chia sẻ, cập nhật → artifact; dán báo cáo → file PNG." },
      ],
    },
    {
      id: "bai-tap",
      type: "exercise",
      title: "Bài tập thực hành",
      instructions:
        "Viết yêu cầu vẽ biểu đồ cho tình huống trong dữ liệu mẫu: chọn loại biểu đồ đúng, nêu cột, khoảng thời gian, cách tổng hợp, nhãn trục, và yêu cầu bảng đối chiếu.",
      sampleData: {
        name: "Tình huống",
        content:
          "File: loi-6-thang.csv, cột Ngay (dd/mm/yyyy), Cong_doan (3 công đoạn), So_loi.\nDữ liệu từ 01/05 đến 31/10/2026.\nCâu hỏi của quản lý: lỗi của từng công đoạn đang tăng hay giảm theo tháng?",
      },
      placeholder: "Từ loi-6-thang.csv, vẽ …",
      rubric: [
        { id: "type", label: "Biểu đồ đường", weight: 1, check: { kind: "anyKeyword", keywords: ["biểu đồ đường", "đường"] }, pass: "Đúng loại.", fail: "Xu hướng theo thời gian → biểu đồ đường." },
        { id: "agg", label: "Tổng theo tháng, theo công đoạn", weight: 1, check: { kind: "allGroups", groups: [["tổng", "cộng"], ["tháng"], ["công đoạn", "cong_doan"]] }, pass: "Có cách tổng hợp.", fail: "Nêu: tổng So_loi theo tháng, mỗi công đoạn một đường." },
        { id: "range", label: "Khoảng thời gian", weight: 1, check: { kind: "regex", pattern: "(5|05)[^\\n]*(10)|thang 5|6 thang" }, pass: "Có khoảng thời gian.", fail: "Nêu tháng 5–10/2026." },
        { id: "labels", label: "Nhãn trục/tiêu đề", weight: 1, check: { kind: "anyKeyword", keywords: ["nhãn", "trục", "tiêu đề"] }, pass: "Có nhãn.", fail: "Yêu cầu tiêu đề và nhãn trục." },
        { id: "table", label: "Bảng đối chiếu", weight: 1, check: { kind: "anyKeyword", keywords: ["bảng", "đối chiếu"] }, pass: "Có bảng đối chiếu.", fail: "Xin kèm bảng tổng hợp để đối chiếu." },
      ],
      passScore: 0.8,
      referenceAnswer:
        "Từ loi-6-thang.csv, vẽ biểu đồ đường: tổng So_loi theo tháng (tháng 5 đến tháng 10/2026), mỗi công đoạn một đường. Tiêu đề nói xu hướng chính; trục dọc “Số lỗi”, trục ngang “Tháng”. Kèm bảng tổng theo tháng và công đoạn để tôi đối chiếu với file gốc.",
    },
    { id: "kiem-tra", type: "quiz", title: "Câu hỏi kiểm tra", questionsPerSession: 8 },
    { id: "giai-thich-dap-an", type: "answers", title: "Giải thích đáp án" },
    {
      id: "tom-tat",
      type: "summary",
      title: "Tóm tắt kiến thức",
      points: [
        "Bắt đầu từ câu hỏi; so sánh → cột, xu hướng → đường, tỷ trọng → cột chồng 100%/bảng, quan hệ → phân tán, số chính xác → bảng.",
        "Nói rõ file, cột, khoảng thời gian, cách tổng hợp, đơn vị.",
        "Tiêu đề nói ý chính, nhãn trục kèm đơn vị, trục cột từ 0, tránh 3D.",
        "Luôn xin bảng tổng hợp đi kèm và đối chiếu với file gốc.",
        "Xuất: hình trong chat (beta, web/máy tính), artifact, hoặc file PNG/Excel.",
      ],
    },
    {
      id: "nhiem-vu",
      type: "mission",
      title: "Nhiệm vụ ứng dụng thực tế",
      context: "Chọn một báo cáo số liệu bạn làm định kỳ.",
      tasks: [
        "Viết câu hỏi chính của báo cáo và chọn loại biểu đồ phù hợp.",
        "Nhờ Claude vẽ kèm bảng tổng hợp; đối chiếu 3 con số với file gốc.",
        "Xuất đúng dạng người nhận cần và hỏi họ có đọc ra ý chính không.",
      ],
      deliverable: "Biểu đồ + bảng tổng hợp + ghi chú 3 con số đã đối chiếu.",
      checklist: ["Đúng loại biểu đồ", "Có nhãn trục và đơn vị", "Số đã đối chiếu"],
    },
  ],
};
