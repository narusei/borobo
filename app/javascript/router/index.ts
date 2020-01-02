import Vue from "vue";
import VueRouter from "vue-router";
import TopPage from "@/pages/TopPage.vue";
import SignUpPage from "@/pages/auth/SignUpPage.vue";
import SignInPage from "@/pages/auth/SignInPage.vue";
import QuestListPage from "@/pages/QuestListPage.vue";
import QuestDetailPage from "@/pages/QuestDetailPage.vue";
import QuestCreatePage from "@/pages/QuestCreatePage.vue";
import UserCreate from "@/pages/UserCreate.vue";
import UserEditPage from "@/pages/UserEditPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/top",
    name: "Top",
    component: TopPage
  },
  {
    path: "/sign-up",
    name: "SignUpPage",
    component: SignUpPage
  },
  {
    path: "/sign-in",
    name: "SignInPage",
    component: SignInPage
  },
  {
    path: "/quest-list",
    name: "QuestListPage",
    component: QuestListPage
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
  },
  {
    path: "/user-edit",
    name: "UserEditPage",
    component: UserEditPage
  },
  {
    path: "/quest-detail/:questId",
    name: "QuestDetailPage",
    component: QuestDetailPage,
    props: true
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
