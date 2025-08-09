This feature addresses and resolves the 'computed is not defined' error in `src/composables/useWorkoutStore.ts`.

### Plan & Execution

1.  **Identify Missing Import:** The error indicated that `computed` was used without being imported.
2.  **Add Missing Import:** Added `computed` to the import statement from 'vue'.

This ensures the `useWorkoutStore.ts` file is correctly parsed and compiled, resolving the internal server error.