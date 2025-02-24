<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="bg-blue-900 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6">運営メンバー</h1>
          <p class="text-xl text-blue-100">
            コミュニティを支える中心メンバー
          </p>
        </div>
      </div>
    </section>

    <!-- メンバー紹介 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-6 text-center">
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

          <div class="bg-gray-50 rounded-xl p-6 text-center">
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

          <div class="bg-gray-50 rounded-xl p-6 text-center">
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
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Web3学生トーク - 運営メンバー'
})
</script>