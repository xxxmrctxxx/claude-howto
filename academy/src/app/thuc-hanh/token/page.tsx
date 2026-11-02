import type { Metadata } from "next";
import { LabFrame } from "@/components/labs/lab-frame";
import { TokenLab } from "@/components/labs/token-lab";
import { LABS } from "@/content/labs/index";

const lab = LABS.find((l) => l.id === "token")!;
export const metadata: Metadata = { title: `Lab ${lab.number}: ${lab.title}`, description: lab.short };

export default function Page() {
  return (
    <LabFrame lab={lab}>
      <TokenLab />
    </LabFrame>
  );
}
