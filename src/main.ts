import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import "uno.css";

import { Jazzicon } from "vue-connect-wallet";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

app.use(VueApexCharts);
app.use(createPinia());

app.component("jazzicon", Jazzicon);

app.mount("#app");
