# v14: Supabase Integration

This feature replaces the existing Node.js/MongoDB backend with Supabase for database and authentication services.

## Plan

1.  **Create Feature File:** A new feature file `v14-Supabase-Integration.md` will be created in the `Features` folder.
2.  **Install Dependencies:** The `@supabase/supabase-js` library will be added to the project.
3.  **Setup Supabase Client:** A Supabase client will be configured to connect to the user's Supabase project using environment variables. A `.env.example` file will be provided.
4.  **Refactor Authentication:** The Login and Sign Up pages will be updated to use Supabase for both email/password and social (Google/GitHub) authentication.
5.  **Remove Old Backend:** The existing `server` directory will be removed.

## Execution

1.  Create `Features/v14-Supabase-Integration.md`.
2.  Install `@supabase/supabase-js`.
3.  Create `src/supabase.ts` and a `.env.example` file.
4.  Update `src/views/LoginView.vue` and `src/views/SignupView.vue`.
5.  Update `src/router/index.ts` to handle auth state.
6.  Remove the `server` directory and update `package.json` scripts.
