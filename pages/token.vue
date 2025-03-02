<template>
    <div>
      <!-- ヒーローセクション -->
      <section class="relative overflow-hidden bg-gradient-to-br from-[#5de8e8] to-blue-500 text-white py-20 md:py-28">
        <!-- 背景の装飾 - ピザのイメージ -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-400"></div>
          <div class="absolute top-40 right-20 w-40 h-40 rounded-full bg-orange-400"></div>
          <div class="absolute bottom-20 left-1/3 w-24 h-24 rounded-full bg-yellow-300"></div>
          <div class="absolute -bottom-10 right-1/4 w-56 h-56 rounded-full bg-yellow-200"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-block mb-6">
              <div class="relative">
                <span class="text-7xl md:text-9xl">🍕</span>
                <div class="absolute -top-5 -right-5 bg-white text-blue-600 text-xs md:text-sm font-bold px-2 py-1 rounded-full rotate-12 shadow-md">
                  トークン
                </div>
              </div>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Pizzaトークン</h1>
            <p class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              コミュニティを彩る美味しいトークン
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a :href="tokenLinks.distribution.url" 
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary"
              >
                🍕 ピザ配布基準
              </a>
              <a :href="tokenLinks.guide.url"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary"
              >
                📘 ピザのトリセツ
              </a>
            </div>
          </div>
        </div>
        
        <!-- 波形トランジション -->
        <div class="absolute bottom-0 left-0 w-full">
          <SectionTransition color="#ffffff" />
        </div>
      </section>
  
      <!-- ピザトークン説明セクション -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 class="text-3xl font-bold mb-6 text-gray-800">ピザトークンとは？</h2>
                <div class="space-y-4">
                  <p class="text-gray-700">
                    Pizzaトークンは、Web3学生トークコミュニティの活動を活性化し、メンバーの貢献を可視化するために発行されたコミュニティトークンです。
                  </p>
                  <p class="text-gray-700">
                    TIPWAVEプラットフォームを利用して発行されており、X（旧Twitter）上でやり取りが可能です。コミュニティへの貢献や参加に応じて配布され、メンバー同士で送り合うこともできます。
                  </p>
                  <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
                    <p class="italic text-blue-800">
                      "ピザを貯めたり、送り合ったりすると、いいことがあるかも...？"
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex justify-center">
                <div class="flying-pizza-emoji">
                  <div class="pizza">🍕</div>
                  <div class="stars">
                    <span>✨</span>
                    <span>✨</span>
                    <span>✨</span>
                  </div>
                  <div class="clouds">
                    <span>☁️</span>
                    <span>☁️</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- ピザトークンの特徴 -->
            <div class="mb-20">
              <TokenFeatures :features="tokenFeatures" />
            </div>
          </div>
        </div>
        
        <!-- 区切り線 -->
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
        </div>
      </section>
      
      <!-- 配布イベントセクション -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">ピザの配布イベント</h2>
            <p class="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Web3学生トークでは、定期的にピザトークンの配布イベントを行っています。
            </p>
            
            <div class="grid md:grid-cols-2 gap-8 mb-16">
              <BaseCard className="h-full">
                <div class="event-header">
                  <i class="fas fa-calendar-check text-xl mr-3"></i>
                  <h3 class="text-xl font-bold">定期配布イベント</h3>
                </div>
                <ul class="event-list">
                  <li>
                    <div class="event-list-icon">
                      <i class="fas fa-microphone"></i>
                    </div>
                    <div>
                      <h4 class="event-list-title">Xスペース参加報酬</h4>
                      <p class="event-list-description">定期的に開催されるXスペースに参加すると、Pizzaトークンを獲得できます。</p>
                    </div>
                  </li>
                  <li>
                    <div class="event-list-icon">
                      <i class="fab fa-discord"></i>
                    </div>
                    <div>
                      <h4 class="event-list-title">Discord活動報酬</h4>
                      <p class="event-list-description">Discordでの積極的な活動や質問への回答に対して配布されます。</p>
                    </div>
                  </li>
                  <li>
                    <div class="event-list-icon">
                      <i class="fas fa-hands-helping"></i>
                    </div>
                    <div>
                      <h4 class="event-list-title">コミュニティへの貢献報酬</h4>
                      <p class="event-list-description">イベント企画や運営、コンテンツ作成などの貢献に対して配布されます。</p>
                    </div>
                  </li>
                </ul>
              </BaseCard>
              
              <BaseCard className="h-full">
                <div class="event-header">
                  <i class="fas fa-star text-xl mr-3"></i>
                  <h3 class="text-xl font-bold">特別配布イベント</h3>
                </div>
                <div class="p-6">
                  <p class="text-gray-700 mb-6">
                    不定期に特別配布イベントを開催しています。最新情報は公式Xアカウントをフォローしてチェックしてください。
                  </p>
                  <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 class="text-lg font-bold mb-2 flex items-center">
                      <i class="fas fa-gift text-[#5de8e8] mr-2"></i>
                      サプライズイベント
                    </h4>
                    <p class="text-gray-600 text-sm mb-4">
                      過去には、質問に答えると報酬がもらえるクイズ大会や、連休特別増量キャンペーンなどを実施しました。今後も様々な特別イベントを予定しています。
                    </p>
                    <a :href="socialLinks.twitter.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
                    >
                      <i :class="socialLinks.twitter.icon + ' mr-2'"></i>最新イベント情報をチェック
                    </a>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
        
        <!-- 区切り線 -->
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
        </div>
      </section>
      
      <!-- ピザ公式アカウントセクション -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl overflow-hidden shadow-sm">
              <div class="grid md:grid-cols-2 gap-0">
                <div class="p-8 md:p-12">
                  <h2 class="text-3xl font-bold mb-6">ピザの公式アカウント</h2>
                  <p class="text-gray-700 mb-6">
                    ピザトークンには専用の公式アカウントがあります。最新情報やピザに関するお知らせをチェックしましょう。
                  </p>
                  <div class="bg-white rounded-xl p-6 shadow-sm mb-6 border border-gray-100">
                    <div class="flex items-start">
                      <div class="flex-shrink-0 mr-4">
                        <img src="https://pbs.twimg.com/profile_images/1757394504620085248/fqt5Vq-q_400x400.jpg" alt="Pizza_req アイコン" class="w-12 h-12 rounded-full" />
                      </div>
                      <div>
                        <h3 class="text-lg font-bold">@pizza_req</h3>
                        <p class="text-gray-600 text-sm mb-2">
                          @web3studenttalk のコミュニティトークン「pizza」 貯めたり、たくさん送りあったりするといいことあるかも！？
                        </p>
                        <a href="https://x.com/intent/follow?screen_name=pizza_req"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm mt-2"
                        >
                          <i class="fab fa-twitter mr-2"></i>フォローする
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-400">
                    <p class="text-sm text-yellow-800 italic flex items-start">
                      <i class="fas fa-info-circle mt-1 mr-2"></i>
                      <span>このアカウントの正体は...Fugaさん...ではないらしい？<br>実は誰が運営しているのか、それはピザだけが知っている...？</span>
                    </p>
                  </div>
                </div>
                <div class="hidden md:block relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-[#90d2fd] to-[#94fdfd] opacity-20"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <img src="https://pbs.twimg.com/profile_images/1757394504620085248/fqt5Vq-q_400x400.jpg" alt="Pizza_req アイコン" class="w-56 h-56 rounded-2xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300" />
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
  import TokenFeatures from '~/components/token/TokenFeatures.vue'
  import BaseCard from '~/components/ui/BaseCard.vue'
  import { SOCIAL_LINKS, TOKEN_LINKS } from '~/utils/constants'
  import { useOgp } from '~/utils/useOgp'
  
  // OGP設定
  useOgp({
    title: 'Web3学生トーク - Pizzaトークン',
    description: 'Web3学生トークコミュニティの活動を活性化するコミュニティトークン「Pizza」の特徴や配布方法をご紹介します。',
    image: '/images/ogp/token.svg',
  });
  
  const socialLinks = SOCIAL_LINKS
  const tokenLinks = TOKEN_LINKS
  
  // トークンの特徴
  const tokenFeatures = [
    {
      title: '貢献の可視化',
      description: 'コミュニティ活動への参加や貢献に応じて配布されるため、あなたの活動がトークンという形で見える化されます。',
      icon: 'fas fa-award',
      iconBgClass: 'bg-yellow-100',
      iconColorClass: 'text-yellow-600'
    },
    {
      title: '気軽な送受信',
      description: 'X上での送受信が可能なため、感謝の気持ちやちょっとした応援を気軽にトークンで表現できます。',
      icon: 'fas fa-exchange-alt',
      iconBgClass: 'bg-blue-100',
      iconColorClass: 'text-blue-600'
    },
    {
      title: '将来の可能性',
      description: '将来的な特典や機能の拡張を予定しています。ピザを集めておくと、思わぬメリットがあるかもしれません。',
      icon: 'fas fa-rocket',
      iconBgClass: 'bg-green-100',
      iconColorClass: 'text-green-600'
    }
  ]
  </script>
  
  <style scoped>
  /* ボタン */
  .btn-primary {
    @apply inline-flex items-center justify-center bg-white text-blue-600 font-bold px-6 py-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50;
  }
  
  .btn-secondary {
    @apply inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white border border-white/40 font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/30;
  }
  
  /* イベントカード */
  .event-header {
    @apply bg-[#5de8e8] bg-opacity-10 p-4 flex items-center text-[#5de8e8];
  }
  
  .event-list {
    @apply p-6 space-y-6;
  }
  
  .event-list li {
    @apply flex items-start;
  }
  
  .event-list-icon {
    @apply w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0;
  }
  
  .event-list-title {
    @apply font-bold text-gray-800 mb-1;
  }
  
  .event-list-description {
    @apply text-gray-600 text-sm;
  }
  
  /* 飛ぶピザの絵文字アニメーション */
  .flying-pizza-emoji {
    position: relative;
    width: 200px;
    height: 200px;
  }
  
  .flying-pizza-emoji .pizza {
    position: absolute;
    font-size: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: float 6s ease-in-out infinite;
  }
  
  .flying-pizza-emoji .stars span {
    position: absolute;
    font-size: 24px;
    opacity: 0.8;
    animation: twinkle 4s ease-in-out infinite;
  }
  
  .flying-pizza-emoji .stars span:nth-child(1) {
    top: 20%;
    left: 15%;
    animation-delay: 0s;
  }
  
  .flying-pizza-emoji .stars span:nth-child(2) {
    top: 60%;
    left: 80%;
    animation-delay: 1s;
  }
  
  .flying-pizza-emoji .stars span:nth-child(3) {
    top: 30%;
    left: 70%;
    animation-delay: 2s;
  }
  
  .flying-pizza-emoji .clouds span {
    position: absolute;
    font-size: 30px;
    opacity: 0.7;
    animation: drift 15s linear infinite;
  }
  
  .flying-pizza-emoji .clouds span:nth-child(1) {
    top: 15%;
    left: -30%;
    animation-duration: 30s;
  }
  
  .flying-pizza-emoji .clouds span:nth-child(2) {
    top: 70%;
    left: -20%;
    animation-duration: 25s;
    animation-delay: 5s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translate(-50%, -50%) rotate(5deg);
    }
    50% {
      transform: translate(-50%, -70%) rotate(-5deg);
    }
  }
  
  @keyframes twinkle {
    0%, 100% {
      opacity: 0.2;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
  
  @keyframes drift {
    0% {
      transform: translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 0.7;
    }
    90% {
      opacity: 0.7;
    }
    100% {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  /* スマホ表示の調整 */
  @media (max-width: 768px) {
    .flying-pizza-emoji {
      transform: scale(0.8);
    }
    
    .flying-pizza-emoji .pizza {
      font-size: 60px;
    }
  }
  </style>