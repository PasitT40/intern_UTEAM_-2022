<template>
  <v-container fluid class="tw-bg-[#252335]">
    <v-row no-gutters >
        <v-col cols="12" class="d-flex justify-center">
            <span class="tw-font-[800] tw-text-[40px] tw-text-white">TO DO LIST</span>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
            <span class="tw-font-[400] tw-text-[16px] tw-text-white">Create a list of tasks :</span>
        </v-col>
        <v-row no-gutters justify="center">
            <v-col cols="3"  class="tw-mt-8 tw-text-[24px] tw-md:tw-text-white">
                <v-text-field
                    v-model="text"
                    label="Add a new task"
                    variant="underlined" 
                    color="success"
                    class="tw-text-gray-400 "
                ></v-text-field>
            </v-col>
            <v-col cols="1" class="tw-mt-8 ">
                <v-btn @click="onSubmit" color="#69d37a" class="tw-px-16 tw-py-8 ">
                    <span class="tw-text-black tw-font-[700] tw-text-[24px] ">ADD</span>
                </v-btn>
            </v-col>
        </v-row>
    </v-row>
    <v-row no-gutters justify="center">
            <v-col v-for="each in arrayText" cols="12" class="tw-my-2">
                <v-row no-gutters class="d-flex justify-center align-center tw-border-0 tw-rounded-lg tw-bg-[#332f4c] tw-py-4">
                    <v-col cols="3">
                        <span
                            class="tw-text-white"
                            :class="{ 'tw-line-through': !isActive }"
                        >
                        {{ each }}</span
                        >
                    </v-col>
                    <v-col cols="1">
                        <v-btn color="#69d37a" @click="onDone">
                            <span class="tw-text-black tw-font-[700] tw-text-[14px] ">DONE</span>
                        </v-btn>
                    </v-col>
                    <v-col cols="1" class="tw-text-white">
                        <v-btn @click="onDelete(each)" color="red" >
                            <span class="tw-text-white tw-font-[700] tw-text-[14px] ">DELETE</span>
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