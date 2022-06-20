import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
// router/views/home.vue

// ..  = exit 1 step

import about from '@/views/About.vue';
import product from '@/views/product.vue';
import PortBeam from '@/components/PortBeam.vue';
import PortFei from '@/components/PortFey.vue';
import PortJN from '@/components/PortJunior.vue';
import CloneBeam from '@/components/CloneWebBeam.vue';
import CloneFei from '@/components/CloneFei.vue';
import CloneJN from '@/components/WebNior.vue';
import TodolistExample from '@/views/TodolistExample.vue';
import todolistJN from '@/views/todolistJN.vue';
import TodolistBeam from '@/views/todolistbeam.vue';
import todolistFei from '@/views/todolistFei.vue';
import pokeBeam from '@/views/pokeBeam.vue';
import pokeFei from '@/views/pokeFei.vue';
import pokeJN from '@/views/pokeJN.vue';
import pokeAe from '@/views/pokeAe.vue';
import pokemonDetailBeam from '@/views/pokemonDetailBeam.vue';
import PokemonDetailFei from '@/views/PokeDetailFei.vue';
import pokemonDetailAe from '@/views/pokemonDetailAe.vue';
import pokemonDetailJN from '@/views/pokemonDetailJN.vue';
import pokeAbilitiesFei from '@/views/pokeAbilitiesFei.vue';
import pokeAbilityJn from '@/views/pokeAbilityJn.vue';

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
  {
    path: '/PortBeam',
    name: 'PortBeam',
    component: PortBeam,
  },
  {
    path: '/PortFei',
    name: 'PortFei',
    component: PortFei,
  },
  {
    path: '/PortJN',
    name: 'PortJN',
    component: PortJN,
  },
  {
    path: '/CloneBeam',
    name: 'CloneBeam',
    component: CloneBeam,
  },
  {
    path: '/CloneFei',
    name: 'CloneFei',
    component: CloneFei,
  },
  {
    path: '/CloneJN',
    name: 'CloneJN',
    component: CloneJN,
  },
  {
    path: '/TodolistExample',
    name: 'TodolistExample',
    component: TodolistExample,
  },
  {
    path: '/todolistJN',
    name: 'todolistJN',
    component: todolistJN,
  },
  {
    path: '/todolistbeam',
    name: 'todolistBeam',
    component: TodolistBeam,
  },
  {
    path: '/todolistfei',
    name: 'todolistFei',
    component: todolistFei,
  },
  {
    path: '/pokejn',
    name: 'PokeJN',
    component: pokeJN,
  },
  {
    path: '/pokebeam',
    name: 'PokeBeam',
    component: pokeBeam,
  },
  {
    path: '/pokefei',
    name: 'pokeFei',
    component: pokeFei,
  },
  {
    path: '/pokeae',
    name: 'pokeAe',
    component: pokeAe,
  },
  {
    path: '/pokebeam/:id',
    name: 'pokemonDetailBeam',
    component: pokemonDetailBeam,
    props: true,
  },
  {
    path: '/pokeae/:id',
    name: 'pokemonDetailAe',
    component: pokemonDetailAe,
    props: true,
  },
  {
    path: '/pokefei/:id',
    name: 'PokemonDetailFei',
    component: PokemonDetailFei,
    props: true,
  },
  {
    path: '/pokejn/:id',
    name: 'pokemonDetailJN',
    component: pokemonDetailJN,
    props: true,
  },
  {
    path: '/pokefei/ability/:name',
    name: 'pokeAbilitiesFei',
    component: pokeAbilitiesFei,
    props: true,
  },
  {
    path: '/pokejn/ability/:name',
    name: 'pokeAbilityJn',
    component: pokeAbilityJn,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
