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
import { zhHKConfig } from './language/zh-HK.js'
import { jaConfig } from './language/ja-JP.js'
import { koConfig } from './language/ko-KR.js'
import { frConfig } from './language/fr-FR.js'
import { deConfig } from './language/de-DE.js'
import { esConfig } from './language/es-ES.js'
import { ruConfig } from './language/ru-RU.js'

// 多语言配置对象
export const localesConfig = {
  'zh-CN': zhConfig,      // 简体中文
  'zh-TW': zhTWConfig,    // 繁體中文
  'zh-HK': zhHKConfig,    // 香港中文
  'en-US': enConfig,      // 英文
  'ja-JP': jaConfig,      // 日本語
  'ko-KR': koConfig,      // 한국어
  'fr-FR': frConfig,      // Français
  'de-DE': deConfig,      // Deutsch
  'es-ES': esConfig,      // Español
  'ru-RU': ruConfig,      // Русский
}

// 导出单独的配置以便按需使用
export { 
  zhConfig, 
  enConfig, 
  zhTWConfig, 
  zhHKConfig, 
  jaConfig, 
  koConfig, 
  frConfig, 
  deConfig, 
  esConfig, 
  ruConfig 
}