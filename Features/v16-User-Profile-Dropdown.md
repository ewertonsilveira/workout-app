# v16: User Profile Dropdown

This feature replaces the basic user information display with a user icon and a dropdown menu in the main application header.

## Plan

1.  **Create Feature File:** A new feature file, `v16-User-Profile-Dropdown.md`, will be created.
2.  **Create `ProfileDropdown.vue` Component:** A new component will be created to house the user icon, dropdown menu, user information, and logout functionality.
3.  **Update `App.vue`:** The new `ProfileDropdown.vue` component will be added to the header of the main `App.vue` file.
4.  **Remove Old Profile View:** The `ProfileView.vue` component will be removed from the `RecordWorkout.vue` page, and the component file will be deleted.

## Execution

1.  Create `Features/v16-User-Profile-Dropdown.md`.
2.  Create `src/components/ProfileDropdown.vue`.
3.  Update `src/app.vue` to include the new component.
4.  Remove the `ProfileView.vue` component from `src/views/RecordWorkout.vue`.
5.  Delete the `src/components/ProfileView.vue` file.
