<template>
  <Suspense>
    <AbilitiesFei :name="name"></AbilitiesFei>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import AbilitiesFei from "@/components/AbilitiesFei.vue";
export default {
  props: ["name"],

  components: {
    AbilitiesFei,
  },
};
</script>
<style lang="scss" scoped>

</style>