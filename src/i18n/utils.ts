import { ta } from './ta'
import { en } from './en'
import { zhCn } from './zhCn'
import { cs } from './cs'
import { zhHant } from './zhHant'
import { ar } from './ar'
import { fr } from './fr'
import { hi } from './hi'
import { kn } from './kn'
import { config } from "../consts";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    getCurrentLanguage?: () => string;
  }
}

const ui = {
  ta, en, 'zh-cn': zhCn, 'zh-Hant': zhHant, cs, ar, fr, hi, kn
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key] || ui.en[key] || key; // fallback to English then key
  }
}

// Dynamic translation function that gets current language each time
export function t(key: string) {
  let currentLang = 'en';
  
  // For client-side: use the global function that reads from localStorage
  if (typeof window !== 'undefined' && window.getCurrentLanguage) {
    currentLang = window.getCurrentLanguage();
  } else {
    // For server-side: use static config.lang value
    currentLang = config.lang;
  }
  
  return ui[currentLang as keyof typeof ui][key] || ui.en[key] || key;
}

