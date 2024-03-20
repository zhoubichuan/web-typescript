const path = require("path");

module.exports = {
  title: "TypeScript学习笔记",
  description: "风浪没平息 我宣告奔跑的意义",
  base: "/web-typescript/", // 部署站点的基础路径
  port: 3009,
  head: [
    ["script", { src: "/dll/vendor.dll.js" }],
  ],
  define: {
    env: {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  alias: {
    "@": path.resolve(__dirname, "../../src/"),
  },
  postcss: {
    plugins: [require("autoprefixer")],
  },
  stylus: { preferPathResolver: "webpack" },
  less: {},
  scss: {

  },
  dest: "web-typescript", // 指定 vuepress 的输出目录
  markdown: {
    toc: { includeLevel: [2, 3] },
    lineNumbers: true, // 代码块显示行号
  },
  plugins: [

  ],
  // 主题配置
  themeConfig: {
    repo: "https://github.com/zhoubichuan/web-typescript", // 源码地址
    repoLabel: "查看源码", // (查看源码的)组件名称
    docsBranch: "master", // git 源仓库 仓库分支
    editLinks: true, // 编辑链接
    docsDir: "src", // 假如文档不是放在仓库的根目录下
    editLinkText: "在github上编辑此页",
    sidebarDepth: 2,
    lastUpdated: "上次更新", // 获取每个文件最后一次 git 提交的时间戳
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"),
    searchMaxSuggestoins: 10,
  },
};
