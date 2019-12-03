import Vue from "vue";
import VueRouter from "vue-router";
import QuestSearchPage from "@/pages/QuestSearchPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "QuestSearchPage",
        component: QuestSearchPage
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;