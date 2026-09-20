# KaTeX + Mermaid MDX update

This update is prepared for:

- Repository: `actionanand/arblogz`
- Branch: `feature/4-blog-release-v2`
- Existing frontmatter flags retained:
  - `mathjax: true`
  - `mermaid: true`

## 1. Install dependencies

The ZIP intentionally does **not** modify `package.json` or `package-lock.json`.
Run this from the project root after applying the files:

```bash
npm i remark-math rehype-katex katex mermaid
```

Then restart Astro:

```bash
npm run dev
```

## 2. What changed

### Math / KaTeX

The old browser-side MathJax loader is no longer referenced.

Math now follows:

```text
.md / .mdx
   ↓
remark-math
   ↓
rehypeConditionalKatex
   ↓ only when mathjax: true
rehype-katex
   ↓
KaTeX HTML + local KaTeX CSS
```

`remark-math` is intentionally registered for all Markdown/MDX parsing.
This is required for MDX: without it, TeX braces such as `\text{Loan Rate}`
can be interpreted as JavaScript expressions by the MDX Acorn parser.

Actual KaTeX rendering remains controlled by:

```yaml
mathjax: true
```

The frontmatter key is deliberately not renamed so existing posts continue to work.

### Mermaid

The old Mermaid CDN script in `BaseHead.astro` is removed.

Mermaid now uses:

```js
import mermaid from 'mermaid';
```

through `src/components/MermaidRenderer.astro`.

A Mermaid fenced block is converted to a renderable diagram only when:

```yaml
mermaid: true
```

When `mermaid` is false or omitted, a `mermaid` fence remains a normal code block.

## 3. MDX example

```mdx
---
title: Math + React + Mermaid
date: 2026-09-20
mathjax: true
mermaid: true
---

import Highlight from "@/react/Highlight/Highlight.jsx";

<Highlight color="#25c2a0">
  React component inside MDX
</Highlight>

The loan formula is:

$$
\text{Loan Rate} = \text{Benchmark Rate} + \text{Spread}
$$

Inline math also works, for example $x^2 + y^2$.

```mermaid
flowchart LR
    A[Principal] --> B[Interest]
    B --> C[EMI]
```
```

## 4. Important TeX syntax after this migration

Use normal TeX escapes inside math:

```tex
\text{₹5,00,000}
\times
\frac{6}{12}
\approx
9\%
```

Do **not** keep the earlier browser-MathJax workaround `\\%`.

For example, use:

```tex
$$
\text{₹5,00,000} \times 9\% \times \frac{6}{12}
=
\text{₹22,500}
$$
```

## 5. Legacy file

After confirming the migration works, this old file can be deleted:

```text
public/javascript/load-mathjax.js
```

It is no longer referenced by the updated `BaseHead.astro`, so leaving it in place
temporarily is harmless.

## 6. Files in this update

- `astro.config.js`
- `src/components/BaseHead.astro`
- `src/components/KaTeXStyles.astro`
- `src/components/MermaidRenderer.astro`
- `src/plugins/rehype-conditional-katex.js`
- `src/plugins/reset-remark.js`

No `node_modules`, `package.json`, or `package-lock.json` is included/modified.
