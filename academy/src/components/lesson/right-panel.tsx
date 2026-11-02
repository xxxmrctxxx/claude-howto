"use client";

import { CheckCircle2, Info, Lightbulb, ListChecks, NotebookPen, Wand2, XCircle } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { bankFor } from "@/content/registry";
import { bankStatus } from "@/lib/engine/question/adaptive";
import { detectBlocks, evaluatePrompt } from "@/lib/engine/prompt/evaluate";
import { saveNote } from "@/lib/progress/actions";
import { updateProgress, useProgress, useProgressReady } from "@/lib/progress/store";
import type { Lesson } from "@/lib/types/content";
import { CopyButton } from "./copy-button";

function QuickChecker() {
  const [text, setText] = useState("");
  const [shown, setShown] = useState(false);
  const result = useMemo(() => (shown ? evaluatePrompt(detectBlocks(text)) : null), [shown, text]);
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">Dán một prompt bất kỳ để kiểm tra nhanh 5 tiêu chí.</p>
      <Textarea
        aria-label="Prompt cần kiểm tra"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setShown(false);
        }}
        placeholder="Ví dụ: Bạn là kế toán. Hãy tóm tắt…"
        className="min-h-32 text-[13px]"
        data-testid="quick-checker-input"
      />
      <Button type="button" size="sm" disabled={text.trim().length < 5} onClick={() => setShown(true)} data-testid="quick-checker-run">
        <Wand2 /> Phân tích
      </Button>
      {result && (
        <div className="flex flex-col gap-2" role="status" data-testid="quick-checker-result">
          <p className="text-sm font-bold">Điểm tổng: {Math.round(result.overall * 100)}%</p>
          {result.criteria.map((c) => (
            <div key={c.id}>
              <div className="flex justify-between text-xs">
                <span>{c.label}</span>
                <span>{Math.round(c.score * 100)}%</span>
              </div>
              <Progress value={c.score * 100} label={c.label} className="h-1.5" />
              {c.suggestion && <p className="mt-0.5 text-xs text-muted-foreground">{c.suggestion}</p>}
            </div>
          ))}
          <p className="flex gap-1 text-[11px] text-muted-foreground">
            <Info className="size-3 shrink-0" aria-hidden="true" /> Phân tích theo quy tắc, tự tách câu thành các khối — có thể nhầm với câu phức tạp. Lab 1 cho
            đánh giá chi tiết hơn.
          </p>
        </div>
      )}
      <Link href="/thuc-hanh/prompt-builder/" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
        Mở Lab 1: Prompt Builder →
      </Link>
    </div>
  );
}

function Hints({ lesson }: { lesson: Lesson }) {
  const askPrompt = `Bạn là gia sư kiên nhẫn. Tôi đang học bài "${lesson.title}" (Claude HowTo Academy).
Mục tiêu bài: ${lesson.objectives.map((o) => o.text).join(" ")}
Hãy giải thích lại phần tôi chưa hiểu dưới đây bằng ví dụ trong công việc văn phòng, tối đa 200 từ, kết thúc bằng 1 câu hỏi để tôi tự kiểm tra.
Phần tôi chưa hiểu: [viết vào đây]`;
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col gap-2">
        {(lesson.hints ?? []).map((h) => (
          <li key={h} className="flex gap-2 rounded-xl bg-muted/60 p-3 text-sm">
            <Lightbulb className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
      <div className="rounded-xl border border-border p-3">
        <p className="text-sm font-semibold">Hỏi Claude về bài này</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Nền tảng <strong>chưa kết nối AI API</strong>, nên gợi ý trên là nội dung soạn sẵn. Sao chép prompt dưới đây để hỏi Claude trực tiếp tại claude.ai.
        </p>
        <pre className="mt-2 max-h-40 overflow-y-auto rounded-lg bg-muted p-2 font-sans text-xs whitespace-pre-wrap">{askPrompt}</pre>
        <div className="mt-2">
          <CopyButton text={askPrompt} label="Sao chép prompt hỏi Claude" />
        </div>
      </div>
    </div>
  );
}

function Notes({ lessonId }: { lessonId: string }) {
  const saved = useProgress().notes[lessonId];
  const [draft, setDraft] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const value = draft ?? saved?.text ?? "";
  const commit = () => {
    if (draft === null) return;
    updateProgress((s) => saveNote(s, lessonId, draft));
    setStatus(`Đã lưu lúc ${new Date().toLocaleTimeString("vi-VN")}`);
  };
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`note-${lessonId}`} className="text-sm text-muted-foreground">
        Ghi chú riêng cho bài này — lưu trong trình duyệt của bạn.
      </label>
      <Textarea
        id={`note-${lessonId}`}
        value={value}
        onChange={(e) => {
          setDraft(e.target.value);
          setStatus("Chưa lưu…");
        }}
        onBlur={commit}
        className="min-h-48"
        placeholder="Điều mình học được, prompt mẫu hay…"
        data-testid="note-input"
      />
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground" aria-live="polite" data-testid="note-status">
          {status}
        </span>
        <Button type="button" size="sm" variant="outline" onClick={commit} data-testid="note-save">
          Lưu ghi chú
        </Button>
      </div>
    </div>
  );
}

