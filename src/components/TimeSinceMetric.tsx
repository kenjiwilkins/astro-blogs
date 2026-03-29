import { useEffect, useState } from 'react';

function formatElapsed(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ${hours % 24}h`;
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
}

export default function TimeSinceMetric({ date }: { date: string }) {
  const [elapsed, setElapsed] = useState(() =>
    formatElapsed(Date.now() - new Date(date).getTime()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(formatElapsed(Date.now() - new Date(date).getTime()));
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="glass-card p-8 rounded-3xl border-l-4 border-tertiary">
      <span className="material-symbols-outlined mb-4 text-3xl text-tertiary">
        schedule
      </span>
      <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 mb-2">
        Last Published
      </h3>
      <div className="text-4xl font-headline font-black text-on-surface">
        {elapsed}
      </div>
      <p className="text-xs mt-2 font-label text-tertiary-dim">
        Live &middot; ticking every second
      </p>
    </div>
  );
}
