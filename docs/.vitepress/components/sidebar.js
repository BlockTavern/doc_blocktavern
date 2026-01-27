import { generateSidebar } from "vitepress-sidebar";

// 默认配置提取
const defaultConfig = {
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: false,
  // 连字符转空格
  hyphenToSpace: true,
  underscoreToSpace: true,
  // 首字母大写
  capitalizeFirst: false,
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

// 联合国六大官方语言配置
const languages = [
  { code: 'zh-CN', groupText: '文档导航' },      // 汉语 (Chinese)
  { code: 'en-US', groupText: 'Documentation' }, // 英语 (English)
  { code: 'es-ES', groupText: 'Documentación' }, // 西班牙语 (Spanish)
  { code: 'ar-SA', groupText: 'التوثيق' },       // 阿拉伯语 (Arabic)
  { code: 'ru-RU', groupText: 'Документация' },  // 俄语 (Russian)
  { code: 'fr-FR', groupText: 'Documentation' }, // 法语 (French)
  // 其他语言（可选）
  // { code: 'zh-TW', groupText: '文檔導航' },
  // { code: 'zh-HK', groupText: '文檔導航' },
  // { code: 'ja-JP', groupText: 'ドキュメント' },
  // { code: 'ko-KR', groupText: '문서 탐색' },
  // { code: 'de-DE', groupText: 'Dokumentation' },
];

/**
 * 规范化侧边栏链接为小写
 * 递归处理侧边栏配置，将所有链接转换为小写
 * @param {Object|Array} sidebar - 侧边栏配置对象或数组
 * @returns {Object|Array} 规范化后的侧边栏配置
 */
function normalizeSidebarLinks(sidebar) {
  if (Array.isArray(sidebar)) {
    return sidebar.map(item => normalizeSidebarLinks(item));
  }
  
  if (typeof sidebar === 'object' && sidebar !== null) {
    const normalized = { ...sidebar };
    
    // 将 link 属性转换为小写
    if (normalized.link && typeof normalized.link === 'string') {
      normalized.link = normalized.link.toLowerCase();
    }
    
    // 递归处理 items 数组
    if (normalized.items && Array.isArray(normalized.items)) {
      normalized.items = normalizeSidebarLinks(normalized.items);
    }
    
    return normalized;
  }
  
  return sidebar;
}

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

  // 生成侧边栏并规范化所有链接为小写
  const generatedSidebar = generateSidebar(sidebar);
  return normalizeSidebarLinks(generatedSidebar);
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
