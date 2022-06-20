<template>
  <v-container fluid class="tw-bg-[url('src/assets/bg_pokemon.png')] full-img tw-h-full">
    <v-row no-gutters>
      <v-col
        cols="4"
        v-for="item in sortPokemon"
        v-bind:key="item.id"
        class="d-flex justify-center tw-my-10 align-center"
      >
        <router-link :to="`/pokebeam/${item.id}`">
          <div
            class="
              tw-shadow-lg
              tw-shadow-inner
              tw-shadow-sky-600/40
              tw-border-2
              tw-border-sky-900
              tw-transition
              tw-duration-500
              tw-ease-in-out
              tw-delay-50
              tw-bg-cyan-100
              hover:tw--translate-y-1 hover:tw-scale-110 hover:tw-duration-300
              tw-border-2 tw-rounded-xl
              justify-center
              align-center
              
            "
          >
            <v-row
              no-gutters
              class="
                tw-border-b-2
                tw-border-indigo-900
                tw-bg-cyan-50
                tw-rounded-t-lg
                tw-shadow-inner
              "
            >
                        <!-- <div class="tw-bg-white tw-rounded-xl"> -->
                            <v-img :src="item.image" width="210"></v-img>
                        <!-- </div> -->
                        
                    </v-row> 
                    <!-- <v-btn flat rounded="pill">
                        
                        {{ item.id }}
                        {{ item.name}}
                    </v-btn> -->
            <v-row
              no-gutters
              class="justify-center align-center tw-pt-2 tw-text-slate-500"
            >
              #{{ item.id }}
            </v-row>
            <v-row
              no-gutters
              class="
                justify-center
                align-center
                tw-pb-5
                tw-font-medium
                tw-text-2xl
                tw-capitalize
                tw-text-slate-700
              "
            >
              {{ item.name }}
            </v-row>
          </div>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";

// callPokemon = async () => {
async function callPokemon() {
    let listPokemon = [];
    for (let index = 1; index <= 150; index++) {
        await axios
            .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then((res)=>{
                // console.log(res.data.id);
                listPokemon.push(res.data)
        });
    }
    return listPokemon;
}

const pokemon = await callPokemon();
const sortPokemon = pokemon.map((each) => {
  return {
    name: each.name,
    image: each.sprites.front_default,
    type: each.types.map((each) => each.type.name).join(", "),
    ability: each.abilities.map((each) => each.ability.name),
    height: each.height,
    weight: each.weight,
    id: each.id,
  };
});

console.log(pokemon)

// await axios
//   .get("https://pokeapi.co/api/v2/pokemon/1")
//   .then((res) => {
//     console.log("res.data = ", res.data);
//     pokemon = {
//       name: res.data.name,
//       image: res.data.sprites.front_default,
//       type: res.data.types.map((each) => each.type.name).join(", "),
//       ability: res.data.abilities.map((each) => each.ability.name).join(", "),
//       height: res.data.height,
//       weight: res.data.weight,
//       id: res.data.id,
//     //   stat: res.data.stats.map((each) => each.stat.name).join(", "),
//     //   base: res.data.stats.map((each) => each.base_stat).join(", "),
//     };
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(pokemon)

</script>

<style lang="scss" scoped>
    .full-img {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>