---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: 多语言自动重定向中... | Multi-language Auto Redirecting...
  image:
    src: /logo.png
    alt: BlockTavern Logo
  actions:
    - theme: brand
      text: 简体中文
      link: /zh-CN/
    - theme: alt
      text: English
      link: /en-US/

features:
  - icon: 🇨🇳
    title: 简体中文
    details: 中文用户推荐选择
    link: /zh-CN/
  
  - icon: 🇺🇸
    title: English
    details: Recommended for English users
    link: /en-US/
    
  - icon: 🇹🇼
    title: 繁體中文 (台灣)
    details: 台灣地區用戶推薦
    link: /zh-TW/
    
  - icon: 🇭🇰
    title: 繁體中文 (香港)
    details: 香港地區用戶推薦
    link: /zh-HK/
    
  - icon: 🇯🇵
    title: 日本語
    details: 日本のユーザーにおすすめ
    link: /ja-JP/
    
  - icon: 🇰🇷
    title: 한국어
    details: 한국 사용자에게 권장
    link: /ko-KR/
    
  - icon: 🇫🇷
    title: Français
    details: Recommandé pour les utilisateurs français
    link: /fr-FR/
    
  - icon: 🇩🇪
    title: Deutsch
    details: Empfohlen für deutsche Benutzer
    link: /de-DE/
    
  - icon: 🇪🇸
    title: Español
    details: Recomendado para usuarios españoles
    link: /es-ES/
    
  - icon: 🇷🇺
    title: Русский
    details: Рекомендуется для русских пользователей
    link: /ru-RU/
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  // 检测浏览器语言并自动跳转（延迟3秒让用户看到页面）
  setTimeout(() => {
    const browserLang = navigator.language || navigator.userLanguage
    
    // 语言映射表
    const langMap = {
      'zh-CN': '/zh-CN/',
      'zh-TW': '/zh-TW/',
      'zh-HK': '/zh-HK/',
      'en-US': '/en-US/',
      'ja-JP': '/ja-JP/',
      'ko-KR': '/ko-KR/',
      'fr-FR': '/fr-FR/',
      'de-DE': '/de-DE/',
      'es-ES': '/es-ES/',
      'ru-RU': '/ru-RU/',
    }
    
    // 查找匹配的语言
    let targetPath = '/zh-CN/' // 默认中文
    
    for (const [lang, path] of Object.entries(langMap)) {
      if (browserLang.startsWith(lang) || browserLang.toLowerCase().startsWith(lang)) {
        targetPath = path
        break
      }
    }
    
    // 使用 VitePress 路由进行重定向
    router.go(targetPath)
  }, 3000) // 3秒后自动跳转
})
</script>

<style>
.VPHero .text {
  background: linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.VPFeature {
  transition: transform 0.2s ease;
}

.VPFeature:hover {
  transform: translateY(-2px);
}
</style>