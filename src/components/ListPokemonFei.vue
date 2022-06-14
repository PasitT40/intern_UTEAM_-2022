<template>
  <v-container fluid>
    <v-row no-gutters class="tw-border-2  tw-rounded-lg">
      <v-col cols="12" class="tw-rounded-lg">
        <!-- header -->
        <v-col cols="12" class="tw-bg-red-500 tw-rounded-t-lg tw-font-mono tw-text-3xl tw-capitalize">
          <v-row no-gutters>
            <v-col cols="4">
              <v-row no-gutters align="center" class="justify-center mt-5 ">
                <v-btn variant="plain" size="small" color="grey" icon>
                  <v-img :width="20" src="https://cdn-icons-png.flaticon.com/512/860/860790.png">
                  </v-img>
                </v-btn>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row no-gutters class="d-flex justify-center">
                {{ pokemon.name }}
              </v-row>
              <v-row no-gutters class="d-flex justify-center tw-text-zinc-100 ">
                #{{ pokemon.id }}
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row no-gutters align="center" class="justify-center mt-5">
                <v-btn variant="plain" size="small" color="grey" icon>
                  <v-img :width="20" src="https://cdn-icons-png.flaticon.com/512/130/130884.png">
                  </v-img>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <!-- body -->
        <v-col cols="12" class="d-flex justify-center mt-6 mb-6">
          <v-row no-gutters class="flex tw-justify-around ">
            <v-col cols="3" class="tw-bg-stone-100 tw-border-2 tw-border-zinc-300 tw-rounded-full ">
              <v-img :src="pokemon.image"></v-img>
            </v-col>
            <v-col cols="7" class="tw-bg-stone-100 tw-border-2 tw-border-zinc-300 tw-rounded-lg pt-3 pb-3
            tw-font-mono tw-text-lg tw-capitalize pl-10 tw-leading-6">
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
                <v-chip class="mt-2" size="small" color="gray">
                  {{ pokemon.ability }}
                </v-chip>
              </v-row>

              <v-row no-gutters class="pt-5 tw-text-zinc-400">type</v-row>
              <v-row no-gutters class="">
                <v-chip class="mt-2" size="small" color="gray">
                  {{ pokemon.type[0] }}
                </v-chip>
                <v-chip class="mt-2 ml-2" size="small" color="gray">
                  {{ pokemon.type[1] }}
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
var pokemon = {};
const abilities = [];

await axios
  .get("https://pokeapi.co/api/v2/pokemon/546")
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
  })
console.log(pokemon);
</script>

<style lang="scss" scoped>
</style>