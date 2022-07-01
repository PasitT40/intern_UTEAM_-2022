<template>
    <v-container fluid class="pa-0">
        <v-app-bar flat class="py-2">
            <v-row
                no-gutters 
                class="
                    tw-bg-white 
                    px-12 
                    align-center
                    "
            >
                <v-row no-gutters>
                    <v-col 
                        cols="3"
                        class="align-center"
                    > 
                        <router-link to="/">
                            <v-img
                                :aspect-ratio="aspectRatio"
                                :width="140"
                                src="https://cdn.shopify.com/s/files/1/0504/7032/2361/t/3/assets/Goodfit_Logo.svg?v=7570481558800241741607411611"
                            >
                            </v-img>
                        </router-link>
                    </v-col>
                    <v-col 
                        cols="9"
                        class="d-flex align-center"
                    >
                        <v-row 
                            no-gutters 
                            class="
                                u-h6 
                                d-flex justify-end mt-2 mr-n3  " 
                        >
                            <v-col 
                                cols="1" 
                                class="
                                d-flex justify-center mx-n1
                                text-uppercase"
                            >
                                puzzles
                            </v-col>
                            <v-col 
                                cols="1" 
                                class="
                                d-flex justify-center mx-n1
                                text-uppercase"
                            >
                                artists
                            </v-col>
                            <v-col 
                                cols="1" 
                                class="
                                d-flex justify-center mx-n1
                                text-uppercase"
                            >
                                about
                            </v-col>
                            <v-col 
                                cols="1" 
                                class="
                                d-flex justify-center mx-n1
                                text-uppercase"
                            >
                                cart (1)
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

            </v-row>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    width: 150,
    aspectRatio: 16 / 9,
  }),
};
</script>

<style lang="scss" scoped>
    .u-h6{
        font-family:  sans-serif;
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
        letter-spacing: 0.7px;
        transition: background-color 200ms linear;
    }
</style>