import Vue from "vue";
import VueRouter from "vue-router";
import QuestListPage from "@/pages/QuestListPage.vue";
import SignUpPage from "@/pages/auth/SignUpPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "QuestListPage",
        component: QuestListPage
    },
    {
        path: "/sign-up",
        name: "SignUpPage",
        component: SignUpPage
    }
];

const router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;