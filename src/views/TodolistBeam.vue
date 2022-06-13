
<template>
<v-container fluid>
    <v-row no-gutters>
        <v-col cols="12" class="d-flex justify-center">
            <span class="tw-font-[800] tw-text-[35px]"></span>
        </v-col>
        <v-row>
            <v-col col="6">
                <v-text-field
                v-model="text"
                label="add a new task"
                variant="underlined"
                ></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-button>

                </v-button>
            </v-col>
        </v-row>
        <v-col cols="6">
            {{ text}}
            v-b
        </v-col>
    </v-row>
</v-container>
    
</template>

<script>
import { ref } from "vue"
export default {
    setup () {
        const text = ref("Variable Here");
        return { text };
    }
}
</script>

<style lang="scss" scoped>

</style>
