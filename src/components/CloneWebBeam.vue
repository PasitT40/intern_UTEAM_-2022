
<template>
  <v-container fluid>
    <v-row>
        <v-col class="tw-bg-neutral-200" cols="12">
            <v-row class="tw-text-sm" no-gutters>
                <v-col class="tw-text-right" cols="10">ช่วยเหลือ</v-col>
                <v-col class="tw-text-right" cols="1">ค้นหาที่ตั้งสาขา</v-col>
                <v-col class="tw-text-right" cols="1">English | ไทย</v-col>
            </v-row>
        </v-col>
        <v-col class="tw-text-base tw-font-san tw-font-bold" cols="12">
            <v-row no-gutters>
                <v-col class="d-flex justify-start align-center" cols="1">
                    <img src="../assets/Uniqlo_logo_Japanese.png"/>
                </v-col>
                <v-col class="d-flex justify-center align-center" cols="1">WOMEN</v-col>
                <v-col class="d-flex justify-center align-center" cols="1">MEN</v-col>
                <v-col class="d-flex justify-center align-center" cols="1">KIDS</v-col>
                <v-col class="d-flex justify-center align-center" cols="1">BABY</v-col>
                <v-col cols="3"></v-col>
                <v-col class="d-flex justify-start align-center tw-font-normal" cols="2">
                    <form action="" class="search-bar tw-border border-rose-500">
                        <input type="text" v-model="search" placeholder="ค้นหาสินค้า" width="mx-auto"/>
                        <div>
                            <img src="../assets/search_uni.png" width="18"/>
                        </div>
                    </form>
                </v-col>
                <v-col class="d-flex justify-end align-center" cols="2">
                    
                        <v-col class="d-flex justify-end align-center" cols="4">
                            <img src="../assets/account_uni.png" width="24"/>
                        </v-col>
                        <v-col class="d-flex justify-end align-center" cols="4">
                            <img src="../assets/fav_uni.png" width="24"/>
                        </v-col>
                        <v-col class="d-flex justify-end align-center" cols="4">
                            <img src="../assets/shoppingCart_uni.png" width="24"/>
                        </v-col>
                    
                    
                    
                    <!-- <v-img src="/picture.png" alt=""
                        contain   
                        height="100px"
                        width="150px">
                    </v-img> -->
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12">
            <!-- <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
                <v-btn
                    :rounded="0"
                    color="primary"
                >
                    Tile Button
                </v-btn>
            </div> -->
            <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows="hover"
            >
                <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                >
                    <v-sheet
                        :color="colors[i]"
                        height="100%"
                    >
                        <div class="d-flex fill-height justify-center align-center">
                            <div class="text-h2">
                                {{ slide }} Slide
                            </div>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>

        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "CloneWebBeam",
    data () {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    },
};
</script>

<style>
    .search-bar {
        display: flex;
        align-items: center;
        padding: 10px;
        height: 35px;
        border-style: solid;
        border-color: rgb(164, 164, 164);
        width: fit-content;
    }
    .search-bar input{
        flex: 1;
        border: 0;
        outline: none;
        height: 100%;
        width: 150px;
        border-style: solid;
        border-color: rgb(0, 42, 141);
    }
</style>