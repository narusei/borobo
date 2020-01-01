import Vue from "vue";
import VueRouter from "vue-router";
import QuestListPage from "@/pages/QuestListPage.vue";
import QuestCreatePage from "@/pages/QuestCreatePage.vue";
import UserCreate from "@/pages/UserCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "QuestCreatePage",
    component: QuestCreatePage
  },
  {
    path: "/user-create",
    name: "UserCreatePage",
    component: UserCreate
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
