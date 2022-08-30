<template>
  <div class="button">
    <button :class="buttonClass">
      <div v-if="buttonIcon">
        <iconify-icon class="hidden lg:inline-block" :icon="buttonIcon" inline /> {{ buttonLabel }}
      </div>
      <div v-else>
        {{ buttonLabel }}
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  buttonLabel: String,
  buttonIcon: String,
  buttonClass: String,
});
</script>

<style lang="scss" scoped>
.green-solid {
  @apply font-main font-bold text-mahomuri-light-green text-[20px] sm:text-sm;
  @apply transition duration-200 bg-mahomuri-green hover:bg-opacity-70 hover:scale-105 rounded-full py-1 px-4;
}

.green-outline {
  @apply font-main font-bold text-mahomuri-green text-[20px] sm:text-sm;
  @apply transition duration-200 border-2 border-mahomuri-green hover:scale-105 rounded-full py-1 px-4;
}

.blue-solid {
  @apply font-main font-bold text-mahomuri-light-green text-[20px] sm:text-sm;
  @apply transition duration-200 bg-mahomuri-blue hover:bg-opacity-70 hover:scale-105 rounded-full py-1 px-4;
}

.blue-outline {
  @apply font-main font-bold text-mahomuri-blue text-[20px] sm:text-sm;
  @apply transition duration-200 border-2 border-mahomuri-blue hover:scale-105 rounded-full py-1 px-4;
}
</style>
