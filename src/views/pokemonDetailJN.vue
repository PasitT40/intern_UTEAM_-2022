<template>
  <Suspense>
    <pokemon-with-id-jn :id="id"></pokemon-with-id-jn>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import PokemonWithIdJn from "@/components/PokemonWithIdJn.vue";
export default {
    props: ["id"],

  components: {
    PokemonWithIdJn,
  },
};
</script>
<style lang="scss" scoped>

</style>