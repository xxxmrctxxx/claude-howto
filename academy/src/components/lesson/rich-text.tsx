import { Fragment } from "react";

/**
 * Minimal, safe inline formatter for lesson strings: **bold** and `code`.
 * No HTML injection — everything is rendered as React text nodes.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) return <strong key={i}>{p.slice(2, -2)}</strong>;
        if (p.startsWith("`") && p.endsWith("`"))
          return (
            <code key={i} className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]">
              {p.slice(1, -1)}
            </code>
          );
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}
