const primaryLanguage = "en"; // Default language

function getPreferLanguage() {
  // Get language data from local storage
  const currentLanguage = localStorage.getItem("language");
  
  // return language value in local storage if it is set
  if (currentLanguage && ['ta', 'en', 'zh-cn', 'zh-Hant', 'cs'].includes(currentLanguage)) {
    console.log('Found saved language:', currentLanguage);
    return currentLanguage;
  }

  // return primary language if it is set
  if (primaryLanguage) return primaryLanguage;

  // return user device's prefer language if supported
  const browserLang = navigator.language || navigator.languages[0];
  const langCode = browserLang.split('-')[0];
  
  // Check if browser language is supported
  if (['ta', 'en', 'zh', 'cs'].includes(langCode)) {
    // Map 'zh' to 'zh-cn' as default Chinese
    return langCode === 'zh' ? 'zh-cn' : langCode;
  }
  
  return "en";
}

let languageValue = getPreferLanguage();

function setLanguagePreference() {
  localStorage.setItem("language", languageValue);
  console.log('Saved language to localStorage:', languageValue);
  reflectLanguagePreference();
}

// Make getCurrentLanguage available globally
window.getCurrentLanguage = function() {
  // Return the current languageValue which is synchronized with localStorage
  return languageValue;
};

