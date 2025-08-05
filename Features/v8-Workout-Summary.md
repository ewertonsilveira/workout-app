# Feature: Workout Summary

## Plan

1.  **Create `WorkoutSummary.vue` Component:**
    - This component will display a summary of completed exercises, categorized by 'Push', 'Pull', and 'Legs'.
    - It will be reactive to changes in the workout store.

2.  **Update `App.vue` Layout:**
    - Modify the main layout to be a two-column grid.
    - The left column will contain the existing workout day tabs and content.
    - The right column will be dedicated to the new "Workout Summary" section.
    - The summary section should be visible at all times alongside the workout details.

3.  **Integrate `WorkoutSummary.vue`:**
    - Import and place the `WorkoutSummary.vue` component into the new right-hand column in `App.vue`.

4.  **Styling:**
    - Ensure the new two-column layout is responsive and visually balanced.
    - Style the `WorkoutSummary.vue` component to be clear and easy to read, fitting the application's overall theme.

## Execution

1.  Update `src/app.vue` to revert the previous tab-based implementation.
2.  Modify `src/app.vue` to implement a two-column layout.
3.  Place the `WorkoutSummary.vue` component in the new right column.
4.  Ensure styles in `tailwind.config.js` and component files support the new layout.
