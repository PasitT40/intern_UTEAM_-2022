<template>
  <Suspense>
    <pokemon-with-id-beam :id="id"></pokemon-with-id-beam>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import PokemonWithIdBeam from "@/components/PokemonWithIdBeam.vue";
export default {
    props: ["id"],

    components: {
        PokemonWithIdBeam,
    },
};
</script>


<style lang="scss" scoped>
</style>

