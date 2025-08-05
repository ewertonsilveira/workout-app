<template>
  <div class="relative">
    <button @click="toggleDropdown" class="focus:outline-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
    >
      <div v-if="user" class="px-4 py-2">
        <p class="text-sm font-semibold text-gray-900 dark:text-white truncate">
          {{ user.user_metadata.display_name || user.email }}
        </p>
        <p class="text-xs text-gray-600 dark:text-gray-400 truncate">{{ user.email }}</p>
      </div>
      <div class="border-t border-gray-200 dark:border-gray-700"></div>
      <button
        @click="handleLogout"
        class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';

const { user, signOut } = useAuth();
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleLogout = async () => {
  await signOut();
  isOpen.value = false;
};
</script>
