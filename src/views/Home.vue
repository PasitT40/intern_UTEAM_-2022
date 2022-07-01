<template>
  <Suspense>
    <list-pokemon-fei></list-pokemon-fei>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import ListPokemonFei from "@/components/gfHome.vue";
export default {
  components: {
    ListPokemonFei,
  },
};
</script>
<style lang="scss" scoped>

</style>