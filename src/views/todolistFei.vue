<template>
    <v-container fluid>
        <v-row no-gutters>
            <!-- Header -->
            <v-col cols="12" class="justify-center">
                <v-row class="d-flex justify-center tw-font-[800] tw-text-[35px] tw-uppercase"> To Do List</v-row>
                <v-row class="d-flex justify-center tw-font-[400] tw-text-[14px] mt-2">Create a list of tasks :</v-row>
            </v-col>

            <!-- input -->
            <v-row no-gutters justify="center" class="mt-6 pt-8">
                <v-col cols="6">
                    <v-text-field 
                        v-model="text" 
                        color="success" 
                        label="add a new task" 
                        variant="underlined">
                    </v-text-field>
                </v-col>
                <v-col cols="1">
                    <v-btn @click="onSubmit" color="success">
                        <span>ADD</span>
                    </v-btn>
                </v-col>
            </v-row>
            <!-- show data -->
            <v-col v-for="item in arrayText" cols="12" class="pa-2">
                <v-row no-gutters class="d-flex justify-center">
                    <v-col cols="8" class="d-flex justify-center tw-bg-[#e7e5e4] tw-rounded">
                        <v-col cols="7">
                            <span 
                                class="d-flex justify-center pt-1" 
                                :class="{ 'tw-text-[red] tw-line-through': isActive }">
                                {{ item }}
                            </span>
                        </v-col>
                        <v-col cols="2">
                            <v-btn @click="onDone(item)" color="success">Done</v-btn>
                        </v-col>
                        <v-col cols="2">
                            <v-btn @click="onDelete(item)" color="red">
                                <SPAN class="tw-text-white ">Delete</SPAN>
                            </v-btn>
                        </v-col>
                    </v-col>
                </v-row>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { ref } from "vue"
export default {
    setup() {
        const text = ref("");
        const arrayText = ref([]);
        const isActive = ref(false);

        function onSubmit() {
            console.log(arrayText.value);
            arrayText.value.push(text.value);
        }

        function onDelete(formText) {
            console.log(formText);
            arrayText.value.forEach((item, index) => {
                if (item == formText) {
                    arrayText.value.splice(index, 1);
                }
            });
        }

        function onDone() {
            isActive.value = !isActive.value;
        }
        return { text, isActive, arrayText, onSubmit, onDelete, onDone };
    }
}
</script>

<style lang="scss" scoped>
</style>