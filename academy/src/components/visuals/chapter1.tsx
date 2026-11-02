import { ArrowRight, Cpu, MessageSquare, Repeat, Scissors, Sparkles } from "lucide-react";
import { MODEL_LINEUP } from "@/content/widgets/chapter1";

/** Pipeline infographic for lesson ch01-l01. */
export function AiPrediction() {
  const steps = [
    { icon: MessageSquare, title: "1. Câu hỏi", body: "“Máy biến áp bị rò…”" },
    { icon: Scissors, title: "2. Chia token", body: "Máy · biến · áp · bị · rò" },
    { icon: Cpu, title: "3. Tính xác suất", body: "dầu 82% · khí 7% · nước 6%…" },
    { icon: Sparkles, title: "4. Chọn token", body: "→ “dầu”" },
    { icon: Repeat, title: "5. Lặp lại", body: "Nối vào câu và đoán tiếp" },
  ];
  return (
    <div className="flex flex-col gap-4" data-testid="ai-prediction">
      <ol className="grid gap-3 sm:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} className="relative flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-3 text-center">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <s.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold">{s.title}</span>
            <span className="font-mono text-xs text-muted-foreground">{s.body}</span>
            {i < steps.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden size-4 -translate-y-1/2 text-primary sm:block" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <div className="rounded-2xl border border-border bg-card p-4">
        <p className="mb-2 text-sm font-semibold">Xác suất cho từ tiếp theo (minh hoạ)</p>
        <svg viewBox="0 0 400 120" className="w-full max-w-xl" role="img" aria-label="Biểu đồ cột: dầu 82 phần trăm, khí 7, nước 6, điện 5">
          {[
            ["dầu", 82],
            ["khí", 7],
            ["nước", 6],
            ["điện", 5],
          ].map(([w, p], i) => (
            <g key={w}>
              <text x="0" y={20 + i * 28} fontSize="13" fill="var(--foreground)" dominantBaseline="middle">
                {w}
              </text>
              <rect x="50" y={10 + i * 28} width={(Number(p) / 100) * 300} height="18" rx="4" fill={i === 0 ? "var(--primary)" : "var(--muted-foreground)"} />
              <text x={56 + (Number(p) / 100) * 300} y={20 + i * 28} fontSize="12" fill="var(--foreground)" dominantBaseline="middle">
                {p}%
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/** ch01-l02: rule-based bot vs LLM assistant on the same message. */
export function ChatbotVsClaude() {
  const msg = "Máy tôi mua năm ngoái giờ bị hỏng, có được sửa miễn phí không?";
  return (
    <div className="flex flex-col gap-4" data-testid="chatbot-vs-claude">
      <p className="rounded-2xl bg-muted/60 p-3 text-center text-sm">
        Tin nhắn: <strong>“{msg}”</strong>
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border-2 border-danger/40 bg-danger-soft/40 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-danger">Chatbot kịch bản</p>
          <ol className="mt-3 flex flex-col gap-2 text-sm">
            <li className="rounded-xl bg-card p-2.5">1. Dò từ khoá → thấy <mark className="rounded bg-warning-soft px-1">giờ</mark></li>
            <li className="rounded-xl bg-card p-2.5">2. Khớp quy tắc “giờ làm việc”</li>
            <li className="rounded-xl bg-card p-2.5">3. Trả câu soạn sẵn: “Chúng tôi làm việc 8h–17h…”</li>
          </ol>
          <p className="mt-3 rounded-xl bg-card p-2.5 text-center text-sm font-semibold text-danger">Sai ý khách — khách hỏi về bảo hành</p>
        </div>
        <div className="rounded-2xl border-2 border-success/40 bg-success-soft/40 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-success">Trợ lý dựa trên LLM (như Claude)</p>
          <ol className="mt-3 flex flex-col gap-2 text-sm">
            <li className="rounded-xl bg-card p-2.5">1. Đọc cả câu: “mua năm ngoái”, “bị hỏng”, “sửa miễn phí”</li>
            <li className="rounded-xl bg-card p-2.5">2. Nhận ra ý định: hỏi về bảo hành</li>
            <li className="rounded-xl bg-card p-2.5">3. Thấy thiếu: ngày mua chính xác, lỗi gì → hỏi lại hoặc dựa vào điều khoản được cung cấp</li>
          </ol>
          <p className="mt-3 rounded-xl bg-card p-2.5 text-center text-sm font-semibold text-success">Đúng ý — nhưng cần điều khoản thật để trả lời chính xác</p>
        </div>
      </div>
    </div>
  );
}

/** ch01-l03: lineup map from the official Models overview (2026-11-02). */
export function ModelTiers() {
  return (
    <div className="flex flex-col gap-3" data-testid="model-tiers">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {MODEL_LINEUP.map((m, i) => (
          <div key={m.id} className="flex flex-col rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{i === 1 ? "Khuyên bắt đầu" : " "}</span>
              <span className="flex gap-0.5" aria-label={`Mức năng lực ${4 - i} trên 4`}>
                {[0, 1, 2, 3].map((d) => (
                  <span key={d} className={`size-2 rounded-full ${d < 4 - i ? "bg-primary" : "bg-muted"}`} />
                ))}
              </span>
            </div>
            <p className="mt-2 font-extrabold">{m.name}</p>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{m.purpose}</p>
            <dl className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <dt className="text-muted-foreground">Độ trễ</dt>
              <dd className="font-semibold">{m.latency}</dd>
              <dt className="text-muted-foreground">Giá API*</dt>
              <dd className="font-semibold">{m.price}</dd>
            </dl>
            <code className="mt-2 rounded bg-muted px-1.5 py-0.5 font-mono text-[11px]">{m.api}</code>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-muted/60 p-3 text-sm">
        <strong>Chung cho cả 4 model:</strong> đầu vào văn bản + hình ảnh · đa ngôn ngữ · dùng công cụ · context window 1M token · tối đa 128K token đầu ra.
        <span className="mt-1 block text-xs text-muted-foreground">
          *Giá API cơ bản cho mỗi triệu token đầu vào / đầu ra, theo trang Models overview ngày 02/11/2026. Giá trong ứng dụng Claude tính theo gói thuê bao.
        </span>
      </div>
    </div>
  );
}

/** ch01-l04: three-zone capability map. */
export function CapabilityMap() {
  const zones = [
    {
      title: "Làm ngay với nội dung bạn đưa vào",
      tone: "border-success/40 bg-success-soft/40",
      items: ["Viết, biên tập email, báo cáo", "Tóm tắt, phân tích tài liệu và bảng số", "Đọc ảnh chụp bảng đo, sơ đồ", "Giải thích và viết code", "Tạo Artifacts: trang web nhỏ, biểu đồ"],
    },
    {
      title: "Cần kết nối công cụ / quyền truy cập",
      tone: "border-info/40 bg-info-soft/40",
      items: ["Tìm kiếm web (khi được bật)", "Connector / MCP tới hệ thống khác", "Claude Code: đọc, sửa file, chạy lệnh trong dự án"],
    },
    {
      title: "Con người quyết định",
      tone: "border-warning/40 bg-warning-soft/40",
      items: ["Ký duyệt, xuất xưởng, nghiệm thu", "Kết luận pháp lý, tài chính", "Quyết định về con người"],
    },
  ];
  return (
    <div className="grid gap-3 md:grid-cols-3" data-testid="capability-map">
      {zones.map((z, i) => (
        <div key={z.title} className={`rounded-2xl border-2 p-4 ${z.tone}`}>
          <p className="flex items-center gap-2 font-bold">
            <span className="flex size-7 items-center justify-center rounded-full bg-card text-sm">{i + 1}</span>
            {z.title}
          </p>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            {z.items.map((it) => (
              <li key={it} className="rounded-xl bg-card p-2">
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** ch01-l05: the four main limits, each with a remedy. */
export function AiLimits() {
  const cards = [
    { title: "Mốc kiến thức", body: "Đáng tin cậy đến 6/2026 (model hiện tại).", fix: "Cung cấp tài liệu mới hoặc dùng tìm kiếm web có nguồn." },
    { title: "Bộ nhớ làm việc có hạn", body: "Context window 1M token — tính cả câu trả lời; quá dài làm giảm chất lượng.", fix: "Chọn lọc tài liệu, tóm tắt hội thoại dài." },
    { title: "Không tự truy cập", body: "Không thấy máy tính, email, hệ thống của bạn nếu chưa kết nối.", fix: "Dán/tải dữ liệu cần thiết hoặc kết nối công cụ được phép." },
    { title: "Có thể sai", body: "Văn bản nghe hợp lý vẫn có thể sai, kể cả khi rất tự tin.", fix: "Kiểm chứng tương xứng với rủi ro." },
  ];
  return (
    <div className="flex flex-col gap-4" data-testid="ai-limits">
      <div className="rounded-2xl border border-border bg-card p-4">
        <p className="mb-2 text-sm font-semibold">Dòng thời gian kiến thức (minh hoạ)</p>
        <svg viewBox="0 0 600 70" className="w-full" role="img" aria-label="Dòng thời gian: dữ liệu huấn luyện đến tháng 6 năm 2026, sau đó là vùng model không biết nếu không được cung cấp">
          <rect x="10" y="28" width="380" height="14" rx="7" fill="var(--primary)" />
          <rect x="390" y="28" width="200" height="14" rx="7" fill="var(--muted)" stroke="var(--border)" strokeDasharray="4 3" />
          <line x1="390" x2="390" y1="18" y2="52" stroke="var(--foreground)" strokeWidth="2" />
          <text x="10" y="18" fontSize="12" fill="var(--foreground)">Dữ liệu đã học</text>
          <text x="396" y="18" fontSize="12" fill="var(--foreground)">Mốc 6/2026</text>
          <text x="400" y="64" fontSize="12" fill="var(--muted-foreground)">Thông tin mới: cần bạn cung cấp</text>
        </svg>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-4">
            <p className="font-bold">{c.title}</p>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{c.body}</p>
            <p className="mt-3 rounded-xl bg-success-soft p-2 text-xs font-semibold text-success">Cách xử lý: {c.fix}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** ch01-l06: five common error types with a QA example and how to detect each. */
export function AiErrorTypes() {
  const rows = [
    { type: "Bịa thông tin", example: "Nêu số hiệu tiêu chuẩn hoặc chứng nhận không có thật", detect: "Tìm trích dẫn trong tài liệu gốc; không có → loại bỏ" },
    { type: "Hiểu sai yêu cầu", example: "Được nhờ tóm tắt nhưng viết bài phân tích dài", detect: "So kết quả với Task và Output đã nêu" },
    { type: "Sai tính toán", example: "Cộng tổng số lỗi sai, phần trăm không khớp", detect: "Tính lại bằng bảng tính hoặc yêu cầu trình bày từng bước" },
    { type: "Thông tin lỗi thời", example: "Dùng biểu thuế hoặc phiên bản tiêu chuẩn cũ", detect: "Đối chiếu văn bản hiện hành, xem ngày ban hành" },
    { type: "Quá tự tin", example: "Khẳng định chắc chắn điều tài liệu không nói", detect: "Cho phép nói “không biết”; hỏi “căn cứ ở đâu?”" },
  ];
  return (
    <div className="overflow-x-auto" data-testid="ai-error-types" tabIndex={0} role="region" aria-label="Bảng 5 loại lỗi thường gặp">
      <table className="w-full min-w-[36rem] text-sm">
        <thead>
          <tr className="text-left">
            <th className="rounded-tl-xl bg-primary-soft p-3">Loại lỗi</th>
            <th className="bg-primary-soft p-3">Ví dụ trong công việc QA</th>
            <th className="rounded-tr-xl bg-primary-soft p-3">Cách phát hiện</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.type} className={i % 2 ? "bg-muted/40" : "bg-card"}>
              <td className="p-3 font-bold">
                <span className="mr-2 inline-flex size-6 items-center justify-center rounded-full bg-danger-soft text-xs text-danger">{i + 1}</span>
                {r.type}
              </td>
              <td className="p-3">{r.example}</td>
              <td className="p-3 text-success">{r.detect}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
