import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { createParticles } from './particles.js' // 确保这个导入是正确的
import Contributors from './components/Contributors.vue'
import GitHistoryInformation from './components/GitHistoryInformation.vue'
import HomeNotice from './components/HomeNotice.vue'
import PopupAnnouncement from './components/PopupAnnouncement.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h(HomeNotice),
      'layout-bottom': () => h(PopupAnnouncement)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('Contributors', Contributors)
    app.component('GitHistoryInformation', GitHistoryInformation)

    // 在客户端初始化粒子效果
    if (typeof window !== 'undefined') {
      // 页面加载时初始化
      createParticles()
      
      // 路由变化时重新初始化
      router.onAfterRouteChanged = () => {
        setTimeout(createParticles, 100)
      }
    }
  }
}
