"use client";

import { Award, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { BADGES } from "@/lib/progress/gamification";
import { onReward, type RewardEvent } from "@/lib/progress/store";

interface Toast {
  id: number;
  event: RewardEvent;
}

/** Announces XP and badges (aria-live) with a short, unobtrusive animation. */
export function RewardToaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  useEffect(() => {
    // Signals that client-side React is interactive (used by E2E tests).
    document.documentElement.dataset.hydrated = "true";
  }, []);
  useEffect(() => {
    let n = 0;
    return onReward((event) => {
      const id = ++n;
      setToasts((t) => [...t.slice(-3), { id, event }]);
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3500);
    });
  }, []);

  return (
    <div aria-live="polite" className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {toasts.map(({ id, event }) => {
          const badge = event.type === "badge" ? BADGES.find((b) => b.id === event.id) : undefined;
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8 }}
              className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm shadow-lg"
              role="status"
            >
              {event.type === "xp" ? (
                <>
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Zap className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <strong className="text-primary">+{event.amount} XP</strong> · {event.reason}
                  </span>
                </>
              ) : (
                <>
                  <span className="flex size-8 items-center justify-center rounded-full bg-warning-soft text-warning">
                    <Award className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    Huy hiệu mới: <strong>{badge?.title}</strong>
                  </span>
                </>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
