# Feature: Mobile-First UI Redesign

## Plan

1.  **Color Palette and Base Styles:**
    *   Update `tailwind.config.js` with a new color palette inspired by the reference images (soft oranges, yellows, and off-whites).
    *   Update `src/assets/styles/main.scss` to set the application's background color and default font styles for a mobile look and feel.

2.  **Layout Overhaul (`App.vue`):**
    *   Remove the current two-column grid layout.
    *   Implement a single-column layout.
    *   Redesign the tab navigation for "Workout Day 1" and "Workout Day 2" to be larger and more touch-friendly.
    *   The "Workout Summary" will be integrated into the main view, likely as a collapsible section below the workout days.

3.  **Create `NumberStepper.vue` Component:**
    *   Develop a new reusable component for number inputs.
    *   It will feature large plus and minus buttons for easy tapping.
    *   This will replace the standard number input fields for sets, reps, and weight.

4.  **Redesign Core Components:**
    *   **`ExerciseItem.vue`**:
        *   Integrate the new `NumberStepper.vue` component.
        *   Increase the size and visual prominence of the completion checkbox.
    *   **`AccordionItem.vue` & `WorkoutDay.vue`**:
        *   Restyle to have a modern, card-like appearance with rounded corners and soft shadows.
    *   **`WorkoutSummary.vue`**:
        *   Update styling to align with the new design.

## Execution

1.  Create `Features/v9-Mobile-UI-Redesign.md`.
2.  Update `tailwind.config.js` and `src/assets/styles/main.scss`.
3.  Create `src/components/NumberStepper.vue`.
4.  Update `src/app.vue` with the new layout.
5.  Update `src/components/ExerciseItem.vue` to use the new stepper.
6.  Update styles for all relevant components.
