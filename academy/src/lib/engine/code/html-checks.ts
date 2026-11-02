import type { HtmlCheck } from "@/content/labs/project-steps";

export interface HtmlCheckResult {
  label: string;
  passed: boolean;
  detail: string;
}

/**
 * Structural checks on HTML pasted by the learner. Uses DOMParser (no script
 * execution) for selectors and regex for source text.
 */
export function runHtmlChecks(html: string, checks: HtmlCheck[], parse: (src: string) => Document = (s) => new DOMParser().parseFromString(s, "text/html")): HtmlCheckResult[] {
  const doc = parse(html);
  return checks.map((c) => {
    if (c.kind === "selector") {
      const n = doc.querySelectorAll(c.selector).length;
      return { label: c.label, passed: n >= c.min, detail: `Tìm thấy ${n} (cần ≥ ${c.min})` };
    }
    const ok = new RegExp(c.pattern, "i").test(html);
    return { label: c.label, passed: ok, detail: ok ? "Có trong code" : "Không tìm thấy trong code" };
  });
}
