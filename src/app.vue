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
        class="absolute top-4 right-4 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      >
        Toggle Theme
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
