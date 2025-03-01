<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20 md:py-28 overflow-hidden">
      <!-- 背景装飾 -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-48 h-48 rounded-full bg-white"></div>
        <div class="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-blue-300"></div>
        <div class="absolute top-1/4 right-1/3 w-20 h-20 rounded-full bg-blue-200"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">お知らせ</h1>
          <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Web3学生トークからの最新情報
          </p>
        </div>
      </div>
      
      <!-- 波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#ffffff" />
      </div>
    </section>

    <!-- お知らせリスト -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <!-- お知らせフィルター -->
          <div class="mb-10 flex flex-wrap gap-2 md:gap-4 justify-center">
            <button 
              class="news-filter-btn"
              :class="activeFilter === 'all' ? 'active' : ''"
              @click="setFilter('all')"
            >
              すべて
            </button>
            <button 
              v-for="category in categories" 
              :key="category.id"
              class="news-filter-btn"
              :class="activeFilter === category.id ? 'active' : ''"
              @click="setFilter(category.id)"
            >
              {{ category.name }}
            </button>
          </div>
          
          <!-- ページ選択 -->
          <div class="mb-8 flex justify-between items-center">
            <div class="text-gray-500">
              全 <span class="font-bold">{{ totalItems }}</span> 件中 <span class="font-bold">{{ displayedItemsCount }}</span> 件表示
            </div>
            <div class="flex gap-2">
              <select 
                v-model="itemsPerPage" 
                class="px-3 py-2 rounded-lg border border-gray-200 text-sm"
                @change="updatePage(1)"
              >
                <option :value="6">6件ずつ</option>
                <option :value="12">12件ずつ</option>
                <option :value="24">24件ずつ</option>
              </select>
            </div>
          </div>

          <!-- ローディング表示 -->
          <div v-if="isLoading" class="text-center py-10">
            <div class="mb-4">
              <i class="fas fa-spinner fa-spin text-4xl text-gray-300"></i>
            </div>
            <p class="text-gray-500">読み込み中...</p>
          </div>

          <!-- お知らせ記事一覧 -->
          <div v-else class="grid md:grid-cols-2 gap-6 mb-10">
            <BaseCard v-for="news in paginatedNews" :key="news.id" className="h-full">
              <div class="flex flex-wrap items-center gap-2 md:gap-4 mb-3">
                <span class="text-gray-500 text-sm">{{ formatDate(news.date || news.publishedAt) }}</span>
                <span v-if="news.category" :class="`news-category-badge ${getCategoryClass(news.category.name)}`">
                  {{ news.category.name }}
                </span>
              </div>
              <h3 class="news-title">
                <a :href="`/newsdetail?id=${news.id}`" class="hover:text-blue-600 transition-colors">
                  {{ news.title }}
                </a>
              </h3>
              <div class="news-content" v-html="getExcerpt(news.content)"></div>
              
              <div v-if="news.links && news.links.length > 0" class="mt-4">
                <h4 class="text-base font-bold mb-2">関連リンク</h4>
                <div class="flex flex-wrap gap-2">
                  <a 
                    v-for="(link, linkIndex) in news.links" 
                    :key="linkIndex"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="news-link"
                  >
                    <i :class="link.icon + ' mr-2'" v-if="link.icon"></i>
                    {{ link.text }}
                  </a>
                </div>
              </div>
              
              <div class="mt-4">
                <a 
                  :href="`/newsdetail?id=${news.id}`"
                  class="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  続きを読む <i class="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </BaseCard>
          </div>
          
          <!-- ページネーション -->
          <div v-if="totalPages > 1" class="flex justify-center">
            <div class="flex items-center gap-1">
              <button 
                class="pagination-btn" 
                :disabled="currentPage === 1" 
                @click="updatePage(currentPage - 1)"
                :class="{ 'disabled': currentPage === 1 }"
              >
                <i class="fas fa-chevron-left"></i>
              </button>
              
              <template v-for="page in paginationRange" :key="page">
                <button 
                  v-if="page !== '...'" 
                  class="pagination-btn" 
                  :class="{ 'active': currentPage === page }"
                  @click="updatePage(page)"
                >
                  {{ page }}
                </button>
                <span v-else class="px-2 py-1">...</span>
              </template>
              
              <button 
                class="pagination-btn" 
                :disabled="currentPage === totalPages" 
                @click="updatePage(currentPage + 1)"
                :class="{ 'disabled': currentPage === totalPages }"
              >
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <!-- お知らせがない場合 -->
          <div v-if="!isLoading && filteredNews.length === 0" class="text-center py-10">
            <div class="mb-4">
              <i class="fas fa-search text-4xl text-gray-300"></i>
            </div>
            <p class="text-gray-500">該当するお知らせはありません</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 購読セクション -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="p-8 md:p-10">
              <h2 class="text-2xl font-bold mb-4">最新情報を受け取る</h2>
              <p class="text-gray-600 mb-6">
                イベントやアップデートなどの最新情報を見逃さないよう、公式SNSをフォローしてください。
              </p>
              <div class="space-y-4">
                <a :href="socialLinks.twitter.url" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                    <i :class="socialLinks.twitter.icon"></i>
                  </div>
                  <span>X（Twitter）をフォロー</span>
                </a>
                <a :href="socialLinks.discord.url" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                    <i :class="socialLinks.discord.icon"></i>
                  </div>
                  <span>Discordに参加する</span>
                </a>
              </div>
            </div>
            <div class="hidden md:block relative bg-gradient-to-br from-blue-500 to-blue-700">
              <div class="absolute inset-0 opacity-20">
                <div class="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
                <div class="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-300"></div>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-white text-opacity-90 text-6xl">
                  <i class="fas fa-bell"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SectionTransition from '~/components/common/SectionTransition.vue';
