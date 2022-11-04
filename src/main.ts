import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import "uno.css";

createApp(App).use(createPinia()).mount("#app");
