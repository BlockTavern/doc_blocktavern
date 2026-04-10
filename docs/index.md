---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: BlockTavern Minecraft 服务器文档
  image:
    src: /logo.png
    alt: BlockTavern Logo
  actions:
    - theme: alt
      text: 开始浏览
      link: /zh-CN/
---

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.documentElement.classList.add('landing-page')
  // 自动重定向到中文页面
  window.location.href = '/zh-CN/'
})

onUnmounted(() => {
  document.documentElement.classList.remove('landing-page')
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

.flag-icon {
  width: 24px;
  height: auto;
  vertical-align: middle;
  margin-right: 8px;
  display: inline-block;
  border-radius: 2px;
}

/* Custom Flag Button Styles */
.VPButton[href^="/zh-CN/"],
.VPButton[href^="/zh-CN/"]:hover {
  background-image: url('/flags/cn.svg') !important;
  background-repeat: no-repeat !important;
  background-position: 12px center !important;
  background-size: 24px auto !important;
  padding-left: 44px !important;
}

/* Hide navbar content ONLY for landing page */
.landing-page .VPNavBarSearch,
.landing-page .VPNavBarMenu {
  display: none !important;
}
</style>
