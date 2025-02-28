<template>
    <div>
      <!-- ヒーローセクション -->
      <section class="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16 md:py-20 overflow-hidden">
        <!-- 背景装飾 -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-20 w-48 h-48 rounded-full bg-white"></div>
          <div class="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-blue-300"></div>
          <div class="absolute top-1/4 right-1/3 w-20 h-20 rounded-full bg-blue-200"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto">
            <div class="flex items-center mb-4">
              <NuxtLink to="/news" class="text-blue-200 hover:text-white transition-colors">
                <i class="fas fa-arrow-left mr-2"></i> お知らせ一覧に戻る
              </NuxtLink>
            </div>
            
            <!-- ローディング表示 -->
            <div v-if="isLoading" class="text-center py-10">
              <i class="fas fa-spinner fa-spin text-4xl text-white/70"></i>
            </div>
            <!-- エラー表示 -->
            <div v-else-if="hasError" class="text-center py-10">
              <div class="mb-4">
                <i class="fas fa-exclamation-triangle text-4xl text-white/70"></i>
              </div>
              <p class="text-white/70">記事の読み込みに失敗しました。</p>
            </div>
            <!-- 記事タイトルと情報 -->
            <div v-else>
              <h1 class="text-3xl md:text-5xl font-bold mb-4">{{ newsItem.title }}</h1>
              <div class="flex flex-wrap items-center gap-4 mt-4">
                <span class="text-blue-200">{{ formatDate(newsItem.date || newsItem.publishedAt) }}</span>
                <span v-if="newsItem.category" :class="`news-category-badge ${getCategoryClass(newsItem.category.name)}`">
                  {{ newsItem.category.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 波形トランジション -->
        <div class="absolute bottom-0 left-0 w-full">
          <SectionTransition color="#ffffff" />
        </div>
      </section>
  
      <!-- コンテンツセクション -->
      <section v-if="!isLoading && !hasError" class="py-12 md:py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <BaseCard>
              <!-- コンテンツ本文 -->
              <div class="news-content prose prose-lg max-w-none" v-html="newsItem.content"></div>
            </BaseCard>
            
            <!-- ナビゲーション -->
            <div class="mt-10 flex justify-between">
              <NuxtLink to="/news" class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <i class="fas fa-arrow-left mr-2"></i> お知らせ一覧に戻る
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 関連記事セクション -->
      <section v-if="!isLoading && !hasError && relatedNews.length > 0" class="py-12 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-2xl font-bold mb-8 text-center">その他のお知らせ</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <BaseCard v-for="news in relatedNews" :key="news.id" className="h-full">
                <div class="flex flex-wrap items-center gap-2 mb-3">
                  <span class="text-gray-500 text-sm">{{ formatDate(news.date || news.publishedAt) }}</span>
                  <span v-if="news.category" :class="`news-category-badge ${getCategoryClass(news.category.name)}`">
                    {{ news.category.name }}
                  </span>
                </div>
                <h3 class="text-xl font-bold mb-3">{{ news.title }}</h3>
                <div class="mt-4">
                  <NuxtLink :to="`/news/${news.id}`" class="text-blue-600 hover:text-blue-800 transition-colors">
                    続きを読む <i class="fas fa-arrow-right ml-1"></i>
                  </NuxtLink>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import SectionTransition from '~/components/common/SectionTransition.vue'
  import BaseCard from '~/components/ui/BaseCard.vue'
  import { getCategoryClass, formatDate } from '~/utils/helpers'
  import { getNewsDetail, getNewsList } from '~/utils/cms'
  
  // ルートパラメータからIDを取得
  const route = useRoute()
  const id = route.params.id
  
  // ローディング状態とエラー状態
  const isLoading = ref(true)
  const hasError = ref(false)
  const newsItem = ref({})
  const relatedNews = ref([])
  
  // ニュース詳細の取得
  const fetchNewsDetail = async () => {
    isLoading.value = true
    hasError.value = false
    
    try {
      // 詳細情報の取得
      const detail = await getNewsDetail(id)
      newsItem.value = detail
      
      // 関連記事の取得（同じカテゴリーの最新4件）
      if (detail.category) {
        const queries = {
          limit: 4,
          filters: `category.id[equals]${detail.category.id}[and]id[not_equals]${id}`,
          orders: '-publishedAt'
        }
        
        const related = await getNewsList(queries)
        relatedNews.value = related.contents
      }
      
      // ページタイトルの設定
      useHead({
        title: `${detail.title} - Web3学生トーク`
      })
    } catch (error) {
      console.error('ニュース詳細の取得に失敗しました:', error)
      hasError.value = true
    } finally {
      isLoading.value = false
    }
  }
  
  onMounted(fetchNewsDetail)
  </script>
  
  <style scoped>
  /* カテゴリーバッジ */
  .news-category-badge {
    @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-medium;
  }
  
  /* ニュースコンテンツ */
  .news-content {
    @apply text-gray-700;
  }
  
  .news-content :deep(h2) {
    @apply text-2xl font-bold mt-8 mb-4 text-gray-800;
  }
  
  .news-content :deep(h3) {
    @apply text-xl font-bold mt-6 mb-3 text-gray-800;
  }
  
  .news-content :deep(p) {
    @apply mb-4;
  }
  
  .news-content :deep(ul) {
    @apply list-disc pl-6 mb-6;
  }
  
  .news-content :deep(ol) {
    @apply list-decimal pl-6 mb-6;
  }
  
  .news-content :deep(li) {
    @apply mb-2;
  }
  
  .news-content :deep(a) {
    @apply text-blue-600 hover:text-blue-800 transition-colors;
  }
  
  .news-content :deep(blockquote) {
    @apply pl-4 border-l-4 border-gray-200 italic my-6;
  }
  
  .news-content :deep(strong) {
    @apply font-bold;
  }
  </style>