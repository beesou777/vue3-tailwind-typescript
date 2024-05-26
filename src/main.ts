import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/route'
createApp(App).use(router).use(createPinia()).mount('#app')
