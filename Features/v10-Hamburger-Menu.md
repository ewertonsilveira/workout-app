# New Requirement as Feature:

- Add a menu hamburgher to left side.
- Ability to toggle, show and hide - clicked on the menu icon
- Follow the css styles similar to the `UI Design example`

## UI Design example

- @photo/image.png

## Structure

### Menu

- 3 Lines Menu icon
  -- Record Workout
  (default tab and landing page)
  (current Workout page will go here)
  -- Calendar (New feature)
  (new calendar feature will be here)
  (will have history of logged Workouts)
  -- Login (New feature)
  (user will be able to login and logout)

# Here is my plan:

1.  Create Feature File: I will create Features/v10-Hamburger-Menu.md to document this requirement, based on the content you provided.
2.  Analyze UI Design: I will examine proto/image.png to understand the visual requirements for the menu.
3.  Install & Configure Vue Router: I will set up the necessary routes for the new pages.
4.  Refactor Components:
    - Move the current workout functionality into a new src/views/RecordWorkout.vue view.
    - Create placeholder views for src/views/Calendar.vue and src/views/Login.vue.
    - Create the src/components/SideMenu.vue component for the navigation.
5.  Update Main Layout: I will modify src/app.vue to integrate the new side menu, a toggle button, and the router's <router-view>.

I will start by creating the feature file. May I proceed?
