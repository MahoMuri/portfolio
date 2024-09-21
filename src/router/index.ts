import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/home-page.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HomePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});
