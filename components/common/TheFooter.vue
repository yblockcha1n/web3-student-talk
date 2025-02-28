<template>
    <footer class="bg-gray-900 text-white py-8 mt-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Web3学生トーク</h3>
            <p class="text-gray-400">
              Web3の初心者が気軽に語れる空間を目指して
            </p>
          </div>
          
          <!-- サイトマップを追加 -->
          <div>
            <h3 class="text-xl font-bold mb-4">サイトマップ</h3>
            <ul class="space-y-2">
              <li v-for="item in menuItems" :key="item.path">
                <NuxtLink :to="item.path" 
                  class="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-bold mb-4">リンク</h3>
            <ul class="space-y-2">
              <li v-for="(link, key) in socialLinks" :key="key">
                <a :href="link.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <i :class="link.icon + ' mr-2'" v-if="key !== 'note'"></i>
                  <span class="inline-block w-4 h-4 mr-2 font-bold" v-if="key === 'note'">n</span>
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-bold mb-4">コミュニティトークン</h3>
            <ul class="space-y-2">
              <li v-for="(link, key) in tokenLinks" :key="key">
                <a :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {{ currentYear }} Web3学生トーク. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { MENU_ITEMS, SOCIAL_LINKS, TOKEN_LINKS } from '~/utils/constants'
  import { getCurrentYear } from '~/utils/helpers'
  
  const menuItems = MENU_ITEMS
  const socialLinks = SOCIAL_LINKS
  const tokenLinks = TOKEN_LINKS
  const currentYear = getCurrentYear()
  </script>