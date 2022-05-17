import { createApp, Vue } from 'vue'
import App from './App.vue'
import store from './store'
import AOS from "aos";
import "aos/dist/aos.css";
import router from './router'
import firebase from 'firebase/app';
import 'vue-router-tab/dist/lib/vue-router-tab.css'


const firebaseConfig = {
    apiKey: "AIzaSyCnLfk9qlDpVWjtK_pVNpNj6km7E6j1ZE8",
    authDomain: "vue-auth-42124.firebaseapp.com",
    projectId: "vue-auth-42124",
    storageBucket: "vue-auth-42124.appspot.com",
    messagingSenderId: "189513337516",
    appId: "1:189513337516:web:bf4a54a00a3d80318aad09",
    measurementId: "G-QJRBPC7CMZ"
  };

firebase.initializeApp(firebaseConfig)

const app = createApp(App)
app.AOS = new AOS.init({ disable: "phone", once: true });
app.use(AOS)
app.use(store)
app.use(router)
app.mount('#app')