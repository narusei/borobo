import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "@/pages/auth/SignUpPage.vue";
import QuestListPage from "@/pages/QuestListPage.vue";
import QuestCreatePage from "@/pages/QuestCreatePage.vue";
import UserCreate from "@/pages/UserCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/quest-list",
    name: "QuestListPage",
    component: QuestListPage
  },
  {
    path: "/sign-up",
    name: "SignUpPage",
    component: SignUpPage
  },
  {
    path: "/quest-create",
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
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
