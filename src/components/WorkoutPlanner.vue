<template>
  <div class="container mx-auto px-4 py-8 md:py-12">
    <header class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Ewerton's Workout Plan</h1>
      <p class="mt-2 text-lg text-gray-600">Your interactive guide to a full-body workout.</p>
    </header>

    <div class="max-w-4xl mx-auto">
      <div class="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4 text-center text-[#8c6f5d]">Configure Your Plan</h2>
        <div class="flex justify-center items-center space-x-4">
          <label for="day-selector" class="font-semibold text-lg">Number of Workout Days:</label>
          <input
            type="number"
            id="day-selector"
            min="1"
            max="7"
            v-model.number="numDays"
            class="w-20 p-2 border border-gray-300 rounded-md text-center"
          />
          <button
            @click="generatePlan"
            class="bg-[#a89a87] hover:bg-[#8c6f5d] text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Generate Plan
          </button>
        </div>
      </div>

      <div class="mb-8 flex justify-center border-b border-gray-300">
        <button
          v-for="(_, index) in workoutPlan"
          :key="index"
          :class="[
            'tab-button text-lg font-semibold py-3 px-6 border-b-2 border-transparent focus:outline-none',
            { active: activeTab === index },
          ]"
          @click="activeTab = index"
        >
          Workout Day {{ index + 1 }}
        </button>
      </div>

      <main>
        <div
          v-for="(day, dayIndex) in workoutPlan"
          :key="dayIndex"
          v-show="activeTab === dayIndex"
          class="tab-content space-y-8"
        >
          <div class="text-center mb-6">
            <p class="text-gray-700">
              Focus on controlled movements and proper form to maximize muscle engagement.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="md:col-span-3 lg:col-span-1">
              <div class="exercise-card p-6 h-full">
                <h3 class="text-2xl font-bold mb-4 text-center text-[#8c6f5d]">Legs</h3>
                <ul class="space-y-3">
                  <li
                    v-for="(exerciseId, exIndex) in day.legs"
                    :key="exIndex"
                    class="exercise-item flex items-center"
                  >
                    <input
                      type="checkbox"
                      :id="`day-${dayIndex}-legs-${exIndex}`"
                      class="h-5 w-5 rounded border-gray-300 text-[#a89a87] focus:ring-[#8c6f5d] mr-3"
                    />
                    <label :for="`day-${dayIndex}-legs-${exIndex}`" class="flex-grow">
                      <span class="font-semibold">{{ getExercise(exerciseId).name }}</span>
                      <span class="text-sm text-gray-500 block">{{
                        getExercise(exerciseId).details
                      }}</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:col-span-3 lg:col-span-2">
              <div class="exercise-card p-6 h-full">
                <h3 class="text-2xl font-bold mb-4 text-center text-[#8c6f5d]">Push</h3>
                <ul class="space-y-3">
                  <li
                    v-for="(exerciseId, exIndex) in day.push"
                    :key="exIndex"
                    class="exercise-item flex items-center"
                  >
                    <input
                      type="checkbox"
                      :id="`day-${dayIndex}-push-${exIndex}`"
                      class="h-5 w-5 rounded border-gray-300 text-[#a89a87] focus:ring-[#8c6f5d] mr-3"
                    />
                    <label :for="`day-${dayIndex}-push-${exIndex}`" class="flex-grow">
                      <span class="font-semibold">{{ getExercise(exerciseId).name }}</span>
                      <span class="text-sm text-gray-500 block">{{
                        getExercise(exerciseId).details
                      }}</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:col-span-3">
              <div class="exercise-card p-6 h-full">
                <h3 class="text-2xl font-bold mb-4 text-center text-[#8c6f5d]">Pull</h3>
                <ul class="space-y-3">
                  <li
                    v-for="(exerciseId, exIndex) in day.pull"
                    :key="exIndex"
                    class="exercise-item flex items-center"
                  >
                    <input
                      type="checkbox"
                      :id="`day-${dayIndex}-pull-${exIndex}`"
                      class="h-5 w-5 rounded border-gray-300 text-[#a89a87] focus:ring-[#8c6f5d] mr-3"
                    />
                    <label :for="`day-${dayIndex}-pull-${exIndex}`" class="flex-grow">
                      <span class="font-semibold">{{ getExercise(exerciseId).name }}</span>
                      <span class="text-sm text-gray-500 block">{{
                        getExercise(exerciseId).details
                      }}</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="text-center mt-8">
            <button
              @click="resetCheckboxes(dayIndex)"
              class="bg-[#a89a87] hover:bg-[#8c6f5d] text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Reset Day {{ dayIndex + 1 }}
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Workout {
  push: number[];
  pull: number[];
  legs: number[];
}

const numDays = ref(2);
const activeTab = ref(0);
const workoutPlan = ref<Workout[]>([]);

