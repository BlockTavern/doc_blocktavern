export default {
  title: 'BlockTavern 冒险者酒馆',
  description: 'BlockTavern Minecraft 服务器 - 冒险者的聚集地',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ],
  
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '游玩指南', link: '/gameplay/' },
      { text: '问题解决', link: '/troubleshooting/' },
      { text: '常见问题', link: '/faq/' },
      { text: '安装教程', link: '/installation/' }
    ],

    sidebar: {
      '/gameplay/': [
        {
          text: '游玩指南',
          items: [
            { text: '服务器介绍', link: '/gameplay/introduction' },
            { text: '如何加入服务器', link: '/gameplay/join-server' },
            { text: '基础玩法', link: '/gameplay/basic-gameplay' },
            { text: '高级功能', link: '/gameplay/advanced-features' },
            { text: '服务器规则', link: '/gameplay/server-rules' }
          ]
        }
      ],
      '/troubleshooting/': [
        {
          text: '问题解决',
          items: [
            { text: '连接问题', link: '/troubleshooting/connection-issues' },
            { text: '游戏崩溃', link: '/troubleshooting/game-crashes' },
            { text: '延迟问题', link: '/troubleshooting/lag-issues' },
            { text: '权限问题', link: '/troubleshooting/permission-issues' }
          ]
        }
      ],
      '/faq/': [
        {
          text: '常见问题',
          items: [
            { text: '账户相关', link: '/faq/account' },
            { text: '游戏相关', link: '/faq/gameplay' },
            { text: '技术相关', link: '/faq/technical' }
          ]
        }
      ],
      '/installation/': [
        {
          text: '安装教程',
          items: [
            { text: 'Java版安装', link: '/installation/java-edition' },
            { text: '模组安装', link: '/installation/mods' },
            { text: '客户端配置', link: '/installation/client-config' },
            { text: '常用工具', link: '/installation/useful-tools' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Re0XIAOPA/doc_blocktavern' }
    ],

    footer: {
      message: 'BlockTavern 服务器文档站点',
      copyright: 'Copyright © 2024'
    },

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
    }
  }
} 