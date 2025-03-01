<template>
    <div class="page-transition-wrapper">
      <!-- ヒーローセクション -->
      <section class="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16 md:py-20 overflow-hidden section-no-border">
        <!-- 背景装飾 -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-20 w-48 h-48 rounded-full bg-white"></div>
          <div class="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-blue-300"></div>
          <div class="absolute top-1/4 right-1/3 w-20 h-20 rounded-full bg-blue-200"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto">
            <div class="flex items-center mb-4">
              <a href="/news" class="text-blue-200 hover:text-white transition-colors">
                <i class="fas fa-arrow-left mr-2"></i> お知らせ一覧に戻る
              </a>
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
              <p v-if="errorMessage" class="text-white/70 mt-2">{{ errorMessage }}</p>
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
        <div class="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" class="w-full h-auto" preserveAspectRatio="none" style="display: block; margin-bottom: -1px;">
            <path fill="#ffffff" fill-opacity="1" d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,27,960,21.3C1120,16,1280,21,1360,24L1440,27L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
          </svg>
        </div>
      </section>
  
      <!-- コンテンツセクション -->
      <section v-if="!isLoading && !hasError" class="py-12 md:py-16 bg-white section-no-border">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <!-- コンテンツ本文 -->
              <div class="prose prose-lg max-w-none text-gray-700" v-html="newsItem.content"></div>
              
              <!-- カテゴリーとタグ情報 -->
              <div v-if="newsItem.category" class="mt-8 pt-4 border-t border-gray-100">
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="text-gray-600 text-sm">カテゴリー:</span>
                  <span :class="`news-category-badge ${getCategoryClass(newsItem.category.name)}`">
                    {{ newsItem.category.name }}
                  </span>
                </div>
              </div>
              
              <!-- 公開日時 -->
              <div class="mt-4 text-sm text-gray-500">
                <div>公開日: {{ formatDate(newsItem.date || newsItem.publishedAt) }}</div>
                <div v-if="newsItem.updatedAt !== newsItem.publishedAt">
                  更新日: {{ formatDate(newsItem.updatedAt) }}
                </div>
              </div>
              
              <!-- シェアボタン -->
              <div class="mt-8 flex gap-4">
                <a :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(newsItem.title)}&url=${encodeURIComponent(currentUrl)}`" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  <i class="fab fa-twitter mr-2"></i> シェア
                </a>
                <button 
                  class="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  @click="copyPageUrl"
                >
                  <i class="fas fa-link mr-2"></i> URLをコピー
                </button>
              </div>
            </div>
            
            <!-- ナビゲーション -->
            <div class="mt-10 flex justify-between">
              <a href="/news" class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <i class="fas fa-arrow-left mr-2"></i> お知らせ一覧に戻る
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 関連記事セクション -->
      <section v-if="!isLoading && !hasError && relatedNews.length > 0" class="py-12 bg-gray-50 section-no-border">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-2xl font-bold mb-8 text-center">関連するお知らせ</h2>
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
                  <a :href="`/newsdetail?id=${news.id}`" class="text-blue-600 hover:text-blue-800 transition-colors">
                    続きを読む <i class="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { formatDate, getCategoryClass } from '~/utils/helpers';
  import { createClient } from 'microcms-js-sdk';
  import BaseCard from '~/components/ui/BaseCard.vue';
  
  export default {
    components: {
      BaseCard
    },
    
    data() {
      return {
        isLoading: true,
        hasError: false,
        errorMessage: '',
        newsItem: {},
        newsId: null,
        currentUrl: '',
        relatedNews: [],
        urlCopied: false
      };
    },
    
    methods: {
      formatDate,
      getCategoryClass,
      
      // URLからIDパラメータを抽出
      getIdFromUrl() {
        // URLから直接IDを取得
        if (typeof window !== 'undefined') {
          this.currentUrl = window.location.href;
          const urlParams = new URLSearchParams(window.location.search);
          return urlParams.get('id');
        }
        return null;
      },
      
      // ページURLをクリップボードにコピー
      copyPageUrl() {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href)
            .then(() => {
              this.urlCopied = true;
              alert('URLをコピーしました');
              setTimeout(() => {
                this.urlCopied = false;
              }, 2000);
            })
            .catch(err => {
              console.error('URLのコピーに失敗しました: ', err);
            });
        }
      },
      
      // 環境変数からMicroCMS設定を取得
      getMicroCMSConfig() {
        // ランタイム設定から環境変数を取得
        const config = useRuntimeConfig();
        return {
          serviceDomain: config.public.microcmsServiceDomain,
          apiKey: config.public.microcmsApiKey
        };
      },
      
      // 関連記事を取得
      async fetchRelatedNews(categoryId) {
        if (!categoryId || !this.newsId) return;
        
        try {
          // 環境変数から設定を取得
          const config = this.getMicroCMSConfig();
          
          // MicroCMSクライアントを作成
          const client = createClient({
            serviceDomain: config.serviceDomain,
            apiKey: config.apiKey,
          });
          
          // 関連記事（同じカテゴリーの最新4件）を取得
          const result = await client.get({
            endpoint: 'news',
            queries: {
              filters: `category[equals]${categoryId}[and]id[not_equals]${this.newsId}`,
              orders: '-publishedAt',
              limit: 4
            }
          });
          
          this.relatedNews = result.contents;
        } catch (error) {
          console.error('関連記事の取得に失敗しました:', error);
          this.relatedNews = [];
        }
      },
      
      // MicroCMS APIからデータ取得
      async fetchNewsDetail(id) {
        if (!id) {
          this.hasError = true;
          this.errorMessage = 'IDパラメータが指定されていません';
          this.isLoading = false;
          return;
        }
        
        this.isLoading = true;
        this.hasError = false;
        
        try {
          // 環境変数から設定を取得
          const config = this.getMicroCMSConfig();
          
          // MicroCMSクライアントを作成
          const client = createClient({
            serviceDomain: config.serviceDomain,
            apiKey: config.apiKey,
          });
          
          // 記事詳細を取得
          const result = await client.get({
            endpoint: 'news',
            contentId: id
          });
          
          this.newsItem = result;
          
          // 関連記事を取得
          if (result.category && result.category.id) {
            await this.fetchRelatedNews(result.category.id);
          }
          
          // タイトルを設定
          document.title = `${result.title} - Web3学生トーク`;
          
        } catch (error) {
          console.error('記事詳細の取得に失敗しました:', error);
          this.hasError = true;
          this.errorMessage = error.message || '記事の取得中にエラーが発生しました';
        } finally {
          this.isLoading = false;
        }
      },
      
      // HTMLからテキストを抽出
      getContentText(html, maxLength = 200) {
        if (!html) return '';
        
        // HTMLタグを除去
        const div = document.createElement('div');
        div.innerHTML = html;
        const text = div.textContent || div.innerText || '';
        
        // 長さを制限
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
      }
    },
    
    mounted() {
      // URLからIDを取得
      this.newsId = this.getIdFromUrl();
      
      if (this.newsId) {
        // IDがある場合は記事を取得
        this.fetchNewsDetail(this.newsId);
      } else {
        // URLからIDが取得できない場合はエラー表示
        this.hasError = true;
        this.errorMessage = '記事IDが指定されていません';
        this.isLoading = false;
      }
    }
  };
  </script>
  
  <style>
  /* カテゴリーバッジ */
  .news-category-badge {
    @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-medium;
  }
  
  /* シェアボタンの通知 */
  .copied-notification {
    @apply absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 text-sm rounded;
    animation: fadeOut 2s forwards;
  }
  
  /* セクション間の境界線を消す */
  .section-no-border {
    border: none !important;
    outline: none !important;
    position: relative;
  }
  
  /* セクション間の境界線を消す */
  .section-no-border::before,
  .section-no-border::after {
    display: none !important;
    content: none !important;
    border: none !important;
  }
  
  /* ページ遷移アニメーション */
  .page-transition-wrapper {
    animation: fadeIn 0.5s ease-out;
  }
  
  /* Webkitブラウザ向けの特定スタイル */
  .page-transition-wrapper section {
    -webkit-border-after: none !important;
    -webkit-border-before: none !important;
    border-top: 0 !important;
    border-bottom: 0 !important;
  }
  
  /* SVG波形の境界線を消す */
  svg {
    border: none !important;
    display: block;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeOut {
    0% { opacity: 1; }
    70% { opacity: 1; }
    100% { opacity: 0; }
  }
  </style>