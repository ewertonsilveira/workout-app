# Feature: Add 404 Page

## Version: 21

### User Story

As a user, if I navigate to a URL that does not exist, I want to see a "Page not found" page so that I know the page is not available and I can easily navigate back to the home page.

### Plan & Execution

1.  **Create `NotFound.vue` Component:**
    - Created a new view component at `src/views/NotFound.vue`.
    - This component displays a "Page Not Found" message and a "Go Back Home" button, providing a clear and user-friendly experience for invalid URLs.

2.  **Update Vue Router:**
    - Modified the router configuration in `src/router/index.ts`.
    - Added a catch-all route `{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }` to the routes array.
    - This route ensures that any URL that doesn't match the other defined routes will render the `NotFound.vue` component.
    - Imported the new `NotFound` component into the router file.
