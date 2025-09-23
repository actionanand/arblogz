const primaryLanguage = "en"; // Default language

function getPreferLanguage() {
  // Get language data from local storage
  const currentLanguage = localStorage.getItem("language");
  
  // return language value in local storage if it is set
  if (currentLanguage && ['ta', 'en', 'zh-cn', 'zh-Hant', 'cs', 'fr', 'kn', 'hi', 'ar'].includes(currentLanguage)) {
    console.log('Found saved language:', currentLanguage);
    return currentLanguage;
  }

  // return primary language if it is set
  if (primaryLanguage) return primaryLanguage;

  // return user device's prefer language if supported
  const browserLang = navigator.language || navigator.languages[0];
  const langCode = browserLang.split('-')[0];
  
  // Check if browser language is supported
  if (['ta', 'en', 'zh', 'cs', 'fr', 'kn', 'hi', 'ar'].includes(langCode)) {
    // Map 'zh' to 'zh-cn' as default Chinese
    return langCode === 'zh' ? 'zh-cn' : langCode;
  }
  
  return "en";
}

let languageValue = getPreferLanguage();

function setLanguagePreference() {
  localStorage.setItem("language", languageValue);
  console.log('Saved language to localStorage:', languageValue);
  
  // Add a small delay to ensure DOM is fully ready, then force translation update
  setTimeout(() => {
    reflectLanguagePreference();
    
    // Force another translation update after a slight delay to catch any missed elements
    setTimeout(() => {
      updatePageTranslations();
    }, 100);
  }, 10);
}

// Make getCurrentLanguage available globally
window.getCurrentLanguage = function() {
  // Return the current languageValue which is synchronized with localStorage
  return languageValue;
};

