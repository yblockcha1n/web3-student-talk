<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap'
    }
  ],
  meta: [
    {
      name: 'google-site-verification',
      content: 'chLtV5snUNUbS8oaftJI38hWeIP0OuYBm_k-Dhm_RcA'
    }
  ],
  htmlAttrs: {
    lang: 'ja'
  }
})
</script>