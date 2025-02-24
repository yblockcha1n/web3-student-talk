<template>
  <header class="fixed w-full bg-white/90 backdrop-blur-lg shadow-lg z-50">
    <nav class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors duration-300">
          Web3学生トーク
        </NuxtLink>
        
        <!-- PC用メニュー -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path"
            class="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 group"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NuxtLink>
        </div>

        <!-- モバイル用メニューボタン -->
        <button 
          @click="toggleMenu" 
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          aria-label="メニュー"
        >
          <span class="sr-only">メニュー</span>
          <div class="w-6 h-6 flex items-center justify-center">
            <i :class="[isMenuOpen ? 'fa-times' : 'fa-bars', 'fas text-xl transition-transform duration-300', isMenuOpen ? 'rotate-180' : '']"></i>
          </div>
        </button>
      </div>

      <!-- モバイル用ドロップダウンメニュー -->
      <div 
        v-show="isMenuOpen"
        class="md:hidden"
      >
        <div class="py-2 space-y-1 mt-4">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path"
            class="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
            @click="closeMenu"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)

const menuItems = [
  { name: 'ホーム', path: '/' },
  { name: 'コミュニティについて', path: '/about' },
  { name: '運営メンバー', path: '/team' },
  { name: 'Pizzaトークン', path: '/token' },
  { name: 'お問い合わせ', path: '/contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const router = useRouter()
router.afterEach(() => {
  closeMenu()
})

onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isMenuOpen.value) {
      closeMenu()
    }
  }
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
  })
})
</script>