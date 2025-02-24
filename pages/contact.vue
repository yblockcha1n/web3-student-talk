<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="bg-blue-900 text-white py-16 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6">お問い合わせ</h1>
          <p class="text-xl text-blue-100">
            ご質問・ご相談はこちらから
          </p>
        </div>
      </div>
      
      <!-- 波形トランジション -->
      <div class="absolute bottom-0 left-0 w-full">
        <SectionTransition color="#ffffff" />
      </div>
    </section>

    <!-- コンタクトセクション -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <div class="bg-gray-50 p-8 rounded-xl mb-12">
            <h2 class="text-2xl font-bold mb-6">お問い合わせ方法</h2>
            <p class="text-gray-600 mb-8">
              以下の方法でお問い合わせいただけます。
              お気軽にご連絡ください。
            </p>

            <div class="space-y-6">
              <div class="bg-white p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-4 flex items-center">
                  <i class="fab fa-discord text-blue-600 mr-3"></i>
                  Discord
                </h3>
                <p class="text-gray-600 mb-4">
                  Discordサーバーに参加して、直接メッセージをお送りください。
                </p>
                <a href="https://discord.com/invite/BbxuwH5WS3"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200"
                >
                  Discordに参加
                </a>
              </div>

              <div class="bg-white p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-4 flex items-center">
                  <i class="fab fa-twitter text-blue-600 mr-3"></i>
                  X（Twitter）
                </h3>
                <p class="text-gray-600 mb-4">
                  公式Xアカウントへのダイレクトメッセージでもお問い合わせいただけます。
                </p>
                <a href="https://twitter.com/Web3studenttalk"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200"
                >
                  Xでフォロー
                </a>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 p-8 rounded-xl">
            <h2 class="text-2xl font-bold mb-6">よくある質問</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-bold mb-2">
                  Q. 参加に費用はかかりますか？
                </h3>
                <p class="text-gray-600">
                  A. いいえ、コミュニティへの参加は完全無料です。
                </p>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-2">
                  Q. 学生以外でも参加できますか？
                </h3>
                <p class="text-gray-600">
                  A. はい、社会人の方も参加可能です。Web3に興味がある方なら誰でも歓迎です。
                </p>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-2">
                  Q. 初心者でも大丈夫ですか？
                </h3>
                <p class="text-gray-600">
                  A. もちろんです。むしろ初心者の方の参加を歓迎しています。
                  気軽に質問できる環境を整えています。
                </p>
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

useHead({
  title: 'Web3学生トーク - お問い合わせ'
})
</script>