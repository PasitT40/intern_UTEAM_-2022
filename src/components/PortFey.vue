
<template >

  <v-container class="tw-font-sans  tw-bg-zinc-800 tw-flex tw-flex-col tw-space-y-0">
    <div class="header tw-mt-16 tw-mb-3">
      <v-row justify="right" align="center tw-bg-zinc-600">
        <v-col class="r1">
          <h1 class="tw-text-5xl tw-font-bold tw-text-white tw-leading-12">Choticha <br> Praphasai</h1>
          <a href="#" class="button"> CONTACT ME </a>
        </v-col>
        <v-col class="r2">
          <img src="../assets/bell.png" alt="Display not found image" />
        </v-col>
        <v-col class="r3">
          <h2 class="tw-text-xl tw-font-bold tw-text-white tw-leading-12">UI Designer,<br> Front-End Web Developer</h2>
          <p class="tw-text-sm tw-text-white">qwerfgqwertyuiop[]asdfghjkl'zxcvbnm,./asdfghjkl;qwsertyuiop
          </p>
        </v-col>
      </v-row>
    </div>

    <div class="body  tw-h-96 " >
      <v-row justify="center" align="center tw-bg-zinc-500">
        <div class="detail" align="center">
          <h1 class="tw-text-5xl tw-font-bold tw-text-white tw-py-8 ">My skill</h1>
          <p class="tw-text-sm tw-text-white">qwerfgqwertyuiop[]asdfghjkl'zxcvbnm,./asdfghjkl;qwsertyuiop</p>
        </div>
      </v-row>

      <v-row class="tw-text-white tw-bg-zinc-500 tw-py-10" justify="center">
        <div class="card  tw-columns-3" >
          <v-card class="mx-auto" max-width="344" variant="outlined">
            <v-card-header>
              <div>
                <!--<img src="../assets/design-thinking.png" alt="Display not found image" contain width="80"/> -->
                <h1 class="text-h6 mb-1" align="center">UI Design</h1>
                <p class="text-caption">Greyhound divisely hello coldly fonwderfully</p>
              </div>
            </v-card-header>
          </v-card>

          <v-card class="mx-auto" max-width="344" variant="outlined">
            <v-card-header>
              <div>
                <h1 class="text-h6 mb-1" align="center">Front-End Web Developer</h1>
                <p class="text-caption">Greyhound divisely hello coldly fonwderfully</p>
              </div>
            </v-card-header>
          </v-card>

          <v-card class="ui mx-auto" max-width="344" variant="outlined">
            <v-card-header>
              <div>
                <h1 class="text-h6 mb-1" align="center">Creative</h1>
                <p class="text-caption">Greyhound divisely hello coldly fonwderfully</p>
              </div>
            </v-card-header>
          </v-card>

        </div>
      </v-row>
    </div>
  </v-container>



</template>

<script>
export default {
  name: "PortFey",
};
</script>

<style lang="css" scoped>
.button {
  width: 10rem;
  height: 3rem;
  margin-top: 2rem;
  border: 2.5px solid rgb(255, 204, 0);
  border-radius: 5px;
  color: rgb(255, 204, 0);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

}

.button:hover {
  background: rgb(255, 204, 0);
  ;
  border: none;
  color: rgb(100, 100, 100);

}
</style>