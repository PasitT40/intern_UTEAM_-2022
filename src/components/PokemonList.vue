<template>
  <v-row no-gutters class="pa-3">
    <v-col cols="4" v-for="(item, index) of pokemon" v-bind:key="item.name">
      <v-row no-gutters class="ma-2 tw-border-2 pa-3">
        <v-col cols="12">
          <v-img max-height="199px" width="100%" :src="item.image"></v-img>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          {{ index + 1 + "." + " " + item.name }}
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <span>Type: {{ item.types }}</span>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  async setup() {
    var callPokemon = [];
    for (let i = 1; i < 151; i++) {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res) => callPokemon.push(res.data));
    }
    const pokemon = callPokemon.map((each) => {
      return {
        name: each.name,
        image: each.sprites.front_default,
        types: each.types.map((each) => each.type.name).join(", "),
      };
    });
    return { pokemon };
  },
};
</script>

<style lang="scss" scoped>
</style>