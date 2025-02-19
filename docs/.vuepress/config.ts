import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { UserConfig, defineUserConfig } from "@vuepress/cli";
import { searchPlugin } from "@vuepress/plugin-search";
import markdownItFootnote from "markdown-it-footnote";
import { defaultTheme } from "vuepress";
import * as navbar from "./config/navbar";
import { MermaidPlugin } from "./config/plugins/mermaidPlugin";
import * as sidebar from "./config/sidebar";
import { docsPlugin } from "./theme/index";

const isProduction = process.env.NODE_ENV === "production";
const forMainRepo = process.env.XRAY_DOCS_MAIN_REPO === "true";
const useVite = process.env.XRAY_DOCS_USE_VITE === "true";

console.log("base:", forMainRepo ? "/" : "/Xray-docs-next/");
console.log(
  "bundler:",
  isProduction && !useVite ? "@vuepress/webpack" : "@vuepress/vite"
);

export default defineUserConfig(<UserConfig>{
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  base: forMainRepo ? "/" : "/Xray-docs-next/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Project X",
      description: "Xray 官方文档",
    },
    "/en/": {
      lang: "en-US",
      title: "Project X",
      description: "Official document of Xray",
    },
  },
  theme: defaultTheme({
    ...docsPlugin,
    smoothScroll: true,
    repo: "xtls/xray-core",
    docsRepo: "xtls/Xray-docs-next",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    enableToggle: true,

    themePlugins: {
      git: isProduction,
    },
    locales: {
      "/": {
        navbar: navbar.hans,
        repoLabel: "查看源码",
        editLinkText: "帮助我们改善此页面！",
        tip: "提示",
        warning: "注意",
        danger: "警告",
        lastUpdatedText: "最近更改",
        selectLanguageName: "简体中文",
        selectLanguageText: "多语言",
        selectLanguageAriaLabel: "多语言",
        sidebar: {
          "/config/": sidebar.getConfigSidebar(
            "特性详解",
            "基础配置",
            "入站代理",
            "出站代理",
            "底层传输",
            "/config/",
          ),
          "/document/": sidebar.getDocumentSidebar(
            "快速入门文档",
            "/document/",
          ),
          "/document/level-0/": sidebar.getDocumentLv0Sidebar(
            "小小白白话文",
            "/document/level-0/",
          ),
          "/document/level-1/": sidebar.getDocumentLv1Sidebar(
            "入门技巧",
            "/document/level-1/",
          ),
          "/document/level-2/": sidebar.getDocumentLv2Sidebar(
            "进阶技巧",
            "/document/level-2/",
          ),
          "/development/": sidebar.getDevelopmentSidebar(
            "开发指南",
            "协议详解",
            "/development/",
          ),
        },
      },
      "/en/": {
        repoLabel: "Source",
        editLinkText: "Help us improve this page on GitHub！",
        tip: "Tip",
        warning: "Warning",
        danger: "Danger",
        lastUpdatedText: "Last Updated",
        selectLanguageName: "English (WIP)",
        // TODO: translation
        sidebar: {
          "/en/config/": sidebar.getConfigSidebar(
            "Xray Features",
            "Config Reference",
            "Inbound Protocol",
            "Outbound Protocol",
            "Stream Transport Protocol",
            "/en/config/",
          ),
          "/en/document/level-0/": sidebar.getDocumentLv0Sidebar(
            "Beginner Tutorial",
            "/en/document/level-0/",
          ),
          "/en/document/level-1/": sidebar.getDocumentLv1Sidebar(
            "Getting Started Tips",
            "/en/document/level-1/",
          ),
          "/en/document/level-2/": sidebar.getDocumentLv2Sidebar(
            "Advanced Documentation",
            "/en/document/level-2/",
          ),
          "/en/development/": sidebar.getDevelopmentSidebar(
            "Developer Guide",
            "Protocol Details",
            "/en/development/",
          ),
        },
        navbar: navbar.en,
      },
    },
  }),
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  markdown: {
    toc: {
      level: [2],
    },
  },
  extendsMarkdown: (md) => {
    md.use(markdownItFootnote);
    md.use(MermaidPlugin);
  },
  bundler:
    process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler(),
});
