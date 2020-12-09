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

// 生产菜单
function monthDays(mon, start = 1, end=30, days=30) {
  let res =[]
  while(start <= end) {
    res.push({
      text: `${start}号`,
      link: `days/${mon}/${start}`
    })
    start++
  }
  return res
}

function getDaysSidebar() {
  return [
    { text: "days", link: "days/index" },
    {
      text: "2020年12月",
      collapsable: true,
      children: monthDays('20-12',8, 30, 30)
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
