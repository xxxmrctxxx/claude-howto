import type { ComponentType } from "react";
import type { VisualId } from "@/lib/types/content";
import { AiErrorTypes, AiLimits, AiPrediction, CapabilityMap, ChatbotVsClaude, ModelTiers } from "./chapter1";
import { PromptAnatomy } from "./prompt-anatomy";

/** Infographics available to lessons. A test checks every lesson's visual exists here. */
export const VISUALS: Partial<Record<VisualId, ComponentType>> = {
  "prompt-anatomy": PromptAnatomy,
  "ai-prediction": AiPrediction,
  "chatbot-vs-claude": ChatbotVsClaude,
  "model-tiers": ModelTiers,
  "capability-map": CapabilityMap,
  "ai-limits": AiLimits,
  "ai-error-types": AiErrorTypes,
};
