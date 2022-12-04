module.exports = {
  title: 'YIXIU',
  description: 'stay hungry stay foolish',
  dest: 'public',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'More',
        items: [
          { text: 'Github', link: 'https://github.com/yixiu1043', icon: 'reco-github' },
          { text: '订阅', link: 'https://yixiu1043.github.io/blog/rss.xml', icon: 'reco-rss' },
        ]
      }
    ],
    type: 'blog',
    blogConfig: {
      category: { location: 2, text: 'Category' },
      tag: { location: 3, text: 'Tag' }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    subSidebar: 'auto',
    lastUpdated: 'Last Updated',
    author: 'yixiu',
    authorAvatar: '/avatar.png',
    // record: 'xxxx',
    startYear: '2018',
    // vssueConfig: {
    //   platform: 'github',
    //   owner: 'yueyang8389',
    //   repo: 'blog',
    //   clientId: '0f4626f3176a519365e0',
    //   clientSecret: 'db6cc00dea72f422b254efb1e4f6fc66707a3466',
    //   autoCreatIssue: process.env.NODE_ENV !== 'development'
    // },
    /**
     * valine
     * 网站: https://console.leancloud.app/apps
     * 文档: https://valine.js.org/
     * 账密: yueyang8389@gamil.com / 21726627113Ai,.
     */
    valineConfig: {
      appId: 'yPohCSYAZZsHKJSbP8mPJ2Nm-MdYXbMMI',// your appId
      appKey: 'hmOTt2KHWzvEPEIYqXrpxJ9u', // your appKey
      placeholder: 'write something',
      avatar: 'retro',
      visitor: true, // 阅读量统计
    },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: { message: '发现新内容可用', buttonText: '刷新' }
      }
    ],
    [
      'permalink-pinyin',
      { lowercase: true, separator: '-' }
    ],
    [
      '@vuepress-reco/rss',
      { site_url: 'https://yixiu1043.github.io/blog/' }
    ],
  ],
}