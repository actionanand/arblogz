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
window.forceTranslationUpdate = async function() {
  await forceCompleteTranslationUpdate();
};

// Helper function to get current translation
window.getCurrentTranslation = function(key) {
  const currentLang = window.getCurrentLanguage();
  const currentTranslations = translations[currentLang] || translations['en'];
  return currentTranslations[key] || key;
};

// Translation cache and loading system
let translations = {};
let translationsLoaded = false;

// Load translations dynamically using fetch
async function loadTranslations() {
  if (translationsLoaded) return translations;
  
  try {
    // Load all translation files using fetch and evaluate them
    const translationPromises = [
      fetch('/translations/ta.js').then(r => r.text()),
      fetch('/translations/en.js').then(r => r.text()),
      fetch('/translations/zh-cn.js').then(r => r.text()),
      fetch('/translations/zh-Hant.js').then(r => r.text()),
      fetch('/translations/cs.js').then(r => r.text()),
      fetch('/translations/fr.js').then(r => r.text()),
      fetch('/translations/kn.js').then(r => r.text()),
      fetch('/translations/hi.js').then(r => r.text()),
      fetch('/translations/ar.js').then(r => r.text())
    ];

    const [taCode, enCode, zhCnCode, zhHantCode, csCode, frCode, knCode, hiCode, arCode] = await Promise.all(translationPromises);
    
    // Evaluate each translation file in a safe context
    const evalTranslation = (code, expectedVar) => {
      const context = {};
      const func = new Function('window', code + `; return ${expectedVar};`);
      return func(context);
    };

    translations = {
      'ta': evalTranslation(taCode, 'ta'),
      'en': evalTranslation(enCode, 'en'),
      'zh-cn': evalTranslation(zhCnCode, 'zhCn'),
      'zh-Hant': evalTranslation(zhHantCode, 'zhHant'),
      'cs': evalTranslation(csCode, 'cs'),
      'fr': evalTranslation(frCode, 'fr'),
      'kn': evalTranslation(knCode, 'kn'),
      'hi': evalTranslation(hiCode, 'hi'),
      'ar': evalTranslation(arCode, 'ar')
    };
    
    translationsLoaded = true;
    console.log('Translations loaded successfully');
    return translations;
  } catch (error) {
    console.error('Failed to load translations:', error);
    // Fallback to empty objects if loading fails
    translations = {
      'ta': {}, 'en': {}, 'zh-cn': {}, 'zh-Hant': {}, 'cs': {}, 'fr': {}, 'kn': {}, 'hi': {}, 'ar': {}
    };
    return translations;
  }
}

async function updatePageTranslations() {
  // Ensure translations are loaded
  await loadTranslations();
  
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
  
  // Step 2.5: Update template elements with data-translate-template attributes
  document.querySelectorAll('[data-translate-template]').forEach(element => {
    const key = element.getAttribute('data-translate-template');
    const dateValue = element.getAttribute('data-date-value');
    if (currentTranslations[key] && dateValue) {
      console.log(`Updating template: ${key} -> ${currentTranslations[key]}`);
      element.innerHTML = `${currentTranslations[key]}：${dateValue}`;
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
async function forceCompleteTranslationUpdate() {
  console.log('Forcing complete translation update...');
  
  // Update the page multiple times with delays to catch all elements
  await updatePageTranslations();
  
  setTimeout(async () => {
    await updatePageTranslations();
  }, 50);
  
  setTimeout(async () => {
    await updatePageTranslations();
  }, 150);
  
  setTimeout(async () => {
    await updatePageTranslations();
  }, 300);
}

function reflectLanguagePreference() {
  document.firstElementChild.setAttribute("data-language", languageValue);
  
  // Update document lang attribute for accessibility
  document.documentElement.lang = languageValue;
  
  // Update visual language selection state
  updateLanguageSelectionState();
  
  // Update translations on the page
  updatePageTranslations();
}

function updateLanguageSelectionState() {
  // Remove selected class from all language items
  const allLanguageItems = document.querySelectorAll('.language-item');
  allLanguageItems.forEach(item => {
    item.classList.remove('selected');
  });
  
  // Add selected class to current language items
  const selectedLanguageItems = document.querySelectorAll(`[data-language-code="${languageValue}"]`);
  selectedLanguageItems.forEach(item => {
    if (item.classList.contains('language-item')) {
      item.classList.add('selected');
    }
    // Also check parent li element
    const parentLi = item.closest('.language-item');
    if (parentLi) {
      parentLi.classList.add('selected');
    }
  });
  
  console.log('Updated language selection state for:', languageValue);
}

// set early so no page flashes / language is made aware
reflectLanguagePreference();

async function init() {
  // Load translations first
  await loadTranslations();
  
  // Get current language from localStorage on page load
  const savedLang = localStorage.getItem("language");
  
  if (savedLang && ['ta', 'en', 'zh-cn', 'zh-Hant', 'cs', 'fr', 'kn', 'hi', 'ar'].includes(savedLang)) {
    languageValue = savedLang;
    console.log('Loaded saved language:', languageValue);
  }
  
  // set on load so screen readers can get the latest value
  reflectLanguagePreference();
  
  // Update translations immediately on page load
  await updatePageTranslations();

  // Set up MutationObserver to handle dynamically added elements
  const observer = new MutationObserver(async (mutations) => {
    // Ensure translations are loaded
    await loadTranslations();
    
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
            
            // Update any new elements with data-translate-template attributes
            const newTemplateElements = node.querySelectorAll ? node.querySelectorAll('[data-translate-template]') : [];
            newTemplateElements.forEach(element => {
              const key = element.getAttribute('data-translate-template');
              const dateValue = element.getAttribute('data-date-value');
              if (currentTranslations[key] && dateValue) {
                element.innerHTML = `${currentTranslations[key]}：${dateValue}`;
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
  document.addEventListener('click', async (e) => {
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
        await forceCompleteTranslationUpdate();
      } else {
        console.log('No language change needed. Current:', languageValue, 'New:', newLanguage);
      }
    }
  });

  // Also handle clicks on spans and icons inside language links
  document.addEventListener('click', async (e) => {
    if (e.target.tagName === 'SPAN' || e.target.tagName === 'I') {
      const parentLink = e.target.closest('[data-language-link]');
      if (parentLink) {
        e.preventDefault();
        const newLanguage = parentLink.getAttribute('data-language-code');
        
        if (newLanguage && newLanguage !== languageValue) {
          languageValue = newLanguage;
          setLanguagePreference();
          
          // Force complete translation update to catch all elements
          await forceCompleteTranslationUpdate();
        }
      }
    }
  });
}

window.addEventListener('load', async () => {
  await init();
  
  // Ensure language selection state is updated after DOM is fully loaded
  setTimeout(() => {
    updateLanguageSelectionState();
  }, 100);
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
