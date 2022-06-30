import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/log-in",
      component: () => import("../views/LogIn.vue"),
    },
    {
      path: "/feed",
      component: () => import("../views/Feed.vue"),
    },
  ],
});

export default router;
