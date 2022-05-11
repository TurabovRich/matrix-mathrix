import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import AOS from "aos";
import "aos/dist/aos.css";
import router from './router'
import 'vue-router-tab/dist/lib/vue-router-tab.css'

const app = createApp(App)
app.AOS = new AOS.init({ disable: "phone", once: true });
app.use(AOS)
app.use(store)
app.use(router)
app.mount('#app')