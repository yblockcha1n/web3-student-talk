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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" class="w-full h-auto" preserveAspectRatio="none">
      <path 
        :fill="currentColor" 
        fill-opacity="1" 
        d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,27,960,21.3C1120,16,1280,21,1360,24L1440,27L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
      ></path>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'white', // 'white', 'blue', 'gray' または ヘックスカラーコード
    validator: (value) => ['white', 'blue', 'gray'].includes(value) || value.startsWith('#')
  },
  inverted: {
    type: Boolean,
    default: false
  }
})

// 現在のカラー取得
const currentColor = computed(() => {
  // ヘックスカラーコードの場合はそのまま返す
  if (props.color.startsWith('#')) {
    return props.color;
  }
  
  // 名前付きカラーの場合は従来通りの処理
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

<style scoped>
.section-transition {
  position: relative;
  margin-bottom: -1px; /* 隙間を埋めるための負のマージン */
}

.section-transition svg {
  display: block; /* インライン要素の余分な隙間を防ぐ */
  line-height: 0; /* 下部の隙間を防ぐ代替手段 */
}
</style>