<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" v-for="item in sortPokemon" v-bind:key="item.id">
        <router-link :to="`/pokeae/${item.id}`">
          <v-btn> Click detail {{ item.id }}</v-btn>
        </router-link>
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