"use client";

import { useSyncExternalStore } from "react";
import { syncBadges } from "./actions";
import { emptyState, parseState, STORAGE_KEY, type ProgressState } from "./schema";

/**
 * Browser-side progress store: a single in-memory state mirrored to
 * localStorage, exposed to React with useSyncExternalStore. During server
 * rendering / hydration the empty SERVER_STATE is used, so markup always
 * matches; the persisted state is applied right after hydration.
 */

export type RewardEvent = { type: "xp"; amount: number; reason: string } | { type: "badge"; id: string };

const SERVER_STATE = emptyState();
let state: ProgressState = SERVER_STATE;
let loaded = false;
let loadIssue: string | null = null;
const listeners = new Set<() => void>();
const rewardListeners = new Set<(e: RewardEvent) => void>();

function storage(): Storage | null {
  try {
    return typeof window === "undefined" ? null : window.localStorage;
  } catch {
    return null;
  }
}

function load() {
  loaded = true;
  const ls = storage();
  if (!ls) {
    state = emptyState(new Date());
    loadIssue = "Trình duyệt không cho phép lưu trữ cục bộ — tiến độ sẽ mất khi tải lại trang.";
    return;
  }
  const raw = ls.getItem(STORAGE_KEY);
  const parsed = parseState(raw);
  if (parsed) {
    state = parsed;
    return;
  }
  // Corrupt or incompatible data: keep a backup instead of silently discarding it.
  try {
    ls.setItem(`${STORAGE_KEY}:backup:${Date.now()}`, raw ?? "");
  } catch {
    /* quota exceeded: nothing more we can do */
  }
  state = emptyState(new Date());
  loadIssue = "Dữ liệu tiến độ cũ bị hỏng nên đã được sao lưu và tạo mới.";
}

function persist() {
  const ls = storage();
  if (!ls) return;
  try {
    ls.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    loadIssue = "Không thể lưu tiến độ (bộ nhớ trình duyệt đầy hoặc bị chặn).";
  }
}

function emit() {
  for (const l of listeners) l();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      loaded = false;
      emit();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function getProgress(): ProgressState {
  if (!loaded) load();
  return state;
}

export function getLoadIssue(): string | null {
  return loadIssue;
}

/** Apply a pure transition, award badges, persist, notify. */
export function updateProgress(fn: (s: ProgressState) => ProgressState) {
  const before = getProgress();
  const xpBefore = new Set(before.xpEvents.map((e) => e.key));
  const { state: next, earned } = syncBadges(fn(before));
  if (next === before) return;
  state = next;
  persist();
  emit();
  for (const e of next.xpEvents) {
    if (!xpBefore.has(e.key)) rewardListeners.forEach((l) => l({ type: "xp", amount: e.amount, reason: e.reason }));
  }
  for (const id of earned) rewardListeners.forEach((l) => l({ type: "badge", id }));
}

export function replaceProgress(next: ProgressState) {
  state = next;
  loaded = true;
  persist();
  emit();
}

export function onReward(listener: (e: RewardEvent) => void) {
  rewardListeners.add(listener);
  return () => {
    rewardListeners.delete(listener);
  };
}

export function useProgress(): ProgressState {
  return useSyncExternalStore(subscribe, getProgress, () => SERVER_STATE);
}

/** True once the persisted progress is in use (after hydration). */
export function useProgressReady(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
