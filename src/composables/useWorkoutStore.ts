import { reactive } from 'vue';

const exercisesData = {
  day1: {
    push: [
      { name: 'Bench Press (15kg)', details: '3 sets of 8-12 reps', completed: false },
      { name: 'Shoulder Press', details: '3 sets of 8-12 reps', completed: false },
      { name: 'Lateral Raise (5kg)', details: '3 sets of 12-15 reps', completed: false },
      { name: 'Dumbbell Lateral Raise', details: '3 sets of 12-15 reps', completed: false },
      { name: 'Push-ups', details: '3 sets to failure', completed: false },
      { name: 'Russian Push-ups', details: '3 sets to failure', completed: false },
      { name: 'Pike Push-ups', details: '3 sets of 5 reps', completed: false },
      { name: 'Hand Stand', details: '3 sets of 30-second holds', completed: false },
      { name: 'Egyptian Raise', details: '3 sets of 10-15 reps', completed: false },
      { name: 'Low Bar Transitions', details: '3 sets to failure', completed: false },
      { name: 'Straight Bar Dips', details: '3 sets to failure', completed: false },
      { name: 'Dips', details: '3 sets to failure', completed: false },
    ],
    pull: [
      { name: 'Pull-ups (15kg)', details: '3 sets of 8-12 reps', completed: false },
      { name: 'Bent-over Barbell Row', details: '3 sets of 8-12 reps', completed: false },
      { name: 'Seated Cable Row', details: '3 sets of 10-15 reps', completed: false },
      { name: 'Pelican Curl (rings)', details: '3 sets of 10-15 reps', completed: false },
      { name: 'Low Bar Negative Muscle Ups', details: '3 sets to failure', completed: false },
    ],
    legs: [
      { name: 'Barbell Back Squat', details: '3 sets of 8-12 reps', completed: false },
      { name: 'Romanian Deadlifts', details: '3 sets of 8-12 reps', completed: false },
    ],
  },
  day2: {
    push: [
      { name: 'Incline Bench Press', details: '3 sets of 8-12 reps', completed: false },
      { name: 'Overhead Press (barbell)', details: '3 sets of 8-12 reps', completed: false },
      { name: 'Dips', details: '3 sets to failure', completed: false },
      { name: 'Decline Push-ups with rings', details: '3 sets to failure', completed: false },
      { name: 'Push-ups', details: '3 sets to failure', completed: false },
      { name: 'Russian Push-ups', details: '3 sets to failure', completed: false },
      { name: 'Pike Push-ups', details: '3 sets of 5 reps', completed: false },
      { name: 'Lateral Raise (5kg)', details: '3 sets of 12-15 reps', completed: false },
      { name: 'Dumbbell Lateral Raise', details: '3 sets of 12-15 reps', completed: false },
      { name: 'Hand Stand', details: '3 sets of 30-second holds', completed: false },
      { name: 'Egyptian Raise', details: '3 sets of 10-15 reps', completed: false },
      { name: 'Low Bar Transitions', details: '3 sets to failure', completed: false },
      { name: 'Straight Bar Dips', details: '3 sets to failure', completed: false },
      { name: 'Low Bar Negative Muscle Ups', details: '3 sets to failure', completed: false },
    ],
    pull: [
      { name: 'Chin-ups (15kg)', details: '3 sets of 8-12 reps', completed: false },
      { name: 'Pull-ups (15kg)', details: '3 sets of 8-12 reps', completed: false },
      { name: 'Lat Pull Down', details: '3 sets of 10-15 reps', completed: false },
      {
        name: 'Single-arm Lat Pull Down',
        details: '3 sets of 10-15 reps per side',
        completed: false,
      },
      { name: 'Ring Curl', details: '3 sets of 10-15 reps', completed: false },
    ],
    legs: [{ name: 'Barbell Back Squat', details: '3 sets of 8-12 reps', completed: false }],
  },
};

const store = reactive({
  exercises: exercisesData,
  toggleCompletion(day: 'day1' | 'day2', category: string, exerciseIndex: number) {
    const exercise = store.exercises[day][category][exerciseIndex];
    exercise.completed = !exercise.completed;
  },
  resetDay(day: 'day1' | 'day2') {
    for (const category in store.exercises[day]) {
      store.exercises[day][category].forEach((exercise) => {
        exercise.completed = false;
      });
    }
  },
});

export const useWorkoutStore = () => store;
