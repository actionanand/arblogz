# Translation System Guide

This directory contains the translation files for the multilingual blog system. Each language has its own dedicated file for better organization and maintainability.

## Current Languages

| Language | Code | File | Status |
|----------|------|------|---------|
| Tamil | `ta` | `ta.js` | ✅ Native |
| English | `en` | `en.js` | ✅ Global |
| Chinese (Simplified) | `zh-cn` | `zh-cn.js` | ✅ Active |
| Chinese (Traditional) | `zh-Hant` | `zh-Hant.js` | ✅ Active |
| Czech | `cs` | `cs.js` | ✅ Active |
| French | `fr` | `fr.js` | ✅ Active |
| Kannada | `kn` | `kn.js` | ✅ Active |
| Hindi | `hi` | `hi.js` | ✅ Active |
| Arabic | `ar` | `ar.js` | ✅ Active |

## How to Add a New Language (Example: Russian)

### Step 1: Create the Translation File

Create a new file: `public/translations/ru.js`

```javascript
// Russian translations
const ru = {
  'aside.caution': 'Осторожно',
  'aside.danger': 'Опасность',
  'aside.note': 'Заметка',
  'aside.tip': 'Совет',
  'sidebar.categories': 'Категории',
  'sidebar.tags': 'Теги',
  'sidebar.uncategorized': 'Без категории',
  'sidebar.recentArticle': 'Последние статьи',
  'sidebar.recentComments': 'Последние комментарии',
  'search.search': 'Поиск',
  'search.placeholder': 'Поиск контента...',
  'search.searchLabelOne': 'Найдено',
  'search.searchLabelTwo': 'результатов',
  'search.labelOne': 'Результаты поиска для',
  'search.labelTwo': 'в',
  'feed.previous': 'Предыдущая',
  'feed.next': 'Следующая',
  'feed.publishedIn': 'Опубликовано в',
  'blog.tableOfContent': 'Содержание',
  'home.sticky': 'Закреплено',
  'home.goBack': 'Назад',
  'home.moreArticles': 'Больше статей',
  'home.readMore': 'Читать далее',
  'title.draft': 'Черновик',
  'title.minutes': 'минут',
  'title.words': 'слов',
  'pagination.total': 'Всего',
  'pagination.unit': 'страниц',
  'post.lastUpdated': 'Последнее обновление',
  'remark.open': 'Открыть',
  'more': 'Больше',
  'footer.articleTitle': 'Название статьи',
  'footer.articleAuthor': 'Автор статьи',
  'footer.releaseTime': 'Время публикации',
  'footer.originalLink': 'Оригинальная ссылка',
  'footer.sitemap': 'Карта сайта',
  'footer.busuanziSitePV': 'Просмотры страниц:',
  'footer.busuanziSitePVUnit': '',
  'footer.busuanziSiteUV': 'Всего посетителей:',
  'footer.busuanziSiteUVUnit': '',
  'nav.blog': 'Блог',
  'nav.feed': 'Лента',
  'nav.archive': 'Архив',
  'nav.search': 'Поиск',
  'nav.about': 'О нас',
  'nav.language': 'Язык',
  'footer.copyright': 'Авторские права',
  'about.website.title': 'О сайте',
  'about.website.content': 'Демо',
  'about.me.title': 'Обо мне',
  'about.me.content': 'Демо',
  'about.other.title': 'Другая информация',
  'about.other.content': 'Это **тестовые** данные'
};
```

### Step 2: Update the Translation Loader

Edit `public/javascript/toggle-language.js` and find the `loadTranslations()` function:

1. **Add fetch for the new language:**
   ```javascript
   const translationPromises = [
     // ... existing fetches ...
     fetch('/translations/ru.js').then(r => r.text())  // Add this line
   ];
   ```

2. **Add to destructuring:**
   ```javascript
   const [taCode, enCode, zhCnCode, zhHantCode, csCode, frCode, knCode, hiCode, arCode, ruCode] = await Promise.all(translationPromises);
   ```

3. **Add to translations object:**
   ```javascript
   translations = {
     // ... existing languages ...
     'ru': evalTranslation(ruCode, 'ru')  // Add this line
   };
   ```

### Step 3: Update Language Validation

In the `init()` function, add the new language code to the validation array:

```javascript
if (savedLang && ['ta', 'en', 'zh-cn', 'zh-Hant', 'cs', 'fr', 'kn', 'hi', 'ar', 'ru'].includes(savedLang)) {
```

### Step 4: Add Language Option to UI

Update your language dropdown in the appropriate Astro components to include:

```html
<a data-language-link data-language-code="ru" href="#">
  🇷🇺 Русский
</a>
```

### Step 5: Update Astro i18n (Optional)

If using server-side i18n, also add to `src/i18n/` directory:

1. Create `src/i18n/ru.ts`
2. Update `src/i18n/utils.ts` to include Russian
3. Add Russian to any server-side translation configurations

## Translation Keys Reference

### Core UI Elements
- `nav.*` - Navigation items
- `sidebar.*` - Sidebar elements  
- `search.*` - Search functionality
- `feed.*` - Feed/pagination controls
- `blog.*` - Blog-specific elements
- `footer.*` - Footer elements

### Content Elements
- `aside.*` - Content callouts (note, tip, caution, danger)
- `title.*` - Title and meta information
- `pagination.*` - Page navigation
- `post.*` - Post-specific elements
- `home.*` - Homepage elements

## Best Practices

1. **Consistency**: Use the same translation keys across all languages
2. **Context**: Consider cultural context when translating
3. **Length**: Be mindful of text length differences between languages
4. **Testing**: Test the language switching thoroughly
5. **Fallback**: English is used as fallback for missing translations

## Debugging

- Use `window.forceTranslationUpdate()` in browser console to test
- Check browser console for translation loading errors
- Verify translation keys match exactly between languages

## Notes

- All files use simple variable assignment (not ES6 exports) for browser compatibility
- The system loads translations dynamically using fetch()
- Translations are cached after first load for performance
- The system supports immediate language switching without page refresh