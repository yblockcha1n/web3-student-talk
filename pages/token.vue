<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="bg-blue-900 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6">Pizzaトークン</h1>
          <p class="text-xl text-blue-100">
            コミュニティの活動を支えるトークン
          </p>
        </div>
      </div>
    </section>

    <!-- トークン説明 -->
    <section class="py-20 bg-white">
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
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Web3学生トーク - Pizzaトークン'
})
</script>