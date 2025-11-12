# Related Articles Feature

A professional, easy-to-use feature that allows you to display related articles at the end of your blog posts.

## Features

- ✅ **Simple Configuration**: Add related articles via frontmatter
- ✅ **Maximum 5 Articles**: Automatically limits to first 5 articles if more are provided
- ✅ **Error Handling**: Invalid article slugs are skipped without throwing errors
- ✅ **Professional Design**: Beautiful card-based layout with hover effects
- ✅ **Responsive Grid**: Adapts layout based on number of articles and screen size
- ✅ **Multilingual Support**: Translations for all supported languages
- ✅ **Smart Display**: Shows category, date, title, description, and read more link
- ✅ **Automatic Linking**: Articles link to their full blog posts

## How to Use

### Basic Usage

Add the `relatedArticles` field to your blog post frontmatter with an array of article slugs:

```yaml
---
title: "Your Article Title"
description: "Your description"
date: 2025-11-07
relatedArticles: ["article-slug-1", "article-slug-2"]
---
```

### Slug Format

- Use the article **filename without extension**
- Both `article-name` and `article-name.md` work (extension is auto-removed)
- Example: For file `fish-names-multilingual.md`, use `"fish-names-multilingual"`

### Examples

#### Example 1: Two Related Articles
```yaml
---
title: "Groceries Guide - Multilingual"
relatedArticles: ["fish-names-multilingual", "meat-and-poultry-guide"]
---
```

#### Example 2: Maximum Articles (5)
```yaml
---
title: "My Article"
relatedArticles: 
  - "article-1"
  - "article-2"
  - "article-3"
  - "article-4"
  - "article-5"
---
```

#### Example 3: More than 5 (only first 5 will be shown)
```yaml
---
title: "Another Article"
relatedArticles: ["a1", "a2", "a3", "a4", "a5", "a6", "a7"]
# Only articles a1 through a5 will be displayed
---
```

## Error Handling

The feature is **forgiving** and won't break your site:

- ❌ **Invalid slug** → Article is skipped
- ❌ **Non-existent article** → Skipped without error
- ❌ **More than 5 articles** → Only first 5 are shown
- ❌ **Empty array** → Related articles section not displayed
- ❌ **No relatedArticles field** → Section not displayed

## Design Features

### Card Layout
- **Title**: Bold, 2-line clamp for long titles
- **Category Badge**: Displays primary category with accent color
- **Date**: Formatted publication date
- **Description**: 3-line clamp for excerpts
- **Read More Link**: Animated arrow on hover

### Responsive Grid
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns (or 2 for 4-5 articles)
- **Single Article**: Centered, full-width card

### Hover Effects
- ✨ Top border gradient animation
- ✨ Card lifts with shadow
- ✨ Title color changes
- ✨ Arrow slides on hover

## Technical Details

### Files Modified/Created

1. **Schema** (`src/content/config.ts`):
   - Added `relatedArticles: z.array(z.string()).max(5).optional().nullable()`

2. **Component** (`src/components/RelatedArticles.astro`):
   - New component handling article fetching and display
   - Validates slugs and filters out invalid articles
   - Professional card design with responsive grid

3. **Layout** (`src/layouts/BlogPost.astro`):
   - Integrated component after main content, before donations
   - Conditional rendering based on frontmatter

4. **Translations** (All `src/i18n/*.ts` files):
   - `post.relatedArticles`: "Related Articles" (in all languages)
   - `post.continueExploring`: "Continue exploring related topics"
   - `post.readArticle`: "Read article"

### Display Logic
```typescript
// Only displays if:
1. relatedArticles field exists in frontmatter
2. Array is not empty
3. At least one valid article slug is found

// Takes first 5 slugs
relatedSlugs.slice(0, 5)

// Filters valid articles only
.filter(post => post !== undefined)
```

## Best Practices

### ✅ Do:
- Use descriptive, related articles
- Keep to 2-3 articles for best user experience
- Test article slugs before deploying
- Use articles from similar categories

### ❌ Don't:
- Add more than 5 articles (extras ignored)
- Use articles that don't exist
- Include file extensions (`.md`, `.mdx`) - they're auto-removed
- Link unrelated articles just to fill space

## Multilingual Translations

All text is translated into supported languages:

| Language | Related Articles | Continue Exploring | Read Article |
|----------|------------------|-------------------|--------------|
| English | Related Articles | Continue exploring related topics | Read article |
| Tamil | தொடர்புடைய கட்டுரைகள் | தொடர்புடைய தலைப்புகளை தொடர்ந்து ஆராயுங்கள் | கட்டுரையைப் படியுங்கள் |
| Hindi | संबंधित लेख | संबंधित विषयों का अन्वेषण जारी रखें | लेख पढ़ें |
| Kannada | ಸಂಬಂಧಿತ ಲೇಖನಗಳು | ಸಂಬಂಧಿತ ವಿಷಯಗಳನ್ನು ಅನ್ವೇಷಿಸುವುದನ್ನು ಮುಂದುವರಿಸಿ | ಲೇಖನ ಓದಿ |
| Chinese (Simplified) | 相关文章 | 继续探索相关主题 | 阅读文章 |
| Chinese (Traditional) | 相關文章 | 繼續探索相關主題 | 閱讀文章 |
| French | Articles connexes | Continuez à explorer les sujets connexes | Lire l'article |
| Czech | Související články | Pokračujte v prozkoumávání souvisejících témat | Přečíst článek |
| Arabic | مقالات ذات صلة | تابع استكشاف المواضيع ذات الصلة | اقرأ المقال |

## Example Output

When you add related articles to your post, readers will see a beautiful section like this at the end:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ Related Articles
Continue exploring related topics

┌─────────────────────┐  ┌─────────────────────┐
│ [Category] Date     │  │ [Category] Date     │
│                     │  │                     │
│ Article Title 1     │  │ Article Title 2     │
│                     │  │                     │
│ Description text... │  │ Description text... │
│                     │  │                     │
│ Read article →      │  │ Read article →      │
└─────────────────────┘  └─────────────────────┘
```

## Questions?

If you have questions or need help, feel free to reach out via the contact form on the website!