// Make force update available globally for debugging
window.forceTranslationUpdate = function() {
  forceCompleteTranslationUpdate();
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
    'sidebar.uncategorized': 'மற்றவை',
    'sidebar.recentArticle': 'சமீபத்திய கட்டுரைகள்',
    'sidebar.recentComments': 'சமீபத்திய கருத்துக்கள்',
    'search.search': 'தேடல்',
    'search.placeholder': 'தலைப்பு அல்லது சுருக்கக் குறியீடுகளை உள்ளிடவும்',
    'search.searchLabelOne': 'கண்டுபிடிக்கப்பட்டது ',
    'search.searchLabelTwo': ' கட்டுரை(கள்) மொத்தம்',
    'search.labelOne': 'தேடல் முடிவுகள் ',
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
  },
  'fr': {
    'aside.caution': 'Attention',
    'aside.danger': 'Danger',
    'aside.note': 'Note',
    'aside.tip': 'Conseil',
    'sidebar.categories': 'Catégories',
    'sidebar.tags': 'Étiquettes',
    'sidebar.uncategorized': 'Non catégorisé',
    'sidebar.recentArticle': 'Articles récents',
    'sidebar.recentComments': 'Commentaires récents',
    'search.search': 'Rechercher',
    'search.placeholder': 'Rechercher du contenu...',
    'search.searchLabelOne': 'Trouvé',
    'search.searchLabelTwo': 'résultats',
    'search.labelOne': 'Résultats de recherche pour',
    'search.labelTwo': 'dans',
    'feed.previous': 'Précédent',
    'feed.next': 'Suivant',
    'feed.publishedIn': 'Publié dans',
    'blog.tableOfContent': 'Table des matières',
    'home.sticky': 'Épinglé',
    'home.goBack': 'Retour',
    'home.moreArticles': 'Plus d\'articles',
    'home.readMore': 'Lire la suite',
    'title.draft': 'Brouillon',
    'title.minutes': 'minutes',
    'title.words': 'mots',
    'pagination.total': 'Total',
    'pagination.unit': 'pages',
    'post.lastUpdated': 'Dernière mise à jour',
    'remark.open': 'Ouvrir',
    'more': 'Plus',
    'footer.articleTitle': 'Titre de l\'article',
    'footer.articleAuthor': 'Auteur de l\'article',
    'footer.releaseTime': 'Date de publication',
    'footer.originalLink': 'Lien original',
    'footer.sitemap': 'Plan du site',
    'footer.busuanziSitePV': 'Vues de la page:',
    'footer.busuanziSitePVUnit': '',
    'footer.busuanziSiteUV': 'Total des visiteurs:',
    'footer.busuanziSiteUVUnit': '',
    'nav.blog': 'Blog',
    'nav.feed': 'Flux',
    'nav.archive': 'Archives',
    'nav.search': 'Rechercher',
    'nav.about': 'À propos',
    'nav.language': 'Langue',
    'footer.copyright': 'Droits d\'auteur'
  },
  'kn': {
    'aside.caution': 'ಎಚ್ಚರಿಕೆ',
    'aside.danger': 'ಅಪಾಯ',
    'aside.note': 'ಗಮನಿಸಿ',
    'aside.tip': 'ಸಲಹೆ',
    'sidebar.categories': 'ವರ್ಗಗಳು',
    'sidebar.tags': 'ಟ್ಯಾಗ್‌ಗಳು',
    'sidebar.uncategorized': 'ವರ್ಗೀಕರಿಸದ',
    'sidebar.recentArticle': 'ಇತ್ತೀಚಿನ ಲೇಖನಗಳು',
    'sidebar.recentComments': 'ಇತ್ತೀಚಿನ ಕಾಮೆಂಟ್‌ಗಳು',
    'search.search': 'ಹುಡುಕಿ',
    'search.placeholder': 'ವಿಷಯವನ್ನು ಹುಡುಕಿ...',
    'search.searchLabelOne': 'ಕಂಡುಬಂದಿದೆ',
    'search.searchLabelTwo': 'ಫಲಿತಾಂಶಗಳು',
    'search.labelOne': 'ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳು',
    'search.labelTwo': 'ರಲ್ಲಿ',
    'feed.previous': 'ಹಿಂದಿನ',
    'feed.next': 'ಮುಂದಿನ',
    'feed.publishedIn': 'ಪ್ರಕಟಿಸಲಾಗಿದೆ',
    'blog.tableOfContent': 'ವಿಷಯ ಪಟ್ಟಿ',
    'home.sticky': 'ಅಂಟಿಕೊಂಡಿರುವ',
    'home.goBack': 'ಹಿಂದೆ ಹೋಗಿ',
    'home.moreArticles': 'ಹೆಚ್ಚಿನ ಲೇಖನಗಳು',
    'home.readMore': 'ಹೆಚ್ಚು ಓದಿ',
    'title.draft': 'ಕರಡು',
    'title.minutes': 'ನಿಮಿಷಗಳು',
    'title.words': 'ಪದಗಳು',
    'pagination.total': 'ಒಟ್ಟು',
    'pagination.unit': 'ಪುಟಗಳು',
    'post.lastUpdated': 'ಕೊನೆಯ ಬಾರಿ ನವೀಕರಿಸಲಾಗಿದೆ',
    'remark.open': 'ತೆರೆಯಿರಿ',
    'more': 'ಹೆಚ್ಚು',
    'footer.articleTitle': 'ಲೇಖನದ ಶೀರ್ಷಿಕೆ',
    'footer.articleAuthor': 'ಲೇಖನದ ಲೇಖಕ',
    'footer.releaseTime': 'ಬಿಡುಗಡೆ ಸಮಯ',
    'footer.originalLink': 'ಮೂಲ ಲಿಂಕ್',
    'footer.sitemap': 'ಸೈಟ್ ಮ್ಯಾಪ್',
    'footer.busuanziSitePV': 'ಪುಟ ವೀಕ್ಷಣೆಗಳು:',
    'footer.busuanziSitePVUnit': '',
    'footer.busuanziSiteUV': 'ಒಟ್ಟು ಭೇಟಿಗಾರರು:',
    'footer.busuanziSiteUVUnit': '',
    'nav.blog': 'ಬ್ಲಾಗ್',
    'nav.feed': 'ಫೀಡ್',
    'nav.archive': 'ಆರ್ಕೈವ್',
    'nav.search': 'ಹುಡುಕಿ',
    'nav.about': 'ಬಗ್ಗೆ',
    'nav.language': 'ಭಾಷೆ',
    'footer.copyright': 'ಹಕ್ಕುಸ್ವಾಮ್ಯ'
  },
  'hi': {
    'aside.caution': 'सावधानी',
    'aside.danger': 'खतरा',
    'aside.note': 'नोट',
    'aside.tip': 'सुझाव',
    'sidebar.categories': 'श्रेणियां',
    'sidebar.tags': 'टैग',
    'sidebar.uncategorized': 'अवर्गीकृत',
    'sidebar.recentArticle': 'हाल के लेख',
    'sidebar.recentComments': 'हाल की टिप्पणियां',
    'search.search': 'खोजें',
    'search.placeholder': 'सामग्री खोजें...',
    'search.searchLabelOne': 'मिला',
    'search.searchLabelTwo': 'परिणाम',
    'search.labelOne': 'खोज परिणाम',
    'search.labelTwo': 'में',
    'feed.previous': 'पिछला',
    'feed.next': 'अगला',
    'feed.publishedIn': 'में प्रकाशित',
    'blog.tableOfContent': 'विषय सूची',
    'home.sticky': 'चिपकाया गया',
    'home.goBack': 'वापस जाएं',
    'home.moreArticles': 'और लेख',
    'home.readMore': 'और पढ़ें',
    'title.draft': 'मसौदा',
    'title.minutes': 'मिनट',
    'title.words': 'शब्द',
    'pagination.total': 'कुल',
    'pagination.unit': 'पृष्ठ',
    'post.lastUpdated': 'अंतिम अपडेट',
    'remark.open': 'खोलें',
    'more': 'और',
    'footer.articleTitle': 'लेख शीर्षक',
    'footer.articleAuthor': 'लेख लेखक',
    'footer.releaseTime': 'प्रकाशन समय',
    'footer.originalLink': 'मूल लिंक',
    'footer.sitemap': 'साइट मैप',
    'footer.busuanziSitePV': 'पृष्ठ दृश्य:',
    'footer.busuanziSitePVUnit': '',
    'footer.busuanziSiteUV': 'कुल आगंतुक:',
    'footer.busuanziSiteUVUnit': '',
    'nav.blog': 'ब्लॉग',
    'nav.feed': 'फीड',
    'nav.archive': 'संग्रह',
    'nav.search': 'खोजें',
    'nav.about': 'के बारे में',
    'nav.language': 'भाषा',
    'footer.copyright': 'कॉपीराइट'
  },
  'ar': {
    'aside.caution': 'تحذير',
    'aside.danger': 'خطر',
    'aside.note': 'ملاحظة',
    'aside.tip': 'نصيحة',
    'sidebar.categories': 'الفئات',
    'sidebar.tags': 'العلامات',
    'sidebar.uncategorized': 'غير مصنف',
    'sidebar.recentArticle': 'المقالات الحديثة',
    'sidebar.recentComments': 'التعليقات الحديثة',
    'search.search': 'بحث',
    'search.placeholder': 'البحث عن المحتوى...',
    'search.searchLabelOne': 'تم العثور على',
    'search.searchLabelTwo': 'نتائج',
    'search.labelOne': 'نتائج البحث عن',
    'search.labelTwo': 'في',
    'feed.previous': 'السابق',
    'feed.next': 'التالي',
    'feed.publishedIn': 'نُشر في',
    'blog.tableOfContent': 'جدول المحتويات',
    'home.sticky': 'مثبت',
    'home.goBack': 'العودة',
    'home.moreArticles': 'المزيد من المقالات',
    'home.readMore': 'اقرأ المزيد',
    'title.draft': 'مسودة',
    'title.minutes': 'دقائق',
    'title.words': 'كلمات',
    'pagination.total': 'المجموع',
    'pagination.unit': 'صفحات',
    'post.lastUpdated': 'آخر تحديث',
    'remark.open': 'افتح',
    'more': 'المزيد',
    'footer.articleTitle': 'عنوان المقال',
    'footer.articleAuthor': 'مؤلف المقال',
    'footer.releaseTime': 'وقت النشر',
    'footer.originalLink': 'الرابط الأصلي',
    'footer.sitemap': 'خريطة الموقع',
    'footer.busuanziSitePV': 'مشاهدات الصفحة:',
    'footer.busuanziSitePVUnit': '',
    'footer.busuanziSiteUV': 'إجمالي الزوار:',
    'footer.busuanziSiteUVUnit': '',
    'nav.blog': 'المدونة',
    'nav.feed': 'الخلاصة',
    'nav.archive': 'الأرشيف',
    'nav.search': 'بحث',
    'nav.about': 'حول',
    'nav.language': 'اللغة',
    'footer.copyright': 'حقوق الطبع والنشر'
  }
};

