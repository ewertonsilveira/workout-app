<template>
  <div class="p-4 rounded-2xl mb-4 bg-card-light dark:bg-card-dark shadow-md">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <span class="ml-4 text-xl font-semibold text-text-light dark:text-text-dark">{{
          exercise.name
        }}</span>
      </div>
    </div>

    <div class="mt-4 text-left">
      <p class="text-sm text-gray-600 dark:text-gray-400">{{ exercise.details }}</p>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
        <b>Primary:</b> {{ getMuscleGroupName(exercise.primary) }}
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        <b>Secondary:</b> {{ getSecondaryMuscleGroups(exercise.secondary) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWorkoutStore } from '../composables/useWorkoutStore';

const store = useWorkoutStore();

const getMuscleGroupName = (id: number) => {
  return store.getMuscleGroupNameById(id);
};

const getSecondaryMuscleGroups = (ids: number[]) => {
  return ids.map((id) => getMuscleGroupName(id)).join(', ');
};
</script>
