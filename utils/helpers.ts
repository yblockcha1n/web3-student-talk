/**
 * カテゴリーに応じたスタイルクラスを取得
 * @param category カテゴリー名
 * @returns スタイルクラス
 */
export const getCategoryClass = (category: string): string => {
    switch (category) {
      case 'important':
        return 'bg-red-100 text-red-800'
      case 'event':
        return 'bg-green-100 text-green-800'
      case 'update':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  /**
   * カテゴリー名を日本語に変換
   * @param category カテゴリー名
   * @returns 日本語のカテゴリー名
   */
  export const getCategoryName = (category: string): string => {
    switch (category) {
      case 'important':
        return '重要なお知らせ'
      case 'event':
        return 'イベント'
      case 'update':
        return 'アップデート'
      default:
        return 'その他'
    }
  }
  
  /**
   * 現在の年を返す
   * @returns 現在の年（数値）
   */
  export const getCurrentYear = (): number => {
    return new Date().getFullYear()
  }
  
  /**
   * ページネーションの範囲を計算
   * @param currentPage 現在のページ
   * @param totalPages 総ページ数
   * @param delta 前後に表示するページ数
   * @returns ページ番号の配列（省略記号を含む）
   */
  export const calculatePaginationRange = (currentPage: number, totalPages: number, delta: number = 1) => {
    let range: (number | string)[] = []
    
    if (totalPages <= 5) {
      // 5ページ以下の場合は全ページ表示
      range = Array.from({ length: totalPages }, (_, i) => i + 1)
    } else {
      // 最初のページは常に表示
      range.push(1)
      
      // 現在のページの前後を表示
      const beforePage = Math.max(2, currentPage - delta)
      const afterPage = Math.min(totalPages - 1, currentPage + delta)
      
      // 省略記号の表示判定
      if (beforePage > 2) range.push('...')
      
      // 前後のページを追加
      for (let i = beforePage; i <= afterPage; i++) {
        range.push(i)
      }
      
      // 省略記号の表示判定
      if (afterPage < totalPages - 1) range.push('...')
      
      // 最後のページは常に表示
      range.push(totalPages)
    }
    
    return range
  }