function updatePageTranslations() {
  const currentLang = window.getCurrentLanguage();
  const currentTranslations = translations[currentLang] || translations['en'];
  
  console.log('Updating translations for language:', currentLang);
  console.log('Translation keys available:', Object.keys(currentTranslations).length);
  
  // Step 1: Update elements with data-translate attributes (highest priority - most reliable)
  const dataTranslateElements = document.querySelectorAll('[data-translate]');
  console.log('Found elements with data-translate:', dataTranslateElements.length);
  
  dataTranslateElements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (currentTranslations[key]) {
      console.log(`Updating data-translate: ${key} -> ${currentTranslations[key]}`);
      element.textContent = currentTranslations[key];
    }
  });
  
  // Step 2: Update placeholders with data-translate-placeholder attributes
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (currentTranslations[key]) {
      element.placeholder = currentTranslations[key];
    }
  });
  
  // Step 3: ONLY do careful text replacement for elements that are likely UI text
  // Avoid aggressive replacement that affects URLs, site names, etc.
  
  // Create exact phrase mapping for safe replacement
  const englishTranslations = translations['en'];
  const exactPhraseMap = new Map();
  
  // Build map from all source languages to current language
  Object.keys(translations).forEach(sourceLang => {
    if (sourceLang !== currentLang) {
      const sourceTranslations = translations[sourceLang];
      Object.keys(sourceTranslations).forEach(key => {
        const sourceText = sourceTranslations[key];
        const currentText = currentTranslations[key];
        if (sourceText && currentText && sourceText !== currentText) {
          // Include all translation pairs, but we'll be careful about where we apply them
          exactPhraseMap.set(sourceText.trim(), currentText.trim());
        }
      });
    }
  });
  
  console.log('Built exact phrase map with', exactPhraseMap.size, 'entries');
  
  // Step 4: Careful text replacement - only in specific safe elements
  const safeElements = document.querySelectorAll(`
    nav span:not([data-translate]),
    main span:not([data-translate]),
    header span:not([data-translate]),
    aside span:not([data-translate]),
    footer span:not([data-translate]),
    .sidebar span:not([data-translate]),
    .aside-widget:not([data-translate]),
    h1:not([data-translate]),
    h2:not([data-translate]),
    h3:not([data-translate]),
    h4:not([data-translate]),
    h5:not([data-translate]),
    h6:not([data-translate]),
    p:not([data-translate]),
    button:not([data-translate]),
    .menu-item:not([data-translate]),
    .nav-item:not([data-translate]),
    div:not([data-translate])
  `);
  
  safeElements.forEach(element => {
    // Skip elements that contain URLs or have specific classes that shouldn't be translated
    if (shouldSkipElement(element)) {
      return;
    }
    
    // Only process direct text content, not nested elements
    const textNodes = getDirectTextNodes(element);
    
    textNodes.forEach(textNode => {
      let content = textNode.textContent.trim();
      
      if (content && content.length > 0) {
        // Only replace exact phrase matches, and be smart about what we replace
        exactPhraseMap.forEach((targetText, sourceText) => {
          if (content === sourceText) {
            // Additional safety check - don't replace if it looks like it's part of a URL or technical content
            if (!shouldSkipTextReplacement(sourceText, textNode)) {
              console.log(`Safe replacement: "${sourceText}" -> "${targetText}"`);
              textNode.textContent = textNode.textContent.replace(sourceText, targetText);
            }
          }
        });
      }
    });
  });
  
  // Step 5: Handle special attributes (but only exact matches)
  document.querySelectorAll('[title]').forEach(element => {
    const title = element.getAttribute('title');
    exactPhraseMap.forEach((targetText, sourceText) => {
      if (title === sourceText) {
        element.setAttribute('title', targetText);
      }
    });
  });
  
  document.querySelectorAll('[aria-label]').forEach(element => {
    const ariaLabel = element.getAttribute('aria-label');
    exactPhraseMap.forEach((targetText, sourceText) => {
      if (ariaLabel === sourceText) {
        element.setAttribute('aria-label', targetText);
      }
    });
  });
  
  console.log('Translation update completed');
}

