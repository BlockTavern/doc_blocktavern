/**
 * 侧边栏配置组件
 * 
 * 该文件负责生成VitePress的侧边栏配置
 * 使用 vitepress-sidebar 插件自动生成侧边栏结构
 */

import { generateSidebar } from 'vitepress-sidebar'

/**
 * 生成侧边栏配置
 * @returns {Object} 侧边栏配置对象
 */
export function generateSidebarConfig() {
  return generateSidebar({
    documentRootPath: 'docs',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,  // 从文件夹的index.md获取文件夹标题
    useFolderLinkFromIndexFile: false,
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    collapsed: true,
    collapseDepth: 2,
    sortMenusByName: false,
    sortMenusByFrontmatterOrder: true,
    frontmatterOrderDefaultValue: 999,
    includeRootIndexFile: false,
    includeFolderIndexFile: true,

    excludeFiles: ['README.md', 'index.md'],
    rootGroupText: '文档导航',
    rootGroupCollapsed: false,
    manualSortFileNameByPriority: ['index.md'],
    convertSameNameSubFileToGroupIndexPage: false,
    folderLinkNotIncludesFileName: false
  })
}

/**
 * 生成简单侧边栏配置（兼容性函数）
 * @returns {Object} 侧边栏配置
 */
export function generateSimpleSidebar() {
  return generateSidebarConfig()
}

/**
 * 多语言侧边栏配置（兼容性函数）
 * @returns {Object} 侧边栏配置
 */
export function generateMultiLangSidebar() {
  return generateSidebarConfig()
}

/**
 * 侧边栏配置导出
 * 默认导出侧边栏配置
 */
export const sidebarConfig = generateSidebarConfig()

// 默认导出
export default sidebarConfig