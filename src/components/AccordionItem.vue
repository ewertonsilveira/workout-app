<template>
  <div class="bg-card-light dark:bg-card-dark rounded-2xl shadow-md overflow-hidden">
    <button
      @click="toggle"
      class="w-full flex justify-between items-center p-5 text-left focus:outline-none"
    >
      <h3 class="text-xl font-bold text-text-light dark:text-text-dark">
        {{ title }}
      </h3>
      <svg
        :class="{ 'transform rotate-180': isOpen }"
        class="w-8 h-8 transition-transform duration-300 text-primary-dark dark:text-primary-light"
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
      <div v-if="isOpen" class="px-5 pb-5">
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

const isOpen = ref(true); // Default to open

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const beforeEnter = (el: Element) => {
  (el as HTMLElement).style.height = '0';
  (el as HTMLElement).style.opacity = '0';
};
const enter = (el: Element) => {
  (el as HTMLElement).style.height = el.scrollHeight + 'px';
  (el as HTMLElement).style.opacity = '1';
};
const beforeLeave = (el: Element) => {
  (el as HTMLElement).style.height = el.scrollHeight + 'px';
  (el as HTMLElement).style.opacity = '1';
};
const leave = (el: Element) => {
  (el as HTMLElement).style.height = '0';
  (el as HTMLElement).style.opacity = '0';
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition:
    height 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  overflow: hidden;
}
</style>
