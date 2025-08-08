import { ref, watch, computed } from 'vue';

export function useTheme() {
  const theme = ref(localStorage.getItem('theme') || 'dark');
  const isDarkMode = computed(() => theme.value === 'dark');

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  // Set initial theme on load
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark');
  }

  return {
    theme,
    isDarkMode,
    toggleTheme,
  };
}
