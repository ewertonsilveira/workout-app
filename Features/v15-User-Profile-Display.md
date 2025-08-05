# v15: User Profile Display

This feature adds a user profile section to the workout page, displaying the authenticated user's information and a logout button. It also improves the sign-up flow by redirecting users to the workout page upon successful registration.

## Plan

1.  **Create Feature File:** A new feature file, `v15-User-Profile-Display.md`, will be created.
2.  **Create Authentication Composable:** A `useAuth.ts` composable will be created to manage user authentication state, fetch user data, and handle logout.
3.  **Create Profile Component:** A `ProfileView.vue` component will be built to display the user's welcome message, email, and a logout button.
4.  **Update Workout Page:** The `ProfileView.vue` component will be integrated into the `RecordWorkout.vue` page.
5.  **Update Sign-up Flow:** The `SignupView.vue` component will be updated to redirect authenticated users to the workout page after successful sign-up.

## Execution

1.  Create `Features/v15-User-Profile-Display.md`.
2.  Create `src/composables/useAuth.ts`.
3.  Create `src/components/ProfileView.vue`.
4.  Update `src/views/RecordWorkout.vue` to use the new profile component.
5.  Update `src/views/SignupView.vue` to handle redirection.
