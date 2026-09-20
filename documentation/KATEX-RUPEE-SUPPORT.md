# KaTeX ₹ support

This patch keeps the author-facing syntax exactly as wanted:

```mdx
---
mathjax: true
---

$$
\text{₹5,00,000} \times 9\% \times \frac{6}{12}
=
\text{₹22,500}
$$
```

## Why the patch is needed

KaTeX does not have built-in font metrics for the Indian rupee currency symbol
in its normal math/text font. Sending `₹` directly to KaTeX therefore produces:

```text
No character metrics for '₹' in style 'Main-Regular' and mode 'text'
```

The patch keeps `₹` in your MD/MDX source, but before KaTeX renders the math it
temporarily substitutes a supported one-character placeholder wrapped in a
custom KaTeX HTML class. CSS then paints the real `₹` glyph in that exact slot.

Result:

- source still contains `₹`
- rendered equation visibly contains `₹`
- no direct `₹` is sent to KaTeX's font-metric engine
- the repeated "No character metrics for '₹'" warning is avoided

## Important percentage syntax

With `remark-math + rehype-katex`, use normal TeX:

```tex
9\%
75\%
12\%
```

Do not use the earlier browser-MathJax workaround:

```tex
9\\%
```

## Dependencies

No new npm package is needed for the rupee patch itself.

It expects the KaTeX setup already discussed:

```bash
npm i remark-math rehype-katex katex mermaid
```

## Files

- `astro.config.js`
- `src/plugins/remark-katex-rupee.js`
- `src/plugins/rehype-conditional-katex.js`
- `src/components/KaTeXStyles.astro`
- `src/styles/katex-rupee.css`
