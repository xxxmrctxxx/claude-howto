import type { Metadata } from "next";
import { LabFrame } from "@/components/labs/lab-frame";
import { ProjectBuilderLab } from "@/components/labs/project-builder-lab";
import { LABS } from "@/content/labs/index";

const lab = LABS.find((l) => l.id === "project-builder")!;
export const metadata: Metadata = { title: `Lab ${lab.number}: ${lab.title}`, description: lab.short };

export default function Page() {
  return (
    <LabFrame lab={lab}>
      <ProjectBuilderLab />
    </LabFrame>
  );
}
