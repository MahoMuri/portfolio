<template>
  <div class="card-item">
    <img class="mx-auto object-fit" :src="imageLink" alt="Project Logo" />
    <div class="card-header">
      <div class="flex flex-row justify-between">
        {{ title }}
        <div class="flex flex-row gap-1 items-center">
          <div v-if="github">
            <a :href="github" target="_blank">
              <iconify-icon icon="akar-icons:github-fill"></iconify-icon>
            </a>
          </div>
          <div v-if="website">
            <a :href="website" target="_blank">
              <iconify-icon icon="ci:external-link" width="30"></iconify-icon>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
    <div class="card-body">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imageLink: String,
  title: String,
  description: String,
  github: String,
  website: String,
});
</script>

<style lang="scss" scoped>
.card-item {
  @apply flex flex-col max-w-xl bg-neutral-900 mb-10 overflow-hidden;
  @apply rounded-md drop-shadow-lg;
  @apply transition duration-200 hover:scale-105 hover:drop-shadow-xl;
}

.card-header {
  @apply flex flex-col font-main font-semibold text-sm tracking-wide px-5 pt-5;
}

.card-body {
  @apply font-body px-5 pb-5 pt-2;
}
</style>
