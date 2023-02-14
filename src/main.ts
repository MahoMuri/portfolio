import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.scss";
import { router } from "./router";
import { inject } from "@vercel/analytics";
import "iconify-icon";

inject();
createApp(App).use(router).mount("#app");
