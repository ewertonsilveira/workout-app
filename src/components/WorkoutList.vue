<template>
  <div class="space-y-6">
    <ExerciseItem
      v-for="exercise in store.allWorkouts.value"
      :key="exercise.id"
      :exercise="exercise"
      @edit="emit('edit', $event)"
      @delete="handleDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import ExerciseItem from './ExerciseItem.vue';
import { useWorkoutStore, NewExercise } from '../composables/useWorkoutStore';

const store = useWorkoutStore();

const emit = defineEmits<{
  (e: 'edit', exercise: NewExercise): void;
}>();

const handleEdit = (exercise: NewExercise) => {
  console.log('Edit workout:', exercise);
  emit('edit', exercise);
};

const handleDelete = async (id: number) => {
  if (confirm('Are you sure you want to delete this workout?')) {
    await store.deleteWorkout(id);
  }
};
</script>
