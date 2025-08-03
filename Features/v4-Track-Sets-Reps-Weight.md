# Feature: Track Sets, Reps, and Weight

## Plan

1.  **Update Data Store:** Modify the `useWorkoutStore.ts` to include `sets`, `reps`, and `weight` for each exercise. The data structure for an exercise will be updated to hold these new fields.
2.  **Create `ExerciseItem.vue` component:** Create a new component to represent a single exercise. This component will contain input fields for sets, reps, and weight.
3.  **Update `WorkoutDay.vue`:** Modify the `WorkoutDay.vue` component to loop through exercises and render the `ExerciseItem.vue` component for each one.
4.  **Implement Data Persistence:** Ensure that the data entered by the user is saved to `localStorage` through the `useWorkoutStore`.

## Execution

1.  **`useWorkoutStore.ts`:**
    - The data structure for exercises in the store was updated to include `sets`, `reps`, and `weight` fields, with default values.
2.  **`ExerciseItem.vue` Component:**
    - A new component `ExerciseItem.vue` was created.
    - It receives an exercise object as a prop.
    - It contains `v-model` bound input fields for `sets`, `reps`, and `weight`.
    - Changes to these inputs will automatically update the central store.
3.  **`WorkoutDay.vue` Component:**
    - The template was updated to render a list of `ExerciseItem` components, passing the respective exercise data to each.
4.  **`localStorage`:**
    - The existing `useWorkoutStore` already persists the entire state to `localStorage` on any change, so the new data is automatically saved.
