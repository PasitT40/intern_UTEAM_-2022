<template>
  <!-- <v-container class="tw-font-mono"> -->
  <v-container class="tw-bg-red-200">
    <v-row justify="center" align="center"> 
      
      
      <v-col cols="5" justify="center" align="center">
       
          <span class="tw-text-2xl" >
            Profile <br>
          </span>
          <div class="tw-pl-2">
            <p class="tw-text-center" >
              <span class="tw-text-6xl" >
                Anchistha Tinchatarak
              </span>
            </p>
          </div>
        
      </v-col>
      <v-col cols="7">
        <div class="tw-mr-0">
          <img src="../assets/chanyeol.jpg" alt="chanyeol" contain width="600" />
        </div>
        
      </v-col>
    </v-row>

    <v-row >
      <v-col>
      <v-card
        class="mx-auto"
        max-width="344"
        variant="outlined"
      >
        <v-card-header>
          <div>
            <div class="text-overline mb-1">
                Personal Infornation
              </div>
            <div class="text-caption">
              Age: 20 <br>
              Address: Princess Castle <br>
              Phone Number: 0112233345 <br>
              Email: whatsupp@yo.com

            </div>
          </div>
        </v-card-header>
      </v-card>
      </v-col>

      <v-col>
        <v-card
          class="mx-auto"
          max-width="344"
          variant="outlined"
        >
          <v-card-header>
            <div>
              <div class="text-overline mb-1">
                Work Experience
              </div>
              <div class="text-caption">
                Eat from birth until now<br>
                Sleep all day <br>
                Play all night<br>
                Shopping every day <br>
              </div>
            </div>
          </v-card-header>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          class="mx-auto"
          max-width="344"
          variant="outlined"
        >
          <v-card-header>
            <div>
              <div class="text-overline mb-1">
                Education
              </div>
              <div class="text-caption">
                Something College<br>
                2020 - Present <br>
                Sleep Faculty <br>
              </div>
            </div>
          </v-card-header>
        </v-card>

      </v-col>

      
      
    </v-row>

   

  </v-container>
</template>

<script>
export default {
  name: "PortBeam",
};
</script>

<style>
</style>