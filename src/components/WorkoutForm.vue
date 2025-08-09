<template>
  <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ isEditing ? 'Edit Workout' : 'Add New Workout' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Workout Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />
      </div>
      <div class="mb-4">
        <label for="details" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Details</label>
        <textarea
          id="details"
          v-model="form.details"
          rows="3"
          class="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="primary-muscle" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Primary Muscle Group</label>
        <select
          id="primary-muscle"
          v-model.number="form.primary_muscle_group"
          class="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        >
          <option :value="null">Select Primary Muscle Group</option>
          <option v-for="group in mainMuscleGroups" :key="group.id" :value="group.id">{{ group.name }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="secondary-muscle" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Secondary Muscle Groups</label>
        <select
          id="secondary-muscle"
          v-model="form.secondary_muscle_groups"
          multiple
          class="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option v-for="group in allMuscleGroups" :key="group.id" :value="group.id">{{ group.name }}</option>
        </select>
      </div>
      <div class="flex justify-end space-x-2">
        <button
          type="button"
          @click="emit('close')"
          class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-4 py-2 bg-primary-dark text-white rounded-md hover:bg-primary-light"
        >
          {{ isEditing ? 'Update Workout' : 'Add Workout' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, watch } from 'vue';
import { useWorkoutStore, NewExercise } from '../composables/useWorkoutStore';

const props = defineProps<{
  workout?: NewExercise;
}>();

const emit = defineEmits<{ (e: 'close'): void; }>();

const store = useWorkoutStore();

const isEditing = computed(() => !!props.workout);

const form = ref<NewExercise>({
  id: 0,
  name: '',
  details: '',
  primary_muscle_group: null,
  secondary_muscle_groups: [],
});



watch(() => props.workout, (newVal) => {
  if (newVal) {
    form.value = {
      ...newVal,
      primary_muscle_group: Number(newVal.primary_muscle_group),
      secondary_muscle_groups: newVal.secondary_muscle_groups.map(Number),
    };
  } else {
    form.value = {
      id: 0,
      name: '',
      details: '',
      primary_muscle_group: null,
      secondary_muscle_groups: [],
    };
  }
  console.log('WorkoutForm: workout prop changed, new form value', form.value);
}, { immediate: true });

const allMuscleGroups = computed(() => store.muscleGroups);
const mainMuscleGroups = computed(() => store.muscleGroups.filter(g => g.parent === null));

console.log('WorkoutForm: Initial form value', form.value);
console.log('WorkoutForm: mainMuscleGroups', mainMuscleGroups.value);
console.log('WorkoutForm: form.primary_muscle_group', form.value.primary_muscle_group);

const handleSubmit = async () => {
  if (isEditing.value) {
    await store.updateWorkout(form.value);
  } else {
    // Assign a temporary ID for new workouts before Supabase assigns a real one
    form.value.id = Date.now(); 
    await store.addExercise(form.value);
  }
  emit('close');
};
</script>