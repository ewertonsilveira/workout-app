<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Create an account
      </h1>
      <form class="space-y-6">
        <div>
          <label
            for="displayName"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >Display Name</label
          >
          <input
            type="text"
            name="displayName"
            id="displayName"
            class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>
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
          Sign up
        </button>
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

<script setup></script>
