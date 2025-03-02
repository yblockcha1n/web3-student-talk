<template>
    <div>
      <!-- ヒーローセクション -->
      <section class="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20 md:py-28 overflow-hidden">
        <!-- 背景装飾 -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div class="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-blue-300"></div>
          <div class="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-blue-200"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">お問い合わせ</h1>
            <p class="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              お気軽にご連絡ください
            </p>
          </div>
        </div>
        
        <!-- 波形トランジション -->
        <div class="absolute bottom-0 left-0 w-full">
          <SectionTransition color="#ffffff" />
        </div>
      </section>
  
      <!-- コンタクトセクション -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-10 md:gap-16">
              <!-- 左側: 連絡方法一覧 -->
              <div>
                <h2 class="text-3xl font-bold mb-8 text-gray-800">ご連絡方法</h2>
                
                <div class="space-y-8">
                  <!-- Discordカード -->
                  <BaseCard class="contact-card group">
                    <template #header>
                      <div class="contact-card-header bg-indigo-500">
                        <i class="fab fa-discord text-2xl"></i>
                      </div>
                    </template>
                    <h3 class="contact-card-title">Discord</h3>
                    <p class="contact-card-description">
                      コミュニティの中心的な交流の場です。質問やご相談はDiscordサーバーでご連絡ください。
                    </p>
                    <div class="mt-4">
                      <a :href="socialLinks.discord.url" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center bg-indigo-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
                      >
                        <i :class="socialLinks.discord.icon + ' mr-2'"></i>
                        Discordに参加する
                      </a>
                    </div>
                  </BaseCard>
                  
                  <!-- X(Twitter)カード -->
                  <BaseCard class="contact-card group">
                    <template #header>
                      <div class="contact-card-header bg-black">
                        <i class="fab fa-twitter text-2xl"></i>
                      </div>
                    </template>
                    <h3 class="contact-card-title">X (Twitter)</h3>
                    <p class="contact-card-description">
                      公式Xアカウントへのダイレクトメッセージや、リプライでもお問い合わせいただけます。
                    </p>
                    <div class="mt-4">
                      <a :href="socialLinks.twitter.url" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                      >
                        <i :class="socialLinks.twitter.icon + ' mr-2'"></i>
                        Xでフォローする
                      </a>
                    </div>
                  </BaseCard>
                  
                  <!-- Noteカード -->
                  <BaseCard class="contact-card group">
                    <template #header>
                      <div class="contact-card-header bg-black">
                        <span class="text-xl font-bold text-white">note</span>
                      </div>
                    </template>
                    <h3 class="contact-card-title">note</h3>
                    <p class="contact-card-description">
                      noteでも情報発信しています。noteのメッセージ機能からもご連絡いただけます。
                    </p>
                    <div class="mt-4">
                      <a :href="socialLinks.note.url" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                      >
                        <span class="font-bold mr-2">note</span>
                        noteをチェックする
                      </a>
                    </div>
                  </BaseCard>
                </div>
              </div>
              
              <!-- 右側: FAQとお問い合わせフォーム -->
              <div>
                <h2 class="text-3xl font-bold mb-8 text-gray-800">よくある質問</h2>
                
                <div class="faq-container mb-8">
                  <div class="faq-item" v-for="(faq, index) in faqItems" :key="index">
                    <button class="faq-question" 
                      :class="{ 'active': activeFaq === index }"
                      @click="toggleFaq(index)"
                    >
                      <span>{{ faq.question }}</span>
                      <i class="fas" :class="activeFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                    </button>
                    <div class="faq-answer" 
                      :class="{ 'active': activeFaq === index }"
                      :style="{ maxHeight: activeFaq === index ? '200px' : '0' }"
                    >
                      {{ faq.answer }}
                    </div>
                  </div>
                </div>
                
                <!-- お問い合わせボックス -->
                <BaseCard className="bg-gradient-to-r from-blue-50 to-cyan-50 border-none">
                  <h3 class="text-xl font-bold mb-4 text-gray-800">まだ質問がありますか？</h3>
                  <p class="text-gray-600 mb-4">
                    上記で解決しない場合は、以下のいずれかの方法でお気軽にお問い合わせください。
                  </p>
                  <div class="flex flex-wrap gap-4">
                    <a :href="socialLinks.discord.url" 
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <i :class="socialLinks.discord.icon + ' mr-2'"></i>
                      Discord
                    </a>
                    <a :href="socialLinks.twitter.url" 
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <i :class="socialLinks.twitter.icon + ' mr-2'"></i>
                      X (Twitter)
                    </a>
                    <a :href="socialLinks.note.url" 
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span class="font-bold mr-2">note</span>
                      note
                    </a>
                  </div>
                </BaseCard>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- コミュニティバナー -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <div class="grid md:grid-cols-2 gap-0">
              <div class="p-8 md:p-10">
                <h2 class="text-2xl font-bold mb-4">コミュニティに参加する</h2>
                <p class="text-gray-600 mb-6">
                  Web3学生トークは、Web3やブロックチェーン技術に興味を持つ学生や若手社会人のためのオープンなコミュニティです。気軽にご参加ください。
                </p>
                <a :href="socialLinks.discord.url" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                >
                  <i :class="socialLinks.discord.icon + ' mr-2'"></i>
                  コミュニティに参加
                </a>
              </div>
              <div class="hidden md:block relative bg-gradient-to-br from-blue-500 to-blue-700">
                <div class="absolute inset-0 opacity-20">
                  <div class="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
                  <div class="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-300"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-white text-opacity-90 text-6xl">
                    <i class="fas fa-users"></i>
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
  import SectionTransition from '~/components/common/SectionTransition.vue'
  import BaseCard from '~/components/ui/BaseCard.vue'
  import { SOCIAL_LINKS, FAQ_ITEMS } from '~/utils/constants'
  import { useFaqToggle } from '~/composables/useAnimation'
  import { useOgp } from '~/utils/useOgp'
  
  // OGP設定
  useOgp({
    title: 'Web3学生トーク - お問い合わせ',
    description: 'Web3学生トークへのお問い合わせ方法とよくある質問をご紹介しています。お気軽にご連絡ください。',
    image: '/images/ogp/contact.svg',
  });
  
  const socialLinks = SOCIAL_LINKS
  const faqItems = FAQ_ITEMS
  const { activeFaq, toggleFaq } = useFaqToggle()
  </script>
  
  <style scoped>
  /* お問い合わせカード */
  .contact-card-header {
    @apply p-4 flex items-center justify-center text-white;
    height: 60px;
  }
  
  .contact-card-title {
    @apply text-xl font-bold mb-2 text-gray-800;
  }
  
  .contact-card-description {
    @apply text-gray-600 text-sm;
  }
  
  /* FAQ */
  .faq-container {
    @apply space-y-3;
  }
  
  .faq-item {
    @apply bg-white rounded-lg border border-gray-200 overflow-hidden;
  }
  
  .faq-question {
    @apply w-full text-left px-5 py-4 flex items-center justify-between font-medium text-gray-800;
  }
  
  .faq-question.active {
    @apply bg-blue-50;
  }
  
  .faq-answer {
    @apply px-5 pb-0 text-gray-600 text-sm overflow-hidden transition-all duration-300;
    max-height: 0;
  }
  
  .faq-answer.active {
    @apply pb-4;
  }
  </style>