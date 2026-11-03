import { foldVietnamese } from "@/lib/utils";

/**
 * Text normalisation shared by the duplicate checks and the rubric evaluator.
 * Lower-case, fold diacritics, drop punctuation, collapse whitespace.
 */
export function normalizeText(input: string): string {
  return foldVietnamese(input.toLowerCase())
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Filler words that do not change what a question asks. Removing them makes
 * "Prompt là gì?" and "Prompt là cái gì vậy?" normalise to the same stem.
 * Kept deliberately short: removing meaningful words would merge distinct questions.
 */
const STOPWORDS = new Set(
  [
    "la", "gi", "cai", "vay", "nhi", "a", "cua", "cac", "nhung", "mot", "thi", "ma",
    "nay", "do", "hay", "nao", "sau", "day", "ban", "em", "cho", "biet", "the",
    "an", "is", "of", "to", "and", "or", "which", "what", "duoi", "trong", "voi", "ve",
  ].map((w) => normalizeText(w)),
);

export function contentWords(input: string): string[] {
  return normalizeText(input)
    .split(" ")
    .filter((w) => w.length > 0 && !STOPWORDS.has(w));
}

/** Canonical form of a question stem used by duplicate layer 2. */
export function canonicalStem(input: string): string {
  return contentWords(input).join(" ");
}

/** cyrb53: small, fast, deterministic 53-bit string hash (isomorphic, no crypto API). */
export function hash53(input: string, seed = 0): string {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < input.length; i++) {
    const ch = input.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).padStart(14, "0");
}

function trigrams(text: string): Map<string, number> {
  const padded = ` ${text} `;
  const grams = new Map<string, number>();
  for (let i = 0; i < padded.length - 2; i++) {
    const g = padded.slice(i, i + 3);
    grams.set(g, (grams.get(g) ?? 0) + 1);
  }
  return grams;
}

/** Pre-computed features of one text, so a bank-wide pairwise check does not redo them per pair. */
export interface SimilarityProfile {
  words: Set<string>;
  grams: Map<string, number>;
  norm: number;
}

export function similarityProfile(text: string): SimilarityProfile | null {
  const c = canonicalStem(text);
  if (!c) return null;
  const grams = trigrams(c);
  let sq = 0;
  for (const v of grams.values()) sq += v * v;
  return { words: new Set(c.split(" ")), grams, norm: Math.sqrt(sq) };
}

/**
 * Similarity of two profiles (see lexicalSimilarity). When `floor` is given and
 * the word overlap alone already proves the score is below it, the cheaper
 * upper bound is returned instead of the exact value — still below `floor`.
 */
export function profileSimilarity(a: SimilarityProfile | null, b: SimilarityProfile | null, floor = 0): number {
  if (!a || !b) return 0;
  const [small, large] = a.words.size <= b.words.size ? [a.words, b.words] : [b.words, a.words];
  let inter = 0;
  for (const w of small) if (large.has(w)) inter++;
  const dice = (2 * inter) / (a.words.size + b.words.size);
  // Trigram cosine is at most 1, so the mean is at most (1 + dice) / 2.
  const bound = (1 + dice) / 2;
  if (bound < floor) return bound;
  const [ga, gb] = a.grams.size <= b.grams.size ? [a.grams, b.grams] : [b.grams, a.grams];
  let dot = 0;
  for (const [k, v] of ga) {
    const w = gb.get(k);
    if (w) dot += v * w;
  }
  const tri = a.norm === 0 || b.norm === 0 ? 0 : dot / (a.norm * b.norm);
  return (tri + dice) / 2;
}

/**
 * Lexical similarity in [0, 1]: the mean of character-trigram cosine and
 * content-word Dice overlap. It is a heuristic for "probably the same question
 * reworded" — NOT true semantic understanding. Two paraphrases with entirely
 * different vocabulary can score low, which is why the bank also enforces a
 * unique concept + objective + thinking-skill key (layer 4).
 */
export function lexicalSimilarity(a: string, b: string): number {
  return profileSimilarity(similarityProfile(a), similarityProfile(b));
}

/** Seeded PRNG (mulberry32) so question selection is reproducible in tests. */
export function createRng(seed: number): () => number {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedFromString(input: string): number {
  return parseInt(hash53(input).slice(-8), 16);
}

export function shuffle<T>(items: readonly T[], rng: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
