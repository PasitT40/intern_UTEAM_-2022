<template>
  <v-container fluid class="pa-0">
    <!-- <v-row class="d-flex justify-center tw-py-40" no-gutters>
      <p class="
        tw-font-bold 
        tw-text-transparent   
        tw-text-4xl 
        tw-uppercase 
        tw-bg-clip-text tw-bg-gradient-to-r tw-from-purple-400 tw-to-pink-600"> welcome home </p>
    </v-row> -->
    <v-row no-gutters>
      <v-col cols="12">
        <v-carousel
          cycle
          width="100%"
          hide-delimiter-background
          :show-arrows="false"
        >
        <!-- <v-carousel
          width="100%"
          hide-delimiter-background
          :show-arrows="false"
          delimiter-icon="mdi-minus"
        > -->
          <v-carousel-item v-for="(name, i) in name" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <v-col cols="6" class="fill-height align-center justify-center">
                  <v-img  
                    :src="image[i]" >
                  </v-img>
                </v-col>
                <v-col cols="6" >
                  <v-row no-gutters >
                    <v-col cols="12" class="d-flex align-center justify-center">
                      {{ description[i] }}
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="12" class="d-flex align-center justify-center tw-mt-6">
                      <div class="text-h2">{{ name }}</div>
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="tw-pt-10">
                    <v-col cols="12"
                    class="d-flex 
                    justify-center 
                    align-center"
                  >
                    <button>
                      <span 
                        class="
                        tw-border-[1px] 
                        tw-border-black
                        tw-px-10
                        tw-py-4
                        "
                      >
                        Shop Now
                      </span>
                    </button>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="12"
        class="tw-bg-[#f6f6ed]"
      >
        <!-- <v-row no-gutters> -->
        <v-row no-gutters class="tw-py-10">
          <v-col
            cols="12"
            class="d-flex 
            justify-center 
            align-center
            tw-text-6xl"
          >
            Sweet Touch
          </v-col>
        </v-row>

        <!-- </v-row> -->
        <v-row no-gutters>
          <v-col
            cols="12"
            height="400"
            class="d-flex justify-center align-center"
          >
            slide

            <!-- <v-sheet class="mx-auto" elevation="8" max-width="800">
            <v-slide-group
              v-model="model"
              class="pa-4"
              active-class="success"
              show-arrows
            >
              <v-slide-item
                v-for="n in 15"
                :key="n"
                v-slot="{ active, toggle }"
              >
                <v-card
                  :color="active ? undefined : 'grey lighten-1'"
                  class="ma-4"
                  height="200"
                  width="100"
                  @click="toggle"
                >
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        v-text="'mdi-close-circle-outline'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet> -->
          </v-col>
        </v-row>
        <!-- </v-row> -->
      </v-col>
      <v-col cols="12" class="tw-bg-[#fbeeec]">
        <v-row no-gutters>
          <v-col cols="6" class="d-flex justify-center align-center">
            <v-img
              :aspect-ratio="aspectRatio"
              :width="100"
              src="https://cdn.shopify.com/s/files/1/0590/5327/7354/collections/Octaevo_JaimeHayon_Vasage_2_2_2000x.jpg?v=1634281833
                "
            >
            </v-img>
          </v-col>
          <v-col cols="6" class="d-flex justify-center align-center">
            <v-row no-gutters>
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="12" 
                    class="d-flex 
                    justify-center 
                    align-center"
                  >Limited Edition</v-col
                  >
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12"
                    class="d-flex 
                    justify-center 
                    align-center
                    tw-text-7xl
                    "
                  >Jaime Hayon</v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12"
                    class="d-flex 
                    justify-center 
                    align-center
                    tw-text-7xl
                    "
                  >x Octaevo</v-col>
                </v-row>
                <v-row no-gutters class="tw-pt-10">
                  <v-col cols="12"
                    class="d-flex 
                    justify-center 
                    align-center"
                  >
                    <button>
                      <span 
                        class="
                        tw-border-[1px] 
                        tw-border-black
                        tw-px-10
                        tw-py-4
                        "
                      >
                        Read More
                      </span>
                    </button>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
            <video-embed src="https://player.vimeo.com/external/456126800.hd.mp4?s=fc95d3be4e8f9bb18c7bb6dec60201398fc616ce&amp;profile_id=174">
            </video-embed>
            <!-- <v-img
                :aspect-ratio="aspectRatio"
                :width="400"
                src="
                  https://player.vimeo.com/external/456126800.hd.mp4?s=fc95d3be4e8f9bb18c7bb6dec60201398fc616ce&profile_id=174

                  "
                class="tw-rounded-t-full"
              >
              </v-img> -->
          
            <v-row no-gutters class="tw-pt-20">
              <v-col cols="12"
                class="d-flex 
                justify-center 
                align-center
                "
              >
                Send your love
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12"
                class="d-flex 
                justify-center 
                align-center
                tw-text-7xl
                "
              >
                Greeting Cards
              </v-col>
            </v-row>
            <v-row no-gutters class="tw-pt-10 tw-pb-20">
                  <v-col cols="12"
                    class="d-flex 
                    justify-center 
                    align-center"
                  >
                    <button>
                      <span 
                        class="
                        tw-border-[1px] 
                        tw-border-black
                        tw-px-10
                        tw-py-4
                        "
                      >
                        Shop Now
                      </span>
                    </button>
                  </v-col>
            </v-row>
        </v-col>
      <v-col cols="12" class="tw-bg-[#fdf8eb]">
        <v-row no-gutters class="tw-pt-20">
          <v-col cols="12" 
            class="d-flex 
            justify-center 
            align-center
            tw-text-6xl
            "
          >
            Retrol Revival
          </v-col>
        </v-row>
        <v-row no-gutters class="tw-pb-20">
          <v-col cols="12" class="d-flex justify-center align-center">
            slide shop
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12"
        class="tw-bg-[#f8eeee]"> 
        <v-row no-gutters class="
            tw-px-40
        ">
          <v-col cols="6"
            class="tw-my-20
            justify-center 
            align-center">
              <v-img
                :aspect-ratio="aspectRatio"
                :width="400"
                src="https://cdn.shopify.com/s/files/1/0590/5327/7354/products/iris-wire-basket-big-lilac-octaevo-01_7ba4c3d8-e40a-42de-a71a-916488c38021_1000x.jpg?v=1634289026
                  "
                class="tw-rounded-t-full"
              >
              </v-img>
          </v-col>
          
          <v-col cols="6" 
            class="
              d-flex
           ">
            <v-row no-gutters 
              class="
                    justify-center 
                    align-center
            ">
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="12"
                    class="tw-text-5xl
                    d-flex
                    justify-center 
                    align-center
                  ">Iris Wire</v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12"
                    class="tw-text-5xl
                    d-flex
                    justify-center 
                    align-center
                  ">Basket</v-col>
                </v-row>

                <v-row no-gutters class="tw-pt-5">
                  <v-col cols="12"
                  class="tw-text-xl
                    d-flex
                    justify-center 
                    align-center
                  ">
                    Elegant and sophisticated with a
                  </v-col>
                </v-row>
                <v-row no-gutter>
                  <v-col cols="12"
                  class="tw-text-xl
                    d-flex
                    justify-center 
                    align-center 
                  ">
                    strong Mediterranean aesthetic,
                  </v-col>
                </v-row>
                <v-row no-gutter>
                  <v-col cols="12"
                  class="tw-text-xl
                    d-flex
                    justify-center 
                    align-center 
                  ">
                    each basket is designed to store fruit
                  </v-col>
                </v-row>
                <v-row no-gutter>
                  <v-col cols="12"
                  class="tw-text-xl
                    d-flex
                    justify-center 
                    align-center
                  ">
                    and bread or can be left empty as a
                  </v-col>
                </v-row>
                <v-row no-gutter>
                  <v-col cols="12"
                  class="tw-text-xl
                    d-flex
                    justify-center 
                    align-center
                  ">
                    sculptural centerpiece.
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" 
                    class="tw-mt-5
                    d-flex
                    justify-center 
                    align-center
                    tw-underline 
                    tw-underline-offset-4
                  ">
                    Shop Now
                  </v-col>
                </v-row>
              </v-col>

            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12"
        class="tw-bg-[#e1ecee]"
      >
        <v-row no-gutters class="tw-pt-20">
          <v-col cols="12" 
            class="d-flex 
            justify-center 
            align-center
            tw-text-6xl
            ">
            “The sea, once it casts its spell, holds
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" 
            class="d-flex justify-center align-center
            tw-text-6xl
            tw-mb-10
            ">
            one in its net of wonder forever.”
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="d-flex justify-center align-center
            tw-mb-20
          ">
            Jacques Cousteau
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" 
        class="tw-bg-[#fdf8eb]"
      >
        <v-row no-gutters>
          <v-col cols="12" 
            class="d-flex 
            justify-center 
            align-center
            tw-text-6xl
            tw-my-20
            ">
            Face to Face
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="d-flex justify-center align-center">
            item slide
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters
          class="tw-bg-[#f2f9f7]"
        >
          <v-col cols="6" class="d-flex justify-center align-center">
            <v-row no-gutters>
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="12" class="d-flex justify-center align-center">
                    New Arrival
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" 
                    class="d-flex 
                    justify-center 
                    align-center
                    tw-text-7xl
                    tw-mt-3
                  ">
                    Sicilia
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" 
                    class="d-flex 
                    justify-center 
                    align-center
                    tw-text-7xl
                    tw-mt-2
                  ">
                    Ceramic
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" 
                    class="d-flex 
                    justify-center 
                    align-center
                    tw-text-7xl
                    tw-mt-2
                  ">
                    Baskets
                  </v-col>
                </v-row>
                <v-row no-gutters class="tw-pt-10 tw-pb-20">
                  <v-col cols="12"
                    class="d-flex 
                    justify-center 
                    align-center"
                  >
                    <button>
                      <span 
                        class="
                        tw-border-[1px] 
                        tw-border-black
                        tw-px-10
                        tw-py-4
                        "
                      >
                        Shop Now
                      </span>
                    </button>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" class="d-flex justify-center align-center">
            <v-img
              :aspect-ratio="aspectRatio"
              :width="100"
              src="
                https://cdn.shopify.com/s/files/1/0590/5327/7354/files/Sicilia_Baskets_2_2200x.gif?v=1637579732
              "
            >
            </v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" 
          class="tw-bg-[#f6f6ed]"
      >
        <v-row no-gutters 
          class="
            tw-px-10
            tw-pt-20
          "         
        >
          <v-col cols="9"
            class="tw-text-5xl
            tw-mb-10
            "
          >
            From the Journal
          </v-col>
          <v-col cols="3"> -- </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="6"> 
            <v-row no-gutters>
              <v-col cols="6">
                <v-img
                  :aspect-ratio="aspectRatio"
                  :width="300"
                  src="
                    https://cdn.shopify.com/s/files/1/0590/5327/7354/articles/158431_jpg_2000x.webp?v=1652171369
                  "
                  class="tw-rounded-t-full"
                >
                </v-img>
              </v-col>
              <v-col cols="6"
              class="
                d-flex
                justify-start
                align-center
              ">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-row no-gutters 
                      class="tw-text-3xl
                    ">
                      <v-col class="tw-ml-2">
                        Travel Guide
                      </v-col>
                    </v-row>
                    <v-row no-gutters 
                      class="tw-text-3xl
                    ">
                      <v-col class="tw-ml-2">
                        N.01 -  
                      </v-col>
                    </v-row>
                    <v-row no-gutters 
                      class="tw-text-3xl
                    ">
                      <v-col class="tw-ml-2">
                        Palermo, Italy
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <button>
                        <v-col
                          class="tw-underline 
                          tw-underline-offset-4
                        ">
                          Read more
                        </v-col>
                      </button>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            
          </v-col>
          <v-col cols="6"> 
            <v-row no-gutters>
              <v-col cols="6"
              >
                <v-img
                  :aspect-ratio="aspectRatio"
                  :width="300"
                  src="
                    https://cdn.shopify.com/s/files/1/0590/5327/7354/files/Octaevo_Flower_Sculptures_01.jpg?v=4752275040340120721
                  "
                >
                </v-img>
              </v-col>
              <v-col cols="6"
              class="
                d-flex
                justify-start
                align-center
              ">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-row no-gutters 
                      class="tw-text-3xl
                    ">
                      <v-col class="tw-ml-2">
                        New 
                      </v-col>
                    </v-row>
                    <v-row no-gutters 
                      class="tw-text-3xl
                    ">
                      <v-col class="tw-ml-2">
                        Collection
                      </v-col>
                    </v-row>
                    <v-row no-gutters 
                      class="tw-text-3xl
                    ">
                      <v-col class="tw-ml-2">
                        SS22
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <button>
                        <v-col
                          class="tw-underline 
                          tw-underline-offset-4
                        ">
                          Read more
                        </v-col>
                      </button>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12"
        class="tw-bg-[#f9ebe0]">
        <v-row no-gutters>
          <v-col cols="12" class="d-flex justify-center align-center">
            Quote first</v-col
          >
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="d-flex justify-center align-center"
            >second</v-col
          >
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="d-flex justify-center align-center"
            >third</v-col
          >
        </v-row>
      </v-col>
      <v-col cols="12"
        :style="{'background-image':'url(https://cdn.shopify.com/s/files/1/0590/5327/7354/files/Rectangle_2200x.png?v=1629967478)'}"
      >
        <v-row no-gutters
          class="tw-pt-80
          "
        >
          <v-col cols="12" 
            class="d-flex 
            justify-center 
            align-center
            tw-text-white
            "
          >
            Bon Voyage
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" 
            class="d-flex 
            justify-center 
            align-center
            tw-text-white
            tw-text-7xl
            "
          > 
            Narinan x Octaevo
          </v-col>
        </v-row>
        <v-row no-gutters 
          class="tw-pt-10 tw-pb-20
        ">
          <v-col cols="12"
            class="d-flex 
            justify-center 
            align-center
            tw-mb-60  
          "
            
                
          >
            <button>
              <span 
                class="
                tw-border-[1px] 
                tw-border-white
                tw-px-10
                tw-py-4
                tw-text-white
                "
              >
                Read Story
              </span>
            </button>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12"
        class="tw-bg-[#ffeae6]
        "
      >
        <v-row no-gutters>
          <v-col cols="12" 
            class="d-flex 
            justify-center 
            align-center
            tw-text-5xl
            tw-mt-20
            "
          > 
            <span 
              class="tw-border-b-2 
              tw-border-transparent 
              tw-pb-2
              tw-pr-3
            ">
              Follow us
            </span>
            <!-- <a class="tw-underline tw-underline-offset-4"> @octaevo</a> -->
            <span 
              class="tw-border-b-2 
              tw-border-black
              tw-pb-2
            ">
              @octaevo
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" 
            class="d-flex 
            justify-center 
            align-center
            tw-mb-20
            "
          >
            pic slide
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// export default {};
import firstImage from '@/assets/firstImage.jpg'
import secondImage from '@/assets/secondImage.jpg'
import thirdImage from '@/assets/thirdImage.jpg'
import forthImage from '@/assets/forthImage.jpg'
import fifthImage from '@/assets/fifthImage.jpg'
import sixthImage from '@/assets/sixthImage.jpg'
import seventhImage from '@/assets/seventhImage.jpg'

export default {
  data() {
    return {
      colors: [
        "#e8f1f8",
        "#f9f2e8",
        "#f7f7ed",
        "#f7eef9",
        "#feefed",
        "#e2f5fb",
        "#e9f4ec",
      ],
      image: [firstImage, secondImage, thirdImage, forthImage, fifthImage, sixthImage, seventhImage],
      // image: '@/assets/firstImage.jpg',
      name: [
        "Flower Rituals", 
        "Flower Paper", 
        "On the Grid", 
        "Cozy Home", 
        "Set the Scene",
        "Mark a Page", 
        "Catch the Light",
      ], 
      description: [
        "Sicilia Ceramic Rings", 
        "New Arrivals", 
        "Pinic Paper Vase", 
        "Templo Candle Holders", 
        "Ceramic Trays", 
        "Multi-Use Clips", 
        "Agave Glass Container",
      ],
      model: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
