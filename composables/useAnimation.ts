import { ref, onMounted, onBeforeUnmount } from 'vue'
import { TYPEWRITER_PHRASES } from '~/utils/constants'

/**
 * タイプライターアニメーションのコンポーザブル関数
 * @returns タイプライターアニメーション用のオブジェクト
 */
export function useTypewriterAnimation() {
  const displayText = ref('')
  let currentPhrase = 0
  let currentIndex = 0
  let isDeleting = false
  let timer: NodeJS.Timeout | null = null
  
  // タイプライターアニメーション関数
  const typeNextCharacter = () => {
    const phrase = TYPEWRITER_PHRASES[currentPhrase]
    
    // 削除中か文字入力中かで処理を分岐
    if (isDeleting) {
      displayText.value = phrase.substring(0, currentIndex - 1)
      currentIndex--
      timer = setTimeout(typeNextCharacter, 50)
    } else {
      displayText.value = phrase.substring(0, currentIndex + 1)
      currentIndex++
      timer = setTimeout(typeNextCharacter, 150)
    }
    
    // 次のステップの条件分岐
    if (!isDeleting && currentIndex === phrase.length) {
      // 単語入力完了時、一時停止後に削除へ
      isDeleting = true
      clearTimeout(timer!)
      timer = setTimeout(typeNextCharacter, 2000)
    } else if (isDeleting && currentIndex === 0) {
      // 削除完了時、次の単語へ
      isDeleting = false
      currentPhrase = (currentPhrase + 1) % TYPEWRITER_PHRASES.length
      clearTimeout(timer!)
      timer = setTimeout(typeNextCharacter, 500)
    }
  }
  
  // コンポーネントマウント時の処理
  onMounted(() => {
    // タイピングアニメーション開始
    timer = setTimeout(typeNextCharacter, 1000)
  })
  
  // コンポーネントアンマウント時の処理
  onBeforeUnmount(() => {
    if (timer) clearTimeout(timer)
  })
  
  return {
    displayText
  }
}

/**
 * FAQの開閉状態を管理するコンポーザブル関数
 * @returns FAQの状態管理オブジェクト
 */
export function useFaqToggle() {
  const activeFaq = ref<number | null>(null)
  
  // FAQの開閉処理
  const toggleFaq = (index: number) => {
    if (activeFaq.value === index) {
      activeFaq.value = null
    } else {
      activeFaq.value = index
    }
  }
  
  return {
    activeFaq,
    toggleFaq
  }
}