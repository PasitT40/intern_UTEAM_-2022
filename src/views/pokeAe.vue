<template>
  <Suspense>
    <list-pokemon-ae></list-pokemon-ae>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import ListPokemonAe from "@/components/ListPokemonAe.vue";
export default {
  components: {
    ListPokemonAe,
  },
};
</script>

<style lang="scss" scoped>
</style>