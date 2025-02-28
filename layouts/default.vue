<template>
    <div class="min-h-screen flex flex-col">
      <TheHeader />
      <main class="flex-grow pt-16">
        <slot />
      </main>
      <TheFooter />
      <Analytics />
    </div>
  </template>
  
  <script setup>
  import TheHeader from '~/components/common/TheHeader.vue'
  import TheFooter from '~/components/common/TheFooter.vue'
  import Analytics from '~/components/common/Analytics.vue'
  </script>
  
  <style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s ease-out;
  }
  
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
  </style>