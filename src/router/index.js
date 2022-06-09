import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
// router/views/home.vue

// ..  = exit 1 step

import about from '@/views/About.vue';
import product from '@/views/product.vue';

// root(src)/views/about

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/product',
    name: 'product',
    component: product,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
