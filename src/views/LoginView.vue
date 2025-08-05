<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div v-if="user">
        <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Welcome</h1>
        <p class="text-center text-gray-600 dark:text-gray-400">
          You are logged in as {{ user.email }}
        </p>
        <div class="flex flex-col items-center space-y-4 mt-6">
          <router-link
            to="/"
            class="w-full py-2 px-4 text-center font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Go to App
          </router-link>
          <button
            @click="handleLogout"
            class="w-full py-2 px-4 text-center font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
      <div v-else>
        <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h1>
        <form @submit.prevent="handleLogin" class="space-y-6 mt-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
          <p v-if="errorMessage" class="text-sm text-center text-red-500">{{ errorMessage }}</p>
        </form>
        <div class="relative mt-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400"
              >Or continue with</span
            >
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-6">
          <button
            @click="handleSocialLogin('google')"
            class="w-full py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Google
          </button>
          <button
            @click="handleSocialLogin('github')"
            class="w-full py-2 font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-800"
          >
            GitHub
          </button>
        </div>
        <p class="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
          Don't have an account?
          <router-link to="/signup" class="font-medium text-blue-600 hover:underline"
            >Sign up</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../supabase';
import { useAuth } from '../composables/useAuth';

const { user, signOut } = useAuth();
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push('/');
  } catch (error) {
    errorMessage.value = error.message;
  }
};

const handleSocialLogin = async (provider) => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) throw error;
  } catch (error) {
    errorMessage.value = error.message;
  }
};

const handleLogout = async () => {
  await signOut();
};
</script>
