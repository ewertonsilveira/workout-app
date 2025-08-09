<template>
  <div>
    <header class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Home Workout Plan
      </h1>
      <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">
        Your interactive guide to a full-body workout.
      </p>
    </header>

    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="lg:w-2/3">
          <div class="mb-8 flex justify-center">
            <div class="flex w-full max-w-lg p-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              <button
                @click="activeTab = 'day1'"
                :class="[
                  'w-1/2 py-3 text-lg font-semibold rounded-full focus:outline-none transition-colors duration-300',
                  activeTab === 'day1'
                    ? 'bg-primary-dark text-white'
                    : 'bg-transparent text-text-light dark:text-text-dark',
                ]"
              >
                Workout Day 1
              </button>
              <button
                @click="activeTab = 'day2'"
                :class="[
                  'w-1/2 py-3 text-lg font-semibold rounded-full focus:outline-none transition-colors duration-300',
                  activeTab === 'day2'
                    ? 'bg-primary-dark text-white'
                    : 'bg-transparent text-text-light dark:text-text-dark',
                ]"
              >
                Workout Day 2
              </button>
            </div>
          </div>

          <main>
            <div v-for="(exercises, category) in categorizedExercises" :key="category" class="mb-6">
              <AccordionItem :title="category.charAt(0).toUpperCase() + category.slice(1) + ' Exercises'">
                <div class="space-y-4">
                  <ExerciseItem
                    v-for="(exercise, index) in exercises"
                    :key="exercise.name"
                    :exercise="exercise"
                    :day="activeTab"
                    :category="category"
                    :exercise-index="index"
                  />
                </div>
              </AccordionItem>
            </div>
          </main>
        </div>
        <div class="lg:w-1/3">
          <div class="sticky top-24">
            <WorkoutSummary :day="activeTab" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import WorkoutSummary from '../components/WorkoutSummary.vue';
import AccordionItem from '../components/AccordionItem.vue';
import ExerciseItem from '../components/ExerciseItem.vue';
import { useWorkoutStore, WorkoutDay, ExerciseCategory } from '../composables/useWorkoutStore';

const activeTab = ref<WorkoutDay>('day1');

const store = useWorkoutStore();

const categorizedExercises = computed(() => {
  if (activeTab.value === 'day1' || activeTab.value === 'day2') {
    return store.getExercisesByCategory(activeTab.value);
  }
  return {};
});
</script>
