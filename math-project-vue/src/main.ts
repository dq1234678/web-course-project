import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

import i18nPlugin from "./plugins/i18n";

const app = createApp(App);
app.use(i18nPlugin);
app.mount("#app");