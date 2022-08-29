<template>
  <div class="home">
    <ProfileSection />
    <ProjectsSection id="projects" />
    <AboutSection id="about" />
    <ContactMeSection id="contact" />
  </div>
</template>

<script setup lang="ts">
import ProfileSection from "../components/sections/profile-section.vue";
import ProjectsSection from "../components/sections/projects-section.vue";
import AboutSection from "../components/sections/about-section.vue";
import ContactMeSection from "../components/sections/contactme-section.vue";
</script>

<style lang="scss" scoped></style>
