import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import VeeValidatePlugin from './includes/validation'
import router from './router'

import './assets/base.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')
