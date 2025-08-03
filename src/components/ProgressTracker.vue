<template>
  <div class="text-center mb-6">
    <p class="text-gray-700 dark:text-gray-400">
      Progress: {{ completedCount }} / {{ totalCount }} exercises completed.
    </p>
    <div
      class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
      role="progressbar"
      :aria-valuenow="completedCount"
      aria-valuemin="0"
      :aria-valuemax="totalCount"
    >
      <div
        class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
        :style="{ width: `${(completedCount / totalCount) * 100}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useWorkoutStore } from '../composables/useWorkoutStore';

const props = defineProps<{
  day: 'day1' | 'day2';
}>();

const store = useWorkoutStore();

const completedCount = computed(() => {
  let count = 0;
  for (const category in store.exercises[props.day]) {
    count += store.exercises[props.day][category].filter((ex) => ex.completed).length;
  }
  return count;
});

const totalCount = computed(() => {
  let count = 0;
  for (const category in store.exercises[props.day]) {
    count += store.exercises[props.day][category].length;
  }
  return count;
});
</script>
