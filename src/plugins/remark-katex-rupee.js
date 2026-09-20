import { visit } from 'unist-util-visit';

/**
 * KaTeX's bundled Main-Regular font has no native metrics for the Indian
 * rupee sign (₹). Directly passing ₹ to KaTeX therefore prints a
 * "No character metrics" warning.
 *
 * Keep authors' MD/MDX source natural:
 *
 *   $$ \text{₹5,00,000} \times 9\% $$
 *
 * When `mathjax: true`, replace the literal ₹ only inside remark-math nodes
 * with a KaTeX-safe HTML-class placeholder. CSS paints the real ₹ glyph
 * using the browser/system font after KaTeX has completed layout.
 *
 * This avoids KaTeX's missing-glyph warning while preserving the visible
 * rupee symbol inside the rendered formula.
 */
export function remarkKatexRupee() {
  return function transformer(tree, file) {
    const frontmatter = file?.data?.astro?.frontmatter ?? {};

    if (frontmatter.mathjax !== true) {
      return;
    }

    visit(tree, ['math', 'inlineMath'], (node) => {
      if (typeof node.value !== 'string' || !node.value.includes('₹')) {
        return;
      }

      // KaTeX measures a normal supported character ("R"), while the CSS
      // pseudo-element displays ₹ in exactly that occupied slot.
      node.value = node.value.replaceAll(
        '₹',
        String.raw`\htmlClass{rupee-symbol}{R}`
      );
    });
  };
}
