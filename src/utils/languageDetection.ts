// Language detection utility for server-side rendering
export function detectLanguageFromRequest(request: Request): string {
  const url = new URL(request.url);
  
  // Check URL parameters first
  const urlLang = url.searchParams.get('lang');
  if (urlLang && ['ta', 'en', 'zh-cn', 'zh-Hant', 'cs'].includes(urlLang)) {
    return urlLang;
  }
  
  // Check cookies for saved language preference
  const cookies = request.headers.get('cookie');
  if (cookies) {
    const cookieMatch = cookies.match(/language=([^;]+)/);
    if (cookieMatch) {
      const cookieLang = cookieMatch[1];
      if (['ta', 'en', 'zh-cn', 'zh-Hant', 'cs'].includes(cookieLang)) {
        return cookieLang;
      }
    }
  }
  
  // Fallback to English
  return 'en';
}

export function setGlobalLanguage(lang: string) {
  globalThis.currentLanguage = lang;
}