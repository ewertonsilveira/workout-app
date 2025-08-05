import { createRouter, createWebHistory } from 'vue-router';
import RecordWorkout from '../views/RecordWorkout.vue';
import CalendarView from '../views/CalendarView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';

const routes = [
  { path: '/', component: RecordWorkout },
  { path: '/calendar', component: CalendarView },
  { path: '/login', component: LoginView },
  { path: '/signup', component: SignupView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
