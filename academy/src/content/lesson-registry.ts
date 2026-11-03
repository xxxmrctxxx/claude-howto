import type { Lesson } from "@/lib/types/content";
import { lessonAiHoatDong } from "./lessons/ch01-l01-ai-hoat-dong";
import { lessonClaudeKhacChatbot } from "./lessons/ch01-l02-claude-khac-chatbot";
import { lessonCacPhienBan } from "./lessons/ch01-l03-cac-phien-ban-claude";
import { lessonClaudeLamDuocGi } from "./lessons/ch01-l04-claude-lam-duoc-gi";
import { lessonGioiHan } from "./lessons/ch01-l05-gioi-han-cua-ai";
import { lessonLoiThuongGap } from "./lessons/ch01-l06-loi-thuong-gap";
import { lessonPromptLaGi } from "./lessons/ch03-l01-prompt-la-gi";
import { lessonCauTrucPrompt } from "./lessons/ch03-l02-cau-truc-prompt-tot";
import { lessonRctco } from "./lessons/ch03-l03-rctco";
import { lessonFewShot } from "./lessons/ch03-l04-few-shot";
import { lessonChainOfThought } from "./lessons/ch03-l05-chain-of-thought";
import { lessonPromptCoCauTruc } from "./lessons/ch03-l06-prompt-co-cau-truc";
import { lessonGiamHieuNham } from "./lessons/ch03-l07-giam-hieu-nham";
import { lessonToiUuPrompt } from "./lessons/ch03-l08-thuc-hanh-toi-uu";
import { lessonClaudeCodeLaGi } from "./lessons/ch05-l01-claude-code-la-gi";
import { lessonTerminalLaGi } from "./lessons/ch05-l02-terminal-la-gi";
import { lessonCaiDatMoiTruong } from "./lessons/ch05-l03-cai-dat-moi-truong";
import { lessonCaiDatClaudeCode } from "./lessons/ch05-l04-cai-dat-claude-code";
import { lessonDangNhapXacThuc } from "./lessons/ch05-l05-dang-nhap-xac-thuc";
import { lessonMoDuAn } from "./lessons/ch05-l06-mo-du-an";
import { lessonFileVaThuMuc } from "./lessons/ch05-l07-file-va-thu-muc";
import { lessonUngDungDauTien } from "./lessons/ch05-l08-ung-dung-dau-tien";
import { lessonLenhCoBan } from "./lessons/ch05-l09-lenh-co-ban";
import { lessonTokenLaGi } from "./lessons/ch08-l01-token-la-gi";
import { lessonContextWindowCh8 } from "./lessons/ch08-l02-context-window";
import { lessonViSaoTonToken } from "./lessons/ch08-l03-vi-sao-ton-token";
import { lessonChiaCongViec } from "./lessons/ch08-l04-chia-cong-viec";
import { lessonTaiLieuDuAn } from "./lessons/ch08-l05-tai-lieu-du-an";
import { lessonTranhDocFileThua } from "./lessons/ch08-l06-tranh-doc-file-thua";
import { lessonSoSanhPhuongPhap } from "./lessons/ch08-l07-so-sanh-phuong-phap";
import { lessonTheoDoiChiPhi } from "./lessons/ch08-l08-theo-doi-chi-phi";
import { lessonQuanLyContext } from "./lessons/ch06-l01-quan-ly-context";
import { lessonLapKeHoach } from "./lessons/ch06-l02-lap-ke-hoach";
import { lessonNhieuFile } from "./lessons/ch06-l03-nhieu-file";
import { lessonDebug } from "./lessons/ch06-l04-debug";
import { lessonGitGithub } from "./lessons/ch06-l05-git-github";
import { lessonKiemThuTuDong } from "./lessons/ch06-l06-kiem-thu-tu-dong";
import { lessonRefactoring } from "./lessons/ch06-l07-refactoring";
import { lessonCodeReview } from "./lessons/ch06-l08-code-review";
import { lessonPhanChiaTacVu } from "./lessons/ch06-l09-phan-chia-tac-vu";

/**
 * Lesson content only (no question banks), so the lazily loaded search index
 * does not pull every question into the browser. Registered together with the
 * question banks in registry.ts.
 */
export const LESSONS: Record<string, Lesson> = Object.fromEntries(
  [lessonAiHoatDong, lessonClaudeKhacChatbot, lessonCacPhienBan, lessonClaudeLamDuocGi, lessonGioiHan, lessonLoiThuongGap, lessonPromptLaGi, lessonCauTrucPrompt, lessonRctco, lessonFewShot, lessonChainOfThought, lessonPromptCoCauTruc, lessonGiamHieuNham, lessonToiUuPrompt, lessonClaudeCodeLaGi, lessonTerminalLaGi, lessonCaiDatMoiTruong, lessonCaiDatClaudeCode, lessonDangNhapXacThuc, lessonMoDuAn, lessonFileVaThuMuc, lessonUngDungDauTien, lessonLenhCoBan, lessonTokenLaGi, lessonContextWindowCh8, lessonViSaoTonToken, lessonChiaCongViec, lessonTaiLieuDuAn, lessonTranhDocFileThua, lessonSoSanhPhuongPhap, lessonTheoDoiChiPhi, lessonQuanLyContext, lessonLapKeHoach, lessonNhieuFile, lessonDebug, lessonGitGithub, lessonKiemThuTuDong, lessonRefactoring, lessonCodeReview, lessonPhanChiaTacVu].map((l) => [l.id, l]),
);
