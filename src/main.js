import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify()

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')
