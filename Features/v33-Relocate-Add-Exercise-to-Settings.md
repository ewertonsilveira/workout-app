# Feature: Relocate Add Exercise to Settings

## Description

The user wants to move the "Add Exercise" functionality to the Settings page. The Settings page should also display a list of all available exercises.

## Plan & Execution

1.  **Analyze Existing Code:** I will examine the `RecordWorkout.vue`, `SettingsView.vue`, and `useWorkoutStore.ts` files to understand their current structure and functionality.
2.  **Modify `useWorkoutStore.ts`:**
    *   Expose the `workouts` array.
    *   Create a function to add a new exercise to the `workouts` array.
3.  **Modify `SettingsView.vue`:**
    *   Add the "Add New Exercise" form.
    *   Display the list of existing exercises from the `useWorkoutStore`.
    *   Connect the form to the new `addExercise` function in the store.
4.  **Modify `RecordWorkout.vue`:**
    *   Remove the "Add Exercise" button and form.
5.  **Verify Changes:** After implementing the changes, I will confirm that the "Add Exercise" form is on the settings page, that the exercise list is displayed, and that adding a new exercise works as expected.