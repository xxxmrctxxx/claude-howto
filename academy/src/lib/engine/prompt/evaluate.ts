import { normalizeText } from "@/lib/engine/question/text";
import { foldVietnamese } from "@/lib/utils";

/**
 * Rule-based prompt evaluator (Lab 1 Prompt Builder + quick checker).
 * Deterministic heuristics only — no AI call. Every score comes with the
 * reasons that produced it so the learner can see what to change.
 */

export type BlockId = "role" | "context" | "task" | "constraints" | "output";
export type PromptBlocks = Record<BlockId, string>;

export interface Finding {
  ok: boolean;
  text: string;
}

export interface CriterionScore {
  id: "goal" | "context" | "constraints" | "format" | "clarity";
  label: string;
  score: number; // 0..1
  findings: Finding[];
  suggestion?: string;
}

export interface PromptEvaluation {
  overall: number; // 0..1
  criteria: CriterionScore[];
  assembled: string;
  order: BlockId[];
}

export interface ScenarioExpectation {
  block: BlockId;
  keywords: string[];
  ok: string;
  missing: string;
}

const has = (text: string, words: string[]) => {
  const t = ` ${normalizeText(text)} `;
  return words.some((w) => t.includes(` ${normalizeText(w)} `));
};
const folded = (s: string) => foldVietnamese(s.toLowerCase());

export const ACTION_VERBS = [
  "viết", "tóm tắt", "phân tích", "so sánh", "liệt kê", "tạo", "lập", "tính", "xác định", "đề xuất", "soạn",
  "dịch", "kiểm tra", "giải thích", "phân loại", "tổng hợp", "chỉ ra", "thiết kế", "sửa", "rà soát", "đánh giá", "xây dựng",
];
export const FORMAT_WORDS = [
  "bảng", "cột", "gạch đầu dòng", "danh sách", "đoạn văn", "email", "json", "markdown", "biểu đồ", "checklist", "tiêu đề",
  "song ngữ", "định dạng", "trình bày", "mẫu", "csv", "slide", "bước", "dòng",
];
/**
 * Vague, subjective phrases. Matched WITH diacritics: folding would turn the
 * imperative "hãy" into "hay" (good) and flag every polite request.
 */
