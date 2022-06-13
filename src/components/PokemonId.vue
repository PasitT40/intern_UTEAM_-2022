<template>
  <v-row no-gutters>
    <v-col cols="12">{{ pokeWithID.name }}</v-col>
    <v-col cols="12">{{ pokeWithID.name }}</v-col>
    <v-col cols="12">{{ pokeWithID.name }}</v-col>
    <v-col cols="12">{{ pokeWithID.name }}</v-col>
  </v-row>
</template>

<script setup>
import axios from "axios";

const props = defineProps(["pokeID"]);
var pokeWithID = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
pokeWithID = pokeWithID.data;
console.log(pokeWithID);
</script>

<style lang="scss" scoped>
</style>