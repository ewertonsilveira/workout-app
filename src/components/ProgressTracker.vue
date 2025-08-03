<template>
  <div class="text-center mb-6">
    <p class="text-gray-700">
      Progress: {{ completedCount }} / {{ totalCount }} exercises completed.
    </p>
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
