# Feature: UI Fixes and Layout Improvements

## Plan

1.  **Fix Checkbox:** The checkbox in `ExerciseItem.vue` is not working because it's directly bound to a prop with `v-model`. This will be fixed by using a one-way data flow, binding to `:checked` and emitting an event on change.
2.  **Widen Layout:** The main application container in `app.vue` will be made wider to better utilize space on larger screens.
3.  **Resize Legs Section:** The grid layout in `WorkoutDay.vue` will be adjusted to give the "Legs" exercise section more space, as it was previously constrained.

## Execution

1.  **Checkbox Fix (`ExerciseItem.vue`):**
    - The `v-model="exercise.completed"` on the checkbox was replaced with `:checked="exercise.completed"`.
    - The `@change` event on the checkbox now calls the `toggleCompletion` method, which emits an event to the parent component (`WorkoutDay.vue`).
    - `WorkoutDay.vue` listens for this event and calls the appropriate `store.toggleCompletion` method, ensuring the state is updated correctly in the central store.
2.  **Widen Layout (`app.vue`):**
    - The Tailwind CSS class `max-w-4xl` on the main content `div` was changed to `max-w-6xl`, increasing the maximum width of the content area.
3.  **Resize Legs Section (`WorkoutDay.vue`):**
    - The grid layout was changed from a 3-column layout (`md:grid-cols-3`) to a 2-column layout (`md:grid-cols-2`).
    - The "Legs" section was placed in the first column (`md:col-span-1`).
    - The "Push" and "Pull" sections were placed in the second column (`md:col-span-1`) and stacked vertically within a new `div`. This gives the "Legs" section significantly more horizontal space.
