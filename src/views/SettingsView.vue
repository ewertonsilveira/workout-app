<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Settings</h1>
      <div class="space-y-4">
        <div>
          <label for="defaultSets" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Default Sets</label>
          <input type="number" id="defaultSets" v-model.number="defaultSets" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600">
        </div>
        <div>
          <label for="defaultReps" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Default Reps</label>
          <input type="number" id="defaultReps" v-model.number="defaultReps" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600">
        </div>
        <div>
          <label for="defaultWeight" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Default Weight (kg)</label>
          <input type="number" id="defaultWeight" v-model.number="defaultWeight" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600">
        </div>
        <button @click="saveSettings" class="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Save Settings
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useWorkoutStore } from '@/composables/useWorkoutStore';

const workoutStore = useWorkoutStore();

const defaultSets = ref(workoutStore.defaultSets);
const defaultReps = ref(workoutStore.defaultReps);
const defaultWeight = ref(workoutStore.defaultWeight);

const saveSettings = () => {
  workoutStore.setDefaultSettings(defaultSets.value, defaultReps.value, defaultWeight.value);
  alert('Settings saved!');
};
</script>
