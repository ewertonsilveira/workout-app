# Feature: Refactor Workout Data Structure

## Version: 22

### User Story

As a developer, I want to refactor the workout data structure in `interactive-workout-plan.html` to improve maintainability and reduce data duplication. The goal is to extract all workout definitions into a single, centralized list and have the daily workout plans reference this list.

### Plan

1.  **Analyze Existing Data:** Identify all unique exercises from the `day1` and `day2` workout plans currently hardcoded in the `<script>` section of `src/interactive-workout-plan.html`.
2.  **Create Centralized List:** Create a new JavaScript array named `allWorkouts`. Each element in the array will be an object with a unique `id`, `name`, and `details` for a single exercise.
3.  **Update Daily Plans:** Modify the `workoutPlan` object (previously `exercises`) to define `day1` and `day2` workouts. Instead of containing full exercise objects, the `push`, `pull`, and `legs` arrays will contain the corresponding exercise IDs from the `allWorkouts` list.
4.  **Refactor Population Logic:** Update the `populateExercises` function to:
    - Create a `Map` from the `allWorkouts` array for efficient lookups.
    - Iterate through the `workoutPlan` IDs for each day and category.
    - Retrieve the full exercise object from the `allWorkoutsMap` using the ID.
    - Dynamically generate and inject the HTML for each exercise into the correct container.
5.  **Apply Changes:** Replace the old `<script>` block in `src/interactive-workout-plan.html` with the new, refactored script.

### Execution

1.  **Create Feature File:** A new feature file `v22-Refactor-Workout-Data-Structure.md` was created to document the plan.
2.  **Refactor HTML:** The `replace` tool was used to update the `<script>` block in `C:\Dev\gemini-cli\workout-app\src\interactive-workout-plan.html` with the new data structure and logic.
    - Defined the `allWorkouts` array with 26 unique exercises.
    - Updated `workoutPlan` to use exercise IDs.
    - Modified `populateExercises` to use the new structure.
