import { 
  siteConfig, 
  themeBaseConfig, 
  navConfig, 
  /** 
   * 手动配置侧边栏已启用 （已使用自动生成侧边栏）
   * sidebarConfig,
   * **/
  socialLinksConfig 
} from './components/index.js'
import { generateSidebar } from 'vitepress-sidebar'

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
    /** 
     * 手动配置侧边栏已启用 （已使用自动生成侧边栏）
     * sidebar: sidebarConfig,
     * **/
    sidebar: generateSidebar({
      documentRootPath: 'docs',
      scanStartPath: 'components',
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: true,
      collapsed: true,
      collapseDepth: 2,
      sortMenusByName: true,
      includeRootIndexFile: false,
      includeFolderIndexFile: true,
      excludeFiles: ['README.md'],
      rootGroupText: '文档导航',
      rootGroupCollapsed: false
    }),
    socialLinks: socialLinksConfig
  }
}