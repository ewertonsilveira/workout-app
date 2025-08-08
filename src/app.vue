<template>
  <div :class="{ dark: isDarkMode }" class="h-screen font-sans">
    <div class="flex h-full bg-background-light dark:bg-background-dark">
      <SideMenu :is-open="isMenuOpen" @close="isMenuOpen = false" />

      <div class="flex-1 flex flex-col overflow-hidden">
        <header
          class="flex justify-between items-center p-4 shadow-md bg-background-light dark:bg-background-dark"
        >
          <button @click="isMenuOpen = !isMenuOpen" class="text-text-light dark:text-text-dark">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div class="flex items-center">
            <img src="./assets/logo.svg" alt="Logo" class="h-8 w-auto" />
          </div>

          <div class="flex items-center space-x-4">
            <button @click="toggleTheme" class="text-text-light dark:text-text-dark">
              <svg
                v-if="isDarkMode"
                class="w-6 h-6"
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
                class="w-6 h-6"
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
            </button>
            <ProfileDropdown />
          </div>
        </header>

        <main
          class="flex-1 overflow-x-hidden overflow-y-auto p-4 bg-background-light dark:bg-background-dark"
        >
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SideMenu from './components/SideMenu.vue';
import ProfileDropdown from './components/ProfileDropdown.vue';
import { useTheme } from './composables/useTheme';

const isMenuOpen = ref(false);
const { isDarkMode, toggleTheme } = useTheme();
</script>
