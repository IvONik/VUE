import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.scss'

import store from './store'

createApp(App).use(store).mount('#app')
