import { createApp } from 'vue'
import { router } from './route/router'
import App from './App.vue'
import { store } from './store/index';
import './index.css'

createApp(App).use(router).use(store).mount('#app')