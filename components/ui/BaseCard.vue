<template>
    <div 
      class="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300"
      :class="[
        hover ? 'hover:shadow-md hover:translate-y-[-4px]' : '',
        border ? 'border border-gray-100' : '',
        className
      ]"
    >
      <div v-if="$slots.header" :class="headerClass">
        <slot name="header"></slot>
      </div>
      <div :class="bodyClass">
        <slot></slot>
      </div>
      <div v-if="$slots.footer" :class="footerClass">
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    hover: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    headerClass: {
      type: String,
      default: 'p-4 bg-gray-50'
    },
    bodyClass: {
      type: String,
      default: 'p-6'
    },
    footerClass: {
      type: String,
      default: 'p-4 bg-gray-50 border-t border-gray-100'
    }
  })
  </script>