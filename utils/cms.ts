import { createClient } from 'microcms-js-sdk';

// カテゴリーの型定義
export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

// NewsItemの型定義
export interface NewsItem {
  id: string;
  title: string;
  content: string;
  category: Category;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

// microCMSクライアントを作成するためのコンポーザブル関数
export const useMicroCMS = () => {
  const config = useRuntimeConfig();
  
  return createClient({
    serviceDomain: config.public.microcmsServiceDomain,
    apiKey: config.public.microcmsApiKey,
  });
};

// 記事一覧を取得する関数
export const getNewsList = async (queries?: object) => {
  const client = useMicroCMS();
  return await client.get<{
    contents: NewsItem[];
    totalCount: number;
    offset: number;
    limit: number;
  }>({
    endpoint: 'news',
    queries: {
      orders: '-date', // 公開日の降順で取得
      ...queries,
    },
  });
};

// 1件の記事を取得する関数
export const getNewsDetail = async (contentId: string, queries?: object) => {
  const client = useMicroCMS();
  return await client.get<NewsItem>({
    endpoint: 'news',
    contentId,
    queries,
  });
};

// カテゴリー一覧を取得する関数
export const getCategoryList = async (queries?: object) => {
  const client = useMicroCMS();
  return await client.get<{
    contents: Category[];
    totalCount: number;
    offset: number;
    limit: number;
  }>({
    endpoint: 'categories',
    queries: {
      orders: 'createdAt', // 作成日の昇順で取得
      ...queries,
    },
  });
};

// 1件のカテゴリーを取得する関数
export const getCategoryDetail = async (contentId: string, queries?: object) => {
  const client = useMicroCMS();
  return await client.get<Category>({
    endpoint: 'categories',
    contentId,
    queries,
  });
};