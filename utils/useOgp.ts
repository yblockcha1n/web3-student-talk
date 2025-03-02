/**
 * OGP設定用のコンポーザブル関数
 * 
 * @param options OGP設定オプション
 * @returns OGP設定オブジェクト
 */
export const useOgp = (options = {}) => {
    const route = useRoute();
    const config = useRuntimeConfig();
    
    const defaults = {
      baseUrl: config.public.siteUrl || 'https://www.web3student-talk.com',
      siteName: 'Web3学生トーク',
      title: 'Web3学生トーク',
      description: 'Web3やメタバースについて気軽に話せるコミュニティ',
      image: '/images/ogp/default.png',
      twitterCard: 'summary_large_image',
      twitterSite: '@Web3studenttalk',
    };
    
    const settings = { ...defaults, ...options };
    
    const url = `${settings.baseUrl}${route.fullPath}`;
    
    // 画像URLを生成（相対パスからフルURLに変換）
    const imageUrl = settings.image.startsWith('http') 
      ? settings.image 
      : `${settings.baseUrl}${settings.image}`;
    
    // useHead関数を使用してHEADタグを設定
    useHead({
      title: settings.title,
      meta: [
        // 基本的なメタタグ
        { name: 'description', content: settings.description },
        
        // OGP基本設定
        { property: 'og:title', content: settings.title },
        { property: 'og:description', content: settings.description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: imageUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: settings.siteName },
        
        // Twitter Card設定
        { name: 'twitter:card', content: settings.twitterCard },
        { name: 'twitter:site', content: settings.twitterSite },
        { name: 'twitter:title', content: settings.title },
        { name: 'twitter:description', content: settings.description },
        { name: 'twitter:image', content: imageUrl },
      ],
      link: [
        { rel: 'canonical', href: url }
      ]
    });
  };