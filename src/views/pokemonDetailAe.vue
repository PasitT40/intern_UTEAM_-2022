<template>
  <Suspense>
    <pokemon-with-id-ae :id="id"></pokemon-with-id-ae>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import PokemonWithIdAe from "@/components/PokemonWithIdAe.vue";
export default {
  props: ["id"],

  components: {
    PokemonWithIdAe,
  },
};
</script>

<style lang="scss" scoped>
</style>