/**
 * 多语言配置主文件
 * VitePress 多语言支持配置
 * 
 * 该文件导入各个语言的具体配置，并组合成最终的多语言配置对象
 */

import { zhConfig } from './language/zh-CN.js'

// 多语言配置对象 - 只保留中文
export const localesConfig = {
  'zh-CN': zhConfig,      // 简体中文 (Chinese)
}

// 导出单独的配置以便按需使用
export { 
  zhConfig 
}