<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="bg-blue-900 text-white py-16 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6">Pizzaトークン</h1>
          <p class="text-xl text-blue-100">
            コミュニティの活動を支えるトークン
          </p>
        </div>
      </div>
      
      <!-- 波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#ffffff" />
      </div>
    </section>

    <!-- トークン説明 -->
    <section class="py-16 bg-white relative">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="bg-gray-50 p-8 rounded-xl mb-12">
            <h2 class="text-2xl font-bold mb-6">Pizzaトークンとは</h2>
            <p class="text-gray-600 mb-6">
              Pizzaトークンは、Web3学生トークコミュニティの活動を活性化し、
              メンバーの貢献を可視化するために発行されたコミュニティトークンです。
              TIPWAVEプラットフォームを利用して発行されており、X上でやり取りが可能です。
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-xl font-bold mb-4">配布基準</h3>
              <p class="text-gray-600 mb-4">
                コミュニティへの貢献度に応じて配布されます。
                詳細な配布基準は以下のリンクからご確認いただけます。
              </p>
              <a href="https://west-pizza.notion.site/2d54b18c324e41c0af7af6bd8b4262b6"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                公式ピザ配布基準を見る
                <i class="fas fa-external-link-alt ml-2"></i>
              </a>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl">
              <h3 class="text-xl font-bold mb-4">使い方</h3>
              <p class="text-gray-600 mb-4">
                Pizzaトークンの使い方や注意点については、
                以下のガイドラインをご参照ください。
              </p>
              <a href="https://west-pizza.notion.site/b0ed8ded66fd47fcb46acb6c03178c33"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                ピザのトリセツを見る
                <i class="fas fa-external-link-alt ml-2"></i>
              </a>
            </div>
          </div>

          <div class="bg-gray-50 p-8 rounded-xl">
            <h3 class="text-xl font-bold mb-4">トークンの特徴</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span class="text-gray-600">
                  コミュニティ活動への参加や貢献に応じて配布
                </span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span class="text-gray-600">
                  X上での送受信が可能
                </span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span class="text-gray-600">
                  コミュニティ内での活動を可視化
                </span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span class="text-gray-600">
                  将来的な特典や機能の拡張を予定
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- 波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#f9fafb" />
      </div>
    </section>

    <!-- 配布イベント情報 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">配布イベント</h2>
        <div class="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm">
          <div class="mb-8">
            <h3 class="text-xl font-bold mb-4">定期配布イベント</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="fas fa-pizza-slice text-yellow-500 mt-1 mr-3"></i>
                <div>
                  <span class="font-medium">Xスペース参加報酬</span>
                  <p class="text-gray-600 text-sm">定期的に開催されるXスペースに参加すると、Pizzaトークンを獲得できます。</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-pizza-slice text-yellow-500 mt-1 mr-3"></i>
                <div>
                  <span class="font-medium">Discord活動報酬</span>
                  <p class="text-gray-600 text-sm">Discordでの積極的な活動や質問への回答に対して配布されます。</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-pizza-slice text-yellow-500 mt-1 mr-3"></i>
                <div>
                  <span class="font-medium">コミュニティへの貢献報酬</span>
                  <p class="text-gray-600 text-sm">イベント企画や運営、コンテンツ作成などの貢献に対して配布されます。</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-bold mb-4">特別配布イベント</h3>
            <p class="text-gray-600 mb-4">
              不定期に特別配布イベントを開催しています。最新情報は公式Xアカウントをフォローしてチェックしてください。
            </p>
            <a href="https://twitter.com/Web3studenttalk" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200"
            >
              <i class="fab fa-twitter mr-2"></i>
              X（Twitter）をフォロー
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionTransition from '~/components/SectionTransition.vue'

useHead({
  title: 'Web3学生トーク - Pizzaトークン'
})
</script>