"use client";

import { Award, Bookmark, Download, FlaskConical, History, Lock, NotebookPen, RotateCcw, TrendingDown, Upload, Zap } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LABS } from "@/content/labs/index";
import { BADGES, computeStreak, levelInfo, totalXp } from "@/lib/progress/gamification";
import { emptyState, parseState } from "@/lib/progress/schema";
import { getLoadIssue, replaceProgress, useProgress, useProgressReady } from "@/lib/progress/store";
import { todayKey } from "@/lib/utils";

const fmtDate = (iso: string) => new Date(iso).toLocaleString("vi-VN", { dateStyle: "short", timeStyle: "short" });

/** Compact per-lesson data computed on the server, so this page does not bundle every lesson. */
export interface LessonOverview {
  id: string;
  title: string;
  href: string;
  sections: number;
  questionCount: number;
  concepts: { id: string; label: string }[];
}

export function ProgressDashboard({ lessons, prompts }: { lessons: LessonOverview[]; prompts: Record<string, string> }) {
  const state = useProgress();
  const ready = useProgressReady();
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<string | null>(null);
  if (!ready) return <div className="h-96 animate-pulse rounded-3xl bg-muted" aria-hidden="true" />;

  const xp = totalXp(state);
  const lvl = levelInfo(xp);
  const streak = computeStreak(state.activityDays, todayKey());
  const published = lessons;
  const byId = Object.fromEntries(lessons.map((l) => [l.id, l]));
  const done = published.filter((l) => state.lessons[l.id]?.status === "completed").length;

  // Weak skills: concepts with accuracy < 70% across first-time and review attempts.
  const byConcept = new Map<string, { lessonId: string; tries: number; correct: number }>();
  for (const a of state.attempts) {
    const k = `${a.lessonId}|${a.conceptId}`;
    const cur = byConcept.get(k) ?? { lessonId: a.lessonId, tries: 0, correct: 0 };
    cur.tries++;
    if (a.correct) cur.correct++;
    byConcept.set(k, cur);
  }
  const weak = [...byConcept.entries()]
    .map(([k, v]) => ({ conceptId: k.split("|")[1], ...v, rate: v.correct / v.tries }))
    .filter((w) => w.rate < 0.7 && byId[w.lessonId])
    .sort((a, b) => a.rate - b.rate);

  const exportData = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `claude-howto-academy-tien-do-${todayKey()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-6" data-testid="progress-dashboard">
      {getLoadIssue() && (
        <p role="alert" className="rounded-xl bg-warning-soft p-3 text-sm text-warning">
          {getLoadIssue()}
        </p>
      )}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Điểm kinh nghiệm", value: `${xp} XP`, icon: Zap },
          { label: `Cấp ${lvl.level}`, value: lvl.title, icon: Award },
          { label: "Chuỗi ngày học", value: `${streak} ngày`, icon: History },
          { label: "Bài hoàn thành", value: `${done}/${published.length}`, icon: Bookmark },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="flex items-center gap-3 p-5">
              <s.icon className="size-8 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="font-extrabold" data-testid={`stat-${s.label}`}>
                  {s.value}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Progress value={lvl.progress} label="Tiến độ lên cấp tiếp theo" />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="size-5 text-danger" aria-hidden="true" /> Kỹ năng còn yếu & gợi ý ôn tập
            </CardTitle>
          </CardHeader>
          <CardContent>
            {weak.length ? (
              <ul className="flex flex-col gap-2 text-sm" data-testid="weak-skills">
                {weak.map((w) => {
                  const lesson = byId[w.lessonId];
                  const label = lesson.concepts.find((c) => c.id === w.conceptId)?.label ?? w.conceptId;
                  return (
                    <li key={`${w.lessonId}-${w.conceptId}`} className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
                      <span className="flex-1">
                        <strong>{label}</strong>
                        <span className="block text-xs text-muted-foreground">
                          {lesson.title} · đúng {w.correct}/{w.tries}
                        </span>
                      </span>
                      <Link href={`${lesson.href}#giai-thich`} className="text-xs font-semibold text-primary hover:underline">
                        Ôn lại bài
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Chưa phát hiện kỹ năng yếu. Làm thêm câu hỏi để hệ thống theo dõi chính xác hơn.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="size-5 text-warning" aria-hidden="true" /> Huy hiệu ({Object.keys(state.badges).length}/{BADGES.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-2">
              {BADGES.map((b) => (
                <li key={b.id} className={`flex items-start gap-2 rounded-xl p-2.5 text-sm ${state.badges[b.id] ? "bg-warning-soft" : "bg-muted/60"}`}>
                  {state.badges[b.id] ? <Award className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden="true" /> : <Lock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />}
                  <span>
                    <strong>{b.title}</strong>
                    <span className="block text-xs text-muted-foreground">{b.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tiến độ từng bài</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {published.map((l) => {
              const lp = state.lessons[l.id];
              const answered = new Set(state.attempts.filter((a) => a.lessonId === l.id).map((a) => a.questionId)).size;
              return (
                <div key={l.id} className="text-sm">
                  <div className="flex justify-between gap-2">
                    <Link href={l.href} className="font-semibold hover:text-primary">
                      {l.title}
                    </Link>
                    <span className="text-xs text-muted-foreground">{lp?.status === "completed" ? "Hoàn thành" : lp ? "Đang học" : "Chưa bắt đầu"}</span>
                  </div>
                  <Progress className="mt-1 h-1.5" value={((lp?.sectionsSeen.length ?? 0) / l.sections) * 100} label={`Phần đã xem của ${l.title}`} />
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Đã xem {lp?.sectionsSeen.length ?? 0}/{l.sections} phần · đã làm {answered}/{l.questionCount} câu hỏi
                  </p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bookmark className="size-5 text-primary" aria-hidden="true" /> Bài đã lưu & ghi chú
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 text-sm">
            {state.bookmarks.length === 0 && Object.keys(state.notes).length === 0 && <p className="text-muted-foreground">Chưa có bài lưu hay ghi chú.</p>}
            <ul className="flex flex-col gap-1" data-testid="bookmarks">
              {state.bookmarks.filter((id) => byId[id]).map((id) => (
                <li key={id}>
                  <Link href={byId[id].href} className="flex items-center gap-2 font-semibold hover:text-primary">
                    <Bookmark className="size-3.5" aria-hidden="true" /> {byId[id].title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2">
              {Object.entries(state.notes).filter(([id]) => byId[id]).map(([id, n]) => (
                <li key={id} className="rounded-xl bg-muted/50 p-3">
                  <p className="flex items-center gap-2 font-semibold">
                    <NotebookPen className="size-3.5" aria-hidden="true" /> {byId[id].title}
                  </p>
                  <p className="mt-1 whitespace-pre-wrap">{n.text}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{fmtDate(n.updatedAt)}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FlaskConical className="size-5 text-primary" aria-hidden="true" /> Lịch sử thực hành
            </CardTitle>
          </CardHeader>
          <CardContent>
            {state.labs.length ? (
              <ul className="flex max-h-72 flex-col gap-1.5 overflow-y-auto text-sm" data-testid="lab-history">
                {[...state.labs].reverse().slice(0, 30).map((l, i) => (
                  <li key={i} className="flex justify-between gap-2 border-b border-border pb-1.5">
                    <span>
                      <strong>{LABS.find((x) => x.id === l.labId)?.title}</strong> — {l.summary}
                    </span>
                    <span className={l.passed ? "text-success" : "text-muted-foreground"}>{l.passed ? "Đạt" : `${Math.round(l.score * 100)}%`}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Chưa có lần thực hành nào.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="size-5 text-primary" aria-hidden="true" /> Câu hỏi đã làm gần đây
            </CardTitle>
          </CardHeader>
          <CardContent>
            {state.attempts.length ? (
              <ul className="flex max-h-72 flex-col gap-1.5 overflow-y-auto text-sm" data-testid="attempt-history">
                {[...state.attempts].reverse().slice(0, 30).map((a, i) => {
                  return (
                    <li key={i} className="flex justify-between gap-2 border-b border-border pb-1.5">
                      <span className="line-clamp-1">{prompts[a.questionId] ?? a.questionId}</span>
                      <span className={a.correct ? "text-success" : "text-danger"}>{a.correct ? "Đúng" : "Sai"}{a.firstTime ? "" : " (ôn)"}</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Chưa làm câu hỏi nào.</p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dữ liệu của bạn</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 text-sm">
          <p className="text-muted-foreground">
            Tiến độ chỉ lưu trong trình duyệt này (localStorage) — không gửi lên máy chủ. Hãy xuất file để sao lưu hoặc chuyển sang máy khác.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={exportData} data-testid="export-progress">
              <Download /> Xuất tiến độ (JSON)
            </Button>
            <Button variant="outline" onClick={() => fileRef.current?.click()}>
              <Upload /> Nhập từ file
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json"
              className="hidden"
              aria-label="Chọn file tiến độ"
              onChange={async (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                const parsed = parseState(await f.text());
                if (parsed) {
                  replaceProgress(parsed);
                  setMsg("Đã nhập tiến độ thành công.");
                } else setMsg("File không hợp lệ — không có gì bị thay đổi.");
                e.target.value = "";
              }}
            />
            <Button
              variant="ghost"
              onClick={() => {
                if (window.confirm("Xoá toàn bộ tiến độ? Thao tác này không thể hoàn tác (trừ khi bạn đã xuất file).")) {
                  replaceProgress(emptyState(new Date()));
                  setMsg("Đã xoá tiến độ.");
                }
              }}
              data-testid="reset-progress"
            >
              <RotateCcw /> Xoá tiến độ
            </Button>
          </div>
          {msg && (
            <p role="status" className="text-sm font-semibold">
              {msg}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
