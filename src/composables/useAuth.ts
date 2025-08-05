import { ref, onMounted } from 'vue';
import { supabase } from '../supabase';
import { useRouter } from 'vue-router';
import type { User } from '@supabase/supabase-js';

const user = ref<User | null>(null);

export function useAuth() {
  const router = useRouter();

  const fetchUser = async () => {
    const { data } = await supabase.auth.getUser();
    user.value = data.user;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    user.value = null;
    router.push('/login');
  };

  onMounted(() => {
    fetchUser();
    supabase.auth.onAuthStateChange((_, session) => {
      user.value = session?.user ?? null;
      if (!user.value) {
        router.push('/login');
      }
    });
  });

  return {
    user,
    signOut,
  };
}