function QuizStatus({ lesson }: { lesson: Lesson }) {
  const state = useProgress();
  const bank = bankFor(lesson.id);
  const history = state.attempts.filter((a) => a.lessonId === lesson.id);
  const st = bankStatus(bank, history);
  const mastery = lesson.concepts
    .map((c) => {
      const tries = history.filter((a) => a.conceptId === c.id);
      return { ...c, tries: tries.length, correct: tries.filter((a) => a.correct).length };
    })
    .filter((c) => c.tries > 0);
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex flex-wrap gap-2">
        <Badge variant="neutral">{st.total} câu trong ngân hàng</Badge>
        <Badge variant="info">Chưa làm {st.unseen}</Badge>
      </div>
      <Progress value={((st.total - st.unseen) / Math.max(1, st.total)) * 100} label="Tỷ lệ câu hỏi đã làm" />
      {mastery.length ? (
        <ul className="flex flex-col gap-1.5">
          {mastery.map((m) => (
            <li key={m.id} className="flex items-center gap-2">
              {m.correct === m.tries ? <CheckCircle2 className="size-4 text-success" aria-label="vững" /> : <XCircle className="size-4 text-danger" aria-label="cần ôn" />}
              <span className="flex-1">{m.label}</span>
              <span className="text-xs text-muted-foreground">
                {m.correct}/{m.tries}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground">Chưa có dữ liệu. Làm phần câu hỏi để thấy kỹ năng nào vững, kỹ năng nào cần ôn.</p>
      )}
      <Button asChild size="sm">
        <a href="#kiem-tra">Đến phần câu hỏi</a>
      </Button>
    </div>
  );
}

export function RightPanel({ lesson }: { lesson: Lesson }) {
  const ready = useProgressReady();
  return (
    <div className="rounded-2xl border border-border bg-card p-3" data-testid="right-panel">
      <Tabs defaultValue="practice">
        <TabsList className="grid h-auto w-full grid-cols-4">
          <TabsTrigger value="practice" aria-label="Thực hành">
            <Wand2 />
            <span className="text-[11px] leading-none">Thực hành</span>
          </TabsTrigger>
          <TabsTrigger value="hints" aria-label="Gợi ý">
            <Lightbulb />
            <span className="text-[11px] leading-none">Gợi ý</span>
          </TabsTrigger>
          <TabsTrigger value="notes" aria-label="Ghi chú" data-testid="tab-notes">
            <NotebookPen />
            <span className="text-[11px] leading-none">Ghi chú</span>
          </TabsTrigger>
          <TabsTrigger value="quiz" aria-label="Câu hỏi">
            <ListChecks />
            <span className="text-[11px] leading-none">Câu hỏi</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="practice">
          <QuickChecker />
        </TabsContent>
        <TabsContent value="hints">
          <Hints lesson={lesson} />
        </TabsContent>
        <TabsContent value="notes">{ready ? <Notes lessonId={lesson.id} /> : null}</TabsContent>
        <TabsContent value="quiz">{ready ? <QuizStatus lesson={lesson} /> : null}</TabsContent>
      </Tabs>
    </div>
  );
}
