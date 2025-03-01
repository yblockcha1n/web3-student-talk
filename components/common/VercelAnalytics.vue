<template>
    <!-- 架空 -->
  </template>
  
  <script setup>
  import { inject } from '@vercel/analytics';
  import { injectSpeedInsights } from '@vercel/speed-insights';
  
  onMounted(() => {
    // Vercelデプロイ環境のみで実行
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && !window.location.hostname.includes('192.168')) {
      // VercelWebAnalyticsを初期化
      inject();
      
      // VercelSpeedInsightsを初期化
      injectSpeedInsights();
      
      // 本番環境でのみスクリプトを動的に追加
      const addScript = (src) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
      };
      
      addScript('/_vercel/insights/script.js');
      addScript('/_vercel/speed-insights/script.js');
    }
  });
  </script>