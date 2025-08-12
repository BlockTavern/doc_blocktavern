---
title: 설정 설명
description: VitePress 설정 파일 설명
order: 3
---

# 설정 설명

이 가이드는 프로젝트의 VitePress 설정 파일 구조와 사용자 정의 설정 방법을 자세히 설명합니다.

## 1. 설정 파일 개요

프로젝트는 모듈화된 설정 관리를 채택하여 다양한 유형의 설정을 `docs/.vitepress/components/` 디렉토리 하위의 다른 파일로 분리하여 유지보수와 확장을 용이하게 합니다. 주요 설정 파일은 다음과 같습니다:

-   `docs/.vitepress/config.mjs`: VitePress 메인 설정 파일
-   `docs/.vitepress/components/index.js`: 설정 컴포넌트 통합 내보내기 파일
-   `docs/.vitepress/components/site.js`: 사이트 기본 설정
-   `docs/.vitepress/components/nav.js`: 메인 네비게이션 설정 (폐기됨, 언어 설정 사용)
-   `docs/.vitepress/components/sidebar.js`: 사이드바 설정 (vitepress-sidebar 플러그인 자동 생성 사용)
-   `docs/.vitepress/components/language.js`: 다국어 설정 메인 파일
-   `docs/.vitepress/components/language/`: 각 언어별 구체적인 설정 파일 폴더
-   `docs/.vitepress/components/social.js`: 소셜 링크 설정
-   `docs/.vitepress/components/editLink.js`: 편집 링크 설정

## 2. 사이트 설정 (`docs/.vitepress/components/site.js`)

사이트 설정 파일은 웹사이트의 기본 정보와 테마 기본 설정을 정의합니다. 이 파일에는 두 개의 주요 설정 객체가 포함되어 있습니다:

### 2.1 사이트 기본 설정 (siteConfig)

```javascript
export const siteConfig = {
  title: 'BlockTavern Docs',
  description: 'BlockTavern Minecraft 服务器 - 方块酒馆聚集地',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ]
}
```

**참고**: 이 설정은 무시할 수 있으며, 자세한 설정은 언어 설정으로 이동하세요.

### 2.2 테마 기본 설정 (themeBaseConfig)

```javascript
export const themeBaseConfig = {
  logo: '/logo.png',
  
  // 搜索配置
  search: {
    provider: 'local'
  },

  // 上次更新时间
  lastUpdated: {
    text: '最后更新于',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },

  // 页脚配置
  footer: {
    message: 'BlockTavern Docs',
    copyright: 'Copyright © 2025 | 方块酒馆文档站点'
  },

  // 中文本地化配置
  outline: {
    label: '页面导航'
  }
}
```

**수정 방법:**

`docs/.vitepress/components/site.js` 파일의 해당 필드를 직접 편집하면 됩니다. 수정 후 일반적으로 개발 서버를 다시 시작하거나 프로젝트를 다시 빌드해야 합니다.

## 3. 다국어 설정

프로젝트는 다국어 설정을 지원하며, 주로 다음 파일을 통해 관리됩니다:

### 3.1 다국어 메인 설정 (`docs/.vitepress/components/language.js`)

```javascript
// 导入各个语言的配置
import { zhConfig } from './language/zh-CN.js'
import { enConfig } from './language/en-US.js'
// ... 其他语言配置

// 多语言配置对象
export const localesConfig = {
  root: zhConfig,        // 默认语言（简体中文）
  // en: enConfig,       // 启用英文版本
  // 其他语言配置（暂时注释，需要时可启用）
}
```

### 3.2 중국어 설정 (`docs/.vitepress/components/language/zh-CN.js`)

```javascript
export const zhConfig = {
  label: "简体中文",
  lang: "zh-CN",
  link: "/zh-CN/",
  title: "BlockTavern 文档",
  description: "BlockTavern Minecraft 服务器文档",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "安装教程", link: "/zh-CN/InstallationTutorial/installation-details" },
      { text: "游戏指南", link: "/zh-CN/GameplayGuide/command-list" },
      { text: "常见问题", link: "/zh-CN/FAQ/faq-details" },
      { text: "开发指南", link: "/zh-CN/DevelopmentGuide/development-details" }
    ],
    editLink: {
      pattern: "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "前往 GitHub 编辑此页面"
    },
    outline: { label: "页面导航" },
    lastUpdated: { text: "最后更新于" },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题"
  }
}
```

**수정 방법:**

1. 네비게이션 설정 수정: `nav` 배열의 링크와 텍스트 편집
2. 새 언어 추가: `language` 폴더에 새로운 언어 설정 파일 생성
3. 다국어 활성화: `language.js`에서 해당 언어 설정의 주석 해제

## 4. 사이드바 설정 (`docs/.vitepress/components/sidebar.js`)

프로젝트는 `vitepress-sidebar` 플러그인을 사용하여 사이드바를 자동 생성하므로 수동으로 사이드바 구조를 유지할 필요가 없습니다.

```javascript
import { generateSidebar } from "vitepress-sidebar";

export function generateSidebarConfig() {
  return generateSidebar([
    {
      documentRootPath: "docs",
      scanStartPath: "/",
      basePath: "/",
      resolvePath: "/",
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
      // 更多配置选项...
    }
  ]);
}
```

### 설정 설명

