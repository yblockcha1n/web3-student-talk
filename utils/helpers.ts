/**
 * カテゴリーに応じたスタイルクラスを取得
 * @param category カテゴリー名
 * @returns スタイルクラス
 */
export const getCategoryClass = (category: string): string => {
  switch (category) {
    case '重要なお知らせ':
      return 'bg-red-100 text-red-800'
    case 'イベント':
      return 'bg-green-100 text-green-800'
    case 'アップデート':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
};

/**
 * ISO形式の日付文字列をYY/MM/DD形式に変換する
 * @param dateString ISO形式の日付文字列
 * @returns YY/MM/DD形式の日付文字列
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
};

/**
 * カテゴリーIDからスタイルクラスを取得（MicroCMS対応版）
 * @param categoryId カテゴリーID
 * @returns スタイルクラス
 */
export const getCategoryClassById = (categoryId: string): string => {
  // カテゴリIDに応じたスタイルを返す
  // 必要に応じてIDとスタイルのマッピングを追加
  switch (categoryId) {
    case 'important':
      return 'bg-red-100 text-red-800';
    case 'event':
      return 'bg-green-100 text-green-800';
    case 'update':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

/**
 * 現在の年を返す
 * @returns 現在の年（数値）
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

/**
 * ページネーションの範囲を計算
 * @param currentPage 現在のページ
 * @param totalPages 総ページ数
 * @param delta 前後に表示するページ数
 * @returns ページ番号の配列（省略記号を含む）
 */
export const calculatePaginationRange = (currentPage: number, totalPages: number, delta: number = 1) => {
  let range: (number | string)[] = [];
  
  if (totalPages <= 5) {
    // 5ページ以下の場合は全ページ表示
    range = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    // 最初のページは常に表示
    range.push(1);
    
    // 現在のページの前後を表示
    const beforePage = Math.max(2, currentPage - delta);
    const afterPage = Math.min(totalPages - 1, currentPage + delta);
    
    // 省略記号の表示判定
    if (beforePage > 2) range.push('...');
    
    // 前後のページを追加
    for (let i = beforePage; i <= afterPage; i++) {
      range.push(i);
    }
    
    // 省略記号の表示判定
    if (afterPage < totalPages - 1) range.push('...');
    
    // 最後のページは常に表示
    range.push(totalPages);
  }
  
  return range;
};