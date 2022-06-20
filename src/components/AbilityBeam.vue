<template>
  <v-container
    fluid
    class="tw-bg-[url('src/assets/bg_pokemon.png')] full-img tw-h-full"
  >
    <v-row class="tw-backdrop-blur-sm tw-bg-white/30 tw-rounded-3xl tw-m-10">
        <v-col cols="12">
    <v-row no-gutters 
            class="d-flex
            justify-center
            align-center
            tw-text-3xl tw-font-semibold tw-capitalize">
        <span class="tw-capitalize ">
            {{ pokemonAbility.name }}
        </span>
    </v-row>
    <v-row no-gutters class="tw-pt-5">
        <span v-for="(item, index) in pokemonAbility.language"
            v-bind:key="item.index">
            <span v-if="item === 'en'">
                <v-row no-gutters class="d-flex justify-center align-center">
                    <span class="tw-text-xl d-flex justify-center align-center">
                        {{ pokemonAbility.effect[index] }}
                    </span>
                </v-row>
                <v-row no-gutters class="tw-pt-5 tw-text-lg">
                    Description in other languages :
                </v-row>
                <v-row no-gutters>
                    <span v-for="(item, index) in pokemonAbility.language"
                        v-bind:key="item.index">
                        <ul v-if="item !== 'en'" class="tw-list-disc  tw-mx-6">
                            <li>{{ pokemonAbility.language[index] }}: {{ pokemonAbility.effect[index] }} </li>
                        </ul>
                    </span>
                </v-row>
            </span>
        </span>
    </v-row>
    <v-row no-gutters class="tw-pt-5">
        <v-row>
            <v-col cols="12" class="tw-text-lg">
                Pokemon with this ability : 
            </v-col>
        </v-row>
        <v-row> 
            <v-col cols="12" class="tw-capitalize tw-mx-6 tw-pr-10">
                <span class="tw-pr-10">
                    {{ pokemonAbility.pokemon }}
                </span>
            </v-col>
        </v-row>
    </v-row>
    </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const props = defineProps(["name"]);
var pokemonAbility = ref({});

async function callPokemonAbility() {
    await axios
        .get(`https://pokeapi.co/api/v2/ability/${props.name}`)
        .then((res) => {
            console.log("res.data = ", res.data);
            pokemonAbility = {
                name: res.data.name,
                effect: res.data.effect_entries.map((each) => each.effect),
                language: res.data.effect_entries.map((each) => each.language.name),
                pokemon: res.data.pokemon.map((each) => each.pokemon.name).join(", "),
            };
            console.log("Do it");
        })
    .catch((err) => {
      console.log(err);
    });
}
await callPokemonAbility();
</script>

<style lang="scss" scoped>
.full-img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
