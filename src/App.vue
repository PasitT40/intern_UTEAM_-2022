<template>
  <v-app>
    <v-main>
      <PortBeam />
      <!-- <PortJunior /> -->
      <!-- <PortFey /> -->
    </v-main>
  </v-app>
</template>

<script>
import PortBeam from "./components/PortBeam.vue";
import PortJunior from "./components/PortJunior.vue";
import PortFey from "./components/PortFey.vue";

export default {
  name: "App",

  components: {
    PortBeam,
    PortJunior,
    PortFey,
  },

  data: () => ({
    //
  }),
};
</script>
