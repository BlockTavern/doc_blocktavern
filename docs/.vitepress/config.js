import { 
  siteConfig, 
  themeBaseConfig, 
  navConfig, 
  sidebarConfig, 
  socialLinksConfig 
} from './components/index.js'

/**
 * VitePress 配置
 * 配置已分离到 components 目录下的不同模块中便于维护
 */
export default {
  // 站点基础配置
  ...siteConfig,
  
  // 主题配置
  themeConfig: {
    ...themeBaseConfig,
    nav: navConfig,
    sidebar: sidebarConfig,
    socialLinks: socialLinksConfig
  }
} 