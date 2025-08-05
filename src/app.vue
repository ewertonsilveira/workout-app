<template>
  <div :class="theme" class="min-h-screen bg-background-light dark:bg-background-dark">
    <div class="relative">
      <header
        class="fixed top-0 left-0 right-0 z-30 flex justify-between items-center p-4 bg-background-light dark:bg-background-dark shadow-md"
      >
        <button
          @click="menuOpen = !menuOpen"
          class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-text-light dark:text-text-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <img src="./assets/logo.svg" alt="Workout App Logo" class="h-10" />
        <button
          @click="toggleTheme"
          class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          :class="theme === 'dark' ? 'focus:ring-white' : 'focus:ring-gray-500'"
        >
          <svg
            v-if="theme === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-accent-yellow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-primary-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </header>

      <!-- Overlay -->
      <div v-if="menuOpen" @click="menuOpen = false" class="fixed inset-0 bg-black/30 z-40"></div>

      <SideMenu :is-open="menuOpen" @close="menuOpen = false" @logout="handleLogout" />

      <main class="pt-20">
        <div class="p-4 sm:p-6">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTheme } from './composables/useTheme';
import SideMenu from './components/SideMenu.vue';

const { theme, toggleTheme } = useTheme();
const menuOpen = ref(false);
const router = useRouter();

const handleLogout = () => {
  console.log('Logout action triggered');
  // Here you would typically clear any user session/token.
  // For now, we'll just navigate to the login page.
  menuOpen.value = false;
  router.push('/login');
};
</script>
