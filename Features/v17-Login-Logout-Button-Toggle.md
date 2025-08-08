# Feature: Login/Logout Button Toggle

## Version: 17

### User Story

As a user, I want the logout button on the left menu to dynamically change to a "Log In" button if I am not authenticated. This provides a clear and intuitive way to access the login page when needed.

### Plan & Execution

1.  **Inspect Left Menu Component**: Identify the component responsible for the left menu (`src/components/SideMenu.vue`).
2.  **Access Authentication State**: Utilize the `useAuth` composable from `src/composables/useAuth.ts` to get the user's authentication status.
3.  **Conditional Rendering**:
    - In `SideMenu.vue`, import and use the `useAuth` composable.
    - Use a `v-if` directive to display a "Logout" button when the user is authenticated (`user` object is not null).
    - Use a `v-else` directive to display a "Log In" button when the user is not authenticated.
4.  **Implement "Log In" Functionality**:
    - When the "Log In" button is clicked, use the Vue router to navigate the user to the `/login` page.
    - Import `useRouter` from `vue-router` in `SideMenu.vue`.
5.  **Implement "Log Out" Functionality**:
    - When the "Logout" button is clicked, call the `signOut` function from the `useAuth` composable.
6.  **Refactor `app.vue`**:
    - Remove the `@logout` event listener from the `<SideMenu>` component in `app.vue`.
    - Remove the corresponding `handleLogout` method from the `script` section of `app.vue`.
    - Remove the unused `useRouter` import from `app.vue`.
