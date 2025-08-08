# Feature: Hierarchical Muscle Groups and Workout Refactor

## Version: 28

### User Story

As a user, I want to see my workouts organized by specific muscle groups and sub-groups so that I can better understand the focus of each exercise and build more targeted workout plans.

### New Data Structure

A hierarchical muscle group category list including sub-muscle groups with parent references, and a JavaScript list of workouts keyed by these detailed muscle groups with primary and secondary muscle IDs instead of names, merged across workout days.

Go back to the allWorkouts list we built and update all primary / secondary IDs to use these sub-muscle IDs instead of the old mixed list. That way, everything matches perfectly to this hierarchy.

**Muscle Groups:**

```javascript
const muscleGroups = [
  { id: 1, name: 'Chest', parent: null },
  { id: 2, name: 'Shoulders', parent: null },
  { id: 3, name: 'Arms', parent: null },
  { id: 4, name: 'Back', parent: null },
  { id: 5, name: 'Core', parent: null },
  { id: 6, name: 'Legs', parent: null },

  { id: 7, name: 'Upper Chest', parent: 1 },
  { id: 8, name: 'Lower Chest', parent: 1 },

  { id: 9, name: 'Front Deltoids', parent: 2 },
  { id: 10, name: 'Side Deltoids', parent: 2 },
  { id: 11, name: 'Rear Deltoids', parent: 2 },
  { id: 12, name: 'Rotator Cuff', parent: 2 },
  { id: 13, name: 'Traps', parent: 2 },

  { id: 14, name: 'Triceps', parent: 3 },
  { id: 15, name: 'Biceps', parent: 3 },
  { id: 16, name: 'Forearms & Grip', parent: 3 },

  { id: 17, name: 'Lats', parent: 4 },
  { id: 18, name: 'Rhomboids', parent: 4 },
  { id: 19, name: 'Lower Back', parent: 4 },

  { id: 20, name: 'Abdominals', parent: 5 },
  { id: 21, name: 'Obliques', parent: 5 },

  { id: 22, name: 'Quads', parent: 6 },
  { id: 23, name: 'Hamstrings', parent: 6 },
  { id: 24, name: 'Glutes', parent: 6 },
  { id: 25, name: 'Calves', parent: 6 },
];
```

**Updated Workouts List:**

```javascript
const allWorkouts = [
  // Chest primary with secondary triceps and front deltoids
  {
    id: 1,
    primary: 8,
    secondary: [14, 9],
    name: 'Bench Press (15kg)',
    details: '3 sets of 8 reps',
  },
  {
    id: 2,
    primary: 7,
    secondary: [9, 14],
    name: 'Incline Bench Press',
    details: '3 sets of 8 reps',
  },
  {
    id: 3,
    primary: 8,
    secondary: [9, 14, 20],
    name: 'Push-ups & Variations',
    details: '3 sets to failure',
  },
  {
    id: 4,
    primary: 8,
    secondary: [14, 9],
    name: 'Straight Bar Dips',
    details: '3 sets to failure',
  },

  // Shoulders primary with secondary triceps, upper chest, traps
  {
    id: 5,
    primary: 9,
    secondary: [14, 7, 13],
    name: 'Overhead Press',
    details: '3 sets of 8 reps',
  },
  {
    id: 6,
    primary: 10,
    secondary: [9, 11, 13],
    name: 'Lateral Raise (5kg)',
    details: '3 sets of 12 reps',
  },
  { id: 7, primary: 9, secondary: [14, 7], name: 'Pike Push-ups', details: '3 sets of 5 reps' },
  { id: 8, primary: 11, secondary: [12, 13], name: 'Egyptian Raise', details: '3 sets of 10 reps' },
  { id: 9, primary: 9, secondary: [14, 13, 20], name: 'Handstand Hold', details: '3×30 sec holds' },

  // Back primary with secondary biceps, traps, side delts, core
  {
    id: 10,
    primary: 17,
    secondary: [15, 13, 10, 20],
    name: 'Pull-ups (Weighted 15kg)',
    details: '3 sets of 8 reps',
  },
  {
    id: 11,
    primary: 17,
    secondary: [15, 16, 13],
    name: 'Chin-ups (Weighted 15kg)',
    details: '3 sets of 8 reps',
  },
  {
    id: 12,
    primary: 17,
    secondary: [10, 15],
    name: 'Bent-over Barbell Row',
    details: '3 sets of 8 reps',
  },
  {
    id: 13,
    primary: 17,
    secondary: [10, 15],
    name: 'Seated Cable Row',
    details: '3 sets of 10 reps',
  },
  {
    id: 14,
    primary: 17,
    secondary: [15, 13, 18],
    name: 'Lat Pulldown',
    details: '3 sets of 10 reps',
  },
  {
    id: 15,
    primary: 8,
    secondary: [14, 20, 1],
    name: 'Low Bar Transitions / Negative Muscle Ups',
    details: '3 sets to failure',
  },

  // Biceps primary with secondary forearms, back
  {
    id: 16,
    primary: 15,
    secondary: [16, 17],
    name: 'Ring Curl / Pelican Curl',
    details: '3 sets of 10 reps',
  },

  // Legs primary with secondary glutes, hamstrings, lower back
  {
    id: 17,
    primary: 22,
    secondary: [24, 23, 20],
    name: 'Barbell Back Squat',
    details: '3 sets of 8 reps',
  },
  {
    id: 18,
    primary: 23,
    secondary: [24, 19],
    name: 'Romanian Deadlift',
    details: '3 sets of 8 reps',
  },
];
```

### Plan & Execution

1.  **Create Feature File:** Create this file (`v28-Hierarchical-Muscle-Groups.md`).
2.  **Refactor Data Structure (`useWorkoutStore.ts`):**
    - Replace the current `allWorkouts` array and `workoutTemplates` object with the new `muscleGroups` and `allWorkouts` list.
    - Update the `Exercise` interface to `primary: number`, `secondary: number[]`, `details: string`.
    - Remove the `generatePlan` and `resetDay` functions. The store will now provide the complete `muscleGroups` and `allWorkouts` lists.
3.  **Update UI Components:**
    - **`WorkoutPlanner.vue`:** Replace the day-based tabs with a filtering UI for muscle groups.
    - **`WorkoutDay.vue`:** Refactor to display workouts based on the selected muscle group filter.
    - **`ExerciseItem.vue`:** Update to display exercise details and look up muscle group names from IDs.
    - **`NumberStepper.vue`:** This component will be temporarily disconnected as the `sets`, `reps`, `weight` are now a single `details` string.