// Complete translation mappings for client-side updates
const translations = {
  'ta': {
    'aside.caution': 'எச்சரிக்கை',
    'aside.danger': 'ஆபத்து',
    'aside.note': 'தகவல்',
    'aside.tip': 'குறிப்பு',
    'sidebar.categories': 'கட்டுரை வகைகள்',
    'sidebar.tags': 'குறிச்சொற்கள்',
    'sidebar.uncategorized': 'வகைப்படுத்தப்படாதவை',
    'sidebar.recentArticle': 'சமீபத்திய கட்டுரைகள்',
    'sidebar.recentComments': 'சமீபத்திய கருத்துக்கள்',
    'search.search': 'தேடல்',
    'search.placeholder': 'தலைப்பு அல்லது சுருக்கக் குறியீடுகளை உள்ளிடவும்',
    'search.searchLabelOne': 'கண்டுபிடிக்கப்பட்டது ',
    'search.searchLabelTwo': ' கட்டுரை(கள்) மொத்தம்',
    'search.labelOne': 'பின்வரும் வகையின் கீழுள்ள கட்டுரைகளை காண்கிறீர்கள்: ',
    'search.labelTwo': 'இல்',
    'feed.previous': 'முந்தியது',
    'feed.next': 'அடுத்தது',
    'feed.publishedIn': 'பதிவிடப்பட்டது',
    'blog.tableOfContent': 'உள்ளடக்கக் குறிப்பு',
    'home.sticky': 'ஒட்டியிருத்தல்',
    'home.goBack': 'பின்னால் செல்க',
    'home.moreArticles': 'மேலும் பல கட்டுரைகள்',
    'home.readMore': 'மேலும் படிக்க',
    'title.draft': 'வரைவில்',
    'title.minutes': ' நிமிடங்கள்',
    'title.words': ' சொற்கள்',
    'pagination.total': 'மொத்தம்',
    'pagination.unit': 'பக்கங்கள்',
    'post.lastUpdated': 'கடைசியாக புதுப்பிக்கப்பட்டது',
    'remark.open': 'திறக்கவும்',
    'more': 'மேலும்',
    'footer.articleTitle': 'கட்டுரை தலைப்பு',
    'footer.articleAuthor': 'கட்டுரை ஆசிரியர்',
    'footer.releaseTime': 'வெளியீட்டு நேரம்',
    'footer.originalLink': 'மூல இணைப்பு',
    'footer.sitemap': 'தள வரைபடம்',
    'footer.busuanziSitePV': 'பக்கப் பார்வைகள்:',
    'footer.busuanziSitePVUnit': '',
    'footer.busuanziSiteUV': 'மொத்த பார்வைகள்:',
    'footer.busuanziSiteUVUnit': '',
    'nav.blog': 'வலைப்பதிவு',
    'nav.feed': 'ஊட்டம்',
    'nav.archive': 'காப்பகம்',
    'nav.search': 'தேடல்',
    'nav.about': 'பற்றி',
    'nav.language': 'மொழி',
    'footer.copyright': 'காப்புரிமை'
  },
  'en': {
    'aside.caution': 'Caution',
    'aside.danger': 'Danger',
    'aside.note': 'Note',
    'aside.tip': 'Tip',
    'sidebar.categories': 'Categories',
    'sidebar.tags': 'Tags',
    'sidebar.uncategorized': 'Uncategorized',
    'sidebar.recentArticle': 'Recent Articles',
    'sidebar.recentComments': 'Recent Comments',
    'search.search': 'Search',
    'search.placeholder': 'Search for content...',
    'search.searchLabelOne': 'Found',
    'search.searchLabelTwo': 'results',
    'search.labelOne': 'Search results for',
    'search.labelTwo': 'in',
    'feed.previous': 'Previous',
    'feed.next': 'Next',
    'feed.publishedIn': 'Published in',
    'blog.tableOfContent': 'Table of Content',
    'home.sticky': 'Sticky',
    'home.goBack': 'Go Back',
    'home.moreArticles': 'More Articles',
    'home.readMore': 'Read More',
    'title.draft': 'Draft',
    'title.minutes': 'minutes',
    'title.words': 'words',
    'pagination.total': 'Total',
    'pagination.unit': 'pages',
    'post.lastUpdated': 'Last Updated',
    'remark.open': 'Open',
    'more': 'More',
    'footer.articleTitle': 'Article title',
    'footer.articleAuthor': 'Article author',
    'footer.releaseTime': 'Release time',
    'footer.originalLink': 'Original link',
    'footer.sitemap': 'Sitemap',
    'footer.busuanziSitePV': 'Page views:',
    'footer.busuanziSitePVUnit': '',
    'footer.busuanziSiteUV': 'Total visitors:',
    'footer.busuanziSiteUVUnit': '',
    'nav.blog': 'Blog',
    'nav.feed': 'Feed',
    'nav.archive': 'Archive',
    'nav.search': 'Search',
    'nav.about': 'About',
    'nav.language': 'Language',
    'footer.copyright': 'Copyright'
  },
  'zh-cn': {
    'aside.caution': '注意',
    'aside.danger': '危险',
    'aside.note': '注意',
    'aside.tip': '提示',
    'sidebar.categories': '分类',
    'sidebar.tags': '标签',
    'sidebar.uncategorized': '未分类',
    'sidebar.recentArticle': '最近文章',
    'sidebar.recentComments': '最近评论',
    'search.search': '搜索',
    'search.placeholder': '搜索内容...',
    'search.searchLabelOne': '找到',
    'search.searchLabelTwo': '个结果',
    'search.labelOne': '搜索结果',
    'search.labelTwo': '在',
    'feed.previous': '上一页',
    'feed.next': '下一页',
    'feed.publishedIn': '发布于',
    'blog.tableOfContent': '目录',
    'home.sticky': '置顶',
    'home.goBack': '返回',
    'home.moreArticles': '更多文章',
    'home.readMore': '阅读更多',
    'title.draft': '草稿',
    'title.minutes': '分钟',
    'title.words': '字',
    'pagination.total': '总共',
    'pagination.unit': '页',
    'post.lastUpdated': '最后更新',
    'remark.open': '打开',
    'more': '更多',
    'footer.articleTitle': '本文标题',
    'footer.articleAuthor': '文章作者',
    'footer.releaseTime': '发布时间',
    'footer.originalLink': '原始链接',
    'footer.sitemap': '站点地图',
    'footer.busuanziSitePV': '总访问量',
    'footer.busuanziSitePVUnit': '次',
    'footer.busuanziSiteUV': '总访客数',
    'footer.busuanziSiteUVUnit': '人次',
    'nav.blog': '博客',
    'nav.feed': '动态',
    'nav.archive': '归档',
    'nav.search': '搜索',
    'nav.about': '关于',
    'nav.language': '语言',
    'footer.copyright': '版权'
  },
  'zh-Hant': {
    'aside.caution': '注意',
    'aside.danger': '危險',
    'aside.note': '注意',
    'aside.tip': '提示',
    'sidebar.categories': '分類',
    'sidebar.tags': '標籤',
    'sidebar.uncategorized': '未分類',
    'sidebar.recentArticle': '最近文章',
    'sidebar.recentComments': '最近評論',
    'search.search': '搜尋',
    'search.placeholder': '搜尋內容...',
    'search.searchLabelOne': '找到',
    'search.searchLabelTwo': '個結果',
    'search.labelOne': '搜尋結果',
    'search.labelTwo': '在',
    'feed.previous': '上一頁',
    'feed.next': '下一頁',
    'feed.publishedIn': '發布於',
    'blog.tableOfContent': '目錄',
    'home.sticky': '置頂',
    'home.goBack': '返回',
    'home.moreArticles': '更多文章',
    'home.readMore': '閱讀更多',
    'title.draft': '草稿',
    'title.minutes': '分鐘',
    'title.words': '字',
    'pagination.total': '總共',
    'pagination.unit': '頁',
    'post.lastUpdated': '最後更新',
    'remark.open': '打開',
    'more': '更多',
    'footer.articleTitle': '本文標題',
    'footer.articleAuthor': '文章作者',
    'footer.releaseTime': '發布時間',
    'footer.originalLink': '原始鏈接',
    'footer.sitemap': '站點地圖',
    'footer.busuanziSitePV': '總訪問量',
    'footer.busuanziSitePVUnit': '次',
    'footer.busuanziSiteUV': '總訪客數',
    'footer.busuanziSiteUVUnit': '人次',
    'nav.blog': '博客',
    'nav.feed': '動態',
    'nav.archive': '歸檔',
    'nav.search': '搜索',
    'nav.about': '關於',
    'nav.language': '語言',
    'footer.copyright': '版權'
  },
  'cs': {
    'aside.caution': 'Pozor',
    'aside.danger': 'Nebezpečí',
    'aside.note': 'Poznámka',
    'aside.tip': 'Tip',
    'sidebar.categories': 'Kategorie',
    'sidebar.tags': 'Štítky',
    'sidebar.uncategorized': 'Nezařazené',
    'sidebar.recentArticle': 'Nedávné články',
    'sidebar.recentComments': 'Nedávné komentáře',
    'search.search': 'Hledat',
    'search.placeholder': 'Hledat obsah...',
    'search.searchLabelOne': 'Nalezeno',
    'search.searchLabelTwo': 'výsledků',
    'search.labelOne': 'Výsledky hledání pro',
    'search.labelTwo': 'v',
    'feed.previous': 'Předchozí',
    'feed.next': 'Další',
    'feed.publishedIn': 'Publikováno v',
    'blog.tableOfContent': 'Obsah',
    'home.sticky': 'Připnuto',
    'home.goBack': 'Zpět',
    'home.moreArticles': 'Více článků',
    'home.readMore': 'Číst více',
    'title.draft': 'Koncept',
    'title.minutes': 'minut',
    'title.words': 'slov',
    'pagination.total': 'Celkem',
    'pagination.unit': 'stránek',
    'post.lastUpdated': 'Naposledy aktualizováno',
    'remark.open': 'Otevřít',
    'more': 'Více',
    'footer.articleTitle': 'Název článku',
    'footer.articleAuthor': 'Autor článku',
    'footer.releaseTime': 'Čas vydání',
    'footer.originalLink': 'Původní odkaz',
    'footer.sitemap': 'Mapa stránek',
    'footer.busuanziSitePV': 'Zobrazení stránky:',
    'footer.busuanziSitePVUnit': '',
    'footer.busuanziSiteUV': 'Celkový počet návštěvníků:',
    'footer.busuanziSiteUVUnit': '',
    'nav.blog': 'Blog',
    'nav.feed': 'Feed',
    'nav.archive': 'Archiv',
    'nav.search': 'Hledat',
    'nav.about': 'O nás',
    'nav.language': 'Jazyk',
    'footer.copyright': 'Autorská práva'
  }
};

