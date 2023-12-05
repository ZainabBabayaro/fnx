<template>
  <div class="">
    <div class="flex justify-between items-center">
      <img src="../assets/logo.svg" alt="">
      <img src="../assets/hamburger.svg" alt="" class="cursor-pointer " @click="openHamburger = !openHamburger">
    </div>
    <div class="w-full h-full bg-white absolute top-0 right-0 md:w-1/2 " v-if="openHamburger">
      <div class="flex justify-between md:justify-end p-7 items-center py-6">
        <img src="../assets/black-logo.svg" alt="" class="md:hidden">
        <img src="../assets/cancel.svg" alt="" @click="openHamburger = false">
      </div>
      <div class="text-center flex flex-col space-y-5 md:justify-end">
        <router-link :to="{ name: 'services' }">Services</router-link>
        <router-link :to="{ name: 'services' }">About Us</router-link>
        <router-link :to="{ name: 'values' }">Values</router-link>
        <router-link :to="{ name: 'team' }">Team</router-link>
        <router-link :to="{ name: 'contact-us' }">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const openHamburger = ref(false)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
