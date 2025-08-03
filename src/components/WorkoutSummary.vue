<template>
  <div class="workout-summary p-5 rounded-2xl bg-card-light dark:bg-card-dark shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-center text-text-light dark:text-text-dark">
      Session Summary
    </h2>
    <div
      v-if="completedExercises.length === 0"
      class="text-center text-gray-500 dark:text-gray-400 py-4"
    >
      <p>Complete an exercise to see your summary here!</p>
    </div>
    <div v-else class="space-y-4">
      <div v-for="category in categories" :key="category">
        <div v-if="getCompletedExercises(category).length > 0">
          <h3
            class="text-lg font-semibold capitalize text-primary-dark dark:text-primary-light border-b-2 border-border-light dark:border-border-dark pb-1 mb-2"
          >
            {{ category }}
          </h3>
          <ul class="space-y-2 text-text-light dark:text-text-dark">
            <li
              v-for="exercise in getCompletedExercises(category)"
              :key="exercise.name"
              class="text-sm"
            >
              <span class="font-medium">{{ exercise.name }}:</span>
              {{ exercise.sets }} sets x {{ exercise.reps }} reps @ {{ exercise.weight }}kg
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  useWorkoutStore,
  type Exercise,
  type ExerciseCategory,
} from '../composables/useWorkoutStore';

const store = useWorkoutStore();
const categories: ExerciseCategory[] = ['pull', 'push', 'legs'];

const completedExercises = computed<Exercise[]>(() => {
  const allExercises: Exercise[] = [];
  for (const day of Object.values(store.exercises)) {
    for (const category of Object.values(day)) {
      allExercises.push(...category.filter((ex) => ex.completed));
    }
  }
  return allExercises;
});

const getCompletedExercises = (category: ExerciseCategory) => {
  const categoryExercises = new Map<string, Exercise>();
  for (const day of Object.values(store.exercises)) {
    day[category]?.forEach((ex) => {
      if (ex.completed) {
        categoryExercises.set(ex.name, ex);
      }
    });
  }
  return Array.from(categoryExercises.values());
};
</script>
