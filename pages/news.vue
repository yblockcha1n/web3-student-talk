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
              class="news-filter-btn"
              :class="activeFilter === 'event' ? 'active' : ''"
              @click="setFilter('event')"
            >
              イベント
            </button>
            <button 
              class="news-filter-btn"
              :class="activeFilter === 'update' ? 'active' : ''"
              @click="setFilter('update')"
            >
              アップデート
            </button>
            <button 
              class="news-filter-btn"
              :class="activeFilter === 'important' ? 'active' : ''"
              @click="setFilter('important')"
            >
              重要なお知らせ
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

          <!-- お知らせ記事一覧 -->
          <div class="grid md:grid-cols-2 gap-6 mb-10">
            <div 
              v-for="(news, index) in paginatedNews" 
              :key="index" 
              class="news-card"
            >
              <div class="flex flex-wrap items-center gap-2 md:gap-4 mb-3">
                <span class="text-gray-500 text-sm">{{ news.date }}</span>
                <span class="news-category-badge" :class="getCategoryClass(news.category)">
                  {{ getCategoryName(news.category) }}
                </span>
              </div>
              <h3 class="news-title">{{ news.title }}</h3>
              <div class="news-content" v-html="news.content"></div>
              
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
                    <i :class="link.icon" class="mr-2"></i>
                    {{ link.text }}
                  </a>
                </div>
              </div>
            </div>
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
          <div v-if="filteredNews.length === 0" class="text-center py-10">
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
                <a href="https://twitter.com/Web3studenttalk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                    <i class="fab fa-twitter"></i>
                  </div>
                  <span>X（Twitter）をフォロー</span>
                </a>
                <a href="https://discord.com/invite/BbxuwH5WS3" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                    <i class="fab fa-discord"></i>
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

<script setup>
import SectionTransition from '~/components/SectionTransition.vue'
import { ref, computed, onMounted, watch } from 'vue'

useHead({
  title: 'Web3学生トーク - お知らせ'
})

// フィルター管理
const activeFilter = ref('all')
const setFilter = (filter) => {
  activeFilter.value = filter
  updatePage(1) // フィルター変更時は1ページ目に戻る
}

// ページネーション管理
const currentPage = ref(1)
const itemsPerPage = ref(6)

const updatePage = (page) => {
  currentPage.value = page
  // URLパラメータも更新する場合
  // const route = useRoute()
  // const router = useRouter()
  // router.push({ query: { ...route.query, page: page } })
}

