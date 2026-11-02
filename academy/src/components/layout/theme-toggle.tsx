"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    () => (document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light"),
    () => "light",
  );
  const next: Theme = theme === "dark" ? "light" : "dark";
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={next === "dark" ? "Chuyển sang giao diện tối" : "Chuyển sang giao diện sáng"}
      title={next === "dark" ? "Giao diện tối" : "Giao diện sáng"}
      data-testid="theme-toggle"
      onClick={() => {
        document.documentElement.setAttribute("data-theme", next);
        try {
          localStorage.setItem("cha:theme", next);
        } catch {
          /* storage blocked: theme still applies for this page view */
        }
      }}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
