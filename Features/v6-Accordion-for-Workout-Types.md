# Feature: Accordion for Workout Types

## Plan

1.  **Analyze Design:** Review the user-provided image (`shots/accordion.png`) to understand the desired look and feel of the accordion.
2.  **Create Accordion Component:** Develop a new, reusable `Accordion.vue` component. This component will manage its own state (open/closed) and will have a slot for the content.
3.  **Integrate Accordion:** Modify `WorkoutDay.vue` to use the new `Accordion.vue` component for each workout category (Legs, Push, Pull), replacing the current static layout.
4.  **Style Accordion:** Apply styles to the `Accordion.vue` component to match the application's theme and the user's drawing, including a header and an icon to indicate the state.

## Execution

1.  **`Accordion.vue` Component:**
    - A new file will be created at `src/components/Accordion.vue`.
    - It will accept a `title` prop for the accordion header.
    - It will contain an `isOpen` ref to manage the component's state.
    - A clickable header will toggle the `isOpen` state.
    - The content will be passed via a slot and will be conditionally rendered using `v-if="isOpen"`.
    - A chevron icon will be added to the header to visually indicate whether the accordion is open or closed, and it will rotate on state change.
2.  **`WorkoutDay.vue` Integration:**
    - The `Accordion.vue` component will be imported.
    - The existing structure for displaying "Legs", "Push", and "Pull" exercises will be refactored to use the `<Accordion>` component for each category.
    - The exercise lists (`<ul>`) will be placed inside the default slot of their respective accordions.
3.  **Styling:**
    - The styling will be done within the `Accordion.vue` component using Tailwind CSS to ensure it's self-contained.
    - A smooth transition will be added for the expand/collapse animation.
