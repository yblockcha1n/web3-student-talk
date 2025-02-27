<template>
    <!-- このコンポーネントは視覚的な出力を持ちません -->
  </template>
  
  <script setup>
  import { inject } from '@vercel/analytics';
  import { injectSpeedInsights } from '@vercel/speed-insights';
  
  onMounted(() => {
    // Vercelデプロイ環境のみで実行
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && !window.location.hostname.includes('192.168')) {
      // Vercel Web Analyticsを初期化
      inject();
      
      // Vercel Speed Insightsを初期化
      injectSpeedInsights();
      
      // 本番環境でのみスクリプトを動的に追加
      const addScript = (src) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
      };
      
      // Vercelのスクリプトを追加
      addScript('/_vercel/insights/script.js');
      addScript('/_vercel/speed-insights/script.js');
    }
  });
  </script>