<template>
    <div class="team-card">
      <div class="team-image-container">
        <img 
          :src="member.imageUrl"
          :alt="member.name"
          class="team-image"
        />
        <div class="team-social-overlay">
          <a :href="member.twitterUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="team-social-link"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div class="team-content">
        <h3 class="team-name">{{ member.name }}</h3>
        <div class="team-role">{{ member.role }}</div>
        <p class="team-description">
          {{ member.description }}
        </p>
        <a :href="member.twitterUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="team-twitter"
        >
          <i class="fab fa-twitter mr-1"></i>@{{ member.twitterHandle }}
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    member: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.name && 
               value.role && 
               value.description && 
               value.imageUrl && 
               value.twitterUrl &&
               value.twitterHandle
      }
    }
  })
  </script>
  
  <style scoped>
  .team-card {
    @apply bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col;
    height: 100%;
  }
  
  .team-image-container {
    @apply relative overflow-hidden;
    height: 0;
    padding-top: 100%; /* 正方形のアスペクト比 */
  }
  
  .team-image {
    @apply absolute inset-0 w-full h-full object-cover transition-transform duration-500;
  }
  
  .team-card:hover .team-image {
    @apply scale-110;
  }
  
  .team-social-overlay {
    @apply absolute inset-0 bg-black bg-opacity-30 opacity-0 flex items-center justify-center transition-opacity duration-300;
  }
  
  .team-card:hover .team-social-overlay {
    @apply opacity-100;
  }
  
  .team-social-link {
    @apply w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-blue-600 text-xl transform scale-0 transition-transform duration-300 hover:bg-opacity-100;
  }
  
  .team-card:hover .team-social-link {
    @apply scale-100;
  }
  
  .team-content {
    @apply p-6 flex flex-col flex-grow;
  }
  
  .team-name {
    @apply text-xl font-bold text-gray-800 mb-1;
  }
  
  .team-role {
    @apply text-sm font-medium text-blue-600 mb-4;
  }
  
  .team-description {
    @apply text-gray-600 text-sm mb-4 flex-grow;
  }
  
  .team-twitter {
    @apply inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors text-sm;
  }
  </style>