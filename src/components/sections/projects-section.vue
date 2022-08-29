<template>
  <div class="projects">
    <div class="container mx-auto pt-13">
      <h2 class="font-main font-bold text-mahomuri-green text-lg lg:text-2xl">Projects</h2>
      <hr class="my-5 w-32" />
      <div class="cards">
        <CardComponent
          image-link="https://i.imgur.com/dzBZ1F6.png"
          title="Curator"
          description="A Discord bot that creates and manages custom voice channels."
          website="https://top.gg/bot/816152179101663312"
        />
        <CardComponent
          image-link="https://i.imgur.com/bSWwoob.png"
          title="Magic 8Ball"
          description="An Android app built in Kotlin that demonstrates CRUD operations with FireBase."
          github="https://github.com/MahoMuri/magic8ball"
        />
        <CardComponent
          image-link="https://i.imgur.com/XjIZhMA.png"
          title="JAMBot"
          description="A very simple Discord Bot that streams/plays music to a voice channel."
          github="https://github.com/MahoMuri/JAMBot-v2"
        />
        <CardComponent
          image-link="https://i.imgur.com/S7sYUKc.png"
          title="My Portfolio"
          description="A Vite + Vue3 website built to server as my portfolio. Uses TailwindCSS and TypeScript."
          github="https://github.com/MahoMuri/portfolio"
          website="https://mahomuri.tech"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardComponent from "../card-component.vue";
</script>

<style lang="scss" scoped>
.projects {
  @apply bg-mahomuri-black-100 pt-12 sm:px-10 xl:px-0;
}

.cards {
  @apply flex flex-row flex-wrap gap-10 justify-center text-mahomuri-light-green mt-3 py-10;
}
</style>
