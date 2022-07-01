<template>
  <v-app>
    <v-main class="tw-bg-[#F3EFE9]">
      <Header></Header>
      <router-view />
      <footer></footer>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/navbar.vue";
import footer from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    footer,
  },

  data: () => ({
    //
  }),
};
</script>