import BaseCard from '~/components/ui/BaseCard.vue';
import { SOCIAL_LINKS } from '~/utils/constants';
import { getCategoryClass, calculatePaginationRange, formatDate } from '~/utils/helpers';
import { getNewsList, getCategoryList } from '~/utils/cms';

export default {
  components: {
    SectionTransition,
    BaseCard
  },
  
  data() {
    return {
      categories: [],
      activeFilter: 'all',
      currentPage: 1,
      itemsPerPage: 6,
      newsData: [],
      isLoading: true,
      socialLinks: SOCIAL_LINKS
    };
  },
  
  computed: {
    filteredNews() {
      return this.newsData;
    },
    
    totalItems() {
      return this.filteredNews.length;
    },
    
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    
    paginationRange() {
      return calculatePaginationRange(this.currentPage, this.totalPages, 1);
    },
    
    paginatedNews() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredNews.slice(start, end);
    },
    
    displayedItemsCount() {
      return this.paginatedNews.length;
    }
  },
  
  methods: {
    formatDate,
    getCategoryClass,
    calculatePaginationRange,
    
    getExcerpt(html, maxLength = 150) {
      if (!html) return '';
      
      // HTMLタグを除去
      const div = document.createElement('div');
      div.innerHTML = html;
      const text = div.textContent || div.innerText || '';
      
      // 長さを制限
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + '...';
    },
    
    setFilter(filter) {
      this.activeFilter = filter;
      this.updatePage(1); // フィルター変更時は1ページ目に戻る
      this.fetchNews();
    },
    
    updatePage(page) {
      this.currentPage = page;
    },
    
    async fetchCategories() {
      try {
        const response = await getCategoryList();
        this.categories = response.contents;
      } catch (error) {
        console.error('カテゴリーの取得に失敗しました:', error);
        this.categories = [];
      }
    },
    
    async fetchNews() {
      this.isLoading = true;
      try {
        // フィルター設定
        const queries = {
          limit: 100 // すべての記事を取得（実際のプロジェクトでは適切なページネーションを設定）
        };
        
        // カテゴリーフィルターが「すべて」以外の場合は、フィルターを適用
        if (this.activeFilter !== 'all') {
          queries.filters = `category[equals]${this.activeFilter}`;
        }
        
        // microCMSからデータを取得
        const response = await getNewsList(queries);
        this.newsData = response.contents;
      } catch (error) {
        console.error('ニュースの取得に失敗しました:', error);
        this.newsData = [];
      } finally {
        this.isLoading = false;
      }
    }
  },
  
  head() {
    return {
      title: 'Web3学生トーク - お知らせ',
      meta: [
        { hid: 'description', name: 'description', content: 'Web3学生トークの最新情報やイベント告知、アップデート情報などを掲載しています。'},
        { hid: 'og:title', property: 'og:title', content: 'Web3学生トーク - お知らせ' },
        { hid: 'og:description', property: 'og:description', content: 'Web3学生トークの最新情報やイベント告知、アップデート情報などを掲載しています。' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.web3student-talk.com/news' }
      ]
    };
  },
  
  async mounted() {
    await this.fetchCategories();
    await this.fetchNews();
  },
  
  watch: {
    activeFilter() {
      this.fetchNews();
    }
  }
};
</script>

<style scoped>
/* フィルターセクション */
.news-filter-btn {
  @apply px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors 
         bg-blue-100 text-blue-800 hover:bg-blue-200;
}

.news-filter-btn.active {
  @apply bg-blue-600 text-white;
}

/* ニュースリスト */
.news-title {
  @apply text-lg md:text-xl font-bold mb-3 text-gray-800;
}

.news-content {
  @apply text-base text-gray-600 mb-4;
  max-height: 6rem;
  overflow: hidden;
  position: relative;
}

/* オプション: 省略記号を表示したい場合 */
.news-content::after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
  padding-left: 1rem;
  background: linear-gradient(to right, transparent, white 50%);
}

/* カテゴリーバッジ */
.news-category-badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-medium;
}

/* ニュースリンク */
.news-link {
  @apply inline-flex items-center px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 
         text-sm text-gray-700 transition-colors;
}

/* ページネーション */
.pagination-btn {
  @apply w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 
         text-gray-700 transition-colors;
}

.pagination-btn.active {
  @apply bg-blue-600 text-white border-blue-600;
}

.pagination-btn.disabled {
  @apply opacity-50 cursor-not-allowed;
}

.pagination-btn:not(.active, .disabled):hover {
  @apply bg-gray-100;
}
</style>