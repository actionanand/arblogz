# BaseHead check

Your `BaseHead.astro` should no longer load the old browser MathJax script.

Remove this old block if it is still present:

```astro
{
  mathjax && <script async type="text/javascript" src={`${getUrl("/javascript/load-mathjax.js")}`}></script>
}
```

Use the local KaTeX CSS component instead:

```astro
---
import KaTeXStyles from '@/components/KaTeXStyles.astro';
import MermaidRenderer from '@/components/MermaidRenderer.astro';
---

{
  mathjax && <KaTeXStyles />
}

{
  mermaid && <MermaidRenderer />
}
```

Do not run the old MathJax loader and KaTeX on the same article.
