import { course } from "@/content/course";
import { LABS } from "@/content/labs/index";
import { LESSONS, lessonHref } from "@/content/registry";
import { foldVietnamese } from "@/lib/utils";

export interface SearchDoc {
  id: string;
  kind: "lesson" | "planned" | "lab" | "term" | "chapter";
  title: string;
  context: string;
  href: string | null;
  body: string;
}

const fold = (s: string) => foldVietnamese(s.toLowerCase()).replace(/[*_`]/g, "");

function lessonText(id: string): string {
  const l = LESSONS[id];
  const parts: string[] = [l.subtitle, ...l.objectives.map((o) => o.text)];
  for (const b of l.blocks) {
    parts.push(b.title);
    if (b.type === "explain") parts.push(...b.paragraphs, ...(b.terms ?? []).map((t) => `${t.term} ${t.definition}`));
    if (b.type === "summary") parts.push(...b.points);
    if (b.type === "steps") parts.push(...b.steps.map((s) => `${s.title} ${s.detail}`));
    if (b.type === "compare") parts.push(b.bad.content, b.good.content, b.takeaway);
  }
  return parts.join(" \n ");
}

let cache: SearchDoc[] | null = null;

export function searchDocs(): SearchDoc[] {
  if (cache) return cache;
  const docs: SearchDoc[] = [];
  for (const ch of course.chapters) {
    docs.push({
      id: ch.id,
      kind: "chapter",
      title: `Chương ${ch.number}: ${ch.title}`,
      context: ch.summary,
      href: `/hoc/#${ch.slug}`,
      body: ch.summary,
    });
    for (const o of ch.outline) {
      const lesson = o.lessonId ? LESSONS[o.lessonId] : undefined;
      if (lesson) {
        docs.push({
          id: lesson.id,
          kind: "lesson",
          title: lesson.title,
          context: `Chương ${ch.number} · ${ch.title}`,
          href: lessonHref(lesson),
          body: lessonText(lesson.id),
        });
        for (const b of lesson.blocks) {
          if (b.type !== "explain") continue;
          for (const t of b.terms ?? []) {
            docs.push({
              id: `${lesson.id}:${t.term}`,
              kind: "term",
              title: t.term,
              context: `Thuật ngữ · ${lesson.title}`,
              href: `${lessonHref(lesson)}#${b.id}`,
              body: t.definition,
            });
          }
        }
      } else {
        docs.push({
          id: `${ch.id}:${o.slug}`,
          kind: "planned",
          title: o.title,
          context: `Chương ${ch.number} · Sắp ra mắt`,
          href: null,
          body: "",
        });
      }
    }
  }
  for (const lab of LABS) {
    docs.push({
      id: lab.id,
      kind: "lab",
      title: `Lab ${lab.number}: ${lab.title}`,
      context: "Phòng thực hành",
      href: lab.href,
      body: `${lab.short} ${lab.description} ${lab.skills.join(" ")}`,
    });
  }
  cache = docs;
  return docs;
}

export interface SearchHit {
  doc: SearchDoc;
  score: number;
  snippet: string;
}

function snippetFor(body: string, terms: string[]): string {
  const folded = fold(body);
  const idx = Math.min(...terms.map((t) => folded.indexOf(t)).filter((i) => i >= 0));
  if (!Number.isFinite(idx)) return body.slice(0, 140);
  const start = Math.max(0, idx - 50);
  return `${start > 0 ? "…" : ""}${body.slice(start, start + 160).replace(/\s+/g, " ").replace(/[*_`]/g, "")}…`;
}

/** Diacritic-insensitive AND search: every term must appear in title, context or body. */
export function search(query: string, limit = 20): SearchHit[] {
  const terms = fold(query).split(/\s+/).filter((t) => t.length > 0);
  if (!terms.length) return [];
  const hits: SearchHit[] = [];
  for (const doc of searchDocs()) {
    const title = fold(doc.title);
    const ctx = fold(doc.context);
    const body = fold(doc.body);
    let score = 0;
    let all = true;
    for (const t of terms) {
      const inTitle = title.includes(t);
      const inCtx = ctx.includes(t);
      const inBody = body.includes(t);
      if (!inTitle && !inCtx && !inBody) {
        all = false;
        break;
      }
      score += (inTitle ? 10 : 0) + (inCtx ? 3 : 0) + (inBody ? 1 : 0);
    }
    if (!all) continue;
    if (doc.kind === "planned") score -= 2;
    hits.push({ doc, score, snippet: doc.body ? snippetFor(doc.body, terms) : doc.context });
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}
