<template>
  <Suspense>
    <pokemon-detail-fei :id="id"></pokemon-detail-fei>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import PokemonDetailFei from "@/components/PokemonDetailFei.vue";
export default {
  props: ["id"],

  components: {
    PokemonDetailFei,
  },
};
</script>
<style lang="scss" scoped>

</style>