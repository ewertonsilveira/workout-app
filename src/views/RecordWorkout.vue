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
                  'w-1/3 py-3 text-lg font-semibold rounded-full focus:outline-none transition-colors duration-300',
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
                  'w-1/3 py-3 text-lg font-semibold rounded-full focus:outline-none transition-colors duration-300',
                  activeTab === 'day2'
                    ? 'bg-primary-dark text-white'
                    : 'bg-transparent text-text-light dark:text-text-dark',
                ]"
              >
                Workout Day 2
              </button>
              <button
                @click="activeTab = 'browse'"
                :class="[
                  'w-1/3 py-3 text-lg font-semibold rounded-full focus:outline-none transition-colors duration-300',
                  activeTab === 'browse'
                    ? 'bg-primary-dark text-white'
                    : 'bg-transparent text-text-light dark:text-text-dark',
                ]"
              >
                Browse Workouts
              </button>
            </div>
          </div>

          <main>
            <WorkoutDay
              v-if="activeTab === 'day1'"
              day="day1"
              description="This is your first full-body session of the week. Focus on controlled movements and proper form to maximize muscle engagement across all groups."
            />
            <WorkoutDay
              v-if="activeTab === 'day2'"
              day="day2"
              description="Your second session builds on the first. You'll find slight variations in exercises to challenge your muscles in new ways, ensuring balanced development."
            />
            <div v-if="activeTab === 'browse'">
              <WorkoutPlanner />
            </div>
          </main>
        </div>
        <div class="lg:w-1/3">
          <div class="sticky top-24">
            <WorkoutSummary />
                        <button @click="showAddExerciseForm = !showAddExerciseForm; newExercise.details = `${store.defaultSets} sets of ${store.defaultReps} reps at ${store.defaultWeight}kg`" class="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded">
              Add Exercise
            </button>
            <div v-if="showAddExerciseForm" class="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 class="text-lg font-bold mb-2">Add New Exercise</h3>
              <form @submit.prevent="addExercise">
                <div class="mb-2">
                  <label for="exerciseName">Name</label>
                  <input type="text" id="exerciseName" v-model="newExercise.name" class="w-full p-2 border rounded">
                </div>
                <div class="mb-2">
                  <label for="exerciseDetails">Details</label>
                  <input type="text" id="exerciseDetails" v-model="newExercise.details" class="w-full p-2 border rounded">
                </div>
                <div class="mb-2">
                  <label for="primaryMuscle">Primary Muscle</label>
                  <select id="primaryMuscle" v-model="newExercise.primary" class="w-full p-2 border rounded">
                    <option v-for="group in store.muscleGroups" :key="group.id" :value="group.id">{{ group.name }}</option>
                  </select>
                </div>
                <div class="mb-2">
                  <label for="secondaryMuscle">Secondary Muscles</label>
                  <select id="secondaryMuscle" v-model="newExercise.secondary" multiple class="w-full p-2 border rounded">
                    <option v-for="group in store.muscleGroups" :key="group.id" :value="group.id">{{ group.name }}</option>
                  </select>
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WorkoutDay from '../components/WorkoutDay.vue';
import WorkoutSummary from '../components/WorkoutSummary.vue';
import WorkoutPlanner from '../components/WorkoutPlanner.vue';
import { useWorkoutStore } from '../composables/useWorkoutStore';

const activeTab = ref<'day1' | 'day2' | 'browse'>('day1');
const showAddExerciseForm = ref(false);
const newExercise = ref({
  name: '',
  details: ``, // Default details
  primary: null,
  secondary: [],
});

const store = useWorkoutStore();

const addExercise = () => {
  if (newExercise.value.name && newExercise.value.primary) {
    store.addExercise({
      id: Date.now(),
      name: newExercise.value.name,
      details: newExercise.value.details || `${store.defaultSets} sets of ${store.defaultReps} reps at ${store.defaultWeight}kg`,
      primary: newExercise.value.primary,
      secondary: newExercise.value.secondary,
    });
    newExercise.value = {
      name: '',
      details: ``,
      primary: null,
      secondary: [],
    };
    showAddExerciseForm.value = false;
  }
};
</script>
