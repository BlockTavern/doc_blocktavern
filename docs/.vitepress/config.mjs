import { 
  siteConfig, 
  themeBaseConfig, 
  navConfig, 
  socialLinksConfig,
  sidebarConfig,
  localesConfig
} from './components/index.js'

/**
 * VitePress 配置
 * 配置已分离到 components 目录下的不同模块中便于维护
 */
export default {
  // 站点基础配置
  ...siteConfig,
  
  // 多语言配置（组件化）
  locales: localesConfig,
  
  // 主题配置
  themeConfig: {
    ...themeBaseConfig,
    nav: navConfig,
    // 使用组件化的侧边栏配置
    sidebar: sidebarConfig,
    socialLinks: socialLinksConfig
  }
}