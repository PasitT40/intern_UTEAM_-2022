<template>
  <div>This is Pokemon</div>
  <Suspense>
    <pokemon-charcter />
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import PokemonCharcter from "../components/PokemonList.vue";
export default {
  components: { PokemonCharcter },
};
</script>

<style lang="scss" scoped>
</style>