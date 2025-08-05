<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h1>
      <form class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >Email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >Password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400"
            >Or continue with</span
          >
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <a
          href="http://localhost:3000/auth/google"
          class="w-full py-2 font-semibold text-center text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Google
        </a>
        <a
          href="http://localhost:3000/auth/github"
          class="w-full py-2 font-semibold text-center text-white bg-gray-700 rounded-md hover:bg-gray-800"
        >
          GitHub
        </a>
      </div>
      <p class="text-sm text-center text-gray-600 dark:text-gray-400">
        Don't have an account?
        <router-link to="/signup" class="font-medium text-blue-600 hover:underline"
          >Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup></script>
