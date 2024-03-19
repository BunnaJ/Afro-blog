import { createRouter, createWebHistory } from "vue-router";
import content from "../pages/ArticleDetails.vue";
import AboutPage from "../pages/AboutPage.vue";
import Home from "../pages/Home.vue";

const routes = [
  {
    path:'/',
    name: 'home',
    component: Home,
   },

   {
    path: '/AboutPage',
    name:'aboutPage',
    component:AboutPage,
   },

    {
        path:'/ArticleDetails/:id',
        name: 'ArticleDetails',
        component: content,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
