import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.scss";
import { router } from "./router";
import VueScrollTo from "vue-scrollto";
import "iconify-icon";

createApp(App).use(router).use(VueScrollTo).mount("#app");
