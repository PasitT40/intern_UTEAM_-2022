<template>
  <v-container fluid class="pa-0 mb-5">
    <v-row no-gutters class="tw-bg-[red]">
      <v-col cols="10">
        <v-row no-gutters class="tw-h-full tw-text-white pa-3">
          <v-col cols="1" class="tw-pt-5 d-flex justify-center align-center">
            <router-link to="/">
              <v-img
                :aspect-ratio="aspectRatio"
                :width="100"
                src="https://icon-library.com/images/pokemon-icon-png/pokemon-icon-png-3.jpg"
              >
              </v-img>
            </router-link>
          </v-col>
          <v-col cols="1" class="tw-pt-5 d-flex justify-center align-center">
            <router-link to="/pokemon">
              <span>Pokemon</span>
            </router-link>
          </v-col>
          <v-col cols="1" class="d-flex justify-center align-center
                                  tw-border-b-2 tw-border-transparent 
                                  hover:tw-border-b-2 hover:tw-border-rose-200">
            <router-link to="/todolistJN">To Do Lists</router-link>
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
