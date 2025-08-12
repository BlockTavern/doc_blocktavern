import { generateSidebar } from "vitepress-sidebar";

// 默认配置提取
const defaultConfig = {
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
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
  includeFolderIndexFile: false,
  excludeFiles: ["README.md", "index.md"],
  excludeFolders: [".vitepress", "public", "components"],
  manualSortFileNameByPriority: ["index.md"],
};

const languages = [
  { code: 'zh-CN', groupText: '文档导航' },
  { code: 'zh-TW', groupText: '文檔導航' },
  { code: 'zh-HK', groupText: '文檔導航' },
  { code: 'en-US', groupText: 'Documentation' },
  { code: 'ja-JP', groupText: 'ドキュメント' },
  { code: 'ko-KR', groupText: '문서 탐색' },
  { code: 'fr-FR', groupText: 'Navigation Documentation' },
  { code: 'de-DE', groupText: 'Dokumentation' },
  { code: 'es-ES', groupText: 'Documentación' },
  { code: 'ru-RU', groupText: 'Документация' },
];

// 生成多语言侧边栏配置
export function generateSidebarConfig() {
  const sidebar = languages.map(({ code, groupText }) => {
    return {
      documentRootPath: "docs",
      scanStartPath: code,
      basePath: `/${code}/`,
      resolvePath: `/${code}/`,
      rootGroupText: groupText,
      rootGroupCollapsed: false,
      ...defaultConfig, // 使用默认配置
      excludeFolders: [".vitepress", "public", "components", ...(code === 'zh-CN' ? [] : [code])], // 排除当前语言文件夹
      // 针对每个语言添加特定的配置
    };
  });

  return generateSidebar(sidebar);
}

/**
 * 生成简单侧边栏配置（兼容性函数）
 * @returns {Object} 侧边栏配置
 */
export function generateSimpleSidebar() {
  return generateSidebarConfig();
}

/**
 * 多语言侧边栏配置（兼容性函数）
 * @returns {Object} 侧边栏配置
 */
export function generateMultiLangSidebar() {
  return generateSidebarConfig();
}

// 默认导出
export const sidebarConfig = generateSidebarConfig();
export default sidebarConfig;
