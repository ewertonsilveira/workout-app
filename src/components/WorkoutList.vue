<template>
  <div class="space-y-6">
    <ExerciseItem v-for="exercise in workouts" :key="exercise.id" :exercise="exercise" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import ExerciseItem from './ExerciseItem.vue';
import { Exercise } from '../composables/useWorkoutStore';

defineProps<{
  workouts: Exercise[];
}>();
</script>
