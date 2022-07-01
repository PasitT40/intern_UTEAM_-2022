<template>
<header>
<!-- <header :class="{ 'scrolled-nav': scrollPosition }"> -->
  <v-container fluid class="pa-0">
    <!-- tw-bg-[#f6f6ed] -->
    <v-row no-gutters class="tw-h-14  tw-px-12 tw-drop-shadow-sm">
      <v-col cols="12" >
        <v-row no-gutters class="tw-h-full tw-text-black">
          <v-col cols="3" 
            class="
              d-flex 
              justify-start 
              align-center 
              tw-text-4xl 
              tw-tracking-widest
              tw-font-medium
            "
          >
            <router-link to="/"> OCTAEVO </router-link>
          </v-col>

          <v-col cols="6"   class="d-flex justify-start align-center">
            <v-row no-gutters class="tw-px-10">
              <v-col cols="12" >
                <v-row no-gutters>
                  <!-- <v-col
                    cols="2"
                    class="
                      tw-px-4
                      d-flex
                      justify-center
                      align-center
                      tw-underline tw-decoration-[#f6f6ed]
                      hover:tw-underline-offset-[4px]
                      tw-decoration-[#000000]
                    "
                  > -->
                  <v-col cols="2"
                    class="
                      tw-px-4
                      d-flex
                      justify-center
                      align-center
                    "
                  >
                    <router-link to="/"> 
                      <div 
                        class="
                        tw-border-b-[1px]
                        tw-border-transparent
                        hover:tw-border-b-[1px]
                        hover:tw-border-black
                        "
                      >
                        New In 
                      </div>
                    </router-link>
                  </v-col>

                  <v-col cols="2" class="d-flex justify-center align-center">
                    <router-link to="/About">
                      <div 
                        class="
                        tw-border-b-[1px]
                        tw-border-transparent
                        hover:tw-border-b-[1px]
                        hover:tw-border-black
                        "
                      >
                        Workspace
                      </div>
                    </router-link>
                  </v-col>
                  <v-col cols="2" class="d-flex justify-center align-center">
                    <router-link to="/Product">
                      <div 
                        class="
                        tw-border-b-[1px]
                        tw-border-transparent
                        hover:tw-border-b-[1px]
                        hover:tw-border-black
                        "
                      >
                        Living
                      </div>
                    </router-link>
                  </v-col>
                  <v-col cols="2" class="d-flex justify-center align-center">
                    <router-link to="/pokebeam">
                      <div 
                        class="
                        tw-border-b-[1px]
                        tw-border-transparent
                        hover:tw-border-b-[1px]
                        hover:tw-border-black
                        "
                      >
                        Occations
                      </div>
                    </router-link>
                  </v-col>
                  <v-col cols="2" class="d-flex justify-center align-center">
                    <router-link to="/pokebeam">
                      <div 
                        class="
                        tw-border-b-[1px]
                        tw-border-transparent
                        hover:tw-border-b-[1px]
                        hover:tw-border-black
                        "
                      >
                        Our Story
                      </div>
                    </router-link>
                  </v-col>
                  <v-col cols="2" class="d-flex justify-center align-center">
                    <router-link to="/pokebeam">
                      <div 
                        class="
                        tw-border-b-[1px]
                        tw-border-transparent
                        hover:tw-border-b-[1px]
                        hover:tw-border-black
                        "
                      >
                        Journal
                      </div>                   
                    </router-link>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="3"  class="d-flex justify-start align-center">
            <v-row no-gutters class="tw-pl-10">
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="4" class="d-flex justify-end align-center">
                    <router-link to="/pokebeam">
                      <div 
                        class="
                        tw-border-b-[1px]
                        tw-border-transparent
                        hover:tw-border-b-[1px]
                        hover:tw-border-black
                        "
                      >
                        Wholesale
                      </div>
                    </router-link>
                  </v-col>
                  <v-col
                    cols="4"
                    class="
                      d-flex
                      justify-end
                      align-center
                    "
                  >
                    <router-link to="/pokebeam">
                      <div 
                        class="
                        tw-border-b-[1px]
                        tw-border-transparent
                        hover:tw-border-b-[1px]
                        hover:tw-border-black
                        "
                      >
                        Account
                      </div>
                    </router-link>
                  </v-col>
                  <v-col cols="4" class="d-flex justify-end align-center">
                    <router-link to="/pokebeam">
                      <!-- <img :src= "https://cdn-icons-png.flaticon.com/512/1656/1656850.png"> -->

                      <img src="../assets/search_uni.png" width="18" />
                    </router-link>
                    <router-link to="/pokebeam">
                      <!-- shopping bag -->
                      <div class="d-flex justify-end align-center tw-pl-2">
                        <v-img
                          :aspect-ratio="aspectRatio"
                          :width="40"
                          src="https://cdn-icons-png.flaticon.com/512/1656/1656850.png"
                        >
                        </v-img>
                      </div>
                    </router-link>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
  </v-container>
  </header>
</template>

<script>
export default {
  data: () => ({
    width: 150,
    aspectRatio: 16 / 9,
  }),
};

  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
</script>

<style lang="scss" scoped>
header {
  // position: fixed;
  // z-index: 100000;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ;
}
header.sticky {
  background: #f6f6ed;
  box-shadow: 0px 0.5px 3px rgb(210, 210, 210);
}
</style>
