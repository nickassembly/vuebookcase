import { createRouter, createWebHashHistory } from "vue-router";
import Library from "../views/Library.vue";
import BookCase from "../views/BookCase.vue";

const routes = [
    { path: "/", component: BookCase },
    { path: "/add", component: Library },
];

const router =  createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;