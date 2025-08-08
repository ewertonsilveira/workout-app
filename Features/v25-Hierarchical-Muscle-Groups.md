# Feature: Hierarchical Muscle Groups and Refactored Workout Data

## Version: 25

### User Story

As a developer, I want to refactor the workout data to use a hierarchical muscle group structure. This will allow for more detailed and organized workout plans, where each exercise is linked to specific primary and secondary sub-muscle groups.

### Plan

1.  **Create Feature File:** Create a new feature file `v25-Hierarchical-Muscle-Groups.md` in the `features` folder.
2.  **Implement Hierarchical Muscle Groups:**
    - In `src/components/WorkoutPlanner.vue`, create a new `muscleGroups` constant.
    - This array will contain objects, each with an `id`, `name`, and a `parent` ID to define the hierarchy (e.g., "Upper Chest" has "Chest" as its parent).
3.  **Update `allWorkouts` List:**
    - Replace the old `allWorkouts` array.
    - The new array will contain workout objects where each exercise has a `primary` muscle ID and a `secondary` array of muscle IDs, all referencing the new `muscleGroups` list.
4.  **Update Workout Templates:**
    - Update the `workoutTemplates` object to use the new IDs from the refactored `allWorkouts` list to define the exercises for `day1` and `day2`.
5.  **Apply Changes:**
    - Use the `replace` tool to update the entire `<script setup>` block in `src/components/WorkoutPlanner.vue` with the new data structures.

### Execution

1.  **Create Feature File:** A new feature file `v25-Hierarchical-Muscle-Groups.md` was created.
2.  **Update Vue Component:** The `<script setup>` in `src/components/WorkoutPlanner.vue` was replaced with the new code containing the hierarchical data structures.
