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

const activeTab = ref<'day1' | 'day2' | 'browse'>('day1');
</script>