// ------------------------------------------------------------
// この部分は将来的にCMSからのデータに置き換える
// ------------------------------------------------------------
// お知らせデータ
const newsData = [
  {
    date: '24/12/26',
    category: 'important',
    title: '年末年始休業のお知らせ',
    content: `
      <p>平素より、Web3学生トークをご利用いただき、誠にありがとうございます。</p>
      <p>年末年始の休業期間について、下記の通りお知らせいたします。</p>
      <ul>
        <li>休業期間: 2024年12月29日(日) 〜 2025年1月3日(金)</li>
      </ul>
      <p>期間中はXスペースの開催およびDiscordでのサポート対応をお休みさせていただきます。</p>
      <p>2025年1月4日(土)より通常通り運営を再開いたします。ご不便をおかけしますが、何卒ご了承くださいますようお願い申し上げます。</p>
    `,
    links: []
  },
  {
    date: '25/1/1',
    category: 'update',
    title: '新年のご挨拶',
    content: `
      <p>あけましておめでとうございます。</p>
      <p>旧年中は格別のご愛顧を賜り、誠にありがとうございました。</p>
      <p>本年もWeb3学生トークをどうぞよろしくお願い申し上げます。</p>
      <p>2025年は、より多くのWeb3初心者の方が参加しやすいコミュニティを目指して、様々な企画を計画しております。今後のお知らせにご期待ください。</p>
    `,
    links: []
  },
  {
    date: '24/11/26',
    category: 'update',
    title: 'ウェブサイトリニューアルのお知らせ',
    content: `
      <p>Web3学生トークの公式ウェブサイトをリニューアルしました。</p>
      <p>より見やすく、使いやすいデザインに一新し、コミュニティの活動内容やPizzaトークンについての情報も充実させました。</p>
      <p>今後もコンテンツの拡充を予定しておりますので、ぜひご期待ください。</p>
    `,
    links: []
  },
  {
    date: '24/11/15',
    category: 'event',
    title: 'Web3初心者向けオンラインセミナー開催のお知らせ',
    content: `
      <p>Web3やブロックチェーンについて基礎から学べるオンラインセミナーを開催します。</p>
      <p><strong>開催日時:</strong> 2024年12月10日(火) 19:00〜20:30</p>
      <p><strong>参加方法:</strong> Discordのイベントチャンネルからご参加いただけます。事前登録は不要です。</p>
      <p><strong>内容:</strong></p>
      <ul>
        <li>Web3とは何か？基本概念の解説</li>
        <li>ブロックチェーン技術の基礎知識</li>
        <li>NFTやDeFiの仕組みと活用例</li>
        <li>質疑応答</li>
      </ul>
      <p>初めての方でも分かりやすく解説しますので、お気軽にご参加ください。</p>
    `,
    links: [
      {
        text: 'Discordに参加',
        url: 'https://discord.com/invite/BbxuwH5WS3',
        icon: 'fab fa-discord'
      }
    ]
  },
  {
    date: '24/10/20',
    category: 'update',
    title: 'Pizzaトークン配布基準の更新について',
    content: `
      <p>コミュニティトークン「Pizza」の配布基準を一部更新しました。</p>
      <p>主な変更点は以下の通りです：</p>
      <ul>
        <li>Xスペース参加時の配布量を調整</li>
        <li>コミュニティ貢献に対する新たな報酬カテゴリを追加</li>
        <li>特別イベント参加時のボーナス配布を導入</li>
      </ul>
      <p>詳細は公式ドキュメントをご確認ください。</p>
    `,
    links: [
      {
        text: '配布基準の詳細',
        url: 'https://west-pizza.notion.site/2d54b18c324e41c0af7af6bd8b4262b6',
        icon: 'fas fa-external-link-alt'
      }
    ]
  },
  {
    date: '24/10/05',
    category: 'event',
    title: '第3回Web3ハッカソン参加者募集',
    content: `
      <p>コミュニティメンバーと共にWeb3プロジェクトを開発する第3回ハッカソンを開催します。</p>
      <p><strong>開催期間:</strong> 2024年11月15日(金) 〜 11月17日(日)</p>
      <p><strong>参加資格:</strong> Web3に興味のある学生・社会人</p>
      <p><strong>テーマ:</strong> 「Web3技術を活用した社会課題解決」</p>
      <p>プログラミング経験の有無は問いません。アイデアを持ち寄って、チームで開発に挑戦しましょう。</p>
    `,
    links: [
      {
        text: '参加申し込み',
        url: 'https://discord.com/invite/BbxuwH5WS3',
        icon: 'fas fa-sign-in-alt'
      }
    ]
  },
  {
    date: '24/09/18',
    category: 'update',
    title: 'Discord新チャンネル開設のお知らせ',
    content: `
      <p>Web3学生トークのDiscordサーバーに、以下の新チャンネルを開設しました：</p>
      <ul>
        <li>「初心者質問室」- Web3やブロックチェーンに関する初心者向け質問専用チャンネル</li>
        <li>「プロジェクト共有」- 自分のWeb3プロジェクトを共有するためのチャンネル</li>
        <li>「求人・インターン情報」- Web3関連の求人やインターン情報を共有するチャンネル</li>
      </ul>
      <p>ぜひ積極的にご活用ください。</p>
    `,
    links: [
      {
        text: 'Discordサーバーに参加',
        url: 'https://discord.com/invite/BbxuwH5WS3',
        icon: 'fab fa-discord'
      }
    ]
  },
  {
    date: '24/09/05',
    category: 'event',
    title: 'AMA（Ask Me Anything）セッション開催のお知らせ',
    content: `
      <p>Web3業界で活躍する専門家をゲストに迎え、AMAセッションを開催します。</p>
      <p><strong>ゲスト:</strong> 山田太郎氏（DeFiプロジェクト「XXX」創業者）</p>
      <p><strong>日時:</strong> 2024年9月20日(金) 20:00〜21:30</p>
      <p><strong>テーマ:</strong> 「DeFiの最新トレンドと将来展望」</p>
      <p>質問はXスペース内で受け付けます。お気軽にご参加ください。</p>
    `,
    links: [
      {
        text: 'イベント詳細',
        url: 'https://twitter.com/Web3studenttalk',
        icon: 'fab fa-twitter'
      }
    ]
  },
  {
    date: '24/08/22',
    category: 'important',
    title: 'プライバシーポリシー更新のお知らせ',
    content: `
      <p>Web3学生トークのプライバシーポリシーを更新しました。</p>
      <p>主な変更点は以下の通りです：</p>
      <ul>
        <li>個人情報の取り扱いに関する記述の明確化</li>
        <li>コミュニティデータの利用目的の追加</li>
        <li>Pizzaトークン関連の情報取り扱いについての追記</li>
      </ul>
      <p>詳細は公式ウェブサイトのプライバシーポリシーページをご確認ください。</p>
    `,
    links: [
      {
        text: 'プライバシーポリシーを確認',
        url: 'https://discord.com/invite/BbxuwH5WS3',
        icon: 'fas fa-shield-alt'
      }
    ]
  },
  {
    date: '24/08/10',
    category: 'update',
    title: 'Xスペース定期開催スケジュール変更のお知らせ',
    content: `
      <p>Xスペースの定期開催スケジュールを以下のように変更いたします：</p>
      <ul>
        <li>火曜日 20:00〜 「Web3基礎知識シェア会」</li>
        <li>木曜日 20:00〜 「最新トレンド・ニュース解説」</li>
        <li>金曜日 20:00〜 「ゲストスピーカーセッション」</li>
      </ul>
      <p>より充実した内容でお届けしますので、ぜひご参加ください。</p>
    `,
    links: []
  },
  {
    date: '24/07/28',
    category: 'event',
    title: 'サマーミートアップ開催のお知らせ',
    content: `
      <p>Web3学生トーク初のオフラインミートアップを開催します！</p>
      <p><strong>日時:</strong> 2024年8月15日(木) 18:00〜20:00</p>
      <p><strong>場所:</strong> 渋谷区内のコワーキングスペース（詳細は参加者にのみお知らせします）</p>
      <p><strong>参加費:</strong> 無料</p>
      <p>Web3に興味のある方ならどなたでも参加できます。軽食とドリンクを用意していますので、お気軽にご参加ください。</p>
    `,
    links: [
      {
        text: '参加申し込み（先着30名）',
        url: 'https://discord.com/invite/BbxuwH5WS3',
        icon: 'fas fa-calendar-alt'
      }
    ]
  },
  {
    date: '24/07/15',
    category: 'update',
    title: 'コミュニティメンバー1000人達成！',
    content: `
      <p>Web3学生トークのコミュニティメンバーが1000人を突破しました！</p>
      <p>いつも活発に参加してくださる皆様のおかげです。心より感謝申し上げます。</p>
      <p>これを記念して、特別なPizzaトークン配布イベントを計画中です。詳細は後日お知らせしますので、お楽しみに！</p>
    `,
    links: []
  },
  {
    date: '24/07/01',
    category: 'event',
    title: 'Web3勉強会シリーズ開始のお知らせ',
    content: `
      <p>Web3の基礎から応用まで体系的に学べる勉強会シリーズを開始します。</p>
      <p><strong>日程:</strong> 毎週水曜日 19:00〜20:30</p>
      <p><strong>形式:</strong> Discordの音声チャンネルでのライブセッション</p>
      <p><strong>第1回:</strong> 7月10日「ブロックチェーンの基本概念と歴史」</p>
      <p>録画も公開予定ですが、質疑応答に参加するためにはライブでの参加をおすすめします。</p>
    `,
    links: [
      {
        text: 'カリキュラムを見る',
        url: 'https://discord.com/invite/BbxuwH5WS3',
        icon: 'fas fa-book'
      }
    ]
  }
]
// ------------------------------------------------------------
// CMSとの統合時にはこの部分を置き換える
// ------------------------------------------------------------

