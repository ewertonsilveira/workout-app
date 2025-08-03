<template>
  <div class="accordion-item border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
    <button
      @click="toggle"
      class="w-full flex justify-between items-center p-4 text-left text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
    >
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <svg
        :class="{ 'transform rotate-180': isOpen }"
        class="w-6 h-6 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="isOpen" class="p-4 bg-white dark:bg-gray-900">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string;
}>();

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const beforeEnter = (el: Element) => {
  (el as HTMLElement).style.height = '0';
};
const enter = (el: Element) => {
  (el as HTMLElement).style.height = el.scrollHeight + 'px';
};
const beforeLeave = (el: Element) => {
  (el as HTMLElement).style.height = el.scrollHeight + 'px';
};
const leave = (el: Element) => {
  (el as HTMLElement).style.height = '0';
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}
</style>
