---
title: 프로젝트 구조
description: 服务器项目结构目录
order: 2
---


# 프로젝트 구조

BlockTavern 문서 프로젝트는 VitePress로 구축되었으며 다국어 국제화를 지원합니다.

## 디렉토리 구조

```
doc_blocktavern/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 자동 배포
├── docs/
│   ├── .vitepress/
│   │   ├── components/         # 모듈화된 설정 디렉토리
│   │   │   ├── index.js        # 설정 통합 내보내기
│   │   │   ├── site.js         # 사이트 기본 설정
│   │   │   ├── language.js     # 다국어 메인 설정
│   │   │   ├── language/       # 각 언어 설정 파일
│   │   │   │   ├── zh-CN.js    # 중국어 설정
│   │   │   │   ├── en-US.js    # 영어 설정
│   │   │   │   └── ...         # 기타 언어
│   │   │   ├── nav.js          # 네비게이션 설정
│   │   │   ├── sidebar.js      # 사이드바 설정
│   │   │   ├── social.js       # 소셜 링크
│   │   │   ├── editLink.js     # 편집 링크
│   │   │   └── mdItCustomAttrs.js # Markdown 확장
│   │   ├── config.mjs          # VitePress 메인 설정
│   │   ├── theme/              # 테마 커스터마이징
│   │   ├── plugins/            # 플러그인 디렉토리
│   │   └── cache/              # 빌드 캐시
│   ├── zh-CN/                  # 중국어 문서
│   │   ├── DevelopmentGuide/   # 개발 가이드
│   │   ├── FAQ/                # 자주 묻는 질문
│   │   ├── GameplayGuide/      # 게임 가이드
│   │   ├── InstallationTutorial/ # 설치 튜토리얼
│   │   └── index.md            # 중국어 홈페이지
│   ├── en/                     # 영어 문서
│   ├── fr/                     # 프랑스어 문서
│   ├── de/                     # 독일어 문서
│   ├── es/                     # 스페인어 문서
│   ├── ja/                     # 일본어 문서
│   ├── ko/                     # 한국어 문서
│   ├── ru/                     # 러시아어 문서
│   ├── zh-TW/                  # 번체 중국어 문서
│   ├── public/                 # 정적 리소스
│   │   └── logo.png            # 사이트 아이콘
│   └── obsolete/               # 폐기된 파일
├── package.json                # 프로젝트 의존성
├── package-lock.json           # 의존성 잠금
└── README.md                   # 프로젝트 설명
```

## 핵심 디렉토리 설명

### `.vitepress/` 설정 디렉토리

**주요 파일**:
- `config.mjs`: VitePress 메인 설정 진입점
- `components/`: 모듈화된 설정 관리
- `theme/`: 커스텀 테마 스타일
- `plugins/`: 기능 플러그인 확장
- `cache/`: 빌드 캐시 파일

**설정 컴포넌트** (`components/`):
- `site.js`: 사이트 기본 정보
- `language.js`: 다국어 메인 설정
- `language/`: 각 언어별 구체적 설정
- `sidebar.js`: 자동 사이드바 생성
- `nav.js`: 상단 네비게이션 메뉴
- `social.js`: 소셜 미디어 링크
- `editLink.js`: 페이지 편집 링크

### 다국어 문서 구조

**지원 언어**:
- `zh-CN/`: 간체 중국어 (주요 언어)
- `en/`: 영어
- `zh-TW/`: 번체 중국어
- `fr/`, `de/`, `es/`, `ja/`, `ko/`, `ru/`: 기타 언어

**문서 모듈**:
- `DevelopmentGuide/`: 개발 가이드
- `FAQ/`: 자주 묻는 질문
- `GameplayGuide/`: 게임 가이드
- `InstallationTutorial/`: 설치 튜토리얼

### 리소스 디렉토리

- `public/`: 전역 정적 리소스 (아이콘, 이미지 등)
- `zh-CN/public/`: 중국어 전용 리소스
- `obsolete/`: 폐기된 문서 파일

## 파일 명명 규칙

::: tip 명명 규약
- 파일명은 소문자와 하이픈 사용: `installation-guide.md`
- 디렉토리명은 PascalCase 사용: `DevelopmentGuide/`
- 각 디렉토리는 반드시 `index.md`를 홈페이지로 포함해야 함
- 이미지 리소스는 해당 하위 디렉토리에 배치
:::

## 자동화 기능

- **사이드바 자동 생성**: 파일 구조와 Front Matter 기반
- **다국어 라우팅**: 언어 전환 자동 처리
- **GitHub Actions 배포**: 코드 푸시 시 자동 빌드 및 배포
- **로컬 검색**: 내장 전문 검색 기능

<Contributors />

<GitHistoryInformation />