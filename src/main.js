import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'

import router from "./router/index"

createApp(App)
.use(router)
.mount('#app')
