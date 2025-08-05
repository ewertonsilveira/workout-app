# v13: Social Login Integration

This feature integrates Google and GitHub social logins into the application.

## Plan

1.  **Create Feature File:** A new feature file `v13-Social-Login-Integration.md` will be created in the `Features` folder.
2.  **Update LoginView.vue:**
    *   The existing `<button>` elements for Google and GitHub login will be replaced with `<a>` tags.
    *   The `href` attribute of these tags will point to the respective server-side authentication routes: `/auth/google` and `/auth/github`.
    *   This change will allow users to initiate the OAuth flow by clicking the buttons.

## Execution

1.  Create `Features/v13-Social-Login-Integration.md`.
2.  Modify `src/views/LoginView.vue` to implement the social login links.
