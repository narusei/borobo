import Vue from "vue";
import VueRouter from "vue-router";
import TopPage from "@/pages/TopPage.vue";
import SignUpPage from "@/pages/auth/SignUpPage.vue";
import SignInPage from "@/pages/auth/SignInPage.vue";
import QuestSearchPage from "@/pages/QuestSearchPage.vue";
import QuestListPage from "@/pages/QuestListPage.vue";
import QuestDetailPage from "@/pages/QuestDetailPage.vue";
import QuestCreatePage from "@/pages/QuestCreatePage.vue";
import QuestEditPage from "@/pages/QuestEditPage.vue";
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
    path: "/quest-detail/:questId",
    name: "QuestDetailPage",
    component: QuestDetailPage,
    props: true
  },
  {
    path: "/quest-create",
    name: "QuestCreatePage",
    component: QuestCreatePage
  },
  {
    path: "/quest-detail/:questId/edit",
    name: "QuestEditPage",
    component: QuestEditPage,
    props: true
  },
  {
    path: "/user-page/:userId",
    name: "UserPage",
    component: UserPage,
    props: true
  },
  {
    path: "/user-create",
    name: "UserCreatePage",
    component: UserCreatePage,
    props: true
  },
  {
    path: "/user-page/:userId/edit",
    name: "UserEditPage",
    component: UserEditPage,
    props: true
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  var token = localStorage.getItem("Token");
  if (
    from.name == "TopPage" ||
    from.name == "SignUpPage" ||
    from.name == "SignInPage"
  ) {
    next();
  } else {
    if (token) {
      next();
    } else {
      next({ name: "SignInPage" });
    }
  }
});

export default router;