// Helper function to check if a word is too common to safely replace
function isCommonWord(word) {
  const commonWords = [
    'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'up', 'about', 'into', 'over', 'after',
    'the', 'a', 'an', 'and', 'or', 'but', 'so', 'yet', 'nor',
    'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
    'will', 'would', 'could', 'should', 'may', 'might', 'can', 'must',
    'this', 'that', 'these', 'those', 'here', 'there', 'where', 'when', 'what', 'how', 'why', 'who'
  ];
  return commonWords.includes(word);
}

// Helper function to determine if we should skip a specific text replacement
function shouldSkipTextReplacement(text, textNode) {
  // Skip single common words unless they're clearly UI elements
  const lowerText = text.toLowerCase();
  
  // Allow important UI terms even if they're single words
  const allowedSingleWords = [
    'categories', 'tags', 'home', 'about', 'contact', 'search', 'archive', 'articles', 'posts',
    'navigation', 'menu', 'sidebar', 'footer', 'header', 'comments', 'recent'
  ];
  
  // If it's a single word and not in our allowed list and is common, skip it
  if (!text.includes(' ') && isCommonWord(lowerText) && !allowedSingleWords.includes(lowerText)) {
    return true;
  }
  
  // Don't replace if the text contains site-specific terms
  if (text.includes('arblogz') || text.includes('github') || text.includes('.com') || text.includes('http')) {
    return true;
  }
  
  // Check if the text node is in a context that should be skipped
  const element = textNode.parentElement;
  if (element) {
    // Skip if it's in a link href or similar technical context
    if (element.tagName === 'A' && element.getAttribute('href')) {
      return true;
    }
    
    // Skip if it's in code or pre tags
    if (['CODE', 'PRE', 'SCRIPT', 'STYLE'].includes(element.tagName)) {
      return true;
    }
  }
  
  return false;
}

