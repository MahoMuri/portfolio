import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.scss";
import { router } from "./router";
import { inject } from "@vercel/analytics";
import VueScrollTo from "vue-scrollto";
import "iconify-icon";

inject();
createApp(App).use(router).use(VueScrollTo).mount("#app");
