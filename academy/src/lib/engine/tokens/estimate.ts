/**
 * Token ESTIMATES — not Claude's real tokenizer.
 *
 * Anthropic's models overview states that on the current tokenizer 1M tokens
 * is roughly 2.5M Unicode characters (~2.5 characters per token) for typical
 * text. Accented Vietnamese characters are usually split into more tokens, so
 * non-ASCII characters are weighted heavier. Use the numbers to COMPARE
 * workflows, never as a bill. For exact counts use the token counting API.
 */
export const CHARS_PER_TOKEN_ASCII = 2.5;
export const CHARS_PER_TOKEN_NON_ASCII = 1.5;

export function estimateTokens(text: string): number {
  if (!text) return 0;
  let ascii = 0;
  let other = 0;
  for (const ch of text) {
    if (ch.charCodeAt(0) < 128) ascii++;
    else other++;
  }
  return Math.max(1, Math.ceil(ascii / CHARS_PER_TOKEN_ASCII + other / CHARS_PER_TOKEN_NON_ASCII));
}

/**
 * Illustrative split used to SHOW the idea of tokens: words and punctuation,
 * with long words cut into 3-4 character pieces. Real tokenizers learn their
 * pieces from data, so boundaries here are only a visual approximation.
 */
export function illustrativeTokens(text: string): string[] {
  const out: string[] = [];
  const parts = text.match(/\s*[\p{L}\p{N}]+|\s*[^\s\p{L}\p{N}]|\s+/gu) ?? [];
  for (const part of parts) {
    const lead = part.match(/^\s*/)?.[0] ?? "";
    const word = part.slice(lead.length);
    if (word.length <= 4) {
      out.push(part);
      continue;
    }
    const size = /^[\x00-\x7F]+$/.test(word) ? 4 : 3;
    for (let i = 0; i < word.length; i += size) out.push((i === 0 ? lead : "") + word.slice(i, i + size));
  }
  return out;
}

export interface WorkflowTurn {
  label: string;
  /** Characters newly sent in this turn (prompt + pasted files). */
  sentChars: number;
  /** Characters Claude answered with in this turn. */
  replyChars: number;
}

/**
 * In a chat, every turn re-sends the whole conversation so far as input.
 * Returns per-turn input tokens (including history) and the total.
 */
export function conversationCost(turns: WorkflowTurn[], charsPerToken = CHARS_PER_TOKEN_ASCII) {
  let history = 0;
  const perTurn = turns.map((t) => {
    const input = Math.ceil((history + t.sentChars) / charsPerToken);
    const output = Math.ceil(t.replyChars / charsPerToken);
    history += t.sentChars + t.replyChars;
    return { label: t.label, input, output };
  });
  const totalInput = perTurn.reduce((s, t) => s + t.input, 0);
  const totalOutput = perTurn.reduce((s, t) => s + t.output, 0);
  return { perTurn, totalInput, totalOutput, total: totalInput + totalOutput };
}
