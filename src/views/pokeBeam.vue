<template>
  <Suspense>
    <list-pokemon-beam></list-pokemon-beam>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import ListPokemonBeam from "@/components/ListPokemonBeam.vue";
export default {
  components: {
    ListPokemonBeam,
  },
};
</script>


<style lang="scss" scoped>
</style>