function updatePageTranslations() {
  const currentLang = window.getCurrentLanguage();
  const currentTranslations = translations[currentLang] || translations['en'];
  
  console.log('Updating translations for language:', currentLang);
  
  // Update elements with data-translate attributes
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (currentTranslations[key]) {
      element.textContent = currentTranslations[key];
    }
  });
  
  // Update placeholders with data-translate-placeholder attributes
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (currentTranslations[key]) {
      element.placeholder = currentTranslations[key];
    }
  });
  
  // More aggressive text replacement approach
  const elementsToCheck = document.querySelectorAll('*:not(script):not(style):not(code)');
  
  elementsToCheck.forEach(element => {
    // Only process text nodes that are direct children (not nested)
    for (let i = 0; i < element.childNodes.length; i++) {
      const node = element.childNodes[i];
      if (node.nodeType === Node.TEXT_NODE) {
        let content = node.textContent.trim();
        
        if (content) {
          // Replace known English text with current language
          Object.keys(translations['en']).forEach(key => {
            const englishText = translations['en'][key];
            const currentText = currentTranslations[key];
            
            if (content === englishText && currentText && englishText !== currentText) {
              node.textContent = node.textContent.replace(englishText, currentText);
            }
          });
        }
      }
    }
  });
  
  console.log('Translation update completed');
}

