<template>
  <div class="container mx-auto px-4 py-8 md:py-12" :class="theme">
    <header class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Ewerton's Workout Plan
      </h1>
      <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">
        Your interactive guide to a full-body workout.
      </p>
      <button
        @click="toggleTheme"
        class="absolute top-4 right-4 p-2 rounded-full text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <svg
          v-if="theme === 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </header>

    <div class="max-w-6xl mx-auto">
      <div class="mb-8 flex justify-center border-b border-gray-300 dark:border-gray-700">
        <button
          @click="activeTab = 'day1'"
          :class="[
            'tab-button text-lg font-semibold py-3 px-6 border-b-2 border-transparent focus:outline-none',
            { active: activeTab === 'day1' },
          ]"
        >
          Workout Day 1
        </button>
        <button
          @click="activeTab = 'day2'"
          :class="[
            'tab-button text-lg font-semibold py-3 px-6 border-b-2 border-transparent focus:outline-none',
            { active: activeTab === 'day2' },
          ]"
        >
          Workout Day 2
        </button>
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
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WorkoutDay from './components/WorkoutDay.vue';
import { useTheme } from './composables/useTheme';

const activeTab = ref<'day1' | 'day2'>('day1');
const { theme, toggleTheme } = useTheme();
</script>
