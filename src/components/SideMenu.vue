<template>
  <aside
    class="fixed top-0 left-0 h-full bg-background-light dark:bg-background-dark w-64 transform transition-transform duration-300 ease-in-out flex flex-col z-50 shadow-lg"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <nav class="mt-20 flex-grow px-2">
      <router-link
        to="/"
        class="block py-4 px-6 text-lg text-text-light dark:text-text-dark hover:bg-primary-light dark:hover:bg-primary-dark rounded-lg"
        @click="$emit('close')"
        >Record Workout</router-link
      >
      <router-link
        to="/calendar"
        class="block py-4 px-6 text-lg text-text-light dark:text-text-dark hover:bg-primary-light dark:hover:bg-primary-dark rounded-lg"
        @click="$emit('close')"
        >Calendar</router-link
      >
      <router-link
        to="/browse-workouts"
        class="block py-4 px-6 text-lg text-text-light dark:text-text-dark hover:bg-primary-light dark:hover:bg-primary-dark rounded-lg"
        @click="$emit('close')"
        >Browse Workouts</router-link
      >
      
    </nav>
    <div class="p-4">
      <button
        v-if="user"
        class="w-full text-center py-3 text-lg bg-primary-dark text-white rounded-lg hover:bg-opacity-90"
        @click="logout"
      >
        Logout
      </button>
      <button
        v-else
        class="w-full text-center py-3 text-lg bg-primary-dark text-white rounded-lg hover:bg-opacity-90"
        @click="login"
      >
        Log In
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useAuth } from '../composables/useAuth';
import { useRouter } from 'vue-router';

defineProps<{
  isOpen: boolean;
}>();
const emit = defineEmits(['close']);
const { user, signOut } = useAuth();
const router = useRouter();

const logout = () => {
  signOut();
  emit('close');
};

const login = () => {
  router.push('/login');
  emit('close');
};
</script>
