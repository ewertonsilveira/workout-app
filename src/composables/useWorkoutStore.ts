import { reactive, watch, computed, ref } from 'vue';
import { supabase } from '../supabase'; // Import supabase client

// OLD DATA STRUCTURES
export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
  completed: boolean;
}

export type ExerciseCategory = 'push' | 'pull' | 'legs';
export type WorkoutDay = string;

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

// NEW DATA STRUCTURES
export interface MuscleGroup {
  id: number;
  name: string;
  parent: number | null;
}

export interface NewExercise {
  id: number;
  primary_muscle_group: number;
  secondary_muscle_groups: number[];
  name: string;
  details: string;
  completed?: boolean; // Optional for tracking state
}

const muscleGroups: MuscleGroup[] = [
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

const muscleGroupMap = new Map(muscleGroups.map((group) => [group.id, group]));

const allWorkouts = ref<NewExercise[]>([]); // Changed to ref

const savedSettings = localStorage.getItem('workout-settings');
const defaultSettings = savedSettings ? JSON.parse(savedSettings) : { sets: 3, reps: 10, weight: 10 };

const savedExercises = localStorage.getItem('workout-data');
const exercisesData: WorkoutData = savedExercises ? JSON.parse(savedExercises) : defaultExercises;

const store = reactive({
  // OLD STATE
  exercises: exercisesData,

  // NEW STATE
  muscleGroups,
  allWorkouts,
  defaultSets: defaultSettings.sets,
  defaultReps: defaultSettings.reps,
  defaultWeight: defaultSettings.weight,

  // OLD ACTIONS
  toggleCompletion(day: WorkoutDay, category: ExerciseCategory, exerciseIndex: number) {
    console.log('toggleCompletion called with:', { day, category, exerciseIndex });
    const exercise = store.exercises[day][category][exerciseIndex];
    const updatedExercise = { ...exercise, completed: !exercise.completed };
    const newCategoryExercises = [...store.exercises[day][category]];
    newCategoryExercises[exerciseIndex] = updatedExercise;
    store.exercises[day][category] = newCategoryExercises;
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

  // NEW GETTERS
  getMuscleGroupNameById(id: number) {
    return muscleGroupMap.get(id)?.name || 'Unknown';
  },

  getExercisesByCategory: computed(() => (day: WorkoutDay) => {
    const categorized: { [key: string]: Exercise[] } = {
      push: [],
      pull: [],
      legs: [],
    };
    for (const category in store.exercises[day]) {
      categorized[category] = store.exercises[day][category as ExerciseCategory];
    };
    return categorized;
  }),

  // NEW ACTIONS
  setDefaultSettings(sets: number, reps: number, weight: number) {
    store.defaultSets = sets;
    store.defaultReps = reps;
    store.defaultWeight = weight;
    localStorage.setItem('workout-settings', JSON.stringify({ sets, reps, weight }));
  },
  async fetchWorkouts() {
    const { data, error } = await supabase.from('exercise_definitions').select('*');
    if (error) {
      console.error('Error fetching workouts:', error);
    } else {
      store.allWorkouts.value = data || [];
    }
  },
  async addExercise(exercise: NewExercise) {
    const { data, error } = await supabase.from('exercise_definitions').insert([exercise]).select();
    if (error) {
      console.error('Error adding workout:', error);
    } else if (data) {
      store.allWorkouts.value.push(data[0]);
    }
  },
  async updateWorkout(exercise: NewExercise) {
    const { data, error } = await supabase.from('exercise_definitions').update(exercise).eq('id', exercise.id).select();
    if (error) {
      console.error('Error updating workout:', error);
    } else if (data) {
      const index = store.allWorkouts.value.findIndex(w => w.id === exercise.id);
      if (index !== -1) {
        store.allWorkouts.value[index] = data[0];
      }
    }
  },
  async deleteWorkout(id: number) {
    const { error } = await supabase.from('exercise_definitions').delete().eq('id', id);
    if (error) {
      console.error('Error deleting workout:', error);
    } else {
      store.allWorkouts.value = store.allWorkouts.value.filter(w => w.id !== id);
    }
  }
});

// Initial fetch of workouts
store.fetchWorkouts();

watch(
  () => store.exercises,
  (newExercises) => {
    localStorage.setItem('workout-data', JSON.stringify(newExercises));
  },
  { deep: true }
);

export const useWorkoutStore = () => store;
