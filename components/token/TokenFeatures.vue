<template>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(feature, index) in features" :key="index" class="feature-card">
        <div :class="`feature-icon ${feature.iconBgClass} ${feature.iconColorClass}`">
          <i :class="feature.icon"></i>
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    features: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(feature => 
          feature.title && 
          feature.description &&
          feature.icon &&
          feature.iconBgClass &&
          feature.iconColorClass
        )
      }
    }
  })
  </script>
  
  <style scoped>
  .feature-card {
    @apply bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300;
  }
  
  .feature-icon {
    @apply w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4;
  }
  
  .feature-title {
    @apply text-xl font-bold mb-2 text-gray-800;
  }
  
  .feature-description {
    @apply text-gray-600;
  }
  </style>