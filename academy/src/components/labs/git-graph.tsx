import type { Repo } from "@/lib/engine/terminal/shell";

const LANE_COLORS = ["var(--c-task)", "var(--c-context)", "var(--c-output)", "var(--c-role)"];

/** SVG commit graph: one lane per branch, commits left → right, branch labels at tips. */
export function GitGraph({ repo }: { repo?: Repo }) {
  if (!repo) {
    return <p className="text-sm text-muted-foreground">Chưa có kho Git. Chạy <code className="font-mono">git init</code> để bắt đầu.</p>;
  }
  const commits = Object.values(repo.commits);
  if (!commits.length) {
    return (
      <p className="text-sm text-muted-foreground">
        Kho Git trống trên nhánh <strong>{repo.head}</strong>. Hãy <code className="font-mono">git add</code> rồi <code className="font-mono">git commit</code>.
      </p>
    );
  }
  const order = commits.map((c) => c.id);
  const lane = new Map<string, number>();
  const branchNames = ["main", ...Object.keys(repo.branches).filter((b) => b !== "main")];
  branchNames.forEach((b, i) => {
    let id = repo.branches[b];
    while (id && !lane.has(id)) {
      lane.set(id, i);
      id = repo.commits[id].parent;
    }
  });
  const usedLanes = Math.max(...[...lane.values()]) + 1;
  const W = Math.max(260, order.length * 90 + 60);
  const H = usedLanes * 56 + 40;
  const pos = (id: string) => ({ x: 40 + order.indexOf(id) * 90, y: 34 + (lane.get(id) ?? 0) * 56 });

  return (
    <div className="overflow-x-auto" data-testid="git-graph" tabIndex={0}>
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} role="img" aria-label={`Sơ đồ ${commits.length} commit trên ${usedLanes} nhánh`}>
        {commits.map((c) =>
          c.parent ? (
            <path
              key={`e-${c.id}`}
              d={`M${pos(c.parent).x},${pos(c.parent).y} C${pos(c.parent).x + 45},${pos(c.parent).y} ${pos(c.id).x - 45},${pos(c.id).y} ${pos(c.id).x},${pos(c.id).y}`}
              stroke={LANE_COLORS[(lane.get(c.id) ?? 0) % 4]}
              strokeWidth="3"
              fill="none"
            />
          ) : null,
        )}
        {commits.map((c) => {
          const p = pos(c.id);
          const tips = Object.entries(repo.branches).filter(([, id]) => id === c.id).map(([b]) => b);
          return (
            <g key={c.id}>
              <circle cx={p.x} cy={p.y} r="11" fill="var(--card)" stroke={LANE_COLORS[(lane.get(c.id) ?? 0) % 4]} strokeWidth="4" />
              <text x={p.x} y={p.y + 27} textAnchor="middle" fontSize="10" fill="var(--muted-foreground)" fontFamily="var(--font-jetbrains), monospace">
                {c.id}
              </text>
              <title>{c.message}</title>
              {tips.map((b, i) => (
                <g key={b}>
                  <rect x={p.x - 4} y={p.y - 30 - i * 18} rx="5" width={b.length * 7 + (b === repo.head ? 46 : 12)} height="16" fill={b === repo.head ? "var(--primary)" : "var(--muted)"} />
                  <text x={p.x + 2} y={p.y - 18 - i * 18} fontSize="10" fontWeight="700" fill={b === repo.head ? "var(--primary-foreground)" : "var(--foreground)"}>
                    {b === repo.head ? `HEAD → ${b}` : b}
                  </text>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
      <ul className="mt-2 flex flex-col gap-0.5 text-xs text-muted-foreground">
        {[...commits].reverse().map((c) => (
          <li key={c.id}>
            <code className="font-mono">{c.id}</code> {c.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
