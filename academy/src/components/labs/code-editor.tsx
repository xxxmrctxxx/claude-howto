"use client";

import Editor, { loader } from "@monaco-editor/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Textarea } from "@/components/ui/input";

// Self-hosted Monaco (copied to /public/monaco by scripts/copy-monaco.mjs): no CDN needed.
loader.config({ paths: { vs: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/monaco/vs` } });

function subscribeTheme(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
}

/** Monaco editor with an automatic plain-textarea fallback if Monaco cannot load. */
export function CodeEditor({ value, onChange, label }: { value: string; onChange: (v: string) => void; label: string }) {
  const dark = useSyncExternalStore(subscribeTheme, () => document.documentElement.getAttribute("data-theme") === "dark", () => false);
  const [mounted, setMounted] = useState(false);
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setFallback((f) => f || !mounted), 10000);
    return () => clearTimeout(t);
  }, [mounted]);

  if (fallback && !mounted) {
    return (
      <div>
        <p className="mb-1 text-xs text-warning">Không tải được trình soạn thảo Monaco — đang dùng ô soạn thảo đơn giản.</p>
        <Textarea aria-label={label} value={value} onChange={(e) => onChange(e.target.value)} className="min-h-56 font-mono text-[13px]" spellCheck={false} />
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-xl border border-border" data-testid="code-editor" data-editor-ready={mounted ? "true" : "false"}>
      <Editor
        height="15rem"
        language="javascript"
        theme={dark ? "vs-dark" : "light"}
        value={value}
        onChange={(v) => onChange(v ?? "")}
        onMount={() => setMounted(true)}
        loading={<div className="flex h-60 items-center justify-center text-sm text-muted-foreground">Đang tải trình soạn thảo…</div>}
        options={{ minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false, tabSize: 2, ariaLabel: label, automaticLayout: true, wordWrap: "on" }}
      />
    </div>
  );
}
