<template>
  <div>This is Pokemon {{ id }}</div>
  <Suspense>
    <pokemon-id :pokeID="id"></pokemon-id>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import PokemonId from "@/components/PokemonId.vue";
export default {
  props: ["id"],
  components: { PokemonId },
};
</script>

<style lang="scss" scoped>
</style>