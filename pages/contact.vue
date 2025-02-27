<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20 md:py-28 overflow-hidden">
      <!-- 背景装飾 -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
        <div class="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-blue-300"></div>
        <div class="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-blue-200"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">お問い合わせ</h1>
          <p class="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            お気軽にご連絡ください
          </p>
        </div>
      </div>
      
      <!-- 波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#ffffff" />
      </div>
    </section>

    <!-- コンタクトセクション -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-10 md:gap-16">
            <!-- 左側: 連絡方法一覧 -->
            <div>
              <h2 class="text-3xl font-bold mb-8 text-gray-800">ご連絡方法</h2>
              
              <div class="space-y-8">
                <!-- Discordカード -->
                <div class="contact-card group">
                  <div class="contact-card-header bg-indigo-500">
                    <i class="fab fa-discord text-2xl"></i>
                  </div>
                  <div class="contact-card-body">
                    <h3 class="contact-card-title">Discord</h3>
                    <p class="contact-card-description">
                      コミュニティの中心的な交流の場です。質問やご相談はDiscordサーバーでご連絡ください。
                    </p>
                    <div class="mt-4">
                      <a href="https://discord.com/invite/BbxuwH5WS3" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center bg-indigo-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
                      >
                        <i class="fab fa-discord mr-2"></i>
                        Discordに参加する
                      </a>
                    </div>
                  </div>
                </div>
                
                <!-- X(Twitter)カード -->
                <div class="contact-card group">
                  <div class="contact-card-header bg-black">
                    <i class="fab fa-twitter text-2xl"></i>
                  </div>
                  <div class="contact-card-body">
                    <h3 class="contact-card-title">X (Twitter)</h3>
                    <p class="contact-card-description">
                      公式Xアカウントへのダイレクトメッセージや、リプライでもお問い合わせいただけます。
                    </p>
                    <div class="mt-4">
                      <a href="https://twitter.com/Web3studenttalk" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                      >
                        <i class="fab fa-twitter mr-2"></i>
                        Xでフォローする
                      </a>
                    </div>
                  </div>
                </div>
                
                <!-- Noteカード -->
                <div class="contact-card group">
                  <div class="contact-card-header bg-black">
                    <span class="text-xl font-bold text-white">note</span>
                  </div>
                  <div class="contact-card-body">
                    <h3 class="contact-card-title">note</h3>
                    <p class="contact-card-description">
                      noteでも情報発信しています。noteのメッセージ機能からもご連絡いただけます。
                    </p>
                    <div class="mt-4">
                      <a href="https://note.com/web3studentstalk" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                      >
                        <span class="font-bold mr-2">note</span>
                        noteをチェックする
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 右側: FAQとお問い合わせフォーム -->
            <div>
              <h2 class="text-3xl font-bold mb-8 text-gray-800">よくある質問</h2>
              
              <div class="faq-container mb-8">
                <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
                  <button class="faq-question" 
                    :class="{ 'active': activeFaq === index }"
                    @click="toggleFaq(index)"
                  >
                    <span>{{ faq.question }}</span>
                    <i class="fas" :class="activeFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                  </button>
                  <div class="faq-answer" 
                    :class="{ 'active': activeFaq === index }"
                    :style="{ maxHeight: activeFaq === index ? '200px' : '0' }"
                  >
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
              
              <!-- お問い合わせボックス -->
              <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-sm">
                <h3 class="text-xl font-bold mb-4 text-gray-800">まだ質問がありますか？</h3>
                <p class="text-gray-600 mb-4">
                  上記で解決しない場合は、以下のいずれかの方法でお気軽にお問い合わせください。
                </p>
                <div class="flex flex-wrap gap-4">
                  <a href="https://discord.com/invite/BbxuwH5WS3" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <i class="fab fa-discord mr-2"></i>
                    Discord
                  </a>
                  <a href="https://twitter.com/Web3studenttalk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <i class="fab fa-twitter mr-2"></i>
                    X (Twitter)
                  </a>
                  <a href="https://note.com/web3studentstalk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span class="font-bold mr-2">note</span>
                    note
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- コミュニティバナー -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="p-8 md:p-10">
              <h2 class="text-2xl font-bold mb-4">コミュニティに参加する</h2>
              <p class="text-gray-600 mb-6">
                Web3学生トークは、Web3やブロックチェーン技術に興味を持つ学生や若手社会人のためのオープンなコミュニティです。気軽にご参加ください。
              </p>
              <a href="https://discord.com/invite/BbxuwH5WS3" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
              >
                <i class="fab fa-discord mr-2"></i>
                コミュニティに参加
              </a>
            </div>
            <div class="hidden md:block relative bg-gradient-to-br from-blue-500 to-blue-700">
              <div class="absolute inset-0 opacity-20">
                <div class="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
                <div class="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-300"></div>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-white text-opacity-90 text-6xl">
                  <i class="fas fa-users"></i>
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
import SectionTransition from '~/components/SectionTransition.vue'
import { ref } from 'vue'

useHead({
  title: 'Web3学生トーク - お問い合わせ'
})

// FAQデータ
const faqs = [
  {
    question: '参加に費用はかかりますか？',
    answer: 'いいえ、コミュニティへの参加は完全無料です。どなたでも気軽にご参加いただけます。'
  },
  {
    question: '学生以外でも参加できますか？',
    answer: 'はい、社会人の方も参加可能です。Web3に興味がある方なら誰でも歓迎しています。'
  },
  {
    question: '初心者でも大丈夫ですか？',
    answer: 'もちろんです。むしろ初心者の方の参加を歓迎しています。気軽に質問できる環境を整えています。'
  },
  {
    question: 'Xスペースはいつ開催されますか？',
    answer: '基本的に毎週火・木・金曜日の夜に開催しています。詳しい日程はX（Twitter）やDiscordでお知らせしています。'
  },
  {
    question: 'Pizzaトークンはどうすれば獲得できますか？',
    answer: 'Xスペースへの参加やDiscordでの活動、コミュニティへの貢献などで獲得できます。詳しくはPizzaトークンのページをご覧ください。'
  }
]

// アクティブなFAQ
const activeFaq = ref(null)

// FAQの開閉処理
const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null
  } else {
    activeFaq.value = index
  }
}
</script>

<style scoped>
/* お問い合わせカード */
.contact-card {
  @apply bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300;
}

.contact-card-header {
  @apply p-4 flex items-center justify-center text-white;
  height: 60px;
}

.contact-card-body {
  @apply p-6;
}

.contact-card-title {
  @apply text-xl font-bold mb-2 text-gray-800;
}

.contact-card-description {
  @apply text-gray-600 text-sm;
}

/* FAQ */
.faq-container {
  @apply space-y-3;
}

.faq-item {
  @apply bg-white rounded-lg border border-gray-200 overflow-hidden;
}

.faq-question {
  @apply w-full text-left px-5 py-4 flex items-center justify-between font-medium text-gray-800;
}

.faq-question.active {
  @apply bg-blue-50;
}

.faq-answer {
  @apply px-5 pb-0 text-gray-600 text-sm overflow-hidden transition-all duration-300;
  max-height: 0;
}

.faq-answer.active {
  @apply pb-4;
}
</style>