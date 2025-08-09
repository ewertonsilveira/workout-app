<template>
  <div class="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
    <div class="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Settings</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Default Settings</h2>
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
        <div>
          <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add New Exercise</h2>
          <form @submit.prevent="addExercise" class="space-y-4">
            <div>
              <label for="exerciseName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" id="exerciseName" v-model="newExercise.name" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600">
            </div>
            <div>
              <label for="exerciseDetails" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Details</label>
              <input type="text" id="exerciseDetails" v-model="newExercise.details" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600">
            </div>
            <div>
              <label for="primaryMuscle" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Primary Muscle</label>
              <select id="primaryMuscle" v-model="newExercise.primary" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600">
                <option v-for="group in workoutStore.muscleGroups" :key="group.id" :value="group.id">{{ group.name }}</option>
              </select>
            </div>
            <div>
              <label for="secondaryMuscle" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Secondary Muscles</label>
              <select id="secondaryMuscle" v-model="newExercise.secondary" multiple class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600">
                <option v-for="group in workoutStore.muscleGroups" :key="group.id" :value="group.id">{{ group.name }}</option>
              </select>
            </div>
            <button type="submit" class="w-full py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700">Add Exercise</button>
          </form>
        </div>
      </div>
      <div class="mt-8">
        <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Available Exercises</h2>
        <ul class="space-y-2">
          <li v-for="exercise in workoutStore.allWorkouts" :key="exercise.id" class="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
            <p class="font-semibold text-gray-900 dark:text-white">{{ exercise.name }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ exercise.details }}</p>
          </li>
        </ul>
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

const newExercise = ref({
  name: '',
  details: ``, // Default details
  primary: null,
  secondary: [],
});

const saveSettings = () => {
  workoutStore.setDefaultSettings(defaultSets.value, defaultReps.value, defaultWeight.value);
  alert('Settings saved!');
};

const addExercise = () => {
  if (newExercise.value.name && newExercise.value.primary) {
    workoutStore.addExercise({
      id: Date.now(),
      name: newExercise.value.name,
      details: newExercise.value.details || `${workoutStore.defaultSets} sets of ${workoutStore.defaultReps} reps at ${workoutStore.defaultWeight}kg`,
      primary: newExercise.value.primary,
      secondary: newExercise.value.secondary,
    });
    newExercise.value = {
      name: '',
      details: '',
      primary: null,
      secondary: [],
    };
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>