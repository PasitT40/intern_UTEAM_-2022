<template>
  <v-container fluid>
    <v-row>
        <v-col cols="4" v-for="item in sortPokemon" v-bind:key="item.id" align="center" 
        class="pa-8" >
        <v-col class="tw-rounded-3xl tw-border-double tw-border-4 tw-border-red-500" >
           <router-link :to=" `/pokejn/${item.id}`">
            <v-img :src="item.image" height="300"/>
            <v-btn rounded="pill" color="yellow">{{item.name}} #{{item.id}}</v-btn>
            </router-link>
        </v-col>
        </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";
// callPokemon = async () => {
async function callPokemon() {
    let listPokemon = [];
    for (let index = 1; index <= 150; index++) {
        await axios
            .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then((res)=>{
                //console.log(res.data.id);
                listPokemon.push(res.data)
        });
    }
    return listPokemon;
}
const pokemon = await callPokemon();

const sortPokemon = pokemon.map((each) => {
  return {
    name: each.name,
    image: each.sprites.front_default,
    type: each.types.map((each) => each.type.name),
    weight: each.weight,
    height: each.height,
    id: each.id,
    item: each.held_items.map((each) => each.item.name).join(" ,"),
    ability: each.abilities.map((each) => each.ability.name),
  };
});
console.log(sortPokemon);
/*
await axios
  .get("https://pokeapi.co/api/v2/pokemon/39")
  .then((res) => {
    console.log("res.data = ", res.data);
    pokemon = {
      name: res.data.name,
      image: res.data.sprites.front_default,
      type: res.data.types.map((each) => each.type.name),
      weight: res.data.weight,
      height: res.data.height,
      id: res.data.id,
      item: res.data.held_items.map((each) => each.item.name).join(" ,"),
      ability: res.data.abilities.map((each) => each.ability.name),
    };
  })
  .catch((err) => {
    console.log(err);
  });
console.log(pokemon);
*/
</script>

<style lang="scss" scoped>
</style>