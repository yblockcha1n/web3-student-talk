<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="bg-blue-900 text-white py-16 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6">運営メンバー</h1>
          <p class="text-xl text-blue-100">
            コミュニティを支える中心メンバー
          </p>
        </div>
      </div>
      
      <!-- 波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#ffffff" />
      </div>
    </section>

    <!-- メンバー紹介 -->
    <section class="py-16 bg-white relative">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-6 text-center transform transition-all hover:shadow-lg hover:-translate-y-1">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <img 
                src="https://pbs.twimg.com/profile_images/1640016262087729152/hpjusSsc_400x400.jpg"
                alt="ko_fortuneko"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-bold mb-2">ko_fortuneko</h3>
            <a href="https://twitter.com/ko_fortuneko"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <i class="fab fa-twitter mr-2"></i>@ko_fortuneko
            </a>
          </div>

          <div class="bg-gray-50 rounded-xl p-6 text-center transform transition-all hover:shadow-lg hover:-translate-y-1">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <img 
                src="https://pbs.twimg.com/profile_images/1821527370404380672/MlNJB3G6_400x400.jpg"
                alt="sakurayu_tech"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-bold mb-2">sakurayu_tech</h3>
            <a href="https://twitter.com/sakurayu_tech"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <i class="fab fa-twitter mr-2"></i>@sakurayu_tech
            </a>
          </div>

          <div class="bg-gray-50 rounded-xl p-6 text-center transform transition-all hover:shadow-lg hover:-translate-y-1">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <img 
                src="https://pbs.twimg.com/profile_images/1760668485884186624/t-PpQ9kK_400x400.jpg"
                alt="fuga_135"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-bold mb-2">fuga_135</h3>
            <a href="https://twitter.com/fuga_135"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <i class="fab fa-twitter mr-2"></i>@fuga_135
            </a>
          </div>
        </div>
      </div>
      
      <div class="container mx-auto px-4 mt-16 mb-16">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl font-bold mb-6 text-center">コミュニティの運営について</h2>
          <div class="bg-gray-50 p-6 md:p-8 rounded-xl">
            <p class="text-gray-700 mb-4">
              Web3学生トークは、Web3やブロックチェーン技術に興味を持つ学生を中心に、有志のメンバーによって運営されています。
            </p>
            <p class="text-gray-700 mb-4">
              メンバーはそれぞれ専門分野を持ち、Xスペースでの企画や運営、Discordコミュニティの管理、ウェブサイトの開発などを担当しています。
            </p>
            <p class="text-gray-700">
              コミュニティの活動に興味を持たれた方は、ぜひDiscordサーバーにご参加ください。積極的に参加される方には、運営メンバーとして活動いただくことも可能です。
            </p>
          </div>
        </div>
      </div>

      <!-- 波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#f9fafb" />
      </div>
    </section>
    
    <!-- 活動方針 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl font-bold mb-8 text-center">活動方針</h2>
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <i class="fas fa-users text-blue-600 mr-3"></i>
                コミュニティファースト
              </h3>
              <p class="text-gray-600">
                メンバー全員が気持ちよく参加できるコミュニティづくりを第一に考えています。
                多様な意見や背景を尊重し、互いに学び合える環境を大切にしています。
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <i class="fas fa-seedling text-blue-600 mr-3"></i>
                成長の機会を提供
              </h3>
              <p class="text-gray-600">
                Web3やブロックチェーン技術に興味を持つ方々が、知識やスキルを高められるような
                機会を積極的に提供しています。初心者から経験者まで、それぞれのレベルに合わせた
                交流の場を設けています。
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <i class="fas fa-handshake text-blue-600 mr-3"></i>
                オープンな協力関係
              </h3>
              <p class="text-gray-600">
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
import SectionTransition from '~/components/SectionTransition.vue'

useHead({
  title: 'Web3学生トーク - 運営メンバー'
})
</script>