<template>
  <div
    class="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark"
  >
    <div
      class="w-full max-w-lg p-8 space-y-6 bg-card-light dark:bg-card-dark rounded-lg shadow-md text-center"
    >
      <h1 class="text-3xl font-bold text-text-light dark:text-text-dark">Page Not Found</h1>
      <p class="text-text-light dark:text-text-dark">
        Sorry, the page you are looking for does not exist.
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-3 mt-4 text-lg font-semibold text-white bg-primary-dark rounded-lg hover:bg-opacity-90"
      >
        Go Back Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component does not require any specific script logic.
</script>
