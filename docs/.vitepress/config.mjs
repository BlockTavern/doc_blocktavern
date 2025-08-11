import {
  siteConfig,
  themeBaseConfig,
  navConfig,
  socialLinksConfig,
  sidebarConfig,
  localesConfig,
  mdItCustomAttrs,
  editLink,


} from './components/index.js'

/**
 * VitePress 配置
 * 配置已分离到 components 目录下的不同模块中便于维护
 */
export default {
  // 站点基础配置
  ...siteConfig,

  // 编辑链接
  editLinks: true,
  editLink,

  // 禁用(忽略)死链接
  ignoreDeadLinks: true,

  // 自定义 Markdown 配置
  markdown: mdItCustomAttrs.markdown,
  head: mdItCustomAttrs.head,

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