// フィルター適用したお知らせ
const filteredNews = computed(() => {
  if (activeFilter.value === 'all') {
    return newsData
  }
  return newsData.filter(news => news.category === activeFilter.value)
})

// 総アイテム数
const totalItems = computed(() => filteredNews.value.length)

// 総ページ数
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value))

// ページネーション表示用の範囲
const paginationRange = computed(() => {
  const delta = 1 // 現在のページの前後に表示するページ数
  let range = []
  
  if (totalPages.value <= 5) {
    // 5ページ以下の場合は全ページ表示
    range = Array.from({ length: totalPages.value }, (_, i) => i + 1)
  } else {
    // 最初のページは常に表示
    range.push(1)
    
    // 現在のページの前後を表示
    const beforePage = Math.max(2, currentPage.value - delta)
    const afterPage = Math.min(totalPages.value - 1, currentPage.value + delta)
    
    // 省略記号の表示判定
    if (beforePage > 2) range.push('...')
    
    // 前後のページを追加
    for (let i = beforePage; i <= afterPage; i++) {
      range.push(i)
    }
    
    // 省略記号の表示判定
    if (afterPage < totalPages.value - 1) range.push('...')
    
    // 最後のページは常に表示
    range.push(totalPages.value)
  }
  
  return range
})

// 現在のページに表示するアイテム
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredNews.value.slice(start, end)
})

