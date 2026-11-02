"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyButton({ text, label = "Sao chép", className }: { text: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setFailed(false);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          setFailed(true);
        }
      }}
    >
      {copied ? <Check /> : <Copy />}
      {copied ? "Đã chép" : failed ? "Không chép được — hãy bôi đen để chép" : label}
    </Button>
  );
}

export function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-terminal-bg text-terminal-fg">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5">
        <span className="font-mono text-xs opacity-70">{lang ?? "text"}</span>
        <CopyButton text={code} className="border-white/20 bg-transparent text-terminal-fg hover:bg-white/10" />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed whitespace-pre-wrap" tabIndex={0}>{code}</pre>
    </div>
  );
}
