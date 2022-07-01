<template>
  <v-container fluid class="pa-0">
    <v-app-bar 
      absolute
      
      color="indigo darken-2"
      dark
      inverted-scroll
      
      scroll-target="#scrolling-techniques-8"
      
    >
      <v-row
        no-gutters
       
      >
        <v-col cols="10">
          <v-row no-gutters class="tw-h-full tw-text-white">
            <v-col cols="1" class="tw-pt-5 d-flex justify-center align-center">
              <router-link to="/">
                <v-img
                  :aspect-ratio="aspectRatio"
                  :width="100"
                  src="https://cdn.discordapp.com/attachments/983216589891596318/984307349688819723/pngwing.com_1.png"
                >
                </v-img>
              </router-link>
            </v-col>
            <v-col
              cols="1"
              class="
                tw-px-4
                d-flex
                justify-center
                align-center
                tw-border-b-2 tw-border-transparent
                hover:tw-border-b-2 hover:tw-border-rose-200
              "
            >
              <router-link to="/">Home</router-link>
            </v-col>
            <v-col
              cols="1"
              class="
                d-flex
                justify-center
                align-center
                tw-border-b-2 tw-border-transparent
                hover:tw-border-b-2 hover:tw-border-rose-200
              "
            >
              <router-link to="/About">About</router-link>
            </v-col>
            <v-col
              cols="2"
              class="
                d-flex
                justify-center
                align-center
                tw-border-b-2 tw-border-transparent
                hover:tw-border-b-2 hover:tw-border-rose-200
              "
            >
              <router-link to="/Product">All Product</router-link>
            </v-col>
            <v-col
              cols="1"
              class="
                d-flex
                justify-center
                align-center
                tw-border-b-2 tw-border-transparent
                hover:tw-border-b-2 hover:tw-border-rose-200
              "
            >
              <router-link to="/pokeBeam">To Do Lists</router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    width: 150,
    aspectRatio: 16 / 9,
  }),
};
</script>
<style lang="scss" scoped>
  .nevSc{
    background-color: transparent;
    display: flex;
    align-items: center;
    transition: all .2s ease-in-out;
    &.onScroll {
      box-shadow: 0 0 10px #aaa;
      background-color: rgb(255, 14, 14);
  }
  }
</style>
