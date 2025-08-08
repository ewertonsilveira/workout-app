# Feature: Configurable Workout Categories

## Description

This feature allows users to configure the workout category (e.g., Pull, Push, Legs) for each workout day. By default, all three categories are selected.

## Plan & Execution

### 1. Create Feature File

- Create a new feature file `v24-Configurable-Workout-Categories.md` to document the requirement.

### 2. Update Data Structure

- Modify the workout data structure in `useWorkoutStore.ts` to include a `category` property for each workout day.
- The `category` property will be an array of strings, allowing multiple categories to be selected.
- Default the `category` to `['Pull', 'Push', 'Legs']` for all workout days.

### 3. Update UI Components

- Modify the `WorkoutDay.vue` component to include a multi-select dropdown for choosing the workout category.
- The dropdown will be populated with the available categories (Pull, Push, Legs).
- The selected categories will be saved to the workout store.

### 4. Filter Exercises by Category

- Update the `WorkoutDay.vue` component to display only the exercises that match the selected categories for that day.
- The filtering logic will be implemented in the `useWorkoutStore.ts` file.

### 5. Test and Verify

- Thoroughly test the new functionality to ensure it works as expected.
- Verify that the default categories are set correctly.
- Test the category selection and ensure the exercise list is updated accordingly.
- Verify that the data is persisted correctly in `localStorage`.
