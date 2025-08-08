<template>
  <div class="space-y-6">
    <AccordionItem v-for="category in categories" :key="category.id" :title="category.name">
      <ExerciseItem
        v-for="exercise in getExercisesForCategory(category.id)"
        :key="exercise.id"
        :exercise="exercise"
      />
    </AccordionItem>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useWorkoutStore } from '../composables/useWorkoutStore';
import ExerciseItem from './ExerciseItem.vue';
import AccordionItem from './AccordionItem.vue';

defineProps<{
  day: 'day1' | 'day2';
}>();

const store = useWorkoutStore();

const categories = computed(() => {
  return store.muscleGroups.filter((mg) => mg.parent === null);
});

const getExercisesForCategory = (categoryId: number) => {
  return store.allWorkouts.filter((ex) => ex.primary === categoryId);
};
</script>
