import { createRouter, createWebHistory } from 'vue-router';
import RecordWorkout from '../views/RecordWorkout.vue';
import CalendarView from '../views/CalendarView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import { supabase } from '../supabase';

const routes = [
  { path: '/', component: RecordWorkout, meta: { requiresAuth: true } },
  { path: '/calendar', component: CalendarView, meta: { requiresAuth: true } },
  { path: '/login', component: LoginView },
  { path: '/signup', component: SignupView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !session) {
    next('/login');
  } else {
    next();
  }
});

export default router;