// Helper function to check if an element should be skipped
function shouldSkipElement(element) {
  // Skip if element or any parent has these classes or attributes
  const skipSelectors = [
    '[href]', // Links
    '[src]', // Images, scripts
    '.logo', '.brand', '.site-title', '.site-name',
    '.url', '.link', '.path',
    'pre', 'code', 'script', 'style',
    '[data-no-translate]'
  ];
  
  for (const selector of skipSelectors) {
    if (element.matches(selector) || element.closest(selector)) {
      return true;
    }
  }
  
  // Skip if text looks like a URL or email
  const text = element.textContent;
  if (text && (text.includes('http') || text.includes('.com') || text.includes('.org') || text.includes('@'))) {
    return true;
  }
  
  return false;
}

// Helper function to get only direct text nodes of an element
function getDirectTextNodes(element) {
  const textNodes = [];
  for (let i = 0; i < element.childNodes.length; i++) {
    const node = element.childNodes[i];
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      textNodes.push(node);
    }
  }
  return textNodes;
}

// Helper function to escape special regex characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Force complete re-translation of the entire page
function forceCompleteTranslationUpdate() {
  console.log('Forcing complete translation update...');
  
  // Update the page multiple times with delays to catch all elements
  updatePageTranslations();
  
  setTimeout(() => {
    updatePageTranslations();
  }, 50);
  
  setTimeout(() => {
    updatePageTranslations();
  }, 150);
  
  setTimeout(() => {
    updatePageTranslations();
  }, 300);
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
  
  if (savedLang && ['ta', 'en', 'zh-cn', 'zh-Hant', 'cs', 'fr', 'kn', 'hi', 'ar'].includes(savedLang)) {
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
        
        // Force complete translation update to catch all elements
        forceCompleteTranslationUpdate();
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
          
          // Force complete translation update to catch all elements
          forceCompleteTranslationUpdate();
        }
      }
    }
  });
}

window.addEventListener('load', () => {
  init();
});

// Debug function to test language switching
window.testLanguageSwitch = function(langCode) {
  console.log('Testing language switch to:', langCode);
  console.log('Available languages:', Object.keys(translations));
  
  if (translations[langCode]) {
    languageValue = langCode;
    setLanguagePreference();
    updatePageTranslations();
    console.log('Language switched successfully to:', langCode);
    console.log('Sample translation:', translations[langCode]['nav.blog']);
  } else {
    console.error('Language not found:', langCode);
  }
};