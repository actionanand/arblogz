# KaTeX ₹ warning — v2 fix

## Why the earlier workaround could still warn

The safest place to rewrite the unsupported rupee glyph is immediately before
`rehype-katex` renders HAST math nodes.

This v2 patch no longer relies on a separate remark-stage frontmatter check.
Instead, `rehypeConditionalKatex` does all three things in one place:

1. checks `mathjax: true`
2. replaces literal `₹` inside HAST math nodes with a KaTeX-safe placeholder
3. calls `rehype-katex`

This guarantees that KaTeX itself never receives U+20B9.

## Required source syntax

You can continue to author formulas naturally:

```mdx
$$
\text{₹5,00,000} \times 9\% \times \frac{6}{12}
=
\text{₹22,500}
$$
```

The literal `₹` remains in your `.md` / `.mdx` source.

## Percent signs

With `remark-math` + `rehype-katex`, use:

```tex
9\%
```

not:

```tex
9\\%
```

## Browserslist warning

This is unrelated to KaTeX.

Run:

```bash
npx update-browserslist-db@latest
```

If it updates `package-lock.json`, commit that change normally.

## Important

After changing Astro plugins, stop and restart the dev server. If Vite has stale
generated state, remove `.astro` and restart:

```bash
rm -rf .astro
npm run dev
```
