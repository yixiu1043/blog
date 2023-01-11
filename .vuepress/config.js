module.exports = {
  title: "YIXIU",
  description: "stay hungry stay foolish",
  dest: "public",
  base: '/blog/',
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    // PWA
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#42b983" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/logo.png" }],
    ["link", { rel: "mask-icon", href: "/icons/logo.png" }],
    ["meta", { name: "msapplication-TileImage", content: "/icons/logo.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    // PWA
    // 支持 google-analytics 4
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-KVF6MNQPVP",
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-KVF6MNQPVP');
      `
    ],
    // [
    //   "script",
    //   {
    //     src: "https://unpkg.com/vconsole/dist/vconsole.min.js",
    //   },
    // ],
    // [
    //   "script",
    //   {},
    //   `
    //   new VConsole();
    //   `
    // ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      {
        text: "Docs",
        icon: "reco-api",
        items: [
          { text: "Guide", link: "/docs/" },
          { text: "Case", link: "/docs/case" },
        ],
      },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "More",
        items: [
          {
            text: "Github",
            link: "https://github.com/yixiu1043",
            icon: "reco-github",
          },
          {
            text: "订阅",
            link: "https://yixiu1043.github.io/blog/rss.xml",
            icon: "reco-rss",
          },
        ],
      },
    ],
    type: "blog",
    blogConfig: {
      category: { location: 3, text: "Category" },
      tag: { location: 4, text: "Tag" },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
      {
        title: "my fiverr",
        desc: "become freelancer",
        avatar:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/a956c117b9665f9e1ace2b56e68f2e62-1670834440955/bd98a46c-946d-478e-8a51-67f8f2995710.jpg",
        link: " https://www.fiverr.com/wozblue",
      },
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    subSidebar: "auto",
    lastUpdated: "Last Updated",
    author: "yixiu",
    authorAvatar: "/avatar.png",
    // record: 'xxxx',
    startYear: "2018",
    sidebar: {
      // 文档左侧侧边栏配置
      "/docs/": ["", "case", "marketplace", "advanced-tutorial"],
    },
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
      appId: "yPohCSYAZZsHKJSbP8mPJ2Nm-MdYXbMMI", // your appId
      appKey: "hmOTt2KHWzvEPEIYqXrpxJ9u", // your appKey
      placeholder: "write something",
      avatar: "robohash", // 头像风格
      visitor: true, // 阅读量统计
      requiredFields: ["nick"], //设置必填项
      region: "us",
      serverURLs: "https://yPohCSYA.api.lncldglobal.com", // 解决LeanCloud国际版无法评论，yPohCSYA为appId前8位
    },
  },
  markdown: {
    lineNumbers: false,
    plugins: {
      "@centerforopenscience/markdown-it-video": {},
    },
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: { message: "发现新内容可用", buttonText: "刷新" },
      },
    ],
    ["permalink-pinyin", { lowercase: true, separator: "-" }],
    ["@vuepress-reco/rss", { site_url: "https://yixiu1043.github.io/blog/" }],
    [
      "vuepress-plugin-code-copy",
      {
        align: "bottom",
        color: "#ff5722",
      },
    ],
    [
      "vuepress-plugin-sponsor",
      {
        theme: "simple",
        alipay: "/qr-code/alipay.png",
        wechat: "/qr-code/wechat.png",
        // qq: '/qr-code/qq.png',
        paypal: "https://www.paypal.me/yokefellow",
        duration: 2000,
      },
    ],
    // 有BUG，有时候点开后会自动缩小
    [
      "@vuepress/medium-zoom",
      {
        selector: ".theme-reco-content :not(a) > img",
      },
    ],
    // 2023.7.1后谷歌不再支持
    // [
    //   "@vuepress/google-analytics",
    //   { ga: "UA-145088955-1" }, // UA-00000000-0
    // ],
    ["sitemap", { hostname: "https://yixiu1043.github.io/blog/" }],
    // 音乐外链网站：https://www.qqmc.com/up/top16.html，https://music.xf1433.com/
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "강남역 4번 출구",
            artist: "Plastic / Fallin` Dild",
            url: "https://assets.smallsunnyfox.com/music/2.mp3",
            cover: "https://assets.smallsunnyfox.com/music/2.jpg",
          },
          {
            name: "用胳膊当枕头",
            artist: "최낙타",
            url: "https://assets.smallsunnyfox.com/music/3.mp3",
            cover: "https://assets.smallsunnyfox.com/music/3.jpg",
          },
        ],
        // autoplay: false,
        autoShrink: true, //是否自动缩小
      },
    ],
    // 在您的 Vuepress 中添加美丽的丝带！
    // ["ribbon"],
    // 在您的 vuepress 中添加可爱的光标效果！
    // ["cursor-effects"],
    // Click such a lovely cat to back to top!
    ["go-top"],
    // https://us11.admin.mailchimp.com/
    [
      "vuepress-plugin-mailchimp",
      {
        endpoint: "https://github.us11.list-manage.com/subscribe/post?u=ab7406f99ada59774695c2213&amp;id=d8a40f9327&amp;f_id=00a89ee0f0"
      },
    ],
    ["vuepress-plugin-smooth-scroll"],
    // TODO vuepress-plugin-seo
  ],
};

// 参考链接
// https://vuepress-theme-reco.recoluan.com/views/other/recommend.html
// https://moefyit.github.io/moefy-vuepress/packages/go-top.html#install
// https://ianwu.tw/press/vuepress/
// https://vuepress-plugin-mailchimp.billyyyyy3320.com/
// https://vuepress-community.netlify.app/zh/