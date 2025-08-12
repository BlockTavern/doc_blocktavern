---
title: 문서 작성
description: BlockTavern 문서 작성 완전 가이드
order: 4
---

# 문서 작성 가이드

이 가이드는 BlockTavern 프로젝트를 위한 고품질 문서 작성 및 유지 관리 방법을 자세히 설명합니다. 우리는 VitePress를 문서 생성 도구로 사용하며, 다국어 지원, 자동 사이드바 생성 등 현대적인 기능을 지원합니다.

## 1. 빠른 시작

새 문서 생성은 세 단계만 필요합니다:

1. 해당 언어 디렉토리에 `.md` 파일 생성
2. Front Matter 설정 추가
3. 내용 작성 및 저장
4. 문서 끝에 `<Contributors />` 기여자 컴포넌트와 `<GitHistoryInformation />` Git 히스토리 컴포넌트 추가

::: tip 개발 환경
`npm run docs:dev`를 사용하여 로컬 미리보기를 시작하고, 핫 리로드를 지원합니다.
:::

## 2. 기본 문법

### 2.1 일반적인 형식

```markdown
# 페이지 제목 (H1)

## 주요 섹션 (H2)

### 하위 섹션 (H3)

**굵게** _기울임_ `인라인 코드`

- 순서 없는 목록
- [링크 텍스트](./other-page.md)
- ![이미지](./images/screenshot.png)
```

### 2.2 코드 블록

````markdown
```javascript
const config = {
  title: "BlockTavern Docs",
  description: "문서 사이트",
};
```

<!-- 줄 번호가 있는 코드 블록 -->

```javascript{1,3-5}
const config = {
  title: 'BlockTavern Docs', // [!code highlight]
  description: '문서 사이트',
  version: '1.0.0',
  author: 'BlockTavern Team'
}
```
````

## 3. VitePress 확장 기능

### 3.1 정보 알림 상자

```markdown
::: tip 팁
중요한 제안이나 기법
:::

::: warning 경고
주의해야 할 사항
:::

::: danger 위험
가능한 위험이나 오류
:::

::: details 클릭하여 세부사항 펼치기
접을 수 있는 상세 내용
:::
```

### 3.2 코드 그룹

````markdown
::: code-group

```js [config.js]
export default {
  title: "BlockTavern Docs",
};
```

```json [package.json]
{
  "name": "blocktavern-docs"
}
```

:::
````

### 3.3 코드 하이라이트

````markdown
```javascript{2,4-6}
const config = {
  title: 'BlockTavern Docs', // 이 줄이 하이라이트됩니다
  description: '문서 사이트',
  theme: 'default',         // 이 줄들이 하이라이트됩니다
  version: '1.0.0',         // 이 줄들이 하이라이트됩니다
  author: 'Team'            // 이 줄들이 하이라이트됩니다
}
```

<!-- 코드 차이 표시 -->

```javascript
const config = {
  title: "BlockTavern Docs",
  description: "문서 사이트", // [!code --]
  description: "Minecraft 서버 문서", // [!code ++]
  version: "1.0.0", // [!code highlight]
};
```
````

### 3.4 표

```markdown
| 기능       | 설명             | 상태      |
| ---------- | ---------------- | --------- |
| 다국어 지원 | 중영문 전환 지원   | ✅ 완료 |
| 자동 사이드바 | 파일 구조에 따라 생성 | ✅ 완료 |
| 검색 기능   | 로컬 검색         | ✅ 완료 |
| 테마 전환   | 밝은/어두운 테마   | ✅ 완료 |
```

### 3.5 수학 공식

```markdown
<!-- 인라인 공식 -->

$a \ne 0$일 때, 방정식 $ax^2 + bx + c = 0$은 두 개의 해를 가집니다.

<!-- 블록 공식 -->

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$
```

## 4. 작성 규범

### 4.1 파일 명명

- 소문자와 하이픈 사용: `installation-guide.md`
- 중문, 공백, 밑줄 피하기: ~~`안내서.md`~~
- 각 디렉토리에는 `index.md`가 홈페이지로 필요

### 4.2 Front Matter

```yaml
---
title: 페이지 제목 # 필수
description: 페이지 설명 # 필수
order: 1 # 선택사항, 정렬 제어
---
```

### 4.3 페이지 구조

```markdown
---
title: 페이지 제목
description: 페이지 설명
---

# 페이지 제목

페이지 내용을 간략히 소개합니다.

## 주요 섹션

### 하위 섹션

구체적인 내용...

<Contributors />
```

**요점:**
- 페이지당 하나의 H1 제목만
- 숫자 번호가 매겨진 H2 섹션 사용
- 제목 계층을 건너뛰지 않기
- 페이지 끝에 `<Contributors />` 컴포넌트 추가하여 기여자 표시

## 5. 사이드바 설정

::: tip 자동 생성
프로젝트는 `vitepress-sidebar` 플러그인을 사용하여 파일 구조에 따라 사이드바를 자동 생성합니다.
:::

### 5.1 구성 원칙

- 디렉토리 구조 = 사이드바 구조
- 각 디렉토리에는 `index.md` 파일이 필요
- `order` 필드를 사용하여 정렬 제어
- 폴더는 PascalCase 명명 사용

## 6. 작성 가이드

### 6.1 작성 원칙

- 언어는 간결하고 명확하게, 장황한 문장 피하기
- 구조가 명확하고, 단순한 것부터 복잡한 것까지
- 실제 코드 예제 제공
- 알림 상자를 사용하여 중요 사항 강조

### 6.2 단계 설명 형식

````markdown
## 설치 단계

1. **프로젝트 다운로드**
   ```bash
   git clone https://github.com/project.git
   ```
````

2. **의존성 설치**

```bash
npm install
```

::: tip 팁
문제가 발생하면 Node.js 버전을 확인하세요.
:::

````

### 6.3 이미지 및 미디어

- 이미지는 `docs/public/images/` 디렉토리에 배치
- 설명적인 파일명과 alt 텍스트 사용
- 파일 크기 제어

```markdown
![설정 인터페이스](./images/config.png "설정 인터페이스 스크린샷")
````

## 7. 다국어 지원

프로젝트는 다국어 문서를 지원합니다:

- 중문 (기본값): `docs/zh-CN/`
- 영문: `docs/en/`
- 기타 언어: `docs/ja/`, `docs/ko/` 등

**번역 과정:**

1. 중문 문서를 해당 언어 디렉토리로 복사
2. Front Matter와 본문 내용 번역
3. 링크와 형식 확인
4. 표시 효과 테스트

## 8. 제출 확인

제출 전 확인사항:

- [ ] Front Matter 정보 완성
- [ ] 제목 계층 합리적
- [ ] 코드 예제 정확
- [ ] 링크 정상 접근 가능
- [ ] 이미지 정상 표시
- [ ] 문법 맞춤법 정확

## 9. 참고 자료

**공식 문서:**

- [VitePress 문서](https://vitepress.dev/)
- [Markdown 문법](https://markdown.com.cn/)
- [vitepress-sidebar 플러그인](https://vitepress-sidebar.jooy2.com/)

**추천 도구:**

- VS Code + Markdown 확장
- [표 생성기](https://tablesgenerator.com/markdown_tables)
- [이미지 압축](https://tinypng.com/)

---

이 가이드를 따르면 고품질 문서를 작성할 수 있습니다. 궁금한 점이 있으면 프로젝트 관리자에게 문의하세요.

<Contributors />

<GitHistoryInformation />