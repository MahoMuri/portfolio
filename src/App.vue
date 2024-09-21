<template>
  <NavBar />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import Footer from "./components/footer-component.vue";
import NavBar from "./components/navbar-component.vue";
</script>
