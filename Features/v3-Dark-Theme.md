# Feature: Dark Theme

## Plan

1.  **Create Theme Toggle UI:** Add a button or switch to the UI that allows users to toggle between light and dark themes.
2.  **Implement Theme Switching Logic:** Use Vue.js composables to manage the theme state (light or dark).
3.  **Apply Styles with SCSS/Tailwind:** Use CSS variables and Tailwind's dark mode variant to apply different styles for the dark and light themes.
4.  **Persist Theme Preference:** Store the user's selected theme in `localStorage` so it persists across sessions.

## Execution

1.  **`useTheme.ts` Composable:**
    - Created a `useTheme.ts` composable to encapsulate the theme logic.
    - It manages a `theme` ref, which can be 'light' or 'dark'.
    - It loads the theme from `localStorage` on initialization.
    - It provides a `toggleTheme` function that switches the theme and saves the new value to `localStorage`.
    - It applies the theme to the `<html>` element's `data-theme` attribute.
2.  **`App.vue` Integration:**
    - Imported and used the `useTheme` composable in the main `App.vue` component.
    - Added a button that calls the `toggleTheme` function when clicked.
3.  **Styling (`main.scss`):**
    - Defined CSS variables for colors for both light and dark themes within `[data-theme="light"]` and `[data-theme="dark"]` selectors.
    - Used Tailwind's `dark:` variant for more specific style adjustments where needed.
4.  **`localStorage`:**
    - The `useTheme` composable handles reading from and writing to `localStorage` with the key `theme`.
