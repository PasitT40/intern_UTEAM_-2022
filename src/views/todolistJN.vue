<template>
  <v-container fluid>
    <v-row no-gutters>

      <v-col cols="12" class="d-flex justify-center ">
        <span class="tw-font-[800] tw-text-[50px] tw-text-white">TO DO LIST</span>
      </v-col>

       <v-col cols="12" class="d-flex justify-center">
        <span class="tw-font-[500] tw-text-[25px] tw-text-white">Create a list of tasks :</span>
      </v-col>

      <v-row no-gutters justify="center">
        <v-col cols="4" class="tw-text-slate-200 ">
          <v-text-field
            v-model="text"
            color ="success"
            label="Add a new task"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn color="green" @click="onSubmit">
            <span class="tw-font-[700] tw-text-[20px]">ADD</span>
          </v-btn>
        </v-col>
      </v-row>
      
    </v-row>
    <v-row no-gutters justify="center">
      <v-col v-for="each in arrayText" cols="7" class="pa-5 ma-2 tw-rounded-lg tw-bg-slate-700"  >
        <v-row no-gutters>
          <v-col cols="4">
            <span
              class="d-flex justify-center tw-text-white"
              :class="{ 'tw-line-through': isActive }"
            >
              {{ each }}</span
            >
          </v-col>
          <v-col cols="2">
            <v-btn color="green" @click="onDone">
                <span class="tw-font-[700] tw-text-[20px]">DONE</span>
            </v-btn>
          </v-col>

          <v-col cols="2">
            <v-btn @click="onDelete(each)" color="red">
                <span class="tw-font-[700] tw-text-[20px]">DELETE</span>
            </v-btn>
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