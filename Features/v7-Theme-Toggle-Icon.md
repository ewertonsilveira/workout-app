# Feature: Replace Theme Toggle Button with an Icon

## Plan

1.  **Analyze Design:** Review the user-provided image (`shots/theme.png`) to understand the desired icon and its behavior.
2.  **Replace Button Content:** Modify the theme toggle button in `App.vue`. The text label "Toggle Theme" will be replaced with SVG icons.
3.  **Implement Icon Switching:** The button will display a "sun" icon when the dark theme is active (to switch to light) and a "moon" icon when the light theme is active (to switch to dark).
4.  **Style the Icon Button:** Apply styling to the button to ensure it is visually appealing and positioned correctly, matching the new icon-based design.

## Execution

1.  **`App.vue` Modification:**
    - The existing `<button>` for the theme toggle will be located.
    - The text content of the button will be removed.
    - Two SVG icons, one for a sun and one for a moon, will be added inside the button.
    - A `v-if` directive will be used to conditionally render the appropriate icon based on the current `theme` value from the `useTheme` composable.
2.  **Styling:**
    - The button's classes will be updated using Tailwind CSS to give it a clean, modern look suitable for an icon button.
    - A transition will be added to the icons to provide a smooth visual feedback when the theme changes.
