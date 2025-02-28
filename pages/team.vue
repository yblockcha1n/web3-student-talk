<template>
    <div>
      <!-- ヒーローセクション -->
      <section class="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32 overflow-hidden">
        <!-- 背景装飾 -->
        <div class="absolute top-0 left-0 w-full h-full opacity-10">
          <div class="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div class="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-blue-300"></div>
          <div class="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-blue-200"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">運営メンバー</h1>
            <p class="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              コミュニティを支える中心メンバー
            </p>
          </div>
        </div>
        
        <!-- 波形トランジション -->
        <div class="absolute bottom-0 left-0 w-full">
          <SectionTransition color="#ffffff" />
        </div>
      </section>
  
      <!-- メンバー紹介セクション -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 text-center text-gray-800">コアメンバー</h2>
            <p class="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Web3学生トークは、Web3やブロックチェーン技術に興味を持つ学生を中心に、有志のメンバーによって運営されています。
              それぞれ専門分野を持ち、イベント企画やコミュニティ運営を担当しています。
            </p>
            
            <!-- メンバーカード -->
            <div class="grid md:grid-cols-3 gap-10 md:gap-8 mb-16">
              <TeamCard 
                v-for="(member, index) in teamMembers" 
                :key="index" 
                :member="member"
              />
            </div>
  
            <!-- コミュニティ参加セクション -->
            <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 md:p-12 rounded-3xl shadow-sm mb-16">
              <div class="flex flex-col md:flex-row items-center gap-8">
                <div class="md:w-3/5">
                  <h2 class="text-2xl md:text-3xl font-bold mb-4">コミュニティに参加しませんか？</h2>
                  <div class="space-y-4">
                    <p class="text-gray-700">
                      Web3学生トークは、初心者から経験者まで、Web3やブロックチェーン技術に興味がある方なら誰でも参加できるオープンなコミュニティです。
                    </p>
                    <p class="text-gray-700">
                      Discordでは日常的な交流や質問の場を提供し、Xでの定期スペースでは様々なWeb3関連トピックについて語り合っています。
                    </p>
                    <p class="text-gray-700">
                      積極的に参加し、コミュニティに貢献いただける方は、運営メンバーとして一緒に活動することも可能です。
                    </p>
                  </div>
                </div>
                
                <div class="md:w-2/5 flex justify-center">
                  <a :href="socialLinks.discord.url" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="discord-button"
                  >
                    <i :class="socialLinks.discord.icon + ' text-2xl mr-3'"></i>
                    <span>Discordに参加する</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- セクション区切り -->
        <div class="container mx-auto px-4 mt-24">
          <div class="max-w-6xl mx-auto">
            <div class="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </section>
      
      <!-- 活動方針セクション -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 text-center text-gray-800">活動方針</h2>
            <p class="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              私たちの活動は、以下の3つの柱を中心に展開しています。
            </p>
            
            <div class="grid md:grid-cols-3 gap-8">
              <!-- 活動方針カード1 -->
              <div class="policy-card group">
                <div class="policy-icon bg-blue-600">
                  <i class="fas fa-users"></i>
                </div>
                <h3 class="policy-title">コミュニティファースト</h3>
                <p class="policy-description">
                  メンバー全員が気持ちよく参加できるコミュニティづくりを第一に考えています。
                  多様な意見や背景を尊重し、互いに学び合える環境を大切にしています。
                </p>
              </div>
              
              <!-- 活動方針カード2 -->
              <div class="policy-card group">
                <div class="policy-icon bg-green-600">
                  <i class="fas fa-seedling"></i>
                </div>
                <h3 class="policy-title">成長の機会を提供</h3>
                <p class="policy-description">
                  Web3やブロックチェーン技術に興味を持つ方々が、知識やスキルを高められるような
                  機会を積極的に提供しています。初心者から経験者まで、それぞれのレベルに合わせた
                  交流の場を設けています。
                </p>
              </div>
              
              <!-- 活動方針カード3 -->
              <div class="policy-card group">
                <div class="policy-icon bg-yellow-600">
                  <i class="fas fa-handshake"></i>
                </div>
                <h3 class="policy-title">オープンな協力関係</h3>
                <p class="policy-description">
                  他のWeb3コミュニティや関連団体との協力関係を大切にしています。
                  オープンな姿勢でつながりを広げ、より多くの方々にWeb3の魅力を伝えていきたいと考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import SectionTransition from '~/components/common/SectionTransition.vue'
  import TeamCard from '~/components/team/TeamCard.vue'
  import { SOCIAL_LINKS } from '~/utils/constants'
  
  useHead({
    title: 'Web3学生トーク - 運営メンバー'
  })
  
  const socialLinks = SOCIAL_LINKS
  
  // 運営メンバーparm(インテント指定でフォローCTA促進)
  const teamMembers = [
    {
      name: 'ko_fortuneko',
      role: 'Co-founder',
      //description: 'Web3コミュニティの運営とXスペース企画を担当。初心者の方が気軽に参加できる環境づくりに注力しています。',
      imageUrl: 'https://pbs.twimg.com/profile_images/1640016262087729152/hpjusSsc_400x400.jpg',
      twitterUrl: 'https://x.com/intent/follow?screen_name=ko_fortuneko',
      twitterHandle: 'ko_fortuneko'
    },
    {
      name: 'sakurayu_tech',
      role: 'Co-founder',
      //description: 'ウェブサイトやコミュニティツールの開発を担当。最新のWeb3技術トレンドについての情報発信も行っています。',
      imageUrl: 'https://pbs.twimg.com/profile_images/1821527370404380672/MlNJB3G6_400x400.jpg',
      twitterUrl: 'https://x.com/intent/follow?screen_name=sakurayu_tech',
      twitterHandle: 'sakurayu_tech'
    },
    {
      name: 'fuga_135',
      role: 'Co-founder',
      //description: 'オンラインイベントの企画と実施を担当。初心者から経験者まで楽しめるWeb3関連のトピックを提供しています。',
      imageUrl: 'https://pbs.twimg.com/profile_images/1760668485884186624/t-PpQ9kK_400x400.jpg',
      twitterUrl: 'https://x.com/intent/follow?screen_name=fuga_135',
      twitterHandle: 'fuga_135'
    }
  ]
  </script>
  
  <style scoped>
  /* Discordボタン */
  .discord-button {
    @apply flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:bg-blue-700 hover:scale-105 transform;
    min-width: 240px;
  }
  
  /* 活動方針カード */
  .policy-card {
    @apply bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg p-6 border border-gray-100 hover:border-gray-200 flex flex-col;
    height: 100%;
  }
  
  .policy-icon {
    @apply w-14 h-14 rounded-lg text-white flex items-center justify-center text-2xl mb-6 transition-transform duration-300 transform;
  }
  
  .policy-card:hover .policy-icon {
    @apply scale-110;
  }
  
  .policy-title {
    @apply text-xl font-bold mb-3 text-gray-800;
  }
  
  .policy-description {
    @apply text-gray-600;
  }
  
  /* スマホ表示用の調整 */
  @media (max-width: 768px) {
    .discord-button {
      @apply w-full;
    }
  }
  </style>