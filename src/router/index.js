import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ItemView from "../views/ItemView.vue";
import manage from "./manage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/item",
    name: "item",
    component: ItemView,
  },
  ...manage,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
