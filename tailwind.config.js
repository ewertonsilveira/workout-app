module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-light': '#FFF8E1', // Light cream background
        'background-dark': '#2C2C2C', // Dark background
        'primary-light': '#FFD180', // Light orange
        'primary-dark': '#FFAB40', // Darker orange
        'accent-yellow': '#FFEB3B',
        'text-light': '#424242', // Dark gray text for light mode
        'text-dark': '#E0E0E0', // Light gray text for dark mode
        'card-light': '#FFFFFF',
        'card-dark': '#424242',
        'border-light': '#E0E0E0',
        'border-dark': '#555555',
      },
    },
  },
  plugins: [],
};
