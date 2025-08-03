<template>
  <div class="space-y-8">
    <div class="text-center mb-6">
      <p class="text-gray-700 dark:text-gray-300">{{ description }}</p>
    </div>
    <ProgressTracker :day="day" />
    <div class="grid md:grid-cols-3 gap-6">
      <div class="md:col-span-3 lg:col-span-1">
        <div class="exercise-card p-6 h-full">
          <h3 class="text-2xl font-bold mb-4 text-center text-[#8c6f5d] dark:text-[#a89a87]">
            Legs
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(exercise, index) in store.exercises[day].legs"
              :key="index"
              class="exercise-item flex items-center"
            >
              <input
                type="checkbox"
                :id="`${day}-legs-${index}`"
                class="h-5 w-5 rounded border-gray-300 text-[#a89a87] focus:ring-[#8c6f5d] mr-3"
                :checked="exercise.completed"
                @change="store.toggleCompletion(day, 'legs', index)"
              />
              <label :for="`${day}-legs-${index}`" class="flex-grow">
                <span class="font-semibold">{{ exercise.name }}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400 block">{{
                  exercise.details
                }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:col-span-3 lg:col-span-2">
        <div class="exercise-card p-6 h-full">
          <h3 class="text-2xl font-bold mb-4 text-center text-[#8c6f5d] dark:text-[#a89a87]">
            Push
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(exercise, index) in store.exercises[day].push"
              :key="index"
              class="exercise-item flex items-center"
            >
              <input
                type="checkbox"
                :id="`${day}-push-${index}`"
                class="h-5 w-5 rounded border-gray-300 text-[#a89a87] focus:ring-[#8c6f5d] mr-3"
                :checked="exercise.completed"
                @change="store.toggleCompletion(day, 'push', index)"
              />
              <label :for="`${day}-push-${index}`" class="flex-grow">
                <span class="font-semibold">{{ exercise.name }}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400 block">{{
                  exercise.details
                }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:col-span-3">
        <div class="exercise-card p-6 h-full">
          <h3 class="text-2xl font-bold mb-4 text-center text-[#8c6f5d] dark:text-[#a89a87]">
            Pull
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(exercise, index) in store.exercises[day].pull"
              :key="index"
              class="exercise-item flex items-center"
            >
              <input
                type="checkbox"
                :id="`${day}-pull-${index}`"
                class="h-5 w-5 rounded border-gray-300 text-[#a89a87] focus:ring-[#8c6f5d] mr-3"
                :checked="exercise.completed"
                @change="store.toggleCompletion(day, 'pull', index)"
              />
              <label :for="`${day}-pull-${index}`" class="flex-grow">
                <span class="font-semibold">{{ exercise.name }}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400 block">{{
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
        class="bg-[#a89a87] hover:bg-[#8c6f5d] text-white font-bold py-2 px-6 rounded-lg transition-colors"
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
