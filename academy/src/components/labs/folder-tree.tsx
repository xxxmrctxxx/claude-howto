import { File, Folder, FolderOpen } from "lucide-react";
import { getNode, type FsNode, type ShellState } from "@/lib/engine/terminal/shell";
import { cn } from "@/lib/utils";

function Node({ name, node, path, cwd, depth }: { name: string; node: FsNode; path: string; cwd: string; depth: number }) {
  const here = path === cwd;
  if (node.type === "file") {
    return (
      <li className="flex items-center gap-1.5" style={{ paddingLeft: depth * 14 }}>
        <File className="size-3.5 text-muted-foreground" aria-hidden="true" /> {name}
      </li>
    );
  }
  const children = Object.entries(node.children).sort(([a, x], [b, y]) => (x.type === y.type ? a.localeCompare(b) : x.type === "dir" ? -1 : 1));
  return (
    <>
      <li className={cn("flex items-center gap-1.5", here && "font-bold text-primary")} style={{ paddingLeft: depth * 14 }}>
        {here ? <FolderOpen className="size-3.5" aria-hidden="true" /> : <Folder className="size-3.5 text-warning" aria-hidden="true" />}
        {name}/{here && <span className="rounded bg-primary-soft px-1 text-[10px]">bạn đang ở đây</span>}
      </li>
      {children.map(([n, c]) => (
        <Node key={n} name={n} node={c} path={`${path}/${n}`} cwd={cwd} depth={depth + 1} />
      ))}
    </>
  );
}

/** Live view of the simulated file system under the home folder. */
export function FolderTree({ state }: { state: ShellState }) {
  const home = getNode(state.fs, state.home);
  if (!home) return null;
  return (
    <ul className="font-mono text-xs leading-6" aria-label="Cây thư mục mô phỏng" data-testid="folder-tree">
      <Node name="~" node={home} path={state.home} cwd={state.cwd} depth={0} />
    </ul>
  );
}
