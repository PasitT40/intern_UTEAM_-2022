<template>
  <v-container fluid class="pa-0 mb-5">
    <v-row
      no-gutters
      class="tw-h-14 tw-bg-gradient-to-r tw-from-purple-500 tw-to-pink-500"
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
          <v-col cols="1" class="tw-px-4 d-flex justify-center align-center 
                                  tw-border-b-2 tw-border-transparent 
                                  hover:tw-border-b-2 hover:tw-border-rose-200">
            <router-link to="/">Home</router-link>
          </v-col>
          <v-col cols="1" class="d-flex justify-center align-center
                                  tw-border-b-2 tw-border-transparent 
                                  hover:tw-border-b-2 hover:tw-border-rose-200">
            <router-link to="/About">About</router-link>
          </v-col>
          <v-col cols="2" class="d-flex justify-center align-center 
                                  tw-border-b-2 tw-border-transparent 
                                  hover:tw-border-b-2 hover:tw-border-rose-200">
            <router-link to="/Product">All Product</router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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

<style lang="scss" scoped></style>
