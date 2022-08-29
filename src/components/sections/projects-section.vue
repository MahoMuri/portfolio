<template>
  <div class="projects">
    <div class="container mx-auto pt-13">
      <h3 class="font-main font-bold text-mahomuri-green text-lg lg:text-2xl">Projects</h3>
      <hr class="my-5 w-32" />
      <div class="cards">
        <CardComponent
          image-link="https://i.imgur.com/dzBZ1F6.png"
          title="Pogi si Maho"
          description="A Discord bot that creates and manages custom voice channels."
          github="test"
          website="test"
        />
        <CardComponent
          image-link="https://i.imgur.com/dzBZ1F6.png"
          title="Curator"
          description="A Discord bot that creates and manages custom voice channels."
          website="test"
        />
        <CardComponent
          image-link="https://i.imgur.com/dzBZ1F6.png"
          title="Curator"
          description="A Discord bot that creates and manages custom voice channels."
          github="test"
        />
        <CardComponent
          image-link="https://i.imgur.com/dzBZ1F6.png"
          title="Curator"
          description="A Discord bot that creates and manages custom voice channels."
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
  @apply bg-mahomuri-black-100 pt-12 px-10 lg:px-0;
}

.cards {
  @apply flex flex-row flex-wrap gap-10 justify-center text-mahomuri-light-green mt-3 py-10;
}
</style>
