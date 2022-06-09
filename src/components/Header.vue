<template>
  <v-container fluid class="pa-0 mb-5">
    <v-row no-gutters class="tw-bg-[red]">
      <v-col cols="2">
        <router-link to="/">
          <v-img
            :aspect-ratio="aspectRatio"
            :width="width"
            src="http://f.ptcdn.info/077/018/000/1398147040-2013071311-o.jpg"
            cover
          >
          </v-img>
        </router-link>
      </v-col>
      <v-col cols="10">
        <v-row no-gutters class="tw-h-full">
          <v-col cols="1" class="d-flex justify-center align-center">
            <router-link to="/">
              <v-btn variant="outlined"> Home </v-btn>
            </router-link>
          </v-col>
          <v-col cols="1" class="d-flex justify-center align-center">
            <router-link to="/about">about</router-link>
          </v-col>
          <v-col cols="2" class="d-flex justify-center align-center">
            <router-link to="/product">ผลงานทั้งหมด</router-link>
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

<style lang="scss" scoped>
</style>