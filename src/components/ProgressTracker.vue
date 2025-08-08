<template>
  <div class="text-center mb-6">
    <p class="text-gray-700 dark:text-gray-300">
      Progress: {{ completedCount }} / {{ totalCount }} exercises completed.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useWorkoutStore, WorkoutDay } from '../composables/useWorkoutStore';

const props = defineProps<{
  day: WorkoutDay;
}>();

const store = useWorkoutStore();

const completedCount = computed(() => {
  let count = 0;
  const dayData = store.exercises[props.day];
  if (!dayData) return 0;

  for (const category of dayData.categories) {
    const exercises = dayData.exercises[category];
    if (exercises) {
      count += exercises.filter((ex) => ex.completed).length;
    }
  }
  return count;
});

const totalCount = computed(() => {
  let count = 0;
  const dayData = store.exercises[props.day];
  if (!dayData) return 0;

  for (const category of dayData.categories) {
    const exercises = dayData.exercises[category];
    if (exercises) {
      count += exercises.length;
    }
  }
  return count;
});
</script>
