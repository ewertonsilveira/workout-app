# Feature: Workout Settings

## Plan & Execution

1.  **Create Feature File:** Create `v29-Workout-Settings.md` to document the new feature.
2.  **Create Settings View:** Create a new Vue component `src/views/SettingsView.vue` for the settings page.
3.  **Add Route:** Add a new route for `/settings` in `src/router/index.ts` that points to the `SettingsView` component.
4.  **Update Navigation:** Add a link to the new settings page in the `SideMenu.vue` component.
5.  **Implement Settings UI:** Add input fields for default sets, reps, and weight to `SettingsView.vue`.
6.  **Update Workout Store:** Add state and actions to `src/composables/useWorkoutStore.ts` to manage the default workout settings, persisting them to local storage.
7.  **Use New Settings:** Update `RecordWorkout.vue` to use the default values from the workout store when adding new exercises.
