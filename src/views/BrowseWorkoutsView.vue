<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Browse Workouts</h1>
    <button
      @click="openForm()"
      class="mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
    >
      Add New Workout
    </button>
    <WorkoutPlanner @edit-workout="openForm" />

    <div
      v-if="showWorkoutForm"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center"
    >
      <div class="relative mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-white dark:bg-gray-800">
        <WorkoutForm :workout="selectedWorkout" @close="closeForm" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WorkoutPlanner from '../components/WorkoutPlanner.vue';
import WorkoutForm from '../components/WorkoutForm.vue';
import { NewExercise } from '../composables/useWorkoutStore';

const showWorkoutForm = ref(false);
const selectedWorkout = ref<NewExercise | undefined>(undefined);

const openForm = (workout?: NewExercise) => {
  selectedWorkout.value = workout;
  showWorkoutForm.value = true;
};

const closeForm = () => {
  showWorkoutForm.value = false;
  selectedWorkout.value = undefined;
};
</script>