- `documentRootPath`: 문서 루트 디렉토리
- `useTitleFromFileHeading`: 파일 제목에서 사이드바 제목 가져오기
- `useTitleFromFrontmatter`: frontmatter에서 제목 가져오기
- `collapsed`: 기본 접힘 상태
- `collapseDepth`: 접힘 깊이

**장점**: 파일 구조에 따라 자동으로 사이드바를 생성하므로 수동 유지보수가 불필요하며 다국어를 지원합니다.

**수정 방법:**

필요에 따라 `generateSidebar` 함수의 설정 매개변수를 조정하세요. 자세한 설정 옵션은 `vitepress-sidebar` 플러그인 문서를 참조하세요.

## 5. 소셜 링크 설정 (`docs/.vitepress/components/social.js`)

소셜 링크 설정 파일은 페이지에 표시되는 소셜 미디어 링크를 정의합니다.

```javascript
export const socialLinksConfig = [
  { 
    icon: 'github', 
    link: 'https://github.com/Re0XIAOPA/doc_blocktavern' 
  }
  // 필요에 따라 더 많은 소셜 링크를 추가할 수 있습니다
  // { icon: 'discord', link: 'https://discord.gg/your-server' },
  // { icon: 'twitter', link: 'https://twitter.com/your-account' },
  // { icon: 'youtube', link: 'https://youtube.com/your-channel' }
]
```

### 지원되는 아이콘 유형

- `github`: GitHub
- `discord`: Discord
- `twitter`: Twitter/X
- `youtube`: YouTube
- `linkedin`: LinkedIn
- `facebook`: Facebook

## 6. 편집 링크 설정 (`docs/.vitepress/components/editLink.js`)

편집 링크 설정을 통해 사용자가 GitHub 편집 페이지로 직접 이동할 수 있습니다.

```javascript
export const editLink = {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: '前往 GitHub 编辑此页面',
    }
  },
  frontmatter: {
    lastUpdated: true,
    contributors: true,
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: '前往 GitHub 编辑此页面',
    }
  }
};
```

### 설정 설명

- `pattern`: GitHub 편집 링크 템플릿, `:path`는 현재 페이지 경로로 대체됩니다
- `text`: 편집 링크에 표시되는 텍스트
- `lastUpdated`: 마지막 업데이트 시간 표시
- `contributors`: 기여자 정보 표시

## 7. 메인 설정 파일 (`docs/.vitepress/config.mjs`)

메인 설정 파일은 VitePress의 진입점 설정으로, 모든 모듈화된 설정을 통합합니다.

```javascript
import { defineConfig } from 'vitepress'
import { 
  siteConfig, 
  themeBaseConfig, 
  navConfig, 
  socialLinksConfig, 
  localesConfig, 
  generateSidebarConfig, 
  editLink, 
  mdItCustomAttrs 
} from './components/index.js'

export default defineConfig({
  ...siteConfig,
  locales: localesConfig,
  markdown: {
    config: mdItCustomAttrs
  },
  themeConfig: {
    ...themeBaseConfig,
    nav: navConfig,
    sidebar: generateSidebarConfig(),
    socialLinks: socialLinksConfig,
    ...editLink.themeConfig
  }
})
```

## 8. 환경 변수

프로젝트는 환경 변수를 사용하여 다양한 환경에서의 설정을 관리합니다. 주요 환경 변수는 다음과 같습니다:

```bash
# 개발 환경
NODE_ENV=development

# 프로덕션 환경
NODE_ENV=production

# 기본 경로 (하위 디렉토리에 배포하는 경우)
BASE_URL=/docs/
```

**설정에서 환경 변수 사용:**

```javascript
export const siteConfig = {
  base: process.env.BASE_URL || '/',
  // 기타 설정...
}
```

## 9. 일반적인 문제 및 문제 해결

### 9.1 설정 관련 문제

- **설정이 적용되지 않음**: 올바른 설정 파일을 수정했는지 확인하고 개발 서버를 재시작하세요
- **사이드바가 표시되지 않음**: 파일 구조가 `vitepress-sidebar` 플러그인 요구사항에 맞는지 확인하세요
- **다국어 전환 문제**: `language.js`의 경로 설정이 올바른지 확인하세요

### 9.2 빌드 관련 문제

- **빌드 실패**: 모든 설정 파일의 ES6 모듈 문법이 올바른지 확인하세요
- **경로 오류**: 모든 파일 경로가 올바른 상대 경로 또는 절대 경로를 사용하는지 확인하세요

### 9.3 개발 권장사항

1. **모듈화된 설정**: 설정 파일의 모듈화된 구조를 유지하여 유지보수를 용이하게 하세요
2. **문서 구조**: 기존 문서 디렉토리 구조를 따라 사이드바 자동 생성이 정상적으로 작동하도록 하세요
3. **다국어 지원**: 새 언어를 추가할 때 `language.js`에서 올바르게 설정되었는지 확인하세요

---

위의 설정 설명을 통해 프로젝트 요구사항에 따라 각 설정 파일을 적절히 수정하고 사용자 정의할 수 있어야 합니다. 구체적인 문제가 발생하면 [VitePress 공식 문서](https://vitepress.dev/) 또는 [vitepress-sidebar 플러그인 문서](https://vitepress-sidebar.cdget.com/)를 참조하는 것을 권장합니다.

<Contributors />

<GitHistoryInformation />