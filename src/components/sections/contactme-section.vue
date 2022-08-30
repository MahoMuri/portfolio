<template>
  <div class="bg-mahomuri-black-100">
    <div class="contact">
      <h2 class="header">Get in touch with me!</h2>
      <a class="email" href="mailto:paolo.santos_12@yahoo.com.ph">paolo.santos_12@yahoo.com.ph</a>
      <div class="flex flex-row justify-center gap-8">
        <a href="https://github.com/MahoMuri" target="_blank" rel="noopener noreferrer">
          <iconify-icon icon="akar-icons:github-fill" class="social-media-icon"></iconify-icon>
        </a>
        <a href="https://twitter.com/mahomuri" target="_blank" rel="noopener noreferrer">
          <iconify-icon icon="bi:twitter" class="social-media-icon"></iconify-icon>
        </a>
        <a href="https://linkedin.com/in/mahomuri" target="_blank" rel="noopener noreferrer">
          <iconify-icon icon="bi:linkedin" class="social-media-icon"></iconify-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  @apply container flex flex-col justify-center items-center gap-5;
  @apply mx-auto py-28 lg:px-28 lg:py-40 xl:py-80 xl:px-10;
}

.header {
  @apply font-main font-bold text-mahomuri-light-green text-sm sm:text-[34px] md:text-xl lg:text-[3rem] xl:text-[5rem] mb-5 lg:mb-10;
}

.email {
  @apply font-body font-medium text-[12px] xs:text-[18px] sm:text-[20px]  md:text-[28px] lg:text-[32px] xl:text-xl 2xl:text-2xl text-mahomuri-light-green;
  @apply duration-300 hover:-translate-y-2 hover:underline hover:text-mahomuri-green;
  @apply w-min sm:mx-auto px-0;
}

.social-media-icon {
  @apply duration-300 hover:-translate-y-2 text-mahomuri-light-green;
  @apply hover:text-mahomuri-blue;
  @apply text-md md:text-lg lg:text-3xl 2xl:text-5xl;
}
</style>
