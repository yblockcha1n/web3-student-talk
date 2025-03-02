<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="relative h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <HeroBackground />
      
      <div class="container mx-auto px-4 z-10">
        <div class="max-w-3xl mt-[-100px]">
          <!-- タイトル部分 - レイアウト固定 -->
          <div class="flex flex-col">
            <div class="text-5xl md:text-7xl font-bold mb-4 text-gray-900">Web3の</div>
            <div class="h-16 md:h-20 relative">
              <div class="absolute inset-0 flex items-center">
                <span class="text-5xl md:text-7xl font-bold text-[#5de8e8] typewriter-text">{{ displayText }}</span>
                <span class="text-5xl md:text-7xl font-bold cursor-blink ml-1">|</span>
              </div>
            </div>
          </div>
          
          <p class="text-xl mb-8 text-gray-700 mt-4">
            Web3やメタバースについて、気軽に話せるコミュニティ
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a :href="socialLinks.discord.url" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              <i :class="socialLinks.discord.icon + ' mr-2'"></i>
              Discordに参加
            </a>
            <NuxtLink 
              to="/about"
              class="btn btn-outline text-gray-700"
            >
              <i class="fas fa-info-circle mr-2"></i>
              コミュニティについて
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 青いセクションへの波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#1e3a8a" />
      </div>
    </section>

    <!-- 特徴セクション (青背景部分) -->
    <section class="py-20 bg-blue-900 text-white relative">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 class="text-3xl font-bold mb-6">私たちの信念</h3>
              <p class="text-xl mb-8">
                『未来を創る』を共有できるコミュニティを目指して、Web3技術の可能性を探求しています。
              </p>
              <p class="text-lg text-blue-200">
                ブロックチェーン技術を通じて、新しい価値と仕組みを生み出していく。
                それが私たちの目標です。
              </p>
            </div>
            <div>
              <div class="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
                <h3 class="text-2xl font-bold mb-6 flex items-center">
                  <i class="fas fa-bullhorn mr-3"></i>
                  お知らせ
                </h3>
                <div v-if="isNewsLoading" class="flex justify-center my-6">
                  <i class="fas fa-spinner fa-spin text-2xl text-white/70"></i>
                </div>
                <ul v-else class="space-y-4">
                  <li v-for="news in latestNews" :key="news.id" class="border-b border-white/20 pb-3">
                    <span class="text-blue-200 block">{{ formatDate(news.date || news.publishedAt) }}</span>
                    <a 
                      :href="`/newsdetail?id=${news.id}`"
                      class="hover:text-blue-200 transition-colors"
                    >
                      {{ news.title }}
                    </a>
                    <span v-if="news.category" class="ml-2 text-xs px-2 py-0.5 rounded-full" :class="getCategoryClass(news.category.name)">
                      {{ news.category.name }}
                    </span>
                  </li>
                </ul>
                <div class="mt-6">
                  <NuxtLink 
                    to="/news"
                    class="inline-block px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition-all"
                  >
                    すべてのお知らせを見る <i class="fas fa-arrow-right ml-2"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 白いセクションへの波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#ffffff" />
      </div>
    </section>

    <!-- 特徴セクション -->
    <section class="py-20 bg-white relative">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">コミュニティの特徴</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card hover:scale-105">
            <div class="w-12 h-12 bg-[#eafcfc] text-[#5de8e8] rounded-lg flex items-center justify-center mb-4">
              <i class="fas fa-comments text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">定期的な交流</h3>
            <p class="text-gray-600">
              毎週火・木・金曜日にXスペースで各話題について語り合います。初心者から経験者まで、誰でも参加できます。
            </p>
          </div>
          <div class="card hover:scale-105">
            <div class="w-12 h-12 bg-[#eafcfc] text-[#5de8e8] rounded-lg flex items-center justify-center mb-4">
              <i class="fas fa-users text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">オープンなコミュニティ</h3>
            <p class="text-gray-600">
              学生だけでなく、社会人の方も大歓迎。Web3やメタバース、VR/ARに興味がある方なら誰でも参加できます。
            </p>
          </div>
          <div class="card hover:scale-105">
            <div class="w-12 h-12 bg-[#eafcfc] text-[#5de8e8] rounded-lg flex items-center justify-center mb-4">
              <i class="fas fa-pizza-slice text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">コミュニティトークン</h3>
            <p class="text-gray-600">
              独自のコミュニティトークン「Pizza」を発行。コミュニティ内での活動や貢献に応じて配布されます。
            </p>
          </div>
        </div>
      </div>
      
      <!-- グレーセクションへの波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#f9fafb" />
      </div>
    </section>

    <!-- 活動内容セクション -->
    <section class="py-20 bg-gray-50 relative">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">活動内容</h2>
        <div class="grid lg:grid-cols-5 gap-8">
          <!-- 左側：活動内容カード（3カラム→2カラム） -->
          <div class="lg:col-span-3 space-y-8">
            <div class="card">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <i class="fas fa-microphone text-[#5de8e8] mr-3"></i>
                Xスペーストーク
              </h3>
              <p class="text-gray-600">
                定期的なXスペースでの交流会を開催。Web3に関する様々なトピックについて、
                自由に意見交換ができる場を提供しています。
              </p>
            </div>
            <div class="card">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <i class="fab fa-discord text-[#5de8e8] mr-3"></i>
                Discordコミュニティ
              </h3>
              <p class="text-gray-600">
                Discordサーバーでは、日常的な交流や情報共有が活発に行われています。
                初心者の方でも気軽に質問できる環境を整えています。
              </p>
            </div>
            <div class="card">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <i class="fas fa-book text-[#5de8e8] mr-3"></i>
                Web3用語集（準備中）
              </h3>
              <p class="text-gray-600">
                Web3の基礎知識や用語をわかりやすく解説する用語集を作成中。
                初心者の方の学習をサポートします。
              </p>
            </div>
          </div>
          
          <!-- 右側：X埋め込み（モバイルでは非表示） -->
          <div class="lg:col-span-2 hidden lg:block">
            <div class="card h-full overflow-hidden">
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <i class="fab fa-twitter text-[#5de8e8] mr-3"></i>
                最新のツイート
              </h3>
              <div class="twitter-embed-container" ref="twitterContainer">
                <!-- この部分は動的に挿入されます -->
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 白いセクションへの波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#ffffff" />
      </div>
    </section>

    <!-- CTAセクション -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6 text-gray-900">コミュニティに参加する</h2>
        <p class="text-xl text-gray-600 mb-8">
          Web3の未来について、一緒に語り合いませんか？
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <a :href="socialLinks.discord.url" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            <i :class="socialLinks.discord.icon + ' mr-2'"></i>
            Discordに参加
          </a>
          <a :href="socialLinks.twitter.url" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline text-gray-700"
          >
            <i :class="socialLinks.twitter.icon + ' mr-2'"></i>
            X（Twitter）をフォロー
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroBackground from '~/components/home/HeroBackground.vue';
import SectionTransition from '~/components/common/SectionTransition.vue';
import { SOCIAL_LINKS } from '~/utils/constants';
import { useTypewriterAnimation } from '~/composables/useAnimation';
import { formatDate, getCategoryClass } from '~/utils/helpers';
import { getLatestNews } from '~/utils/cms';
import { useOgp } from '~/utils/useOgp';

