<template>
  <v-container
    fluid
    class="tw-bg-[url('src/assets/bg_pokemon.png')] full-img tw-h-full"
  >
    <v-row
      no-gutters
      class="tw-border-2 tw-border-zinc-500 tw-rounded-lg tw-bg-white pb-10"
    >
      <v-col cols="12" class="tw-rounded-lg">
        <!-- header -->
        <v-col
          cols="12"
          class="
            tw-bg-red-500 tw-rounded-t-lg tw-font-mono tw-text-3xl tw-capitalize
          "
        >
          <v-row no-gutters>
            <v-col cols="4">
              <v-row no-gutters align="center" class="justify-center mt-5">
                <router-link
                  :to="`/pokefei/${pokemon.id - 1}`"
                  :key="$route.fullPath"
                >
                  <v-btn variant="plain" size="small" color="grey" icon>
                    <v-img
                      :width="20"
                      src="https://cdn-icons-png.flaticon.com/512/860/860790.png"
                    >
                    </v-img>
                  </v-btn>
                </router-link>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row no-gutters class="d-flex justify-center">
                {{ pokemon.name }}
              </v-row>
              <v-row no-gutters class="d-flex justify-center tw-text-zinc-100">
                #{{ pokemon.id }}
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row no-gutters align="center" class="justify-center mt-5">
                <router-link
                  :to="`/pokefei/${pokemon.id + 1}`"
                  :key="$route.fullPath"
                >
                  <v-btn variant="plain" size="small" color="grey" icon>
                    <v-img
                      :width="20"
                      src="https://cdn-icons-png.flaticon.com/512/130/130884.png"
                    >
                    </v-img>
                  </v-btn>
                </router-link>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <!-- body -->
        <v-col cols="12" class="d-flex justify-center mt-6 mb-6">
          <v-row no-gutters class="flex tw-justify-around">
            <v-col
              cols="3"
              class="
                tw-bg-stone-100 tw-border-2 tw-border-zinc-300 tw-rounded-full
              "
            >
              <v-img :src="pokemon.image"></v-img>
            </v-col>
            <v-col
              cols="7"
              class="
                tw-bg-stone-100 tw-border-2 tw-border-zinc-300 tw-rounded-lg
                pt-6
                pb-6
                tw-font-mono tw-text-3xl tw-capitalize
                pl-10
                tw-leading-10
              "
            >
              <v-row no-gutters>
                <v-col cols="6">
                  <v-row no-gutters class="tw-text-zinc-400">weight</v-row>
                  <v-row no-gutters class="">{{ pokemon.weight }}</v-row>
                </v-col>
                <v-col cols="6">
                  <v-row no-gutters class="tw-text-zinc-400">height</v-row>
                  <v-row no-gutters class="">{{ pokemon.height }}</v-row>
                </v-col>
              </v-row>

              <v-row no-gutters class="pt-5 tw-text-zinc-400">abilities</v-row>
              <v-row no-gutters class="">
                <v-chip
                  class="mt-2 ml-2"
                  size="x-large"
                  color="gray"
                  v-for="(item, index) in pokemon.ability"
                  v-bind:key="item.id"
                >
                  {{ pokemon.ability[index] }}
                </v-chip>
              </v-row>

              <v-row no-gutters class="pt-5 tw-text-zinc-400">type</v-row>
              <v-row no-gutters class="">
                <v-chip
                  class="mt-2 ml-2"
                  size="x-large"
                  color="gray"
                  v-for="(item, index) in pokemon.type"
                  v-bind:key="item.id"
                >
                  {{ pokemon.type[index] }}
                </v-chip>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
var pokemon = {};
const props = defineProps(["id"]);
console.log(props);
async function callDetail(recId) {
  console.log(recId, "recId");
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${recId ? recId : props.id}`)
    .then((res) => {
      console.log("res.data = ", res.data);
      pokemon = {
        name: res.data.name,
        id: res.data.id,
        ability: res.data.abilities.map((each) => each.ability.name),
        weight: res.data.weight,
        height: res.data.height,
        image: res.data.sprites.front_default,
        type: res.data.types.map((each) => each.type.name),
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