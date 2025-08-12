---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: 여기서 모든 블록은 이야기를 가지고, 모든 플레이어는 전설이 됩니다
  image:
    src: /logo.png
    alt: BlockTavern 로고
  actions:
    - theme: brand
      text: 튜토리얼 시작
      link: /ko-KR/InstallationTutorial/installation-details
    - theme: alt
      text: 개발 가이드 (문서 기여)
      link: /ko-KR/DevelopmentGuide/development-details

features:
  - icon: 📦
    title: 설치 튜토리얼
    details: BlockTavern 게임을 설치하고 모험을 시작할 준비를 하세요
    link: /ko-KR/InstallationTutorial/installation-details

  - icon: 🎮
    title: 게임플레이 가이드
    details: 게임의 기본 규칙과 플레이 방법을 배우세요
    link: /ko-KR/GameplayGuide/server-rules

  - icon: ❓
    title: 자주 묻는 질문
    details: 문제를 빠르게 해결하세요
    link: /ko-KR/FAQ/faq-details
---

### 기여 개요

```sh
# 저장소 복제
git clone https://github.com/your-username/doc_blocktavern.git

# 프로젝트 디렉토리로 이동
cd doc_blocktavern

# 의존성 설치
npm install

# 개발 서버 시작
npm run docs:dev

# 모든 변경사항 추가
git add .

# 내용 커밋
git commit -m "docs: 문서 내용 업데이트"

# 변경사항 푸시
git push origin main
```

::: warning 참고
Node.js 버전이 16.0 이상인지 확인하고, 원본 저장소를 이미 포크했는지 확인하세요.
:::

### 기여 과정

1. **저장소 포크**: 저장소 우상단의 "Fork" 버튼을 클릭하여 GitHub 계정에 복사본을 만드세요.
2. **저장소 복제**: `git clone` 명령을 사용하여 포크한 저장소를 로컬 머신에 복제하세요.
3. **변경사항 작성**: 로컬 저장소에서 문서 변경사항을 작성하세요.
4. **변경사항 커밋**: `git commit`을 사용하여 변경사항을 커밋하세요.
5. **변경사항 푸시**: `git push`를 사용하여 변경사항을 포크한 저장소에 푸시하세요.
6. **풀 리퀘스트 생성**: 원본 저장소에서 "Pull Requests" 탭을 클릭한 후 "New Pull Request"를 클릭하세요.
7. **풀 리퀘스트 정보 작성**:
   - 제목: 변경사항을 간략히 설명하세요
   - 설명: 변경사항의 동기와 영향을 자세히 설명하세요
8. **풀 리퀘스트 제출**: "Create Pull Request"를 클릭하여 변경사항을 제출하세요.
9. **리뷰 대기**: 프로젝트 관리자가 풀 리퀘스트를 검토할 것입니다.