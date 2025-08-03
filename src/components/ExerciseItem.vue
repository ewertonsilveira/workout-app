<template>
  <div
    class="exercise-item flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mb-2"
  >
    <span
      :class="{ 'line-through': exercise.completed }"
      class="text-gray-800 dark:text-gray-200"
      >{{ exercise.name }}</span
    >
    <div class="flex items-center">
      <input
        type="number"
        :value="exercise.sets"
        @input="update('sets', $event)"
        class="w-16 text-center mx-1 bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-500 rounded"
      />
      <input
        type="number"
        :value="exercise.reps"
        @input="update('reps', $event)"
        class="w-16 text-center mx-1 bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-500 rounded"
      />
      <input
        type="number"
        :value="exercise.weight"
        @input="update('weight', $event)"
        class="w-16 text-center mx-1 bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-500 rounded"
      />
      <input
        type="checkbox"
        :checked="exercise.completed"
        @change="toggleCompletion"
        class="ml-4 h-5 w-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

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

const update = (field: 'sets' | 'reps' | 'weight', event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update-exercise', { field, value: Number(target.value) });
};
</script>
