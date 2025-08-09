/**
 * 多语言配置主文件
 * VitePress 多语言支持配置
 * 
 * 该文件导入各个语言的具体配置，并组合成最终的多语言配置对象
 */

// 导入各个语言的配置
import { zhConfig } from './language/zh-CN.js'
import { enConfig } from './language/en-US.js'
import { zhTWConfig } from './language/zh-TW.js'
import { jaConfig } from './language/ja-JP.js'
import { koConfig } from './language/ko-KR.js'
import { frConfig } from './language/fr-FR.js'
import { deConfig } from './language/de-DE.js'
import { esConfig } from './language/es-ES.js'
import { ruConfig } from './language/ru-RU.js'

// 多语言配置对象
export const localesConfig = {
  root: zhConfig,
  en: enConfig  // 启用英文版本
  // 其他语言配置（暂时注释，需要时可启用）
  // 'zh-TW': zhTWConfig,  // 繁體中文
  // ja: jaConfig,         // 日本語
  // ko: koConfig,         // 한국어
  // fr: frConfig,         // Français
  // de: deConfig,         // Deutsch
  // es: esConfig,         // Español
  // ru: ruConfig          // Русский
}

// 导出单独的配置以便按需使用
export { 
  zhConfig, 
  enConfig, 
  zhTWConfig, 
  jaConfig, 
  koConfig, 
  frConfig, 
  deConfig, 
  esConfig, 
  ruConfig 
}