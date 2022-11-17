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
      path: "/dbViewer",
      component: () => import("../views/DbViewer.vue"),
    },
    {
      path: "/inportForm",
      component: () => import("../views/InportForm.vue"),
    },
    {
      path: "/itemsParser",
      component: () => import("../views/ItemsParser.vue"),
    },
  ],
});

export default router;
