<template>
  <nav class="navbar">
    <h4 class="basis-1/4 font-main font-bold text-mahomuri-green">MahoMuri</h4>
    <div class="grid grid-cols-3 gap-4 text-center my-auto">
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" :to="{ path: '/', hash: '#projects' }">Projects</router-link>
      <router-link class="nav-item" :to="{ path: '/', hash: '#about' }">About</router-link>
    </div>
    <div class="my-auto ml-auto">
      <router-link :to="{ path: '/', hash: '#contact' }"
        ><ButtonComponent button-label="Get in touch" button-class="green-solid"
      /></router-link>
    </div>
  </nav>

  <MobileNavbar class="xl:hidden" />
</template>

<script setup lang="ts">
import ButtonComponent from "../components/button-component.vue";
import MobileNavbar from "./mobile-navbar.vue";
</script>

<style lang="scss" scoped>
.navbar {
  @apply hidden xl:container xl:flex flex-row mx-auto mt-14 lg:px-10;
  .nav-item {
    @apply transition duration-150 hover:scale-105 hover:underline font-body text-sm text-mahomuri-light-green;
  }
}
</style>
