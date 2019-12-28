import Vue from "vue";
import VueRouter from "vue-router";
import QuestDetailPage from "@/pages/QuestDetailPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "QuestDetailPage",
    component: QuestDetailPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
