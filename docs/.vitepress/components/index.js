/**
 * VitePress 配置组件统一导出
 * 
 * 该文件统一导出所有配置组件，便于在主配置文件中导入使用
 * 
 * 文件结构：
 * - site.js: 站点基础配置和主题基础配置
 * - nav.js: 主导航配置
 * - social.js: 社交链接配置
 * 
 * 注：侧边栏现使用 vitepress-sidebar 插件自动生成
 */

export { siteConfig, themeBaseConfig } from './site.js'
export { navConfig } from './nav.js'
export { socialLinksConfig } from './social.js'
export { generateSidebarConfig, generateMultiLangSidebar, generateSimpleSidebar, sidebarConfig } from './sidebar.js'