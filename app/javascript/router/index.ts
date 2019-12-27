import Vue from "vue";
import VueRouter from "vue-router";
import QuestListPage from "@/pages/QuestListPage.vue";
import QuestSearchPage from "@/pages/QuestSearchPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "QuestListPage",
    component: QuestListPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
