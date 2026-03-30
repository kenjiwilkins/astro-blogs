<script setup lang="ts">
import { ref, computed } from 'vue';

const text = ref('');
const maxLength = 140;
const count = computed(() => text.value.length);
const percentage = computed(() => Math.min((count.value / maxLength) * 100, 100));
const barColor = computed(() => {
  if (percentage.value < 60) return 'bg-primary';
  if (percentage.value < 85) return 'bg-secondary';
  return 'bg-error';
});
</script>

<template>
  <div class="space-y-4">
    <textarea
      v-model="text"
      :maxlength="maxLength"
      placeholder="Type something here..."
      class="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-2xl p-4 text-on-surface font-body text-sm resize-none focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30 transition-colors placeholder:text-on-surface-variant/40"
      rows="3"
    />
    <div class="space-y-2">
      <div class="h-2 bg-surface-variant/40 rounded-full overflow-hidden">
        <div
          :class="barColor"
          class="h-full rounded-full transition-all duration-300"
          :style="{ width: percentage + '%' }"
        />
      </div>
      <div class="flex justify-between text-xs font-label">
        <span class="text-on-surface-variant/60">
          {{ count }} / {{ maxLength }}
        </span>
        <span v-if="count >= maxLength" class="text-error font-bold">
          Limit reached!
        </span>
        <span v-else-if="count > 0" class="text-on-surface-variant/40">
          {{ maxLength - count }} remaining
        </span>
      </div>
    </div>
  </div>
</template>
