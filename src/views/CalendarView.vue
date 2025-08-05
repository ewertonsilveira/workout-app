<template>
  <div class="max-w-4xl mx-auto">
    <header class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark">
        Workout Calendar
      </h1>
      <p class="mt-2 text-lg text-text-light dark:text-text-dark/80">
        Review your completed sessions and track your consistency.
      </p>
    </header>

    <div class="bg-card-light dark:bg-card-dark p-6 rounded-2xl shadow-lg">
      <div class="flex justify-between items-center mb-6">
        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <h2 class="text-xl font-semibold text-text-light dark:text-text-dark">August 2025</h2>
        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <div class="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div class="grid grid-cols-7 gap-2">
        <!-- Placeholder days. In a real app, this would be dynamically generated. -->
        <div
          v-for="day in 31"
          :key="day"
          class="p-2 h-20 rounded-lg flex flex-col items-center justify-center"
          :class="{
            'bg-primary-light/50 dark:bg-primary-dark/50': [5, 12, 19, 26].includes(day),
            'border border-primary-dark': day === 5,
          }"
        >
          <span class="font-medium">{{ day }}</span>
          <div
            v-if="[5, 12, 19, 26].includes(day)"
            class="w-2 h-2 bg-green-500 rounded-full mt-1"
            title="Workout Completed"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
