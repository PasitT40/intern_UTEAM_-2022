<template>
  <v-app>
    <v-main class="tw-bg-slate-900">
      <Header></Header>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
