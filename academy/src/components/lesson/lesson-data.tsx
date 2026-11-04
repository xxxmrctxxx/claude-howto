"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { IndexedQuestion, Lesson } from "@/lib/types/content";

interface LessonData {
  bank: IndexedQuestion[];
  concepts: Lesson["concepts"];
}

const LessonDataContext = createContext<LessonData | null>(null);

/**
 * Carries the current lesson's question bank from the server page to the
 * client components that need it (quiz, answers, right panel), so the
 * registry with every lesson's content is never bundled for the browser.
 */
export function LessonDataProvider({ bank, concepts, children }: LessonData & { children: ReactNode }) {
  const value = useMemo(() => ({ bank, concepts }), [bank, concepts]);
  return <LessonDataContext.Provider value={value}>{children}</LessonDataContext.Provider>;
}

export function useLessonData(): LessonData {
  const v = useContext(LessonDataContext);
  if (!v) throw new Error("useLessonData must be used inside <LessonDataProvider>");
  return v;
}
