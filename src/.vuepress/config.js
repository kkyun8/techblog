module.exports = {
  locales: {
    "/": {
      lang: "ja"
    }
  },
  base: "/techblog/",
  dest: "docs/",
  title: "Checkout Skills",
  themeConfig: {
    description: "description",
    nav: [
      { text: "About", link: "/about/" },
      { text: "Contact", link: "/contact" }
      // { text: "Github", link: "/" }
    ],
    sidebar: [
      ["/about", "About"],

      {
        title: "Git", // required
        children: ["/git/cheat_sheet"]
      },
      {
        title: "Docker", // required
        children: ["/docker/cheat_sheet", "/docker/docker"]
      },
      {
        title: "Sql" // required
      },
      {
        title: "Java", // required
        children: ["/java/cheat_sheet", "/java/spring_boot"]
      },
      {
        title: "Javascript", // required
        children: [
          "/javascript/object",
          "/javascript/event",
          "/javascript/closure"
        ]
      },
      {
        title: "Vue", // required
        children: ["/vue/cheat_sheet"]
      },
      {
        title: "Ruby", // required
        children: ["/ruby/cheat_sheet"]
      },
      {
        title: "Php", // required
        children: ["/php/cheat_sheet"]
      }
    ],
    sidebarDepth: 2
  }
};