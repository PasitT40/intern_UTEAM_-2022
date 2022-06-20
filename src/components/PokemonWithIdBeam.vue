<template>
    <v-container fluid class="tw-bg-[url('src/assets/bg_pokemon.png')] full-img tw-h-full">
    <v-row no-gutters>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="6">
            <router-link
              :to="`/pokebeam/${pokemon.id - 1}`"
              :key="$route.fullPath"
            >
              <span>{{ "<" }}</span>
            </router-link>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <router-link
              :to="`/pokebeam/${pokemon.id + 1}`"
              :key="$route.fullPath"
            >
              <span>{{ ">" }}</span>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        class="
          d-flex
          justify-center
          align-center
          tw-text-4xl tw-font-semibold tw-capitalize
        "
      >
        <span class="tw-text-emerald-900">
          {{ pokemon.name }}
        </span>
        <span class="tw-text-gray-500 tw-font-normal tw-pl-4 tw-text-3xl">
          #{{ pokemon.id }}
        </span>
      </v-col>
      <v-col cols="6" class="tw-mt-8">
        <div
          class="
            tw-border-2
            tw-rounded-lg
            tw-shadow-lg
            tw-border-pink-700
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
                    <v-row class=" tw-text-cyan-500 tw-text-xl">
                        <span class=" tw-mb-3">
                            Weight 
                        </span>
                    </v-row>
                    <v-row class="tw-mt-10">
                        <span class=" tw-pl-3">
                            {{pokemon.weight}}
                        </span>
                    </v-row>
                </v-col>
            </v-row>

        <v-col cols="6" class="tw-ml-9 tw-mt-8">
          <v-row class="tw-text-cyan-500 tw-text-xl">
            <span class="tw-mb-3"> Abilities </span>
          </v-row>
          <v-row class="tw-mt-10">
            <span class="tw-pl-3 tw-capitalize"
                v-for="(item, index) in pokemon.ability"
                v-bind:key="item.id"
            >
                <router-link :to="`/pokebeam/ability/${pokemon.ability[index]}`">
                    <button
                        class="mt-2 tw-text-white tw-bg-teal-400 tw-rounded-full"
                    >
                      <span class="tw-mx-3 tw-my-1
                        d-flex
                        justify-center
                        align-center
                        tw-capitalize" >
                        {{ pokemon.ability[index] }}
                      </span>
                    </button>
                </router-link>
            </span>
          </v-row>

        </v-col>

            <v-col cols="6" class="tw-ml-9 tw-mt-11">
                <v-row class=" tw-text-cyan-500 tw-text-xl">
                    <span class=" tw-mb-3">
                        Types
                    </span>
                </v-row>
                <v-row class="tw-mt-10">
                    <span class=" tw-pl-3 tw-capitalize">
                        {{pokemon.type}}
                    </span>
                </v-row>
            </v-col>
        </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// import axios from "axios";
// import { ref } from "vue";
// import { onBeforeRouteUpdate } from "vue-router";

// var pokemon = ref({});
// // var pokemon = {};
// const props = defineProps(["id"]);
// console.log(props.id);

// onBeforeRouteUpdate(async (to, from) => {
//   console.log(to.params.id);
//   console.log(from.params.id);
//   callPokemon(to.params.id);
// });
// async function callPokemon(importId) {
//   console.log(importId, "importId");
//   await axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${importId ? importId : props.id}`)
//     .then((res) => {
//       console.log("res.data = ", res.data);
//       pokemon.value = {
//         name: res.data.name,
//         image: res.data.sprites.front_default,
//         type: res.data.types.map((each) => each.type.name).join(", "),
//         ability: res.data.abilities.map((each) => each.ability.name),
//         height: res.data.height,
//         weight: res.data.weight,
//         id: res.data.id,
//       };
//       console.log("Do it");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// await callPokemon();


import axios from "axios";
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

var pokemon = ref({});
const props = defineProps(["id"]);
console.log(props);

async function callDetail(recId) {
  console.log(recId, "recId");
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${recId ? recId : props.id}`)
    .then((res) => {
      console.log("res.data = ", res.data);
      pokemon.value = {
        name: res.data.name,
        id: res.data.id,
        ability: res.data.abilities.map((each) => each.ability.name),
        weight: res.data.weight,
        height: res.data.height,
        image: res.data.sprites.front_default,
        type: res.data.types.map((each) => each.type.name).join(", "),
      };
    })
    .catch((err) => {
      console.log(err);
    });
}

onBeforeRouteUpdate(async (to, from) => {
  // only fetch the user if the id changed as maybe only the query or the hash changed
  console.log(to.params.id);
  console.log(from.params.id);
  if (to.params.id != from.params.id) {
    await callDetail(to.params.id);
  }
});
await callDetail();
</script>



<style lang="scss" scoped>
    .full-img {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>