<template>
  <Menu as="div" class="mobile-navbar">
    <MenuButton>
      <iconify-icon inline class="hamburger" icon="charm:menu-hamburger"></iconify-icon>
    </MenuButton>
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-10 opacity-0"
      enter-to-class="transform h-full opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="-translate-y-10 opacity-0"
    >
      <MenuItems as="section">
        <MenuItem>
          <router-link class="nav-item" to="/">Home</router-link>
        </MenuItem>
        <MenuItem>
          <router-link class="nav-item" :to="{ path: '/', hash: '#projects' }">Projects</router-link>
        </MenuItem>
        <MenuItem>
          <router-link class="nav-item" :to="{ path: '/', hash: '#about' }">About</router-link>
        </MenuItem>
        <MenuItem>
          <router-link class="nav-item" :to="{ path: '/', hash: '#contact' }">Contact</router-link>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
</script>

<style lang="scss" scoped>
.mobile-navbar {
  @apply relative p-8 bg-mahomuri-black-100;
  .hamburger {
    @apply block text-lg text-mahomuri-light-green;
  }

  .mobile-navmenu {
    @apply transition-all duration-300 mt-3;
  }

  .nav-item {
    @apply block transition duration-150 hover:scale-105 font-body mt-2 text-sm text-mahomuri-light-green;
  }
}
</style>
