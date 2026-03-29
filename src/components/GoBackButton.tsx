import { useState } from 'react';

export default function GoBackButton() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-8 py-4 cursor-pointer rounded-full border border-outline-variant/30 text-on-surface font-label text-sm uppercase tracking-widest backdrop-blur-xl bg-surface-container/20 hover:bg-surface-container-high/40 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 4v7a4 4 0 0 1-4 4H4" />
        <path d="m9 10-5 5 5 5" />
      </svg>
      {clicked ? 'Going back...' : 'Previous Page'}
    </button>
  );
}
