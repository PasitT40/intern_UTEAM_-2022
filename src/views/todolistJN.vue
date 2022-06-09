<template>
    <v-container fluid>
        <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-center">
                <span class="">To do List</span>
            </v-col >
            <v-col cols="6">
                <v-text-field
                v-model="text"
                label="add a new task"
                variant="underlined"
                ></v-text-field>
            </v-col>
            <v-row>
                <v-col>
                    <v-btn @click>
                        <span> ADD </span>
                     </v-btn>
                </v-col>

            </v-row>
                <v-col v-for="item in arrayText" key="item" cols= "12">
                    <v-row no-gutters>
                        <v-col cols="5">
                            <span class="d-flex justify-center" >  {{ each }} </span>
                        </v-col>
                    <v-col cols="1">
                        <v-btn color="green">Done</v-btn>
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
        setup(){
            const text = ref("");
            const arrayText = ref([""]);

            function onSubmit(){
                console.log(text.value);
                console.log(arrayText.value);
                arrayText.value.push(text);
            }

            function onDelete(fromText){
                arrayText.value.forEach((each, index) => {
                    var filter
                });
            }
            return {text,arrayText, onSubmit ,onDelete };
        },
    };
</script>

<style lang="scss" scoped>

</style>