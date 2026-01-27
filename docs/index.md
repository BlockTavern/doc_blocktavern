---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: 请选择语言 | Select Language
  image:
    src: /logo.png
    alt: BlockTavern Logo
  # actions:
  #   - theme: alt
  #     text: 简体中文
  #     link: /zh-CN/
  #   - theme: alt
  #     text: English
  #     link: /en-US/

features:
  - icon:
      src: /flags/cn.svg
    title: 简体中文
    details: 中文用户请点击
    link: /zh-CN/

  - icon:
      src: /flags/us.svg
    title: English
    details: Click here for English
    link: /en-US/
---

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.documentElement.classList.add('landing-page')
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

.VPButton[href^="/en-US/"],
.VPButton[href^="/en-US/"]:hover {
  background-image: url('/flags/us.svg') !important;
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
