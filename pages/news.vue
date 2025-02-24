<template>
    <div>
      <!-- ヒーローセクション -->
      <section class="bg-blue-900 text-white py-16 relative">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl font-bold mb-4">お知らせ</h1>
            <p class="text-xl text-blue-100">
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
      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <!-- お知らせフィルター -->
            <div class="mb-8 flex flex-wrap gap-2 md:gap-4 justify-center">
              <button 
                class="px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors"
                :class="activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'"
                @click="setFilter('all')"
              >
                すべて
              </button>
              <button 
                class="px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors"
                :class="activeFilter === 'event' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'"
                @click="setFilter('event')"
              >
                イベント
              </button>
              <button 
                class="px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors"
                :class="activeFilter === 'update' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'"
                @click="setFilter('update')"
              >
                アップデート
              </button>
              <button 
                class="px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors"
                :class="activeFilter === 'important' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'"
                @click="setFilter('important')"
              >
                重要なお知らせ
              </button>
            </div>
  
            <!-- お知らせ記事一覧 -->
            <div class="space-y-6">
              <div v-for="(news, index) in filteredNews" :key="index" class="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div class="flex flex-wrap items-center gap-2 md:gap-4 mb-3">
                  <span class="text-gray-500 text-sm">{{ news.date }}</span>
                  <span class="px-3 py-1 rounded-full text-xs font-medium" :class="getCategoryClass(news.category)">
                    {{ getCategoryName(news.category) }}
                  </span>
                </div>
                <h3 class="text-lg md:text-xl font-bold mb-3">{{ news.title }}</h3>
                <div class="prose text-sm md:text-base text-gray-600 mb-4" v-html="news.content"></div>
                
                <div v-if="news.links && news.links.length > 0" class="mt-4">
                  <h4 class="text-base font-bold mb-2">関連リンク</h4>
                  <div class="flex flex-wrap gap-2">
                    <a 
                      v-for="(link, linkIndex) in news.links" 
                      :key="linkIndex"
                      :href="link.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center px-3 py-1 rounded-lg text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <i :class="link.icon" class="mr-2"></i>
                      {{ link.text }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- ページがない場合 -->
            <div v-if="filteredNews.length === 0" class="text-center py-10">
              <p class="text-gray-500">該当するお知らせはありません</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import SectionTransition from '~/components/SectionTransition.vue'
  
  useHead({
    title: 'Web3学生トーク - お知らせ'
  })
  
  // フィルター管理
  const activeFilter = ref('all')
  const setFilter = (filter) => {
    activeFilter.value = filter
  }
  
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
    }
  ]
  
  // フィルター適用したお知らせ
  const filteredNews = computed(() => {
    if (activeFilter.value === 'all') {
      return newsData
    }
    return newsData.filter(news => news.category === activeFilter.value)
  })
  
  // カテゴリーに応じたスタイルを取得
  const getCategoryClass = (category) => {
    switch (category) {
      case 'important':
        return 'bg-red-100 text-red-800'
      case 'event':
        return 'bg-green-100 text-green-800'
      case 'update':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
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
  </script>