<template>
  <div class="jumbotron">
    <div class="profile">
      <p class="profile-header">
        <iconify-icon icon="twemoji:waving-hand-light-skin-tone" inline></iconify-icon> Hi there! I'm <br />
        <span class="profile-name">Paolo Santos</span>
        <br />
        I like making Discord bots with
        <a class="ts hover:underline" href="https://typescriptlang.org" target="_blank">TypeScript</a> and I enjoy
        building webapps with <a class="vuejs hover:underline" href="https://vuejs.org" target="_blank">VueJS</a>.
      </p>
      <div class="buttons">
        <router-link :to="{ path: '/', hash: '#projects' }">
          <ButtonComponent
            button-label="Projects"
            button-icon="ant-design:project-outlined"
            button-class="blue-outline"
          />
        </router-link>
        <a href="/Resume-Paolo-v2.pdf" download>
          <ButtonComponent button-label="Resume" button-icon="carbon:document-pdf" button-class="blue-solid" />
        </a>
      </div>
    </div>
    <div class="mb-5">
      <img class="profile-img" src="../../assets/img/profile.png" alt="" />
    </div>
  </div>
  <iconify-icon class="arrow-down" icon="akar-icons:triangle-down" style="color: #595959" width="48"></iconify-icon>
</template>

<script setup lang="ts">
import ButtonComponent from "../button-component.vue";
</script>

<style lang="scss" scoped>
.jumbotron {
  @apply container mx-auto flex flex-col-reverse lg:flex-row items-center mt-5 xl:mt-44 mb-16 lg:mb-24 xl:mb-52 gap-5;
}

.profile {
  @apply text-mahomuri-light-green lg:w-2/3;
  .profile-header {
    @apply font-body font-light text-sm xl:text-md text-left text-mahomuri-light-green;
  }
  .profile-name {
    @apply font-main font-bold text-md sm:text-md md:text-xl xl:text-6xl text-mahomuri-green leading-none;
  }
}

.buttons {
  @apply flex flex-row gap-4 mt-5 xl:mt-0;
}

.profile-img {
  @apply w-52 lg:w-64 xl:w-96 object-scale-down;
}

.arrow-down {
  @apply flex flex-row justify-center;
  @apply transition animate-bounce;
}

.ts {
  @apply font-main font-bold text-mahomuri-blue;
}

.vuejs {
  @apply font-main font-bold text-mahomuri-green;
}
</style>
