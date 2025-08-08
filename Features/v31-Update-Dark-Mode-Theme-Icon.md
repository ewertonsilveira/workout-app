# Feature: Update Dark Mode Theme Icon

## Description

The user wants to update the theme icon to display a moon when dark mode is active and a sun when light mode is active. This will be achieved by conditionally rendering the appropriate SVG icon based on the current theme state.

## Plan & Execution

1.  **Analyze Existing Code:** I will examine the `useTheme.ts` composable and the `App.vue` component to understand how the theme is currently managed and rendered.
2.  **Update Theme Toggle:** I will modify the `App.vue` component to include both the sun and moon SVG icons and use a `v-if` directive to toggle their visibility based on the current theme.
3.  **Verify Changes:** After implementing the changes, I will confirm that the theme icon switches correctly when toggling between light and dark modes.