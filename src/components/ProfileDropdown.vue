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
      class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
    >
      <div v-if="user" class="px-4 py-2">
        <p class="text-sm font-semibold text-gray-900 dark:text-white truncate">
          {{ user.user_metadata.display_name || user.email }}
        </p>
        <p class="text-xs text-gray-600 dark:text-gray-400 truncate">{{ user.email }}</p>
      </div>
      <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>
      <router-link
        to="/settings"
        class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="isOpen = false"
      >
        Settings
      </router-link>
      <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>
      <button
        @click="toggleTheme"
        class="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div class="flex items-center">
          <svg
            v-if="!isDarkMode"
            class="w-5 h-5 mr-2 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
          <svg
            v-else
            class="w-5 h-5 mr-2 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
          <span>Theme</span>
        </div>
        <span class="text-xs text-gray-500 dark:text-gray-400">{{ isDarkMode ? 'Dark' : 'Light' }}</span>
      </button>
      <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>
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
import { ref, computed } from 'vue';
import { useAuth } from '../composables/useAuth';
import { useTheme } from '../composables/useTheme';

const { user, signOut } = useAuth();
const { theme, toggleTheme } = useTheme();
const isDarkMode = computed(() => theme.value === 'dark');
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleLogout = async () => {
  await signOut();
  isOpen.value = false;
};
</script>