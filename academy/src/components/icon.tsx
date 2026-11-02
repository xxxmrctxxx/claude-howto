import {
  Blocks,
  Boxes,
  Coins,
  GraduationCap,
  LayoutTemplate,
  MessageSquareText,
  Plug,
  Rocket,
  Sparkles,
  Terminal,
  Globe,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/lib/types/content";

const ICONS: Record<IconName, LucideIcon> = {
  sparkles: Sparkles,
  rocket: Rocket,
  message: MessageSquareText,
  layout: LayoutTemplate,
  terminal: Terminal,
  wrench: Wrench,
  plug: Plug,
  coins: Coins,
  globe: Globe,
  boxes: Boxes,
  workflow: Workflow,
  graduation: GraduationCap,
};

export function ChapterIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = ICONS[name] ?? Blocks;
  return <Icon className={className} aria-hidden="true" />;
}
