import Vue from "vue";
import VueRouter from "vue-router";
import QuestListPage from "@/pages/QuestListPage.vue";
import QuestCreatePage from "@/pages/QuestCreatePage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
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