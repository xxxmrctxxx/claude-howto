/**
 * Runs learner JavaScript against unit tests inside a dedicated Web Worker
 * (no DOM access, separate thread) with a hard timeout, so an infinite loop
 * cannot freeze the page. The worker source is a plain string so the exact
 * same harness can be unit-tested in Node.
 */

export interface TestCase {
  name: string;
  call: string;
  expected: unknown;
}

export interface TestResult {
  name: string;
  passed: boolean;
  actual?: string;
  expected: string;
  error?: string;
}

export const WORKER_SOURCE = `
function deepEqual(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== typeof b || a === null || b === null || typeof a !== "object") return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  var ka = Object.keys(a), kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  for (var i = 0; i < ka.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(b, ka[i]) || !deepEqual(a[ka[i]], b[ka[i]])) return false;
  }
  return true;
}
function show(v) {
  if (v === undefined) return "undefined";
  if (typeof v === "number" && isNaN(v)) return "NaN";
  try { return JSON.stringify(v, function (k, x) { return typeof x === "number" && isNaN(x) ? "NaN" : x; }); } catch (e) { return String(v); }
}
function runAll(code, tests) {
  return tests.map(function (t) {
    try {
      var actual = new Function(code + "\\n;return (" + t.call + ");")();
      return { name: t.name, passed: deepEqual(actual, t.expected), actual: show(actual), expected: show(t.expected) };
    } catch (e) {
      return { name: t.name, passed: false, expected: show(t.expected), error: (e && e.name ? e.name + ": " : "") + (e && e.message ? e.message : String(e)) };
    }
  });
}
self.onmessage = function (e) { self.postMessage(runAll(e.data.code, e.data.tests)); };
`;

export const TIMEOUT_MS = 3000;

export function runInWorker(code: string, tests: TestCase[], timeoutMs = TIMEOUT_MS): Promise<TestResult[]> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(new Blob([WORKER_SOURCE], { type: "text/javascript" }));
    const worker = new Worker(url);
    const finish = (r: TestResult[]) => {
      clearTimeout(timer);
      worker.terminate();
      URL.revokeObjectURL(url);
      resolve(r);
    };
    const timer = setTimeout(
      () =>
        finish(
          tests.map((t) => ({
            name: t.name,
            passed: false,
            expected: JSON.stringify(t.expected),
            error: `Hết thời gian ${timeoutMs / 1000}s — có thể code bị vòng lặp vô hạn.`,
          })),
        ),
      timeoutMs,
    );
    worker.onmessage = (e: MessageEvent<TestResult[]>) => finish(e.data);
    worker.onerror = (e) => {
      e.preventDefault();
      finish(tests.map((t) => ({ name: t.name, passed: false, expected: JSON.stringify(t.expected), error: e.message || "Lỗi cú pháp" })));
    };
    worker.postMessage({ code, tests });
  });
}
