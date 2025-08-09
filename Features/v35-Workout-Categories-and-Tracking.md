This feature introduces workout categories (Pull, Push, Legs) on the Home Workout Plan page, displaying exercises grouped by their respective categories. It also integrates interactive elements for tracking exercise progress.

### Plan & Execution

1.  **Analyze Existing Structure:** Examined `RecordWorkout.vue` and `useWorkoutStore.ts` to understand current exercise definition and management.
2.  **Refactor `useWorkoutStore.ts`:**
    *   Added `computed` import.
    *   Added `muscleGroupMap` for efficient muscle group name retrieval.
    *   Implemented `getExercisesByCategory` getter to return exercises grouped by `push`, `pull`, and `legs` categories based on the `OLD DATA STRUCTURES`.
3.  **Refactor `RecordWorkout.vue`:**
    *   Imported `AccordionItem`, `ExerciseItem`, `WorkoutSummary`, `WorkoutPlanner`.
    *   Removed `WorkoutDay` component usage.
    *   Used `v-for` to iterate over categories (`push`, `pull`, `legs`) for the active day.
    *   Wrapped each category in an `AccordionItem`.
    *   Used another `v-for` to display `ExerciseItem` components for each exercise within its category.
    *   Passed `exercise`, `day`, `category`, and `exerciseIndex` as props to `ExerciseItem`.
    *   Updated `activeTab` type to include `WorkoutDay`.
    *   Added `categorizedExercises` computed property to get exercises by category from the store.
4.  **Update `WorkoutSummary.vue`:**
    *   Added `defineProps` import and `day` prop.
    *   Modified `completedExercises` and `getCompletedExercises` computed properties to filter exercises based on the `day` prop, ensuring the summary is specific to the active day.
5.  **Update `ExerciseItem.vue`:**
    *   Imported `NumberStepper`.
    *   Added a checkbox bound to `exercise.completed` to toggle completion status.
    *   Integrated `NumberStepper` components for `sets`, `reps`, and `weight`.
    *   Updated `defineProps` to include `day`, `category`, and `exerciseIndex`.
    *   Implemented `@change` and `@update:modelValue` events to call `store.toggleCompletion` and `store.updateExercise` respectively, allowing direct updates to the workout store.

This completes the implementation of workout categories and interactive exercise tracking on the Home Workout Plan page.