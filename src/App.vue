<template>
  <NavBar />
  <router-view />
  <FooterVue />
</template>

<script setup lang="ts">
import NavBar from "./components/nav-bar.vue";
import FooterVue from "./components/footer.vue";
</script>
