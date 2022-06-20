<template>
  <v-container>
    <v-row no-gutters class="ma-4">
          <v-col cols="3">
            <router-link
              :to="`/pokejn/${pokemon.id - 1}`"
              :key="$route.fullPath"
            >
              <span class="tw-text-[50px]">{{ "<" }}</span>
            </router-link>
          </v-col>
          <v-col cols="6" class="d-flex justify-center" >
            <span class="tw-font-[800] tw-text-[50px] tw-font-mono">{{ pokemon.name }} #{{ pokemon.id }}</span>
          </v-col>
          <v-col cols="3" class="d-flex justify-end">
            <router-link
              :to="`/pokejn/${pokemon.id + 1}`"
              :key="$route.fullPath"
            >
              <span class="tw-text-[50px]">{{ ">" }}</span>
            </router-link>
          </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="3" class="tw-bg-gray-100 tw-border-2 tw-rounded-lg">
        <v-img :src="pokemon.image" height="300" />
      </v-col>
      <v-col cols="7" class="ma-5 pa-4 tw-font-mono tw-text-[22px] tw-rounded-lg tw-bg-red-300">
        <v-row no-gutters>
          <v-col cols="5">
            <v-row no-gutters class="tw-font-[600] tw-text-white">Height</v-row>
            <v-row no-gutters class="tw-text-[18px]">{{pokemon.height}}</v-row>
          </v-col>
          <v-col cols="5">
            <v-row no-gutters class="tw-font-[600] tw-text-white">Weight</v-row>
            <v-row no-gutters class="tw-text-[18px]">{{pokemon.weight}}</v-row>
          </v-col>
          
        </v-row>
        <v-row no-gutters>
          <v-col cols="">
            <v-row no-gutters class="tw-font-[600] tw-text-white tw-font-mono">Abilities</v-row>
            <span
              v-for="(item, index) in pokemon.ability" v-bind:key="item.id">
                  <router-link :to="`/pokejn/ability/${pokemon.ability[index]}`">
                    <v-btn
                    class="ma-1"
                    variant="outlined" 
                    rounded="pill" 
                    size="small"
                    color="black" >{{ pokemon.ability[index] }}
                    </v-btn>
                  </router-link>
                </span>
          </v-col>  
        </v-row>

         <v-row no-gutters>
          <v-col cols="">
            <v-row no-gutters class="tw-font-[600] tw-text-white">Items</v-row>
            <v-row no-gutters class="tw-text-[18px]">{{ pokemon.item }}</v-row>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="5" class="mt-4">
        <p no-gutters class="ma-2 tw-font-mono tw-font-[600] tw-text-[22px]">Types</p>
        <span class="pa-1 tw-text-[18px] tw-bg-slate-300 tw-rounded-full">{{pokemon.type[0]}}</span>
        <span class="ma-3 pa-1 tw-text-[18px] tw-bg-pink-300 tw-rounded-full">{{pokemon.type[1]}}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

const pokemon = ref({});
const props = defineProps(["id"]);
console.log(props.id);

onBeforeRouteUpdate(async (to, from) => {
  console.log(to.params.id);
  console.log(from.params.id);
  callPokemon(to.params.id);
});

async function callPokemon(importId) {
  console.log(importId, "importId");
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${importId ? importId : props.id}`)
    .then((res) => {
      console.log("res.data = ", res.data);
      pokemon.value = {
      name: res.data.name,
      image: res.data.sprites.front_default,
      type: res.data.types.map((each) => each.type.name),
      weight: res.data.weight,
      height: res.data.height,
      id: res.data.id,
      item: res.data.held_items.map((each) => each.item.name).join(" ,"),
      ability: res.data.abilities.map((each) => each.ability.name),
      };
      console.log("Do it");
    })
    .catch((err) => {
      console.log(err);
    });
}
await callPokemon();


  //.get(`https://pokeapi.co/docs/v2#abilities/${props.id}`)
</script>


<style lang="scss" scoped>
</style>