const allWorkouts = [
  // Chest primary with secondary triceps and front deltoids
  {
    id: 1,
    primary: 8,
    secondary: [14, 9],
    name: 'Bench Press (15kg)',
    details: '3 sets of 8 reps',
  },
  {
    id: 2,
    primary: 7,
    secondary: [9, 14],
    name: 'Incline Bench Press',
    details: '3 sets of 8 reps',
  },
  {
    id: 3,
    primary: 8,
    secondary: [9, 14, 20],
    name: 'Push-ups & Variations',
    details: '3 sets to failure',
  },
  {
    id: 4,
    primary: 8,
    secondary: [14, 9],
    name: 'Straight Bar Dips',
    details: '3 sets to failure',
  },

  // Shoulders primary with secondary triceps, upper chest, traps
  {
    id: 5,
    primary: 9,
    secondary: [14, 7, 13],
    name: 'Overhead Press',
    details: '3 sets of 8 reps',
  },
  {
    id: 6,
    primary: 10,
    secondary: [9, 11, 13],
    name: 'Lateral Raise (5kg)',
    details: '3 sets of 12 reps',
  },
  { id: 7, primary: 9, secondary: [14, 7], name: 'Pike Push-ups', details: '3 sets of 5 reps' },
  { id: 8, primary: 11, secondary: [12, 13], name: 'Egyptian Raise', details: '3 sets of 10 reps' },
  {
    id: 9,
    primary: 9,
    secondary: [14, 13, 20],
    name: 'Handstand Hold',
    details: '3×30 sec holds',
  },

  // Back primary with secondary biceps, traps, side delts, core
  {
    id: 10,
    primary: 17,
    secondary: [15, 13, 10, 20],
    name: 'Pull-ups (Weighted 15kg)',
    details: '3 sets of 8 reps',
  },
  {
    id: 11,
    primary: 17,
    secondary: [15, 16, 13],
    name: 'Chin-ups (Weighted 15kg)',
    details: '3 sets of 8 reps',
  },
  {
    id: 12,
    primary: 17,
    secondary: [10, 15],
    name: 'Bent-over Barbell Row',
    details: '3 sets of 8 reps',
  },
  {
    id: 13,
    primary: 17,
    secondary: [10, 15],
    name: 'Seated Cable Row',
    details: '3 sets of 10 reps',
  },
  {
    id: 14,
    primary: 17,
    secondary: [15, 13, 18],
    name: 'Lat Pulldown',
    details: '3 sets of 10 reps',
  },
  {
    id: 15,
    primary: 8,
    secondary: [14, 20, 1],
    name: 'Low Bar Transitions / Negative Muscle Ups',
    details: '3 sets to failure',
  },

  // Biceps primary with secondary forearms, back
  {
    id: 16,
    primary: 15,
    secondary: [16, 17],
    name: 'Ring Curl / Pelican Curl',
    details: '3 sets of 10 reps',
  },

  // Legs primary with secondary glutes, hamstrings, lower back
  {
    id: 17,
    primary: 22,
    secondary: [24, 23, 20],
    name: 'Barbell Back Squat',
    details: '3 sets of 8 reps',
  },
  {
    id: 18,
    primary: 23,
    secondary: [24, 19],
    name: 'Romanian Deadlift',
    details: '3 sets of 8 reps',
  },
];

const workoutTemplates: { [key: string]: Workout } = {
  day1: {
    push: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    pull: [10, 11, 12, 13, 14, 15, 16],
    legs: [17, 18],
  },
  day2: {
    push: [5, 6, 7, 3, 4, 8, 9, 1, 2],
    pull: [10, 11, 13, 14, 15, 16],
    legs: [17],
  },
};

const allWorkoutsMap = new Map(allWorkouts.map((w) => [w.id, w]));

const getExercise = (id: number) => {
  return allWorkoutsMap.get(id) || { name: 'Unknown', details: '' };
};

const generatePlan = () => {
  const newPlan = [];
  for (let i = 0; i < numDays.value; i++) {
    const dayKey = `day${(i % 2) + 1}`;
    newPlan.push(workoutTemplates[dayKey]);
  }
  workoutPlan.value = newPlan;
  activeTab.value = 0;
};

const resetCheckboxes = (dayIndex: number) => {
  const dayContainer = document.querySelectorAll('.tab-content')[dayIndex];
  if (dayContainer) {
    const checkboxes = dayContainer.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }
};

onMounted(() => {
  generatePlan();
});
</script>

<style scoped>
.tab-button.active {
  background-color: #a89a87;
  color: #ffffff;
  border-color: #a89a87;
}

.tab-button {
  transition:
    background-color 0.3s,
    color 0.3s;
}

.exercise-card {
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: transform 0.2s;
}

.exercise-card:hover {
  transform: translateY(-5px);
}

.exercise-item input:checked + label {
  text-decoration: line-through;
  color: #9ca3af;
}
</style>
