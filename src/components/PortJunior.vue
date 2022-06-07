
<template>
  <v-container>
    <v-row justify="center" align="center" class=" tw-bg-red-200">
        <v-col cols="12" sm="2" >
          <p class=" tw-text-6xl tw-font-bold tw-font-mono"> PROFILE </p>
        </v-col>
    </v-row>
      <br><br>
    <v-row >

      <v-col cols="4" class=" tw-bg-red-100">
        <v-card class="pa-2 ">
        <v-img src="src/assets/taen.jpg" height="300" width="300" ></v-img>
        </v-card>
      </v-col>

      <v-col cols="6"  >
        <p class=" tw-text-2xl  tw-underline tw-font-mono tw-text-red-400 "> Personal  </p>
        <br>
        <p class=" tw-text-xl tw-font-mono "> 
          Name : Chutikan Saengkaew  <br> 
          Nickname : Junior<br>
          Nationality : Thai <br> 
          Religion : Buddhism<br> 
          Birthday: 12 Apirl 2002  </p>
      </v-col>
    </v-row>
    <br><br>

    <v-row>
      <v-col cols="5" >
        <v-card class=" pa-2 " outlined tile >
          <p class=" tw-text-2xl  tw-underline tw-font-mono tw-text-red-400 "> Contact  </p>
          <br>
          <p class=" tw-text-xl tw-font-mono "> Tel : xxx-xxxxxxx  <br> 
          Email : chutikarn_12445@outlook.co.th <br> Line ID : ****** </p>
        </v-card>
      </v-col>
       <v-col cols="7">
        <v-card class="pa-2" outlined tile>
          <p class=" tw-text-2xl  tw-underline tw-font-mono tw-text-red-400"> Education  </p>
          <br>
          <p class=" tw-text-xl tw-font-mono "> High School <br>2017 - 2019 | KP2
          <br>  University  <br>2020 - now  | KMITL
           </p> 
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
    name:'PortJunior'
};
</script>

<style lang="scss" scoped>
</style>