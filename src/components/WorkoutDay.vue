<template>
  <div class="space-y-8">
    <div class="text-center mb-6">
      <p class="text-gray-700 dark:text-gray-300">{{ description }}</p>
    </div>
    <ProgressTracker :day="day" />
    <div>
      <AccordionItem title="Pull">
        <ul class="space-y-3">
          <li v-for="(exercise, index) in store.exercises[day].pull" :key="index">
            <ExerciseItem
              :exercise="exercise"
              @toggle-completion="store.toggleCompletion(day, 'pull', index)"
              @update-exercise="store.updateExercise(day, 'pull', index, $event)"
            />
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Push">
        <ul class="space-y-3">
          <li v-for="(exercise, index) in store.exercises[day].push" :key="index">
            <ExerciseItem
              :exercise="exercise"
              @toggle-completion="store.toggleCompletion(day, 'push', index)"
              @update-exercise="store.updateExercise(day, 'push', index, $event)"
            />
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Legs">
        <ul class="space-y-3">
          <li v-for="(exercise, index) in store.exercises[day].legs" :key="index">
            <ExerciseItem
              :exercise="exercise"
              @toggle-completion="store.toggleCompletion(day, 'legs', index)"
              @update-exercise="store.updateExercise(day, 'legs', index, $event)"
            />
          </li>
        </ul>
      </AccordionItem>
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
import ExerciseItem from './ExerciseItem.vue';
import AccordionItem from './AccordionItem.vue';

defineProps<{
  day: 'day1' | 'day2';
  description: string;
}>();

const store = useWorkoutStore();
</script>
