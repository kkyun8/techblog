module.exports = {
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
      }
    ],
    sidebarDepth: 2
    //   {
    //     title: "Web", // required
    //     sidebarDepth: 1,
    //     children: []
    //   },
    //   {
    //     title: "Git", // required
    //     sidebarDepth: 1,
    //     children: ["/git/cheat_sheet"]
    //   },
    //   {
  }
};
