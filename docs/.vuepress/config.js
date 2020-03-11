module.exports = {
  locales: {
    "/": {
      lang: "ja"
    }
  },
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
        children: ["/docker/cheat_sheet"]
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
        children: ["/javascript/event"]
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
