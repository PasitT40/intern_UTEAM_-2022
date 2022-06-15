<template>
  <v-container
    fluid
    class="tw-bg-[url('src/assets/bg_pokemon.png')] full-img tw-h-full"
  >
    <v-row no-gutters>
      <v-col
        cols="12"
        class="d-flex justify-center tw-text-3xl tw-font-semibold tw-capitalize"
      >
        <span class="tw-text-black">
          {{ pokemon.name }}
        </span>
        <span class="tw-text-gray-500 tw-font-normal tw-pl-4">
          #{{ pokemon.id }}
        </span>
      </v-col>
      <v-col cols="6" class="tw-mt-8">
        <div
          class="
            tw-border-0
            tw-rounded-lg
            tw-shadow-lg
            tw-border-violet-400
            tw-shadow-violet-500/50
            tw-bg-purple-100
          "
        >
          <v-img :src="pokemon.image" width="800" height="300"></v-img>
        </div>
      </v-col>
      <v-col cols="6" class="tw-mt-9 tw-bg-violet-50 tw-rounded-r-3xl">
        <v-row>
          <v-col cols="5" class="tw-ml-12 tw-mt-8">
            <v-row class="tw-text-cyan-500 tw-text-xl">
              <span class="tw-mb-3"> Height </span>
            </v-row>
            <v-row class="tw-mt-10">
              <span class="tw-pl-3">
                {{ pokemon.height }}
              </span>
            </v-row>
          </v-col>

          <v-col cols="3" class="tw-mt-8 tw-mb-5">
            <v-row class="tw-text-cyan-500 tw-text-xl">
              <span class="tw-mb-3"> Weight </span>
            </v-row>
            <v-row class="tw-mt-10">
              <span class="tw-pl-3">
                {{ pokemon.weight }}
              </span>
            </v-row>
          </v-col>
        </v-row>

        <v-col cols="6" class="tw-ml-9 tw-mt-8">
          <v-row class="tw-text-cyan-500 tw-text-xl">
            <span class="tw-mb-3"> Abilities </span>
          </v-row>
          <v-row class="tw-mt-10">
            <span class="tw-pl-3 tw-capitalize">
              {{ pokemon.ability }}
            </span>
          </v-row>
        </v-col>

        <v-col cols="6" class="tw-ml-9 tw-mt-11">
          <v-row class="tw-text-cyan-500 tw-text-xl">
            <span class="tw-mb-3"> Types </span>
          </v-row>
          <v-row class="tw-mt-10">
            <span class="tw-pl-3 tw-capitalize">
              {{ pokemon.type }}
            </span>
          </v-row>
        </v-col>
      </v-col>
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
      type: res.data.types.map((each) => each.type.name).join(", "),
      ability: res.data.abilities.map((each) => each.ability.name).join(", "),
      height: res.data.height,
      weight: res.data.weight,
      id: res.data.id,
      //   stat: res.data.stats.map((each) => each.stat.name).join(", "),
      //   base: res.data.stats.map((each) => each.base_stat).join(", "),
    };
  })
  .catch((err) => {
    console.log(err);
  });
console.log(pokemon);
</script>

<style lang="scss" scoped>
.full-img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>