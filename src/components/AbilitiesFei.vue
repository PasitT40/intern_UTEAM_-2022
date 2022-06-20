<template>
    <v-container 
        fluid
        class="
            tw-bg-gradient-to-t 
            tw-from-[#fffcdc]
            tw-to-[#f1b8dc]
            tw-h-full"
    >
        <v-row no-gutters class="
                tw-font-mono  
                tw-bg-stone-100 
                tw-rounded-lg
                tw-border-2
                tw-border-zinc-500
                pa-10
                ma-10 ">
            <v-col cols="12">
                <v-row no-gutters class=" mb-10">
                    <v-col cols="12" class="
                            d-flex 
                            justify-center 
                            tw-capitalize
                            tw-text-4xl
                            my-6">
                        {{ pokemonAbi.name }}
                    </v-col>
                    <v-col cols="12" class="
                            d-flex 
                            justify-center
                            tw-text-xl
                            ">
                        <span v-for="(item, index) in pokemonAbi.language" v-bind:key="item.index">
                            <span v-if="item == 'en'" class="
                                    tw-align-middle
                                    ">
                                {{ pokemonAbi.effect[index] }}
                            </span>
                        </span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row no-gutters class="" align="center">
                    <v-divider class="mx-10 my-4"></v-divider>
                    <v-col cols="12" class="
                            d-flex 
                            justify-center 
                            my-6
                            tw-text-3xl">

                        Pokemon
                    </v-col>
                    <v-col cols="12" class="
                            d-flex 
                            justify-center 
                            tw-text-xl
                            
                        ">
                        <v-row>
                            <v-sheet 
                                class="mx-auto mt-4 mb-6 rounded-sheet"  
                                max-width="900"

                            >
                                <v-slide-group 
                                    class="pa-4"
                                    center-active 
                                    show-arrows
                                >
                                    <v-slide-group-item 
                                        v-for="item in sortPokemon" 
                                        :key="item"
                                        v-slot="{ isSelected, toggle }"
                                    >
                                        <router-link :to="`/pokefei/${item.id}`">
                                            <v-card 
                                                :color="isSelected ? 'grey' : 'grey-lighten-2'" 
                                                class="ma-4 rounded-card"
                                                height="120" 
                                                width="120" 
                                                @click="toggle"
                                            >
                                                <div 
                                                    class="d-flex fill-height align-center justify-center">
                                                    <v-scale-transition>
                                                        <v-img 
                                                            align="center" 
                                                            height="100" 
                                                            :src="item.image"
                                                        >
                                                        </v-img>
                                                    </v-scale-transition>
                                                </div>
                                            </v-card>
                                        </router-link>
                                    </v-slide-group-item>
                                </v-slide-group>
                            </v-sheet>
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
    var pokemonPic = ref({});

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
    }

    await callPokemonAbi();

    async function callPokemonPic() {
        let Pokemon = [];
        let num = Object.keys(pokemonAbi.pokemon).length;

        for (let i = 0; i < num; i++) {
            await axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemonAbi.pokemon[i]}`)
                .then((res) => {
                    Pokemon.push(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        return Pokemon;
    }

    const pokemon = await callPokemonPic();
    const sortPokemon = pokemon.map((each) => {
        return {
            name: each.name,
            id: each.id,
            image: each.sprites.front_default,
        };
    });
    console.log("Sort", sortPokemon);
</script>


<style lang="scss" scoped>
    .rounded-card{
    border-radius: 100px;
    // border: 2px solid rgb(242, 51, 51);
}
    .rounded-sheet{
    border-radius: 50px;
    border: 1px solid rgb(68, 68, 68);
}
    
</style>