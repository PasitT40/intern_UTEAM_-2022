<template>
  <Suspense>
    <AbilityBeam :name="name"></AbilityBeam>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import AbilityBeam from "@/components/AbilityBeam.vue";
export default {
  props: ["name"],

  components: {
    AbilityBeam,
  },
};
</script>

<style lang="scss" scoped>
</style>

