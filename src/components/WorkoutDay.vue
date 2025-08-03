<template>
  <div class="space-y-8">
    <div class="text-center mb-6">
      <p class="text-gray-700 dark:text-gray-400">{{ description }}</p>
    </div>
    <ProgressTracker :day="day" />
    <div class="grid md:grid-cols-3 gap-6">
      <div class="md:col-span-3 lg:col-span-1">
        <div
          class="bg-white border shadow-sm rounded-xl p-6 h-full dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
          <h3 class="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Legs</h3>
          <ul class="space-y-3">
            <li
              v-for="(exercise, index) in store.exercises[day].legs"
              :key="index"
              class="flex items-center"
            >
              <input
                type="checkbox"
                :id="`${day}-legs-${index}`"
                class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                :checked="exercise.completed"
                @change="store.toggleCompletion(day, 'legs', index)"
              />
              <label
                :for="`${day}-legs-${index}`"
                class="text-sm text-gray-500 ms-3 dark:text-gray-400"
              >
                <span class="font-semibold">{{ exercise.name }}</span>
                <span class="text-sm text-gray-500 block dark:text-gray-500">{{
                  exercise.details
                }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:col-span-3 lg:col-span-2">
        <div
          class="bg-white border shadow-sm rounded-xl p-6 h-full dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
          <h3 class="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Push</h3>
          <ul class="space-y-3">
            <li
              v-for="(exercise, index) in store.exercises[day].push"
              :key="index"
              class="flex items-center"
            >
              <input
                type="checkbox"
                :id="`${day}-push-${index}`"
                class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                :checked="exercise.completed"
                @change="store.toggleCompletion(day, 'push', index)"
              />
              <label
                :for="`${day}-push-${index}`"
                class="text-sm text-gray-500 ms-3 dark:text-gray-400"
              >
                <span class="font-semibold">{{ exercise.name }}</span>
                <span class="text-sm text-gray-500 block dark:text-gray-500">{{
                  exercise.details
                }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:col-span-3">
        <div
          class="bg-white border shadow-sm rounded-xl p-6 h-full dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
          <h3 class="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Pull</h3>
          <ul class="space-y-3">
            <li
              v-for="(exercise, index) in store.exercises[day].pull"
              :key="index"
              class="flex items-center"
            >
              <input
                type="checkbox"
                :id="`${day}-pull-${index}`"
                class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                :checked="exercise.completed"
                @change="store.toggleCompletion(day, 'pull', index)"
              />
              <label
                :for="`${day}-pull-${index}`"
                class="text-sm text-gray-500 ms-3 dark:text-gray-400"
              >
                <span class="font-semibold">{{ exercise.name }}</span>
                <span class="text-sm text-gray-500 block dark:text-gray-500">{{
                  exercise.details
                }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center mt-8">
      <button
        @click="store.resetDay(day)"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Reset Day {{ day.slice(-1) }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWorkoutStore } from '../composables/useWorkoutStore';
import ProgressTracker from './ProgressTracker.vue';

defineProps<{
  day: 'day1' | 'day2';
  description: string;
}>();

const store = useWorkoutStore();
</script>
