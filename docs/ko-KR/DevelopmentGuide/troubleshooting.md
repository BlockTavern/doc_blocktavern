---
title: 문제 해결
description: 서버 문제 해결 디렉토리
order: 5
---

# 문제 해결

BlockTavern 문서 개발 중 발생하는 일반적인 문제를 빠르게 해결하세요.

## 개발 문제

### 서버 시작 실패

```bash
npm run docs:dev
```

**해결 방법**:
- Node.js 버전 확인 (권장 18+)
- 의존성 재설치: `rm -rf node_modules && npm install`
- 포트 사용 확인: `netstat -ano | findstr :5173`

### 빌드 실패

```bash
npm run docs:build
```

**해결 방법**:
- Markdown 구문 오류 확인
- 모든 내부 링크 유효성 검증
- 설정 파일 구문 확인

### 페이지 이상

**일반적인 증상**: 콘텐츠 표시 오류, 스타일 이상

**해결 방법**:
- 브라우저 캐시 지우기 (Ctrl+F5)
- Front Matter 형식 확인
- 이미지 경로 정확성 검증

### 검색 실패

**해결 방법**:
- 프로젝트 재빌드
- 브라우저 콘솔 오류 확인
- 검색 설정 검증

## 디버깅 기법

### 개발 디버깅

**브라우저 개발자 도구** (F12):
- 콘솔에서 오류 정보 확인
- 네트워크 패널에서 리소스 로딩 확인
- 요소 패널에서 스타일 디버깅

**VitePress 디버그 모드**:
```bash
# Windows
set DEBUG=vitepress:* && npm run docs:dev

# Linux/Mac
DEBUG=vitepress:* npm run docs:dev
```

**빌드 디버깅**:
```bash
npm run docs:build -- --debug
```

### 프로덕션 디버깅

**로컬 미리보기**:
```bash
npm run docs:build
npm run docs:preview
```

**파일 확인**:
- 빌드 출력: `docs/.vitepress/dist/`
- 정적 리소스: `docs/.vitepress/dist/assets/`
- 페이지 파일: HTML 구조 확인

### 유용한 도구

- **링크 확인**: `markdown-link-check`를 사용한 링크 검증
- **구문 확인**: `markdownlint`를 사용한 형식 확인
- **성능 분석**: 브라우저 Lighthouse 도구

## 설정 문제

### 사이드바가 표시되지 않음

**원인**: 파일 구조가 자동 생성 규칙에 맞지 않음

**해결 방법**:
- 디렉토리에 `index.md` 파일이 포함되어 있는지 확인
- 파일 명명 규칙 확인 (소문자+하이픈)
- Front Matter 형식이 올바른지 검증

### 다국어 전환 이상

**해결 방법**:
- `language.js` 설정 확인
- 각 언어 디렉토리 구조 일치 확인
- 경로 매핑 정확성 검증

### 이미지가 표시되지 않음

**해결 방법**:
- 상대 경로 사용: `./images/pic.png`
- `public/` 디렉토리에 파일이 존재하는지 확인
- 파일명 대소문자 일치 검증

## 배포 문제

### GitHub Pages 배포 실패

**해결 방법**:
- GitHub Actions 워크플로 설정 확인
- `base` 경로 설정이 올바른지 확인
- 저장소 권한 및 브랜치 설정 검증

### 정적 리소스 404

**해결 방법**:
- `base` 설정이 배포 경로와 일치하는지 확인
- 리소스 파일이 `public/` 디렉토리에 있는지 확인
- 빌드 출력 완전성 검증

## 빠른 진단

::: tip 문제 해결 단계
1. **오류 정보 확인**: 콘솔/터미널 출력
2. **파일 구조 확인**: 규범에 맞는지 확인
3. **설정 검증**: 구문과 경로 정확성
4. **정리 후 재빌드**: 캐시 삭제 후 재구축
5. **작업 버전과 비교**: Git 차이 비교
:::

<Contributors />

<GitHistoryInformation />