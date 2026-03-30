/** @jsxImportSource solid-js */
import { createSignal, onCleanup } from 'solid-js';

export default function Stopwatch() {
  const [elapsed, setElapsed] = createSignal(0);
  const [running, setRunning] = createSignal(false);
  let interval: ReturnType<typeof setInterval> | undefined;

  function start() {
    if (running()) return;
    setRunning(true);
    interval = setInterval(() => setElapsed((e) => e + 10), 10);
  }

  function stop() {
    setRunning(false);
    clearInterval(interval);
  }

  function reset() {
    stop();
    setElapsed(0);
  }

  onCleanup(() => clearInterval(interval));

  const format = () => {
    const ms = elapsed();
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centis = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centis).padStart(2, '0')}`;
  };

  return (
    <div class="space-y-4">
      <div class="text-center">
        <span class="text-4xl font-mono font-bold text-on-surface tabular-nums">
          {format()}
        </span>
      </div>
      <div class="flex gap-3 justify-center">
        <button
          onClick={() => (running() ? stop() : start())}
          class={`px-6 py-2 rounded-xl font-label text-xs uppercase tracking-widest cursor-pointer transition-colors border ${
            running()
              ? 'bg-error/20 border-error/40 text-error hover:bg-error/30'
              : 'bg-primary/20 border-primary/40 text-primary hover:bg-primary/30'
          }`}
        >
          {running() ? 'Stop' : 'Start'}
        </button>
        <button
          onClick={reset}
          class="px-6 py-2 rounded-xl bg-surface-variant/30 border border-outline-variant/20 text-on-surface-variant font-label text-xs uppercase tracking-widest hover:bg-surface-variant/50 transition-colors cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
