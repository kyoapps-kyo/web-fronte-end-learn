import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/index.vue";
import Destination from "@/pages/destination.vue";
import Personal from "@/pages/personal.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/destination",
      name: "Destination",
      component: Destination,
    },
    {
      path: "/personal",
      name: "Personal",
      component: Personal,
    },
  ],
});

export default router;
