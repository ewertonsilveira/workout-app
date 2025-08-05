import { createApp } from 'vue';
import './assets/styles/main.scss';
import App from './app.vue';
import router from './router';

createApp(App).use(router).mount('#app');
