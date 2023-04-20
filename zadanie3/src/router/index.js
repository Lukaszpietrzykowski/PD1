import MainPage from "../views/MainPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{ path: "/", component: MainPage }];

const router = createRouter({
  history: createWebHashHistory("/NAZWAREPO/"),
  routes,
});

export default router;