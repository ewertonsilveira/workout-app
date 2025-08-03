<template>
  <div class="flex items-center justify-center space-x-4">
    <button
      @click="decrement"
      class="w-12 h-12 text-2xl font-bold rounded-full bg-primary-light text-text-light dark:bg-primary-dark dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-yellow"
    >
      -
    </button>
    <span class="text-2xl font-semibold w-16 text-center">{{ modelValue }}</span>
    <button
      @click="increment"
      class="w-12 h-12 text-2xl font-bold rounded-full bg-primary-light text-text-light dark:bg-primary-dark dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-yellow"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  step: {
    type: Number,
    default: 1,
  },
  min: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(['update:modelValue']);

const increment = () => {
  emit('update:modelValue', props.modelValue + props.step);
};

const decrement = () => {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - props.step);
  }
};
</script>
