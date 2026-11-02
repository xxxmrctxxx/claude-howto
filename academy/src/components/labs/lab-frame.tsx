import { Info } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LabMeta } from "@/content/labs/index";

export function LabFrame({ lab, children }: { lab: LabMeta; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link href="/thuc-hanh/" className="hover:text-foreground">
          Phòng thực hành
        </Link>{" "}
        / Lab {lab.number}
      </nav>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
        Lab {lab.number}: {lab.title}
      </h1>
      <p className="mt-2 max-w-3xl text-lg text-muted-foreground">{lab.description}</p>
      <p className="mt-3 flex max-w-3xl items-start gap-2 rounded-xl border border-info/30 bg-info-soft p-3 text-sm text-info" data-testid="lab-honesty">
        <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        {lab.honesty}
      </p>
      <div className="mt-6">{children}</div>
    </div>
  );
}
