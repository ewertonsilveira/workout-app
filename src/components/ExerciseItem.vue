<template>
  <div class="p-4 rounded-2xl mb-4 bg-card-light dark:bg-card-dark shadow-md">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          v-if="isTrackingMode"
          type="checkbox"
          :id="`exercise-${exercise.name}`"
          v-model="currentExerciseData.completed"
          @change="store.toggleCompletion(day, category, exerciseIndex)"
          class="form-checkbox h-5 w-5 text-primary-dark rounded focus:ring-primary-dark dark:text-primary-light dark:focus:ring-primary-light"
        />
        <span class="ml-4 text-xl font-semibold text-text-light dark:text-text-dark">{{
          exercise.name
        }}</span>
      </div>
      <div v-if="!isTrackingMode" class="flex space-x-2">
        <button
          @click="emit('edit', exercise as NewExercise)"
          class="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          @click="emit('delete', exercise.id)"
          class="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>

    <div class="mt-4 text-left">
      <p class="text-sm text-gray-600 dark:text-gray-400">{{ exercise.details }}</p>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
        <b>Primary:</b> {{ getMuscleGroupName(exercise.primary_muscle_group) }}
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        <b>Secondary:</b> {{ getSecondaryMuscleGroups(exercise.secondary_muscle_groups) }}
      </p>
    </div>

    <div v-if="isTrackingMode" class="grid grid-cols-3 gap-4 mt-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Sets</label>
        <NumberStepper
          v-model="currentExerciseData.sets"
          @update:modelValue="store.updateExercise(day, category, exerciseIndex, { field: 'sets', value: $event })"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Reps</label>
        <NumberStepper
          v-model="currentExerciseData.reps"
          @update:modelValue="store.updateExercise(day, category, exerciseIndex, { field: 'reps', value: $event })"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Weight (kg)</label>
        <NumberStepper
          v-model="currentExerciseData.weight"
          @update:modelValue="store.updateExercise(day, category, exerciseIndex, { field: 'weight', value: $event })"
          :step="2.5"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits } from 'vue';
import { useWorkoutStore, NewExercise, WorkoutDay, ExerciseCategory, Exercise } from '../composables/useWorkoutStore';
import NumberStepper from './NumberStepper.vue';

const props = defineProps<{
  exercise: NewExercise | Exercise;
  day?: WorkoutDay;
  category?: ExerciseCategory;
  exerciseIndex?: number;
}>();

const emit = defineEmits<{
  (e: 'edit', exercise: NewExercise): void;
  (e: 'delete', id: number): void;
}>();

const store = useWorkoutStore();

const isTrackingMode = computed(() => {
  return 'completed' in props.exercise && 'sets' in props.exercise && 'reps' in props.exercise && 'weight' in props.exercise;
});

const currentExerciseData = computed(() => {
  if (isTrackingMode.value && props.day && props.category && typeof props.exerciseIndex === 'number') {
    return store.exercises[props.day][props.category][props.exerciseIndex];
  }
  return props.exercise; // Fallback to the exercise prop itself if not in tracking mode
});

const getMuscleGroupName = (id: number) => {
  return store.getMuscleGroupNameById(id);
};

const getSecondaryMuscleGroups = (ids: number[]) => {
  if (!Array.isArray(ids)) {
    return '';
  }
  return ids.map((id) => getMuscleGroupName(id)).join(', ');
};
</script>
