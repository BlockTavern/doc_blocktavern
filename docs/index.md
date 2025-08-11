---
layout: home
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  // 检测浏览器语言
  const browserLang = navigator.language || navigator.userLanguage
  
  // 语言映射表
  const langMap = {
    'zh-CN': '/zh-CN/',  // 简体中文
    'zh-TW': '/zh-TW/',  // 繁體中文
    'zh-HK': '/zh-HK/',  // 香港中文
    'en-US': '/en-US/',  // 英文
    'ja-JP': '/ja-JP/',  // 日本語
    'ko-KR': '/ko-KR/',  // 한국어
    'fr-FR': '/fr-FR/',  // Français
    'de-DE': '/de-DE/',  // Deutsch
    'es-ES': '/es-ES/',  // Español
    'ru-RU': '/ru-RU/',  // Русский
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
})
</script>

# 正在重定向...

如果页面没有自动跳转，请选择您的语言：

- [简体中文](/zh-CN/)
- [繁體中文TW](/zh-TW/)
- [繁體中文HK](/zh-HK/)
- [English](/en-US/)
- [日本語](/ja-JP/)
- [한국어](/ko-KR/)
- [Français](/fr-FR/)
- [Deutsch](/de-DE/)
- [Español](/es-ES/)
- [Русский](/ru-RU/)