import { defineUserConfig } from "vuepress";
import { commentPlugin } from '@vuepress/plugin-comment'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "张成的官方网站",
  description: "张成的个人博客展示,张成的官方网站",

  theme,

  plugins: [
    commentPlugin({
      provider: 'Giscus',
      // 其他选项
      repo:"phpzc/mygitpage-giscus",
      repoId:"R_kgDOPRIUwA",
      category:"General",
      categoryId:"DIC_kwDOPRIUwM4CtTFH",

    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
