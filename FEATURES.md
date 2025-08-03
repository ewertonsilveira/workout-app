# Features and Development History

This document outlines the features developed for the Ewerton Workout App, based on our collaboration and your requests.

### 1. Core Application

The initial request was to create a workout tracking application using **Vue.js** and **TypeScript**. The core functionality includes:

- A user-friendly interface to track workout days.

- Pre-defined workout plans for two days.

- The ability to check off sets and record reps and weight.

- A "Reset Day" button to clear all checked sets for a specific day.

- Data persistence using the browser's `localStorage` to save user progress.

### 2. Theming

You requested a more modern aesthetic, so a **light and dark theme** was implemented. This feature includes:

- A prominent toggle button (sun/moon emoji) in the header to switch themes.

- The theme preference is saved to `localStorage`, so the app remembers your last selection.

- All components were styled using `dark:` classes from Tailwind CSS to ensure a seamless transition.

### 3. Styling with SCSS

You requested the project to support **Sass (SCSS)** for styling. The project was updated to:

- Include the `sass` and `sass-loader` dependencies in `package.json`.

- Rename `src/style.css` to `src/style.scss`.

- Update the import statement in `src/main.ts` to reference the new SCSS file.

### 4. Project Delivery & Documentation

This section summarizes your requests related to receiving and documenting the project:

- **Repository & Deployment**: You asked for a zip file of the project and for it to be added to your GitHub repository. I provided a complete set of instructions to allow you to easily set up the project locally and push it to your own GitHub account.

- **Documentation**: Extra features will be added to `Features` folder, including file to summarize the requirement & features.

### Creation of Project File Structure

The final project file structure is as follows:
/ewerton-workout-app
├── src/
│ ├── components/
│ │ ├── ExerciseCategory.vue
│ │ ├── ExerciseItem.vue
│ │ └── WorkoutDay.vue
│ ├── main.ts
│ ├── style.scss
│ └── App.vue
├── .gitignore
├── .prettierrc.js
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── netlify.toml
└── eslint.config.js
