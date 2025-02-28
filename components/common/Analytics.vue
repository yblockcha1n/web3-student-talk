<template>
    <!-- 擬似コンポーネント(検証用) -->
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  const runtimeConfig = useRuntimeConfig()
  
  onMounted(() => {
    // 本番環境のみで実行 (localhost 又は IPv4でない場合)
    if (typeof window !== 'undefined' && 
        window.location.hostname !== 'localhost' && 
        !window.location.hostname.includes('192.168') &&
        !window.location.hostname.match(/^\d+\.\d+\.\d+\.\d+$/)) {
      
      // VercelAnalytics/GoogleSpeedInsightsを動的ロード
      loadVercelAnalytics();
      
      // GoogleAnalyticsを動的にロード (測定IDが設定されている場合のみ)
      const gaId = runtimeConfig.public.googleAnalyticsId
      if (gaId) {
        loadGoogleAnalytics(gaId);
      }
    }
  });
  
  const loadVercelAnalytics = () => {
    // VercelAnalyticsのパス存在確認
    if (!document.querySelector('script[src*="/_vercel/insights/script.js"]')) {
      const vercelAnalyticsScript = document.createElement('script');
      vercelAnalyticsScript.src = '/_vercel/insights/script.js';
      vercelAnalyticsScript.defer = true;
      vercelAnalyticsScript.setAttribute('data-debug', 'false');
      document.body.appendChild(vercelAnalyticsScript);
    }
    
    // 同様にパス存在確認
    if (!document.querySelector('script[src*="/_vercel/speed-insights/script.js"]')) {
      const vercelSpeedInsightsScript = document.createElement('script');
      vercelSpeedInsightsScript.src = '/_vercel/speed-insights/script.js';
      vercelSpeedInsightsScript.defer = true;
      document.body.appendChild(vercelSpeedInsightsScript);
    }
  };
  
  const loadGoogleAnalytics = (measurementId) => {
    if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(gaScript);
      
      // インラインスクリプト追加
      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', '${measurementId}');
      `;
      document.head.appendChild(inlineScript);
    }
  };
  </script>