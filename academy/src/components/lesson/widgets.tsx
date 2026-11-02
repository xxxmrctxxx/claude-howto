"use client";

import type { ComponentType } from "react";
import type { WidgetId } from "@/lib/types/content";
import { BotCompare, CapabilitySorter, ContextWindowSim, FactChecker, ModelPicker, NextWordGame } from "./chapter1-widgets";
import { PromptAssembler } from "./prompt-assembler";

export interface WidgetProps {
  onComplete?: () => void;
}

/** Interactive simulations available to lessons. A test checks every lesson's widget exists. */
export const WIDGETS: Partial<Record<WidgetId, ComponentType<WidgetProps>>> = {
  "prompt-assembler": PromptAssembler,
  "next-word": NextWordGame,
  "bot-compare": BotCompare,
  "model-picker": ModelPicker,
  "capability-sorter": CapabilitySorter,
  "context-window": ContextWindowSim,
  "fact-checker": FactChecker,
};
