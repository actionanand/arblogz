// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type {AnalyticsConfig} from "./types/analyticsTypes"

/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * baseUrl {string} When using GitHubPages, you must enter the repository name, startWith '/', e.g. /repo_name
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 * asideTagsMaxSize {number}
 *    0: disable
 *    > 0: display the limited number of tags in the sidebar
 *    All tags will be displayed in single page "/tags".
 */

/*
* url for cloudflare: 'https://arblogz.pages.dev' | baseUrl: ''
* url for vercel: 'https://arblogz.vercel.app' | baseUrl: ''
* url for github Pages: 'https://actionanand.github.io' | baseUrl: '/arblogz'
*/
export const site = {
  title: 'AR Blogz', // required
  favicon: '/favicon.svg', // required
  description: 'Welcome to my independent blog website! ',
  author: "Anand Raja", // required
  avatar: '/avatar.png', // required
  url: 'https://arblogz.pages.dev', // required
  baseUrl: '', // When using GitHubPages, you must enter the repository name startWith '/'. e.g. '/astro-blog'
  motto: `Don't just be Inspired, be Inspiring!`,
  recentBlogSize: 7,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
  asideTagsMaxSize: 0,
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 * memosUrl {string} memos server url
 * memosUsername {string} memos login name
 * memosPageSize {number} 10
 */

const baseUrl = import.meta.env.PROD ? site.baseUrl : '';

export const config = {
  lang: (() => {
    // For server-side and initial render, always use English as default
    // Client-side JavaScript will handle dynamic language switching
    return 'en';
  })(),
  codeFoldingStartLines: 16, // Need to re-run the project to take effect

  // daily updates API config
  dailyUpdatesApi: {
    enabled: true, // Set to true to enable API fetching
    url: 'https://raw.githubusercontent.com/actionanand/json-server/main/db/api/arblogz/v1/daily-status.json', // API endpoint URL
    apiKey: '', // Optional API key for authentication
    cacheTime: 5 * 60 * 1000, // Cache API responses for 5 minutes (in milliseconds)
  },

  // memos config
  memosUrl: '', // https://xxxx.xxx.xx
  memosUsername: '', // login name
  memosPageSize: 10, // number
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const categories = [
  {
    name: "Blog",
    translationKey: "nav.blog",
    iconClass: "ri-draft-line",
    href: "/blog/1",
    target: "_self"
  },
  {
    name: "Feed",
    translationKey: "nav.feed",
    iconClass: "ri-lightbulb-flash-line",
    href: "/feed/1",
    target: "_self"
  },
  {
    name: "Archive",
    translationKey: "nav.archive",
    iconClass: "ri-archive-line",
    href: "/archive/1",
    target: "_self"
  },
  {
    name: "Search",
    translationKey: "nav.search",
    iconClass: "ri-search-line",
    href: "/search",
    target: "_self"
  },
  {
    name: 'About',
    translationKey: "nav.about",
    iconClass: 'ri-information-line',
    href: '/about',
    target: "_self"
  },
  {
    name: "Language",
    translationKey: "nav.language",
    iconClass: "ri-global-line",
    href: "javascript:void(0);",
    target: "_self",
    children: [
      {
        name: 'தமிழ்',
        iconClass: 'ri-flag-line',
        href: '#',
        lang: 'ta'
      },
      {
        name: 'English',
        iconClass: 'ri-flag-line',
        href: '#',
        lang: 'en'
      },
      {
        name: '简体中文',
        iconClass: 'ri-flag-line',
        href: '#',
        lang: 'zh-cn'
      },
      {
        name: '繁體中文',
        iconClass: 'ri-flag-line',
        href: '#',
        lang: 'zh-Hant'
      },
      {
        name: 'Čeština',
        iconClass: 'ri-flag-line',
        href: '#',
        lang: 'cs'
      },
      {
        name: 'Français',
        iconClass: 'ri-flag-line',
        href: '#',
        lang: 'fr'
      },
      {
        name: 'ಕನ್ನಡ',
        iconClass: 'ri-flag-line',
        href: '#',
        lang: 'kn'
      },
      {
        name: 'हिन्दी',
        iconClass: 'ri-flag-line',
        href: '#',
        lang: 'hi'
      },
      {
        name: 'العربية',
        iconClass: 'ri-flag-line',
        href: '#',
        lang: 'ar'
      }
    ]
  }

  /*
  {
    name: "More",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: 'About',
        iconClass: 'ri-information-line',
        href: '/about',
      }
    ]
  }
  */
]

/**
 * Personal link address
 */
export const infoLinks = [
  // {
  //   icon: 'ri-telegram-fill',
  //   name: 'telegram',
  //   outlink: 'actionanand',
  // },
  {
    icon: 'ri-twitter-x-fill',
    name: 'twitter',
    outlink: 'https://twitter.com/actionanand',
  },
  {
    icon: 'ri-instagram-fill',
    name: 'instagram',
    outlink: 'https://www.instagram.com/actionanand/',
  },
  {
    icon: 'ri-youtube-fill',
    name: 'youtube',
    outlink: 'https://www.youtube.com/@actionanand13',
  },
  {
    icon: 'ri-spotify-fill',
    name: 'spotify',
    outlink: 'https://open.spotify.com/artist/6noSP4wHXCQZLhI3TqgedD',
  },
  // {
  //   icon: 'ri-linkedin-box-fill',
  //   name: 'linkedin',
  //   outlink: 'https://www.linkedin.com/in/anand-ns/',
  // },
  // {
  //   icon: 'ri-github-fill',
  //   name: 'github',
  //   outlink: 'https://github.com/actionanand',
  // },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: `${baseUrl}/rss-preview`,
  }
]

/**
 * donate
 * enable {boolean} - Global enable/disable
 * enableForAllBlogs {boolean} - Enable donations on all blog posts by default
 * tip {string}
 * Payment method QR codes: Image addresses should be placed in /public/images/donation/
 * Payment URLs and usernames for various platforms
 */
export const donate = {
  enable: true, // Global enable/disable
  enableForAllBlogs: false, // Enable donations on all blog posts by default (can be overridden per page)
  tip: "Thanks for the coffee !!!☕",
  
  // QR Code images (place in /public/images/donation/)
  // if you don't want some payment, comment it out
  wechatQRCode: `${baseUrl}/images/donation/wechat-qr.png`,
  alipayQRCode: `${baseUrl}/images/donation/alipay-qr.png`, 
  gpayQRCode: `${baseUrl}/images/donation/gpay-qr.png`, // Google Pay for India
  paytmQRCode: `${baseUrl}/images/donation/paytm-qr.png`, // Paytm for India
  phonepeQRCode: `${baseUrl}/images/donation/phonepe-qr.png`, // PhonePe for India
  
  // Direct payment URLs
  paypalUrl: "https://paypal.me/yourusername", // Replace with actual
  githubSponsors: "yourusername", // Replace with actual GitHub username
  buyMeACoffee: "yourusername", // Replace with actual username
  kofi: "yourusername", // Replace with actual Ko-fi username
  patreon: "yourusername", // Replace with actual Patreon username
  opencollective: "yourproject", // Replace with actual Open Collective project
  
  // Cryptocurrency (optional)
  bitcoin: "", // Bitcoin address
  ethereum: "", // Ethereum address
}

/**
 * Friendship Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    // {
    //   name: "Anand's Blog",
    //   url: 'https://anand.cn',
    //   avatar: "https://anand.cn/avatar.png",
    //   description: '前端开发的日常'
    // },
  ]

/**
 * Comment Feature
 * enable {boolean}
 * type {string} required waline | giscus
 * walineConfig.serverUrl {string} server link
 * walineConfig.lang {string} link: https://waline.js.org/guide/features/i18n.html
 * walineConfig.pageSize {number} number of comments per page. default 10
 * walineConfig.wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * walineConfig.count {number} recent comment numbers
 * walineConfig.pageview {boolean} display the number of page views and comments of the article
 * walineConfig.reaction {string | string[]} Add emoji interaction function to the article
 * walineConfig.requiredMeta {string[]}  Set required fields, default anonymous
 * walineConfig.whiteList {string[]} set some pages not to display reaction
 */
export const comment = {
  enable: false,
  type: 'giscus', // waline | giscus,
  walineConfig: {
    serverUrl: "",
    lang: 'en',
    pageSize: 20,
    wordLimit: '',
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ["nick", "mail"],
    whiteList: ['/message/', '/friends/'],
  },

  // giscus config
  giscusConfig: {
    'data-repo': "",
    'data-repo-id': "",
    'data-category': "",
    'data-category-id': "",
    'data-mapping': "",
    'data-strict': "",
    'data-reactions-enabled': "",
    'data-emit-metadata': "",
    'data-input-position': "",
    'data-theme': "",
    'data-lang': "",
    'crossorigin': "",
  }

  //
}

// These are characters available for the character chat feature.
// To add your own character, add an image file to the top-level `/public/admonitions/` directory
// Make sure to compress the image to a web-friendly size (<100kb)
// Try using the excellent https://squoosh.app web app for creating small webp files

export const characters = {
  owl: `${baseUrl}/admonitions/owl.webp`,
  unicorn: `${baseUrl}/admonitions/unicorn.webp`,
  duck: `${baseUrl}/admonitions/duck.webp`,
}

/**
 * Analytics Feature Configuration
 *
 * This file centralizes the analytics configuration for the application.
 * It defines and exports the default settings for Umami and Google Analytics.
 */
export const analytics: AnalyticsConfig = {
  enable: false,
  umamiConfig: {
    enable: false,
    id: "",
    url: ""
  },
  gaConfig: {
    enable: false,
    id: ""
  },
  busuanzi: false,
};