export const VAGUE_WORDS = [
  "thật hay", "viết hay", "cho hay", "hay vào", "đẹp", "tốt nhất có thể", "chuyên nghiệp", "một chút", "ngắn thôi", "gì đó",
  "vân vân", "v.v", "etc", "sao cho ổn", "tuỳ bạn", "tùy bạn", "cho xịn",
];
const hasExact = (text: string, words: string[]) => {
  const t = ` ${text.normalize("NFC").toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ")} `;
  return words.filter((w) => t.includes(` ${w.normalize("NFC").toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").trim()} `));
};
const LIMIT_RE = /(toi da|khong qua|it nhat|duoi|tren|chinh xac|chi dung|chi tap trung|gioi han|khong suy doan|khong bia|\d+\s*(tu|dong|y|cau|gach|muc|trang|phut|ky tu|%|slide|buoc))/;
const CONCRETE_RE = /(\d|"|“|<[a-z_]+>|\bfile\b|\bdu lieu\b|\bbang\b|\bkhach hang\b|\bnguoi doc\b)/;

/** Recommended reading order of blocks. */
export const RECOMMENDED_ORDER: BlockId[] = ["role", "context", "task", "constraints", "output"];

export function assemble(blocks: PromptBlocks, order: BlockId[]): string {
  return order
    .map((id) => blocks[id].trim())
    .filter(Boolean)
    .join("\n");
}

export function evaluatePrompt(blocks: PromptBlocks, order: BlockId[] = RECOMMENDED_ORDER, expectations: ScenarioExpectation[] = []): PromptEvaluation {
  const all = assemble(blocks, order);
  const expectFindings = (block: BlockId): Finding[] =>
    expectations.filter((e) => e.block === block).map((e) => ({ ok: has(blocks[block], e.keywords), text: has(blocks[block], e.keywords) ? e.ok : e.missing }));

  // 1. Mục tiêu (Task)
  const goalF: Finding[] = [
    { ok: blocks.task.trim().length > 0, text: blocks.task.trim() ? "Có khối Task." : "Chưa có khối Task — Claude không biết phải làm gì." },
    {
      ok: has(blocks.task, ACTION_VERBS),
      text: has(blocks.task, ACTION_VERBS) ? "Task bắt đầu bằng động từ hành động cụ thể." : "Thêm động từ cụ thể: tóm tắt, so sánh, đề xuất, lập bảng…",
    },
    {
      ok: blocks.task.trim().length >= 20,
      text: blocks.task.trim().length >= 20 ? "Task nêu rõ đối tượng cần xử lý." : "Task quá ngắn: nêu rõ làm gì VỚI cái gì.",
    },
    ...expectFindings("task"),
  ];
  // 2. Ngữ cảnh (Context + Role)
  const ctxF: Finding[] = [
    {
      ok: blocks.role.trim().length >= 8,
      text: blocks.role.trim().length >= 8 ? "Có vai trò (Role) định hướng chuyên môn." : "Thêm một câu vai trò: “Bạn là …”.",
    },
    {
      ok: blocks.context.trim().length >= 40,
      text: blocks.context.trim().length >= 40 ? "Bối cảnh đủ dài để giải thích tình huống." : "Bối cảnh còn mỏng: ai đọc, vì sao cần, dữ liệu gì?",
    },
    {
      ok: CONCRETE_RE.test(folded(blocks.context)),
      text: CONCRETE_RE.test(folded(blocks.context))
        ? "Bối cảnh có chi tiết cụ thể (số liệu, dữ liệu, người đọc)."
        : "Thêm chi tiết cụ thể: số lượng, thời gian, tên dữ liệu, người đọc.",
    },
    ...expectFindings("context"),
    ...expectFindings("role"),
  ];
  // 3. Ràng buộc
  const conF: Finding[] = [
    { ok: blocks.constraints.trim().length > 0, text: blocks.constraints.trim() ? "Có khối Constraints." : "Chưa có ràng buộc nào." },
    {
      ok: LIMIT_RE.test(folded(blocks.constraints)),
      text: LIMIT_RE.test(folded(blocks.constraints))
        ? "Ràng buộc đo được (số lượng, giới hạn, phạm vi)."
        : "Dùng ràng buộc đo được: “tối đa 150 từ”, “chỉ dùng số liệu trong bảng”.",
    },
    ...expectFindings("constraints"),
  ];
  // 4. Định dạng đầu ra
  const fmtF: Finding[] = [
    { ok: blocks.output.trim().length > 0, text: blocks.output.trim() ? "Có khối Output." : "Chưa mô tả định dạng kết quả." },
    {
      ok: has(blocks.output, FORMAT_WORDS),
      text: has(blocks.output, FORMAT_WORDS) ? "Định dạng cụ thể (bảng, danh sách, email…)." : "Nêu hình thức cụ thể: bảng mấy cột, bao nhiêu gạch đầu dòng…",
    },
    ...expectFindings("output"),
  ];
  // 5. Tính rõ ràng
  const vague = hasExact(all, VAGUE_WORDS);
  const negOnly = /(^|\n|\. )(đừng|không được|cấm)/i.test(blocks.constraints) && !LIMIT_RE.test(folded(blocks.constraints));
  const orderOk = order.indexOf("role") <= order.indexOf("task") && order.indexOf("context") <= order.indexOf("task");
  const clarF: Finding[] = [
    {
      ok: vague.length === 0,
      text: vague.length === 0 ? "Không có từ cảm tính mơ hồ." : `Từ mơ hồ cần thay bằng tiêu chí đo được: “${vague.join("”, “")}”.`,
    },
    {
      ok: !negOnly,
      text: negOnly ? "Ràng buộc chỉ nói điều cấm — hãy nói điều cần làm." : "Ràng buộc diễn đạt theo hướng điều cần làm.",
    },
    {
      ok: orderOk,
      text: orderOk ? "Thứ tự hợp lý: vai trò và bối cảnh đứng trước nhiệm vụ." : "Nên đặt Role và Context trước Task để Claude hiểu tình huống trước khi đọc yêu cầu.",
    },
    { ok: all.length >= 120, text: all.length >= 120 ? "Prompt đủ chi tiết." : "Prompt còn ngắn — một đồng nghiệp có làm được ngay không?" },
  ];

  const mk = (id: CriterionScore["id"], label: string, f: Finding[], suggestion: string): CriterionScore => {
    const score = f.length ? f.filter((x) => x.ok).length / f.length : 0;
    return { id, label, score, findings: f, suggestion: score < 1 ? suggestion : undefined };
  };
  const criteria = [
    mk("goal", "Mục tiêu", goalF, "Viết Task thành một câu: động từ + đối tượng + mục đích."),
    mk("context", "Ngữ cảnh", ctxF, "Bổ sung vai trò, người đọc và dữ liệu cụ thể."),
    mk("constraints", "Ràng buộc", conF, "Thêm giới hạn đo được về độ dài, phạm vi, ngôn ngữ."),
    mk("format", "Định dạng đầu ra", fmtF, "Mô tả chính xác hình thức kết quả bạn muốn nhận."),
    mk("clarity", "Tính rõ ràng", clarF, "Thay từ cảm tính bằng tiêu chí, sắp xếp lại thứ tự khối."),
  ];
  const overall = criteria.reduce((s, c) => s + c.score, 0) / criteria.length;
  return { overall, criteria, assembled: all, order };
}

/** Heuristically split a free-form prompt into blocks (for the quick checker). */
export function detectBlocks(text: string): PromptBlocks {
  const sentences = text
    .split(/(?<=[.!?:])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const blocks: PromptBlocks = { role: "", context: "", task: "", constraints: "", output: "" };
  const add = (id: BlockId, s: string) => (blocks[id] = blocks[id] ? `${blocks[id]} ${s}` : s);
  for (const s of sentences) {
    const f = folded(s);
    if (/^(ban la|hay dong vai|dong vai|voi vai tro|you are|act as)/.test(f)) add("role", s);
    else if (has(s, FORMAT_WORDS) && /(trinh bay|dinh dang|dang |bang|gach dau dong|tra ve|xuat)/.test(f)) add("output", s);
    else if (LIMIT_RE.test(f) || /^(khong|dung|chi |luu y|yeu cau)/.test(f)) add("constraints", s);
    else if (has(s, ACTION_VERBS) && /^(hay |vui long |can |giup |)/.test(f) && !blocks.task) add("task", s);
    else add("context", s);
  }
  return blocks;
}
