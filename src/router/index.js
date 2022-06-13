import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
// router/views/home.vue

// ..  = exit 1 step

import Pokemon from '@/views/Pokemon.vue';
import PokemonWithID from '@/views/PokemonWithID.vue';

// root(src)/views/about

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: Pokemon,
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonWithID',
    component: PokemonWithID,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
