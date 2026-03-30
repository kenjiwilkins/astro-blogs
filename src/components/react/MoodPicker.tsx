import { useState } from 'react';

const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😎', label: 'Cool' },
  { emoji: '🤔', label: 'Thinking' },
  { emoji: '🔥', label: 'Fire' },
  { emoji: '😴', label: 'Sleepy' },
];

export default function MoodPicker() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex gap-3 flex-wrap">
        {moods.map((mood, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`text-3xl p-3 rounded-2xl cursor-pointer transition-all duration-200 border ${
              selected === i
                ? 'scale-125 bg-primary/20 border-primary shadow-[0_0_16px_rgba(143,245,255,0.3)]'
                : 'bg-surface-variant/30 border-outline-variant/20 hover:bg-surface-variant/50 hover:scale-110'
            }`}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      {selected !== null && (
        <p className="text-on-surface font-label text-sm animate-pulse">
          Mood set to <span className="text-primary font-bold">{moods[selected].label}</span>{' '}
          {moods[selected].emoji}
        </p>
      )}
    </div>
  );
}
