import Vue from "vue";
import VueRouter from "vue-router";
import TopPage from "@/pages/TopPage.vue";
import SignUpPage from "@/pages/auth/SignUpPage.vue";
import SignInPage from "@/pages/auth/SignInPage.vue";
import QuestSearchPage from "@/pages/QuestSearchPage.vue";
import QuestListPage from "@/pages/QuestListPage.vue";
import QuestDetailPage from "@/pages/QuestDetailPage.vue";
import QuestCreatePage from "@/pages/QuestCreatePage.vue";
import UserCreatePage from "@/pages/UserCreatePage.vue";
import UserEditPage from "@/pages/UserEditPage.vue";
import UserPage from "@/pages/UserPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TopPage",
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
    path: "/quest-search",
    name: "QuestSearchPage",
    component: QuestSearchPage
  },
  {
    path: "/quest-create",
    name: "QuestCreatePage",
    component: QuestCreatePage
  },
  {
    path: "/user-create",
    name: "UserCreatePage",
    component: UserCreatePage
  },
  {
    path: "/user-edit",
    name: "UserEditPage",
    component: UserEditPage
  },
  {
    path: "/quest-detail/:id",
    name: "QuestDetailPage",
    component: QuestDetailPage,
    props: true
  },
  {
    path: "/user-page/:userId",
    name: "UserPage",
    component: UserPage,
    prop: true
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
