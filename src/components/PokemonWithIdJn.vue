<template>
  <v-container>
    <v-row no-gutters justify="center" class="ma-3">
        <span class="tw-font-[800] tw-text-[50px] tw-font-mono ">{{pokemon.name}} #{{pokemon.id}}</span>
    </v-row>

    <v-row no-gutters> 
      <v-col cols="3" class="tw-bg-gray-100 tw-border-2 tw-rounded-lg " >
          <v-img :src="pokemon.image" height="300"/>
      </v-col>
      <v-col cols="7" class=" ma-5 pa-4 tw-font-mono tw-font-medium tw-text-[22px] tw-rounded-lg tw-bg-red-300" >
        <v-row no-gutters>
          <v-col cols="5">
            <v-row no-gutters class="tw-text-white">Height</v-row>
            <v-row no-gutters class="tw-text-[18px]">{{ pokemon.height }}</v-row>
          </v-col>
          <v-col cols="5">
             <v-row no-gutters class="tw-text-white">Weight</v-row>
              <v-row no-gutters class="tw-text-[18px]">{{ pokemon.weight }}</v-row>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="">
            <v-row no-gutters class="tw-text-white">Items</v-row>
            <v-row no-gutters class="tw-text-[18px]">{{ pokemon.item}}</v-row>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="">
            <v-row no-gutters class="tw-text-white">Abilities</v-row>
            <v-row no-gutters class="tw-text-[18px]">{{ pokemon.ability}}</v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="5" class="mt-4">
            <p no-gutters class="ma-2 tw-font-mono tw-font-medium tw-text-[22px]">Types</p>
            <span class="pa-1 tw-text-[18px] tw-bg-slate-300  tw-rounded-full" >{{ pokemon.type[0] }}</span>
            <span class=" ma-3 pa-1 tw-text-[18px] tw-bg-pink-300 tw-rounded-full" >{{ pokemon.type[1] }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";

var pokemon = {};

const props = defineProps(["id"])
console.log(props.id);

await axios
  .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
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
</script>

<style lang="scss" scoped>
</style>