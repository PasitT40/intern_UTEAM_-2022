<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">{{ pokemon.name }}</v-col>
      <v-col cols="12">
        <v-img :src="pokemon.image"></v-img>
      </v-col>
      <v-col cols="12">{{ pokemon.type }}</v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";
var pokemon = {};

await axios
  .get("https://pokeapi.co/api/v2/pokemon/1")
  .then((res) => {
    console.log("res.data = ", res.data);
    pokemon = {
      name: res.data.name,
      image: res.data.sprites.front_default,
      type: res.data.types.map((each) => each.type.name).join(" ,"),
    };
  })
  .catch((err) => {
    console.log(err);
  });
console.log(pokemon);
</script>

<style lang="scss" scoped>
</style>