export default {
  components: {
    HeroBackground,
    SectionTransition
  },
  
  setup() {
    const { displayText } = useTypewriterAnimation();
    
    // OGP設定
    useOgp({
      title: 'Web3学生トーク - ホーム',
      description: 'Web3やメタバースについて気軽に話せるコミュニティサイト。定期的なXスペーストークや情報交換の場を提供しています。',
      image: '/images/ogp/home.svg',
    });
    
    return {
      displayText
    };
  },
  
  data() {
    return {
      socialLinks: SOCIAL_LINKS,
      latestNews: [],
      isNewsLoading: true,
      twitterContainer: null
    };
  },
  
  methods: {
    formatDate,
    getCategoryClass,
    
    async fetchLatestNews() {
      this.isNewsLoading = true;
      try {
        const response = await getLatestNews(3); // 最新3件を取得
        this.latestNews = response.contents;
      } catch (error) {
        console.error('最新のお知らせの取得に失敗しました:', error);
        this.latestNews = [];
      } finally {
        this.isNewsLoading = false;
      }
    },
    
    loadTwitterWidget() {
      if (!this.$refs.twitterContainer) return;
      
      // 既存のウィジェットを削除
      this.$refs.twitterContainer.innerHTML = '';
      
      // アンカータグを追加
      const anchor = document.createElement('a');
      anchor.className = 'twitter-timeline';
      anchor.href = 'https://twitter.com/Web3studenttalk?ref_src=twsrc%5Etfw';
      anchor.setAttribute('data-height', '500');
      anchor.textContent = 'Tweets by Web3studenttalk';
      this.$refs.twitterContainer.appendChild(anchor);
      
      // スクリプトタグを追加
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://platform.twitter.com/widgets.js';
      script.charset = 'utf-8';
      this.$refs.twitterContainer.appendChild(script);
    }
  },
  
  // head()関数を削除（useOgpで代替）
  
  mounted() {
    this.fetchLatestNews();
    this.loadTwitterWidget();
  }
};
</script>

<style>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-out 0.6s forwards;
  opacity: 0;
}

.twitter-embed-container {
  min-height: 500px;
  background-color: #f8fafc;
  border-radius: 0.5rem;
  overflow: hidden;
}

.typewriter-text {
  white-space: nowrap;
}

.cursor-blink {
  animation: blink 0.7s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>