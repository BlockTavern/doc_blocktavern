import DefaultTheme from 'vitepress/theme'
import './style.css'
import { createParticles } from './particles.js' // 确保这个导入是正确的
import Contributors from './components/Contributors.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('Contributors', Contributors)

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