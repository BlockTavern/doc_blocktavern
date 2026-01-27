/**
 * 多语言配置主文件
 * VitePress 多语言支持配置
 * 
 * 该文件导入各个语言的具体配置，并组合成最终的多语言配置对象
 */

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
import { arConfig } from './language/ar-SA.js'

// 多语言配置对象
// 联合国六大官方语言：汉语、英语、西班牙语、阿拉伯语、俄语、法语
export const localesConfig = {
  'zh-CN': zhConfig,      // 简体中文 (Chinese)
  'en-US': enConfig,      // 英文 (English)
  'es-ES': esConfig,      // 西班牙语 (Spanish)
  'ar-SA': arConfig,      // 阿拉伯语 (Arabic)
  'ru-RU': ruConfig,      // 俄语 (Russian)
  'fr-FR': frConfig,      // 法语 (French)
  // 其他语言（可选）
  // 'zh-TW': zhTWConfig,    // 繁體中文
  // 'zh-HK': zhHKConfig,    // 香港中文
  // 'ja-JP': jaConfig,      // 日本語
  // 'ko-KR': koConfig,      // 한국어
  // 'de-DE': deConfig,      // Deutsch
}

// 导出单独的配置以便按需使用
export { 
  zhConfig, 
  enConfig, 
  esConfig,
  arConfig,
  ruConfig,
  frConfig,
  zhTWConfig, 
  zhHKConfig, 
  jaConfig, 
  koConfig, 
  deConfig
}