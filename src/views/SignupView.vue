<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Create an account
      </h1>
      <form @submit.prevent="handleSignup" class="space-y-6">
        <div>
          <label
            for="displayName"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >Display Name</label
          >
          <input
            v-model="displayName"
            type="text"
            name="displayName"
            id="displayName"
            class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
        </div>
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
          Sign up
        </button>
        <p v-if="errorMessage" class="text-sm text-center text-red-500">{{ errorMessage }}</p>
        <p v-if="successMessage" class="text-sm text-center text-green-500">{{ successMessage }}</p>
      </form>
      <p class="text-sm text-center text-gray-600 dark:text-gray-400">
        Already have an account?
        <router-link to="/login" class="font-medium text-blue-600 hover:underline"
          >Log in</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../supabase';

const displayName = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter();

const handleSignup = async () => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          display_name: displayName.value,
        },
      },
    });
    if (error) throw error;

    if (data.session) {
      router.push('/');
    } else {
      successMessage.value = 'Success! Please check your email to verify your account.';
      errorMessage.value = '';
    }
  } catch (error) {
    errorMessage.value = error.message;
    successMessage.value = '';
  }
};
</script>
