import { createApp } from 'vue'
import { router } from './route/router'
import App from './App.vue'
import './index.css'

createApp(App).use(router).mount('#app')