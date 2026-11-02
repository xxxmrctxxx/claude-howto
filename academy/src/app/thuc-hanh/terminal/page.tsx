import type { Metadata } from "next";
import { LabFrame } from "@/components/labs/lab-frame";
import { TerminalLab } from "@/components/labs/terminal-lab";
import { LABS } from "@/content/labs/index";

const lab = LABS.find((l) => l.id === "terminal")!;
export const metadata: Metadata = { title: `Lab ${lab.number}: ${lab.title}`, description: lab.short };

export default function Page() {
  return (
    <LabFrame lab={lab}>
      <TerminalLab />
    </LabFrame>
  );
}
