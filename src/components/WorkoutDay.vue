<template>
  <div class="space-y-6">
    <ProgressTracker :day="day" />

    <AccordionItem title="Pull Exercises">
      <ExerciseItem
        v-for="(exercise, index) in store.exercises[day].pull"
        :key="`pull-${index}`"
        :exercise="exercise"
        @toggle-completion="store.toggleCompletion(day, 'pull', index)"
        @update-exercise="store.updateExercise(day, 'pull', index, $event)"
      />
    </AccordionItem>

    <AccordionItem title="Push Exercises">
      <ExerciseItem
        v-for="(exercise, index) in store.exercises[day].push"
        :key="`push-${index}`"
        :exercise="exercise"
        @toggle-completion="store.toggleCompletion(day, 'push', index)"
        @update-exercise="store.updateExercise(day, 'push', index, $event)"
      />
    </AccordionItem>

    <AccordionItem title="Leg Exercises">
      <ExerciseItem
        v-for="(exercise, index) in store.exercises[day].legs"
        :key="`legs-${index}`"
        :exercise="exercise"
        @toggle-completion="store.toggleCompletion(day, 'legs', index)"
        @update-exercise="store.updateExercise(day, 'legs', index, $event)"
      />
    </AccordionItem>

    <div class="text-center pt-4">
      <button
        @click="store.resetDay(day)"
        class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
      >
        Reset Progress
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
}>();

const store = useWorkoutStore();
</script>
