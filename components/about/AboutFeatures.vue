<template>
    <div class="grid md:grid-cols-3 gap-8">
      <BaseCard v-for="(feature, index) in features" :key="index" class="h-full">
        <div :class="`w-14 h-14 rounded-full flex items-center justify-center text-xl mb-4 ${feature.iconBgClass}`">
          <i :class="`${feature.icon} ${feature.iconColorClass}`"></i>
        </div>
        <h3 class="text-xl font-bold mb-3 text-gray-800">{{ feature.title }}</h3>
        <p class="text-gray-600">{{ feature.description }}</p>
        <ul v-if="feature.list" class="space-y-2 text-gray-600 pl-5 mt-4">
          <li v-for="(item, itemIndex) in feature.list" :key="itemIndex" class="relative pl-2">
            <span class="absolute left-0 text-blue-500">•</span>
            {{ item }}
          </li>
        </ul>
      </BaseCard>
    </div>
  </template>
  
  <script setup>
  import BaseCard from '~/components/ui/BaseCard.vue'
  
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