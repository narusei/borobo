import Vue from "vue";
import VueRouter from "vue-router";
import QuestDetailPage from "@/pages/QuestDetailPage";
import QuestCreatePage from "@/pages/QuestCreatePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/quest-create",
    name: "QuestCreatePage",
    component: QuestCreatePage
  },
  {
    path: "/quest-detail/:questId",
    name: "QuestDetailPage",
    component: QuestDetailPage,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
