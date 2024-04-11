import { createRouter, createWebHistory } from "vue-router";
import content from "../pages/ArticleDetails.vue";
import Home from "../pages/Home.vue";

const routes = [
  {
    path:'/',
    name: 'home',
    component: Home,
   },

    {
        path:'/ArticleDetails/:id',
        name: 'ArticleDetails',
        component: content,
        props: true
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
