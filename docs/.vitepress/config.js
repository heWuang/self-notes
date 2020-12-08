module.exports = {
  title: "StudyNotes",
  description: "Just playing around.",
  lang: "en-US",
  title: "VitePress",
  description: "Vite & Vue powered static site generator.",

  themeConfig: {
    docsDir: "docs",
    editLinks: true,
    nav: [
      { text: "Guide", link: "/guide/index" },
      { text: "Days", link: "/days/index" },
      {
        text: "Special",
        ariaLabel: "Language Menu",
        items: [
          {
            text: "Css",
            link: "/special/css/index",
          },
        ],
      },
    ],
    sidebar: {
      "/guide": getGuideSidebar(),
      "/days": getDaysSidebar(),
      "/special": getSpecialSidebar(),
    },
  },
};

function getGuideSidebar() {
  return [{ text: "guide", link: "/guide/index" }];
}

function getDaysSidebar() {
  return [
    { text: "days", link: "days/index" },
    {
      text: "2020年12月",
      children: [{ text: "8号", link: "days/20-12/8" }],
    },
  ];
}

function getSpecialSidebar() {
  return [
    {
      text: "Css",
      collapsable: false,
      children: [
        {
          text: "introduce",
          link: "/special/css/index",
        },
        {
            text: "bfc",
            link: "/special/css/bfc",
          },
      ],
    },
  ];
}
