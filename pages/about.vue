<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="bg-blue-900 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6">コミュニティについて</h1>
          <p class="text-xl text-blue-100">
            Web3の初心者が気軽に語れる空間を目指して
          </p>
        </div>
      </div>
    </section>

    <!-- ミッションセクション -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">私たちのミッション</h2>
          <div class="prose prose-lg mx-auto">
            <p class="mb-6">
              Web3学生トークは、Web3やメタバースに興味を持つ学生や若手社会人が
              気軽に交流できる場を提供することを目指しています。
            </p>
            <p class="mb-6">
              技術の進歩とともに、Web3の世界は日々進化を続けています。
              この変化の中で、新しい可能性を探求し、共に学び、成長できる
              コミュニティを作ることが私たちの使命です。
            </p>
            <p>
              初心者から経験者まで、誰もが自由に意見を交換し、
              アイデアを共有できる開かれた場を提供しています。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 活動内容詳細 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">主な活動内容</h2>
        <div class="max-w-4xl mx-auto space-y-12">
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <h3 class="text-2xl font-bold mb-4">定期的なXスペーストーク</h3>
            <p class="text-gray-600 mb-6">
              毎週火・木・金曜日に開催されるXスペースでは、以下のような
              テーマについて語り合っています：
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Web3の最新トレンド</li>
              <li>ブロックチェーン技術の基礎知識</li>
              <li>メタバースの可能性と未来</li>
              <li>VR/AR技術の活用事例</li>
              <li>DeFiやNFTの動向</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm">
            <h3 class="text-2xl font-bold mb-4">Discordコミュニティ</h3>
            <p class="text-gray-600 mb-6">
              Discordサーバーでは、以下のような活動を行っています：
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>日常的な情報交換や交流</li>
              <li>Web3関連の質問・相談</li>
              <li>イベント情報の共有</li>
              <li>プロジェクトの企画・運営</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm">
            <h3 class="text-2xl font-bold mb-4">コミュニティトークン「Pizza」</h3>
            <p class="text-gray-600 mb-6">
              TIPWAVEプラットフォームを利用して発行された独自のコミュニティトークン
              「Pizza」は、以下のような特徴があります：
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>コミュニティ活動への参加報酬</li>
              <li>貢献度の可視化</li>
              <li>X上での送受信が可能</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 参加方法 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">参加方法</h2>
        <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 p-8 rounded-xl">
            <h3 class="text-2xl font-bold mb-4">1. Discordに参加</h3>
            <p class="text-gray-600 mb-6">
              まずは、Discordサーバーに参加しましょう。
              コミュニティの中心となる場所です。
            </p>
            <a href="https://discord.com/invite/BbxuwH5WS3" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200"
            >
              Discordに参加する
            </a>
          </div>
          <div class="bg-gray-50 p-8 rounded-xl">
            <h3 class="text-2xl font-bold mb-4">2. Xをフォロー</h3>
            <p class="text-gray-600 mb-6">
              公式Xアカウントをフォローして、
              最新の情報やイベントをチェックしましょう。
            </p>
            <a href="https://twitter.com/Web3studenttalk" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200"
            >
              Xをフォローする
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Web3学生トーク - コミュニティについて'
})
</script>