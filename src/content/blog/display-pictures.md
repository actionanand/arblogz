---
title: Pictures display
date: 2024-03-21
description: Showcase your favorite images in more ways than one!
tags: [feature]
category: astro
outdated: 2
hideDivider: true
toc: false
---

## Image Display Options

This blog supports multiple ways to display images with optional lazy loading for better performance.

## 🚀 Lazy Loading Feature

Lazy loading defers image loading until they're visible in the viewport, improving page load speed. Use the identifier `src="lazy"` for HTML or `![lazy](...)` for Markdown.

> Lazy loaded images always will be center aligned

### HTML Lazy Load (Recommended)

```html
<img src="lazy" data-src="/avatar.png" style="width:200px;">
```

<img src="lazy" data-src="/avatar.png" style="width:200px;">

**How it works:** The image initially shows a spinner, then loads the actual image from `data-src` when you scroll to it.

### Markdown Lazy Load

```md
![lazy](/avatar.png)
```

![lazy](/avatar.png)

**Syntax:** Use `lazy` as the alt text to enable lazy loading for markdown images.

## 🖼️ Regular Images (No Lazy Loading)

For images that should load immediately (like above-the-fold content):

### Display External Images

```md
![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Chicken_Biryani.jpg/960px-Chicken_Biryani.jpg)
```

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Chicken_Biryani.jpg/960px-Chicken_Biryani.jpg)

### Show Local Pictures

```md
![](/avatar.png)
```

![](/avatar.png)

### HTML Images (Direct Load)

```html
<img src="/avatar.png" style="width:200px;">
```

<img src="/avatar.png" style="width:200px;">

## 📐 Image Layouts with Lazy Loading

### One row, two columns

```html
<div class="image-cols-2">
  <img src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg">
</div>
```

<div class="image-cols-2">
  <img src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg">
</div>

**Note:** First image loads immediately, second uses lazy loading.

### One row, three columns

```html
<div class="image-cols-3">
  <img src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg">
  <img src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg">
</div>
```

<div class="image-cols-3">
  <img src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg">
  <img src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg">
</div>

### One row, four columns

```html
<div class="image-cols-4">
  <img class="object-fill" src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img class="object-fill" src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg">
  <img class="object-fill" src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg">
  <img src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
</div>
```

<div class="image-cols-4">
  <img class="object-fill" src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img class="object-fill" src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg">
  <img class="object-fill" src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg">
  <img src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
</div>

## 🎨 Advanced Layouts with TailwindCSS

Mix lazy loading with Tailwind utility classes for custom layouts:

```html
<div class="image-cols-2">
  <img src="lazy" class="object-fill" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img class="row-span-2 object-fill" src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8907866.jpeg">
  <img src="lazy" class="object-fill" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg">
</div>
```

<div class="image-cols-2">
<img src="lazy" class="object-fill" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
<img class="row-span-2 object-fill" src="lazy" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8907866.jpeg">
<img src="lazy" class="object-fill" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg">
</div>

## 📚 Quick Reference

### Pre-built Layout Classes

| Class | Description |
|-------|-------------|
| `image-cols-2` | One row, two columns |
| `image-cols-3` | One row, three columns |
| `image-cols-4` | One row, four columns |

### Lazy Loading Syntax

| Type | Syntax | Example |
|------|--------|---------|
| **HTML** | `<img src="lazy" data-src="...">` | `<img src="lazy" data-src="/avatar.png">` |
| **Markdown** | `![lazy](...)` | `![lazy](/avatar.png)` |

### Regular Images (No Lazy Load)

| Type | Syntax | Example |
|------|--------|---------|
| **HTML** | `<img src="...">` | `<img src="/avatar.png">` |
| **Markdown** | `![](...)` | `![](/avatar.png)` |

## 💡 Best Practices

1. **Use lazy loading for:**
   - Below-the-fold images
   - Image galleries with many images
   - Large hero images

2. **Don't use lazy loading for:**
   - Above-the-fold critical images
   - Small icons or logos
   - Images needed for LCP (Largest Contentful Paint)

3. **Combine with TailwindCSS:**
   - Add `object-fill`, `object-cover`, `rounded`, etc.
   - Use grid utilities like `row-span-2`, `col-span-2`
   - Responsive classes: `md:w-1/2`, `lg:w-1/3`

## 🎯 Performance Tips

- Lazy loading improves initial page load time
- Images load only when scrolled into view
- Reduces bandwidth usage for users
- Better Core Web Vitals scores