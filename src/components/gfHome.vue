<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters>

            <!-- <v-col cols="12"
                v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
            > -->
            <!-- <v-img
                        class="align-end text-white" 
                        cover
                        :src="item.src"
                    ></v-img> -->

            <v-col cols="12">
                <v-carousel cycle height="full" hide-delimiters :show-arrows="false">
                    <v-carousel-item 
                        v-for="(item,i) in items" 
                        :key="i" 
                        :src="item.src" 
                        class="d-flex align-end "
                    >
                        <v-row 
                            no-gutters 
                            class="
                                d-flex justify-center align-center 
                                tw-pb-24 pl-16
                                tw-text-white"
                            >
                            <v-col 
                                cols="12" 
                                class="
                                    d-flex align-end 
                                    ml-16 mb-1
                                    richFont tw-text-4xl"
                                >
                                    {{item.title}}
                                </v-col>
                            <v-col 
                                cols="12" 
                                class="d-flex 
                                    ml-16 
                                    align-center
                                    tw-text-base
                                    tw-font-bold
                                    tw-underline tw-decoration-1 hover:tw-no-underline 
                                    tw-underline-offset-4"
                            >
                                {{item.button}}
                            </v-col>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="12" class="">
                <v-row no-gutters>
                    <marquee class="marquee" startvisible>
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                        100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED. 100% RECYCLED. ECO-FRIENDLY INK. 10% DONATED.
                    </marquee>
                </v-row>
                <v-row no-gutters class="richTextLarge mx-16 d-flex justify-center">
                    <v-col cols="6">
                        The 1000 pieces of textiles, greenery and found objects come together to create a cozy
                        setting that will comfort you when you’re reminiscing about your latest trip.
                    </v-col>
                </v-row>
                <v-row no-gutters class="d-flex justify-center align-center mt-8 mb-8 ">
                    <v-col cols="1" class="mx-12">
                        <v-img :width="150" cover
                            src="https://cdn.shopify.com/s/files/1/0504/7032/2361/files/Design-Milk-Logo_300x.png?v=1628139905">
                        </v-img>
                    </v-col>
                    <v-col cols="1" class="mx-12">
                        <v-img :width="140" cover
                            src="https://cdn.shopify.com/s/files/1/0504/7032/2361/files/thingtesting_logo_300x.png?v=1638298149">
                        </v-img>
                    </v-col>
                    <v-col cols="1" class="mx-12">
                        <v-img :width="150" cover
                            src="https://cdn.shopify.com/s/files/1/0504/7032/2361/files/forbes_45540006-d839-4187-8134-7c06bf9122f3_300x.png?v=1622071596">
                        </v-img>
                    </v-col>
                    <v-col cols="1" class="mx-12">
                        <v-img :width="150" cover
                            src="https://cdn.shopify.com/s/files/1/0504/7032/2361/files/Elle_Quebec_300x.png?v=1619796560">
                        </v-img>
                    </v-col>
                    <v-col cols="1" class="mx-12">
                        <v-img :width="140" cover
                            src="https://cdn.shopify.com/s/files/1/0504/7032/2361/files/WWW_Logo_3bcf2bde-0bcd-4bb2-9295-3ab263be4eea_300x.png?v=1638298168">
                        </v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class=" my-10 px-10 justify-center align-center">
                <v-row no-gutters class="align-center d-flex justify-space-around py-16">
                    <v-col cols="5" class="">
                        <v-img cover
                            src="https://cdn.shopify.com/s/files/1/0504/7032/2361/files/001b_900x.png?v=1634596967">
                        </v-img>
                    </v-col>
                    <v-col cols="5" class=" ">
                        <v-row no-gutters class="
                            align-center
                            richHeading ">
                            Artwork worth a thousand pieces.
                        </v-row>
                        <v-row no-gutters class="
                            
                            align-center
                            richText">
                            Our collection of jigsaw puzzles showcases exclusive artwork from emerging talent and
                            internationally recognized artists. Whether you're an art collector, a design lover, or a
                            puzzle fanatic, we think we're a good fit.
                        </v-row>
                        <router-link to="/">
                            <v-row no-gutters class="
                                align-center
                                tw-font-bold
                                tw-underline tw-decoration-1 hover:tw-no-underline 
                                tw-underline-offset-4">
                                Shop now
                            </v-row>
                        </router-link>
                    </v-col>
                </v-row>
                <v-row no-gutters class="align-center d-flex justify-space-around py-16">
                    <v-col cols="5" class=" ">
                        <v-row no-gutters class="
                            align-center
                            richHeading ">
                            Refresh the jigsaw.
                        </v-row>
                        <v-row no-gutters class="
                            align-center
                            richText">
                            Our puzzles are made from 100% recycled materials, eco-friendly ink, and made in ethical
                            environments.
                        </v-row>
                        <v-row no-gutters class="
                            
                            align-center
                            richText">
                            We celebrate body-positivity and inclusivity, highlight crypto artists and oil painters, and
                            we're in the constant pursuit of unique artwork and puzzle experiences unlike any other
                            brand.
                        </v-row>
                        <v-row no-gutters class="
                            
                            align-center
                            richText">
                            All of our artists share in the profits while retaining ownership of their creations. We
                            also give back 10% of every purchase to a cause or charity they've chosen.
                        </v-row>
                        <router-link to="/">
                            <v-row no-gutters class="
                                align-center
                                tw-font-bold
                                tw-underline tw-decoration-1 hover:tw-no-underline 
                                tw-underline-offset-4">
                                Meet our artists
                            </v-row>
                        </router-link>
                    </v-col>
                    <v-col cols="5" class="">
                        <v-img class="align-end" cover
                            src="https://cdn.shopify.com/s/files/1/0504/7032/2361/files/003c_900x.png?v=1639761227">
                        </v-img>
                    </v-col>
                </v-row>

                <v-row no-gutters class="align-center d-flex justify-space-around py-16">
                    <v-col cols="5" class="">
                        <v-img class="align-end" cover
                            src="https://cdn.shopify.com/s/files/1/0504/7032/2361/files/004_900x.png?v=1639761253">
                        </v-img>
                    </v-col>
                    <v-col cols="5" class=" ">
                        <v-row no-gutters class="
                            align-center
                            richHeading ">
                            Sort it. Piece it. Frame it. Love it.
                        </v-row>
                        <v-row no-gutters class="
                            align-center
                            richText">
                            Our gallery-quality artwork is ready to hang and enjoy forever after you're done.
                        </v-row>
                        <v-row no-gutters class="
                            align-center
                            richText">
                            We're passionate about design and quality. You'll love the details of our high-quality
                            prints on 100% recycled cardboard.
                        </v-row>
                        <router-link to="/">
                            <v-row no-gutters class="
                                align-center
                                tw-font-bold
                                tw-underline tw-decoration-1 hover:tw-no-underline 
                                tw-underline-offset-4">
                                See our Instagram
                            </v-row>
                        </router-link>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="11" class="my-10">
                <v-row no-gutters class="py-16">
                    <v-carousel cycle height="auto" cover hide-delimiters :show-arrows="false">
                        <v-carousel-item 
                            v-for="(item,i) in collection" 
                            :key="i" 
                            height="650" 
                            cover 
                            :src="item.hover"
                        >
                                <v-row no-gutters class="ml-16 d-flex justify-end ">
                                    <v-col cols="6" class="d-flex justify-end">
                                        <v-col cols="6" no-gutters class=" pa-6 tw-mt-96
                                        tw-bg-[#145761] 
                                        tw-text-white">
                                            <v-col cols="12" class="mb-16">
                                                <v-row no-gutters class="
                                            richFont
                                            tw-text-3xl
                                            mb-2">
                                                    {{item.art}}
                                                </v-row>
                                                <v-row no-gutters class="
                                            align-center
                                            tw-font-bold">
                                                    {{item.artist}}
                                                </v-row>
                                            </v-col>
                                            <v-row no-gutters class="pt-4 pb-14 px-4">
                                                <v-col cols="6" class="richFont
                                            tw-text-2xl
                                            align-center">
                                                    $32
                                                </v-col>
                                                <v-col cols="6" class="
                                            d-flex justify-end
                                            align-center
                                            tw-font-bold
                                            tw-underline tw-decoration-1 hover:tw-no-underline 
                                            tw-underline-offset-4">
                                                    More info
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-col>
                                </v-row>
                        
                        </v-carousel-item>
                    </v-carousel>
                </v-row>
            </v-col>
            <v-col cols="12" class="tw-bg-white">
                <v-row no-gutters class="
                    d-flex justify-center
                    tw-text-xs
                    tw-font-medium
                    tw-text-zinc-500
                    pa-16">
                    OUR LATEST COLLECTION
                </v-row>
                <v-row no-gutters class="py-8 px-10">
                    <v-col 
                        cols="3"
                        class=""
                        v-for="(item,i) in collection" :key="i"
                    >
                        <v-card flat class="mx-auto" max-width="350">
                            <!-- <v-img 
                                class="align-end" 
                                height="250"
                                :src="item.img"  
                                @mouseover="item.img = item.hover"           
                                cover
                            >    
                            </v-img> -->

                            <v-hover 
                                v-slot="{ isHovering, props }"
                                open-delay="100"
                            >
                                <v-img
                                    :src="isHovering ? item.hover : item.img "
                                    class="align-end" 
                                    height="250"
                                    cover
                                    v-bind="props"
                                >
                                </v-img> 
                            </v-hover>

                            <v-card-title class="ml-n4 mt-n4">
                                <v-col cols="6" class="ml-n3">
                                    <span 
                                        class="collectionTitle"
                                    >
                                        {{item.art}}
                                    </span>
                                </v-col>
                                <v-col cols="6">
                                    <span 
                                        class="
                                            mr-n10
                                            d-flex justify-end 
                                            tw-font-sans
                                            tw-text-xs
                                            tw-text-gray-400"
                                    >
                                        PIECES 1000
                                    </span>
                                </v-col>
                                
                                
                            </v-card-title>
                                
                            
                            <v-card-text class="collectionTitle ml-n4 mt-n10">
                                {{item.artist}}
                            </v-card-text>

                            <v-card-text>
                                <div class="collectionTitle ml-n4 mt-n5 tw-text-gray-500">{{item.price}}</div>
                            </v-card-text>

                        </v-card>
                    </v-col>
                    <v-col cols="3"></v-col>
                    <v-col cols="3"></v-col>
                    <v-col cols="3"></v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="">
                <v-sheet height="550">
                    <iframe width="1583" height="890"
                        src="https://www.youtube.com/embed/oK3NW_x2bjE?playlist=oK3NW_x2bjE&loop=1&autoplay=1&mute=1&controls=0&rel=0"
                        frameborder="0">
                    </iframe>
                </v-sheet>


            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
 export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/files/DC_Hero_October_1600x.png?v=1633452249',
            title: "Dream Clutter",
            button: "Shop now",
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/files/MoL_Hero_October_1600x.png?v=1633452336',
            title: "Manifestations of Luv",
            button: "View Product",
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/files/O_Hero_December_1600x.png?v=1639760339',
            title: "Oasis",
            button: "view Product",
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/files/Group_Hero_October_Copy_72ac475e-fbda-44c1-91b7-df02b65ed790_1600x.png?v=1637279800',
            title: "Premium puzzles. Original artwork.",
            button: "Shop now",
          },
        ],
        collection: [
          {
            hover: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/files/O_HP_Feature_1600x.jpg?v=1627617810',
            img: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/products/Oasis_NewHero_1200x.png?v=1634601607',
            art: "Oasis",
            artist: "Aika Takahata",
            price: "$32",
          },
          {
            hover: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/files/SN_HP_Feature_1600x.jpg?v=1627617810',
            img: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/products/SavageNature_NewHero_1200x.png?v=1634601637',
            art: "Savage Nature",
            artist: "Jess Ebsworth",
            price: "$32",
          },
          {
            hover: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/files/BB_HP_Feature_1600x.jpg?v=1627617810',
            img: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/products/BackyardBalloons_NewHero_1200x.png?v=1634601550',
            art: "Backyard Balloons",
            artist: "Teddi Parker",
            price: "$32",
          },
          {
            hover: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/files/CD_HP_Feature_1600x.jpg?v=1627617810',
            img: 'https://cdn.shopify.com/s/files/1/0504/7032/2361/products/CelebrationDay_NewHero_1200x.png?v=1634601577',
            art: "Celebration Day",
            artist: "Willea Zway",
            price: "$32",
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
    .richHeading{
        font-family: "Domaine Display Semibold";
        font-size: 48px;
        font-weight: bold;
        line-height: normal;
        color: #000000;
        padding: 0px 0px 32px;
    }
    .richText{
        font-family: "Domaine Text Regular";
        font-size: 24px;
        font-weight: 500;
        padding: 0px 0px 32px;
    }
    .richTextLarge{
        font-family: "Domaine Text Regular";
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        padding: 80px 0px ;
    }
    .richFont{
        font-family: "Domaine Text Regular";
        // font-weight: 500;
    }

    .collectionTitle{
        font-family: "Domaine Text Regular";
        font-size: 14px;
        font-weight: 800;

    }
    .marquee {
        display: block;
        background: linear-gradient(#f3efe9, #f3efe9);
        color: #363636;
        font-family: "Domaine Display Semibold";
        font-weight: bold;
        font-size: 57.6px;
        letter-spacing: 0.5px;
        padding: 14.4px 0;
        text-indent: -100%;
    
    }

    @media screen and (min-width: 641px) {
    .marquee {
        font-size: 96px;
        padding: 24px 0;
    }
    }

</style>