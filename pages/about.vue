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
          <h1 class="text-4xl md:text-6xl font-bold mb-6">コミュニティについて</h1>
          <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Web3の初心者が気軽に語れる空間を目指して
          </p>
        </div>
      </div>
      
      <!-- 波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#ffffff" />
      </div>
    </section>

    <!-- ミッションセクション -->
    <section class="py-16 md:py-24 bg-white relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 class="text-3xl font-bold mb-6 text-gray-800">私たちのミッション</h2>
              <div class="space-y-5">
                <p class="text-gray-700 text-lg">
                  Web3学生トークは、Web3やメタバースに興味を持つ学生や若手社会人が
                  気軽に交流できる場を提供することを目指しています。
                </p>
                <p class="text-gray-700 text-lg">
                  技術の進歩とともに、Web3の世界は日々進化を続けています。
                  この変化の中で、新しい可能性を探求し、共に学び、成長できる
                  コミュニティを作ることが私たちの使命です。
                </p>
                <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500 mt-4">
                  <p class="text-blue-800 font-medium">
                    "初心者から経験者まで、誰もが自由に意見を交換し、アイデアを共有できる開かれた場を提供しています。"
                  </p>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="relative">
                <div class="absolute -top-8 -left-8 w-32 h-32 bg-[#5de8e8] bg-opacity-20 rounded-full"></div>
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 rounded-full"></div>
                <div class="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-md">
                  <div class="mission-stat-container">
                    <div class="mission-stat">
                      <div class="mission-stat-number">3+</div>
                      <div class="mission-stat-label">活動年数</div>
                    </div>
                    <div class="mission-stat">
                      <div class="mission-stat-number">500+</div>
                      <div class="mission-stat-label">コミュニティメンバー</div>
                    </div>
                    <div class="mission-stat">
                      <div class="mission-stat-number">200+</div>
                      <div class="mission-stat-label">開催イベント</div>
                    </div>
                    <div class="mission-stat">
                      <div class="mission-stat-number">30+</div>
                      <div class="mission-stat-label">協力パートナー</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#f9fafb" />
      </div>
    </section>

    <!-- 活動内容詳細 -->
    <section class="py-16 md:py-24 bg-gray-50 relative">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-10 text-center text-gray-800">主な活動内容</h2>
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- 活動内容カード1 -->
            <div class="activity-card">
              <div class="activity-card-icon bg-blue-100">
                <i class="fas fa-microphone text-blue-600"></i>
              </div>
              <h3 class="activity-card-title">定期的なXスペーストーク</h3>
              <p class="activity-card-description">
                毎週火・木・金曜日に開催されるXスペースでは、以下のようなテーマについて語り合っています：
              </p>
              <ul class="activity-card-list">
                <li>Web3の最新トレンド</li>
                <li>ブロックチェーン技術の基礎知識</li>
                <li>メタバースの可能性と未来</li>
                <li>VR/AR技術の活用事例</li>
                <li>DeFiやNFTの動向</li>
              </ul>
            </div>
            
            <!-- 活動内容カード2 -->
            <div class="activity-card">
              <div class="activity-card-icon bg-indigo-100">
                <i class="fab fa-discord text-indigo-600"></i>
              </div>
              <h3 class="activity-card-title">Discordコミュニティ</h3>
              <p class="activity-card-description">
                Discordサーバーでは、以下のような活動を行っています：
              </p>
              <ul class="activity-card-list">
                <li>日常的な情報交換や交流</li>
                <li>Web3関連の質問・相談</li>
                <li>イベント情報の共有</li>
                <li>プロジェクトの企画・運営</li>
              </ul>
            </div>
            
            <!-- 活動内容カード3 -->
            <div class="activity-card">
              <div class="activity-card-icon bg-yellow-100">
                <i class="fas fa-pizza-slice text-yellow-600"></i>
              </div>
              <h3 class="activity-card-title">コミュニティトークン「Pizza」</h3>
              <p class="activity-card-description">
                TIPWAVEプラットフォームを利用して発行された独自のコミュニティトークン「Pizza」は、以下のような特徴があります：
              </p>
              <ul class="activity-card-list">
                <li>コミュニティ活動への参加報酬</li>
                <li>貢献度の可視化</li>
                <li>X上での送受信が可能</li>
              </ul>
              <div class="mt-6">
                <NuxtLink 
                  to="/token" 
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Pizzaトークンについて詳しく <i class="fas fa-arrow-right ml-2"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#ffffff" />
      </div>
    </section>

    <!-- コミュニティの価値セクション -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-10 text-center text-gray-800">コミュニティの価値観</h2>
          
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1">
              <div class="values-grid">
                <div class="value-item">
                  <div class="value-icon bg-blue-500 text-white">
                    <i class="fas fa-users"></i>
                  </div>
                  <div class="value-content">
                    <h3 class="value-title">包括性</h3>
                    <p class="value-description">経験レベルに関わらず、すべての人を歓迎します</p>
                  </div>
                </div>
                
                <div class="value-item">
                  <div class="value-icon bg-green-500 text-white">
                    <i class="fas fa-lightbulb"></i>
                  </div>
                  <div class="value-content">
                    <h3 class="value-title">探究心</h3>
                    <p class="value-description">新しいアイデアを常に探求し、学び続けます</p>
                  </div>
                </div>
                
                <div class="value-item">
                  <div class="value-icon bg-purple-500 text-white">
                    <i class="fas fa-hands-helping"></i>
                  </div>
                  <div class="value-content">
                    <h3 class="value-title">相互支援</h3>
                    <p class="value-description">お互いに助け合い、共に成長します</p>
                  </div>
                </div>
                
                <div class="value-item">
                  <div class="value-icon bg-yellow-500 text-white">
                    <i class="fas fa-comments"></i>
                  </div>
                  <div class="value-content">
                    <h3 class="value-title">オープンな対話</h3>
                    <p class="value-description">様々な意見や視点を尊重し、建設的な対話を促進します</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="order-1 md:order-2">
              <div class="space-y-6">
                <p class="text-gray-700 text-lg">
                  Web3学生トークは単なる技術的な議論の場ではなく、共通の価値観に基づいたコミュニティづくりを重視しています。
                </p>
                <p class="text-gray-700 text-lg">
                  私たちは「技術の可能性を最大限に引き出すには、多様な視点と協力が不可欠である」と考えています。そのため、メンバー同士の対話と相互理解を促進し、一人ひとりが自分の考えや知識を自由に共有できる環境づくりに努めています。
                </p>
                <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500 mt-4">
                  <p class="text-blue-800 font-medium">
                    "技術とコミュニティが融合することで、Web3の真の可能性が広がると信じています。"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 参加方法セクション -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">参加方法</h2>
        <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div class="join-card">
            <div class="join-card-icon">
              <i class="fab fa-discord text-4xl text-indigo-400"></i>
            </div>
            <h3 class="join-card-title">1. Discordに参加</h3>
            <p class="join-card-description">
              まずは、Discordサーバーに参加しましょう。
              コミュニティの中心となる場所です。
            </p>
            <div class="join-card-action">
              <a href="https://discord.com/invite/BbxuwH5WS3" 
                target="_blank"
                rel="noopener noreferrer"
                class="join-button discord-button"
              >
                <i class="fab fa-discord mr-2"></i>
                Discordに参加する
              </a>
            </div>
          </div>
          
          <div class="join-card">
            <div class="join-card-icon">
              <i class="fab fa-twitter text-4xl text-blue-400"></i>
            </div>
            <h3 class="join-card-title">2. Xをフォロー</h3>
            <p class="join-card-description">
              公式Xアカウントをフォローして、
              最新の情報やイベントをチェックしましょう。
            </p>
            <div class="join-card-action">
              <a href="https://twitter.com/Web3studenttalk" 
                target="_blank"
                rel="noopener noreferrer"
                class="join-button twitter-button"
              >
                <i class="fab fa-twitter mr-2"></i>
                Xをフォローする
              </a>
            </div>
          </div>
        </div>
        
        <div class="max-w-3xl mx-auto mt-16 text-center">
          <h3 class="text-2xl font-bold mb-4">さらなるステップ</h3>
          <p class="text-blue-100 mb-8">
            コミュニティに慣れてきたら、以下のような形で積極的に参加してみましょう：
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="next-step-item">
              <div class="next-step-number">1</div>
              <div class="next-step-text">Xスペースに参加する</div>
            </div>
            <div class="next-step-item">
              <div class="next-step-number">2</div>
              <div class="next-step-text">Discordで質問・回答する</div>
            </div>
            <div class="next-step-item">
              <div class="next-step-number">3</div>
              <div class="next-step-text">イベントに企画から関わる</div>
            </div>
            <div class="next-step-item">
              <div class="next-step-number">4</div>
              <div class="next-step-text">運営メンバーになる</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionTransition from '~/components/SectionTransition.vue'

