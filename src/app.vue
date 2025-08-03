<template>
  <div class="container mx-auto px-4 py-8 md:py-12">
    <header class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
        Ewerton's Workout Plan
      </h1>
      <p class="mt-2 text-lg text-gray-600 dark:text-gray-400">
        Your interactive guide to a full-body workout.
      </p>
    </header>

    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <nav
          class="flex justify-center border-b border-gray-200 dark:border-gray-700"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-6 inline-flex items-center gap-x-2 border-b-2 border-transparent text-lg whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
            id="tabs-with-underline-item-1"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
            role="tab"
            @click="activeTab = 'day1'"
          >
            Workout Day 1
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-6 inline-flex items-center gap-x-2 border-b-2 border-transparent text-lg whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-2"
            data-hs-tab="#tabs-with-underline-2"
            aria-controls="tabs-with-underline-2"
            role="tab"
            @click="activeTab = 'day2'"
          >
            Workout Day 2
          </button>
        </nav>
      </div>

      <main>
        <div
          id="tabs-with-underline-1"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-1"
        >
          <WorkoutDay
            v-if="activeTab === 'day1'"
            day="day1"
            description="This is your first full-body session of the week. Focus on controlled movements and proper form to maximize muscle engagement across all groups."
          />
        </div>
        <div
          id="tabs-with-underline-2"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-2"
          class="hidden"
        >
          <WorkoutDay
            v-if="activeTab === 'day2'"
            day="day2"
            description="Your second session builds on the first. You'll find slight variations in exercises to challenge your muscles in new ways, ensuring balanced development."
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WorkoutDay from './components/WorkoutDay.vue';

const activeTab = ref<'day1' | 'day2'>('day1');
</script>
