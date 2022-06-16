<template>
    <v-container fluid>
        <v-row 
            no-gutters 
            class="
                 
                tw-font-mono  
                tw-bg-stone-100 
                tw-rounded-lg
                pa-10
                ma-10 "
        >
            <v-col cols="12" >
                <v-row no-gutters class=" mb-10">
                    <v-col 
                        cols="12" 
                        class="
                            d-flex 
                            justify-center 
                            tw-capitalize
                            tw-text-4xl
                            mb-6"
                    >
                        {{pokemonAbi.name}}
                    </v-col>
                    <v-col 
                        cols="12" 
                        class="
                            d-flex 
                            justify-center
                            tw-text-xl
                            "        
                    >
                        <span 
                            v-for="(item, index) in pokemonAbi.language" 
                            v-bind:key="item.index"  
                        >
                            <span 
                                v-if="item == 'en' "
                                class="
                                    tw-align-middle
                                    "
                            >
                                {{pokemonAbi.effect[index]}} 
                            </span>  
                        </span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row 
                    no-gutters 
                    class="" 
                    align="center"
                > <v-divider class="mx-10 my-4"></v-divider>
                    <v-col 
                        cols="12" 
                        class="
                            d-flex 
                            justify-center 
                            my-6
                            tw-text-3xl"
                    >
                    
                    Pokemon
                    </v-col>
                    <v-col 
                        cols="12" 
                        class="
                            d-flex 
                            justify-center 
                            tw-text-xl
                            
                        "
                    >
                        <v-row>
                            <v-chip
                                class="mt-2 ml-2"
                                size="x-large"
                                color="gray"
                                v-for="(item, index) in pokemonAbi.pokemon"
                                v-bind:key="item.name"
                            >
                                {{ pokemonAbi.pokemon[index] }}
                            </v-chip>
                        </v-row>
                    </v-col>
                </v-row>
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
</style>