useHead({
  title: 'Web3学生トーク - コミュニティについて'
})
</script>

<style scoped>
/* ミッションスタット */
.mission-stat-container {
  @apply grid grid-cols-2 gap-4;
}

.mission-stat {
  @apply bg-white p-4 rounded-xl shadow-sm text-center;
}

.mission-stat-number {
  @apply text-3xl font-bold text-blue-600 mb-1;
}

.mission-stat-label {
  @apply text-sm text-gray-600;
}

/* 活動内容カード */
.activity-card {
  @apply bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300 h-full;
}

.activity-card-icon {
  @apply w-14 h-14 rounded-full flex items-center justify-center text-xl mb-4;
}

.activity-card-title {
  @apply text-xl font-bold mb-3 text-gray-800;
}

.activity-card-description {
  @apply text-gray-600 mb-4;
}

.activity-card-list {
  @apply space-y-2 text-gray-600 pl-5;
}

.activity-card-list li {
  @apply relative pl-2;
}

.activity-card-list li::before {
  content: "•";
  @apply absolute left-0 text-blue-500;
}

/* コミュニティの価値観 */
.values-grid {
  @apply grid grid-cols-1 gap-6;
}

.value-item {
  @apply flex items-start bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all duration-300;
}

.value-icon {
  @apply w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4 flex-shrink-0;
}

.value-content {
  @apply flex-grow;
}

.value-title {
  @apply text-lg font-bold mb-1 text-gray-800;
}

.value-description {
  @apply text-gray-600 text-sm;
}

/* 参加方法 */
.join-card {
  @apply bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300;
}

.join-card-icon {
  @apply mb-4;
}

.join-card-title {
  @apply text-xl font-bold mb-3;
}

.join-card-description {
  @apply text-blue-100 mb-6;
}

.join-card-action {
  @apply mt-auto;
}

.join-button {
  @apply inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg;
}

.discord-button {
  @apply bg-indigo-500 text-white hover:bg-indigo-600;
}

.twitter-button {
  @apply bg-sky-500 text-white hover:bg-sky-600;
}

/* さらなるステップ */
.next-step-item {
  @apply bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center;
}

.next-step-number {
  @apply w-8 h-8 rounded-full bg-white text-blue-800 font-bold flex items-center justify-center mx-auto mb-2;
}

.next-step-text {
  @apply text-sm;
}
</style>