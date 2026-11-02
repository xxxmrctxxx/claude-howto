"use client";

import { FlaskConical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { promptLabel, runCommand, type OutputLine, type ShellState } from "@/lib/engine/terminal/shell";
import { cn } from "@/lib/utils";

interface Entry {
  prompt?: string;
  command?: string;
  lines: OutputLine[];
}

/**
 * Browser terminal bound to the shell SIMULATOR. Clearly labelled as a
 * simulation; nothing runs on the learner's machine.
 */
export function TerminalEmulator({
  state,
  onChange,
  height = "h-72",
  intro,
  disabled,
}: {
  state: ShellState;
  onChange: (s: ShellState, command: string) => void;
  height?: string;
  intro?: string;
  disabled?: boolean;
}) {
  const [entries, setEntries] = useState<Entry[]>(() => [
    { lines: [{ kind: "hint", text: intro ?? "Gõ `help` để xem các lệnh. Dùng phím ↑ ↓ để gọi lại lệnh cũ." }] },
  ]);
  const [input, setInput] = useState("");
  const [cursor, setCursor] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [entries]);

  const submit = () => {
    const command = input;
    const result = runCommand(state, command);
    setEntries((e) => (result.clear ? [] : [...e, { prompt: promptLabel(state), command, lines: result.lines }]));
    setInput("");
    setCursor(null);
    if (command.trim()) onChange(result.state, command.trim());
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-terminal-bg text-terminal-fg shadow-sm" data-testid="terminal">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="size-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="size-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="size-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-2 flex items-center gap-1.5 rounded-full bg-[#febc2e]/20 px-2 py-0.5 text-[11px] font-bold tracking-wide text-[#febc2e]">
          <FlaskConical className="size-3" aria-hidden="true" /> MÔ PHỎNG — không phải terminal thật
        </span>
      </div>
      <div
        ref={scrollRef}
        className={cn("overflow-y-auto p-3 font-mono text-[13px] leading-relaxed", height)}
        onClick={() => inputRef.current?.focus()}
        role="log"
        aria-live="polite"
        aria-label="Kết quả terminal mô phỏng"
      >
        {entries.map((e, i) => (
          <div key={i}>
            {e.command !== undefined && (
              <div>
                <span className="text-[#7ee787]">{e.prompt}</span> <span>{e.command}</span>
              </div>
            )}
            {e.lines.map((l, j) => (
              <div
                key={j}
                className={cn(
                  "whitespace-pre-wrap",
                  l.kind === "err" && "text-[#ff7b72]",
                  l.kind === "hint" && "text-[#79c0ff] italic",
                )}
              >
                {l.text || " "}
              </div>
            ))}
          </div>
        ))}
        <form
          className="flex items-center gap-2"
          onSubmit={(ev) => {
            ev.preventDefault();
            submit();
          }}
        >
          <label htmlFor="terminal-input" className="shrink-0 text-[#7ee787]">
            {promptLabel(state)}
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={input}
            disabled={disabled}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              const hist = state.history;
              if (e.key === "ArrowUp" && hist.length) {
                e.preventDefault();
                const next = cursor === null ? hist.length - 1 : Math.max(0, cursor - 1);
                setCursor(next);
                setInput(hist[next]);
              } else if (e.key === "ArrowDown" && cursor !== null) {
                e.preventDefault();
                const next = cursor + 1;
                if (next >= hist.length) {
                  setCursor(null);
                  setInput("");
                } else {
                  setCursor(next);
                  setInput(hist[next]);
                }
              }
            }}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="w-full bg-transparent text-terminal-fg caret-[#7ee787] outline-none"
            aria-label="Nhập lệnh"
            data-testid="terminal-input"
          />
        </form>
      </div>
    </div>
  );
}
