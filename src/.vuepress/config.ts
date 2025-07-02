import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "张成的官方网站",
  description: "张成的个人博客展示,张成的官方网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
