# Feature: Post-Signup Redirect and Conditional Login

## Version: 18

### User Story

1.  As a new user, after I sign up, I want to be redirected to the main application page so I can start using the app immediately.
2.  As a user, when I navigate to the `/login` page, I want to see a welcome message if I'm already logged in, or the login form if I'm not.

### Plan & Execution

1.  **Update Signup Flow:**
    -   Modified `src/views/SignupView.vue`.
    -   The `handleSignup` function was updated to unconditionally redirect the user to the home page (`/`) upon a successful signup API call.
    -   The logic for displaying a success message on the signup page was removed, as the user is now redirected immediately.

2.  **Update Login Page:**
    -   Modified `src/views/LoginView.vue`.
    -   Imported and used the `useAuth` composable to get the current user's authentication state.
    -   Added conditional rendering (`v-if="user"`) to the template.
    -   If a user is logged in, the view now displays a welcome message with the user's email, a "Go to App" button, and a "Logout" button.
    -   If no user is logged in, the view displays the standard login form.
    -   The `handleLogout` function was added to call the `signOut` method from the `useAuth` composable.
