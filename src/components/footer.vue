<template>
  <div class="footer">
    <h5 class="footer-headline">MahoMuri</h5>
    <div class="nav-items">
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" :to="{ path: '/', hash: '#projects' }">Projects</router-link>
      <router-link class="nav-item" :to="{ path: '/', hash: '#about' }">About</router-link>
    </div>
    <p class="footer-credits">
      2022 &copy; Paolo Steven Santos <iconify-icon class="align-middle" inline icon="ci:dot-02-s"></iconify-icon> All
      Rights Reserved.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @apply bg-mahomuri-green py-14;
  .footer-headline {
    @apply font-main font-bold text-mahomuri-light-green text-center text-md sm:text-lg;
  }
  .footer-credits {
    @apply font-main font-light text-mahomuri-light-green sm:text-sm text-center;
  }
}

.nav-items {
  @apply flex flex-col text-center font-body text-mahomuri-light-green text-sm;
  @apply w-min mx-auto my-10;
  .nav-item {
    @apply duration-200 hover:scale-105 hover:underline;
  }
}
</style>
