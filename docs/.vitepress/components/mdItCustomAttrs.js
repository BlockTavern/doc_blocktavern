/**
 * 自定义 markdown 插件 - 图片预览
 * 可以查看使用 https://www.awafuns.cn/tooldoc/zh/tutorial/Vitepress/Vitepress%E5%9B%BE%E7%89%87%E7%BC%A9%E6%94%BE%E9%A2%84%E8%A7%88.html
 * 1. 图片添加 fancybox 属性
 * 2. ![图片描述](图片地址)
 * 3. <img src="图片地址" data-fancybox="gallery"/>
 */

import mdItCustomAttrs from "markdown-it-custom-attrs";

export const mdItCustomAttrsConfig = {
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
};