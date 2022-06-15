<template>
  <Suspense>
    <list-pokemon-jn></list-pokemon-jn>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import ListPokemonJn from "@/components/ListPokemonJn.vue";
export default {
  components: {
    ListPokemonJn,
  },
};
</script>
<style lang="scss" scoped>

</style>