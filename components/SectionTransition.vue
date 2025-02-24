<template>
    <div 
      class="section-transition w-full overflow-hidden"
      :class="[
        inverted ? 'transform rotate-180' : '',
        color === 'blue' ? 'text-blue-900' : 
        color === 'white' ? 'text-white' : 
        color === 'gray' ? 'text-gray-50' : 'text-white'
      ]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto">
        <path 
          :fill="currentColor" 
          fill-opacity="1" 
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    color: {
      type: String,
      default: 'white', // 'white', 'blue', 'gray'
      validator: (value) => ['white', 'blue', 'gray'].includes(value)
    },
    inverted: {
      type: Boolean,
      default: false
    }
  })
  
  // 現在のカラー取得
  const currentColor = computed(() => {
    switch (props.color) {
      case 'blue':
        return 'currentColor'
      case 'white':
        return 'currentColor'
      case 'gray':
        return 'currentColor'
      default:
        return 'currentColor'
    }
  })
  </script>