function reflectLanguagePreference() {
  document.firstElementChild.setAttribute("data-language", languageValue);
  
  // Update document lang attribute for accessibility
  document.documentElement.lang = languageValue;
  
  // Update translations on the page
  updatePageTranslations();
}

// set early so no page flashes / language is made aware
reflectLanguagePreference();

function init() {
  // Get current language from localStorage on page load
  const savedLang = localStorage.getItem("language");
  
  if (savedLang && ['ta', 'en', 'zh-cn', 'zh-Hant', 'cs'].includes(savedLang)) {
    languageValue = savedLang;
    console.log('Loaded saved language:', languageValue);
  }
  
  // set on load so screen readers can get the latest value
  reflectLanguagePreference();
  
  // Update translations immediately on page load
  updatePageTranslations();

  // Set up MutationObserver to handle dynamically added elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Check if any new elements with translation attributes were added
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const currentLang = window.getCurrentLanguage();
            const currentTranslations = translations[currentLang] || translations['en'];
            
            // Update any new elements with data-translate attributes
            const newTranslatableElements = node.querySelectorAll ? node.querySelectorAll('[data-translate]') : [];
            newTranslatableElements.forEach(element => {
              const key = element.getAttribute('data-translate');
              if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
              }
            });
          }
        });
      }
    });
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Listen for clicks on language dropdown items
  document.addEventListener('click', (e) => {
    console.log('Click detected on:', e.target);
    const target = e.target.closest('[data-language-link]');
    console.log('Found language link target:', target);
    
    if (target) {
      e.preventDefault();
      const newLanguage = target.getAttribute('data-language-code');
      console.log('New language from data-language-code:', newLanguage);
      
      if (newLanguage && newLanguage !== languageValue) {
        console.log('Changing language from', languageValue, 'to', newLanguage);
        languageValue = newLanguage;
        setLanguagePreference();
        
        // Update translations immediately without page reload
        updatePageTranslations();
      } else {
        console.log('No language change needed. Current:', languageValue, 'New:', newLanguage);
      }
    }
  });

  // Also handle clicks on spans and icons inside language links
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN' || e.target.tagName === 'I') {
      const parentLink = e.target.closest('[data-language-link]');
      if (parentLink) {
        e.preventDefault();
        const newLanguage = parentLink.getAttribute('data-language-code');
        
        if (newLanguage && newLanguage !== languageValue) {
          languageValue = newLanguage;
          setLanguagePreference();
          
          // Update translations immediately without page reload
          updatePageTranslations();
        }
      }
    }
  });
}

window.addEventListener('load', () => {
  init();
});