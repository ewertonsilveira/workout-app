# Feature: Refactor to Vue Component

## Version: 24

### User Story

As a developer, I want to refactor the JavaScript-driven workout planner into a dedicated Vue component to improve code organization, maintainability, and leverage Vue's reactivity.

### Plan

1.  **Create Feature File:** Create a new feature file `v24-Refactor-to-Vue-Component.md` in the `features` folder.
2.  **Create Vue Component:**
    - Create a new single-file component `src/components/WorkoutPlanner.vue`.
3.  **Migrate Logic to `<script setup>`:**
    - Move the `allWorkouts` and `workoutTemplates` data arrays into the component's script.
    - Re-implement the `generatePlan`, `populateExercises`, `setupTabs`, and `resetCheckboxes` functions using Vue's composition API (`ref`, `onMounted`, etc.).
    - Use `ref` for reactive data properties like `numDays`, `workoutPlan`, and `activeTab`.
4.  **Migrate HTML to `<template>`:**
    - Move the HTML for the configuration section, tabs, and content panes into the component's template.
    - Replace manual DOM creation with Vue directives:
      - Use `v-model` to bind the number input to the `numDays` ref.
      - Use `@click` to handle button clicks for generating the plan and resetting checkboxes.
      - Use `v-for` to loop through `workoutPlan` and dynamically render the tabs and workout content.
      - Use conditional rendering (`:class="{ active: ... }"`) to manage the active tab state.
5.  **Clean Up `interactive-workout-plan.html`:**
    - Remove the entire `<script>` block.
    - Remove the workout planner's HTML structure.
    - Add a single `<div id="app"></div>` to serve as the mount point for the Vue application.
6.  **Update Application Entry Point:**
    - Modify `src/main.ts` to import and mount the new `WorkoutPlanner.vue` component.
    - Update `src/app.vue` to be a simple `<router-view />` placeholder.

### Execution

1.  **Create Feature File:** A new feature file `v24-Refactor-to-Vue-Component.md` was created.
2.  **Create Vue Component:** The file `src/components/WorkoutPlanner.vue` will be created.
3.  **Update HTML and Main App:** The `replace` tool will be used to update `src/interactive-workout-plan.html`, `src/main.ts`, and `src/app.vue`.
