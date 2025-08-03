<template>
  <div class="workout-summary p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
    <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Workout Summary</h2>
    <div v-if="completedExercises.length === 0" class="text-gray-600 dark:text-gray-400">
      No exercises completed yet.
    </div>
    <div v-else>
      <div v-for="category in categories" :key="category">
        <div v-if="getCompletedExercises(category).length > 0">
          <h3 class="text-xl font-semibold mt-4 capitalize text-gray-800 dark:text-gray-200">
            {{ category }}
          </h3>
          <ul class="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li v-for="exercise in getCompletedExercises(category)" :key="exercise.name">
              {{ exercise.name }} - {{ exercise.sets }} sets, {{ exercise.reps }} reps @
              {{ exercise.weight }}kg
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useWorkoutStore } from '../composables/useWorkoutStore';

const store = useWorkoutStore();
const categories = ['push', 'pull', 'legs'];

const completedExercises = computed(() => {
  const allExercises = [];
  for (const day of Object.values(store.exercises)) {
    for (const category of Object.values(day)) {
      allExercises.push(...category.filter((ex) => ex.completed));
    }
  }
  return allExercises;
});

const getCompletedExercises = (category: string) => {
  return completedExercises.value.filter((exercise) => {
    for (const day of Object.values(store.exercises)) {
      if (day[category]?.some((ex) => ex.name === exercise.name && ex.completed)) {
        return true;
      }
    }
    return false;
  });
};
</script>
