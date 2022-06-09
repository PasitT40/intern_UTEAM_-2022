<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" class="d-flex justify-center">
        <span class="tw-font-[800] tw-text-[35px]">To do list</span>
      </v-col>
      <v-row no-gutters justify="center">
        <v-col cols="6">
          <v-text-field
            v-model="text"
            label="add a new task"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn @click="onSubmit">
            <span>ADD</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-col v-for="each in arrayText" cols="12" class="pa-5">
        <v-row no-gutters>
          <v-col cols="5">
            <span
              class="d-flex justify-center"
              :class="{ 'tw-text-[red]': isActive }"
            >
              {{ each }}</span
            >
          </v-col>
          <v-col cols="1">
            <v-btn color="green" @click="onDone">Done</v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn @click="onDelete(each)" color="red">Delete</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const text = ref("");
    const arrayText = ref([]);
    const isActive = ref(true);

    function onSubmit() {
      arrayText.value.push(text.value);
      console.log(arrayText.value);
    }

    function onDelete(formText) {
      arrayText.value.forEach((each, index) => {
        if (each == formText) {
          arrayText.value.splice(index, 1);
        }
      });
    }

    function onDone() {
      isActive.value = !isActive.value;
    }

    return { text, isActive, arrayText, onSubmit, onDelete, onDone };
  },
};
</script>

<style lang="scss" scoped>
</style>