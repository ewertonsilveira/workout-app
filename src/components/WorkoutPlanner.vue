<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-center text-[#8c6f5d] dark:text-[#a89a87]">
        Filter Workouts
      </h2>
      <div class="flex justify-center items-center space-x-4">
        <div class="w-1/2">
          <label for="main-muscle-group" class="font-semibold text-lg text-gray-900 dark:text-white"
            >Main Muscle Group:</label
          >
          <select
            id="main-muscle-group"
            v-model="selectedMainGroup"
            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option :value="null">All</option>
            <option v-for="group in mainMuscleGroups" :key="group.id" :value="group.id">
              {{ group.name }}
            </option>
          </select>
        </div>
        <div class="w-1/2">
          <label for="sub-muscle-group" class="font-semibold text-lg text-gray-900 dark:text-white"
            >Sub Muscle Group:</label
          >
          <select
            id="sub-muscle-group"
            v-model="selectedSubGroup"
            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option :value="null">All</option>
            <option v-for="group in subMuscleGroups" :key="group.id" :value="group.id">
              {{ group.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <main>
      <WorkoutList :workouts="filteredWorkouts" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useWorkoutStore } from '../composables/useWorkoutStore';
import WorkoutList from './WorkoutList.vue';

const store = useWorkoutStore();
const selectedMainGroup = ref<number | null>(null);
const selectedSubGroup = ref<number | null>(null);

const mainMuscleGroups = computed(() => store.muscleGroups.filter((g) => g.parent === null));

const subMuscleGroups = computed(() => {
  if (selectedMainGroup.value === null) {
    return [];
  }
  return store.muscleGroups.filter((g) => g.parent === selectedMainGroup.value);
});

const filteredWorkouts = computed(() => {
  let workouts = store.allWorkouts;

  if (selectedSubGroup.value !== null) {
    return workouts.filter(
      (w) => w.primary === selectedSubGroup.value || w.secondary.includes(selectedSubGroup.value)
    );
  }

  if (selectedMainGroup.value !== null) {
    const subGroupIds = subMuscleGroups.value.map((g) => g.id);
    return workouts.filter(
      (w) => subGroupIds.includes(w.primary) || w.secondary.some((sg) => subGroupIds.includes(sg))
    );
  }

  return workouts;
});
</script>
