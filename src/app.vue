<template>
  <div :class="theme" class="min-h-screen">
    <div class="main-container bg-background-light dark:bg-background-dark">
      <header class="flex justify-between items-center py-4">
        <h1 class="text-2xl font-bold text-text-light dark:text-text-dark">Workout Tracker</h1>
        <button
          @click="toggleTheme"
          class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          :class="theme === 'dark' ? 'focus:ring-white' : 'focus:ring-gray-500'"
        >
          <svg
            v-if="theme === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-accent-yellow"
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
            class="h-8 w-8 text-primary-dark"
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

      <div class="my-6">
        <div class="flex bg-card-light dark:bg-card-dark rounded-full p-1">
          <button
            @click="activeTab = 'day1'"
            class="w-1/2 py-3 text-center rounded-full transition-colors duration-300"
            :class="{
              'bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark font-semibold':
                activeTab === 'day1',
              'text-gray-500 dark:text-gray-400': activeTab !== 'day1',
            }"
          >
            Workout A
          </button>
          <button
            @click="activeTab = 'day2'"
            class="w-1/2 py-3 text-center rounded-full transition-colors duration-300"
            :class="{
              'bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark font-semibold':
                activeTab === 'day2',
              'text-gray-500 dark:text-gray-400': activeTab !== 'day2',
            }"
          >
            Workout B
          </button>
        </div>
      </div>

      <main class="space-y-6">
        <WorkoutDay v-show="activeTab === 'day1'" day="day1" />
        <WorkoutDay v-show="activeTab === 'day2'" day="day2" />
      </main>

      <div class="mt-8">
        <WorkoutSummary />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WorkoutDay from './components/WorkoutDay.vue';
import WorkoutSummary from './components/WorkoutSummary.vue';
import { useTheme } from './composables/useTheme';

const activeTab = ref<'day1' | 'day2'>('day1');
const { theme, toggleTheme } = useTheme();
</script>
