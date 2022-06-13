<template>
  <v-container></v-container>
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