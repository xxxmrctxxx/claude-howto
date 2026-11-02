"use client";

import { Flame, Menu, Search, X, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { computeStreak, levelInfo, totalXp } from "@/lib/progress/gamification";
import { useProgress, useProgressReady } from "@/lib/progress/store";
import { cn, todayKey } from "@/lib/utils";
import { SearchDialog, useSearchShortcut } from "./search-dialog";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { href: "/", label: "Trang chủ" },
  { href: "/hoc/", label: "Lộ trình học" },
  { href: "/thuc-hanh/", label: "Phòng thực hành" },
  { href: "/kiem-tra-dau-vao/", label: "Kiểm tra trình độ" },
  { href: "/tien-do/", label: "Tiến độ" },
];

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="var(--primary)" />
      <path
        d="M16 6.5l1.9 5.6 5.6 1.9-5.6 1.9L16 21.5l-1.9-5.6-5.6-1.9 5.6-1.9z"
        fill="var(--primary-foreground)"
      />
      <circle cx="23" cy="23" r="2.2" fill="var(--primary-foreground)" opacity=".8" />
    </svg>
  );
}

function XpChip() {
  const state = useProgress();
  const ready = useProgressReady();
  if (!ready) return <span className="hidden h-8 w-28 animate-pulse rounded-full bg-muted sm:block" aria-hidden="true" />;
  const xp = totalXp(state);
  const lvl = levelInfo(xp);
  const streak = computeStreak(state.activityDays, todayKey());
  return (
    <Link
      href="/tien-do/"
      className="hidden items-center gap-3 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold hover:bg-accent sm:flex"
      data-testid="xp-chip"
    >
      <span className="flex items-center gap-1 text-primary">
        <Zap className="size-3.5" aria-hidden="true" />
        <span data-testid="xp-value">{xp}</span> XP
      </span>
      <span className="text-muted-foreground">Cấp {lvl.level}</span>
      <span className="flex items-center gap-1 text-warning">
        <Flame className="size-3.5" aria-hidden="true" />
        {streak}
        <span className="sr-only"> ngày liên tiếp</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  useSearchShortcut(setSearchOpen);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight" aria-label="Claude HowTo Academy — trang chủ">
          <Logo />
          <span className="hidden sm:inline">
            Claude HowTo <span className="text-primary">Academy</span>
          </span>
        </Link>
        <nav aria-label="Điều hướng chính" className="ml-4 hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground",
                isActive(n.href) && "bg-accent text-foreground",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-2 text-muted-foreground"
            onClick={() => setSearchOpen(true)}
            data-testid="search-button"
          >
            <Search />
            <span className="sr-only md:not-sr-only">Tìm kiếm</span>
            <kbd className="hidden rounded border border-border px-1 font-mono text-[10px] md:inline">Ctrl K</kbd>
          </Button>
          <XpChip />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            data-testid="mobile-menu-button"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" aria-label="Điều hướng di động" className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={cn("block rounded-lg px-3 py-2.5 font-medium hover:bg-accent", isActive(n.href) && "bg-accent")}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
