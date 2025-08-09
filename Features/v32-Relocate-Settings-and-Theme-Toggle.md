# Feature: Relocate Settings and Theme Toggle to Profile Dropdown

## Description

The user wants to move the "Settings" link from the side menu and the theme toggle icon from the main header into the user profile dropdown menu. This will be achieved by removing these elements from their current locations and adding them to the `ProfileDropdown.vue` component.

## Plan & Execution

1.  **Analyze Existing Code:** I will examine the `SideMenu.vue`, `App.vue`, and `ProfileDropdown.vue` components to understand their current structure and functionality.
2.  **Modify Components:**
    *   Remove the "Settings" link from `SideMenu.vue`.
    *   Remove the theme toggle button from `App.vue`.
    *   Add a "Settings" link and the theme toggle functionality to `ProfileDropdown.vue`.
3.  **Verify Changes:** After implementing the changes, I will confirm that the "Settings" link and theme toggle are correctly located in the profile dropdown and that the overall layout is consistent with the user's request.