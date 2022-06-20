<template>
  <v-container>
    <v-row no-gutters class="ma-4">
          <v-col cols="12" class="d-flex justify-center" >
            <span class="tw-font-[800] tw-text-[50px] tw-font-mono">{{pokemonAbi.name}}</span>
          </v-col>
    </v-row>
    <v-row no-gutters class="tw-font-mono  tw-bg-transparent tw-border-4 tw-rounded-lg pa-10 ma-10 ">
        <v-col cols="12" >
            <span v-for="(item, index) in pokemonAbi.language" v-bind:key="item.index"  >
                <span v-if= "item == 'en'" class="tw-align-middle" >{{pokemonAbi.effect[index]}} </span>  
            </span>
        </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const props = defineProps(["name"]);
console.log(props);
var pokemonAbi = ref({});

async function callPokemonAbi() {
    await axios
      .get(`https://pokeapi.co/api/v2/ability/${props.name}`)
      .then((res) => {
        console.log("res.data = ", res.data);
        pokemonAbi = {
            name: res.data.name,
            id: res.data.id,
            effect: res.data.effect_entries.map((each) => each.effect),
            language: res.data.effect_entries.map((each) => each.language.name),
            pokemon: res.data.pokemon.map((each) => each.pokemon.name),
        };
      })
      .catch((err) => {
      console.log(err);
    });
  console.log("Props Name",props.name);
  console.log(pokemonAbi.pokemon);

}

await callPokemonAbi();

</script>


<style lang="scss" scoped>
.button:hover {
  background: rgb(255, 195, 135);
  color: rgb(0, 0, 0);

}
</style>