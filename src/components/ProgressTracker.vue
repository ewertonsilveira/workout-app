<template>
  <div class="text-center mb-6">
    <p class="text-gray-700 dark:text-gray-300">
      Progress: {{ completedCount }} / {{ totalCount }} exercises completed.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  useWorkoutStore,
  Exercise,
  ExerciseCategory,
  WorkoutDay,
} from '../composables/useWorkoutStore';

const props = defineProps<{
  day: WorkoutDay;
}>();

const store = useWorkoutStore();

const completedCount = computed(() => {
  let count = 0;
  for (const category in store.exercises[props.day]) {
    const cat = category as ExerciseCategory;
    count += store.exercises[props.day][cat].filter((ex: Exercise) => ex.completed).length;
  }
  return count;
});

const totalCount = computed(() => {
  let count = 0;
  for (const category in store.exercises[props.day]) {
    const cat = category as ExerciseCategory;
    count += store.exercises[props.day][cat].length;
  }
  return count;
});
</script>
