import { 
  siteConfig, 
  themeBaseConfig, 
  navConfig, 
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
    // 使用自动生成的侧边栏，手动配置已弃用
    sidebar: generateSidebar({
      documentRootPath: 'docs',
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
      rootGroupCollapsed: false,
      manualSortFileNameByPriority: ['index.md'],
      convertSameNameSubFileToGroupIndexPage: true,
      folderLinkNotIncludesFileName: false
    }),
    socialLinks: socialLinksConfig
  }
}