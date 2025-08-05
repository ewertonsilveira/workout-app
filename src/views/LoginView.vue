<template>
  <div class="flex items-center justify-center min-h-[calc(100vh-150px)]">
    <div
      class="w-full max-w-md p-8 space-y-8 bg-card-light dark:bg-card-dark rounded-2xl shadow-lg"
    >
      <div class="text-center">
        <img src="../assets/logo.svg" alt="Workout App Logo" class="w-24 h-24 mx-auto mb-4" />
        <h1 class="text-3xl font-bold text-text-light dark:text-text-dark">Welcome Back</h1>
        <p class="text-text-light dark:text-text-dark/80">
          Sign in to continue your workout journey
        </p>
      </div>
      <form class="space-y-6">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-text-light dark:text-text-dark"
            >Email Address</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg focus:ring-primary-dark focus:border-primary-dark"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-text-light dark:text-text-dark"
            >Password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg focus:ring-primary-dark focus:border-primary-dark"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full text-center py-3 text-lg bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>
