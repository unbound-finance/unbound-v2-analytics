import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import "uno.css";

import { Jazzicon } from "vue-connect-wallet";

const app = createApp(App);
app.component("jazzicon", Jazzicon);
app.use(createPinia()).mount("#app");
