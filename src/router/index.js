import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
// router/views/home.vue

// ..  = exit 1 step

import about from '@/views/About.vue';
import PortFei from '@/components/PortFey.vue';
import CloneFei from '@/components/CloneFei.vue';
import todolistFei from '@/views/todolistFei.vue';
import pokeFei from '@/views/pokeFei.vue';
import PokemonDetailFei from '@/views/PokeDetailFei.vue';
import pokeAbilitiesFei from '@/views/pokeAbilitiesFei.vue';

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
    path: '/PortFei',
    name: 'PortFei',
    component: PortFei,
  },
  {
    path: '/CloneFei',
    name: 'CloneFei',
    component: CloneFei,
  },
  {
    path: '/todolistfei',
    name: 'todolistFei',
    component: todolistFei,
  },
  {
    path: '/pokefei',
    name: 'pokeFei',
    component: pokeFei,
  },
  {
    path: '/pokefei/:id',
    name: 'PokemonDetailFei',
    component: PokemonDetailFei,
    props: true,
  },
  {
    path: '/pokefei/ability/:name',
    name: 'pokeAbilitiesFei',
    component: pokeAbilitiesFei,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
