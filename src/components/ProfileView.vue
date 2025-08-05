<template>
  <div v-if="user" class="p-4 mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md">
    <h2 class="text-xl font-bold text-gray-900 dark:text-white">
      Welcome, {{ user.user_metadata.display_name || user.email }}
    </h2>
    <p class="text-gray-600 dark:text-gray-400">{{ user.email }}</p>
    <button
      @click="handleLogout"
      class="mt-4 px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
    >
      Logout
    </button>
  </div>
</template>

<script setup>
import { useAuth } from '../composables/useAuth';

const { user, signOut } = useAuth();

const handleLogout = async () => {
  await signOut();
};
</script>
