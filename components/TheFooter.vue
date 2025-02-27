<template>
  <footer class="bg-gray-900 text-white py-8 mt-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Web3学生トーク</h3>
          <p class="text-gray-400">
            Web3の初心者が気軽に語れる空間を目指して
          </p>
        </div>
        
        <!-- サイトマップを追加 -->
        <div>
          <h3 class="text-xl font-bold mb-4">サイトマップ</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" 
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                ホーム
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" 
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                コミュニティについて
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/team" 
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                運営メンバー
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/token" 
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Pizzaトークン
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news" 
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                お知らせ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" 
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                お問い合わせ
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">リンク</h3>
          <ul class="space-y-2">
            <li>
              <a href="https://discord.com/invite/BbxuwH5WS3" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i class="fab fa-discord mr-2"></i>Discord
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Web3studenttalk" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i class="fab fa-twitter mr-2"></i>X (Twitter)
              </a>
            </li>
            <!-- noteリンクを画像に合ったアイコンに更新 -->
            <li>
              <a href="https://note.com/web3studentstalk" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span class="inline-block w-4 h-4 mr-2 font-bold">n</span>note
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">コミュニティトークン</h3>
          <ul class="space-y-2">
            <li>
              <a href="https://west-pizza.notion.site/2d54b18c324e41c0af7af6bd8b4262b6"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                公式ピザ配布基準
              </a>
            </li>
            <li>
              <a href="https://west-pizza.notion.site/b0ed8ded66fd47fcb46acb6c03178c33"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                ピザのトリセツ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Web3学生トーク. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>