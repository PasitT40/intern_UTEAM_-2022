<template>
  <Suspense>
    <ability-jn :name="name"></ability-jn>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import AbilityJn from "@/components/AbilityJn.vue";
export default {
  props: ["name"],

  components: {
    AbilityJn,
  },
};
</script>
<style lang="scss" scoped>

</style>