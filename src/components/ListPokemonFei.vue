<template>
  <v-container 
    fluid 
    class="tw-bg-gradient-to-t tw-from-cyan-500 tw-to-blue-500] tw-h-full"
  >
    <v-row>
      <v-col cols="4" v-for="item in sortPokemon" v-bind:key="item.id">
        <v-card class="mx-auto" max-width="400">
          <v-img class="align-end text-white" height="200" :src="item.image">
          </v-img>
          <v-divider class="mx-4 my-4"></v-divider>
          <v-card-title class="tw-font-mono text-h5  align-center justify-center">
            {{ item.name }}
          </v-card-title>
          <v-card-subtitle class="align-center justify-center text-overline">
            #{{ item.id }}
          </v-card-subtitle>
          <router-link :to="`/pokefei/${item.id}`">
            <v-card-actions class="align-center justify-center">
              <v-btn color="red mb-4">
                more info
              </v-btn>
            </v-card-actions>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";

async function callPokemon() {
  let listPokemon = [];
  for (let index = 1; index <= 150; index++) {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((res) => {
        listPokemon.push(res.data);
      });
  }
  console.log(listPokemon);
  return listPokemon;
}

const pokemon = await callPokemon();
const sortPokemon = pokemon.map((each) => {
  return {
    name: each.name,
    id: each.id,
    ability: each.abilities.map((each) => each.ability.name),
    weight: each.weight,
    height: each.height,
    image: each.sprites.front_default,
    type: each.types.map((each) => each.type.name),
  };
});
console.log(sortPokemon);
</script>

<style lang="scss" scoped>
</style>