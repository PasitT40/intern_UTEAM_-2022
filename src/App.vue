<template>
  <v-app>
    <v-main>
      <!--<PortBeam />-->
      <!-- <PortFey /> -->
      <!-- <PortJunior /> -->
      <CloneFei/>
      <!-- <PortExample /> -->
    </v-main>
  </v-app>
</template>

<script>
import PortBeam from "./components/PortBeam.vue";
import PortJunior from "./components/PortJunior.vue";
import PortFey from "./components/PortFey.vue";
import PortExample from "./components/PortExample.vue";
import CloneFei from "./components/CloneFei.vue";

export default {
  name: "App",

  components: {
    PortBeam,
    PortJunior,
    PortFey,
    PortExample,
    CloneFei,
  },

  data: () => ({
    //
  }),
};
</script>