// 表示件数
const displayedItemsCount = computed(() => paginatedNews.value.length)

// カテゴリーに応じたスタイルを取得
const getCategoryClass = (category) => {
  switch (category) {
    case 'important':
      return 'important'
    case 'event':
      return 'event'
    case 'update':
      return 'update'
    default:
      return 'default'
  }
}

// カテゴリー名を取得
const getCategoryName = (category) => {
  switch (category) {
    case 'important':
      return '重要なお知らせ'
    case 'event':
      return 'イベント'
    case 'update':
      return 'アップデート'
    default:
      return 'その他'
  }
}

// URLからページ情報を取得
onMounted(() => {
  // URLパラメータを使用する場合
  // const route = useRoute()
  // if (route.query.page) {
  //   const page = parseInt(route.query.page)
  //   if (!isNaN(page) && page > 0 && page <= totalPages.value) {
  //     currentPage.value = page
  //   }
  // }
})
</script>

<style scoped>
/* ベースレイアウト */
.news-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8;
}

.news-header {
  @apply mb-8;
}

/* フィルターセクション */
.filter-section {
  @apply flex flex-wrap gap-3 mb-6;
}

.news-filter-btn {
  @apply px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors 
         bg-blue-100 text-blue-800 hover:bg-blue-200;
}

.news-filter-btn.active {
  @apply bg-blue-600 text-white;
}

/* ニュースリスト */
.news-list {
  @apply space-y-6;
}

/* ニュースカード */
.news-card {
  @apply bg-white p-6 rounded-xl shadow-sm border border-gray-100 
         hover:shadow-md transition-all duration-300;
}

.news-card-header {
  @apply flex items-start justify-between mb-4;
}

.news-date {
  @apply text-sm text-gray-500;
}

.news-title {
  @apply text-lg md:text-xl font-bold mb-3 text-gray-800;
}

.news-content {
  @apply text-base text-gray-600 mb-4;
}

/* カテゴリーバッジ */
.category-badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-medium;
}

.category-badge.important {
  @apply bg-red-100 text-red-800;
}

.category-badge.event {
  @apply bg-green-100 text-green-800;
}

.category-badge.update {
  @apply bg-blue-100 text-blue-800;
}

.category-badge.other {
  @apply bg-gray-100 text-gray-800;
}

/* レスポンシブデザイン */
@media (max-width: 640px) {
  .news-container {
    @apply px-4 py-6;
  }
  
  .news-card {
    @apply p-4;
  }
  
  .news-title {
    @apply text-base;
  }
}
</style>