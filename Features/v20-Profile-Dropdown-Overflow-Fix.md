# Feature: Profile Dropdown Overflow Fix

## Version: 20

### User Story

As a user, when my email address is long, I want it to be truncated in the profile dropdown so that it doesn't overflow and break the layout.

### Plan & Execution

1.  **Identify Component:**
    - Located the `ProfileDropdown.vue` component at `src/components/ProfileDropdown.vue`.

2.  **Apply CSS Fix:**
    - Added the `truncate` utility class from Tailwind CSS to the `<p>` tags responsible for displaying the user's display name and email.
    - This class automatically applies the necessary styles (`overflow: hidden`, `text-overflow: ellipsis`, `white-space: nowrap`) to prevent the text from overflowing its container.
