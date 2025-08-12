---
title: 기여 가이드
description: BlockTavern 문서 기여 완전 가이드
order: 1
---

# 기여 가이드

BlockTavern 문서 프로젝트에 참여해 주셔서 감사합니다! 이 가이드는 빠르게 시작하고 고품질의 기여를 제출하는 데 도움이 될 것입니다.

## 환경 준비

### 시스템 요구사항

- **Node.js** 18+ 
- **Git** 최신 버전
- **GitHub** 계정

### 개발 도구 권장사항

- **VS Code** + Markdown 확장
- **GitHub Desktop** (선택사항)

::: tip 이미지 최적화
로컬 이미지를 사용하기 전에 파일 크기를 압축하거나 안정적인 이미지 호스팅 서비스를 사용하여 로딩 속도를 향상시키세요.
:::

## 빠른 시작

### 1. 프로젝트 Fork

1. 프로젝트 저장소 방문: [doc_blocktavern](https://github.com/Re0XIAOPA/doc_blocktavern)
2. 우측 상단의 **Fork** 버튼 클릭
3. Fork 완료 대기

### 2. 로컬 개발

```bash
# Fork한 저장소 클론
git clone https://github.com/YOUR_USERNAME/doc_blocktavern.git
cd doc_blocktavern

# 의존성 설치
npm install

# 개발 서버 시작
npm run docs:dev
```

`http://localhost:5173`에 접속하여 문서 사이트를 미리 볼 수 있습니다.

### 3. 브랜치 생성

```bash
# 기능 브랜치 생성
git checkout -b feature/your-feature-name

# 또는 수정 브랜치
git checkout -b fix/your-fix-name
```

## 기여 프로세스

### 1. 콘텐츠 작성

- `docs/zh-CN/` 디렉토리에서 문서 편집 또는 생성
- [문서 작성 규범](./writing-docs.md) 준수
- 실시간 미리보기: 저장 후 브라우저 자동 새로고침

### 2. 변경사항 커밋

```bash
# 변경된 파일 추가
git add .

# 변경사항 커밋 (표준 커밋 메시지 사용)
git commit -m "docs: 새 기능 설명 추가"

# Fork로 푸시
git push origin feature/your-feature-name
```

### 3. Pull Request 생성

1. Fork한 저장소 페이지 방문
2. **Compare & pull request** 버튼 클릭
3. PR 정보 작성:
   - **제목**: 변경 내용을 간결하게 설명
   - **설명**: 변경 이유와 영향을 자세히 설명
4. **Create pull request** 클릭

### 4. 검토 대기

- 프로젝트 관리자가 PR을 검토합니다
- 수정이나 보완을 요청할 수 있습니다
- 검토 통과 후 메인 브랜치에 병합됩니다

## 커밋 규범

### 커밋 메시지 형식

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**타입(type)**:
- `docs`: 문서 업데이트
- `feat`: 새 기능
- `fix`: 문제 수정
- `style`: 형식 조정
- `refactor`: 리팩토링

**예시**:
```bash
git commit -m "docs(guide): 설치 튜토리얼 추가"
git commit -m "fix(config): 사이드바 설정 오류 수정"
git commit -m "feat(search): 검색 기능 추가"
```

### 브랜치 명명 규범

- `feature/기능명`: 새 기능 개발
- `fix/문제설명`: 문제 수정
- `docs/문서유형`: 문서 업데이트
- `refactor/리팩토링내용`: 코드 리팩토링

## 기여 유형

### 문서 기여

- **새 문서 추가**: 새로운 가이드나 튜토리얼 생성
- **내용 완성**: 기존 문서의 세부 정보 보완
- **오류 수정**: 문서의 잘못된 정보 수정
- **번역 작업**: 중국어 문서를 다른 언어로 번역

### 기술 기여

- **설정 최적화**: VitePress 설정 개선
- **스타일 개선**: 문서 사이트 스타일 최적화
- **기능 향상**: 새로운 문서 기능 추가
- **성능 최적화**: 사이트 로딩 속도 향상

## 품질 기준

### 문서 품질

- [ ] 내용이 정확하고 오류가 없음
- [ ] 언어 표현이 명확함
- [ ] 구조와 계층이 합리적임
- [ ] 코드 예제가 실행 가능함
- [ ] 링크가 유효하고 접근 가능함
- [ ] 이미지가 선명하고 적절함

### 기술 품질

- [ ] 코드 스타일이 일관됨
- [ ] 설정 구문이 올바름
- [ ] 빌드 테스트 통과
- [ ] 호환성이 양호함

## 도움 받기

문제가 발생했을 때:

1. **기존 문서 확인**: [프로젝트 구조](./project-structure.md), [설정 설명](./configuration.md)
2. **Issue 제출**: GitHub 저장소에서 문제 보고서 생성
3. **관리자 연락**: GitHub 또는 커뮤니티 채널을 통해
4. **참고 자료**: [VitePress 공식 문서](https://vitepress.dev/)

---

기여해 주셔서 감사합니다! 모든 기여는 BlockTavern 문서를 더 좋게 만듭니다.

<Contributors />

<GitHistoryInformation />