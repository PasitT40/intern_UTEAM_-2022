<template>
  <v-container fluid>
    <v-row>
        <v-col cols="12">
            <router-link to="/pokebeam/:id"></router-link>
            <v-btn>Click detail</v-btn>
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
                // console.log(res.data.id);
                listPokemon.push(res.data)
        });
    }
    return listPokemon;
}




const pokemon = await callPokemon();

const sortPokemon = pokemon.map((each) => {
  return {
    name: each.data.name,
    id: each.data.id,
    ability: res.data.abilities.map((each) => each.ability.name),
    weight: res.data.weight,
    height: res.data.height,
    image: res.data.sprites.front_default,
    type: res.data.types.map((each) => each.type.name),
  };
});

console.log(pokemon)

// await axios
//   .get("https://pokeapi.co/api/v2/pokemon/1")
//   .then((res) => {
//     console.log("res.data = ", res.data);
//     pokemon = {
//       name: res.data.name,
//       image: res.data.sprites.front_default,
//       type: res.data.types.map((each) => each.type.name).join(", "),
//       ability: res.data.abilities.map((each) => each.ability.name).join(", "),
//       height: res.data.height,
//       weight: res.data.weight,
//       id: res.data.id,
//     //   stat: res.data.stats.map((each) => each.stat.name).join(", "),
//     //   base: res.data.stats.map((each) => each.base_stat).join(", "),
//     };
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(pokemon)

</script>

<style lang="scss" scoped>
</style>