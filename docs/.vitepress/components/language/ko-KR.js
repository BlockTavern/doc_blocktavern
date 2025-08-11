/**
 * 한국어 언어 설정
 * Korean Language Configuration
 */

export const koConfig = {
  label: "한국어",
  lang: "ko-KR",
  link: "/ko-KR/",
  title: "BlockTavern 문서",
  description: "BlockTavern Minecraft 서버 문서",
  themeConfig: {
    nav: [
      { text: "홈", link: "/ko-KR/" },
      { text: "설치", link: "/ko-KR/InstallationTutorial/" },
      { text: "게임 가이드", link: "/ko-KR/GameplayGuide/" },
      { text: "FAQ", link: "/ko-KR/FAQ/" },
      { text: "개발 가이드", link: "/ko-KR/DevelopmentGuide/" },
    ],
    // Edit link configuration
    editLink: {
      pattern:
        "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "GitHub에서 이 페이지 편집",
    },
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    // 其他主题配置
    outline: {
      label: "이 페이지의 내용",
    },
    docFooter: {
      prev: "이전",
      next: "다음",
    },
    darkModeSwitchLabel: "테마",
    lightModeSwitchTitle: "라이트 테마로 전환",
    darkModeSwitchTitle: "다크 테마로 전환",
    sidebarMenuLabel: "메뉴",
    returnToTopLabel: "맨 위로",
    lastUpdated: {
      text: "마지막 업데이트",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
};

export default koConfig;
