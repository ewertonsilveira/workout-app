import { reactive, watch } from 'vue';

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
  completed: boolean;
}

type ExerciseCategory = 'push' | 'pull' | 'legs';
type WorkoutDay = 'day1' | 'day2';

type WorkoutData = {
  [key in WorkoutDay]: {
    [key in ExerciseCategory]: Exercise[];
  };
};

const defaultExercises: WorkoutData = {
  day1: {
    push: [
      { name: 'Bench Press', sets: 3, reps: 10, weight: 15, completed: false },
      { name: 'Shoulder Press', sets: 3, reps: 10, weight: 0, completed: false },
      { name: 'Lateral Raise', sets: 3, reps: 15, weight: 5, completed: false },
      { name: 'Dumbbell Lateral Raise', sets: 3, reps: 15, weight: 0, completed: false },
      { name: 'Push-ups', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Russian Push-ups', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Pike Push-ups', sets: 3, reps: 5, weight: 0, completed: false },
      { name: 'Hand Stand', sets: 3, reps: 1, weight: 0, completed: false },
      { name: 'Egyptian Raise', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Low Bar Transitions', sets: 3, reps: 10, weight: 0, completed: false },
      { name: 'Straight Bar Dips', sets: 3, reps: 10, weight: 0, completed: false },
      { name: 'Dips', sets: 3, reps: 12, weight: 0, completed: false },
    ],
    pull: [
      { name: 'Pull-ups', sets: 3, reps: 10, weight: 15, completed: false },
      { name: 'Bent-over Barbell Row', sets: 3, reps: 10, weight: 0, completed: false },
      { name: 'Seated Cable Row', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Pelican Curl (rings)', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Low Bar Negative Muscle Ups', sets: 3, reps: 10, weight: 0, completed: false },
    ],
    legs: [
      { name: 'Barbell Back Squat', sets: 3, reps: 10, weight: 0, completed: false },
      { name: 'Romanian Deadlifts', sets: 3, reps: 10, weight: 0, completed: false },
    ],
  },
  day2: {
    push: [
      { name: 'Incline Bench Press', sets: 3, reps: 10, weight: 0, completed: false },
      { name: 'Overhead Press (barbell)', sets: 3, reps: 10, weight: 0, completed: false },
      { name: 'Dips', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Decline Push-ups with rings', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Push-ups', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Russian Push-ups', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Pike Push-ups', sets: 3, reps: 5, weight: 0, completed: false },
      { name: 'Lateral Raise', sets: 3, reps: 15, weight: 5, completed: false },
      { name: 'Dumbbell Lateral Raise', sets: 3, reps: 15, weight: 0, completed: false },
      { name: 'Hand Stand', sets: 3, reps: 1, weight: 0, completed: false },
      { name: 'Egyptian Raise', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Low Bar Transitions', sets: 3, reps: 10, weight: 0, completed: false },
      { name: 'Straight Bar Dips', sets: 3, reps: 10, weight: 0, completed: false },
      { name: 'Low Bar Negative Muscle Ups', sets: 3, reps: 10, weight: 0, completed: false },
    ],
    pull: [
      { name: 'Chin-ups', sets: 3, reps: 10, weight: 15, completed: false },
      { name: 'Pull-ups', sets: 3, reps: 10, weight: 15, completed: false },
      { name: 'Lat Pull Down', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Single-arm Lat Pull Down', sets: 3, reps: 12, weight: 0, completed: false },
      { name: 'Ring Curl', sets: 3, reps: 12, weight: 0, completed: false },
    ],
    legs: [{ name: 'Barbell Back Squat', sets: 3, reps: 10, weight: 0, completed: false }],
  },
};

const savedExercises = localStorage.getItem('workout-data');
const exercisesData: WorkoutData = savedExercises ? JSON.parse(savedExercises) : defaultExercises;

const store = reactive({
  exercises: exercisesData,
  toggleCompletion(day: WorkoutDay, category: ExerciseCategory, exerciseIndex: number) {
    const exercise = store.exercises[day][category][exerciseIndex];
    exercise.completed = !exercise.completed;
  },
  updateExercise(
    day: WorkoutDay,
    category: ExerciseCategory,
    exerciseIndex: number,
    payload: { field: 'sets' | 'reps' | 'weight'; value: number }
  ) {
    const exercise = store.exercises[day][category][exerciseIndex];
    exercise[payload.field] = payload.value;
  },
  resetDay(day: WorkoutDay) {
    for (const category in store.exercises[day]) {
      const cat = category as ExerciseCategory;
      store.exercises[day][cat].forEach((exercise: Exercise, index: number) => {
        const defaultExercise = defaultExercises[day][cat][index];
        exercise.completed = false;
        exercise.sets = defaultExercise.sets;
        exercise.reps = defaultExercise.reps;
        exercise.weight = defaultExercise.weight;
      });
    }
  },
});

watch(
  () => store.exercises,
  (newExercises) => {
    localStorage.setItem('workout-data', JSON.stringify(newExercises));
  },
  { deep: true }
);

export const useWorkoutStore = () => store;
