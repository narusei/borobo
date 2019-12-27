import Vue from "vue";
import VueRouter from "vue-router";
import QuestSearchPage from "@/pages/QuestSearchPage.vue";
import QuestListPage from "@/pages/QuestListPage.vue";
import QuestCreatePage from "@/pages/QuestCreatePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/quest-search",
    name: "QuestSearchPage",
    component: QuestSearchPage
  },
  {
    path: "/quest-create",
    name: "QuestCreatePage",
    component: QuestCreatePage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
