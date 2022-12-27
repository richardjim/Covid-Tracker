import { createRouter, createWebHistory } from "vue-router";

const routes = [
  //   { path: "/", name: Home, component: Home },
  //   { path: "/about", component: About },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
