<template>
  <div
    class="p-4 rounded-2xl mb-4"
    :class="{
      'bg-card-light dark:bg-card-dark shadow-md': !exercise.completed,
      'bg-gray-200 dark:bg-gray-700': exercise.completed,
    }"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          type="checkbox"
          :checked="exercise.completed"
          @change="toggleCompletion"
          class="h-7 w-7 rounded-full text-primary-dark bg-gray-300 border-gray-400 focus:ring-primary-dark dark:focus:ring-offset-background-dark"
        />
        <span
          class="ml-4 text-xl font-semibold"
          :class="{
            'line-through text-gray-500 dark:text-gray-400': exercise.completed,
            'text-text-light dark:text-text-dark': !exercise.completed,
          }"
          >{{ exercise.name }}</span
        >
      </div>
    </div>

    <div v-if="!exercise.completed" class="mt-4 grid grid-cols-3 gap-x-2 text-center">
      <div>
        <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">Sets</label>
        <NumberStepper
          :model-value="exercise.sets"
          @update:model-value="update('sets', $event)"
          :step="1"
          :min="0"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">Reps</label>
        <NumberStepper
          :model-value="exercise.reps"
          @update:model-value="update('reps', $event)"
          :step="1"
          :min="0"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-500 dark:text-gray-400"
          >Weight (kg)</label
        >
        <NumberStepper
          :model-value="exercise.weight"
          @update:model-value="update('weight', $event)"
          :step="2.5"
          :min="0"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import NumberStepper from './NumberStepper.vue';

defineProps({
  exercise: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['toggle-completion', 'update-exercise']);

const toggleCompletion = () => {
  emit('toggle-completion');
};

const update = (field: 'sets' | 'reps' | 'weight', value: number) => {
  emit('update-exercise', { field, value });
};
</script>
