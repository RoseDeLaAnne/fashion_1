import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeView from "@/views/main/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/new",
        name: "new",
        component: () =>
            import("@/views/main/NewView.vue"),
    },
    {
        path: "/shop",
        name: "shop",
        component: () =>
            import("@/views/main/ShopView.vue"),
    },
    {
        path: "/collections",
        name: "collections",
        component: () =>
            import("@/views/main/CollectionsView.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import("@/views/main/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
