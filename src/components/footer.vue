<template>
    <v-container fluid class="pa-0">
        <v-col cols="12" class="tw-bg-white">
                    <v-row 
                        no-gutters
                        class="
                            d-flex justify-center align-center 
                            pa-10
                            tw-text-base
                            tw-font-bold
                            tw-underline tw-decoration-1 hover:tw-no-underline tw-underline-offset-4"
                    >
                        Back to top
                    </v-row>
                    <v-row 
                        no-gutters
                        class="tw-px-20 tw-border-y"
                    >
                        <v-col cols="6 tw-border-r py-6">
                            <v-row no-gutters class="my-10">
                                <v-col cols="4">
                                    <v-img
                                        width="180"
                                        cover
                                        src="https://cdn.shopify.com/s/files/1/0504/7032/2361/t/3/assets/Goodfit_Logo.svg?v=7570481558800241741607411611"
                                    >
                                    </v-img>
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col 
                                    cols="4" 
                                    class="
                                        tw-leading-loose
                                        tw-font-medium
                                        tw-text-xl
                                        tw-tracking-wide"
                                >
                                    <v-row no-gutters>Puzzles</v-row>
                                    <v-row no-gutters>Artists</v-row>
                                    <v-row no-gutters>About</v-row>
                                    <v-row no-gutters>Contect</v-row>
                                    <v-row no-gutters>Locations</v-row>
                                </v-col>
                                <v-col 
                                    cols="6"
                                    class="
                                        tw-leading-loose
                                        tw-font-medium
                                        tw-text-xl
                                        tw-tracking-wide"
                                >
                                    <v-row no-gutters>FAQ</v-row>
                                    <v-row no-gutters>Shipping & Returns</v-row>
                                    <v-row no-gutters>Privacy Policy</v-row>
                                    <v-row no-gutters>Terms & conditions</v-row>
                                    <v-row no-gutters>Instagram</v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col 
                            cols="6"
                            class="tw-tracking-wide my-10"
                        >
                            <v-row no-gutters class="pl-16 pt-16">
                                <v-col cols="12"
                                    class="
                                        richFont
                                        pb-5
                                        tw-font-bold
                                        tw-text-3xl"
                                    >
                                        Keep in touch
                                    </v-col>
                                <v-col cols="8">
                                    Get the latest scoop on new releases, 
                                    artist interviews, promotions and more by signing up for our newsletter.</v-col>
                                <v-col cols="8" class="richFont tw-text-2xl ">
                                    <v-text-field
                                        density="default"                                   
                                        placeholder="Enter your email address"
                                        variant="underlined"                     
                                        single-line
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="7">
                                    <v-btn
                                        block 
                                        size="x-large"
                                        :rounded="0"
                                        color="black"
                                        class="text-capitalize mt-n5"
                                    >
                                        Subscribe
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="6" class="pa-9 ml-10 richFont tw-font-extrabold">
                            <v-row no-gutters>
                                3275 Denargo St, Denver, CO 80216
                            </v-row>
                            <v-row no-gutters>hello@goodfit.us</v-row>
                            <v-row no-gutters>©Goodfit Goods LLC 2022</v-row>
                        </v-col>
                        <v-col cols="6"></v-col>
                    </v-row>
        </v-col>
    </v-container>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>