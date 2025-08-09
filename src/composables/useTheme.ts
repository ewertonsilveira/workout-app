import { ref, watch, computed, readonly } from 'vue';

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

export function useTheme() {
  return {
    theme: readonly(theme),
    isDarkMode: readonly(isDarkMode),
    toggleTheme,
  };
}
