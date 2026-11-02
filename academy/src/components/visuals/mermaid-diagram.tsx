"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";

function subscribeTheme(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
}

/**
 * Renders a Mermaid diagram on the client (Mermaid needs the DOM). The source
 * text stays visible as a fallback and for screen readers via `alt`.
 */
export function MermaidDiagram({ code, alt }: { code: string; alt: string }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const theme = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.getAttribute("data-theme") ?? "light",
    () => "light",
  );
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        const dark = theme === "dark";
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          fontFamily: "var(--font-be-vietnam), sans-serif",
          themeVariables: dark
            ? { primaryColor: "#3a2a22", primaryTextColor: "#f2ede6", primaryBorderColor: "#e8845c", lineColor: "#a89f95", fontSize: "15px" }
            : { primaryColor: "#f6e4da", primaryTextColor: "#2a2622", primaryBorderColor: "#a04a29", lineColor: "#6b635a", fontSize: "15px" },
        });
        const { svg } = await mermaid.render(`m${id}${dark ? "d" : "l"}`, code);
        if (!cancelled) {
          setSvg(svg);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [code, id, theme]);

  if (error) {
    return (
      <div role="alert" className="rounded-xl bg-danger-soft p-4 text-sm text-danger">
        Không vẽ được sơ đồ. Nội dung: <span className="sr-only">{alt}</span>
        <pre className="mt-2 overflow-x-auto font-mono text-xs whitespace-pre-wrap">{code}</pre>
      </div>
    );
  }
  return (
    <figure role="img" aria-label={alt} className="mermaid-diagram flex min-h-40 justify-center" data-testid="mermaid">
      {svg ? (
        <div className="w-full [&>svg]:mx-auto" dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="h-40 w-full animate-pulse rounded-xl bg-muted" aria-hidden="true" />
      )}
    </figure>
  );
}
