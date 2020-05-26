module.exports = {
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
  ],
  locales: {
    "/": {
      lang: "ja",
    },
  },
  base: "/techblog/",
  dest: "docs/",
  title: "Checkout Skills",
  themeConfig: {
    description: "description",
    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      // { text: "Github", link: "/" }
    ],
    sidebar: [
      ["/about", "About"],
      {
        title: "Web Fullstack",
        children: [
          "/web/backend",
          "/web/frontend",
          "/web/server",
          "/web/framework",
        ],
      },
      {
        title: "Git", // required
        children: ["/git/cheat_sheet"],
      },
      {
        title: "Docker", // required
        children: ["/docker/cheat_sheet", "/docker/docker"],
      },
      {
        title: "Database", // required
        children: ["/database/mysql", "/database/oracle", "/database/plsql"],
      },
      {
        title: "Java", // required
        children: ["/java/cheat_sheet", "/java/spring_boot", "java/think"],
      },
      {
        title: "Javascript", // required
        children: [
          "/javascript/object",
          "/javascript/array",
          "/javascript/event",
          "/javascript/closure",
        ],
      },
      {
        title: "Vue", // required
        children: ["/vue/cheat_sheet", "/vue/comparison", "vue/think"],
      },
      {
        title: "Ruby", // required
        children: ["/ruby/cheat_sheet", "/ruby/rails"],
      },
      {
        title: "Php", // required
        children: ["/php/cheat_sheet", "/php/laravel"],
      },
    ],
    sidebarDepth: 2,
  },
};
