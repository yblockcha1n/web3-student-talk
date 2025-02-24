<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <HeroBackground />
      <div class="container mx-auto px-4 z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight animate-fade-in">
            Web3の未来を
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">語ろう</span>
          </h1>
          <p class="text-xl md:text-2xl mb-12 text-gray-600 animate-fade-in-delay">
            Web3やメタバースについて、気軽に話せるコミュニティ
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
            <a href="https://discord.com/invite/BbxuwH5WS3" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              <i class="fab fa-discord mr-2"></i>
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
    </section>

    <!-- 特徴セクション -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">コミュニティの特徴</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card hover:scale-105">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <i class="fas fa-comments text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">定期的な交流</h3>
            <p class="text-gray-600">
              毎週火・木・金曜日にXスペースで各話題について語り合います。初心者から経験者まで、誰でも参加できます。
            </p>
          </div>
          <div class="card hover:scale-105">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <i class="fas fa-users text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">オープンなコミュニティ</h3>
            <p class="text-gray-600">
              学生だけでなく、社会人の方も大歓迎。Web3やメタバース、VR/ARに興味がある方なら誰でも参加できます。
            </p>
          </div>
          <div class="card hover:scale-105">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <i class="fas fa-pizza-slice text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">コミュニティトークン</h3>
            <p class="text-gray-600">
              独自のコミュニティトークン「Pizza」を発行。コミュニティ内での活動や貢献に応じて配布されます。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 活動内容セクション -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">活動内容</h2>
        <div class="max-w-3xl mx-auto space-y-8">
          <div class="card">
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <i class="fas fa-microphone text-blue-600 mr-3"></i>
              Xスペーストーク
            </h3>
            <p class="text-gray-600">
              定期的なXスペースでの交流会を開催。Web3に関する様々なトピックについて、
              自由に意見交換ができる場を提供しています。
            </p>
          </div>
          <div class="card">
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <i class="fab fa-discord text-blue-600 mr-3"></i>
              Discordコミュニティ
            </h3>
            <p class="text-gray-600">
              Discordサーバーでは、日常的な交流や情報共有が活発に行われています。
              初心者の方でも気軽に質問できる環境を整えています。
            </p>
          </div>
          <div class="card">
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <i class="fas fa-book text-blue-600 mr-3"></i>
              Web3用語集（準備中）
            </h3>
            <p class="text-gray-600">
              Web3の基礎知識や用語をわかりやすく解説する用語集を作成中。
              初心者の方の学習をサポートします。
            </p>
          </div>
        </div>
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
          <a href="https://discord.com/invite/BbxuwH5WS3" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            <i class="fab fa-discord mr-2"></i>
            Discordに参加
          </a>
          <a href="https://twitter.com/Web3studenttalk" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline text-gray-700"
          >
            <i class="fab fa-twitter mr-2"></i>
            X（Twitter）をフォロー
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Web3学生トーク - ホーム'
})
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
</style>