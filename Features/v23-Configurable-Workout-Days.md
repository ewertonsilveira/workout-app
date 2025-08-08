# Feature: Configurable Workout Days

## Version: 23

### User Story

As a user, I want to be able to configure the number of workout days in my plan so that I can customize it to my schedule.

### Plan

1.  **Create Feature File:** Create a new feature file `v23-Configurable-Workout-Days.md` in the `features` folder.
2.  **Add Configuration UI:**
    - In `src/interactive-workout-plan.html`, add a new section above the workout plan.
    - This section will contain a `<label>`, a `<input type="number">` for specifying the number of days, and a `<button>` to generate the plan.
3.  **Dynamically Generate UI:**
    - Remove the hardcoded tab buttons and tab content from the HTML.
    - Create container elements for the tabs and content panes that will be populated by JavaScript.
4.  **Update JavaScript Logic:**
    - Create a new function `generatePlan(numDays)` that will be responsible for:
      - Clearing any existing plan.
      - Generating the tab buttons and content panes for the specified number of days.
      - Creating a `workoutPlan` data structure for the specified number of days. For now, it will cycle through the `day1` and `day2` templates.
      - Calling `populateExercises()` to fill the content panes.
      - Calling `setupTabs()` to make the new tabs functional.
    - Modify `populateExercises`, `setupTabs`, and `resetCheckboxes` to work with the dynamically generated elements.
    - Add an event listener to the new "Generate Plan" button to call `generatePlan` with the value from the number input.
    - On initial page load (`DOMContentLoaded`), call `generatePlan(2)` to display the default 2-day workout.

### Execution

1.  **Create Feature File:** A new feature file `v23-Configurable-Workout-Days.md` was created.
2.  **Refactor HTML and JS:** The `replace` tool will be used to update `src/interactive-workout-plan.html` with the new configuration UI and the updated JavaScript logic.
