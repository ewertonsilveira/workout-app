This feature moves the "Browse Workouts" functionality to a dedicated page and integrates it into the left-hand side menu for improved navigation and separation of concerns.

### Plan & Execution

1.  **Create `BrowseWorkoutsView.vue`:**
    *   A new Vue component file `src/views/BrowseWorkoutsView.vue` was created.
    *   The `<WorkoutPlanner />` component and its import were moved from `RecordWorkout.vue` to this new `BrowseWorkoutsView.vue`.
    *   A basic template structure was added to `BrowseWorkoutsView.vue` to display the `WorkoutPlanner`.
2.  **Update Vue Router (`src/router/index.ts`):**
    *   A new route `/browse-workouts` was added to the router configuration.
    *   This new route is configured to load the `BrowseWorkoutsView.vue` component.
    *   Authentication is required for this route (`meta: { requiresAuth: true }`).
3.  **Modify `RecordWorkout.vue`:**
    *   The "Browse Workouts" button and its associated `@click` logic (`activeTab = 'browse'`) were removed from the template.
    *   The `v-if="activeTab === 'browse'"` block, which conditionally rendered `WorkoutPlanner`, was removed.
    *   The `WorkoutPlanner` import was removed from the script section.
    *   The `activeTab` ref's type definition was updated to no longer include `'browse'`.
4.  **Modify `SideMenu.vue`:**
    *   A new `<router-link>` element was added to the navigation section.
    *   This link points to the new `/browse-workouts` route and displays "Browse Workouts".
    *   The `@click="$emit('close')"` event was retained to close the side menu upon navigation.

This completes the migration of the "Browse Workouts" feature to a standalone page and its integration into the application's main navigation.