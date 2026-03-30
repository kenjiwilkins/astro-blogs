<script lang="ts">
  let r = $state(143);
  let g = $state(245);
  let b = $state(255);
  let copied = $state(false);

  const hex = $derived(
    '#' +
      [r, g, b]
        .map((c) => c.toString(16).padStart(2, '0'))
        .join('')
  );

  function copyHex() {
    navigator.clipboard.writeText(hex);
    copied = true;
    setTimeout(() => (copied = false), 1500);
  }
</script>

<div class="space-y-4">
  <div
    class="h-16 rounded-2xl border border-outline-variant/20 transition-colors duration-200"
    style="background-color: {hex}"
  ></div>

  <div class="space-y-3">
    <label class="flex items-center gap-3">
      <span class="text-xs font-label text-error w-4">R</span>
      <input
        type="range"
        min="0"
        max="255"
        bind:value={r}
        class="flex-1 accent-error"
      />
      <span class="text-xs font-mono text-on-surface-variant/60 w-8 text-right">{r}</span>
    </label>

    <label class="flex items-center gap-3">
      <span class="text-xs font-label text-primary w-4">G</span>
      <input
        type="range"
        min="0"
        max="255"
        bind:value={g}
        class="flex-1 accent-green-400"
      />
      <span class="text-xs font-mono text-on-surface-variant/60 w-8 text-right">{g}</span>
    </label>

    <label class="flex items-center gap-3">
      <span class="text-xs font-label text-secondary w-4">B</span>
      <input
        type="range"
        min="0"
        max="255"
        bind:value={b}
        class="flex-1 accent-blue-400"
      />
      <span class="text-xs font-mono text-on-surface-variant/60 w-8 text-right">{b}</span>
    </label>
  </div>

  <button
    onclick={copyHex}
    class="w-full py-2 px-4 rounded-xl bg-surface-variant/30 border border-outline-variant/20 text-on-surface font-label text-xs uppercase tracking-widest hover:bg-surface-variant/50 transition-colors cursor-pointer"
  >
    {copied ? '✓ Copied!' : hex}
  </button>
</div>
